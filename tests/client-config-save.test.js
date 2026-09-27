import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

/**
 * 配置面板保存链路的回归测试。
 *
 * 背景（本次修复的 bug）：`MemoryQueueView.saveConfig()` 手工拼了一个固定
 * patch 对象发给宿主，键列表是**手写**的——`perTurnWriteGuard` 与
 * `writeGuardThreshold` 有控件（draft 绑定、勾选立即生效）却没进 patch，
 * 于是「勾上 → 保存 → 刷新」变成未勾选：宿主 `updateRuntime()` 压根没收到
 * 这两个键，`plugin-state.json` 自然不落盘，GET 回显的仍是默认 false。
 *
 * 这类 bug 单元测试抓不到（宿主侧 validate/落盘都是好的，坏的是客户端
 * payload），所以这里做**静态契约断言**：面板里所有 draft 绑定键必须都出现
 * 在 saveConfig 的 patch 里，且 TS 源码与构建产物 lib/client.js 必须一致
 * （仓库把产物提交进版本库，两者漂移会让「改了源码没重建」同样漏字段）。
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE = join(ROOT, 'src', 'client', 'MemoryQueueView.tsx')
const BUNDLE = join(ROOT, 'lib', 'client.js')

/** 面板里每一个 draft 绑定键都必须随保存发出。 */
const PANEL_KEYS = [
  'reviewEnabled',
  'reviewInterval',
  'skillReviewEnabled',
  'perTurnProjectWrites',
  'perTurnDailyWrites',
  'perTurnKeyWrites',
  'perTurnWriteGuard',
  'writeGuardThreshold',
  'searchDocsEnabled',
  'searchDocsMode',
  'coiEnabled',
  'broadcastEnabled',
  'sessionSearchEnabled',
  'sessionEnabled',
  'promptsEnabled',
  'modelsEnabled',
  'uiSettingsEnabled',
  'bookmarkEnabled',
  'todoEnabled',
  'notifyEnabled',
  'syncEnabled',
  'canvasEnabled',
  'keyProgressiveDisclosure',
  'keyFullInjectThreshold',
  'keyFullInjectCharLimit',
]

/**
 * 截取「保存配置」时构造 patch 对象的那一段。
 *
 * 源码与构建产物的形态不同（产物被压缩：`const saveConfig` → `X=()=>{`、
 * `const patch` → `let r={}`），因此两侧用各自的定位串，不能共用一份字面量
 * ——原实现用同一组串查两边，产物侧必然 notEqual 失败（假失败）。
 */
function slice(text, from, to) {
  const start = text.indexOf(from)
  assert.notEqual(start, -1, `未找到起点（${from}）`)
  const end = to === null ? text.length : text.indexOf(to, start)
  assert.notEqual(end, -1, `未找到终点（${to}）`)
  return text.slice(start, end)
}

/** 源码：`const saveConfig = () => {` … 到 `void api<{ config: RuntimeConfig }>` 之前 */
const SOURCE_PATCH = slice(readFileSync(SOURCE, 'utf8'), 'const saveConfig', 'void api<{ config: RuntimeConfig }>')
/** 产物：从第一个 patch 对象构造处开始，截到 patch 对象结束（`}` 后紧随的调用）。
 *  用「键最密集的一段」作为窗口：从第一次出现 `reviewEnabled:` 起，向后取 4000 字符。 */
const BUNDLE_TEXT = readFileSync(BUNDLE, 'utf8')
const BUNDLE_PATCH = (() => {
  const i = BUNDLE_TEXT.indexOf('reviewEnabled:')
  assert.notEqual(i, -1, '产物中未找到 patch 构造段（reviewEnabled:）')
  return BUNDLE_TEXT.slice(Math.max(0, i - 200), i + 4000)
})()

test('配置面板 saveConfig 发送全部 draft 绑定键（源码 + 产物）', () => {
  for (const key of PANEL_KEYS) {
    assert.ok(
      new RegExp(`${key}:\\s*draft\\.${key}`).test(SOURCE_PATCH),
      `src/client/MemoryQueueView.tsx 的 saveConfig 漏发 ${key}——面板里改了它，保存后被宿主丢弃`,
    )
    // 产物侧：minify 会重命名局部变量（draft → m/r/…），因此匹配 `<任意标识符>.key`
    // 而不是写死 `draft.`（写死会在产物上假失败）。
    assert.ok(
      new RegExp(`${key}:\\s*[A-Za-z_$][\\w$]*\\.${key}\\b`).test(BUNDLE_PATCH),
      `lib/client.js（构建产物）的 saveConfig 漏发 ${key}——产物需与源码一同重建`,
    )
  }
})

test('源码与产物 saveConfig 的键集合完全一致（防「改了源码没重建」）', () => {
  // 源码：`key: draft.key`；产物：`key: <minifiedVar>.key`（变量名被压缩）
  const keysOfSource = (block) => [...block.matchAll(/([a-zA-Z]+):\s*draft\.\1\b/g)].map((m) => m[1]).sort()
  // 产物侧收紧：只认白名单键（否则 `entry: x.entry`、`message: y.message` 这类
  // 同名字段会被误当作保存键，造成假差异）。
  const KEY_SET = new Set(PANEL_KEYS)
  const keysOfBundle = (block) => [...block.matchAll(/([a-zA-Z]+):\s*[A-Za-z_$][\w$]*\.([a-zA-Z]+)\b/g)]
    .filter((m) => m[1] === m[2] && KEY_SET.has(m[1])).map((m) => m[1]).sort()
  const fromSource = keysOfSource(SOURCE_PATCH)
  const fromBundle = keysOfBundle(BUNDLE_PATCH)
  assert.deepEqual(fromBundle, fromSource, 'lib/client.js 与 src/client/MemoryQueueView.tsx 的保存键集合不一致')
  // 反向守卫：将来面板新增控件却忘记加进 patch 时，这里会因集合不等而失败
  assert.deepEqual(fromSource, [...PANEL_KEYS].sort(), '面板键清单与 saveConfig 实际发送的键不一致')
})

test('RuntimeConfig 接口字段与保存键一致（类型即契约）', () => {
  const source = readFileSync(SOURCE, 'utf8')
  const start = source.indexOf('interface RuntimeConfig')
  assert.notEqual(start, -1)
  const end = source.indexOf('\n}', start)
  const body = source.slice(start, end)
  const fields = [...body.matchAll(/^\s{2}([a-zA-Z]+)\??:/gm)].map((m) => m[1]).sort()
  const sent = [...SOURCE_PATCH.matchAll(/([a-zA-Z]+):\s*draft\.\1/g)].map((m) => m[1]).sort()
  assert.deepEqual(sent, fields, 'RuntimeConfig 声明了字段但 saveConfig 没发送（或反之）')
})
