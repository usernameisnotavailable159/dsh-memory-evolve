# UPSTREAM

## 上游
- URL: https://github.com/dsh-external/dsh-memory-evolve
- 角色: 上游原始项目

## 本仓库
- 私有镜像: git@github.com:usernameisnotavailable159/dsh-memory-evolve.git
- `origin` = 上游 `https://github.com/dsh-external/dsh-memory-evolve`
- `mine` = 私有镜像 `git@github.com:usernameisnotavailable159/dsh-memory-evolve.git`
- 手机路径: `~/projects/dsh-memory-evolve`（profile link）

## 分支策略
- `main`: 跟随上游 `origin/main`
- `phone-local-20260911`: 上游最新 `main` + 本地 `minify: true` 构建策略（最新 `7f1f879`）
- `phone-local-20260911-pre-rebase`: 旧本地快照 `786cc0c` 的备份 tag

## 同步策略
```sh
git fetch origin --tags
git checkout phone-local-20260911
git rebase origin/main
# 若 build.mjs 冲突：保留 minify: true；重新 node scripts/build.mjs
git push --force-with-lease mine phone-local-20260911:phone-local-20260911
```
- 手机上的工作树就是 profile 引用的插件目录；更新后重启 DSH web，并验证插件是否能加载。
- 本地差异应尽量保持最小：目前仅 `scripts/build.mjs` 的 `minify: true` 与重建后的 `lib/client.js`。

## 当前版本
- 上游 `main @ b4994fa`
- 本地 `phone-local-20260911 @ 7f1f879`
