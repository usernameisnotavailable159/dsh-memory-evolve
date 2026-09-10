window.__ModuleLoader__.load({ id: "dsh-memory-evolve", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
"use strict";var po=Object.defineProperty;var qi=Object.getOwnPropertyDescriptor;var Ui=Object.getOwnPropertyNames;var Vi=Object.prototype.hasOwnProperty;var Wi=(t,e)=>{for(var a in e)po(t,a,{get:e[a],enumerable:!0})},Ki=(t,e,a,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ui(e))!Vi.call(t,s)&&s!==a&&po(t,s,{get:()=>e[s],enumerable:!(o=qi(e,s))||o.enumerable});return t};var Ji=t=>Ki(po({},"__esModule",{value:!0}),t);var Ad={};Wi(Ad,{apply:()=>Pd,dshMobile:()=>Ed,en:()=>zi,inject:()=>Id,zh:()=>Oi});module.exports=Ji(Ad);var Xe=require("react");var jt=require("react");var Ea="dsh-memory-evolve:runtime-config-changed";function os(t){let e=!1,a,o=()=>{a?.(),a=t()};return{setEnabled(s){e=s===!0,e?a===void 0&&o():(a?.(),a=void 0)},refresh(){e&&a!==void 0&&o()},dispose(){e=!1,a?.(),a=void 0},enabled:()=>e}}var d=require("react/jsx-runtime");function Gi(t,e){let a=e.slice(5);return a==="life"?`${aa()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.life")}`:a==="work"?`${aa()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.work")}`:a==="project"?`${aa()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.project")}`:a==="daily"?`${aa()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.daily")}`:e}function ss(t,e){return e.startsWith("todo-")?Gi(t,e):e==="memory"?t("panel.suggestions.target.memory"):e==="user"?t("panel.suggestions.target.user"):e==="key"?t("panel.suggestions.target.key"):e}function Xi(t){return t.startsWith("todo-")?"todo":t}var Yi=["memory","user","key"];function Qi(t){let e=t.split(/[\\/]/).filter(a=>a.length>0);return e.length>0?e[e.length-1]:t}async function ua(t,e){let a=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!a.ok){let o=await a.json().catch(()=>({}));throw new Error(o.error??`HTTP ${a.status}`)}return a.json()}function Zi(t){let e=t.lines?.join(aa()?"; ":"\uFF1B")??(aa()?`${t.removed??0} handled`:`\u5DF2\u5904\u7406 ${t.removed??0} \u6761`);return aa()?`${e} (${t.remaining} remaining)`:`${e}\uFF08\u5269\u4F59 ${t.remaining} \u6761\uFF09`}function er(t){let e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}var aa=()=>typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en");function Vt(t){let{t:e,feature:a,onChanged:o}=t,[s,i]=(0,jt.useState)(null),[l,c]=(0,jt.useState)(null),[g,b]=(0,jt.useState)(null),[m,h]=(0,jt.useState)(null),[k,A]=(0,jt.useState)({}),[F,M]=(0,jt.useState)({}),[B,S]=(0,jt.useState)(null),[V,y]=(0,jt.useState)(!1),D=()=>{Promise.all([ua("/api/suggestions"),ua("/api/pending-skills"),ua("/api/config")]).then(([r,v,_])=>{let L=[...r.entries].map((G,q)=>({entry:G,origIndex:q})).sort((G,q)=>(q.entry.hits??1)-(G.entry.hits??1));i(L),c(v.entries),A({}),M({}),b(_.config),h(G=>G??_.config)}).catch(r=>{S({kind:"error",text:e("panel.config.failed",{message:r.message})})})};(0,jt.useEffect)(()=>{D()},[]);let w=(r,v)=>{y(!0);let _={};if(_.indices=v,r==="approve"){let L=v.map(q=>k[q]??"");L.some(q=>q!=="")&&(_.contents=L);let G={};for(let q of v){let ce=F[q],Re=(s??[]).find(Te=>Te.origIndex+1===q);ce!==void 0&&ce!==Re?.entry.target&&(G[String(q)]=ce)}Object.keys(G).length>0&&(_.targets=G)}ua(`/api/suggestions/${r}`,{method:"POST",body:JSON.stringify(_)}).then(L=>{S({kind:"ok",text:Zi(L)}),D(),o()}).catch(L=>{S({kind:"error",text:e("panel.config.failed",{message:L.message})})}).finally(()=>y(!1))},O=(r,v)=>{y(!0),ua(`/api/pending-skills/${r}`,{method:"POST",body:JSON.stringify({name:v})}).then(()=>{S({kind:"ok",text:e("panel.skills.done",{op:e(r==="approve"?"panel.skills.approve":"panel.skills.reject")})}),D(),o()}).catch(_=>{S({kind:"error",text:e("panel.config.failed",{message:_.message})})}).finally(()=>y(!1))},X=()=>{if(m===null)return;y(!0);let r={reviewEnabled:m.reviewEnabled,reviewInterval:m.reviewInterval,skillReviewEnabled:m.skillReviewEnabled,perTurnProjectWrites:m.perTurnProjectWrites,perTurnDailyWrites:m.perTurnDailyWrites,perTurnKeyWrites:m.perTurnKeyWrites,perTurnWriteGuard:m.perTurnWriteGuard,writeGuardThreshold:m.writeGuardThreshold,searchDocsEnabled:m.searchDocsEnabled,searchDocsMode:m.searchDocsMode,coiEnabled:m.coiEnabled,broadcastEnabled:m.broadcastEnabled,advisorEnabled:m.advisorEnabled,sessionSearchEnabled:m.sessionSearchEnabled,sessionEnabled:m.sessionEnabled,promptsEnabled:m.promptsEnabled,modelsEnabled:m.modelsEnabled,uiSettingsEnabled:m.uiSettingsEnabled,bookmarkEnabled:m.bookmarkEnabled,todoEnabled:m.todoEnabled,notifyEnabled:m.notifyEnabled,syncEnabled:m.syncEnabled,canvasEnabled:m.canvasEnabled,keyProgressiveDisclosure:m.keyProgressiveDisclosure,keyFullInjectThreshold:m.keyFullInjectThreshold,keyFullInjectCharLimit:m.keyFullInjectCharLimit};ua("/api/config",{method:"POST",body:JSON.stringify({patch:r})}).then(v=>{b(v.config),h(v.config),window.dispatchEvent(new CustomEvent(Ea,{detail:v.config})),S({kind:"ok",text:e("panel.config.saved")})}).catch(v=>{S({kind:"error",text:e("panel.config.failed",{message:v.message})})}).finally(()=>y(!1))},C=r=>{h(v=>v===null?v:{...v,...r})},u=(s??[]).map(r=>({entry:r.entry,index:r.origIndex+1})).filter(({entry:r})=>a==="todo-suggestions"?r.target.startsWith("todo-"):!r.target.startsWith("todo-"));return(0,d.jsxs)("div",{className:"me-panel",children:[B!==null&&(0,d.jsx)("div",{className:`me-notice me-notice-${B.kind}`,children:B.text}),a==="guide"&&(0,d.jsxs)("section",{className:"me-block",children:[(0,d.jsx)("div",{className:"me-block-head",children:(0,d.jsx)("h3",{className:"me-heading",children:e("panel.guide.title")})}),(0,d.jsx)("p",{className:"me-help",children:e("panel.guide.intro")}),(0,d.jsxs)("div",{className:"me-guide",children:[(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F9E0}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.memory.title")}),(0,d.jsx)("span",{children:e("panel.guide.memory.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F504}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.review.title")}),(0,d.jsx)("span",{children:e("panel.guide.review.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u2705"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.todo.title")}),(0,d.jsx)("span",{children:e("panel.guide.todo.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F6E0}\uFE0F"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.skill.title")}),(0,d.jsx)("span",{children:e("panel.guide.skill.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F50D}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.search.title")}),(0,d.jsx)("span",{children:e("panel.guide.search.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F680}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.coi.title")}),(0,d.jsx)("span",{children:e("panel.guide.coi.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F4CC}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.prompt.title")}),(0,d.jsx)("span",{children:e("panel.guide.prompt.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F9E9}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.models.title")}),(0,d.jsx)("span",{children:e("panel.guide.models.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F9D0}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.advisor.title")}),(0,d.jsx)("span",{children:e("panel.guide.advisor.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F4E8}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.broadcast.title")}),(0,d.jsx)("span",{children:e("panel.guide.broadcast.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F4E1}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.session.title")}),(0,d.jsx)("span",{children:e("panel.guide.session.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F9ED}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.sessionOrch.title")}),(0,d.jsx)("span",{children:e("panel.guide.sessionOrch.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F3A8}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.uiSettings.title")}),(0,d.jsx)("span",{children:e("panel.guide.uiSettings.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u2B50"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.bookmark.title")}),(0,d.jsx)("span",{children:e("panel.guide.bookmark.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F5BC}\uFE0F"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.canvas.title")}),(0,d.jsx)("span",{children:e("panel.guide.canvas.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F501}"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.sync.title")}),(0,d.jsx)("span",{children:e("panel.guide.sync.desc")})]})]}),(0,d.jsxs)("div",{className:"me-guide-row",children:[(0,d.jsx)("span",{className:"me-guide-icon",children:"\u{1F6E1}\uFE0F"}),(0,d.jsxs)("span",{className:"me-guide-body",children:[(0,d.jsx)("strong",{children:e("panel.guide.confirm.title")}),(0,d.jsx)("span",{children:e("panel.guide.confirm.desc")})]})]})]}),(0,d.jsx)("h4",{className:"me-guide-sub",children:e("panel.guide.best.title")}),(0,d.jsxs)("ul",{className:"me-guide-tips",children:[(0,d.jsx)("li",{children:e("panel.guide.best.1")}),(0,d.jsx)("li",{children:e("panel.guide.best.2")}),(0,d.jsx)("li",{children:e("panel.guide.best.3")}),(0,d.jsx)("li",{children:e("panel.guide.best.4")})]}),(0,d.jsx)("p",{className:"me-guide-loop",children:e("panel.guide.loop")})]}),(a==="suggestions"||a==="todo-suggestions")&&(0,d.jsxs)("section",{className:"me-block",children:[(0,d.jsxs)("div",{className:"me-block-head",children:[(0,d.jsx)("h3",{className:"me-heading",children:e(a==="todo-suggestions"?"panel.todoSuggestions.title":"panel.suggestions.title")}),u.length>0&&(0,d.jsx)("span",{className:"me-count",children:u.length})]}),(0,d.jsx)("p",{className:"me-help",children:e(a==="todo-suggestions"?"panel.todoSuggestions.help":"panel.suggestions.help")}),s===null?(0,d.jsx)("p",{className:"me-muted",children:e("panel.loading")}):u.length===0?(0,d.jsx)("p",{className:"me-empty",children:e(a==="todo-suggestions"?"panel.todoSuggestions.empty":"panel.suggestions.empty")}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("ul",{className:"me-list",children:u.map(({entry:r,index:v})=>(0,d.jsxs)("li",{className:"me-item",children:[(0,d.jsxs)("div",{className:"me-item-head",children:[(0,d.jsx)("span",{className:`me-badge me-badge-suggest me-badge-suggest-${Xi(r.target)}`,title:e("panel.suggestions.targetHint"),children:ss(e,r.target)}),r.cwd&&(r.target==="key"||r.target==="todo-project")&&(0,d.jsxs)("span",{className:"me-badge me-badge-project",title:e("panel.suggestions.projectHint",{path:r.cwd}),children:["\u{1F4C1} ",Qi(r.cwd)]}),(r.hits??1)>1&&(0,d.jsx)("span",{className:"me-badge me-badge-hits",title:e("panel.suggestions.hitsHint"),children:e("panel.suggestions.hits",{count:r.hits??1})}),(0,d.jsx)("span",{className:"me-item-time",title:r.time,children:er(r.time)}),(0,d.jsxs)("span",{className:"me-item-actions",children:[!r.target.startsWith("todo-")&&(0,d.jsx)("select",{className:"me-pick-target",title:e("panel.suggestions.targetHint"),value:F[v]??r.target,onChange:_=>M(L=>({...L,[v]:_.target.value})),children:Yi.map(_=>(0,d.jsx)("option",{value:_,children:ss(e,_)},_))}),(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:V,onClick:()=>w("approve",[v]),children:e("panel.suggestions.approve")}),(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-archive",disabled:V,title:e("panel.suggestions.archiveHint"),onClick:()=>w("archive",[v]),children:e("panel.suggestions.archive")}),(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:V,onClick:()=>w("reject",[v]),children:e("panel.suggestions.reject")})]})]}),(0,d.jsx)("textarea",{className:"me-item-edit",rows:3,value:k[v]??r.content,onChange:_=>A(L=>({...L,[v]:_.target.value}))}),(0,d.jsx)("p",{className:"me-item-reason",children:r.reason!==void 0&&r.reason!==""?r.reason:e("panel.suggestions.editHint")})]},`${r.time}-${v}`))}),(0,d.jsxs)("div",{className:"me-bulk",children:[(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:V,onClick:()=>w("approve",u.map(r=>r.index)),children:e("panel.suggestions.approveAll")}),(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:V,onClick:()=>w("reject",u.map(r=>r.index)),children:e("panel.suggestions.rejectAll")})]})]})]}),a==="skills"&&(0,d.jsxs)("section",{className:"me-block",children:[(0,d.jsxs)("div",{className:"me-block-head",children:[(0,d.jsx)("h3",{className:"me-heading",children:e("panel.skills.title")}),l!==null&&l.length>0&&(0,d.jsx)("span",{className:"me-count",children:l.length})]}),(0,d.jsx)("p",{className:"me-help",children:e("panel.skills.help")}),l===null?(0,d.jsx)("p",{className:"me-muted",children:e("panel.loading")}):l.length===0?(0,d.jsx)("p",{className:"me-empty",children:e("panel.skills.empty")}):(0,d.jsx)("ul",{className:"me-list",children:l.map(r=>(0,d.jsxs)("li",{className:"me-item",children:[(0,d.jsxs)("div",{className:"me-item-head",children:[(0,d.jsx)("span",{className:"me-badge me-badge-target",children:r.name}),(0,d.jsx)("span",{className:"me-item-time",children:e("panel.skills.pending")}),(0,d.jsxs)("span",{className:"me-item-actions",children:[(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:V,onClick:()=>O("approve",r.name),children:e("panel.skills.approve")}),(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:V,onClick:()=>O("reject",r.name),children:e("panel.skills.reject")})]})]}),(0,d.jsx)("p",{className:"me-item-reason",children:r.description})]},r.name))})]}),a==="config"&&(0,d.jsxs)("section",{className:"me-block",children:[(0,d.jsx)("div",{className:"me-block-head",children:(0,d.jsx)("h3",{className:"me-heading",children:e("panel.config.title")})}),(0,d.jsx)("p",{className:"me-help",children:e("panel.config.help")}),m===null?(0,d.jsx)("p",{className:"me-muted",children:e("panel.loading")}):(0,d.jsxs)("div",{className:"me-form",children:[(0,d.jsxs)("div",{className:"me-group",children:[(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.reviewEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.reviewEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.reviewEnabled,onChange:r=>C({reviewEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.reviewInterval"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.reviewInterval.hint")})]}),(0,d.jsx)("input",{type:"number",className:"me-input",min:1,value:m.reviewInterval,onChange:r=>C({reviewInterval:Number(r.target.value)})})]})]}),(0,d.jsxs)("div",{className:"me-group",children:[(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.skillReviewEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.skillReviewEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.skillReviewEnabled,onChange:r=>C({skillReviewEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnWriteGuard"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnWriteGuard.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.perTurnWriteGuard,onChange:r=>C({perTurnWriteGuard:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.writeGuardThreshold"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.writeGuardThreshold.hint")})]}),(0,d.jsx)("input",{type:"number",className:"me-input",min:1,value:m.writeGuardThreshold,onChange:r=>{let v=Number(r.target.value);C({writeGuardThreshold:Number.isFinite(v)&&v>=1?Math.floor(v):1})}})]})]}),(0,d.jsxs)("div",{className:"me-group",children:[(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnProjectWrites"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnProjectWrites.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.perTurnProjectWrites,onChange:r=>C({perTurnProjectWrites:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnDailyWrites"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnDailyWrites.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.perTurnDailyWrites,onChange:r=>C({perTurnDailyWrites:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnKeyWrites"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnKeyWrites.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.perTurnKeyWrites,onChange:r=>C({perTurnKeyWrites:r.target.checked})})]})]}),(0,d.jsxs)("div",{className:"me-group",children:[(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyProgressiveDisclosure"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyProgressiveDisclosure.hint")})]}),(0,d.jsxs)("select",{className:"me-todo-select",value:m.keyProgressiveDisclosure??"off",onChange:r=>C({keyProgressiveDisclosure:r.target.value}),children:[(0,d.jsx)("option",{value:"auto",children:e("panel.config.keyProgressiveDisclosure.auto")}),(0,d.jsx)("option",{value:"off",children:e("panel.config.keyProgressiveDisclosure.off")}),(0,d.jsx)("option",{value:"on",children:e("panel.config.keyProgressiveDisclosure.on")})]})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyFullInjectThreshold"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyFullInjectThreshold.hint")})]}),(0,d.jsx)("input",{type:"number",className:"me-input",min:1,value:m.keyFullInjectThreshold??3,onChange:r=>{let v=Number(r.target.value);C({keyFullInjectThreshold:Number.isFinite(v)&&v>=1?Math.floor(v):1})}})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyFullInjectCharLimit"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyFullInjectCharLimit.hint")})]}),(0,d.jsx)("input",{type:"number",className:"me-input",min:100,value:m.keyFullInjectCharLimit??1500,onChange:r=>{let v=Number(r.target.value);C({keyFullInjectCharLimit:Number.isFinite(v)&&v>=100?Math.floor(v):100})}})]})]}),(0,d.jsxs)("div",{className:"me-group",children:[(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.searchDocsEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.searchDocsEnabled.hint")})]}),(0,d.jsxs)("select",{className:"me-todo-select",value:m.searchDocsMode??(m.searchDocsEnabled?"all":"off"),onChange:r=>{let v=r.target.value;C({searchDocsMode:v,searchDocsEnabled:v!=="off"})},children:[(0,d.jsx)("option",{value:"all",children:e("panel.config.searchDocsMode.all")}),(0,d.jsx)("option",{value:"filename",children:e("panel.config.searchDocsMode.filename")}),(0,d.jsx)("option",{value:"content",children:e("panel.config.searchDocsMode.content")}),(0,d.jsx)("option",{value:"off",children:e("panel.config.searchDocsMode.off")})]})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.coiEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.coiEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.coiEnabled,onChange:r=>C({coiEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.broadcastEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.broadcastEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.broadcastEnabled,onChange:r=>C({broadcastEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.advisorEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.advisorEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.advisorEnabled,onChange:r=>C({advisorEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.notifyEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.notifyEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.notifyEnabled,onChange:r=>C({notifyEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.syncEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.syncEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.syncEnabled,onChange:r=>C({syncEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.canvasEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.canvasEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.canvasEnabled,onChange:r=>C({canvasEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.sessionEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.sessionEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.sessionEnabled,onChange:r=>C({sessionEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.sessionSearchEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.sessionSearchEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.sessionSearchEnabled,onChange:r=>C({sessionSearchEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.promptsEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.promptsEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.promptsEnabled,onChange:r=>C({promptsEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.modelsEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.modelsEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.modelsEnabled,onChange:r=>C({modelsEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.uiSettingsEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.uiSettingsEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.uiSettingsEnabled,onChange:r=>C({uiSettingsEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.bookmarkEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.bookmarkEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.bookmarkEnabled,onChange:r=>C({bookmarkEnabled:r.target.checked})})]}),(0,d.jsxs)("label",{className:"me-field",children:[(0,d.jsxs)("span",{className:"me-field-label",children:[e("panel.config.todoEnabled"),(0,d.jsx)("em",{className:"me-field-hint",children:e("panel.config.todoEnabled.hint")})]}),(0,d.jsx)("input",{type:"checkbox",className:"me-switch",checked:m.todoEnabled,onChange:r=>C({todoEnabled:r.target.checked})})]})]}),(0,d.jsx)("div",{className:"me-actions",children:(0,d.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:V,onClick:X,children:e("panel.config.save")})})]})]})]})}var Et=require("react/jsx-runtime");function kt({sections:t}){return(0,Et.jsx)("div",{className:"me-panel",children:t.map((e,a)=>(0,Et.jsxs)("section",{className:"me-block",children:[(0,Et.jsx)("div",{className:"me-block-head",children:(0,Et.jsxs)("h3",{className:"me-heading",children:[e.icon," ",e.title]})}),e.body!==void 0&&e.body!==""&&(0,Et.jsx)("p",{className:"me-help",children:e.body}),e.items!==void 0&&e.items.length>0&&(0,Et.jsx)("div",{className:"me-guide",children:e.items.map((o,s)=>(0,Et.jsxs)("div",{className:"me-guide-row",children:[(0,Et.jsx)("span",{className:"me-guide-icon",children:"\u2022"}),(0,Et.jsx)("span",{className:"me-guide-body",children:(0,Et.jsx)("span",{children:o})})]},s))})]},a))})}var se=require("react/jsx-runtime"),tr=`
\xA7
`,ns=/(?:^\[\d{4}-\d{2}-\d{2}[^\]]*\]\s*)?\[branch:([^\]]*)\]\s*/,is=/\[dsh-only\]\s*/,uo={project:/^\[(\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}(?::\d{2})?)\]\s*/,daily:/^\[(\d{1,2}:\d{2}(?::\d{2})?)\]\s*/,date:/^\[(\d{4}-\d{2}-\d{2})\]\s*/},ar=new Set(["memory","user","archive-memory","archive-user","archive-key","project","key","daily"]),or=new Set(["memory","user","project","key","daily"]),sr=new Set(["memory","user","key"]);function nr(t){let e=t.key==="project"?uo.project:t.key==="daily"?uo.daily:uo.date,a=[];for(let o of t.content.split(tr)){let s=o.trim();if(s==="")continue;let i=s,l=null,c=null,g=null,b=null,m=!1,h=e.exec(s);if(h!==null){if(l=h[1],s=s.slice(h[0].length),t.key==="daily"||t.key==="project"){let k=/^\[git ([^\]]+)\]\s*/.exec(s);k!==null&&(g=k[1],s=s.slice(k[0].length))}if(t.key==="daily"){let k=/^\[([^\]]+)\]\s*/.exec(s);k!==null&&(c=k[1],s=s.slice(k[0].length))}else if(t.key==="key"){let k=ns.exec(i);if(k!==null){let A=k[1].split(",").map(F=>F.trim()).filter(Boolean);b=A.length>0?A:null,s=s.replace(ns,"")}}is.test(s)&&(m=!0,s=s.replace(is,"")),s=s.replace(/^\[summary:[^\]]*\]\s*/,"")}a.push({time:l,tag:c,branch:g,text:s,branches:b,dshOnly:m,raw:i})}return a}function ir(t,e){return t.text.toLowerCase().includes(e)||(t.time??"").toLowerCase().includes(e)||(t.tag??"").toLowerCase().includes(e)}var bo=50;async function Ht(t,e){let a=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!a.ok){let o=await a.json().catch(()=>({}));throw new Error(o.error??`HTTP ${a.status}`)}return a.json()}var go=new Map,vo=new Map;function rr(t){return[{icon:"\u{1F9E0}",title:t("memoryTab.guide.tracks.title"),body:t("memoryTab.guide.tracks.body"),items:[t("memoryTab.guide.tracks.item1"),t("memoryTab.guide.tracks.item2"),t("memoryTab.guide.tracks.item3"),t("memoryTab.guide.tracks.item4"),t("memoryTab.guide.tracks.item5")]},{icon:"\u{1F4C2}",title:t("memoryTab.guide.files.title"),body:t("memoryTab.guide.files.body"),items:[t("memoryTab.guide.files.item1"),t("memoryTab.guide.files.item2"),t("memoryTab.guide.files.item3")]},{icon:"\u{1F33F}",title:t("memoryTab.guide.branch.title"),body:t("memoryTab.guide.branch.body"),items:[t("memoryTab.guide.branch.item1"),t("memoryTab.guide.branch.item2")]},{icon:"\u{1F6E0}\uFE0F",title:t("memoryTab.guide.maintain.title"),body:t("memoryTab.guide.maintain.body"),items:[t("memoryTab.guide.maintain.item1"),t("memoryTab.guide.maintain.item2"),t("memoryTab.guide.maintain.item3")]},{icon:"\u2705",title:t("memoryTab.guide.suggestions.title"),body:t("memoryTab.guide.suggestions.body"),items:[t("memoryTab.guide.suggestions.item1"),t("memoryTab.guide.suggestions.item2")]},{icon:"\u{1F6E1}\uFE0F",title:t("memoryTab.guide.confirm.title"),body:t("memoryTab.guide.confirm.body")}]}function rs(t){let{sessionId:e,t:a}=t,[o,s]=(0,Xe.useState)(null),[i,l]=(0,Xe.useState)(null),[c,g]=(0,Xe.useState)(null),[b,m]=(0,Xe.useState)(null),[h,k]=(0,Xe.useState)([]),[A,F]=(0,Xe.useState)("pretty"),[M,B]=(0,Xe.useState)(""),[S,V]=(0,Xe.useState)(0),[y,D]=(0,Xe.useState)(vo.get(e)??null),[w,O]=(0,Xe.useState)(""),[X,C]=(0,Xe.useState)(!1),[u,r]=(0,Xe.useState)({}),[v,_]=(0,Xe.useState)(!1),[L,G]=(0,Xe.useState)(!1),[q,ce]=(0,Xe.useState)([]),[Re,Te]=(0,Xe.useState)(null),[Ce,Q]=(0,Xe.useState)([]),[Ye,Ie]=(0,Xe.useState)(!1),[be,j]=(0,Xe.useState)(null),[ge,re]=(0,Xe.useState)(""),[Ue,Le]=(0,Xe.useState)(!1),[Ae,Ee]=(0,Xe.useState)(!1),[Ne,ye]=(0,Xe.useState)(go.get(e)??null),[we,Qe]=(0,Xe.useState)({suggestions:0}),Me=(0,Xe.useCallback)(()=>{Ht("/api/badge").then($=>Qe({suggestions:$.suggestions??0})).catch(()=>{})},[]);(0,Xe.useEffect)(()=>{Me();let $=window.setInterval(Me,3e4);return()=>window.clearInterval($)},[Me]),(0,Xe.useEffect)(()=>{D(vo.get(e)??null),ye(go.get(e)??null)},[e]),(0,Xe.useEffect)(()=>{go.set(e,Ne)},[Ne,e]),(0,Xe.useEffect)(()=>{vo.set(e,y)},[y,e]);let Ke=(0,Xe.useCallback)(()=>{s(null),Ht(`/api/memory-files?sessionId=${encodeURIComponent(String(e))}`).then($=>{s($.files),g($.cwd),m($.branch),k($.branches??[])}).catch($=>{l({kind:"error",text:$.message}),s([])})},[e]);(0,Xe.useEffect)(()=>{Ke()},[Ke]),(0,Xe.useEffect)(()=>{if(o===null||o.length===0||y!==null&&o.some(T=>T.key===y))return;let $=o.find(T=>T.available)??o[0];D($.key)},[o,y]);let R=$=>{l({kind:"ok",text:$}),window.setTimeout(()=>{l(T=>T?.text===$?null:T)},3500)},H=$=>{let T=$.key==="memory"?"memoryFile":$.key==="user"?"userFile":$.key==="daily"?"dailyFile":$.key==="project"||$.key==="key"?"projectsDir":$.key==="archive-memory"?"archiveMemoryFile":$.key==="archive-user"?"archiveUserFile":$.key==="archive-key"?"projectsDir":"agentsFile";Ht("/api/reveal",{method:"POST",body:JSON.stringify({target:T})}).then(()=>R(a("memoryTab.opened"))).catch(ne=>l({kind:"error",text:ne.message}))},De=()=>{let $=w.trim();$===""||X||(C(!0),Ht("/api/memory/key",{method:"POST",body:JSON.stringify({sessionId:String(e),content:$,branches:q,dshOnly:L})}).then(()=>{O(""),G(!1),Ke(),R(a("memoryTab.keyAdded"))}).catch(T=>{l({kind:"error",text:T.message})}).finally(()=>C(!1)))},Pe=$=>{let T=(u[$]??"").trim();T===""||v||(_(!0),Ht(`/api/memory/${$}`,{method:"POST",body:JSON.stringify({content:T})}).then(()=>{r(ne=>({...ne,[$]:""})),Ke(),R(a("memoryTab.memoryUserAdded"))}).catch(ne=>{l({kind:"error",text:ne.message})}).finally(()=>_(!1)))},We=$=>{Q(T=>T.includes($)?T.filter(ne=>ne!==$):[...T,$])},E=$=>{ce(T=>T.includes($)?T.filter(ne=>ne!==$):[...T,$])},Z=$=>{Te($.raw),Q($.branches??[])},ve=()=>{Re===null||fe===null||Ye||(Ie(!0),Ht("/api/key/scope",{method:"POST",body:JSON.stringify({sessionId:String(e),match:Re,branches:Ce})}).then(()=>{Te(null),Ke(),R(a("memoryTab.keyScopeSaved"))}).catch($=>{l({kind:"error",text:$.message})}).finally(()=>Ie(!1)))},Ve=$=>{fe===null||Ae||(Ee(!0),Ht("/api/memory/dsh-only",{method:"POST",body:JSON.stringify({sessionId:String(e),target:fe.key,match:$.raw,on:!$.dshOnly})}).then(()=>{Ke(),R($.dshOnly?a("memoryTab.dshOnlyRemoved"):a("memoryTab.dshOnlySet"))}).catch(T=>{l({kind:"error",text:T.message})}).finally(()=>Ee(!1)))},z=$=>{if(fe===null||Ae)return;let T=$.text.length>60?`${$.text.slice(0,60)}\u2026`:$.text;window.confirm(a("memoryTab.deleteConfirm",{snippet:T}))&&(Ee(!0),Ht("/api/memory/delete",{method:"POST",body:JSON.stringify({sessionId:String(e),target:fe.key,match:$.raw})}).then(()=>{Ke(),R(a("memoryTab.deleted"))}).catch(ne=>{l({kind:"error",text:ne.message})}).finally(()=>Ee(!1)))},Se=$=>{j($.raw),re($.text)},lt=()=>{if(be===null||fe===null||Ue)return;let $=ge.trim();if($!==""){if(sr.has(fe.key)){let T=$.length>60?`${$.slice(0,60)}\u2026`:$;if(!window.confirm(a("memoryTab.editConfirm",{snippet:T})))return}Le(!0),Ht("/api/memory/update",{method:"POST",body:JSON.stringify({sessionId:String(e),target:fe.key,match:be,content:ge})}).then(()=>{j(null),Ke(),R(a("memoryTab.updated"))}).catch(T=>{l({kind:"error",text:T.message})}).finally(()=>Le(!1))}},Je=($,T)=>{if(fe===null||Ae)return;if(T==="archive"){let Be=$.text.length>60?`${$.text.slice(0,60)}\u2026`:$.text;if(!window.confirm(a("memoryTab.archiveConfirm",{snippet:Be})))return}Ee(!0);let ne=T==="archive"?"/api/memory/archive":"/api/archive/promote",Oe=T==="archive"?fe.key:fe.key==="archive-memory"?"memory":fe.key==="archive-key"?"key":"user";Ht(ne,{method:"POST",body:JSON.stringify({sessionId:String(e),target:Oe,match:$.raw})}).then(()=>{Ke(),R(a(T==="archive"?"memoryTab.archived":"memoryTab.promoted"))}).catch(Be=>{l({kind:"error",text:Be.message})}).finally(()=>Ee(!1))},ut=M.trim().toLowerCase(),fe=(o??[]).find($=>$.key===y)??null,nt=null,wt=!1;if(fe!==null&&fe.available&&fe.exists)if(A==="raw"||!ar.has(fe.key))wt=ut!==""&&!fe.content.toLowerCase().includes(ut);else{let $=nr(fe);nt=ut===""?$:$.filter(T=>ir(T,ut)),wt=ut!==""&&nt.length===0}let I=nt===null?1:Math.max(1,Math.ceil(nt.length/bo)),me=Math.min(S,I-1),it=nt===null?null:[...nt].reverse().slice(me*bo,(me+1)*bo);return(0,se.jsxs)("div",{className:"mt-panel",children:[i!==null&&(0,se.jsx)("div",{className:`mt-notice mt-notice-${i.kind}`,children:i.text}),(0,se.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,se.jsx)("button",{type:"button",role:"tab","aria-selected":Ne==="guide",className:Ne==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>ye(Ne==="guide"?null:"guide"),children:a("memoryTab.feature.guide")}),(0,se.jsxs)("button",{type:"button",role:"tab","aria-selected":Ne==="suggestions",className:Ne==="suggestions"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>ye(Ne==="suggestions"?null:"suggestions"),children:[a("memoryTab.feature.suggestions"),we.suggestions>0&&(0,se.jsx)("span",{className:"mt-feature-count",children:we.suggestions})]}),(0,se.jsx)("span",{className:"mt-tab-sep",role:"presentation"}),o!==null&&(o??[]).map($=>(0,se.jsx)("button",{type:"button",role:"tab","aria-selected":$.key===y,className:$.key===y?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>{D($.key),ye(null),V(0)},children:$.title},$.key))]}),(0,se.jsxs)("p",{className:"mt-warning",children:["\u26A0\uFE0F ",a("memoryTab.warning")]}),c!==null&&(0,se.jsxs)("p",{className:"mt-cwd",children:[a("memoryTab.cwd"),": ",c]}),Ne!==null?Ne==="guide"?(0,se.jsx)(kt,{sections:rr(a)}):(0,se.jsx)(Vt,{t:a,feature:"suggestions",onChanged:()=>{Me(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}}):o===null?(0,se.jsx)("p",{className:"mt-muted",children:a("memoryTab.loading")}):(0,se.jsxs)(se.Fragment,{children:[(0,se.jsxs)("div",{className:"mt-toolbar",children:[(0,se.jsxs)("div",{className:"mt-view-toggle",role:"group",children:[(0,se.jsx)("button",{type:"button",className:A==="pretty"?"mt-view-btn mt-view-btn-active":"mt-view-btn",onClick:()=>F("pretty"),children:a("memoryTab.viewPretty")}),(0,se.jsx)("button",{type:"button",className:A==="raw"?"mt-view-btn mt-view-btn-active":"mt-view-btn",onClick:()=>F("raw"),children:a("memoryTab.viewRaw")})]}),(0,se.jsx)("input",{type:"search",className:"mt-search",value:M,placeholder:a("memoryTab.searchPlaceholder"),onChange:$=>{B($.target.value),V(0)}})]}),ut!==""&&wt&&(0,se.jsx)("p",{className:"mt-empty",children:a("memoryTab.noResults")}),fe!==null&&(0,se.jsxs)("div",{className:"mt-card",children:[(0,se.jsxs)("div",{className:"mt-card-head",children:[(0,se.jsx)("span",{className:"mt-card-title",children:fe.title}),(0,se.jsx)("span",{className:"mt-badge mt-badge-ro",children:a("memoryTab.readonly")}),nt!==null&&(0,se.jsx)("span",{className:"mt-badge mt-badge-count",children:a("memoryTab.entryCount",{count:nt.length})}),fe.path!==void 0&&(0,se.jsx)("span",{className:"mt-card-path",title:fe.path,children:fe.path}),fe.available&&(0,se.jsx)("span",{className:"mt-card-actions",children:(0,se.jsx)("button",{type:"button",className:"mt-btn",onClick:()=>H(fe),children:a("memoryTab.open")})})]}),(0,se.jsxs)("p",{className:"mt-card-desc",children:[a(`memoryTab.desc.${fe.key}`),fe.key==="key"&&b!==null&&(0,se.jsxs)("span",{className:"mt-card-desc-branch",children:[" ",a("memoryTab.keyBranchInfo",{branch:b})]})]}),fe.key==="key"&&fe.available&&(0,se.jsxs)("div",{className:"mt-key-add",children:[(0,se.jsx)("textarea",{className:"mt-key-input",rows:2,value:w,placeholder:a("memoryTab.keyAddPlaceholder"),onChange:$=>O($.target.value)}),h.length>0&&(0,se.jsxs)("div",{className:"mt-key-scope",children:[(0,se.jsxs)("span",{className:"mt-key-scope-label",children:[a("memoryTab.keyScope"),":"]}),(0,se.jsxs)("label",{className:"mt-scope-opt",children:[(0,se.jsx)("input",{type:"checkbox",checked:q.length===0,onChange:()=>ce([])}),a("memoryTab.keyScopeAll")]}),h.map($=>(0,se.jsxs)("label",{className:"mt-scope-opt",children:[(0,se.jsx)("input",{type:"checkbox",checked:q.includes($),onChange:()=>E($)}),$]},$))]}),(0,se.jsxs)("div",{className:"mt-key-add-foot",children:[(0,se.jsx)("span",{className:"mt-key-help",children:a("memoryTab.keyAddHelp")}),(0,se.jsxs)("label",{className:"mt-key-dsh-opt",title:a("memoryTab.dshOnlyHint"),children:[(0,se.jsx)("input",{type:"checkbox",checked:L,onChange:$=>G($.target.checked)}),a("memoryTab.dshOnlyAdd")]}),(0,se.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:X||w.trim()==="",onClick:De,children:a("memoryTab.keyAdd")})]})]}),(fe.key==="memory"||fe.key==="user")&&fe.available&&(0,se.jsxs)("div",{className:"mt-key-add",children:[(0,se.jsx)("textarea",{className:"mt-key-input",rows:2,value:u[fe.key]??"",placeholder:fe.key==="memory"?a("memoryTab.memoryAddPlaceholder"):a("memoryTab.userAddPlaceholder"),onChange:$=>r(T=>({...T,[fe.key]:$.target.value}))}),(0,se.jsxs)("div",{className:"mt-key-add-foot",children:[(0,se.jsx)("span",{className:"mt-key-help",children:a("memoryTab.memoryUserAddHelp")}),(0,se.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:v||(u[fe.key]??"").trim()==="",onClick:()=>{Pe(fe.key)},children:a("memoryTab.memoryAdd")})]})]}),fe.available?fe.exists?nt===null?(0,se.jsx)("pre",{className:"mt-content",children:fe.content}):(0,se.jsx)("div",{className:"mt-entries",children:(it??[]).map(($,T)=>(0,se.jsxs)("div",{className:"mt-entry",children:[(0,se.jsxs)("div",{className:"mt-entry-head",children:[$.time!==null&&(0,se.jsx)("span",{className:"mt-entry-time",children:$.time}),$.branch!==null&&(0,se.jsx)("span",{className:"mt-entry-branch mt-entry-branch-tag",title:a("memoryTab.gitBranch"),children:$.branch}),$.tag!==null&&(0,se.jsx)("span",{className:"mt-entry-tag",title:a("memoryTab.projectTag"),children:$.tag}),$.dshOnly&&(0,se.jsxs)("span",{className:"mt-entry-dsh-only",title:a("memoryTab.dshOnlyHint"),children:["\u{1F512} ",a("memoryTab.dshOnly")]}),fe.key==="key"&&h.length>0&&(0,se.jsxs)("button",{type:"button",className:$.branches===null?"mt-entry-branch mt-entry-branch-all":"mt-entry-branch",title:$.branches===null?a("memoryTab.keyScopeAllHint"):a("memoryTab.keyScopeHint"),onClick:()=>Z($),children:[a("memoryTab.keyScopeLabel"),": ",$.branches===null?a("memoryTab.keyScopeAll"):$.branches.join(", ")," \u25BE"]}),(0,se.jsxs)("span",{className:"mt-entry-ops",children:[(fe.key==="memory"||fe.key==="user"||fe.key==="key")&&(0,se.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:a("memoryTab.archive"),disabled:Ae,onClick:()=>Je($,"archive"),children:a("memoryTab.archive")}),(fe.key==="archive-memory"||fe.key==="archive-user"||fe.key==="archive-key")&&(0,se.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:a("memoryTab.promote"),disabled:Ae,onClick:()=>Je($,"promote"),children:a("memoryTab.promote")}),or.has(fe.key)&&be!==$.raw&&(0,se.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:a("memoryTab.edit"),disabled:Ae,onClick:()=>Se($),children:a("memoryTab.edit")}),(fe.key==="memory"||fe.key==="user"||fe.key==="key")&&(0,se.jsx)("button",{type:"button",className:`mt-btn mt-entry-op${$.dshOnly?" mt-entry-dsh-on":""}`,title:a("memoryTab.dshOnlyToggleHint"),disabled:Ae,onClick:()=>Ve($),children:$.dshOnly?a("memoryTab.dshOnlyOff"):a("memoryTab.dshOnlyOn")}),(0,se.jsx)("button",{type:"button",className:"mt-btn mt-entry-del",title:a("memoryTab.delete"),disabled:Ae,onClick:()=>z($),children:a("memoryTab.delete")})]})]}),be===$.raw?(0,se.jsxs)("div",{className:"mt-entry-edit",children:[(0,se.jsx)("textarea",{className:"mt-item-edit",rows:3,value:ge,onChange:ne=>re(ne.target.value.replaceAll("\xA7",""))}),(0,se.jsxs)("div",{className:"mt-entry-edit-row",children:[(0,se.jsx)("span",{className:"mt-entry-edit-hint",children:a("memoryTab.editHint")}),(0,se.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:Ue||ge.trim()==="",onClick:lt,children:a("memoryTab.save")}),(0,se.jsx)("button",{type:"button",className:"mt-btn",disabled:Ue,onClick:()=>j(null),children:a("memoryTab.cancel")})]})]}):(0,se.jsx)("p",{className:"mt-entry-text",children:$.text}),fe.key==="key"&&Re===$.raw&&h.length>0&&(0,se.jsxs)("div",{className:"mt-scope",children:[(0,se.jsxs)("span",{className:"mt-key-scope-label",children:[a("memoryTab.keyScope"),":"]}),(0,se.jsxs)("label",{className:"mt-scope-opt",children:[(0,se.jsx)("input",{type:"checkbox",checked:Ce.length===0,onChange:()=>Q([])}),a("memoryTab.keyScopeAll"),(0,se.jsx)("em",{className:"mt-scope-all-hint",children:a("memoryTab.keyScopeAllWeight")})]}),h.map(ne=>(0,se.jsxs)("label",{className:"mt-scope-opt",children:[(0,se.jsx)("input",{type:"checkbox",checked:Ce.includes(ne),onChange:()=>We(ne)}),ne]},ne)),(0,se.jsxs)("span",{className:"mt-scope-actions",children:[(0,se.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:Ye,onClick:ve,children:a("memoryTab.keyScopeSave")}),(0,se.jsx)("button",{type:"button",className:"mt-btn",disabled:Ye,onClick:()=>Te(null),children:a("memoryTab.keyScopeCancel")})]})]})]},T))}):(0,se.jsx)("pre",{className:"mt-content",children:a("memoryTab.empty")}):(0,se.jsx)("p",{className:"mt-muted",children:a("memoryTab.noCwd")}),nt!==null&&I>1&&(0,se.jsxs)("div",{className:"mt-pager",children:[(0,se.jsx)("button",{type:"button",className:"mt-btn",disabled:me<=0,onClick:()=>V(me-1),children:a("memoryTab.pagePrev")}),(0,se.jsx)("span",{className:"mt-pager-info",children:a("memoryTab.pageInfo",{page:me+1,total:I,count:nt.length})}),(0,se.jsx)("button",{type:"button",className:"mt-btn",disabled:me>=I-1,onClick:()=>V(me+1),children:a("memoryTab.pageNext")})]}),fe.truncated&&(0,se.jsx)("p",{className:"mt-muted",children:a("memoryTab.truncated")})]})]})]})}var Kt=require("react");var de=require("react"),qe=require("@deepseek-ai/dsh-client-ui-primitives"),N=require("react/jsx-runtime"),Bt="/skills-manager/api",ls="skills-manager.state.v1",Pa=class extends Error{constructor(a,o){super(o);this.status=a}status};async function Wt(t,e={}){let a;try{a=await fetch(t,e)}catch(s){throw s.name==="AbortError"?s:new Pa(0,s instanceof Error?s.message:String(s))}let o=await a.json().catch(()=>({}));if(!a.ok)throw new Pa(a.status,typeof o.error=="string"?o.error:`HTTP ${a.status}`);return o}function Ia(t){let e=t.replace(/\/+$/,"");if(e==="")return"/";let a=e.lastIndexOf("/");return a<0?e:e.slice(a+1)}function ds(t,e){let a=t.replace(/\/+$/,"");return a===""?`/${e}`:`${a}/${e}`}function ba(t,e){if(e===t)return"";let a=t==="/"?"/":`${t}/`;return e.startsWith(a)?e.slice(a.length):""}function cs(t,e){return e==null?"":e<1024?t("bytes",{size:e}):e<1024*1024?t("kib",{size:(e/1024).toFixed(1)}):t("mib",{size:(e/1024/1024).toFixed(1)})}function lr(t){let e=new Date(t),a=o=>String(o).padStart(2,"0");return`${e.getFullYear()}-${a(e.getMonth()+1)}-${a(e.getDate())} ${a(e.getHours())}:${a(e.getMinutes())}`}function dr(t){return t.startsWith("user")?" sb-badge--user":t.startsWith("project")?" sb-badge--project":t==="bundled"?" sb-badge--bundled":" sb-badge--other"}function cr({skill:t}){return t.resourceBase?.kind==="directory"?(0,N.jsx)(qe.IconFolderOpen16,{className:"sb-card-meta-icon"}):(0,N.jsx)(qe.IconDataOutline16,{className:"sb-card-meta-icon"})}var fo=20;function mr(t){let{t:e,skills:a,loading:o,error:s,query:i,sourceFilter:l,sourceCounts:c,statusFilter:g,selectedName:b,togglingName:m,page:h,onSourceFilter:k,onStatusFilter:A,onToggleDisabled:F,onSelect:M,onRetry:B,onPrevPage:S,onNextPage:V}=t,y=(0,de.useMemo)(()=>{let C=i.trim().toLowerCase();return a.filter(u=>{if(l!=="all"&&u.source!==l)return!1;let r=u.invocable&&!u.disabled;return g==="enabled"&&!r||g==="disabled"&&r?!1:C===""?!0:`${u.name} ${u.description} ${u.whenToUse??""}`.toLowerCase().includes(C)})},[a,i,l,g]),D=c.reduce((C,u)=>C+u.count,0),w=Math.max(1,Math.ceil(y.length/fo)),O=Math.min(Math.max(1,h),w),X=y.slice((O-1)*fo,O*fo);return(0,N.jsxs)("div",{className:"sb-section sb-section--skills",children:[(0,N.jsxs)("div",{className:"sb-pane-head",children:[(0,N.jsx)("span",{className:"sb-pane-title",children:e("pane.skills")}),(0,N.jsx)("span",{className:"sb-count",children:e("skills.count",{count:y.length})})]}),(0,N.jsxs)("div",{className:"sb-chips",children:[c.length>1&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("button",{type:"button",className:`sb-chip${l==="all"?" sb-chip--active":""}`,onClick:()=>k("all"),children:[e("filter.all")," ",D]}),c.map(({source:C,count:u})=>(0,N.jsxs)("button",{type:"button",className:`sb-chip${l===C?" sb-chip--active":""}`,onClick:()=>k(C),children:[C," ",u]},C)),(0,N.jsx)("span",{className:"sb-chips-sep"})]}),["all","enabled","disabled"].map(C=>(0,N.jsx)("button",{type:"button",className:`sb-chip${g===C?" sb-chip--active":""}`,onClick:()=>A(C),children:e(C==="all"?"filter.all":C==="enabled"?"status.enabled":"disabled.badge")},C))]}),(0,N.jsxs)("div",{className:"sb-list",children:[o&&(0,N.jsxs)("div",{className:"sb-note",children:[(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}),(0,N.jsx)("span",{children:e("loading.skills")})]}),!o&&s!==null&&(0,N.jsxs)("div",{className:"sb-note sb-note--error",children:[(0,N.jsx)(qe.IconWarningOutline16,{}),(0,N.jsx)("span",{children:s}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:B,children:e("refresh")})]}),!o&&s===null&&y.length===0&&(0,N.jsx)("div",{className:"sb-note",children:e("search.empty")}),!o&&s===null&&X.map(C=>(0,N.jsxs)("button",{type:"button",className:`sb-card${C.name===b?" sb-card--active":""}${C.disabled?" sb-card--disabled":""}`,onClick:()=>M(C),title:C.disabled?e("disabled.hint"):void 0,children:[(0,N.jsxs)("span",{className:"sb-card-top",children:[(0,N.jsx)("span",{className:"sb-card-name",children:C.name}),C.disabled&&(0,N.jsx)("span",{className:"sb-badge sb-badge--disabled",children:e("disabled.badge")}),(0,N.jsx)("span",{className:`sb-badge${dr(C.source)}`,children:e("source.badge",{source:C.source})})]}),(0,N.jsx)("span",{className:"sb-card-desc",children:C.description}),(0,N.jsxs)("span",{className:"sb-card-meta",children:[(0,N.jsx)(cr,{skill:C}),C.whenToUse!==null&&C.whenToUse!==""&&(0,N.jsxs)("span",{className:"sb-card-when",children:[(0,N.jsx)("span",{className:"sb-card-when-label",children:e("when.to.use")}),C.whenToUse]}),(0,N.jsx)("span",{className:"sb-spacer"}),C.protected?(0,N.jsx)("span",{className:"sb-badge sb-badge--protected",title:e("protected.hint"),children:e("protected.badge")}):(0,N.jsx)("span",{className:`sb-toggle${C.disabled?" sb-toggle--disabled":""}`,role:"button",tabIndex:0,title:C.disabled?e("enable"):e("disable"),onClick:u=>{u.stopPropagation(),F(C)},onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),u.stopPropagation(),F(C))},children:m===C.name?(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}):C.disabled?e("enable"):e("disable")})]})]},C.name))]}),w>1&&(0,N.jsxs)("div",{className:"sb-pager",children:[(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:O<=1,onClick:S,children:e("pager.prev")}),(0,N.jsx)("span",{className:"sb-pager-info",children:e("pager.page",{page:O,total:w})}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:O>=w,onClick:V,children:e("pager.next")})]})]})}function pr(t){let{t:e,hasSkill:a,root:o,rootOptions:s,cache:i,loadingDirs:l,dirErrors:c,expanded:g,selectedPath:b,crumbs:m,onRootChange:h,onJump:k,onToggleDir:A,onFileClick:F,onRetryDir:M}=t,B=(S,V)=>{let y={paddingLeft:8+V*14};if(l.has(S))return(0,N.jsxs)("div",{className:"sb-tree-note",style:y,children:[(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}),(0,N.jsx)("span",{children:e("loading.dir")})]});let D=c.get(S);if(D!==void 0)return(0,N.jsxs)("div",{className:"sb-tree-note sb-note--error",style:y,children:[(0,N.jsx)(qe.IconWarningOutline16,{}),(0,N.jsx)("span",{className:"sb-tree-errmsg",title:D,children:D}),(0,N.jsx)("button",{type:"button",className:"sb-tree-retry",onClick:()=>M(S),children:e("refresh")})]});let w=i.get(S);return w===void 0?null:w.length===0?(0,N.jsx)("div",{className:"sb-tree-note",style:y,children:e("no.entries")}):w.map(O=>{let X=ds(S,O.name);if(O.type==="dir"){let C=g.has(X);return(0,N.jsxs)("div",{children:[(0,N.jsxs)("button",{type:"button",className:"sb-tree-row",style:y,onClick:()=>A(X),title:X,children:[C?(0,N.jsx)(qe.IconChevronDownOutline14,{}):(0,N.jsx)(qe.IconChevronRightOutline14,{}),C?(0,N.jsx)(qe.IconFolderOpen16,{}):(0,N.jsx)(qe.IconFolderClose16,{}),(0,N.jsx)("span",{className:"sb-tree-name",children:O.name})]}),C&&B(X,V+1)]},X)}return(0,N.jsxs)("button",{type:"button",className:`sb-tree-row sb-tree-row--file${X===b?" sb-tree-row--active":""}`,style:{paddingLeft:8+V*14+14},onClick:()=>F(X),title:X,children:[(0,N.jsx)("span",{className:"sb-tree-name",children:O.name}),(0,N.jsx)("span",{className:"sb-tree-size",children:cs(e,O.size)})]},X)})};return(0,N.jsxs)("div",{className:"sb-section sb-section--files",children:[(0,N.jsx)("div",{className:"sb-pane-head",children:(0,N.jsx)("span",{className:"sb-pane-title",children:e("pane.files")})}),!a&&(0,N.jsx)("div",{className:"sb-note",children:e("no.skill.selected")}),a&&o===null&&(0,N.jsx)("div",{className:"sb-note",children:e("no.root")}),a&&o!==null&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"sb-root-bar",children:[(0,N.jsx)("span",{className:"sb-root-label",children:e("root.label")}),(0,N.jsx)("select",{className:"sb-root-select",value:o,title:o,onChange:S=>h(S.target.value),children:s.map(S=>(0,N.jsx)("option",{value:S,children:Ia(S)},S))})]}),(0,N.jsx)("div",{className:"sb-crumbs",children:m.map((S,V)=>(0,N.jsxs)("span",{className:"sb-crumb-seg",children:[V>0&&(0,N.jsx)(qe.IconChevronRightOutline14,{className:"sb-crumb-sep"}),(0,N.jsx)("button",{type:"button",className:"sb-crumb",onClick:()=>k(S.abs),children:S.label})]},S.abs))}),(0,N.jsx)("div",{className:"sb-tree",children:B(o,0)})]})]})}function ur(t){let{t:e,file:a,fileLoading:o,fileError:s,hasSelection:i,editing:l,draft:c,dirty:g,saveState:b,onDraftChange:m,onEdit:h,onCancel:k,onSave:A}=t,F=(0,de.useRef)(null),M=l?c:a?.content??"",B=(0,de.useMemo)(()=>M.split(`
`).length,[M]),S=(0,de.useMemo)(()=>{let D=[];for(let w=1;w<=B;w+=1)D.push(w);return D},[B]),V=D=>{(D.metaKey||D.ctrlKey)&&D.key.toLowerCase()==="s"&&(D.preventDefault(),A())},y;if(o)y=(0,N.jsxs)("div",{className:"sb-editor-empty",children:[(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}),(0,N.jsx)("span",{children:e("loading.dir")})]});else if(s!==null){let D=s.kind==="not.text"?e("not.text"):s.kind==="too.large"?e("too.large"):e("read.failed",{message:s.message});y=(0,N.jsxs)("div",{className:"sb-editor-empty sb-note--error",children:[(0,N.jsx)(qe.IconWarningOutline16,{}),(0,N.jsx)("span",{children:D})]})}else a===null?y=(0,N.jsx)("div",{className:"sb-editor-empty",children:e("no.file")}):l?y=(0,N.jsxs)("div",{className:"sb-editor-edit",children:[(0,N.jsx)("div",{className:"sb-gutter sb-gutter--edit",ref:F,"aria-hidden":!0,children:S.map(D=>(0,N.jsx)("div",{children:D},D))}),(0,N.jsx)("textarea",{className:"sb-textarea",value:c,spellCheck:!1,onChange:D=>m(D.target.value),onScroll:D=>{F.current!==null&&(F.current.scrollTop=D.target.scrollTop)},onKeyDown:V})]}):y=(0,N.jsxs)("div",{className:"sb-editor-scroll",children:[(0,N.jsx)("div",{className:"sb-gutter","aria-hidden":!0,children:S.map(D=>(0,N.jsx)("div",{children:D},D))}),(0,N.jsx)("pre",{className:"sb-pre",children:a.content})]});return(0,N.jsxs)("div",{className:"sb-main",children:[(0,N.jsxs)("div",{className:"sb-editor-topbar",children:[a!==null?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("span",{className:"sb-editor-filename",children:Ia(a.path)}),(0,N.jsx)("span",{className:"sb-editor-path",title:`${e("path")}: ${a.path}`,children:a.path})]}):(0,N.jsx)("span",{className:"sb-editor-path",children:e("no.file")}),(0,N.jsx)("span",{className:"sb-spacer"}),a!==null&&!l&&(0,N.jsxs)("button",{type:"button",className:"sb-btn",onClick:h,children:[(0,N.jsx)(qe.IconEditOutline16,{}),e("edit")]}),l&&g&&(0,N.jsx)("span",{className:"sb-dirty-dot",title:e("dirty.hint")}),l&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("button",{type:"button",className:"sb-btn sb-btn--primary",onClick:A,disabled:b==="saving"||!g,children:[(0,N.jsx)(qe.IconCheckOutline16,{}),e(b==="saving"?"saving":"save")]}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:k,children:e("cancel")})]})]}),y]})}function br(t){let{t:e,dirs:a,loading:o,error:s,input:i,mutating:l,onInputChange:c,onAdd:g,onRemove:b,onClose:m}=t;return(0,N.jsx)("div",{className:"sb-modal-overlay",onClick:m,children:(0,N.jsxs)("div",{className:"sb-modal sb-modal--dirs",onClick:h=>h.stopPropagation(),children:[(0,N.jsx)("div",{className:"sb-modal-title",children:e("dirs.title")}),(0,N.jsxs)("div",{className:"sb-modal-body",children:[(0,N.jsx)("p",{className:"sb-dirs-help",children:e("dirs.help")}),(0,N.jsxs)("div",{className:"sb-dirs-addrow",children:[(0,N.jsx)("input",{className:"sb-dirs-input",type:"text",value:i,placeholder:e("dirs.placeholder"),spellCheck:!1,onChange:h=>c(h.target.value),onKeyDown:h=>{h.key==="Enter"&&i.trim()!==""&&!l&&(h.preventDefault(),g())}}),(0,N.jsxs)("button",{type:"button",className:"sb-btn sb-btn--primary",disabled:l||i.trim()==="",onClick:g,children:[l?(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}):null,e("dirs.add")]})]}),s!==null&&(0,N.jsxs)("div",{className:"sb-action-error",children:[(0,N.jsx)(qe.IconWarningOutline16,{}),(0,N.jsx)("span",{className:"sb-action-error-text",children:s})]}),(0,N.jsxs)("div",{className:"sb-dirs-list",children:[o&&(0,N.jsxs)("div",{className:"sb-note",children:[(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}),(0,N.jsx)("span",{children:e("loading.skills")})]}),!o&&a.length===0&&(0,N.jsx)("div",{className:"sb-note",children:e("dirs.empty")}),!o&&a.map(h=>(0,N.jsxs)("div",{className:"sb-dirs-row",children:[(0,N.jsx)("span",{className:`sb-dirs-path${h.exists?"":" sb-dirs-path--missing"}`,title:h.path,children:h.path}),!h.exists&&(0,N.jsx)("span",{className:"sb-badge sb-badge--disabled",children:e("dirs.missing")}),h.exists&&(0,N.jsx)("span",{className:"sb-count",children:e("skills.count",{count:h.skillCount})}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:l,onClick:()=>b(h.path),children:e("dirs.remove")})]},h.path))]})]}),(0,N.jsx)("div",{className:"sb-modal-actions",children:(0,N.jsx)("button",{type:"button",className:"sb-btn",onClick:m,children:e("cancel")})})]})})}function ms({t,sessionId:e}){let[a,o]=(0,de.useState)([]),[s,i]=(0,de.useState)([]),[l,c]=(0,de.useState)(!0),[g,b]=(0,de.useState)(null),[m,h]=(0,de.useState)(""),[k,A]=(0,de.useState)("all"),[F,M]=(0,de.useState)("all"),[B,S]=(0,de.useState)(1),[V,y]=(0,de.useState)(null),[D,w]=(0,de.useState)(null),[O,X]=(0,de.useState)(null),[C,u]=(0,de.useState)(!1),[r,v]=(0,de.useState)([]),[_,L]=(0,de.useState)(!1),[G,q]=(0,de.useState)(null),[ce,Re]=(0,de.useState)(""),[Te,Ce]=(0,de.useState)(!1),[Q,Ye]=(0,de.useState)(null),[Ie,be]=(0,de.useState)(new Set),[j,ge]=(0,de.useState)(new Map),[re,Ue]=(0,de.useState)(new Set),[Le,Ae]=(0,de.useState)(new Map),[Ee,Ne]=(0,de.useState)(null),[ye,we]=(0,de.useState)(null),[Qe,Me]=(0,de.useState)(!1),[Ke,R]=(0,de.useState)(null),[H,De]=(0,de.useState)(!1),[Pe,We]=(0,de.useState)(""),[E,Z]=(0,de.useState)("idle"),[ve,Ve]=(0,de.useState)(""),[z,Se]=(0,de.useState)(null),[lt,Je]=(0,de.useState)(!1),ut=e?`&sessionId=${encodeURIComponent(e)}`:"",fe=e?`${Bt}/skills?sessionId=${encodeURIComponent(e)}`:`${Bt}/skills`,nt=(0,de.useRef)(null),wt=(0,de.useRef)(null),I=(0,de.useRef)(0),me=(0,de.useRef)(new Map),it=(0,de.useRef)(null),$=(0,de.useRef)(!1),T=H&&ye!==null&&Pe!==ye.content,ne=(0,de.useMemo)(()=>a.find(te=>te.name===O)??null,[a,O]),Oe=(0,de.useMemo)(()=>{let te=new Map;for(let pe of a)te.set(pe.source,(te.get(pe.source)??0)+1);return[...te.entries()].map(([pe,Ge])=>({source:pe,count:Ge}))},[a]);(0,de.useEffect)(()=>{S(1)},[m,k,F]);let Be=(0,de.useCallback)(te=>{T?Se(()=>te):te()},[T]),at=(0,de.useCallback)(async(te=!1)=>{nt.current?.abort();let pe=new AbortController;nt.current=pe,te||c(!0),b(null);try{let Ge=await Wt(fe,{signal:pe.signal});if(nt.current!==pe)return;o(Ge.skills),i(Ge.roots)}catch(Ge){if(Ge.name==="AbortError"||nt.current!==pe)return;b(Ge instanceof Error?Ge.message:String(Ge))}finally{nt.current===pe&&!te&&c(!1)}},[fe]);(0,de.useEffect)(()=>(at(),()=>{nt.current?.abort(),wt.current?.abort();for(let te of me.current.values())te.abort();it.current!==null&&clearTimeout(it.current)}),[at]);let St=(0,de.useCallback)(async te=>{if(V===null){y(te.name),w(null);try{let pe=te.disabled?"enable":"disable";await Wt(`${Bt}/skills/${pe}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:te.name})}),o(Ge=>Ge.map(Fe=>Fe.name===te.name?{...Fe,disabled:!Fe.disabled}:Fe)),await at(!0)}catch(pe){w(pe instanceof Error?pe.message:t("toggle.failed",{message:String(pe)}))}finally{y(null)}}},[V,at,t]),Ze=(0,de.useCallback)(async()=>{L(!0),q(null);try{let te=await Wt(`${Bt}/dirs`);v(te.dirs)}catch(te){q(te instanceof Error?te.message:String(te))}finally{L(!1)}},[]),Ct=(0,de.useCallback)(async()=>{let te=ce.trim();if(!(te===""||Te)){Ce(!0),q(null);try{await Wt(`${Bt}/dirs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:te})}),Re(""),await Ze(),await at(!0)}catch(pe){q(pe instanceof Error?pe.message:String(pe))}finally{Ce(!1)}}},[ce,Te,Ze,at]),Y=(0,de.useCallback)(async te=>{if(!Te){Ce(!0),q(null);try{await Wt(`${Bt}/dirs?path=${encodeURIComponent(te)}`,{method:"DELETE"}),await Ze(),await at(!0)}catch(pe){q(pe instanceof Error?pe.message:String(pe))}finally{Ce(!1)}}},[Te,Ze,at]),ae=(0,de.useCallback)(async(te,pe)=>{me.current.get(pe)?.abort();let Ge=new AbortController;me.current.set(pe,Ge),Ue(Fe=>new Set(Fe).add(pe)),Ae(Fe=>{let pt=new Map(Fe);return pt.delete(pe),pt});try{let Fe=ba(te,pe),pt=await Wt(`${Bt}/browse?root=${encodeURIComponent(te)}&path=${encodeURIComponent(Fe)}${ut}`,{signal:Ge.signal});if(me.current.get(pe)!==Ge)return;ge(ta=>new Map(ta).set(pe,pt.entries))}catch(Fe){if(Fe.name==="AbortError"||me.current.get(pe)!==Ge)return;Ae(pt=>new Map(pt).set(pe,Fe instanceof Error?Fe.message:String(Fe)))}finally{Ue(Fe=>{let pt=new Set(Fe);return pt.delete(pe),pt})}},[ut]);(0,de.useEffect)(()=>{Q!==null&&!j.has(Q)&&!re.has(Q)&&ae(Q,Q)},[Q,j,re,ae]);let le=(0,de.useCallback)(te=>{Q!==null&&(Ie.has(te)?be(pe=>{let Ge=new Set(pe);return Ge.delete(te),Ge}):(be(pe=>new Set(pe).add(te)),j.has(te)||ae(Q,te)))},[Q,Ie,j,ae]),p=(0,de.useCallback)(te=>{Q!==null&&ae(Q,te)},[Q,ae]),U=(0,de.useCallback)(async te=>{I.current+=1;let pe=I.current;wt.current?.abort();let Ge=new AbortController;wt.current=Ge,Ne(te),Me(!0),R(null),Z("idle"),Ve("");try{let Fe=await Wt(`${Bt}/read?path=${encodeURIComponent(te)}${ut}`,{signal:Ge.signal});if(pe!==I.current)return;we({path:Fe.path,content:Fe.content,size:Fe.size,mtime:Fe.mtime}),We(Fe.content),De(!1)}catch(Fe){if(Fe.name==="AbortError"||pe!==I.current)return;let pt=Fe instanceof Pa?Fe.status:0,ta=Fe instanceof Error?Fe.message:String(Fe);we(null),De(!1),R(pt===415?{kind:"not.text",message:ta}:pt===413?{kind:"too.large",message:ta}:{kind:"read.failed",message:ta})}finally{pe===I.current&&Me(!1)}},[ut]),ke=(0,de.useCallback)(te=>{Be(()=>{U(te)})},[Be,U]),$e=(0,de.useCallback)((te,pe,Ge)=>{X(te.name);let Fe=te.resourceBase?.kind==="directory"?te.resourceBase.path:null;Ye(pe!==void 0?pe:Fe),be(Ge??new Set),ge(new Map),Ae(new Map),Ne(null),we(null),R(null),De(!1),Z("idle")},[]),xt=(0,de.useCallback)(te=>{te.name!==O&&Be(()=>$e(te))},[O,Be,$e]),Pt=(0,de.useCallback)(te=>{te!==Q&&Be(()=>{Ye(te),be(new Set),ge(new Map),Ae(new Map),Ne(null),we(null),R(null),De(!1),Z("idle")})},[Q,Be]),At=(0,de.useMemo)(()=>Q===null?null:Ee!==null&&ba(Q,Ee)!==""?Ee.slice(0,Ee.lastIndexOf("/")):Q,[Q,Ee]),Ca=(0,de.useMemo)(()=>{if(Q===null||At===null)return[];let te=[{label:Ia(Q),abs:Q}],pe=ba(Q,At),Ge=Q;for(let Fe of pe===""?[]:pe.split("/"))Ge=ds(Ge,Fe),te.push({label:Fe,abs:Ge});return te},[Q,At]),Ft=(0,de.useCallback)(te=>{if(Q===null)return;be(Ge=>{let Fe=new Set(Ge),pt=te;for(;pt!==Q&&ba(Q,pt)!=="";)Fe.add(pt),pt=pt.slice(0,pt.lastIndexOf("/"));return Fe});let pe=te;for(;pe!==Q&&ba(Q,pe)!=="";)!j.has(pe)&&!re.has(pe)&&ae(Q,pe),pe=pe.slice(0,pe.lastIndexOf("/"))},[Q,j,re,ae]),$i=(0,de.useCallback)(()=>{ye!==null&&(We(ye.content),De(!0),Z("idle"),Ve(""))},[ye]),Fi=(0,de.useCallback)(()=>{Be(()=>{De(!1),ye!==null&&We(ye.content),Z("idle"),Ve("")})},[Be,ye]),Hi=(0,de.useCallback)(async()=>{if(!(ye===null||E==="saving"||!T)){Z("saving"),Ve("");try{let te=await Wt(`${Bt}/write?path=${encodeURIComponent(ye.path)}${ut}`,{method:"PUT",headers:{"Content-Type":"text/plain; charset=utf-8"},body:Pe});we({path:te.path,content:Pe,size:te.size,mtime:te.mtime}),Z("saved"),it.current!==null&&clearTimeout(it.current),it.current=setTimeout(()=>Z("idle"),2500)}catch(te){if(te.name==="AbortError")return;Z("error"),Ve(te instanceof Error?te.message:String(te))}}},[ye,Pe,T,E,ut]),Bi=(0,de.useCallback)(async()=>{if(Je(!0),ge(new Map),Ae(new Map),await at(),Q!==null){ae(Q,Q);for(let te of Ie)te!==Q&&ba(Q,te)!==""&&ae(Q,te)}Ee!==null&&!H&&U(Ee),Je(!1)},[at,Q,Ie,Ee,H,ae,U]);(0,de.useEffect)(()=>{if(!($.current||a.length===0)){$.current=!0;try{let te=localStorage.getItem(ls);if(te===null)return;let pe=JSON.parse(te);if(typeof pe.skill!="string")return;let Ge=a.find(ta=>ta.name===pe.skill);if(Ge===void 0)return;let Fe=Ge.resourceBase?.kind==="directory"?Ge.resourceBase.path:null,pt=typeof pe.root=="string"?pe.root:Fe;$e(Ge,pt,new Set(Array.isArray(pe.expanded)?pe.expanded:[])),pt!==null&&typeof pe.file=="string"&&U(pe.file)}catch{}}},[a,$e,U]),(0,de.useEffect)(()=>{if(!$.current)return;let te={skill:O,root:Q,expanded:[...Ie],file:Ee};try{localStorage.setItem(ls,JSON.stringify(te))}catch{}},[O,Q,Ie,Ee]);let _i=(0,de.useMemo)(()=>{let te=[];Q!==null&&te.push(Q);for(let pe of s)te.includes(pe)||te.push(pe);return te},[Q,s]);return(0,N.jsxs)("div",{className:"sb-root",children:[(0,N.jsxs)("div",{className:"sb-body",children:[(0,N.jsxs)("div",{className:"sb-side",children:[(0,N.jsxs)("div",{className:"sb-side-toolbar",children:[(0,N.jsxs)("div",{className:"sb-search",children:[(0,N.jsx)(qe.IconSearchOutline16,{className:"sb-search-icon"}),(0,N.jsx)("input",{className:"sb-search-input",type:"text",value:m,placeholder:t("search.placeholder"),onChange:te=>h(te.target.value)}),m!==""&&(0,N.jsx)("button",{type:"button",className:"sb-search-clear",onClick:()=>h(""),"aria-label":t("cancel"),children:(0,N.jsx)(qe.IconCloseOutline16,{})})]}),(0,N.jsx)("button",{type:"button",className:"sb-icon-btn",onClick:()=>{u(!0),q(null),Ze()},title:t("manage.dirs"),children:(0,N.jsx)(qe.IconFolderOpen16,{})}),(0,N.jsx)("button",{type:"button",className:"sb-icon-btn",onClick:()=>{Bi()},disabled:lt,title:t("refresh"),children:lt?(0,N.jsx)(qe.IconLoadingOutline16,{className:"sb-spin"}):(0,N.jsx)(qe.IconRefreshOutline16,{})})]}),(0,N.jsx)(mr,{t,skills:a,loading:l,error:g,query:m,sourceFilter:k,sourceCounts:Oe,statusFilter:F,selectedName:O,togglingName:V,page:B,onSourceFilter:A,onStatusFilter:M,onToggleDisabled:te=>{St(te)},onSelect:xt,onRetry:()=>{at()},onPrevPage:()=>S(te=>Math.max(1,te-1)),onNextPage:()=>S(te=>te+1)}),D!==null&&(0,N.jsxs)("div",{className:"sb-action-error",children:[(0,N.jsx)(qe.IconWarningOutline16,{}),(0,N.jsx)("span",{className:"sb-action-error-text",children:D}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:()=>w(null),children:(0,N.jsx)(qe.IconCloseOutline16,{})})]}),(0,N.jsx)(pr,{t,hasSkill:ne!==null,root:Q,rootOptions:_i,cache:j,loadingDirs:re,dirErrors:Le,expanded:Ie,selectedPath:Ee,crumbs:Ca,onRootChange:Pt,onJump:Ft,onToggleDir:le,onFileClick:ke,onRetryDir:p})]}),(ye!==null||Qe||Ke!==null)&&(0,N.jsx)(ur,{t,skillName:O,file:ye,fileLoading:Qe,fileError:Ke,hasSelection:Ee!==null,editing:H,draft:Pe,dirty:T,saveState:E,saveMessage:ve,onDraftChange:We,onEdit:$i,onCancel:Fi,onSave:()=>{Hi()}})]}),(0,N.jsxs)("div",{className:"sb-statusbar sb-statusbar--panel",children:[(0,N.jsxs)("span",{className:"sb-status-item",children:[t("status.skill"),": ",O??"-"]}),(0,N.jsxs)("span",{className:"sb-status-item",children:[t("status.file"),": ",ye!==null?Ia(ye.path):"-"]}),(0,N.jsx)("span",{className:"sb-spacer"}),E==="error"&&(0,N.jsx)("span",{className:"sb-status-item sb-status--error",children:t("write.failed",{message:ve})}),T&&(0,N.jsx)("span",{className:"sb-status-item sb-status--dirty",children:t("status.unsaved")}),E==="saved"&&!T&&(0,N.jsx)("span",{className:"sb-status-item sb-status--saved",children:t("status.saved")}),ye!==null&&(0,N.jsx)("span",{className:"sb-status-item",children:cs(t,ye.size)}),ye!==null&&(0,N.jsx)("span",{className:"sb-status-item",children:t("mtime.label",{time:lr(ye.mtime)})})]}),C&&(0,N.jsx)(br,{t,dirs:r,loading:_,error:G,input:ce,mutating:Te,onInputChange:Re,onAdd:()=>{Ct()},onRemove:te=>{Y(te)},onClose:()=>u(!1)}),z!==null&&(0,N.jsx)("div",{className:"sb-modal-overlay",onClick:()=>Se(null),children:(0,N.jsxs)("div",{className:"sb-modal",onClick:te=>te.stopPropagation(),children:[(0,N.jsx)("div",{className:"sb-modal-title",children:t("confirm.discard.title")}),(0,N.jsx)("div",{className:"sb-modal-body",children:t("confirm.discard.body",{name:ye!==null?Ia(ye.path):""})}),(0,N.jsxs)("div",{className:"sb-modal-actions",children:[(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:()=>Se(null),children:t("cancel")}),(0,N.jsx)("button",{type:"button",className:"sb-btn sb-btn--danger",onClick:()=>{let te=z;Se(null),te()},children:t("confirm.discard.ok")})]})]})})]})}var Rt=require("react/jsx-runtime"),ps=null;function gr(t){return[{icon:"\u{1F6E0}\uFE0F",title:t("skillsTab.guide.what.title"),body:t("skillsTab.guide.what.body"),items:[t("skillsTab.guide.what.item1"),t("skillsTab.guide.what.item2")]},{icon:"\u{1F504}",title:t("skillsTab.guide.how.title"),body:t("skillsTab.guide.how.body"),items:[t("skillsTab.guide.how.item1"),t("skillsTab.guide.how.item2"),t("skillsTab.guide.how.item3")]},{icon:"\u{1F4E5}",title:t("skillsTab.guide.pending.title"),body:t("skillsTab.guide.pending.body"),items:[t("skillsTab.guide.pending.item1"),t("skillsTab.guide.pending.item2")]},{icon:"\u{1F50D}",title:t("skillsTab.guide.manager.title"),body:t("skillsTab.guide.manager.body"),items:[t("skillsTab.guide.manager.item1"),t("skillsTab.guide.manager.item2"),t("skillsTab.guide.manager.item3"),t("skillsTab.guide.manager.item4")]},{icon:"\u26D4",title:t("skillsTab.guide.disable.title"),body:t("skillsTab.guide.disable.body"),items:[t("skillsTab.guide.disable.item1"),t("skillsTab.guide.disable.item2")]},{icon:"\u{1F4C1}",title:t("skillsTab.guide.dirs.title"),body:t("skillsTab.guide.dirs.body")},{icon:"\u{1F6AB}",title:t("skillsTab.guide.restraint.title"),body:t("skillsTab.guide.restraint.body"),items:[t("skillsTab.guide.restraint.item1"),t("skillsTab.guide.restraint.item2")]}]}function us(t){let{t:e,sessionId:a}=t,[o,s]=(0,Kt.useState)(ps??"skills"),[i,l]=(0,Kt.useState)(0),c=(0,Kt.useCallback)(()=>{fetch("/memory-evolve/api/badge").then(g=>g.ok?g.json():Promise.reject(new Error(`HTTP ${g.status}`))).then(g=>l(g.skills??0)).catch(()=>{})},[]);return(0,Kt.useEffect)(()=>{ps=o},[o]),(0,Kt.useEffect)(()=>{c();let g=window.setInterval(c,3e4),b=()=>c();return window.addEventListener("dsh-memory-evolve:badge-change",b),()=>{window.clearInterval(g),window.removeEventListener("dsh-memory-evolve:badge-change",b)}},[c]),(0,Rt.jsxs)("div",{className:"mt-panel",children:[(0,Rt.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,Rt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("guide"),children:e("skillsTab.feature.guide")}),(0,Rt.jsxs)("button",{type:"button",role:"tab","aria-selected":o==="skills",className:o==="skills"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("skills"),children:[e("skillsTab.feature.skills"),i>0&&(0,Rt.jsx)("span",{className:"mt-feature-count",children:i})]}),(0,Rt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="skill-browser",className:o==="skill-browser"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("skill-browser"),children:e("skillsTab.feature.skillBrowser")})]}),o==="guide"?(0,Rt.jsx)(kt,{sections:gr(e)}):o==="skill-browser"?(0,Rt.jsx)(ms,{t:e,sessionId:a}):(0,Rt.jsx)(Vt,{t:e,feature:"skills",onChanged:()=>{c(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var Jt=require("react");var dt=require("react"),ee=require("react/jsx-runtime"),bs=["life","work","project","daily"],oa=new Set(["done","cancelled"]),vr=["q1","q2","q3","q4"],gs=null;async function ga(t,e){let a=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!a.ok){let o=await a.json().catch(()=>({}));throw new Error(o.error??`HTTP ${a.status}`)}return a.json()}function fr(t,e){return t(e===null?"todo.quadrant.none":`todo.quadrant.${e}`)}function hr(t){if(t.quadrant==="q1"||t.quadrant==="q2"||t.quadrant==="q3"||t.quadrant==="q4")return t.quadrant;let e=t.important===!0,a=t.urgent===!0;return e&&a?"q1":e&&!a?"q2":!e&&a?"q3":"q4"}function yr(t,e){let a=`todo.status.${e}`,o=t(a);return o===a?e:o}function vs(t){let[,e,a]=t.split("-");return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?`${Number(e)}/${Number(a)}`:`${Number(e)}\u6708${Number(a)}\u65E5`}function fs(t){let{t:e,sessionId:a}=t,[o,s]=(0,dt.useState)("all"),[i,l]=(0,dt.useState)("work"),[c,g]=(0,dt.useState)(null),[b,m]=(0,dt.useState)(null),[h,k]=(0,dt.useState)("active"),[A,F]=(0,dt.useState)("all"),[M,B]=(0,dt.useState)(!1),[S,V]=(0,dt.useState)(gs??"list"),[y,D]=(0,dt.useState)(""),[w,O]=(0,dt.useState)(""),[X,C]=(0,dt.useState)(""),[u,r]=(0,dt.useState)(null),[v,_]=(0,dt.useState)(""),[L,G]=(0,dt.useState)(""),[q,ce]=(0,dt.useState)(""),[Re,Te]=(0,dt.useState)(""),[Ce,Q]=(0,dt.useState)(!1),[Ye,Ie]=(0,dt.useState)(null);(0,dt.useEffect)(()=>{gs=S},[S]);let be=(0,dt.useCallback)(()=>{g(null);let E=new URLSearchParams({sessionId:a,all:"1"});o==="past"?E.set("target","daily"):o!=="all"&&E.set("target",o),(o==="past"||o==="all"&&M)&&(E.set("past","1"),M&&E.set("expired","1")),ga(`/api/todo?${E.toString()}`).then(ve=>{g(ve.items),m(ve.cwd),l(Ve=>o!=="all"?Ve:ve.cwd?"project":"work")}).catch(ve=>Ie({kind:"error",text:ve.message}))},[a,o,M]);(0,dt.useEffect)(()=>{be()},[be]);let j=E=>{Ie({kind:"ok",text:E}),window.setTimeout(()=>{Ie(Z=>Z?.text===E?null:Z)},3e3)},ge=()=>{let E=y.trim();if(E===""||Ce)return;Q(!0),ga("/api/todo",{method:"POST",body:JSON.stringify({sessionId:a,action:"add",target:o==="all"?i:o,content:E,quadrant:w===""?void 0:w,due:X===""?void 0:X})}).then(()=>{D(""),O(""),C(""),be(),j(e("todo.added"))}).catch(ve=>{Ie({kind:"error",text:ve.message})}).finally(()=>Q(!1))},re=E=>{if(Ce)return;Q(!0);let Z=!oa.has(E.status);ga("/api/todo",{method:"POST",body:JSON.stringify({sessionId:a,action:Z?"done":"update",target:E.target,id:E.id,status:"pending"})}).then(()=>{be(),j(e(Z?"todo.done":"todo.undone"))}).catch(ve=>{Ie({kind:"error",text:ve.message})}).finally(()=>Q(!1))},Ue=E=>{if(Ce)return;let Z=E.text.split(`
`)[0].slice(0,40);window.confirm(e("todo.deleteConfirm",{snippet:Z}))&&(Q(!0),ga("/api/todo",{method:"POST",body:JSON.stringify({sessionId:a,action:"remove",target:E.target,id:E.id})}).then(()=>{be(),j(e("todo.deleted"))}).catch(ve=>{Ie({kind:"error",text:ve.message})}).finally(()=>Q(!1)))},Le=E=>{r(E.id),_(E.text),G(E.quadrant??""),ce(E.due??""),Te(E.status)},Ae=E=>{Ce||(Q(!0),ga("/api/todo",{method:"POST",body:JSON.stringify({sessionId:a,action:"update",target:E.target,id:E.id,content:v.trim(),quadrant:L===""?void 0:L,due:q===""?void 0:q,status:Re})}).then(()=>{r(null),be(),j(e("todo.updated"))}).catch(Z=>{Ie({kind:"error",text:Z.message})}).finally(()=>Q(!1)))},Ee=E=>{if(Ce)return;let Z=["pending","doing","done","blocked","cancelled"],ve=Z.indexOf(E.status),Ve=Z[(ve+1)%Z.length]??"pending";Q(!0),ga("/api/todo",{method:"POST",body:JSON.stringify({sessionId:a,action:"update",target:E.target,id:E.id,status:Ve})}).then(()=>{be(),j(e("todo.updated"))}).catch(z=>{Ie({kind:"error",text:z.message})}).finally(()=>Q(!1))},Ne=new Date,ye=`${Ne.getFullYear()}-${String(Ne.getMonth()+1).padStart(2,"0")}-${String(Ne.getDate()).padStart(2,"0")}`,we=(c??[]).filter(E=>!(o==="past"&&E.past!==!0||h==="active"&&oa.has(E.status)||h==="done"&&!oa.has(E.status)||A==="none"&&E.quadrant!==null||A!=="all"&&A!=="none"&&E.quadrant!==A)),Qe=[];for(let E of we){let Z=E.past===!0?E.day??null:null,ve=Qe[Qe.length-1];Z!==null&&ve!==void 0&&ve.day===Z?ve.items.push(E):Qe.push({day:Z,items:[E]})}let Me={q1:[],q2:[],q3:[],q4:[]};for(let E of we)Me[hr(E)].push(E);let Ke=(E,Z)=>{let ve=oa.has(E.status),Ve=E.due!==null&&E.due<ye&&!ve;return(0,ee.jsxs)(ee.Fragment,{children:[o==="all"&&(0,ee.jsx)("span",{className:"me-badge me-badge-target",children:E.past===!0?e("todo.track.past"):e(`todo.track.${E.target}`)}),E.past===!0&&o!=="all"&&(0,ee.jsx)("span",{className:"me-badge me-badge-day",children:vs(E.day??"")}),Z?.showQuad===!0&&(0,ee.jsx)("span",{className:`me-badge me-badge-quad me-badge-quad-${E.quadrant??"none"}`,children:fr(e,E.quadrant)}),E.due!==null&&(0,ee.jsx)("span",{className:`me-badge ${Ve?"me-badge-overdue":"me-badge-due"}`,children:Ve?`${e("todo.overdue")} ${E.due}`:`${e("todo.due")} ${E.due}`}),E.cat!==null&&(0,ee.jsx)("span",{className:"me-badge me-badge-target",children:E.cat}),(0,ee.jsx)("button",{type:"button",className:`me-badge me-badge-status me-badge-status-${E.status}`,title:e("todo.board.cycleStatus"),disabled:Ce,onClick:z=>{z.stopPropagation(),Ee(E)},children:yr(e,E.status)})]})},R=E=>{let Z=oa.has(E.status);return(0,ee.jsxs)("span",{className:"me-item-actions",children:[(0,ee.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce,onClick:()=>re(E),children:e(Z?"todo.undone":"todo.done")}),u!==E.id&&(0,ee.jsx)("button",{type:"button",className:"me-btn",disabled:Ce,onClick:()=>Le(E),children:e("todo.edit")}),(0,ee.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:Ce,onClick:()=>Ue(E),children:e("memoryTab.delete")})]})},H=E=>(0,ee.jsxs)("div",{className:"me-todo-edit",children:[(0,ee.jsx)("textarea",{className:"me-item-edit",rows:2,value:v,onChange:Z=>_(Z.target.value)}),(0,ee.jsxs)("div",{className:"me-todo-edit-row",children:[(0,ee.jsxs)("select",{value:L,onChange:Z=>G(Z.target.value),children:[(0,ee.jsx)("option",{value:"",children:e("todo.quadrant.none")}),(0,ee.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,ee.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,ee.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,ee.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")})]}),(0,ee.jsx)("input",{type:"date",value:q,onChange:Z=>ce(Z.target.value)}),(0,ee.jsxs)("select",{value:Re,onChange:Z=>Te(Z.target.value),children:[(0,ee.jsx)("option",{value:"pending",children:e("todo.status.pending")}),(0,ee.jsx)("option",{value:"doing",children:e("todo.status.doing")}),(0,ee.jsx)("option",{value:"done",children:e("todo.status.done")}),(0,ee.jsx)("option",{value:"blocked",children:e("todo.status.blocked")}),(0,ee.jsx)("option",{value:"cancelled",children:e("todo.status.cancelled")})]}),(0,ee.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce||v.trim()==="",onClick:()=>Ae(E),children:e("todo.save")}),(0,ee.jsx)("button",{type:"button",className:"me-btn",disabled:Ce,onClick:()=>r(null),children:e("todo.cancel")})]})]}),De=E=>{let Z=oa.has(E.status),ve=E.text.split(`
`)[0]||E.text;return(0,ee.jsxs)("article",{className:`me-todo-card${Z?" me-todo-card--done":""}`,children:[(0,ee.jsx)("div",{className:"me-todo-card-meta",children:Ke(E)}),u===E.id?H(E):(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("p",{className:"me-todo-card-title",title:E.text,children:ve}),E.text.includes(`
`)&&(0,ee.jsx)("p",{className:"me-todo-card-body",children:E.text.slice(ve.length).trim()})]}),(0,ee.jsxs)("div",{className:"me-todo-card-foot",children:[(0,ee.jsx)("span",{className:"me-item-time",children:E.time}),R(E)]})]},E.id)},Pe=()=>(0,ee.jsx)("div",{className:"me-todo-board",role:"region","aria-label":e("todo.view.board"),children:vr.map(E=>{let Z=Me[E];return(0,ee.jsxs)("section",{className:`me-todo-quad me-todo-quad-${E}`,"aria-label":e(`todo.quadrant.${E}`),children:[(0,ee.jsxs)("header",{className:"me-todo-quad-head",children:[(0,ee.jsx)("span",{className:"me-todo-quad-title",children:e(`todo.quadrant.${E}`)}),(0,ee.jsx)("span",{className:"me-todo-quad-count",children:Z.length})]}),(0,ee.jsx)("div",{className:"me-todo-quad-body",children:Z.length===0?(0,ee.jsx)("p",{className:"me-todo-quad-empty",children:e("todo.board.empty")}):Z.map(ve=>De(ve))})]},E)})}),We=()=>we.length===0?(0,ee.jsxs)("p",{className:"me-empty",children:[e("todo.empty"),(o==="all"||o==="past")&&!M&&` ${e("todo.pastHint")}`]}):(0,ee.jsx)("ul",{className:"me-list",children:Qe.map(E=>(0,ee.jsxs)(dt.Fragment,{children:[E.day!==null&&(0,ee.jsx)("li",{className:"me-todo-day",children:vs(E.day)}),E.items.map(Z=>{let ve=oa.has(Z.status);return(0,ee.jsxs)("li",{className:`me-item me-todo-item${ve?" me-todo-item--done":""}`,children:[(0,ee.jsxs)("div",{className:"me-item-head",children:[Ke(Z,{showQuad:!0}),(0,ee.jsx)("span",{className:"me-item-time",children:Z.time}),R(Z)]}),u===Z.id?H(Z):(0,ee.jsx)("p",{className:"me-todo-text",children:Z.text})]},Z.id)})]},E.day??E.items[0].id))});return(0,ee.jsxs)("div",{className:"me-panel",children:[Ye!==null&&(0,ee.jsx)("div",{className:`me-notice me-notice-${Ye.kind}`,children:Ye.text}),(0,ee.jsxs)("div",{className:"me-tabs",role:"tablist",children:[(0,ee.jsx)("button",{type:"button",role:"tab","aria-selected":o==="all",className:o==="all"?"me-tab me-tab-active":"me-tab",onClick:()=>s("all"),children:e("todo.track.all")}),bs.map(E=>(0,ee.jsx)("button",{type:"button",role:"tab","aria-selected":o===E,className:o===E?"me-tab me-tab-active":"me-tab",onClick:()=>s(E),children:e(`todo.track.${E}`)},E)),(0,ee.jsx)("button",{type:"button",role:"tab","aria-selected":o==="past",className:o==="past"?"me-tab me-tab-active":"me-tab",onClick:()=>s("past"),children:e("todo.track.past")})]}),(0,ee.jsx)("p",{className:"me-muted me-todo-help",children:e("todo.help")}),o==="project"&&b===null&&(0,ee.jsx)("p",{className:"me-muted",children:e("todo.projectHint")}),o!=="past"&&(0,ee.jsxs)("div",{className:"me-todo-add",children:[o==="all"&&(0,ee.jsx)("select",{className:"me-todo-select",value:i,onChange:E=>l(E.target.value),title:e("todo.track"),children:bs.map(E=>(0,ee.jsx)("option",{value:E,children:e(`todo.track.${E}`)},E))}),(0,ee.jsx)("input",{type:"text",className:"me-todo-input",value:y,placeholder:e("todo.addPlaceholder"),onChange:E=>D(E.target.value),onKeyDown:E=>{E.key==="Enter"&&ge()}}),(0,ee.jsxs)("select",{className:"me-todo-select",value:w,onChange:E=>O(E.target.value),title:e("todo.quadrant"),children:[(0,ee.jsx)("option",{value:"",children:e("todo.quadrant.none")}),(0,ee.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,ee.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,ee.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,ee.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")})]}),(0,ee.jsx)("input",{type:"date",className:"me-todo-date",value:X,onChange:E=>C(E.target.value),title:e("todo.due")}),(0,ee.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce||y.trim()==="",onClick:ge,children:e("todo.add")})]}),(0,ee.jsxs)("div",{className:"me-todo-filters",children:[(0,ee.jsxs)("label",{className:"me-todo-filter",children:[(0,ee.jsx)("span",{children:e("todo.filterStatus")}),(0,ee.jsxs)("select",{value:h,onChange:E=>k(E.target.value),children:[(0,ee.jsx)("option",{value:"active",children:e("todo.status.active")}),(0,ee.jsx)("option",{value:"all",children:e("todo.all")}),(0,ee.jsx)("option",{value:"done",children:e("todo.status.done")})]})]}),(0,ee.jsxs)("label",{className:"me-todo-filter",children:[(0,ee.jsx)("span",{children:e("todo.filterQuadrant")}),(0,ee.jsxs)("select",{value:A,onChange:E=>F(E.target.value),children:[(0,ee.jsx)("option",{value:"all",children:e("todo.all")}),(0,ee.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,ee.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,ee.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,ee.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")}),(0,ee.jsx)("option",{value:"none",children:e("todo.quadrant.none")})]})]}),(o==="all"||o==="past")&&(0,ee.jsxs)("label",{className:"me-todo-filter me-todo-filter-check",children:[(0,ee.jsx)("input",{type:"checkbox",checked:M,onChange:E=>B(E.target.checked)}),(0,ee.jsx)("span",{children:e("todo.showExpired")})]}),(0,ee.jsxs)("div",{className:"me-todo-view-switch",role:"group","aria-label":e("todo.view.mode"),children:[(0,ee.jsx)("button",{type:"button",className:S==="list"?"me-todo-view-btn me-todo-view-btn-active":"me-todo-view-btn","aria-pressed":S==="list",onClick:()=>V("list"),children:e("todo.view.list")}),(0,ee.jsx)("button",{type:"button",className:S==="board"?"me-todo-view-btn me-todo-view-btn-active":"me-todo-view-btn","aria-pressed":S==="board",onClick:()=>V("board"),children:e("todo.view.board")})]})]}),c===null?(0,ee.jsx)("p",{className:"me-muted",children:e("panel.loading")}):S==="board"?Pe():We()]})}var Mt=require("react/jsx-runtime"),hs=null;function wr(t){return[{icon:"\u{1F4CB}",title:t("todosTab.guide.tracks.title"),body:t("todosTab.guide.tracks.body"),items:[t("todosTab.guide.tracks.item1"),t("todosTab.guide.tracks.item2"),t("todosTab.guide.tracks.item3"),t("todosTab.guide.tracks.item4")]},{icon:"\u2795",title:t("todosTab.guide.add.title"),body:t("todosTab.guide.add.body"),items:[t("todosTab.guide.add.item1"),t("todosTab.guide.add.item2")]},{icon:"\u{1F532}",title:t("todosTab.guide.pending.title"),body:t("todosTab.guide.pending.body"),items:[t("todosTab.guide.pending.item1"),t("todosTab.guide.pending.item2")]},{icon:"\u{1F3AF}",title:t("todosTab.guide.attrs.title"),body:t("todosTab.guide.attrs.body"),items:[t("todosTab.guide.attrs.item1"),t("todosTab.guide.attrs.item2"),t("todosTab.guide.attrs.item3")]},{icon:"\u{1F4C5}",title:t("todosTab.guide.view.title"),body:t("todosTab.guide.view.body"),items:[t("todosTab.guide.view.item1"),t("todosTab.guide.view.item2")]},{icon:"\u23F0",title:t("todosTab.guide.remind.title"),body:t("todosTab.guide.remind.body")}]}function ys(t){let{sessionId:e,t:a}=t,[o,s]=(0,Jt.useState)(hs??"todo-suggestions"),[i,l]=(0,Jt.useState)(0),c=(0,Jt.useCallback)(()=>{fetch("/memory-evolve/api/badge").then(g=>g.ok?g.json():Promise.reject(new Error(`HTTP ${g.status}`))).then(g=>l(g.todoSuggestions??0)).catch(()=>{})},[]);return(0,Jt.useEffect)(()=>{hs=o},[o]),(0,Jt.useEffect)(()=>{c();let g=window.setInterval(c,3e4),b=()=>c();return window.addEventListener("dsh-memory-evolve:badge-change",b),()=>{window.clearInterval(g),window.removeEventListener("dsh-memory-evolve:badge-change",b)}},[c]),(0,Mt.jsxs)("div",{className:"mt-panel",children:[(0,Mt.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,Mt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("guide"),children:a("todosTab.feature.guide")}),(0,Mt.jsxs)("button",{type:"button",role:"tab","aria-selected":o==="todo-suggestions",className:o==="todo-suggestions"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("todo-suggestions"),children:[a("todosTab.feature.todoSuggestions"),i>0&&(0,Mt.jsx)("span",{className:"mt-feature-count",children:i})]}),(0,Mt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="todo",className:o==="todo"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("todo"),children:a("todosTab.feature.todo")})]}),o==="guide"?(0,Mt.jsx)(kt,{sections:wr(a)}):o==="todo"?(0,Mt.jsx)(fs,{t:a,sessionId:String(e)}):(0,Mt.jsx)(Vt,{t:a,feature:"todo-suggestions",onChanged:()=>{c(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var Ua=require("react");var Gt=require("react"),et=require("react/jsx-runtime");async function ws(t){let e=await fetch(`/memory-evolve/api/update/status${t?"?force=1":""}`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await e.json()}function xr(t){if(typeof t!="number"||Number.isNaN(t))return"\u2014";let e=new Date(t);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}function xs(t){let{t:e}=t,[a,o]=(0,Gt.useState)(null),[s,i]=(0,Gt.useState)(""),[l,c]=(0,Gt.useState)(!1),[g,b]=(0,Gt.useState)(!1),[m,h]=(0,Gt.useState)(null),k=B=>{h(null),B&&c(!0),ws(B).then(S=>{o(S),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}).catch(S=>h({code:"network",message:S instanceof Error?S.message:"network error"})).finally(()=>c(!1))};(0,Gt.useEffect)(()=>{k(!1)},[]);let A=()=>{g||!a?.latestTag||(b(!0),h(null),fetch("/memory-evolve/api/update",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({expectedTag:a.latestTag})}).then(async B=>{let S=await B.json();if(!B.ok||!S.ok){h({code:S.code??"unknown",message:S.error??""});return}i(S.releaseNotes??""),o({...a??{},restartRequired:!0});try{let V=await ws(!1);o(V)}catch{}h(null),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}).catch(B=>h({code:"network",message:B instanceof Error?B.message:"network error"})).finally(()=>b(!1)))},F=l||g||a===null,M=a?.noteCode?e(`version.note.${a.noteCode}`):"";return(0,et.jsxs)("div",{className:"me-panel",children:[a?.restartRequired===!0&&(0,et.jsxs)("div",{className:"me-notice me-notice-warn",role:"alert",children:[(0,et.jsx)("strong",{children:e("version.restart.title")}),"\uFF1A",e("version.restart.hint")]}),(0,et.jsx)("div",{className:"me-block",children:(0,et.jsxs)("div",{className:"me-group",children:[(0,et.jsxs)("div",{className:"me-field",children:[(0,et.jsx)("span",{className:"me-field-label",children:e("version.current")}),(0,et.jsx)("span",{className:"me-field-value",children:a?.localTag??"\u2014"})]}),(0,et.jsxs)("div",{className:"me-field",children:[(0,et.jsx)("span",{className:"me-field-label",children:e("version.latest")}),(0,et.jsx)("span",{className:"me-field-value",children:a?.latestTag??"\u2014"})]}),(0,et.jsxs)("div",{className:"me-field",children:[(0,et.jsx)("span",{className:"me-field-label",children:e("version.statusLabel")}),(0,et.jsx)("span",{className:"me-field-value",children:e(a===null?"version.loading":`version.status.${a.status??"unknown"}`)})]}),M!==""&&(0,et.jsx)("p",{className:"me-help",children:M}),a?.lastError&&(0,et.jsxs)("p",{className:"me-help",children:[e("version.lastError"),"\uFF1A",a.lastError.message??a.lastError.kind??"\u2014"]}),(0,et.jsxs)("p",{className:"me-help",children:[e("version.checkTime"),"\uFF1A",xr(a?.lastSuccessAt??a?.lastAttemptAt)]})]})}),(0,et.jsxs)("div",{className:"me-block",children:[(0,et.jsx)("button",{type:"button",className:"me-btn",disabled:F,onClick:()=>k(!0),children:e(l?"version.checking":"version.checkNow")}),a?.status==="outdated"&&a.latestTag&&(0,et.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:F,onClick:A,children:g?e("version.updating"):e("version.updateNow",{tag:a.latestTag})}),m&&(0,et.jsx)("p",{className:"me-notice me-notice-error",role:"alert",children:e(`version.error.${m.code}`,{message:m.message})})]}),(s!==""||a?.lastUpdated?.notes)&&(0,et.jsx)("div",{className:"me-block",children:(0,et.jsx)("div",{className:"me-group",children:(0,et.jsxs)("div",{className:"me-field",children:[(0,et.jsx)("span",{className:"me-field-label",children:e("version.releaseNotes")}),(0,et.jsx)("span",{className:"me-field-value me-notes-pre",children:a?.lastUpdated?.notes??s})]})})}),a?.status==="unsupported"&&(0,et.jsx)("div",{className:"me-block",children:(0,et.jsx)("p",{className:"me-help",children:e("version.unsupported.hint")})})]})}var _t=require("react/jsx-runtime"),ks=null;function Ts(t){let{t:e}=t,[a,o]=(0,Ua.useState)(ks??"guide");return(0,Ua.useEffect)(()=>{ks=a},[a]),(0,_t.jsxs)("div",{className:"mt-panel",children:[(0,_t.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,_t.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("guide"),children:e("settingsTab.feature.guide")}),(0,_t.jsx)("button",{type:"button",role:"tab","aria-selected":a==="config",className:a==="config"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("config"),children:e("settingsTab.feature.config")}),(0,_t.jsx)("button",{type:"button",role:"tab","aria-selected":a==="version",className:a==="version"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("version"),children:e("settingsTab.feature.version")})]}),a==="version"?(0,_t.jsx)(xs,{t:e}):(0,_t.jsx)(Vt,{t:e,feature:a,onChanged:()=>{window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var ot=require("react");var ie=require("react/jsx-runtime"),va=(t,e)=>`${t}\0${e}`;function Ns(t){return t===void 0?"\u2014":t>=1e6?`${(t/1e6).toFixed(t%1e6===0?0:1)}M`:t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}K`:String(t)}var Ss=null;function kr(t){return[{icon:"\u{1F9ED}",title:t("modelsTab.guide.what.title"),body:t("modelsTab.guide.what.body"),items:[t("modelsTab.guide.what.item1"),t("modelsTab.guide.what.item2"),t("modelsTab.guide.what.item3")]},{icon:"\u2699\uFE0F",title:t("modelsTab.guide.config.title"),body:t("modelsTab.guide.config.body"),items:[t("modelsTab.guide.config.item1"),t("modelsTab.guide.config.item2"),t("modelsTab.guide.config.item3"),t("modelsTab.guide.config.item4"),t("modelsTab.guide.config.item5")]},{icon:"\u{1F916}",title:t("modelsTab.guide.tool.title"),body:t("modelsTab.guide.tool.body"),items:[t("modelsTab.guide.tool.item1"),t("modelsTab.guide.tool.item2")]},{icon:"\u{1F50C}",title:t("modelsTab.guide.switch.title"),body:t("modelsTab.guide.switch.body")}]}function Es(t){let{t:e}=t,[a,o]=(0,ot.useState)(Ss??"models"),[s,i]=(0,ot.useState)(null),[l,c]=(0,ot.useState)(!1),[g,b]=(0,ot.useState)(void 0),[m,h]=(0,ot.useState)(""),[k,A]=(0,ot.useState)(!0),[F,M]=(0,ot.useState)(void 0),[B,S]=(0,ot.useState)(new Set);(0,ot.useEffect)(()=>{Ss=a},[a]);let V=(0,ot.useCallback)(()=>{c(!0),b(void 0),fetch("/memory-evolve/api/models").then(u=>u.ok?u.json():Promise.reject(new Error(`HTTP ${u.status}`))).then(u=>{i(u)}).catch(u=>{b(u instanceof Error?u.message:String(u))}).finally(()=>{c(!1)})},[]);(0,ot.useEffect)(()=>{V()},[V]);let y=(0,ot.useCallback)(async(u,r,v)=>{let _=va(u,r);S(L=>new Set(L).add(_));try{let L=await fetch("/memory-evolve/api/models/update",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({provider:u,model:r,patch:v})}),G=await L.json();if(!L.ok||G.ok!==!0)throw new Error(G.error??`HTTP ${L.status}`);return!0}finally{S(L=>{let G=new Set(L);return G.delete(_),G})}},[]),D=(0,ot.useCallback)((u,r,v)=>{i(_=>{if(_===null)return _;let L=_.providers.map(q=>q.provider!==u?q:{...q,models:q.models.map(ce=>{if(ce.id!==r)return ce;let Re={...ce};return v(Re),Re})}),G=0;for(let q of L)for(let ce of q.models)ce.enabled&&(G+=1);return{providers:L,total:_.total,enabledTotal:G}})},[]),w=(0,ot.useCallback)((u,r)=>{let v=Cs(s,u,r);v!==null&&y(u,r,{enabled:!v.enabled}).then(_=>{_&&D(u,r,L=>{L.enabled=!L.enabled})})},[s,y,D]),O=(0,ot.useCallback)((u,r,v)=>{y(u,r,{note:v}).then(_=>{_&&D(u,r,L=>{L.note=v})})},[y,D]),X=(0,ot.useCallback)((u,r,v,_,L,G)=>{let q=Cs(s,u,r);if(q===null||q.reasoning===null)return;let ce=q.reasoning.levels.map(Te=>Te.id),Re=L.length===ce.length&&ce.every(Te=>L.includes(Te))?null:L;y(u,r,{thinking:v,reasoning:{enabled:Re,recommended:_===""?null:_,custom:G}}).then(Te=>{Te&&(M(void 0),D(u,r,Ce=>{let Q=Ce.reasoning;if(Q===null)return;Ce.thinking=v,Q.recommendedOverride=_===""?void 0:_,_!==""&&(Q.recommended=_);let Ye=new Set(L),Ie=new Map(G.map(be=>[be.id,be]));Q.levels=[...Q.levels.map(be=>{let j=Ie.get(be.id);return j!==void 0?{id:be.id,name:j.name,custom:!0,enabled:Ye.has(be.id)}:{id:be.id,name:be.name,custom:!1,enabled:Ye.has(be.id)}}),...G.filter(be=>!Q.levels.some(j=>j.id===be.id)).map(be=>({id:be.id,name:be.name,custom:!0,enabled:Ye.has(be.id)}))]}))})},[s,y,D]),C=(0,ot.useMemo)(()=>{let u=m.trim().toLowerCase(),r=[];for(let v of s?.providers??[])for(let _ of v.models)u!==""&&!(v.providerDisplay.toLowerCase().includes(u)||v.provider.toLowerCase().includes(u)||_.name.toLowerCase().includes(u)||_.id.toLowerCase().includes(u)||_.note.toLowerCase().includes(u))||r.push({group:v,row:_});return r},[s,m]);return(0,ie.jsxs)("div",{className:"mt-panel",children:[(0,ie.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,ie.jsx)("button",{type:"button",role:"tab","aria-selected":a==="models",className:a==="models"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("models"),children:e("modelsTab.feature.models")}),(0,ie.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("guide"),children:e("modelsTab.feature.guide")})]}),a==="guide"?(0,ie.jsx)(kt,{sections:kr(e)}):(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)("div",{className:"mt-toolbar",children:[(0,ie.jsx)("input",{className:"mt-search",type:"search",placeholder:e("modelsTab.searchPh"),value:m,onChange:u=>{h(u.target.value)},"aria-label":e("modelsTab.searchPh")}),(0,ie.jsxs)("label",{className:"mt-models-toggle-label",children:[(0,ie.jsx)("input",{type:"checkbox",checked:k,onChange:u=>{A(u.target.checked)}}),(0,ie.jsx)("span",{children:e("modelsTab.showReasoning")})]}),(0,ie.jsx)("button",{type:"button",className:"mt-btn",disabled:l,onClick:V,children:e(l?"modelsTab.loading":"modelsTab.refresh")}),s!==null?(0,ie.jsx)("span",{className:"mt-muted",children:e("modelsTab.count",{total:s.total,enabled:s.enabledTotal})}):null]}),g!==void 0?(0,ie.jsx)("div",{className:"mt-notice mt-notice-error",children:e("modelsTab.loadFailed",{message:g})}):null,s!==null&&C.length===0?(0,ie.jsx)("p",{className:"mt-muted",children:e("modelsTab.empty")}):null,(0,ie.jsx)("div",{className:"mt-models-scroll",children:(0,ie.jsxs)("table",{className:"mt-models-table",children:[(0,ie.jsx)("thead",{children:(0,ie.jsxs)("tr",{children:[(0,ie.jsx)("th",{className:"mt-models-cell mt-models-col-enable",children:e("modelsTab.enabled")}),(0,ie.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.provider")}),(0,ie.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.model")}),(0,ie.jsx)("th",{className:"mt-models-cell mt-models-col-capacity",children:e("modelsTab.capacity")}),k?(0,ie.jsx)("th",{className:"mt-models-cell mt-models-col-reasoning",children:e("modelsTab.reasoning")}):null,(0,ie.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.note")})]})}),(0,ie.jsx)("tbody",{children:C.map(({group:u,row:r})=>(0,ie.jsx)(Tr,{t:e,group:u,row:r,showReasoning:k,expanded:F===va(u.provider,r.id),saving:B.has(va(u.provider,r.id)),onToggle:()=>{w(u.provider,r.id)},onExpand:()=>{M(F===va(u.provider,r.id)?void 0:va(u.provider,r.id))},onSaveNote:v=>{O(u.provider,r.id,v)},onSaveReasoning:(v,_,L,G)=>{X(u.provider,r.id,v,_,L,G)}},va(u.provider,r.id)))})]})})]})]})}function Cs(t,e,a){for(let o of t?.providers??[]){if(o.provider!==e)continue;return o.models.find(i=>i.id===a)??null}return null}function Tr(t){let{t:e,group:a,row:o,showReasoning:s,expanded:i,saving:l,onToggle:c,onExpand:g,onSaveNote:b,onSaveReasoning:m}=t,[h,k]=(0,ot.useState)(o.note),[A,F]=(0,ot.useState)(o.thinking),[M,B]=(0,ot.useState)(o.reasoning?.recommendedOverride??""),[S,V]=(0,ot.useState)(()=>new Set((o.reasoning?.levels??[]).filter(L=>L.enabled).map(L=>L.id))),[y,D]=(0,ot.useState)(()=>(o.reasoning?.levels??[]).filter(L=>L.custom).map(L=>({id:L.id,name:L.name}))),[w,O]=(0,ot.useState)(""),[X,C]=(0,ot.useState)("");(0,ot.useEffect)(()=>{k(o.note)},[o.note]);let u=o.reasoning?.levels??[],r=o.reasoning?.recommended,v=u.filter(L=>L.enabled),_=L=>{F(L),L||V(G=>{let q=new Set;for(let ce of G){let Re=u.find(Te=>Te.id===ce);Re!==void 0&&Re.id==="off"&&q.add(ce)}return q})};return(0,ie.jsxs)("tr",{className:o.enabled?"mt-models-row":"mt-models-row mt-models-row-muted",children:[(0,ie.jsx)("td",{className:"mt-models-cell mt-models-col-enable",children:(0,ie.jsx)("input",{type:"checkbox",checked:o.enabled,disabled:l,onChange:c,"aria-label":o.enabled?e("modelsTab.disable"):e("modelsTab.enable")})}),(0,ie.jsxs)("td",{className:"mt-models-cell",children:[(0,ie.jsx)("span",{className:"mt-models-provider",children:a.providerDisplay}),a.active?null:(0,ie.jsx)("span",{className:"mt-models-tag mt-models-tag-dormant",children:e("modelsTab.dormant")})]}),(0,ie.jsx)("td",{className:"mt-models-cell",children:(0,ie.jsxs)("div",{className:"mt-models-model",children:[(0,ie.jsx)("span",{className:"mt-models-model-name",children:o.name}),(0,ie.jsx)("span",{className:"mt-models-model-id",children:o.id}),o.supportsImage===!0?(0,ie.jsx)("span",{className:"mt-models-tag",title:e("modelsTab.supportsImageHint"),children:e("modelsTab.supportsImage")}):null]})}),(0,ie.jsx)("td",{className:"mt-models-cell mt-models-col-capacity",children:(0,ie.jsxs)("span",{className:"mt-models-capacity",children:[Ns(o.contextWindow)," / ",Ns(o.maxTokens)]})}),s?(0,ie.jsx)("td",{className:"mt-models-cell mt-models-col-reasoning",children:o.thinking?u.length===0?(0,ie.jsx)("span",{className:"mt-models-muted-cell",children:"\u2014"}):(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)("div",{className:"mt-models-levels",children:[v.length===0?(0,ie.jsx)("span",{className:"mt-models-level-none",children:e("modelsTab.levelsNone")}):v.slice(0,4).map(L=>(0,ie.jsx)("span",{className:L.id===r?"mt-models-tag mt-models-tag-rec":"mt-models-tag",children:L.name},L.id)),v.length>4?(0,ie.jsxs)("span",{className:"mt-models-level-more",children:["+",v.length-4]}):null]}),(0,ie.jsx)("button",{type:"button",className:"mt-models-link",onClick:g,"aria-expanded":i,children:e(i?"modelsTab.closeEditor":"modelsTab.editLevels")})]}):(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsx)("span",{className:"mt-models-tag mt-models-tag-off",children:e("modelsTab.thinkingOff")}),u.length>0&&(0,ie.jsx)("button",{type:"button",className:"mt-models-link",onClick:g,"aria-expanded":i,children:e(i?"modelsTab.closeEditor":"modelsTab.editLevels")})]})}):null,(0,ie.jsx)("td",{className:"mt-models-cell",children:(0,ie.jsx)("input",{className:"mt-models-note",type:"text",value:h,placeholder:e("modelsTab.notePh"),disabled:l,"aria-label":e("modelsTab.note"),onChange:L=>{k(L.target.value)},onBlur:()=>{h!==o.note&&b(h)}})}),i&&u.length>0?(0,ie.jsx)("td",{className:"mt-models-expanded",colSpan:s?6:5,children:(0,ie.jsxs)("div",{className:"mt-models-editor",children:[(0,ie.jsx)("div",{className:"mt-models-editor-title",children:e("modelsTab.editorTitle")}),(0,ie.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ie.jsx)("input",{type:"checkbox",checked:A,disabled:l,onChange:L=>{_(L.target.checked)}}),(0,ie.jsx)("span",{className:"mt-models-editor-level-name",children:e("modelsTab.thinking")}),(0,ie.jsx)("span",{className:"mt-models-editor-hint",children:e("modelsTab.thinkingHint")})]}),(0,ie.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ie.jsx)("span",{className:"mt-models-editor-label",children:e("modelsTab.recommendedLevel")}),(0,ie.jsxs)("select",{className:"mt-models-select",value:A?M:"",disabled:l||!A||v.length===0,onChange:L=>{B(L.target.value)},children:[(0,ie.jsx)("option",{value:"",children:e("modelsTab.recommendedAuto")}),u.filter(L=>L.enabled).map(L=>(0,ie.jsxs)("option",{value:L.id,children:[L.name," (",L.id,")"]},L.id))]})]}),(0,ie.jsx)("div",{className:"mt-models-editor-levels",children:u.map(L=>(0,ie.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ie.jsx)("input",{type:"checkbox",checked:S.has(L.id),disabled:l||!A&&L.id!=="off",onChange:()=>{V(G=>{let q=new Set(G);return q.delete(L.id)||q.add(L.id),q})}}),(0,ie.jsx)("span",{className:"mt-models-editor-level-name",children:L.name}),(0,ie.jsx)("span",{className:"mt-models-editor-level-id",children:L.id}),L.id===r&&A?(0,ie.jsx)("span",{className:"mt-models-tag mt-models-tag-rec",children:e("modelsTab.recommended")}):null,L.custom?(0,ie.jsx)("button",{type:"button",className:"mt-models-link mt-models-link-danger",disabled:l,onClick:()=>{D(G=>G.filter(q=>q.id!==L.id)),V(G=>{let q=new Set(G);return q.delete(L.id),q})},children:e("modelsTab.removeLevel")}):null]},L.id))}),(0,ie.jsxs)("div",{className:"mt-models-editor-add",children:[(0,ie.jsx)("input",{className:"mt-search",type:"text",value:w,placeholder:e("modelsTab.levelIdPh"),"aria-label":e("modelsTab.levelIdPh"),disabled:l,onChange:L=>{O(L.target.value.trim())}}),(0,ie.jsx)("input",{className:"mt-search",type:"text",value:X,placeholder:e("modelsTab.levelNamePh"),"aria-label":e("modelsTab.levelNamePh"),disabled:l,onChange:L=>{C(L.target.value)}}),(0,ie.jsx)("button",{type:"button",className:"mt-btn",disabled:l||w===""||!/^[A-Za-z0-9._-]{1,32}$/.test(w),onClick:()=>{D(L=>L.some(G=>G.id===w)?L:[...L,{id:w,name:X===""?w:X}]),V(L=>new Set(L).add(w)),O(""),C("")},children:e("modelsTab.addLevel")})]}),(0,ie.jsxs)("div",{className:"mt-models-editor-actions",children:[(0,ie.jsx)("button",{type:"button",className:"mt-btn",disabled:l,onClick:()=>{m(A,M,[...S],y)},children:e(l?"modelsTab.saving":"modelsTab.save")}),(0,ie.jsx)("button",{type:"button",className:"mt-btn",disabled:l,onClick:g,children:e("modelsTab.cancel")})]})]})}):null]})}var ja=require("react");var Is="dsh-memory-evolve:ui-settings:features",Va="dsh-memory-evolve:ui-settings-features",fa={sessionFilter:!1,wideChat:!1,wideBubble:!1,contextWarn:!1,mermaidRender:!1};function Wa(){try{let t=localStorage.getItem(Is);if(t!==null){let e=JSON.parse(t);return{sessionFilter:typeof e.sessionFilter=="boolean"?e.sessionFilter:fa.sessionFilter,wideChat:typeof e.wideChat=="boolean"?e.wideChat:fa.wideChat,wideBubble:typeof e.wideBubble=="boolean"?e.wideBubble:fa.wideBubble,contextWarn:typeof e.contextWarn=="boolean"?e.contextWarn:fa.contextWarn,mermaidRender:typeof e.mermaidRender=="boolean"?e.mermaidRender:fa.mermaidRender}}}catch{}return{...fa}}function Ps(t){try{localStorage.setItem(Is,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent(Va,{detail:{...t}}))}var bt=require("react/jsx-runtime"),As=null;function Aa({label:t,hint:e,checked:a,onChange:o}){return(0,bt.jsxs)("label",{className:"me-field",children:[(0,bt.jsxs)("span",{className:"me-field-label",children:[t,(0,bt.jsx)("em",{className:"me-field-hint",children:e})]}),(0,bt.jsx)("input",{type:"checkbox",className:"me-switch",checked:a,onChange:s=>o(s.target.checked)})]})}function js(t){let{t:e}=t,[a,o]=(0,ja.useState)(As??"mixed"),[s,i]=(0,ja.useState)(()=>Wa());(0,ja.useEffect)(()=>{As=a},[a]);let l=(b,m)=>{i(h=>{let k={...h,[b]:m};return Ps(k),k})},c=()=>(0,bt.jsxs)("section",{className:"me-block",children:[(0,bt.jsx)("div",{className:"me-block-head",children:(0,bt.jsx)("h3",{className:"me-heading",children:e("uiSettingsTab.features.title")})}),(0,bt.jsx)("p",{className:"me-help",children:e("uiSettingsTab.features.help")}),(0,bt.jsx)("div",{className:"me-form",children:(0,bt.jsxs)("div",{className:"me-group",children:[(0,bt.jsx)(Aa,{label:e("uiSettings.feature.sessionFilter"),hint:e("uiSettings.feature.sessionFilter.hint"),checked:s.sessionFilter,onChange:b=>l("sessionFilter",b)}),(0,bt.jsx)(Aa,{label:e("uiSettings.feature.wideChat"),hint:e("uiSettings.feature.wideChat.hint"),checked:s.wideChat,onChange:b=>l("wideChat",b)}),(0,bt.jsx)(Aa,{label:e("uiSettings.feature.wideBubble"),hint:e("uiSettings.feature.wideBubble.hint"),checked:s.wideBubble,onChange:b=>l("wideBubble",b)}),(0,bt.jsx)(Aa,{label:e("uiSettings.feature.contextWarn"),hint:e("uiSettings.feature.contextWarn.hint"),checked:s.contextWarn,onChange:b=>l("contextWarn",b)}),(0,bt.jsx)(Aa,{label:e("uiSettings.feature.mermaidRender"),hint:e("uiSettings.feature.mermaidRender.hint"),checked:s.mermaidRender,onChange:b=>l("mermaidRender",b)})]})})]}),g=()=>(0,bt.jsx)(kt,{sections:[{icon:"\u{1F3A8}",title:e("uiSettingsTab.guide.what.title"),body:e("uiSettingsTab.guide.what.body")},{icon:"\u{1F9E9}",title:e("uiSettingsTab.guide.features.title"),body:e("uiSettingsTab.guide.features.body"),items:[e("uiSettingsTab.guide.features.item1"),e("uiSettingsTab.guide.features.item2"),e("uiSettingsTab.guide.features.item3"),e("uiSettingsTab.guide.features.item4"),e("uiSettingsTab.guide.features.item5")]},{icon:"\u{1FA84}",title:e("uiSettingsTab.guide.switch.title"),body:e("uiSettingsTab.guide.switch.body")}]});return(0,bt.jsxs)("div",{className:"me-panel",children:[(0,bt.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,bt.jsx)("button",{type:"button",role:"tab","aria-selected":a==="mixed",className:a==="mixed"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("mixed"),children:e("uiSettingsTab.feature.mixed")}),(0,bt.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>o("guide"),children:e("uiSettingsTab.feature.guide")})]}),a==="mixed"&&c(),a==="guide"&&g()]})}var K=require("react"),n=require("react/jsx-runtime"),Rs={zh:{tab:"CLI\u8C03\u5EA6",guide:"\u6307\u5357","guide.title":"COI \u8C03\u5EA6\u4F7F\u7528\u6307\u5357","guide.intro":"COI \u8C03\u5EA6 = \u628A\u4EFB\u52A1\u6D3E\u7ED9\u5916\u90E8 AI \u4EE3\u7406\uFF08kimi / codex / grok / hermes \u7B49\uFF09\u7684\u300C\u5916\u63F4\u8C03\u5EA6\u53F0\u300D\uFF1A\u540E\u53F0\u5F02\u6B65\u6267\u884C\u3001\u4E0D\u5361\u5F53\u524D\u4F1A\u8BDD\uFF1B\u5B9E\u65F6\u770B\u8FDB\u5EA6\u548C\u65E5\u5FD7\uFF1B\u4F1A\u8BDD\u5206\u5C42\u7BA1\u7406\u3001\u53EF\u4E00\u952E\u6062\u590D\u7EE7\u7EED\uFF1B\u4EFB\u52A1\u8FD8\u80FD\u8DE8\u4EE3\u7406\u63A5\u529B\uFF1B\u7ED3\u679C\u81EA\u52A8\u7559\u6863\u5E76\u6C89\u6DC0\u5230\u8BB0\u5FC6\u3002\u9ED8\u8BA4\u5173\u95ED\u2014\u2014\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300D\u5F00\u5173\u3002","guide.use.title":"\u600E\u4E48\u53D1\u8D77\u4EFB\u52A1","guide.use.desc":"\u4E09\u79CD\u5165\u53E3\uFF0C\u4EFB\u9009\u5176\u4E00\uFF1A","guide.use.ai":"\u5BF9 AI \u8BF4\uFF1A","guide.use.aiDesc":"\u76F4\u63A5\u8BF4\u300C\u6D3E\u7ED9 kimi \u505A XX / \u8BA9 codex \u4FEE\u590D\u6D4B\u8BD5\u300D\u2014\u2014AI \u7528 de_coi_dispatch \u5DE5\u5177\u53D1\u8D77\uFF0C\u540E\u53F0\u5F02\u6B65\u8DD1\uFF0C\u5B8C\u6210\u540E\u7ED3\u679C\u6458\u8981\u81EA\u52A8\u5199\u8FDB\u9879\u76EE\u65E5\u5FD7\u548C\u4ECA\u65E5\u65E5\u5FD7\u3002","guide.use.slash":"\u7EC8\u7AEF\u547D\u4EE4\uFF1A","guide.use.slashDesc":'/de_coi run "\u4EFB\u52A1" --coi kimi\uFF08\u67E5\u770B\u5168\u90E8\u5B50\u547D\u4EE4\uFF1A/de_coi help\uFF09\u3002',"guide.use.tab":"\u672C Tab\uFF1A","guide.use.tabDesc":"\u300C\u4EFB\u52A1\u300D\u9875\u586B\u9002\u914D\u5668\u3001\u4EFB\u52A1\u5185\u5BB9\u3001\u5C42\u7EA7\uFF0C\u53EF\u9009\u6062\u590D\u4F1A\u8BDD / \u4EFB\u52A1\u6A21\u677F / \u63A5\u529B\u5F15\u7528\uFF1B\u8FD8\u80FD\u52FE\u9009\u300C\u6CE8\u5165 DSH \u8BB0\u5FC6\u300D\u8BA9\u5916\u63F4\u5E26\u4E0A\u4F60\u7684\u9879\u76EE\u7EA6\u5B9A\uFF0C\u6216\u9644\u52A0\u4E0A\u4E0B\u6587\u6587\u672C\u3001\u5E26\u56FE\u5206\u6790\uFF1B\u70B9\u53D1\u8D77\uFF0C\u8FDB\u5EA6\u4E0E\u8F93\u51FA\u5B9E\u65F6\u53EF\u89C1\u3002","guide.scope.title":"\u4F1A\u8BDD\u5206\u5C42\uFF08\u8C01\u80FD\u770B\u5230\uFF09","guide.scope.desc":"\u4EFB\u52A1\u4E0E\u4F1A\u8BDD\u6309\u5C42\u7EA7\u5F52\u5C5E\uFF0C\u51B3\u5B9A\u8C01\u80FD\u770B\u5230\u3001\u80FD\u5426\u6062\u590D\uFF1A","guide.scope.temp":"\u4EC5\u53D1\u8D77\u5B83\u7684\u90A3\u4E2A\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u4E00\u6B21\u6027\u4EFB\u52A1\uFF08\u6D4B\u8BD5\u9002\u914D\u5668\u7528\u8FD9\u4E2A\uFF09\u3002","guide.scope.session":"\u4EC5\u53D1\u8D77\u5B83\u7684\u90A3\u4E2A\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u4F1A\u8BDD\u5185\u53EF\u6062\u590D\u3002","guide.scope.project":"\u8BE5\u9879\u76EE\uFF08\u76F8\u540C\u5DE5\u4F5C\u76EE\u5F55\uFF09\u7684\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u53EF\u6302 git \u5206\u652F\u3002","guide.scope.global":"\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u957F\u671F\u4FDD\u7559\u3002","guide.skill.title":"\u9002\u914D\u5668\u4E0E\u6280\u80FD","guide.skill.desc":"\u6BCF\u4E2A\u9002\u914D\u5668\u5BF9\u5E94\u4E00\u4E2A\u6280\u80FD\uFF08AI \u7684\u4F7F\u7528\u6307\u5357\uFF0C\u6CE8\u5165\u6A21\u578B\u4E0A\u4E0B\u6587\uFF09\uFF1A\u5185\u7F6E\u56DB\u5BB6\u5F00\u7BB1\u5373\u7528\uFF1B\u81EA\u5B9A\u4E49 CLI \u53EF\u5728\u300C\u9002\u914D\u5668\u300D\u9875\u6DFB\u52A0\uFF08\u542B\u666E\u901A\u547D\u4EE4 plain-cli\uFF09\uFF0C\u586B\u6280\u80FD\u540D\u4E0E\u5185\u5BB9\u540E AI \u5373\u5B66\u4F1A\u8C03\u7528\u5B83\u3002\u6280\u80FD\u53EF\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300DTab \u7981\u7528\uFF0C\u53EF\u5728\u9002\u914D\u5668\u9875\u300C\u6280\u80FD\u300D\u6309\u94AE\u7F16\u8F91\u3002","guide.tips.title":"\u6700\u4F73\u5B9E\u8DF5","guide.tips.1":"\u5206\u5DE5\uFF1A\u524D\u7AEF\u2192kimi\uFF0C\u590D\u6742\u540E\u7AEF\u2192codex\uFF0C\u5FEB\u901F\u4EFB\u52A1\u2192grok\u3002","guide.tips.2":"\u63A5\u529B\u94FE\uFF1Acodex \u5199\u4EE3\u7801 \u2192 kimi review\uFF08\u53D1\u8D77\u65F6\u9009\u300C\u63A5\u529B\u5F15\u7528\u300D\uFF09\u3002","guide.tips.3":"\u91CD\u8981\u4F1A\u8BDD\u8BB0\u5F97\u5907\u6CE8\uFF08\u4F1A\u8BDD\u9875\u70B9\u5907\u6CE8\uFF09\uFF0C\u6062\u590D\u65F6\u6309\u540D\u5B57\u627E\u3002","guide.tips.4":"\u4EFB\u52A1\u7ED3\u675F\u53EF\u63A8\u9001\u901A\u77E5\uFF08\u914D\u7F6E\u9875\u586B\u901A\u77E5\u547D\u4EE4\uFF0C\u5982 hermes send \u63A8\u5FAE\u4FE1\uFF09\u3002","guide.tips.5":"\u6D3E\u6D3B\u65F6\u52FE\u9009\u300C\u6CE8\u5165 DSH \u8BB0\u5FC6\u300D\uFF0C\u5916\u63F4\u4F1A\u5E26\u7740\u4F60\u7684\u5168\u5C40\u89C4\u5219\u3001\u7528\u6237\u504F\u597D\u4E0E\u672C\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u5E72\u6D3B\uFF08\u6309\u5206\u652F\u8FC7\u6EE4\uFF0C\u4E0E DSH \u6CE8\u5165\u540C\u89C4\u5219\uFF09\uFF1B\u6D3E\u6D3B\u4E5F\u80FD\u5E26\u56FE\u2014\u2014\u622A\u56FE\u76F4\u63A5\u53D1\u7ED9\u5916\u63F4\u5206\u6790\uFF08codex / kimi / hermes \u652F\u6301\u8BFB\u56FE\uFF0Czcode \u7EAF\u6587\u672C\u4F1A\u660E\u786E\u62D2\u7EDD\uFF09\u3002","guide.loop":"\u95ED\u73AF\uFF1A\u6D3E\u4EFB\u52A1 \u2192 \u5B9E\u65F6\u770B\u8FDB\u5EA6 \u2192 \u62FF\u7ED3\u679C\u7559\u6863 \u2192 \u6458\u8981\u6C89\u6DC0\u8BB0\u5FC6 \u2192 \u4F1A\u8BDD\u53EF\u6062\u590D\u518D\u63A5\u529B\u3002",tasks:"\u4EFB\u52A1",sessions:"\u4F1A\u8BDD",adapters:"\u9002\u914D\u5668",templates:"\u6A21\u677F",stats:"\u7EDF\u8BA1",config:"\u914D\u7F6E",loading:"\u52A0\u8F7D\u4E2D\u2026",refresh:"\u5237\u65B0",all:"\u5168\u90E8",none:"\uFF08\u65E0\uFF09","launch.title":"\u53D1\u8D77\u4EFB\u52A1","launch.expand":"\u5C55\u5F00","launch.collapse":"\u6536\u8D77","launch.adapter":"\u9002\u914D\u5668","launch.prompt":"\u4EFB\u52A1\u5185\u5BB9","launch.promptPh":"\u4F8B\u5982\uFF1A\u4FEE\u590D tests/store.test.js \u4E2D\u5931\u8D25\u7684\u7528\u4F8B\u5E76\u9A8C\u8BC1","launch.scope":"\u8303\u56F4","launch.session":"\u6062\u590D\u4F1A\u8BDD","launch.sessionNone":"\uFF08\u65B0\u4F1A\u8BDD\uFF09","launch.sessionEmpty":"\uFF08\u5F53\u524D\u9002\u914D\u5668\u6682\u65E0\u4F1A\u8BDD\uFF09","launch.template":"\u6A21\u677F","launch.templateNone":"\uFF08\u4E0D\u7528\u6A21\u677F\uFF09","launch.ref":"\u63A5\u529B\u5F15\u7528","launch.refNone":"\uFF08\u4E0D\u5F15\u7528\uFF09","launch.submit":"\u53D1\u8D77","launch.injectTracks":"\u6CE8\u5165 DSH \u8BB0\u5FC6\uFF08\u53EF\u9009\uFF09","launch.injectTracksHint":"\u81EA\u4E3B\u9009\u62E9\u8981\u5E26\u7ED9 COI \u7684\u8BB0\u5FC6\u8F68\uFF08\u4E0E\u5C42\u7EA7 scope \u65E0\u5173\uFF0C\u4EFB\u4F55\u5C42\u7EA7\u90FD\u53EF\u6CE8\u5165\uFF09\uFF1A\u957F\u671F\u8BB0\u5FC6=\u5168\u5C40\u4E8B\u5B9E\u3001\u7528\u6237\u6863\u6848=\u4F60\u7684\u504F\u597D\u3001\u9879\u76EE\u5173\u952E\u8BB0\u5FC6=\u672C\u5DE5\u4F5C\u533A\u9879\u76EE\u6309\u5206\u652F\u8FC7\u6EE4\uFF08\u4E0D\u542B AGENTS.md\uFF09\u3002\u5185\u5BB9\u4F1A\u53D1\u7ED9\u5916\u90E8 COI \u670D\u52A1\uFF0C\u6CE8\u610F\u9690\u79C1\uFF1B\u7559\u7A7A=\u4E0D\u6CE8\u5165","launch.ctxText":"\u9644\u52A0\u4E0A\u4E0B\u6587\u6587\u672C\uFF08\u53EF\u9009\uFF09","launch.ctxTextPh":"\u81EA\u5DF1\u62FC\u63A5\u7684\u4E0A\u4E0B\u6587\uFF1A\u5982\u9879\u76EE\u8FDB\u5C55\u3001\u76F8\u5173\u65E5\u5FD7\u8981\u70B9\u2026\uFF08\u8D85 32KB \u81EA\u52A8\u5199\u6587\u4EF6\u5E76\u628A\u8DEF\u5F84\u544A\u8BC9 COI\uFF09","launch.needPrompt":"\u4EFB\u52A1\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A","launch.ok":"\u5DF2\u53D1\u8D77","tasks.empty":"\u6682\u65E0\u4EFB\u52A1","tasks.selectHint":"\u70B9\u51FB\u5DE6\u4FA7\u4EFB\u52A1\u67E5\u770B\u8BE6\u60C5\u4E0E\u8F93\u51FA","tasks.kill":"\u7EC8\u6B62","tasks.confirmKill":"\u786E\u8BA4\u7EC8\u6B62\u8BE5\u4EFB\u52A1\uFF1F","tasks.killed":"\u5DF2\u7EC8\u6B62","tasks.retry":"\u91CD\u8BD5","tasks.retried":"\u5DF2\u91CD\u65B0\u53D1\u8D77","tasks.copy":"\u590D\u5236","tasks.copied":"\u5DF2\u590D\u5236","tasks.copyFail":"\u590D\u5236\u5931\u8D25","tasks.log":"\u8F93\u51FA\u65E5\u5FD7","tasks.logEmpty":"\uFF08\u6682\u65E0\u8F93\u51FA\uFF09","tasks.logFull":"\u653E\u5927","tasks.prompt":"\u4EFB\u52A1\u5185\u5BB9","tasks.searchPh":"\u641C\u7D22\u4EFB\u52A1\uFF08\u5185\u5BB9/\u4EFB\u52A1 id\uFF09\u2026","tasks.pager.prev":"\u4E0A\u4E00\u9875","tasks.pager.next":"\u4E0B\u4E00\u9875","tasks.pager.total":"\u5171","tasks.delete":"\u5220\u9664","tasks.confirmDelete":`\u5220\u9664\u8BE5\u4EFB\u52A1\uFF1F\u5C06\u79FB\u9664\u4EFB\u52A1\u8BB0\u5F55\u4E0E\u8F93\u51FA\u7559\u6863\uFF08\u5DF2\u6C89\u6DC0\u5230\u8BB0\u5FC6\u7684\u6458\u8981\u4E0D\u53D7\u5F71\u54CD\uFF1B\u88AB\u63A5\u529B\u5F15\u7528\u7684\u4EFB\u52A1\u5220\u9664\u540E\uFF0C\u65B0\u63A5\u529B\u4F1A\u63D0\u793A\u4EFB\u52A1\u4E0D\u5B58\u5728\uFF09\u3002

{id}`,"tasks.status":"\u72B6\u6001","tasks.adapter":"\u9002\u914D\u5668","tasks.scope":"\u8303\u56F4","tasks.branch":"\u5206\u652F","tasks.sessionId":"\u4F1A\u8BDD ID","tasks.created":"\u521B\u5EFA\u65F6\u95F4","tasks.duration":"\u8017\u65F6","tasks.lastOutput":"\u6700\u540E\u8F93\u51FA","tasks.exitCode":"\u9000\u51FA\u7801","tasks.error":"\u9519\u8BEF","sessions.filterScope":"\u8303\u56F4\u8FC7\u6EE4","sessions.searchPh":"\u641C\u7D22\u2026","sessions.note":"\u5907\u6CE8","sessions.save":"\u4FDD\u5B58","sessions.delete":"\u5220\u9664","sessions.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u4F1A\u8BDD\u8BB0\u5F55\uFF1F","sessions.empty":"\u6682\u65E0\u4F1A\u8BDD","sessions.locked":"\u6709\u4EFB\u52A1\u5360\u7528\u4E2D","sessions.lastSeen":"\u6700\u8FD1\u6D3B\u8DC3","adapters.guide":"\u6307\u5357","adapters.test":"\u6D4B\u8BD5","adapters.testOk":"\u6D4B\u8BD5\u4EFB\u52A1\u5DF2\u53D1\u8D77","adapters.skill":"\u6280\u80FD","adapters.skillHint":"\u8BE5\u9002\u914D\u5668\u7684\u4F7F\u7528\u6307\u5357\u6240\u5728\u6280\u80FD\uFF1A\u5B83\u662F\u540C\u6B65\u6CE8\u5165\u7684\u771F\u5B9E\u6709\u6548\u6280\u80FD\uFF08\u6765\u6E90=\u7528\u6237\u6280\u80FD\u5E93\uFF0C\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF09\uFF0CAI \u6BCF\u6B21\u4F1A\u8BDD\u90FD\u80FD\u770B\u5230\uFF1B\u7981\u7528\u8BF7\u5230\u300C\u6280\u80FD\u7BA1\u7406\u300DTab","adapters.skillBtn":"\u6280\u80FD","adapters.editSkillTitle":"\u7F16\u8F91\u6280\u80FD\uFF08AI \u4F7F\u7528\u6307\u5357\uFF09","adapters.editSkillHint":"\u6280\u80FD = AI \u7684\u4F7F\u7528\u6307\u5357\uFF1A\u672C\u6280\u80FD\u5DF2\u540C\u6B65\u6CE8\u5165\u7528\u6237\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\uFF0C\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u91CC\u90FD\u80FD\u770B\u5230\u5B83\uFF0CAI \u636E\u6B64\u6B63\u786E\u8C03\u7528\u672C\u9002\u914D\u5668\u3002\u5728\u8FD9\u91CC\u7F16\u8F91\u5373\u66F4\u65B0 SKILL.md\uFF1B\u63D2\u4EF6\u91CD\u542F\u65F6\u5185\u7F6E\u7248\u672C\u672A\u53D8\u4E0D\u4F1A\u8986\u76D6\u4F60\u7684\u7F16\u8F91\uFF1B\u7981\u7528\u5165\u53E3\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300DTab\u3002","adapters.saveSkill":"\u4FDD\u5B58","adapters.skillSaved":"\u6280\u80FD\u5DF2\u4FDD\u5B58","adapters.skillName":"\u6280\u80FD\u540D\uFF08\u53EF\u9009\uFF09","adapters.skillNamePh":"\u5982 my-cli-skill\uFF08\u8BE5\u6280\u80FD\u7684 SKILL.md \u5C06\u6CE8\u5165 AI \u4E0A\u4E0B\u6587\uFF0CAI \u636E\u6B64\u5B66\u4F1A\u8C03\u7528\u6B64 CLI\uFF09","adapters.useCase":"\u9002\u7528\u573A\u666F","adapters.useCasePh":"\u544A\u8BC9 AI \u4EC0\u4E48\u4EFB\u52A1\u9002\u5408\u7528\u8FD9\u4E2A CLI\uFF0C\u5982\uFF1A\u590D\u6742\u540E\u7AEF\u903B\u8F91/\u6D4B\u8BD5\u4FEE\u590D\u2026","adapters.useCaseEmpty":"\uFF08\u672A\u586B\u5199\u9002\u7528\u573A\u666F\uFF09","adapters.editUseCase":"\u7F16\u8F91\u573A\u666F","adapters.saveUseCase":"\u4FDD\u5B58","adapters.skillContent":"\u6280\u80FD\u5185\u5BB9\uFF08SKILL.md\uFF09","adapters.skillContentPh":`# \u6280\u80FD\u6B63\u6587

\u544A\u8BC9 AI \u5982\u4F55\u8C03\u7528\u8FD9\u4E2A CLI\uFF1A\u547D\u4EE4\u683C\u5F0F\u3001\u53C2\u6570\u3001\u4F1A\u8BDD\u6062\u590D\u65B9\u5F0F\u3001\u6CE8\u610F\u4E8B\u9879\u2026\uFF08frontmatter \u7684 name/description \u4F1A\u81EA\u52A8\u8865\u5168\uFF09`,"adapters.skillContentHint":"\u7559\u7A7A = \u53EA\u5173\u8054\u6280\u80FD\u540D\uFF08\u6280\u80FD\u6587\u4EF6\u9700\u53E6\u5916\u521B\u5EFA\uFF0C\u53EF\u6DFB\u52A0\u540E\u5230\u300C\u6280\u80FD\u300D\u6309\u94AE\u91CC\u7F16\u8F91\uFF09\uFF1B\u586B\u5199 = \u6280\u80FD\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u521B\u5EFA",cancel:"\u53D6\u6D88",saving:"\u4FDD\u5B58\u4E2D\u2026","adapters.addTitle":"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u9002\u914D\u5668","adapters.name":"\u540D\u79F0","adapters.type":"\u7C7B\u578B","adapters.binary":"\u53EF\u6267\u884C\u6587\u4EF6","adapters.args":"\u53C2\u6570","adapters.argsPh":"\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A-p, {task}","adapters.add":"\u6DFB\u52A0","adapters.delete":"\u5220\u9664","adapters.enable":"\u542F\u7528","adapters.disable":"\u7981\u7528","adapters.disabledHint":"\u5DF2\u7981\u7528\uFF1AAI \u8C03\u5EA6\u6B64\u9002\u914D\u5668\u4F1A\u88AB\u62D2\u7EDD\u5E76\u63D0\u793A\u6362\u7528\u5176\u4ED6\u53EF\u7528\u9879","adapters.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u81EA\u5B9A\u4E49\u9002\u914D\u5668\uFF1F","adapters.builtin":"\u5185\u7F6E","adapters.custom":"\u81EA\u5B9A\u4E49","adapters.resumeSection":"\u4F1A\u8BDD\u6062\u590D\u914D\u7F6E\uFF08ai-cli \u5FC5\u586B\uFF09","adapters.resumeSectionHint":"ai-cli \u7C7B\u578B\u5FC5\u987B\u6709\u6307\u5B9A\u4F1A\u8BDD\u6062\u590D\u80FD\u529B\uFF1B\u6CA1\u6709\u6062\u590D\u80FD\u529B\u7684 CLI \u8BF7\u9009 plain-cli \u7C7B\u578B","adapters.resumeKind":"\u6062\u590D\u65B9\u5F0F","adapters.resumeKindFlag":"flag \u6A21\u5F0F\uFF08\u6062\u590D\u53C2\u6570\u63D2\u5728\u57FA\u7840\u53C2\u6570\u524D\uFF09","adapters.resumeKindArgs":"args \u6A21\u5F0F\uFF08\u5B8C\u6574\u6062\u590D\u547D\u4EE4\uFF09","adapters.resumeFlag":"\u6062\u590D flag","adapters.resumeFlagPh":"\u5982 -S / -r / --resume","adapters.resumeArg":"\u4F1A\u8BDD\u53C2\u6570","adapters.resumeArgPh":"\u542B {sessionId} \u5360\u4F4D\u7B26\uFF0C\u5982 {sessionId}","adapters.resumeArgs":"\u6062\u590D\u547D\u4EE4\u53C2\u6570","adapters.resumeArgsPh":"\u9017\u53F7\u5206\u9694\uFF0C\u542B {sessionId}\uFF08\u53CA\u53EF\u9009 {task}\uFF09\uFF0C\u5982 exec, resume, {sessionId}, {task}","adapters.continueFlag":"\u6700\u8FD1\u4F1A\u8BDD\u6062\u590D flag\uFF08\u53EF\u9009\uFF09","adapters.continueFlagPh":'\u5982 -c\uFF1B\u7559\u7A7A = \u4E0D\u652F\u6301"\u6700\u8FD1\u4F1A\u8BDD"\u6062\u590D',"adapters.extractSection":"\u4F1A\u8BDD ID \u81EA\u52A8\u63D0\u53D6\uFF08\u53EF\u9009\uFF09","adapters.extractSource":"\u8F93\u51FA\u6D41","adapters.extractRegex":"\u63D0\u53D6\u6B63\u5219","adapters.extractRegexPh":"\u6355\u83B7\u7EC4 1 \u4E3A\u4F1A\u8BDD ID\uFF0C\u5982 To resume this session: kimi -r (session_\\S+)","adapters.resumeMissing":"ai-cli \u7C7B\u578B\u5FC5\u987B\u586B\u5199\u4F1A\u8BDD\u6062\u590D\u914D\u7F6E\uFF08resume\uFF09","templates.addTitle":"\u6DFB\u52A0\u6A21\u677F","templates.name":"\u540D\u79F0","templates.prompt":"\u4EFB\u52A1\u5185\u5BB9","templates.adapterOpt":"\u9002\u914D\u5668\uFF08\u53EF\u9009\uFF09","templates.idOpt":"ID\uFF08\u53EF\u9009\uFF0C\u4E0D\u586B\u81EA\u52A8\uFF09","templates.add":"\u6DFB\u52A0","templates.delete":"\u5220\u9664","templates.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u6A21\u677F\uFF1F","templates.builtinKeep":"\u5185\u7F6E\u6A21\u677F\u4E0D\u53EF\u5220\u9664","templates.empty":"\u6682\u65E0\u6A21\u677F","stats.total":"\u603B\u4EFB\u52A1\u6570","stats.count":"\u4EFB\u52A1\u6570","stats.hours":"\u7D2F\u8BA1\u65F6\u957F","stats.byStatus":"\u72B6\u6001\u5206\u5E03","stats.empty":"\u6682\u65E0\u7EDF\u8BA1\u6570\u636E","config.notify":"\u901A\u77E5\u547D\u4EE4","config.notifyHint":"\u4EFB\u52A1\u7ED3\u675F\u65F6\u6267\u884C\uFF1B\u5360\u4F4D\u7B26\uFF1A{taskId} {coi} {status} {summary}","config.retention":"\u4EFB\u52A1\u4FDD\u7559\u5929\u6570","config.timeout":"\u4EFB\u52A1\u8D85\u65F6","config.timeoutHours":"\u5C0F\u65F6","config.timeoutMinutes":"\u5206\u949F","config.timeoutHint":"\u8D85\u65F6\u4EC5\u4F5C\u515C\u5E95\u9632\u7EBF\uFF08AI \u4EFB\u52A1\u53EF\u80FD\u6570\u5C0F\u65F6\u65E0\u8F93\u51FA\u5C5E\u6B63\u5E38\uFF09\uFF1B\u7559\u7A7A = \u4E0D\u4FEE\u6539","config.timeoutBad":"\u8D85\u65F6\u683C\u5F0F\u4E0D\u6B63\u786E","config.save":"\u4FDD\u5B58","config.saved":"\u5DF2\u4FDD\u5B58","scope.temporary":"\u4E34\u65F6","scope.session":"\u4F1A\u8BDD","scope.project":"\u9879\u76EE","scope.global":"\u5168\u5C40"},en:{tab:"CLI Dispatch",guide:"Guide","guide.title":"COI Dispatch Guide","guide.intro":'COI Dispatch = the "external helper console" for handing tasks to external AI agents (kimi / codex / grok / hermes\u2026): tasks run in the background without blocking your session; progress and logs are live; sessions are tiered and resumable in one click; tasks can chain across agents; results are archived and distilled into memory. Off by default \u2014 enable "COI dispatch" under Config in the Memory Evolve Settings tab.',"guide.use.title":"How to launch a task","guide.use.desc":"Three entries, pick any:","guide.use.ai":"Tell the AI:","guide.use.aiDesc":'Say "dispatch XX to kimi / have codex fix the tests" \u2014 the AI launches it via de_coi_dispatch, it runs in the background, and on completion the summary is automatically written into the project log and daily log.',"guide.use.slash":"Terminal command:","guide.use.slashDesc":'/de_coi run "task" --coi kimi (see all subcommands: /de_coi help).',"guide.use.tab":"This tab:","guide.use.tabDesc":'In the Tasks page fill in the adapter, prompt and scope; optionally resume a session / use a template / chain a reference task; you can also tick "inject DSH memory" so the helper carries your project conventions, attach context text or images; hit launch and watch progress and output live.',"guide.scope.title":"Session tiers (who can see)","guide.scope.desc":"Tasks and sessions belong to a tier, which decides who can see and resume them:","guide.scope.temp":"Visible only to the launching session; one-off (use for testing an adapter).","guide.scope.session":"Visible only to the launching session; resumable within it.","guide.scope.project":"Visible to all sessions of the project (same working directory); can carry a git branch.","guide.scope.global":"Visible to every session; kept long-term.","guide.skill.title":"Adapters & skills","guide.skill.desc":"Every adapter maps to a skill (the AI usage guide, injected into the model context): the four built-ins work out of the box; custom CLIs can be added in the Adapters page (plain-cli included) \u2014 fill the skill name and content and the AI learns to drive it. Skills can be disabled in the Skill Manager tab and edited via the Skill button on the adapter page.","guide.tips.title":"Best practices","guide.tips.1":"Division of labor: frontend\u2192kimi, complex backend\u2192codex, quick tasks\u2192grok.","guide.tips.2":'Chaining: codex writes code \u2192 kimi reviews (pick "reference task" when launching).',"guide.tips.3":"Note important sessions (the note button in the sessions page) so you can find them by name when resuming.","guide.tips.4":"Tasks can push a notification on completion (set the notify command in the config page, e.g. hermes send to WeChat).","guide.tips.5":'Tick "inject DSH memory" when dispatching and the helper works with your global rules, profile and this project key facts (branch-filtered, same rules as DSH injection); tasks can also carry images \u2014 send a screenshot for analysis (codex / kimi / hermes read images; zcode is text-only and will refuse clearly).',"guide.loop":"The loop: dispatch \u2192 watch progress live \u2192 archive the result \u2192 distill the summary into memory \u2192 resume and chain the session.",tasks:"Tasks",sessions:"Sessions",adapters:"Adapters",templates:"Templates",stats:"Stats",config:"Config",loading:"Loading\u2026",refresh:"Refresh",all:"All",none:"(none)","launch.title":"Launch task","launch.expand":"Expand","launch.collapse":"Collapse","launch.adapter":"Adapter","launch.prompt":"Prompt","launch.promptPh":"e.g. fix the failing cases in tests/store.test.js and verify","launch.scope":"Scope","launch.session":"Resume session","launch.sessionNone":"(new session)","launch.sessionEmpty":"(no sessions for this adapter)","launch.template":"Template","launch.templateNone":"(no template)","launch.ref":"Relay ref","launch.refNone":"(none)","launch.submit":"Launch","launch.injectTracks":"Inject DSH memory (optional)","launch.injectTracksHint":"Pick which memory tracks to hand to the COI (independent of scope \u2014 any tier can inject): long-term memory=global facts, user profile=your preferences, project key=this workspace's key facts (branch-filtered; no AGENTS.md). Content is sent to external COI services \u2014 mind privacy; empty = no injection","launch.ctxText":"Extra context text (optional)","launch.ctxTextPh":"Your own context: project progress, log highlights\u2026 (over 32KB it is written to a file and the path is given to the COI)","launch.needPrompt":"Prompt must not be empty","launch.ok":"Launched","tasks.empty":"No tasks yet","tasks.selectHint":"Click a task on the left to view details and output","tasks.kill":"Kill","tasks.confirmKill":"Kill this task?","tasks.killed":"Killed","tasks.retry":"Retry","tasks.retried":"Re-launched","tasks.copy":"Copy","tasks.copied":"Copied","tasks.copyFail":"Copy failed","tasks.log":"Output log","tasks.logEmpty":"(no output yet)","tasks.logFull":"Expand","tasks.prompt":"Task prompt","tasks.searchPh":"Search tasks (content / task id)\u2026","tasks.pager.prev":"Prev","tasks.pager.next":"Next","tasks.pager.total":"of","tasks.delete":"Delete","tasks.confirmDelete":`Delete this task? Its record and output archive will be removed (memory summaries are unaffected; relay references to it will fail afterwards).

{id}`,"tasks.status":"Status","tasks.adapter":"Adapter","tasks.scope":"Scope","tasks.branch":"Branch","tasks.sessionId":"Session ID","tasks.created":"Created","tasks.duration":"Duration","tasks.lastOutput":"Last output","tasks.exitCode":"Exit code","tasks.error":"Error","sessions.filterScope":"Scope filter","sessions.searchPh":"Search\u2026","sessions.note":"Note","sessions.save":"Save","sessions.delete":"Delete","sessions.confirmDelete":"Delete this session record?","sessions.empty":"No sessions","sessions.locked":"Occupied by a task","sessions.lastSeen":"Last seen","adapters.guide":"Guide","adapters.test":"Test","adapters.testOk":"Test task launched","adapters.skill":"Skill","adapters.skillHint":"The skill holding this adapter's usage guide: a real injected skill (source = user skill library, injected into every session's system prompt); disable it via the Skill Manager tab","adapters.skillBtn":"Skill","adapters.editSkillTitle":"Edit skill (AI usage guide)","adapters.editSkillHint":"The skill IS the AI usage guide: it is synced into the user skill library (~/.agents/skills) and injected into every session's system prompt, so the AI knows how to drive this adapter. Editing here updates that SKILL.md; plugin restarts will not overwrite your edits while the built-in version is unchanged; disable it via the Skill Manager tab.","adapters.saveSkill":"Save","adapters.skillSaved":"Skill saved","adapters.skillName":"Skill name (optional)","adapters.skillNamePh":"e.g. my-cli-skill (that SKILL.md will be injected into the AI context so the AI learns how to use this CLI)","adapters.useCase":"Use case","adapters.useCasePh":"Tell the AI which tasks suit this CLI, e.g. complex backend logic / test fixes\u2026","adapters.useCaseEmpty":"(no use case set)","adapters.editUseCase":"Edit","adapters.saveUseCase":"Save","adapters.skillContent":"Skill content (SKILL.md)","adapters.skillContentPh":`# Skill body

Tell the AI how to drive this CLI: command format, args, session resume, caveats\u2026 (frontmatter name/description are auto-completed)`,"adapters.skillContentHint":"Leave empty = link the skill name only (create the file later via the Skill button); filled = the skill is auto-created when missing",cancel:"Cancel",saving:"Saving\u2026","adapters.addTitle":"Add custom adapter","adapters.name":"Name","adapters.type":"Type","adapters.binary":"Binary","adapters.args":"Args","adapters.argsPh":"comma separated, e.g.: -p, {task}","adapters.add":"Add","adapters.delete":"Delete","adapters.enable":"Enable","adapters.disable":"Disable","adapters.disabledHint":"Disabled: dispatching to this adapter is rejected with a hint to use another one","adapters.confirmDelete":"Delete this custom adapter?","adapters.builtin":"builtin","adapters.custom":"custom","adapters.resumeSection":"Session resume (required for ai-cli)","adapters.resumeSectionHint":"ai-cli must support resuming a named session; CLIs without resume support should use plain-cli","adapters.resumeKind":"Resume mode","adapters.resumeKindFlag":"flag mode (resume flag + arg prepended to base args)","adapters.resumeKindArgs":"args mode (full resume command)","adapters.resumeFlag":"Resume flag","adapters.resumeFlagPh":"e.g. -S / -r / --resume","adapters.resumeArg":"Session arg","adapters.resumeArgPh":"with {sessionId} placeholder, e.g. {sessionId}","adapters.resumeArgs":"Resume command args","adapters.resumeArgsPh":"comma separated, with {sessionId} (and optional {task}), e.g. exec, resume, {sessionId}, {task}","adapters.continueFlag":"Continue-last flag (optional)","adapters.continueFlagPh":"e.g. -c; leave empty = no \u201Ccontinue last session\u201D support","adapters.extractSection":"Auto session-ID extraction (optional)","adapters.extractSource":"Output stream","adapters.extractRegex":"Extract regex","adapters.extractRegexPh":"capture group 1 = session ID, e.g. To resume this session: kimi -r (session_\\S+)","adapters.resumeMissing":"ai-cli requires a session resume config","templates.addTitle":"Add template","templates.name":"Name","templates.prompt":"Prompt","templates.adapterOpt":"Adapter (optional)","templates.idOpt":"ID (optional, auto if empty)","templates.add":"Add","templates.delete":"Delete","templates.confirmDelete":"Delete this template?","templates.builtinKeep":"Builtin templates cannot be deleted","templates.empty":"No templates","stats.total":"Total tasks","stats.count":"Tasks","stats.hours":"Total time","stats.byStatus":"By status","stats.empty":"No stats yet","config.notify":"Notify command","config.notifyHint":"Runs when a task finishes; placeholders: {taskId} {coi} {status} {summary}","config.retention":"Retention days","config.timeout":"Task timeout","config.timeoutHours":"hours","config.timeoutMinutes":"minutes","config.timeoutHint":"Timeout is a safety net only (AI agents may stay quiet for hours); leave empty to keep current","config.timeoutBad":"Bad timeout format","config.save":"Save","config.saved":"Saved","scope.temporary":"temporary","scope.session":"session","scope.project":"project","scope.global":"global"}},Lt=typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"en":"zh";function f(t){return Rs[Lt][t]??Rs.en[t]??t}var Nr="/memory-evolve/api/coi";async function ht(t,e){let a=await fetch(`${Nr}${t}`,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.message??o.error??`HTTP ${a.status}`);return o}function Dt(t,e){return ht(t,{method:"POST",body:JSON.stringify(e??{})})}function Ja(t){return ht(t,{method:"DELETE"})}function mt(t){let e=t instanceof Error?t.message:String(t);return e!==void 0&&e.trim()!==""?e:"\u64CD\u4F5C\u5931\u8D25\uFF08\u65E0\u9519\u8BEF\u8BE6\u60C5\uFF09"}function sa(t,e){return t!==void 0&&t.trim()!==""?t:e}function Ra(t){return t<10?`0${t}`:String(t)}function ho(t){if(t==null)return"\u2014";let e=new Date(t);return`${e.getFullYear()}-${Ra(e.getMonth()+1)}-${Ra(e.getDate())} ${Ra(e.getHours())}:${Ra(e.getMinutes())}:${Ra(e.getSeconds())}`}function Sr(t){if(t==null)return"\u2014";let e=Math.max(0,Date.now()-t);if(e<5e3)return Lt==="zh"?"\u521A\u521A":"just now";let a=Math.floor(e/1e3);if(a<60)return Lt==="zh"?`${a} \u79D2\u524D`:`${a}s ago`;let o=Math.floor(a/60);if(o<60)return Lt==="zh"?`${o} \u5206\u949F\u524D`:`${o}m ago`;let s=Math.floor(o/60);return Lt==="zh"?`${s} \u5C0F\u65F6\u524D`:`${s}h ago`}function Cr(t){if(t==null||t<0)return"\u2014";if(t<1e3)return`${Math.round(t)}ms`;let e=Math.floor(t/1e3);if(e<60)return`${e}s`;let a=Math.floor(e/60);return a<60?`${a}m ${e%60}s`:`${Math.floor(a/60)}h ${a%60}m`}function Ka(t,e=40){let a=t.replace(/\s+/g," ").trim();return a.length>e?`${a.slice(0,e)}\u2026`:a}var Er={queued:{icon:"\u23F3",label:Lt==="zh"?"\u6392\u961F\u4E2D":"Queued",cls:"coi-status-queued"},running:{icon:"\u23F3",label:Lt==="zh"?"\u8FD0\u884C\u4E2D":"Running",cls:"coi-status-running"},completed:{icon:"\u2705",label:Lt==="zh"?"\u5DF2\u5B8C\u6210":"Completed",cls:"coi-status-completed"},failed:{icon:"\u274C",label:Lt==="zh"?"\u5931\u8D25":"Failed",cls:"coi-status-failed"},killed:{icon:"\u{1F6D1}",label:Lt==="zh"?"\u5DF2\u7EC8\u6B62":"Killed",cls:"coi-status-killed"},interrupted:{icon:"\u26A0\uFE0F",label:Lt==="zh"?"\u4E2D\u65AD":"Interrupted",cls:"coi-status-interrupted"}};function La(t){return Er[t]??{icon:"\u2754",label:t,cls:""}}var Ls=["temporary","session","project","global"],Ir=new Set(["kimi","codex","grok","hermes"]),Ms=new Set(["review-code","fix-tests","summarize-logs","architecture-analysis"]),Pr=3e3,Ar=2e3,Ma=20;function Da(t){return t.notice===null?null:(0,n.jsx)("div",{className:`coi-notice coi-notice-${t.notice.kind}`,children:t.notice.text})}function ha(t){return t.error===null?null:(0,n.jsx)("div",{className:"coi-error",children:t.error})}function Ds(t){let e=t.sessionId,[a,o]=(0,K.useState)("tasks");return(0,n.jsxs)("div",{className:"coi-root",children:[(0,n.jsx)("div",{className:"coi-tabs",role:"tablist",children:[{id:"guide",key:"guide"},{id:"tasks",key:"tasks"},{id:"sessions",key:"sessions"},{id:"adapters",key:"adapters"},{id:"templates",key:"templates"},{id:"stats",key:"stats"},{id:"config",key:"config"}].map(i=>(0,n.jsx)("button",{type:"button",role:"tab","aria-selected":a===i.id,className:`coi-tab${a===i.id?" coi-tab-active":""}`,onClick:()=>o(i.id),children:f(i.key)},i.id))}),(0,n.jsxs)("div",{className:"coi-body",children:[a==="guide"&&(0,n.jsx)(jr,{}),a==="tasks"&&(0,n.jsx)(Rr,{dsSessionId:e}),a==="sessions"&&(0,n.jsx)(Mr,{dsSessionId:e}),a==="adapters"&&(0,n.jsx)(Lr,{}),a==="templates"&&(0,n.jsx)(Dr,{}),a==="stats"&&(0,n.jsx)(Or,{}),a==="config"&&(0,n.jsx)(zr,{})]})]})}function jr(){return(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsx)("div",{className:"coi-card-title",children:f("guide.title")}),(0,n.jsx)("p",{className:"coi-muted",children:f("guide.intro")})]}),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("div",{className:"coi-card-title",children:["\u{1F680} ",f("guide.use.title")]}),(0,n.jsx)("p",{className:"coi-muted",children:f("guide.use.desc")}),(0,n.jsxs)("ul",{className:"coi-guide-list",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("guide.use.ai")}),f("guide.use.aiDesc")]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("guide.use.slash")}),f("guide.use.slashDesc")]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("guide.use.tab")}),f("guide.use.tabDesc")]})]})]}),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("div",{className:"coi-card-title",children:["\u{1F5C2}\uFE0F ",f("guide.scope.title")]}),(0,n.jsx)("p",{className:"coi-muted",children:f("guide.scope.desc")}),(0,n.jsxs)("ul",{className:"coi-guide-list",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("scope.temporary")}),"\uFF1A",f("guide.scope.temp")]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("scope.session")}),"\uFF1A",f("guide.scope.session")]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("scope.project")}),"\uFF1A",f("guide.scope.project")]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:f("scope.global")}),"\uFF1A",f("guide.scope.global")]})]})]}),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("div",{className:"coi-card-title",children:["\u{1F9ED} ",f("guide.skill.title")]}),(0,n.jsx)("p",{className:"coi-muted",children:f("guide.skill.desc")})]}),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("div",{className:"coi-card-title",children:["\u{1F4A1} ",f("guide.tips.title")]}),(0,n.jsxs)("ul",{className:"coi-guide-list",children:[(0,n.jsx)("li",{children:f("guide.tips.1")}),(0,n.jsx)("li",{children:f("guide.tips.2")}),(0,n.jsx)("li",{children:f("guide.tips.3")}),(0,n.jsx)("li",{children:f("guide.tips.4")})]})]}),(0,n.jsx)("p",{className:"coi-muted coi-pad",children:f("guide.loop")})]})}function Rr({dsSessionId:t}){let e=(t??"")!==""?`&sessionId=${encodeURIComponent(String(t))}`:"",[a,o]=(0,K.useState)([]),[s,i]=(0,K.useState)([]),[l,c]=(0,K.useState)([]),[g,b]=(0,K.useState)([]),[m,h]=(0,K.useState)(null),[k,A]=(0,K.useState)(1),[F,M]=(0,K.useState)(0),[B,S]=(0,K.useState)(null),[V,y]=(0,K.useState)(null),[D,w]=(0,K.useState)("kimi"),[O,X]=(0,K.useState)(""),[C,u]=(0,K.useState)("session"),[r,v]=(0,K.useState)(""),[_,L]=(0,K.useState)(""),[G,q]=(0,K.useState)(""),[ce,Re]=(0,K.useState)(!1),[Te,Ce]=(0,K.useState)([]),[Q,Ye]=(0,K.useState)(""),[Ie,be]=(0,K.useState)(!1),[j,ge]=(0,K.useState)(null),[re,Ue]=(0,K.useState)(null),[Le,Ae]=(0,K.useState)(""),[Ee,Ne]=(0,K.useState)(null),[ye,we]=(0,K.useState)(!1),[Qe,Me]=(0,K.useState)(!1),[Ke,R]=(0,K.useState)(!1),[H,De]=(0,K.useState)(""),Pe=(0,K.useRef)(null),We=(0,K.useRef)(null),E=(0,K.useRef)(null);(0,K.useEffect)(()=>{E.current=j},[j]);let Z=(0,K.useCallback)(async()=>{try{let I=H.trim(),me=await ht(`/tasks?page=${k}&pageSize=${Ma}${e}${I!==""?`&q=${encodeURIComponent(I)}`:""}`);if(me.tasks.length===0&&me.total>0&&k>1){A(Math.max(1,Math.ceil(me.total/Ma)));return}h(me.tasks),M(me.total),S(null)}catch(I){S(mt(I))}},[H,k]),ve=(0,K.useCallback)(async I=>{try{let me=await ht(`/tasks/${encodeURIComponent(I)}`);Ue(me.task)}catch(me){y({kind:"error",text:mt(me)})}},[]),Ve=async I=>{if(window.confirm(f("tasks.confirmDelete").replace("{id}",I)))try{let me=await Ja(`/tasks/${encodeURIComponent(I)}`);if(me.ok!==!0){y({kind:"error",text:sa(me.message,"\u5220\u9664\u5931\u8D25")});return}ge(null),Ue(null),Z(),y({kind:"ok",text:me.message??"\u5DF2\u5220\u9664"})}catch(me){y({kind:"error",text:mt(me)})}},z=(0,K.useCallback)(async I=>{try{let me=await ht(`/tasks/${encodeURIComponent(I)}/log?tail=8000`);Ae(me.text),Ne(null)}catch(me){Ne(mt(me))}},[]);(0,K.useEffect)(()=>{Z();let I=setInterval(()=>{Z();let me=E.current;me!==null&&ve(me)},Pr);return()=>clearInterval(I)},[Z,ve]),(0,K.useEffect)(()=>{ht("/adapters").then(I=>{o(I.adapters),w(me=>I.adapters.some(it=>it.id===me)?me:I.adapters[0]?.id??me)}).catch(()=>{}),ht("/templates").then(I=>i(I.templates)).catch(()=>{}),ht(`/sessions?${e.slice(1)}`).then(I=>c(I.sessions)).catch(()=>{}),ht(`/tasks?status=completed&limit=50${e}`).then(I=>b(I.tasks)).catch(()=>{})},[]),(0,K.useEffect)(()=>{if(j===null){Ue(null);return}Ue(null),Ae(""),Ne(null),ve(j),z(j)},[j,ve,z]);let Se=re!==null&&(re.status==="running"||re.status==="queued");(0,K.useEffect)(()=>{if(j===null||!Se)return;let I=setInterval(()=>{z(j),ve(j)},Ar);return()=>clearInterval(I)},[j,Se,z,ve]),(0,K.useEffect)(()=>{let I=Pe.current;I!==null&&(I.scrollTop=I.scrollHeight);let me=We.current;me!==null&&(me.scrollTop=me.scrollHeight)},[Le]);let lt=I=>{L(I);let me=s.find(it=>it.id===I);me!==void 0&&(X(me.prompt),me.adapterId!==void 0&&w(me.adapterId),me.scope!==void 0&&u(me.scope))},Je=async()=>{if(O.trim()===""){y({kind:"error",text:f("launch.needPrompt")});return}Re(!0);try{let I={adapterId:D,prompt:O,scope:C};C!=="temporary"&&r!==""&&(I.sessionId=r),_!==""&&(I.templateId=_),G!==""&&(I.refTaskId=G);let me=await Dt("/tasks",{...I,dsSessionId:t??"",injectTracks:Te.length>0?Te:void 0,contextText:Q.trim()===""?void 0:Q});y({kind:"ok",text:`${f("launch.ok")}${me.taskId!==void 0?`\uFF1A${me.taskId}`:""}`}),X(""),L(""),q(""),Z(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch(I){y({kind:"error",text:mt(I)})}finally{Re(!1)}},ut=async()=>{if(re!==null&&window.confirm(f("tasks.confirmKill")))try{await Dt(`/tasks/${encodeURIComponent(re.id)}/cancel`,{force:!1}),y({kind:"ok",text:f("tasks.killed")}),Z(),ve(re.id)}catch(I){let me=mt(I);if(window.confirm(me))try{await Dt(`/tasks/${encodeURIComponent(re.id)}/cancel`,{force:!0}),y({kind:"ok",text:f("tasks.killed")}),Z(),ve(re.id)}catch(it){y({kind:"error",text:mt(it)})}}},fe=async()=>{if(re!==null)try{let I=await Dt(`/tasks/${encodeURIComponent(re.id)}/retry`);y({kind:"ok",text:I.message??`${f("tasks.retried")}${I.taskId!==void 0?`\uFF1A${I.taskId}`:""}`}),Z()}catch(I){y({kind:"error",text:mt(I)})}},nt=async I=>{try{await navigator.clipboard.writeText(I),we(!0),setTimeout(()=>we(!1),1500)}catch{y({kind:"error",text:f("tasks.copyFail")})}},wt=I=>I.startedAt===null?null:I.finishedAt!==null?I.finishedAt-I.startedAt:I.status==="running"?Date.now()-I.startedAt:null;return(0,n.jsxs)("div",{className:"coi-pane coi-tasks",children:[(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("div",{className:"coi-card-head",children:[(0,n.jsx)("span",{className:"coi-card-title",children:f("launch.title")}),(0,n.jsx)("span",{className:"coi-grow"}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>be(!Ie),children:f(Ie?"launch.collapse":"launch.expand")})]}),Ie&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"coi-form-grid",children:[(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.adapter")}),(0,n.jsxs)("select",{className:"coi-select",value:D,onChange:I=>{let me=I.target.value;w(me),r!==""&&!l.some(it=>it.id===r&&it.adapterId===me)&&v("")},children:[a.map(I=>(0,n.jsxs)("option",{value:I.id,children:[I.name,"\uFF08",I.id,"\uFF09"]},I.id)),a.length===0&&(0,n.jsx)("option",{value:D,children:D})]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.scope")}),(0,n.jsx)("select",{className:"coi-select",value:C,onChange:I=>u(I.target.value),children:Ls.map(I=>(0,n.jsx)("option",{value:I,children:f(`scope.${I}`)},I))})]}),C!=="temporary"&&(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.session")}),(0,n.jsxs)("select",{className:"coi-select",value:r,onChange:I=>v(I.target.value),children:[(0,n.jsx)("option",{value:"",children:f("launch.sessionNone")}),l.filter(I=>I.adapterId===D).map(I=>(0,n.jsxs)("option",{value:I.id,children:[I.id,"\uFF08",I.adapterId,I.note!==null&&I.note!==""?` \xB7 ${Ka(I.note,12)}`:"","\uFF09"]},I.id)),l.filter(I=>I.adapterId===D).length===0&&(0,n.jsx)("option",{value:"",disabled:!0,children:f("launch.sessionEmpty")})]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.template")}),(0,n.jsxs)("select",{className:"coi-select",value:_,onChange:I=>lt(I.target.value),children:[(0,n.jsx)("option",{value:"",children:f("launch.templateNone")}),s.map(I=>(0,n.jsxs)("option",{value:I.id,children:[I.name,"\uFF08",I.id,"\uFF09"]},I.id))]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.ref")}),(0,n.jsxs)("select",{className:"coi-select",value:G,onChange:I=>q(I.target.value),children:[(0,n.jsx)("option",{value:"",children:f("launch.refNone")}),g.map(I=>(0,n.jsxs)("option",{value:I.id,children:[I.id," \xB7 ",Ka(I.prompt,24)]},I.id))]})]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.prompt")}),(0,n.jsx)("textarea",{className:"coi-textarea coi-textarea-lg",rows:6,placeholder:f("launch.promptPh"),value:O,onChange:I=>X(I.target.value)})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-field-check",children:(0,n.jsx)("span",{className:"coi-label",children:f("launch.injectTracks")})}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("launch.injectTracksHint")})]}),(0,n.jsx)("label",{className:"coi-field coi-field-wide coi-inject-track-line",children:["memory","user","key"].map(I=>(0,n.jsxs)("span",{className:"coi-field-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:Te.includes(I),onChange:me=>Ce(me.target.checked?[...Te,I]:Te.filter(it=>it!==I))}),(0,n.jsx)("span",{className:"coi-label",children:I})]},I))}),Te.length>0&&(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("launch.ctxText")}),(0,n.jsx)("textarea",{className:"coi-textarea",rows:4,value:Q,onChange:I=>Ye(I.target.value),placeholder:f("launch.ctxTextPh")})]}),(0,n.jsx)("div",{className:"coi-form-actions",children:(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:ce,onClick:()=>{Je()},children:f("launch.submit")})})]})]}),(0,n.jsx)(Da,{notice:V}),(0,n.jsx)("div",{className:"coi-task-toolbar",children:(0,n.jsx)("input",{className:"coi-input",placeholder:f("tasks.searchPh"),value:H,onChange:I=>{De(I.target.value),A(1)}})}),(0,n.jsxs)("div",{className:"coi-split",children:[(0,n.jsxs)("div",{className:"coi-task-list",children:[(0,n.jsx)(ha,{error:B}),m===null&&B===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),m!==null&&m.length===0&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("tasks.empty")}),m?.map(I=>{let me=La(I.status);return(0,n.jsxs)("button",{type:"button",className:`coi-task-row${j===I.id?" coi-task-row-active":""}`,onClick:()=>ge(I.id),children:[(0,n.jsx)("span",{className:`coi-task-status ${me.cls}`,title:me.label,children:me.icon}),(0,n.jsx)("span",{className:"coi-mono coi-task-id",children:I.id}),(0,n.jsx)("span",{className:"coi-task-adapter",children:I.adapterId}),(0,n.jsx)("span",{className:"coi-task-prompt",title:I.prompt,children:Ka(I.prompt)}),(0,n.jsx)("span",{className:"coi-badge",children:f("scope."+I.scope)??I.scope}),(0,n.jsx)("span",{className:"coi-muted coi-task-time",children:ho(I.createdAt)})]},I.id)}),m!==null&&F>Ma&&(0,n.jsxs)("div",{className:"coi-pager",children:[(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",disabled:k<=1,onClick:()=>A(I=>Math.max(1,I-1)),children:["\u2039 ",f("tasks.pager.prev")]}),(0,n.jsxs)("span",{className:"coi-pager-info",children:[k," / ",Math.max(1,Math.ceil(F/Ma))," \xB7 ",f("tasks.pager.total")," ",F]}),(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",disabled:k>=Math.max(1,Math.ceil(F/Ma)),onClick:()=>A(I=>I+1),children:[f("tasks.pager.next")," \u203A"]})]})]}),(0,n.jsxs)("div",{className:"coi-detail",children:[j===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("tasks.selectHint")}),j!==null&&re===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),re!==null&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"coi-detail-meta",children:[(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.status")}),(0,n.jsxs)("span",{className:La(re.status).cls,children:[La(re.status).icon," ",La(re.status).label]})]}),(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.adapter")}),(0,n.jsx)("span",{children:re.adapterId})]}),(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.scope")}),(0,n.jsx)("span",{className:"coi-badge",children:f("scope."+re.scope)??re.scope})]}),re.branch!==null&&(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.branch")}),(0,n.jsx)("span",{className:"coi-mono",children:re.branch})]}),re.sessionId!==null&&(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.sessionId")}),(0,n.jsx)("span",{className:"coi-mono coi-small",children:re.sessionId}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{nt(re.sessionId??"")},children:f(ye?"tasks.copied":"tasks.copy")})]}),(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.created")}),(0,n.jsx)("span",{children:ho(re.createdAt)})]}),(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.duration")}),(0,n.jsx)("span",{children:Cr(wt(re))})]}),Se&&re.lastOutputAt!=null&&(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.lastOutput")}),(0,n.jsx)("span",{children:Sr(re.lastOutputAt)})]}),re.exitCode!==null&&(0,n.jsxs)("div",{className:"coi-meta-row",children:[(0,n.jsx)("span",{className:"coi-label",children:f("tasks.exitCode")}),(0,n.jsx)("span",{className:"coi-mono",children:re.exitCode})]})]}),(0,n.jsxs)("div",{className:"coi-detail-actions",children:[Se&&(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-danger",onClick:()=>{ut()},children:["\u{1F6D1} ",f("tasks.kill")]}),!Se&&(0,n.jsxs)("button",{type:"button",className:"coi-btn",onClick:()=>{fe()},children:["\u21BB ",f("tasks.retry")]}),!Se&&(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-danger",onClick:()=>{Ve(re.id)},children:["\u{1F5D1} ",f("tasks.delete")]})]}),re.error!==null&&re.error!==""&&(0,n.jsxs)("div",{className:"coi-error",children:[f("tasks.error"),"\uFF1A",re.error]}),(0,n.jsxs)("div",{className:"coi-log-head",children:[(0,n.jsx)("span",{className:"coi-label coi-log-title",children:f("tasks.prompt")}),(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>R(!0),children:["\u26F6 ",f("tasks.logFull")]})]}),(0,n.jsx)("pre",{className:"coi-prompt-view",children:re.prompt}),(0,n.jsxs)("div",{className:"coi-log-head",children:[(0,n.jsx)("span",{className:"coi-label coi-log-title",children:f("tasks.log")}),(0,n.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>Me(!0),children:["\u26F6 ",f("tasks.logFull")]})]}),Ee!==null&&(0,n.jsx)("div",{className:"coi-error",children:Ee}),(0,n.jsx)("pre",{ref:Pe,className:"coi-log",children:Le===""?f("tasks.logEmpty"):Le})]})]})]}),Ke&&re!==null&&(0,n.jsx)("div",{className:"coi-modal",onClick:()=>R(!1),children:(0,n.jsxs)("div",{className:"coi-modal-box",onClick:I=>I.stopPropagation(),children:[(0,n.jsxs)("div",{className:"coi-modal-head",children:[(0,n.jsxs)("span",{className:"coi-mono coi-small",children:[f("tasks.prompt")," \u2014 ",re.id]}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>R(!1),children:"\u2715"})]}),(0,n.jsx)("pre",{className:"coi-log coi-log-full coi-prompt-view-full",children:re.prompt})]})}),Qe&&re!==null&&(0,n.jsx)("div",{className:"coi-modal",onClick:()=>Me(!1),children:(0,n.jsxs)("div",{className:"coi-modal-box",onClick:I=>I.stopPropagation(),children:[(0,n.jsxs)("div",{className:"coi-modal-head",children:[(0,n.jsxs)("span",{className:"coi-mono coi-small",children:[f("tasks.log")," \u2014 ",re.id,"\uFF08",re.adapterId," ",f("scope."+re.scope)??re.scope,"\uFF09"]}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>Me(!1),children:"\u2715"})]}),(0,n.jsx)("pre",{ref:We,className:"coi-log coi-log-full",children:Le===""?f("tasks.logEmpty"):Le})]})})]})}function Mr({dsSessionId:t}){let e=(t??"")!==""?`&sessionId=${encodeURIComponent(String(t))}`:"",[a,o]=(0,K.useState)(null),[s,i]=(0,K.useState)(null),[l,c]=(0,K.useState)(null),[g,b]=(0,K.useState)(""),[m,h]=(0,K.useState)(""),[k,A]=(0,K.useState)(null),[F,M]=(0,K.useState)(""),B=(0,K.useCallback)(async()=>{try{let y=new URLSearchParams;g!==""&&y.set("scope",g),m.trim()!==""&&y.set("q",m.trim());let D=await ht(`/sessions?${y.toString()}${e}`);o(D.sessions),i(null)}catch(y){i(mt(y))}},[g,m]);(0,K.useEffect)(()=>{B()},[B]);let S=async y=>{try{await Dt("/sessions/note",{id:y,note:F}),A(null),c({kind:"ok",text:f("config.saved")}),B()}catch(D){c({kind:"error",text:mt(D)})}},V=async y=>{if(window.confirm(f("sessions.confirmDelete")))try{await Ja(`/sessions/${encodeURIComponent(y)}`),B()}catch(D){c({kind:"error",text:mt(D)})}};return(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsxs)("div",{className:"coi-toolbar",children:[(0,n.jsxs)("select",{className:"coi-select",value:g,onChange:y=>b(y.target.value),title:f("sessions.filterScope"),children:[(0,n.jsx)("option",{value:"",children:f("all")}),Ls.map(y=>(0,n.jsx)("option",{value:y,children:f(`scope.${y}`)},y))]}),(0,n.jsx)("input",{className:"coi-input",placeholder:f("sessions.searchPh"),value:m,onChange:y=>h(y.target.value)}),(0,n.jsx)("button",{type:"button",className:"coi-btn",onClick:()=>{B()},children:f("refresh")})]}),(0,n.jsx)(Da,{notice:l}),(0,n.jsx)(ha,{error:s}),a===null&&s===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),a!==null&&a.length===0&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("sessions.empty")}),a?.map(y=>(0,n.jsxs)("div",{className:"coi-row",children:[(0,n.jsxs)("div",{className:"coi-row-line",children:[(0,n.jsx)("span",{className:"coi-mono coi-small",children:y.id}),y.activeTaskId!==null&&y.activeTaskId!==""&&(0,n.jsx)("span",{title:`${f("sessions.locked")}\uFF1A${y.activeTaskId}`,children:"\u{1F512}"}),(0,n.jsx)("span",{className:"coi-badge",children:f("scope."+y.scope)??y.scope}),(0,n.jsx)("span",{children:y.adapterId}),y.branch!==null&&(0,n.jsx)("span",{className:"coi-muted coi-mono coi-small",children:y.branch}),(0,n.jsxs)("span",{className:"coi-muted coi-small",children:[f("sessions.lastSeen")," ",ho(y.lastSeen)]})]}),(0,n.jsxs)("div",{className:"coi-row-line",children:[k===y.id?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{className:"coi-input coi-grow",value:F,onChange:D=>M(D.target.value),placeholder:f("sessions.note")}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{S(y.id)},children:f("sessions.save")})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"coi-muted coi-grow",children:y.note!==null&&y.note!==""?y.note:"\u2014"}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{A(y.id),M(y.note??"")},children:f("sessions.note")})]}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{V(y.id)},children:f("sessions.delete")})]})]},y.id))]})}function Lr(){let[t,e]=(0,K.useState)(null),[a,o]=(0,K.useState)(null),[s,i]=(0,K.useState)(null),[l,c]=(0,K.useState)(null),[g,b]=(0,K.useState)(null),[m,h]=(0,K.useState)(""),[k,A]=(0,K.useState)(""),[F,M]=(0,K.useState)(!1),[B,S]=(0,K.useState)(null),[V,y]=(0,K.useState)(null),[D,w]=(0,K.useState)(""),[O,X]=(0,K.useState)(""),[C,u]=(0,K.useState)(""),[r,v]=(0,K.useState)("ai-cli"),[_,L]=(0,K.useState)(""),[G,q]=(0,K.useState)(""),[ce,Re]=(0,K.useState)(""),[Te,Ce]=(0,K.useState)(""),[Q,Ye]=(0,K.useState)(""),[Ie,be]=(0,K.useState)("flag"),[j,ge]=(0,K.useState)(""),[re,Ue]=(0,K.useState)(""),[Le,Ae]=(0,K.useState)(""),[Ee,Ne]=(0,K.useState)(""),[ye,we]=(0,K.useState)("none"),[Qe,Me]=(0,K.useState)(""),[Ke,R]=(0,K.useState)(!1),H=(0,K.useCallback)(async()=>{try{let z=await ht("/adapters");e(z.adapters),o(null)}catch(z){o(mt(z))}},[]);(0,K.useEffect)(()=>{H()},[H]);let De=async z=>{try{let Se=await Dt("/adapters/test",{id:z});i({kind:"ok",text:`${f("adapters.testOk")}${Se.taskId!==void 0?`\uFF1A${Se.taskId}`:""}${Se.message!==void 0?`\uFF08${Se.message}\uFF09`:""}`})}catch(Se){i({kind:"error",text:mt(Se)})}},Pe=async z=>{if(window.confirm(f("adapters.confirmDelete")))try{let Se=await Ja(`/adapters/${encodeURIComponent(z)}`);if(Se.ok===!1){i({kind:"error",text:sa(Se.message,"ok:false")});return}H()}catch(Se){i({kind:"error",text:mt(Se)})}},We=async z=>{try{let Se={...z,useCase:D.trim()},lt=await Dt("/adapters",{def:Se});if(lt.ok!==!0){i({kind:"error",text:sa(lt.message,"\u4FDD\u5B58\u5931\u8D25")});return}y(null),H()}catch(Se){i({kind:"error",text:mt(Se)})}},E=async z=>{try{let Se=z.enabled===!1,lt=await Dt(`/adapters/${encodeURIComponent(z.id)}/enabled`,{enabled:Se});if(lt.ok!==!0){i({kind:"error",text:sa(lt.message,"\u64CD\u4F5C\u5931\u8D25")});return}H()}catch(Se){i({kind:"error",text:mt(Se)})}},Z=async z=>{S(null),h(z.skillName??""),A(""),b(z.id);try{let Se=await ht(`/adapters/${encodeURIComponent(z.id)}/skill`);if(Se.ok!==!0){S(sa(Se.message,"\u8BFB\u53D6\u5931\u8D25"));return}h(Se.skillName??""),A(Se.content??"")}catch(Se){S(mt(Se))}},ve=async()=>{if(g!==null){M(!0),S(null);try{let z=await ht(`/adapters/${encodeURIComponent(g)}/skill`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:k})});if(z.ok!==!0){S(sa(z.message,"\u4FDD\u5B58\u5931\u8D25"));return}i({kind:"ok",text:z.message??f("adapters.skillSaved")}),b(null),A("")}catch(z){S(mt(z))}finally{M(!1)}}},Ve=async()=>{if(r==="ai-cli"&&(Ie==="flag"?j.trim()==="":Le.trim()==="")){i({kind:"error",text:f("adapters.resumeMissing")});return}R(!0);try{let z={id:O.trim(),name:C.trim(),type:r,binary:_.trim(),args:G.split(",").map(Je=>Je.trim()).filter(Je=>Je!==""),skillName:ce.trim()===""?void 0:ce.trim(),useCase:Te.trim()===""?void 0:Te.trim()};r==="ai-cli"&&(z.resume=Ie==="flag"?{kind:"flag",flag:j.trim(),arg:re.trim()===""?"{sessionId}":re.trim()}:{kind:"args",args:Le.split(",").map(Je=>Je.trim()).filter(Je=>Je!=="")},Ee.trim()!==""&&(z.continue={kind:"flag",flag:Ee.trim()}),ye!=="none"&&Qe.trim()!==""&&(z.sessionIdExtract={source:ye,regex:Qe.trim()}));let Se=ce.trim()!==""&&Q.trim()!==""?Q:void 0,lt=await Dt("/adapters",{def:z,skillContent:Se});if(lt.ok!==!0){i({kind:"error",text:sa(lt.message,"\u4FDD\u5B58\u5931\u8D25")});return}i({kind:"ok",text:lt.skillMessage!==void 0?lt.skillMessage:f("config.saved")}),X(""),u(""),L(""),q(""),Ce(""),ge(""),Ue(""),Ae(""),Ne(""),Me(""),H()}catch(z){i({kind:"error",text:mt(z)})}finally{R(!1)}};return(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsx)(Da,{notice:s}),(0,n.jsx)(ha,{error:a}),t===null&&a===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),(0,n.jsx)("div",{className:"coi-cards",children:t?.map(z=>{let Se=Ir.has(z.id);return(0,n.jsxs)("div",{className:"coi-card coi-adapter-card",children:[(0,n.jsxs)("div",{className:"coi-row-line",children:[(0,n.jsx)("span",{className:"coi-strong",children:z.name}),(0,n.jsx)("span",{className:"coi-mono coi-small coi-muted",children:z.id}),(0,n.jsx)("span",{className:"coi-badge",children:z.type}),(0,n.jsx)("span",{className:"coi-badge",children:f(Se?"adapters.builtin":"adapters.custom")}),(0,n.jsx)("span",{className:"coi-grow"}),z.skillName!==void 0&&z.skillName!==""&&(0,n.jsxs)("span",{className:"coi-muted coi-small coi-skill-tag",title:f("adapters.skillHint"),children:[f("adapters.skill"),"\uFF1A",z.skillName]}),z.skillName!==void 0&&z.skillName!==""&&(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{Z(z)},children:f("adapters.skillBtn")}),(0,n.jsx)("button",{type:"button",className:`coi-btn coi-btn-mini${z.enabled===!1?" coi-btn-danger":""}`,onClick:()=>{E(z)},children:z.enabled===!1?f("adapters.enable"):f("adapters.disable")}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{De(z.id)},children:f("adapters.test")}),!Se&&(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{Pe(z.id)},children:f("adapters.delete")})]}),(0,n.jsxs)("div",{className:"coi-row-line coi-muted coi-small",children:[(0,n.jsx)("span",{className:"coi-mono",children:z.binary}),z.args.length>0&&(0,n.jsx)("span",{className:"coi-mono",children:z.args.join(" ")}),z.avgMs!==void 0&&z.avgMs>0&&(0,n.jsxs)("span",{className:"coi-avg-ms",title:"\u5386\u53F2 completed \u4EFB\u52A1\u7684\u5E73\u5747\u8017\u65F6\uFF08de_coi_adapters \u540C\u6E90\uFF09",children:["\u23F1 \u5747\u8017\u65F6 ",(z.avgMs/6e4).toFixed(1)," \u5206\u949F"]})]}),(0,n.jsx)("div",{className:"coi-row-line coi-muted coi-small",children:V===z.id?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"\u{1F3AF}"}),(0,n.jsx)("input",{className:"coi-input coi-grow",value:D,onChange:lt=>w(lt.target.value),placeholder:f("adapters.useCasePh")}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-primary",onClick:()=>{We(z)},children:f("adapters.saveUseCase")}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>y(null),children:f("cancel")})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{className:"coi-grow",children:["\u{1F3AF} ",z.useCase!==void 0&&z.useCase!==""?z.useCase:f("adapters.useCaseEmpty")]}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{y(z.id),w(z.useCase??"")},children:f("adapters.editUseCase")})]})}),z.enabled===!1&&(0,n.jsx)("div",{className:"coi-row-line coi-error",children:(0,n.jsxs)("span",{children:["\u26D4 ",f("adapters.disabledHint")]})}),l===z.id&&z.guide!==void 0&&(0,n.jsx)("pre",{className:"coi-guide",children:z.guide})]},z.id)})}),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsx)("div",{className:"coi-card-title",children:f("adapters.addTitle")}),(0,n.jsxs)("div",{className:"coi-form-grid",children:[(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:"id"}),(0,n.jsx)("input",{className:"coi-input",value:O,onChange:z=>X(z.target.value),placeholder:"my-cli"})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.name")}),(0,n.jsx)("input",{className:"coi-input",value:C,onChange:z=>u(z.target.value)})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.type")}),(0,n.jsxs)("select",{className:"coi-select",value:r,onChange:z=>v(z.target.value),children:[(0,n.jsx)("option",{value:"ai-cli",children:"ai-cli"}),(0,n.jsx)("option",{value:"plain-cli",children:"plain-cli"})]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.binary")}),(0,n.jsx)("input",{className:"coi-input",value:_,onChange:z=>L(z.target.value),placeholder:"/usr/local/bin/my-cli"})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.args")}),(0,n.jsx)("input",{className:"coi-input",value:G,onChange:z=>q(z.target.value),placeholder:f("adapters.argsPh")})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.skillName")}),(0,n.jsx)("input",{className:"coi-input",value:ce,onChange:z=>Re(z.target.value),placeholder:f("adapters.skillNamePh")})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.useCase")}),(0,n.jsx)("input",{className:"coi-input",value:Te,onChange:z=>Ce(z.target.value),placeholder:f("adapters.useCasePh")})]}),r==="ai-cli"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"coi-field coi-field-wide coi-resume-section",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.resumeSection")}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("adapters.resumeSectionHint")})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.resumeKind")}),(0,n.jsxs)("select",{className:"coi-select",value:Ie,onChange:z=>be(z.target.value),children:[(0,n.jsx)("option",{value:"flag",children:f("adapters.resumeKindFlag")}),(0,n.jsx)("option",{value:"args",children:f("adapters.resumeKindArgs")})]})]}),Ie==="flag"?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.resumeFlag")}),(0,n.jsx)("input",{className:"coi-input",value:j,onChange:z=>ge(z.target.value),placeholder:f("adapters.resumeFlagPh")})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.resumeArg")}),(0,n.jsx)("input",{className:"coi-input",value:re,onChange:z=>Ue(z.target.value),placeholder:f("adapters.resumeArgPh")})]})]}):(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.resumeArgs")}),(0,n.jsx)("input",{className:"coi-input",value:Le,onChange:z=>Ae(z.target.value),placeholder:f("adapters.resumeArgsPh")})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.continueFlag")}),(0,n.jsx)("input",{className:"coi-input",value:Ee,onChange:z=>Ne(z.target.value),placeholder:f("adapters.continueFlagPh")})]}),(0,n.jsx)("div",{className:"coi-field coi-field-wide coi-resume-section",children:(0,n.jsx)("span",{className:"coi-label",children:f("adapters.extractSection")})}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.extractSource")}),(0,n.jsxs)("select",{className:"coi-select",value:ye,onChange:z=>we(z.target.value),children:[(0,n.jsx)("option",{value:"none",children:"none"}),(0,n.jsx)("option",{value:"stdout",children:"stdout"}),(0,n.jsx)("option",{value:"stderr",children:"stderr"}),(0,n.jsx)("option",{value:"any",children:"any"})]})]}),ye!=="none"&&(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.extractRegex")}),(0,n.jsx)("input",{className:"coi-input",value:Qe,onChange:z=>Me(z.target.value),placeholder:f("adapters.extractRegexPh")})]})]}),ce.trim()!==""&&(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("adapters.skillContent")}),(0,n.jsx)("textarea",{className:"coi-textarea",rows:5,value:Q,onChange:z=>Ye(z.target.value),placeholder:f("adapters.skillContentPh")}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("adapters.skillContentHint")})]})]}),(0,n.jsx)("div",{className:"coi-form-actions",children:(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:Ke||O.trim()===""||C.trim()===""||_.trim()===""||r==="ai-cli"&&(Ie==="flag"?j.trim()==="":Le.trim()===""),onClick:()=>{Ve()},children:f("adapters.add")})})]}),g!==null&&(0,n.jsx)("div",{className:"coi-modal",onClick:()=>b(null),children:(0,n.jsxs)("div",{className:"coi-modal-box",onClick:z=>z.stopPropagation(),children:[(0,n.jsxs)("div",{className:"coi-modal-head",children:[(0,n.jsxs)("span",{className:"coi-small",children:[f("adapters.editSkillTitle"),"\uFF1A",m]}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>b(null),children:"\u2715"})]}),B!==null&&(0,n.jsx)("div",{className:"coi-error coi-pad",children:B}),(0,n.jsx)("div",{className:"coi-pad coi-muted coi-small",children:f("adapters.editSkillHint")}),(0,n.jsx)("textarea",{className:"coi-textarea coi-skill-editor",value:k,onChange:z=>A(z.target.value),placeholder:"# SKILL.md"}),(0,n.jsxs)("div",{className:"coi-modal-head",children:[(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>b(null),children:f("cancel")}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary coi-btn-mini",disabled:F,onClick:()=>{ve()},children:f(F?"saving":"adapters.saveSkill")})]})]})})]})}function Dr(){let[t,e]=(0,K.useState)(null),[a,o]=(0,K.useState)([]),[s,i]=(0,K.useState)(null),[l,c]=(0,K.useState)(null),[g,b]=(0,K.useState)(""),[m,h]=(0,K.useState)(""),[k,A]=(0,K.useState)(""),[F,M]=(0,K.useState)(""),[B,S]=(0,K.useState)(!1),V=(0,K.useCallback)(async()=>{try{let w=await ht("/templates");e(w.templates),i(null)}catch(w){i(mt(w))}},[]);(0,K.useEffect)(()=>{V(),ht("/adapters").then(w=>o(w.adapters)).catch(()=>{})},[V]);let y=async w=>{if(Ms.has(w)){c({kind:"error",text:f("templates.builtinKeep")});return}if(window.confirm(f("templates.confirmDelete")))try{await Ja(`/templates/${encodeURIComponent(w)}`),V()}catch(O){c({kind:"error",text:mt(O)})}},D=async()=>{S(!0);try{let w={name:m.trim(),prompt:k};g.trim()!==""&&(w.id=g.trim()),F!==""&&(w.adapterId=F),await Dt("/templates",{def:w}),c({kind:"ok",text:f("config.saved")}),b(""),h(""),A(""),M(""),V()}catch(w){c({kind:"error",text:mt(w)})}finally{S(!1)}};return(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsx)(Da,{notice:l}),(0,n.jsx)(ha,{error:s}),t===null&&s===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),t!==null&&t.length===0&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("templates.empty")}),t?.map(w=>(0,n.jsxs)("div",{className:"coi-row",children:[(0,n.jsxs)("div",{className:"coi-row-line",children:[(0,n.jsx)("span",{className:"coi-strong",children:w.name}),(0,n.jsx)("span",{className:"coi-mono coi-small coi-muted",children:w.id}),w.adapterId!==void 0&&(0,n.jsx)("span",{className:"coi-badge",children:w.adapterId}),Ms.has(w.id)&&(0,n.jsx)("span",{className:"coi-badge",children:f("adapters.builtin")}),(0,n.jsx)("span",{className:"coi-grow"}),(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{y(w.id)},children:f("templates.delete")})]}),(0,n.jsx)("div",{className:"coi-row-line coi-muted",title:w.prompt,children:Ka(w.prompt,80)})]},w.id)),(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsx)("div",{className:"coi-card-title",children:f("templates.addTitle")}),(0,n.jsxs)("div",{className:"coi-form-grid",children:[(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("templates.name")}),(0,n.jsx)("input",{className:"coi-input",value:m,onChange:w=>h(w.target.value)})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("templates.adapterOpt")}),(0,n.jsxs)("select",{className:"coi-select",value:F,onChange:w=>M(w.target.value),children:[(0,n.jsx)("option",{value:"",children:f("none")}),a.map(w=>(0,n.jsx)("option",{value:w.id,children:w.id},w.id))]})]}),(0,n.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,n.jsx)("span",{className:"coi-label",children:f("templates.idOpt")}),(0,n.jsx)("input",{className:"coi-input",value:g,onChange:w=>b(w.target.value),placeholder:"my-template"})]})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("templates.prompt")}),(0,n.jsx)("textarea",{className:"coi-textarea",rows:3,value:k,onChange:w=>A(w.target.value)})]}),(0,n.jsx)("div",{className:"coi-form-actions",children:(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:B||m.trim()===""||k.trim()==="",onClick:()=>{D()},children:f("templates.add")})})]})]})}function Or(){let[t,e]=(0,K.useState)(null),[a,o]=(0,K.useState)(null),s=(0,K.useCallback)(async()=>{try{let i=await ht("/stats");e(i),o(null)}catch(i){o(mt(i))}},[]);return(0,K.useEffect)(()=>{s()},[s]),(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsx)("div",{className:"coi-toolbar",children:(0,n.jsx)("button",{type:"button",className:"coi-btn",onClick:()=>{s()},children:f("refresh")})}),(0,n.jsx)(ha,{error:a}),t===null&&a===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),t!==null&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"coi-stat-grid",children:(0,n.jsxs)("div",{className:"coi-stat-card",children:[(0,n.jsx)("div",{className:"coi-stat-num",children:t.total}),(0,n.jsx)("div",{className:"coi-muted",children:f("stats.total")})]})}),(0,n.jsx)("div",{className:"coi-stat-grid",children:Object.entries(t.byAdapter).map(([i,l])=>(0,n.jsxs)("div",{className:"coi-stat-card",children:[(0,n.jsx)("div",{className:"coi-strong",children:i}),(0,n.jsx)("div",{className:"coi-stat-num",children:l.count}),(0,n.jsxs)("div",{className:"coi-muted coi-small",children:[f("stats.count")," \xB7 ",f("stats.hours")," ",(l.totalMs/36e5).toFixed(2),"h"]}),(0,n.jsx)("div",{className:"coi-row-line coi-small",children:Object.entries(l.byStatus).map(([c,g])=>{let b=La(c);return(0,n.jsxs)("span",{className:b.cls,title:b.label,children:[b.icon," ",g]},c)})})]},i))}),Object.keys(t.byAdapter).length===0&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("stats.empty")})]})]})}function zr(){let[t,e]=(0,K.useState)(!1),[a,o]=(0,K.useState)(null),[s,i]=(0,K.useState)(null),[l,c]=(0,K.useState)(""),[g,b]=(0,K.useState)(""),[m,h]=(0,K.useState)(""),[k,A]=(0,K.useState)(""),[F,M]=(0,K.useState)(!1);(0,K.useEffect)(()=>{ht("/config").then(S=>{c(S.config.coiNotifyCommand??""),b(String(S.config.coiRetentionDays??""));let V=S.config.coiTaskTimeoutMs??0;h(String(Math.floor(V/36e5))),A(String(Math.round(V%36e5/6e4))),e(!0)}).catch(S=>o(mt(S)))},[]);let B=async()=>{M(!0);try{let S={coiNotifyCommand:l},V=Number(g),y=Number(m),D=Number(k);if(g.trim()!==""&&Number.isFinite(V)&&(S.coiRetentionDays=V),m.trim()!==""||k.trim()!==""){let w=(Number.isFinite(y)?y:0)*60+(Number.isFinite(D)?D:0);if(!Number.isFinite(w)||w<0)throw new Error(f("config.timeoutBad"));S.coiTaskTimeoutMs=w*6e4}await Dt("/config",{patch:S}),i({kind:"ok",text:f("config.saved")})}catch(S){i({kind:"error",text:mt(S)})}finally{M(!1)}};return(0,n.jsxs)("div",{className:"coi-pane",children:[(0,n.jsx)(Da,{notice:s}),(0,n.jsx)(ha,{error:a}),!t&&a===null&&(0,n.jsx)("div",{className:"coi-muted coi-pad",children:f("loading")}),t&&(0,n.jsxs)("div",{className:"coi-card",children:[(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("config.notify")}),(0,n.jsx)("input",{className:"coi-input",value:l,onChange:S=>c(S.target.value)}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("config.notifyHint")})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("config.retention")}),(0,n.jsx)("input",{className:"coi-input",type:"number",min:0,value:g,onChange:S=>b(S.target.value)})]}),(0,n.jsxs)("label",{className:"coi-field",children:[(0,n.jsx)("span",{className:"coi-label",children:f("config.timeout")}),(0,n.jsxs)("div",{className:"coi-inline",children:[(0,n.jsx)("input",{className:"coi-input",type:"number",min:0,value:m,onChange:S=>h(S.target.value),placeholder:"0"}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("config.timeoutHours")}),(0,n.jsx)("input",{className:"coi-input",type:"number",min:0,max:59,value:k,onChange:S=>A(S.target.value),placeholder:"0"}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("config.timeoutMinutes")})]}),(0,n.jsx)("span",{className:"coi-muted coi-small",children:f("config.timeoutHint")})]}),(0,n.jsx)("div",{className:"coi-form-actions",children:(0,n.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:F,onClick:()=>{B()},children:f("config.save")})})]})]})}var Os=require("react"),$s=require("react/jsx-runtime");function zs(t){let[e,a]=(0,Os.useState)(!1);return(0,$s.jsx)("button",{type:"button",className:"me-copy-session-id",title:t.t("header.copySessionId.title"),onClick:()=>{navigator.clipboard.writeText(t.sessionId).then(()=>{a(!0),window.setTimeout(()=>a(!1),1500)}).catch(()=>{})},children:e?t.t("header.copySessionId.done"):t.t("header.copySessionId")})}var Oa=require("react"),qt=require("react/jsx-runtime"),yo="/memory-evolve/api/aliases";function Fs(t){let[e,a]=(0,Oa.useState)(!1),[o,s]=(0,Oa.useState)(""),[i,l]=(0,Oa.useState)(!1),[c,g]=(0,Oa.useState)(null),b=()=>{a(!0),g(null),fetch(`${yo}`).then(k=>k.ok?k.json():Promise.reject(new Error(`HTTP ${k.status}`))).then(k=>{s(k.aliases?.[t.sessionId]??"")}).catch(()=>{})},m=async()=>{l(!0),g(null);try{let k=o.trim(),A=await fetch(`${yo}/${encodeURIComponent(t.sessionId)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:k})}),F=await A.json().catch(()=>({}));if(A.ok!==!0||F.ok!==!0)throw new Error(F.message??`HTTP ${A.status}`);g(k===""?t.t("header.setAlias.cleared"):t.t("header.setAlias.saved")),a(!1)}catch(k){g(k instanceof Error?k.message:String(k))}finally{l(!1)}},h=async()=>{l(!0),g(null);try{let k=await fetch(`${yo}/${encodeURIComponent(t.sessionId)}`,{method:"DELETE"}),A=await k.json().catch(()=>({}));if(k.ok!==!0||A.ok!==!0)throw new Error(A.message??`HTTP ${k.status}`);s(""),g(t.t("header.setAlias.cleared")),a(!1)}catch(k){g(k instanceof Error?k.message:String(k))}finally{l(!1)}};return(0,qt.jsxs)("span",{className:"me-alias-wrap",children:[(0,qt.jsx)("button",{type:"button",className:"me-copy-session-id",title:t.t("header.setAlias.title"),onClick:()=>e?a(!1):b(),children:t.t("header.setAlias")}),e&&(0,qt.jsxs)("span",{className:"me-alias-editor",children:[(0,qt.jsx)("input",{className:"me-alias-input",value:o,maxLength:10,placeholder:t.t("header.setAlias.placeholder"),onChange:k=>s(k.target.value),onKeyDown:k=>{k.key==="Enter"&&m()},autoFocus:!0}),(0,qt.jsx)("button",{type:"button",className:"me-copy-session-id",disabled:i,onClick:()=>{m()},children:t.t("header.setAlias.save")}),(0,qt.jsx)("button",{type:"button",className:"me-copy-session-id",disabled:i||o==="",onClick:()=>{h()},children:t.t("header.setAlias.clear")}),c!==null&&(0,qt.jsx)("span",{className:"me-alias-notice",children:c})]})]})}var na=require("react/jsx-runtime");function Hs(t){return(0,na.jsxs)(na.Fragment,{children:[(0,na.jsx)(zs,{...t}),(0,na.jsx)(Fs,{...t})]})}var je=require("react"),Js=require("react-dom");var ya=require("react"),Ga="dsh-memory-evolve:advisor-connection-reset",$r="/memory-evolve/api/advisor",wa={conversation:"\u672C\u6B21\u8BC4\u5BA1\u4F1A\u8BDD\u7EA6\u675F",session:"\u672C\u4F1A\u8BDD\u7EA6\u675F",project:"\u672C\u9879\u76EE\u7EA6\u675F",global:"\u5168\u5C40\u7EA6\u675F"},Fr=1e3,Hr=100,wo=100,Br=50,_s={session:"current",workspace:"",severity:"",timeRange:"all"};function _r(t){return{sessionId:t,status:null,statusLoading:!0,statusError:null,reviews:[],eventsLoading:!0,eventsError:null,pending:[],instructionsLoading:!0,instructionsError:null,instructionMutating:!1,records:[],recordsLoading:!1,recordsError:null,recordsHasMore:!1,recordsCursor:null,recordsFilters:_s,config:null,configLoading:!0,configError:null,configSaving:!1,scopes:null,scopesLoading:!0,scopesError:null,scopesSaving:!1,unreadCount:0,panelVisible:!1,lastActivityAt:null,notice:null}}async function Ot(t,e){let a=await fetch(`${$r}${t}`,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.error??o.message??o.code??`HTTP ${a.status}`);return o}function xo(t,e){return Ot(t,{method:"POST",body:JSON.stringify(e)})}function qr(t,e){return Ot(t,{method:"PATCH",body:JSON.stringify(e)})}function Ur(t){return Ot(t,{method:"DELETE"})}function vt(t){let e=t instanceof Error?t.message:String(t);return e.trim()===""?"\u64CD\u4F5C\u5931\u8D25\uFF08\u65E0\u9519\u8BEF\u8BE6\u60C5\uFF09":e}function Bs(t,e,a,o=Br){let s=new URLSearchParams;return e.session==="current"&&s.set("sessionId",t),e.workspace.trim()!==""&&s.set("workspace",e.workspace.trim()),e.severity!==""&&s.set("severity",e.severity),a!=null&&a!==""&&s.set("before",a),s.set("limit",String(o)),`/records?${s.toString()}`}function Vr(t){return{reviewId:t.reviewId,started:null,finished:null,record:t,arrivedAt:Date.now()}}var ko=class{snapshot;listeners=new Set;started=!1;generation=0;cursor=0;pollTimer=null;pollAbort=null;recordsAbort=null;suppressUnreadUntilSynced=!1;constructor(e){this.snapshot=_r(e)}subscribe=e=>(this.listeners.add(e),()=>this.listeners.delete(e));getSnapshot=()=>this.snapshot;patch(e){this.snapshot={...this.snapshot,...e};for(let a of this.listeners)a()}start(){this.started||(this.started=!0,this.installBrowserResetListeners(),this.refreshAll(),this.schedulePoll(0))}stop(){this.started&&(this.started=!1,this.generation+=1,this.pollTimer!==null&&window.clearTimeout(this.pollTimer),this.pollTimer=null,this.pollAbort?.abort(),this.pollAbort=null,this.recordsAbort?.abort(),this.recordsAbort=null,this.removeBrowserResetListeners())}handleConnectionReset=()=>{this.resetCursorAndLive("\u8FDE\u63A5\u5DF2\u6062\u590D\uFF0C\u6B63\u5728\u91CD\u65B0\u540C\u6B65 Advisor \u4E8B\u4EF6\u2026")};installBrowserResetListeners(){window.addEventListener(Ga,this.handleConnectionReset),window.addEventListener("online",this.handleConnectionReset)}removeBrowserResetListeners(){window.removeEventListener(Ga,this.handleConnectionReset),window.removeEventListener("online",this.handleConnectionReset)}resetCursorAndLive(e){this.generation+=1,this.cursor=0,this.suppressUnreadUntilSynced=!0,this.pollAbort?.abort(),this.pollAbort=null,this.pollTimer!==null&&window.clearTimeout(this.pollTimer),this.pollTimer=null,this.patch({reviews:[],eventsLoading:!0,eventsError:null,lastActivityAt:null,...e===void 0?{}:{notice:{kind:"ok",text:e}}}),this.started&&(this.refreshStatus(),this.refreshInstructions(),this.schedulePoll(0))}schedulePoll(e){this.started&&(this.pollTimer!==null&&window.clearTimeout(this.pollTimer),this.pollTimer=window.setTimeout(()=>{this.pollTimer=null,this.pollEvents()},e))}async pollEvents(){if(!this.started)return;this.pollAbort?.abort();let e=new AbortController;this.pollAbort=e;let a=this.generation,o=this.snapshot.sessionId,s=new URLSearchParams({sessionId:o,after:String(this.cursor),limit:String(Hr)});try{let i=await Ot(`/events?${s.toString()}`,{signal:e.signal});if(!this.started||e.signal.aborted||a!==this.generation)return;let l=!0;if(i.gap&&(l=await this.rebuildLiveFromRecords(a,e.signal),!this.started||e.signal.aborted||a!==this.generation))return;this.cursor=i.nextCursor,this.mergeLiveEvents(i.events),this.suppressUnreadUntilSynced=!1,this.patch({eventsLoading:!1,...l?{eventsError:null}:{}})}catch(i){!e.signal.aborted&&a===this.generation&&this.patch({eventsLoading:!1,eventsError:vt(i)})}finally{this.pollAbort===e&&(this.pollAbort=null),this.started&&a===this.generation&&this.schedulePoll(Fr)}}async rebuildLiveFromRecords(e,a){let o={..._s,session:"current"};try{let s=await Ot(Bs(this.snapshot.sessionId,o,null,wo),{signal:a});if(!this.started||e!==this.generation)return!1;let i=[...s.records].reverse().map(Vr);return this.patch({reviews:i.slice(-wo)}),!0}catch(s){return e!==this.generation||this.patch({reviews:[],eventsError:`\u5B9E\u65F6\u6E38\u6807\u5DF2\u8FC7\u671F\uFF0C\u5386\u53F2\u91CD\u5EFA\u5931\u8D25\uFF1A${vt(s)}`}),!1}}mergeLiveEvents(e){if(e.length===0)return;let a=[...this.snapshot.reviews],o=new Map(a.map((g,b)=>[g.reviewId,b])),s=this.snapshot.status,i=this.snapshot.unreadCount,l=this.snapshot.lastActivityAt,c=!1;for(let g of e){if(l=Math.max(l??0,g.ts),g.type==="runtime-status"){s!==null&&(s={...s,runtimeStatus:g.runtimeStatus,pendingCount:g.pendingCount,phase:g.phase,inFlight:g.runtimeStatus==="reviewing"});continue}g.type==="review-finished"&&g.instructions.length>0&&(c=!0);let b=o.get(g.reviewId);if(b===void 0){let m={reviewId:g.reviewId,started:g.type==="review-started"?g:null,finished:g.type==="review-finished"?g:null,record:null,arrivedAt:Date.now()};a.push(m),o.set(g.reviewId,a.length-1),!this.snapshot.panelVisible&&!this.suppressUnreadUntilSynced&&(i+=1)}else{let m=a[b];a[b]={...m,started:g.type==="review-started"?g:m.started,finished:g.type==="review-finished"?g:m.finished,record:g.type==="review-started"?null:m.record}}}this.patch({reviews:a.slice(-wo),status:s,unreadCount:this.snapshot.panelVisible?0:i,lastActivityAt:l}),c&&this.refreshInstructions()}async refreshAll(){await Promise.allSettled([this.refreshStatus(),this.refreshInstructions(),this.refreshConfig(),this.refreshScopes()])}async refreshStatus(){let e=this.snapshot.sessionId;this.patch({statusLoading:!0,statusError:null});try{let a=await Ot(`/status?sessionId=${encodeURIComponent(e)}`);if(e!==this.snapshot.sessionId)return;this.patch({status:a,statusLoading:!1,statusError:null})}catch(a){if(e!==this.snapshot.sessionId)return;this.patch({statusLoading:!1,statusError:vt(a)})}}async refreshInstructions(){let e=this.snapshot.sessionId;this.patch({instructionsLoading:!0,instructionsError:null});try{let a=await Ot(`/instructions?sessionId=${encodeURIComponent(e)}`);if(e!==this.snapshot.sessionId)return;this.patch({pending:a.pending,instructionsLoading:!1,instructionsError:null})}catch(a){if(e!==this.snapshot.sessionId)return;this.patch({instructionsLoading:!1,instructionsError:vt(a)})}}async sendInstruction(e){let a=e.trim();if(a!==""){this.patch({instructionMutating:!0,instructionsError:null});try{let o=await xo("/instructions",{sessionId:this.snapshot.sessionId,text:a});this.patch({pending:o.pending,instructionMutating:!1,notice:{kind:"ok",text:"\u6307\u4EE4\u5DF2\u53D1\u9001\uFF0CAdvisor \u6B63\u5728\u56DE\u7B54\uFF08\u56DE\u7B54\u4F1A\u76F4\u63A5\u6CE8\u5165\u4F1A\u8BDD\u6D41\uFF09"}})}catch(o){this.patch({instructionMutating:!1,instructionsError:vt(o),notice:{kind:"error",text:vt(o)}})}}}async resetConversation(){this.patch({instructionMutating:!0,instructionsError:null});try{let e=await xo("/conversation/reset",{sessionId:this.snapshot.sessionId});this.patch({instructionMutating:!1,notice:{kind:"ok",text:`\u5DF2\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\uFF08#${e.epoch}\uFF09\u2014\u2014\u53EF\u5728\u7B2C\u4E00\u6761\u6307\u4EE4\u4E2D\u544A\u77E5\u8BC4\u5BA1\u5458\u80CC\u666F\u4FE1\u606F`}}),this.resetCursorAndLive()}catch(e){this.patch({instructionMutating:!1,instructionsError:vt(e),notice:{kind:"error",text:vt(e)}})}}async clearInstructions(){this.patch({instructionMutating:!0,instructionsError:null});try{let e=await Ur(`/instructions?sessionId=${encodeURIComponent(this.snapshot.sessionId)}`);await this.refreshInstructions(),this.patch({instructionMutating:!1,notice:{kind:"ok",text:`\u5DF2\u6E05\u7A7A ${e.cleared} \u6761\u5F85\u6D88\u8D39\u6307\u4EE4`}})}catch(e){this.patch({instructionMutating:!1,instructionsError:vt(e),notice:{kind:"error",text:vt(e)}})}}async toggleSession(e){this.patch({statusLoading:!0,statusError:null});try{let a=await xo("/toggle",{sessionId:this.snapshot.sessionId,enabled:e});this.patch({status:a,statusLoading:!1,notice:{kind:"ok",text:e?"\u672C\u4F1A\u8BDD Advisor \u5DF2\u542F\u7528":"\u672C\u4F1A\u8BDD Advisor \u5DF2\u505C\u7528"}})}catch(a){this.patch({statusLoading:!1,statusError:vt(a),notice:{kind:"error",text:vt(a)}})}}async refreshConfig(){this.patch({configLoading:!0,configError:null});try{let e=await Ot("/config");this.patch({config:e.config,configLoading:!1,configError:null})}catch(e){this.patch({configLoading:!1,configError:vt(e)})}}async saveConfig(e){this.patch({configSaving:!0,configError:null});try{let a=await qr("/config",{patch:e});this.patch({config:a.config,configSaving:!1,notice:{kind:"ok",text:"Advisor \u8BBE\u7F6E\u5DF2\u4FDD\u5B58\u5E76\u751F\u6548"}}),await this.refreshStatus()}catch(a){this.patch({configSaving:!1,configError:vt(a),notice:{kind:"error",text:vt(a)}})}}async refreshScopes(){let e=this.snapshot.sessionId;this.patch({scopesLoading:!0,scopesError:null});try{let a=await Ot(`/scopes?sessionId=${encodeURIComponent(e)}`);if(e!==this.snapshot.sessionId)return;this.patch({scopes:a.scopes,scopesLoading:!1,scopesError:null})}catch(a){if(e!==this.snapshot.sessionId)return;this.patch({scopesLoading:!1,scopesError:vt(a)})}}async saveScope(e,a){this.patch({scopesSaving:!0,scopesError:null});try{let o=await Ot("/scopes",{method:"PUT",body:JSON.stringify({sessionId:this.snapshot.sessionId,level:e,text:a})});this.patch({scopes:o.scopes,scopesSaving:!1,notice:{kind:"ok",text:`${wa[e]}\u5DF2\u4FDD\u5B58\uFF0C\u4E0B\u6B21\u8BC4\u5BA1\u7ACB\u5373\u751F\u6548`}})}catch(o){this.patch({scopesSaving:!1,scopesError:vt(o),notice:{kind:"error",text:vt(o)}})}}async loadRecords(e,a=!1){this.recordsAbort?.abort();let o=new AbortController;this.recordsAbort=o;let s=a?this.snapshot.recordsCursor:null;this.patch({recordsLoading:!0,recordsError:null,recordsFilters:e,...a?{}:{records:[],recordsCursor:null,recordsHasMore:!1}});try{let i=await Ot(Bs(this.snapshot.sessionId,e,s),{signal:o.signal});if(o.signal.aborted)return;let l=a?[...this.snapshot.records,...i.records]:i.records,c=[...new Map(l.map(g=>[g.reviewId,g])).values()];this.patch({records:c,recordsLoading:!1,recordsError:null,recordsCursor:i.nextCursor,recordsHasMore:i.hasMore})}catch(i){o.signal.aborted||this.patch({recordsLoading:!1,recordsError:vt(i)})}finally{this.recordsAbort===o&&(this.recordsAbort=null)}}setPanelVisible(e){this.patch({panelVisible:e,...e?{unreadCount:0}:{}})}clearNotice(){this.snapshot.notice!==null&&this.patch({notice:null})}};function qs(t){let e=(0,ya.useMemo)(()=>new ko(t),[t]),a=(0,ya.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot);return(0,ya.useEffect)(()=>(a.config!==null&&a.config.advisorEnabled!==!0?e.stop():e.start(),()=>e.stop()),[e,a.config===null,a.config?.advisorEnabled]),{store:e,snapshot:a}}var x=require("react/jsx-runtime"),Us="dsh-memory-evolve:advisor-capsule-pos",zt=()=>typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en"),Wr={get disabled(){return{icon:"\u2716",label:zt()?"Disabled":"\u5DF2\u505C\u7528",cls:"advisor-status-disabled"}},get idle(){return{icon:"\u25CF",label:zt()?"Idle":"\u7A7A\u95F2",cls:"advisor-status-idle"}},get reviewing(){return{icon:"\u25D0",label:zt()?"Reviewing":"\u8BC4\u5BA1\u4E2D",cls:"advisor-status-reviewing"}},get quota_exhausted(){return{icon:"\u23F8",label:zt()?"Paused":"\u5DF2\u6682\u505C",cls:"advisor-status-paused"}},get halted(){return{icon:"\u26A0",label:zt()?"Halted":"\u5DF2\u7EC8\u6B62",cls:"advisor-status-halted"}}},Kr={info:{get label(){return zt()?"info \xB7 note":"info \xB7 \u8BB0\u5F55"},cls:"advisor-severity-info"},nit:{get label(){return zt()?"nit \xB7 suggestion":"nit \xB7 \u5EFA\u8BAE"},cls:"advisor-severity-nit"},concern:{get label(){return zt()?"concern \xB7 watch":"concern \xB7 \u5173\u6CE8"},cls:"advisor-severity-concern"},blocker:{get label(){return zt()?"blocker \xB7 blocking":"blocker \xB7 \u963B\u65AD"},cls:"advisor-severity-blocker"},answer:{get label(){return zt()?"answer":"\u56DE\u7B54"},cls:"advisor-severity-answer"}};function Vs(t){return zt()?Gr[t]:Jr[t]}var Jr={delivered:"\u5DF2\u9001\u8FBE",recorded:"\u5DF2\u8BB0\u5F55",answered:"\u5DF2\u56DE\u7B54",suppressed:"\u5DF2\u6291\u5236","no-note":"\u65E0\u5EFA\u8BAE",dropped:"\u5DF2\u4E22\u5F03",failed:"\u8BC4\u5BA1\u5931\u8D25",cancelled:"\u5DF2\u53D6\u6D88"},Gr={delivered:"Delivered",recorded:"Recorded",answered:"Answered",suppressed:"Suppressed","no-note":"No note",dropped:"Dropped",failed:"Review failed",cancelled:"Cancelled"};function za(t){return t<10?`0${t}`:String(t)}function Gs(t){let e=new Date(t);return`${za(e.getHours())}:${za(e.getMinutes())}:${za(e.getSeconds())}`}function Ws(t){let e=new Date(t);return`${e.getFullYear()}-${za(e.getMonth()+1)}-${za(e.getDate())} ${Gs(t)}`}function Xr(t){return!Number.isFinite(t)||t<0?"\u2014":t<1e3?`${Math.round(t)}ms`:`${(t/1e3).toFixed(t<1e4?1:0)}s`}function Yr(t){if(t===null)return"\u6682\u65E0\u6D3B\u52A8";let e=Math.max(0,Date.now()-t);return e<5e3?"\u521A\u521A":e<6e4?`${Math.floor(e/1e3)} \u79D2\u524D`:e<36e5?`${Math.floor(e/6e4)} \u5206\u949F\u524D`:`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`}function Xs(t){return t.length>12?`${t.slice(0,8)}\u2026`:t}function Qr(t){return t==="24h"?Date.now()-864e5:t==="7d"?Date.now()-7*864e5:t==="30d"?Date.now()-30*864e5:null}function Ys(t){let e=String(t.sessionId),{store:a,snapshot:o}=qs(e),[s,i]=(0,je.useState)(()=>typeof window>"u"?!1:!window.matchMedia("(max-width: 767px)").matches),[l,c]=(0,je.useState)(!1),g=(0,je.useRef)(!0),b=(0,je.useRef)(!1),[m,h]=(0,je.useState)(null),k=(0,je.useRef)(null),A=(0,je.useRef)(null),F=(0,je.useRef)(!1),[M,B]=(0,je.useState)(!1),S=(0,je.useRef)(null);(0,je.useEffect)(()=>{if(!(typeof window>"u"))try{let G=window.localStorage.getItem(Us);if(G===null)return;let q=JSON.parse(G),ce=typeof q.top=="number"&&Number.isFinite(q.top)?q.top:typeof q.y=="number"&&Number.isFinite(q.y)?q.y:null;ce!==null&&(k.current=ce,h(ce))}catch{}},[]);let V=G=>{if(!(G.pointerType==="mouse"&&G.button!==0)){A.current={pointerId:G.pointerId,startX:G.clientX,startY:G.clientY,dragged:!1};try{G.currentTarget.setPointerCapture(G.pointerId)}catch{}G.preventDefault()}},y=G=>{let q=A.current;if(q===null||q.pointerId!==G.pointerId)return;let ce=G.clientX-q.startX,Re=G.clientY-q.startY;if(!q.dragged&&Math.hypot(ce,Re)<4)return;q.dragged=!0,M||B(!0);let Te=G.currentTarget.offsetHeight,Ce=Math.min(Math.max(0,G.clientY-Te/2),window.innerHeight-Te);k.current=Ce,h(Ce)},D=G=>{let q=A.current;if(!(q===null||q.pointerId!==G.pointerId)){A.current=null,B(!1);try{G.currentTarget.releasePointerCapture(G.pointerId)}catch{}if(q.dragged){F.current=!0;let ce=k.current;if(ce!==null)try{window.localStorage.setItem(Us,JSON.stringify({top:ce}))}catch{}}}},w=()=>{if(F.current){F.current=!1;return}u()},O=o.config?.advisorPanelEnabled??o.status?.panelEnabled??!0,X=o.status?.defaultEnabled??o.config?.advisorEnabled===!0,C=o.status?.effectiveEnabled??X;(0,je.useEffect)(()=>{!O&&!l&&i(!1)},[O,l]),(0,je.useEffect)(()=>{!C&&!l&&i(!1)},[C,l]),(0,je.useEffect)(()=>{let G=window.matchMedia("(max-width: 767px)"),q=ce=>{if(!O&&!l){i(!1);return}if(ce.matches){b.current||i(!1);return}i(g.current)};return G.addEventListener("change",q),()=>G.removeEventListener("change",q)},[O]),(0,je.useEffect)(()=>(a.setPanelVisible(s),()=>a.setPanelVisible(!1)),[s,a]);let u=()=>{c(!0),i(G=>{let q=!G;return g.current=q,b.current=q,q})},r=o.status?.runtimeStatus??"disabled",v=C?r==="reviewing"?"advisor-capsule-reviewing":r==="quota_exhausted"||r==="halted"?"advisor-capsule-error":"advisor-capsule-idle":"advisor-capsule-disabled",_=O?t.t?.("advisor.header.toggle.title")??"\u6253\u5F00\u6216\u6298\u53E0\u4F1A\u8BDD\u8BC4\u5BA1\u9762\u677F":"Advisor \u9762\u677F\u663E\u793A\u5DF2\u5173\u95ED\uFF1B\u70B9\u51FB\u53EF\u6253\u5F00\u8BBE\u7F6E";if(!X)return null;let L=typeof document>"u"?null:(0,Js.createPortal)(s?(0,x.jsx)(Zr,{store:a,snapshot:o,onCollapse:u}):O?(0,x.jsxs)("button",{type:"button",ref:S,className:`advisor-capsule ${v}${M?" advisor-capsule-dragging":""}`,style:m!==null?{top:m}:void 0,onClick:w,onPointerDown:V,onPointerMove:y,onPointerUp:D,onPointerCancel:D,"aria-label":"\u5C55\u5F00\u4F1A\u8BDD\u8BC4\u5BA1\u9762\u677F",title:"\u5C55\u5F00\u4F1A\u8BDD\u8BC4\u5BA1\u9762\u677F\uFF08\u6309\u4F4F\u53EF\u6CBF\u53F3\u8FB9\u7F18\u4E0A\u4E0B\u62D6\u52A8\uFF09",children:[(0,x.jsx)("span",{className:"advisor-capsule-icon","aria-hidden":"true",children:"\u25C9"}),(0,x.jsx)("span",{className:"advisor-capsule-label",children:"Advisor"}),o.unreadCount>0&&(0,x.jsx)("span",{className:"advisor-unread","aria-label":`${o.unreadCount} \u6761\u672A\u8BFB\u8BC4\u5BA1`,children:o.unreadCount>99?"99+":o.unreadCount})]}):null,document.body);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("button",{type:"button",className:`advisor-header-toggle${s?" advisor-header-toggle-active":""} ${v}`,onClick:u,"aria-expanded":s,"aria-label":_,title:_,children:[(0,x.jsx)("span",{"aria-hidden":"true",children:"\u25C9"}),(0,x.jsx)("span",{children:t.t?.("advisor.header.toggle")??"\u4F1A\u8BDD\u8BC4\u5BA1"}),o.unreadCount>0&&(0,x.jsx)("span",{className:"advisor-header-unread","aria-hidden":"true",children:o.unreadCount>99?"99+":o.unreadCount})]}),L]})}function Zr({store:t,snapshot:e,onCollapse:a}){let[o,s]=(0,je.useState)("live"),[i,l]=(0,je.useState)(""),[c,g]=(0,je.useState)(!0),[b,m]=(0,je.useState)(e.recordsFilters),[h,k]=(0,je.useState)(!0),A=(0,je.useRef)(null);(0,je.useEffect)(()=>{o==="history"&&e.records.length===0&&!e.recordsLoading&&t.loadRecords(b)},[o]),(0,je.useEffect)(()=>{if(o!=="live"||!h)return;let r=A.current;r!==null&&(r.scrollTop=r.scrollHeight)},[e.reviews,o,h]);let F=()=>{let r=A.current;r!==null&&k(r.scrollHeight-r.scrollTop-r.clientHeight<28)},M=(0,je.useMemo)(()=>{for(let r=e.reviews.length-1;r>=0;r-=1){let v=e.reviews[r];if(v.started!==null)return{sessionName:v.started.sessionName,workspace:v.started.workspace};if(v.record!==null)return{sessionName:v.record.sessionName,workspace:v.record.workspace}}return{sessionName:null,workspace:null}},[e.reviews]),B=(0,je.useMemo)(()=>{for(let r=e.reviews.length-1;r>=0;r-=1){let v=e.reviews[r].started?.input?.epoch;if(v!==void 0)return v}return null},[e.reviews]),S=(0,je.useMemo)(()=>{if(e.status?.conversationStats!==null&&e.status?.conversationStats!==void 0)return e.status.conversationStats.messageCount;for(let r=e.reviews.length-1;r>=0;r-=1){let v=e.reviews[r].started?.input?.contextCount;if(v!==void 0)return v}return 0},[e.reviews]),V=(0,je.useMemo)(()=>{let r=e.status?.conversationStats;if(r==null)return null;let v=r.charCount/1e3;return v<1?`${r.charCount} \u5B57`:`${v>=10?Math.round(v):v.toFixed(1)} K`},[e.status?.conversationStats]),y=e.status?.runtimeStatus??"disabled",D=Wr[y],w=`${e.status?.sessionName??M.sessionName??Xs(e.sessionId)} \xB7 ${e.status?.workspace??M.workspace??"\u5DE5\u4F5C\u7A7A\u95F4\u672A\u77E5"}`,O=(0,je.useMemo)(()=>{let r=new Set;for(let v of e.records)v.workspace!==null&&v.workspace!==""&&r.add(v.workspace);for(let v of e.reviews){let _=v.started?.workspace??v.record?.workspace;_!=null&&_!==""&&r.add(_)}return[...r]},[e.records,e.reviews]),X=(0,je.useMemo)(()=>{let r=Qr(b.timeRange);return r===null?e.records:e.records.filter(v=>v.ts>=r)},[e.records,b.timeRange]),C=async()=>{let r=i.trim();r!==""&&(await t.sendInstruction(r),t.getSnapshot().instructionsError===null&&l(""))},u=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),C())};return(0,x.jsxs)("aside",{className:"advisor-panel","aria-label":"\u4F1A\u8BDD\u8BC4\u5BA1\u60AC\u6D6E\u9762\u677F",children:[(0,x.jsxs)("header",{className:"advisor-panel-header",children:[(0,x.jsxs)("div",{className:"advisor-panel-heading",children:[(0,x.jsxs)("div",{className:"advisor-title-row",children:[(0,x.jsx)("strong",{className:"advisor-title",children:"\u4F1A\u8BDD\u8BC4\u5BA1"}),(0,x.jsxs)("span",{className:`advisor-status-badge ${D.cls}`,title:e.status?.phase||D.label,children:[(0,x.jsx)("span",{className:"advisor-status-icon","aria-hidden":"true",children:D.icon}),D.label]})]}),(0,x.jsx)("div",{className:"advisor-owner",title:w,children:w})]}),(0,x.jsx)("button",{type:"button",className:"advisor-icon-button",onClick:a,"aria-label":"\u6298\u53E0 Advisor \u9762\u677F",title:"\u6298\u53E0",children:"\u2014"})]}),(0,x.jsxs)("section",{className:"advisor-status-strip","aria-label":"Advisor \u8FD0\u884C\u72B6\u6001",children:[(0,x.jsxs)("button",{type:"button",role:"switch","aria-checked":e.status?.effectiveEnabled??!1,className:`advisor-switch${e.status?.effectiveEnabled?" advisor-switch-on":""}`,disabled:e.statusLoading||e.status===null,onClick:()=>{t.toggleSession(!(e.status?.effectiveEnabled??!1))},title:"\u4EC5\u5207\u6362\u5F53\u524D\u4F1A\u8BDD\uFF1B\u4E0D\u4F1A\u4FEE\u6539\u5168\u5C40\u9ED8\u8BA4\u5F00\u5173",children:[(0,x.jsx)("span",{className:"advisor-switch-track",children:(0,x.jsx)("span",{className:"advisor-switch-thumb"})}),(0,x.jsx)("span",{children:e.status?.effectiveEnabled?"\u672C\u4F1A\u8BDD\u5DF2\u542F\u7528":"\u672C\u4F1A\u8BDD\u672A\u542F\u7528"})]}),(0,x.jsxs)("div",{className:"advisor-status-facts",children:[(0,x.jsx)("span",{className:"advisor-model",title:`${e.status?.provider??"\u2014"} / ${e.status?.model??"\u2014"}`,children:e.status?.model??"\u6A21\u578B\u672A\u89E3\u6790"}),(0,x.jsx)("span",{children:Yr(e.lastActivityAt)}),(e.status?.pendingCount??0)>0&&(0,x.jsxs)("span",{className:"advisor-pending-count",children:["pending ",e.status?.pendingCount]})]})]}),e.status?.gateStatus!==void 0&&e.status.gateStatus!=="ok"&&(0,x.jsxs)("div",{className:"advisor-warning",role:"status",children:["\u6A21\u578B\u95E8\u7981\u672A\u901A\u8FC7\uFF1A",e.status.disabledReason??(e.status.gateStatus==="config-incomplete"?"provider/model \u5FC5\u987B\u540C\u65F6\u586B\u5199\u6216\u540C\u65F6\u7559\u7A7A":"\u5F53\u524D\u4F1A\u8BDD\u6A21\u578B\u4E0D\u53EF\u7528")]}),e.statusError!==null&&(0,x.jsx)(xa,{text:`\u72B6\u6001\u52A0\u8F7D\u5931\u8D25\uFF1A${e.statusError}`,onRetry:()=>{t.refreshStatus()}}),e.notice!==null&&(0,x.jsxs)("div",{className:`advisor-notice advisor-notice-${e.notice.kind}`,role:"status",children:[(0,x.jsx)("span",{children:e.notice.text}),(0,x.jsx)("button",{type:"button",className:"advisor-notice-close",onClick:()=>t.clearNotice(),"aria-label":"\u5173\u95ED\u63D0\u793A",children:"\xD7"})]}),(0,x.jsxs)("div",{className:"advisor-tabs",role:"tablist","aria-label":"\u8BC4\u5BA1\u6570\u636E\u89C6\u56FE",children:[(0,x.jsx)("button",{type:"button",role:"tab","aria-selected":o==="scopes",className:`advisor-tab${o==="scopes"?" advisor-tab-active":""}`,onClick:()=>s("scopes"),children:"\u7EA6\u675F"}),(0,x.jsx)("button",{type:"button",role:"tab","aria-selected":o==="live",className:`advisor-tab${o==="live"?" advisor-tab-active":""}`,onClick:()=>s("live"),children:"\u5B9E\u65F6"}),(0,x.jsx)("button",{type:"button",role:"tab","aria-selected":o==="history",className:`advisor-tab${o==="history"?" advisor-tab-active":""}`,onClick:()=>s("history"),children:"\u8BB0\u5F55"}),(0,x.jsx)("button",{type:"button",role:"tab","aria-selected":o==="settings",className:`advisor-tab${o==="settings"?" advisor-tab-active":""}`,onClick:()=>s("settings"),children:"\u8BBE\u7F6E"})]}),o==="scopes"?(0,x.jsx)(To,{children:(0,x.jsx)(el,{store:t,snapshot:e})}):o==="live"?(0,x.jsxs)("div",{className:"advisor-live",children:[(0,x.jsxs)("section",{ref:A,className:"advisor-flow",onScroll:F,"aria-label":"\u5B9E\u65F6\u8BC4\u5BA1\u6D41",children:[e.eventsError!==null&&(0,x.jsx)(xa,{text:`\u5B9E\u65F6\u6D41\u52A0\u8F7D\u5931\u8D25\uFF1A${e.eventsError}`,onRetry:()=>t.resetCursorAndLive()}),e.eventsLoading&&e.reviews.length===0&&(0,x.jsx)(Ya,{text:"\u6B63\u5728\u8FDE\u63A5 Advisor \u5B9E\u65F6\u6D41\u2026"}),!e.eventsLoading&&e.reviews.length===0&&e.eventsError===null&&(0,x.jsx)("div",{className:"advisor-empty",children:e.status?.effectiveEnabled?"\u6682\u65E0\u8BC4\u5BA1\u6D3B\u52A8\u3002\u65B0\u7684\u8BC4\u5BA1\u4F1A\u5728\u8FD9\u91CC\u5B9E\u65F6\u51FA\u73B0\u3002":"\u672A\u542F\u7528\uFF1A\u53EF\u4F7F\u7528\u4E0A\u65B9\u4F1A\u8BDD\u5F00\u5173\uFF0C\u6216\u5728\u4E0B\u65B9\u8BBE\u7F6E\u4E2D\u5F00\u542F Advisor\u3002"}),e.reviews.map((r,v)=>(0,x.jsx)(Ks,{item:r,defaultInputOpen:v===e.reviews.length-1},r.reviewId)),!h&&(0,x.jsx)("button",{type:"button",className:"advisor-follow-button",onClick:()=>{k(!0);let r=A.current;r!==null&&(r.scrollTop=r.scrollHeight)},children:"\u56DE\u5230\u6700\u65B0"})]}),(0,x.jsxs)("section",{className:"advisor-instructions","aria-label":"Advisor \u6307\u4EE4\u533A",children:[(0,x.jsxs)("div",{className:"advisor-instruction-compose",children:[(0,x.jsx)("textarea",{className:"advisor-textarea advisor-instruction-input",rows:2,maxLength:2e3,value:i,onChange:r=>l(r.target.value),onKeyDown:u,placeholder:"\u7ED9\u4F1A\u8BDD\u8BC4\u5BA1\u53D1\u6307\u4EE4\u2026\uFF08Enter \u53D1\u9001\uFF0CShift+Enter \u6362\u884C\uFF09"}),(0,x.jsx)("button",{type:"button",className:"advisor-button advisor-button-primary",disabled:e.instructionMutating||i.trim()==="",onClick:()=>{C()},children:"\u53D1\u9001"})]}),(0,x.jsx)("div",{className:"advisor-steer-hint",children:"\u8BC4\u5BA1\u5EFA\u8BAE\u6309\u4E25\u91CD\u5EA6\u5B9E\u65F6\u9001\u8FBE\uFF08nit/concern/blocker \u8D70 steer\uFF0Cinfo \u9ED8\u8BA4\u4EC5\u8BB0\u5F55\uFF09\uFF1B \u6307\u4EE4\u6846\u63D0\u95EE\u4F1A\u7ACB\u5373\u89E6\u53D1 Advisor \u56DE\u7B54\u5E76\u6CE8\u5165\u4F1A\u8BDD\u6D41\u3002"}),(0,x.jsxs)("div",{className:"advisor-conversation-bar",children:[(0,x.jsxs)("span",{className:"advisor-conversation-stats",title:"\u8BC4\u5BA1\u5458\u6301\u7EED\u4F1A\u8BDD\u5DF2\u5360\u7528\u7684\u4E0A\u4E0B\u6587\uFF08\u5B57\u7B26\u6570\u4F30\u7B97\uFF0C\u4E2D\u6587 1 \u5B57\u22481 token\uFF1B\u5BF9\u6BD4\u6A21\u578B\u4E0A\u4E0B\u6587\u7A97\u53E3\u5224\u65AD\u662F\u5426\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\uFF09",children:[B!==null?`\u8BC4\u5BA1\u4F1A\u8BDD #${B}`:"\u8BC4\u5BA1\u4F1A\u8BDD"," \xB7 \u4E0A\u4E0B\u6587 ",S," \u6761",V!==null&&` \xB7 \u2248${V}`]}),(0,x.jsx)("button",{type:"button",className:"advisor-new-conversation",disabled:e.instructionMutating,onClick:()=>{window.confirm(`\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\u5C06\u6E05\u7A7A\u8BC4\u5BA1\u5458\u7684\u5168\u90E8\u4E0A\u4E0B\u6587\u4E0E\u8BB0\u5FC6\uFF08\u8BC4\u5BA1\u5458\u4ECE\u96F6\u5F00\u59CB\uFF09\u3002
\u786E\u8BA4\u540E\u53EF\u5728\u7B2C\u4E00\u6761\u6307\u4EE4\u4E2D\u544A\u77E5\u80CC\u666F\u4FE1\u606F\u3002`)&&t.resetConversation()},title:"\u6E05\u7A7A\u8BC4\u5BA1\u5458\u6301\u7EED\u4F1A\u8BDD\uFF08\u4E0A\u4E0B\u6587+\u8BB0\u5FC6\uFF09\uFF0C\u4ECE\u96F6\u5F00\u59CB\uFF1B\u9002\u5408\u6362\u4EFB\u52A1/\u63A7\u5236\u4E0A\u4E0B\u6587\u957F\u5EA6",children:"\u{1F504} \u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD"})]}),(0,x.jsxs)("button",{type:"button",className:"advisor-pending-toggle","aria-expanded":c,onClick:()=>g(r=>!r),children:[(0,x.jsxs)("span",{children:["\u5F85\u6D88\u8D39\u6307\u4EE4 (",e.pending.length,")"]}),(0,x.jsx)("span",{"aria-hidden":"true",children:c?"\u25B4":"\u25BE"})]}),c&&(0,x.jsxs)("div",{className:"advisor-pending-list",children:[e.instructionsLoading&&(0,x.jsx)("span",{className:"advisor-muted",children:"\u52A0\u8F7D\u4E2D\u2026"}),!e.instructionsLoading&&e.pending.length===0&&(0,x.jsx)("span",{className:"advisor-muted",children:"\u6682\u65E0\u5F85\u6D88\u8D39\u6307\u4EE4"}),e.pending.map(r=>(0,x.jsxs)("div",{className:"advisor-pending-item",children:[(0,x.jsx)("span",{className:"advisor-pending-state",children:r.state==="reserved"?"\u6D88\u8D39\u4E2D":"\u5F85\u6D88\u8D39"}),(0,x.jsx)("span",{className:"advisor-pending-text",title:r.text,children:r.text})]},r.id)),e.pending.length>0&&(0,x.jsx)("button",{type:"button",className:"advisor-link advisor-link-danger",disabled:e.instructionMutating,onClick:()=>{t.clearInstructions()},children:"\u6E05\u7A7A\u5F85\u6D88\u8D39\u6307\u4EE4"})]}),e.instructionsError!==null&&(0,x.jsxs)("div",{className:"advisor-inline-error",children:[e.instructionsError,(0,x.jsx)("button",{type:"button",className:"advisor-link",onClick:()=>{t.refreshInstructions()},children:"\u91CD\u8BD5"})]})]})]}):o==="settings"?(0,x.jsx)(tl,{store:t,snapshot:e}):(0,x.jsxs)("section",{className:"advisor-history","aria-label":"\u5386\u53F2\u8BC4\u5BA1\u8BB0\u5F55",children:[(0,x.jsxs)("div",{className:"advisor-history-filters",children:[(0,x.jsxs)("select",{className:"advisor-select",value:b.session,onChange:r=>m({...b,session:r.target.value}),"aria-label":"\u4F1A\u8BDD\u7B5B\u9009",children:[(0,x.jsx)("option",{value:"current",children:"\u5F53\u524D\u4F1A\u8BDD"}),(0,x.jsx)("option",{value:"all",children:"\u5168\u90E8\u4F1A\u8BDD"})]}),(0,x.jsxs)("select",{className:"advisor-select",value:b.severity,onChange:r=>m({...b,severity:r.target.value}),"aria-label":"\u4E25\u91CD\u5EA6\u7B5B\u9009",children:[(0,x.jsx)("option",{value:"",children:"\u5168\u90E8\u4E25\u91CD\u5EA6"}),(0,x.jsx)("option",{value:"info",children:"info"}),(0,x.jsx)("option",{value:"nit",children:"nit"}),(0,x.jsx)("option",{value:"concern",children:"concern"}),(0,x.jsx)("option",{value:"blocker",children:"blocker"}),(0,x.jsx)("option",{value:"answer",children:"\u56DE\u7B54"})]}),(0,x.jsxs)("select",{className:"advisor-select",value:b.timeRange,onChange:r=>m({...b,timeRange:r.target.value}),"aria-label":"\u65F6\u95F4\u7B5B\u9009",children:[(0,x.jsx)("option",{value:"all",children:"\u5168\u90E8\u65F6\u95F4"}),(0,x.jsx)("option",{value:"24h",children:"\u6700\u8FD1 24 \u5C0F\u65F6"}),(0,x.jsx)("option",{value:"7d",children:"\u6700\u8FD1 7 \u5929"}),(0,x.jsx)("option",{value:"30d",children:"\u6700\u8FD1 30 \u5929"})]}),(0,x.jsxs)("div",{className:"advisor-workspace-filter",children:[(0,x.jsx)("input",{className:"advisor-input",list:"advisor-workspaces",value:b.workspace,onChange:r=>m({...b,workspace:r.target.value}),placeholder:"\u5DE5\u4F5C\u7A7A\u95F4\uFF08\u53EF\u9009\uFF09","aria-label":"\u5DE5\u4F5C\u7A7A\u95F4\u7B5B\u9009"}),(0,x.jsx)("datalist",{id:"advisor-workspaces",children:O.map(r=>(0,x.jsx)("option",{value:r},r))}),(0,x.jsx)("button",{type:"button",className:"advisor-button",onClick:()=>{t.loadRecords(b)},children:"\u67E5\u8BE2"})]})]}),e.recordsError!==null&&(0,x.jsx)(xa,{text:`\u5386\u53F2\u52A0\u8F7D\u5931\u8D25\uFF1A${e.recordsError}`,onRetry:()=>{t.loadRecords(b)}}),e.recordsLoading&&e.records.length===0&&(0,x.jsx)(Ya,{text:"\u6B63\u5728\u52A0\u8F7D\u5386\u53F2\u8BB0\u5F55\u2026"}),!e.recordsLoading&&X.length===0&&e.recordsError===null&&(0,x.jsx)("div",{className:"advisor-empty",children:"\u5F53\u524D\u7B5B\u9009\u4E0B\u6682\u65E0\u8BC4\u5BA1\u8BB0\u5F55\u3002"}),(0,x.jsx)("div",{className:"advisor-history-list",children:X.map((r,v)=>(0,x.jsx)(Ks,{item:{reviewId:r.reviewId,started:null,finished:null,record:r,arrivedAt:0},defaultInputOpen:v===0,history:!0},r.reviewId))}),e.recordsHasMore&&(0,x.jsx)("button",{type:"button",className:"advisor-button advisor-load-more",disabled:e.recordsLoading,onClick:()=>{t.loadRecords(e.recordsFilters,!0)},children:e.recordsLoading?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u591A"})]})]})}function Ks(t){let{item:e,history:a=!1}=t,[o,s]=(0,je.useState)(t.defaultInputOpen);(0,je.useEffect)(()=>s(t.defaultInputOpen),[t.defaultInputOpen]);let i=e.finished??e.record,l=e.started?.ts??i?.ts??0,c=i?.note??null,g=c===null?null:Kr[c.severity],b=i===null,m=e.started===null&&e.record!==null?`${e.record.sessionName??Xs(e.record.sessionId)} \xB7 ${e.record.workspace??"\u5DE5\u4F5C\u7A7A\u95F4\u672A\u77E5"}`:null;return(0,x.jsxs)("article",{className:`advisor-review-card${b?" advisor-review-card-running":""}${a?" advisor-review-card-history":""}`,tabIndex:0,"aria-label":`\u4F1A\u8BDD\u8BC4\u5BA1 ${e.reviewId}`,children:[(0,x.jsxs)("div",{className:"advisor-review-meta",children:[(0,x.jsx)("time",{dateTime:new Date(l).toISOString(),title:Ws(l),children:a?Ws(l):Gs(l)}),g!==null&&(0,x.jsx)("span",{className:`advisor-severity ${g.cls}`,children:g.label}),i!==null&&(0,x.jsx)("span",{children:Xr(i.elapsedMs)}),i?.delivery==="steer"&&(0,x.jsx)("span",{className:"advisor-delivery",children:"\u5DF2\u9001\u8FBE \u2713"}),i?.delivery==="inject"&&(0,x.jsx)("span",{className:"advisor-delivery",children:"\u5DF2\u6CE8\u5165 \u2713"}),i!==null&&i.delivery===null&&(0,x.jsx)("span",{children:Vs(i.outcome)})]}),m!==null&&(0,x.jsx)("div",{className:"advisor-record-owner",title:m,children:m}),(i?.instructions.length??0)>0&&(0,x.jsxs)("div",{className:"advisor-consumed-instructions",children:[(0,x.jsxs)("span",{className:"advisor-instruction-tag",children:["\u{1F4CB} \u6267\u884C\u6307\u4EE4 \xD7",i?.instructions.length]}),i?.instructions.map((h,k)=>(0,x.jsx)("span",{className:"advisor-consumed-text",title:h,children:h},`${k}-${h}`))]}),e.started!==null?(0,x.jsxs)("div",{className:"advisor-input-block",children:[(0,x.jsxs)("button",{type:"button",className:"advisor-input-summary","aria-expanded":o,onClick:()=>s(h=>!h),children:[(0,x.jsxs)("span",{children:["\u4F1A\u8BDD #",e.started.input.epoch," \xB7 \u4E0A\u4E0B\u6587 ",e.started.input.contextCount," \u6761",e.started.input.mode==="qa"?" \xB7 \u95EE\u7B54":` \xB7 \u672C\u8F6E ${e.started.input.messageCount} \u6761`]}),(0,x.jsx)("span",{"aria-hidden":"true",children:o?"\u6536\u8D77 \u25B4":"\u5C55\u5F00 \u25BE"})]}),o&&(0,x.jsx)("pre",{className:"advisor-input-markdown",children:e.started.input.markdown})]}):a?(0,x.jsx)("div",{className:"advisor-input-unavailable",children:"\u5386\u53F2\u7EC8\u6001\u8BB0\u5F55\u4E0D\u5305\u542B\u8F93\u5165\u5FEB\u7167"}):null,b?(0,x.jsxs)("div",{className:"advisor-reviewing","aria-live":"polite",children:[(0,x.jsx)("span",{children:"\u8BC4\u5BA1\u4E2D\u2026"}),(0,x.jsx)("span",{className:"advisor-skeleton-line"}),(0,x.jsx)("span",{className:"advisor-skeleton-line advisor-skeleton-line-short"})]}):c!==null?(0,x.jsxs)("div",{className:"advisor-note",children:[i?.outcome==="suppressed"&&(0,x.jsx)("div",{className:"advisor-note-meta",children:"\u5DF2\u6291\u5236\uFF1A\u6B64\u6761\u5EFA\u8BAE\u88AB\u95F8\u95E8\u62E6\u622A\uFF08\u53BB\u91CD / \u7A7A\u6CDB\u6291\u5236 / \u6BCF\u8F6E\u4E00\u6761\uFF09\uFF0C\u672A\u6CE8\u5165\u4E3B\u4F1A\u8BDD"}),c.text]}):(0,x.jsx)("div",{className:"advisor-outcome-empty",children:Vs(i.outcome)}),i?.error!==null&&i?.error!==void 0&&(0,x.jsxs)("div",{className:"advisor-card-error",children:[i.error.code,"\uFF1A",i.error.message,i.error.retryable&&(0,x.jsx)("span",{children:"\uFF08\u53EF\u91CD\u8BD5\uFF09"})]})]})}var To=class extends je.Component{state={failed:null};static getDerivedStateFromError(e){return{failed:e instanceof Error?e.message:String(e)}}componentDidCatch(e){console.error("advisor scopes tab crashed:",e)}render(){return this.state.failed!==null?(0,x.jsx)("section",{className:"advisor-scopes","aria-label":"\u8BC4\u5BA1\u5458\u7EA6\u675F",children:(0,x.jsxs)("div",{className:"advisor-card-error",children:["\u7EA6\u675F\u533A\u57DF\u6E32\u67D3\u51FA\u9519\uFF1A",this.state.failed,"\uFF08\u8BE6\u89C1\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\uFF09"]})}):this.props.children}};function el({store:t,snapshot:e}){let[a,o]=(0,je.useState)(null);if((0,je.useEffect)(()=>{e.scopes!==null&&o({global:{text:e.scopes.global.text},project:{workspace:e.scopes.project.workspace,text:e.scopes.project.text},session:{text:e.scopes.session.text},conversation:{text:e.scopes.conversation.text}})},[e.scopes]),a===null)return(0,x.jsxs)("section",{className:"advisor-scopes","aria-label":"\u8BC4\u5BA1\u5458\u7EA6\u675F",children:[e.scopesLoading&&(0,x.jsx)(Ya,{text:"\u6B63\u5728\u52A0\u8F7D\u7EA6\u675F\u2026"}),e.scopesError!==null&&(0,x.jsx)(xa,{text:`\u7EA6\u675F\u52A0\u8F7D\u5931\u8D25\uFF1A${e.scopesError}`,onRetry:()=>{t.refreshScopes()}})]});let s=(i,l)=>{t.saveScope(i,l)};return(0,x.jsxs)("section",{className:"advisor-scopes","aria-label":"\u8BC4\u5BA1\u5458\u7EA6\u675F",children:[e.scopesError!==null&&(0,x.jsx)(xa,{text:`\u7EA6\u675F\u4FDD\u5B58\u5931\u8D25\uFF1A${e.scopesError}`,onRetry:()=>{t.refreshScopes()}}),(0,x.jsx)("div",{className:"advisor-scope-hint",children:"\u56DB\u5C42\u7EA7\u7EA6\u675F\u62FC\u63A5\u8FDB\u8BC4\u5BA1\u5458\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF08\u51B2\u7A81\u65F6\u8D8A\u5C40\u90E8\u8D8A\u4F18\u5148\uFF09\uFF1B\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\u3002"}),(0,x.jsx)(Xa,{label:`${wa.conversation}\uFF08\u968F\u300C\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\u300D\u6E05\u7A7A\uFF09`,value:a.conversation.text,placeholder:"\u53EA\u5BF9\u672C\u6B21\u8BC4\u5BA1\u4F1A\u8BDD\u751F\u6548\u2026\uFF08\u53EF\u591A\u884C\uFF0C\u591A\u6761\u6307\u4EE4\u4E00\u6B21\u5199\uFF09",saving:e.scopesSaving,onSave:i=>s("conversation",i)}),(0,x.jsx)(Xa,{label:`${wa.session}\uFF08\u672C\u4F1A\u8BDD\u4E00\u76F4\u6709\u6548\uFF09`,value:a.session.text,placeholder:"\u53EA\u5BF9\u672C\u4F1A\u8BDD\u751F\u6548\u2026",saving:e.scopesSaving,onSave:i=>s("session",i)}),(0,x.jsx)(Xa,{label:`${wa.project}\uFF08\u5DE5\u4F5C\u533A ${a.project.workspace??"\u672A\u77E5"} \u7684\u6240\u6709\u4F1A\u8BDD\u5171\u4EAB\uFF09`,value:a.project.text,placeholder:"\u5BF9\u672C\u9879\u76EE\u6240\u6709\u4F1A\u8BDD\u751F\u6548\u2026",saving:e.scopesSaving,onSave:i=>s("project",i)}),(0,x.jsx)(Xa,{label:`${wa.global}\uFF08\u6240\u6709\u9879\u76EE\u3001\u6240\u6709\u4F1A\u8BDD\u90FD\u751F\u6548\uFF09`,value:a.global.text,placeholder:"\u5BF9\u6240\u6709\u9879\u76EE\u6240\u6709\u4F1A\u8BDD\u751F\u6548\u2026\uFF08\u5982\uFF1A\u8BC4\u5BA1\u610F\u89C1\u4E00\u5F8B\u7528\u4E2D\u6587\u3001\u4E0D\u8981\u91CD\u590D\u5DF2\u63D0\u8FC7\u7684\u5EFA\u8BAE\uFF09",saving:e.scopesSaving,onSave:i=>s("global",i)})]})}function Xa(t){let[e,a]=(0,je.useState)(t.value),[o,s]=(0,je.useState)(!1);return(0,je.useEffect)(()=>{a(t.value),s(!1)},[t.value]),(0,x.jsxs)("label",{className:"advisor-scope-field",children:[(0,x.jsx)("span",{className:"advisor-scope-label",children:t.label}),(0,x.jsx)("textarea",{className:"advisor-textarea advisor-scope-textarea",rows:4,maxLength:4e3,value:e,onChange:i=>{a(i.target.value),s(!0)},placeholder:t.placeholder}),(0,x.jsx)("button",{type:"button",className:"advisor-button advisor-scope-save",disabled:t.saving||!o&&e===t.value,onClick:()=>t.onSave(e),children:t.saving?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"})]})}function tl({store:t,snapshot:e}){let[a,o]=(0,je.useState)(null),[s,i]=(0,je.useState)(null);(0,je.useEffect)(()=>{e.config!==null&&o({advisorProvider:e.config.advisorProvider,advisorModel:e.config.advisorModel,advisorSystemPrompt:e.config.advisorSystemPrompt,advisorPanelEnabled:e.config.advisorPanelEnabled,advisorInfoInject:e.config.advisorInfoInject})},[e.config]);let l=async()=>{if(a===null)return;let c=a.advisorProvider?.trim()??"",g=a.advisorModel?.trim()??"";if(c===""!=(g==="")){i("provider \u4E0E model \u5FC5\u987B\u540C\u65F6\u586B\u5199\uFF0C\u6216\u540C\u65F6\u7559\u7A7A\u4EE5\u7EE7\u627F\u4F1A\u8BDD\u6A21\u578B\u3002");return}let b=e.config?.defaultSystemPrompt??"",m=a.advisorSystemPrompt.trim()===""||a.advisorSystemPrompt.trim()===b.trim()?"":a.advisorSystemPrompt;i(null),await t.saveConfig({...a,advisorProvider:c===""?null:c,advisorModel:g===""?null:g,advisorSystemPrompt:m})};return(0,x.jsxs)("div",{className:"advisor-settings",children:[(0,x.jsx)("div",{className:"advisor-settings-title",children:"\u4F1A\u8BDD\u8BC4\u5BA1\u8BBE\u7F6E"}),(0,x.jsxs)("div",{className:"advisor-settings-body",children:[(0,x.jsx)("div",{className:"advisor-muted",children:"\u6A21\u5757\u603B\u95F8\uFF08\u542F\u7528/\u505C\u7528\uFF09\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u914D\u7F6E\u533A\u63A7\u5236"}),e.configLoading&&a===null&&(0,x.jsx)(Ya,{text:"\u6B63\u5728\u52A0\u8F7D\u8BBE\u7F6E\u2026"}),e.configError!==null&&(0,x.jsx)(xa,{text:`\u8BBE\u7F6E\u52A0\u8F7D\u5931\u8D25\uFF1A${e.configError}`,onRetry:()=>{t.refreshConfig()}}),a!==null&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"advisor-settings-switches",children:[(0,x.jsxs)("label",{className:"advisor-check-row",children:[(0,x.jsx)("input",{type:"checkbox",checked:a.advisorPanelEnabled,onChange:c=>o({...a,advisorPanelEnabled:c.target.checked})}),(0,x.jsx)("span",{children:"\u663E\u793A\u60AC\u6D6E\u80F6\u56CA\u6309\u94AE"})]}),(0,x.jsxs)("label",{className:"advisor-check-row",title:"info \u662F\u6700\u4F4E\u7B49\u7EA7\u5EFA\u8BAE\uFF1A\u9ED8\u8BA4\u53EA\u8BB0\u5F55\u4E0D\u6CE8\u5165\u4F1A\u8BDD\uFF1B\u5F00\u542F\u540E\u4EE5\u6CE8\u5165\uFF08\u975E\u6253\u65AD\uFF09\u65B9\u5F0F\u9001\u8FBE",children:[(0,x.jsx)("input",{type:"checkbox",checked:a.advisorInfoInject,onChange:c=>o({...a,advisorInfoInject:c.target.checked})}),(0,x.jsx)("span",{children:"info \u7EA7\u5EFA\u8BAE\u4E5F\u6CE8\u5165\u4F1A\u8BDD"})]})]}),(0,x.jsxs)("div",{className:"advisor-settings-grid",children:[(0,x.jsxs)("label",{className:"advisor-field",children:[(0,x.jsx)("span",{children:"\u4F9B\u5E94\u5546\uFF08Provider\uFF09"}),(0,x.jsx)("input",{className:"advisor-input",value:a.advisorProvider??"",onChange:c=>o({...a,advisorProvider:c.target.value}),placeholder:"\u7559\u7A7A\u5219\u7EE7\u627F\u4F1A\u8BDD"})]}),(0,x.jsxs)("label",{className:"advisor-field",children:[(0,x.jsx)("span",{children:"\u6A21\u578B\uFF08Model\uFF09"}),(0,x.jsx)("input",{className:"advisor-input",value:a.advisorModel??"",onChange:c=>o({...a,advisorModel:c.target.value}),placeholder:"\u7559\u7A7A\u5219\u7EE7\u627F\u4F1A\u8BDD"})]})]}),(0,x.jsxs)("label",{className:"advisor-field",children:[(0,x.jsxs)("span",{children:["\u8BC4\u5BA1\u7CFB\u7EDF\u63D0\u793A\u8BCD",(0,x.jsx)("span",{className:"advisor-prompt-mode",children:a.advisorSystemPrompt===""?"\uFF08\u4F7F\u7528\u5185\u7F6E\u9ED8\u8BA4\u63D0\u793A\u8BCD\uFF0C\u7F16\u8F91\u540E\u4FDD\u5B58\u5373\u4E3A\u81EA\u5B9A\u4E49\uFF09":"\uFF08\u81EA\u5B9A\u4E49\uFF09"})]}),(0,x.jsx)("textarea",{className:"advisor-textarea advisor-prompt-textarea",rows:22,maxLength:8192,value:a.advisorSystemPrompt===""?e.config?.defaultSystemPrompt??"":a.advisorSystemPrompt,onChange:c=>o({...a,advisorSystemPrompt:c.target.value}),placeholder:"\u7559\u7A7A\u4F7F\u7528\u5185\u7F6E\u8BC4\u5BA1\u63D0\u793A\u8BCD"}),(0,x.jsx)("button",{type:"button",className:"advisor-link",disabled:a===null||e.configSaving,onClick:()=>{(async()=>(o({...a,advisorSystemPrompt:""}),await t.saveConfig({advisorSystemPrompt:""})))()},title:"\u6062\u590D\u4E3A\u5185\u7F6E\u9ED8\u8BA4\u63D0\u793A\u8BCD\uFF08\u4FDD\u5B58\u540E\u7ACB\u5373\u751F\u6548\uFF0C\u8F93\u5165\u6846\u663E\u793A\u6700\u65B0\u5185\u7F6E\u9ED8\u8BA4\uFF09",children:"\u6062\u590D\u9ED8\u8BA4\u63D0\u793A\u8BCD"})]}),(0,x.jsx)("div",{className:"advisor-settings-hint",children:"\u5168\u5C40\u9ED8\u8BA4\u5F00\u5173\u4E0D\u4F1A\u6E05\u9664\u5F53\u524D\u4F1A\u8BDD override\uFF1B\u4F1A\u8BDD\u7EA7\u542F\u505C\u8BF7\u4F7F\u7528\u4E0A\u65B9\u72B6\u6001\u6761\u3002"}),(s??e.configError)!==null&&(0,x.jsx)("div",{className:"advisor-inline-error",children:s??e.configError}),(0,x.jsx)("button",{type:"button",className:"advisor-button advisor-button-primary advisor-settings-save",disabled:e.configSaving,onClick:()=>{l()},children:e.configSaving?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8BBE\u7F6E"})]})]})]})}function xa({text:t,onRetry:e}){return(0,x.jsxs)("div",{className:"advisor-error",role:"alert",children:[(0,x.jsx)("span",{children:t}),(0,x.jsx)("button",{type:"button",className:"advisor-link",onClick:e,children:"\u91CD\u8BD5"})]})}function Ya({text:t}){return(0,x.jsxs)("div",{className:"advisor-loading",role:"status",children:[(0,x.jsx)("span",{className:"advisor-loading-dot","aria-hidden":"true"}),(0,x.jsx)("span",{children:t})]})}var _e=require("react");var W=require("react/jsx-runtime"),Zs="/memory-evolve/api/broadcast",Ut=20;async function ia(t,e){let a=await fetch(`${Zs}${t}`,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.message??`HTTP ${a.status}`);return o}function Xt(t){let e=t instanceof Error?t.message:String(t);return e!==void 0&&e.trim()!==""?e:Za()?"Operation failed (no error detail)":"\u64CD\u4F5C\u5931\u8D25\uFF08\u65E0\u9519\u8BEF\u8BE6\u60C5\uFF09"}function Qa(t){return new Date(t).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function Qs(t){return t.startsWith("room:")||/^room-[0-9a-z-]+$/.test(t)}function al(t,e,a){if(t.startsWith("room:")||/^room-[0-9a-z-]+$/.test(t)){let o=t.startsWith("room:")?t.slice(5):t,s=e.get(o);return s!==void 0?s.name:o}return t.startsWith("project:")?t.slice(8):So(t,a)}function No(t,e=14){return t.length>e?`${t.slice(0,e)}\u2026`:t}function So(t,e){let a=No(t,14);return e[t]!==void 0?`${e[t]}\uFF08${a}\uFF09`:a}function ol({t}){let[e,a]=(0,_e.useState)(null),[o,s]=(0,_e.useState)(!1),[i,l]=(0,_e.useState)(null);(0,_e.useEffect)(()=>{let b=!1;return fetch("/memory-evolve/api/config").then(m=>m.ok?m.json():Promise.reject(new Error(`HTTP ${m.status}`))).then(m=>{!b&&m.config&&a(m.config)}).catch(m=>{b||l(Xt(m))}),()=>{b=!0}},[]);let c=(b,m)=>{s(!0),l(null),fetch("/memory-evolve/api/config",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({patch:{[b]:m}})}).then(h=>h.ok?h.json():Promise.reject(new Error(`HTTP ${h.status}`))).then(h=>{h.config&&a(h.config)}).catch(h=>l(Xt(h))).finally(()=>s(!1))};if(e===null)return(0,W.jsx)("div",{className:"bb-empty",children:t("broadcast.loading")});let g=b=>e[b]===!0;return(0,W.jsxs)("div",{className:"bb-settings",children:[(0,W.jsx)("div",{className:"bb-settings-title",children:t("broadcast.settings.wsCoord.title")}),(0,W.jsx)("p",{className:"bb-settings-desc",children:t("broadcast.settings.wsCoord.desc")}),(0,W.jsxs)("label",{className:"me-field",children:[(0,W.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.enabled"),(0,W.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.enabled.hint")})]}),(0,W.jsx)("input",{type:"checkbox",className:"me-switch",checked:g("wsCoordEnabled"),disabled:o,onChange:b=>c("wsCoordEnabled",b.target.checked)})]}),g("wsCoordEnabled")&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("label",{className:"me-field me-field-sub",children:[(0,W.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.snapshot"),(0,W.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.snapshot.hint")})]}),(0,W.jsx)("input",{type:"checkbox",className:"me-switch",checked:g("wsCoordSnapshot"),disabled:o,onChange:b=>c("wsCoordSnapshot",b.target.checked)})]}),(0,W.jsxs)("label",{className:"me-field me-field-sub",children:[(0,W.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.enforce"),(0,W.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.enforce.hint")})]}),(0,W.jsx)("input",{type:"checkbox",className:"me-switch",checked:g("wsCoordEnforceWrite"),disabled:o,onChange:b=>c("wsCoordEnforceWrite",b.target.checked)})]})]}),i!==null&&(0,W.jsx)("div",{className:"bb-error",children:i})]})}var Za=()=>typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en");function en(t){let{t:e,sessionId:a}=t,[o,s]=(0,_e.useState)("messages"),[i,l]=(0,_e.useState)(null),[c,g]=(0,_e.useState)(null),[b,m]=(0,_e.useState)(new Map),[h,k]=(0,_e.useState)({}),[A,F]=(0,_e.useState)("unread"),[M,B]=(0,_e.useState)(""),[S,V]=(0,_e.useState)(1),[y,D]=(0,_e.useState)("unread"),[w,O]=(0,_e.useState)(""),[X,C]=(0,_e.useState)(1),[u,r]=(0,_e.useState)(""),[v,_]=(0,_e.useState)("active"),[L,G]=(0,_e.useState)(0),[q,ce]=(0,_e.useState)(1),[Re,Te]=(0,_e.useState)(null),[Ce,Q]=(0,_e.useState)({}),[Ye,Ie]=(0,_e.useState)(null),[be,j]=(0,_e.useState)(null),[ge,re]=(0,_e.useState)(null),[Ue,Le]=(0,_e.useState)({}),[Ae,Ee]=(0,_e.useState)(null),[Ne,ye]=(0,_e.useState)(null),[we,Qe]=(0,_e.useState)(""),Me=(0,_e.useCallback)(async()=>{try{let[T,ne,Oe]=await Promise.all([ia("/messages"),ia("/rooms"),fetch("/memory-evolve/api/aliases").then(Be=>Be.ok?Be.json():{aliases:{}})]);l(T.messages),g(ne.rooms),m(new Map(ne.rooms.map(Be=>[Be.id,Be]))),k(Oe.aliases??{}),Ee(null)}catch(T){Ee(Xt(T))}},[]);(0,_e.useEffect)(()=>{Me();let T=setInterval(()=>{Me()},3e4);return()=>clearInterval(T)},[Me]);let Ke=(0,_e.useMemo)(()=>(i??[]).filter(ne=>!ne.recipients.some(Oe=>Qs(Oe))),[i]),R=(0,_e.useMemo)(()=>{let T=Ke;if(A==="unread"&&(T=T.filter(ne=>ne.readBy.length===0)),A==="read"&&(T=T.filter(ne=>ne.readBy.length>0)),M.trim()!==""){let ne=M.trim().toLowerCase();T=T.filter(Oe=>Oe.subject.toLowerCase().includes(ne)||Oe.sender.toLowerCase().includes(ne)||Oe.content.toLowerCase().includes(ne))}return T},[Ke,A,M]),H=Math.max(1,Math.ceil(R.length/Ut)),De=R.slice((S-1)*Ut,S*Ut),Pe=(0,_e.useMemo)(()=>be===null||i===null?[]:i.filter(T=>T.recipients.includes(`room:${be}`)||T.recipients.includes(be)),[be,i]),We=(0,_e.useMemo)(()=>{let T=Pe;if(y==="unread"&&(T=T.filter(ne=>ne.readBy.length===0)),y==="read"&&(T=T.filter(ne=>ne.readBy.length>0)),w.trim()!==""){let ne=w.trim().toLowerCase();T=T.filter(Oe=>Oe.subject.toLowerCase().includes(ne)||Oe.sender.toLowerCase().includes(ne)||Oe.content.toLowerCase().includes(ne))}return T},[Pe,y,w]),E=Math.max(1,Math.ceil(We.length/Ut)),Z=We.slice((X-1)*Ut,X*Ut),ve=(0,_e.useMemo)(()=>{let T=c??[],ne=u.trim().toLowerCase(),Oe=L>0?Date.now()-L*864e5:0;return T.filter(Be=>v==="all"||Be.status===v).filter(Be=>ne===""||Be.name.toLowerCase().includes(ne)).filter(Be=>Oe===0||Be.createdAt>=Oe)},[c,u,v,L]),Ve=Math.max(1,Math.ceil(ve.length/Ut)),z=ve.slice((q-1)*Ut,q*Ut),Se=async T=>{if(window.confirm(e("broadcast.message.deleteConfirm",{subject:T.subject})))try{await ia(`/messages/${encodeURIComponent(T.id)}`,{method:"DELETE"}),ye({kind:"ok",text:e("broadcast.message.deleted")}),Me()}catch(ne){ye({kind:"error",text:Xt(ne)})}},lt=async(T,ne,Oe)=>{if(ne===T.id){Oe(null);return}if(Oe(T.id),Ce[T.id]===void 0)try{let Be=await ia(`/messages/${encodeURIComponent(T.id)}/content`);Q(at=>({...at,[T.id]:Be.content}))}catch(Be){ye({kind:"error",text:Xt(Be)})}},Je=async T=>{if(be===T.id){j(null),re(null),D("unread"),O(""),C(1);return}j(T.id),re(null),D("unread"),O(""),C(1);try{let ne=await ia(`/rooms/${encodeURIComponent(T.id)}/presence`);Le(Oe=>({...Oe,[T.id]:ne.presence}))}catch(ne){ye({kind:"error",text:Xt(ne)})}},ut=async(T,ne)=>{if(window.confirm(e("broadcast.room.kickConfirm",{member:ne})))try{await ia(`/rooms/${encodeURIComponent(T.id)}/kick`,{method:"POST",body:JSON.stringify({member:ne})}),ye({kind:"ok",text:e("broadcast.room.kick")}),Me(),j(null)}catch(Oe){ye({kind:"error",text:Xt(Oe)})}},fe=async T=>{if(window.confirm(e("broadcast.room.dissolveConfirm",{name:T.name})))try{let ne=await ia(`/rooms/${encodeURIComponent(T.id)}/dissolve`,{method:"POST"});if(ne.ok!==!0){ye({kind:"error",text:ne.message??(Za()?"Operation failed":"\u64CD\u4F5C\u5931\u8D25")});return}ye({kind:"ok",text:e("broadcast.room.dissolved")}),Me()}catch(ne){ye({kind:"error",text:Xt(ne)})}},nt=(T,ne)=>{navigator.clipboard.writeText(T).then(()=>{Qe(ne),window.setTimeout(()=>Qe(""),1500)}).catch(()=>{})},wt=(T,ne,Oe)=>{let Be=T.sender==="system"?Za()?"System":"\u7CFB\u7EDF":So(T.sender,h),at=T.recipients.map(Ct=>al(Ct,b,h)).join(", "),St=T.readBy.length===0,Ze=ne===T.id;return(0,W.jsxs)("div",{className:"bb-card",children:[(0,W.jsxs)("div",{className:"bb-row",children:[(0,W.jsx)("span",{className:"bb-strong",children:T.subject||(Za()?"(no subject)":"\uFF08\u65E0\u4E3B\u9898\uFF09")}),(0,W.jsx)("span",{className:`bb-badge${St?" bb-badge-unread":" bb-badge-read"}`,children:e(St?"broadcast.msg.unread":"broadcast.msg.read")}),T.hasBody&&(0,W.jsx)("span",{className:"bb-badge bb-badge-long",children:e("broadcast.messages.long")}),(0,W.jsx)("span",{className:"bb-grow"}),(0,W.jsx)("span",{className:"bb-muted bb-small",children:Qa(T.createdAt)}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>{lt(T,ne,Oe)},children:e(Ze?"broadcast.message.collapse":"broadcast.message.expand")}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{Se(T)},children:e("broadcast.message.delete")})]}),(0,W.jsxs)("div",{className:"bb-muted bb-small",title:T.sender==="system"?void 0:T.sender,children:[e("broadcast.messages.sender"),"\uFF1A",Be," \xB7 ",e("broadcast.messages.to"),"\uFF1A",at]}),Ze&&(0,W.jsx)("pre",{className:"bb-content",children:Ce[T.id]??T.content}),Array.isArray(T.attachments)&&T.attachments.length>0&&(0,W.jsx)("div",{className:"bb-attachments",children:T.attachments.map((Ct,Y)=>{let ae=`${T.id}:${Y}`,le=`${Zs}/messages/${encodeURIComponent(T.id)}/attachment/${Y}`,p=Ye===ae;return(0,W.jsxs)("div",{className:"bb-att-item",children:[(0,W.jsx)("button",{type:"button",className:"bb-att-thumb",title:`${Ct.name}\uFF08${(Ct.size/1024).toFixed(0)} KB\uFF09`,onClick:()=>Ie(p?null:ae),children:(0,W.jsx)("img",{src:le,alt:Ct.name,loading:"lazy",className:"bb-att-thumb-img"})}),p&&(0,W.jsxs)("div",{className:"bb-att-preview",onClick:()=>Ie(null),children:[(0,W.jsx)("img",{src:le,alt:Ct.name,className:"bb-att-preview-img"}),(0,W.jsx)("span",{className:"bb-att-preview-name",children:Ct.name})]})]},ae)})})]},T.id)},I=(T,ne,Oe,Be)=>(0,W.jsxs)("div",{className:"bb-toolbar",children:[["unread","all","read"].map(at=>(0,W.jsx)("button",{type:"button",className:`bb-chip${T===at?" bb-chip-active":""}`,onClick:()=>ne(at),children:e(`broadcast.filter.${at}`)},at)),(0,W.jsx)("input",{className:"bb-search",placeholder:e("broadcast.searchPh"),value:Oe,onChange:at=>Be(at.target.value)})]}),me=(T,ne,Oe)=>ne<=1?null:(0,W.jsxs)("div",{className:"bb-pager",children:[(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",disabled:T<=1,onClick:()=>Oe(T-1),children:e("broadcast.pagePrev")}),(0,W.jsx)("span",{className:"bb-muted bb-small",children:e("broadcast.pageInfo",{page:T,total:ne})}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",disabled:T>=ne,onClick:()=>Oe(T+1),children:e("broadcast.pageNext")})]}),it=h[a],$=()=>(0,W.jsx)(kt,{sections:[{icon:"\u{1F4E8}",title:e("broadcast.guide.intro.title"),body:e("broadcast.guide.intro.body")},{icon:"\u2709\uFE0F",title:e("broadcast.guide.send.title"),body:e("broadcast.guide.send.body"),items:[e("broadcast.guide.send.item1"),e("broadcast.guide.send.item2"),e("broadcast.guide.send.item3")]},{icon:"\u{1F4E5}",title:e("broadcast.guide.inbox.title"),body:e("broadcast.guide.inbox.body"),items:[e("broadcast.guide.inbox.item1"),e("broadcast.guide.inbox.item2"),e("broadcast.guide.inbox.item3")]},{icon:"\u{1F465}",title:e("broadcast.guide.room.title"),body:e("broadcast.guide.room.body"),items:[e("broadcast.guide.room.item1"),e("broadcast.guide.room.item2"),e("broadcast.guide.room.item3")]},{icon:"\u{1F3F7}\uFE0F",title:e("broadcast.guide.alias.title"),body:e("broadcast.guide.alias.body"),items:[e("broadcast.guide.alias.item1"),e("broadcast.guide.alias.item2")]},{icon:"\u{1F6E1}\uFE0F",title:e("broadcast.guide.wscoord.title"),body:e("broadcast.guide.wscoord.body"),items:[e("broadcast.guide.wscoord.item1"),e("broadcast.guide.wscoord.item2"),e("broadcast.guide.wscoord.item3")]},{icon:"\u2699\uFE0F",title:e("broadcast.guide.switch.title"),body:e("broadcast.guide.switch.body")}]});return(0,W.jsxs)("div",{className:"bb-pane",children:[(0,W.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,W.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("guide"),children:e("broadcast.tab.guide")}),(0,W.jsx)("button",{type:"button",role:"tab","aria-selected":o==="messages",className:o==="messages"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("messages"),children:e("broadcast.tab.messages")}),(0,W.jsx)("button",{type:"button",role:"tab","aria-selected":o==="rooms",className:o==="rooms"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("rooms"),children:e("broadcast.tab.rooms")}),(0,W.jsx)("button",{type:"button",role:"tab","aria-selected":o==="settings",className:o==="settings"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("settings"),children:e("broadcast.tab.settings")})]}),(0,W.jsxs)("div",{className:"bb-session-line",title:a,children:[(0,W.jsxs)("span",{className:"bb-session-label",children:[e("broadcast.mySessionId"),"\uFF1A"]}),(0,W.jsx)("code",{className:"bb-mono",children:it!==void 0?`${it}\uFF08${No(a)}\uFF09`:No(a)}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>nt(a,"id"),children:e(we==="id"?"broadcast.copied":"broadcast.copyId")}),it!==void 0&&(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>nt(it,"alias"),children:e(we==="alias"?"broadcast.copied":"broadcast.copyAlias")})]}),Ne!==null&&(0,W.jsx)("div",{className:`bb-notice bb-notice-${Ne.kind}`,children:Ne.text}),Ae!==null&&(0,W.jsx)("div",{className:"bb-error",children:Ae}),o==="guide"&&$(),o==="settings"&&(0,W.jsx)(ol,{t:e}),o==="messages"&&(0,W.jsxs)("div",{className:"bb-list",children:[i===null&&(0,W.jsx)("div",{className:"bb-empty",children:e("broadcast.loading")}),i!==null&&(0,W.jsxs)(W.Fragment,{children:[I(A,T=>{F(T),V(1)},M,T=>{B(T),V(1)}),Ke.length===0&&(0,W.jsxs)("div",{className:"bb-empty",children:[e("broadcast.messages.empty"),i.some(T=>T.recipients.some(ne=>Qs(ne)))&&(0,W.jsx)("div",{className:"bb-hint",children:e("broadcast.messages.roomInRooms")})]}),Ke.length>0&&R.length===0&&(0,W.jsx)("div",{className:"bb-empty",children:e("broadcast.messages.empty")}),De.map(T=>wt(T,Re,Te)),me(S,H,V)]})]}),o==="rooms"&&(0,W.jsxs)("div",{className:"bb-list",children:[c===null&&(0,W.jsx)("div",{className:"bb-empty",children:e("broadcast.loading")}),c!==null&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{className:"bb-toolbar",children:[["all","active","dissolved"].map(T=>(0,W.jsx)("button",{type:"button",className:`bb-chip${v===T?" bb-chip-active":""}`,onClick:()=>{_(T),ce(1)},children:e(`broadcast.roomStatus.${T}`)},T)),[0,7,30].map(T=>(0,W.jsx)("button",{type:"button",className:`bb-chip${L===T?" bb-chip-active":""}`,onClick:()=>{G(T),ce(1)},children:e(`broadcast.roomDays.${T}`)},T)),(0,W.jsx)("input",{className:"bb-search",placeholder:e("broadcast.roomSearchPh"),value:u,onChange:T=>{r(T.target.value),ce(1)}})]}),ve.length===0&&(0,W.jsx)("div",{className:"bb-empty",children:e("broadcast.rooms.empty")}),z.map(T=>{let ne=T.status==="dissolved",Oe=T.onlineCount>0&&!ne,Be=e(ne?"broadcast.room.status.dissolved":Oe?"broadcast.room.status.active":"broadcast.room.status.idle"),at=Ue[T.id]??T.members.map(Ze=>({sessionId:Ze,status:"unknown",online:!1,lastActiveAt:null})),St=be===T.id;return(0,W.jsxs)("div",{className:`bb-card${St?" bb-card-open":""}${ne?" bb-card-dissolved":""}`,children:[(0,W.jsxs)("div",{className:"bb-row",children:[(0,W.jsx)("span",{className:`bb-dot${Oe?" bb-dot-on":ne?" bb-dot-off":" bb-dot-idle"}`}),(0,W.jsx)("span",{className:"bb-strong",children:T.name}),(0,W.jsx)("span",{className:`bb-badge${ne?" bb-badge-dissolved":Oe?" bb-badge-online":""}`,children:Be}),(0,W.jsx)("span",{className:"bb-badge",children:e("broadcast.room.online",{online:T.onlineCount,total:T.members.length})}),(0,W.jsx)("span",{className:"bb-grow"}),(0,W.jsxs)("span",{className:"bb-muted bb-small",children:[e("broadcast.room.lastActive"),"\uFF1A",Qa(T.lastActiveAt)]}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-detail",onClick:()=>{Je(T)},children:e(St?"broadcast.message.collapse":"broadcast.room.detail")}),!ne&&(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{fe(T)},children:e("broadcast.room.dissolve")})]}),(0,W.jsxs)("div",{className:"bb-meta",children:[(0,W.jsx)("code",{className:"bb-mono bb-small",children:T.id}),(0,W.jsxs)("span",{className:"bb-muted bb-small",children:["\xB7 ",e("broadcast.room.created")," ",Qa(T.createdAt)," \xB7 ",T.members.length," ",e("broadcast.room.members")]}),(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>nt(T.id,`room-${T.id}`),children:e("broadcast.room.copyId")})]}),St&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{className:"bb-members",children:[(0,W.jsx)("div",{className:"bb-section-title",children:e("broadcast.room.members")}),at.map(Ze=>(0,W.jsxs)("div",{className:"bb-row bb-member",title:Ze.sessionId,children:[(0,W.jsx)("span",{className:`bb-dot${Ze.online?" bb-dot-on":" bb-dot-idle"}`}),(0,W.jsx)("code",{className:"bb-mono",children:So(Ze.sessionId,h)}),(0,W.jsxs)("span",{className:"bb-muted bb-small",children:[Ze.online?"running":Ze.status==="idle"?"idle":e("broadcast.room.presence.unknown"),Ze.lastActiveAt!==null?` \xB7 ${Qa(Ze.lastActiveAt)}`:""]}),(0,W.jsx)("span",{className:"bb-grow"}),!ne&&(0,W.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{ut(T,Ze.sessionId)},children:e("broadcast.room.kick")})]},Ze.sessionId))]}),(0,W.jsxs)("div",{className:"bb-room-msgs",children:[(0,W.jsxs)("div",{className:"bb-section-title",children:[e("broadcast.room.messages"),(0,W.jsx)("span",{className:"bb-count",children:Pe.length})]}),I(y,Ze=>{D(Ze),C(1)},w,Ze=>{O(Ze),C(1)}),Pe.length===0&&(0,W.jsx)("div",{className:"bb-empty bb-empty-sm",children:e("broadcast.room.messages.empty")}),Pe.length>0&&We.length===0&&(0,W.jsx)("div",{className:"bb-empty bb-empty-sm",children:e("broadcast.room.messages.empty")}),Z.map(Ze=>wt(Ze,ge,re)),me(X,E,C)]})]})]},T.id)}),me(q,Ve,ce)]})]})]})}var ze=require("react");var P=require("react/jsx-runtime"),sl={zh:{guide:"\u6307\u5357",library:"\u63D0\u793A\u8BCD\u5E93",guideIntro:"\u63D0\u793A\u8BCD\u6CE8\u5165 = \u300C\u6307\u4EE4\u8303\u5F0F\u8D44\u4EA7\u5E93 + \u4E00\u952E\u6CE8\u5165\u300D\uFF1A\u628A\u5E38\u7528\u5DE5\u4F5C\u8303\u5F0F\uFF08\u4EE3\u7801\u5BA1\u67E5 / \u8C03\u8BD5 / PRD / \u6D4B\u8BD5\u7B49\uFF09\u56FA\u5316\u6210\u63D0\u793A\u8BCD\uFF0C\u9009\u4E2D\u5373\u6CE8\u5165\u2014\u2014\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF0C\u7B49\u4E8E\u7ED9 AI \u4E0B\u53D1\u64CD\u4F5C\u624B\u518C\u3002",guideLibTitle:"\u63D0\u793A\u8BCD\u5E93\uFF1A\u4F60\u7684\u8303\u5F0F\u8D44\u4EA7",guideLibBody:"\u53EF\u590D\u7528\u7684\u6307\u4EE4\u8303\u5F0F\u8D44\u4EA7\uFF0C\u6765\u6E90\u4EE5\u7528\u6237\u81EA\u5199\u4E3A\u4E3B\uFF1A",guideLibItem1:"\u65B0\u5EFA / \u7F16\u8F91 / \u5220\u9664\uFF1A\u540D\u79F0 + \u7B80\u4ECB + \u5206\u7C7B + \u6807\u7B7E + \u6B63\u6587\uFF08Markdown\uFF09\uFF0C\u65B0\u5EFA\u65F6\u5206\u7C7B\u7559\u7A7A\u81EA\u52A8\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF1B",guideLibItem2:"\u5206\u7C7B\u7BA1\u7406\uFF1A\u5185\u7F6E\u5206\u7C7B + \u81EA\u5B9A\u4E49\u6DFB\u52A0 / \u91CD\u547D\u540D / \u5220\u9664\uFF08\u5220\u9664\u65F6\u8BE5\u5206\u7C7B\u4E0B\u63D0\u793A\u8BCD\u81EA\u52A8\u79FB\u5230\u672A\u5206\u7C7B\uFF09\uFF1B",guideLibItem3:"\u641C\u7D22\uFF08\u540D\u79F0 / \u5206\u7C7B / \u6807\u7B7E / \u5185\u5BB9\uFF09+ \u590D\u5236\u5230\u526A\u8D34\u677F + \u4F7F\u7528\u7EDF\u8BA1\uFF1B",guideLibItem4:"\u5185\u7F6E 13 \u6761\u6765\u81EA GitHub \u771F\u5B9E\u63D0\u793A\u8BCD\u8D44\u4EA7\u7684\u51B7\u542F\u52A8\u793A\u4F8B\uFF08SpecRoute / Claude-Code-Promts-Skills\uFF09\uFF0C\u5E76\u9644\u8303\u5F0F\u5E93\u94FE\u63A5\u4F9B\u81EA\u53D6\uFF1B",guideLibItem5:"\u542F\u7528\u72B6\u6001\uFF1A\u7981\u7528\u540E AI \u7684\u63D0\u793A\u8BCD\u5DE5\u5177\uFF08de_prompts\uFF09\u770B\u4E0D\u5230\u3001\u4E5F\u4E0D\u80FD\u6CE8\u5165\u2014\u2014GUI \u4ECD\u53EF\u7F16\u8F91\uFF0C\u968F\u65F6\u53EF\u91CD\u65B0\u542F\u7528\uFF1BAI \u53EF\u67E5\u8BE2\u5217\u8868\uFF08\u6309 ID \u53D6\u8BE6\u60C5\uFF09\u5E76\u9009\u62E9\u5408\u9002\u63D0\u793A\u8BCD\u6CE8\u5165\u5F53\u524D\u4F1A\u8BDD\uFF0C\u6216\u7528\u4F5C\u5B50\u4F1A\u8BDD / \u5B50\u4EE3\u7406 / CLI \u4EFB\u52A1\u63D0\u793A\u8BCD\u3002",guideInjectTitle:"\u6CE8\u5165\u673A\u5236\uFF1A\u6B21\u6570 \xD7 \u95F4\u9694",guideInjectBody:"\u9009\u4E2D\u63D0\u793A\u8BCD\u914D\u7F6E\u300C\u6B21\u6570 \xD7 \u95F4\u9694\u300D\u5373\u6CE8\u5165\uFF08\u6B21\u6570 / \u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\uFF09\uFF1A",guideInjectItem1:"\u6B21\u6570\uFF1A\u4E00\u6B21\u6027\uFF081 \u8F6E\uFF09/ \u6709\u9650 N \u6B21 / \u65E0\u9650\uFF080 = \u6301\u7EED\u6CE8\u5165\u76F4\u5230\u624B\u52A8\u505C\u6B62\uFF09\uFF1B",guideInjectItem2:"\u95F4\u9694\uFF1A\u6BCF\u56DE\u5408\uFF081\uFF09/ \u6BCF M \u56DE\u5408\u51FA\u73B0 1 \u6B21\uFF08\u5982\u300C\u6BCF 3 \u56DE\u5408\u63D0\u9192\u4E00\u6B21\u300D\uFF09\uFF1B",guideInjectItem3:"\u5199\u540E\u5373\u65F6\u6CE8\u5165\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF1A\u5185\u5BB9\u5199\u5165\u6CE8\u5165\u8F68\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u751F\u6210\u65F6\u81EA\u52A8\u770B\u5230\uFF1B",guideInjectItem4:"\u6B63\u6587\u652F\u6301 {{date}} / {{time}} \u53D8\u91CF\uFF0C\u6CE8\u5165\u65F6\u81EA\u52A8\u5C55\u5F00\uFF08\u9002\u5408\u5E26\u65E5\u671F\u7684\u65E5\u62A5\u6A21\u677F\uFF09\uFF1B",guideInjectItem5:"\u4E34\u65F6\u6CE8\u5165\uFF1A\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u6CE8\u5165\u2014\u2014\u8BE6\u60C5\u680F\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u70B9\u300C\u6CE8\u5165\u300D\uFF0C\u81EA\u52A8\u5B58\u5165\u63D0\u793A\u8BCD\u5E93\uFF08\u5206\u7C7B\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09\uFF0C\u4E00\u6B21\u64CD\u4F5C\u540C\u65F6\u5165\u5E93\u5E76\u751F\u6548\u3002",guideTrackTitle:"\u6CE8\u5165\u72B6\u6001\uFF1A\u968F\u65F6\u53EF\u89C1\u3001\u53EF\u505C",guideTrackBody:"\u6BCF\u4E2A\u63D0\u793A\u8BCD\u6709\u660E\u786E\u72B6\u6001\uFF08\u672A\u6CE8\u5165 / \u6CE8\u5165\u4E2D\xB7\u5269 N \u6B21 / \u6301\u7EED\u6CE8\u5165\u4E2D\uFF09\uFF0C\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u300C\u6CE8\u5165\u4E2D\u300D\u6D6E\u5C42\u5B9E\u65F6\u5C55\u793A\uFF1B\u4F1A\u8BDD\u9875 Tab \u680F\u6709\u6D3B\u8DC3\u6CE8\u5165\u65F6\u663E\u793A\u7EA2\u70B9 \u{1F534}\u3002",guideSwitchTitle:"\u5F00\u5173",guideSwitchBody:"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u300D\u5F00\u5173\uFF0C\u5237\u65B0\u540E\u672C Tab \u51FA\u73B0\u3002",search:"\u641C\u7D22\u540D\u79F0\u3001\u5206\u7C7B\u3001\u6807\u7B7E\u6216\u5185\u5BB9\u2026",new:"\u65B0\u5EFA\u63D0\u793A\u8BCD",all:"\u5168\u90E8",uncategorized:"\u672A\u5206\u7C7B",inject:"\u6CE8\u5165",injectRound:"\u6CE8\u5165 {n} \u6B21",injectInfinite:"\u65E0\u9650\u6B21\uFF08\u6301\u7EED\u6CE8\u5165\uFF09",injectCadence:"\u6BCF {n} \u56DE\u5408\u4E00\u6B21",everyTurn:"\u6BCF\u56DE\u5408",injectHint:"\u5199\u5165\u6CE8\u5165\u8F68\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\uFF1B\u6B21\u6570\u6309\u5BF9\u8BDD\u56DE\u5408\u6D88\u8017\uFF08\u53EF\u95F4\u9694\u6CE8\u5165\uFF09\uFF0C\u65E0\u9650\u6B21\u5219\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",injecting:"\u6CE8\u5165\u4E2D",injectingBadge:"\u6CE8\u5165\u4E2D\xB7\u5269{n}\u6B21",injectingBadgeInfinite:"\u6CE8\u5165\u4E2D\xB7\u6301\u7EED",injectingIdle:"\u672A\u6CE8\u5165",noInjection:"\u8FD8\u6CA1\u6709\u6CE8\u5165\u4E2D\u7684\u63D0\u793A\u8BCD",removeInjection:"\u505C\u6B62\u6CE8\u5165",stoppedInjection:"\u5DF2\u505C\u6B62\u6CE8\u5165",copy:"\u590D\u5236",copied:"\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",save:"\u4FDD\u5B58",saving:"\u4FDD\u5B58\u4E2D\u2026",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",deleteConfirm:"\u786E\u5B9A\u5220\u9664\u300C{name}\u300D\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u5176\u6D3B\u8DC3\u6CE8\u5165\u4F1A\u4E00\u5E76\u79FB\u9664\u3002",sources:"GitHub \u8303\u5F0F\u5E93\u6765\u6E90",sourcesHint:"\u4EE5\u4E0B\u4ED3\u5E93\u6709\u5927\u91CF\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD/\u89C4\u8303\uFF08\u7528\u6237\u81EA\u53D6\uFF0C\u4E0D\u505A\u81EA\u52A8\u5BFC\u5165\uFF09\uFF1A",empty:"\u8FD8\u6CA1\u6709\u63D0\u793A\u8BCD\u3002\u70B9\u300C\u65B0\u5EFA\u63D0\u793A\u8BCD\u300D\u5F00\u59CB\uFF0C\u6216\u4ECE\u53F3\u4FA7\u6765\u6E90\u94FE\u63A5\u83B7\u53D6\u7075\u611F\u3002",noMatch:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",formNew:"\u65B0\u5EFA\u63D0\u793A\u8BCD",formEdit:"\u7F16\u8F91\u63D0\u793A\u8BCD",name:"\u540D\u79F0",namePh:"\u5982\uFF1A\u4EE3\u7801\u5BA1\u67E5\uFF08Code Review\uFF09",description:"\u7B80\u4ECB",descriptionPh:"\u4E00\u53E5\u8BDD\u8BF4\u660E\u8FD9\u4E2A\u63D0\u793A\u8BCD\u7684\u7528\u9014\uFF08AI \u9009\u62E9\u63D0\u793A\u8BCD\u65F6\u770B\u8FD9\u91CC\uFF09",enabled:"\u542F\u7528\u72B6\u6001",enabledOn:"\u5DF2\u542F\u7528",enabledOff:"\u5DF2\u7981\u7528",disabledHint:"\u7981\u7528\u540E\u4E0D\u51FA\u73B0\u5728 AI \u7684\u63D0\u793A\u8BCD\u5217\u8868\uFF0C\u4E5F\u4E0D\u80FD\u88AB AI \u6CE8\u5165\uFF1B\u53EF\u5728\u672C\u9875\u91CD\u65B0\u542F\u7528",category:"\u5206\u7C7B",categoryPh:"\u5982\uFF1A\u5F00\u53D1\u6D41\u7A0B\uFF08\u7559\u7A7A\u81EA\u52A8\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09",tags:"\u6807\u7B7E",tagsPh:"\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1Areview, \u8D28\u91CF",content:"\u5185\u5BB9",contentPh:`\u5728\u8FD9\u91CC\u7F16\u5199\u63D0\u793A\u8BCD\u6B63\u6587\u2026
\u652F\u6301 {{date}}\u3001{{time}} \u53D8\u91CF\uFF0C\u6CE8\u5165\u65F6\u81EA\u52A8\u5C55\u5F00\u3002`,usage:"\u5DF2\u6CE8\u5165 {n} \u6B21",lastUsed:"\u6700\u8FD1\u6CE8\u5165\uFF1A{time}",neverUsed:"\u4ECE\u672A\u6CE8\u5165\u8FC7",rounds:"\u6B21\u6570",cadence:"\u95F4\u9694",roundsHint:"0=\u65E0\u9650\uFF1B1=\u53EA\u6CE8\u5165\u4E00\u6B21",everyHint:"0=\u53EA\u6CE8\u5165\u4E00\u6B21\uFF1B1=\u6BCF\u56DE\u5408\uFF1BN=\u6BCF N \u56DE\u5408\u4E00\u6B21",onceOnly:"\u53EA\u6CE8\u5165\u4E00\u6B21",effectOnce:"\u4E00\u6B21\u6027\uFF1A\u4E0B\u4E00\u8F6E\u51FA\u73B0\u4E00\u6B21\u540E\u81EA\u52A8\u7ED3\u675F",effectInfinite:"\u65E0\u9650\u6B21\uFF1A\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",effectInfiniteCadence:"\u65E0\u9650\u6B21\uFF1A\u6BCF {n} \u56DE\u5408\u51FA\u73B0\u4E00\u6B21\uFF0C\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",effectFinite:"\u5171 {n} \u6B21\uFF1A\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",effectFiniteCadence:"\u5171 {n} \u6B21\uFF1A\u6BCF {m} \u56DE\u5408\u51FA\u73B0\u4E00\u6B21\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",roundsInvalid:"\u6B21\u6570\u5FC5\u987B\u662F \u22650 \u7684\u6574\u6570\uFF080 = \u65E0\u9650\u6B21\uFF09",everyInvalid:"\u95F4\u9694\u5FC5\u987B\u662F \u22650 \u7684\u6574\u6570\uFF080 = \u53EA\u6CE8\u5165\u4E00\u6B21\uFF09",injectOnceBtn:"\u6CE8\u5165\u4E00\u6B21",injectOnceBtnHint:"\u53EA\u6CE8\u5165\u4E00\u6B21\uFF1A\u4E0B\u4E00\u8F6E\u51FA\u73B0\u540E\u81EA\u52A8\u7ED3\u675F",injectInfiniteBtn:"\u6301\u7EED\u6CE8\u5165",injectInfiniteBtnHint:"\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u76F4\u5230\u624B\u52A8\u505C\u6B62",customBtn:"\u81EA\u5B9A\u4E49",customBtnHint:"\u81EA\u7531\u8BBE\u7F6E\u6B21\u6570\u4E0E\u95F4\u9694",injectNowBtn:"\u26A1 \u7ACB\u5373\u6CE8\u5165",injectNowBtnHint:"\u7ACB\u523B\u751F\u6548\u4E00\u6B21\uFF08\u5F53\u524D\u56DE\u5408/\u9A6C\u4E0A\u5524\u9192\uFF09\uFF0C\u53EA\u6CE8\u5165\u4E00\u6B21\uFF0C\u4E0D\u53D7\u6B21\u6570\u4E0E\u95F4\u9694\u5F71\u54CD",injectedNow:"\u5DF2\u7ACB\u5373\u6CE8\u5165\u300C{name}\u300D\uFF1A\u5F53\u524D\u56DE\u5408\u751F\u6548\uFF0C\u4EC5\u6B64\u4E00\u6B21\uFF08\u4E0D\u53D7\u6B21\u6570/\u95F4\u9694\u5F71\u54CD\uFF09",injectedNowFallback:"\u5DF2\u7ACB\u5373\u6CE8\u5165\u300C{name}\u300D\uFF08\u63D2\u8BDD\u672A\u9001\u8FBE\uFF0C\u5C06\u5728\u4E0B\u4E00\u8F6E\u751F\u6548\uFF09",collapseCustom:"\u6536\u8D77",quickTitle:"\u4E34\u65F6\u6CE8\u5165",quickDesc:"\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u6CE8\u5165\uFF1A\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u70B9\u300C\u6CE8\u5165\u4E00\u6B21\u300D\uFF0C\u4F1A\u81EA\u52A8\u5B58\u5165\u63D0\u793A\u8BCD\u5E93\uFF08\u5206\u7C7B\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09\uFF0C\u4E00\u6B21\u64CD\u4F5C\u540C\u65F6\u5165\u5E93\u5E76\u751F\u6548\u3002",quickNamePh:"\u540D\u79F0\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u53D6\u5185\u5BB9\u9996\u884C\uFF09",quickCategoryPh:"\u5206\u7C7B\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09",contentRequired:"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",error:"{message}",loadFailed:"\u52A0\u8F7D\u5931\u8D25\uFF1A{message}",injected:"\u5DF2\u6CE8\u5165\u300C{name}\u300D\uFF1A{rounds}{cadence}\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u751F\u6548{ending}",injectedOnceEnding:"\uFF0C\u4E4B\u540E\u81EA\u52A8\u7ED3\u675F",injectedFiniteEnding:"\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",injectedInfiniteEnding:"\uFF0C\u76F4\u5230\u624B\u52A8\u505C\u6B62",injectInfiniteShort:"\u6301\u7EED\u6CE8\u5165",everyTurnParen:"\uFF08\u6BCF\u56DE\u5408\u51FA\u73B0\uFF09",injectCadenceParen:"\uFF08\u6BCF {n} \u56DE\u5408\u51FA\u73B0\uFF09",removed:"\u5DF2\u79FB\u9664\u6CE8\u5165",reload:"\u5237\u65B0",newCategory:"\u65B0\u5206\u7C7B",newCategoryPh:"\u8F93\u5165\u5206\u7C7B\u540D\uFF0C\u56DE\u8F66\u786E\u8BA4",deleteCategory:"\u5220\u9664\u5206\u7C7B",renameCategory:"\u91CD\u547D\u540D\u5206\u7C7B",renamePh:"\u8F93\u5165\u65B0\u5206\u7C7B\u540D\uFF0C\u56DE\u8F66\u786E\u8BA4",categoryRemoved:"\u5DF2\u5220\u9664\u5206\u7C7B\u300C{name}\u300D{moved}",categoryDeleted:"\u5DF2\u5220\u9664\u5206\u7C7B\u300C{name}\u300D",categoryMoved:"\uFF0C{count} \u6761\u63D0\u793A\u8BCD\u5DF2\u79FB\u5230\u672A\u5206\u7C7B",categoryExists:"\u5206\u7C7B\u300C{name}\u300D\u5DF2\u5B58\u5728\uFF0C\u5DF2\u4E3A\u4F60\u9009\u4E2D",categoryRenamed:"\u5DF2\u91CD\u547D\u540D\u300C{from}\u300D\u2192\u300C{to}\u300D{renamed}",categoryRenamedSuffix:"\uFF0C{count} \u6761\u63D0\u793A\u8BCD\u5DF2\u540C\u6B65"},en:{guide:"Guide",library:"Prompt library",guideIntro:'Prompt injection = an "instruction-pattern asset library + one-click injection": turn recurring working paradigms (code review / debugging / PRD / testing\u2026) into prompts, then inject one with a click \u2014 the model sees it next turn without interrupting the reply, like handing the AI an operating manual.',guideLibTitle:"Prompt library: your pattern assets",guideLibBody:"Reusable instruction patterns, mostly user-written:",guideLibItem1:"Create / edit / delete: name + description + category + tags + body (Markdown); a new prompt with an empty category goes to Temp automatically;",guideLibItem2:"Categories: built-in ones plus custom add / rename / delete (prompts in a deleted category move to Uncategorized);",guideLibItem3:"Search (name / category / tags / content) + copy to clipboard + usage stats;",guideLibItem4:"13 cold-start examples from real GitHub prompt assets (SpecRoute / Claude-Code-Promts-Skills) plus links to public pattern libraries;",guideLibItem5:"Enabled state: disabled prompts are hidden from the AI prompt tool (de_prompts) and cannot be injected by AI \u2014 still editable here, re-enable anytime; the AI can list prompts (fetch details by ID) and inject the right one into the current session, or use it as a sub-session / subagent / CLI task prompt.",guideInjectTitle:"Injection mechanics: rounds \xD7 cadence",guideInjectBody:'Pick a prompt, set "rounds \xD7 cadence" and inject (both numbers freely editable):',guideInjectItem1:"Rounds: one-shot (1) / finite N / infinite (0 = keep injecting until stopped);",guideInjectItem2:'Cadence: every turn (1) / once every M turns (e.g. "remind every 3 turns");',guideInjectItem3:"Injected without interrupting: content goes to the injection track and the model sees it next turn;",guideInjectItem4:"The body supports {{date}} / {{time}} variables, expanded at injection time (handy for dated templates);",guideInjectItem5:"Ad-hoc injection: inject without creating a prompt first \u2014 type content in the detail bar and click inject; it is auto-saved to the library (empty category \u2192 Temp) and takes effect in one step.",guideTrackTitle:"Injection status: visible and stoppable",guideTrackBody:'Every prompt has a clear status (idle / injecting\xB7N left / injecting forever) and can be stopped anytime; the "injecting" overlay shows it live; the session tab bar shows a red dot \u{1F534} while any injection is active.',guideSwitchTitle:"Switch",guideSwitchBody:'The prompt manager is off by default: enable "Prompt manager" under Config in the Memory Evolve Settings tab, then refresh to reveal this tab.',search:"Search name, category, tags or content\u2026",new:"New prompt",all:"All",uncategorized:"Uncategorized",inject:"Inject",injectRound:"Inject {n} times",injectInfinite:"Unlimited (until stopped)",injectCadence:"every {n} turns",everyTurn:"every turn",injectHint:"Writes to the injection track \u2014 visible to the model next turn; countdown consumes per conversation turn (interval injection supported); unlimited runs until stopped manually",injecting:"Injecting",injectingBadge:"injecting\xB7{n} left",injectingBadgeInfinite:"injecting\xB7ongoing",injectingIdle:"not injected",noInjection:"Nothing is being injected right now",removeInjection:"Stop",stoppedInjection:"Injection stopped",copy:"Copy",copied:"Copied to clipboard",save:"Save",saving:"Saving\u2026",cancel:"Cancel",delete:"Delete",deleteConfirm:'Delete "{name}"? This cannot be undone and removes its active injections too.',sources:"GitHub prompt sources",sourcesHint:"These repos host high-quality prompts/specs (browse yourself \u2014 no auto import):",empty:'No prompts yet. Click "New prompt" to start, or grab ideas from the source links.',noMatch:"No matching prompts",formNew:"New prompt",formEdit:"Edit prompt",name:"Name",namePh:"e.g. Code Review",description:"Description",descriptionPh:"One line about what this prompt does (AI reads this when picking a prompt)",enabled:"Enabled",enabledOn:"Enabled",enabledOff:"Disabled",disabledHint:"Disabled prompts are hidden from AI lists and cannot be injected by AI; re-enable here anytime",category:"Category",categoryPh:"e.g. workflow (empty = Temp category)",tags:"Tags",tagsPh:"Comma-separated, e.g. review, quality",content:"Content",contentPh:`Write the prompt body here\u2026
{{date}} and {{time}} variables expand on inject.`,usage:"Injected {n} times",lastUsed:"Last injected: {time}",neverUsed:"Never injected",rounds:"Count",cadence:"Cadence",roundsHint:"0=unlimited; 1=once only",everyHint:"0=once only; 1=every turn; N=every N turns",onceOnly:"once only",effectOnce:"Once: appears next turn, then auto-ends",effectInfinite:"Unlimited: every turn, until stopped",effectInfiniteCadence:"Unlimited: once every {n} turns, until stopped",effectFinite:"{n} times: every turn, auto-ends when spent",effectFiniteCadence:"{n} times: once every {m} turns, auto-ends when spent",roundsInvalid:"Count must be an integer \u2265 0 (0 = unlimited)",everyInvalid:"Cadence must be an integer \u2265 0 (0 = once only)",injectOnceBtn:"Inject once",injectOnceBtnHint:"Once only: appears next turn, then auto-ends",injectInfiniteBtn:"Keep injecting",injectInfiniteBtnHint:"Every turn, until stopped",customBtn:"Custom",customBtnHint:"Free-form count and cadence",injectNowBtn:"\u26A1 Inject now",injectNowBtnHint:"Takes effect immediately (this turn / wakes the session), once only \u2014 ignores count and cadence",injectedNow:'Injected "{name}" now: effective this turn, once only (ignores count/cadence)',injectedNowFallback:'Injected "{name}" now (steer not delivered \u2014 will take effect next turn)',collapseCustom:"Collapse",quickTitle:"Quick inject",quickDesc:'Inject without saving a prompt first: type content and hit "Inject once" \u2014 it is auto-saved to the library (empty category goes to Temp) in one step.',quickNamePh:"Name (optional; defaults to first content line)",quickCategoryPh:"Category (optional; empty = Temp)",contentRequired:"Content is required",error:"{message}",loadFailed:"Load failed: {message}",injected:'Injected "{name}": {rounds}{cadence} \u2014 visible next turn{ending}',injectedOnceEnding:", then auto-ends",injectedFiniteEnding:", auto-ends when spent",injectedInfiniteEnding:", until stopped",injectInfiniteShort:"Keep injecting",everyTurnParen:" (every turn)",injectCadenceParen:" (every {n} turns)",removed:"Injection removed",reload:"Reload",newCategory:"New category",newCategoryPh:"Type a category name, Enter to confirm",deleteCategory:"Delete category",renameCategory:"Rename category",renamePh:"Type a new name, Enter to confirm",categoryRemoved:'Category "{name}" deleted{moved}',categoryDeleted:'Category "{name}" deleted',categoryMoved:", {count} prompts moved to Uncategorized",categoryExists:'Category "{name}" already exists \u2014 selected',categoryRenamed:'Renamed "{from}" \u2192 "{to}"{renamed}',categoryRenamedSuffix:", {count} prompts updated"}};function nl(t,e){return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?e:t}function Nt(t){return(t instanceof Error?t.message:String(t))||"unknown error"}function il(t){return new Date(t).toLocaleString([],{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}async function ft(t,e){let a=await fetch(t,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.error??`HTTP ${a.status}`);return o}function tn(t,e,a){let o=t.trim()===""?0:Number(t),s=e.trim()===""?1:Number(e);if(!Number.isInteger(o)||o<0)throw new Error(a("roundsInvalid"));if(!Number.isInteger(s)||s<0)throw new Error(a("everyInvalid"));return{rounds:o,every:s}}function an(t){let e=t.roundsText.trim()===""?0:Number(t.roundsText),a=t.everyText.trim()===""?1:Number(t.everyText);if(!Number.isInteger(e)||e<0||!Number.isInteger(a)||a<0)return null;let o=t.say,s;return a===0?s=o("effectOnce"):e===0?s=a===1?o("effectInfinite"):o("effectInfiniteCadence").replace("{n}",String(a)):e===1?s=o("effectOnce"):s=a===1?o("effectFinite").replace("{n}",String(e)):o("effectFiniteCadence").replace("{n}",String(e)).replace("{m}",String(a)),(0,P.jsx)("div",{className:"pm-effect-hint",children:s})}function eo(t){return(0,P.jsxs)("label",{className:"pm-field pm-num-field",children:[(0,P.jsxs)("span",{className:"pm-field-label",children:[t.label,(0,P.jsx)("span",{className:"pm-field-hint",children:t.hint})]}),(0,P.jsx)("input",{type:"number",className:"pm-input pm-num-input",min:t.min,step:1,value:t.value,onChange:e=>t.onChange(e.target.value)})]})}function on(t){let e=typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"en":"zh",a=sl[e],o=p=>a[p],[s,i]=(0,ze.useState)([]),[l,c]=(0,ze.useState)([]),[g,b]=(0,ze.useState)([]),[m,h]=(0,ze.useState)([]),[k,A]=(0,ze.useState)("main"),[F,M]=(0,ze.useState)(""),[B,S]=(0,ze.useState)("\u5168\u90E8"),[V,y]=(0,ze.useState)(null),[D,w]=(0,ze.useState)(!1),[O,X]=(0,ze.useState)(!1),[C,u]=(0,ze.useState)(!1),[r,v]=(0,ze.useState)(null),[_,L]=(0,ze.useState)(null),[G,q]=(0,ze.useState)("0"),[ce,Re]=(0,ze.useState)("1"),[Te,Ce]=(0,ze.useState)(!1),[Q,Ye]=(0,ze.useState)(!1),[Ie,be]=(0,ze.useState)(!1),[j,ge]=(0,ze.useState)(""),[re,Ue]=(0,ze.useState)(null),[Le,Ae]=(0,ze.useState)(""),[Ee,Ne]=(0,ze.useState)(""),[ye,we]=(0,ze.useState)(""),[Qe,Me]=(0,ze.useState)(""),[Ke,R]=(0,ze.useState)(""),[H,De]=(0,ze.useState)(""),[Pe,We]=(0,ze.useState)(!0),E=(0,ze.useRef)(null);(0,ze.useEffect)(()=>{let p=U=>{E.current===null||E.current.contains(U.target)||(X(!1),u(!1))};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);let Z=(0,ze.useCallback)(p=>{v(Nt(p))},[]),ve=(0,ze.useCallback)(p=>{L(p),window.setTimeout(()=>L(null),4e3)},[]),Ve=(0,ze.useCallback)(async()=>{try{let[p,U,ke]=await Promise.all([ft("/memory-evolve/api/prompts"),ft("/memory-evolve/api/prompts/injections"),ft("/memory-evolve/api/prompts/categories")]);i(p.prompts),c(U.injections),h(ke.categories)}catch(p){Z(o("loadFailed").replace("{message}",Nt(p)))}},[Z]);(0,ze.useEffect)(()=>{Ve(),ft("/memory-evolve/api/prompts/sources").then(p=>b(p.sources)).catch(()=>{})},[Ve]);let z=(0,ze.useMemo)(()=>{let p=s.map(U=>U.category).filter(U=>U&&U!=="\u672A\u5206\u7C7B");return[...new Set([...m,...p])].sort((U,ke)=>U.localeCompare(ke,"zh"))},[m,s]),Se=(0,ze.useMemo)(()=>s.filter(p=>p.category==="\u672A\u5206\u7C7B").length,[s]),lt=(0,ze.useMemo)(()=>{let p=F.trim().toLowerCase();return s.filter(U=>B!=="\u5168\u90E8"&&U.category!==B?!1:p?U.name.toLowerCase().includes(p)||U.category.toLowerCase().includes(p)||U.tags.some(ke=>ke.toLowerCase().includes(p))||U.content.toLowerCase().includes(p):!0)},[s,F,B]),Je=s.find(p=>p.id===V)??null,ut=p=>{let U=s.find(ke=>ke.id===p);U&&(y(p),w(!1),Ne(U.name),we(U.description??""),Me(U.category==="\u672A\u5206\u7C7B"?"":U.category),R(U.tags.join(", ")),De(U.content),We(U.enabled!==!1))},fe=()=>{y(null),w(!0),Ne(""),we(""),Me(""),R(""),De(""),We(!0),v(null)},nt=async()=>{if(Q)return;let p={name:Ee,description:ye,category:Qe,tags:Ke.split(/[,，]/).map(U=>U.trim()).filter(Boolean),content:H,enabled:Pe};Ye(!0);try{if(D){let U=await ft("/memory-evolve/api/prompts",{method:"POST",body:JSON.stringify(p)});await Ve(),w(!1),y(U.prompt.id)}else V!==null&&(await ft(`/memory-evolve/api/prompts/${encodeURIComponent(V)}`,{method:"PUT",body:JSON.stringify(p)}),await Ve())}catch(U){Z(Nt(U))}finally{Ye(!1)}},wt=async()=>{if(V===null)return;let p=o("deleteConfirm").replace("{name}",Je?.name??"");if(window.confirm(p))try{await ft(`/memory-evolve/api/prompts/${encodeURIComponent(V)}`,{method:"DELETE"}),y(null),w(!1),await Ve()}catch(U){Z(Nt(U))}},I=async p=>{let U=p.roundsLeft===null?o("injectInfiniteShort"):p.roundsLeft===1?o("onceOnly"):o("injectRound").replace("{n}",String(p.roundsLeft)),ke=p.every===0||p.roundsLeft===1?"":(p.every??1)===1?o("everyTurnParen"):o("injectCadenceParen").replace("{n}",String(p.every)),$e=p.every===0||p.roundsLeft===1?o("injectedOnceEnding"):p.roundsLeft===null?o("injectedInfiniteEnding"):o("injectedFiniteEnding");ve(o("injected").replace("{name}",p.title).replace("{rounds}",U).replace("{cadence}",ke).replace("{ending}",$e)),await Ve(),X(!0),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))},me=async()=>{if(V===null)return;let p;try{p=tn(G,ce,o)}catch(U){Z(Nt(U));return}try{let U=await ft(`/memory-evolve/api/prompts/${encodeURIComponent(V)}/inject`,{method:"POST",body:JSON.stringify(p)});await I(U.injection)}catch(U){Z(Nt(U))}},it=async(p,U)=>{if(V!==null)try{let ke=await ft(`/memory-evolve/api/prompts/${encodeURIComponent(V)}/inject`,{method:"POST",body:JSON.stringify({rounds:p,every:U})});await I(ke.injection)}catch(ke){Z(Nt(ke))}},$=async p=>{try{let U=await ft(`/memory-evolve/api/prompts/${encodeURIComponent(p)}/inject`,{method:"POST",body:JSON.stringify({immediate:!0,sessionId:t.sessionId})}),ke=U.injection.title;ve(U.steered?o("injectedNow").replace("{name}",ke):o("injectedNowFallback").replace("{name}",ke)),await Ve(),X(!0),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch(U){Z(Nt(U))}},T=async(p,U=!1)=>{if(Q)return;let ke=H.trim();if(!ke){Z(o("contentRequired"));return}let $e;if(p!==void 0)$e=p;else try{$e=tn(G,ce,o)}catch(xt){Z(Nt(xt));return}Ye(!0);try{let xt=ke.split(`
`).map(Ft=>Ft.trim()).find(Ft=>Ft.length>0)??"",Pt=Ee.trim()||(xt.length>20?`${xt.slice(0,20)}\u2026`:xt)||"\u672A\u547D\u540D\u63D0\u793A\u8BCD",At=await ft("/memory-evolve/api/prompts",{method:"POST",body:JSON.stringify({name:Pt,description:ye,category:Qe.trim(),tags:Ke.split(/[,，]/).map(Ft=>Ft.trim()).filter(Boolean),content:ke,enabled:Pe})}),Ca=U?await ft(`/memory-evolve/api/prompts/${encodeURIComponent(At.prompt.id)}/inject`,{method:"POST",body:JSON.stringify({immediate:!0,sessionId:t.sessionId})}):await ft(`/memory-evolve/api/prompts/${encodeURIComponent(At.prompt.id)}/inject`,{method:"POST",body:JSON.stringify($e)});if(U){let Ft=Ca.injection.title;ve(Ca.steered?o("injectedNow").replace("{name}",Ft):o("injectedNowFallback").replace("{name}",Ft))}else await I(Ca.injection);ut(At.prompt.id)}catch(xt){Z(Nt(xt))}finally{Ye(!1)}},ne=async p=>{try{await ft(`/memory-evolve/api/prompts/injections/${encodeURIComponent(p)}`,{method:"DELETE"}),ve(o("stoppedInjection")),await Ve(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch(U){Z(Nt(U))}},Oe=p=>l.find(U=>U.sourcePromptId===p),Be=p=>p.every===0?o("onceOnly"):(p.every??1)===1?o("everyTurn"):o("injectCadence").replace("{n}",String(p.every)),at=p=>p.roundsLeft===null?o("injectInfinite"):o("injectRound").replace("{n}",String(p.roundsLeft)),St=async()=>{let p=j.trim();if(p)try{let U=await ft("/memory-evolve/api/prompts/categories",{method:"POST",body:JSON.stringify({name:p})});h(U.categories),S(p),ge(""),be(!1),U.alreadyExists&&ve(o("categoryExists").replace("{name}",p))}catch(U){Z(Nt(U))}},Ze=async p=>{let U=Le.trim();if(!U||U===p){Ue(null),Ae("");return}try{let ke=await ft(`/memory-evolve/api/prompts/categories/${encodeURIComponent(p)}`,{method:"PUT",body:JSON.stringify({name:U})});h(ke.categories),B===p&&S(U),Ue(null),Ae(""),await Ve();let $e=ke.renamed>0?o("categoryRenamedSuffix").replace("{count}",String(ke.renamed)):"";ve(`${o("categoryRenamed").replace("{from}",p).replace("{to}",U).replace("{renamed}","")}${$e}`)}catch(ke){Z(Nt(ke))}},Ct=async p=>{let U=s.filter($e=>$e.category===p).length,ke=U>0?o("categoryMoved").replace("{count}",String(U)):"";if(window.confirm(`${o("deleteCategory")}\u300C${p}\u300D\uFF1F${ke}`))try{let $e=await ft(`/memory-evolve/api/prompts/categories/${encodeURIComponent(p)}`,{method:"DELETE"}),xt=await ft("/memory-evolve/api/prompts/categories");h(xt.categories),B===p&&S("\u5168\u90E8"),await Ve();let Pt=$e.moved>0?o("categoryMoved").replace("{count}",String($e.moved)):"";ve(`${o("categoryDeleted").replace("{name}",p)}${Pt}`)}catch($e){Z(Nt($e))}},Y=async()=>{let p=Je?.content??"";try{await navigator.clipboard.writeText(p),ve(o("copied"))}catch(U){Z(Nt(U))}},ae=p=>{let U=(p.description??"").trim();if(U)return U.length>60?`${U.slice(0,60)}\u2026`:U;let ke=p.content.split(`
`).map($e=>$e.trim()).find($e=>$e.length>0)??"";return ke.length>60?`${ke.slice(0,60)}\u2026`:ke},le=Je!==null&&(Ee!==Je.name||ye!==(Je.description??"")||(Qe||"\u672A\u5206\u7C7B")!==Je.category||Ke!==Je.tags.join(", ")||H!==Je.content||Pe!==(Je.enabled!==!1));return(0,P.jsxs)("div",{className:"pm-root",children:[(0,P.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,P.jsx)("button",{type:"button",role:"tab","aria-selected":k==="guide",className:k==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>A("guide"),children:o("guide")}),(0,P.jsx)("button",{type:"button",role:"tab","aria-selected":k==="main",className:k==="main"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>A("main"),children:o("library")})]}),k==="guide"?(0,P.jsx)(kt,{sections:[{icon:"\u{1F4CC}",title:o("guideIntro"),body:""},{icon:"\u{1F4DA}",title:o("guideLibTitle"),body:o("guideLibBody"),items:[o("guideLibItem1"),o("guideLibItem2"),o("guideLibItem3"),o("guideLibItem4"),o("guideLibItem5")]},{icon:"\u{1F489}",title:o("guideInjectTitle"),body:o("guideInjectBody"),items:[o("guideInjectItem1"),o("guideInjectItem2"),o("guideInjectItem3"),o("guideInjectItem4")]},{icon:"\u{1F534}",title:o("guideTrackTitle"),body:o("guideTrackBody")},{icon:"\u2699\uFE0F",title:o("guideSwitchTitle"),body:o("guideSwitchBody")}]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("div",{className:"pm-toolbar",children:[(0,P.jsx)("input",{className:"pm-search",placeholder:o("search"),value:F,onChange:p=>M(p.target.value)}),(0,P.jsx)("select",{className:"pm-select",value:B,onChange:p=>S(p.target.value),title:o("category"),children:m.map(p=>(0,P.jsx)("option",{value:p,children:p},p))}),(0,P.jsxs)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{X(!O),u(!1)},title:o("injectHint"),children:[o("injecting"),l.length>0?` (${l.length})`:""]}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{u(!C),X(!1)},children:o("sources")}),(0,P.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:fe,children:o("new")})]}),(r!==null||_!==null)&&(0,P.jsxs)("div",{className:`pm-banner ${r!==null?"pm-banner-error":""}`,children:[r!==null?r:_,r!==null&&(0,P.jsx)("button",{type:"button",className:"pm-banner-close",onClick:()=>v(null),children:"\xD7"})]}),O&&(0,P.jsxs)("div",{className:"pm-overlay",ref:E,children:[(0,P.jsx)("div",{className:"pm-overlay-title",children:o("injecting")}),l.length===0&&(0,P.jsx)("div",{className:"pm-overlay-empty",children:o("noInjection")}),l.map(p=>(0,P.jsxs)("div",{className:"pm-overlay-item",children:[(0,P.jsxs)("div",{className:"pm-overlay-item-main",children:[(0,P.jsxs)("div",{className:"pm-overlay-item-title",children:["\u300C",p.title,"\u300D"]}),(0,P.jsxs)("div",{className:"pm-overlay-item-sub",children:[at(p)," \xB7 ",Be(p)]})]}),(0,P.jsx)("button",{type:"button",className:"pm-danger-btn pm-overlay-remove",onClick:()=>{ne(p.id)},children:o("removeInjection")})]},p.id))]}),C&&(0,P.jsxs)("div",{className:"pm-overlay pm-overlay-wide",ref:E,children:[(0,P.jsx)("div",{className:"pm-overlay-title",children:o("sources")}),(0,P.jsx)("div",{className:"pm-overlay-sub",children:o("sourcesHint")}),g.map(p=>(0,P.jsxs)("div",{className:"pm-source-item",children:[(0,P.jsx)("a",{className:"pm-source-link",href:p.url,target:"_blank",rel:"noreferrer",children:p.name}),(0,P.jsx)("div",{className:"pm-source-desc",children:p.desc})]},p.url))]}),(0,P.jsxs)("div",{className:"pm-body",children:[(0,P.jsxs)("div",{className:"pm-pane-cats",children:[(0,P.jsxs)("button",{type:"button",className:`pm-cat ${B==="\u5168\u90E8"?"pm-cat-active":""}`,onClick:()=>S("\u5168\u90E8"),children:[(0,P.jsx)("span",{className:"pm-cat-name",children:o("all")}),(0,P.jsx)("span",{className:"pm-cat-count",children:s.length})]}),z.map(p=>{let U=s.filter(ke=>ke.category===p).length;return re===p?(0,P.jsxs)("div",{className:"pm-cat-row",children:[(0,P.jsx)("input",{className:"pm-cat-add-input",autoFocus:!0,placeholder:o("renamePh"),value:Le,onChange:ke=>Ae(ke.target.value),onKeyDown:ke=>{ke.key==="Enter"&&Ze(p),ke.key==="Escape"&&(Ue(null),Ae(""))}}),(0,P.jsx)("button",{type:"button",className:"pm-cat-add-ok",onClick:()=>{Ze(p)},children:"\u2713"})]},p):(0,P.jsxs)("div",{className:"pm-cat-row",children:[(0,P.jsxs)("button",{type:"button",className:`pm-cat ${B===p?"pm-cat-active":""}`,onClick:()=>S(p),children:[(0,P.jsx)("span",{className:"pm-cat-name",children:p}),(0,P.jsx)("span",{className:"pm-cat-count",children:U})]}),(0,P.jsx)("button",{type:"button",className:"pm-cat-del",title:o("renameCategory"),onClick:()=>{Ue(p),Ae(p)},children:"\u270E"}),(0,P.jsx)("button",{type:"button",className:"pm-cat-del",title:o("deleteCategory"),onClick:()=>{Ct(p)},children:"\xD7"})]},p)}),Se>0&&(0,P.jsxs)("button",{type:"button",className:`pm-cat ${B==="\u672A\u5206\u7C7B"?"pm-cat-active":""}`,onClick:()=>S("\u672A\u5206\u7C7B"),children:[(0,P.jsx)("span",{className:"pm-cat-name",children:o("uncategorized")}),(0,P.jsx)("span",{className:"pm-cat-count",children:Se})]}),Ie?(0,P.jsxs)("div",{className:"pm-cat-add",children:[(0,P.jsx)("input",{className:"pm-cat-add-input",autoFocus:!0,placeholder:o("newCategoryPh"),value:j,onChange:p=>ge(p.target.value),onKeyDown:p=>{p.key==="Enter"&&St(),p.key==="Escape"&&(be(!1),ge(""))}}),(0,P.jsx)("button",{type:"button",className:"pm-cat-add-ok",onClick:()=>{St()},children:"\u2713"})]}):(0,P.jsxs)("button",{type:"button",className:"pm-cat-add-btn",onClick:()=>be(!0),children:["\uFF0B ",o("newCategory")]})]}),(0,P.jsxs)("div",{className:"pm-pane-list",children:[s.length===0&&(0,P.jsx)("div",{className:"pm-pane-empty",children:o("empty")}),s.length>0&&lt.length===0&&(0,P.jsx)("div",{className:"pm-pane-empty",children:o("noMatch")}),lt.map(p=>{let U=Oe(p.id);return(0,P.jsxs)("button",{type:"button",className:`pm-item ${V===p.id&&!D?"pm-item-active":""} ${p.enabled===!1?"pm-item-disabled":""}`,onClick:()=>ut(p.id),children:[(0,P.jsxs)("div",{className:"pm-item-row1",children:[(0,P.jsx)("span",{className:"pm-item-name",children:p.name}),(0,P.jsx)("span",{className:"pm-item-badge",children:p.category}),p.enabled===!1&&(0,P.jsx)("span",{className:"pm-item-badge pm-item-badge-off",title:o("disabledHint"),children:o("enabledOff")}),U!==void 0&&(0,P.jsx)("span",{className:"pm-item-badge pm-item-badge-active",title:o("injectHint"),children:U.roundsLeft===null?o("injectingBadgeInfinite"):o("injectingBadge").replace("{n}",String(U.roundsLeft))})]}),(0,P.jsx)("div",{className:"pm-item-summary",children:ae(p)}),(0,P.jsxs)("div",{className:"pm-item-row3",children:[(0,P.jsx)("span",{className:"pm-item-usage",children:o("usage").replace("{n}",String(p.usageCount??0))}),(0,P.jsx)("span",{className:"pm-item-used",children:p.lastUsedAt!==null?o("lastUsed").replace("{time}",il(p.lastUsedAt)):o("neverUsed")})]})]},p.id)})]}),(0,P.jsxs)("div",{className:"pm-pane-detail",children:[Je===null&&!D&&(0,P.jsxs)("div",{className:"pm-form",children:[(0,P.jsx)("div",{className:"pm-form-title",children:o("quickTitle")}),(0,P.jsx)("div",{className:"pm-quick-sub",children:o("quickDesc")}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("name")}),(0,P.jsx)("input",{className:"pm-input",placeholder:o("quickNamePh"),value:Ee,onChange:p=>Ne(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("description")}),(0,P.jsx)("input",{className:"pm-input",placeholder:o("descriptionPh"),value:ye,onChange:p=>we(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field pm-field-grow",children:[(0,P.jsxs)("span",{className:"pm-field-label",children:[o("content")," *"]}),(0,P.jsx)("textarea",{className:"pm-textarea",placeholder:o("contentPh"),value:H,onChange:p=>De(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("category")}),(0,P.jsx)("input",{className:"pm-input",list:"pm-category-list",placeholder:o("quickCategoryPh"),value:Qe,onChange:p=>Me(p.target.value)}),(0,P.jsx)("datalist",{id:"pm-category-list",children:z.map(p=>(0,P.jsx)("option",{value:p},p))})]}),(0,P.jsxs)("div",{className:"pm-actions",children:[(0,P.jsx)("button",{type:"button",className:"pm-primary-btn",title:o("injectOnceBtnHint"),onClick:()=>{T({rounds:1,every:0})},disabled:Q,children:o(Q?"saving":"injectOnceBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("injectInfiniteBtnHint"),onClick:()=>{T({rounds:0,every:1})},disabled:Q,children:o("injectInfiniteBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("injectNowBtnHint"),onClick:()=>{T(void 0,!0)},disabled:Q,children:o("injectNowBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("customBtnHint"),onClick:()=>Ce(!Te),children:o("customBtn")})]}),Te&&(0,P.jsxs)("div",{className:"pm-custom-zone",children:[(0,P.jsxs)("div",{className:"pm-num-row",children:[(0,P.jsx)(eo,{label:o("rounds"),hint:o("roundsHint"),value:G,min:0,onChange:q}),(0,P.jsx)(eo,{label:o("cadence"),hint:o("everyHint"),value:ce,min:0,onChange:Re})]}),(0,P.jsx)(an,{roundsText:G,everyText:ce,say:o}),(0,P.jsxs)("div",{className:"pm-actions",children:[(0,P.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:()=>{T()},disabled:Q,children:o(Q?"saving":"inject")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>Ce(!1),children:o("collapseCustom")})]})]})]}),(Je!==null||D)&&(0,P.jsxs)("div",{className:"pm-form",children:[(0,P.jsx)("div",{className:"pm-form-title",children:o(D?"formNew":"formEdit")}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsxs)("span",{className:"pm-field-label",children:[o("name")," *"]}),(0,P.jsx)("input",{className:"pm-input",placeholder:o("namePh"),value:Ee,onChange:p=>Ne(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("description")}),(0,P.jsx)("input",{className:"pm-input",placeholder:o("descriptionPh"),value:ye,onChange:p=>we(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("category")}),(0,P.jsx)("input",{className:"pm-input",list:"pm-category-list",placeholder:o("categoryPh"),value:Qe,onChange:p=>Me(p.target.value)}),(0,P.jsx)("datalist",{id:"pm-category-list",children:z.map(p=>(0,P.jsx)("option",{value:p},p))})]}),(0,P.jsxs)("label",{className:"pm-field",children:[(0,P.jsx)("span",{className:"pm-field-label",children:o("tags")}),(0,P.jsx)("input",{className:"pm-input",placeholder:o("tagsPh"),value:Ke,onChange:p=>R(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field pm-field-grow",children:[(0,P.jsxs)("span",{className:"pm-field-label",children:[o("content")," *"]}),(0,P.jsx)("textarea",{className:"pm-textarea",placeholder:o("contentPh"),value:H,onChange:p=>De(p.target.value)})]}),(0,P.jsxs)("label",{className:"pm-field pm-enable-row",children:[(0,P.jsxs)("span",{className:"pm-field-label",children:[o("enabled"),(0,P.jsx)("span",{className:"pm-field-hint",children:o("disabledHint")})]}),(0,P.jsx)("button",{type:"button",role:"switch","aria-checked":Pe,className:`pm-toggle ${Pe?"pm-toggle-on":""}`,onClick:()=>We(!Pe),children:o(Pe?"enabledOn":"enabledOff")})]}),(0,P.jsxs)("div",{className:"pm-actions",children:[!D&&(()=>{let p=Je!==null?Oe(Je.id):void 0;return p!==void 0?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("span",{className:"pm-inject-status",children:[p.roundsLeft===null?o("injectingBadgeInfinite"):o("injectingBadge").replace("{n}",String(p.roundsLeft))," ","\xB7 ",Be(p)]}),(0,P.jsx)("button",{type:"button",className:"pm-danger-btn",onClick:()=>{ne(p.id)},children:o("removeInjection")})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("button",{type:"button",className:"pm-primary-btn",title:o("injectOnceBtnHint"),onClick:()=>{it(1,0)},children:o("injectOnceBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("injectInfiniteBtnHint"),onClick:()=>{it(0,1)},children:o("injectInfiniteBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("injectNowBtnHint"),onClick:()=>{$(Je.id)},children:o("injectNowBtn")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",title:o("customBtnHint"),onClick:()=>Ce(!Te),children:o("customBtn")}),Te&&(0,P.jsxs)("div",{className:"pm-custom-zone pm-custom-zone-inline",children:[(0,P.jsxs)("div",{className:"pm-inject-group",children:[(0,P.jsx)(eo,{label:o("rounds"),hint:o("roundsHint"),value:G,min:0,onChange:q}),(0,P.jsx)(eo,{label:o("cadence"),hint:o("everyHint"),value:ce,min:0,onChange:Re}),(0,P.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:()=>{me()},children:o("inject")}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>Ce(!1),children:o("collapseCustom")})]}),(0,P.jsx)(an,{roundsText:G,everyText:ce,say:o})]}),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{Y()},children:o("copy")})]})})(),(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{nt()},disabled:Q,children:o(Q?"saving":"save")}),!D&&(0,P.jsx)("button",{type:"button",className:"pm-danger-btn",onClick:()=>{wt()},children:o("delete")}),D&&(0,P.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{w(!1),y(null)},children:o("cancel")})]}),!D&&Je!==null&&le&&(0,P.jsx)("div",{className:"pm-dirty-hint",children:nl("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539","Unsaved changes")})]})]})]})]})]})}var It=require("react");var st=require("react/jsx-runtime"),sn=null;async function Co(t,e){let a=await fetch(`/memory-evolve/api/bookmarks${t}`,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.error??`HTTP ${a.status}`);return o}function rl(t){let e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}function ll(){let t=document.querySelectorAll('[role="tab"]');for(let a of t){let o=(a.textContent??"").trim();if(o==="\u5BF9\u8BDD"||o==="Chat"||o.startsWith("\u5BF9\u8BDD")||o.startsWith("Chat"))return a.click(),!0}let e=t[0];return e!==void 0?(e.click(),!0):!1}function dl(){let a=(document.querySelector("[data-chat-flow]")?.parentElement??document).querySelectorAll("button");for(let o of a){if(o.disabled)continue;let s=(o.textContent??"").trim();if(s.includes("\u66F4\u65E9")||s.includes("older")||s.includes("Older")||s.includes("Load earlier")||s.includes("\u52A0\u8F7D\u5386\u53F2"))return o.click(),!0}return!1}function nn(t,e=2500){let a=document.querySelector(`[data-chat-anchor-key="${t}"]`);return a!==null?Promise.resolve(a):new Promise(o=>{let s=Date.now(),i=window.setInterval(()=>{let l=document.querySelector(`[data-chat-anchor-key="${t}"]`);if(l!==null){window.clearInterval(i),o(l);return}Date.now()-s>=e&&(window.clearInterval(i),o(null))},80)})}function cl(t){return t.anchorKey!==null&&t.anchorKey!==""?t.anchorKey:`node:${t.seq}`}async function ml(t){let e=cl(t);if(!ll())return"no-chat";await new Promise(s=>window.setTimeout(s,120));let o=await nn(e,800);if(o!==null)return o.scrollIntoView({behavior:"smooth",block:"center"}),rn(o),"ok";for(let s=0;s<12&&dl();s+=1)if(o=await nn(e,3e3),o!==null)return o.scrollIntoView({behavior:"smooth",block:"center"}),rn(o),"ok";return"not-found"}function rn(t){let e=t.style.outline;t.style.outline="2px solid var(--dsw-static-yellow-9, #f5a623)",t.style.outlineOffset="4px",window.setTimeout(()=>{t.style.outline=e,t.style.outlineOffset=""},1600)}function ln(t){let{t:e,sessionId:a}=t,[o,s]=(0,It.useState)(sn??"list"),[i,l]=(0,It.useState)(null),[c,g]=(0,It.useState)(""),[b,m]=(0,It.useState)(null),[h,k]=(0,It.useState)(!1);(0,It.useEffect)(()=>{sn=o},[o]);let A=(0,It.useCallback)(()=>{if(!a){l([]);return}Co(`?sessionId=${encodeURIComponent(a)}`).then(w=>l(w.bookmarks??[])).catch(w=>{m({kind:"error",text:e("bookmark.error",{message:w.message})}),l([])})},[a,e]);(0,It.useEffect)(()=>{A()},[A]),(0,It.useEffect)(()=>{let w=()=>A();return window.addEventListener("dsh-memory-evolve:bookmarks-change",w),()=>window.removeEventListener("dsh-memory-evolve:bookmarks-change",w)},[A]);let F=w=>{k(!0),m({kind:"info",text:e("bookmark.jumping")}),ml(w).then(O=>{m(O==="ok"?{kind:"ok",text:e("bookmark.jump.ok",{label:w.label})}:O==="no-chat"?{kind:"error",text:e("bookmark.jump.noChat")}:{kind:"error",text:e("bookmark.jump.notFound",{label:w.label})})}).finally(()=>k(!1))},M=w=>{let O=window.prompt(e("bookmark.prompt.rename"),w.label);if(O===null)return;let X=O.trim();X!==""&&(k(!0),Co("",{method:"PATCH",body:JSON.stringify({sessionId:a,id:w.id,label:X})}).then(()=>{A(),m({kind:"ok",text:e("bookmark.renamed")})}).catch(C=>{m({kind:"error",text:e("bookmark.error",{message:C.message})})}).finally(()=>k(!1)))},B=w=>{window.confirm(e("bookmark.confirm.delete",{label:w.label}))&&(k(!0),Co("",{method:"DELETE",body:JSON.stringify({sessionId:a,id:w.id})}).then(()=>{A(),m({kind:"ok",text:e("bookmark.deleted")})}).catch(O=>{m({kind:"error",text:e("bookmark.error",{message:O.message})})}).finally(()=>k(!1)))},S=w=>{window.confirm(e("bookmark.fork.confirm",{n:String(w.turn??w.seq)}))&&(k(!0),m({kind:"info",text:e("bookmark.fork.working")}),fetch("/memory-evolve/api/bookmarks/fork",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({sessionId:w.sessionId,seq:w.seq,anchorKey:w.anchorKey??void 0})}).then(O=>O.json().catch(()=>({}))).then(O=>{typeof O.sessionId=="string"?m({kind:"ok",text:e("bookmark.fork.ok",{id:O.sessionId})}):m({kind:"error",text:e("bookmark.error",{message:O.error??"HTTP error"})})}).catch(O=>{m({kind:"error",text:e("bookmark.error",{message:O.message})})}).finally(()=>k(!1)))},V=c.trim().toLowerCase(),y=i===null?null:V===""?i:i.filter(w=>w.label.toLowerCase().includes(V)||w.summary.toLowerCase().includes(V)),D=[{icon:"\u2B50",title:e("bookmark.guide.what.title"),body:e("bookmark.guide.what.body")},{icon:"\u{1F4CD}",title:e("bookmark.guide.star.title"),body:e("bookmark.guide.star.body")},{icon:"\u{1F4DC}",title:e("bookmark.guide.list.title"),body:e("bookmark.guide.list.body")},{icon:"\u2699\uFE0F",title:e("bookmark.guide.switch.title"),body:e("bookmark.guide.switch.body")}];return(0,st.jsxs)("div",{className:"bm-panel",children:[(0,st.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,st.jsx)("button",{type:"button",role:"tab","aria-selected":o==="list",className:o==="list"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("list"),children:e("bookmark.tab.list")}),(0,st.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>s("guide"),children:e("bookmark.tab.guide")})]}),o==="guide"&&(0,st.jsx)(kt,{sections:D}),o==="list"&&(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)("div",{className:"bm-toolbar",children:[(0,st.jsx)("h3",{children:e("bookmark.list.title")}),(0,st.jsx)("button",{type:"button",className:"bm-toolbar-btn",disabled:h,onClick:()=>A(),children:e("bookmark.refresh")})]}),(0,st.jsx)("p",{className:"bm-help",children:e("bookmark.list.help")}),(0,st.jsx)("input",{type:"search",className:"bm-search",placeholder:e("bookmark.search.placeholder"),value:c,onChange:w=>g(w.target.value),"aria-label":e("bookmark.search.placeholder")}),b!==null&&(0,st.jsx)("div",{className:`bm-notice bm-notice-${b.kind}`,children:b.text}),(0,st.jsxs)("div",{className:"bm-list",children:[y===null&&(0,st.jsx)("div",{className:"bm-empty",children:e("bookmark.loading")}),y!==null&&y.length===0&&(0,st.jsx)("div",{className:"bm-empty",children:e(V===""?"bookmark.empty":"bookmark.search.empty")}),y!==null&&y.map(w=>(0,st.jsxs)("div",{className:"bm-item",role:"article",onClick:()=>{h||F(w)},onKeyDown:O=>{!h&&(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),F(w))},tabIndex:0,title:e("bookmark.jump.hint"),children:[(0,st.jsxs)("div",{className:"bm-item-head",children:[(0,st.jsxs)("span",{className:"bm-item-label",children:["\u2605 ",w.label]}),(0,st.jsxs)("span",{className:"bm-item-meta",children:[w.turn!==null?e("bookmark.turn",{n:String(w.turn)}):`seq ${w.seq}`," \xB7 ",rl(w.createdAt)]})]}),w.summary!==""&&(0,st.jsx)("div",{className:"bm-item-summary",children:w.summary}),(0,st.jsxs)("div",{className:"bm-item-actions",onClick:O=>O.stopPropagation(),onKeyDown:O=>O.stopPropagation(),children:[(0,st.jsx)("button",{type:"button",disabled:h,onClick:()=>F(w),children:e("bookmark.action.jump")}),(0,st.jsx)("button",{type:"button",disabled:h,onClick:()=>S(w),children:e("bookmark.action.fork")}),(0,st.jsx)("button",{type:"button",disabled:h,onClick:()=>M(w),children:e("bookmark.action.rename")}),(0,st.jsx)("button",{type:"button",className:"bm-danger",disabled:h,onClick:()=>B(w),children:e("bookmark.action.delete")})]})]},w.id))]})]})]})}var yt=require("react"),J=require("react/jsx-runtime"),pl="/memory-evolve/memory-sync",to={memory:"memory-global",user:"user-global",daily:"daily-global",todo:"todo-global"},ul={memory:"syncTab.global.trackMemory",user:"syncTab.global.trackUser",daily:"syncTab.global.trackDaily",todo:"syncTab.global.trackTodo"};async function gt(t,e){let a=await fetch(`${pl}${t}`,{headers:{"content-type":"application/json"},...e});if(!a.ok){let o=await a.json().catch(()=>({}));throw new Error(o.error??`HTTP ${a.status}`)}return a.json()}function ka(t,e=60){if(t===null)return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"(none)":"\uFF08\u65E0\uFF09";let a=t.replace(/\s+/g," ");return a.length>e?`${a.slice(0,e)}\u2026`:a}function dn(t){let{t:e,sessionId:a}=t,[o,s]=(0,yt.useState)(null),[i,l]=(0,yt.useState)([]),[c,g]=(0,yt.useState)({}),[b,m]=(0,yt.useState)(!1),[h,k]=(0,yt.useState)(null),[A,F]=(0,yt.useState)(!1),[M,B]=(0,yt.useState)("project"),[S,V]=(0,yt.useState)(""),y=(0,yt.useRef)(!1),[D,w]=(0,yt.useState)(!1),O=(0,yt.useCallback)(async()=>{try{let[u,r]=await Promise.all([gt(`/status?sessionId=${encodeURIComponent(a)}`),gt(`/conflicts?sessionId=${encodeURIComponent(a)}`)]),v="status"in u&&u.status!==void 0?u.status:u;s(v),y.current||V(v.global?.url??""),w(v.global?.enabled===!0),l(r.conflicts??[]);let _={},L=v.global?.conflicts??{},G=Object.keys(L).filter(q=>(L[q]??0)>0);await Promise.all(G.map(async q=>{let ce=to[q];if(!ce)return;let Re=await gt(`/conflicts?sessionId=${encodeURIComponent(a)}&fileset=${encodeURIComponent(ce)}`);_[q]=Re.conflicts??[]})),g(_)}catch(u){k({kind:"error",text:e("syncTab.loadFailed",{message:u.message})})}finally{F(!0)}},[a,e]);(0,yt.useEffect)(()=>{y.current=!1,V("")},[a]),(0,yt.useEffect)(()=>{O()},[O]);let X=async u=>{if(!b){m(!0),k(null);try{let v=await u();k({kind:v.ok===!1?"error":"ok",text:v.text??"ok"})}catch(r){k({kind:"error",text:r.message})}finally{m(!1),O()}}},C=async u=>{if(u==="off")return await gt("/off",{method:"POST",body:JSON.stringify({sessionId:a})});if(u==="shared"){if(o?.global?.enabled!==!0||o?.global?.initialized!==!0)return B("remote"),{ok:!1,text:e("syncTab.project.mode.shared.needRemote")};let v=o.global.url;return await gt("/setup",{method:"POST",body:JSON.stringify({sessionId:a,url:v})})}return await gt("/setup",{method:"POST",body:JSON.stringify({sessionId:a})})};return(0,J.jsx)("div",{className:"mt-panel",children:A?(0,J.jsxs)(J.Fragment,{children:[h!==null&&(0,J.jsx)("div",{className:h.kind==="ok"?"me-notice-ok":"me-notice-error",children:h.text}),(0,J.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,J.jsx)("button",{type:"button",role:"tab","aria-selected":M==="project",className:M==="project"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>B("project"),children:e("syncTab.tab.project")}),(0,J.jsx)("button",{type:"button",role:"tab","aria-selected":M==="global",className:M==="global"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>B("global"),children:e("syncTab.tab.global")}),(0,J.jsx)("button",{type:"button",role:"tab","aria-selected":M==="remote",className:M==="remote"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>B("remote"),children:e("syncTab.tab.remote")})]}),M==="project"&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)("div",{className:"sv-section",children:[(0,J.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.project")}),(0,J.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,J.jsxs)("label",{className:`sv-radio-row${o?.projectEnabled!==!0?" sv-radio-active":""}`,children:[(0,J.jsx)("input",{type:"radio",name:"sync-project-mode",checked:o?.projectEnabled!==!0,onChange:()=>{X(()=>C("off"))}}),(0,J.jsxs)("span",{style:{flex:1},children:[(0,J.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.off")}),(0,J.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.off.desc")})]})]}),(0,J.jsxs)("label",{className:`sv-radio-row${o?.projectEnabled===!0&&o?.remoteKind==="main-repo"?" sv-radio-active":""}`,children:[(0,J.jsx)("input",{type:"radio",name:"sync-project-mode",checked:o?.projectEnabled===!0&&o?.remoteKind==="main-repo",onChange:()=>{X(()=>C("main"))}}),(0,J.jsxs)("span",{style:{flex:1},children:[(0,J.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.main")}),(0,J.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.main.desc")})]})]}),(0,J.jsxs)("label",{className:`sv-radio-row${o?.projectEnabled===!0&&o?.remoteKind==="shared-repo"?" sv-radio-active":""}`,children:[(0,J.jsx)("input",{type:"radio",name:"sync-project-mode",checked:o?.projectEnabled===!0&&o?.remoteKind==="shared-repo",onChange:()=>{X(()=>C("shared"))}}),(0,J.jsxs)("span",{style:{flex:1},children:[(0,J.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.shared")}),(0,J.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.shared.desc")})]})]})]}),o?.projectEnabled===!0&&o?.initialized===!0&&(0,J.jsxs)("div",{className:"sv-status",style:{marginTop:"10px"},children:[(0,J.jsxs)("p",{children:[(0,J.jsx)("strong",{children:e("syncTab.status.remoteKind",{kind:o?.remoteKind==="main-repo"?e("syncTab.status.remoteKindMain"):o?.remoteKind==="shared-repo"?e("syncTab.status.remoteKindShared"):e("syncTab.status.remoteKindNone")})}),(0,J.jsx)("br",{}),(0,J.jsx)("span",{className:"sv-status-url",children:o?.originUrl||e("syncTab.status.remoteKindNone")})]}),(0,J.jsxs)("p",{children:[e("syncTab.status.branch",{branch:o?.remoteBranch??"?"}),(0,J.jsx)("br",{}),e("syncTab.status.counts",{pending:String((o?.uncommitted??0)+(o?.ahead??0)),behind:String(o?.behind??0),conflicts:String(o?.conflicts??0)})]}),o?.migrateFrom!=null&&(0,J.jsx)("p",{children:e("syncTab.status.migrate",{dir:o.migrateFrom})})]}),o?.projectEnabled===!0&&o?.initialized===!0&&(0,J.jsxs)("div",{className:"sv-actions",children:[(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:b,onClick:()=>{X(()=>gt("/sync",{method:"POST",body:JSON.stringify({sessionId:a})}))},children:e("syncTab.actions.sync")}),(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:b,onClick:()=>{X(()=>gt("/sync",{method:"POST",body:JSON.stringify({sessionId:a,push:!0})}))},children:e("syncTab.actions.push")})]}),o?.enabled===!0&&o?.projectEnabled===!0&&o?.initialized!==!0&&(0,J.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.status.notInit")})]}),o?.enabled===!0&&i.length>0&&(0,J.jsxs)("div",{className:"sv-section",children:[(0,J.jsx)("div",{className:"sv-section-title",children:e("syncTab.conflicts.title",{count:i.length})}),i.map(u=>(0,J.jsxs)("div",{className:"bb-session-line",children:[(0,J.jsxs)("div",{children:[(0,J.jsxs)("strong",{children:["#",u.index," ",u.entryKey]}),"\uFF08",u.file,"\uFF09\xB7 ",u.reason,(0,J.jsx)("br",{}),(0,J.jsxs)("span",{className:"bb-meta",children:[e("syncTab.conflicts.base"),"\uFF1A",ka(u.base),(0,J.jsx)("br",{}),e("syncTab.conflicts.ours"),"\uFF1A",ka(u.ours),(0,J.jsx)("br",{}),e("syncTab.conflicts.theirs"),"\uFF1A",ka(u.theirs)]})]}),(0,J.jsxs)("div",{className:"bb-actions",children:[(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:u.index,choice:"ours"})}))},children:e("syncTab.conflicts.oursBtn")}),(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:u.index,choice:"theirs"})}))},children:e("syncTab.conflicts.theirsBtn")}),(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:u.index,choice:"both"})}))},children:e("syncTab.conflicts.bothBtn")})]})]},u.index))]})]}),M==="global"&&(0,J.jsxs)("div",{className:"sv-section",children:[(0,J.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.global")}),o?.global?.enabled===!0&&o?.global?.initialized===!0?(0,J.jsxs)(J.Fragment,{children:[[["memory","syncTab.global.trackMemory"],["user","syncTab.global.trackUser"],["daily","syncTab.global.trackDaily"],["todo","syncTab.global.trackTodo"]].map(([u,r])=>(0,J.jsxs)("label",{className:"me-field",children:[(0,J.jsx)("span",{className:"me-field-label",children:e(r)}),(0,J.jsx)("input",{type:"checkbox",className:"me-switch",checked:o.global?.tracks?.[u]===!0,onChange:v=>{let _=v.target.checked;X(()=>gt("/global-track",{method:"POST",body:JSON.stringify({sessionId:a,track:u,on:_})}))}})]},u)),(0,J.jsxs)("p",{className:"bb-meta",children:[e("syncTab.global.uncommitted",{n:String((o.global.uncommitted??0)+(o.global.ahead??0))}),(0,J.jsx)("br",{}),e("syncTab.global.hint")]}),(0,J.jsxs)("div",{className:"sv-actions",children:[(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:b,onClick:()=>{X(()=>gt("/global-sync",{method:"POST",body:JSON.stringify({sessionId:a})}))},children:e("syncTab.global.sync")}),(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:b,onClick:()=>{X(()=>gt("/global-sync",{method:"POST",body:JSON.stringify({sessionId:a,push:!0})}))},children:e("syncTab.global.push")})]}),Object.entries(c).map(([u,r])=>r.length>0?(0,J.jsxs)("div",{className:"sv-section",children:[(0,J.jsx)("div",{className:"sv-section-title",children:e("syncTab.conflicts.titleGlobal",{track:e(ul[u]??"syncTab.global.title"),count:String(r.length)})}),r.map(v=>(0,J.jsxs)("div",{className:"bb-session-line",children:[(0,J.jsxs)("div",{children:[(0,J.jsxs)("strong",{children:["#",v.index," ",v.entryKey]}),"\uFF08",v.file,"\uFF09\xB7 ",v.reason,(0,J.jsx)("br",{}),(0,J.jsxs)("span",{className:"bb-meta",children:[e("syncTab.conflicts.base"),"\uFF1A",ka(v.base),(0,J.jsx)("br",{}),e("syncTab.conflicts.ours"),"\uFF1A",ka(v.ours),(0,J.jsx)("br",{}),e("syncTab.conflicts.theirs"),"\uFF1A",ka(v.theirs)]})]}),(0,J.jsxs)("div",{className:"bb-actions",children:[(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:v.index,choice:"ours",fileset:to[u]})}))},children:e("syncTab.conflicts.oursBtn")}),(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:v.index,choice:"theirs",fileset:to[u]})}))},children:e("syncTab.conflicts.theirsBtn")}),(0,J.jsx)("button",{type:"button",className:"me-btn",disabled:b,onClick:()=>{X(()=>gt("/resolve",{method:"POST",body:JSON.stringify({sessionId:a,index:v.index,choice:"both",fileset:to[u]})}))},children:e("syncTab.conflicts.bothBtn")})]})]},`g-${u}-${v.index}`))]},`g-${u}`):null)]}):(0,J.jsx)("p",{className:"bb-settings-desc",children:e("syncTab.global.notInit")})]}),M==="remote"&&(0,J.jsxs)("div",{className:"sv-section",children:[(0,J.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.remote")}),(0,J.jsx)("p",{className:"bb-settings-desc",children:e("syncTab.remote.desc")}),(0,J.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,J.jsxs)("label",{className:`sv-radio-row${D?"":" sv-radio-active"}`,children:[(0,J.jsx)("input",{type:"radio",name:"sync-remote-enabled",checked:!D,onChange:()=>{o?.global?.enabled===!0?X(()=>gt("/global-remote",{method:"POST",body:JSON.stringify({enabled:!1})})):w(!1)}}),(0,J.jsxs)("span",{style:{flex:1},children:[(0,J.jsx)("span",{className:"sv-radio-label",children:e("syncTab.remote.mode.off")}),(0,J.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.remote.mode.off.desc")})]})]}),(0,J.jsxs)("label",{className:`sv-radio-row${D?" sv-radio-active":""}`,children:[(0,J.jsx)("input",{type:"radio",name:"sync-remote-enabled",checked:D,onChange:()=>w(!0)}),(0,J.jsxs)("span",{style:{flex:1},children:[(0,J.jsx)("span",{className:"sv-radio-label",children:e("syncTab.remote.mode.on")}),(0,J.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.remote.mode.on.desc")})]})]})]}),D?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)("div",{className:"sv-actions",style:{marginTop:"10px"},children:[(0,J.jsx)("input",{type:"text",className:"me-input",style:{flex:"1 1 360px",width:"auto",minWidth:"min(280px, 100%)"},placeholder:e("syncTab.remote.placeholder"),value:S,onChange:u=>{y.current=!0,V(u.target.value)}}),(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:b||S.trim()==="",onClick:()=>{X(()=>gt("/global-remote",{method:"POST",body:JSON.stringify({url:S.trim(),enabled:!0})}))},children:o?.global?.initialized===!0&&o?.global?.url!==""?e("syncTab.remote.modify"):e("syncTab.remote.save")}),o?.global?.initialized===!0&&o?.global?.url!==""&&(0,J.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:b,onClick:()=>{X(()=>gt("/global-remote",{method:"POST",body:JSON.stringify({enabled:!1})}))},children:e("syncTab.remote.disable")})]}),o?.global?.initialized===!0&&o?.global?.url!==""&&(0,J.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.remote.current",{url:o.global.url})})]}):(0,J.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.remote.switchHint")})]}),(0,J.jsx)("p",{className:"bb-empty",children:e("syncTab.footnote")})]}):(0,J.jsx)("div",{className:"bb-empty",children:e("syncTab.loading")})})}var gn=require("react-dom/client");var $t=require("react"),Yt=require("react/jsx-runtime");function Eo(t){return typeof t=="function"?t():t}async function ao(t,e){let a=await fetch(`/memory-evolve/api/bookmarks${t}`,{headers:{"content-type":"application/json"},...e}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.error??`HTTP ${a.status}`);return o}function cn(t){let{anchorKey:e,seq:a,turn:o,summary:s,t:i}=t,[l,c]=(0,$t.useState)(null),[g,b]=(0,$t.useState)(!1),[m,h]=(0,$t.useState)(!1),k=(0,$t.useRef)(null),A=(0,$t.useCallback)(()=>{let y=Eo(t.sessionId);y&&ao(`?sessionId=${encodeURIComponent(y)}`).then(D=>{let w=(D.bookmarks??[]).find(O=>O.anchorKey!=null&&O.anchorKey===e||O.anchorKey==null&&O.seq===a)??null;c(w)}).catch(()=>{})},[t.sessionId,e,a]);(0,$t.useEffect)(()=>{A()},[A]),(0,$t.useEffect)(()=>{if(!m)return;let y=D=>{k.current!==null&&!k.current.contains(D.target)&&h(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[m]);let F=i("bookmark.defaultLabel",{n:String(o??a??"?")}),M=y=>{let D=Eo(t.sessionId);if(!D){window.alert(i("bookmark.error",{message:i("bookmark.noSession")}));return}let w=y==="rename"&&l!==null?l.label:F,O=window.prompt(i(y==="rename"?"bookmark.prompt.rename":"bookmark.prompt.create"),w);if(O===null)return;let X=O.trim()===""?F:O.trim();b(!0),h(!1),y==="create"?ao("",{method:"POST",body:JSON.stringify({sessionId:D,anchorKey:e,seq:a,label:X,summary:s,turn:o})}).then(C=>{c({id:C.bookmark.id,seq:C.bookmark.seq,anchorKey:C.bookmark.anchorKey??null,label:C.bookmark.label}),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(C=>{window.alert(i("bookmark.error",{message:C.message}))}).finally(()=>b(!1)):l!==null?ao("",{method:"PATCH",body:JSON.stringify({sessionId:D,id:l.id,label:X})}).then(C=>{c({id:C.bookmark.id,seq:C.bookmark.seq,anchorKey:C.bookmark.anchorKey??null,label:C.bookmark.label}),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(C=>{window.alert(i("bookmark.error",{message:C.message}))}).finally(()=>b(!1)):b(!1)},B=()=>{let y=Eo(t.sessionId);l!==null&&window.confirm(i("bookmark.confirm.delete",{label:l.label}))&&(b(!0),h(!1),ao("",{method:"DELETE",body:JSON.stringify({sessionId:y,id:l.id})}).then(()=>{c(null),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(D=>{window.alert(i("bookmark.error",{message:D.message}))}).finally(()=>b(!1)))},S=l!==null,V=S?i("bookmark.star.title.on",{label:l.label}):i("bookmark.star.title.off");return(0,Yt.jsxs)("div",{className:"bm-star-wrap",ref:k,"data-bm-anchor":e,children:[(0,Yt.jsx)("button",{type:"button",className:"bm-star-btn","data-bookmarked":S?"true":void 0,title:V,"aria-label":V,disabled:g,onClick:()=>{S?h(y=>!y):M("create")},children:(0,Yt.jsx)("span",{className:"bm-star-icon","aria-hidden":"true",children:S?"\u2605":"\u2606"})}),m&&S&&(0,Yt.jsxs)("div",{className:"bm-star-menu",role:"menu",children:[(0,Yt.jsx)("button",{type:"button",role:"menuitem",onClick:()=>M("rename"),children:i("bookmark.menu.rename")}),(0,Yt.jsx)("button",{type:"button",role:"menuitem",className:"bm-danger",onClick:B,children:i("bookmark.menu.delete")})]})]})}var fn=require("react/jsx-runtime"),mn="data-bm-star-host",Io="data-bm-fork-enabled",bl=["\u5728\u65B0\u5BF9\u8BDD\u4E2D\u5206\u652F","Branch into a new conversation"],pn=200;function Po(t){let e=t.getAttribute("data-chat-anchor-key")??"",a=/^node:(\d+)$/.exec(e);if(a!==null){let l=Number(a[1]);return Number.isInteger(l)&&l>=1?{kind:"node",id:a[1],legacySeq:l,rawKey:e}:null}let o=/^(\d+):/.exec(e);if(o===null)return null;let s=Number(o[1]);if(!Number.isInteger(s)||s<=0)return null;let i=e.slice(o[0].length,o[0].length+s);return i.length!==s?null:{kind:i,id:e.slice(o[0].length+s),legacySeq:null,rawKey:e}}function un(t){let e=Number(t.split(":")[0]);return Number.isInteger(e)&&e>=1?e:null}function Ao(t){let e=(t.getAttribute("title")??"")+" "+(t.getAttribute("aria-label")??"");return e===" "?!1:bl.some(a=>e.includes(a))}function bn(t){let e=t.replace(/\s+/g," ").trim();return e.length<=pn?e:`${e.slice(0,pn-1)}\u2026`}function gl(t,e){let a=Array.from(e.querySelectorAll("[data-chat-anchor-key]")),o=a.indexOf(t);if(o<0)return"";for(let s=o-1;s>=0;s-=1){let i=a[s];if(i===void 0)continue;let l=Po(i);if(l!==null&&l.legacySeq===null){if(l.kind==="input-message")return bn(i.textContent??"");continue}if(!(i.querySelector("button")!==null&&Array.from(i.querySelectorAll("button")).some(Ao)))return bn(i.textContent??"")}return""}function vn(t,e){let a=!1,o=null,s=new Map,i=0;function l(m){let k=Array.from(m.querySelectorAll("button")).find(Ao);return k===void 0||k.getAttribute("aria-disabled")==="true"?null:k}function c(m){return Array.from(m.querySelectorAll("button")).find(Ao)??null}function g(m){let h=c(m);h!==null&&h.getAttribute("aria-disabled")==="true"&&(h.hasAttribute(Io)||(h.setAttribute(Io,""),h.removeAttribute("aria-disabled"),h.removeAttribute("disabled"),h.removeAttribute("data-unavailable"),h.title=e.t("bookmark.fork.title"),h.setAttribute("aria-label",e.t("bookmark.fork.title")),h.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation();let A=Po(m),F=t();if(A===null||F===""){window.alert(e.t("bookmark.error",{message:e.t("bookmark.noSession")}));return}let M=A.legacySeq,B=A.kind==="assistant-step"?un(A.id):null;window.confirm(e.t("bookmark.fork.confirm",{n:String(B??M??"?")}))&&fetch("/memory-evolve/api/bookmarks/fork",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({sessionId:F,seq:A.legacySeq??void 0,anchorKey:A.legacySeq===null?A.rawKey:void 0})}).then(S=>S.json().catch(()=>({}))).then(S=>{typeof S.sessionId=="string"?window.alert(e.t("bookmark.fork.ok",{id:S.sessionId})):window.alert(e.t("bookmark.error",{message:S.error??"HTTP error"}))}).catch(S=>{window.alert(e.t("bookmark.error",{message:S.message}))})})))}function b(){if(a)return;let m=document.querySelector("[data-chat-flow]");if(m===null)return;let h=m.querySelectorAll('[role="tooltip"]');for(let A of h){let F=A.previousElementSibling;F instanceof HTMLButtonElement&&F.hasAttribute(Io)&&(A.style.display="none")}let k=m.querySelectorAll("[data-chat-anchor-key]");for(let A of k){g(A);let F=Po(A);if(F===null||F.kind!=="assistant-step"&&F.legacySeq===null||A.querySelector(`[${mn}]`)!==null)continue;let M=l(A);if(M===null)continue;let B=gl(A,m),S=document.createElement("div");S.setAttribute(mn,""),S.dataset.bmAnchor=F.rawKey,M.insertAdjacentElement("afterend",S);let V=(0,gn.createRoot)(S);V.render((0,fn.jsx)(cn,{anchorKey:F.rawKey,seq:F.legacySeq,turn:F.kind==="assistant-step"?un(F.id):null,summary:B,sessionId:t,t:e.t})),s.set(F.rawKey,{root:V,host:S})}}return o=new MutationObserver(()=>{a||i===0&&(i=requestAnimationFrame(()=>{i=0,!a&&b()}))}),o.observe(document.body,{childList:!0,subtree:!0}),b(),{dispose(){a=!0,i!==0&&(cancelAnimationFrame(i),i=0),o?.disconnect(),o=null;for(let{root:m,host:h}of s.values())m.unmount(),h.remove();s.clear()}}}var ue=require("react"),Ta=require("@deepseek-ai/dsh-client-ui-primitives");var tt=require("react");var Ha=require("react");var jo="memory-evolve.canvas.v1",Ro="data-cg-canvas-css";var hn="sess-demo-current",oo="\u5F53\u524D\u4F1A\u8BDD";var so="proj-demo",yn="dsh-memory-evolve";var $a={x:80,y:40,width:560,height:300},Mo={folder:{width:248,height:168},markdown:{width:360,height:260},plainText:{width:340,height:240},image:{width:320,height:240},media:{width:320,height:220},file:{width:260,height:170}},ra={folder:"\u6587\u4EF6\u5939",markdown:"Markdown",plainText:"\u7EAF\u6587\u672C",image:"\u56FE\u7247",media:"\u97F3\u89C6\u9891",file:"\u6587\u4EF6"},la={folder:"\u{1F4C1}",markdown:"\u{1F4DD}",plainText:"\u{1F4C4}",image:"\u{1F5BC}",media:"\u{1F3AC}",file:"\u{1F4E6}"},wn={md:"markdown",markdown:"markdown",txt:"plainText",text:"plainText",log:"plainText",png:"image",jpg:"image",jpeg:"image",gif:"image",webp:"image",svg:"image",bmp:"image",ico:"image",mp3:"media",wav:"media",m4a:"media",aac:"media",ogg:"media",flac:"media",mp4:"media",mov:"media",webm:"media",avi:"media",mkv:"media"},Lo={x:48,y:36,scale:.88};function xn(){let t=Math.random().toString(36).slice(2,8);return`canvas_${Date.now().toString(36)}_${t}`}function no(t){let e=t.trim();return e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1).trim():e}function io(t){let e=no(t).replace(/\\/g,"/");if(!e)return"file";if(e.endsWith("/"))return"folder";let a=e.split("/").pop()??e;if(!a.includes(".")||a.startsWith("."))return"folder";let o=a.split(".").pop()?.toLowerCase()??"";return wn[o]??"file"}function Do(t){let e=no(t).replace(/\\/g,"/").replace(/\/+$/,""),a=e.split("/").pop();return a&&a.length>0?a:e||"\u672A\u547D\u540D"}function kn(t){return`[canvas:${t.id}] ${t.title}`}function Oo(t,e){return t.scope==="global"?`\u{1F310} ${t.scopeLabel||"\u5168\u5C40"}`:t.scope==="project"?`\u{1F4C1} ${t.scopeLabel}`:e&&t.sessionId&&t.sessionId===e?"\u{1F4AC} \u5F53\u524D\u4F1A\u8BDD":t.sessionId?`\u{1F4AC} \u5176\u4ED6\u4F1A\u8BDD ${t.sessionName||zo(t.sessionId)}`:`\u{1F4AC} ${t.scopeLabel||"\u4F1A\u8BDD"}`}function zo(t){let e=/^session-(.+)$/.exec(t);return(e?e[1]:t).slice(0,8)}function Tn(t,e,a=hn,o=so){return e==="global"||t.scope==="global"?!0:e==="project"?t.scope==="project"?(t.projectId??o)===o:t.projectId===o:t.scope==="project"?(t.projectId??o)===o:t.sessionId===a}function $o(t,e){let a=e.trim().toLowerCase();if(!a)return!0;let o=ra[t.type];return t.title.toLowerCase().includes(a)||t.type.toLowerCase().includes(a)||o.toLowerCase().includes(a)||(t.path?.toLowerCase().includes(a)??!1)||t.id.toLowerCase().includes(a)}function Nn(t,e,a){return Math.min(a,Math.max(e,t))}function Sn(t,e,a,o){let s=(e-t.x)/t.scale,i=(a-t.y)/t.scale;return{x:e-s*o,y:a-i*o,scale:o}}function Cn(t,e,a,o){let s=t.placement.x+t.placement.width/2,i=t.placement.y+t.placement.height/2;return{x:a/2-s*e.scale,y:o/2-i*e.scale,scale:e.scale}}function En(t,e,a,o,s){let{x:i,y:l,width:c,height:g}=t.placement,b=-e.x/e.scale-s,m=-e.y/e.scale-s,h=b+a/e.scale+s*2,k=m+o/e.scale+s*2;return i+c>=b&&i<=h&&l+g>=m&&l<=k}async function In(t){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly","true"),e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select();let a=document.execCommand("copy");return e.remove(),a}catch{return!1}}async function Pn(t,e){let a=vl(t)||"\u4FBF\u7B7E",o=/\.(md|txt)$/i.test(a)?a:`${a}.md`,s=window.showSaveFilePicker;if(typeof s=="function")try{let l=await(await s({suggestedName:o,types:[{description:"Markdown \u6587\u672C",accept:{"text/markdown":[".md",".txt"]}}]})).createWritable();return await l.write(e),await l.close(),{ok:!0}}catch(i){if(i?.name==="AbortError")return{ok:!1,canceled:!0}}try{let i=new Blob([e],{type:"text/markdown;charset=utf-8"}),l=URL.createObjectURL(i),c=document.createElement("a");return c.href=l,c.download=o,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(l),5e3),{ok:!0,message:"\u5DF2\u4E0B\u8F7D\u5230\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0B\u8F7D\u76EE\u5F55"}}catch(i){return{ok:!1,message:i instanceof Error?i.message:String(i)}}}function vl(t){return t.replace(/[\\/:*?"<>|\u0000-\u001f]/g,"_").trim().slice(0,120)}function ro(t){let e=0;for(let a=0;a<t.length;a++)e=e*31+t.charCodeAt(a)>>>0;return e%360}function An(t){if(!(t instanceof HTMLElement))return!1;let e=t.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"?!0:t.isContentEditable}var da="/memory-evolve/api/canvas",Fa=null;async function jn(){if(Fa!==null)return Fa;try{Fa=(await fetch(`${da}/state`,{method:"GET"})).ok}catch{Fa=!1}return Fa}async function Rn(t){try{let e=t?`?sessionId=${encodeURIComponent(t)}`:"",a=await fetch(`${da}${e}`,{method:"GET"});if(!a.ok)return null;let o=await a.json();if(!o||typeof o!="object")return null;let s=o;if(!Array.isArray(s.nodes))return null;let i=s.viewport;return{version:1,nodes:s.nodes,viewport:i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.scale=="number"?{x:i.x,y:i.y,scale:i.scale}:{x:520,y:330,scale:.9},viewMode:s.viewMode==="project"||s.viewMode==="global"?s.viewMode:"session",lastAiNodeId:typeof s.lastAiNodeId=="string"?s.lastAiNodeId:null,rev:Number.isFinite(Number(s.rev))?Number(s.rev):0,currentProjectId:typeof s.currentProjectId=="string"?s.currentProjectId:void 0,currentProjectLabel:typeof s.currentProjectLabel=="string"?s.currentProjectLabel:void 0}}catch{return null}}async function Mn(t,e,a){try{let o=await fetch(`${da}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodes:t.nodes,rev:e,viewport:t.viewport,viewMode:t.viewMode,lastAiNodeId:t.lastAiNodeId,sessionId:a})});if(o.status===409)return{ok:!1,conflict:!0,error:"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539"};if(!o.ok){let l=await o.json().catch(()=>null);return{ok:!1,error:l&&typeof l=="object"&&typeof l.error=="string"?l.error:`HTTP ${o.status}`}}let s=await o.json();return{ok:!0,rev:s&&typeof s=="object"&&typeof s.rev=="number"?s.rev:e+1}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}async function Ln(t,e={}){try{let a=new URLSearchParams({q:t});e.dir&&a.set("dir",e.dir),e.sessionId&&a.set("sessionId",e.sessionId),e.scope&&a.set("scope",e.scope),e.limit&&a.set("limit",String(e.limit));let o=await fetch(`${da}/search?${a.toString()}`,{method:"GET"});if(!o.ok)return null;let s=await o.json();if(!s||typeof s!="object")return null;let i=s;return Array.isArray(i.items)?i.items:null}catch{return null}}async function Dn(t){return zn("/open",t)}async function On(t){return zn("/open-dir",t)}async function zn(t,e){try{let a=await fetch(`${da}${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodeId:e})});if(!a.ok){let o=await a.json().catch(()=>null);return{ok:!1,error:o&&typeof o=="object"&&typeof o.error=="string"?o.error:`HTTP ${a.status}`}}return{ok:!0}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}function ca(t){return`${da}/file?nodeId=${encodeURIComponent(t)}`}async function $n(t,e,a,o){try{let s=await fetch(`${da}/migrate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodeId:t,scope:e,sessionId:a,rev:o})});if(s.status===409)return{ok:!1,conflict:!0,error:"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5"};if(!s.ok){let c=await s.json().catch(()=>null);return{ok:!1,error:c&&typeof c=="object"&&typeof c.error=="string"?c.error:`HTTP ${s.status}`}}let l=await s.json();return{ok:!0,node:l.node,rev:typeof l.rev=="number"?l.rev:void 0}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}var xe=require("react/jsx-runtime");function fl(t){if(!t)return"FILE";let e=t.split(/[/\\]/).pop()??t,a=e.lastIndexOf(".");return a<=0?"FILE":e.slice(a+1).toUpperCase().slice(0,6)}function hl(t){let{node:e,backendReady:a,onChangeContent:o}=t,s=ro(e.id);if(e.type==="markdown"||e.type==="plainText")return(0,xe.jsxs)(xe.Fragment,{children:[e.path?(0,xe.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,xe.jsx)("textarea",{className:"cg-editor",value:e.content??"",placeholder:e.type==="markdown"?"\u5199\u4E00\u6BB5 Markdown\u2026":"\u5199\u4E00\u6BB5\u7EAF\u6587\u672C\u2026",onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation(),onChange:i=>o(e.id,i.target.value)})]});if(e.type==="image"){let i=a&&e.path?ca(e.id):"";return(0,xe.jsxs)(xe.Fragment,{children:[i?(0,xe.jsx)("div",{className:"cg-card-media-wrap",children:(0,xe.jsx)("img",{className:"cg-card-media",src:i,alt:e.title,loading:"lazy",decoding:"async",draggable:!1})}):(0,xe.jsxs)("div",{className:"cg-ph",style:{background:`linear-gradient(145deg, hsl(${s} 42% 46%), hsl(${(s+40)%360} 38% 32%))`},children:["\u{1F5BC}",(0,xe.jsx)("small",{children:"\u56FE\u7247\u9884\u89C8"})]}),e.path?(0,xe.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null]})}if(e.type==="media"){let i=a&&e.path?ca(e.id):"",l=!!e.path?.toLowerCase().match(/\.(mp3|wav|m4a|aac|ogg|flac)$/);return(0,xe.jsxs)(xe.Fragment,{children:[i?(0,xe.jsx)("div",{className:"cg-card-media-wrap",children:l?(0,xe.jsx)("audio",{className:"cg-card-media",src:i,controls:!0,preload:"metadata"}):(0,xe.jsx)("video",{className:"cg-card-media",src:i,controls:!0,preload:"metadata"})}):(0,xe.jsxs)("div",{className:"cg-ph",style:{background:`linear-gradient(160deg, hsl(${s} 35% 38%), hsl(${(s+60)%360} 30% 22%))`},children:["\u25B6",(0,xe.jsx)("small",{children:l?"\u97F3\u9891":"\u89C6\u9891"})]}),e.path?(0,xe.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null]})}return e.type==="folder"?(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("div",{className:"cg-ph",style:{fontSize:32,minHeight:56},children:"\u{1F4C1}"}),e.path?(0,xe.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,xe.jsxs)("div",{className:"cg-card-meta",children:[e.meta?.size??"\u6587\u4EF6\u5939"," \xB7 \u6682\u4E0D\u652F\u6301\u5185\u5D4C\u6D4F\u89C8"]})]}):(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("span",{className:"cg-file-ext",children:fl(e.path)}),e.path?(0,xe.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,xe.jsx)("div",{className:"cg-card-meta",children:[e.meta?.size,e.meta?.mtime].filter(Boolean).join(" \xB7 ")||ra[e.type]})]})}function yl(t){let{node:e,lod:a,selected:o,flashing:s,dimmed:i,highlighted:l}=t,{placement:c}=e,g=(0,Ha.useCallback)(h=>{h.button===0&&(t.onSelect(e.id),t.onDragStart(e.id,h))},[e.id,t]),b=(0,Ha.useCallback)(h=>{h.button===0&&(h.preventDefault(),h.stopPropagation(),t.onSelect(e.id),t.onResizeStart(e.id,h))},[e.id,t]),m=["cg-card",o?"cg-selected":"",s?"cg-flash":"",i?"cg-dimmed":"",l?"cg-fresh":"",e.aiPlaced?"cg-ai":""].filter(Boolean).join(" ");return(0,xe.jsxs)("article",{className:m,"data-node-id":e.id,style:{left:c.x,top:c.y,width:c.width,height:c.height,zIndex:c.zIndex},onPointerDown:h=>{h.button===0&&t.onSelect(e.id)},children:[(0,xe.jsxs)("header",{className:"cg-card-head",onPointerDown:g,children:[(0,xe.jsx)("span",{className:"cg-drag","aria-hidden":!0,children:"\u22EE\u22EE"}),(0,xe.jsx)("span",{className:"cg-type-glyph",title:ra[e.type],children:la[e.type]}),(0,xe.jsx)("strong",{className:"cg-card-title",title:e.title,children:e.title}),(0,xe.jsxs)("span",{className:"cg-badges",children:[e.aiPlaced?(0,xe.jsx)("span",{className:"cg-badge cg-badge-ai",children:"AI \u653E\u7F6E"}):null,e.unverified?(0,xe.jsx)("span",{className:"cg-badge cg-badge-warn",children:"\u672A\u9A8C\u8BC1"}):null,(0,xe.jsx)("span",{className:"cg-badge",title:Oo(e,t.currentSessionId),children:Oo(e,t.currentSessionId)})]})]}),a?(0,xe.jsxs)("div",{className:"cg-lod",children:[la[e.type],(0,xe.jsx)("span",{children:e.title})]}):(0,xe.jsxs)(xe.Fragment,{children:[(0,xe.jsx)("div",{className:"cg-card-body",children:(0,xe.jsx)(hl,{node:e,backendReady:t.backendReady,onChangeContent:t.onChangeContent})}),(0,xe.jsxs)("footer",{className:"cg-card-foot",children:[(0,xe.jsx)("button",{type:"button",onClick:()=>t.onPreview(e.id),children:"\u9884\u89C8"}),(e.type==="markdown"||e.type==="plainText")&&e.content?(0,xe.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onSave(e.id),title:"\u4FDD\u5B58\u5185\u5BB9\u5230\u672C\u673A\u6587\u4EF6",children:"\u4FDD\u5B58"}):null,e.path?(0,xe.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onOpen(e.id),title:"\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00",children:"\u6253\u5F00"}):null,e.path?(0,xe.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onOpenFolder(e.id),title:"\u5728\u7CFB\u7EDF\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u8BE5\u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u5939\uFF08Finder / \u8D44\u6E90\u7BA1\u7406\u5668\uFF09",children:"\u6240\u5728\u6587\u4EF6\u5939"}):null,(0,xe.jsx)("button",{type:"button",onClick:()=>t.onMigrate(e.id),title:"\u8FC1\u79FB\u8282\u70B9\u5F52\u5C5E\uFF08\u672C\u4F1A\u8BDD/\u672C\u9879\u76EE/\u6240\u6709\u9879\u76EE\u53EF\u89C1\uFF09",children:"\u5F52\u5C5E"}),t.openSession&&e.scope==="session"&&e.sessionId&&e.sessionId!==t.currentSessionId?(0,xe.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.openSession?.(e.sessionId),title:"\u8DF3\u8F6C\u5230\u8BE5\u8282\u70B9\u6240\u5C5E\u4F1A\u8BDD",children:"\u8DF3\u8F6C"}):null,(0,xe.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"id"),children:"\u590D\u5236 ID"}),(0,xe.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"title"),children:"\u590D\u5236\u6807\u9898"}),(0,xe.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"path"),disabled:!e.path,children:"\u590D\u5236\u8DEF\u5F84"}),(0,xe.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"ref"),children:"\u5F15\u7528"}),(0,xe.jsx)("button",{type:"button",className:"cg-danger",onClick:()=>t.onAskRemove(e.id),children:"\u79FB\u9664"})]})]}),(0,xe.jsx)("button",{type:"button",className:"cg-resize-handle","aria-label":"\u62D6\u52A8\u8C03\u6574\u5361\u7247\u5927\u5C0F",title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F",onPointerDown:b})]})}var Fo=(0,Ha.memo)(yl);Fo.displayName="CanvasCard";var Qt=require("react/jsx-runtime");function Ho(t,e){t&&(t.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) scale(${e.scale})`)}function Bo(t,e){if(!t)return;let a=Math.max(10,22*e.scale);t.style.backgroundSize=`${a}px ${a}px`,t.style.backgroundPosition=`${e.x}px ${e.y}px`}function Hn(t){let e=(0,tt.useRef)(null),a=(0,tt.useRef)(null),o=(0,tt.useRef)(t.viewport),s=(0,tt.useRef)(t.nodes),i=(0,tt.useRef)(null),l=(0,tt.useRef)(!1),c=(0,tt.useRef)(0),[g,b]=(0,tt.useState)(!1),[m,h]=(0,tt.useState)(!1),[k,A]=(0,tt.useState)({w:800,h:560}),[F,M]=(0,tt.useState)(()=>t.nodes.map(u=>u.id));i.current||(o.current=t.viewport),s.current=t.nodes,(0,tt.useEffect)(()=>{let u=e.current;if(!u)return;let r=()=>{let _=u.getBoundingClientRect();A({w:Math.max(1,_.width),h:Math.max(1,_.height)})};r();let v=new ResizeObserver(r);return v.observe(u),()=>v.disconnect()},[]);let B=(0,tt.useCallback)((u,r)=>{let v=[];for(let _ of r)En(_,u,k.w,k.h,280)&&v.push(_.id);M(_=>_.length===v.length&&_.every((L,G)=>L===v[G])?_:v)},[k.h,k.w]);(0,tt.useEffect)(()=>{i.current||(Ho(a.current,t.viewport),Bo(e.current,t.viewport),B(t.viewport,t.nodes))},[t.nodes,t.viewport,B]),(0,tt.useEffect)(()=>()=>{c.current&&cancelAnimationFrame(c.current)},[]),(0,tt.useEffect)(()=>{let u=v=>{v.code!=="Space"||v.repeat||An(v.target)||(v.preventDefault(),l.current=!0,b(!0))},r=v=>{v.code==="Space"&&(l.current=!1,b(!1))};return window.addEventListener("keydown",u,{passive:!1}),window.addEventListener("keyup",r),()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",r)}},[]);let S=(0,tt.useCallback)((u,r)=>{o.current=u,Ho(a.current,u),Bo(e.current,u),B(u,s.current),t.onViewportChange(u,r)},[t,B]);(0,tt.useEffect)(()=>{let u=e.current;if(!u)return;let r=v=>{v.preventDefault();let _=u.getBoundingClientRect(),L=v.clientX-_.left,G=v.clientY-_.top,q=v.deltaY<0?1.08:1/1.08,ce=Nn(o.current.scale*q,.15,2.8);ce!==o.current.scale&&S(Sn(o.current,L,G,ce),!0)};return u.addEventListener("wheel",r,{passive:!1}),()=>u.removeEventListener("wheel",r)},[S]);let V=(0,tt.useCallback)(u=>{if(u.button!==0)return;let r=!!u.target?.closest?.("[data-node-id]");(!r||l.current)&&(u.preventDefault(),u.currentTarget.setPointerCapture(u.pointerId),i.current={kind:"pan",lastX:u.clientX,lastY:u.clientY},h(!0),r||t.onSelect(null))},[t]),y=(0,tt.useCallback)(u=>{let r=i.current;if(!r)return;if(r.kind==="pan"){let G=u.clientX-r.lastX,q=u.clientY-r.lastY;r.lastX=u.clientX,r.lastY=u.clientY;let ce={...o.current,x:o.current.x+G,y:o.current.y+q};o.current=ce,Ho(a.current,ce),Bo(e.current,ce),c.current||(c.current=requestAnimationFrame(()=>{c.current=0,B(o.current,s.current)}));return}let v=o.current.scale||1;if(r.kind==="resize"){let G=Math.max(120,r.originW+(u.clientX-r.startX)/v),q=Math.max(60,r.originH+(u.clientY-r.startY)/v);t.onResizeNode(r.id,G,q,!1);return}let _=r.originX+(u.clientX-r.startX)/v,L=r.originY+(u.clientY-r.startY)/v;t.onMoveNode(r.id,_,L,!1)},[t,B]),D=(0,tt.useCallback)(u=>{let r=i.current;if(!r)return;i.current=null,h(!1);try{u.currentTarget.releasePointerCapture(u.pointerId)}catch{}if(r.kind==="pan"){B(o.current,s.current),t.onViewportChange(o.current,!0);return}let v=o.current.scale||1;if(r.kind==="resize"){let G=Math.max(120,r.originW+(u.clientX-r.startX)/v),q=Math.max(60,r.originH+(u.clientY-r.startY)/v);t.onResizeNode(r.id,G,q,!0);return}let _=r.originX+(u.clientX-r.startX)/v,L=r.originY+(u.clientY-r.startY)/v;t.onMoveNode(r.id,_,L,!0)},[t,B]),w=(0,tt.useCallback)((u,r)=>{if(l.current)return;r.preventDefault(),r.stopPropagation();let v=s.current.find(L=>L.id===u);if(!v)return;let _=e.current;if(_)try{_.setPointerCapture(r.pointerId)}catch{}i.current={kind:"drag",id:u,originX:v.placement.x,originY:v.placement.y,startX:r.clientX,startY:r.clientY}},[]),O=(0,tt.useCallback)((u,r)=>{if(l.current)return;let v=s.current.find(L=>L.id===u);if(!v)return;let _=e.current;if(_)try{_.setPointerCapture(r.pointerId)}catch{}i.current={kind:"resize",id:u,originW:v.placement.width,originH:v.placement.height,startX:r.clientX,startY:r.clientY}},[]),X=(0,tt.useMemo)(()=>new Set(F),[F]),C=(0,tt.useMemo)(()=>t.nodes.filter(u=>X.has(u.id)),[t.nodes,X]);return(0,Qt.jsxs)("div",{ref:e,className:`cg-stage${m?" cg-panning":""}${g?" cg-space":""}`,onPointerDown:V,onPointerMove:y,onPointerUp:D,onPointerCancel:D,children:[(0,Qt.jsxs)("div",{ref:a,className:"cg-world",children:[(0,Qt.jsx)("div",{className:"cg-ai-zone",style:{left:$a.x,top:$a.y,width:$a.width,height:$a.height},children:(0,Qt.jsx)("span",{className:"cg-ai-zone-label",children:"AI \u4FBF\u7B7E\u533A \xB7 AI \u65B0\u653E\u7684\u4FBF\u7B7E\u843D\u5728\u8FD9\u91CC\uFF0C\u53EF\u62D6\u8D70"})}),C.map(u=>(0,Qt.jsx)(Fo,{node:u,lod:t.lod,selected:t.selectedId===u.id,flashing:t.flashIds.has(u.id),dimmed:t.searchActive&&!t.matchIds.has(u.id),highlighted:t.highlightIds.has(u.id),currentSessionId:t.currentSessionId,backendReady:t.backendReady,openSession:t.openSession,onSelect:t.onSelect,onDragStart:w,onResizeStart:O,onPreview:t.onPreview,onOpen:t.onOpen,onOpenFolder:t.onOpenFolder,onSave:t.onSave,onMigrate:t.onMigrate,onCopy:t.onCopy,onAskRemove:t.onAskRemove,onChangeContent:t.onChangeContent},u.id))]}),(0,Qt.jsxs)("div",{className:"cg-hint-bar",children:["\u62D6\u7A7A\u767D\u5904\u5E73\u79FB \xB7 \u7A7A\u683C+\u62D6 \u4E5F\u53EF\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E\uFF08\u4E2D\u5FC3\u4E3A\u6307\u9488\uFF09\xB7 \u7F29\u653E ",Math.round(t.viewport.scale*100),"%",t.lod?" \xB7 \u8FDC\u770B\u7B80\u5316\u6A21\u5F0F":"",C.length<t.nodes.length?` \xB7 \u89C6\u53E3 ${C.length}/${t.nodes.length}`:""]})]})}var Tt=require("react");var oe=require("react/jsx-runtime");function Tl(t){let[e,a]=(0,Tt.useState)(""),o=io(e);return(0,oe.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u8DEF\u5F84\u4E0A\u677F",children:[(0,oe.jsx)("h3",{children:"\u8DEF\u5F84\u4E0A\u677F"}),(0,oe.jsx)("p",{children:"\u7C98\u8D34\u672C\u5730\u8DEF\u5F84\u5373\u53EF\u751F\u6210\u5361\u7247\u3002\u6682\u4E0D\u6821\u9A8C\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u5361\u7247\u4F1A\u6807\u300C\u672A\u9A8C\u8BC1\u300D\u3002"}),(0,oe.jsxs)("div",{className:"cg-field",children:[(0,oe.jsx)("label",{htmlFor:"cg-path-input",children:"\u672C\u5730\u8DEF\u5F84"}),(0,oe.jsx)("input",{id:"cg-path-input",autoFocus:!0,value:e,placeholder:"/Users/me/Documents/\u5408\u540C.pdf",onChange:s=>a(s.target.value),onKeyDown:s=>{s.key==="Enter"&&e.trim()&&t.onPath({path:e}),s.key==="Escape"&&t.onClose()}})]}),(0,oe.jsxs)("div",{className:"cg-hint",children:["\u5C06\u8BC6\u522B\u4E3A\uFF1A",la[o]," ",ra[o]]}),(0,oe.jsxs)("div",{className:"cg-dialog-actions",children:[(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",disabled:!e.trim(),onClick:()=>t.onPath({path:e}),children:"\u4E0A\u677F"})]})]})}function Nl(t){let[e,a]=(0,Tt.useState)("\u672A\u547D\u540D\u4FBF\u7B7E"),[o,s]=(0,Tt.useState)("markdown"),[i,l]=(0,Tt.useState)("");return(0,oe.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u65B0\u5EFA\u4FBF\u7B7E",children:[(0,oe.jsx)("h3",{children:"\u4FBF\u7B7E\u4E0A\u677F"}),(0,oe.jsx)("p",{children:"\u5185\u5BB9\u5B58\u5728\u753B\u677F\u91CC\uFF0C\u4E0D\u6307\u5411\u4EFB\u4F55\u6587\u4EF6\u3002"}),(0,oe.jsxs)("div",{className:"cg-field",children:[(0,oe.jsx)("label",{htmlFor:"cg-note-title",children:"\u6807\u9898"}),(0,oe.jsx)("input",{id:"cg-note-title",autoFocus:!0,value:e,onChange:c=>a(c.target.value)})]}),(0,oe.jsxs)("div",{className:"cg-field",children:[(0,oe.jsx)("label",{htmlFor:"cg-note-type",children:"\u7C7B\u578B"}),(0,oe.jsxs)("select",{id:"cg-note-type",value:o,onChange:c=>s(c.target.value==="plainText"?"plainText":"markdown"),children:[(0,oe.jsx)("option",{value:"markdown",children:"Markdown"}),(0,oe.jsx)("option",{value:"plainText",children:"\u7EAF\u6587\u672C"})]})]}),(0,oe.jsxs)("div",{className:"cg-field",children:[(0,oe.jsx)("label",{htmlFor:"cg-note-body",children:"\u5185\u5BB9"}),(0,oe.jsx)("textarea",{id:"cg-note-body",value:i,onChange:c=>l(c.target.value)})]}),(0,oe.jsxs)("div",{className:"cg-dialog-actions",children:[(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:()=>t.onNote({title:e.trim()||"\u672A\u547D\u540D\u4FBF\u7B7E",type:o,content:i}),children:"\u4E0A\u677F"})]})]})}function Sl(t){let[e,a]=(0,Tt.useState)(""),[o,s]=(0,Tt.useState)("local"),[i,l]=(0,Tt.useState)(null),[c,g]=(0,Tt.useState)(!1),[b,m]=(0,Tt.useState)(null),h=(0,Tt.useRef)(0),k=(0,Tt.useCallback)(()=>{let M=e.trim();if(!t.backendReady)return;if(!M){l(null),m(null);return}g(!0),m(null);let B=++h.current;Ln(M,{sessionId:t.sessionId,scope:o,limit:20}).then(S=>{h.current===B&&(g(!1),l(S),S===null&&m("\u672C\u5730\u641C\u7D22\u4E0D\u53EF\u7528"))})},[t.backendReady,t.sessionId,e,o]),A=(0,Tt.useCallback)(M=>{M!==o&&(h.current++,s(M),l(null),m(null),g(!1))},[o]),F=t.backendReady&&i!==null?i:[];return(0,oe.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u641C\u7D22\u4E0A\u677F",children:[(0,oe.jsx)("h3",{children:"\u641C\u7D22\u4E0A\u677F"}),(0,oe.jsx)("p",{children:"\u641C\u7D22\u672C\u673A\u6587\u4EF6\uFF0C\u9009\u4E2D\u5373\u4E0A\u677F\u3002"}),(0,oe.jsxs)("div",{className:"cg-field",children:[(0,oe.jsx)("label",{htmlFor:"cg-cat-q",children:"\u5173\u952E\u5B57"}),(0,oe.jsxs)("div",{className:"cg-search-row",children:[(0,oe.jsx)("input",{id:"cg-cat-q",autoFocus:!0,value:e,placeholder:"\u5408\u540C / \u8BBE\u8BA1\u7A3F / \u5F55\u97F3\u2026",onChange:M=>a(M.target.value),onKeyDown:M=>{M.key==="Enter"&&k()}}),(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:k,disabled:!e.trim(),children:"\u641C\u7D22"})]})]}),(0,oe.jsxs)("div",{className:"cg-seg cg-scope",role:"group","aria-label":"\u641C\u7D22\u8303\u56F4",children:[(0,oe.jsx)("button",{type:"button",className:o==="local"?"cg-on":"",onClick:()=>A("local"),children:"\u672C\u673A\u5168\u90E8"}),(0,oe.jsx)("button",{type:"button",className:o==="project"?"cg-on":"",onClick:()=>A("project"),children:"\u5F53\u524D\u9879\u76EE"})]}),c?(0,oe.jsx)("div",{className:"cg-hint",children:"\u641C\u7D22\u4E2D\u2026"}):null,b?(0,oe.jsx)("div",{className:"cg-hint cg-hint-error",children:b}):null,(0,oe.jsxs)("div",{className:"cg-catalog",children:[!c&&F.length===0?(0,oe.jsx)("div",{className:"cg-hint",children:e.trim()?"\u6CA1\u6709\u5339\u914D\u7684\u6587\u4EF6":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\u672C\u673A\u6587\u4EF6"}):null,F.map(M=>(0,oe.jsxs)("button",{type:"button",className:"cg-catalog-row",onClick:()=>t.onCatalog(M.title,M.path,M.type,M.size),children:[(0,oe.jsx)("span",{"aria-hidden":!0,children:la[M.type]??"\u25A4"}),(0,oe.jsxs)("span",{children:[(0,oe.jsx)("strong",{children:M.title}),(0,oe.jsxs)("small",{children:[M.path," \xB7 ",M.size??""]})]})]},M.path))]}),(0,oe.jsx)("div",{className:"cg-dialog-actions",children:(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u5173\u95ED"})})]})}function Cl(t){let{node:e}=t,a=e.type==="markdown"||e.type==="plainText"||e.type==="image"||e.type==="media",o=ro(e.id),s=t.backendReady?ca(e.id):"";return(0,oe.jsxs)("div",{className:"cg-dialog cg-dialog-wide",role:"dialog","aria-label":"\u9884\u89C8",children:[(0,oe.jsxs)("h3",{children:[la[e.type]," ",e.title]}),(0,oe.jsxs)("p",{children:[e.path??"\u753B\u677F\u5185\u4FBF\u7B7E",e.unverified?" \xB7 \u8DEF\u5F84\u672A\u9A8C\u8BC1":""]}),e.type==="markdown"||e.type==="plainText"?(0,oe.jsx)("div",{className:"cg-preview-body",children:e.content||"\uFF08\u7A7A\u5185\u5BB9\uFF09"}):null,e.type==="image"?s?(0,oe.jsx)("img",{className:"cg-preview-img",src:s,alt:e.title,loading:"lazy",decoding:"async"}):(0,oe.jsxs)("div",{className:"cg-ph",style:{minHeight:180,background:`linear-gradient(145deg, hsl(${o} 42% 46%), hsl(${(o+40)%360} 38% 32%))`},children:["\u{1F5BC}",(0,oe.jsx)("small",{children:"\u542F\u7528\u753B\u677F\u6A21\u5757\u540E\u53EF\u9884\u89C8\u771F\u5B9E\u56FE\u7247"})]}):null,e.type==="media"?s?/\.(mp3|wav|m4a|aac|ogg)$/i.test(e.path??"")?(0,oe.jsx)("audio",{className:"cg-preview-media",src:s,controls:!0,preload:"metadata"}):(0,oe.jsx)("video",{className:"cg-preview-media",src:s,controls:!0,preload:"metadata"}):(0,oe.jsxs)("div",{className:"cg-ph",style:{minHeight:160,background:`linear-gradient(160deg, hsl(${o} 35% 38%), hsl(${(o+60)%360} 30% 22%))`},children:["\u25B6",(0,oe.jsx)("small",{children:"\u542F\u7528\u753B\u677F\u6A21\u5757\u540E\u53EF\u64AD\u653E\u771F\u5B9E\u6587\u4EF6"})]}):null,a?null:(0,oe.jsxs)("div",{children:[(0,oe.jsx)("p",{children:"\u6B64\u7C7B\u7D20\u6750\u6682\u4E0D\u5728\u6D4F\u89C8\u5668\u5185\u6E32\u67D3\uFF08Word / PDF / \u6587\u4EF6\u5939\u7B49\uFF09\u3002"}),e.path?(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>t.onOpen(e.id),children:"\u7528\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00"}):null]}),(0,oe.jsx)("div",{className:"cg-dialog-actions",children:(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:t.onClose,children:"\u5173\u95ED"})})]})}function El(t){return(0,oe.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u786E\u8BA4\u79FB\u9664",children:[(0,oe.jsx)("h3",{children:"\u4ECE\u753B\u677F\u79FB\u9664\uFF1F"}),(0,oe.jsxs)("p",{children:["\u5C06\u79FB\u9664\u300C",t.node.title,"\u300D\u3002\u53EA\u4ECE\u753B\u677F\u62FF\u6389\uFF0C\u4E0D\u5220\u9664\u6E90\u6587\u4EF6",t.node.path?`\uFF08${t.node.path}\uFF09`:"","\u3002"]}),(0,oe.jsxs)("div",{className:"cg-dialog-actions",children:[(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:t.onConfirm,children:"\u79FB\u9664"})]})]})}function Il(t){let[e,a]=(0,Tt.useState)(t.node.scope==="global"?"global":t.node.scope==="project"?"project":"session");return(0,oe.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u8FC1\u79FB\u5F52\u5C5E",children:[(0,oe.jsx)("h3",{children:"\u8FC1\u79FB\u5F52\u5C5E"}),(0,oe.jsxs)("p",{children:["\u300C",t.node.title,"\u300D\u5C06\u79FB\u52A8\u5230\uFF1A"]}),(0,oe.jsxs)("div",{className:"cg-migrate-opts",children:[(0,oe.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="session"?" cg-on":""}`,onClick:()=>a("session"),children:[(0,oe.jsx)("strong",{children:"\u{1F4AC} \u672C\u4F1A\u8BDD"}),(0,oe.jsx)("small",{children:"\u5F52\u5F53\u524D\u4F1A\u8BDD\uFF08\u5728\u522B\u7684\u4F1A\u8BDD\u6253\u5F00\u753B\u677F\u770B\u4E0D\u5230\u5B83\uFF0C\u9664\u975E\u5207\u300C\u6240\u6709\u9879\u76EE\u300D\uFF09"})]}),(0,oe.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="project"?" cg-on":""}`,onClick:()=>a("project"),children:[(0,oe.jsx)("strong",{children:"\u{1F4C1} \u672C\u9879\u76EE"}),(0,oe.jsx)("small",{children:"\u9879\u76EE\u7EA7\uFF1A\u5F53\u524D\u9879\u76EE\u5185\u6240\u6709\u4F1A\u8BDD\u90FD\u80FD\u770B\u5230"})]}),(0,oe.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="global"?" cg-on":""}`,onClick:()=>a("global"),children:[(0,oe.jsx)("strong",{children:"\u{1F310} \u6240\u6709\u9879\u76EE\u53EF\u89C1"}),(0,oe.jsx)("small",{children:"\u5168\u5C40\uFF1A\u4EFB\u4F55\u4F1A\u8BDD\u3001\u4EFB\u4F55\u89C6\u89D2\u90FD\u80FD\u770B\u5230"})]})]}),(0,oe.jsxs)("div",{className:"cg-dialog-actions",children:[(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,oe.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:()=>t.onMigrate(t.node.id,e),children:"\u8FC1\u79FB"})]})]})}function Bn(t){return t.kind?(0,oe.jsxs)("div",{className:"cg-overlay",onMouseDown:e=>{e.target===e.currentTarget&&t.onClose()},children:[t.kind==="path"?(0,oe.jsx)(Tl,{onClose:t.onClose,onPath:t.onPath}):null,t.kind==="note"?(0,oe.jsx)(Nl,{onClose:t.onClose,onNote:t.onNote}):null,t.kind==="catalog"?(0,oe.jsx)(Sl,{onClose:t.onClose,onCatalog:t.onCatalog,backendReady:t.backendReady,sessionId:t.sessionId}):null,t.kind==="preview"&&t.previewNode?(0,oe.jsx)(Cl,{node:t.previewNode,onClose:t.onClose,onToast:t.onToast,backendReady:t.backendReady,onOpen:t.onOpen}):null,t.kind==="remove"&&t.removeNode?(0,oe.jsx)(El,{node:t.removeNode,onClose:t.onClose,onConfirm:t.onConfirmRemove}):null,t.kind==="migrate"&&t.migrateNode?(0,oe.jsx)(Il,{node:t.migrateNode,onClose:t.onClose,onMigrate:t.onMigrate}):null]}):null}function Pl(t){try{localStorage.setItem(jo,JSON.stringify(t))}catch{}}function _n(t){let e=null,a=()=>{e!==null&&(clearTimeout(e),e=null)},o=s=>{typeof s=="function"?s():Pl(s)};return{schedule(s){a(),e=setTimeout(()=>{e=null,o(s)},t)},flush(s){a(),o(s)},cancel:a}}var rt=require("react/jsx-runtime");function qn(t){let e=1;for(let a of t)a.placement.zIndex>e&&(e=a.placement.zIndex);return e+1}function Ml(t,e,a,o){let s=Mo[e],i=t.length%6*28;return{x:a+i,y:o+i+s.height*0}}function Un(t){let e=(0,ue.useRef)(!1),a=(0,ue.useRef)(0),[o,s]=(0,ue.useState)(!1),[i,l]=(0,ue.useState)("idle"),[c,g]=(0,ue.useState)([]),[b,m]=(0,ue.useState)(Lo),[h,k]=(0,ue.useState)("session"),[A,F]=(0,ue.useState)(null),[M,B]=(0,ue.useState)(null),[S,V]=(0,ue.useState)(""),[y,D]=(0,ue.useState)(""),[w,O]=(0,ue.useState)(null),[X,C]=(0,ue.useState)(null),[u,r]=(0,ue.useState)(()=>new Set),[v,_]=(0,ue.useState)(()=>new Set),[L,G]=(0,ue.useState)(null),[q,ce]=(0,ue.useState)({w:800,h:560}),Re=(0,ue.useRef)(_n(500)).current,Te=(0,ue.useRef)(null),Ce=(0,ue.useRef)(null),Q=(0,ue.useRef)(null),Ye=(0,ue.useRef)(null),Ie=(0,ue.useRef)({version:1,nodes:c,viewport:b,viewMode:h,lastAiNodeId:A});Ie.current={version:1,nodes:c,viewport:b,viewMode:h,lastAiNodeId:A};let be=(0,ue.useRef)(c);be.current=c;let j=typeof t.sessionId=="string"?t.sessionId:"session-local",[ge,re]=(0,ue.useState)(so),[Ue,Le]=(0,ue.useState)(yn);(0,ue.useEffect)(()=>{let Y=!1;return(async()=>{let ae=await jn();if(Y)return;if(!ae){l("offline");return}let le=await Rn(j);Y||(le!==null&&(a.current=le.rev,Ie.current=le,g(le.nodes),m(le.viewport),k(le.viewMode),le.lastAiNodeId&&F(le.lastAiNodeId),le.currentProjectId&&re(le.currentProjectId),le.currentProjectLabel&&Le(le.currentProjectLabel)),e.current=!0,s(!0),l("idle"))})(),()=>{Y=!0}},[j]);let Ae=(0,ue.useRef)(Promise.resolve()),Ee=(0,ue.useCallback)(Y=>{l("saving"),Ae.current=Ae.current.catch(()=>{}).then(()=>Mn(Y,a.current,j)).then(ae=>{ae.ok&&typeof ae.rev=="number"?(a.current=ae.rev,l("idle")):ae.conflict?(l("conflict"),we("\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u52A0\u8F7D\u6700\u65B0\u5185\u5BB9")):l("offline")})},[j]),Ne=(0,ue.useCallback)(Y=>{let ae={version:1,nodes:Y.nodes??Ie.current.nodes,viewport:Y.viewport??Ie.current.viewport,viewMode:Y.viewMode??Ie.current.viewMode,lastAiNodeId:Y.lastAiNodeId===void 0?Ie.current.lastAiNodeId:Y.lastAiNodeId};Ie.current=ae,Y.nodes!==void 0||Y.lastAiNodeId!==void 0?Ee(ae):Re.schedule(()=>Ee(ae))},[Ee,Re]);(0,ue.useEffect)(()=>()=>{Re.cancel(),Te.current&&clearTimeout(Te.current),Ce.current&&clearTimeout(Ce.current),Q.current&&clearTimeout(Q.current)},[Re]);let ye=(0,ue.useRef)(new Set);(0,ue.useEffect)(()=>{if(!o)return;let Y=c.filter(p=>(p.type==="markdown"||p.type==="plainText")&&typeof p.path=="string"&&p.path!==""&&!p.content&&!ye.current.has(p.id));if(Y.length===0)return;let ae=!1,le=(p,U)=>{(async()=>{try{let ke=await fetch(ca(p.id));if(!ke.ok){U<3&&!ae&&setTimeout(()=>{ae||le(p,U+1)},500*(U+1));return}let $e=await ke.text();if(ae)return;ye.current.add(p.id);let xt=$e.length>120*1024?`${$e.slice(0,120*1024)}
\u2026\uFF08\u5185\u5BB9\u8FC7\u957F\uFF0C\u5DF2\u622A\u65AD\uFF09`:$e,Pt=be.current.map(At=>At.id===p.id?{...At,content:xt}:At);be.current=Pt,g(Pt),Ne({nodes:Pt})}catch{}})()};return Y.forEach(p=>le(p,0)),()=>{ae=!0}},[o,c]),(0,ue.useEffect)(()=>{let Y=setTimeout(()=>D(S),180);return()=>clearTimeout(Y)},[S]),(0,ue.useEffect)(()=>{let Y=Ye.current;if(!Y)return;let ae=Y.querySelector(".cg-stage");if(!(ae instanceof HTMLElement))return;let le=new ResizeObserver(()=>{let p=ae.getBoundingClientRect();ce({w:p.width,h:p.height})});return le.observe(ae),()=>le.disconnect()},[]);let we=(0,ue.useCallback)(Y=>{G(Y),Q.current&&clearTimeout(Q.current),Q.current=setTimeout(()=>G(null),1600)},[]),Qe=(0,ue.useCallback)(Y=>{_(new Set([Y])),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>_(new Set),1800)},[]),Me=(0,ue.useMemo)(()=>c.filter(Y=>Tn(Y,h,j,ge)),[c,h,j,ge]),Ke=(0,ue.useMemo)(()=>{let Y=new Set,ae=y.trim();if(!ae)return Y;for(let le of Me)$o(le,ae)&&Y.add(le.id);return Y},[y,Me]),R=y.trim().length>0,H=b.scale<.36,De=X?c.find(Y=>Y.id===X)??null:null,Pe=De,We=(0,ue.useCallback)((Y,ae)=>{m(Y),ae&&Ne({viewport:Y})},[Ne]),E=(0,ue.useCallback)(Y=>{k(Y),Ne({viewMode:Y})},[Ne]),Z=(0,ue.useCallback)((Y,ae)=>{g(Y),Ne({...ae,nodes:Y})},[Ne]),ve=(0,ue.useCallback)(Y=>{let{x:ae,y:le,...p}=Y,U=xn(),ke=Mo[p.type],$e=Ml(c,p.type,ae??360,le??160),xt={...p,id:U,createdAt:Date.now(),placement:{x:ae??$e.x,y:le??$e.y,width:ke.width,height:ke.height,zIndex:qn(c)}},Pt=[...c,xt];return Z(Pt),B(U),Qe(U),xt},[c,Qe,Z]),Ve=(0,ue.useCallback)(Y=>{let ae=no(Y.path);if(!ae)return;let le=io(ae);ve({type:le,title:Do(ae),scope:"session",scopeLabel:oo,sessionId:j,projectId:ge,path:ae,unverified:!0,meta:{mtime:"\u672A\u9A8C\u8BC1"}}),O(null),we(`\u5DF2\u4E0A\u677F\uFF1A${Do(ae)}`)},[ve,ge,j,we]),z=(0,ue.useCallback)(Y=>{ve({type:Y.type,title:Y.title,scope:"session",scopeLabel:oo,sessionId:j,projectId:ge,content:Y.content}),O(null),we("\u4FBF\u7B7E\u5DF2\u4E0A\u677F")},[ve,ge,j,we]),Se=(0,ue.useCallback)((Y,ae,le,p)=>{ve({type:le,title:Y,scope:"session",scopeLabel:oo,sessionId:j,projectId:ge,path:ae,unverified:!0,meta:p?{size:p,mtime:"\u672A\u9A8C\u8BC1"}:void 0}),O(null),we(`\u5DF2\u4E0A\u677F\uFF1A${Y}`)},[ve,ge,j,we]),lt=(0,ue.useCallback)((Y,ae,le,p)=>{g(U=>{let ke=U.map($e=>$e.id!==Y?$e:{...$e,placement:{...$e.placement,x:ae,y:le}});return p&&Ne({nodes:ke}),ke})},[Ne]),Je=(0,ue.useCallback)((Y,ae,le,p)=>{g(U=>{let ke=U.map($e=>$e.id!==Y?$e:{...$e,placement:{...$e.placement,width:ae,height:le}});return p&&Ne({nodes:ke}),ke})},[Ne]),ut=(0,ue.useCallback)(Y=>{B(Y),Y&&g(ae=>{let le=qn(ae);return ae.map(p=>p.id===Y?{...p,placement:{...p.placement,zIndex:le}}:p)})},[]),fe=(0,ue.useCallback)((Y,ae)=>{g(le=>{let p=le.map(U=>U.id===Y?{...U,content:ae}:U);return Ne({nodes:p}),p})},[Ne]),nt=(0,ue.useCallback)(async(Y,ae)=>{let le=c.find(ke=>ke.id===Y);if(!le)return;let p=ae==="id"?le.id:ae==="title"?le.title:ae==="path"?le.path??"":kn(le);if(!p){we("\u6CA1\u6709\u53EF\u590D\u5236\u7684\u8DEF\u5F84");return}let U=await In(p);we(U?ae==="id"?"\u5DF2\u590D\u5236 ID":ae==="title"?"\u5DF2\u590D\u5236\u6807\u9898":ae==="path"?"\u5DF2\u590D\u5236\u8DEF\u5F84":"\u5DF2\u590D\u5236\u5F15\u7528\u4E32":"\u590D\u5236\u5931\u8D25")},[c,we]),wt=(0,ue.useCallback)(Y=>{C(Y),O("remove")},[]),I=(0,ue.useCallback)(async Y=>{let ae=c.find(p=>p.id===Y);if(!ae?.path){we("\u8BE5\u8282\u70B9\u6CA1\u6709\u672C\u5730\u8DEF\u5F84\u53EF\u6253\u5F00");return}let le=await Dn(Y);we(le.ok?`\u5DF2\u7528\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00\uFF1A${ae.title}`:`\u6253\u5F00\u5931\u8D25\uFF1A${le.error??"\u672A\u77E5\u9519\u8BEF"}`)},[c,we]),me=(0,ue.useCallback)(async Y=>{let ae=c.find(p=>p.id===Y);if(!ae?.path){we("\u8BE5\u8282\u70B9\u6CA1\u6709\u672C\u5730\u8DEF\u5F84\u53EF\u6253\u5F00");return}let le=await On(Y);we(le.ok?`\u5DF2\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u6240\u5728\u6587\u4EF6\u5939\uFF1A${ae.title}`:`\u6253\u5F00\u5931\u8D25\uFF1A${le.error??"\u672A\u77E5\u9519\u8BEF"}`)},[c,we]),it=(0,ue.useCallback)(async Y=>{let ae=c.find(p=>p.id===Y);if(!ae||typeof ae.content!="string"||ae.content===""){we("\u8BE5\u8282\u70B9\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u5185\u5BB9");return}let le=await Pn(ae.title,ae.content);le.ok?we(le.message?`\u5DF2\u4FDD\u5B58\uFF1A${ae.title}\uFF08${le.message}\uFF09`:`\u5DF2\u4FDD\u5B58\uFF1A${ae.title}`):le.canceled||we(`\u4FDD\u5B58\u5931\u8D25\uFF1A${le.message??"\u672A\u77E5\u9519\u8BEF"}`)},[c,we]),$=(0,ue.useCallback)(Y=>{C(Y),O("migrate")},[]),T=(0,ue.useCallback)(async(Y,ae)=>{if(!e.current){we("\u753B\u677F\u672A\u8FDE\u63A5\u540E\u7AEF\uFF0C\u65E0\u6CD5\u8FC1\u79FB\u5F52\u5C5E");return}let le=await $n(Y,ae,j,a.current);if(!le.ok){we(le.conflict?"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5":`\u8FC1\u79FB\u5931\u8D25\uFF1A${le.error??"\u672A\u77E5\u9519\u8BEF"}`);return}le.node&&typeof le.rev=="number"&&(a.current=le.rev,g(p=>p.map(ke=>ke.id===Y?{...ke,...le.node}:ke))),O(null),we("\u5F52\u5C5E\u5DF2\u8FC1\u79FB")},[e,j,we]),ne=(0,ue.useCallback)(Y=>{let le=c.find(p=>p.sessionId===Y)?.sessionName??zo(Y);we(`\u6B63\u5728\u8DF3\u8F6C\u5230\u4F1A\u8BDD\uFF1A${le}`),setTimeout(()=>{t.openSession?.(Y)},600)},[c,t.openSession,we]),Oe=(0,ue.useCallback)(()=>{if(!X)return;let Y=c.filter(le=>le.id!==X),ae=A===X?null:A;Z(Y,{lastAiNodeId:ae}),F(ae),B(le=>le===X?null:le),C(null),O(null),we("\u5DF2\u4ECE\u753B\u677F\u79FB\u9664")},[X,A,c,we,Z]),Be=(0,ue.useCallback)(Y=>{C(Y),O("preview")},[]),at=(0,ue.useRef)(b),St=(0,ue.useRef)(q),Ze=(0,ue.useRef)(Me);at.current=b,St.current=q,Ze.current=Me,(0,ue.useEffect)(()=>{let Y=y.trim();if(!Y){r(new Set);return}let ae=Ze.current.filter(le=>$o(le,Y));if(r(new Set(ae.map(le=>le.id))),Te.current&&clearTimeout(Te.current),Te.current=setTimeout(()=>r(new Set),1400),ae[0]){let le=at.current,p=St.current;We(Cn(ae[0],le,p.w,p.h),!1),B(ae[0].id)}},[y,We]);let Ct=(0,ue.useCallback)(()=>{O(null),C(null)},[]);return(0,rt.jsxs)("div",{className:"cg-root",ref:Ye,children:[(0,rt.jsxs)("div",{className:"cg-toolbar",children:[(0,rt.jsxs)("div",{className:"cg-toolbar-group",children:[(0,rt.jsx)("span",{className:"cg-meta",children:"\u89C6\u89D2"}),(0,rt.jsxs)("div",{className:"cg-seg",role:"tablist","aria-label":"\u89C6\u89D2\u7B5B\u9009",children:[(0,rt.jsx)("button",{type:"button",className:h==="session"?"cg-on":"",onClick:()=>E("session"),children:"\u672C\u4F1A\u8BDD"}),(0,rt.jsx)("button",{type:"button",className:h==="project"?"cg-on":"",onClick:()=>E("project"),children:"\u672C\u9879\u76EE"}),(0,rt.jsx)("button",{type:"button",className:h==="global"?"cg-on":"",onClick:()=>E("global"),children:"\u6240\u6709\u9879\u76EE"})]})]}),(0,rt.jsxs)("label",{className:"cg-search",children:[(0,rt.jsx)(Ta.IconSearchOutline16,{}),(0,rt.jsx)("input",{value:S,placeholder:"\u641C\u7D22\u753B\u677F\u8282\u70B9\u2026",onChange:Y=>V(Y.target.value)})]}),(0,rt.jsxs)("div",{className:"cg-toolbar-group",children:[(0,rt.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("path"),children:[(0,rt.jsx)(Ta.IconPlusOutline16,{})," \u8DEF\u5F84\u4E0A\u677F"]}),(0,rt.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("note"),children:[(0,rt.jsx)(Ta.IconPlusOutline16,{})," \u4FBF\u7B7E"]}),(0,rt.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("catalog"),children:[(0,rt.jsx)(Ta.IconPlusOutline16,{})," \u641C\u7D22\u4E0A\u677F"]})]}),(0,rt.jsx)("div",{className:"cg-toolbar-sep"}),(0,rt.jsx)("div",{className:"cg-toolbar-group",children:(0,rt.jsxs)("button",{type:"button",className:"cg-btn cg-ghost cg-scale",title:"\u590D\u4F4D\u89C6\u89D2",onClick:()=>We({...Lo},!0),children:[Math.round(b.scale*100),"%"]})}),(0,rt.jsxs)("span",{className:"cg-meta",children:[Me.length,"/",c.length," \u5F20",R?` \xB7 \u547D\u4E2D ${Ke.size}`:""," \xB7 ",h==="session"?"\u672C\u4F1A\u8BDD":h==="project"?Ue:"\u6240\u6709\u9879\u76EE",o?i==="conflict"?" \xB7 \u26A0\uFE0F \u51B2\u7A81\uFF0C\u8BF7\u5237\u65B0":i==="saving"?" \xB7 \u4FDD\u5B58\u4E2D":i==="offline"?" \xB7 \u672A\u8FDE\u63A5\u540E\u7AEF":" \xB7 \u5DF2\u540C\u6B65":" \xB7 \u4EC5\u672C\u5730\u4FDD\u5B58"]})]}),(0,rt.jsx)(Hn,{nodes:Me,viewport:b,lod:H,selectedId:M,flashIds:u,highlightIds:v,searchActive:R,matchIds:Ke,currentSessionId:j,backendReady:o,openSession:ne,onViewportChange:We,onSelect:ut,onMoveNode:lt,onResizeNode:Je,onPreview:Be,onOpen:I,onOpenFolder:me,onSave:it,onMigrate:$,onCopy:nt,onAskRemove:wt,onChangeContent:fe}),(0,rt.jsx)(Bn,{kind:w,previewNode:w==="preview"?De:null,removeNode:w==="remove"?Pe:null,migrateNode:w==="migrate"&&X?c.find(Y=>Y.id===X)??null:null,backendReady:o,sessionId:j,onClose:Ct,onPath:Ve,onNote:z,onCatalog:Se,onConfirmRemove:Oe,onToast:we,onOpen:I,onMigrate:T}),L?(0,rt.jsx)("div",{className:"cg-toast",role:"status",children:L}):null]})}var Vn=`/**
 * \u65E0\u9650\u753B\u677F\uFF08canvas-grok\uFF09\u6837\u5F0F\u3002\u7C7B\u540D\u524D\u7F00 cg-\u3002
 * \u989C\u8272\u53EA\u7528 --dsw-alias-* / --dsw-static-* token\uFF0C\u6DF1\u6D45\u8272\u81EA\u52A8\u9002\u914D\u3002
 */

.cg-root {
  flex: 1;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsw-font-family, inherit);
  font-size: 13px;
  background: var(--dsw-alias-bg-base);
}

/* ---------- \u9876\u680F ---------- */

.cg-toolbar {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base));
  z-index: 3;
}

.cg-toolbar-group {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.cg-toolbar-sep {
  width: 1px;
  align-self: stretch;
  margin: 2px 2px;
  background: var(--dsw-alias-interactive-bg-hover);
}

.cg-seg {
  display: inline-flex;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  overflow: hidden;
}

.cg-seg button,
.cg-btn {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  line-height: 1.2;
  padding: 5px 9px;
  cursor: pointer;
  border-radius: 7px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.cg-seg button {
  border-radius: 0;
}

.cg-seg button + button {
  border-left: 1px solid var(--dsw-alias-interactive-bg-hover);
}

/* \u641C\u7D22\u4E0A\u677F\u8303\u56F4\u5207\u6362\uFF082026-08-14 \u65B0\u589E\uFF1A\u672C\u673A\u5168\u90E8 / \u5F53\u524D\u9879\u76EE\uFF09 */
.cg-scope {
  margin: 2px 0 6px;
}

/* \u8FC1\u79FB\u5F52\u5C5E\u5BF9\u8BDD\u6846\uFF082026-08-14\uFF1A\u4E09\u6863\u53BB\u5411\u5355\u9009\u5361\u7247\uFF09 */
.cg-migrate-opts {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 8px 0;
}

.cg-migrate-opt {
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  background: transparent;
  color: var(--dsw-alias-label-primary);
  border-radius: 8px;
  padding: 8px 10px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cg-migrate-opt:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.cg-migrate-opt.cg-on {
  border-color: var(--dsw-alias-brand-primary);
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary-foreground);
}

.cg-migrate-opt small {
  font-size: 11px;
  opacity: 0.85;
}

.cg-seg button:hover,
.cg-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.cg-seg button.cg-on,
.cg-btn.cg-primary {
  /* \u5B8C\u5168\u5BF9\u9F50 DSH \u5B98\u65B9\u4E3B\u6309\u94AE\uFF08ui-primitives/Button.module.css .primary\uFF09\uFF1A
     background=button-primary-fill + color=label-primary-foreground\u3002
     \u26A0\uFE0F \u8E29\u5751\u8BB0\u5F55\uFF08\u7528\u6237\u53CD\u9988 2026-08-13 \u4E24\u8F6E\uFF09\uFF1A\u66FE\u7528
     var(--dsw-alias-on-brand,#fff) fallback \u767D\u5B57\uFF08\u8BE5 token \u4E0D\u5B58\u5728\uFF09\u4E0E
     brand-primary-invert\uFF08\u4E24\u4E3B\u9898\u4E0B\u4E0E brand-primary \u540C\u503C\uFF0C\u540D\u4E0D\u526F\u5B9E\uFF09\uFF0C
     \u90FD\u5BFC\u81F4\u6DF1\u8272\u4E3B\u9898\u6D45\u5E95\u6D45\u5B57\u770B\u4E0D\u89C1\u3002 */
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}

.cg-seg button.cg-on:hover,
.cg-btn.cg-primary:hover {
  background: var(--dsw-alias-button-primary-hover);
}

.cg-btn.cg-ghost {
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
}

.cg-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.cg-search {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 160px;
  flex: 1 1 180px;
  max-width: 280px;
  padding: 4px 8px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}

.cg-search input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
}

.cg-search input::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.cg-meta {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  white-space: nowrap;
}

.cg-scale {
  font-variant-numeric: tabular-nums;
  min-width: 40px;
  text-align: center;
}

/* ---------- \u753B\u5E03\u89C6\u53E3 ---------- */

.cg-stage {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  touch-action: none;
  user-select: none;
  cursor: grab;
  /* \u70B9\u9635\u7F51\u683C\uFF1A\u80CC\u666F\u5C3A\u5BF8/\u4F4D\u79FB\u7531 JS \u6309\u89C6\u53E3\u5199\u5165\uFF0C\u8D70\u5408\u6210\u5C42\u4E0D\u91CD\u6392 */
  background-color: var(--dsw-alias-bg-base);
  background-image: radial-gradient(
    circle at 1px 1px,
    var(--dsw-alias-interactive-bg-hover) 1px,
    transparent 0
  );
}

.cg-stage.cg-panning {
  cursor: grabbing;
}

.cg-stage.cg-space {
  cursor: grab;
}

.cg-world {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  will-change: transform;
}

/* AI \u6295\u653E\u533A\uFF1A\u4E16\u754C\u5750\u6807\u91CC\u7684\u56FA\u5B9A\u865A\u7EBF\u6846 */
.cg-ai-zone {
  position: absolute;
  box-sizing: border-box;
  border: 1.5px dashed color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent);
  border-radius: 12px;
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 6%, transparent);
  pointer-events: none;
}

.cg-ai-zone-label {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--dsw-alias-brand-primary);
  opacity: 0.85;
}

/* ---------- \u5361\u7247 ---------- */

.cg-card {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 10px;
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base));
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent);
  overflow: hidden;
  /* \u5361\u7247\u81EA\u8EAB\u4E5F\u662F\u5408\u6210\u5C42\uFF0C\u62D6\u52A8\u65F6\u4E0D\u5E26\u52A8\u6574\u677F\u91CD\u6392 */
  will-change: transform;
  contain: layout paint;
}

.cg-card.cg-selected {
  border-color: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-brand-primary);
}

.cg-card.cg-dimmed {
  opacity: 0.28;
}

.cg-card.cg-flash {
  animation: cg-flash 1.4s ease;
}

.cg-card.cg-fresh {
  animation: cg-fresh 1.8s ease;
}

.cg-card.cg-ai {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, var(--dsw-alias-interactive-bg-hover));
}

/* \u53F3\u4E0B\u89D2\u7F29\u653E\u624B\u67C4\uFF1Ahover \u5361\u7247\u65F6\u663E\u793A\uFF1B\u62D6\u52A8\u6539\u53D8\u5361\u7247\u5BBD\u9AD8\u3002 */
.cg-resize-handle {
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 5;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 0;
  background:
    linear-gradient(135deg, transparent 42%, var(--dsw-alias-label-secondary) 46%, var(--dsw-alias-label-secondary) 54%, transparent 58%),
    linear-gradient(135deg, transparent 62%, var(--dsw-alias-label-secondary) 66%, var(--dsw-alias-label-secondary) 74%, transparent 78%);
  opacity: 0;
  cursor: nwse-resize;
  transition: opacity 0.15s ease;
}
.cg-card:hover .cg-resize-handle,
.cg-resize-handle:active {
  opacity: 0.85;
}

@keyframes cg-flash {
  0%, 100% { box-shadow: none; }
  20%, 60% {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 70%, transparent);
  }
}

@keyframes cg-fresh {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--dsw-alias-brand-primary) 50%, transparent); }
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: none; }
}

.cg-card-head {
  flex: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  min-height: 32px;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  cursor: grab;
  background: color-mix(in srgb, var(--dsw-alias-interactive-bg-hover) 35%, transparent);
}

.cg-card.cg-dragging .cg-card-head {
  cursor: grabbing;
}

.cg-drag {
  flex: none;
  color: var(--dsw-alias-label-tertiary);
  letter-spacing: -1px;
  font-size: 12px;
  line-height: 1;
}

.cg-type-glyph {
  flex: none;
  font-size: 14px;
  line-height: 1;
}

.cg-card-title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 12px;
}

.cg-badges {
  flex: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.cg-badge {
  font-size: 10px;
  line-height: 1.3;
  padding: 1px 5px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
  max-width: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cg-badge-ai {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.cg-badge-warn {
  background: color-mix(in srgb, var(--dsw-alias-state-warning-primary, #b8860b) 16%, transparent);
  color: var(--dsw-alias-state-warning-primary, #b8860b);
}

.cg-card-body {
  flex: 1;
  min-height: 0;
  padding: 8px;
  overflow: hidden;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cg-card-path {
  font-family: var(--dsw-font-family-mono, ui-monospace, Menlo, monospace);
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cg-card-meta {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.cg-editor {
  flex: 1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  padding: 6px 8px;
  font: inherit;
  font-family: var(--dsw-font-family-mono, ui-monospace, Menlo, monospace);
  font-size: 11px;
  line-height: 1.55;
  outline: none;
}

.cg-editor:focus {
  border-color: var(--dsw-alias-brand-primary);
}

/* \u56FE\u7247 / \u97F3\u89C6\u9891\u5360\u4F4D\u9884\u89C8 */
.cg-ph {
  flex: 1;
  min-height: 64px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--dsw-alias-label-primary);
  font-size: 22px;
  overflow: hidden;
}

.cg-ph small {
  font-size: 11px;
  opacity: 0.8;
}

/* \u5361\u7247\u5185\u771F\u5B9E\u5A92\u4F53\u6E32\u67D3\uFF082026-08-14\uFF1A\u540E\u7AEF\u53EF\u7528\u65F6\u56FE\u7247/\u97F3\u89C6\u9891\u76F4\u63A5\u663E\u793A\uFF0C
   \u66FF\u4EE3\u9759\u6001\u5360\u4F4D\uFF09\u3002\u56FE\u7247 cover \u6491\u6EE1\u9884\u89C8\u533A\uFF1B\u97F3\u89C6\u9891\u81EA\u9002\u5E94\u9AD8\u5EA6 + \u5706\u89D2\u3002 */
.cg-card-media-wrap {
  flex: 1;
  min-height: 64px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-interactive-bg-hover);
}

.cg-card-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.cg-card-media-wrap audio.cg-card-media {
  height: 44px;
  object-fit: contain;
  margin: 0 8px;
}

.cg-card-media-wrap video.cg-card-media {
  background: #000;
}

.cg-file-ext {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--dsw-alias-interactive-bg-hover);
  text-transform: uppercase;
}

/* LOD\uFF1A\u6574\u5361\u53D8\u6210\u5927\u56FE\u6807 + \u6807\u9898 */
.cg-lod {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 28px;
  pointer-events: none;
}

.cg-lod span {
  font-size: 11px;
  font-weight: 600;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cg-card-foot {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 4px 6px 6px;
  border-top: 1px solid var(--dsw-alias-interactive-bg-hover);
}

.cg-card-foot button {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 11px;
  padding: 3px 6px;
  border-radius: 5px;
  cursor: pointer;
}

.cg-card-foot button:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

/* \u300C\u6253\u5F00\u300D\u6309\u94AE\uFF1A\u4E3B\u64CD\u4F5C\u5F3A\u8C03\uFF082026-08-14 \u65B0\u589E\u7CFB\u7EDF\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00\uFF09 */
.cg-card-foot button.cg-open {
  color: var(--dsw-alias-brand-primary);
  font-weight: 600;
}

.cg-card-foot button.cg-danger:hover {
  color: var(--dsw-alias-state-error-primary);
}

/* ---------- \u5BF9\u8BDD\u6846 / \u9884\u89C8 ---------- */

.cg-overlay {
  position: absolute;
  inset: 0;
  z-index: 8;
  background: color-mix(in srgb, var(--dsw-alias-label-primary) 28%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.cg-dialog {
  width: min(480px, 100%);
  max-height: min(72vh, 640px);
  overflow: auto;
  box-sizing: border-box;
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base));
  color: var(--dsw-alias-label-primary);
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 12px;
  padding: 14px 16px 16px;
  box-shadow: 0 12px 40px color-mix(in srgb, var(--dsw-alias-label-primary) 18%, transparent);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cg-dialog.cg-dialog-wide {
  width: min(640px, 100%);
}

.cg-dialog h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 650;
}

.cg-dialog p {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  line-height: 1.55;
}

.cg-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* \u641C\u7D22\u4E0A\u677F\uFF1A\u5173\u952E\u5B57\u8F93\u5165\u6846 + \u300C\u641C\u7D22\u300D\u6309\u94AE\u6A2A\u6392\uFF082026-08-14 \u7528\u6237\u53CD\u9988\uFF1A
   \u8F93\u5165\u5373\u641C\u8BEF\u89E6\u53D1\u591A\uFF0C\u6539\u4E3A\u663E\u5F0F\u70B9\u6309\u94AE/\u56DE\u8F66\u624D\u641C\u7D22\uFF09\u3002\u8F93\u5165\u6846\u6491\u6EE1\u5269\u4F59\u5BBD\u5EA6\u3002 */
.cg-search-row {
  display: flex;
  gap: 6px;
}

.cg-search-row input {
  flex: 1;
  min-width: 0;
}

.cg-search-row .cg-btn {
  flex: none;
  white-space: nowrap;
}

.cg-field label {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.cg-field input,
.cg-field textarea,
.cg-field select {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  padding: 7px 9px;
  outline: none;
}

.cg-field textarea {
  min-height: 96px;
  resize: vertical;
  font-family: var(--dsw-font-family-mono, ui-monospace, Menlo, monospace);
}

.cg-field input:focus,
.cg-field textarea:focus,
.cg-field select:focus {
  border-color: var(--dsw-alias-brand-primary);
}

.cg-dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.cg-catalog {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 320px;
  overflow: auto;
}

.cg-catalog-row {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  width: 100%;
  appearance: none;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  font: inherit;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.cg-catalog-row:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.cg-catalog-row strong {
  display: block;
  font-size: 13px;
}

.cg-catalog-row small {
  display: block;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  font-family: var(--dsw-font-family-mono, ui-monospace, Menlo, monospace);
}

.cg-preview-body {
  max-height: 48vh;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: var(--dsw-font-family-mono, ui-monospace, Menlo, monospace);
  font-size: 12px;
  line-height: 1.6;
  padding: 10px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
}

.cg-hint {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

/* ---------- Toast ---------- */

.cg-toast {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  z-index: 9;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base));
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--dsw-alias-label-primary) 12%, transparent);
  pointer-events: none;
}

/* ---------- \u7A7A\u72B6\u6001\u63D0\u793A\uFF08\u753B\u5E03\u89D2\u843D\uFF09 ---------- */

.cg-hint-bar {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 2;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  pointer-events: none;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 80%, transparent);
  padding: 3px 8px;
  border-radius: 6px;
}
`;function Dl(){if(typeof document>"u")return()=>{};if(document.querySelector(`style[${Ro}]`)!==null)return()=>{};let e=document.createElement("style");return e.setAttribute(Ro,"1"),e.textContent=Vn,document.head.appendChild(e),()=>{e.remove()}}function Wn(t,e){let a=Dl(),o=e.id??"canvas-hub",s=e.label??"\u753B\u677F",i=e.order??80,l=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:o,order:i,label:()=>s},c=>Un({...c,t:e.t,openSession:e.openSession})));return()=>{l(),a()}}var Na="dsh-ui-filter-bar",Jn="dsh-memory-evolve:ui-settings:filter";function Ol(){try{return localStorage.getItem(Jn)==="off"?"off":"on"}catch{return"on"}}function zl(t){try{localStorage.setItem(Jn,t)}catch{}}function Kn(t){let e=document.documentElement;t==="on"?e.dataset.dshUiFilter="on":delete e.dataset.dshUiFilter}async function $l(){try{let t=await fetch("/memory-evolve/api/ui-settings/running",{cache:"no-store"});if(!t.ok)return{total:0,groups:[]};let e=await t.json();return Array.isArray(e.groups)?{total:e.total??0,groups:e.groups}:{total:e.total??0,groups:[]}}catch{return{total:0,groups:[]}}}function Gn(t){let e=Ol(),a=!1,o=!1,s=null,i=null,l=0,c={total:0,groups:[]},g=()=>{o||!a||l===0&&(l=requestAnimationFrame(()=>{if(l=0,o||!a)return;let M=document.getElementById(Na)?.querySelector('.dsh-ui-filter-btn[data-mode="on"]');M!=null&&(M.textContent=`${t.on} (${c.total})`)}))},b=()=>{if(o||!a)return;let M=document.querySelectorAll('div[role="treeitem"][aria-expanded]');for(let B of M){let S=B.getAttribute("aria-expanded")==="false",V=B.textContent??"",y=null,D=-1;for(let X of c.groups){let C=X.title??t.ungroupedLabel;C!==""&&V.startsWith(C)&&C.length>D&&(y=X,D=C.length)}let w=S&&y!==null&&y.running>0,O=B.querySelector(".dsh-ui-ws-run-badge");if(w){let X=t.runningLabel.replace("{count}",String(y.running));if(O!==null)O.textContent!==X&&(O.textContent=X);else{let C=document.createElement("span");C.className="dsh-ui-ws-run-badge",C.textContent=X,B.appendChild(C)}}else O!==null&&O.remove()}},m=()=>{o||!a||$l().then(M=>{o||!a||(c=M,g(),b())})},h=()=>{let M=document.createElement("div");M.id=Na,M.className="dsh-ui-filter-bar",M.setAttribute("role","group"),M.setAttribute("aria-label",t.barTitle),M.title=t.barTitle;let B=(S,V)=>{let y=document.createElement("button");return y.type="button",y.className=`dsh-ui-filter-btn${e===S?" dsh-ui-filter-btn-active":""}`,y.dataset.mode=S,y.textContent=V,y.setAttribute("aria-pressed",e===S?"true":"false"),y.addEventListener("click",()=>{if(!(o||!a)){e=S,Kn(e),zl(e);for(let D of M.querySelectorAll(".dsh-ui-filter-btn")){let w=D.dataset.mode===e;D.classList.toggle("dsh-ui-filter-btn-active",w),D.setAttribute("aria-pressed",w?"true":"false")}}}),y};return M.appendChild(B("on",t.on)),M.appendChild(B("off",t.off)),M},k=()=>{if(o||!a||document.getElementById(Na)!==null)return;let M=document.querySelector('[role="tree"]');M===null||M.parentNode===null||(M.parentNode.insertBefore(h(),M),g())},A=()=>{s!==null||o||(s=new MutationObserver(()=>{if(!(o||!a)){if(document.getElementById(Na)===null){k();return}b()}}),s.observe(document.body,{childList:!0,subtree:!0}))},F=()=>{i!==null||o||(i=setInterval(m,5e3))};return{setEnabled(M){o||(a=M,a?(Kn(e),k(),A(),F(),m()):(l!==0&&(cancelAnimationFrame(l),l=0),i!==null&&(clearInterval(i),i=null),s?.disconnect(),s=null,document.getElementById(Na)?.remove(),document.querySelectorAll(".dsh-ui-ws-run-badge").forEach(B=>B.remove()),delete document.documentElement.dataset.dshUiFilter))},dispose(){o=!0,l!==0&&(cancelAnimationFrame(l),l=0),i!==null&&(clearInterval(i),i=null),s?.disconnect(),s=null,document.getElementById(Na)?.remove(),document.querySelectorAll(".dsh-ui-ws-run-badge").forEach(M=>M.remove()),delete document.documentElement.dataset.dshUiFilter}}}var _o="data-dsh-ui-wide-chat";function Xn(){let t=!1;return{setEnabled(e){if(t)return;let a=document.documentElement;e?a.setAttribute(_o,"on"):a.removeAttribute(_o)},dispose(){t=!0,document.documentElement.removeAttribute(_o)}}}var qo="data-dsh-ui-wide-bubble";function Yn(){let t=!1;return{setEnabled(e){if(t)return;let a=document.documentElement;e?a.setAttribute(qo,"on"):a.removeAttribute(qo)},dispose(){t=!0,document.documentElement.removeAttribute(qo)}}}var Fl=2*Math.PI*5.5,Hl=30,Bl=40,_l="--dsw-alias-state-warn-primary",ql="--dsw-alias-state-error-primary";function Uo(){return[...document.querySelectorAll('button[aria-haspopup="dialog"] svg circle[stroke-dasharray]')]}function Ul(t){let e=Number.parseFloat((t.getAttribute("stroke-dasharray")??"").split(" ")[0]??"");return!Number.isFinite(e)||e<=0?null:Math.min(100,Math.round(e/Fl*100))}function Qn(t,e){let a=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return a===""?e:a}function Zn(){let t=!1,e=!1,a=null,o=()=>{if(e)return;let i=Qn(_l,"#d97706"),l=Qn(ql,"#dc2626");for(let c of Uo()){let g=Ul(c);if(g===null)continue;let b=g>=Bl?l:g>=Hl?i:null;b===null?c.style.removeProperty("stroke"):c.style.stroke=b}},s=()=>{a!==null||e||(a=new MutationObserver(()=>{o()}),a.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["stroke-dasharray"]}))};return{setEnabled(i){if(!e)if(t=i,t)o(),s();else{a?.disconnect(),a=null;for(let l of Uo())l.style.removeProperty("stroke")}},dispose(){e=!0,a?.disconnect(),a=null;for(let i of Uo())i.style.removeProperty("stroke")}}}var ei="/memory-evolve/mermaid/mermaid.min.js",ti="data-me-mermaid",Wo="data-me-mermaid-rendered",Ko="data-me-mermaid-failed",Vo,Vl=0,ai=new WeakMap;function Wl(){return Vo??=new Promise((t,e)=>{document.querySelector(`script[${ti}]`)?.remove();let a=document.createElement("script");a.src=ei,a.setAttribute(ti,"");let o=s=>{Vo=void 0,e(new Error(s))};a.onload=()=>{let s=window.mermaid;if(s===void 0){o("mermaid global missing after script load");return}s.initialize({startOnLoad:!1,securityLevel:"strict",suppressErrorRendering:!0,theme:Kl(),themeVariables:{background:"transparent"}}),t(s)},a.onerror=()=>o(`mermaid engine load failed: ${ei}`),document.head.appendChild(a)}),Vo}function Kl(){let t=getComputedStyle(document.body).backgroundColor,e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(t);return e===null?"base":(.299*Number(e[1])+.587*Number(e[2])+.114*Number(e[3]))/255<.5?"dark":"base"}function Jl(t){return t.querySelector('[class*="infostring"]')?.textContent?.trim().toLowerCase()==="mermaid"}function Gl(t,e){if(t.querySelector(".me-mermaid-error")!==null)return;let a=t.querySelector("pre");if(a===null)return;let o=document.createElement("div");o.className="me-mermaid-error";let s=e instanceof Error?(String(e.message).split(`
`)[0]??"").slice(0,80):"",i=(document.documentElement.lang??"").toLowerCase().startsWith("zh");o.textContent=i?`\u26A0 mermaid \u6E32\u67D3\u5931\u8D25${s===""?"":`\uFF1A${s}`}\uFF0C\u5DF2\u4FDD\u7559\u4EE3\u7801\uFF08\u53EF\u590D\u5236\u4FEE\u6B63\uFF09`:`\u26A0 mermaid render failed${s===""?"":`: ${s}`}, code kept`,a.insertAdjacentElement("beforebegin",o)}function Xl(t){let e=!1,a=t.split(`
`).map(o=>{let s=/^(\s*subgraph\s+)(.+?)\s*$/.exec(o);if(s!==null){let c=s[2];return!c.startsWith('"')&&!c.startsWith("[")&&/[（）()！？!?，。；：、""''【】《》]/.test(c)?(e=!0,`${s[1]}"${c.replace(/"/g,'\\"')}"`):o}let i=/^(\s*\S[^|]*?)\|([^|]*)\|(.*)$/.exec(o);if(i!==null&&i[1].includes("-->")&&!i[2].startsWith('"')&&!i[2].startsWith("'")){let c=oi(i[2]);return c!==i[2]?(e=!0,`${i[1]}|${c}|${i[3]}`):o}let l=/^(\s*\S+?\s*)(\[)([^\]]*)(\])(.*)$/.exec(o);if(l!==null&&!l[3].startsWith('"')&&!l[3].startsWith("'")&&/['"]/.test(l[3])){let c=oi(l[3]);if(c!==l[3])return e=!0,`${l[1]}${l[2]}${c}${l[4]}${l[5]}`}return o});return e?a.join(`
`):null}function oi(t){let e=!0,a=!0;return t.replace(/['"()]/g,o=>{if(o==="'"){let s=e?"\u2018":"\u2019";return e=!e,s}if(o==='"'){let s=a?"\u201C":"\u201D";return a=!a,s}return o==="("?"\uFF08":"\uFF09"})}function si(t){let e=t.querySelector(".me-mermaid-wrap");if(e===null)return;let a=e.querySelector("svg");if(a===null||t.querySelector(".me-mermaid-download")!==null)return;let s=t.querySelector('[class*="action"]')??e,i=document.createElement("button");i.type="button",i.className="me-mermaid-download";let l=(document.documentElement.lang??"").toLowerCase().startsWith("zh");i.textContent=l?"\u4E0B\u8F7D":"SVG",i.title=l?"\u4E0B\u8F7D\u6B64\u56FE\u4E3A SVG\uFF08\u77E2\u91CF\uFF0C\u53EF\u65E0\u635F\u7F29\u653E\uFF09":"Download diagram as SVG",i.addEventListener("click",c=>{c.stopPropagation(),Yl(a)}),s.appendChild(i)}function Yl(t){let e=new XMLSerializer().serializeToString(t),a=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(a),s=new Date,i=g=>String(g).padStart(2,"0"),l=`${s.getFullYear()}${i(s.getMonth()+1)}${i(s.getDate())}-${i(s.getHours())}${i(s.getMinutes())}`,c=document.createElement("a");c.href=o,c.download=`mermaid-${l}.svg`,document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(o)}async function Ql(t,e,a){if(a.rendering)return;a.rendering=!0;let o;try{o=await Wl()}catch(c){a.engineFails+=1,a.engineFails===1&&console.warn("[dsh-memory-evolve] mermaid engine load failed, will retry:",c);return}let s=[{text:e}],i=Xl(e);i!==null&&s.push({text:i});let l;try{for(let c of s){let g=`me-${++Vl}`;try{let b=t.querySelector("pre");if(b===null||!b.isConnected)return;let{svg:m}=await o.render(g,c.text);if(t.querySelector("pre")!==b)return;let k=document.createElement("div");k.className="me-mermaid-wrap",k.innerHTML=m,b.replaceWith(k),a.rendered=!0,a.failCount=0,a.engineFails=0,t.setAttribute(Wo,""),t.removeAttribute(Ko),si(t);return}catch(b){l=b,document.getElementById(`d${g}`)?.remove()}}a.failCount+=1,a.failCount>=2&&(a.rendered=!0,t.setAttribute(Wo,""),t.setAttribute(Ko,""),Gl(t,l)),console.warn(`[dsh-memory-evolve] mermaid render failed (attempt ${a.failCount}):`,l)}finally{a.rendering=!1}!a.rendered&&t.isConnected&&t.querySelector("pre")!==null&&window.setTimeout(()=>{Zt(t,!0)},200)}function Zt(t,e=!1){if(!Jl(t))return;let a=ai.get(t);a===void 0&&(a={source:"",rendered:!1,rendering:!1,failCount:0,engineFails:0},ai.set(t,a));let o=a;if(o.rendered){if(t.querySelector(".me-mermaid-wrap")===null){if(t.hasAttribute(Ko))return;o.rendered=!1,o.failCount=0,t.removeAttribute(Wo),Zt(t,!0);return}si(t);return}let s=t.querySelector("pre")?.textContent??"";!e&&s===o.source&&o.timer!==void 0||(o.source=s,window.clearTimeout(o.timer),o.timer=window.setTimeout(()=>{(t.querySelector("pre")?.textContent??"")===o.source?o.rendering||Ql(t,o.source,o):Zt(t)},e?150:400))}function ni(){let t,e=!1,a,o=l=>{let c=0;for(let g of l)if(g.type==="childList")for(let b of g.addedNodes){if(c+=1,!(b instanceof HTMLElement))continue;let m=b.classList.contains("md-code-block")?b:b.closest(".md-code-block");if(m instanceof HTMLElement&&Zt(m),m===null)for(let h of b.querySelectorAll(".md-code-block"))Zt(h)}else{let m=(g.target instanceof HTMLElement?g.target:g.target.parentElement)?.closest(".md-code-block");m instanceof HTMLElement&&Zt(m)}c>40&&s()},s=()=>{window.clearTimeout(a);let l=[300,1e3,2500,6e3],c=g=>{g>=l.length||(a=window.setTimeout(()=>{if(!(e||t===void 0)){for(let b of document.querySelectorAll(".md-code-block"))Zt(b);c(g+1)}},l[g]))};c(0)};return{setEnabled:l=>{if(!e)if(l&&t===void 0){t=new MutationObserver(o),t.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class"]});for(let c of document.querySelectorAll(".md-code-block"))Zt(c);s()}else!l&&t!==void 0&&(t.disconnect(),t=void 0,window.clearTimeout(a))},dispose(){e=!0,t?.disconnect(),t=void 0,window.clearTimeout(a)}}}var ii=`/**
 * dsh-memory-evolve panel styles \u2014 DSH design tokens, \`me-\` prefix.
 * Colors come exclusively from --dsw-alias-* / --dsw-static-* tokens so the
 * panel follows the light/dark theme automatically (no hardcoded colors).
 */

/* ---------- Root ---------- */

.me-panel {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding: 4px 2px 28px;
  font-family: var(--dsw-font-family, inherit);
  color: var(--dsw-alias-label-primary);
}

/* Inside the session memory tab: the panel is a sub-view, not a full-height
   settings column \u2014 cap its height so the tab never grows the page. */
.mt-panel .me-panel {
  height: auto;
  max-height: 62vh;
}

/* ---------- Notice bar (success / error) ---------- */

.me-notice {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
}

.me-notice::before {
  content: '';
  flex: none;
  width: 6px;
  height: 6px;
  margin-top: 6px;
  border-radius: 50%;
}

.me-notice-ok {
  color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
  border: 1px solid var(--dsw-alias-state-success-primary);
}
.me-notice-ok::before {
  background: var(--dsw-alias-state-success-primary);
}

.me-notice-error {
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);
  border: 1px solid var(--dsw-alias-state-error-secondary);
}
.me-notice-error::before {
  background: var(--dsw-alias-state-error-primary);
}

/* \u8B66\u544A\u63D0\u793A\uFF08\u672A\u6DF1\u5EA6\u6D4B\u8BD5\u7B49\u9700\u8981\u7528\u6237\u77E5\u60C5\u7684\u573A\u666F\uFF09 */
.me-notice-warn {
  color: var(--dsw-alias-state-warning-primary, #b8860b);
  background: color-mix(in srgb, #b8860b 10%, transparent);
  border: 1px solid color-mix(in srgb, #b8860b 40%, transparent);
}
.me-notice-warn::before {
  background: var(--dsw-alias-state-warning-primary, #b8860b);
}

/* ---------- Section cards ---------- */

.me-block {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
}

.me-block-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.me-heading {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}

.me-count {
  flex: none;
  min-width: 18px;
  box-sizing: border-box;
  padding: 1px 6px;
  border-radius: 9px;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

.me-help {
  margin: -4px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
}

.me-muted {
  margin: 0;
  padding: 8px 0;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

/* Friendly empty state */
.me-empty {
  margin: 0;
  padding: 22px 12px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: 10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
}

/* ---------- Suggestion list (own scroll area) ---------- */

.me-list {
  margin: 0;
  padding: 0 2px 0 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 380px;
  overflow-y: auto;
}

.me-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
  transition: border-color 120ms ease;
}

.me-item:hover {
  border-color: var(--dsw-alias-border-l3);
}

.me-item-head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.me-badge {
  flex: none;
  max-width: 45%;
  padding: 1px 8px;
  border-radius: 9px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

.me-badge-hits {
  color: var(--dsw-alias-state-warn-primary);
  background: var(--dsw-alias-state-warn-tertiary);
}

/* \u5F85\u786E\u8BA4\u5EFA\u8BAE\u7684\u76EE\u6807\u5FBD\u6807\uFF1A\u6309\u8F68\u7740\u8272\uFF0C\u9192\u76EE\u533A\u5206\u8981\u5199\u5165\u54EA\u7C7B\u8BB0\u5FC6 */
.me-badge-suggest {
  border: 1px solid transparent;
  font-size: 11px;
  line-height: 18px;
  padding: 1px 10px;
}

.me-badge-suggest-memory {
  color: var(--dsw-static-blue-5, #3b82f6);
  background: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 16%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 45%, transparent);
}

.me-badge-suggest-user {
  color: var(--dsw-static-green-5, #16a34a);
  background: color-mix(in srgb, var(--dsw-static-green-5, #16a34a) 16%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-green-5, #16a34a) 45%, transparent);
}

.me-badge-suggest-key {
  color: var(--dsw-static-amber-6, #d97706);
  background: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 18%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 48%, transparent);
}

.me-badge-suggest-todo {
  color: var(--dsw-static-purple-5, #9333ea);
  background: color-mix(in srgb, var(--dsw-static-purple-5, #9333ea) 16%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-purple-5, #9333ea) 45%, transparent);
}

/* \u9879\u76EE\u7EA7\u5EFA\u8BAE\u7684\u6765\u6E90\u9879\u76EE\u5FBD\u6807\uFF08key / todo-project\uFF09\uFF1A\u4E2D\u6027\u8272 + \u865A\u7EBF\u8FB9\u6846\uFF0C
   \u89C6\u89C9\u4E0A\u533A\u522B\u4E8E"\u5199\u5165\u54EA\u7C7B\u8BB0\u5FC6"\u7684\u5F69\u8272\u76EE\u6807\u5FBD\u6807\u2014\u2014\u5B83\u6807\u6CE8\u7684\u662F"\u54EA\u4E2A\u9879\u76EE"\u3002 */
.me-badge-project {
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-bg-layer-2);
  border: 1px dashed var(--dsw-alias-border-l3);
  max-width: 40%;
}

/* \u91C7\u7EB3\u76EE\u6807\u9009\u62E9\u4E0B\u62C9\uFF08\u9ED8\u8BA4=AI \u63A8\u8350\u8F68\uFF0C\u53EF\u6539\u5206\u7C7B\uFF09 */
.me-pick-target {
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 11px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

/* \u4F7F\u7528\u6307\u5357\u9762\u677F */
.me-guide {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.me-guide-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 8px 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128, 128, 128, 0.25));
  border-radius: 8px;
  background: var(--dsw-alias-bg-l2, rgba(128, 128, 128, 0.06));
}

.me-guide-icon {
  flex: none;
  font-size: 16px;
  line-height: 20px;
}

.me-guide-body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.me-guide-body strong {
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
}

.me-guide-body span {
  font-size: 12px;
  line-height: 1.55;
  color: var(--dsw-alias-label-secondary);
}

.me-guide-sub {
  margin: 14px 0 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}

.me-guide-tips {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  line-height: 1.55;
  color: var(--dsw-alias-label-secondary);
}

.me-guide-loop {
  margin: 12px 0 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-static-blue-5, #3b82f6);
}

.me-item-time {
  flex: 1;
  min-width: 0;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-label-tertiary);
}

.me-item-actions {
  flex: none;
  display: flex;
  gap: 6px;
}

.me-item-edit {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  outline: none;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsw-font-family, inherit);
  font-size: 12px;
  line-height: 1.6;
  resize: vertical;
  transition: border-color 120ms ease, background-color 120ms ease;
}

.me-item-edit:hover {
  border-color: var(--dsw-alias-border-l3);
}

.me-item-edit:focus-visible {
  border-color: var(--dsw-alias-state-business-primary);
}

.me-item-reason {
  margin: 0;
  padding-left: 8px;
  border-left: 2px solid var(--dsw-alias-border-l3);
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
}

/* Bulk actions: separated from the list by a hairline */
.me-bulk {
  display: flex;
  gap: 8px;
  padding-top: 10px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}

/* ---------- Buttons ---------- */

.me-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.me-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.me-btn:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active);
}

.me-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.me-btn-archive {
  border-color: var(--dsw-alias-border-l3);
  color: var(--dsw-alias-label-secondary);
}

.me-btn-archive:hover:not(:disabled) {
  border-color: var(--dsw-alias-interactive-fg-default);
  color: var(--dsw-alias-label-primary);
}

.me-archive-list {
  max-height: 320px;
  overflow-y: auto;
}

.me-archive-content {
  margin: 0;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  font: inherit;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--dsw-alias-label-primary);
}

.me-btn-ok {
  color: var(--dsw-alias-state-success-primary);
  border-color: var(--dsw-alias-state-success-primary);
}
.me-btn-ok:hover:not(:disabled) {
  background: var(--dsw-alias-state-success-tertiary);
}

.me-btn-danger {
  color: var(--dsw-alias-state-error-primary);
}
.me-btn-danger:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover-danger);
  border-color: var(--dsw-alias-state-error-secondary);
}

.me-btn-primary {
  border-color: transparent;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-inverted);
  font-weight: 600;
}
.me-btn-primary:hover:not(:disabled) {
  background: var(--dsw-alias-button-primary-hover);
}
.me-btn-primary:disabled {
  background: var(--dsw-alias-button-primary-dimmed);
}

.me-btn:focus-visible,
.me-switch:focus-visible,
.me-input:focus-visible,
.me-select:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: 1px;
}

/* ---------- Config form ---------- */

.me-form {
  display: flex;
  flex-direction: column;
}

/* Visual grouping: value rows vs. toggle rows, hairline between groups */
.me-group {
  display: flex;
  flex-direction: column;
}
.me-group + .me-group {
  margin-top: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}

.me-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 7px 2px;
  font-size: 13px;
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
}

.me-field-label {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.me-field-hint {
  font-style: normal;
  font-size: 11px;
  line-height: 1.4;
  color: var(--dsw-alias-label-tertiary);
}

/* \u2500\u2500 \u957F\u6587\u672C\u9632\u6EA2\u51FA\uFF08issue #31\uFF0C2026-09-04\uFF09\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * \u79FB\u52A8\u7AEF\uFF08~400px \u89C6\u53E3\uFF09\u300CMemory Evolve \u8BBE\u7F6E\u300D\u9875\u4F1A\u88AB\u62C9\u957F\u6EA2\u51FA\uFF1A\u914D\u7F6E\u9879
 * \u8BF4\u660E\uFF08me-field-hint\uFF09\u3001\u7248\u672C\u53F7\uFF08me-field-value\uFF0C\u65E0\u7A7A\u683C\u957F\u4E32\u5982
 * dsh-v0.1.2-rc.1\uFF09\u7B49\u5728 flex \u884C\u5185\u4E0D\u6362\u884C\u3001\u6491\u7834\u7236\u5BB9\u5668\uFF0C\u6700\u540E\u4E00\u9879\u628A\u6574\u4E2A
 * \u9875\u9762\u9876\u51FA\u89C6\u53E3\u3002\u7ED9\u6587\u672C\u9762\u52A0\u300C\u4EFB\u610F\u4F4D\u7F6E\u65AD\u8BCD + \u8BCD\u5185\u6362\u884C\u300D\uFF0C\u4EFB\u4F55\u89C6\u53E3\u90FD
 * \u5B89\u5168\uFF08\u684C\u9762\u6587\u672C\u957F\u5EA6\u4E0D\u53D8\uFF0C\u7A84\u5C4F\u81EA\u52A8\u6362\u884C\u4E3A\u591A\u884C\uFF09\uFF1B\u63A7\u4EF6\u9650\u5BBD 100%\uFF0C
 * \u907F\u514D\u56FA\u5B9A\u5BBD\u5EA6 input/select \u5728\u7A84\u5C4F\u6EA2\u51FA\uFF08\u539F\u89C4\u5219\u53EA\u4F9D\u8D56 data-dsh-mobile
 * \u901A\u9053\uFF0C\u672A\u88C5 dsh-android-edapp \u7684\u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668\u4E0D\u751F\u6548\u2014\u2014\u6B64\u89C4\u5219\u901A\u7528\uFF09\u3002 */
.me-field-label,
.me-field-hint,
.me-field-sub,
.me-field-value,
.me-heading,
.me-help {
  overflow-wrap: anywhere;
  word-break: break-word;
}
.me-input,
.me-select,
.me-todo-select,
.me-todo-date {
  max-width: 100%;
  box-sizing: border-box;
}

/* \u6B21\u7EA7\u5F00\u5173\u884C\uFF08\u5B50\u529F\u80FD\u5F00\u5173\uFF0C\u5982 ws-coord \u7684\u5FEB\u7167/\u786C\u62E6\u622A\uFF09\uFF1A\u7F29\u8FDB + \u5F31\u5316\uFF0C
   \u89C6\u89C9\u4E0A\u4E0E\u4E3B\u5F00\u5173\uFF08\u6A21\u5757\u603B\u5F00\u5173\uFF09\u533A\u5206 */
.me-field-sub {
  padding-left: 18px;
  border-left: 2px solid var(--dsw-alias-border-l2);
  margin-left: 2px;
}

/* \u88AB\u7981\u7528\u7684\u5F00\u5173\uFF08\u5982\u5E7F\u64AD\u5173\u65F6 ws-coord \u603B\u5F00\u5173\u4E0D\u53EF\u70B9\uFF09\uFF1A\u5F31\u5316\u63D0\u793A */
.me-switch:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Toggle switch (accent when on) */
.me-switch {
  appearance: none;
  flex: none;
  position: relative;
  width: 36px;
  height: 20px;
  margin: 0;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 10px;
  background: var(--dsw-alias-interactive-bg-active);
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.me-switch::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--dsw-static-neutral-00);
  transition: transform 150ms ease;
}

.me-switch:hover {
  border-color: var(--dsw-alias-border-l4);
}

.me-switch:checked {
  border-color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-primary);
}

.me-switch:checked::after {
  transform: translateX(16px);
}

/* Number / select inputs, right-aligned and uniform width */
.me-input,
.me-select {
  flex: none;
  width: 120px;
  height: 28px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 6px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  transition: border-color 120ms ease;
}

.me-input:hover,
.me-select:hover {
  border-color: var(--dsw-alias-border-l4);
}

.me-select {
  cursor: pointer;
}

.me-actions {
  display: flex;
  /* 2026-08-14 \u7528\u6237\u53CD\u9988\uFF1A\u4FDD\u5B58\u6309\u94AE\u5C45\u4E2D\u5BF9\u9F50 */
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}

/* \u914D\u7F6E\u4FDD\u5B58\u6309\u94AE\u52A0\u5927\uFF082026-08-14 \u7528\u6237\u53CD\u9988\uFF1A\u5927\u4E00\u70B9\u66F4\u9192\u76EE\uFF09 */
.me-actions .me-btn {
  font-size: 14px;
  padding: 9px 32px;
  border-radius: 8px;
}

/* ---------- Open-files button grid ---------- */

.me-reveal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  gap: 8px;
}

.me-btn-reveal {
  justify-content: flex-start;
  height: 30px;
  padding: 0 10px;
  color: var(--dsw-alias-label-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
}

.me-btn-reveal:hover:not(:disabled) {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-state-business-primary);
}

/* ---------- Scrollbars (token-driven, fall back to border color) ---------- */

.me-panel::-webkit-scrollbar,
.me-list::-webkit-scrollbar {
  width: 8px;
}

.me-panel::-webkit-scrollbar-thumb,
.me-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--dsw-alias-scrollbar-bg-l1, var(--dsw-alias-border-l3));
}

.me-panel::-webkit-scrollbar-thumb:hover,
.me-list::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l1, var(--dsw-alias-border-l4));
}

.me-panel::-webkit-scrollbar-track,
.me-list::-webkit-scrollbar-track {
  background: transparent;
}

/* ---- memory tab (conversation.view) ---- */

/* DSH 0.1.2-rc \u8D77\uFF0C\u4F1A\u8BDD\u5217\u4E24\u4FA7\u6E32\u67D3\u300C\u62C9\u5BBD\u300D\u7528\u7684\u5BBD\u5EA6\u624B\u67C4\uFF1Aabsolute \u5168\u9AD8\u3001
 * z-index 8\u3001\u62E6\u622A\u70B9\u51FB\u7684 col-resize \u7AD6\u6761\uFF0C\u5143\u7D20\u5E26 [data-width-handle]
 * \uFF08ConversationRoot.tsx \u7684 .widthHandle\uFF0C\u4F4D\u4E8E .body \u5185\uFF09\u3002\u63D2\u4EF6\u7684\u7BA1\u7406 Tab
 * \u90FD\u662F**\u5360\u6EE1\u6574\u5217\u5BBD**\u7684\u9762\u677F\uFF08\u4E0D\u968F --dsh-chat-content-width \u6536\u7A84\uFF09\uFF0C\u628A\u5BF9\u8BDD
 * \u6846\u62C9\u5BBD\u540E\u624B\u67C4\u6761\u8D34\u8FD1\u9762\u677F\u8FB9\u7F18\uFF0C\u6B63\u597D\u538B\u4F4F\u9876\u90E8\u5B50\u5BFC\u822A\u884C\uFF08\u6307\u5357 / \u5168\u5C40\u89C4\u5219
 * AGENTS.md \u2026\uFF09\uFF0C\u5BFC\u81F4\u906E\u6321\u3001\u65E0\u6CD5\u70B9\u51FB\uFF08issue #40\uFF09\u3002
 *
 * \u5904\u7406\u65B9\u5F0F\u4E0E DSH \u5B98\u65B9\u5BF9\u5168\u5BBD overlay \u89C6\u56FE\u7684\u5148\u4F8B\u4E00\u81F4\u2014\u2014\u5B98\u65B9\u5728
 * ConversationRoot.module.css \u7528
 * .root:has([data-conversation-composer-overlay]) .widthHandle{display:none}
 * \u5173\u6389\u624B\u67C4\u3002\u8FD9\u91CC\u5BF9\u63D2\u4EF6\u7684\u5168\u5BBD\u89C6\u56FE\u505A\u540C\u7B49\u5904\u7406\uFF1A\u4EFB\u4E00\u63D2\u4EF6 Tab \u6302\u8F7D\u671F\u95F4\u9690\u85CF
 * \u624B\u67C4\uFF0C\u5207\u56DE\u4F1A\u8BDD\u7B49\u5176\u5B83\u89C6\u56FE\u65F6\u81EA\u52A8\u6062\u590D\u3002\u62C9\u5BBD\u504F\u597D\uFF08--dsh-chat-user-width\uFF09
 * \u672C\u8EAB\u4E0D\u53D7\u5F71\u54CD\uFF0C\u56DE\u4F1A\u8BDD Tab \u4ECD\u53EF\u7EE7\u7EED\u62D6\u62FD\u3002
 *
 * \u9009\u62E9\u5668\u7528 [data-phase] \u5C5E\u6027\u800C\u975E CSS-module \u54C8\u5E0C\u7C7B\u540D\uFF08.root \u88AB\u54C8\u5E0C\u5316\uFF0C
 * \u9009\u4E0D\u4E2D\uFF09\uFF1B[data-phase] \u5728 DSH \u91CC\u975E\u552F\u4E00\uFF08ConnectionIndicator/InputBar
 * \u4E5F\u6709\uFF09\uFF0C\u4F46\u5B83\u4EEC\u4E0D\u542B\u4E0B\u5217\u6839\u5BB9\u5668\uFF0C\u4E0D\u4F1A\u8BEF\u4F24\u3002
 *
 * \u8986\u76D6\u6E05\u5355 = \u63D2\u4EF6\u5168\u90E8 conversation.view \u89C6\u56FE\u7684\u6839\u5BB9\u5668\u7C7B\u540D\uFF1A
 *   .mt-panel  \u8BB0\u5FC6 / \u6280\u80FD / \u5F85\u529E / \u8BBE\u7F6E / \u6A21\u578B / \u540C\u6B65
 *   .me-panel  UI \u8BBE\u7F6E / \u7248\u672C / \u6307\u5357
 *   .coi-root  COI \u8C03\u5EA6      .bb-pane  \u4F1A\u8BDD\u5E7F\u64AD
 *   .pm-root   \u63D0\u793A\u8BCD\u5E93      .bm-panel \u4F1A\u8BDD\u4E66\u7B7E
 * \u26A0 \u65B0\u589E Tab \u82E5\u4F7F\u7528\u65B0\u7684\u6839\u5BB9\u5668\u7C7B\u540D\uFF0C\u9700\u540C\u6B65\u52A0\u5165\u6B64\u5217\u8868\uFF0C\u5426\u5219\u8BE5 Tab \u4ECD\u4F1A\u88AB
 *   \u624B\u67C4\u906E\u6321\u3002
 */
[data-phase]:has(.mt-panel, .me-panel, .coi-root, .bb-pane, .pm-root, .bm-panel) [data-width-handle] {
  display: none;
}

.mt-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 6px 12px 12px;
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
}

.mt-notice {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.5;
}

.mt-notice-ok {
  color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
}

.mt-notice-error {
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);
  border: 1px solid var(--dsw-alias-state-error-secondary);
}

.mt-cwd {
  margin: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mt-muted {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

.mt-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mt-card {
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--dsw-alias-bg-layer-1);
}

.mt-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

/* \u6BCF\u4E2A\u6587\u4EF6\u9875\u7B7E\u9876\u90E8\u7684\u4E00\u884C\u5C0F\u5B57\u8BF4\u660E\uFF08\u4F5C\u7528\u4E0E\u673A\u5236\uFF09 */
.mt-card-desc {
  margin: 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-label-secondary);
}

.mt-card-title {
  flex: none;
  font-size: 13px;
  font-weight: 600;
}

.mt-badge {
  flex: none;
  padding: 1px 8px;
  border-radius: 9px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
}

.mt-badge-ro {
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-active);
}

.mt-card-path {
  flex: 1;
  min-width: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
  text-align: left;
}

.mt-card-actions {
  flex: none;
}

.mt-btn {
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l3);
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  cursor: pointer;
}

.mt-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

/* ---- manual project KEY add box ---- */

/* Branch-scope line in the KEY add box and in the per-entry scope editor. */
.mt-key-scope {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
}

.mt-key-scope-label {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
}

.mt-scope-opt {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  cursor: pointer;
}

.mt-scope-opt input {
  margin: 0;
  accent-color: var(--dsw-alias-state-business-primary);
}

.mt-scope-all-hint {
  font-style: normal;
  font-size: 10px;
  color: var(--dsw-alias-label-tertiary);
}

/* Per-entry branch-scope badge (click to edit). */
.mt-entry-branch {
  flex: none;
  max-width: 45%;
  padding: 1px 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 9px;
  background: transparent;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-state-business-primary);
  cursor: pointer;
}

.mt-entry-branch:hover {
  border-color: var(--dsw-alias-interactive-fg-default);
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.mt-entry-branch-all {
  color: var(--dsw-alias-label-secondary);
  font-weight: 500;
}

/* Static source-branch tag on daily/project log entries (not clickable). */
.mt-entry-branch-tag {
  color: var(--dsw-alias-state-success-primary);
  cursor: default;
  border-style: dashed;
}

/* \u300C\u4EC5 DSH\u300D\u6807\u8BB0\u5FBD\u7AE0\uFF1A\u8BE5\u6761\u76EE\u53EA\u6CE8\u5165 DSH \u81EA\u8EAB\uFF0C\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF08COI\uFF09\u65F6\u8DF3\u8FC7\u3002 */
.mt-entry-dsh-only {
  flex: none;
  padding: 1px 8px;
  border: 1px solid var(--dsw-alias-state-warning-border, var(--dsw-alias-border-l3));
  border-radius: 9px;
  background: transparent;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--dsw-alias-state-warning-fg, var(--dsw-alias-state-business-primary));
}

/* \u300C\u4EC5 DSH\u300Dtoggle \u6309\u94AE\u7684\u5DF2\u6807\u8BB0\u6FC0\u6D3B\u6001\uFF08\u9AD8\u4EAE\u533A\u5206\u5DF2\u6253\u6807\uFF09\u3002 */
.mt-entry-dsh-on {
  border-color: var(--dsw-alias-state-warning-border, var(--dsw-alias-border-l3)) !important;
  color: var(--dsw-alias-state-warning-fg, var(--dsw-alias-state-business-primary)) !important;
  font-weight: 600;
}

/* key \u624B\u52A8\u6DFB\u52A0\u6846\u7684\u300C\u4EC5 DSH\u300D\u52FE\u9009\u3002 */
.mt-key-dsh-opt {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  user-select: none;
}

/* Inline scope editor panel under a KEY entry. */
.mt-scope {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 12px;
  padding: 8px 10px;
  border: 1px dashed var(--dsw-alias-border-l4);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}

.mt-scope-actions {
  margin-left: auto;
  display: flex;
  gap: 6px;
}

/* Current-branch suffix on the KEY tab description line. */
.mt-card-desc-branch {
  color: var(--dsw-alias-state-business-primary);
  font-weight: 600;
}

.mt-key-add {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px dashed var(--dsw-alias-border-l4);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}

.mt-key-input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 120ms ease;
}

.mt-key-input:hover {
  border-color: var(--dsw-alias-border-l4);
}

.mt-key-input:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: 1px;
}

.mt-key-input::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.mt-key-add-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.mt-key-help {
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-label-secondary);
}

.mt-btn-primary {
  flex: none;
  border-color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-on-primary, #fff);
  font-weight: 600;
}

.mt-btn-primary:hover:not(:disabled) {
  filter: brightness(1.1);
}

.mt-content {
  margin: 0;
  padding: 10px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  border: 1px solid var(--dsw-alias-border-l3);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 320px;
  overflow-y: auto;
}


.mt-warning {
  margin: 0;
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-state-warn-primary);
}

/* ---- memory tab toolbar (view toggle + search) ---- */

.mt-file-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 0;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  margin-bottom: 10px;
}

.mt-file-tab {
  appearance: none;
  height: 32px;
  padding: 0 12px;
  border: none;
  border-radius: 6px 6px 0 0;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}

.mt-file-tab:hover:not(.mt-file-tab-active) {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.mt-file-tab-active,
.mt-file-tab-active:hover {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-brand-primary);
  font-weight: 600;
}

/* Vertical divider between the feature tabs and the file tabs. */
.mt-tab-sep {
  flex: none;
  align-self: center;
  width: 1px;
  height: 16px;
  margin: 0 4px;
  background: var(--dsw-alias-border-l3);
}

/* Pending-count badge inside a feature tab (e.g. \u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE (2)). */
.mt-feature-count {
  display: inline-block;
  min-width: 14px;
  margin-left: 6px;
  padding: 0 4px;
  border-radius: 8px;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  font-weight: 700;
  color: var(--dsw-alias-label-on-primary, #fff);
  background: var(--dsw-alias-state-error-primary);
}

.mt-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

/* Segmented \u7F8E\u89C2/\u7EAF\u6587\u672C toggle */
.mt-view-toggle {
  flex: none;
  display: inline-flex;
  padding: 2px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}

.mt-view-btn {
  padding: 3px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}

.mt-view-btn:hover {
  color: var(--dsw-alias-label-primary);
}

.mt-view-btn-active,
.mt-view-btn-active:hover {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

.mt-view-btn:focus-visible,
.mt-search:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: 1px;
}

.mt-search {
  flex: 1;
  min-width: 160px;
  height: 28px;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 8px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  transition: border-color 120ms ease;
}

.mt-search:hover {
  border-color: var(--dsw-alias-border-l4);
}

.mt-search::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

/* Search hit count badge in the card head */
.mt-badge-count {
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

/* Friendly empty state (no search results) */
.mt-empty {
  margin: 0;
  padding: 22px 12px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: 10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
}

/* ---- pretty view: \xA7 entry cards ---- */

.mt-entries {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 320px;
  overflow-y: auto;
}

.mt-entry {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
  transition: border-color 120ms ease, background-color 120ms ease;
}

.mt-entry:hover {
  border-color: var(--dsw-alias-border-l3);
  background: var(--dsw-alias-interactive-bg-hover);
}

.mt-entry-head {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.mt-entry-time {
  flex: none;
  padding: 1px 8px;
  border-radius: 9px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-active);
}

.mt-entry-tag {
  flex: none;
  max-width: 60%;
  padding: 1px 8px;
  border-radius: 9px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

/* Per-entry action buttons (pretty view): right-aligned group. */
.mt-entry-ops {
  flex: none;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Neutral action (archive / promote back). */
.mt-entry-op {
  padding: 1px 8px;
  font-size: 11px;
  line-height: 16px;
  border-color: transparent;
  color: var(--dsw-alias-label-secondary);
  opacity: 0.8;
}

.mt-entry-op:hover:not(:disabled) {
  opacity: 1;
  border-color: var(--dsw-alias-border-l3);
  color: var(--dsw-alias-label-primary);
}

/* Per-entry delete button (pretty view): danger tint. */
.mt-entry-del {
  padding: 1px 8px;
  font-size: 11px;
  line-height: 16px;
  border-color: transparent;
  color: var(--dsw-alias-state-error-primary);
  opacity: 0.7;
}

.mt-entry-del:hover:not(:disabled) {
  opacity: 1;
  background: var(--dsw-alias-interactive-bg-hover-danger);
  border-color: var(--dsw-alias-state-error-secondary);
}

.mt-entry-text {
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--dsw-alias-label-primary);
}

/* \u6761\u76EE\u6B63\u6587\u7F16\u8F91\u6846\uFF08\u7F8E\u89C2\u89C6\u56FE\u300C\u7F16\u8F91\u300D\uFF09\uFF1A\u53EA\u6539\u5185\u5BB9\uFF0C\u6807\u8BB0\u7A0B\u5E8F\u7EF4\u62A4 */
.mt-entry-edit {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mt-item-edit {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
  line-height: 1.5;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  resize: vertical;
  min-height: 56px;
}

.mt-item-edit:focus-visible {
  outline: 2px solid var(--dsw-static-blue-6, #2563eb);
  outline-offset: 1px;
}

.mt-entry-edit-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.mt-entry-edit-hint {
  flex: 1 1 auto;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

/* Entry list scrollbar (token-driven, fall back to border color) */
.mt-entries::-webkit-scrollbar {
  width: 8px;
}

.mt-entries::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--dsw-alias-scrollbar-bg-l1, var(--dsw-alias-border-l3));
}

.mt-entries::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l1, var(--dsw-alias-border-l4));
}

.mt-entries::-webkit-scrollbar-track {
  background: transparent;
}

/* \u5206\u9875\u5668\uFF08\u7F8E\u89C2\u89C6\u56FE\u5927\u6587\u4EF6\u5206\u9875\uFF0C2026-08-10\uFF09 */
.mt-pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--dsw-alias-border-l2, rgba(128, 128, 128, 0.2));
}

.mt-pager-info {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(128, 128, 128, 0.85));
}
}

/* ---------- Todo sub-tab ---------- */

.me-tabs {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.me-tab {
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
  cursor: pointer;
}

.me-tab:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.me-tab-active {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
}

.me-todo-add {
  flex: none;
  display: flex;
  gap: 8px;
  align-items: center;
}

.me-todo-input {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

.me-todo-select,
.me-todo-date,
.me-todo-filters select {
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 12px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

.me-todo-filters {
  flex: none;
  display: flex;
  gap: 16px;
  align-items: center;
}

.me-todo-filter {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}

.me-todo-filter-check {
  cursor: pointer;
  user-select: none;
}

.me-todo-filter-check input {
  accent-color: var(--dsw-static-blue-5, #3b82f6);
}

/* \u8FC7\u5F80 daily \u5F85\u529E\u7684\u5206\u7EC4\u6807\u9898\uFF08\u5982 8\u67085\u65E5\uFF09 */
.me-todo-day {
  list-style: none;
  margin: 10px 0 2px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary);
  border-bottom: 1px dashed var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  padding-bottom: 2px;
}

.me-badge-day {
  color: var(--dsw-static-amber-7, #b45309);
  background: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 40%, transparent);
}

.me-todo-item--done .me-todo-text {
  opacity: 0.55;
  text-decoration: line-through;
}

.me-todo-text {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--dsw-alias-label-primary);
}

.me-todo-edit {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.me-todo-edit-row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.me-todo-edit-row select,
.me-todo-edit-row input {
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}

.me-badge-quad {
  border: 1px solid transparent;
}

.me-badge-quad-q1 {
  color: var(--dsw-static-red-5, #e5484d);
  background: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 40%, transparent);
}

.me-badge-quad-q2 {
  color: var(--dsw-static-blue-5, #3b82f6);
  background: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 40%, transparent);
}

.me-badge-quad-q3 {
  color: var(--dsw-static-amber-5, #f59e0b);
  background: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 40%, transparent);
}

.me-badge-quad-q4 {
  color: var(--dsw-static-neutral-5, #8b8d98);
  background: color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 40%, transparent);
}

.me-badge-quad-none {
  color: var(--dsw-alias-label-tertiary);
  background: transparent;
  border-color: var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
}

.me-badge-overdue {
  color: var(--dsw-static-red-5, #e5484d);
  background: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 12%, transparent);
}

.me-badge-due {
  color: var(--dsw-static-amber-5, #f59e0b);
  background: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 12%, transparent);
}

.me-todo-help {
  font-size: 11px;
  line-height: 1.6;
  color: var(--dsw-alias-label-tertiary);
  margin: 0;
}

/* ---------- \u5F85\u529E\uFF1A\u5217\u8868 / \u770B\u677F \u89C6\u56FE\u5207\u6362\uFF08\u5206\u6BB5\u63A7\u4EF6\uFF09 ---------- */

.me-todo-view-switch {
  display: inline-flex;
  margin-left: auto;
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 8px;
  overflow: hidden;
  flex: none;
}

.me-todo-view-btn {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  padding: 4px 12px;
  cursor: pointer;
  line-height: 1.4;
}

.me-todo-view-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.me-todo-view-btn-active {
  color: var(--dsw-alias-label-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
  font-weight: 600;
}

/* ---------- \u5F85\u529E\uFF1A\u56DB\u8C61\u9650\u770B\u677F ----------
 * 2\xD72 \u5BAB\u683C\uFF1B\u6BCF\u4E2A\u8C61\u9650\u7528\u4E0D\u540C\u8272\u76F8\u63CF\u8FB9/\u6807\u9898\u70B9\u7F00\uFF0C\u989C\u8272\u5168\u90E8\u8D70
 * --dsw-static-* / --dsw-alias-* token\uFF0C\u6DF1\u6D45\u8272\u81EA\u9002\u5E94\u3002
 */

.me-todo-board {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(160px, 1fr) minmax(160px, 1fr);
  gap: 10px;
  flex: none;
  min-height: 320px;
  max-height: 52vh;
}

/* \u7A84\u5C4F\uFF1A\u56DB\u8C61\u9650\u6539\u4E3A\u5355\u5217\u5806\u53E0\uFF0C\u907F\u514D\u5361\u7247\u88AB\u6324\u6241 */
@media (max-width: 720px) {
  .me-todo-board {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    max-height: none;
  }
}

.me-todo-quad {
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-radius: 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
  overflow: hidden;
}

/* \u8C61\u9650\u8272\u5E26\uFF1A\u9876\u90E8\u7EC6\u7EBF + \u6807\u9898\u8272\uFF0C\u4E0E\u5217\u8868\u5FBD\u6807\u914D\u8272\u4E00\u81F4 */
.me-todo-quad-q1 {
  border-color: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 45%, var(--dsw-alias-border-l2));
  box-shadow: inset 0 3px 0 0 color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 70%, transparent);
}
.me-todo-quad-q2 {
  border-color: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 45%, var(--dsw-alias-border-l2));
  box-shadow: inset 0 3px 0 0 color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 70%, transparent);
}
.me-todo-quad-q3 {
  border-color: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 45%, var(--dsw-alias-border-l2));
  box-shadow: inset 0 3px 0 0 color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 70%, transparent);
}
.me-todo-quad-q4 {
  border-color: color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 45%, var(--dsw-alias-border-l2));
  box-shadow: inset 0 3px 0 0 color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 55%, transparent);
}

.me-todo-quad-head {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px 6px;
}

.me-todo-quad-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}

.me-todo-quad-q1 .me-todo-quad-title { color: var(--dsw-static-red-5, #e5484d); }
.me-todo-quad-q2 .me-todo-quad-title { color: var(--dsw-static-blue-5, #3b82f6); }
.me-todo-quad-q3 .me-todo-quad-title { color: var(--dsw-static-amber-6, #d97706); }
.me-todo-quad-q4 .me-todo-quad-title { color: var(--dsw-static-neutral-5, #8b8d98); }

.me-todo-quad-count {
  flex: none;
  min-width: 18px;
  box-sizing: border-box;
  padding: 1px 6px;
  border-radius: 9px;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: var(--dsw-alias-label-secondary);
  background: color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);
}

.me-todo-quad-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 8px 10px;
}

.me-todo-quad-empty {
  margin: 12px 4px;
  padding: 16px 8px;
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
  border: 1px dashed var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 8px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent);
}

/* \u770B\u677F\u5361\u7247 */
.me-todo-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
  transition: border-color 120ms ease, box-shadow 120ms ease;
}

.me-todo-card:hover {
  border-color: var(--dsw-alias-border-l3);
  box-shadow: 0 1px 4px color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent);
}

.me-todo-card--done {
  opacity: 0.72;
}

.me-todo-card--done .me-todo-card-title {
  text-decoration: line-through;
}

.me-todo-card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  min-width: 0;
}

.me-todo-card-title {
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--dsw-alias-label-primary);
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.me-todo-card-body {
  margin: 0;
  font-size: 11px;
  line-height: 1.45;
  color: var(--dsw-alias-label-tertiary);
  white-space: pre-wrap;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.me-todo-card-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 2px;
}

.me-todo-card-foot .me-item-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
}

.me-todo-card-foot .me-btn {
  font-size: 11px;
  padding: 2px 8px;
}

/* \u72B6\u6001\u5FBD\u6807\uFF08\u5217\u8868 + \u770B\u677F\u5171\u7528\uFF09\uFF1B\u53EF\u70B9\u51FB\u5207\u6362\u72B6\u6001 */
.me-badge-status {
  appearance: none;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
}

.me-badge-status:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.me-badge-status:hover:not(:disabled) {
  filter: brightness(1.05);
}

.me-badge-status-pending {
  color: var(--dsw-alias-label-secondary);
  background: color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);
  border-color: color-mix(in srgb, var(--dsw-alias-label-secondary) 30%, transparent);
}

.me-badge-status-doing {
  color: var(--dsw-static-blue-5, #3b82f6);
  background: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-blue-5, #3b82f6) 40%, transparent);
}

.me-badge-status-done {
  color: var(--dsw-static-green-5, #16a34a);
  background: color-mix(in srgb, var(--dsw-static-green-5, #16a34a) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-green-5, #16a34a) 40%, transparent);
}

.me-badge-status-blocked {
  color: var(--dsw-static-red-5, #e5484d);
  background: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-red-5, #e5484d) 40%, transparent);
}

.me-badge-status-cancelled {
  color: var(--dsw-static-neutral-5, #8b8d98);
  background: color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 14%, transparent);
  border-color: color-mix(in srgb, var(--dsw-static-neutral-5, #8b8d98) 35%, transparent);
  text-decoration: line-through;
}

/* \u4F1A\u8BDD\u5934\u90E8\u300C\u590D\u5236\u4F1A\u8BDD ID\u300D\u6309\u94AE\uFF08conversation.session.header.actions \u63D2\u69FD\uFF09\u3002
   \u5C0F\u5C3A\u5BF8\u5E7D\u7075\u6309\u94AE\uFF1A\u8DDF\u968F DSH \u4E3B\u9898 token\uFF0C\u9F20\u6807\u60AC\u505C\u52A0\u6DF1\u3002 */
.me-copy-session-id {
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.35));
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, inherit);
  font-size: 12px;
  line-height: 1;
  padding: 4px 8px;
  cursor: pointer;
  white-space: nowrap;
}
.me-copy-session-id:hover {
  border-color: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.6));
  color: var(--dsw-alias-label-primary, inherit);
}

/* \u4F1A\u8BDD\u522B\u540D\u6309\u94AE\uFF08header actions\uFF0C\u590D\u5236\u4F1A\u8BDD ID \u6309\u94AE\u65C1\uFF09\uFF1A\u5185\u8054\u7F16\u8F91\u533A */
.me-alias-wrap {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.me-alias-editor {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.me-alias-input {
  width: 110px;
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.35));
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  padding: 3px 6px;
  outline: none;
}

.me-alias-input:focus {
  border-color: var(--dsw-alias-state-accent-primary, #4c8dff);
}

.me-alias-notice {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

/* ---- \u6A21\u578B\u8BBE\u7F6E Tab\uFF08models-hub\uFF09----
 * mt-models-* \u524D\u7F00\uFF0Ctoken \u4E0E\u98CE\u683C\u4E0E\u73B0\u6709 mt- \u7C7B\u4E00\u81F4\uFF08\u4E0D\u81EA\u5EFA\u6837\u5F0F\u4F53\u7CFB\uFF09\u3002
 * \u8868\u683C + \u884C\u5185\u914D\u7F6E\uFF08\u542F\u7528\u5F00\u5173 / \u601D\u8003\u7B49\u7EA7\u6807\u7B7E\u4E0E\u7F16\u8F91\u5668 / \u5907\u6CE8\u8F93\u5165\uFF09\u3002 */

/* \u8868\u683C\u6EDA\u52A8\u5BB9\u5668\uFF08\u8868\u683C\u53EF\u80FD\u8D85\u51FA\u9762\u677F\u9AD8\u5EA6\uFF09\u3002 */
.mt-models-scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
}

.mt-models-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.mt-models-cell {
  padding: 6px 10px;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  vertical-align: top;
  text-align: left;
  color: var(--dsw-alias-label-primary);
}

.mt-models-table thead .mt-models-cell {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

.mt-models-table tbody .mt-models-row:last-child .mt-models-cell {
  border-bottom: none;
}

/* \u7981\u7528\u884C\uFF1A\u6574\u884C\u964D\u900F\u660E + \u540D\u79F0\u5212\u7EBF\u5F31\u5316\u3002 */
.mt-models-row-muted .mt-models-cell {
  opacity: 0.55;
}

.mt-models-col-enable {
  width: 44px;
}

.mt-models-col-capacity {
  width: 96px;
  white-space: nowrap;
}

.mt-models-col-reasoning {
  min-width: 180px;
}

.mt-models-provider {
  font-weight: 600;
}

.mt-models-tag {
  display: inline-block;
  margin: 1px 4px 1px 0;
  padding: 0 7px;
  border-radius: 9px;
  font-size: 10px;
  line-height: 17px;
  white-space: nowrap;
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-active);
}

.mt-models-tag-rec {
  color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
}

.mt-models-tag-dormant {
  margin-left: 4px;
  color: var(--dsw-alias-state-warning-primary);
  background: var(--dsw-alias-state-warning-tertiary);
}

.mt-models-model {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.mt-models-model-name {
  font-weight: 600;
}

.mt-models-model-id {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  word-break: break-all;
}

.mt-models-capacity {
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-secondary);
}

.mt-models-muted-cell {
  color: var(--dsw-alias-label-tertiary);
}

.mt-models-levels {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  margin-bottom: 2px;
}

.mt-models-level-none {
  font-size: 11px;
  color: var(--dsw-alias-state-error-primary);
}

.mt-models-level-more {
  font-size: 10px;
  color: var(--dsw-alias-label-tertiary);
}

.mt-models-link {
  appearance: none;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--dsw-alias-state-accent-primary, #4c8dff);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}

.mt-models-link:hover {
  text-decoration: underline;
}

.mt-models-link-danger {
  color: var(--dsw-alias-state-error-primary);
}

.mt-models-note {
  width: 100%;
  min-width: 140px;
  box-sizing: border-box;
  padding: 3px 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  transition: border-color 120ms ease, background-color 120ms ease;
}

.mt-models-note:hover {
  border-color: var(--dsw-alias-border-l3);
}

.mt-models-note:focus {
  border-color: var(--dsw-alias-state-accent-primary, #4c8dff);
  background: var(--dsw-alias-bg-base);
}

.mt-models-note::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

/* \u5C55\u5F00\u7684\u601D\u8003\u7B49\u7EA7\u7F16\u8F91\u5668\uFF08\u5360\u6574\u884C\uFF09\u3002 */
.mt-models-expanded {
  padding: 10px 12px;
  background: var(--dsw-alias-interactive-bg-hover);
}

.mt-models-editor {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mt-models-editor-title {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
}

.mt-models-editor-levels {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mt-models-editor-level {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  cursor: pointer;
}

.mt-models-editor-level-name {
  font-weight: 600;
}

.mt-models-editor-level-id {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.mt-models-editor-add {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.mt-models-editor-add .mt-search {
  flex: 0 1 180px;
}

.mt-models-editor-actions {
  display: flex;
  gap: 8px;
}

.mt-models-toggle-label {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  white-space: nowrap;
}

/* \u601D\u8003\u5173\u95ED\u6807\u8BB0\uFF08\u6A21\u578B\u8BBE\u7F6E\u8868\u683C\u884C\u5185\uFF09\u3002 */
.mt-models-tag-off {
  color: var(--dsw-alias-state-error-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);
}

/* \u63A8\u8350\u7B49\u7EA7\u4E0B\u62C9\uFF08\u601D\u8003\u7B49\u7EA7\u7F16\u8F91\u5668\u5185\uFF09\u3002 */
.mt-models-select {
  appearance: none;
  max-width: 260px;
  padding: 3px 24px 3px 8px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 6px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}

.mt-models-select:disabled {
  opacity: 0.5;
  cursor: default;
}

.mt-models-editor-label {
  flex: none;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}

.mt-models-editor-hint {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

/* \u7248\u672C\u68C0\u6D4B\u300C\u53D1\u5E03\u8BF4\u660E\u300D\uFF1A\u4FDD\u7559\u6362\u884C\uFF08tag \u9644\u6CE8\u591A\u884C\u5C55\u793A\uFF0CCodeX \u590D\u5BA1 P1-8\uFF09\u3002 */
.me-notes-pre {
  white-space: pre-wrap;
  word-break: break-word;
}
`;var ri=`/**
 * dsh-memory-evolve \u2014 COI \u8C03\u5EA6 tab \u6837\u5F0F\uFF08coi- \u524D\u7F00\uFF0C\u7531 index.ts \u6CE8\u5165\uFF09\u3002
 * \u989C\u8272\u4E00\u5F8B\u8D70 DSH \u8BBE\u8BA1 token\uFF08--dsw-alias-* / --dsw-static-*\uFF09\uFF0C\u6DF1\u6D45\u8272\u81EA\u52A8\u9002\u914D\u3002
 */

.coi-root {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
}

/* ---- \u5B50 Tab \u6761 ---- */
.coi-tabs {
  display: flex;
  gap: 4px;
  padding: 8px 12px 0;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  flex-shrink: 0;
}

.coi-tab {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  border-radius: 6px 6px 0 0;
}

.coi-tab:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.coi-tab-active,
.coi-tab-active:hover {
  color: var(--dsw-alias-brand-primary);
  background: var(--dsw-alias-interactive-bg-active);
  font-weight: 600;
}

/* ---- \u5185\u5BB9\u533A ---- */
.coi-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.coi-pane {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.coi-tasks {
  overflow: hidden;
}

/* ---- \u4EFB\u52A1\u89C6\u56FE\uFF1A\u5DE6\u5217\u8868 + \u53F3\u8BE6\u60C5 ---- */
.coi-split {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 8px;
}

.coi-task-list {
  flex: 0 0 46%;
  min-width: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  padding: 4px;
}

.coi-task-row {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  font-size: 12px;
  width: 100%;
}

.coi-task-row:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.coi-task-row-active,
.coi-task-row-active:hover {
  background: var(--dsw-alias-interactive-bg-active);
}

.coi-task-status {
  flex-shrink: 0;
}

.coi-task-id {
  flex-shrink: 0;
  color: var(--dsw-alias-label-tertiary);
}

.coi-task-adapter {
  flex-shrink: 0;
  color: var(--dsw-alias-brand-primary);
}

.coi-task-prompt {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.coi-task-time {
  flex-shrink: 0;
  font-size: 11px;
}

.coi-detail {
  flex: 1;
  min-width: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  padding: 10px;
}

.coi-detail-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.coi-meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coi-meta-row .coi-label {
  min-width: 64px;
}

.coi-detail-actions {
  display: flex;
  gap: 8px;
}

.coi-log-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.coi-log-title {
  margin-top: 4px;
}

.coi-log {
  flex: 1;
  min-height: 220px;
  max-height: 45vh;
  overflow: auto;
  margin: 0;
  padding: 8px;
  border-radius: 6px;
  background: var(--dsw-alias-markdown-code-block);
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}

.coi-guide {
  margin: 4px 0 0;
  padding: 8px;
  border-radius: 6px;
  background: var(--dsw-alias-markdown-code-block);
  color: var(--dsw-alias-label-secondary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 40vh;
  overflow: auto;
}

/* ---- \u5361\u7247 / \u8868\u5355 ---- */
.coi-card {
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.coi-card-title {
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}

/* \u5361\u7247\u5934\u90E8\u884C\uFF1A\u6807\u9898 + \u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE\uFF08\u5982\u53D1\u8D77\u8868\u5355\u7684\u5C55\u5F00/\u6536\u8D77\uFF09 */
.coi-card-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coi-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.coi-adapter-card {
  gap: 4px;
}

.coi-form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* \u7EB5\u5411\u5361\u7247\u91CC\u7684\u5B57\u6BB5\uFF1Aflex-basis \u53EA\u7528\u4E8E\u6A2A\u5411\u7F51\u683C\uFF08\u5BBD\u5EA6\uFF09\uFF0C
   \u7EB5\u5411\u6392\u5217\u65F6\u7981\u6B62\u6309 180px \u9AD8\u5EA6\u62C9\u4F38\uFF08\u5426\u5219\u6BCF\u4E2A\u5B57\u6BB5\u4E0B\u65B9\u7559\u5927\u7247\u7A7A\u767D\uFF09 */
.coi-card > .coi-field {
  flex: none;
}

.coi-field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1 1 180px;
  min-width: 0;
}

.coi-field-wide {
  flex-basis: 100%;
}

.coi-label {
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
}

/* \u8868\u5355\u5185\u914D\u7F6E\u533A\u5757\u6807\u9898\uFF08\u5982"\u4F1A\u8BDD\u6062\u590D\u914D\u7F6E"\uFF09\uFF1A\u5206\u9694\u7EBF + \u5F3A\u8C03\u8272\uFF0C\u4E0E\u666E\u901A label \u533A\u5206 */
.coi-resume-section {
  flex-basis: 100%;
  border-top: 1px dashed var(--dsw-alias-interactive-bg-hover);
  padding-top: 6px;
  margin-top: 2px;
}
.coi-resume-section .coi-label {
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

/* \u6CE8\u5165\u8F68\u52FE\u9009\u884C\uFF1A\u4E09\u4E2A checkbox \u6A2A\u5411\u6392\u5217 */
.coi-inject-track-line {
  flex-direction: row;
  gap: 16px;
}

/* \u9002\u914D\u5668\u5361\u7247\uFF1A\u5E73\u5747\u8017\u65F6\u5FBD\u6807\uFF08\u6709\u5B8C\u6210\u8BB0\u5F55\u624D\u6E32\u67D3\uFF09 */
.coi-avg-ms {
  color: var(--dsw-alias-state-success-primary);
  font-weight: 600;
}

.coi-input,
.coi-select,
.coi-textarea {
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  padding: 6px 8px;
  font-size: 13px;
  font-family: inherit;
  outline: none;
  min-width: 0;
}

.coi-input:focus,
.coi-select:focus,
.coi-textarea:focus {
  border-color: var(--dsw-alias-brand-primary);
}

.coi-textarea {
  resize: vertical;
}

.coi-form-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* ---- \u6309\u94AE ---- */
.coi-btn {
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-button-tool-bar-fill);
  color: var(--dsw-alias-interactive-fg-default);
  padding: 6px 14px;
  font-size: 13px;
  cursor: pointer;
}

.coi-btn:hover {
  background: var(--dsw-alias-button-tool-bar-hover);
}

.coi-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.coi-btn-primary {
  background: var(--dsw-alias-button-primary-fill);
  border-color: transparent;
  color: var(--dsw-alias-label-primary-inverted);
}

.coi-btn-primary:hover {
  background: var(--dsw-alias-button-primary-hover);
}

.coi-btn-danger {
  color: var(--dsw-alias-state-error-primary);
}

.coi-btn-danger:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger);
}

.coi-btn-mini {
  padding: 2px 8px;
  font-size: 12px;
}

/* ---- \u5DE5\u5177\u6761 / \u5217\u8868\u884C ---- */
.coi-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

.coi-toolbar .coi-input {
  flex: 1;
}

.coi-row {
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}

.coi-row-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-wrap: wrap;
}

.coi-grow {
  flex: 1;
  min-width: 0;
}

/* ---- \u5FBD\u6807 / \u72B6\u6001\u8272 ---- */
.coi-badge {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  flex-shrink: 0;
}

.coi-status-queued {
  color: var(--dsw-alias-label-tertiary);
}

.coi-status-running {
  color: var(--dsw-alias-state-business-primary);
}

.coi-status-completed {
  color: var(--dsw-alias-state-success-primary);
}

.coi-status-failed {
  color: var(--dsw-alias-state-error-primary);
}

.coi-status-killed {
  color: var(--dsw-alias-state-warn-primary);
}

.coi-status-interrupted {
  color: var(--dsw-alias-state-warn-primary);
}

/* ---- \u63D0\u793A ---- */
.coi-notice {
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  flex-shrink: 0;
}

.coi-notice-ok {
  background: var(--dsw-alias-state-success-tertiary);
  color: var(--dsw-alias-state-success-primary);
}

.coi-notice-error {
  /* \u80CC\u666F error-secondary \u4E0E\u6587\u5B57 error-primary \u5728\u6697\u8272\u4E3B\u9898\u4E0B\u540C\u8272\uFF08\u5747 red-400\uFF09\uFF0C
     \u5FC5\u987B\u7528\u8DE8\u4E3B\u9898\u56FA\u5B9A\u7684\u6DF1\u7EA2\u505A\u6587\u5B57\u8272\uFF0C\u5426\u5219\u6587\u5B57\u4E0D\u53EF\u89C1\uFF08\u66FE\u8868\u73B0\u4E3A"\u7A7A\u7EA2\u6846"\uFF09\u3002 */
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-static-red-900);
}

.coi-error {
  padding: 6px 10px;
  border-radius: 6px;
  background: var(--dsw-alias-state-error-secondary);
  /* \u540C\u4E0A\uFF1A\u6697\u8272\u4E3B\u9898\u4E0B error-primary \u4E0E\u80CC\u666F\u540C\u8272\uFF0C\u56FA\u5B9A\u6DF1\u7EA2\u4FDD\u8BC1\u53EF\u8BFB */
  color: var(--dsw-static-red-900);
  font-size: 12px;
  flex-shrink: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ---- \u7EDF\u8BA1 ---- */
.coi-stat-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex-shrink: 0;
}

.coi-stat-card {
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  flex: 1 1 140px;
}

.coi-stat-num {
  font-size: 24px;
  font-weight: 700;
  color: var(--dsw-alias-brand-primary);
}

/* ---- \u6742\u9879 ---- */
.coi-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

.coi-small {
  font-size: 11px;
}

.coi-muted {
  color: var(--dsw-alias-label-tertiary);
}

.coi-strong {
  font-weight: 600;
}

.coi-pad {
  padding: 12px;
}

/* ---- \u65E5\u5FD7\u5168\u5C4F\u5F39\u7A97 ---- */
.coi-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.coi-modal-box {
  display: flex;
  flex-direction: column;
  width: 92vw;
  height: 88vh;
  max-width: 1400px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-overlay);
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  overflow: hidden;
}

.coi-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-interactive-bg-hover);
  flex-shrink: 0;
}

.coi-log-full {
  flex: 1;
  min-height: 0;
  max-height: none;
  overflow: auto;
  border-radius: 0;
  margin: 0;
}

/* ---- \u5C0F\u65F6/\u5206\u949F\u6A2A\u6392 ---- */
.coi-inline {
  display: flex;
  align-items: center;
  gap: 6px;
}

.coi-inline .coi-input {
  width: 88px;
  flex-shrink: 0;
}

/* ---- \u53D1\u8D77\u4EFB\u52A1\u5927\u8F93\u5165\u6846 ---- */
.coi-textarea-lg {
  min-height: 130px;
}

/* ---- \u6280\u80FD\u7F16\u8F91\u5F39\u7A97\u7F16\u8F91\u5668 ---- */
.coi-skill-editor {
  flex: 1;
  min-height: 0;
  margin: 0 12px 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre;
  overflow: auto;
}

.coi-skill-tag {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}

/* ---- \u4EFB\u52A1\u5217\u8868\u641C\u7D22\u680F ---- */
.coi-task-toolbar {
  padding: 0 12px;
  flex-shrink: 0;
}

.coi-task-toolbar .coi-input {
  width: 100%;
}

/* ---- \u4EFB\u52A1\u5217\u8868\u5206\u9875 ---- */
.coi-pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  flex-shrink: 0;
}

.coi-pager .coi-btn-mini:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.coi-pager-info {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
  white-space: nowrap;
}

/* ---- \u8BE6\u60C5\uFF1A\u4EFB\u52A1\u5185\u5BB9\uFF08\u53EA\u8BFB\uFF0C\u5C0F\u533A\u57DF\uFF0C\u53EF\u6EDA\u52A8\uFF09 ---- */
.coi-prompt-view {
  max-height: 120px;
  overflow: auto;
  margin: 0;
  padding: 8px;
  border-radius: 6px;
  background: var(--dsw-alias-markdown-code-block);
  color: var(--dsw-alias-label-primary);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}

.coi-prompt-view-full {
  white-space: pre-wrap;
  word-break: break-all;
}
`;var li=`/**
 * dsh-memory-evolve \u2014 \u63D0\u793A\u8BCD tab \u6837\u5F0F\uFF08pm- \u524D\u7F00\uFF09\u3002
 * \u5E03\u5C40\uFF1A\u9876\u680F\uFF08\u641C\u7D22/\u7B5B\u9009/\u6309\u94AE\uFF09+ \u4E09\u680F\u4E3B\u4F53\uFF08\u5206\u7C7B\u6811 / \u5217\u8868 / \u8BE6\u60C5\u8868\u5355\uFF09\u3002
 * \u989C\u8272\u5168\u90E8\u4F7F\u7528 DSH \u8BBE\u8BA1 token\uFF08--dsw-alias-* / --dsw-static-*\uFF09\uFF0C\u6DF1\u6D45\u8272
 * \u81EA\u52A8\u9002\u914D\uFF1B\u9AD8\u5EA6\u94FA\u6EE1\u7236\u5BB9\u5668\uFF08conversation.view \u7684 tab \u5BB9\u5668\u662F flex \u5217\uFF09\u3002
 */

.pm-root {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
}

/* ---------- \u9876\u680F ---------- */
.pm-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.pm-search {
  flex: 1;
  min-width: 0;
  height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  outline: none;
}
.pm-search:focus {
  border-color: var(--dsw-alias-brand-primary);
}
.pm-search::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.pm-select {
  height: 30px;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  outline: none;
  cursor: pointer;
  max-width: 140px;
}

.pm-tool-btn {
  height: 30px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-button-tool-bar-fill);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}
.pm-tool-btn:hover {
  background: var(--dsw-alias-button-tool-bar-hover);
}
.pm-tool-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.pm-primary-btn {
  height: 30px;
  padding: 0 12px;
  border: none;
  border-radius: 6px;
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary-inverted);
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}
.pm-primary-btn:hover {
  background: var(--dsw-alias-button-primary-hover);
}

.pm-danger-btn {
  height: 30px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-state-error-secondary);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-state-error-primary);
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
}
.pm-danger-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger);
}

/* ---------- \u9876\u680F\u6D88\u606F\u6A2A\u5E45 ---------- */
.pm-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  background: var(--dsw-alias-state-success-tertiary);
  color: var(--dsw-alias-state-success-primary);
  font-size: 12px;
  flex-shrink: 0;
}
.pm-banner-error {
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-alias-state-error-primary);
}
.pm-banner-close {
  margin-left: auto;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
}

/* ---------- \u6D6E\u5C42\uFF08\u6CE8\u5165\u4E2D / \u6765\u6E90\uFF09 ---------- */
.pm-overlay {
  position: absolute;
  top: 46px;
  right: 8px;
  z-index: 50;
  width: 320px;
  max-width: calc(100vw - 48px);
  max-height: 60vh;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pm-overlay-wide {
  width: 420px;
}
.pm-overlay-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
}
.pm-overlay-sub {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.pm-overlay-empty {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
  padding: 4px 0;
}
.pm-overlay-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-overlay-item-main {
  flex: 1;
  min-width: 0;
}
.pm-overlay-item-title {
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pm-overlay-item-sub {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
}
.pm-overlay-remove {
  flex-shrink: 0;
}
.pm-source-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-source-link {
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-brand-primary);
  text-decoration: none;
}
.pm-source-link:hover {
  text-decoration: underline;
}
.pm-source-desc {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
}

/* ---------- \u4E09\u680F\u4E3B\u4F53 ---------- */
.pm-body {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 8px;
  position: relative;
}

/* \u5DE6\uFF1A\u5206\u7C7B\u6811 */
.pm-pane-cats {
  width: 130px;
  flex-shrink: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}
.pm-cat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 6px 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}
.pm-cat:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-cat-active {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-brand-primary);
  font-weight: 600;
}
.pm-cat-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pm-cat-count {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  flex-shrink: 0;
}

/* \u5206\u7C7B\u884C\uFF08\u542B\u5220\u9664\u6309\u94AE\uFF09\u4E0E\u5206\u7C7B\u7BA1\u7406\uFF08\u6DFB\u52A0/\u5220\u9664\uFF09 */
.pm-cat-row {
  display: flex;
  align-items: center;
  gap: 2px;
}
.pm-cat-row .pm-cat {
  flex: 1;
  min-width: 0;
}
.pm-cat-del {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
}
.pm-cat-row:hover .pm-cat-del {
  opacity: 1;
}
.pm-cat-del:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger);
  color: var(--dsw-alias-state-error-primary);
}
.pm-cat-add-btn {
  margin-top: 4px;
  padding: 5px 8px;
  border: 1px dashed var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  cursor: pointer;
  text-align: left;
}
.pm-cat-add-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-brand-primary);
}
.pm-cat-add {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}
.pm-cat-add-input {
  flex: 1;
  min-width: 0;
  height: 24px;
  padding: 0 6px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 4px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  outline: none;
}
.pm-cat-add-input:focus {
  border-color: var(--dsw-alias-brand-primary);
}
.pm-cat-add-ok {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 4px;
  background: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-label-primary-inverted);
  font-size: 12px;
  cursor: pointer;
}

/* \u4E2D\uFF1A\u5217\u8868 */
.pm-pane-list {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}
.pm-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  text-align: left;
}
.pm-item:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-item-active {
  background: var(--dsw-alias-interactive-bg-active);
}
.pm-item-row1 {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
}
.pm-item-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pm-item-badge {
  flex-shrink: 0;
  padding: 1px 6px;
  border-radius: 8px;
  font-size: 10px;
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-item-badge-active {
  color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
  font-weight: 600;
}
/* \u7981\u7528\u63D0\u793A\u8BCD\uFF1A\u5217\u8868\u7F6E\u7070 + \u300C\u5DF2\u7981\u7528\u300D\u5FBD\u6807\uFF08AI \u7684 de_prompts \u5217\u8868\u770B\u4E0D\u5230\u5B83\uFF09 */
.pm-item-disabled .pm-item-name {
  color: var(--dsw-alias-label-tertiary);
  text-decoration: line-through;
}
.pm-item-badge-off {
  color: var(--dsw-alias-label-tertiary);
  background: var(--dsw-alias-interactive-bg-hover);
}
.pm-inject-status {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
}
.pm-item-summary {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pm-item-row3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}
.pm-item-usage,
.pm-item-used {
  font-size: 10px;
  color: var(--dsw-alias-label-tertiary);
}
.pm-pane-empty {
  padding: 24px 12px;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
  text-align: center;
}

/* \u53F3\uFF1A\u8BE6\u60C5\u8868\u5355 */
.pm-pane-detail {
  width: 42%;
  min-width: 260px;
  flex-shrink: 0;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
}
.pm-detail-hint {
  padding: 24px 12px;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
  text-align: center;
}
.pm-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
}
.pm-form-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
  flex-shrink: 0;
}

/* \u5FEB\u901F\u6CE8\u5165\uFF08\u4E34\u65F6\u6CE8\u5165\uFF09\u8BF4\u660E\u6587\u5B57 */
.pm-quick-sub {
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-secondary);
  flex-shrink: 0;
}

/* \u6CE8\u5165\u53C2\u6570\u6570\u5B57\u8F93\u5165\u6846\uFF08\u6B21\u6570/\u95F4\u9694\uFF0C\u81EA\u7531\u8F93\u5165\u4EFB\u610F\u6574\u6570\uFF09 */
.pm-num-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
}
.pm-num-field {
  flex: 1;
  min-width: 0;
}
.pm-num-input {
  width: 100%;
  box-sizing: border-box;
}
.pm-field-hint {
  margin-left: 6px;
  font-weight: 400;
  color: var(--dsw-alias-label-tertiary);
}

/* \u6CE8\u5165\u6548\u679C\u5373\u65F6\u9884\u89C8\uFF08\u6B21\u6570 \xD7 \u95F4\u9694 \u2192 \u5B9E\u9645\u884C\u4E3A\u8BF4\u660E\uFF0C\u6362\u884C\u663E\u793A\u5728\u53C2\u6570\u533A\u4E0B\u65B9\uFF09 */
.pm-effect-hint {
  width: 100%;
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-label-secondary);
  flex-shrink: 0;
}

/* \u81EA\u5B9A\u4E49\u6CE8\u5165\u533A\uFF08\u9884\u8BBE\u6309\u94AE\u4E4B\u5916\u7684\u81EA\u7531\u8F93\u5165\uFF0C\u9ED8\u8BA4\u6536\u8D77\uFF09 */
.pm-custom-zone {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px dashed var(--dsw-alias-interactive-bg-hover);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  flex-shrink: 0;
}
.pm-custom-zone-inline {
  /* \u5728 flex-wrap \u7684 pm-actions \u91CC\u5360\u6EE1\u6574\u884C\uFF0C\u4E0E\u9884\u8BBE\u6309\u94AE\u7EC4\u5206\u884C\u663E\u793A */
  flex-basis: 100%;
}
.pm-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}
/* \u542F\u7528\u72B6\u6001\u884C\uFF1Alabel \u4E0E\u5F00\u5173\u6309\u94AE\u6A2A\u6392 */
.pm-enable-row {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.pm-toggle {
  flex-shrink: 0;
  padding: 3px 12px;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 10px;
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-bg-base);
  cursor: pointer;
}
.pm-toggle-on {
  color: var(--dsw-alias-state-success-primary);
  border-color: var(--dsw-alias-state-success-tertiary);
  background: var(--dsw-alias-state-success-tertiary);
  font-weight: 600;
}
.pm-field-grow {
  flex: 1;
  min-height: 0;
}
.pm-field-label {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary);
}
.pm-input {
  height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  outline: none;
}
.pm-input:focus {
  border-color: var(--dsw-alias-brand-primary);
}
.pm-textarea {
  flex: 1;
  min-height: 120px;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 1px solid var(--dsw-alias-interactive-bg-hover);
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  font-family: var(--dsw-font-family-mono);
  line-height: 1.5;
  resize: none;
  outline: none;
}
.pm-textarea:focus {
  border-color: var(--dsw-alias-brand-primary);
}
.pm-textarea::placeholder {
  color: var(--dsw-alias-label-tertiary);
}
.pm-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.pm-inject-group {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pm-rounds {
  max-width: 170px;
}
.pm-dirty-hint {
  font-size: 11px;
  color: var(--dsw-alias-state-warn-primary);
  flex-shrink: 0;
}
`;var di=`/* \u4F1A\u8BDD\u5E7F\u64AD\u7BA1\u7406 Tab\uFF08bb- \u524D\u7F00\uFF0C\u72EC\u7ACB\u6CE8\u5165\uFF1B\u5E7F\u64AD\u6A21\u5757\u72EC\u7ACB\u6837\u5F0F\uFF09\u3002
   \u5168\u90E8\u989C\u8272\u8D70 --dsw-alias-*/--dsw-static-* token\uFF0C\u8DDF\u968F\u660E\u6697\u4E3B\u9898\u3002
   \u5B50 Tab \u76F4\u63A5\u590D\u7528\u5168\u5C40 mt-file-tabs / mt-file-tab / mt-file-tab-active
   \uFF08\u4E0E\u8BB0\u5FC6/\u5F85\u529E/\u6280\u80FD\u7B49 Tab \u7684\u5B50 Tab \u96F6\u5DEE\u5F02\uFF09\uFF0C\u6B64\u5904\u4E0D\u518D\u5B9A\u4E49\u3002 */

/* ---------- \u6839\u9762\u677F ---------- */

.bb-pane {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px 2px 20px;
  font-family: var(--dsw-font-family, inherit);
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
}

.bb-grow {
  flex: 1 1 auto;
  min-width: 0;
}

/* ---------- \u4F1A\u8BDD ID \u884C\uFF08\u4F4D\u4E8E\u5B50 Tab \u4E0B\u65B9\uFF09 ---------- */

.bb-session-line {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1);
  font-size: 12px;
}

.bb-session-label {
  color: var(--dsw-alias-label-secondary);
  flex: none;
}

.bb-session-line code,
.bb-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
}

/* ---------- \u5217\u8868\u4E0E\u5361\u7247 ---------- */

.bb-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bb-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.bb-card:hover {
  border-color: var(--dsw-alias-border-l, rgba(128, 128, 128, 0.4));
  box-shadow: 0 2px 6px color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent);
}

/* \u5C55\u5F00\u4E2D\u7684\u623F\u95F4\u5361\u7247\uFF1A\u7565\u62AC\u5347\u5C42\u6B21 */
.bb-card-open {
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, var(--dsw-alias-border-l2));
  box-shadow: 0 2px 8px color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
}

.bb-card-dissolved {
  opacity: 0.78;
}

.bb-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.bb-strong {
  font-weight: 600;
  font-size: 13px;
  color: var(--dsw-alias-label-primary);
}

.bb-muted {
  color: var(--dsw-alias-label-tertiary);
}

.bb-small {
  font-size: 12px;
}

/* \u623F\u95F4\u5143\u4FE1\u606F\u884C\uFF08id / \u521B\u5EFA\u65F6\u95F4 / \u590D\u5236\uFF09 */
.bb-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u5206\u533A\u5C0F\u6807\u9898\uFF08\u6210\u5458 / \u623F\u95F4\u6D88\u606F\uFF09 */
.bb-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary);
  margin-bottom: 2px;
}

.bb-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  color: var(--dsw-alias-state-business-primary, var(--dsw-alias-label-secondary));
  background: var(--dsw-alias-state-business-tertiary, var(--dsw-alias-interactive-bg-hover));
}

/* ---------- \u5FBD\u6807 ---------- */

.bb-badge {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  line-height: 1.2;
  padding: 2px 8px;
  border-radius: 9px;
  color: var(--dsw-alias-label-tertiary);
  background: var(--dsw-alias-interactive-bg-hover);
  white-space: nowrap;
}

.bb-badge-long {
  color: var(--dsw-static-amber-5, #f59e0b);
  background: color-mix(in srgb, var(--dsw-static-amber-5, #f59e0b) 14%, transparent);
}

.bb-badge-unread {
  color: var(--dsw-static-red-900, #c53030);
  background: color-mix(in srgb, var(--dsw-static-red-900, #c53030) 12%, transparent);
}

.bb-badge-read {
  color: var(--dsw-alias-label-tertiary);
  background: var(--dsw-alias-interactive-bg-hover);
}

.bb-badge-online {
  color: var(--dsw-alias-state-success-primary, #2f9e44);
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary, #2f9e44) 14%, transparent);
}

.bb-badge-dissolved {
  color: var(--dsw-alias-state-error-primary, #e5484d);
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary, #e5484d) 12%, transparent);
}

/* ---------- \u5728\u7EBF\u72B6\u6001\u70B9 ---------- */

.bb-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex: none;
  box-shadow: 0 0 0 2px color-mix(in srgb, currentColor 12%, transparent);
}

.bb-dot-on {
  background: var(--dsw-alias-state-success-primary, #2f9e44);
  color: var(--dsw-alias-state-success-primary, #2f9e44);
}

.bb-dot-idle {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.5));
  color: var(--dsw-alias-label-tertiary);
  box-shadow: none;
}

.bb-dot-off {
  background: var(--dsw-alias-state-error-primary, #e5484d);
  color: var(--dsw-alias-state-error-primary, #e5484d);
}

/* ---------- \u6D88\u606F\u5168\u6587 ---------- */

.bb-content {
  margin: 4px 0 0;
  padding: 10px 12px;
  max-height: 320px;
  overflow: auto;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  word-break: break-word;
  background: var(--dsw-alias-bg-base);
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  color: var(--dsw-alias-label-primary);
}

/* ---------- \u6210\u5458\u5217\u8868 ---------- */

.bb-members {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
  padding: 10px 12px;
  background: var(--dsw-alias-bg-base);
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
}

.bb-member {
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 6px;
  transition: background 0.12s ease;
}

.bb-member:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

/* ---------- \u6309\u94AE ---------- */

.bb-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.35));
  border-radius: 6px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
  line-height: 1.2;
  padding: 4px 10px;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease, color 0.12s ease;
}

.bb-btn:hover:not(:disabled) {
  border-color: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.6));
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.bb-btn:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active, var(--dsw-alias-interactive-bg-hover));
}

.bb-btn:disabled {
  opacity: 0.45;
  cursor: default;
}

.bb-btn:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, var(--dsw-alias-brand-primary));
  outline-offset: 1px;
}

.bb-btn-mini {
  font-size: 11px;
  padding: 3px 8px;
}

/* \u623F\u95F4\u8BE6\u60C5\u4E3B\u64CD\u4F5C\uFF1A\u6B63\u5E38\u5C3A\u5BF8\uFF0C\u6613\u70B9 */
.bb-btn-detail {
  font-size: 12px;
  padding: 6px 12px;
  font-weight: 500;
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent);
}

.bb-btn-detail:hover:not(:disabled) {
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
  color: var(--dsw-alias-brand-primary);
}

.bb-btn-primary {
  border-color: var(--dsw-alias-state-accent-primary, #4c8dff);
  color: var(--dsw-alias-state-accent-primary, #4c8dff);
}

/* \u5371\u9669\u6309\u94AE\uFF1A**\u5B9E\u5E95\u7EA2 + \u767D\u5B57**\uFF08\u7528\u6237\u53CD\u9988\u6D45\u7EA2\u5E95/\u7EA2\u5B57\u5728\u6697\u8272\u4E3B\u9898\u4E0B\u770B\u4E0D\u6E05\uFF1B
   \u5B9E\u5E95\u4FDD\u8BC1\u4EFB\u4F55\u4E3B\u9898\u4E0B\u90FD\u9192\u76EE\uFF09\uFF0Chover \u52A0\u6DF1 */
.bb-btn-danger {
  color: #fff;
  border-color: var(--dsw-static-red-900, #c53030);
  background: var(--dsw-static-red-900, #c53030);
}

.bb-btn-danger:hover:not(:disabled) {
  background: color-mix(in srgb, var(--dsw-static-red-900, #c53030) 82%, #000);
  border-color: color-mix(in srgb, var(--dsw-static-red-900, #c53030) 82%, #000);
  color: #fff;
}

/* ---------- \u7B5B\u9009\u82AF\u7247\uFF08\u6D88\u606F/\u623F\u95F4\u6D88\u606F\u5DE5\u5177\u680F\uFF1B\u975E\u4E3B Tab\uFF09 ---------- */

.bb-chip {
  appearance: none;
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  line-height: 1.2;
  color: var(--dsw-alias-label-secondary);
  background: transparent;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease, color 0.12s ease;
}

.bb-chip:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.bb-chip-active {
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
  font-weight: 500;
}

.bb-chip-active:hover {
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent);
}

/* ---------- \u5DE5\u5177\u680F\uFF08\u7B5B\u9009 + \u641C\u7D22\uFF09\u4E0E\u5206\u9875 ---------- */

.bb-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 2px 0;
}

.bb-search {
  flex: 1 1 160px;
  min-width: 0;
  appearance: none;
  border: 1px solid var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.35));
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  padding: 6px 10px;
  outline: none;
  transition: border-color 0.12s ease;
}

.bb-search::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.bb-search:hover {
  border-color: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.5));
}

.bb-search:focus {
  border-color: var(--dsw-alias-state-accent-primary, #4c8dff);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-accent-primary, #4c8dff) 18%, transparent);
}

.bb-pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 0 2px;
}

/* ---------- \u7A7A\u72B6\u6001 ---------- */

.bb-empty {
  margin: 0;
  padding: 22px 14px;
  border: 1px dashed var(--dsw-alias-border-l3, var(--dsw-alias-border-l2));
  border-radius: 10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent);
}

.bb-empty-sm {
  padding: 14px 10px;
}

.bb-hint {
  margin-top: 6px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 12px;
}

/* ---------- \u623F\u95F4\u6D88\u606F\u533A\u5757\uFF08\u5C55\u5F00\u540E\uFF0C\u5B9E\u7EBF\u5361\u7247\u5C42\u6B21\uFF0C\u544A\u522B\u865A\u7EBF\u6846\uFF09 ---------- */

.bb-room-msgs {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
  padding: 12px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
}

/* \u623F\u95F4\u6D88\u606F\u5185\u7684\u5361\u7247\u7565\u964D\u7EA7\uFF0C\u907F\u514D\u4E0E\u5916\u5C42\u623F\u95F4\u5361\u53CC\u91CD\u9634\u5F71\u8FC7\u91CD */
.bb-room-msgs .bb-card {
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: none;
}

.bb-room-msgs .bb-card:hover {
  box-shadow: 0 1px 3px color-mix(in srgb, var(--dsw-alias-label-primary) 5%, transparent);
}

/* ---------- \u901A\u77E5 / \u9519\u8BEF ---------- */

.bb-notice {
  font-size: 12px;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
}

.bb-notice-ok {
  color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
  border: 1px solid var(--dsw-alias-state-success-primary);
}

.bb-notice-error {
  color: var(--dsw-static-red-900, #c53030);
  background: color-mix(in srgb, var(--dsw-static-red-900, #c53030) 10%, transparent);
  border: 1px solid var(--dsw-alias-state-error-secondary);
}

.bb-error {
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-static-red-900, #c53030);
  padding: 8px 12px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--dsw-static-red-900, #c53030) 8%, transparent);
  border: 1px solid var(--dsw-alias-state-error-secondary, color-mix(in srgb, var(--dsw-static-red-900, #c53030) 35%, transparent));
}

/* \u8BBE\u7F6E\u5B50 Tab\uFF08\u5DE5\u4F5C\u533A\u534F\u8C03 ws-coord \u5B50\u529F\u80FD\u5F00\u5173\uFF09\uFF1A\u9762\u677F\u6807\u9898 + \u8BF4\u660E + \u5F00\u5173\u884C
   \uFF08\u5F00\u5173\u884C\u590D\u7528\u5168\u5C40 me-field/me-switch \u7C7B\uFF0C\u4E0E\u300CMemory Evolve \u8BBE\u7F6E\u300D\u89C6\u89C9\u4E00\u81F4\uFF1B
    me-field-sub \u7F29\u8FDB\u8868\u793A\u5B50\u5F00\u5173\u4F9D\u8D56\u603B\u5F00\u5173\uFF09 */
.bb-settings {
  padding: 4px 2px;
}

.bb-settings-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
  margin-bottom: 4px;
}

.bb-settings-desc {
  font-size: 12px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
  margin: 0 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}

/* ---- \u56FE\u7247\u9644\u4EF6\uFF08P3 2026-08-11\uFF09\uFF1A\u7F29\u7565\u56FE\u6A2A\u6392 + \u70B9\u51FB\u5C55\u5F00\u539F\u56FE ---- */
.bb-attachments {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.bb-att-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

/* 64px \u7F29\u7565\u56FE\u6309\u94AE\uFF08\u65E0\u8FB9\u6846\u65E0\u80CC\u666F\uFF0Chover \u63D0\u4EAE\uFF09 */
.bb-att-thumb {
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.3));
  border-radius: 6px;
  background: none;
  cursor: pointer;
  overflow: hidden;
  line-height: 0;
}

.bb-att-thumb:hover {
  border-color: var(--dsw-alias-label-primary, #888);
}

.bb-att-thumb-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  display: block;
}

/* \u539F\u56FE\u9884\u89C8\uFF1A\u5361\u7247\u5185\u5C55\u5F00\uFF0C\u70B9\u51FB\u4EFB\u610F\u5904\u6536\u8D77 */
.bb-att-preview {
  margin-top: 6px;
  cursor: zoom-out;
  max-width: 100%;
}

.bb-att-preview-img {
  max-width: 100%;
  max-height: 420px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.3));
  display: block;
}

.bb-att-preview-name {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

/* ---- \u8BB0\u5FC6\u540C\u6B65 Tab\uFF08SyncView\uFF09\u4E13\u5C5E\u6837\u5F0F\uFF08sv- \u524D\u7F00\uFF0C2026-08-11 \u7528\u6237\u62CD\u677F
     \u5E03\u5C40\u4E0E\u89C2\u611F\uFF1A\u4E09\u5206\u533A\u5361\u7247\u5316\u3001\u5F00\u5173\u4E0E\u5355\u9009\u884C\u6E05\u6670\u3001\u72B6\u6001\u4FE1\u606F\u6613\u8BFB\uFF09---- */
.sv-section {
  background: var(--dsw-alias-bg-layer-1, rgba(128, 128, 128, 0.04));
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  padding: 12px 14px;
  margin-bottom: 12px;
}

.sv-section-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--dsw-alias-label-primary);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.sv-section-title::before {
  content: '';
  width: 3px;
  height: 14px;
  border-radius: 2px;
  background: var(--dsw-alias-brand-primary, #4a90d9);
  flex-shrink: 0;
}

/* \u5F00\u5173\u884C\uFF08\u672C\u9879\u76EE\u540C\u6B65 / \u5168\u5C40\u8F68\uFF09\uFF1A\u4E0E me-field \u7ED3\u5408\uFF0C\u5361\u7247\u5185\u95F4\u8DDD\u7EDF\u4E00 */
.sv-section .me-field {
  padding: 6px 0;
  border-bottom: 1px dashed var(--dsw-alias-border-l2);
}

.sv-section .me-field:last-child {
  border-bottom: none;
}

/* \u5355\u9009\u884C\uFF08A/B \u6A21\u5F0F\uFF09 */
.sv-radio-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  margin-bottom: 8px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.sv-radio-row:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.06));
}

.sv-radio-row.sv-radio-active {
  border-color: var(--dsw-alias-brand-primary, #4a90d9);
  background: var(--dsw-alias-interactive-bg-hover, rgba(74, 144, 217, 0.08));
}

.sv-radio-row input[type='radio'] {
  margin-top: 3px;
  flex-shrink: 0;
}

.sv-radio-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary);
  display: block;
}

.sv-radio-desc {
  font-size: 11px;
  line-height: 1.5;
  color: var(--dsw-alias-label-tertiary);
  display: block;
  margin-top: 2px;
}

/* \u72B6\u6001\u4FE1\u606F\u884C */
.sv-status {
  font-size: 12px;
  line-height: 1.7;
  color: var(--dsw-alias-label-secondary);
  padding: 10px 12px;
  background: var(--dsw-alias-bg-base, rgba(0, 0, 0, 0.02));
  border-radius: 8px;
  margin-bottom: 12px;
}

.sv-status strong {
  color: var(--dsw-alias-label-primary);
}

.sv-status .sv-status-url {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11px;
  word-break: break-all;
}

/* \u5F53\u524D\u6A21\u5F0F\u5FBD\u6807 */
.sv-current-badge {
  font-size: 11px;
  color: var(--dsw-alias-brand-primary, #4a90d9);
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 2px 10px;
  white-space: nowrap;
}

/* \u64CD\u4F5C\u6309\u94AE\u884C */
.sv-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
}
`;var ci=`/**
 * Skill Browser \u5168\u90E8\u6837\u5F0F\uFF08\u666E\u901A CSS\uFF0C\u7C7B\u540D sb- \u524D\u7F00\uFF09\u3002
 * \u989C\u8272\u4E00\u5F8B\u8D70 DSH \u8BBE\u8BA1 token\uFF08--dsw-alias-*\uFF09\uFF0C\u9759\u6001\u8272\u677F\u7528 --dsw-static-* \u5E76\u5E26
 * alias \u515C\u5E95\uFF1B\u6DF1/\u6D45\u8272\u7531 body[data-ds-dark-theme] \u5207\u6362 token \u81EA\u52A8\u9002\u914D\u3002
 */

/* ---------- \u5E03\u5C40\u9AA8\u67B6 ---------- */

.sb-root {
  flex: 1;
  min-height: 0;
  /* The settings \`.options\` container is a plain block scroll box (not a
     flex parent), so flex:1 alone collapses the root to content height.
     height:100% fills the determined parent height in both contexts. */
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: var(--dsw-font-family);
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
  overflow: hidden;
}

.sb-body {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
}

.sb-spacer {
  flex: 1;
  min-width: 8px;
}

/* ---------- \u5DE6\u680F\uFF1A\u5DE5\u5177\u6761 + \u4E0A\u4E0B\u5206\u533A ---------- */

.sb-side {
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.sb-side-toolbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l);
}

.sb-search {
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  color: var(--dsw-alias-label-tertiary);
}

.sb-search-icon {
  position: absolute;
  left: 8px;
  pointer-events: none;
}

.sb-search-input {
  width: 100%;
  height: 30px;
  padding: 0 28px 0 28px;
  font: inherit;
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-base));
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
  outline: none;
}

.sb-search-input::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.sb-search-input:focus-visible {
  border-color: var(--dsw-alias-brand-primary);
  outline: 1px solid var(--dsw-alias-brand-primary);
}

.sb-search-clear {
  position: absolute;
  right: 4px;
  display: flex;
  align-items: center;
  padding: 2px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  cursor: pointer;
}

.sb-search-clear:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
}

.sb-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
}

.sb-icon-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.sb-icon-btn:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active);
}

.sb-icon-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

/* ---------- \u4E24\u680F\u5E03\u5C40\uFF1A\u5DE6\u680F 45/55 \u5206\u533A\uFF0C\u53F3\u680F\u7F16\u8F91\u5668 ---------- */

.sb-section {
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
}

/* \u4E0A\u90E8\uFF1A\u6280\u80FD\u5217\u8868\uFF0855%\uFF0C\u4E3B\u89C6\u56FE\uFF09\uFF0C\u4E0E\u4E0B\u90E8\u4EE5\u5206\u9694\u7EBF\u9694\u5F00 */
.sb-section--skills {
  flex: 55;
  border-bottom: 1px solid var(--dsw-alias-border-l);
}

/* \u4E0B\u90E8\uFF1A\u9009\u4E2D\u6280\u80FD\u7684\u76EE\u5F55\u6811\uFF0845%\uFF09 */
.sb-section--files {
  flex: 45;
}

.sb-main {
  flex: none;
  width: 42%;
  min-width: 320px;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  border-left: 1px solid var(--dsw-alias-border-l);
}

/* \u7A84\u7A97\u53E3\uFF08\u5F39\u7A97 max-width: calc(100vw - 48px)\uFF09\uFF1A\u7F16\u8F91\u5668\u6536\u7A84\uFF0C\u5DE6\u680F\u8BA9\u4F4D */
@media (max-width: 900px) {
  .sb-main {
    width: 50%;
    min-width: 260px;
  }
}

.sb-pane-head {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l);
}

.sb-pane-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary);
}

.sb-count {
  font-size: 11px;
  line-height: 16px;
  padding: 0 6px;
  border-radius: 8px;
  color: var(--dsw-alias-label-tertiary);
  background: var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-overlay));
}

/* ---------- \u901A\u7528\u63D0\u793A / \u6309\u94AE / \u52A8\u753B ---------- */

.sb-note {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 16px 12px;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-note--error {
  color: var(--dsw-alias-state-error-primary);
}

.sb-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 26px;
  padding: 0 10px;
  font: inherit;
  font-size: 12px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
  white-space: nowrap;
}

.sb-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
}

.sb-btn:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active);
}

.sb-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.sb-btn--primary {
  border-color: transparent;
  background: var(--dsw-alias-button-primary-fill, var(--dsw-alias-brand-primary));
  color: var(--dsw-alias-label-inverted, #fff);
}

.sb-btn--primary:hover:not(:disabled) {
  background: var(--dsw-alias-button-primary-hover, var(--dsw-alias-brand-primary));
}

.sb-btn--primary:disabled {
  background: var(--dsw-alias-button-primary-dimmed, var(--dsw-alias-brand-primary));
}

.sb-btn--ghost {
  border-color: transparent;
  color: var(--dsw-alias-label-secondary);
}

.sb-btn--ghost:active:not(:disabled) {
  background: var(--dsw-alias-button-ghost-active-fill, var(--dsw-alias-interactive-bg-active));
}

.sb-btn--danger {
  border-color: transparent;
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-label-inverted, #fff);
}

.sb-btn--danger:hover:not(:disabled) {
  opacity: 0.88;
}

.sb-btn:focus-visible,
.sb-icon-btn:focus-visible,
.sb-card:focus-visible,
.sb-tree-row:focus-visible,
.sb-crumb:focus-visible,
.sb-root-select:focus-visible,
.sb-search-clear:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: -2px;
}

@keyframes sb-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.sb-spin {
  animation: sb-rotate 0.9s linear infinite;
}

/* ---------- \u680F1 \u6280\u80FD\u5361\u7247 ---------- */

.sb-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sb-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: inherit;
}

.sb-card:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.sb-card--active,
.sb-card--active:hover {
  background: var(--dsw-alias-interactive-bg-hover-accent, var(--dsw-alias-interactive-bg-active));
  border-color: var(--dsw-alias-brand-primary);
}

.sb-card-top {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.sb-card-name {
  flex: 1;
  min-width: 0;
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-badge {
  flex: none;
  font-size: 10px;
  line-height: 16px;
  padding: 0 6px;
  border-radius: 8px;
  white-space: nowrap;
}

.sb-badge--user {
  color: var(--dsw-static-deepseek-5, var(--dsw-alias-brand-primary));
  background: color-mix(
    in srgb,
    var(--dsw-static-deepseek-5, var(--dsw-alias-brand-primary)) 14%,
    transparent
  );
}

.sb-badge--project {
  color: var(--dsw-static-green-5, var(--dsw-alias-state-success-primary));
  background: color-mix(
    in srgb,
    var(--dsw-static-green-5, var(--dsw-alias-state-success-primary)) 14%,
    transparent
  );
}

.sb-badge--bundled {
  color: var(--dsw-static-neutral-5, var(--dsw-alias-label-tertiary));
  background: color-mix(
    in srgb,
    var(--dsw-static-neutral-5, var(--dsw-alias-label-tertiary)) 16%,
    transparent
  );
}

.sb-badge--other {
  color: var(--dsw-static-amber-5, var(--dsw-alias-state-warn-label));
  background: color-mix(
    in srgb,
    var(--dsw-static-amber-5, var(--dsw-alias-state-warn-label)) 16%,
    transparent
  );
}

.sb-card-desc {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sb-card-meta {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-card-meta-icon {
  flex: none;
}

.sb-card-when {
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-card-when-label {
  margin-right: 4px;
  color: var(--dsw-alias-label-tertiary);
}

/* ---------- \u680F2 \u76EE\u5F55\u6811 ---------- */

.sb-root-bar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 0;
}

.sb-root-label {
  flex: none;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-root-select {
  flex: 1;
  min-width: 0;
  height: 26px;
  padding: 0 6px;
  font: inherit;
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-base));
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
  outline: none;
  cursor: pointer;
}

.sb-crumbs {
  flex: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2px;
  padding: 6px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l);
}

.sb-crumb-seg {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.sb-crumb-sep {
  margin: 0 2px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-crumb {
  padding: 1px 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  font: inherit;
  font-size: 11px;
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-crumb:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.sb-tree {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 4px 0 8px;
}

.sb-tree-row {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 24px;
  padding-right: 8px;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 12px;
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
  text-align: left;
}

.sb-tree-row:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.sb-tree-row--active,
.sb-tree-row--active:hover {
  background: var(--dsw-alias-interactive-bg-active);
}

.sb-tree-row svg {
  flex: none;
  color: var(--dsw-alias-label-tertiary);
}

.sb-tree-name {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-tree-row--file .sb-tree-name {
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
}

.sb-tree-size {
  flex: none;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-tree-note {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}

.sb-tree-errmsg {
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-tree-retry {
  flex: none;
  padding: 0 4px;
  border: none;
  border-radius: 4px;
  background: transparent;
  font: inherit;
  font-size: 11px;
  color: var(--dsw-alias-brand-primary);
  cursor: pointer;
}

.sb-tree-retry:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

/* ---------- \u680F3 \u67E5\u770B / \u7F16\u8F91\u5668 ---------- */

.sb-editor-topbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l);
}

.sb-editor-filename {
  flex: none;
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  font-weight: 600;
}

.sb-editor-path {
  min-width: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-dirty-dot {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dsw-alias-state-warn-label);
}

.sb-editor-empty {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
  text-align: center;
}

/* \u53EA\u8BFB\u9884\u89C8\uFF1A\u884C\u53F7 + pre \u540C\u5728\u4E00\u4E2A\u6EDA\u52A8\u5BB9\u5668\uFF0C\u884C\u53F7\u6A2A\u5411\u5438\u4F4F */
.sb-editor-scroll {
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  align-items: flex-start;
}

.sb-gutter {
  flex: none;
  position: sticky;
  left: 0;
  padding: 8px 8px 8px 12px;
  border-right: 1px solid var(--dsw-alias-border-l);
  background: var(--dsw-alias-bg-base);
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  color: var(--dsw-alias-label-tertiary);
  user-select: none;
}

.sb-pre {
  flex: 1;
  min-width: max-content;
  margin: 0;
  padding: 8px 12px;
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  line-height: 20px;
  white-space: pre;
  color: var(--dsw-alias-label-primary);
}

/* \u7F16\u8F91\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u884C\u53F7\u5217\u4E0E textarea \u540C\u6B65\u6EDA\u52A8 */
.sb-editor-edit {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
}

.sb-gutter--edit {
  position: static;
  overflow: hidden;
  border-right: 1px solid var(--dsw-alias-border-l);
}

.sb-textarea {
  flex: 1;
  min-width: 0;
  padding: 8px 12px;
  border: none;
  outline: none;
  resize: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  line-height: 20px;
  white-space: pre;
  overflow: auto;
}

/* \u72B6\u6001\u6761 */
.sb-statusbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 26px;
  padding: 0 12px;
  border-top: 1px solid var(--dsw-alias-border-l);
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  overflow: hidden;
  white-space: nowrap;
}

.sb-status-item {
  flex: none;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sb-status--dirty {
  color: var(--dsw-alias-state-warn-label);
}

.sb-status--saved {
  color: var(--dsw-alias-state-success-primary);
}

.sb-status--error {
  color: var(--dsw-alias-state-error-primary);
}

/* \u9762\u677F\u7EA7\u72B6\u6001\u6761\uFF1A\u56FA\u5B9A\u5728\u9762\u677F\u5E95\u90E8\uFF0C\u7F16\u8F91\u5668\u9690\u85CF\u65F6\u4E5F\u53EF\u89C1 */
.sb-statusbar--panel {
  height: 28px;
  border-top: 1px solid var(--dsw-alias-border-l);
}

/* \u7B5B\u9009 chips \u540C\u884C\u7684\u5206\u9694\u7AD6\u7EBF */
.sb-chips-sep {
  flex: none;
  align-self: stretch;
  width: 1px;
  margin: 0 4px;
  background: var(--dsw-alias-border-l);
}

/* ---------- \u653E\u5F03\u4FEE\u6539\u786E\u8BA4\u5F39\u7A97 ---------- */

.sb-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.sb-modal {
  width: 360px;
  max-width: calc(100vw - 48px);
  padding: 16px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 8px;
  background: var(--dsw-alias-bg-overlay, var(--dsw-alias-bg-base));
}

.sb-modal-title {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
}

.sb-modal-body {
  margin-top: 8px;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
}

.sb-modal-actions {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

/* ---------- \u6EDA\u52A8\u6761\uFF08\u8DDF\u968F DSH token\uFF0C\u7F3A token \u65F6\u7528\u8FB9\u6846\u8272\u515C\u5E95\uFF09 ---------- */

.sb-list::-webkit-scrollbar,
.sb-tree::-webkit-scrollbar,
.sb-editor-scroll::-webkit-scrollbar,
.sb-textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.sb-list::-webkit-scrollbar-thumb,
.sb-tree::-webkit-scrollbar-thumb,
.sb-editor-scroll::-webkit-scrollbar-thumb,
.sb-textarea::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--dsw-alias-scrollbar-bg-l, var(--dsw-alias-border-l));
}

.sb-list::-webkit-scrollbar-thumb:hover,
.sb-tree::-webkit-scrollbar-thumb:hover,
.sb-editor-scroll::-webkit-scrollbar-thumb:hover,
.sb-textarea::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l, var(--dsw-alias-label-tertiary));
}

.sb-list::-webkit-scrollbar-track,
.sb-tree::-webkit-scrollbar-track,
.sb-editor-scroll::-webkit-scrollbar-track,
.sb-textarea::-webkit-scrollbar-track {
  background: transparent;
}

/* \u2500\u2500 settings panel enhancement (fullscreen / drag-resize) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Fullscreen toggle button: pinned to the panel's top-right, left of the
   framework's close button (36px wide), above the content stack. */
.sb-panel-maximize {
  position: absolute;
  top: 10px;
  right: 46px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}

.sb-panel-maximize:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.sb-panel-maximize:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 1px;
}

/* Drag-resize handle: bottom-right corner grip. */
.sb-panel-resize-handle {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 26px;
  height: 26px;
  padding: 0 5px 5px 0;
  box-sizing: border-box;
  cursor: nwse-resize;
  border-radius: 0 0 24px 0;
  color: var(--dsw-alias-label-secondary);
  transition: color 120ms ease, background-color 120ms ease;
}

.sb-panel-resize-handle:hover,
.sb-panel-resize-handle--active {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}

/* ---------- \u6280\u80FD\u6765\u6E90\u7B5B\u9009 chips ---------- */

.sb-chips {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0 8px 6px;
}

.sb-chip {
  height: 22px;
  padding: 0 10px;
  font: inherit;
  font-size: 11px;
  line-height: 22px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 11px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  white-space: nowrap;
}

.sb-chip:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.sb-chip--active {
  border-color: var(--dsw-alias-brand-primary);
  color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
}

/* ---------- \u7981\u7528 / \u542F\u7528 ---------- */

.sb-card--disabled .sb-card-name,
.sb-card--disabled .sb-card-desc,
.sb-card--disabled .sb-card-when {
  opacity: 0.55;
}

.sb-badge--disabled {
  color: var(--dsw-static-neutral-5, var(--dsw-alias-label-tertiary));
  background: color-mix(
    in srgb,
    var(--dsw-static-neutral-5, var(--dsw-alias-label-tertiary)) 16%,
    transparent
  );
}

.sb-badge--protected {
  color: var(--dsw-static-blue-5, var(--dsw-alias-label-secondary));
  background: color-mix(
    in srgb,
    var(--dsw-static-blue-5, var(--dsw-alias-label-secondary)) 14%,
    transparent
  );
}

.sb-toggle {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 20px;
  padding: 0 8px;
  font: inherit;
  font-size: 11px;
  line-height: 20px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 10px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  white-space: nowrap;
}

.sb-toggle:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.sb-toggle--disabled {
  border-color: var(--dsw-alias-state-warn-border, var(--dsw-alias-border-l));
  color: var(--dsw-static-amber-5, var(--dsw-alias-state-warn-label));
}

/* \u5207\u6362\u64CD\u4F5C\u5931\u8D25\u63D0\u793A\u6761\uFF08\u5DE5\u5177\u6761\u4E0B\u65B9\uFF09 */

.sb-action-error {
  flex: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 8px 6px;
  padding: 4px 8px;
  font-size: 11px;
  color: var(--dsw-static-red-5, var(--dsw-alias-state-danger-label));
  background: color-mix(
    in srgb,
    var(--dsw-static-red-5, var(--dsw-alias-state-danger-label)) 10%,
    transparent
  );
  border: 1px solid var(--dsw-alias-state-danger-border, var(--dsw-alias-border-l));
  border-radius: 6px;
}

.sb-action-error-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- \u5206\u9875\u6761 ---------- */

.sb-pager {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 8px;
  border-top: 1px solid var(--dsw-alias-border-l);
}

.sb-pager-info {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
  white-space: nowrap;
}

/* ---------- \u81EA\u5B9A\u4E49\u76EE\u5F55\u7BA1\u7406\u5F39\u7A97 ---------- */

.sb-modal--dirs {
  width: 560px;
  max-width: calc(100vw - 48px);
}

.sb-dirs-help {
  margin: 0 0 10px;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
}

.sb-dirs-addrow {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.sb-dirs-input {
  flex: 1;
  min-width: 0;
  height: 28px;
  padding: 0 10px;
  font: inherit;
  font-size: 12px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
  background: var(--dsw-alias-input-bg, transparent);
  color: var(--dsw-alias-label-primary);
}

.sb-dirs-input:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 1px;
}

.sb-dirs-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 280px;
  overflow-y: auto;
}

.sb-dirs-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid var(--dsw-alias-border-l);
  border-radius: 6px;
}

.sb-dirs-path {
  flex: 1;
  min-width: 0;
  font-family: var(--dsw-font-family-mono, ui-monospace, SFMono-Regular, Menlo, monospace);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dsw-alias-label-primary);
}

.sb-dirs-path--missing {
  color: var(--dsw-static-red-5, var(--dsw-alias-state-danger-label));
  text-decoration: line-through;
}

/* ---------- dsh-memory-evolve integration ---------- */

/* Inside the session memory tab, cap the height like the other feature
   panels (62vh) so the skill manager never grows the page; the three panes
   scroll internally. */
.mt-panel .sb-root {
  height: auto;
  max-height: 62vh;
  flex: none;
}
`;var mi=`/**
 * dsh-memory-evolve \u2014 DSH UI \u8BBE\u7F6E\u6A21\u5757\u6837\u5F0F\uFF08ui- \u524D\u7F00\uFF0C\u72EC\u7ACB\u6CE8\u5165\uFF09\u3002
 *
 * \u5168\u90E8\u4F7F\u7528 DSH \u8BBE\u8BA1 token\uFF08--dsw-alias-*\uFF09\uFF0C\u6DF1\u6D45\u8272\u4E3B\u9898\u81EA\u52A8\u9002\u914D\uFF1B\u540E\u7EED
 * \u4E3B\u9898\u529F\u80FD\uFF08CSS \u53D8\u91CF\u8986\u76D6\uFF09\u53EF\u76F4\u63A5\u63A5\u7BA1\u672C\u6587\u4EF6\u3002
 */

/* \u2500\u2500 \u4F1A\u8BDD\u7B5B\u9009\uFF1A\u4EC5\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 *
 * \u8FC7\u6EE4\u89C4\u5219\u4F5C\u7528\u57DF\u6302\u5728 <html data-dsh-ui-filter="on">\uFF08session-filter.ts
 * \u63A7\u5236\uFF0ClocalStorage \u8BB0\u5FC6\u504F\u597D\uFF0C\u9ED8\u8BA4\u5F00\u542F\uFF09\u3002
 *
 * \u9009\u62E9\u5668\u4F9D\u636E\uFF08\u8C03\u7814\u6587\u6863 docs-local/DSH-UI\u8BBE\u7F6E\u6A21\u5757-\u8C03\u7814-20260809.md\uFF09\uFF1A
 * - \u4F1A\u8BDD\u884C = div[role="treeitem"][aria-selected]\uFF08\u5DE5\u4F5C\u533A\u5206\u7EC4\u884C\u6709
 *   aria-expanded \u65E0 aria-selected\uFF1B\u641C\u7D22\u7ED3\u679C\u884C\u662F <button>\u2014\u2014div \u5929\u7136\u6392\u9664\uFF0C
 *   \u641C\u7D22\u6A21\u5F0F\u4E0B\u7B5B\u9009\u4E0D\u751F\u6548\uFF09\uFF1B
 * - \u7EAF idle \u4F1A\u8BDD\u884C\u6CA1\u6709\u4EFB\u4F55 data-state \u72B6\u6001\u70B9\uFF1B\u6D3B\u8DC3\uFF08ongoing/warning/error\uFF09
 *   \u4E0E completed\uFF08done\uFF09\u90FD\u6709\u72B6\u6001\u70B9 \u2192 \u53EA\u9690\u85CF\u5B8C\u5168\u65E0\u72B6\u6001\u70B9\u7684\u884C\uFF1B
 * - :has() \u9700 Chrome 105+\uFF082022-08 \u8D77\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u65E0\u95EE\u9898\uFF09\u3002
 *
 * React \u91CD\u6E32\u67D3\u540E\u9009\u62E9\u5668\u5B9E\u65F6\u751F\u6548\uFF1A\u4F1A\u8BDD\u4ECE idle \u53D8 running \u65F6\u72B6\u6001\u70B9\u51FA\u73B0\u3001
 * \u884C\u81EA\u52A8\u6062\u590D\u663E\u793A\uFF0C\u65E0\u9700 JS \u8F6E\u8BE2\u4F1A\u8BDD\u72B6\u6001\u3002
 */
html[data-dsh-ui-filter="on"] [role="tree"] div[role="treeitem"][aria-selected]:not(:has([data-state])) {
  display: none;
}

/* \u2500\u2500 \u5BF9\u8BDD\u533A\u52A0\u5BBD\uFF08wide-chat.ts \u63A7\u5236 html[data-dsh-ui-wide-chat]\uFF09\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 *
 * DSH \u5BF9\u8BDD\u533A\u5BBD\u5EA6\u7531 CSS \u53D8\u91CF --dsh-chat-content-width \u63A7\u5236
 * \uFF08ConversationRoot.module.css\uFF1A748px\uFF1B\u8F93\u5165\u6846 = +32px \u6D3E\u751F\uFF0C\u5168\u90E8\u81EA\u52A8
 * \u8DDF\u968F\uFF09\u3002\u5728\u5BF9\u8BDD\u533A\u6839\u5143\u7D20\uFF08[data-phase] \u662F ConversationRoot \u6839 div \u7684\u7A33\u5B9A
 * \u951A\u70B9\uFF09\u4E0A\u8986\u76D6\u4E3A 95%\uFF08\u76F8\u5BF9\u53F3\u4FA7\u533A\u57DF\u5BBD\uFF0C\u4E0E\u4E0A\u65B9 Tabs \u5BFC\u822A\u6761\u5BBD\u5EA6\u5BF9\u9F50\uFF09\uFF1B
 * \u672C\u9009\u62E9\u5668 specificity\uFF08html+attr+attr = 0,2,1\uFF09\u9AD8\u4E8E\u539F .root\uFF080,1,0\uFF09\uFF0C
 * \u7A33\u80DC\u539F\u58F0\u660E\u3002 */
html[data-dsh-ui-wide-chat="on"] [data-phase] {
  --dsh-chat-content-width: 95%;
}

/* \u2500\u2500 \u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD\uFF08wide-chat.ts \u63A7\u5236 html[data-dsh-ui-wide-bubble]\uFF09\u2500\u2500\u2500\u2500\u2500
 *
 * \u75DB\u70B9\uFF08\u7528\u6237\u53CD\u9988 2026-08-09\uFF09\uFF1A\u7528\u6237\u63D0\u4EA4\u540E\u7684\u6D88\u606F\u6846\u9ED8\u8BA4 max-width:
 * min(525px, 82%)\uFF08MessageItem.module.css .bubble\uFF09\u2014\u2014\u5BF9\u8BDD\u533A\u52A0\u5BBD\u540E
 * \u6C14\u6CE1\u4ECD\u88AB 525px \u4E0A\u9650\u5361\u4F4F\u3001\u76F8\u5BF9\u66F4\u663E\u5C0F\u3002\u5F00\u542F\u540E\u8BA9\u6C14\u6CE1\u5360\u4E2D\u95F4\u5185\u5BB9\u6846\u7EA6 80%\u3002
 *
 * \u951A\u70B9\uFF08\u6E90\u7801\u4F9D\u636E\uFF09\uFF1A\u7528\u6237\u6D88\u606F\u884C userRow \u6709\u6052\u5B9A \`data-time-hover-root\`
 * \u5C5E\u6027\uFF08MessageItem.tsx\uFF09\uFF1Bbubble \u6052\u4E3A\u5176**\u7B2C\u4E00\u4E2A div \u5B50\u5143\u7D20**\uFF08steering
 * \u6807\u8BB0\u662F span\u3001MessageIconActions \u662F\u7B2C\u4E8C\u4E2A div\uFF09\u2192 \`div:first-of-type\`
 * \u552F\u4E00\u547D\u4E2D bubble\uFF0C\u4E0D\u8BEF\u4F24 actions\u3002\u539F\u89C4\u5219 .bubble\uFF080,1,0\uFF09\uFF0C\u672C\u9009\u62E9\u5668
 * specificity \u66F4\u9AD8\uFF0C\u7A33\u80DC\u3002 */
html[data-dsh-ui-wide-bubble="on"] [data-time-hover-root] > div:first-of-type {
  max-width: 80%;
}

/* \u2500\u2500 \u4F1A\u8BDD\u5217\u8868\u9876\u90E8\u7B5B\u9009\u6761\uFF08session-filter.ts \u6CE8\u5165\u7684 DOM\uFF09\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.dsh-ui-filter-bar {
  display: flex;
  gap: 6px;
  padding: 6px 10px;
  border-bottom: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.25));
  /* \u8DDF\u968F\u5217\u8868\u533A\u80CC\u666F\uFF08token \u515C\u5E95\uFF09\uFF0C\u4E0D\u8BBE\u56FA\u5B9A\u5E95\u8272\u4EE5\u514D\u6DF1\u6D45\u4E3B\u9898\u7A81\u5140 */
  background: transparent;
}

/* \u5206\u6BB5\u6309\u94AE\uFF1A\u975E\u6FC0\u6D3B\u6001\u5F31\u5316\u3001\u6FC0\u6D3B\u6001\u54C1\u724C\u5F3A\u8C03\uFF08\u5BF9\u9F50 DSH tool-bar \u6309\u94AE\u98CE\u683C\uFF09\u3002 */
.dsh-ui-filter-btn {
  flex: 1;
  min-height: 24px;
  padding: 2px 8px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: var(--dsw-alias-button-tool-bar-fill, transparent);
  color: var(--dsw-alias-label-secondary, inherit);
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease;
}

.dsh-ui-filter-btn:hover {
  background: var(--dsw-alias-button-tool-bar-hover, rgba(128, 128, 128, 0.14));
  color: var(--dsw-alias-label-primary, inherit);
}

.dsh-ui-filter-btn-active,
.dsh-ui-filter-btn-active:hover {
  background: var(--dsw-alias-button-tool-bar-fill-invisible, rgba(128, 128, 128, 0.18));
  border-color: var(--dsw-alias-border-l, rgba(128, 128, 128, 0.3));
  color: var(--dsw-alias-brand-primary, inherit);
  font-weight: 600;
}

/* \u2500\u2500 \u6298\u53E0\u5DE5\u4F5C\u533A\u884C\u7684\u8FD0\u884C\u5FBD\u6807\uFF08session-filter.ts \u6CE8\u5165\u7684 DOM\uFF09\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 * \u6298\u53E0\u7684\u5206\u7EC4\u884C\u4E0A\u770B\u4E0D\u5230\u4F1A\u8BDD\u8FD0\u884C\u72B6\u6001\uFF0C\u5FBD\u6807\u300C\u25CF N \u8FD0\u884C\u4E2D\u300D\u8865\u4E0A\u8FD9\u4E2A\u4FE1\u606F\uFF1B
 * \u884C\u662F flex \u5E03\u5C40\uFF0C\u5FBD\u6807\u8FFD\u52A0\u5728\u884C\u5C3E\u81EA\u7136\u9760\u53F3\u3002\u72B6\u6001\u8272\u7528\u4E1A\u52A1\u4E3B\u8272 token
 * \uFF08--dsw-alias-state-business-primary\uFF0C\u6DF1\u6D45\u4E3B\u9898\u81EA\u52A8\u9002\u914D\uFF09\u3002 */
.dsh-ui-ws-run-badge {
  align-self: center;
  margin-left: 6px;
  padding: 1px 7px;
  border-radius: 999px;
  background: var(--dsw-alias-state-business-secondary, rgba(64, 128, 255, 0.16));
  color: var(--dsw-alias-state-business-primary, #3b82f6);
  font-size: 11px;
  line-height: 16px;
  white-space: nowrap;
  flex: none;
}`;var pi=`/**
 * dsh-memory-evolve \u2014 Mermaid \u56FE\u8868\u6E32\u67D3\u6837\u5F0F\u3002
 *
 * .me-mermaid-wrap \u662F\u66FF\u6362 .md-code-block \u6B63\u6587\uFF08pre\uFF09\u540E\u5305 SVG \u7684\u6EDA\u52A8\u5BB9\u5668\uFF1A
 * - max-width:100% + overflow-x:auto\uFF1A\u5927\u56FE\uFF08\u51E0\u5341\u8282\u70B9\uFF09\u5728\u7A84\u5C4F\uFF08\u624B\u673A\uFF09\u4E0E
 *   \u7A84\u6D88\u606F\u680F\u4E0A\u6A2A\u5411\u6EDA\u52A8\uFF0C\u800C\u4E0D\u662F\u88AB\u538B\u7F29\u53D8\u5F62\uFF1B
 * - svg max-width:none\uFF1A\u7981\u6B62 svg \u88AB\u5BB9\u5668\u538B\u7F29\uFF08svg \u6709\u56FA\u5B9A viewBox \u5C3A\u5BF8\uFF09\uFF1B
 * - margin:0 auto\uFF1A\u5C0F\u56FE\u5C45\u4E2D\uFF1B
 * - \u80CC\u666F\u900F\u660E\uFF08\u5F15\u64CE\u521D\u59CB\u5316\u5DF2\u8BBE themeVariables.background=transparent\uFF09\uFF0C
 *   \u6DF1\u6D45\u4E3B\u9898\u4E0B\u90FD\u878D\u5165\u6D88\u606F\u6C14\u6CE1\uFF0C\u4E0D\u7559\u767D/\u9ED1\u65B9\u5757\u3002
 */

.me-mermaid-wrap {
  max-width: 100%;
  overflow-x: auto;
  padding: 10px 4px;
}

.me-mermaid-wrap svg {
  display: block;
  margin: 0 auto;
  max-width: none;
  height: auto;
}

/* \u6E32\u67D3\u6C38\u4E45\u5931\u8D25\uFF08\u8BED\u6CD5\u9519\u8BEF\u7B49\uFF09\u65F6\u7684\u63D0\u793A\u884C\uFF1A\u63D2\u5728 banner \u4E0E\u4EE3\u7801\u4E4B\u95F4\uFF0C\u7425\u73C0\u8272
   \u5C0F\u5B57 + \u534A\u900F\u660E\u5E95\uFF0C\u6DF1\u6D45\u4E3B\u9898\u4E0B\u90FD\u53EF\u89C1\uFF1B\u4EE3\u7801\u539F\u6837\u4FDD\u7559\u3001\u53EF\u590D\u5236\u4FEE\u6B63\u3002 */
.me-mermaid-error {
  padding: 6px 12px;
  font-size: 12px;
  line-height: 1.5;
  color: #b45309;
  background: rgba(180, 83, 9, 0.08);
  border-bottom: 1px solid rgba(180, 83, 9, 0.25);
}

/* \u300C\u4E0B\u8F7D\u300D\u6309\u94AE\uFF1A\u63D2\u5728 DSH \u590D\u5236\u6309\u94AE\u65C1\uFF08.action \u5BB9\u5668\uFF09\uFF0C\u89C2\u611F\u4E0E\u590D\u5236\u6309\u94AE
   \u8FD1\u4F3C\uFF08\u5C0F\u5B57\u3001\u900F\u660E\u5E95\u3001hover \u52A0\u6DF1\uFF09\uFF1B\u989C\u8272/\u5B57\u4F53\u7EE7\u627F\u5F53\u524D\u4E3B\u9898\u3002 */
.me-mermaid-download {
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  line-height: 1.5;
  padding: 2px 8px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.15s, background 0.15s;
}

.me-mermaid-download:hover {
  opacity: 1;
  background: rgba(128, 128, 128, 0.25);
}

/* \u515C\u5E95\u4F4D\u7F6E\uFF1A\u82E5\u5757\u7ED3\u6784\u53D8\u5316\u5BFC\u81F4\u627E\u4E0D\u5230\u64CD\u4F5C\u533A\uFF0C\u6309\u94AE\u843D\u5728 wrap \u53F3\u4E0A\u89D2
   \uFF08ensureDownloadButton \u7684 fallback\uFF09\uFF0C\u534A\u900F\u660E\u5C0F\u6309\u94AE\u60AC\u4E8E\u56FE\u4E0A\u65B9\u3002 */
.me-mermaid-wrap {
  position: relative;
}

.me-mermaid-wrap > .me-mermaid-download {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 1;
}
`;var ui=`/**
 * \u4F1A\u8BDD\u4E66\u7B7E\u6837\u5F0F\uFF08bm- \u524D\u7F00\uFF0C\u72EC\u7ACB\u6CE8\u5165\uFF09\u3002
 *
 * \u8BBE\u8BA1\u539F\u5219\uFF1A
 * - \u5C0F\u56FE\u6807\u661F\u6807\uFF1A\u4E0D\u62A2 Copy/Branch \u64CD\u4F5C\u533A\u7684\u89C6\u89C9\u7126\u70B9\uFF1B
 * - \u5217\u8868 Tab \u94FA\u6EE1 conversation.view \u7684 flex \u7236\u5BB9\u5668\uFF1B
 * - \u989C\u8272\u5168\u90E8\u8D70 DSH \u8BBE\u8BA1 token\uFF08\u6DF1\u6D45\u8272\u81EA\u52A8\u9002\u914D\uFF09\uFF0C\u4E0D\u5199\u6B7B\u989C\u8272\u3002
 */

/* ---- \u8F6E\u5C3E\u661F\u6807\u6309\u94AE\uFF08DOM \u6CE8\u5165\uFF0CB \u65B9\u6848\uFF1A\u4E0D\u5360 turnTail \u69FD\uFF0C\u5B98\u65B9 produced-files \u884C\u4FDD\u7559\uFF09---- */
.bm-star-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #8b8d98);
  /* \u56FE\u6807\u5C3A\u5BF8\uFF08\u7528\u6237\u62CD\u677F\uFF1A17px \u57FA\u7840\u4E0A\u518D\u653E\u5927 1.3 \u500D \u2248 22px\uFF09 */
  font-size: 22px;
  line-height: 1;
  padding: 1px 5px;
  margin: 0;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.72;
  transition: opacity 0.12s ease, color 0.12s ease, background 0.12s ease;
}

.bm-star-btn:hover {
  opacity: 1;
  color: var(--dsw-alias-label-primary, inherit);
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12));
}

/* \u5DF2\u6253\u4E66\u7B7E\uFF1A\u5B9E\u5FC3\u661F\uFF0C\u4E3B\u9898\u5F3A\u8C03\u8272 */
.bm-star-btn[data-bookmarked='true'] {
  opacity: 1;
  color: var(--dsw-static-yellow-9, #f5a623);
}

.bm-star-btn[data-bookmarked='true']:hover {
  color: var(--dsw-static-yellow-10, #d48806);
}

.bm-star-btn:disabled {
  cursor: wait;
  opacity: 0.5;
}

.bm-star-icon {
  /* \u4E0E\u6309\u94AE\u540C\u5C3A\u5BF8\uFF0822px\uFF09\uFF0C\u7EAF\u5B57\u7B26\u661F\u6807 */
  font-size: 22px;
  line-height: 1;
}

/* \u5185\u8054\u8FF7\u4F60\u83DC\u5355\uFF08\u6539\u540D / \u5220\u9664\uFF09\uFF0C\u6302\u5728\u661F\u6807\u65C1 */
.bm-star-wrap {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  position: relative;
  /* \u8D34\u88C5\u8FDB\u5B98\u65B9\u64CD\u4F5C\u533A\u884C\u5185\uFF1A\u4E0E Copy/Branch \u6309\u94AE\u9694\u5F00\u4E00\u70B9 */
  margin-left: 4px;
  flex: none;
}

.bm-star-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;
  min-width: 140px;
  margin-top: 2px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-subtle, rgba(128, 128, 128, 0.28));
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-primary, #fff));
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.bm-star-menu button {
  appearance: none;
  border: none;
  background: transparent;
  text-align: left;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--dsw-alias-label-primary, inherit);
  cursor: pointer;
}

.bm-star-menu button:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12));
}

.bm-star-menu button.bm-danger {
  color: var(--dsw-static-red-9, #e5484d);
}

/* ---- \u4E66\u7B7E\u5217\u8868 Tab\uFF08conversation.view\uFF09---- */
.bm-panel {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  height: 100%;
  padding: 12px 16px;
  gap: 10px;
  overflow: hidden;
  box-sizing: border-box;
  font-family: var(--dsw-font-family, system-ui, sans-serif);
  color: var(--dsw-alias-label-primary, inherit);
}

.bm-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.bm-toolbar h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  flex: 1;
}

.bm-toolbar-btn {
  appearance: none;
  border: 1px solid var(--dsw-alias-border-subtle, rgba(128, 128, 128, 0.28));
  background: transparent;
  color: var(--dsw-alias-label-secondary, inherit);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
}

.bm-toolbar-btn:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12));
  color: var(--dsw-alias-label-primary, inherit);
}

.bm-help {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #6b6f76);
  line-height: 1.5;
  flex-shrink: 0;
}

/* \u641C\u7D22\u6846\uFF1Alabel/\u6458\u8981\u5B50\u4E32\u8FC7\u6EE4\uFF08\u4E66\u7B7E\u591A\u4E86\u4E0D\u7FFB\u5217\u8868\uFF09 */
.bm-search {
  flex: none;
  box-sizing: border-box;
  width: 100%;
  height: 28px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-subtle, rgba(128, 128, 128, 0.28));
  border-radius: 8px;
  outline: none;
  background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-primary, #fff));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 12px;
  transition: border-color 120ms ease;
}

.bm-search:hover {
  border-color: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12));
}

.bm-search:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, #2563eb);
  outline-offset: 1px;
}

.bm-search::placeholder {
  color: var(--dsw-alias-label-tertiary, #8b8d98);
}

.bm-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bm-empty {
  padding: 24px 8px;
  text-align: center;
  font-size: 13px;
  color: var(--dsw-alias-label-tertiary, #8b8d98);
}

.bm-item {
  appearance: none;
  border: 1px solid var(--dsw-alias-border-subtle, rgba(128, 128, 128, 0.22));
  background: var(--dsw-alias-bg-secondary, transparent);
  border-radius: 8px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: border-color 0.12s ease, background 0.12s ease;
  color: inherit;
  font: inherit;
  width: 100%;
  box-sizing: border-box;
}

.bm-item:hover {
  border-color: var(--dsw-alias-interactive-bg-active, rgba(128, 128, 128, 0.45));
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.08));
}

.bm-item-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}

.bm-item-label {
  font-size: 13px;
  font-weight: 600;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bm-item-meta {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #8b8d98);
  flex-shrink: 0;
}

.bm-item-summary {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, #6b6f76);
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bm-item-actions {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}

.bm-item-actions button {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #8b8d98);
  font-size: 11px;
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
}

.bm-item-actions button:hover {
  color: var(--dsw-alias-label-primary, inherit);
  background: var(--dsw-alias-interactive-bg-hover, rgba(128, 128, 128, 0.12));
}

.bm-item-actions button.bm-danger:hover {
  color: var(--dsw-static-red-9, #e5484d);
}

.bm-notice {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  flex-shrink: 0;
}

.bm-notice-ok {
  background: color-mix(in srgb, var(--dsw-static-green-9, #30a46c) 14%, transparent);
  color: var(--dsw-static-green-11, #18794e);
}

.bm-notice-error {
  background: color-mix(in srgb, var(--dsw-static-red-9, #e5484d) 14%, transparent);
  color: var(--dsw-static-red-11, #c62a2f);
}

.bm-notice-info {
  background: color-mix(in srgb, var(--dsw-static-blue-9, #3b82f6) 14%, transparent);
  color: var(--dsw-static-blue-11, #1d4ed8);
}
`;var bi=`/**
 * Advisor \u60AC\u6D6E\u9762\u677F\u6837\u5F0F\u3002
 *
 * \u7EAA\u5F8B\uFF1A\u6240\u6709\u7C7B\u540D\u4F7F\u7528 advisor- \u524D\u7F00\uFF1B\u6240\u6709\u989C\u8272\u53EA\u5F15\u7528 --dsw-alias-* token\uFF0C
 * \u4E0D\u5199\u4E3B\u9898\u5206\u652F\u548C\u56FA\u5B9A\u8272\u503C\uFF0C\u968F DSH \u6DF1\u6D45\u8272\u4E3B\u9898\u81EA\u52A8\u9002\u914D\u3002
 */

/* ---------- Header action \u4E0E\u6298\u53E0\u80F6\u56CA ---------- */

.advisor-header-toggle {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 4px 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 7px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 120ms ease, color 120ms ease, background-color 120ms ease;
}

.advisor-header-toggle:hover,
.advisor-header-toggle-active {
  border-color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.advisor-header-toggle:focus-visible,
.advisor-capsule:focus-visible,
.advisor-button:focus-visible,
.advisor-icon-button:focus-visible,
.advisor-tab:focus-visible,
.advisor-review-card:focus-visible,
.advisor-input-summary:focus-visible,
.advisor-link:focus-visible,
.advisor-pending-toggle:focus-visible,
.advisor-switch:focus-visible,
.advisor-settings-summary:focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary);
  outline-offset: 2px;
}

.advisor-header-unread,
.advisor-unread {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  height: 17px;
  box-sizing: border-box;
  padding: 0 4px;
  border-radius: 9px;
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-label-primary-inverted);
  font-size: 9px;
  font-weight: 700;
  line-height: 17px;
}

.advisor-capsule {
  position: fixed;
  top: 42%;
  right: 0;
  z-index: 900;
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 38px;
  box-sizing: border-box;
  padding: 10px 6px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-right: none;
  border-radius: 12px 0 0 12px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 8px 24px var(--dsw-alias-border-l4);
  cursor: pointer;
  /* 2026-08-17 issue #11 \u8BC4\u8BBA\u53CD\u9988\uFF1A\u80F6\u56CA\u53EF\u62D6\u62FD\uFF082026-08-17 \u7528\u6237\u62CD\u677F\uFF1A
     **\u53EA\u80FD\u5438\u9644\u53F3\u8FB9\u7F18\u3001\u6CBF\u6700\u53F3\u8FB9\u4E0A\u4E0B\u79FB\u52A8**\u2014\u2014Pointer Events \u53EA\u6539 top\uFF0C
     \u6C34\u5E73\u65B9\u5411\u7531 right: 0 \u56FA\u5B9A\u8D34\u53F3\uFF0C\u4E0D\u5141\u8BB8\u62D6\u5230\u9875\u9762\u4E2D\u95F4\uFF1B\u4F4D\u7F6E\u8BB0\u5FC6\u5230
     localStorage\uFF09\u3002grab \u63D0\u793A\u53EF\u62D6\u3001user-select \u9632\u6B62\u62D6\u62FD\u4E2D\u9009\u4E2D\u6587\u5B57\u3001
     touch-action \u7981\u6B62\u89E6\u5C4F\u4E0A\u62D6\u62FD\u65F6\u6EDA\u52A8\u9875\u9762 */
  cursor: grab;
  user-select: none;
  touch-action: none;
}

/* \u62D6\u62FD\u8FDB\u884C\u4E2D\uFF1A\u624B\u52BF\u63D0\u793A + \u9AD8\u4EAE\u63CF\u8FB9\uFF0C\u8BA9\u7528\u6237\u77E5\u9053\u6B63\u5728\u79FB\u52A8 */
.advisor-capsule.advisor-capsule-dragging {
  cursor: grabbing;
  box-shadow: 0 8px 24px var(--dsw-alias-border-l4), 0 0 0 1px var(--dsw-alias-state-business-primary);
}

.advisor-capsule:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}

.advisor-capsule-icon {
  font-size: 16px;
  color: var(--dsw-alias-state-business-primary);
}

/* 2026-08-12 \u7528\u6237\u53CD\u9988\uFF1A\u56FE\u6807\u989C\u8272\u53CD\u6620\u8BC4\u5BA1\u72B6\u6001\uFF08\u7981\u7528/\u542F\u7528/\u8FD0\u884C\u4E2D\uFF09 */
.advisor-capsule-disabled .advisor-capsule-icon,
.advisor-header-toggle.advisor-capsule-disabled .advisor-capsule-icon {
  color: var(--dsw-alias-label-tertiary); /* \u7981\u7528\uFF1A\u7070 */
}

.advisor-capsule-idle .advisor-capsule-icon,
.advisor-header-toggle.advisor-capsule-idle .advisor-capsule-icon {
  color: var(--dsw-alias-state-success-primary); /* \u542F\u7528\u7A7A\u95F2\uFF1A\u7EFF */
}

.advisor-capsule-reviewing .advisor-capsule-icon,
.advisor-header-toggle.advisor-capsule-reviewing .advisor-capsule-icon {
  color: var(--dsw-alias-state-business-primary); /* \u8BC4\u5BA1\u4E2D\uFF1A\u84DD + \u547C\u5438\u52A8\u753B */
  animation: advisor-capsule-breathe 1.6s ease-in-out infinite;
}

.advisor-capsule-error .advisor-capsule-icon,
.advisor-header-toggle.advisor-capsule-error .advisor-capsule-icon {
  color: var(--dsw-alias-state-error-primary); /* \u6682\u505C/\u7EC8\u6B62\uFF1A\u7EA2 */
}

@keyframes advisor-capsule-breathe {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

.advisor-capsule-label {
  writing-mode: vertical-rl;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--dsw-alias-label-secondary);
}

.advisor-capsule .advisor-unread {
  position: absolute;
  top: -6px;
  left: -7px;
}

/* ---------- Portal \u9762\u677F\u9AA8\u67B6 ---------- */

.advisor-panel {
  position: fixed;
  top: 70px;
  right: 16px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  width: min(360px, calc(100vw - 32px));
  height: min(78vh, 780px);
  min-height: 420px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 18px 52px var(--dsw-alias-border-l4);
  font-family: var(--dsw-font-family, inherit);
  font-size: 12px;
}

.advisor-panel *,
.advisor-panel *::before,
.advisor-panel *::after {
  box-sizing: border-box;
}

.advisor-panel-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 12px 9px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}

.advisor-panel-heading {
  flex: 1;
  min-width: 0;
}

.advisor-title-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.advisor-title {
  flex: none;
  font-size: 14px;
  font-weight: 650;
  line-height: 20px;
}

.advisor-owner,
.advisor-record-owner {
  margin-top: 3px;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
  line-height: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.advisor-icon-button {
  appearance: none;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 7px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  cursor: pointer;
}

.advisor-icon-button:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

/* ---------- \u72B6\u6001\u5FBD\u6807\u4E0E\u72B6\u6001\u6761 ---------- */

.advisor-status-badge,
.advisor-severity,
.advisor-instruction-tag,
.advisor-pending-state,
.advisor-pending-count {
  display: inline-flex;
  align-items: center;
  flex: none;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  line-height: 17px;
  white-space: nowrap;
}

.advisor-status-badge {
  gap: 4px;
  padding: 0 7px;
  border: 1px solid var(--dsw-alias-border-l2);
}

.advisor-status-idle {
  border-color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
  color: var(--dsw-alias-state-success-primary);
}

.advisor-status-reviewing {
  border-color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
  color: var(--dsw-alias-state-business-primary);
}

.advisor-status-reviewing .advisor-status-icon {
  animation: advisor-status-breathe 1.4s ease-in-out infinite;
}

.advisor-status-paused {
  border-color: var(--dsw-alias-state-warn-primary);
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-primary);
}

.advisor-status-disabled {
  border-color: var(--dsw-alias-border-l3);
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-tertiary);
}

.advisor-status-halted {
  border-color: var(--dsw-alias-state-error-primary);
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-alias-state-error-primary);
}

.advisor-status-strip {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 7px 10px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}

.advisor-switch {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  padding: 0;
  border: none;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 10px;
  cursor: pointer;
}

.advisor-switch:disabled {
  color: var(--dsw-alias-label-tertiary);
  cursor: default;
}

.advisor-switch-track {
  position: relative;
  display: inline-block;
  width: 28px;
  height: 16px;
  flex: none;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 9px;
  background: var(--dsw-alias-interactive-bg-active);
}

.advisor-switch-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--dsw-alias-label-secondary);
  transition: transform 140ms ease, background-color 140ms ease;
}

.advisor-switch-on .advisor-switch-track {
  border-color: var(--dsw-alias-button-primary-fill);
  background: var(--dsw-alias-button-primary-fill);
}

.advisor-switch-on .advisor-switch-thumb {
  transform: translateX(12px);
  background: var(--dsw-alias-label-primary-inverted);
}

.advisor-status-facts {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  min-width: 0;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
}

.advisor-model {
  max-width: 105px;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.advisor-pending-count {
  padding: 0 6px;
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-primary);
}

/* ---------- \u901A\u77E5\u3001\u9519\u8BEF\u3001\u52A0\u8F7D\u4E0E\u7A7A\u6001 ---------- */

.advisor-warning,
.advisor-error,
.advisor-notice,
.advisor-inline-error {
  flex: none;
  font-size: 10px;
  line-height: 1.45;
}

.advisor-warning {
  padding: 7px 10px;
  border-bottom: 1px solid var(--dsw-alias-state-warn-secondary);
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-label);
}

.advisor-error,
.advisor-inline-error {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin: 7px;
  padding: 7px 9px;
  border: 1px solid var(--dsw-alias-state-error-secondary);
  border-radius: 8px;
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-alias-state-error-primary);
}

.advisor-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 8px 0;
  padding: 6px 8px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
}

.advisor-notice > span:first-child {
  flex: 1;
}

.advisor-notice-ok {
  border-color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-tertiary);
  color: var(--dsw-alias-state-success-primary);
}

.advisor-notice-error {
  border-color: var(--dsw-alias-state-error-secondary);
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-alias-state-error-primary);
}

.advisor-notice-close {
  appearance: none;
  padding: 0 2px;
  border: none;
  background: var(--dsw-alias-bg-layer-1);
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.advisor-loading,
.advisor-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 88px;
  margin: 8px;
  padding: 16px;
  border: 1px dashed var(--dsw-alias-border-l3);
  border-radius: 10px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 11px;
  line-height: 1.5;
  text-align: center;
}

.advisor-loading-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--dsw-alias-state-business-primary);
  animation: advisor-status-breathe 1.2s ease-in-out infinite;
}

.advisor-muted {
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
}

/* ---------- \u5B9E\u65F6 / \u5386\u53F2 Tab ---------- */

.advisor-tabs {
  flex: none;
  display: grid;
  /* 2026-08-12 \u7528\u6237\u53CD\u9988\uFF1A\u7EA6\u675F/\u5B9E\u65F6/\u8BB0\u5F55/\u8BBE\u7F6E\u56DB\u4E2A tab \u5FC5\u987B\u4E00\u884C */
  grid-template-columns: repeat(4, 1fr);
  padding: 5px 8px 0;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}

/* 2026-08-12 \u7528\u6237\u53CD\u9988\uFF1A\u5B9E\u65F6 tab = \u8BC4\u5BA1\u6D41 + \u6307\u4EE4\u533A\uFF08\u7EA6\u675F/\u8BB0\u5F55/\u8BBE\u7F6E tab \u4E0D\u663E\u793A\u6307\u4EE4\u533A\uFF09 */
.advisor-live {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.advisor-tab {
  appearance: none;
  padding: 6px 8px;
  border: none;
  border-bottom: 2px solid var(--dsw-alias-bg-base);
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-tertiary);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
}

.advisor-tab:hover {
  color: var(--dsw-alias-label-primary);
}

.advisor-tab-active {
  border-bottom-color: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary);
  font-weight: 600;
}

.advisor-flow,
.advisor-history {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 8px;
  background: var(--dsw-alias-bg-layer-1);
  scrollbar-color: var(--dsw-alias-scrollbar-bg-l1) var(--dsw-alias-bg-layer-1);
}

.advisor-flow {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.advisor-follow-button {
  position: sticky;
  bottom: 2px;
  align-self: center;
  appearance: none;
  padding: 4px 10px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 999px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-state-business-primary);
  font: inherit;
  font-size: 10px;
  cursor: pointer;
  box-shadow: 0 4px 14px var(--dsw-alias-border-l4);
}

/* ---------- \u8BC4\u5BA1\u5361\u7247 ---------- */

.advisor-review-card {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 9px 10px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  animation: advisor-card-arrive 3s ease-out;
}

.advisor-review-card:hover {
  border-color: var(--dsw-alias-border-l3);
}

.advisor-review-card-running {
  border-color: var(--dsw-alias-state-business-primary);
}

.advisor-review-card-history {
  animation: none;
}

.advisor-review-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  font-variant-numeric: tabular-nums;
}

.advisor-severity {
  padding: 0 7px;
  border: 1px solid var(--dsw-alias-border-l2);
}

.advisor-severity-nit {
  border-color: var(--dsw-alias-state-business-primary);
  background: var(--dsw-alias-state-business-tertiary);
  color: var(--dsw-alias-state-business-primary);
}

/* Q1\uFF1Ainfo \u6700\u4F4E\u7B49\u7EA7\u2014\u2014\u6700\u5F31\u89C6\u89C9\uFF08\u9762\u677F\u53EF\u89C1\u3001\u9ED8\u8BA4\u4E0D\u6CE8\u5165\u4F1A\u8BDD\uFF09 */
.advisor-severity-info {
  border-color: var(--dsw-alias-border-l2);
  background: transparent;
  color: var(--dsw-alias-text-tertiary);
  opacity: 0.85;
}

/* Q4\uFF1A\u95EE\u7B54\u56DE\u590D\u6807\u7B7E\uFF08\u7528\u6237\u63D0\u95EE\u7684\u76F4\u63A5\u56DE\u7B54\uFF09 */
.advisor-severity-answer {
  border-color: var(--dsw-alias-state-success-primary);
  background: var(--dsw-alias-state-success-secondary);
  color: var(--dsw-alias-state-success-primary);
}

.advisor-severity-concern {
  border-color: var(--dsw-alias-state-warn-primary);
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-primary);
}

/* 2026-08-13 \u7528\u6237\u53CD\u9988\uFF1Aerror-secondary \u7C89\u5E95 + error-primary \u7C89\u5B57\u540C\u8272\u7CFB
 * \u770B\u4E0D\u6E05 \u2192 \u6539\u4E3A\u5B9E\u5FC3 error \u4E3B\u8272\u5E95 + \u53CD\u8272\u767D\u5B57\uFF08\u4E0E\u4E3B\u6309\u94AE\u540C\u6B3E\u9AD8\u5BF9\u6BD4\u6A21\u5F0F\uFF09 */
.advisor-severity-blocker {
  border-color: var(--dsw-alias-state-error-primary);
  background: var(--dsw-alias-state-error-primary);
  color: var(--dsw-alias-label-primary-inverted);
  font-weight: 600;
}

.advisor-delivery {
  color: var(--dsw-alias-state-success-primary);
}

.advisor-consumed-instructions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.advisor-instruction-tag {
  padding: 0 7px;
  background: var(--dsw-alias-state-business-tertiary);
  color: var(--dsw-alias-state-business-primary);
}

.advisor-consumed-text {
  max-width: 100%;
  overflow: hidden;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.advisor-input-block {
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
}

.advisor-input-summary {
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 6px 8px;
  border: none;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 10px;
  text-align: left;
  cursor: pointer;
}

.advisor-input-summary:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.advisor-input-markdown {
  max-height: 190px;
  margin: 0;
  overflow: auto;
  padding: 8px;
  border-top: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-family: var(--dsw-font-family, inherit);
  font-size: 10px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.advisor-input-unavailable,
.advisor-outcome-empty {
  padding: 7px 8px;
  border: 1px dashed var(--dsw-alias-border-l2);
  border-radius: 8px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 10px;
  text-align: center;
}

.advisor-note-meta {
  margin-bottom: 3px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
}

.advisor-note {
  color: var(--dsw-alias-label-primary);
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.advisor-reviewing {
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--dsw-alias-state-business-primary);
  font-size: 10px;
}

.advisor-skeleton-line {
  display: block;
  width: 92%;
  height: 7px;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    var(--dsw-alias-interactive-bg-hover),
    var(--dsw-alias-interactive-bg-active),
    var(--dsw-alias-interactive-bg-hover)
  );
  background-size: 220% 100%;
  animation: advisor-skeleton 1.4s linear infinite;
}

.advisor-skeleton-line-short {
  width: 64%;
}

.advisor-card-error {
  padding: 6px 8px;
  border-radius: 7px;
  background: var(--dsw-alias-state-error-secondary);
  color: var(--dsw-alias-state-error-primary);
  font-size: 10px;
  line-height: 1.45;
}

/* ---------- \u5386\u53F2\u7B5B\u9009\u4E0E\u5206\u9875 ---------- */

.advisor-history {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.advisor-history-filters {
  flex: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
}

.advisor-workspace-filter {
  grid-column: 1 / -1;
  display: flex;
  gap: 5px;
}

.advisor-workspace-filter .advisor-input {
  flex: 1;
  min-width: 0;
}

.advisor-history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.advisor-load-more {
  flex: none;
  align-self: center;
}

/* ---------- \u8868\u5355\u901A\u7528\u4EF6 ---------- */

.advisor-input,
.advisor-select,
.advisor-textarea {
  appearance: none;
  width: 100%;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 7px;
  outline: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 10px;
}

.advisor-input,
.advisor-select {
  height: 28px;
  padding: 4px 7px;
}

.advisor-textarea {
  display: block;
  padding: 6px 7px;
  line-height: 1.45;
  resize: vertical;
}

.advisor-input:focus,
.advisor-select:focus,
.advisor-textarea:focus {
  border-color: var(--dsw-alias-state-business-primary);
}

.advisor-input::placeholder,
.advisor-textarea::placeholder {
  color: var(--dsw-alias-label-tertiary);
}

.advisor-button {
  appearance: none;
  flex: none;
  min-height: 28px;
  padding: 4px 9px;
  border: 1px solid var(--dsw-alias-border-l3);
  border-radius: 7px;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 10px;
  cursor: pointer;
}

.advisor-button:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}

.advisor-button-primary {
  border-color: var(--dsw-alias-button-primary-fill);
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-inverted);
}

.advisor-button-primary:hover:not(:disabled) {
  border-color: var(--dsw-alias-button-primary-hover);
  background: var(--dsw-alias-button-primary-hover);
  color: var(--dsw-alias-label-primary-inverted);
}

.advisor-button:disabled,
.advisor-link:disabled {
  opacity: 0.5;
  cursor: default;
}

.advisor-link {
  appearance: none;
  padding: 0;
  border: none;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-state-business-primary);
  font: inherit;
  font-size: 10px;
  cursor: pointer;
}

.advisor-link:hover:not(:disabled) {
  text-decoration: underline;
}

.advisor-link-danger {
  color: var(--dsw-alias-state-error-primary);
}

/* ---------- \u6307\u4EE4\u533A ---------- */

.advisor-instructions {
  flex: none;
  padding: 8px;
  border-top: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}

.advisor-instruction-compose {
  display: flex;
  align-items: stretch;
  gap: 6px;
}

.advisor-instruction-input {
  flex: 1;
  min-width: 0;
  min-height: 44px;
  max-height: 90px;
}

.advisor-steer-hint,
.advisor-settings-hint {
  margin-top: 5px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  line-height: 1.4;
}

/* 2026-08-12 \u7528\u6237\u62CD\u677F\uFF1A\u7EA6\u675F Tab\uFF08\u56DB\u5C42\u7EA7\u2014\u2014\u8BC4\u5BA1\u4F1A\u8BDD/\u4F1A\u8BDD/\u9879\u76EE\uFF09 */
.advisor-scopes {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}

.advisor-scope-hint {
  color: var(--dsw-alias-label-tertiary);
  font-size: 9px;
  line-height: 1.4;
}

.advisor-scope-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.advisor-scope-label {
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  font-weight: 600;
}

.advisor-scope-textarea {
  min-height: 64px;
  max-height: 140px;
}

.advisor-scope-save {
  align-self: flex-end;
}

/* Q3 \u91CD\u6784\uFF1A\u8BC4\u5BA1\u5458\u4F1A\u8BDD\u7BA1\u7406\u6761\uFF08\u4E0A\u4E0B\u6587\u7EDF\u8BA1 + \u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\uFF09 */
.advisor-conversation-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-top: 5px;
  padding: 4px 6px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 4px;
  background: var(--dsw-alias-fill-muted);
}

.advisor-conversation-stats {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsw-alias-label-secondary);
  font-size: 9px;
  font-variant-numeric: tabular-nums;
}

/* 2026-08-13 \u7528\u6237\u53CD\u9988\uFF1A"\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD"\u662F\u5E38\u7528\u529F\u80FD\uFF0C\u592A\u5C0F \u2192 \u5347\u7EA7\u4E3A\u5B9E\u5FC3
 * \u4E3B\u8272\u5927\u6309\u94AE\uFF08\u4E0E\u53D1\u9001\u6309\u94AE\u540C\u6B3E\u4E3B\u8272\uFF0C\u5B57\u53F7/\u5185\u8FB9\u8DDD\u52A0\u5927\u3001\u52A0\u7C97\uFF0C\u4E00\u773C\u53EF\u627E\uFF09 */
.advisor-new-conversation {
  appearance: none;
  flex: none;
  min-height: 32px;
  padding: 6px 16px;
  border: 1px solid var(--dsw-alias-button-primary-fill);
  border-radius: 7px;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-inverted);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
}

.advisor-new-conversation:hover:not(:disabled) {
  border-color: var(--dsw-alias-button-primary-hover);
  background: var(--dsw-alias-button-primary-hover);
}

.advisor-new-conversation:disabled {
  opacity: 0.5;
  cursor: default;
}

.advisor-pending-toggle {
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
  padding: 3px 0;
  border: none;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 10px;
  cursor: pointer;
}

.advisor-pending-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 88px;
  overflow-y: auto;
  padding: 4px 0 0;
}

.advisor-pending-item {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 0;
}

.advisor-pending-state {
  padding: 0 6px;
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-primary);
}

.advisor-pending-text {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---------- \u8BBE\u7F6E disclosure ---------- */

.advisor-settings {
  /* 2026-08-14 \u7528\u6237\u53CD\u9988\uFF1A\u8BBE\u7F6E Tab \u5185\u5BB9\u6491\u6EE1\u9762\u677F\u5269\u4F59\u9AD8\u5EA6\uFF08\u539F\u5148 flex:none
     \u56FA\u5B9A\u5728\u9876\u90E8\uFF0C\u9762\u677F\u4E0B\u65B9\u7559\u5927\u7247\u7A7A\u9699\uFF09 */
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}

.advisor-settings-title {
  padding: 7px 10px 4px;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  font-weight: 600;
}

.advisor-settings[open] .advisor-settings-summary {
  border-bottom: 1px solid var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-primary);
}

.advisor-settings-body {
  /* 2026-08-14 \u7528\u6237\u53CD\u9988\uFF1Abody \u968F\u8BBE\u7F6E Tab \u6491\u6EE1\u9762\u677F\uFF08\u539F max-height:38vh \u9650\u5236
     \u5185\u5BB9\u9AD8\u5EA6\uFF0C\u4E0B\u65B9\u7559\u767D\uFF09\uFF1B\u5185\u5BB9\u8D85\u957F\u65F6\u4ECD\u53EF\u6EDA\u52A8 */
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding: 9px 10px 11px;
}

.advisor-settings-switches {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.advisor-check-row {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  cursor: pointer;
}

.advisor-check-row input {
  accent-color: var(--dsw-alias-state-business-primary);
}

/* Q5\uFF1A\u63D0\u793A\u8BCD\u6A21\u5F0F\u6807\u6CE8\uFF08\u5185\u7F6E\u9ED8\u8BA4 / \u81EA\u5B9A\u4E49\uFF09 */
.advisor-prompt-mode {
  margin-left: 6px;
  font-weight: normal;
  font-size: 9px;
  color: var(--dsw-alias-text-tertiary);
}

.advisor-settings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}

.advisor-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
}

.advisor-prompt-textarea {
  /* 2026-08-14 \u7528\u6237\u53CD\u9988\uFF1A\u8BC4\u5BA1\u7CFB\u7EDF\u63D0\u793A\u8BCD\u8F93\u5165\u6846\u52A0\u9AD8\uFF08\u9ED8\u8BA4\u884C\u6570 rows \u5DF2\u7531
     10\u219222\uFF0C\u8FD9\u91CC\u540C\u6B65\u62AC\u9AD8 min/max \u4E0A\u4E0B\u9650\uFF09 */
  min-height: 280px;
  max-height: 460px;
}

.advisor-settings-save {
  /* 2026-08-12 \u7528\u6237\u53CD\u9988\uFF1A\u4FDD\u5B58\u6309\u94AE\u5C45\u4E2D */
  align-self: center;
}

/* ---------- \u52A8\u753B\u4E0E\u7A84\u5C4F ---------- */

@keyframes advisor-status-breathe {
  0%, 100% { opacity: 0.45; transform: scale(0.92); }
  50% { opacity: 1; transform: scale(1.08); }
}

@keyframes advisor-skeleton {
  from { background-position: 100% 0; }
  to { background-position: -120% 0; }
}

@keyframes advisor-card-arrive {
  0% {
    border-color: var(--dsw-alias-state-business-primary);
    box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary);
  }
  100% {
    border-color: var(--dsw-alias-border-l2);
    box-shadow: 0 0 0 0 var(--dsw-alias-bg-base);
  }
}

@media (prefers-reduced-motion: reduce) {
  .advisor-status-reviewing .advisor-status-icon,
  .advisor-loading-dot,
  .advisor-skeleton-line,
  .advisor-review-card {
    animation: none;
  }
}

@media (max-width: 767px) {
  .advisor-panel {
    top: auto;
    right: 8px;
    bottom: 72px;
    width: calc(100vw - 16px);
    height: min(78vh, 720px);
    min-height: 360px;
  }

  .advisor-capsule {
    top: auto;
    bottom: 128px;
  }

  .advisor-header-toggle > span:nth-child(2) {
    display: none;
  }

  .advisor-history-filters {
    grid-template-columns: 1fr 1fr;
  }

  .advisor-history-filters .advisor-select:nth-child(3) {
    grid-column: 1 / -1;
  }
}
`;var gi=`/**
 * dsh-memory-evolve \u2014 \u79FB\u52A8\u7AEF\u9002\u914D\uFF08dsh-android-edapp \u9002\u914D\u534F\u8BAE\u8DEF\u5F84 B\uFF09\u3002
 *
 * ## \u6765\u6E90\u4E0E\u80CC\u666F
 * \u672C\u6587\u4EF6\u4ECE dsh-android-edapp \u7684 src/client/mobile-tabs.css\uFF08\u4E00\u671F 9+1 Tab \u624B\u673A
 * \u9002\u914D\uFF0C\u5168\u90E8\u89C4\u5219\u539F\u4F4D\u4E8E @media (max-width: 767px) \u5757\u5185\uFF09\u6574\u4F53\u8FC1\u79FB\u800C\u6765
 * \uFF082026-08-09 \u7528\u6237\u62CD\u677F\uFF1A\u9002\u914D\u8DDF\u7740\u63D2\u4EF6\u8D70\u2014\u2014memory-evolve \u5347\u7EA7\u6539\u81EA\u5DF1\u5373\u53EF\uFF0C
 * dsh-android-edapp \u53EA\u7559\u5916\u58F3 + \u901A\u7528\u515C\u5E95 + \u9002\u914D\u7BA1\u7406\u5668\uFF09\u3002
 *
 * ## \u534F\u8BAE\u8BF4\u660E\uFF08ADAPTER PROTOCOL v1\uFF0C\u89C1 dsh-android-edapp/docs/ADAPTER-PROTOCOL.md\uFF09
 * \u672C\u6587\u4EF6\u901A\u8FC7 ./client \u5BFC\u51FA\u9762\u7684\u7EA6\u5B9A\u5B57\u6BB5 \`dshMobile = { css }\`\uFF08src/client/
 * index.ts\uFF09\u4EA4\u7ED9 dsh-android-edapp \u81EA\u52A8\u53D1\u73B0\u5E76\u6CE8\u5165\u3002\u6CE8\u5165\u65F6 css \u4F1A\u88AB\u539F\u6837\u5305\u88F9\u8FDB
 * \`@media (max-width: 767px)\`\uFF0C\u56E0\u6B64\u5FC5\u987B\u9075\u5B88\uFF1A
 * - \u3010\u4E0D\u5199 @media\u3011\u2014\u2014\u5D4C\u5957\u5408\u6CD5\u4F46\u6CA1\u5FC5\u8981\uFF0C\u7EDF\u4E00\u7531 dsh-android-edapp \u5305\u88F9\uFF1B
 * - \u9009\u62E9\u5668\u4E00\u5F8B\u4FDD\u7559 \`html[data-dsh-mobile]\` \u524D\u7F00\uFF08\u8BE5\u5C5E\u6027\u7531 dsh-android-edapp
 *   \u5728 \u2264767px \u65F6\u81EA\u52A8\u6302\u4E0A\uFF0C\u5A92\u4F53\u67E5\u8BE2 + \u5C5E\u6027\u5F00\u5173\u53CC\u4FDD\u9669\uFF0C\u684C\u9762\u96F6\u5F71\u54CD\uFF09\uFF1B
 * - \u53EA\u8986\u76D6\u5E03\u5C40/\u5C3A\u5BF8\uFF08\u5BBD\u5EA6\u3001flex \u65B9\u5411\u3001\u95F4\u8DDD\u3001\u6EA2\u51FA\u3001\u89E6\u533A\u5927\u5C0F\uFF09\uFF0C\u4E0D\u6539\u989C\u8272/\u5B57\u4F53
 *   \uFF08\u8DDF\u968F DSH \u4E3B\u9898\u53D8\u91CF\uFF09\uFF1B
 * - \u4E0E\u901A\u7528\u515C\u5E95\u5C42\uFF08mobile-fallback.css\uFF09\u3010\u65B9\u5411\u76F8\u53CD\u3011\u7684\u89C4\u5219\u5FC5\u987B\u52A0 \`!important\`
 *   \u8868\u660E\u610F\u56FE\uFF08\u534F\u8BAE\u8BED\u4E49\uFF1A\u4F5C\u8005\u9002\u914D\u4F18\u5148\u4E8E\u515C\u5E95\uFF1B\u515C\u5E95\u7528 !important \u505A\u5E03\u5C40\u94B3\u5236\uFF0C
 *   \u5982\u8868\u683C min-width:0\u3001\u9762\u677F max-height \u94B3\u5236\u3001\u5217\u8868 max-height:none \u653E\u901A\uFF09\u3002
 *   \u672C\u6587\u4EF6\u4E2D\u5E26 !important \u7684\u89C4\u5219\u5747\u4E3A\u5BF9\u6297\u515C\u5E95\u94B3\u5236\uFF0C\u9010\u6761\u6CE8\u660E\u7406\u7531\uFF1B
 *   \u65B9\u5411\u4E00\u81F4\u7684\u89C4\u5219\uFF08\u9762\u677F\u6536\u7A84\u3001\u89E6\u533A\u653E\u5927\u3001\u653E\u901A\u7B49\uFF09\u4E0D\u52A0\u3002
 *
 * ## \u8986\u76D6\u8303\u56F4\uFF08\u6309 Tab \u5206\u7EC4\uFF0C\u89C1\u4E0B\u65B9\u5206\u533A\u6CE8\u91CA\uFF09
 * memory-evolve \u5404 Tab\uFF08\u8BB0\u5FC6/\u6280\u80FD/\u5F85\u529E/COI\u8C03\u5EA6/\u4F1A\u8BDD\u5E7F\u64AD/\u63D0\u793A\u8BCD/\u4E66\u7B7E/
 * \u8BBE\u7F6E/\u6A21\u578B/\u753B\u677F\uFF09\u6302\u5728 DSH \u7684 \`conversation.view\` \u69FD\uFF08\u4E2D\u5FC3\u5217\uFF09\uFF0C\u624B\u673A\u4E0A\u4E2D\u5FC3\u5217
 * \u5168\u5BBD\uFF0CTab \u5BB9\u5668\u672C\u8EAB\u6CA1\u95EE\u9898\uFF0C\u95EE\u9898\u5728 Tab **\u5185\u90E8**\u5E03\u5C40\uFF08\u684C\u9762\u5047\u8BBE\uFF09\uFF1A
 * flex \u6A2A\u6392\u591A\u5217\u3001white-space: nowrap\u3001max-width: 45%\u3001\u56FA\u5B9A\u5BBD\u5EA6\u9762\u677F
 * \uFF08360px/560px \u7F16\u8F91\u5668\uFF09\u3001\u957F\u5217\u8868/\u8868\u683C\u7B49\u3002
 * memory-evolve \u5168\u90E8\u4F7F\u7528**\u666E\u901A\u7C7B\u540D**\uFF08me-/mt-/coi-/bb-/pm-/bm- \u524D\u7F00\uFF0C
 * esbuild \u6784\u5EFA\u540E\u4E0D\u54C8\u5E0C\uFF09\u2192 \u9009\u62E9\u5668\u53EF\u76F4\u63A5\u9009\u4E2D\u8986\u76D6\u3002
 * \u7B2C 10 \u8282\u53E6\u8986\u76D6 DSH **\u6838\u5FC3\u5BF9\u8BDD\u533A**\uFF08ConversationRoot/ChatView\uFF0C\u4E0D\u662F\u672C
 * \u63D2\u4EF6 Tab\uFF09\uFF1A\u5BF9\u8BDD\u533A\u4E0E\u7528\u6237\u6D88\u606F\u6C14\u6CE1\u5728\u624B\u673A\u4E0A\u6EE1\u5BBD\u3001\u4E0E\u5C4F\u5E55\u7B49\u5BBD\u65E0\u4E24\u4FA7\u8FB9\u8DDD\u3002
 *
 * ## \u5B9E\u73B0\u7B56\u7565\uFF08\u6309 Tab \u5206\u7EC4\uFF09
 * 1. \u6A2A\u6392\u6539\u7EB5\u6392\uFF1Acoi-split\uFF08\u5DE6\u5217\u8868+\u53F3\u8BE6\u60C5\uFF09\u3001pm-body\uFF08\u4E09\u680F\uFF09\u3001sb-body\uFF08\u5DE6\u680F+\u7F16\u8F91\u5668\uFF09
 * 2. nowrap \u6539\u6362\u884C\uFF1A\u5404\u7C7B head/actions/toolbar \u884C\u8865 flex-wrap
 * 3. 45%/60% \u9650\u5BBD\u5FBD\u6807\u6539\u5168\u5BBD\uFF1Ame-badge / mt-entry-branch / mt-entry-tag
 * 4. \u56FA\u5B9A\u5BBD\u5EA6\u9762\u677F\u6539\u81EA\u9002\u5E94\uFF1Apm-pane-*\u3001sb-main\u3001pm-overlay\u3001sb-modal
 * 5. \u5185\u90E8\u6EDA\u52A8\u5217\u8868\u653E\u5F00\uFF1Ame-list / mt-entries / bb-content \u7B49 max-height \u89E3\u9664\uFF0C
 *    \u5185\u5BB9\u968F\u9875\u9762\u6574\u4F53\u6EDA\u52A8\uFF08\u624B\u673A\u4E0A\u907F\u514D\u5D4C\u5957\u6EDA\u52A8\uFF0C\u4F53\u9A8C\u66F4\u987A\u6ED1\uFF09
 * 6. \u957F\u8868\u683C\u6A2A\u5411\u6EDA\u52A8\uFF1Amt-models-table \u7ED9 min-width \u5F3A\u5236\u6EDA\u52A8\u5BB9\u5668\u751F\u6548
 */

/* ================================================================
 * 0. \u901A\u7528\uFF08\u8DE8 Tab \u5171\u4EAB\u7684\u5E03\u5C40\u8865\u4E01\uFF09
 * ================================================================ */

/* me-panel\uFF1ATodoView / MemoryQueueView / TabGuideView / UiSettingsView \u7684
   \u516C\u5171\u6839\u5BB9\u5668\u3002\u624B\u673A\u4E0A\u6536\u7A84\u5DE6\u53F3\u7559\u767D\u3001\u6536\u7D27\u7EB5\u5411\u95F4\u8DDD\uFF0C\u628A\u5B9D\u8D35\u5BBD\u5EA6\u8BA9\u7ED9\u5185\u5BB9\u3002
   \uFF08\u5DE6\u53F3\u7559\u767D\u4F1A\u88AB\u515C\u5E95\u5C42\u6A21\u5F0F 7 \u4FDD\u5E95\u5230 \u226516px\uFF0C\u65B9\u5411\u4E00\u81F4\uFF0C\u65E0\u9700 !important\u3002\uFF09 */
html[data-dsh-mobile] .me-panel {
  padding: 4px 6px 20px;
  gap: 14px;
}

/* mt-panel\uFF1A\u8BB0\u5FC6/\u6280\u80FD/\u8BBE\u7F6E/\u6A21\u578B\u7B49 Tab \u7684\u516C\u5171\u6839\u5BB9\u5668\uFF0C\u540C\u6837\u6536\u7A84\u7559\u767D\u3002 */
html[data-dsh-mobile] .mt-panel {
  padding: 6px 8px 12px;
  gap: 8px;
}

/* \u4F1A\u8BDD\u8BB0\u5FC6 Tab \u5185\u5D4C\u9762\u677F\uFF08.mt-panel .me-panel \u684C\u9762 62vh \u9650\u9AD8\uFF09\uFF1A\u624B\u673A\u4E0A
   \u89E3\u9664\u9650\u9AD8\uFF0C\u907F\u514D\u300C\u9762\u677F\u5185\u6EDA\u52A8 + \u5916\u5C42\u6EDA\u52A8\u300D\u4E24\u5C42\u5D4C\u5957\u6EDA\u52A8\uFF08\u5D4C\u5957\u6EDA\u52A8\u5728
   \u624B\u673A\u4E0A\u6EDA\u52A8\u624B\u611F\u5DEE\u3001\u8FD8\u5BB9\u6613\u8BEF\u89E6\uFF09\u3002
   !important\uFF1A\u5BF9\u6297\u515C\u5E95\u5C42\u6A21\u5F0F 1 \u2014\u2014 \u515C\u5E95\u5BF9 [class*="panel"] \u7C7B\u5143\u7D20\u94B3\u5236
   max-height: calc(100dvh - 24px)\uFF08\u9632\u5F39\u5C42\u8D85\u9AD8\uFF09\uFF0C\u6B64\u5904\u8981\u5B8C\u5168\u653E\u901A\uFF08none\uFF09\uFF0C
   \u65B9\u5411\u76F8\u53CD\uFF0C\u5FC5\u987B !important \u8868\u660E"\u4F5C\u8005\u9002\u914D\u4F18\u5148"\u3002 */
html[data-dsh-mobile] .mt-panel .me-panel {
  max-height: none !important;
}

/* \u5185\u90E8\u6EDA\u52A8\u5217\u8868\u653E\u5F00\uFF1Ame-list\uFF08\u5EFA\u8BAE\u961F\u5217\uFF09/ mt-entries\uFF08\u7F8E\u89C2\u89C6\u56FE\u6761\u76EE\uFF09/
   me-archive-list\uFF08\u5F52\u6863\u5217\u8868\uFF09\u684C\u9762\u4E0A\u9650\u9AD8\u5185\u6EDA\uFF0C\u624B\u673A\u4E0A\u89E3\u9664\u9650\u9AD8\u8BA9\u5185\u5BB9
   \u81EA\u7136\u5C55\u5F00\uFF0C\u7EDF\u4E00\u7531\u5916\u5C42 mt-panel/me-panel \u6574\u4F53\u6EDA\u52A8\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 6 \u5BF9 [class*="list"/"entries"/"items"] \u540C\u6837\u653E\u901A
   max-height: none\uFF0C\u65B9\u5411\u4E00\u81F4\uFF0C\u65E0\u9700 !important\u3002\uFF09 */
html[data-dsh-mobile] .me-list,
html[data-dsh-mobile] .mt-entries,
html[data-dsh-mobile] .me-archive-list {
  max-height: none;
}

/* \u9650\u5BBD\u5FBD\u6807\u6539\u5168\u5BBD\uFF1Ame-badge\uFF08\u5EFA\u8BAE\u76EE\u6807\u5FBD\u6807 max-width:45%\uFF09\u3001
   mt-entry-branch\uFF08\u5206\u652F\u5FBD\u6807 45%\uFF09\u3001mt-entry-tag\uFF08\u6761\u76EE\u6807\u7B7E 60%\uFF09\u3002
   \u7A84\u5C4F\u4E0B 45%/60% \u4F1A\u628A\u5FBD\u6807\u6587\u5B57\u622A\u65AD\u6210\u7701\u7565\u53F7\uFF0C\u653E\u5F00\u9650\u5BBD\u8BA9\u5FBD\u6807\u5B8C\u6574\u663E\u793A\uFF0C
   \u5FC5\u8981\u65F6\u81EA\u7136\u6362\u884C\u3002 */
html[data-dsh-mobile] .me-badge,
html[data-dsh-mobile] .mt-entry-branch,
html[data-dsh-mobile] .mt-entry-tag {
  max-width: 100%;
}

/* \u5361\u7247\u5934\u884C\u8865\u6362\u884C\uFF1Ame-item-head\uFF08\u5EFA\u8BAE\u6761\u76EE\u5934\uFF09/ mt-card-head\uFF08\u8BB0\u5FC6\u5361\u7247\u5934\uFF09/
   mt-entry-head\uFF08\u7F8E\u89C2\u89C6\u56FE\u6761\u76EE\u5934\uFF09\u684C\u9762\u662F\u5355\u884C\u6A2A\u6392\uFF08\u6807\u9898+\u5FBD\u6807+\u65F6\u95F4+\u64CD\u4F5C\uFF09\uFF0C
   \u624B\u673A\u4E0A\u7A7A\u95F4\u4E0D\u591F\u65F6\u5141\u8BB8\u6298\u884C\uFF0C\u907F\u514D\u64CD\u4F5C\u6309\u94AE\u88AB\u6324\u51FA\u5C4F\u5E55\u3002 */
html[data-dsh-mobile] .me-item-head,
html[data-dsh-mobile] .mt-card-head,
html[data-dsh-mobile] .mt-entry-head {
  flex-wrap: wrap;
}

/* \u64CD\u4F5C\u6309\u94AE\u7EC4\u8865\u6362\u884C\uFF1Ame-item-actions\uFF08\u6761\u76EE\u64CD\u4F5C\uFF09/ me-bulk\uFF08\u6279\u91CF\u64CD\u4F5C\uFF09/
   me-actions\uFF08\u8868\u5355\u5E95\u90E8\u64CD\u4F5C\uFF09\uFF0C\u624B\u673A\u4E0A\u6309\u94AE\u591A\u65F6\u6298\u884C\u800C\u4E0D\u662F\u6EA2\u51FA\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 2 \u5BF9 [class*="actions"] \u5DF2\u5F3A\u5236 flex-wrap\uFF0C\u65B9\u5411\u4E00\u81F4\u3002\uFF09 */
html[data-dsh-mobile] .me-item-actions,
html[data-dsh-mobile] .me-bulk,
html[data-dsh-mobile] .me-actions {
  flex-wrap: wrap;
}

/* \u914D\u7F6E\u8868\u5355\u884C\uFF08me-field\uFF1Alabel + \u63A7\u4EF6\u6A2A\u6392\uFF09\uFF1A\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\uFF1B
   \u6570\u5B57/\u4E0B\u62C9\u63A7\u4EF6\uFF08me-input/me-select\uFF0C\u684C\u9762\u56FA\u5B9A 120px\uFF09\u6539\u5360\u6EE1\u6574\u884C\uFF0C
   \u53D8\u6210\u300Clabel \u4E00\u884C + \u63A7\u4EF6\u4E00\u884C\u300D\u7684\u7EB5\u5411\u6392\u5E03\uFF0C\u7A84\u5C4F\u4E0B\u53EF\u8BFB\u6027\u548C\u89E6\u533A\u90FD\u66F4\u597D\u3002
   \uFF08me-switch \u5F00\u5173\u884C\u4E0D\u53D7\u5F71\u54CD\uFF0C\u5F00\u5173\u4E0D\u9700\u8981\u5168\u5BBD\u3002\uFF09
   \u26A0\uFE0F \u8865\u6F0F\uFF08issue #31\uFF0C2026-09-04\uFF09\uFF1AkeyProgressiveDisclosure \u4E0B\u62C9\u7B49\u63A7\u4EF6
   \u7528\u7684\u662F .me-todo-select\uFF08todo \u9762\u677F select \u540C\u6B3E\u5F0F\uFF09\uFF0C\u539F\u89C4\u5219\u53EA\u8986\u76D6
   .me-input/.me-select\u2014\u2014\u300C\u8BBE\u7F6E\u300D\u9875\u6700\u540E\u4E00\u4E2A\u914D\u7F6E\u7EC4\u5728\u7A84\u5C4F\u4E0A\u5C31\u662F\u8FD9\u4E2A
   \u56FA\u5B9A\u5BBD\u63A7\u4EF6\u6491\u7834\u89C6\u53E3\uFF0C\u4E00\u5E76\u653E\u5BBD\u5230\u6574\u884C\u3002 */
html[data-dsh-mobile] .me-field {
  flex-wrap: wrap;
}
html[data-dsh-mobile] .me-field > .me-input,
html[data-dsh-mobile] .me-field > .me-select,
html[data-dsh-mobile] .me-field > .me-todo-select {
  width: 100%;
}

/* \u4E3B\u6309\u94AE\u89E6\u533A\u5FAE\u589E\uFF1Ame-btn \u684C\u9762 26px \u9AD8\uFF0C\u624B\u673A\u4E0A\u62AC\u5230 30px \u4FBF\u4E8E\u62C7\u6307\u70B9\u6309
   \uFF08\u53EA\u6539\u9AD8\u5EA6\uFF0C\u4E0D\u52A8\u914D\u8272\u4E0E\u5185\u8FB9\u8DDD\u8BED\u4E49\uFF09\u3002 */
html[data-dsh-mobile] .me-btn {
  height: 30px;
}
html[data-dsh-mobile] .mt-btn {
  padding: 4px 12px;
}

/* \u5B50 Tab \u9875\u7B7E\u6536\u7A84\u5185\u8FB9\u8DDD\uFF1Amt-file-tab \u684C\u9762 padding 0 12px\uFF0C\u624B\u673A\u4E0A
   0 10px\uFF0C\u8BA9\u4E00\u884C\u80FD\u591A\u653E\u51E0\u4E2A\u9875\u7B7E\uFF08\u8BB0\u5FC6 Tab \u6587\u4EF6\u9875\u7B7E\u8F83\u591A\uFF09\u3002 */
html[data-dsh-mobile] .mt-file-tab {
  padding: 0 10px;
}

/* \u533A\u5757\u5361\u7247\u5185\u8FB9\u8DDD\u5FAE\u6536\uFF1Ame-block \u684C\u9762 14px\uFF0C\u624B\u673A\u4E0A 10px 12px\u3002 */
html[data-dsh-mobile] .me-block {
  padding: 10px 12px;
}

/* ================================================================
 * 1. \u8BB0\u5FC6 Tab\uFF08mt-/me- \u7C7B\uFF0CMemoryTabView + MemoryQueueView\uFF09
 * ================================================================ */

/* KEY \u624B\u5DE5\u6DFB\u52A0\u6846\u5E95\u90E8\u884C\uFF08\u8BF4\u660E\u6587\u5B57 + \u6DFB\u52A0\u6309\u94AE\uFF09\uFF1A\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\uFF0C
   \u907F\u514D\u8BF4\u660E\u6587\u5B57\u88AB\u6309\u94AE\u6324\u538B\u3002 */
html[data-dsh-mobile] .mt-key-add-foot {
  flex-wrap: wrap;
}

/* \u5185\u5D4C\u8BF4\u660E\u6587\u5B57\u884C\uFF1A\u4FDD\u6301\u6362\u884C\u80FD\u529B\uFF0C\u4E0D\u989D\u5916\u5904\u7406\uFF08mt-toolbar \u5DF2\u81EA\u5E26
   flex-wrap\uFF0C\u641C\u7D22\u6846 min-width 160px \u624B\u673A\u4E0A\u81EA\u52A8\u5360\u884C\uFF09\u3002 */

/* ================================================================
 * 2. \u5F85\u529E Tab\uFF08me-todo-*\uFF0CTodoView\uFF09
 * ================================================================ */

/* \u65B0\u589E\u5F85\u529E\u884C\uFF08\u8F93\u5165\u6846 + \u5206\u7C7B\u4E0B\u62C9 + \u6DFB\u52A0\u6309\u94AE\uFF09\uFF1A\u624B\u673A\u4E0A\u8F93\u5165\u6846\u5360\u6EE1\u6574\u884C\uFF0C
   \u4E0B\u62C9\u4E0E\u6309\u94AE\u6298\u5230\u7B2C\u4E8C\u884C\u2014\u2014\u7A84\u5C4F\u4E0B\u684C\u9762\u5F0F\u5355\u884C\u6392\u5E03\u4F1A\u6324\u7206\u3002 */
html[data-dsh-mobile] .me-todo-add {
  flex-wrap: wrap;
}
html[data-dsh-mobile] .me-todo-add .me-todo-input {
  flex-basis: 100%;
}

/* \u7B5B\u9009\u533A\uFF08\u8F68 checkbox \u7EC4\uFF09\uFF1A\u684C\u9762 gap 16px \u5355\u884C\uFF0C\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\u5E76
   \u6536\u7D27\u95F4\u8DDD\uFF0C\u7B5B\u9009\u9879\u591A\u65F6\u6362\u884C\u6392\u5217\u3002 */
html[data-dsh-mobile] .me-todo-filters {
  flex-wrap: wrap;
  gap: 8px 12px;
}

/* \u5217\u8868/\u770B\u677F\u89C6\u56FE\u5207\u6362\uFF08\u5206\u6BB5\u63A7\u4EF6\uFF09\uFF1A\u684C\u9762\u4E0A margin-left:auto \u8D34\u53F3\uFF0C
   \u624B\u673A\u4E0A\u5360\u6EE1\u6574\u884C\u3001\u4E24\u4E2A\u6309\u94AE\u5747\u5206\u5BBD\u5EA6\u2014\u2014\u89E6\u533A\u66F4\u5927\u3001\u66F4\u597D\u70B9\u6309\u3002 */
html[data-dsh-mobile] .me-todo-view-switch {
  margin-left: 0;
  flex-basis: 100%;
}
html[data-dsh-mobile] .me-todo-view-btn {
  flex: 1;
}

/* \u56DB\u8C61\u9650\u770B\u677F\uFF1Amemory-evolve \u81EA\u5E26 \u2264720px \u5355\u5217\u65AD\u70B9\uFF0C767px \u5185\u81EA\u7136\u547D\u4E2D\uFF0C
   \u65E0\u9700\u8986\u76D6\uFF082\xD72 \u5BAB\u683C\u5728\u624B\u673A 375px \u4E0B\u5DF2\u81EA\u52A8\u5806\u53E0\u4E3A\u5355\u5217\uFF09\u3002 */

/* ================================================================
 * 3. \u6280\u80FD Tab\uFF08me-/sb- \u7C7B\uFF0CSkillsTabView + skills-browser\uFF09
 * ================================================================ */

/* \u6280\u80FD\u6D4F\u89C8\u5668\u6839\u5BB9\u5668\uFF1A\u4F1A\u8BDD\u5185\u5D4C\u65F6\u684C\u9762 62vh \u9650\u9AD8\uFF0C\u624B\u673A\u4E0A\u89E3\u9664\uFF08\u540C me-panel
   \u7684\u7406\u7531\uFF0C\u907F\u514D\u5D4C\u5957\u6EDA\u52A8\uFF09\u3002 */
html[data-dsh-mobile] .mt-panel .sb-root {
  max-height: none;
}

/* \u4E3B\u4F53\u4E24\u680F\u6539\u7EB5\u6392\uFF1Asb-body \u684C\u9762\u6A2A\u6392\uFF08\u5DE6\u680F sb-side + \u53F3\u680F sb-main
   \u7F16\u8F91\u5668\uFF09\uFF0C\u624B\u673A\u4E0A\u4E0A\u4E0B\u5806\u53E0\u2014\u2014\u7F16\u8F91\u5668 42%/min-width:320px \u5728 375px
   \u5C4F\u4E0A\u653E\u4E0D\u4E0B\u4E24\u680F\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 2 \u5BF9 [class*="body"] \u5DF2\u5F3A\u5236 column\uFF0C\u65B9\u5411\u4E00\u81F4\u3002\uFF09 */
html[data-dsh-mobile] .sb-body {
  flex-direction: column;
}

/* \u5DE6\u680F\uFF08\u641C\u7D22 + \u6280\u80FD\u5217\u8868 + \u76EE\u5F55\u6811\uFF09\uFF1A\u624B\u673A\u4E0A\u9650\u9AD8 45vh \u5185\u90E8\u6EDA\u52A8\uFF0C
   \u907F\u514D\u628A\u7F16\u8F91\u5668\u9876\u51FA\u5C4F\u5E55\u3002 */
html[data-dsh-mobile] .sb-side {
  flex: none;
  max-height: 45vh;
}

/* \u53F3\u680F\u7F16\u8F91\u5668\uFF1A\u684C\u9762 width:42% min-width:320px\uFF0C\u624B\u673A\u4E0A\u6539\u5168\u5BBD\u81EA\u9002\u5E94\uFF0C
   \u5DE6\u4FA7\u7AD6\u7EBF\u6539\u9876\u90E8\u6A2A\u7EBF\uFF08\u89C6\u89C9\u5206\u9694\u8DDF\u968F\u5806\u53E0\u65B9\u5411\uFF09\u3002min-height 40vh
   \u4FDD\u8BC1\u7F16\u8F91\u5668\u5728\u7EB5\u6392\u540E\u4ECD\u6709\u8DB3\u591F\u7F16\u8F91\u533A\u57DF\u3002 */
html[data-dsh-mobile] .sb-main {
  width: 100%;
  min-width: 0;
  max-width: none;
  flex: none;
  min-height: 40vh;
  border-left: none;
  border-top: 1px solid var(--dsw-alias-border-l);
}

/* \u5DE6\u680F\u4E0A\u4E0B\u5206\u533A\uFF08\u6280\u80FD\u5217\u8868 55% / \u76EE\u5F55\u6811 45%\uFF09\uFF1A\u7EB5\u6392\u540E flex \u6BD4\u4F8B\u65E0\u610F\u4E49\uFF0C
   \u6539\u4E3A\u5404\u81EA\u5185\u5BB9\u81EA\u9002\u5E94 + \u6700\u5C0F\u9AD8\u5EA6\uFF0C\u907F\u514D\u67D0\u4E00\u5206\u533A\u88AB\u538B\u6CA1\u3002 */
html[data-dsh-mobile] .sb-section--skills,
html[data-dsh-mobile] .sb-section--files {
  flex: none;
}
html[data-dsh-mobile] .sb-section--skills {
  min-height: 30vh;
}
html[data-dsh-mobile] .sb-section--files {
  min-height: 26vh;
}

/* \u76EE\u5F55\u6811\u884C\u9AD8\uFF1A\u684C\u9762 24px \u592A\u77EE\uFF0C\u624B\u673A\u4E0A\u62AC\u5230 30px \u4FBF\u4E8E\u70B9\u6309\u3002 */
html[data-dsh-mobile] .sb-tree-row {
  height: 30px;
}

/* \u81EA\u5B9A\u4E49\u76EE\u5F55\u6DFB\u52A0\u884C\uFF08\u8F93\u5165\u6846 + \u6DFB\u52A0\u6309\u94AE\uFF09\uFF1A\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\u3002 */
html[data-dsh-mobile] .sb-dirs-addrow {
  flex-wrap: wrap;
}

/* \u5F39\u7A97\uFF08\u653E\u5F03\u4FEE\u6539\u786E\u8BA4 360px / \u76EE\u5F55\u7BA1\u7406 560px\uFF09\uFF1A\u624B\u673A\u4E0A\u6539\u8FD1\u5168\u5BBD\uFF0C
   \u4E24\u4FA7\u7559 16px \u8FB9\u8DDD\uFF08\u539F max-width calc(100vw-48px) \u8986\u76D6\u4E3A 32px\uFF0C
   \u66F4\u8D34\u8FB9\u3001\u5185\u5BB9\u533A\u66F4\u5927\uFF09\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 1 \u4F1A\u94B3\u5236 [class*="modal"] \u7684 max-width \u4E3A
   calc(100vw - 24px)\u2014\u2014\u6B64\u5904 width \u663E\u5F0F calc(100vw - 32px) \u66F4\u7A84\u3001
   \u65B9\u5411\u4E00\u81F4\uFF0C\u5B9E\u9645\u5BBD\u5EA6\u7531 width \u4E3B\u5BFC\uFF0C\u65E0\u9700 !important\u3002\uFF09 */
html[data-dsh-mobile] .sb-modal,
html[data-dsh-mobile] .sb-modal--dirs {
  width: calc(100vw - 32px);
  max-width: calc(100vw - 32px);
}

/* ================================================================
 * 4. COI \u8C03\u5EA6 Tab\uFF08coi- \u7C7B\uFF0CCoIView\uFF09
 * ================================================================ */

/* \u5B50 Tab \u6761\uFF1A\u684C\u9762\u5355\u884C\u4E0D\u6362\u884C\uFF0C\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\uFF08\u8C03\u5EA6/\u7EDF\u8BA1/\u53D1\u8D77/\u9002\u914D\u5668
   \u7B49\u9875\u7B7E\u591A\u65F6\u6362\u884C\u6392\u5217\uFF09\u3002 */
html[data-dsh-mobile] .coi-tabs {
  flex-wrap: wrap;
}

/* \u4EFB\u52A1\u89C6\u56FE\u5DE6\u53F3\u5206\u680F\u6539\u7EB5\u6392\uFF1Acoi-split \u684C\u9762\uFF08\u5DE6\u4EFB\u52A1\u5217\u8868 46% + \u53F3\u8BE6\u60C5\uFF09\uFF0C
   \u624B\u673A\u4E0A\u4E0A\u4E0B\u5806\u53E0\u2014\u2014\u5217\u8868\u9650\u9AD8 40vh \u5185\u90E8\u6EDA\u52A8\uFF0C\u8BE6\u60C5\u533A\u7ED9\u8DB3 30vh\u3002 */
html[data-dsh-mobile] .coi-split {
  flex-direction: column;
}
/* \u4EFB\u52A1\u5217\u8868\u9650\u9AD8 40vh \u5185\u90E8\u6EDA\u52A8\uFF08\u7EB5\u6392\u540E\u5217\u8868\u4E0D\u80FD\u65E0\u9650\u62C9\u957F\uFF0C\u5426\u5219\u8BE6\u60C5\u533A
   \u88AB\u9876\u51FA\u5C4F\u5E55\uFF09\u3002
   !important\uFF1A\u5BF9\u6297\u515C\u5E95\u5C42\u6A21\u5F0F 6 \u2014\u2014 \u515C\u5E95\u5BF9 [class*="list"] \u5F3A\u5236
   max-height: none \u653E\u901A\uFF08\u5047\u8BBE\u6240\u6709\u5217\u8868\u90FD\u8BE5\u968F\u9875\u9762\u6EDA\u52A8\uFF09\uFF0C\u6B64\u5904\u5217\u8868\u8981
   \u4FDD\u7559 40vh \u9650\u9AD8\u5185\u6EDA\uFF0C\u65B9\u5411\u76F8\u53CD\uFF0C\u5FC5\u987B !important\u3002 */
html[data-dsh-mobile] .coi-task-list {
  flex: none;
  width: 100%;
  max-height: 40vh !important;
}
html[data-dsh-mobile] .coi-detail {
  flex: none;
  min-height: 30vh;
}

/* \u5DE5\u5177\u680F/\u64CD\u4F5C\u7EC4\u8865\u6362\u884C\uFF1Acoi-toolbar\uFF08\u5DE5\u5177\u6761\uFF09\u3001coi-detail-actions
   \uFF08\u8BE6\u60C5\u64CD\u4F5C\uFF09\u3001coi-form-actions\uFF08\u8868\u5355\u64CD\u4F5C\uFF09\u3001coi-card-head\uFF08\u5361\u7247\u5934\uFF09\u3001
   coi-meta-row\uFF08\u5143\u4FE1\u606F\u884C\uFF09\uFF0C\u624B\u673A\u4E0A\u591A\u63A7\u4EF6\u65F6\u6298\u884C\u9632\u6EA2\u51FA\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 2 \u5BF9 [class*="toolbar"/"actions"] \u5DF2\u5F3A\u5236 flex-wrap\u3002\uFF09 */
html[data-dsh-mobile] .coi-toolbar,
html[data-dsh-mobile] .coi-detail-actions,
html[data-dsh-mobile] .coi-form-actions,
html[data-dsh-mobile] .coi-card-head,
html[data-dsh-mobile] .coi-meta-row {
  flex-wrap: wrap;
}

/* \u6CE8\u5165\u8F68\u52FE\u9009\u884C\uFF08\u4E09\u4E2A checkbox \u6A2A\u5411\u6392\uFF09\uFF1A\u624B\u673A\u4E0A\u6536\u7D27\u95F4\u8DDD\u5E76\u5141\u8BB8\u6298\u884C\u3002 */
html[data-dsh-mobile] .coi-inject-track-line {
  gap: 10px;
  flex-wrap: wrap;
}

/* \u7EDF\u8BA1\u5361\u7247\uFF1A\u684C\u9762 min-width 140px \u4E00\u884C\u653E 2~3 \u4E2A\uFF0C\u624B\u673A\u4E0A\u7F29\u5230 120px
   \u4FDD\u8BC1\u4E00\u884C\u81F3\u5C11\u4E24\u4E2A\u3001\u4E0D\u6EA2\u51FA\u3002 */
html[data-dsh-mobile] .coi-stat-card {
  min-width: 120px;
  flex-basis: 120px;
}

/* \u5185\u5BB9\u533A\u5185\u8FB9\u8DDD\u5FAE\u6536\u3002 */
html[data-dsh-mobile] .coi-pane {
  padding: 10px;
}

/* ================================================================
 * 5. \u4F1A\u8BDD\u5E7F\u64AD Tab\uFF08bb- \u7C7B\uFF0CBroadcastView\uFF09
 * ================================================================ */

/* bb- \u7CFB\u5217\u6574\u4F53\u54CD\u5E94\u5F0F\u57FA\u7840\u597D\uFF08bb-row/bb-meta/bb-toolbar/bb-session-line
   \u5747\u81EA\u5E26 flex-wrap\uFF09\uFF0C\u53EA\u9700\u6536\u7A84\u7559\u767D + \u653E\u5F00\u6D88\u606F\u5168\u6587\u9650\u9AD8\u3002 */
html[data-dsh-mobile] .bb-pane {
  padding: 4px 6px 16px;
}

/* \u623F\u95F4\u6D88\u606F\u533A\u5757\u5185\u8FB9\u8DDD\u5FAE\u6536\u3002 */
html[data-dsh-mobile] .bb-room-msgs {
  padding: 10px;
}

/* \u6D88\u606F\u5168\u6587\uFF08bb-content \u684C\u9762 max-height 320px \u5185\u6EDA\uFF09\uFF1A\u624B\u673A\u4E0A\u653E\u5F00\u9650\u9AD8
   \u8BA9\u5168\u6587\u81EA\u7136\u5C55\u5F00\u968F\u9875\u9762\u6EDA\u52A8\uFF08\u5D4C\u5957\u6EDA\u52A8\u4F53\u9A8C\u5DEE\uFF09\u3002 */
html[data-dsh-mobile] .bb-content {
  max-height: none;
}

/* ================================================================
 * 6. \u63D0\u793A\u8BCD Tab\uFF08pm- \u7C7B\uFF0CPromptView\uFF09
 * ================================================================ */

/* \u6839\u5BB9\u5668\uFF1A\u684C\u9762 overflow:hidden \u4E09\u680F\u5185\u90E8\u5404\u81EA\u6EDA\u52A8\uFF0C\u624B\u673A\u4E0A\u6539\u6574\u4F53\u53EF\u6EDA\u3002 */
html[data-dsh-mobile] .pm-root {
  padding: 6px;
  overflow-y: auto;
}

/* \u9876\u680F\uFF08\u641C\u7D22 + \u7B5B\u9009\u4E0B\u62C9 + \u6309\u94AE\uFF09\uFF1A\u624B\u673A\u4E0A\u641C\u7D22\u6846\u5360\u6EE1\u6574\u884C\uFF0C
   \u4E0B\u62C9\u4E0E\u6309\u94AE\u6298\u5230\u7B2C\u4E8C\u884C\u3002 */
html[data-dsh-mobile] .pm-toolbar {
  flex-wrap: wrap;
}
html[data-dsh-mobile] .pm-search {
  flex-basis: 100%;
}

/* \u4E09\u680F\u4E3B\u4F53\u6539\u7EB5\u6392\uFF1Apm-body \u684C\u9762\uFF08\u5206\u7C7B\u6811 130px + \u5217\u8868 + \u8BE6\u60C5 42%\uFF09\uFF0C
   \u624B\u673A\u4E0A\u4E0A\u4E0B\u5806\u53E0\u4E09\u6BB5\u2014\u2014\u5206\u7C7B\u6811\u9650\u9AD8 26vh\u3001\u5217\u8868\u9650\u9AD8 40vh\uFF08\u5185\u90E8\u6EDA\u52A8\uFF09\uFF0C
   \u8BE6\u60C5\u8868\u5355\u7ED9\u8DB3 40vh\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 2 \u5BF9 [class*="body"] \u5DF2\u5F3A\u5236 column\uFF0C\u65B9\u5411\u4E00\u81F4\u3002\uFF09 */
html[data-dsh-mobile] .pm-body {
  flex-direction: column;
}
/* \u5206\u7C7B\u6811\u9650\u9AD8 26vh \u5185\u90E8\u6EDA\u52A8\u3002
   !important\uFF1A\u5BF9\u6297\u515C\u5E95\u5C42\u6A21\u5F0F 1 \u2014\u2014 \u515C\u5E95\u5BF9 [class*="pane"] \u94B3\u5236
   max-height: calc(100dvh - 24px)\uFF08\u628A\u542B pane \u7684\u5143\u7D20\u5F53\u5F39\u5C42\u9632\u8D85\u9AD8\uFF09\uFF0C
   \u6B64\u5904\u8981\u4FDD\u7559 26vh \u9650\u9AD8\uFF0C\u65B9\u5411\u76F8\u53CD\uFF0C\u5FC5\u987B !important\u3002 */
html[data-dsh-mobile] .pm-pane-cats {
  width: 100%;
  flex: none;
  max-height: 26vh !important;
}
/* \u5217\u8868\u9650\u9AD8 40vh \u5185\u90E8\u6EDA\u52A8\u3002
   !important\uFF1A\u53CC\u91CD\u5BF9\u6297\u515C\u5E95 \u2014\u2014 \u2460 \u6A21\u5F0F 1 \u5BF9 [class*="pane"] \u94B3\u5236
   max-height: calc(100dvh - 24px)\uFF1B\u2461 \u6A21\u5F0F 6 \u5BF9 [class*="list"] \u5F3A\u5236
   max-height: none \u653E\u901A\u3002\u4E24\u5904\u65B9\u5411\u90FD\u76F8\u53CD\uFF0C\u5FC5\u987B !important\u3002 */
html[data-dsh-mobile] .pm-pane-list {
  flex: none;
  max-height: 40vh !important;
}
html[data-dsh-mobile] .pm-pane-detail {
  width: 100%;
  min-width: 0;
  flex: none;
  min-height: 40vh;
}

/* \u6D6E\u5C42\uFF08\u6CE8\u5165\u4E2D / \u6765\u6E90\u5217\u8868\uFF0C\u684C\u9762 320px/420px \u56FA\u5B9A\u5BBD\uFF09\uFF1A\u624B\u673A\u4E0A\u6539\u8FD1\u5168\u5BBD
   \u8D34\u8FB9\u6D6E\u5C42\uFF08\u5DE6\u53F3\u5404\u7559 8px\uFF09\uFF0C\u5185\u5BB9\u66F4\u6613\u8BFB\u3002
   \uFF08\u515C\u5E95\u5C42\u6A21\u5F0F 1 \u5BF9 [class*="overlay"] \u94B3\u5236 max-width:
   calc(100vw - 24px)\uFF0C\u4E0E"\u8FD1\u5168\u5BBD\u8D34\u8FB9"\u65B9\u5411\u4E00\u81F4\uFF0C\u5B9E\u9645\u5BBD\u5EA6\u53D7\u5176\u4FDD\u5E95\uFF0C
   \u65E0\u9700 !important\u3002\uFF09 */
html[data-dsh-mobile] .pm-overlay,
html[data-dsh-mobile] .pm-overlay-wide {
  left: 8px;
  right: 8px;
  width: auto;
  max-width: none;
}

/* \u6CE8\u5165\u6309\u94AE\u7EC4\uFF1A\u5141\u8BB8\u6298\u884C\u3002 */
html[data-dsh-mobile] .pm-inject-group {
  flex-wrap: wrap;
}

/* ================================================================
 * 8. \u4E66\u7B7E Tab\uFF08bm- \u7C7B\uFF0CBookmarksView\uFF09
 * ================================================================ */

/* bm- \u7CFB\u5217\u4E3B\u4F53\u7EB5\u5411\u5E03\u5C40\u5DF2\u9002\u914D\uFF0C\u53EA\u9700\u6536\u7A84\u7559\u767D + \u6761\u76EE\u5934\u8865\u6362\u884C\u3002
   \uFF08\u5DE6\u53F3\u7559\u767D\u4F1A\u88AB\u515C\u5E95\u5C42\u6A21\u5F0F 7 \u4FDD\u5E95\u5230 \u226516px\uFF0C\u65B9\u5411\u4E00\u81F4\u3002\uFF09 */
html[data-dsh-mobile] .bm-panel {
  padding: 8px 10px;
}

/* \u6761\u76EE\u5934\uFF08\u540D\u79F0 + \u65F6\u95F4\uFF09\uFF1A\u684C\u9762 baseline \u5355\u884C\uFF0C\u624B\u673A\u4E0A\u5141\u8BB8\u6298\u884C\uFF0C
   \u957F\u540D\u79F0\u4E0D\u518D\u6324\u538B\u53F3\u4FA7\u65F6\u95F4\u3002 */
html[data-dsh-mobile] .bm-item-head {
  flex-wrap: wrap;
}

/* ================================================================
 * 9. \u8BBE\u7F6E / \u6A21\u578B Tab\uFF08me- / mt-models- \u7C7B\uFF09
 * ================================================================ */

/* \u8BBE\u7F6E Tab\uFF08SettingsTabView\uFF09\u4E0E UI \u8BBE\u7F6E\uFF08UiSettingsView\uFF09\u590D\u7528 me-panel /
   me-form / me-field / me-block\uFF0C\u5DF2\u7531\u7B2C 0 \u8282\u901A\u7528\u89C4\u5219\u8986\u76D6\uFF0C\u65E0\u9700\u91CD\u590D\u3002 */

/* \u6A21\u578B\u8868\u683C\u5BB9\u5668\uFF1A\u684C\u9762 flex:1 \u9650\u9AD8\u5185\u6EDA\uFF08\u7EB5\u5411\uFF09\uFF0C\u624B\u673A\u4E0A\u6539 flex:none
   \u9AD8\u5EA6\u968F\u5185\u5BB9\uFF08\u7EB5\u5411\u968F\u9875\u9762\u6EDA\u52A8\uFF09\uFF0C\u6A2A\u5411\u6EDA\u52A8\u4FDD\u7559\uFF08\u8868\u683C\u5217\u591A\u65F6\u5DE6\u53F3\u6ED1\uFF09\u3002 */
html[data-dsh-mobile] .mt-models-scroll {
  flex: none;
  overflow-x: auto;
}

/* \u6A21\u578B\u8868\u683C\uFF1A\u7ED9\u4E00\u4E2A\u6700\u5C0F\u5BBD\u5EA6\uFF08\u7EA6 640px\uFF09\uFF0C\u4FDD\u8BC1\u5217\u4E0D\u88AB\u538B\u6241\u3001\u6A2A\u5411\u6EDA\u52A8
   \u5BB9\u5668\u771F\u6B63\u751F\u6548\uFF08\u684C\u9762 width:100% \u4F1A\u81EA\u52A8\u538B\u7F29\u5217\u5BBD\u5BFC\u81F4\u9605\u8BFB\u56F0\u96BE\uFF09\u3002
   !important\uFF1A\u5BF9\u6297\u515C\u5E95\u5C42\u6A21\u5F0F 3 \u2014\u2014 \u515C\u5E95\u5BF9 [class*="table"] \u5F3A\u5236
   min-width: 0\uFF08\u8BA9\u8868\u683C\u6536\u7F29\u56DE\u89C6\u53E3\u5BBD\u3001\u5185\u90E8\u6EDA\u52A8\uFF09\uFF0C\u6B64\u5904\u8981\u4FDD 640px
   \u8868\u683C\u5BBD\u5EA6\uFF0C\u65B9\u5411\u76F8\u53CD\uFF0C\u5FC5\u987B !important\uFF08\u534F\u8BAE\u6587\u6863\u7AEF\u5230\u7AEF\u9A8C\u8BC1\u7B2C 12 \u9879
   \u5373\u6B64\u573A\u666F\uFF09\u3002 */
html[data-dsh-mobile] .mt-models-table {
  min-width: 640px !important;
}

/* \u6A21\u578B\u884C\u5185\u601D\u8003\u7B49\u7EA7\u6807\u7B7E\u533A\uFF1Aflex-wrap \u5DF2\u81EA\u5E26\uFF0C\u65E0\u9700\u5904\u7406\u3002 */

/* ================================================================
 * 10. DSH \u5BF9\u8BDD\u533A\uFF08\u4E2D\u5FC3\u5217\uFF0CConversationRoot/ChatView\uFF09\u2014\u2014\u6D88\u606F\u4E0E\u5C4F\u5E55\u7B49\u5BBD
 * ================================================================ */

/* \u5BF9\u8BDD\u533A\u5360\u6EE1\u5C4F\u5BBD\uFF1ADSH \u5BF9\u8BDD\u533A\u5BBD\u5EA6\u7531 CSS \u53D8\u91CF --dsh-chat-content-width
   \u63A7\u5236\uFF08ConversationRoot.module.css \u9ED8\u8BA4 748px \u684C\u9762\u7A84\u680F\uFF09\uFF0C\u624B\u673A\u4E0A
   \u8986\u76D6\u4E3A 100%\u2014\u2014\u6D88\u606F\u5217\u3001\u7EDF\u8BA1\u884C\u3001\u5BA1\u6279\u9762\u677F\u5168\u90E8\u8DDF\u968F\uFF1B\u8F93\u5165\u6846\u6D3E\u751F\u53D8\u91CF
   \uFF08= content + 32px\uFF09\u88AB\u5176\u81EA\u8EAB width: min(..., 100%) \u515C\u5E95\uFF0C\u4E0D\u4F1A\u6EA2\u51FA\u3002
   !important\uFF1A\u5BF9\u6297 DSH UI \u8BBE\u7F6E\u6A21\u5757 wideChat \u529F\u80FD\uFF08html[data-dsh-ui-
   wide-chat="on"] [data-phase] { --dsh-chat-content-width: 95% }\u2014\u2014
   PC \u684C\u9762\u89C4\u5219\u5728\u7A84\u5C4F\u540C\u6837\u547D\u4E2D\uFF0C\u4E14\u7279\u5F02\u6027\u4E0E\u672C\u89C4\u5219\u76F8\u540C\u3001\u6E90\u987A\u5E8F\u4E0D\u786E\u5B9A\u8C01
   \u8D62\uFF09\uFF0C\u624B\u673A\u9002\u914D\u534F\u8BAE\u4F18\u5148\u4E8E\u684C\u9762\u529F\u80FD\u5F00\u5173\uFF0C\u65B9\u5411\u76F8\u53CD\u5FC5\u987B !important\u3002 */
html[data-dsh-mobile] [data-phase] {
  --dsh-chat-content-width: 100% !important;
}

/* \u6CE8\u610F\uFF1A\u4E0D\u8981\u7ED9 [data-phase]\uFF08\u5BF9\u8BDD\u533A\u5BB9\u5668\uFF0C\u542B\u5E95\u90E8\u8F93\u5165\u6846\uFF09\u52A0 margin-left /
   width \u8986\u76D6\u2014\u20142026-08-10 \u66FE\u8BEF\u52A0\u300C\u5DE6\u7559\u767D 10px\u300D\u5BFC\u81F4\u6574\u4E2A\u533A\u57DF\uFF08\u542B\u8F93\u5165\u6846\uFF09
   \u5BBD\u5EA6\u88AB\u6539\uFF0C\u771F\u673A\u51FA\u73B0\u8F93\u5165\u6846\u5149\u6807\u4E0E\u6587\u5B57\u9519\u4F4D\u3001\u6587\u5B57\u95F4\u51FA\u73B0\u7A7A\u9699\uFF08\u7528\u6237\u5B9E\u6D4B\u53CD\u9988\uFF09\u3002
   \u5BF9\u8BDD\u533A\u6EE1\u5BBD\u7531\u4E0A\u65B9 --dsh-chat-content-width: 100% \u89C4\u5219\u63A7\u5236\u5373\u53EF\uFF0C\u8F93\u5165\u6846
   \u5BBD\u5EA6\u7531\u5176\u81EA\u8EAB width: min(..., 100%) \u515C\u5E95\uFF0C\u5BB9\u5668\u7EA7\u8986\u76D6\u4E00\u5F8B\u4E0D\u52A0\u3002 */

/* \u7528\u6237\u6D88\u606F\u6C14\u6CE1\u6EE1\u5BBD\uFF1A\u9ED8\u8BA4 max-width: min(525px, 82%)\uFF08MessageItem.
   module.css .bubble\uFF09\uFF0C\u624B\u673A\u4E0A\u653E\u5F00\u4E3A 100%\uFF0C\u6D88\u9664\u4E24\u4FA7\u7559\u767D\uFF1B\u77ED\u6D88\u606F\u4ECD\u6309
   \u5185\u5BB9\u81EA\u9002\u5E94\uFF08max-width \u53EA\u8BBE\u4E0A\u9650\uFF0C\u4E0D\u5F3A\u5236\u6491\u6EE1\uFF09\u3002\u951A\u70B9\uFF1A\u7528\u6237\u6D88\u606F\u884C
   userRow \u6709\u6052\u5B9A data-time-hover-root \u5C5E\u6027\uFF08MessageItem.tsx\uFF09\uFF0C
   bubble \u6052\u4E3A\u5176**\u7B2C\u4E00\u4E2A div \u5B50\u5143\u7D20**\uFF08steering \u6807\u8BB0\u662F span\u3001
   MessageIconActions \u662F\u7B2C\u4E8C\u4E2A div\uFF09\u2192 div:first-of-type \u552F\u4E00\u547D\u4E2D\u3002
   !important\uFF1A\u540C\u4E0A\u5BF9\u6297 ui-settings wideBubble \u7684 80% \u89C4\u5219
   \uFF08html[data-dsh-ui-wide-bubble="on"] [data-time-hover-root] >
   div:first-of-type\uFF09\uFF0CPC \u89C4\u5219\u7A84\u5C4F\u540C\u6837\u547D\u4E2D\uFF0C\u65B9\u5411\u76F8\u53CD\u5FC5\u987B !important\u3002 */
html[data-dsh-mobile] [data-time-hover-root] > div:first-of-type {
  max-width: 100% !important;
}

/* \u52A9\u624B\u6D88\u606F\u65E0\u9700\u5355\u72EC\u89C4\u5219\uFF1AAssistantMarkdown \u672C\u6765\u5C31\u662F full-width
   \uFF08\u65E0 max-width \u9650\u5236\uFF09\uFF0C\u5BBD\u5EA6\u53EA\u968F\u6D88\u606F\u5217\uFF08--dsh-chat-content-width\uFF09
   \u8D70\uFF0C\u5217 100% \u5373\u6EE1\u5BBD\u3001\u65E0\u4E24\u4FA7\u8FB9\u8DDD\u3002 */

/* \u6D88\u606F\u6EDA\u52A8\u5BB9\u5668\u5DE6\u53F3 padding \u5F52\u96F6\uFF08\u7528\u6237\u5B9E\u6D4B\u53CD\u9988\uFF1A\u5BF9\u8BDD\u533A\u5DF2\u6EE1\u5BBD\u4F46\u6D88\u606F
   \u4ECD\u6709\u5DE6\u53F3\u7F29\u8FDB\u3001\u4E14\u53F3\u4FA7\u6BD4\u5DE6\u4FA7\u591A\u4E00\u5757\uFF09\uFF1A
   DSH ChatView.module.css .scroll \u6709\u56FA\u5B9A padding: 16px calc(var(--dsh-
   composer-side-clearance) + 16px) = \u5DE6\u53F3\u5404 32px\uFF08\u8BBE\u8BA1\u4E0A\u662F"\u8F93\u5165\u6846\u6BD4
   \u6D88\u606F\u5217\u5BBD 32px"\u7684\u5171\u4EAB\u5BBD\u5EA6\u8F74\uFF09\u3002\u7C7B\u540D\u662F CSS modules \u54C8\u5E0C\uFF0C\u65E0\u6CD5\u76F4\u63A5\u9009\uFF0C
   \u4F46\u6D88\u606F\u5217 .column \u6709\u7A33\u5B9A\u5C5E\u6027 data-chat-flow=""\uFF08ChatView.tsx\uFF09\uFF0C
   .scroll \u6052\u4E3A\u5176**\u76F4\u63A5\u7236\u5143\u7D20** \u2192 \`div:has(> [data-chat-flow])\` \u552F\u4E00\u547D\u4E2D\u3002
   \u4FDD\u7559\u7EB5\u5411 16px\uFF08\u6D88\u606F\u95F4\u547C\u5438\u611F\uFF09\uFF0C\u6A2A\u5411\u5F52\u96F6\u8BA9\u6D88\u606F\u771F\u6B63\u8D34\u6EE1\u5C4F\u5BBD\u3002
   \uFF08:has() \u9700 Chrome 105+\uFF0C\u79FB\u52A8\u7AEF webview \u65E0\u95EE\u9898\u3002\uFF09 */
html[data-dsh-mobile] [data-conversation-scroll] div:has(> [data-chat-flow]) {
  padding: 16px 0;
}

/* \u5916\u5C42\u6EDA\u52A8\u4F53\u53F3\u4FA7\u6EDA\u52A8\u6761\u69FD\u4F4D\u53D6\u6D88\u9884\u7559\uFF08\u7528\u6237\u5B9E\u6D4B\uFF1A\u53F3\u4FA7\u95F4\u9699\u6BD4\u5DE6\u4FA7\u5927
   \u4E00\u70B9\u70B9\u2014\u2014\u6B63\u662F\u8FD9\u4E2A gutter\uFF09\uFF1A
   DSH ConversationRoot.module.css .scrollBody \u6709 scrollbar-gutter: stable
   \u2014\u2014**\u65E0\u6761\u4EF6**\u4E3A\u6EDA\u52A8\u6761\u9884\u7559\u69FD\u4F4D\uFF08\u8FDE overlay \u6EDA\u52A8\u6761\u7684 webview \u4E5F\u9884\u7559\uFF0C
   \u89C6\u89C9\u4E0A\u53F3\u4FA7\u6C38\u8FDC\u591A\u4E00\u5757\u7A7A\u767D\uFF09\u3002\u624B\u673A\u4E0A\u5173\u6389\u9884\u7559\uFF0C\u6EDA\u52A8\u6761\u51FA\u73B0\u65F6\u6309\u7CFB\u7EDF
   \u9ED8\u8BA4\u884C\u4E3A\u81EA\u7136\u5360\u4F4D/\u60AC\u6D6E\uFF0C\u4E0D\u51FA\u73B0\u65F6\u7684\u7A7A\u767D\u968F\u4E4B\u6D88\u5931\u3002
   \uFF08scrollbar-gutter \u5C5E\u6027\u65E0\u524D\u7F00\u652F\u6301\uFF1AChrome 94+ / Firefox 97+\u3002\uFF09 */
html[data-dsh-mobile] [data-conversation-scroll] {
  scrollbar-gutter: auto;
}

/* \u8F93\u5165\u680F\u5DE5\u5177\u680F\u300C\u4E0A\u62C9\u5F39\u7A97\u300D\u6536\u7EB3\uFF08\u7528\u6237\u62CD\u677F 2026-08-09\uFF0C\u6A21\u578B\u4E00\u5E76\u6536\u7EB3\uFF09\uFF1A
   ---------------------------------------------------------------------------
   \u7ED3\u6784\uFF08InputBar.tsx\uFF0C\u4E0D\u4F9D\u8D56 CSS modules \u54C8\u5E0C\u7C7B\u540D\uFF09\uFF1A
     card[data-composer-card]
       > [data-input-scroll]          \u2190 textarea \u6EDA\u52A8\u533A
       > div                          \u2190 .row\uFF08scroll \u7684\u4E0B\u4E00\u4E2A\u5144\u5F1F\uFF09
         > div:first-child            \u2190 .tools\uFF08\u52A0\u53F7 + \u6743\u9650\uFF09
         > div:last-of-type           \u2190 .trailing\uFF08\u6A21\u578B + \u5706\u73AF + \u53D1\u9001\uFF09
           > div:has(> button[aria-haspopup="menu"])  \u2190 ModelSelect \u6839
             \uFF08ContextMeter \u662F span\u3001\u53D1\u9001\u662F button\uFF0C\u9009\u62E9\u5668\u4E0D\u4F1A\u8BEF\u4F24\uFF09
         > button.dsh-mobile-more-btn \u2190 enhance \u6CE8\u5165\uFF0Corder:-1 \u6392\u6700\u5DE6

   \u80CC\u666F\uFF1A\u624B\u673A\u4E0A .row = flex space-between\uFF0C.trailing\uFF08\u6A21\u578B\u540D\u8F83\u957F\uFF09flex:none
   \u5360\u6EE1\uFF0C.tools \u88AB\u6324\u6CA1\uFF1B\u6A21\u578B\u4E5F\u5360\u6A2A\u5411\u7A7A\u95F4\u3002\u65B9\u6848\uFF1A\u624B\u673A\u9ED8\u8BA4\u9690\u85CF .tools + \u6A21\u578B\uFF0C
   \u53EA\u5E38\u9A7B\u300C\u22EF\u300D+ \u5706\u73AF + \u53D1\u9001\uFF1B\u70B9\u300C\u22EF\u300D\u5207\u6362 html[data-dsh-mobile-sheet] \u2192
   \u4E8C\u8005\u4EE5 fixed \u5E95\u680F\u51FA\u73B0\u5728\u8F93\u5165\u680F\u4E0A\u65B9\uFF08**\u4E0D\u79FB\u52A8/\u4E0D\u590D\u5236 DOM**\uFF0CReact \u4E8B\u4EF6\u4FDD\u7559\uFF09\u3002

   \u5E95\u680F\u89C6\u89C9\uFF1A.tools \u63D0\u4F9B\u5B8C\u6574\u9762\u677F chrome\uFF08\u80CC\u666F/\u5706\u89D2/\u9634\u5F71\uFF09\uFF1B\u6A21\u578B\u7528\u540C\u5E95\u540C\u9AD8
   \u7684\u900F\u660E fixed \u5C42\u53E0\u5728\u53F3\u4FA7\uFF08pointer-events \u53EA\u5F00\u81EA\u8EAB\uFF09\uFF0C\u770B\u8D77\u6765\u50CF\u540C\u4E00\u6761\u5E95\u680F\u3002
   bottom \u7528 --dsh-composer-height\uFF08ConversationRoot \u5B9E\u65F6\u9AD8\u5EA6\uFF0C152px \u515C\u5E95\uFF09\u3002 */

/* ---- \u9ED8\u8BA4\u9690\u85CF\uFF1A.tools + \u6A21\u578B\u9009\u62E9 ----
   \u53EA\u5728 enhance \u5DF2\u6CE8\u5165\u300C\u22EF\u300D\u6309\u94AE\u7684\u884C\u751F\u6548\uFF08:has(.dsh-mobile-more-btn)\uFF09\uFF1A
   enhance \u672A\u8FD0\u884C/\u63A2\u6D4B\u5931\u8D25/\u5B98\u65B9\u6539\u4E86 composer DOM \u65F6\uFF0C\u52A0\u53F7\u4E0E\u6A21\u578B\u4FDD\u6301\u53EF\u89C1\uFF0C
   \u4E0D\u4F1A\u51FA\u73B0\u300C\u5DE5\u5177\u680F\u6C38\u4E45\u6D88\u5931\u3001\u53C8\u65E0\u5904\u627E\u56DE\u300D\u7684\u6B7B\u8DEF\uFF08\u7A33\u5B9A\u7248\u590D\u5BA1 P1-5\uFF09\u3002 */
html[data-dsh-mobile] [data-composer-card] > [data-input-scroll] + div:has(> .dsh-mobile-more-btn) > div:first-child {
  display: none;
}
/* \u6A21\u578B\uFF1A.trailing \u5185\u300C\u76F4\u63A5\u5B50 button \u5E26 aria-haspopup=menu \u7684 div\u300D= ModelSelect */
html[data-dsh-mobile] [data-composer-card] > [data-input-scroll] + div:has(> .dsh-mobile-more-btn) > div:last-of-type > div:has(> button[aria-haspopup="menu"]) {
  display: none;
}

/* ---- sheet \u6253\u5F00\uFF1A.tools \u53D8 fixed \u5E95\u680F\uFF08\u9762\u677F chrome \u8F7D\u4F53\uFF09---- */
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:first-child {
  display: flex;
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(var(--dsh-composer-height, 152px) + 8px);
  z-index: 50;
  flex-wrap: wrap;
  align-items: center;
  /* \u53F3\u4FA7\u7559\u7ED9\u6A21\u578B chip\uFF0C\u907F\u514D\u4E0E\u53E0\u5728\u4E0A\u9762\u7684\u6A21\u578B\u533A\u62A2\u4F4D */
  gap: 12px;
  padding: 10px 12px;
  padding-right: min(48%, 200px);
  border-radius: 14px;
  background: var(--dsw-alias-bg-base, #1e1e1e);
  border: 1px solid var(--dsw-alias-border-l, rgba(128, 128, 128, 0.25));
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.22);
}

/* ---- sheet \u6253\u5F00\uFF1A\u6A21\u578B\u53E0\u5728\u540C\u4E00\u5E95\u680F\u53F3\u4FA7\uFF08\u65E0\u72EC\u7ACB chrome\uFF0C\u501F .tools \u7684\u9762\u677F\uFF09---- */
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:last-of-type > div:has(> button[aria-haspopup="menu"]) {
  display: flex;
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(var(--dsh-composer-height, 152px) + 8px);
  z-index: 51; /* \u9AD8\u4E8E .tools \u9762\u677F\uFF0C\u786E\u4FDD\u53EF\u70B9 */
  align-items: center;
  justify-content: flex-end;
  /* \u9AD8\u5EA6\u5BF9\u9F50 .tools \u5E95\u680F\u5185\u5BB9\u533A\uFF08padding 10*2 + \u63A7\u4EF6 28 \u2248 48\uFF09 */
  min-height: 48px;
  padding: 10px 12px;
  /* \u900F\u660E\uFF1Achrome \u7531\u4E0B\u65B9 .tools \u9762\u677F\u63D0\u4F9B\uFF1Bpointer-events \u53EA\u5F00\u81EA\u8EAB\u5B50\u6811 */
  background: transparent;
  border: none;
  box-shadow: none;
  pointer-events: none; /* \u5DE6\u4FA7\u7A7A\u767D\u70B9\u7A7F\u5230 .tools */
}
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:last-of-type > div:has(> button[aria-haspopup="menu"]) > * {
  pointer-events: auto; /* \u6A21\u578B\u89E6\u53D1\u6309\u94AE + [role=menu] \u5747\u53EF\u70B9\uFF08\u76F4\u63A5\u5B50\uFF09 */
}

/* ---- ModelSelect \u4E00\u7EA7/\u4E8C\u7EA7\u83DC\u5355\u624B\u673A\u53EF\u89C1\u6027\uFF08v4 \xB7 \u771F\u673A\u4FEE\u590D 2026-08-10\uFF09----
   ---------------------------------------------------------------------------
   \u7ED3\u6784\uFF08ModelSelect.tsx\uFF0C\u4E0D\u4F9D\u8D56 CSS modules \u54C8\u5E0C\u7C7B\u540D\uFF09\uFF1A
     \u6839 div\uFF08\u4E0A\u6761\u89C4\u5219\u5DF2 fixed \u6210\u5E95\u680F\u53F3\u4FA7 chip\uFF09
       > button[aria-haspopup="menu"]     \u2190 trigger
       > div[role="menu"]                 \u2190 \u552F\u4E00\u83DC\u5355\u8282\u70B9\uFF08\u4E00\u7EA7/\u4E8C\u7EA7\u5171\u7528\uFF09
           pane=root   \uFF1A\u300C\u6A21\u578B\u300D\u300C\u601D\u8003\u5F3A\u5EA6\u300D\u4E24\u884C cell\uFF08~2\xD740px\uFF09
           pane=model  \uFF1A\u6A21\u578B\u5206\u7EC4\u5217\u8868
           pane=effort \uFF1A\u601D\u8003\u7B49\u7EA7\u5217\u8868
   \uFF08\u6CA1\u6709\u72EC\u7ACB\u7684\u4E8C\u7EA7 DOM\u2014\u2014setPane \u53EA\u5207\u6362\u540C\u4E00 menu \u5185\u7684\u5185\u5BB9\u3002\uFF09

   ## \u5386\u53F2\u5931\u8D25\uFF08\u52A1\u5FC5\u52FF\u56DE\u9000\uFF09
   - v1\uFF08fixed + --dsh-composer-height \u951A\u5B9A bottom/max-height\uFF09\uFF1A
     \u7A7A\u4F1A\u8BDD seat\u2248150\u2013250px \u770B\u8D77\u6765\u6B63\u5E38\uFF1B\u771F\u673A\u6B63\u5E38\u4F1A\u8BDD seat 300\u2013600px
     \uFF08dock \u5361/\u7EDF\u8BA1\u884C/\u591A\u884C\u8349\u7A3F\u5168\u7B97\u8FDB --dsh-composer-height\uFF09\u2192
     bottom = seat+64 \u628A\u83DC\u5355\u9876\u5230\u89C6\u53E3\u4E0A\u65B9\uFF0Cmax-height = 100dvh-seat-80
     \u88AB\u538B\u5230 \u226460px\uFF08\u4E00\u7EA7\u4E24\u884C cell \u8981 ~88px\uFF09\u2192 \u7528\u6237\u611F\u77E5\u300C\u83DC\u5355\u6CA1\u51FA\u6765\u300D\u3002
     \u6839\u56E0\uFF1A\u83DC\u5355\u51E0\u4F55\u7ED1\u6B7B\u4E86\u300C\u5EA7\u4F4D\u6574\u4F53\u9AD8\u5EA6\u300D\uFF0C\u4E0E\u300C\u5E95\u680F chip \u771F\u5B9E\u4F4D\u7F6E\u300D\u4E0D\u7B49\u4EF7\u3002
   - v2\uFF08\u4F9D\u8D56 .row \u7684 container-type \u5F53 fixed \u5305\u542B\u5757 + absolute 100%\uFF09\uFF1A
     \u771F\u673A webview \u4E0A container-type \u7684 fixed \u5305\u542B\u5757\u884C\u4E3A\u4E0D\u53EF\u9760\uFF0C
     \u300C\u22EF\u300D\u6309\u94AE/\u5E95\u680F\u6574\u4F53\u65E0\u53CD\u5E94\u3002\u5DF2\u6574\u4F53\u56DE\u6EDA\uFF0C\u7981\u6B62\u590D\u7528\u3002

   ## v3 \u771F\u673A\u6839\u56E0
   1. v3 \u7EC4\u5408\u201Cposition:fixed \u7684 ModelSelect \u6839 + position:absolute \u7684\u83DC\u5355\u201D\uFF0C
      \u628A\u83DC\u5355\u4F4D\u7F6E\u4EA4\u7ED9 WebView \u5728\u5D4C\u5957\u5B9A\u4F4D\u4E0A\u4E0B\u6587\u4E2D\u63A8\u5BFC\u3002headless Chrome \u7684\u5E03\u5C40
      \u7ED3\u679C\u7A33\u5B9A\uFF0C\u4F46\u771F\u673A\u8FD8\u53E0\u52A0 visualViewport\u3001\u52A8\u6001\u5DE5\u5177\u680F/\u952E\u76D8\u548C\u7956\u5148
      containment\uFF0Cabsolute \u83DC\u5355\u867D\u5DF2\u6302\u8F7D\uFF0C\u5374\u53EF\u80FD\u5408\u6210\u5230\u53EF\u89C6\u533A\u4E4B\u5916\u3002
   2. enhance \u539F\u5148\u53EA\u5199 max-height\uFF0C\u6CA1\u6709\u660E\u786E\u5199\u83DC\u5355\u7684\u89C6\u53E3\u5750\u6807\uFF1B\u4E14\u591A composer
      \u5E76\u5B58\u65F6\u6309\u201C\u6700\u9760\u4E0A\u53EF\u89C1\u6839\u201D\u6D4B\u91CF\uFF0C\u53EF\u80FD\u62FF\u5230\u7528\u6237\u6CA1\u6709\u5C55\u5F00\u7684\u5B9E\u4F8B\u3002
   3. \u70B9\u51FB\u4E00\u7EA7\u884C\u540E React \u540C\u6B65 setPane \u5E76\u5378\u8F7D\u65E7\u6309\u94AE\uFF1Bdocument bubble click
      \u624D\u7528 contains/closest \u5224\u65AD\u65F6\uFF0C\u771F\u673A\u4E0A\u7684 event.target \u5DF2\u53EF\u80FD\u8131\u79BB DOM\uFF0C
      \u4E8E\u662F\u83DC\u5355\u5185\u70B9\u51FB\u88AB\u8BEF\u5224\u4E3A\u5916\u90E8\u70B9\u51FB\uFF0C\u6574\u4E2A sheet \u968F\u5373\u5173\u95ED\u3002\u4E8B\u4EF6\u4FEE\u590D\u8BE6\u89C1
      mobile-input-sheet.ts \u7684 onDocClickCapture\u3002

   ## v4 \u65B9\u6848\uFF08\u4E0E --dsh-composer-height\u3001\u5D4C\u5957 absolute \u5750\u6807\u5B8C\u5168\u89E3\u8026\uFF09
   1. \u83DC\u5355\u7EDF\u4E00 position:fixed\u3002enhance \u5728 click capture\uFF08React \u66F4\u65B0\u524D\uFF09\u9501\u5B9A
      \u5B9E\u9645 trigger\uFF0C\u5E76\u628A visualViewport \u7684 offset/width\u3001chip \u9876\u8FB9\u548C layout
      viewport \u9AD8\u5EA6\u6362\u7B97\u4E3A --dsh-mobile-menu-left/width/top/bottom/max-h\u3002
      \u6D4F\u89C8\u5668\u53EA\u6D88\u8D39\u660E\u786E\u5750\u6807\uFF0C\u4E0D\u518D\u8DE8 fixed/absolute \u5305\u542B\u5757\u81EA\u884C\u63A8\u5BFC\u3002
   2. \u83DC\u5355\u6253\u5F00\u540E\u7684\u91CD\u6D4B\u53EA\u8BA4 aria-expanded=true \u7684\u5B9E\u4F8B\uFF1Bpane \u5207\u6362\u3001DOM \u53D8\u5316\u3001
      \u65CB\u8F6C\u3001\u5730\u5740\u680F\u4E0E\u952E\u76D8\u53D8\u5316\u90FD\u4F1A\u91CD\u65B0\u8BA1\u7B97\u3002
   3. \u6B63\u5E38\u6A21\u5F0F\u901A\u8FC7 bottom \u8D34 chip \u4E0A\u65B9 8px\uFF1B\u4E0A\u65B9\u4E0D\u8DB3\u4E00\u7EA7\u4E24\u884C\u65F6\uFF0C\u4EC5\u628A top
      \u5207\u5230 visualViewport \u9876\u90E8\u5B89\u5168\u533A\u3001bottom \u5207\u4E3A auto\u3002\u4E24\u79CD\u6A21\u5F0F\u59CB\u7EC8\u5171\u7528
      \u540C\u4E00\u4E2A fixed \u83DC\u5355\u89C4\u5219\uFF0C\u907F\u514D\u771F\u673A\u5C42\u53E0\u987A\u5E8F\u518D\u5206\u53C9\u3002
   4. !important \u5BF9\u6297 dsh-android-edapp \u515C\u5E95\u6A21\u5F0F 1 \u5BF9 [role=menu]
      \u7684 max-width/max-height: calc(100dvh - 24px) !important\uFF0C\u4EE5\u53CA\u539F\u751F
      ModelSelect.module.css \u7684 absolute/right/bottom/width/max-height\u3002
   5. \u4E0D\u79FB\u52A8/\u590D\u5236 DOM\uFF1B\u4E0D\u4F9D\u8D56 container-type\uFF1B\u5E95\u680F .tools \u4ECD\u7528 v1 \u7684
      fixed + --dsh-composer-height\uFF08\u8BE5\u8DEF\u5F84\u5DF2\u9A8C\u8BC1\u300C\u22EF\u300D\u53EF\u70B9\uFF0C\u4E0D\u52A8\uFF09\u3002 */

/* \u6839\uFF1A\u83DC\u5355\u5C55\u5F00\u65F6\u62AC\u9AD8\u6574\u5C42 stacking\uFF1Boverflow:visible \u540C\u65F6\u4FDD\u62A4\u65E0 JS \u9996\u5E27\u3002 */
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:last-of-type > div:has(> button[aria-haspopup="menu"]) {
  overflow: visible;
}
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:last-of-type > div:has(> button[aria-haspopup="menu"][aria-expanded="true"]) {
  z-index: 900;
}

/* \u83DC\u5355\uFF1AJS \u660E\u786E\u5199\u5165\u89C6\u89C9\u89C6\u53E3\u51E0\u4F55\uFF1B\u4E00\u7EA7/\u4E8C\u7EA7\u590D\u7528\u540C\u4E00 fixed \u53EF\u6EDA\u8282\u70B9\u3002 */
html[data-dsh-mobile][data-dsh-mobile-sheet] [data-composer-card] > [data-input-scroll] + div > div:last-of-type > div:has(> button[aria-haspopup="menu"]) > [role="menu"] {
  /*
   * position/left/right/top/bottom/width \u7684 !important\uFF1A\u538B\u8FC7\u539F\u751F
   * ModelSelect.module.css \`.menu\` \u7684 absolute/right/bottom/width\uFF0C\u786E\u4FDD\u771F\u673A
   * \u4E0D\u4F1A\u6DF7\u7528\u4E00\u534A\u539F\u751F\u5750\u6807\u3001\u4E00\u534A enhance \u5750\u6807\u3002
   */
  position: fixed !important;
  left: var(--dsh-mobile-menu-left, 12px) !important;
  right: auto !important;
  top: var(--dsh-mobile-menu-top, 12px) !important;
  bottom: var(--dsh-mobile-menu-bottom, auto) !important;
  width: var(--dsh-mobile-menu-width, calc(100vw - 24px)) !important;
  max-width: none !important;
  /*
   * max-height \u7684 !important\uFF1A\u4E13\u95E8\u538B\u8FC7 dsh-android-edapp \u6A21\u5F0F 1 \u5BF9
   * [role=menu] \u7684 \`calc(100dvh - 24px) !important\`\u3002\u82E5\u8BA9\u90A3\u4E2A\u51E0\u4E4E\u6574\u5C4F\u7684
   * \u9650\u9AD8\u8D62\u8FC7\u6765\uFF0C\u5411\u4E0A\u751F\u957F\u7684\u83DC\u5355\u4F1A\u518D\u6B21\u628A\u5185\u5BB9\u9876\u51FA\u53EF\u89C1\u533A\u3002
   *
   * \u672A\u5199\u53D8\u91CF\u7684\u6781\u77ED\u9996\u5E27\u5B89\u5168\u843D\u5728\u89C6\u53E3\u9876 12px\uFF1Bclick capture \u4F1A\u5728 React \u6302\u8F7D
   * \u83DC\u5355\u524D\u9884\u5199\u6B63\u786E trigger \u5750\u6807\uFF0CMutationObserver \u4E0E viewport \u4E8B\u4EF6\u968F\u540E\u6821\u6B63\u3002
   */
  max-height: var(--dsh-mobile-menu-max-h, min(360px, 50dvh)) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  z-index: 920 !important; /* \u9AD8\u4E8E\u5C55\u5F00\u6839 900 \u4E0E .tools \u5E95\u680F 50\uFF0C\u4FDD\u8BC1\u83DC\u5355\u53EF\u70B9 */
  /* \u89E6\u63A7\u6EDA\u52A8\u60EF\u6027\uFF08iOS/WebView\uFF09 */
  -webkit-overflow-scrolling: touch;
  /* \u8868\u9762 token \u4E0E\u539F\u751F\u4E00\u81F4\uFF08\u663E\u5F0F\u5199\u51FA\uFF0C\u907F\u514D\u88AB\u5176\u5B83\u5C42\u53E0\u89C4\u5219\u51B2\u6DE1\u65F6\u65E0 fallback\uFF09 */
  background: var(--dsw-specific-menu);
  border: 1px solid var(--dsw-alias-border-inverted);
  box-shadow: var(--dsw-shadow-lv3);
  border-radius: 12px;
  box-sizing: border-box;
}

/* data-dsh-mobile-menu-flip \u53EA\u4F5C\u4E3A\u53EF\u8BCA\u65AD\u72B6\u6001\u6807\u8BB0\uFF1B\u51E0\u4F55\u4ECD\u7531\u540C\u4E00\u7EC4 top/bottom
   \u53D8\u91CF\u9A71\u52A8\uFF0C\u4E0D\u518D\u4E3A\u6781\u7AEF\u6A21\u5F0F\u590D\u5236\u7B2C\u4E8C\u5957 CSS \u89C4\u5219\u3002 */

/* \u300C\u22EF\u300D\u5165\u53E3\u6309\u94AE\uFF08mobile-input-sheet.ts enhance \u6CE8\u5165\uFF0Cappend \u5728\u5DE5\u5177\u680F
   \u884C\u5C3E + order:-1 \u89C6\u89C9\u6392\u6700\u5DE6\uFF09\uFF1A\u6837\u5F0F\u5BF9\u9F50 DSH \u539F\u751F\u52A0\u53F7\u6309\u94AE\uFF0828px \u5706\u5F62\u3001
   selector \u586B\u5145\uFF09\u3002\u5FC5\u987B\u6302 html[data-dsh-mobile]\u2014\u2014\u4E0E\u534F\u8BAE\u5176\u5B83\u89C4\u5219\u4E00\u81F4\uFF0C
   \u4E14\u88AB adapter \u518D\u5305\u4E00\u5C42 @media \u2264767px\uFF0C\u53CC\u4FDD\u9669\u684C\u9762\u96F6\u526F\u4F5C\u7528\u3002 */
html[data-dsh-mobile] .dsh-mobile-more-btn {
  display: grid;
  place-items: center;
  flex: none;
  order: -1;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 999px;
  background: var(--dsw-specific-selector);
  color: var(--dsw-alias-label-primary);
  cursor: pointer;
  touch-action: manipulation;
  transition: background 0.12s ease;
}
html[data-dsh-mobile] .dsh-mobile-more-btn:active {
  background: var(--dsw-alias-interactive-bg-hover-solid);
}
/* sheet \u6253\u5F00\u65F6\u5165\u53E3\u6309\u94AE\u9AD8\u4EAE\uFF0C\u63D0\u793A"\u66F4\u591A\u5DF2\u5C55\u5F00" */
html[data-dsh-mobile][data-dsh-mobile-sheet] .dsh-mobile-more-btn {
  background: var(--dsw-alias-interactive-bg-hover-solid);
  color: var(--dsw-alias-state-business-primary);
}
`;var co="data-dsh-mobile-sheet",ma="dsh-mobile-more-btn",Jo="--dsh-mobile-menu-max-h",wi="--dsh-mobile-menu-left",xi="--dsh-mobile-menu-width",Go="--dsh-mobile-menu-top",Xo="--dsh-mobile-menu-bottom",Yo="data-dsh-mobile-menu-flip";var Zo="[data-composer-card] > [data-input-scroll] + div",Qo=`${Zo} > div:last-of-type > div:has(> button[aria-haspopup="menu"])`,vi=`${Zo} > div:first-child`,dd='<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="3" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="13" cy="8" r="1.5" fill="currentColor"/></svg>',fi=360,Ba=12,cd=8;function lo(){let t=document.documentElement;t.style.removeProperty(Jo),t.style.removeProperty(wi),t.style.removeProperty(xi),t.style.removeProperty(Go),t.style.removeProperty(Xo),t.removeAttribute(Yo)}function pa(){return document.documentElement.hasAttribute(co)}function hi(t){let e=document.documentElement;t?e.setAttribute(co,"on"):e.removeAttribute(co)}function yi(t){let e=document.documentElement;if(!pa()){lo();return}let a=t??document.querySelector(`${Qo}:has(> button[aria-expanded="true"])`);if(a===null){lo();return}let o=getComputedStyle(a),s=a.getBoundingClientRect();if(o.display==="none"||o.visibility==="hidden"||s.width<=0&&s.height<=0){lo();return}let i=window.visualViewport,l=i?.offsetTop??0,c=i?.offsetLeft??0,g=i?.width??window.innerWidth,b=i?.height??window.innerHeight,m=document.documentElement.clientHeight||window.innerHeight,h=s.top-cd,k=Math.floor(h-(l+Ba));if(e.style.setProperty(wi,`${Math.round(c+Ba)}px`),e.style.setProperty(xi,`${Math.max(1,Math.floor(g-Ba*2))}px`),k>=100){e.removeAttribute(Yo),e.style.setProperty(Go,"auto"),e.style.setProperty(Xo,`${Math.max(0,Math.round(m-h))}px`),e.style.setProperty(Jo,`${Math.min(fi,k)}px`);return}e.setAttribute(Yo,"on"),e.style.setProperty(Go,`${Math.round(l+Ba)}px`),e.style.setProperty(Xo,"auto"),e.style.setProperty(Jo,`${Math.max(1,Math.min(fi,Math.floor(b-Ba*2)))}px`)}function ki(){let t=!1,e=null,a=0,o=0,s=new WeakSet,i=()=>{t||o!==0||(o=requestAnimationFrame(()=>{o=0,t||yi()}))},l=()=>{if(t)return;let h=document.querySelectorAll(Zo);for(let k of h){if(k.querySelector(`.${ma}`)!==null)continue;let A=document.createElement("button");A.type="button",A.className=ma,A.setAttribute("aria-label","\u66F4\u591A\u64CD\u4F5C"),A.setAttribute("aria-haspopup","true"),A.setAttribute("aria-expanded",pa()?"true":"false"),A.innerHTML=dd,A.addEventListener("click",F=>{F.stopPropagation();let M=!pa();hi(M),document.querySelectorAll(`.${ma}`).forEach(B=>{B.setAttribute("aria-expanded",M?"true":"false")}),i()}),k.appendChild(A)}pa()&&i()},c=()=>{t||a!==0||(a=requestAnimationFrame(()=>{a=0,t||l()}))},g=h=>{if(!pa())return;let k;h.composedPath().some(F=>F instanceof Element?F.classList.contains(ma)||F.matches('[role="menu"], [role="listbox"], [role="dialog"]')||F.matches(vi)?!0:F.matches(Qo)?(k=F,!0):!1:!1)&&s.add(h),k!==void 0&&yi(k)},b=h=>{if(!pa())return;if(s.has(h)){i();return}let k=h.target;if(k===null)return;let A=k instanceof Element?k:k.parentElement;if(A!==null&&A.closest(`.${ma}`)===null){for(let F of document.querySelectorAll(vi))if(F.contains(k))return;for(let F of document.querySelectorAll(Qo))if(F.contains(k))return;A.closest('[role="menu"], [role="listbox"], [role="dialog"]')===null&&(hi(!1),document.querySelectorAll(`.${ma}`).forEach(F=>{F.setAttribute("aria-expanded","false")}),i())}},m=()=>{pa()&&i()};return l(),e=new MutationObserver(c),e.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("click",g,!0),document.addEventListener("click",b),window.addEventListener("resize",m),window.visualViewport?.addEventListener("resize",m),window.visualViewport?.addEventListener("scroll",m),()=>{t=!0,a!==0&&(cancelAnimationFrame(a),a=0),o!==0&&(cancelAnimationFrame(o),o=0),e!==null&&e.disconnect(),document.removeEventListener("click",g,!0),document.removeEventListener("click",b),window.removeEventListener("resize",m),window.visualViewport?.removeEventListener("resize",m),window.visualViewport?.removeEventListener("scroll",m),document.documentElement.removeAttribute(co),lo(),document.querySelectorAll(`.${ma}`).forEach(h=>{h.parentElement?.removeChild(h)})}}var Ai=require("react-dom/client"),ct=require("react"),he=require("react/jsx-runtime");function Ti({size:t=18}){return(0,he.jsxs)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,he.jsx)("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),(0,he.jsx)("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})}function md({size:t=16}){return(0,he.jsx)("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":"true",children:(0,he.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})}var ea="/memory-evolve/api/notifications",pd=3e4,ji="dsh-memory-evolve:notify-bell-pos",ud=6,bd=767,gd=16,vd=10,fd=97,hd=56,yd=40,wd=36;function _a(t){let e=t<=bd;return{mobile:e,gap:e?vd:gd,size:e?wd:yd,defaultTop:e?hd:fd}}function Sa(t,e,a,o){let s=Math.max(o,e-a-o);return Math.min(s,Math.max(o,t))}function xd(t,e,a,o){return t==="left"?o:Math.max(o,e-o-a)}function kd(t,e){let{gap:a,size:o,defaultTop:s}=_a(t);try{let i=localStorage.getItem(ji);if(i){let l=JSON.parse(i),c=l.side==="left"?"left":"right",g=typeof l.top=="number"&&Number.isFinite(l.top)?l.top:s;return{side:c,top:Sa(g,e,o,a)}}}catch{}return{side:"right",top:Sa(s,e,o,a)}}function Ni(t){try{localStorage.setItem(ji,JSON.stringify(t))}catch{}}var Ri=/^(📮|📝|👤|🕐|📄)\s*(主题|简介|发送人|时间|内容|Subject|Intro|Sender|Time|Content)\s*[：:]?\s*(.*)$/,Td=/^[━─—\-_=]{4,}\s*$/;function qa(t){return String(t??"").replace(/\r\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}function ts(t){return String(t??"").replace(/^[📮📝👤🕐📄]\s*(主题|简介|发送人|时间|内容|Subject|Intro|Sender|Time|Content)\s*[：:]\s*/,"").trim()}function mo(t){let e=String(t??"").replace(/\r\n/g,`
`).split(`
`),a={mail:!1,headline:"",subject:"",intro:"",sender:"",time:"",body:"",leftover:""},o=[],s=[],i=!1;for(let l of e){let c=l.trim();if(Td.test(c))continue;if(i){s.push(l);continue}let g=c.match(Ri);if(g){a.mail=!0;let b=g[2],m=(g[3]??"").trim();b==="\u4E3B\u9898"||b==="Subject"?a.subject=m:b==="\u7B80\u4ECB"||b==="Intro"?a.intro=m:b==="\u53D1\u9001\u4EBA"||b==="Sender"?a.sender=m:b==="\u65F6\u95F4"||b==="Time"?a.time=m:(b==="\u5185\u5BB9"||b==="Content")&&(i=!0,m&&s.push(m));continue}if(/^\[COI\]/.test(c)){a.headline=c,a.mail=!0;continue}o.push(l)}return a.body=qa(s.join(`
`)),a.leftover=qa(o.join(`
`)),a}function Si(t){let e=mo(t.content);if(e.subject)return e.subject;let a=(t.subject||"").trim();return/^\[COI\]/.test(a)?a.replace(/^\[COI\]\s*/,""):ts(a)||a}function Nd(t){let e=mo(t.content);if(e.mail)return e.intro||e.body||e.leftover;let a=qa(t.content),o=a.split(`
`)[0]?.trim()??"",s=(t.subject||"").trim(),i=ts(o)||o,l=ts(s)||s;return o&&(o===s||i===l||Ri.test(o))&&(a=qa(a.slice(a.indexOf(`
`)===-1?a.length:a.indexOf(`
`)))),a}var es=/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>()"'\]]+)/g;function Ci(t){let e=String(t??"");es.lastIndex=0;let a=[],o=0,s;for(;(s=es.exec(e))!==null;)s.index>o&&a.push(e.slice(o,s.index)),s[1]!==void 0?a.push({u:s[2],l:s[1]}):a.push({u:s[3],l:s[3]}),o=es.lastIndex;return o<e.length&&a.push(e.slice(o)),a.length===0?e.replace(/\*\*/g,""):a.map((i,l)=>i&&typeof i=="object"?(0,he.jsx)("a",{href:i.u,target:"_blank",rel:"noreferrer",children:i.l},l):String(i).replace(/\*\*/g,""))}function Ei(t){let e=new Date(t),a=l=>String(l).padStart(2,"0"),o=`${a(e.getHours())}:${a(e.getMinutes())}`,s=new Date;return e.getFullYear()===s.getFullYear()&&e.getMonth()===s.getMonth()&&e.getDate()===s.getDate()?o:`${a(e.getMonth()+1)}-${a(e.getDate())} ${o}`}function Ii(t,e){return t.senderName==="system"?e("notify.system"):t.senderName}function Pi({item:t}){return(0,he.jsx)("div",{className:"me-notify-attachments",children:t.attachments.map((e,a)=>(0,he.jsx)("div",{className:"me-notify-att",children:e.mime?.startsWith("image/")?(0,he.jsx)("img",{className:"me-notify-att-img",src:`${ea}/${encodeURIComponent(t.id)}/attachment/${a}`,alt:e.name}):(0,he.jsx)("a",{className:"me-notify-att-file",href:`${ea}/${encodeURIComponent(t.id)}/attachment/${a}`,download:e.name,children:e.name})},a))})}function Sd({openSession:t,t:e}){let[a,o]=(0,ct.useState)(0),[s,i]=(0,ct.useState)(!1),[l,c]=(0,ct.useState)(null),[g,b]=(0,ct.useState)(null),[m,h]=(0,ct.useState)(()=>({w:window.innerWidth,h:window.innerHeight})),[k,A]=(0,ct.useState)(()=>kd(window.innerWidth,window.innerHeight)),[F,M]=(0,ct.useState)(null),[B,S]=(0,ct.useState)(!1),V=(0,ct.useRef)(null),y=(0,ct.useRef)(null),D=(0,ct.useRef)(!1),w=(0,ct.useRef)(0),O=_a(m.w),X=F?F.left:xd(k.side,m.w,O.size,O.gap),C=F?F.top:Sa(k.top,m.h,O.size,O.gap),u=C>m.h*.5,r=(0,ct.useCallback)(()=>{fetch(`${ea}/unread`).then(j=>j.ok?j.json():Promise.reject(new Error(`HTTP ${j.status}`))).then(j=>o(j.count??0)).catch(()=>{})},[]);(0,ct.useEffect)(()=>{r();let j=window.setInterval(r,pd);return window.addEventListener("dsh-memory-evolve:badge-change",r),()=>{window.clearInterval(j),window.removeEventListener("dsh-memory-evolve:badge-change",r)}},[r]),(0,ct.useEffect)(()=>{let j=()=>{let ge=window.innerWidth,re=window.innerHeight,Ue=_a(ge);h({w:ge,h:re}),A(Le=>{let Ae={side:Le.side,top:Sa(Le.top,re,Ue.size,Ue.gap)};return Ni(Ae),Ae})};return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]),(0,ct.useEffect)(()=>{if(!B)return;let j=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=j}},[B]);let v=(0,ct.useCallback)(()=>{fetch(`${ea}/list?type=unread`).then(j=>j.ok?j.json():Promise.reject(new Error(`HTTP ${j.status}`))).then(j=>c(j.items??[])).catch(()=>c([]))},[]),_=(0,ct.useCallback)(j=>{fetch(`${ea}/read`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({ids:j})}).then(()=>{r(),v()}).catch(()=>{})},[r,v]),L=(0,ct.useCallback)(()=>{fetch(`${ea}/readAll`,{method:"POST"}).then(()=>{r(),v()}).catch(()=>{})},[r,v]),G=(0,ct.useCallback)(j=>{fetch(`${ea}/${encodeURIComponent(j)}`,{method:"DELETE"}).then(()=>{r(),v(),b(null)}).catch(()=>{})},[r,v]),q=(0,ct.useCallback)(j=>{_([j])},[_]),ce=(0,ct.useCallback)(j=>{fetch(`${ea}/${encodeURIComponent(j.id)}/content`).then(ge=>ge.ok?ge.json():Promise.reject(new Error(`HTTP ${ge.status}`))).then(ge=>b({item:j,content:ge.content??j.content})).catch(()=>b({item:j,content:j.content}))},[]),Re=()=>{let j=!s;i(j),j&&v()},Te=j=>{if(j.button!==0)return;let ge=V.current;if(!ge)return;let re=ge.getBoundingClientRect();y.current={pointerId:j.pointerId,startX:j.clientX,startY:j.clientY,origLeft:re.left,origTop:re.top,moved:!1},j.currentTarget.setPointerCapture(j.pointerId)},Ce=j=>{let ge=y.current;if(!ge||j.pointerId!==ge.pointerId)return;let re=j.clientX-ge.startX,Ue=j.clientY-ge.startY;if(!ge.moved&&Math.hypot(re,Ue)<ud)return;ge.moved||(ge.moved=!0,S(!0),i(!1));let Le=_a(window.innerWidth),Ae=Math.min(window.innerWidth-Le.size-Le.gap,Math.max(Le.gap,ge.origLeft+re)),Ee=Sa(ge.origTop+Ue,window.innerHeight,Le.size,Le.gap);w.current&&window.cancelAnimationFrame(w.current),w.current=window.requestAnimationFrame(()=>{w.current=0,M({left:Ae,top:Ee})})},Q=j=>{let ge=y.current;if(!ge||j.pointerId!==ge.pointerId)return;y.current=null;try{j.currentTarget.releasePointerCapture(j.pointerId)}catch{}if(!ge.moved)return;w.current&&(window.cancelAnimationFrame(w.current),w.current=0),D.current=!0;let Ue=V.current?.getBoundingClientRect(),Le=window.innerWidth,Ae=window.innerHeight,Ee=_a(Le),Ne=Ue?.left??ge.origLeft,ye=Ue?.top??ge.origTop,we=Ne+Ee.size/2<Le/2?"left":"right",Qe=Sa(ye,Ae,Ee.size,Ee.gap);M({left:Ne,top:ye}),S(!1),h({w:Le,h:Ae}),window.requestAnimationFrame(()=>{let Me={side:we,top:Qe};Ni(Me),A(Me),M(null)})},Ye=j=>{if(D.current){j.preventDefault(),j.stopPropagation(),D.current=!1;return}Re()},Ie=["me-notify-host",k.side==="left"?"me-notify-side-left":"me-notify-side-right",B?"me-notify-dragging":""].filter(Boolean).join(" "),be=g?mo(g.content):null;return(0,he.jsxs)("div",{ref:V,className:Ie,style:{left:X,top:C},children:[(0,he.jsxs)("button",{type:"button",className:`me-notify-bell${a>0?" me-notify-bell-unread":""}`,onClick:Ye,onPointerDown:Te,onPointerMove:Ce,onPointerUp:Q,onPointerCancel:Q,"aria-label":e("notify.bellAria"),"aria-expanded":s,title:e("notify.bellAria"),children:[(0,he.jsx)("span",{className:"me-notify-bell-icon","aria-hidden":"true",children:(0,he.jsx)(Ti,{})}),a>0&&(0,he.jsx)("span",{className:"me-notify-badge",children:a>99?"99+":a})]}),s&&(0,he.jsxs)("div",{className:`me-notify-pop${u?" me-notify-pop-up":""}`,role:"dialog","aria-label":e("notify.bellAria"),children:[(0,he.jsxs)("div",{className:"me-notify-pop-head",children:[(0,he.jsx)("span",{className:"me-notify-pop-title",children:e("notify.title")}),a>0&&(0,he.jsx)("span",{className:"me-notify-pop-count",children:a>99?"99+":a}),(0,he.jsx)("button",{type:"button",className:"me-notify-readall",onClick:L,children:e("notify.readAll")})]}),(0,he.jsxs)("div",{className:"me-notify-list",children:[l===null&&(0,he.jsx)("div",{className:"me-notify-empty",children:e("notify.loading")}),l!==null&&l.length===0&&(0,he.jsxs)("div",{className:"me-notify-empty",children:[(0,he.jsx)("span",{className:"me-notify-empty-icon","aria-hidden":"true",children:(0,he.jsx)(Ti,{size:22})}),(0,he.jsx)("span",{children:e("notify.empty")})]}),l?.map(j=>{let ge=mo(j.content),re=Nd(j);return(0,he.jsxs)("div",{className:"me-notify-item",children:[(0,he.jsxs)("div",{className:"me-notify-item-head",children:[(0,he.jsx)("span",{className:`me-notify-sender me-notify-${j.semantic}`,children:Ii(j,e)}),ge.headline&&(0,he.jsx)("span",{className:"me-notify-coi-chip",children:"COI"}),(0,he.jsx)("span",{className:"me-notify-time",children:Ei(j.createdAt)})]}),(0,he.jsx)("button",{type:"button",className:"me-notify-subject",disabled:j.sender==="",onClick:()=>{j.sender&&(t(j.sender),i(!1))},title:j.sender?e("notify.jump"):void 0,children:Si(j)}),re?(0,he.jsx)("div",{className:`me-notify-content${j.isLong?" me-notify-content-clamped":""}`,children:Ci(re)}):null,j.attachments.length>0&&(0,he.jsx)(Pi,{item:j}),(0,he.jsxs)("div",{className:"me-notify-item-actions",children:[(0,he.jsx)("button",{type:"button",className:"me-notify-markread",onClick:()=>q(j.id),children:e("notify.markRead")}),j.isLong&&(0,he.jsx)("button",{type:"button",className:"me-notify-more",onClick:()=>ce(j),children:e("notify.viewDetail")})]})]},j.id)})]})]}),g&&be&&(0,he.jsx)("div",{className:"me-notify-modal-backdrop",onClick:()=>b(null),children:(0,he.jsxs)("div",{className:"me-notify-modal",role:"dialog","aria-modal":"true",onClick:j=>j.stopPropagation(),children:[(0,he.jsxs)("div",{className:"me-notify-modal-head",children:[(0,he.jsx)("span",{className:"me-notify-modal-title",children:Si(g.item)||e("notify.title")}),(0,he.jsx)("button",{type:"button",className:"me-notify-modal-close",onClick:()=>b(null),"aria-label":e("notify.close"),children:(0,he.jsx)(md,{})})]}),(0,he.jsxs)("div",{className:"me-notify-modal-body",children:[(0,he.jsxs)("div",{className:"me-notify-modal-meta",children:[(0,he.jsx)("span",{className:`me-notify-sender me-notify-${g.item.semantic}`,children:Ii(g.item,e)}),be.headline&&(0,he.jsx)("span",{className:"me-notify-coi-chip",children:"COI"}),(0,he.jsx)("span",{className:"me-notify-time",children:Ei(g.item.createdAt)})]}),be.mail?(0,he.jsxs)("div",{className:"me-notify-mail",children:[be.headline&&(0,he.jsx)("div",{className:"me-notify-mail-headline",children:be.headline}),be.intro&&(0,he.jsx)("div",{className:"me-notify-mail-intro",children:be.intro}),be.body&&(0,he.jsx)("pre",{className:"me-notify-modal-content",children:be.body}),be.leftover&&(0,he.jsx)("pre",{className:"me-notify-modal-content",children:be.leftover})]}):(0,he.jsx)("pre",{className:"me-notify-modal-content",children:Ci(qa(g.content))}),g.item.attachments.length>0&&(0,he.jsx)(Pi,{item:g.item}),(0,he.jsxs)("div",{className:"me-notify-detail-actions",children:[g.item.sender!==""&&(0,he.jsx)("button",{type:"button",className:"me-notify-jump",onClick:()=>{t(g.item.sender),b(null),i(!1)},children:e("notify.jump")}),(0,he.jsx)("button",{type:"button",className:"me-notify-delete",onClick:()=>G(g.item.id),children:e("notify.delete")})]})]})]})})]})}function Mi(t){let e=document.createElement("div");e.id="dsh-notify-bell",document.body.appendChild(e);let a=(0,Ai.createRoot)(e);return a.render((0,he.jsx)(Sd,{openSession:t.openSession,t:t.t})),{dispose(){a.unmount(),e.remove()}}}var Li=`/**
 * web \u7AD9\u5185\u901A\u77E5\u94C3\u94DB\u6837\u5F0F\uFF08me-notify-* \u524D\u7F00\uFF0C\u4E0E\u5176\u4ED6\u6A21\u5757 me- \u524D\u7F00\u4E00\u81F4\uFF09\u3002
 *
 * \u989C\u8272\u4E00\u5F8B\u8D70 DSH \u8BBE\u8BA1 token\uFF08--dsw-alias-* / --dsw-static-*\uFF09\uFF0C\u6DF1\u6D45\u8272\u81EA\u52A8\u9002\u914D\u3002
 * \u4E0D\u8981\u7ED9 .me-notify-host \u52A0 transform / filter / backdrop-filter\u2014\u2014
 * \u5927\u5F39\u7A97 backdrop \u662F position:fixed\uFF0C\u7956\u5148\u4E00\u65E6\u5F62\u6210 containing block \u5C31\u4F1A\u7F29\u5728 40px \u94C3\u94DB\u91CC\u3002
 */

/* ================================================================
 * \u5BBF\u4E3B\uFF1A\u53EA\u5305\u4F4F 40\xD740 \u94C3\u94DB\uFF0C\u5F39\u7A97\u7528 absolute \u5F80\u5916\u4F38\u3002
 * left / top \u7531 JS \u5199\u5165\uFF1B\u59CB\u7EC8\u7528 left\uFF08\u4E0D\u7528 right\uFF09\u624D\u80FD\u505A\u5DE6\u53F3\u5438\u9644\u8FC7\u6E21\u3002
 * ================================================================ */
.me-notify-host {
  position: fixed;
  z-index: 2147483000;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  font-family: var(--dsw-font-family, inherit);
  transition:
    left 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    top 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

/* \u62D6\u62FD\u4E2D\u5173\u6389\u8FC7\u6E21\uFF0C\u5426\u5219\u6307\u9488\u4F1A\u300C\u62D6\u7740\u5F39\u7C27\u300D\u3002 */
.me-notify-host.me-notify-dragging {
  transition: none;
}

/* ================================================================
 * \u94C3\u94DB\u6309\u94AE
 * ================================================================ */
.me-notify-bell {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-6, #d0d5dd));
  border-radius: 50%;
  background: var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #ffffff));
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
  cursor: grab;
  touch-action: none; /* \u89E6\u6478\u62D6\u65F6\u4E0D\u8981\u628A\u9875\u9762\u8DDF\u7740\u6EDA */
  user-select: none;
  -webkit-user-select: none;
  box-shadow:
    0 1px 2px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 6%, transparent),
    0 6px 16px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 8%, transparent);
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    border-color 0.16s ease,
    background 0.16s ease;
}

.me-notify-bell:hover {
  transform: scale(1.05);
  border-color: var(--dsw-alias-border-l3, var(--dsw-static-gray-6, #d0d5dd));
  box-shadow:
    0 2px 4px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 8%, transparent),
    0 10px 22px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 10%, transparent);
}

.me-notify-bell:active,
.me-notify-dragging .me-notify-bell {
  cursor: grabbing;
  transform: scale(1.04);
}

/* \u6709\u672A\u8BFB\u65F6\u7ED9\u4E00\u5708\u5F88\u6DE1\u7684\u54C1\u724C\u63CF\u8FB9\uFF0C\u4E0D\u9760\u523A\u773C\u7EAF\u8272\u558A\u4EBA\u3002 */
.me-notify-bell-unread {
  border-color: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 45%, var(--dsw-alias-border-l2, #d0d5dd));
}

.me-notify-bell-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
}

/* \u672A\u8BFB\u6570\u5B57\u5FBD\u6807\u3002 */
.me-notify-badge {
  position: absolute;
  top: -4px;
  right: -5px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: var(--dsw-alias-state-error-primary, var(--dsw-static-red-5, #e5484d));
  color: var(--dsw-alias-label-primary-inverted, #fff);
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.01em;
  line-height: 18px;
  text-align: center;
  box-shadow: 0 0 0 2px var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #fff));
  pointer-events: none;
}

/* ================================================================
 * \u901A\u77E5\u5F39\u7A97\uFF08\u76F8\u5BF9 40px host \u5411\u5916\u5C55\u5F00\uFF09
 * ================================================================ */
.me-notify-pop {
  position: absolute;
  top: calc(100% + 8px);
  width: 380px;
  max-width: calc(100vw - 32px);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-6, #d0d5dd));
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #ffffff));
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
  box-shadow:
    0 8px 24px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 10%, transparent),
    0 2px 6px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 6%, transparent);
  overflow: hidden;
  animation: me-notify-pop-in 0.18s ease-out;
}

/* \u53F3\u5438\u9644\uFF1A\u5F39\u7A97\u53F3\u7F18\u5BF9\u9F50\u94C3\u94DB\uFF1B\u5DE6\u5438\u9644\uFF1A\u5DE6\u7F18\u5BF9\u9F50\u3002 */
.me-notify-side-right .me-notify-pop {
  right: 0;
  left: auto;
  transform-origin: top right;
}

.me-notify-side-left .me-notify-pop {
  left: 0;
  right: auto;
  transform-origin: top left;
}

/* \u94C3\u94DB\u5728\u4E0B\u534A\u5C4F\u65F6\u5F80\u4E0A\u5F39\u51FA\uFF0C\u907F\u514D\u5217\u8868\u88AB\u88C1\u3002 */
.me-notify-pop.me-notify-pop-up {
  top: auto;
  bottom: calc(100% + 8px);
  animation-name: me-notify-pop-in-up;
}

.me-notify-side-right .me-notify-pop-up { transform-origin: bottom right; }
.me-notify-side-left .me-notify-pop-up { transform-origin: bottom left; }

@keyframes me-notify-pop-in {
  from { opacity: 0; transform: translateY(-6px) scale(0.98); }
  to   { opacity: 1; transform: none; }
}

@keyframes me-notify-pop-in-up {
  from { opacity: 0; transform: translateY(6px) scale(0.98); }
  to   { opacity: 1; transform: none; }
}

/* \u5F39\u7A97\u5934\u90E8\uFF08\u6807\u9898 + \u672A\u8BFB\u6570 + \u5168\u90E8\u5DF2\u8BFB\uFF09\u3002 */
.me-notify-pop-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 11px 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-5, #e5e7eb));
}

.me-notify-pop-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.me-notify-pop-count {
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 12%, transparent);
  color: var(--dsw-static-blue-9, #2563eb);
  font-size: 11px;
  font-weight: 650;
  line-height: 18px;
  text-align: center;
}

.me-notify-readall {
  margin-left: auto;
  border: none;
  background: none;
  color: var(--dsw-static-blue-9, #2563eb);
  font-size: 12px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
}

.me-notify-readall:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(38, 49, 72, 0.06));
}

/* \u5217\u8868\u5BB9\u5668\uFF08\u6EDA\u52A8\uFF09\u3002 */
.me-notify-list {
  overflow-y: auto;
  max-height: 60vh;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overscroll-behavior: contain;
}

/* \u7A7A\u6001 / \u52A0\u8F7D\u6001\u3002 */
.me-notify-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 36px 14px;
  text-align: center;
  color: var(--dsw-alias-label-tertiary, var(--dsw-static-gray-9, #6b7280));
  font-size: 13px;
}

.me-notify-empty-icon {
  display: inline-flex;
  opacity: 0.45;
}

/* ================================================================
 * \u5355\u6761\u901A\u77E5\uFF08\u5361\u7247\uFF1A\u53D1\u9001\u4EBA+\u65F6\u95F4 / \u4E3B\u9898 / \u53BB\u91CD\u540E\u7684\u7B80\u4ECB / \u64CD\u4F5C\uFF09
 * ================================================================ */
.me-notify-item {
  padding: 10px 12px 10px 14px;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-5, #e5e7eb));
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #fff));
  /* \u5DE6\u4FA7\u7EC6\u5F3A\u8C03\u6761\uFF1A\u5217\u8868\u5168\u662F\u672A\u8BFB\uFF0C\u7528\u54C1\u724C\u8272\u70B9\u4E00\u4E0B\u5373\u53EF\uFF0C\u4E0D\u8981\u5927\u7EA2\u5757\u3002 */
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 70%, transparent);
  transition: background 0.12s ease, border-color 0.12s ease;
}

.me-notify-item:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(38, 49, 72, 0.04));
  border-color: var(--dsw-alias-border-l3, var(--dsw-static-gray-6, #d0d5dd));
}

/* \u7B2C\u4E00\u884C\uFF1A\u53D1\u9001\u4EBA\uFF08\u5DE6\uFF09+ \u65F6\u95F4\uFF08\u53F3\uFF09\u3002 */
.me-notify-item-head,
.me-notify-modal-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.me-notify-sender {
  flex-shrink: 0;
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
}

/* notify=\u666E\u901A\u901A\u77E5\uFF08\u84DD\uFF09\uFF0Cdirect=\u76F4\u53D1\uFF08\u7EFF\uFF09\uFF1B\u7528 color-mix \u538B\u9971\u548C\uFF0C\u8DDF\u4E3B\u9898\u8D70\u3002 */
.me-notify-sender.me-notify-notify {
  background: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 12%, transparent);
  color: var(--dsw-static-blue-9, #2563eb);
}

.me-notify-sender.me-notify-direct {
  background: color-mix(in srgb, var(--dsw-static-green-5, #16a34a) 14%, transparent);
  color: var(--dsw-static-green-5, #16a34a);
}

.me-notify-coi-chip {
  flex-shrink: 0;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0.04em;
  color: var(--dsw-alias-label-tertiary, var(--dsw-static-gray-9, #6b7280));
  background: var(--dsw-alias-bg-module-platform, var(--dsw-static-gray-2, #f3f4f6));
}

.me-notify-time {
  flex-shrink: 0;
  margin-left: auto;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, var(--dsw-static-gray-9, #6b7280));
  font-variant-numeric: tabular-nums;
}

/* \u7B2C\u4E8C\u884C\uFF1A\u4E3B\u9898\uFF08\u53EF\u70B9\u51FB\u8DF3\u8F6C\u5230\u53D1\u9001\u4F1A\u8BDD\uFF1Bsystem \u901A\u77E5 disabled\uFF09\u3002 */
.me-notify-subject {
  display: block;
  width: 100%;
  margin: 0 0 4px;
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.4;
  color: inherit;
  cursor: pointer;
  word-break: break-word;
}

.me-notify-subject:disabled {
  cursor: default;
}

.me-notify-subject:not(:disabled):hover {
  color: var(--dsw-static-blue-9, #2563eb);
}

/* \u5185\u5BB9\uFF1AJS \u5DF2\u6298\u53E0\u7A7A\u884C\uFF1Bpre-wrap \u53EA\u4FDD\u7559\u6709\u610F\u4E49\u7684\u6362\u884C\u3002 */
.me-notify-content {
  font-size: 12.5px;
  line-height: 1.55;
  color: var(--dsw-alias-label-secondary, var(--dsw-static-gray-10, #374151));
  white-space: pre-wrap;
  word-break: break-word;
}

/* \u957F\u6587\u622A\u65AD\uFF1A\u7EA6 5 \u884C + \u5E95\u90E8\u6E10\u9690\uFF0C\u70B9\u300C\u67E5\u770B\u8BE6\u60C5\u300D\u770B\u5168\u6587\u3002 */
.me-notify-content-clamped {
  position: relative;
  max-height: 97px; /* \u2248 5 \u884C \xD7 19.4px */
  overflow: hidden;
}

.me-notify-content-clamped::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 28px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #ffffff))
  );
  pointer-events: none;
}

.me-notify-item:hover .me-notify-content-clamped::after {
  background: linear-gradient(
    to bottom,
    transparent,
    var(--dsw-alias-interactive-bg-hover, var(--dsw-alias-bg-layer-1, #fff))
  );
}

/* \u5E95\u90E8\u64CD\u4F5C\uFF1A\u5DF2\u8BFB\u6309\u94AE + \u957F\u6587\u300C\u67E5\u770B\u8BE6\u60C5\u300D\u3002 */
.me-notify-item-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.me-notify-markread {
  height: 26px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-6, #d0d5dd));
  border-radius: 6px;
  background: var(--dsw-alias-button-elevated-fill, var(--dsw-alias-bg-layer-1, #fff));
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-static-gray-11, #111827));
  cursor: pointer;
}

.me-notify-markread:hover {
  background: var(--dsw-alias-interactive-bg-hover, var(--dsw-static-gray-2, #f9fafb));
  border-color: var(--dsw-alias-border-l3, var(--dsw-static-gray-6, #d0d5dd));
}

.me-notify-more {
  height: 26px;
  padding: 0 8px;
  border: none;
  background: none;
  color: var(--dsw-static-blue-9, #2563eb);
  font-size: 12px;
  cursor: pointer;
  border-radius: 6px;
}

.me-notify-more:hover {
  background: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 8%, transparent);
}

/* \u9644\u4EF6\uFF08\u56FE\u7247\u7F29\u7565\u56FE / \u6587\u4EF6\u94FE\u63A5\uFF09\u3002 */
.me-notify-attachments {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.me-notify-att-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-5, #e5e7eb));
}

.me-notify-att-file {
  display: inline-block;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--dsw-alias-bg-module-platform, var(--dsw-static-gray-2, #f9fafb));
  font-size: 12px;
  color: var(--dsw-static-blue-9, #2563eb);
  text-decoration: none;
}

.me-notify-att-file:hover {
  text-decoration: underline;
}

/* \u8BE6\u60C5\u64CD\u4F5C\u6309\u94AE\u3002 */
.me-notify-detail-actions {
  display: flex;
  gap: 8px;
  margin-top: 4px;
}

.me-notify-jump,
.me-notify-delete {
  height: 30px;
  padding: 0 12px;
  border-radius: 7px;
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-6, #d0d5dd));
  background: var(--dsw-alias-button-elevated-fill, var(--dsw-alias-bg-layer-1, #fff));
  font-size: 12px;
  cursor: pointer;
}

.me-notify-jump {
  border-color: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 45%, var(--dsw-alias-border-l2, #d0d5dd));
  color: var(--dsw-static-blue-9, #2563eb);
}

.me-notify-delete {
  color: var(--dsw-alias-state-error-primary, #e5484d);
}

.me-notify-jump:hover {
  background: color-mix(in srgb, var(--dsw-static-blue-9, #2563eb) 8%, transparent);
}

.me-notify-delete:hover {
  background: var(--dsw-alias-interactive-bg-hover-danger, rgba(236, 19, 19, 0.05));
}

/* ================================================================
 * \u300C\u67E5\u770B\u8BE6\u60C5\u300D\u5927\u5F39\u7A97\uFF08\u957F\u901A\u77E5\u5168\u6587\uFF0C720px \xD7 85vh\uFF0C\u53EF\u6EDA\u52A8\uFF09\u3002
 * ================================================================ */
.me-notify-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2147483100;
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: me-notify-fade-in 0.16s ease-out;
}

@keyframes me-notify-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.me-notify-modal {
  width: 720px;
  max-width: 100%;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: var(--dsw-alias-bg-layer-1, var(--dsw-static-white, #ffffff));
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
  border: 1px solid var(--dsw-alias-border-l2, transparent);
  box-shadow: 0 16px 48px color-mix(in srgb, var(--dsw-alias-label-primary, #111) 18%, transparent);
  overflow: hidden;
  animation: me-notify-modal-in 0.2s ease-out;
}

@keyframes me-notify-modal-in {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to   { opacity: 1; transform: none; }
}

.me-notify-modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, var(--dsw-static-gray-5, #e5e7eb));
}

.me-notify-modal-title {
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.me-notify-modal-close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background: none;
  color: var(--dsw-alias-label-tertiary, var(--dsw-static-gray-9, #6b7280));
  cursor: pointer;
  padding: 0;
}

.me-notify-modal-close:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(38, 49, 72, 0.06));
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
}

.me-notify-modal-body {
  overflow-y: auto;
  padding: 16px;
  overscroll-behavior: contain;
}

.me-notify-modal-meta {
  margin-bottom: 12px;
}

.me-notify-mail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.me-notify-mail-headline {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, var(--dsw-static-gray-9, #6b7280));
}

.me-notify-mail-intro {
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
}

.me-notify-modal-content {
  margin: 0 0 12px;
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-module-platform, var(--dsw-static-gray-2, #f9fafb));
  font-family: inherit;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--dsw-alias-label-primary, var(--dsw-static-gray-11, #111827));
}

.me-notify-mail .me-notify-modal-content {
  margin-bottom: 0;
}

/* ================================================================
 * \u79FB\u52A8\u7AEF\u9002\u914D\uFF08\u2264767px\uFF09\uFF1A\u94C3\u94DB\u7565\u7F29\uFF0C\u5F39\u7A97\u5168\u5BBD\u8D34\u8FB9\uFF0C\u62D6\u62FD\u4ECD\u53EF\u7528\u3002
 * \u517C\u5BB9\u7EAF web \u79FB\u52A8\u7AEF\u6D4F\u89C8\u5668 + dsh-android-edapp\uFF08\u5176\u6302 html[data-dsh-mobile]\uFF0C
 * \u6B64\u5904\u7528 @media \u5BBD\u5EA6\u5224\u65AD\uFF0C\u4E24\u6761\u8DEF\u5F84\u90FD\u8986\u76D6\uFF09\u3002
 * ================================================================ */
@media (max-width: 767px) {
  .me-notify-host,
  .me-notify-bell {
    width: 36px;
    height: 36px;
  }

  /* \u5F39\u7A97\uFF1A\u5168\u5BBD\u8D34\u8FB9\uFF08\u5DE6\u53F3\u5404 10px\uFF09\uFF0C\u4E0D\u8D85\u51FA\u5C4F\u5E55\u5BBD\u5EA6\u3002 */
  .me-notify-pop {
    width: calc(100vw - 20px);
    max-width: none;
  }

  .me-notify-modal {
    width: 100%;
    max-height: 85vh;
    border-radius: 14px;
  }

  .me-notify-modal-backdrop {
    padding: 12px;
  }
}
`;var Di="memory-evolve",Oi={"tab.label":"\u6280\u80FD\u7BA1\u7406\u5668","tab.label.alt":"\u6280\u80FD\u7BA1\u7406\u5668","header.title":"\u6280\u80FD\u7BA1\u7406\u5668","header.subtitle":"\u7BA1\u7406\u5168\u90E8\u6280\u80FD \xB7 \u81EA\u5B9A\u4E49\u76EE\u5F55 \xB7 \u7981\u7528/\u542F\u7528 \xB7 \u67E5\u770B\u4E0E\u7F16\u8F91","search.placeholder":"\u641C\u7D22\u6280\u80FD\u540D\u79F0\u3001\u63CF\u8FF0\u6216\u9002\u7528\u573A\u666F\u2026","search.empty":"\u6CA1\u6709\u5339\u914D\u7684\u6280\u80FD","filter.all":"\u5168\u90E8","status.enabled":"\u53EF\u7528",disable:"\u7981\u7528",enable:"\u542F\u7528","disabled.badge":"\u5DF2\u7981\u7528","disabled.hint":"\u5DF2\u7981\u7528\uFF1A\u4E0D\u4F1A\u51FA\u73B0\u5728\u6A21\u578B\u7684\u6280\u80FD\u76EE\u5F55\u4E2D","protected.badge":"\u7CFB\u7EDF","protected.hint":"\u7CFB\u7EDF\u6280\u80FD\uFF08project \u6765\u6E90\uFF09\uFF0C\u4E0D\u53EF\u7981\u7528","toggle.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{message}","manage.dirs":"\u7BA1\u7406\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","dirs.title":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","dirs.help":"\u6DFB\u52A0\u5305\u542B\u6280\u80FD\u7684\u76EE\u5F55\uFF08\u652F\u6301 <\u76EE\u5F55>/<\u6280\u80FD>/SKILL.md \u6216 <\u76EE\u5F55>/<\u6280\u80FD>.md \u5E03\u5C40\uFF09\u3002\u76EE\u5F55\u6C38\u4E45\u4FDD\u5B58\u5728\u63D2\u4EF6 state.json\uFF0C\u91CD\u542F\u540E\u81EA\u52A8\u52A0\u8F7D\uFF1B\u4E0E\u5DF2\u6709\u6280\u80FD\u6839\u76EE\u5F55\u91CD\u53E0\u7684\u8DEF\u5F84\u4F1A\u88AB\u62D2\u7EDD\u3002","dirs.placeholder":"\u8F93\u5165\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5982 ~/.hermes/skills/\u2026","dirs.add":"\u6DFB\u52A0","dirs.remove":"\u79FB\u9664","dirs.empty":"\u8FD8\u6CA1\u6709\u81EA\u5B9A\u4E49\u76EE\u5F55","dirs.missing":"\u76EE\u5F55\u4E0D\u5B58\u5728","pager.prev":"\u4E0A\u4E00\u9875","pager.next":"\u4E0B\u4E00\u9875","pager.page":"{page} / {total} \u9875","skills.count":"{count} \u4E2A\u6280\u80FD","roots.count":"{count} \u4E2A\u76EE\u5F55","pane.skills":"\u6280\u80FD","pane.files":"\u6587\u4EF6","pane.editor":"\u7F16\u8F91","no.skill.selected":"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6280\u80FD\u5F00\u59CB\u6D4F\u89C8","no.root":"\u8BE5\u6280\u80FD\u6CA1\u6709\u53EF\u6D4F\u89C8\u7684\u672C\u5730\u76EE\u5F55","no.entries":"\u7A7A\u76EE\u5F55","no.file":"\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u67E5\u770B\u6216\u7F16\u8F91","not.text":"\u4E0D\u662F\u6587\u672C\u6587\u4EF6\uFF0C\u65E0\u6CD5\u9884\u89C8","too.large":"\u6587\u4EF6\u8D85\u8FC7\u8BFB\u53D6\u4E0A\u9650\uFF08512 KiB\uFF09","read.failed":"\u8BFB\u53D6\u5931\u8D25\uFF1A{message}","write.failed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{message}",save:"\u4FDD\u5B58",saving:"\u4FDD\u5B58\u4E2D\u2026",saved:"\u5DF2\u4FDD\u5B58",edit:"\u7F16\u8F91",cancel:"\u53D6\u6D88",discard:"\u653E\u5F03","dirty.hint":"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539",readonly:"\u53EA\u8BFB",bytes:"{size} B",kib:"{size} KiB",mib:"{size} MiB","dir.up":"\u4E0A\u7EA7\u76EE\u5F55","open.folder":"\u6253\u5F00\u76EE\u5F55","source.badge":"{source}",invocable:"\u53EF\u8C03\u7528","when.to.use":"\u9002\u7528\u573A\u666F",description:"\u63CF\u8FF0","resource.directory":"\u76EE\u5F55","resource.url":"\u94FE\u63A5","resource.opaque":"\u8D44\u6E90",refresh:"\u5237\u65B0","loading.skills":"\u6B63\u5728\u52A0\u8F7D\u6280\u80FD\u2026","loading.dir":"\u52A0\u8F7D\u4E2D\u2026","tree.collapse":"\u6298\u53E0","tree.expand":"\u5C55\u5F00",path:"\u8DEF\u5F84","root.label":"\u76EE\u5F55","editor.placeholder":"\u5728\u5DE6\u4FA7\u6587\u4EF6\u6811\u4E2D\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u5F00\u59CB\u7F16\u8F91\u3002","status.ready":"\u5C31\u7EEA","status.skill":"\u6280\u80FD","status.file":"\u6587\u4EF6","status.unsaved":"\u672A\u4FDD\u5B58","status.saved":"\u5DF2\u4FDD\u5B58","confirm.discard.title":"\u653E\u5F03\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF1F","confirm.discard.body":"\u4F60\u5BF9 {name} \u7684\u4FEE\u6539\u5C1A\u672A\u4FDD\u5B58\uFF0C\u5207\u6362\u6587\u4EF6\u5C06\u4E22\u5931\u8FD9\u4E9B\u4FEE\u6539\u3002","confirm.discard.ok":"\u653E\u5F03\u4FEE\u6539","mtime.label":"\u4FEE\u6539\u4E8E {time}","open.in.new.tab":"\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00",preview:"\u9884\u89C8","memoryTab.label":"\u8BB0\u5FC6","memoryTab.label.pending":"\u{1F534} \u8BB0\u5FC6 ({count})","skillsTab.label":"\u6280\u80FD","skillsTab.label.pending":"\u{1F534} \u6280\u80FD ({count})","todosTab.label":"\u5F85\u529E","todosTab.label.pending":"\u{1F534} \u5F85\u529E ({count})","coiTab.label":"COI\u8C03\u5EA6","coiTab.label.pending":"\u{1F534} COI\u8C03\u5EA6 ({count})","broadcastTab.label":"\u4F1A\u8BDD\u5E7F\u64AD","broadcast.tab.guide":"\u6307\u5357","broadcast.tab.messages":"\u6D88\u606F","broadcast.tab.rooms":"\u623F\u95F4","broadcast.tab.settings":"\u8BBE\u7F6E","broadcast.settings.wsCoord.title":"\u5DE5\u4F5C\u533A\u534F\u8C03\uFF08ws-coord\uFF09","broadcast.settings.wsCoord.desc":'\u540C\u5DE5\u4F5C\u533A\u591A\u4F1A\u8BDD\u5E76\u884C\u65F6\u7684\u8D44\u6E90\u5360\u7528\u534F\u8C03\u2014\u2014\u58F0\u660E\u8981\u6539\u7684\u6587\u4EF6\uFF08de_ws_declare\uFF09\u3001\u5199\u540E\u81EA\u52A8\u767B\u8BB0\u5360\u7528\u3001\u5199\u524D\u51B2\u7A81\u68C0\u6D4B\uFF08\u8F6F\u6A21\u5F0F\u8B66\u544A / \u786C\u62E6\u622A\u53EF\u5207\u6362\uFF09\u3001de_ws_status \u67E5\u770B"\u8C01\u5728\u8DD1\u3001\u5728\u5E72\u4EC0\u4E48"\u3002\u4EE5\u4E0B\u5F00\u5173\u53EA\u63A7\u5236\u672C\u5B50\u529F\u80FD\uFF1B\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300D\u2192\u300C\u914D\u7F6E\u300D\u91CC\u3002',"broadcast.settings.wsCoord.enabled":"\u542F\u7528\u5DE5\u4F5C\u533A\u534F\u8C03","broadcast.settings.wsCoord.enabled.hint":"\u6CE8\u518C de_ws_declare / de_ws_status / de_ws_release \u5DE5\u5177 + \u5199\u524D\u51B2\u7A81\u68C0\u6D4B\u4E8B\u4EF6\u76D1\u542C + \u6D3B\u52A8\u611F\u77E5\u5FEB\u7167\u6BB5\u3002\u4F9D\u8D56\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\uFF08\u5E7F\u64AD\u5173\u95ED\u65F6\u672C\u529F\u80FD\u4E0D\u53EF\u7528\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED","broadcast.settings.wsCoord.snapshot":"\u6D3B\u52A8\u5FEB\u7167\u6BB5","broadcast.settings.wsCoord.snapshot.hint":"\u5DE5\u4F5C\u533A\u6D3B\u8DC3\u4F1A\u8BDD \u22652 \u65F6\uFF0C\u6BCF\u56DE\u5408\u5FEB\u7167\u6CE8\u5165\u4E00\u884C\u3010\u5DE5\u4F5C\u533A\u6D3B\u52A8\u3011\uFF08\u5E26\u5F53\u524D\u65F6\u95F4\uFF0C\u542B\u5404\u4F1A\u8BDD\u5728\u505A\u4EC0\u4E48\uFF09\uFF1B0~1 \u4E2A\u4F1A\u8BDD\u65F6\u96F6\u5F00\u9500","broadcast.settings.wsCoord.enforce":"\u786C\u62E6\u622A\u6A21\u5F0F","broadcast.settings.wsCoord.enforce.hint":"\u9ED8\u8BA4\u5173\uFF08\u8F6F\u6A21\u5F0F\uFF1A\u5148\u4FE1\u4EFB AI\uFF0C\u51B2\u7A81\u53EA\u8B66\u544A\u4E0D\u62E6\u622A\uFF09\uFF1B\u6253\u5F00\u540E\u5347\u7EA7\u4E3A\u786C\u62E6\u622A\u2014\u2014\u5199\u5165\u4ED6\u4EBA\u5360\u7528\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB\u5DE5\u5177\u5C42\u76F4\u63A5\u62D2\u7EDD\uFF08deny\uFF09\uFF0CAI \u770B\u5230\u62D2\u7EDD\u539F\u56E0\u81EA\u4E3B\u8C03\u6574","broadcast.guide.intro.title":"\u4F1A\u8BDD\u5E7F\u64AD\u662F\u4EC0\u4E48","broadcast.guide.intro.body":"\u4F1A\u8BDD\u5E7F\u64AD = DSH \u4F1A\u8BDD\u4E4B\u95F4\u7684\u6D88\u606F\u901A\u9053\uFF1A\u7ED9\u5176\u4ED6\u4F1A\u8BDD\u53D1\u6D88\u606F\uFF08AI \u7528 de_broadcast send \u53D1\u9001\uFF09\uFF0C\u5BF9\u65B9\u4E0B\u6B21\u751F\u6210\u524D\u5FEB\u7167\u81EA\u52A8\u51FA\u73B0\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u63D0\u793A\uFF1B\u6D88\u606F\u6309\u6536\u4EF6\u7BB1\u7BA1\u7406\u2014\u2014\u4E3B\u9898 + \u7B80\u4ECB\uFF0C\u5168\u5458\u5DF2\u8BFB\u540E\u81EA\u52A8\u5220\u9664\u3002","broadcast.guide.send.title":"\u600E\u4E48\u53D1\u6D88\u606F","broadcast.guide.send.body":"\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u7ED9 XX \u4F1A\u8BDD\u53D1\u5E7F\u64AD\u2026\u300D\u5373\u53EF\uFF08\u9ED8\u8BA4\u4E00\u5BF9\u4E00\uFF0C\u6536\u4EF6\u4EBA = \u5BF9\u65B9\u7684\u4F1A\u8BDD ID\uFF09\uFF1A","broadcast.guide.send.item1":"\u4E00\u5BF9\u4E00\uFF1A\u6307\u5B9A\u63A5\u6536\u65B9\u4F1A\u8BDD ID\uFF08\u628A\u300C\u590D\u5236\u4F1A\u8BDD ID\u300D\u7684\u7ED3\u679C\u53D1\u7ED9\u5BF9\u65B9\uFF0C\u5BF9\u65B9 AI \u5C31\u80FD\u7ED9\u4F60\u53D1\uFF09\uFF1B","broadcast.guide.send.item2":"\u623F\u95F4\uFF1A\u591A\u4EBA\u804A\u5929\u5BA4\uFF0C\u8DE8\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6210\u5458\u90FD\u80FD\u770B\u5230\uFF08\u53D1\u9001\u7ED9 room:<\u623F\u95F4id>\uFF09\uFF1B","broadcast.guide.send.item3":"\u9879\u76EE\uFF1A\u8BE5\u5DE5\u4F5C\u76EE\u5F55\u5185\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF08\u53D1\u9001\u7ED9 project:/\u7EDD\u5BF9\u8DEF\u5F84\uFF09\u3002","broadcast.guide.inbox.title":"\u6536\u4EF6\u7BB1\uFF08\u6D88\u606F\u9875\uFF09","broadcast.guide.inbox.body":"\u6D88\u606F\u5217\u8868\u9ED8\u8BA4\u53EA\u770B\u672A\u8BFB\u7684\u975E\u623F\u95F4\u6D88\u606F\uFF08\u5DF2\u8BFB\u81EA\u52A8\u9690\u85CF\uFF1B\u623F\u95F4\u6D88\u606F\u8FDB\u5BF9\u5E94\u623F\u95F4\u67E5\u770B\uFF09\uFF1A","broadcast.guide.inbox.item1":"\u7B5B\u9009\uFF1A\u672A\u8BFB / \u5168\u90E8 / \u5DF2\u8BFB\uFF1B\u641C\u7D22\u4E3B\u9898\u3001\u53D1\u4EF6\u4EBA\u3001\u5185\u5BB9\uFF1B\u5206\u9875 20 \u6761 / \u9875\uFF1B","broadcast.guide.inbox.item2":"\u70B9\u300C\u5C55\u5F00\u5168\u6587\u300D\u770B\u5B8C\u6574\u5185\u5BB9\uFF1B\u7EA2\u8272\u300C\u5220\u9664\u300D= \u8D85\u7BA1\u5220\u9664\uFF08\u5BF9\u6240\u6709\u4EBA\u4E0D\u53EF\u89C1\uFF09\uFF1B","broadcast.guide.inbox.item3":"\u4E00\u5BF9\u4E00\u6D88\u606F\u5168\u90E8\u63A5\u6536\u65B9\u5DF2\u8BFB\u540E\u81EA\u52A8\u5220\u9664\uFF08\u5DF2\u6D88\u8D39\uFF0C\u4E0D\u5360\u5217\u8868\uFF09\u3002","broadcast.guide.room.title":"\u623F\u95F4\u9875\uFF1A\u591A\u4EBA\u534F\u4F5C\u804A\u5929\u5BA4","broadcast.guide.room.body":"\u623F\u95F4 = \u591A\u4EBA\u534F\u4F5C\u804A\u5929\u5BA4\uFF1A","broadcast.guide.room.item1":"\u5C55\u5F00\u623F\u95F4\u770B\u6210\u5458\u5728\u7EBF\u72B6\u6001\uFF1A\u{1F7E2} running = \u6B63\u5728\u751F\u6210\uFF08\u53EF\u7B49\u5B83 / \u5B83\u56DE\u5408\u5185\u53EF\u89C1\uFF09\uFF0C\u26AA idle / unknown = \u5DF2\u7ED3\u675F\u56DE\u5408\u6216\u672A\u8BB0\u5F55\uFF08\u4E0D\u8981\u50BB\u7B49\uFF09\uFF1B","broadcast.guide.room.item2":"\u623F\u95F4\u6D88\u606F\u4E0E\u6536\u4EF6\u7BB1\u540C\u6B3E\u7B5B\u9009 / \u641C\u7D22 / \u5206\u9875\uFF1B\u521B\u5EFA\u8005\u53EF\u8E22\u4EBA\u3001\u89E3\u6563\u623F\u95F4\uFF08\u89E6\u53D1\u7CFB\u7EDF\u901A\u77E5\uFF09\uFF1B","broadcast.guide.room.item3":"\u5DF2\u89E3\u6563\u623F\u95F4\u4FDD\u7559\u8BB0\u5F55\u53EF\u8FFD\u6EAF\uFF0C\u6210\u5458\u4E0D\u80FD\u518D\u52A0\u5165 / \u53D1\u6D88\u606F\u3002","broadcast.guide.alias.title":"\u4F1A\u8BDD\u522B\u540D\uFF1A\u4E00\u773C\u8BA4\u51FA\u662F\u8C01","broadcast.guide.alias.body":"\u7ED9\u4F1A\u8BDD\u8BBE\u7F6E\u53CB\u597D\u540D\uFF08\u226410 \u5B57\uFF09\u2014\u2014\u5FEB\u7167\u3001\u5217\u8868\u3001\u6D88\u606F\u91CC\u90FD\u663E\u793A\u522B\u540D\uFF08\u77ED ID\uFF09\uFF0C\u4E00\u773C\u8BA4\u51FA\u662F\u8C01\uFF1A","broadcast.guide.alias.item1":"\u9876\u90E8\u300C\u6211\u7684\u4F1A\u8BDD\u300D\u884C\uFF1A\u590D\u5236\u4F1A\u8BDD ID / \u590D\u5236\u522B\u540D\uFF0C\u628A\u7ED3\u679C\u53D1\u7ED9\u5BF9\u65B9\u5C31\u80FD\u5F00\u804A\uFF1B","broadcast.guide.alias.item2":"\u4F1A\u8BDD\u9875\u53F3\u4E0A\u89D2 \u29C9 \u590D\u5236\u4F1A\u8BDDID / \u270E \u522B\u540D \u6309\u94AE\u4E5F\u53EF\u8BBE\u7F6E\u3002","broadcast.guide.switch.title":"\u5F00\u5173","broadcast.guide.switch.body":"\u4F1A\u8BDD\u5E7F\u64AD\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5F00\u5173\uFF0C\u5237\u65B0\u540E\u672C Tab \u51FA\u73B0\u3002","broadcast.guide.wscoord.title":"\u5DE5\u4F5C\u533A\u534F\u8C03\uFF1A\u591A\u4EBA\u5E76\u884C\u4E0D\u6253\u67B6","broadcast.guide.wscoord.body":"\u540C\u4E00\u9879\u76EE\u591A\u4E2A\u4F1A\u8BDD\u5E76\u884C\u6539\u4EE3\u7801\u65F6\uFF0C\u7528\u300C\u8BBE\u7F6E\u300D\u9875\u7684\u5DE5\u4F5C\u533A\u534F\u8C03\u907F\u514D\u4E92\u76F8\u8986\u76D6\uFF1A","broadcast.guide.wscoord.item1":"\u5F00\u5DE5\u524D\u8BA9 AI\u300C\u58F0\u660E\u4E00\u4E0B\u6211\u8981\u6539\u54EA\u4E9B\u6587\u4EF6\u300D\uFF08de_ws_declare\uFF09\u2014\u2014\u5176\u4ED6\u4EBA\uFF08\u53CA\u5176 AI\uFF09\u80FD\u770B\u5230\u8C01\u5728\u6539\u4EC0\u4E48\uFF1B","broadcast.guide.wscoord.item2":"\u5199\u524D\u51B2\u7A81\u68C0\u6D4B\uFF1A\u8F6F\u6A21\u5F0F\u5148\u8B66\u544A\uFF08\u9ED8\u8BA4\uFF09\uFF1B\u53EF\u5207\u786C\u62E6\u622A\u2014\u2014\u5199\u5165\u4ED6\u4EBA\u5360\u7528\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB\u76F4\u63A5\u62D2\u7EDD\uFF1B","broadcast.guide.wscoord.item3":"\u300C\u6D3B\u52A8\u300D\u6982\u89C8\uFF08de_ws_status\uFF09\u968F\u65F6\u770B\u8C01\u5728\u8DD1\u3001\u5728\u5E72\u4EC0\u4E48\uFF1B\u5F00\u5173\u5728\u300C\u8BBE\u7F6E\u300D\u9875\uFF08\u4F9D\u8D56\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\uFF09\u3002","broadcast.mySessionId":"\u6211\u7684\u4F1A\u8BDD ID","broadcast.copyId":"\u590D\u5236","broadcast.copied":"\u5DF2\u590D\u5236","broadcast.loading":"\u52A0\u8F7D\u4E2D\u2026","broadcast.refresh":"\u5237\u65B0","broadcast.messages.empty":"\uFF08\u6682\u65E0\u6D88\u606F\uFF09","broadcast.messages.sender":"\u6765\u81EA","broadcast.messages.to":"\u6536\u4EF6\u4EBA","broadcast.messages.direct":"\u79C1\u4FE1","broadcast.messages.room":"\u623F\u95F4","broadcast.messages.project":"\u9879\u76EE","broadcast.messages.unread":"\u672A\u8BFB","broadcast.messages.long":"\u957F\u5185\u5BB9","broadcast.message.expand":"\u5C55\u5F00\u5168\u6587","broadcast.message.collapse":"\u6536\u8D77","broadcast.message.delete":"\u5220\u9664","broadcast.message.deleteConfirm":`\u5220\u9664\u8FD9\u6761\u6D88\u606F\uFF1F\uFF08\u8D85\u7BA1\u64CD\u4F5C\uFF0C\u6D88\u606F\u5BF9\u6240\u6709\u4EBA\u4E0D\u53EF\u89C1\uFF09

{subject}`,"broadcast.message.deleted":"\u5DF2\u5220\u9664","broadcast.copyAlias":"\u590D\u5236\u522B\u540D","broadcast.msg.unread":"\u672A\u8BFB","broadcast.msg.read":"\u5DF2\u8BFB","broadcast.filter.unread":"\u672A\u8BFB","broadcast.filter.all":"\u5168\u90E8","broadcast.filter.read":"\u5DF2\u8BFB","broadcast.searchPh":"\u641C\u7D22\u4E3B\u9898/\u53D1\u4EF6\u4EBA/\u5185\u5BB9\u2026","broadcast.pagePrev":"\u4E0A\u4E00\u9875","broadcast.pageNext":"\u4E0B\u4E00\u9875","broadcast.pageInfo":"{page}/{total} \u9875","broadcast.room.detail":"\u8BE6\u60C5","broadcast.room.messages":"\u623F\u95F4\u6D88\u606F","broadcast.room.messages.empty":"\uFF08\u6682\u65E0\u623F\u95F4\u6D88\u606F\uFF09","broadcast.messages.roomInRooms":"\u623F\u95F4\u6D88\u606F\u8BF7\u5728\u300C\u623F\u95F4\u300D\u9875\u8FDB\u5165\u5BF9\u5E94\u623F\u95F4\u67E5\u770B","broadcast.rooms.empty":"\uFF08\u6682\u65E0\u623F\u95F4\uFF09","broadcast.roomSearchPh":"\u641C\u7D22\u623F\u95F4\u540D\u2026","broadcast.roomStatus.all":"\u5168\u90E8","broadcast.roomStatus.active":"\u6D3B\u8DC3","broadcast.roomStatus.dissolved":"\u5DF2\u89E3\u6563","broadcast.roomDays.0":"\u5168\u90E8\u65F6\u95F4","broadcast.roomDays.7":"\u6700\u8FD17\u5929","broadcast.roomDays.30":"\u6700\u8FD130\u5929","broadcast.room.status.active":"\u6D3B\u8DC3","broadcast.room.status.idle":"\u7A7A\u95F2","broadcast.room.status.dissolved":"\u5DF2\u89E3\u6563","broadcast.room.online":"{online}/{total} \u5728\u7EBF","broadcast.room.members":"\u6210\u5458","broadcast.room.kick":"\u8E22\u51FA","broadcast.room.kickConfirm":"\u8E22\u51FA\u6210\u5458 {member}\uFF1F\uFF08\u5C06\u53D1\u9001\u7CFB\u7EDF\u901A\u77E5\uFF0C\u8BE5\u4F1A\u8BDD\u5931\u53BB\u623F\u95F4\u8BBF\u95EE\uFF09","broadcast.room.dissolve":"\u89E3\u6563","broadcast.room.dissolveConfirm":"\u89E3\u6563\u623F\u95F4\u300C{name}\u300D\uFF1F\uFF08\u8F6F\u5220\u9664\uFF1A\u8BB0\u5F55\u4FDD\u7559\u53EF\u8FFD\u6EAF\uFF0C\u6210\u5458\u6536\u5230\u7CFB\u7EDF\u901A\u77E5\uFF0C\u4E4B\u540E\u65E0\u6CD5\u52A0\u5165/\u53D1\u6D88\u606F\uFF09","broadcast.room.dissolved":"\u5DF2\u89E3\u6563","broadcast.room.copyId":"\u590D\u5236\u623F\u95F4 id","broadcast.room.lastActive":"\u6700\u540E\u6D3B\u52A8","broadcast.room.created":"\u521B\u5EFA\u4E8E","broadcast.room.presence.unknown":"unknown \xB7 \u65E0\u6D3B\u52A8\u8BB0\u5F55","header.copySessionId":"\u29C9 \u590D\u5236\u4F1A\u8BDDID","header.copySessionId.done":"\u2713 \u5DF2\u590D\u5236","header.copySessionId.title":"\u590D\u5236\u5F53\u524D\u4F1A\u8BDD ID\uFF08\u53D1\u7ED9\u5176\u4ED6\u4F1A\u8BDD\uFF1A\u544A\u8BC9\u5BF9\u65B9 AI \u4F60\u7684\u4F1A\u8BDD ID\uFF0C\u8BA9\u5B83\u7528 de_broadcast \u7ED9\u4F60\u53D1\u5E7F\u64AD\uFF09","header.setAlias":"\u270E \u522B\u540D","header.setAlias.title":"\u8BBE\u7F6E\u4F1A\u8BDD\u522B\u540D\uFF08\u226410 \u5B57\uFF09\u2014\u2014\u5FEB\u7167/\u5E7F\u64AD\u9762\u677F/\u6D88\u606F\u4E2D\u663E\u793A\u4E3A\u4F60\u7684\u53CB\u597D\u540D\u79F0","header.setAlias.placeholder":"\u8F93\u5165\u522B\u540D\uFF08\u226410 \u5B57\uFF09","header.setAlias.save":"\u4FDD\u5B58","header.setAlias.clear":"\u6E05\u9664","header.setAlias.saved":"\u522B\u540D\u5DF2\u4FDD\u5B58","header.setAlias.cleared":"\u522B\u540D\u5DF2\u6E05\u9664","advisor.header.toggle":"\u4F1A\u8BDD\u8BC4\u5BA1","advisor.header.toggle.title":"\u6253\u5F00\u6216\u6298\u53E0\u4F1A\u8BDD\u8BC4\u5BA1\u60AC\u6D6E\u9762\u677F","promptTab.label":"\u63D0\u793A\u8BCD","promptTab.label.active":"\u{1F534} \u63D0\u793A\u8BCD ({count})","settingsTab.label":"Memory Evolve \u8BBE\u7F6E","settingsTab.label.pending":"\u{1F534} Memory Evolve \u8BBE\u7F6E","settingsTab.feature.guide":"\u6307\u5357","settingsTab.feature.config":"\u914D\u7F6E","settingsTab.feature.version":"\u7248\u672C","version.current":"\u5F53\u524D\u7248\u672C","version.latest":"\u6700\u65B0\u7248\u672C","version.statusLabel":"\u72B6\u6001","version.status.latest":"\u5DF2\u662F\u6700\u65B0","version.status.outdated":"\u6709\u65B0\u7248\u672C","version.status.no-release":"\u6682\u65E0\u53D1\u5E03\u7248\u672C","version.status.unsupported":"\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B","version.status.unknown":"\u672A\u77E5","version.loading":"\u68C0\u67E5\u4E2D\u2026","version.lastError":"\u4E0A\u6B21\u68C0\u6D4B\u5931\u8D25","version.checkTime":"\u4E0A\u6B21\u68C0\u67E5","version.checking":"\u68C0\u67E5\u4E2D\u2026","version.checkNow":"\u68C0\u67E5\u66F4\u65B0","version.updating":"\u66F4\u65B0\u4E2D\u2026","version.updateNow":"\u66F4\u65B0\u5230 {tag}","version.restart.title":"\u7B49\u5F85\u91CD\u542F","version.restart.hint":"\u65B0\u7248\u672C\u4EE3\u7801\u5DF2\u5199\u5165\u78C1\u76D8\uFF0C\u8BF7\u5148\u91CD\u542F dsh web\uFF0C\u518D\u5237\u65B0\u6D4F\u89C8\u5668\uFF08\u4EC5\u5237\u65B0\u9875\u9762\u4E0D\u4F1A\u52A0\u8F7D\u65B0\u4EE3\u7801\uFF09\u3002","version.releaseNotes":"\u53D1\u5E03\u8BF4\u660E","version.unsupported.hint":"\u5F53\u524D\u5B89\u88C5\u65B9\u5F0F\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B\uFF08\u9700\u8981 git clone \u5B89\u88C5\uFF09\u3002\u8BF7\u7528 `git clone git@github.com:csyangwen/dsh-memory-evolve.git` \u91CD\u65B0\u5B89\u88C5\u540E\u4F7F\u7528\u3002","version.note.no-release":"\u8FDC\u7AEF\u4ED3\u5E93\u6682\u65E0\u53D1\u5E03\u7248\u672C\uFF08v0.x.y tag\uFF09\u3002","version.note.outdated":"\u68C0\u6D4B\u5230\u65B0\u7248\u672C\uFF0C\u53EF\u5728\u4E0B\u65B9\u70B9\u51FB\u66F4\u65B0\uFF08\u66F4\u65B0\u9700\u91CD\u542F dsh web \u751F\u6548\uFF09\u3002","version.note.latest-exact":"\u672C\u5730\u5DF2\u662F\u6700\u65B0\u53D1\u5E03\u7248\u672C\u3002","version.note.latest-contained":"\u672C\u5730\u5DF2\u5305\u542B\u53D1\u5E03\u7248\u672C\uFF08\u5F00\u53D1\u8F68\u9886\u5148\u6216\u5DF2\u540C\u6B65\uFF09\u3002","version.note.unsupported":"\u63D2\u4EF6\u76EE\u5F55\u4E0D\u662F git \u4ED3\u5E93\u6216 git \u4E0D\u53EF\u7528\u3002","version.error.bad-request":"\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF1A{message}","version.error.dirty":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.busy":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.target-changed":"\u76EE\u6807\u7248\u672C\u5DF2\u53D8\u5316\uFF1A{message}","version.error.untrusted":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.unsupported":"\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B\uFF1A{message}","version.error.error":"\u66F4\u65B0\u5931\u8D25\uFF1A{message}","version.error.network":"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF1A{message}","version.error.unknown":"\u672A\u77E5\u9519\u8BEF","memoryTab.feature.guide":"\u6307\u5357","memoryTab.feature.suggestions":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE","skillsTab.feature.guide":"\u6307\u5357","skillsTab.feature.skills":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","skillsTab.feature.skillBrowser":"\u6280\u80FD\u7BA1\u7406","todosTab.feature.guide":"\u6307\u5357","todosTab.feature.todoSuggestions":"\u5F85\u786E\u8BA4\u5F85\u529E\u7BA1\u7406","todosTab.feature.todo":"\u5F85\u529E","modelsTab.label":"\u6A21\u578B\u8BBE\u7F6E","modelsTab.feature.models":"\u6A21\u578B\u8BBE\u7F6E","modelsTab.feature.guide":"\u6307\u5357","modelsTab.guide.what.title":"\u6A21\u578B\u8BBE\u7F6E\u662F\u4EC0\u4E48","modelsTab.guide.what.body":"\u4EE5\u8868\u683C\u5F62\u5F0F\u4E00\u89C8 DSH \u7684\u5168\u90E8\u4F9B\u5E94\u5546\u4E0E\u6A21\u578B\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u6A21\u578B\u7EF4\u62A4\u63D2\u4EF6\u4FA7\u914D\u7F6E\uFF08\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u601D\u8003\u7B49\u7EA7\uFF09\u2014\u2014\u6240\u6709\u914D\u7F6E\u5F52\u5C5E\u672C\u63D2\u4EF6\uFF08models.json\uFF09\uFF0C\u4E0D\u4FEE\u6539 DSH \u914D\u7F6E\u3001\u4E0D\u4E0E\u5176\u4ED6\u63D2\u4EF6\u8026\u5408\uFF1A","modelsTab.guide.what.item1":"\u8868\u683C\u5217\uFF1A\u542F\u7528\u5F00\u5173\u3001\u4F9B\u5E94\u5546\uFF08\u542B DSH \u6FC0\u6D3B\u72B6\u6001\uFF09\u3001\u6A21\u578B\uFF08\u540D\u79F0 + ID\uFF09\u3001\u4E0A\u4E0B\u6587 / \u8F93\u51FA\u5BB9\u91CF\u3001\u601D\u8003\u7B49\u7EA7\u3001\u56FE\u7247\u8F93\u5165\u6807\u8BB0\uFF08\u{1F5BC}\uFF09\u3001\u5907\u6CE8\uFF1B\u652F\u6301\u641C\u7D22\u4E0E\u300C\u663E\u793A\u601D\u8003\u7B49\u7EA7\u300D\u5207\u6362\uFF1B","modelsTab.guide.what.item2":"\u6BCF\u6A21\u578B\u53EF\u8BBE\u7F6E\uFF1A\u542F\u7528 / \u7981\u7528\uFF08\u63D2\u4EF6\u53E3\u5F84\u7684\u53EF\u7528\u6027\u6807\u8BB0\uFF0C\u4E0D\u6539\u53D8 DSH \u5B9E\u9645\u8DEF\u7531\uFF09\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528\u601D\u8003\u7B49\u7EA7\u3001\u63A8\u8350\u601D\u8003\u7B49\u7EA7\u3001\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF1B","modelsTab.guide.what.item3":"\u914D\u7F6E\u5199\u5165\u5373\u6301\u4E45\u5316\uFF08<memoryDir>/models.json\uFF09\uFF0C\u91CD\u542F\u4E0D\u4E22\u3002","modelsTab.guide.config.title":"\u6BCF\u6A21\u578B\u914D\u7F6E\u9879","modelsTab.guide.config.body":"\u5C55\u5F00\u4E00\u884C\uFF08\u300C\u914D\u7F6E\u7B49\u7EA7\u300D\uFF09\u5373\u53EF\u7F16\u8F91\u601D\u8003\u76F8\u5173\u914D\u7F6E\uFF1A","modelsTab.guide.config.item1":"\u542F\u7528 / \u7981\u7528\uFF1A\u51B3\u5B9A de_models \u5DE5\u5177\u9ED8\u8BA4\u5217\u51FA\u7684\u53EF\u7528\u6A21\u578B\uFF08\u9ED8\u8BA4\u5168\u90E8\u542F\u7528\uFF09\uFF1B","modelsTab.guide.config.item2":"\u652F\u6301\u601D\u8003\uFF1A\u5173\u95ED\u540E\u8BE5\u6A21\u578B\u4E0D\u5141\u8BB8\u601D\u8003\uFF08\u4EC5 off \u7B49\u7EA7\u53EF\u7528\uFF09\uFF1B","modelsTab.guide.config.item3":"\u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF1A\u9ED8\u8BA4\u300C\u81EA\u52A8\u300D\u8DDF\u968F\u6A21\u578B\u81EA\u8EAB\u63A8\u8350\uFF0C\u53EF\u624B\u52A8\u6307\u5B9A\u4EFB\u4E00\u53EF\u7528\u7B49\u7EA7\uFF1B","modelsTab.guide.config.item4":"\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF1A\u52FE\u9009\u54EA\u4E9B\u7B49\u7EA7\u5141\u8BB8\u4F7F\u7528\uFF08\u9ED8\u8BA4\u5168\u90E8\uFF09\uFF1B\u53EF\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF08\u5982 ultra\uFF09\uFF0C\u79FB\u9664\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF1B","modelsTab.guide.config.item5":"\u56FE\u7247\u8F93\u5165\u80FD\u529B\uFF1A\u6A21\u578B\u663E\u5F0F\u58F0\u660E\u652F\u6301\u56FE\u7247\u8F93\u5165\u65F6\u663E\u793A\u300C\u{1F5BC} \u56FE\u7247\u8F93\u5165\u300D\u6807\u8BB0\uFF08\u6765\u81EA DSH \u6A21\u578B\u80FD\u529B\u5143\u6570\u636E\uFF0C\u53EA\u8BFB\u5C55\u793A\uFF09\uFF1B\u672A\u58F0\u660E = \u672A\u77E5\uFF0C\u4E0D\u663E\u793A\u3002","modelsTab.guide.tool.title":"de_models \u5DE5\u5177\uFF08\u7ED9 AI \u7528\uFF09","modelsTab.guide.tool.body":"\u672C\u6A21\u5757\u540C\u65F6\u6CE8\u518C de_models \u5DE5\u5177\uFF0CAI \u53EF\u4EE5\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u53EF\u7528\u6A21\u578B\uFF08\u63A5\u53E3\uFF09\u6E05\u5355\uFF1A","modelsTab.guide.tool.item1":"\u9ED8\u8BA4\u53EA\u8FD4\u56DE\u300C\u542F\u7528\u300D\u7684\u6A21\u578B\uFF08all=true \u67E5\u770B\u5168\u90E8\u542B\u7981\u7528\uFF09\uFF0C\u53EF\u6309\u4F9B\u5E94\u5546\u8FC7\u6EE4\uFF1B","modelsTab.guide.tool.item2":"\u6BCF\u4E2A\u6A21\u578B\u8FD4\u56DE\uFF1A\u662F\u5426\u542F\u7528\u3001DSH \u662F\u5426\u6FC0\u6D3B\u3001\u662F\u5426\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF08supportsImage\uFF1Atrue / false / null=\u672A\u77E5\uFF09\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF08\u542B\u63A8\u8350\u4E0E\u81EA\u5B9A\u4E49\uFF09\u3001\u5907\u6CE8\u3002","modelsTab.guide.switch.title":"\u5F00\u5173","modelsTab.guide.switch.body":"\u6A21\u578B\u8BBE\u7F6E\u9ED8\u8BA4\u5F00\u542F\uFF1B\u53EF\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u72EC\u7ACB\u5173\u95ED\uFF08\u4E0E\u5176\u4ED6\u6A21\u5757\u540C\u6B3E\u5F00\u5173\uFF09\u2014\u2014\u5173\u95ED\u540E\u672C Tab \u4E0E de_models \u5DE5\u5177\u9690\u85CF\uFF0C\u914D\u7F6E\u6570\u636E\u4FDD\u7559\u3002","modelsTab.searchPh":"\u641C\u7D22\u4F9B\u5E94\u5546\u3001\u6A21\u578B\u6216\u5907\u6CE8\u2026","modelsTab.showReasoning":"\u663E\u793A\u601D\u8003\u7B49\u7EA7","modelsTab.refresh":"\u5237\u65B0","modelsTab.loading":"\u52A0\u8F7D\u4E2D\u2026","modelsTab.count":"\u5171 {total} \u4E2A\u6A21\u578B \xB7 {enabled} \u4E2A\u542F\u7528","modelsTab.loadFailed":"\u52A0\u8F7D\u5931\u8D25\uFF1A{message}","modelsTab.empty":"\uFF08\u6682\u65E0\u6A21\u578B\uFF09","modelsTab.enabled":"\u542F\u7528","modelsTab.enable":"\u542F\u7528","modelsTab.disable":"\u7981\u7528","modelsTab.provider":"\u4F9B\u5E94\u5546","modelsTab.model":"\u6A21\u578B","modelsTab.capacity":"\u4E0A\u4E0B\u6587/\u8F93\u51FA","modelsTab.reasoning":"\u601D\u8003\u7B49\u7EA7","modelsTab.note":"\u5907\u6CE8","modelsTab.notePh":"\u8F93\u5165\u5907\u6CE8\u2026","modelsTab.dormant":"\u672A\u6FC0\u6D3B","modelsTab.thinking":"\u652F\u6301\u601D\u8003","modelsTab.thinkingHint":"\u5173\u95ED\u540E\u8BE5\u6A21\u578B\u4E0D\u5141\u8BB8\u601D\u8003\uFF08\u4EC5 off \u7B49\u7EA7\u53EF\u7528\uFF09","modelsTab.thinkingOff":"\u4E0D\u652F\u6301\u601D\u8003","modelsTab.supportsImage":"\u{1F5BC} \u56FE\u7247\u8F93\u5165","modelsTab.supportsImageHint":"\u8BE5\u6A21\u578B\u663E\u5F0F\u58F0\u660E\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF08\u6765\u81EA DSH \u6A21\u578B\u80FD\u529B\u5143\u6570\u636E inputModalities\uFF09","modelsTab.recommendedLevel":"\u63A8\u8350\u601D\u8003\u7B49\u7EA7","modelsTab.recommendedAuto":"\u81EA\u52A8\uFF08\u8DDF\u968F\u6A21\u578B\u63A8\u8350\uFF09","modelsTab.levelsNone":"\u5168\u90E8\u7981\u7528","modelsTab.editLevels":"\u914D\u7F6E\u7B49\u7EA7","modelsTab.closeEditor":"\u6536\u8D77","modelsTab.editorTitle":"\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF08\u52FE\u9009 = \u5141\u8BB8\u8BE5\u7B49\u7EA7\uFF1B\u63A8\u8350\u6765\u81EA\u6A21\u578B\u80FD\u529B\uFF09","modelsTab.recommended":"\u63A8\u8350","modelsTab.addLevel":"\u6DFB\u52A0","modelsTab.removeLevel":"\u79FB\u9664","modelsTab.levelIdPh":"\u7B49\u7EA7 ID\uFF08\u5982 ultra\uFF09","modelsTab.levelNamePh":"\u663E\u793A\u540D\uFF08\u5982 Ultra\uFF09","modelsTab.save":"\u4FDD\u5B58","modelsTab.saving":"\u4FDD\u5B58\u4E2D\u2026","modelsTab.cancel":"\u53D6\u6D88","uiSettingsTab.label":"Web UI \u8BBE\u7F6E","uiSettingsTab.feature.mixed":"\u7EFC\u5408","uiSettingsTab.feature.guide":"\u6307\u5357","uiSettingsTab.features.title":"\u529F\u80FD\u5F00\u5173","uiSettingsTab.features.help":"\u6BCF\u4E2A\u529F\u80FD\u90FD\u6709\u72EC\u7ACB\u7684\u5C0F\u5F00\u5173\uFF0C**\u9ED8\u8BA4\u5168\u90E8\u5173\u95ED**\u3001\u7531\u4F60\u4E3B\u52A8\u5F00\u542F\uFF0C\u6539\u52A8\u5373\u65F6\u751F\u6548\uFF08\u529F\u80FD\u672A\u5B9A\u578B\u524D\u7EDF\u4E00\u6536\u5728\u300C\u7EFC\u5408\u300D\uFF0C\u540E\u7EED\u518D\u5206\u7C7B\uFF09\u3002","uiSettingsTab.guide.what.title":"Web UI \u8BBE\u7F6E\u662F\u4EC0\u4E48","uiSettingsTab.guide.what.body":"\u7ED9 DSH web \u754C\u9762\u505A\u6837\u5F0F\u7EA7\u5C0F\u529F\u80FD\u2014\u2014\u4E0D\u6539\u6846\u67B6\u6E90\u7801\uFF0C\u7EAF\u5BA2\u6237\u7AEF\u6CE8\u5165\uFF08CSS + DOM \u589E\u5F3A\uFF09\uFF0C\u968F DSH \u66F4\u65B0\u4E0D\u6389\u529F\u80FD\uFF1B\u540E\u671F\u6269\u5C55\uFF08\u4E3B\u9898\u66F4\u6362\u7B49\uFF09\u90FD\u6536\u8FDB\u672C\u6A21\u5757\u3002","uiSettingsTab.guide.switch.title":"\u5F00\u5173","uiSettingsTab.guide.switch.body":"\u6A21\u5757\u5F00\u5173\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF09\uFF1B\u672C Tab\u300C\u7EFC\u5408\u300D\u91CC\u662F\u5404\u529F\u80FD\u7684\u72EC\u7ACB\u5C0F\u5F00\u5173\uFF08\u9ED8\u8BA4\u4E5F\u5168\u90E8\u5173\u95ED\uFF0C\u7531\u4F60\u4E3B\u52A8\u5F00\u542F\uFF09\u3002","uiSettingsTab.guide.features.title":"\u529F\u80FD\u4ECB\u7ECD","uiSettingsTab.guide.features.body":"\u6BCF\u4E2A\u529F\u80FD\u5728\u300C\u7EFC\u5408\u300D\u9875\u6709\u72EC\u7ACB\u5C0F\u5F00\u5173\uFF0C\u5F00\u542F\u540E\u5373\u65F6\u751F\u6548\uFF1A","uiSettingsTab.guide.features.item1":"\u4F1A\u8BDD\u7B5B\u9009\uFF1A\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF0C\u7EAF\u7A7A\u95F2\u7684\u6298\u53E0\u9690\u85CF\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF1B","uiSettingsTab.guide.features.item2":"\u5BF9\u8BDD\u533A\u52A0\u5BBD\uFF1A\u4E2D\u95F4\u5BF9\u8BDD\u533A\u57DF\u4ECE\u7EA6\u4E00\u534A\u5BBD\u5EA6\u6269\u5927\u5230\u7EA6 95%\uFF0C\u957F\u6D88\u606F\u770B\u7740\u66F4\u8212\u670D\uFF1B","uiSettingsTab.guide.features.item3":"\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD\uFF1A\u7528\u6237\u6D88\u606F\u6846\u4ECE\u9ED8\u8BA4 525px \u4E0A\u9650\u6269\u5927\u5230\u7EA6 80% \u5BBD\uFF08\u914D\u5408\u4E0A\u4E00\u6761\u6548\u679C\u66F4\u660E\u663E\uFF09\uFF1B","uiSettingsTab.guide.features.item4":"\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192\uFF1A\u8F93\u5165\u6846\u5706\u73AF \u226530% \u53D8\u9EC4\u3001\u226540% \u53D8\u7EA2\uFF0C\u63D0\u9192\u4F60\u8BE5\u6253\u4E66\u7B7E / \u5F00\u65B0\u4F1A\u8BDD\u4E86\uFF1B","uiSettingsTab.guide.features.item5":"Mermaid \u56FE\u8868\u6E32\u67D3\uFF1A\u6D88\u606F\u91CC\u7684 mermaid \u4EE3\u7801\u5757\u81EA\u52A8\u6E32\u67D3\u6210\u56FE\u8868\uFF0C\u6E32\u67D3\u5931\u8D25\u81EA\u52A8\u9000\u56DE\u4EE3\u7801\u5757\u3002","uiSettings.feature.sessionFilter":"\u4F1A\u8BDD\u7B5B\u9009","uiSettings.feature.sessionFilter.hint":"\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF08\u7EAF idle \u6298\u53E0\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF09\uFF1B\u5F00\u542F\u540E\u624D\u51FA\u73B0\u7B5B\u9009\u6761","uiSettings.feature.wideChat":"\u5BF9\u8BDD\u533A\u52A0\u5BBD","uiSettings.feature.wideChat.hint":"\u628A\u4E2D\u95F4\u7684\u5BF9\u8BDD\u5386\u53F2/\u8F93\u5165\u6846\u533A\u57DF\u4ECE\u7EA6\u4E00\u534A\u5BBD\u5EA6\u6269\u5927\u5230\u53F3\u4FA7\u7EA6 95%\uFF08\u4E0E\u4E0A\u65B9 Tab \u5BFC\u822A\u6761\u5BF9\u9F50\uFF09","uiSettings.feature.wideBubble":"\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD","uiSettings.feature.wideBubble.hint":"\u7528\u6237\u63D0\u4EA4\u540E\u7684\u6D88\u606F\u6846\u4ECE\u9ED8\u8BA4\u4E0A\u9650 525px \u6269\u5927\u5230\u5360\u4E2D\u95F4\u5185\u5BB9\u6846\u7EA6 80%\uFF08\u914D\u5408\u300C\u5BF9\u8BDD\u533A\u52A0\u5BBD\u300D\u6548\u679C\u66F4\u660E\u663E\uFF09","uiSettings.feature.contextWarn":"\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192","uiSettings.feature.contextWarn.hint":"\u8F93\u5165\u6846\u53F3\u4E0B\u4FA7\u7684\u4E0A\u4E0B\u6587\u4F7F\u7528\u91CF\u5706\u73AF\uFF1A\u5360\u7528\u8D85\u8FC7 30% \u53D8\u9EC4\u3001\u8D85\u8FC7 40% \u53D8\u7EA2\u63D0\u9192\uFF0C\u4F4E\u4E8E\u9608\u503C\u6062\u590D\u539F\u8272","uiSettings.feature.mermaidRender":"Mermaid \u56FE\u8868\u6E32\u67D3","uiSettings.feature.mermaidRender.hint":"\u628A\u6D88\u606F\u91CC\u7684 mermaid \u4EE3\u7801\u5757\u6E32\u67D3\u6210\u56FE\u8868\uFF08DSH \u754C\u9762\u672C\u8EAB\u4E0D\u6E32\u67D3 mermaid\uFF09\uFF1B\u9996\u6B21\u89C1\u5230\u56FE\u65F6\u624D\u52A0\u8F7D\u6E32\u67D3\u5F15\u64CE\uFF0CPC \u4E0E\u624B\u673A\u7AEF\u540C\u65F6\u751F\u6548\uFF0C\u6E32\u67D3\u5931\u8D25\u81EA\u52A8\u9000\u56DE\u4EE3\u7801\u5757","uiSettings.filter.on":"\u4EC5\u8FDB\u884C\u4E2D","uiSettings.filter.off":"\u5168\u90E8","uiSettings.running.label":"{count} \u8FD0\u884C\u4E2D","uiSettings.ungrouped":"\u672A\u5206\u7EC4","syncTab.label":"\u8BB0\u5FC6\u540C\u6B65","syncTab.loading":"\u52A0\u8F7D\u4E2D\u2026","syncTab.loadFailed":"\u72B6\u6001\u52A0\u8F7D\u5931\u8D25\uFF1A{message}","syncTab.tab.project":"\u672C\u9879\u76EE","syncTab.tab.global":"\u5168\u5C40\u8BB0\u5FC6","syncTab.tab.remote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93","syncTab.section.project":"\u672C\u9879\u76EE\u8BB0\u5FC6\uFF08KEY + \u9879\u76EE\u65E5\u5FD7 + \u5F52\u6863 + \u9879\u76EE\u5F85\u529E\uFF09","syncTab.section.global":"\u5168\u5C40\u8BB0\u5FC6\uFF08\u8BBE\u5907\u7EA7\uFF0C\u4E0E\u9879\u76EE\u65E0\u5173\uFF09","syncTab.section.remote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF08\u8BBE\u5907\u7EA7\u914D\u7F6E\uFF09","syncTab.project.mode.off":"\u4E0D\u542F\u7528\uFF08\u7EAF\u672C\u5730\uFF09","syncTab.project.mode.off.desc":"\u9879\u76EE\u8BB0\u5FC6\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u5EFA\u4ED3\u5E93\u3001\u4E0D\u751F\u6210\u8EAB\u4EFD\u8BC1\uFF0C\u4E5F\u4E0D\u4E0E\u4EFB\u4F55\u8FDC\u7AEF\u5BF9\u8D26","syncTab.project.mode.main":"A \u6A21\u5F0F\uFF1A\u4E3B\u4EE3\u7801\u4ED3\u5E93\uFF08\u96F6\u914D\u7F6E\uFF09","syncTab.project.mode.main.desc":"\u9879\u76EE\u8BB0\u5FC6\u653E\u8FDB\u4EE3\u7801\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF08\u4E0D\u6C61\u67D3\u4EE3\u7801\uFF09\u3002**\u4EE3\u7801\u4ED3\u5E93\u516C\u5F00 = \u8BB0\u5FC6\u4E5F\u516C\u5F00**","syncTab.project.mode.shared":"B \u6A21\u5F0F\uFF1A\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93","syncTab.project.mode.shared.desc":"\u9879\u76EE\u8BB0\u5FC6\u653E\u8FDB\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF0C\u8BB0\u5FC6\u4E0E\u4EE3\u7801\u5F7B\u5E95\u9694\u79BB","syncTab.project.mode.shared.needRemote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\u672A\u542F\u7528\u2014\u2014\u5DF2\u5207\u6362\u5230\u300C\u5171\u4EAB\u8BB0\u5FC6\u5E93\u300D\uFF0C\u8BF7\u5148\u542F\u7528\u5E76\u4FDD\u5B58\u4ED3\u5E93\u5730\u5740","syncTab.status.title":"\u5F53\u524D\u8BB0\u5FC6\u8FDC\u7AEF","syncTab.status.disabled":"\u672A\u542F\u7528\u2014\u2014\u6253\u5F00\u4E0A\u65B9\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5F00\u5173\u5F00\u59CB","syncTab.status.notInit":"\u5DF2\u542F\u7528\uFF0C\u4F46\u5F53\u524D\u9879\u76EE\u5C1A\u672A\u521D\u59CB\u5316\u2014\u2014\u70B9\u4E0A\u65B9 A/B \u6A21\u5F0F\u5B8C\u6210\u521D\u59CB\u5316","syncTab.status.remoteKind":"\u8BB0\u5FC6\u8FDC\u7AEF\uFF1A{kind}","syncTab.status.remoteKindMain":"\u4E3B\u4EE3\u7801\u4ED3\u5E93","syncTab.status.remoteKindShared":"\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93","syncTab.status.remoteKindNone":"\u672A\u6302\u8F7D","syncTab.status.originUrl":"\u8FDC\u7AEF\u5730\u5740\uFF1A{url}","syncTab.status.branch":"\u8FDC\u7AEF\u5206\u652F\uFF1A{branch}","syncTab.status.counts":"\u672A\u63A8\u9001 {pending} \u6761 \xB7 \u843D\u540E\u8FDC\u7AEF {behind} \u4E2A\u63D0\u4EA4 \xB7 \u51B2\u7A81 {conflicts} \u6761","syncTab.status.migrate":"\u53D1\u73B0\u65E7\u8BB0\u5FC6\u76EE\u5F55\uFF1A{dir}\u2014\u2014\u70B9\u300C\u5F00\u59CB\u540C\u6B65\u300D\u4F1A\u81EA\u52A8\u8FC1\u79FB","syncTab.global.title":"\u5168\u5C40\u8BB0\u5FC6","syncTab.global.uncommitted":"\u672A\u63A8\u9001 {n} \u4E2A\u8F68\uFF08\u5DE5\u4F5C\u6811\u53D8\u66F4 + \u5DF2\u63D0\u4EA4\u672A\u63A8\u9001\uFF09","syncTab.global.trackMemory":"\u5168\u5C40\u8BB0\u5FC6\uFF08MEMORY.md\uFF09","syncTab.global.trackUser":"\u7528\u6237\u6863\u6848\uFF08USER.md\uFF09","syncTab.global.trackDaily":"\u6BCF\u65E5\u65E5\u5FD7\uFF08daily/*.md\uFF09","syncTab.global.trackTodo":"\u5F85\u529E\uFF1A\u751F\u6D3B/\u5DE5\u4F5C/\u6BCF\u65E5\uFF08TODOS-*.md\uFF09","syncTab.global.hint":"\u5168\u5C40\u8BB0\u5FC6\uFF08\u7528\u6237\u6863\u6848/\u6BCF\u65E5\u65E5\u5FD7/\u5F85\u529E\uFF09\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u9879\u76EE\uFF0C\u6240\u6709\u9879\u76EE\u5171\u7528\u8FD9\u4E00\u5957\u5F00\u5173\uFF1B\u63A8\u9001\u6C38\u8FDC\u9700\u4F60\u663E\u5F0F\u70B9\u51FB","syncTab.global.sync":"\u62C9\u53D6\u5408\u5E76","syncTab.global.push":"\u63A8\u9001","syncTab.global.notInit":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\u672A\u542F\u7528\u2014\u2014\u5168\u5C40\u8BB0\u5FC6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5230\u300C\u5171\u4EAB\u8BB0\u5FC6\u5E93\u300D\u9875\u542F\u7528\u5E76\u4FDD\u5B58\u5730\u5740","syncTab.remote.desc":"\u8FD9\u662F\u5168\u8BBE\u5907\u7684\u7EDF\u4E00\u8BB0\u5FC6\u5E93\uFF1A\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\uFF08\u7528\u6237\u6863\u6848/\u6BCF\u65E5\u65E5\u5FD7/\u5F85\u529E\uFF09\u90FD\u5F15\u7528\u5B83\uFF0C\u542F\u7528\u5E76\u4FDD\u5B58\u5730\u5740\u4E00\u6B21\u5373\u53EF\u3002","syncTab.remote.mode.off":"\u4E0D\u542F\u7528","syncTab.remote.mode.off.desc":"\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\u5747\u4E0D\u53EF\u7528\uFF1B\u5DF2\u540C\u6B65\u7684\u6570\u636E\u4E0E\u5730\u5740\u4FDD\u7559","syncTab.remote.mode.on":"\u542F\u7528","syncTab.remote.mode.on.desc":"\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\u53EF\u7528\uFF1B\u5148\u4FDD\u5B58\u4ED3\u5E93\u5730\u5740","syncTab.remote.disable":"\u505C\u7528\u5171\u4EAB\u8BB0\u5FC6\u5E93","syncTab.remote.current":"\u5F53\u524D\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF1A{url}","syncTab.remote.placeholder":"\u7C98\u8D34\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740\uFF08\u5982 ssh://git@.../dsh-memories.git\uFF09","syncTab.remote.save":"\u542F\u7528\u5E76\u4FDD\u5B58","syncTab.remote.modify":"\u4FEE\u6539\u5E76\u4FDD\u5B58","syncTab.remote.switchHint":"\u505C\u7528\u53EA\u5173\u6389\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF08\u9879\u76EE B \u4E0E\u5168\u5C40\u8BB0\u5FC6\u4E0D\u53EF\u7528\uFF09\uFF0C\u5DF2\u540C\u6B65\u6570\u636E\u4E0E\u5730\u5740\u4FDD\u7559\uFF0C\u53EF\u968F\u65F6\u91CD\u65B0\u542F\u7528\u3002","syncTab.actions.sync":"\u62C9\u53D6\u5408\u5E76","syncTab.actions.push":"\u63A8\u9001","syncTab.actions.nothingToSync":"\u6CA1\u6709\u53EF\u540C\u6B65\u7684\u5185\u5BB9\u2014\u2014\u5148\u542F\u7528\u672C\u9879\u76EE\u6216\u5168\u5C40\u8F68","syncTab.conflicts.title":"\u5F85\u5904\u7406\u51B2\u7A81\uFF08{count} \u6761\u2014\u2014\u4E24\u53F0\u8BBE\u5907\u6539\u4E86\u540C\u4E00\u6761\u8BB0\u5FC6\uFF09","syncTab.conflicts.titleGlobal":"\u5168\u5C40{track}\uFF1A\u5F85\u5904\u7406\u51B2\u7A81\uFF08{count} \u6761\u2014\u2014\u4E24\u53F0\u8BBE\u5907\u6539\u4E86\u540C\u4E00\u6761\u8BB0\u5FC6\uFF09","syncTab.conflicts.base":"\u5171\u540C\u7248\u672C","syncTab.conflicts.ours":"\u672C\u673A\u7248\u672C","syncTab.conflicts.theirs":"\u8FDC\u7AEF\u7248\u672C","syncTab.conflicts.oursBtn":"\u91C7\u7528\u672C\u673A","syncTab.conflicts.theirsBtn":"\u91C7\u7528\u8FDC\u7AEF","syncTab.conflicts.bothBtn":"\u4E24\u8005\u90FD\u8981","syncTab.footnote":"\u5199\u8BB0\u5FC6\u7167\u5E38\u5B9E\u65F6\u843D\u76D8\uFF08\u5B8C\u5168\u4E0D\u78B0 Git\uFF09\uFF1B\u540C\u6B65\u662F\u6512\u4E00\u6279\u5408\u4E00\u6B21\u3002\u51B2\u7A81\u6807\u8BB0\u6C38\u4E0D\u843D\u76D8\uFF0C\u89E3\u51B3\u540E\u81EA\u52A8\u63D0\u4EA4\u3002","bookmarkTab.label":"\u4E66\u7B7E","bookmark.tab.list":"\u5217\u8868","bookmark.tab.guide":"\u6307\u5357","bookmark.list.title":"\u672C\u4F1A\u8BDD\u4E66\u7B7E","bookmark.list.help":"\u70B9\u51FB\u4E66\u7B7E\u8DF3\u8F6C\u5230\u5BF9\u5E94\u8F6E\u6B21\uFF1B\u8F6E\u5C3E \u2606 \u6253\u661F\u3001\u2605 \u5DF2\u6253\u661F\uFF08\u53EF\u6539\u540D/\u5220\u9664\uFF09\uFF1B\u5217\u8868\u53EF\u641C\u7D22\u3001\u53EF\u4ECE\u6B64\u8F6E\u521B\u5EFA\u5206\u652F\uFF08\u4E2D\u95F4\u8F6E\u7684\u5B98\u65B9\u5206\u652F\u6309\u94AE\u540C\u6837\u5DF2\u88AB Memory Evolve \u63A5\u7BA1\uFF09\u3002","bookmark.refresh":"\u5237\u65B0","bookmark.loading":"\u52A0\u8F7D\u4E2D\u2026","bookmark.empty":"\uFF08\u6682\u65E0\u4E66\u7B7E\u2014\u2014\u5728\u5BF9\u8BDD\u8F6E\u5C3E\u70B9 \u2606 \u6253\u661F\uFF09","bookmark.defaultLabel":"\u8F6E\u6B21 {n}","bookmark.turn":"\u8F6E\u6B21 {n}","bookmark.prompt.create":"\u4E66\u7B7E\u540D\u79F0\uFF08\u53EF\u6539\uFF09\uFF1A","bookmark.prompt.rename":"\u65B0\u540D\u79F0\uFF1A","bookmark.confirm.delete":"\u5220\u9664\u4E66\u7B7E\u300C{label}\u300D\uFF1F","bookmark.noSession":"\u65E0\u6CD5\u786E\u5B9A\u5F53\u524D\u4F1A\u8BDD\uFF08\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\uFF09","bookmark.search.placeholder":"\u641C\u7D22\u4E66\u7B7E\u2026","bookmark.search.empty":"\uFF08\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7B7E\uFF09","bookmark.star.title.off":"\u2606 \u6253\u4E66\u7B7E\uFF08Memory Evolve \u4F1A\u8BDD\u4E66\u7B7E\uFF09","bookmark.star.title.on":"\u2605 \u5DF2\u6253\u4E66\u7B7E\uFF1A{label}\uFF08Memory Evolve\uFF0C\u70B9\u51FB\u6539\u540D/\u5220\u9664\uFF09","bookmark.menu.rename":"\u6539\u540D","bookmark.menu.delete":"\u5220\u9664","bookmark.action.jump":"\u8DF3\u8F6C","bookmark.action.fork":"\u5206\u652F","bookmark.action.rename":"\u6539\u540D","bookmark.action.delete":"\u5220\u9664","bookmark.fork.title":"\u7531\u6B64\u8F6E\u521B\u5EFA\u5206\u652F\uFF08Memory Evolve \u589E\u5F3A\uFF09","bookmark.fork.confirm":"\u5B98\u65B9\u4EC5\u652F\u6301\u4ECE\u6700\u540E\u4E00\u6761\u6D88\u606F\u521B\u5EFA\u5206\u652F\u3002\u662F\u5426\u4ECD\u8981\u4ECE\u8FD9\u4E00\u8F6E\uFF08{n}\uFF09\u521B\u5EFA\u5206\u652F\uFF1F\uFF08Memory Evolve \u589E\u5F3A\uFF09","bookmark.fork.working":"\u6B63\u5728\u521B\u5EFA\u5206\u652F\u4F1A\u8BDD\u2026","bookmark.fork.ok":"\u5DF2\u521B\u5EFA\u65B0\u4F1A\u8BDD {id}\uFF08\u53EF\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u67E5\u770B\uFF09","bookmark.jump.hint":"\u70B9\u51FB\u8DF3\u8F6C\u5230\u8BE5\u8F6E","bookmark.jumping":"\u6B63\u5728\u5B9A\u4F4D\u2026","bookmark.jump.ok":"\u5DF2\u5B9A\u4F4D\u5230\u300C{label}\u300D","bookmark.jump.notFound":"\u672A\u627E\u5230\u300C{label}\u300D\u5BF9\u5E94\u6D88\u606F\uFF08\u53EF\u80FD\u5DF2\u88AB\u538B\u7F29/\u4E0D\u5728\u5F53\u524D\u5386\u53F2\u7A97\u53E3\uFF09","bookmark.jump.noChat":"\u627E\u4E0D\u5230\u300C\u5BF9\u8BDD\u300DTab\uFF0C\u65E0\u6CD5\u8DF3\u8F6C","bookmark.renamed":"\u5DF2\u6539\u540D","bookmark.deleted":"\u5DF2\u5220\u9664","bookmark.error":"\u5931\u8D25\uFF1A{message}","bookmark.guide.what.title":"\u4F1A\u8BDD\u4E66\u7B7E\u662F\u4EC0\u4E48","bookmark.guide.what.body":"\u7ED9\u5BF9\u8BDD\u7684\u6BCF\u4E00\u8F6E\u6253\u4E0A\u661F\u6807\uFF0C\u4E4B\u540E\u4ECE\u5217\u8868\u4E00\u952E\u8DF3\u56DE\u90A3\u4E00\u8F6E\uFF1B\u4E5F\u80FD\u4ECE\u4EFB\u610F\u4E00\u8F6E\u76F4\u63A5\u521B\u5EFA\u5B98\u65B9\u5206\u652F\u4F1A\u8BDD\u2014\u2014\u4ECE\u4E2D\u95F4\u67D0\u4E2A\u51B3\u7B56\u70B9\u300C\u53E6\u8D77\u4E00\u6761\u7EBF\u300D\u3002\u6570\u636E\u5B58\u5728\u63D2\u4EF6\u4FA7\u8FB9\u6587\u4EF6\uFF08\u4E0D\u78B0\u5B98\u65B9\u4F1A\u8BDD\u65E5\u5FD7\uFF09\uFF1B\u4E2D\u95F4\u8F6E\u7684\u5B98\u65B9\u5206\u652F\u6309\u94AE\u5DF2\u88AB\u672C\u63D2\u4EF6\u63A5\u7BA1\uFF08\u70B9\u51FB\u5F39\u786E\u8BA4\u540E\u8D70\u5B98\u65B9 fork \u901A\u9053\uFF09\u3002","bookmark.guide.star.title":"\u600E\u4E48\u6253\u661F","bookmark.guide.star.body":"\u6BCF\u4E2A\u5DF2\u5B8C\u6210\u8F6E\u5C3E\u6709 \u2606 \u6309\u94AE\uFF1A\u70B9\u4E00\u4E0B\u53D6\u540D\uFF08\u9ED8\u8BA4\u300C\u8F6E\u6B21 N\u300D\uFF09\u5373\u6253\u661F\uFF1B\u2605 \u8868\u793A\u5DF2\u6253\u661F\uFF0C\u518D\u70B9\u53EF\u6539\u540D\u6216\u5220\u9664\u3002\u5C0F\u56FE\u6807\u4E0D\u5E72\u6270 Copy / Branch\u3002","bookmark.guide.list.title":"\u5217\u8868\u4E0E\u8DF3\u8F6C","bookmark.guide.list.body":"\u672C Tab \u5217\u51FA\u5F53\u524D\u4F1A\u8BDD\u5168\u90E8\u4E66\u7B7E\uFF08\u6807\u7B7E\u3001\u8F6E\u6B21\u3001\u65F6\u95F4\u3001\u6458\u8981\uFF09\u3002\u70B9\u51FB\u8DF3\u8F6C\uFF1A\u81EA\u52A8\u5207\u56DE\u300C\u5BF9\u8BDD\u300DTab \u5B9A\u4F4D\u5230\u90A3\u4E00\u8F6E\uFF1B\u82E5\u76EE\u6807\u5728\u672A\u52A0\u8F7D\u7684\u5386\u53F2\u7A97\u53E3\uFF0C\u4F1A\u5148\u62C9\u66F4\u65E9\u6D88\u606F\u518D\u5B9A\u4F4D\u3002","bookmark.guide.switch.title":"\u5F00\u5173","bookmark.guide.switch.body":"\u9ED8\u8BA4\u5173\u95ED\uFF1B\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300D\u2192\u300C\u914D\u7F6E\u300D\u6253\u5F00\u300C\u4F1A\u8BDD\u4E66\u7B7E\u300D\u3002\u5173\u95ED\u540E\u661F\u6807\u4E0E\u672C Tab \u9690\u85CF\uFF0C\u5DF2\u5B58\u4E66\u7B7E\u6587\u4EF6\u4FDD\u7559\u3002","panel.guide.bookmark.title":"\u4F1A\u8BDD\u4E66\u7B7E","panel.guide.bookmark.desc":"\u7ED9\u6BCF\u8F6E\u6253\u661F\u6807\u8BB0\uFF0C\u5217\u8868\u4E00\u952E\u8DF3\u56DE\uFF0C\u5E76\u652F\u6301\u4ECE\u4EFB\u610F\u8F6E\u521B\u5EFA\u5B98\u65B9\u5206\u652F\uFF08\u542B\u63A5\u7BA1\u5B98\u65B9\u4E2D\u95F4\u8F6E\u5206\u652F\u6309\u94AE\uFF09\u3002\u72EC\u7ACB\u5F00\u5173\uFF0C\u9ED8\u8BA4\u5173\u3002","panel.config.bookmarkEnabled":"\u4F1A\u8BDD\u4E66\u7B7E","panel.config.bookmarkEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u4E66\u7B7E\uFF1A\u6BCF\u4E2A\u5DF2\u5B8C\u6210\u8F6E\u5C3E\u51FA\u73B0 \u2606 \u661F\u6807\u6309\u94AE + \u300C\u4E66\u7B7E\u300DTab \u5217\u8868\u4E0E\u8DF3\u8F6C\uFF1B\u652F\u6301\u4ECE\u4EFB\u610F\u8F6E\u521B\u5EFA\u5B98\u65B9\u5206\u652F\uFF08\u5217\u8868\u300C\u5206\u652F\u300D\u6309\u94AE\uFF0C\u6216\u76F4\u63A5\u70B9\u5B98\u65B9\u5206\u652F\u6309\u94AE\u2014\u2014\u4E2D\u95F4\u8F6E\u4F1A\u88AB\u63A5\u7BA1\u5E76\u5F39\u786E\u8BA4\uFF09\u3002\u6570\u636E\u5B58\u5728 <memoryDir>/session-bookmarks.json\uFF08\u6309\u4F1A\u8BDD\u9694\u79BB\uFF0C\u6309\u8F6E seq \u5B9A\u4F4D\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u7EAF UI + \u5BBF\u4E3B API\uFF0C\u4E0D\u6CE8\u518C AI \u5DE5\u5177\uFF09\uFF1B\u5173\u95ED\u65F6\u661F\u6807\u4E0E Tab \u9690\u85CF\uFF0C\u6570\u636E\u6587\u4EF6\u4FDD\u7559\u3002","panel.config.todoEnabled":"\u5F85\u529E\u529F\u80FD","panel.config.todoEnabled.hint":"\u542F\u7528 dtodo \u5DE5\u5177\u3001\u5F85\u529E Tab \u548C\u5230\u671F\u63D0\u9192\u3002\u5173\u95ED\u540E\u7ACB\u5373\u9690\u85CF Tab\u3001\u505C\u6B62\u5F85\u529E\u5199\u5165\uFF1B\u73B0\u6709\u5F85\u529E\u6570\u636E\u548C\u540C\u6B65\u8F68\u4FDD\u6301\u4E0D\u53D8\u3002","memoryTab.feature.config":"\u914D\u7F6E","memoryTab.feature.todoSuggestions":"\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE","memoryTab.feature.skills":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","memoryTab.feature.skillBrowser":"\u6280\u80FD\u7BA1\u7406","memoryTab.feature.todo":"\u5F85\u529E","memoryTab.guide.tracks.title":"\u4E94\u8F68\u8BB0\u5FC6\uFF1AAI \u7684\u957F\u671F\u5DE5\u4F5C\u8BB0\u5FC6","memoryTab.guide.tracks.body":"\u8BB0\u5FC6\u6309\u300C\u8BE5\u7ED9\u8C01\u770B\u300D\u5206\u6210\u4E94\u5C42\uFF0C\u6CE8\u5165\u8303\u56F4\u968F\u5C42\u7EA7\u6536\u7A84\u3001\u4E92\u4E0D\u6C61\u67D3\u2014\u2014\u8BE5\u6CE8\u5165\u7684\u81EA\u52A8\u6CE8\u5165\uFF0C\u4E0D\u8BE5\u5360\u4E0A\u4E0B\u6587\u7684\u6309\u9700\u8BFB\u53D6\uFF1A","memoryTab.guide.tracks.item1":"\u7528\u6237\u6863\u6848\uFF08user\uFF09\uFF1A\u4F60\u662F\u8C01\u2014\u2014\u504F\u597D\u3001\u4E60\u60EF\u3001\u6C9F\u901A\u65B9\u5F0F\u3002\u6BCF\u4E2A\u4F1A\u8BDD\u90FD\u6CE8\u5165\uFF0C\u4E0D\u7528\u91CD\u590D\u4ECB\u7ECD\uFF1B","memoryTab.guide.tracks.item2":"\u957F\u671F\u8BB0\u5FC6\uFF08memory\uFF09\uFF1A\u5168\u5C40\u4E8B\u5B9E\u2014\u2014\u73AF\u5883\u3001\u5DE5\u5177\u3001\u901A\u7528\u60EF\u4F8B\u3002\u6BCF\u4E2A\u4F1A\u8BDD\u90FD\u6CE8\u5165\uFF1B","memoryTab.guide.tracks.item3":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF08key\uFF09\uFF1A\u5F53\u524D\u9879\u76EE\u7684\u7EA6\u5B9A\u3001\u51B3\u7B56\u3001\u67B6\u6784\u3001\u8E29\u5751\u3002\u53EA\u6CE8\u5165\u5F53\u524D\u9879\u76EE\u4F1A\u8BDD\uFF0C\u5E76\u6309 git \u5206\u652F\u8FC7\u6EE4\u2014\u2014\u4E0D\u540C\u5206\u652F\u5404\u7528\u5404\u7684\u7EA6\u5B9A\uFF1B","memoryTab.guide.tracks.item4":"\u9879\u76EE\u65E5\u5FD7\uFF08project\uFF09\uFF1A\u5F53\u524D\u9879\u76EE\u7684\u8FDB\u5C55\u6D41\u6C34\u3002\u4E0D\u6CE8\u5165\uFF0CAI \u9700\u8981\u65F6\u6309\u9700\u8BFB\u53D6\uFF0C\u5386\u53F2\u53EF\u8FFD\u6EAF\uFF1B","memoryTab.guide.tracks.item5":"\u4ECA\u65E5\u65E5\u5FD7\uFF08daily\uFF09\uFF1A\u6309\u5929\u8BB0\u5F55\u7684\u5F53\u5929\u8FDB\u5C55\u3002\u4E0D\u6CE8\u5165\uFF0CAI \u9700\u8981\u65F6\u8BFB\u53D6\u2014\u2014\u76F8\u5F53\u4E8E\u6BCF\u5929\u7684\u300C\u5DE5\u4F5C\u65E5\u62A5\u300D\u3002","memoryTab.guide.files.title":"\u6587\u4EF6\u9875\u7B7E\uFF1A\u76F4\u63A5\u770B\u8BB0\u5FC6\u539F\u6587","memoryTab.guide.files.body":"\u672C Tab \u76F4\u63A5\u9884\u89C8 AGENTS.md\uFF08\u5168\u5C40\u89C4\u5219\uFF09\u4E0E\u5168\u90E8\u8BB0\u5FC6\u6587\u4EF6\u3002\u6587\u4EF6\u9875\u7B7E\u662F\u53EA\u8BFB\u7684\u2014\u2014\u4FEE\u6539\u8BF7\u8BA9 AI \u7528 memory \u5DE5\u5177\u3001\u6216\u5728\u672C\u9875\u64CD\u4F5C\uFF0C\u907F\u514D\u624B\u52A8\u7834\u574F \xA7 \u5206\u9694\u683C\u5F0F\u5BFC\u81F4\u8BB0\u5FC6\u89E3\u6790\u9519\u4E71\uFF1A","memoryTab.guide.files.item1":"\u7F8E\u89C2\u89C6\u56FE\uFF1A\u6BCF\u6761\u8BB0\u5FC6\u4EE5\u5361\u7247\u5C55\u793A\uFF08\u65F6\u95F4 / \u5206\u652F / \u6807\u7B7E\u5FBD\u6807 + \u6B63\u6587\uFF09\uFF0C\u53EF\u641C\u7D22\u8FC7\u6EE4\uFF0C\u4E5F\u53EF\u5207\u6362\u7EAF\u6587\u672C\u89C6\u56FE\u770B\u539F\u6587\uFF1B","memoryTab.guide.files.item2":"KEY \u9875\u7B7E\u53EF\u624B\u52A8\u6DFB\u52A0\u957F\u671F\u9879\u76EE\u4E8B\u5B9E\uFF08\u53EF\u540C\u65F6\u6307\u5B9A\u5BF9\u54EA\u4E9B git \u5206\u652F\u751F\u6548\uFF09\uFF0C\u4FDD\u5B58\u540E\u4E0B\u4E00\u8F6E\u81EA\u52A8\u6CE8\u5165\uFF1B","memoryTab.guide.files.item3":"\u6BCF\u6761\u8BB0\u5FC6\u53EF\u7F16\u8F91\uFF08\u5199\u5165\u9700\u786E\u8BA4\uFF09\u3001\u5220\u9664\uFF08\u6309\u5B8C\u6574\u6761\u76EE\u7CBE\u786E\u5339\u914D\uFF0C\u675C\u7EDD\u8BEF\u5220\uFF09\u3001\u5F52\u6863 / \u79FB\u56DE\u4E3B\u8BB0\u5FC6\u3002","memoryTab.guide.branch.title":"git \u5206\u652F\u611F\u77E5\uFF1A\u4E0D\u540C\u5206\u652F\uFF0C\u4E0D\u540C\u7EA6\u5B9A","memoryTab.guide.branch.body":"\u540C\u4E00\u9879\u76EE\u4E0D\u540C\u5206\u652F\u7684\u7EA6\u5B9A\u53EF\u80FD\u5B8C\u5168\u4E0D\u540C\uFF08\u5982 main \u7528\u4E00\u5957\u89C4\u8303\u3001dev \u7528\u53E6\u4E00\u5957\uFF09\uFF0C\u9879\u76EE\u7EA7\u8BB0\u5FC6\u5168\u7A0B\u611F\u77E5\u5F53\u524D\u5206\u652F\uFF1A","memoryTab.guide.branch.item1":"key \u6761\u76EE\u53EF\u5E26\u5206\u652F\u8303\u56F4\u6807\u8BB0\uFF08\u65E0\u6807\u8BB0 = \u5168\u90E8\u5206\u652F\u53EF\u89C1\uFF09\uFF1B\u6CE8\u5165\u65F6\u53EA\u6CE8\u5165\u300C\u65E0\u6807\u8BB0\u300D+\u300C\u8986\u76D6\u5F53\u524D\u5206\u652F\u300D\u7684\u6761\u76EE\uFF1B","memoryTab.guide.branch.item2":"\u65E5\u5FD7\u6761\u76EE\u81EA\u52A8\u5E26\u6765\u6E90\u5206\u652F\u6807\u8BB0\uFF08[git \u5206\u652F\u540D]\uFF09\uFF0C\u8DE8\u5206\u652F\u56DE\u987E\u4E0D\u4F1A\u5F20\u51A0\u674E\u6234\u3002","memoryTab.guide.maintain.title":"\u7F16\u8F91\u4E0E\u7EF4\u62A4\uFF1A\u8BB0\u5FC6\u7684\u65E5\u5E38\u6253\u7406","memoryTab.guide.maintain.body":"\u8BB0\u5FC6\u7684\u7EF4\u62A4\u64CD\u4F5C\u90FD\u5728\u672C Tab \u5B8C\u6210\uFF1A","memoryTab.guide.maintain.item1":"\u7F16\u8F91\u6B63\u6587\uFF1A\u53EA\u6539\u5185\u5BB9\uFF0C\u65F6\u95F4\u6233 / \u5206\u652F / \u6807\u7B7E\u7531\u7A0B\u5E8F\u7EF4\u62A4\uFF1B","memoryTab.guide.maintain.item2":"\u5220\u9664\uFF1A\u6309\u5B8C\u6574\u6761\u76EE\u7CBE\u786E\u5339\u914D\uFF08\u4E0D\u4F1A\u8BEF\u5220\u5305\u542B\u5173\u7CFB\u7684\u957F\u6761\u76EE\uFF09\uFF0C\u5220\u9664\u4E0D\u53EF\u6062\u590D\uFF1B","memoryTab.guide.maintain.item3":"\u5F52\u6863 / \u79FB\u56DE\uFF1A\u4F4E\u9891\u8BB0\u5FC6\u79FB\u51FA\u4E3B\u8F68\u4E0D\u518D\u6CE8\u5165\u3001\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u968F\u65F6\u79FB\u56DE\u3002","memoryTab.guide.suggestions.title":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\uFF1AAI \u53EA\u63D0\u8BAE\uFF0C\u4F60\u62CD\u677F","memoryTab.guide.suggestions.body":"\u540E\u53F0\u5BA1\u67E5\u81EA\u52A8\u63D0\u70BC\u300C\u503C\u5F97\u8BB0\u4F4F\u7684\u4FE1\u606F\u300D\uFF0C\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\u2014\u2014AI \u4E0D\u4F1A\u64C5\u81EA\u5F80\u8BB0\u5FC6\u91CC\u5199\u4E1C\u897F\uFF1A","memoryTab.guide.suggestions.item1":"\u91C7\u7EB3\uFF1A\u53EF\u5148\u4FEE\u6539\u6587\u672C\u3001\u53EF\u9009\u76EE\u6807\u8F68\uFF08\u957F\u671F\u8BB0\u5FC6 / \u7528\u6237\u6863\u6848 / \u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF09\uFF0C\u5199\u5165\u540E\u968F\u5FEB\u7167\u6CE8\u5165\uFF1B","memoryTab.guide.suggestions.item2":"\u5F52\u6863\uFF1A\u4E0D\u6CE8\u5165\u3001\u4EC5\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\uFF1B\u62D2\u7EDD\uFF1A\u76F4\u63A5\u4E22\u5F03\u3002","memoryTab.guide.confirm.title":"\u786E\u8BA4\u5236\uFF1A\u4E3A\u4EC0\u4E48\u5FC5\u987B\u4F60\u70B9\u5934","memoryTab.guide.confirm.body":"\u8BB0\u5FC6\u5199\u5165\u4F1A\u771F\u5B9E\u6539\u53D8 AI \u7684\u884C\u4E3A\u2014\u2014\u5199\u8FDB\u53BB\u5C31\u8FDB\u5165\u4E0A\u4E0B\u6587\u3001\u5F71\u54CD\u540E\u7EED\u6240\u6709\u56DE\u590D\u3002\u6240\u4EE5\u4E00\u5F8B\u5148\u7ECF\u4F60\u786E\u8BA4\uFF0C\u8FD9\u662F\u8BB0\u5FC6\u8FDB\u5316\u7684\u628A\u5173\u73AF\u8282\uFF1A\u4F60\u8BF4\u4E86\u7B97\u3002","skillsTab.guide.what.title":"\u6280\u80FD\u662F\u4EC0\u4E48\uFF1A\u7ED9 AI \u7684\u65B9\u6CD5\u8BBA\u624B\u518C","skillsTab.guide.what.body":"\u6280\u80FD = \u4E00\u4EFD\u7ED9 AI \u770B\u7684\u65B9\u6CD5\u8BBA\u6587\u6863\uFF08SKILL.md\uFF1Aname + description + \u64CD\u4F5C\u6B65\u9AA4\uFF09\u3002\u5B83\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u2014\u2014AI \u9047\u5230\u540C\u7C7B\u4EFB\u52A1\uFF0C\u76F4\u63A5\u6309\u4F60\u7684\u6D41\u7A0B\u6267\u884C\uFF0C\u4E0D\u7528\u91CD\u65B0\u6478\u7D22\uFF1A","skillsTab.guide.what.item1":"\u6280\u80FD\u5E93\u9ED8\u8BA4\u5728 ~/.agents/skills\uFF08\u6BCF\u4E2A\u6280\u80FD\u4E00\u4E2A\u76EE\u5F55\uFF09\uFF1B","skillsTab.guide.what.item2":"DSH \u8FD8\u4F1A\u626B\u63CF\u9879\u76EE\u6280\u80FD\u3001\u5185\u7F6E\u6280\u80FD\u4E0E\u81EA\u5B9A\u4E49\u76EE\u5F55\u2014\u2014\u5168\u90E8\u5728\u672C Tab \u53EF\u89C1\u3001\u53EF\u7BA1\u7406\u3002","skillsTab.guide.how.title":"\u6280\u80FD\u600E\u4E48\u6C89\u6DC0","skillsTab.guide.how.body":"\u628A\u300C\u8E29\u8FC7\u7684\u5751\u3001\u597D\u7528\u7684\u6D41\u7A0B\u300D\u56FA\u5316\u6210\u6280\u80FD\uFF0C\u4E3B\u8981\u6709\u4E24\u6761\u8DEF\uFF1A","skillsTab.guide.how.item1":"\u540E\u53F0\u5BA1\u67E5\u81EA\u52A8\u521B\u5EFA\uFF1AAI \u53D1\u73B0\u53CD\u590D\u51FA\u73B0\u7684\u7ECF\u9A8C\u4F1A\u521B\u5EFA\u65B0\u6280\u80FD\uFF0C\u5148\u8FDB\u300C\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE\u300D\uFF0C\u4F60\u91C7\u7EB3\u540E\u79FB\u5165\u6280\u80FD\u5E93\uFF1B","skillsTab.guide.how.item2":"skill_manage \u5DE5\u5177\uFF1A\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u628A\u8FD9\u4E2A\u6D41\u7A0B\u5B58\u6210\u6280\u80FD\u300D\uFF0C\u5B83\u521B\u5EFA / \u66F4\u65B0\u6280\u80FD\uFF1B","skillsTab.guide.how.item3":"\u521B\u5EFA\u4FDD\u6301\u514B\u5236\uFF1A\u53EA\u5EFA\u300C\u591A\u6B21\u8E29\u5751\u3001\u96BE\u5EA6\u5927\u3001\u540E\u7EED\u590D\u7528\u300D\u7684\u6280\u80FD\u2014\u2014\u6280\u80FD\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\uFF0C\u5F71\u54CD\u4E0A\u4E0B\u6587\u3002","skillsTab.guide.pending.title":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","skillsTab.guide.pending.body":"\u5BA1\u67E5\u81EA\u52A8\u521B\u5EFA\u7684\u65B0\u6280\u80FD\u5728\u8FD9\u91CC\u7B49\u4F60\u786E\u8BA4\uFF1A","skillsTab.guide.pending.item1":"\u91C7\u7EB3\uFF1A\u79FB\u5165\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\uFF0C\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\uFF0C\u6240\u6709\u4F1A\u8BDD\u7ACB\u5373\u53EF\u7528\uFF1B","skillsTab.guide.pending.item2":"\u62D2\u7EDD\uFF1A\u4E22\u5F03\u8BE5\u6280\u80FD\u3002","skillsTab.guide.manager.title":"\u6280\u80FD\u7BA1\u7406\uFF1A\u6D4F\u89C8\u3001\u7F16\u8F91\u3001\u81EA\u5B9A\u4E49\u76EE\u5F55","skillsTab.guide.manager.body":"\u5B8C\u6574\u6280\u80FD\u7BA1\u7406\u5668\uFF08\u4E09\u680F\uFF1A\u6280\u80FD\u5217\u8868 / \u76EE\u5F55\u6811 / \u6587\u4EF6\u67E5\u770B\u7F16\u8F91\uFF09\uFF1A","skillsTab.guide.manager.item1":"\u5168\u90E8\u6280\u80FD\u6309\u6765\u6E90\u5206\u5C42\u5C55\u793A\uFF08\u7528\u6237 user-* / \u81EA\u5B9A\u4E49 custom / \u5185\u7F6E bundled / \u9879\u76EE project-*\uFF09\uFF0C\u53EF\u641C\u7D22\u4E0E\u7B5B\u9009\uFF1B","skillsTab.guide.manager.item2":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55\uFF1A\u6DFB\u52A0 / \u79FB\u9664\u4EFB\u610F\u6280\u80FD\u76EE\u5F55\uFF08<\u76EE\u5F55>/<\u6280\u80FD>/SKILL.md \u6216 <\u76EE\u5F55>/<\u6280\u80FD>.md \u5E03\u5C40\uFF09\uFF1B","skillsTab.guide.manager.item3":"\u6587\u4EF6\u6D4F\u89C8\u4E0E\u7F16\u8F91\uFF1A\u76EE\u5F55\u6811 + \u6587\u672C\u67E5\u770B / \u7F16\u8F91\uFF08\u9650\u6280\u80FD\u76EE\u5F55\u8303\u56F4\u5185\uFF0C\u8D8A\u754C / \u4E8C\u8FDB\u5236 / \u8D85\u5927\u6587\u4EF6\u4F1A\u88AB\u62D2\u7EDD\uFF09\uFF1B","skillsTab.guide.manager.item4":"\u7981\u7528\u5217\u8868\u4E0E\u81EA\u5B9A\u4E49\u76EE\u5F55\u6301\u4E45\u4FDD\u5B58\uFF0C\u91CD\u542F\u540E\u81EA\u52A8\u6062\u590D\u3002","skillsTab.guide.disable.title":"\u7981\u7528 / \u542F\u7528\uFF1A\u628A\u4E0D\u60F3\u8981\u7684\u6280\u80FD\u85CF\u8D77\u6765","skillsTab.guide.disable.body":"\u4E00\u952E\u7981\u7528\u53EF\u4EE5\u628A\u6280\u80FD\u4ECE\u6A21\u578B\u7684\u6280\u80FD\u76EE\u5F55\u4E2D\u79FB\u9664\uFF08\u6A21\u578B\u4E0D\u518D\u770B\u5230\u3001skill \u5DE5\u5177\u62D2\u7EDD\u52A0\u8F7D\uFF09\uFF1A","skillsTab.guide.disable.item1":"\u53EF\u968F\u65F6\u91CD\u65B0\u542F\u7528\uFF0C\u9009\u62E9\u6301\u4E45\u4FDD\u5B58\uFF1B","skillsTab.guide.disable.item2":"\u7CFB\u7EDF\u6280\u80FD\uFF08project \u6765\u6E90\uFF09\u7ED3\u6784\u6027\u4E0D\u53EF\u7981\u7528\u3002","skillsTab.guide.dirs.title":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","skillsTab.guide.dirs.body":"\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300D\u91CC\u76F4\u63A5\u6DFB\u52A0 / \u79FB\u9664\u4F60\u81EA\u5DF1\u7684\u6280\u80FD\u76EE\u5F55\uFF08\u5982 ~/.hermes/skills\uFF09\uFF0C\u4E0E\u5DF2\u6709\u6280\u80FD\u6839\u91CD\u53E0\u7684\u8DEF\u5F84\u4F1A\u88AB\u62D2\u7EDD\uFF1B\u6C38\u4E45\u4FDD\u5B58\u3001\u91CD\u542F\u540E\u81EA\u52A8\u52A0\u8F7D\u3002","skillsTab.guide.restraint.title":"\u521B\u5EFA\u7EAA\u5F8B\uFF1A\u514B\u5236\u624D\u6709\u6548","skillsTab.guide.restraint.body":"\u6280\u80FD\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u3001\u5F71\u54CD\u4E0A\u4E0B\u6587\u4E0E\u7F13\u5B58\u2014\u2014\u521B\u5EFA\u5FC5\u987B\u514B\u5236\uFF1A","skillsTab.guide.restraint.item1":"\u53EA\u521B\u5EFA\u300C\u591A\u6B21\u5C1D\u8BD5\u4ECD\u96BE\u89E3\u51B3\u3001\u96BE\u5EA6\u5927\u3001\u540E\u7EED\u53EF\u80FD\u591A\u6B21\u590D\u7528\u300D\u7684\u6280\u80FD\uFF1B","skillsTab.guide.restraint.item2":"\u4E00\u6B21\u6027\u3001\u7B80\u5355\u4EFB\u52A1\u4E0D\u521B\u5EFA\u6280\u80FD\u3002","todosTab.guide.tracks.title":"\u56DB\u8F68\u5F85\u529E\uFF1A\u4E8B\u60C5\u5404\u5F52\u5176\u4F4D","todosTab.guide.tracks.body":"\u5F85\u529E\u6309\u76EE\u6807\u5206\u56DB\u8F68\uFF0C\u4E0E\u8BB0\u5FC6\u7CFB\u7EDF\u540C\u6784\uFF1A","todosTab.guide.tracks.item1":"\u751F\u6D3B\uFF08life\uFF09\uFF1A\u4E2A\u4EBA\u7410\u4E8B\uFF1B","todosTab.guide.tracks.item2":"\u5DE5\u4F5C\uFF08work\uFF09\uFF1A\u8DE8\u9879\u76EE\u7684\u6B63\u4E8B\uFF1B","todosTab.guide.tracks.item3":"\u672C\u9879\u76EE\uFF08project\uFF09\uFF1A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u5F85\u529E\u2014\u2014\u6362\u4E2A\u76EE\u5F55\u5C31\u770B\u4E0D\u5230\uFF0C\u6309 cwd \u9694\u79BB\uFF1B","todosTab.guide.tracks.item4":"\u4ECA\u65E5\uFF08daily\uFF09\uFF1A\u6309\u5929\u5206\u6587\u4EF6\u7684\u6BCF\u65E5\u5F85\u529E\uFF0C\u53EF\u56DE\u770B\u8FC7\u5F80\uFF08\u6309\u65E5\u671F\u5206\u7EC4\uFF09\u3002","todosTab.guide.add.title":"\u600E\u4E48\u6DFB\u52A0\u5F85\u529E","todosTab.guide.add.body":"\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4EFB\u9009\u5176\u4E00\uFF1A","todosTab.guide.add.item1":"\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u8BB0\u4F4F / \u6211\u8981\u505A X\u300D\uFF08\u53EF\u6307\u660E \u5DE5\u4F5C / \u751F\u6D3B / \u8FD9\u4E2A\u9879\u76EE / \u4ECA\u5929\uFF09\uFF0CAI \u81EA\u52A8\u5F52\u5165\u5BF9\u5E94\u8F68\uFF1B","todosTab.guide.add.item2":"\u5728\u672C Tab \u8F93\u5165\u6846\u624B\u52A8\u6DFB\u52A0\uFF08\u53EF\u9009\u56DB\u8C61\u9650\u4E0E\u622A\u6B62\u65E5\u671F\uFF09\u3002","todosTab.guide.pending.title":"\u5F85\u786E\u8BA4\u5F85\u529E\uFF1AAI \u4E0D\u80FD\u64C5\u81EA\u7ED9\u4F60\u6D3E\u6D3B","todosTab.guide.pending.body":"AI \u81EA\u5EFA\u7684\u5F85\u529E\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u4F60\u786E\u8BA4\u540E\u624D\u751F\u6548\uFF1A","todosTab.guide.pending.item1":"\u91C7\u7EB3\uFF1A\u5199\u5165\u5BF9\u5E94\u5F85\u529E\u8F68\uFF08\u5F85\u529E\u6C38\u8FDC\u662F\u5F85\u529E\uFF0C\u4E0D\u4F1A\u53D8\u6210\u8BB0\u5FC6\uFF09\uFF1B","todosTab.guide.pending.item2":"\u5F52\u6863\uFF1A\u4FDD\u7559\u5907\u67E5\uFF1B\u62D2\u7EDD\uFF1A\u4E22\u5F03\u3002","todosTab.guide.attrs.title":"\u72B6\u6001\u4E0E\u5C5E\u6027","todosTab.guide.attrs.body":"\u6BCF\u6761\u5F85\u529E\u5E26\u5B8C\u6574\u5143\u6570\u636E\uFF0C\u65B9\u4FBF\u8DDF\u8E2A\uFF1A","todosTab.guide.attrs.item1":"\u56DB\u8C61\u9650\uFF08\u91CD\u8981 \xD7 \u7D27\u6025\uFF09\u3001\u622A\u6B62\u65E5\u671F\u3001\u53EF\u9009\u5206\u7C7B\uFF1B","todosTab.guide.attrs.item2":"\u72B6\u6001\uFF1A\u5F85\u529E / \u8FDB\u884C\u4E2D / \u5DF2\u5B8C\u6210\uFF08\u81EA\u52A8\u76D6\u5B8C\u6210\u65F6\u95F4\uFF09/ \u53D7\u963B / \u5DF2\u53D6\u6D88\uFF1B","todosTab.guide.attrs.item3":"\u5217\u8868 / \u770B\u677F\u4E24\u79CD\u89C6\u56FE\uFF1A\u5217\u8868\u6309\u8F68\u5206\u9875\u7B7E + \u72B6\u6001 / \u8C61\u9650\u7B5B\u9009\uFF1B\u770B\u677F\u6309\u56DB\u8C61\u9650\u56DB\u5BAB\u683C\u5C55\u793A\uFF1B\u6BCF\u6761\u53EF\u5B8C\u6210 / \u6062\u590D\u3001\u884C\u5185\u7F16\u8F91\u3001\u5220\u9664\uFF08\u786E\u8BA4\uFF09\u3002","todosTab.guide.view.title":"\u667A\u80FD\u89C6\u56FE\uFF1A\u53EA\u770B\u9700\u8981\u5173\u6CE8\u7684","todosTab.guide.view.body":"\u9ED8\u8BA4\u53EA\u663E\u793A\u9700\u8981\u5173\u6CE8\u7684\uFF08\u903E\u671F / \u4ECA\u65E5\u5230\u671F / \u5F53\u524D\u9879\u76EE / \u91CD\u8981\u7D27\u6025\uFF0C\u6700\u591A 8 \u6761\uFF09\uFF0C\u907F\u514D\u5237\u5C4F\uFF1A","todosTab.guide.view.item1":"\u8FC7\u5F80\u6BCF\u65E5\u5F85\u529E\u6309\u9700\u8BFB\u53D6\u2014\u2014\u70B9\u300C\u8FC7\u5F80\u300D\u9875\u7B7E\u624D\u67E5\u8BE2\u5386\u53F2\uFF1B","todosTab.guide.view.item2":"\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u52FE\u9009\u540E\u624D\u5C55\u793A\u8FC7\u671F\u7684\u9057\u7559\uFF08\u9ED8\u8BA4\u9690\u85CF\uFF0C\u4E0D\u589E\u52A0\u8D1F\u62C5\uFF09\u3002","todosTab.guide.remind.title":"\u5230\u671F\u63D0\u9192\uFF1AAI \u66FF\u4F60\u76EF\u7740","todosTab.guide.remind.body":"AI \u6BCF\u8F6E\u6536\u5C3E\u81EA\u52A8\u68C0\u67E5\u5F85\u529E\u5230\u671F\u60C5\u51B5\uFF0C\u6709\u5230\u671F\u672A\u5B8C\u6210\u9879\u5C31\u5728\u56DE\u590D\u672B\u5C3E\u63D0\u9192\u4F60\u2014\u2014\u4E0D\u7528\u81EA\u5DF1\u8BB0\u7740\u76EF\u3002","todo.track.life":"\u751F\u6D3B","todo.track.all":"\u5168\u90E8","todo.track":"\u5F85\u529E\u8F68","todo.track.work":"\u5DE5\u4F5C","todo.track.project":"\u672C\u9879\u76EE","todo.track.daily":"\u4ECA\u65E5","todo.track.past":"\u8FC7\u5F80","todo.projectHint":"\u5F53\u524D\u4F1A\u8BDD\u65E0\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u9879\u76EE\u5F85\u529E\u4E0D\u53EF\u7528\uFF08\u53EA\u6709 \u751F\u6D3B/\u5DE5\u4F5C/\u4ECA\u65E5\uFF09\u3002","todo.help":"\u56DB\u8F68\u5F85\u529E\uFF1A\u751F\u6D3B=\u4E2A\u4EBA\u7410\u4E8B\uFF1B\u5DE5\u4F5C=\u8DE8\u9879\u76EE\u7684\u6B63\u4E8B\uFF1B\u672C\u9879\u76EE=\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u5F85\u529E\uFF08\u6362\u4E2A\u76EE\u5F55\u770B\u4E0D\u5230\uFF09\uFF1B\u4ECA\u65E5=\u4ECA\u5929\u8981\u505A\u7684\uFF08\u6309\u5929\u5206\u6587\u4EF6\uFF09\u3002\u6BCF\u65E5\u7684\u8FC7\u5F80\u5F85\u529E\uFF08\u4ECA\u5929\u4E4B\u524D\uFF09\u9ED8\u8BA4\u4E0D\u8BFB\u53D6\u2014\u2014\u70B9\u300C\u8FC7\u5F80\u300D\u9875\u7B7E\u6216\u52FE\u9009\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u624D\u4F1A\u67E5\u8BE2\u5386\u53F2\uFF08\u5DF2\u8FC7\u671F\u7684\u9057\u7559\u9ED8\u8BA4\u9690\u85CF\uFF0C\u52FE\u9009\u540E\u5168\u90E8\u663E\u793A\uFF09\u3002\u6DFB\u52A0\uFF1A\u8F93\u5165\u5185\u5BB9\uFF0C\u53EF\u9009\u56DB\u8C61\u9650\uFF08\u91CD\u8981\xD7\u7D27\u6025\uFF09\u4E0E\u622A\u6B62\u65E5\u671F\uFF0C\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u6216\u76F4\u63A5\u5BF9\u6211\u8BF4\u201C\u5E2E\u6211\u52A0\u4E2A\u5F85\u529E\uFF0C\u662F\u5DE5\u4F5C\u4E0A\u7684/\u751F\u6D3B\u4E2D\u7684/\u8FD9\u4E2A\u9879\u76EE\u7684/\u4ECA\u5929\u8981\u7684\u201D\u2014\u2014\u6211\u4F1A\u6309\u7C7B\u522B\u5199\u5165\u5BF9\u5E94\u8F68\u3002","todo.showExpired":"\u663E\u793A\u5DF2\u8FC7\u671F","todo.pastHint":"\u8FC7\u5F80\u5F85\u529E\u5927\u591A\u662F\u5DF2\u8FC7\u671F\u7684\u9057\u7559\uFF0C\u9ED8\u8BA4\u5DF2\u9690\u85CF\uFF1B\u52FE\u9009\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u5373\u53EF\u67E5\u770B\u3002","todo.addPlaceholder":"\u8F93\u5165\u5F85\u529E\u5185\u5BB9\uFF08\u53EF\u591A\u884C\uFF09\uFF0C\u9009\u62E9\u8C61\u9650/\u622A\u6B62\u540E\u6DFB\u52A0\u2026","todo.add":"\u6DFB\u52A0","todo.added":"\u5DF2\u6DFB\u52A0\u5F85\u529E","todo.done":"\u5B8C\u6210","todo.undone":"\u6062\u590D","todo.edit":"\u7F16\u8F91","todo.save":"\u4FDD\u5B58","todo.cancel":"\u53D6\u6D88","todo.updated":"\u5DF2\u66F4\u65B0","todo.deleted":"\u5DF2\u5220\u9664","todo.deleteConfirm":`\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u5F85\u529E\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002

{snippet}`,"todo.due":"\u622A\u6B62","todo.overdue":"\u903E\u671F","todo.all":"\u5168\u90E8","todo.filterStatus":"\u72B6\u6001","todo.filterQuadrant":"\u8C61\u9650","todo.status.active":"\u672A\u5B8C\u6210","todo.status.pending":"\u5F85\u529E","todo.status.doing":"\u8FDB\u884C\u4E2D","todo.status.done":"\u5DF2\u5B8C\u6210","todo.status.blocked":"\u53D7\u963B","todo.status.cancelled":"\u5DF2\u53D6\u6D88","todo.quadrant":"\u56DB\u8C61\u9650","todo.quadrant.none":"\u672A\u5206\u7C7B","todo.quadrant.q1":"\u91CD\u8981\u7D27\u6025","todo.quadrant.q2":"\u91CD\u8981\u4E0D\u7D27\u6025","todo.quadrant.q3":"\u7D27\u6025\u4E0D\u91CD\u8981","todo.quadrant.q4":"\u4E0D\u91CD\u8981\u4E0D\u7D27\u6025","todo.empty":"\uFF08\u6682\u65E0\u5F85\u529E\uFF0C\u6DFB\u52A0\u4E00\u6761\u5427\uFF09","todo.view.mode":"\u89C6\u56FE","todo.view.list":"\u5217\u8868","todo.view.board":"\u770B\u677F","todo.board.empty":"\u6B64\u8C61\u9650\u6682\u65E0\u5F85\u529E","todo.board.cycleStatus":"\u70B9\u51FB\u5207\u6362\u72B6\u6001","memoryTab.cwd":"\u5F53\u524D\u4F1A\u8BDD\u5DE5\u4F5C\u76EE\u5F55","memoryTab.loading":"\u52A0\u8F7D\u4E2D\u2026","memoryTab.warning":"\u4EE5\u4E0B\u6587\u4EF6\u4E3A \xA7 \u5206\u9694\u7684\u7ED3\u6784\u5316\u8BB0\u5FC6\uFF0C\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00\u540E\u8BF7\u8C28\u614E\u7F16\u8F91\uFF0C\u968F\u610F\u4FEE\u6539\u53EF\u80FD\u7834\u574F\u683C\u5F0F\u3001\u5BFC\u81F4\u8BB0\u5FC6\u8BFB\u53D6\u9519\u4E71\u3002","memoryTab.readonly":"\u53EA\u8BFB","memoryTab.open":"\u6253\u5F00\u6587\u4EF6","memoryTab.opened":"\u5DF2\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00","memoryTab.empty":"\uFF08\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A\uFF09","memoryTab.noCwd":"\uFF08\u5F53\u524D\u4F1A\u8BDD\u65E0\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u65E0\u6CD5\u5B9A\u4F4D\u9879\u76EE\u8BB0\u5FC6\uFF09","memoryTab.truncated":"\uFF08\u5185\u5BB9\u8FC7\u957F\uFF0C\u5DF2\u622A\u65AD\u663E\u793A\uFF09","memoryTab.pagePrev":"\u4E0A\u4E00\u9875","memoryTab.pageNext":"\u4E0B\u4E00\u9875","memoryTab.pageInfo":"\u7B2C {page}/{total} \u9875 \xB7 \u5171 {count} \u6761","memoryTab.viewPretty":"\u7F8E\u89C2\u89C6\u56FE","memoryTab.viewRaw":"\u7EAF\u6587\u672C\u89C6\u56FE","memoryTab.searchPlaceholder":"\u641C\u7D22\u5185\u5BB9\u3001\u65F6\u95F4\u6216\u6807\u7B7E\u2026","memoryTab.noResults":"\u6CA1\u6709\u5339\u914D\u7684\u6761\u76EE\uFF0C\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002","memoryTab.projectTag":"\u9879\u76EE\u6807\u7B7E","memoryTab.entryCount":"{count} \u6761","memoryTab.keyAddHelp":"\u624B\u52A8\u6DFB\u52A0\u4E00\u6761\u957F\u671F\u6709\u6548\u7684\u9879\u76EE\u4E8B\u5B9E\uFF08\u7EA6\u5B9A/\u51B3\u7B56/\u67B6\u6784/\u8E29\u5751\uFF09\uFF0C\u4FDD\u5B58\u540E\u5199\u5165 KEY.md\uFF0C\u4E0B\u4E00\u8F6E\u81EA\u52A8\u6CE8\u5165\u4E0A\u4E0B\u6587\u3002","memoryTab.keyAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u9879\u76EE\u91CD\u8981\u8BB0\u5FC6\uFF0C\u4F8B\u5982\uFF1A\u672C\u9879\u76EE\u7EA6\u5B9A\u4F7F\u7528 pnpm workspaces\u2026","memoryTab.keyAdd":"\u4FDD\u5B58","memoryTab.keyAdded":"\u5DF2\u5199\u5165\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF0C\u4E0B\u4E00\u8F6E\u5C06\u6CE8\u5165\u4E0A\u4E0B\u6587","memoryTab.memoryAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u60F3\u957F\u671F\u8BB0\u4F4F\u7684\u5168\u5C40\u4E8B\u5B9E/\u60EF\u4F8B/\u73AF\u5883\uFF0C\u4F8B\u5982\uFF1A\u516C\u53F8\u5185\u90E8 Nexus \u4ED3\u5E93\u5730\u5740\u2026","memoryTab.userAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u7528\u6237\u504F\u597D/\u4E60\u60EF/\u6C9F\u901A\u65B9\u5F0F\uFF0C\u4F8B\u5982\uFF1A\u56DE\u590D\u9ED8\u8BA4\u7528\u4E2D\u6587\u2026","memoryTab.memoryUserAddHelp":"\u624B\u52A8\u5199\u5165\u975E\u9879\u76EE\u7EA7\u957F\u671F\u8BB0\u5FC6\uFF08\u5168\u5C40\u4E8B\u5B9E / \u7528\u6237\u6863\u6848\uFF09\uFF0C\u65E5\u671F\u81EA\u52A8\u76D6\u6233\uFF0C\u4E0B\u4E00\u8F6E\u5168\u5C40\u6CE8\u5165\u751F\u6548\u3002","memoryTab.memoryAdd":"\u4FDD\u5B58","memoryTab.memoryUserAdded":"\u5DF2\u5199\u5165\uFF0C\u4E0B\u4E00\u8F6E\u8D77\u5168\u5C40\u6CE8\u5165\u751F\u6548","memoryTab.delete":"\u5220\u9664","memoryTab.deleteConfirm":`\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u8BB0\u5FC6\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002

{snippet}`,"memoryTab.deleted":"\u5DF2\u5220\u9664\u8BE5\u6761\u76EE","memoryTab.edit":"\u7F16\u8F91","memoryTab.save":"\u4FDD\u5B58","memoryTab.cancel":"\u53D6\u6D88","memoryTab.updated":"\u5DF2\u66F4\u65B0\u8BE5\u6761\u76EE","memoryTab.editHint":"\u53EA\u80FD\u4FEE\u6539\u5185\u5BB9\uFF1A\u65F6\u95F4\u6233\u4E0E\u5206\u652F\u7B49\u6807\u8BB0\u7531\u7A0B\u5E8F\u7EF4\u62A4\uFF0C\u4E0D\u80FD\u6539\u52A8\uFF1B\u5206\u9694\u7B26 \xA7 \u4E0D\u53EF\u8F93\u5165\u3002","memoryTab.editConfirm":`\u8FD9\u6761\u8BB0\u5FC6\u4FDD\u5B58\u540E\u4F1A\u7ACB\u5373\u6CE8\u5165\u4F1A\u8BDD\u4E0A\u4E0B\u6587\uFF08\u8FDB\u5165\u540E\u7EED\u6A21\u578B\u7684\u63D0\u793A\u8BCD\uFF09\uFF0C\u786E\u5B9A\u4FDD\u5B58\uFF1F

{snippet}`,"memoryTab.archive":"\u5F52\u6863","memoryTab.archiveConfirm":`\u5F52\u6863\u8FD9\u6761\u8BB0\u5FC6\uFF1F\u5C06\u4ECE\u4E3B\u8BB0\u5FC6\u79FB\u5165\u5F52\u6863\u6587\u4EF6\uFF0C\u4E0D\u518D\u6CE8\u5165\u4F1A\u8BDD\uFF1B\u9700\u8981\u65F6\u53EF\u968F\u65F6\u79FB\u56DE\u3002

{snippet}`,"memoryTab.archived":"\u5DF2\u5F52\u6863\uFF08\u4E0D\u518D\u6CE8\u5165\uFF0C\u53EF\u968F\u65F6\u79FB\u56DE\uFF09","memoryTab.promote":"\u79FB\u56DE\u4E3B\u8BB0\u5FC6","memoryTab.promoted":"\u5DF2\u79FB\u56DE\u4E3B\u8BB0\u5FC6\uFF08\u91CD\u65B0\u6CE8\u5165\u4F1A\u8BDD\uFF09","memoryTab.keyScope":"\u5206\u652F\u8303\u56F4","memoryTab.keyScopeLabel":"\u5206\u652F","memoryTab.keyScopeAll":"\u5168\u90E8","memoryTab.keyScopeAllHint":"\u5168\u90E8 = \u6240\u6709\u5206\u652F\u53EF\u89C1","memoryTab.keyScopeAllWeight":"\uFF08\u52FE\u9009\u540E\u6E05\u7A7A\u5206\u652F\u9009\u62E9\uFF09","memoryTab.keyScopeHint":"\u70B9\u51FB\u4FEE\u6539\u5206\u652F\u8303\u56F4","memoryTab.keyScopeSaved":"\u5206\u652F\u8303\u56F4\u5DF2\u66F4\u65B0","memoryTab.keyScopeSave":"\u4FDD\u5B58","memoryTab.keyScopeCancel":"\u53D6\u6D88","memoryTab.keyBranchInfo":"\u5F53\u524D\u5206\u652F\uFF1A{branch}\uFF0C\u4EC5\u6CE8\u5165\u65E0\u6807\u8BB0\u6216\u542B\u8BE5\u5206\u652F\u7684\u6761\u76EE","memoryTab.gitBranch":"\u8BE5\u6761\u8BB0\u5F55\u6240\u5C5E\u7684 git \u5206\u652F","memoryTab.dshOnly":"\u4EC5DSH","memoryTab.dshOnlyHint":"\u8BE5\u6761\u76EE\u53EA\u6CE8\u5165 DSH \u81EA\u8EAB\u4F1A\u8BDD\uFF1B\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF08COI \u4EFB\u52A1\uFF09\u65F6\u81EA\u52A8\u8DF3\u8FC7\u2014\u2014\u7528\u4E8E\u5B58\u653E\u53EA\u5BF9 DSH \u6709\u610F\u4E49\u7684\u7EAA\u5F8B/\u89C4\u5219/\u67B6\u6784\u7C7B\u4E8B\u5B9E","memoryTab.dshOnlyOn":"\u4EC5DSH","memoryTab.dshOnlyOff":"\u53D6\u6D88\u4EC5DSH","memoryTab.dshOnlySet":"\u5DF2\u6807\u8BB0\u4E3A\u4EC5 DSH \u9002\u7528\uFF08\u5916\u90E8\u6267\u884C\u5668\u6CE8\u5165\u65F6\u8DF3\u8FC7\uFF09","memoryTab.dshOnlyRemoved":"\u5DF2\u53D6\u6D88\u4EC5 DSH \u6807\u8BB0\uFF08\u5916\u90E8\u6267\u884C\u5668\u53EF\u89C1\uFF09","memoryTab.dshOnlyToggleHint":"\u5207\u6362\u300C\u4EC5 DSH\u300D\u6807\u8BB0\uFF1A\u8BE5\u6761\u76EE\u53EA\u6CE8\u5165 DSH \u81EA\u8EAB\uFF0C\u4E0D\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF08COI\uFF09","memoryTab.dshOnlyAdd":"\u4EC5 DSH \u9002\u7528\uFF08\u4E0D\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF09","memoryTab.desc.project":"\u9879\u76EE\u65E5\u5FD7\uFF1A\u6BCF\u56DE\u5408\u6536\u5C3E\u81EA\u52A8\u8BB0\u5F55\u672C\u56DE\u5408\u8FDB\u5C55\uFF1B\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u6A21\u578B\u6309\u9700\u8BFB\u53D6\u3002","memoryTab.desc.key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF1A\u957F\u671F\u7EA6\u5B9A/\u51B3\u7B56/\u8E29\u5751\uFF0C\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u9879\u76EE\u4F1A\u8BDD\uFF1B\u6309\u91CD\u8981\u6027\u5199\u5165\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0\u6216\u5220\u9664\u3002","memoryTab.desc.daily":"\u4ECA\u65E5\u65E5\u5FD7\uFF1A\u6309\u5929\u5206\u6587\u4EF6\u7684\u6D41\u6C34\u8BB0\u5F55\uFF0C\u7A0B\u5E8F\u81EA\u52A8\u6807\u6CE8\u9879\u76EE\u6807\u7B7E\uFF1B\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u6A21\u578B\u6309\u9700\u8BFB\u53D6\u3002","memoryTab.desc.user":"\u7528\u6237\u6863\u6848\uFF1A\u7528\u6237\u504F\u597D\u4E0E\u4E60\u60EF\uFF0C\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF1B\u5199\u5165\u9700\u5BA1\u67E5\u5EFA\u8BAE\u5E76\u7ECF\u786E\u8BA4\u3002","memoryTab.desc.memory":"\u957F\u671F\u8BB0\u5FC6\uFF1A\u5168\u5C40\u73AF\u5883\u4E0E\u9879\u76EE\u4E8B\u5B9E\uFF0C\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF1B\u5199\u5165\u9700\u5BA1\u67E5\u5EFA\u8BAE\u5E76\u7ECF\u786E\u8BA4\u3002","memoryTab.desc.archive-user":"\u5F52\u6863\u7528\u6237\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\u7684\u7528\u6237\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.archive-memory":"\u5F52\u6863\u8BB0\u5FC6\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\u7684\u5168\u5C40\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.archive-key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u5F52\u6863\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\uFF08\u6216\u9700\u6682\u505C\u6CE8\u5165\uFF09\u7684\u9879\u76EE\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.agents":"\u5168\u5C40\u89C4\u5219\uFF1A\u8DE8\u4F1A\u8BDD\u751F\u6548\u7684\u7528\u6237\u89C4\u5219\uFF08AGENTS.md\uFF09\uFF0C\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\u3002","panel.suggestions.title":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE","panel.suggestions.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u5EFA\u8BAE\u3002","panel.suggestions.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u5168\u5C40\u8BB0\u5FC6\u5EFA\u8BAE\uFF1A\u91C7\u7EB3\u540E\u5199\u5165\u8BB0\u5FC6\u6587\u4EF6\u5E76\u968F\u5FEB\u7167\u6CE8\u5165\uFF1B\u5F52\u6863\u4FDD\u7559\u5907\u67E5\uFF08\u4E0D\u6CE8\u5165\uFF09\uFF1B\u62D2\u7EDD\u4E22\u5F03\u3002","panel.todoSuggestions.title":"\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE","panel.todoSuggestions.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u5F85\u529E\u5EFA\u8BAE\u3002","panel.todoSuggestions.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u5F85\u529E\u5EFA\u8BAE\uFF1A\u91C7\u7EB3\u540E\u5199\u5165\u5BF9\u5E94\u5F85\u529E\u8F68\uFF08\u5F85\u529E\u4E0D\u80FD\u53D8\u6210\u8BB0\u5FC6\uFF09\uFF1B\u5F52\u6863\u4FDD\u7559\u5907\u67E5\uFF1B\u62D2\u7EDD\u4E22\u5F03\u3002","panel.guide.title":"\u4F7F\u7528\u6307\u5357","panel.guide.intro":"memory-evolve \u662F\u300C\u8BB0\u5FC6\u4E0E\u81EA\u6211\u8FDB\u5316\u300D\u80FD\u529B\u96C6\u5408\uFF1A\u8BA9 AI \u628A\u5BF9\u8BDD\u6C89\u6DC0\u4E3A\u957F\u671F\u8BB0\u5FC6\u3001\u5F85\u529E\u548C\u6280\u80FD\u2014\u2014\u8D8A\u7528\u8D8A\u61C2\u4F60\uFF0C\u8DE8\u4F1A\u8BDD\u4E0D\u4E22\u4E0A\u4E0B\u6587\u3002\u4E0B\u9762\u6309\u6A21\u5757\u4ECB\u7ECD\u80FD\u505A\u4EC0\u4E48\u3001\u600E\u4E48\u7528\u3002","panel.guide.memory.title":"\u8BB0\u5FC6\u8BFB\u5199\uFF08memory \u5DE5\u5177\uFF09","panel.guide.memory.desc":"\u4E94\u8F68\u8BB0\u5FC6\uFF1A\u957F\u671F\u8BB0\u5FC6\uFF08\u5168\u5C40\uFF09\u3001\u7528\u6237\u6863\u6848\u3001\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF08\u81EA\u52A8\u6CE8\u5165\uFF0C\u4E14\u6309 git \u5206\u652F\u8FC7\u6EE4\u2014\u2014\u53EA\u6709\u5F53\u524D\u5206\u652F\u76F8\u5173\u7684\u5173\u952E\u8BB0\u5FC6\u8FDB\u5165 AI \u4E0A\u4E0B\u6587\uFF09\u3001\u9879\u76EE\u65E5\u5FD7\u3001\u4ECA\u65E5\u65E5\u5FD7\u3002\u600E\u4E48\u7528\uFF1A\u6B63\u5E38\u5BF9\u8BDD\u5373\u53EF\u2014\u2014AI \u6BCF\u56DE\u5408\u81EA\u52A8\u628A\u8FDB\u5C55\u5199\u8FDB\u65E5\u5FD7\uFF1B\u53D1\u73B0\u91CD\u8981\u4E8B\u5B9E\u5C31\u8BF4\u300C\u8BB0\u4E00\u4E0B\uFF1A\u8FD9\u4E2A\u9879\u76EE\u7684\u90E8\u7F72\u7AEF\u53E3\u662F 8080\u300D\uFF1B\u6362\u9879\u76EE / \u9694\u5929\u7EE7\u7EED\u65F6\u76F4\u63A5\u95EE AI\u300C\u67E5\u4E00\u4E0B\u8BB0\u5FC6\u300D\uFF0C\u5B83\u65E0\u7F1D\u8854\u63A5\uFF0C\u4E0D\u7528\u4F60\u590D\u8FF0\u3002","panel.guide.review.title":"\u8BB0\u5FC6\u5BA1\u67E5\uFF08\u81EA\u52A8\u8FDB\u5316\uFF09","panel.guide.review.desc":"\u6BCF\u9694 N \u8F6E\uFF08\u9ED8\u8BA4 10 \u8F6E\uFF0C\u914D\u7F6E\u91CC\u53EF\u6539\uFF09AI \u81EA\u52A8\u56DE\u987E\u4F1A\u8BDD\u3001\u63D0\u70BC\u503C\u5F97\u8BB0\u4F4F\u7684\u4FE1\u606F\uFF0C\u63D0\u4EA4\u5230\u300C\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\u300D\u7531\u4F60\u786E\u8BA4\u540E\u751F\u6548\u2014\u2014AI \u4E0D\u4F1A\u64C5\u81EA\u5F80\u8BB0\u5FC6\u91CC\u5199\u4E1C\u897F\u3002\u5076\u5C14\u53BB\u300C\u8BB0\u5FC6\u300DTab \u7684\u5F85\u786E\u8BA4\u961F\u5217\u91CC\u91C7\u7EB3\u6216\u62D2\u7EDD\u5373\u53EF\u3002","panel.guide.todo.title":"\u5F85\u529E\u7BA1\u7406\uFF08dtodo\uFF09","panel.guide.todo.desc":"\u5BF9 AI \u8BF4\u300C\u8BB0\u4F4F / \u6211\u8981\u505A X\u300D\u5373\u843D\u6210\u7ED3\u6784\u5316\u5F85\u529E\uFF08\u81EA\u52A8\u5206 \u751F\u6D3B / \u5DE5\u4F5C / \u9879\u76EE / \u6BCF\u65E5\uFF0C\u53EF\u8BBE\u91CD\u8981\u7D27\u6025\u4E0E\u622A\u6B62\u65E5\u671F\uFF09\uFF0C\u5230\u671F AI \u4F1A\u5728\u56DE\u590D\u672B\u5C3E\u63D0\u9192\u4F60\uFF1BAI \u81EA\u5EFA\u7684\u5F85\u529E\u5148\u8FDB\u300C\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE\u300D\u7B49\u4F60\u786E\u8BA4\u3002\u7BA1\u7406\u754C\u9762\u5728\u300C\u5F85\u529E\u300DTab\u3002","panel.guide.skill.title":"\u6280\u80FD\u6C89\u6DC0\uFF08skill_manage\uFF09","panel.guide.skill.desc":"\u53CD\u590D\u8E29\u5751\u7684\u65B9\u6CD5\u8BBA\u53EF\u56FA\u5316\u4E3A\u6280\u80FD\uFF0C\u540C\u7C7B\u4EFB\u52A1\u4E0B\u6B21\u76F4\u63A5\u6309\u6D41\u7A0B\u6267\u884C\u3002\u5BF9 AI \u8BF4\u300C\u628A\u8FD9\u4E2A\u6D41\u7A0B\u5B58\u6210\u6280\u80FD\u300D\u5373\u53EF\uFF1B\u521B\u5EFA\u4FDD\u6301\u514B\u5236\uFF0C\u53EA\u5EFA\u9AD8\u590D\u7528\u4EF7\u503C\u7684\u3002\u6280\u80FD\u5E93\u53EF\u5728\u300C\u6280\u80FD\u300DTab \u91CC\u6D4F\u89C8\u3001\u641C\u7D22\u5E76\u4E00\u952E\u542F\u7528 / \u7981\u7528\u3002","panel.guide.search.title":"\u672C\u5730\u641C\u7D22\uFF08memory_evolve_search_local_files\uFF09","panel.guide.search.desc":"\u8BB0\u5FC6\u91CC\u6CA1\u6709\u3001\u8981\u627E\u672C\u5730\u8D44\u6599\u65F6\uFF0C\u5BF9 AI \u8BF4\u300C\u641C\u4E00\u4E0B\u672C\u673A\u6709\u6CA1\u6709 XX\u300D\u2014\u2014\u6309\u6587\u4EF6\u540D\u627E\uFF08\u9ED8\u8BA4\u53EA\u641C\u6587\u6863\u6269\u5C55\u540D\uFF0C\u53EF\u663E\u5F0F\u5168\u7C7B\u578B\uFF09\uFF1B\u300C\u54EA\u4E2A\u6587\u6863\u91CC\u63D0\u8FC7 XX\u300D\u5219\u662F\u6309\u5185\u5BB9\u641C\uFF0C\u76F4\u63A5\u8FD4\u56DE\u547D\u4E2D\u6587\u4EF6\u548C\u7247\u6BB5\u3002\u56DB\u6863\u6A21\u5F0F\u5728\u300C\u914D\u7F6E\u300D\u91CC\u9009\uFF1A\u6587\u4EF6\u540D + \u5185\u5BB9 / \u4EC5\u6587\u4EF6\u540D / \u4EC5\u5185\u5BB9 / \u5173\u95ED\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1\uFF0C\u6253\u5F00\u624D\u751F\u6548\u3002","panel.guide.coi.title":"COI \u8C03\u5EA6\uFF08de_coi\uFF09","panel.guide.coi.desc":"\u628A\u4EFB\u52A1\u6D3E\u7ED9\u5916\u90E8 CLI \u4EE3\u7406\uFF08kimi / codex / grok / hermes \u7B49\uFF09\uFF1A\u7EDF\u4E00\u8C03\u5EA6\u4E0D\u5361\u4E3B\u8FDB\u7A0B\u3001\u5B9E\u65F6\u770B\u8FDB\u5EA6\u3001\u4F1A\u8BDD\u81EA\u52A8\u5206\u5C42\u7BA1\u7406\u53EF\u4E00\u952E\u6062\u590D\u3001\u8DE8 COI \u63A5\u529B\u3001\u4EFB\u52A1\u7ED3\u679C\u7559\u6863\u5E76\u6C89\u6DC0\u5230\u8BB0\u5FC6\u3002\u8BF4\u300C\u6D3E\u7ED9 kimi / codex \u505A XX\u300D\u5373\u53EF\uFF0C\u6216\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300DTab \u624B\u52A8\u53D1\u8D77\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300D\u5F00\u5173\uFF08\u5DE5\u5177\u5373\u65F6\u751F\u6548\uFF0CTab \u5237\u65B0\u540E\u51FA\u73B0\uFF09\u3002","panel.guide.prompt.title":"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\uFF08Prompt Manager\uFF09","panel.guide.prompt.desc":"\u628A\u5E38\u7528\u7684\u5DE5\u4F5C\u8303\u5F0F\u56FA\u5316\u6210\u63D0\u793A\u8BCD\u8D44\u4EA7\uFF1A\u9009\u4E2D\u4E00\u6761\u5373\u53EF\u6CE8\u5165\u2014\u2014\u5199\u5165\u540E\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF1B\u652F\u6301\u4E00\u6B21\u6027\u3001\u6301\u7EED N \u8F6E\u3001\u6BCF M \u56DE\u5408\u63D0\u9192\u4E00\u6B21\uFF08\u6B21\u6570 / \u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\uFF0C\u6309\u5BF9\u8BDD\u56DE\u5408\u8BA1\u6570\u81EA\u52A8\u8FC7\u671F\uFF09\uFF0C\u300C\u6CE8\u5165\u4E2D\u300D\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u4E5F\u652F\u6301\u4E34\u65F6\u6CE8\u5165\uFF1A\u4E0D\u5EFA\u63D0\u793A\u8BCD\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u6CE8\u5165\uFF0C\u81EA\u52A8\u5B58\u5165\u5E93\u4E2D\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u300D\u5F00\u5173\uFF0CTab \u5237\u65B0\u540E\u51FA\u73B0\u3002","panel.guide.models.title":"\u6A21\u578B\u8BBE\u7F6E\uFF08de_models\uFF09","panel.guide.models.desc":"\u300C\u6A21\u578B\u8BBE\u7F6E\u300DTab + de_models \u5DE5\u5177\uFF1A\u8868\u683C\u4E00\u89C8 DSH \u73B0\u6709\u4F9B\u5E94\u5546\u4E0E\u6A21\u578B\uFF0C\u7ED9\u6BCF\u4E2A\u6A21\u578B\u8BBE\u7F6E\u300C\u63D2\u4EF6\u4FA7\u300D\u7684\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u4E0E\u53EF\u7528 / \u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF08\u53EF\u52FE\u9009\u7B49\u7EA7\u767D\u540D\u5355\u3001\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF09\u2014\u2014\u8FD9\u4E9B\u914D\u7F6E\u53EA\u5BF9\u672C\u63D2\u4EF6\u6709\u7528\uFF08\u51B3\u5B9A de_models \u67E5\u8BE2\u53E3\u5F84\u4E0E Tab \u5C55\u793A\uFF09\uFF0C\u4E0D\u4FEE\u6539\u3001\u4E5F\u4E0D\u5F71\u54CD DSH \u81EA\u8EAB\u7684\u6A21\u578B\u8BBE\u7F6E\uFF08DSH \u7684\u6A21\u578B\u914D\u7F6E\u4ECD\u4EE5\u5B98\u65B9\u300C\u8BBE\u7F6E \u2192 \u6A21\u578B\u300D\u4E3A\u51C6\uFF09\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u6A21\u578B\u8BBE\u7F6E\u300D\u5F00\u5173\u540E\uFF0CTab \u5237\u65B0\u51FA\u73B0\u3001de_models \u5DE5\u5177\u751F\u6548\u3002","panel.guide.advisor.title":"\u4F1A\u8BDD\u8BC4\u5BA1\uFF08Advisor\uFF09","panel.guide.advisor.desc":"\u7ED9\u6BCF\u4E2A\u4F1A\u8BDD\u6302\u4E00\u4E2A\u72EC\u7ACB\u8BC4\u5BA1\u5458\u2014\u2014\u5B83\u53EA\u89C2\u5BDF\u4F60\u5728\u754C\u9762\u4E0A\u770B\u5230\u7684\u5BF9\u8BDD\uFF08\u4E0D\u542B\u601D\u8003 / \u5DE5\u5177\u8C03\u7528\uFF09\uFF0C\u6BCF\u8F6E\u5B9E\u65F6\u8BC4\u5BA1\uFF0C\u9700\u8981\u65F6\u4EE5\u300C\u7528\u6237\u6307\u4EE4\u300D\u7684\u5F62\u5F0F\u63D0\u9192\u4F60\uFF08info / nit / concern / blocker \u56DB\u7EA7\uFF1Binfo \u9ED8\u8BA4\u4EC5\u8BB0\u5F55\uFF1B\u5BF9\u8BDD\u6D41\u4E2D\u4EE5\u6298\u53E0\u884C [severity] \u663E\u793A\uFF0C\u65B9\u4FBF\u4F60\u8BA4\u51FA\u54EA\u4E9B\u8BDD\u662F\u8BC4\u5BA1\u5458\u8BF4\u7684\uFF09\u3002\u8BC4\u5BA1\u5458\u662F\u6301\u7EED\u4F1A\u8BDD\u2014\u2014\u8BB0\u4F4F\u5168\u90E8\u5386\u53F2\u3001\u6C38\u4E0D\u622A\u65AD\uFF1B\u9762\u677F\u91CC\u53EF\u65B0\u5EFA\u8BC4\u5BA1\u4F1A\u8BDD\uFF08\u91CD\u5934\u5F00\u59CB\uFF09\u3001\u76F4\u63A5\u63D0\u95EE\u3001\u8BBE\u7F6E\u56DB\u5C42\u7EA7\u7EA6\u675F\uFF08\u7CFB\u7EDF\u63D0\u793A\u8BCD / \u9879\u76EE\u7EA6\u675F / \u4F1A\u8BDD\u7EA6\u675F / \u672C\u6B21\u8BC4\u5BA1\u4F1A\u8BDD\u7EA6\u675F\uFF0C\u8D8A\u5C40\u90E8\u8D8A\u4F18\u5148\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5148\u5728\u300C\u914D\u7F6E\u300D\u6253\u5F00\u603B\u95F8\uFF0C\u518D\u5728\u4F1A\u8BDD\u9875\u60AC\u6D6E\u9762\u677F\u91CC\u4E3A\u672C\u4F1A\u8BDD\u624B\u52A8\u542F\u7528\uFF1B\u8BC4\u5BA1\u6A21\u578B\u7F3A\u7701\u7EE7\u627F\u5F53\u524D\u4F1A\u8BDD\u6A21\u578B\uFF0C\u53EF\u5355\u72EC\u914D\u7F6E\u3002","panel.guide.broadcast.title":"\u4F1A\u8BDD\u5E7F\u64AD\uFF08de_broadcast\uFF09","panel.guide.broadcast.desc":"DSH \u4F1A\u8BDD\u4E4B\u95F4\u4F20\u9012\u6D88\u606F\uFF1A\u590D\u5236\u672C\u4F1A\u8BDD ID\uFF08\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u6309\u94AE\uFF09\u53D1\u7ED9\u53E6\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u8BA9\u5B83\u7684 AI \u7528 de_broadcast send \u628A\u5185\u5BB9\u53D1\u7ED9\u4F60\u2014\u2014\u63A5\u6536\u65B9\u5FEB\u7167\u5B9A\u70B9\u6CE8\u5165\u672A\u8BFB\u63D0\u793A\uFF08\u53EA\u6709\u63A5\u6536\u8005\u770B\u5F97\u5230\uFF0C\u5176\u4ED6\u4F1A\u8BDD\u65E0\u611F\u77E5\uFF09\uFF0CAI \u7528 list / read \u67E5\u770B\u5168\u6587\u5904\u7406\uFF08\u5168\u5458\u5DF2\u8BFB\u81EA\u52A8\u5220\u9664\uFF09\uFF1B\u8D85\u957F\u5185\u5BB9\u81EA\u52A8\u843D\u6587\u4EF6\u3002\u623F\u95F4\uFF08\u804A\u5929\u5BA4\uFF09\u652F\u6301\u591A\u4EBA\u534F\u4F5C\u3001\u53EF\u8DE8\u5DE5\u4F5C\u76EE\u5F55\uFF1B\u9879\u76EE\u7FA4\u53EF\u53D1\u7ED9\u6574\u4E2A\u76EE\u5F55\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5F00\u5173\u3002","panel.guide.session.title":"\u4F1A\u8BDD\u641C\u7D22\uFF08de_session_search\uFF09","panel.guide.session.desc":"\u8BA9 AI \u641C\u7D22\u300C\u5176\u4ED6 AI \u5DE5\u5177\u7684\u5386\u53F2\u4F1A\u8BDD\u300D\uFF08\u5F53\u524D\u652F\u6301 Codex\uFF09\u2014\u2014\u300C\u4E4B\u524D Codex \u91CC\u505A\u8FC7 XX\u300D\u76F4\u63A5\u95EE AI\uFF0C\u5B83\u6309\u5173\u952E\u8BCD\u641C\u51FA\u547D\u4E2D\u4F1A\u8BDD + \u6D88\u606F\u6458\u8981\uFF08snippet\uFF09+ \u4E0A\u4E0B\u6587\u7A97\u53E3\uFF1B\u53EF\u7528 cwd \u9650\u5B9A\u9879\u76EE\u3001sort / limit / window \u63A7\u5236\u7ED3\u679C\u89C4\u6A21\uFF1B\u96F6\u5E38\u9A7B\u72B6\u6001\u2014\u2014\u65E0\u7D22\u5F15\u3001\u65E0\u7F13\u5B58\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B9E\u65F6\u53EA\u8BFB\u626B\u63CF\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u641C\u7D22\u300D\u5F00\u5173\u3002","panel.guide.sessionOrch.title":"\u4F1A\u8BDD\u7F16\u6392\uFF08de_session\uFF09","panel.guide.sessionOrch.desc":"\u8BA9 AI \u7A0B\u5E8F\u5316\u521B\u5EFA / \u5524\u9192 DSH \u4F1A\u8BDD\u2014\u2014spawn \u65B0\u5EFA\u6807\u51C6\u4F1A\u8BDD\uFF08\u4E0E\u624B\u52A8\u6253\u5F00\u5B8C\u5168\u540C\u6784\uFF1A\u7CFB\u7EDF\u63D0\u793A\u8BCD / \u5DE5\u5177 / \u8BB0\u5FC6\u5FEB\u7167 / \u6301\u4E45\u5316\uFF0C\u51FA\u73B0\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EF\u63A5\u7BA1\uFF09\uFF0C\u521B\u5EFA\u540E\u7ACB\u5373\u81EA\u52A8\u5F00\u8DD1\uFF1Bwake \u5524\u9192\u5DF2\u6709\u4F1A\u8BDD\u6D3E\u6D3B\uFF08\u5FD9\u5219\u6392\u961F\uFF09\uFF1Bstatus / list \u67E5\u72B6\u6001\u3002\u534F\u4F5C\u7EAA\u5F8B\uFF1AAI \u4E0D\u4F1A\u81EA\u52A8\u5524\u9192\u4EFB\u4F55\u4F1A\u8BDD\u2014\u2014\u7531\u4F60\u6709\u610F\u8BC6\u5730\u6307\u6325\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u7F16\u6392\u300D\u5F00\u5173\uFF1B\u5EFA\u8BAE\u914D\u5408\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u623F\u95F4\u4F7F\u7528\u3002","panel.guide.uiSettings.title":"Web UI \u8BBE\u7F6E","panel.guide.uiSettings.desc":"\u7ED9 DSH web \u754C\u9762\u52A0\u6837\u5F0F\u7EA7\u5C0F\u529F\u80FD\uFF08\u7EAF\u5BA2\u6237\u7AEF\u6CE8\u5165\uFF0C\u4E0D\u6539\u6846\u67B6\uFF09\uFF1A\u5404\u529F\u80FD\u7684\u72EC\u7ACB\u5C0F\u5F00\u5173\u5728\u300CWeb UI \u8BBE\u7F6E\u300DTab \u7684\u300C\u7EFC\u5408\u300D\u91CC\u2014\u2014\u4F1A\u8BDD\u7B5B\u9009\uFF08\u5DE6\u4FA7\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\uFF09\u3001\u5BF9\u8BDD\u533A\u52A0\u5BBD\u3001\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD\u3001\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192\u3001Mermaid \u56FE\u8868\u6E32\u67D3\u3002\u9ED8\u8BA4\u5173\u95ED\u3002","panel.guide.canvas.title":"\u65E0\u9650\u753B\u677F","panel.guide.canvas.desc":"\u628A\u6563\u843D\u5728\u5404\u5904\u7684\u6587\u4EF6 / \u56FE\u7247 / \u97F3\u9891\u96C6\u4E2D\u5230\u4E00\u5757\u65E0\u9650\u753B\u5E03\u4E0A\uFF08\u5BF9\u8BDD\u9875\u300C\u753B\u677F\u300DTab\uFF09\u2014\u2014\u8DEF\u5F84 / \u4FBF\u7B7E / \u641C\u7D22\u4E00\u952E\u4E0A\u677F\uFF08\u672C\u5730\u8DEF\u5F84\u5F15\u7528\uFF0C\u4E0D\u62F7\u8D1D\uFF09\u3001\u5361\u7247\u5185\u76F4\u63A5\u9884\u89C8\u3001\u53EF\u590D\u5236\u5F15\u7528\u4E32\u4E22\u7ED9 AI \u8BA9\u5B83\u6309 id \u53D6\u7D20\u6750\uFF1BAI \u4E5F\u80FD\u7528 de_canvas \u5F80\u753B\u677F\u653E\u4FBF\u7B7E\uFF08\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u9700\u8981\u65F6\u4E3B\u52A8\u67E5\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u65E0\u9650\u753B\u677F\u300D\u5F00\u5173\u3002","panel.guide.sync.title":"\u8BB0\u5FC6\u540C\u6B65\uFF08\u8DE8\u8BBE\u5907\uFF09","panel.guide.sync.desc":"\u8BA9\u9879\u76EE\u8BB0\u5FC6\u8DE8\u8BBE\u5907\u4E00\u81F4\u2014\u2014\u529E\u516C\u5BA4\u548C\u5BB6\u91CC\u7684\u7535\u8111\u5171\u4EAB\u540C\u4E00\u4EFD\u9879\u76EE\u5173\u952E\u8BB0\u5FC6 / \u65E5\u5FD7 / \u5F52\u6863 / \u9879\u76EE\u5F85\u529E\u3002\u5728\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab \u6253\u5F00\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5E76\u70B9\u300C\u5F00\u59CB\u540C\u6B65\u300D\uFF1A\u9ED8\u8BA4\u7528\u4F60\u7684\u4EE3\u7801\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF0C\u96F6\u914D\u7F6E\uFF1B\u4E5F\u53EF\u586B\u4E00\u4E2A\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740\uFF0C\u4E00\u4E2A\u4ED3\u5E93\u88C5\u6240\u6709\u9879\u76EE\u7684\u8BB0\u5FC6\uFF08\u5168\u5C40\u8BB0\u5FC6\u4E5F\u80FD\u540C\u6B65\uFF09\u3002\u53E6\u4E00\u53F0\u7535\u8111\u6253\u5F00\u9879\u76EE\u81EA\u52A8\u8BA4\u4EB2\u3001\u62C9\u53D6\u5373\u53EF\u7EE7\u7EED\u7528\u3002\u6A21\u5757\u5F00\u5173\u5728\u300C\u914D\u7F6E\u300D\u91CC\uFF1B\u540C\u6B65\u6C38\u8FDC\u7531\u4F60\u624B\u52A8\u89E6\u53D1\uFF0C\u6CA1\u5F00\u540C\u6B65\u7684\u9879\u76EE\u4E0D\u53D7\u5F71\u54CD\u3002","panel.guide.confirm.title":"\u786E\u8BA4\u5236\uFF08\u4E3A\u4EC0\u4E48 AI \u4E0D\u80FD\u76F4\u63A5\u5199\uFF09","panel.guide.confirm.desc":"AI \u81EA\u5EFA\u7684\u8BB0\u5FC6\u3001\u5F85\u529E\u3001\u6280\u80FD\u90FD\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u7B49\u4F60\u786E\u8BA4\u624D\u751F\u6548\u3002\u56E0\u4E3A\u8FD9\u4E9B\u5199\u5165\u4F1A\u771F\u5B9E\u6539\u53D8 AI \u7684\u884C\u4E3A\uFF1A\u8BB0\u5FC6\u4F1A\u8FDB\u5165\u4E0A\u4E0B\u6587\u3001\u5F85\u529E\u662F\u7ED9\u4F60\u6D3E\u7684\u6D3B\u3001\u6280\u80FD\u4F1A\u6539\u53D8 AI \u7684\u80FD\u529B\u5E93\u2014\u2014\u5982\u679C AI \u64C5\u81EA\u5199\u5165\uFF0C\u53EF\u80FD\u628A\u5B83\u7684\u8BEF\u5224\u5F53\u4E8B\u5B9E\u6C89\u6DC0\u3001\u6216\u81EA\u4F5C\u4E3B\u5F20\u7ED9\u4F60\u6D3E\u6D3B\u3002\u4F60\u662F\u6700\u7EC8\u628A\u5173\u8005\uFF1AAI \u53EA\u63D0\u8BAE\uFF0C\u4F60\u51B3\u5B9A\u3002","panel.guide.best.title":"\u600E\u4E48\u7528\u5F97\u6700\u597D","panel.guide.best.1":"\u8DE8\u4F1A\u8BDD\u8854\u63A5\uFF1A\u9879\u76EE\u7EA6\u5B9A / \u8FDB\u5C55\u76F4\u63A5\u8BF4\u300C\u67E5\u4E00\u4E0B\u8BB0\u5FC6\u300D\uFF0CAI \u4ECE\u9879\u76EE\u65E5\u5FD7\u4E0E\u5173\u952E\u8BB0\u5FC6\u91CC\u63A5\u7EED\uFF0C\u4E0D\u91CD\u590D\u4EA4\u4EE3\u3002","panel.guide.best.2":"\u53E3\u5934\u5373\u8BB0\uFF1A\u60F3\u5230\u4EC0\u4E48\u5C31\u8BF4\u300C\u8BB0\u4F4F\u8FD9\u4E2A / \u8FD9\u4E2A\u8981\u8DDF\u8FDB\u300D\uFF0CAI \u81EA\u52A8\u5206\u7C7B\u6C89\u6DC0\uFF1B\u9694\u51E0\u5929\u56DE\u6765\u8BF4\u4E00\u53E5\u5C31\u80FD\u63A5\u4E0A\u3002","panel.guide.best.3":"\u5B9A\u671F\u786E\u8BA4\uFF1A\u5076\u5C14\u770B\u770B\u300C\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\u300D\u300C\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE\u300D\uFF0C\u91C7\u7EB3\u6216\u62D2\u7EDD\u2014\u2014\u8FD9\u662F\u8BB0\u5FC6\u8FDB\u5316\u7684\u786E\u8BA4\u73AF\u8282\u3002","panel.guide.best.4":"\u591A\u8BBE\u5907\u540C\u6B65\uFF1A\u529E\u516C\u5BA4\u548C\u5BB6\u91CC\u90FD\u5E72\u6D3B\uFF1F\u6253\u5F00\u300C\u8BB0\u5FC6\u540C\u6B65\u300D\uFF0C\u4E24\u53F0\u7535\u8111\u5171\u4EAB\u540C\u4E00\u4EFD\u9879\u76EE\u8BB0\u5FC6\uFF0C\u91CD\u8981\u7ED3\u8BBA\u4E0D\u7528\u8BB2\u4E24\u904D\u3002","panel.guide.loop":"\u95ED\u73AF\uFF1A\u804A \u2192 \u8BB0 \u2192 \u5BA1\u67E5 \u2192 \u6C89\u6DC0 \u2192 \u6267\u884C\u3002\u8FD9\u5957\u673A\u5236\u5C31\u662F AI \u7684\u957F\u671F\u5DE5\u4F5C\u8BB0\u5FC6\u3002","panel.suggestions.approve":"\u91C7\u7EB3","panel.suggestions.archive":"\u5F52\u6863","panel.suggestions.archiveHint":"\u5F52\u6863\uFF1A\u4E0D\u6CE8\u5165\u4F1A\u8BDD\uFF0C\u4EC5\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.suggestions.editHint":"\u91C7\u7EB3\u524D\u53EF\u4FEE\u6539\u6587\u672C\uFF0C\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u5C06\u5199\u5165\u8BB0\u5FC6\u3002","panel.suggestions.reject":"\u62D2\u7EDD","panel.suggestions.approveAll":"\u5168\u90E8\u91C7\u7EB3","panel.suggestions.rejectAll":"\u5168\u90E8\u62D2\u7EDD","panel.suggestions.hits":"\u5DF2\u5EFA\u8BAE {count} \u6B21","panel.suggestions.hitsHint":"\u8BE5\u5185\u5BB9\u5728\u591A\u8F6E\u5BA1\u67E5\u4E2D\u53CD\u590D\u51FA\u73B0\uFF0C\u503C\u5F97\u8BA4\u771F\u786E\u8BA4","panel.suggestions.target.memory":"\u957F\u671F\u8BB0\u5FC6","panel.suggestions.target.user":"\u7528\u6237\u6863\u6848","panel.suggestions.target.key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6","panel.suggestions.targetHint":"\u91C7\u7EB3\u65F6\u5199\u5165\u7684\u8F68\uFF1A\u9ED8\u8BA4=AI \u63A8\u8350\u7684\u5206\u7C7B\uFF1B\u53EF\u6539\u4E3A\u66F4\u5408\u9002\u7684\uFF08\u8BB0\u5FC6/\u7528\u6237\u6863\u6848/\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u90FD\u4F1A\u7ACB\u5373\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF09","panel.suggestions.projectHint":"\u8FD9\u6761\u5EFA\u8BAE\u6765\u81EA\u8BE5\u9879\u76EE\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF1A{path}","panel.suggestions.done":"\u64CD\u4F5C\u5B8C\u6210\uFF1A{text}","panel.archive.title":"\u5DF2\u5F52\u6863\u8BB0\u5FC6","panel.archive.empty":"\u6682\u65E0\u5F52\u6863\u6761\u76EE","panel.archive.help":"\u5F52\u6863\u7684\u5EFA\u8BAE\u4E0D\u4F1A\u6CE8\u5165\u4F1A\u8BDD\uFF0C\u4EC5\u5728\u6B64\u4FDD\u7559\u5907\u67E5\u2014\u2014\u9700\u8981\u65F6\u53EF\u300C\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u300D\uFF08\u5199\u5165\u5BF9\u5E94\u8BB0\u5FC6\u6587\u4EF6\uFF09\u6216\u300C\u5220\u9664\u300D\u3002","panel.archive.promote":"\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.archive.delete":"\u5220\u9664","panel.archive.promoted":"\u5DF2\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.archive.deleted":"\u5DF2\u5220\u9664\u5F52\u6863\u6761\u76EE","panel.skills.title":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","panel.skills.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u65B0\u6280\u80FD\uFF0C\u91C7\u7EB3\u540E\u79FB\u5165\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\u5E76\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\u3002","panel.skills.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u6280\u80FD\u5EFA\u8BAE\u3002","panel.skills.pending":"\u5F85\u91C7\u7EB3","panel.skills.approve":"\u91C7\u7EB3","panel.skills.reject":"\u62D2\u7EDD","panel.skills.done":"\u5DF2{op}\u6280\u80FD","panel.config.title":"\u914D\u7F6E","panel.config.help":"\u4FEE\u6539\u7ACB\u5373\u751F\u6548\u5E76\u6301\u4E45\u5316\uFF08\u8986\u76D6 config.yaml \u7684\u5BF9\u5E94\u9879\uFF09\u3002","panel.config.reviewEnabled":"\u540E\u53F0\u5BA1\u67E5","panel.config.reviewEnabled.hint":"\u81EA\u52A8\u56DE\u987E\u4F1A\u8BDD\u5E76\u6C89\u6DC0\u7ECF\u9A8C\uFF1B\u5173\u95ED\u540E memory/skill \u5DE5\u5177\u4E0E\u8BB0\u5FC6\u5FEB\u7167\u4ECD\u53EF\u7528\uFF0C\u53EA\u662F\u4E0D\u518D\u81EA\u52A8\u5BA1\u67E5","panel.config.reviewInterval":"\u5BA1\u67E5\u95F4\u9694\uFF08\u56DE\u5408\uFF09","panel.config.reviewInterval.hint":"\u6BCF N \u4E2A\u7528\u6237\u56DE\u5408\u81EA\u52A8\u5BA1\u67E5\u4E00\u6B21","panel.config.skillReviewEnabled":"\u6280\u80FD\u81EA\u52A8\u6C89\u6DC0","panel.config.skillReviewEnabled.hint":"\u5173\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u5BA1\u67E5\u521B\u5EFA\u7684\u65B0\u6280\u80FD\u8FDB\u5165\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u91C7\u7EB3\u540E\u624D\u8FDB\u5165\u6280\u80FD\u5E93\uFF1B\u5F00\uFF1A\u5BA1\u67E5\u76F4\u63A5\u521B\u5EFA\u6280\u80FD\uFF0C\u65E0\u9700\u786E\u8BA4\uFF08\u6280\u80FD\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF0C\u8BF7\u8C28\u614E\u5F00\u542F\uFF09","panel.config.perTurnWriteGuard":"\u8BB0\u5FC6\u5199\u5165\u770B\u95E8\u72D7","panel.config.perTurnWriteGuard.hint":"\u5173\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u6839\u6E90\u662F\u6A21\u578B\u7684\u6307\u4EE4\u9075\u5FAA\u80FD\u529B\uFF0C\u5F3A\u6A21\u578B\u7528\u4E0D\u4E0A\uFF1B\u5F00\uFF1A\u8FDE\u7EED\u591A\u8F6E\u672A\u5199 daily/project \u8BB0\u5FC6\u65F6\u5FEB\u7167\u7F6E\u9876\u63D0\u9192\uFF08\u5199\u5165\u5373\u6D88\uFF09\uFF0C\u76EF\u4F4F\u957F\u4F1A\u8BDD\u662F\u5426\u6F0F\u505A\u6BCF\u8F6E\u6536\u5C3E\u5199\u8BB0\u5FC6","panel.config.writeGuardThreshold":"\u770B\u95E8\u72D7\u89E6\u53D1\u9608\u503C\uFF08\u8F6E\uFF09","panel.config.writeGuardThreshold.hint":"\u8FDE\u7EED N \u8F6E\u672A\u5199\u5165\u4EFB\u4F55 daily/project \u8BB0\u5FC6\u5373\u63D0\u9192\uFF08>=1\uFF1B2 = \u5BB9\u5FCD\u6F0F 1 \u8F6E\u3001\u7B2C 2 \u8F6E\u8D77\u63D0\u9192\uFF09","panel.config.perTurnProjectWrites":"\u6BCF\u56DE\u5408\u5199\u5165\u9879\u76EE\u8BB0\u5FC6","panel.config.perTurnProjectWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u4E3B\u52A8\u68C0\u67E5\u5E76\u8BB0\u5F55\u9879\u76EE\u76F8\u5173\u65B0\u4E8B\u5B9E\uFF08\u5173\u952E\u51B3\u7B56/\u8FDB\u5C55/\u8E29\u5751\uFF09\uFF1B\u5173\u95ED\u540E\u9879\u76EE\u8BB0\u5FC6\u4EC5\u6309\u9700\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA\uFF0C\u5F31\u9075\u5FAA\u7684\u6A21\u578B\u4E0D\u4E00\u5B9A\u4F1A\u6267\u884C","panel.config.perTurnDailyWrites":"\u6BCF\u56DE\u5408\u5199\u5165\u6BCF\u65E5\u65E5\u5FD7","panel.config.perTurnDailyWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u4E3B\u52A8\u68C0\u67E5\u5E76\u8BB0\u5F55\u5F53\u5929\u8FDB\u5C55\uFF1B\u5173\u95ED\u540E\u6BCF\u65E5\u65E5\u5FD7\u4EC5\u6309\u9700\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA\uFF0C\u5F31\u9075\u5FAA\u7684\u6A21\u578B\u4E0D\u4E00\u5B9A\u4F1A\u6267\u884C","panel.config.perTurnKeyWrites":"\u6BCF\u56DE\u5408\u68C0\u67E5\u9879\u76EE\u5173\u952E\u8BB0\u5FC6","panel.config.perTurnKeyWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u5224\u65AD\u662F\u5426\u51FA\u73B0\u91CD\u8981\u9879\u76EE\u4E8B\u5B9E\uFF08\u957F\u671F\u7EA6\u5B9A/\u51B3\u7B56/\u67B6\u6784/\u8E29\u5751\uFF09\uFF0C\u6709\u5219\u5199\u5165 target=key\uFF08\u81EA\u52A8\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF09\uFF0C\u6CA1\u6709\u5C31\u8DF3\u8FC7\uFF1B\u5173\u95ED\u540E key \u4EC5\u4FDD\u7559\u624B\u52A8\u6DFB\u52A0\u4E0E\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA","panel.config.keyProgressiveDisclosure":"key \u8F68\u6E10\u8FDB\u5F0F\u62AB\u9732","panel.config.keyProgressiveDisclosure.hint":"\u63A7\u5236 key \u8F68\u8BB0\u5FC6\u7684\u6CE8\u5165\u65B9\u5F0F\uFF1Aauto = \u5C0F\u6570\u636E\u91CF\u5168\u91CF\u6CE8\u5165\u3001\u5927\u6570\u636E\u91CF\u6458\u8981\u6CE8\u5165\uFF1Boff = \u59CB\u7EC8\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4\uFF09\uFF1Bon = \u59CB\u7EC8\u6458\u8981\u6CE8\u5165\uFF08\u8282\u7701 token\uFF09","panel.config.keyProgressiveDisclosure.auto":"\u81EA\u52A8","panel.config.keyProgressiveDisclosure.off":"\u5173\u95ED\uFF08\u59CB\u7EC8\u5168\u91CF\uFF0C\u9ED8\u8BA4\uFF09","panel.config.keyProgressiveDisclosure.on":"\u5F00\u542F\uFF08\u59CB\u7EC8\u6458\u8981\uFF09","panel.config.keyFullInjectThreshold":"\u5168\u91CF\u6CE8\u5165\u6761\u76EE\u6570\u9608\u503C","panel.config.keyFullInjectThreshold.hint":"auto \u6A21\u5F0F\u4E0B\uFF0C\u6761\u76EE\u6570 \u2264 \u6B64\u503C\u65F6\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4 3\uFF09","panel.config.keyFullInjectCharLimit":"\u5168\u91CF\u6CE8\u5165\u5B57\u7B26\u6570\u9608\u503C","panel.config.keyFullInjectCharLimit.hint":"auto \u6A21\u5F0F\u4E0B\uFF0C\u603B\u5B57\u7B26\u6570 \u2264 \u6B64\u503C\u65F6\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4 1500\uFF09","panel.config.coiEnabled":"COI \u8C03\u5EA6","panel.config.coiEnabled.hint":"\u542F\u7528 de_coi_* \u5DE5\u5177\u4E0E\u300CCOI \u8C03\u5EA6\u300DTab\uFF1A\u7EDF\u4E00\u8C03\u5EA6 kimi/codex/grok/hermes \u7B49 CLI \u4EE3\u7406\uFF08\u9ED8\u8BA4\u7981\u7528\u2014\u2014\u672C\u63D2\u4EF6\u7684\u672C\u804C\u662F\u8BB0\u5FC6/\u5F85\u529E/\u6280\u80FD\uFF0C\u8C03\u5EA6\u662F\u6309\u9700\u589E\u5F3A\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u4E0E Tab \u5B8C\u5168\u4E0D\u53EF\u89C1\uFF09","panel.config.searchDocsEnabled":"\u672C\u5730\u6587\u4EF6\u641C\u7D22\u5DE5\u5177","panel.config.searchDocsEnabled.hint":'\u8BA9\u6A21\u578B\u5728\u672C\u673A\u6240\u6709\u78C1\u76D8/\u76EE\u5F55\u4E2D\u641C\u7D22\u6587\u4EF6\u3002**\u56DB\u6863\u6A21\u5F0F**\uFF1A\u90FD\u542F\u7528 = \u6587\u4EF6\u540D + \u5185\u5BB9\u68C0\u7D22\u90FD\u53EF\u7528\uFF1B\u4EC5\u6587\u4EF6\u540D = content/contentQuery \u53C2\u6570\u88AB\u5FFD\u7565\uFF08\u4E0D\u8BFB\u4EFB\u4F55\u6587\u4EF6\u5185\u5BB9\uFF0C\u9002\u5408\u5185\u5BB9\u68C0\u7D22\u7528\u522B\u7684\u5B9E\u73B0\u7684\u4EBA\uFF09\uFF1B\u4EC5\u5185\u5BB9 = \u6BCF\u6B21\u8C03\u7528\u90FD\u505A\u5185\u5BB9\u5339\u914D\uFF08query \u89C6\u4E3A\u5185\u5BB9\u5173\u952E\u8BCD\uFF09\uFF1B\u5173\u95ED = \u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1\u3002\u5185\u5BB9\u68C0\u7D22\uFF1AcontentQuery="\u5173\u952E\u8BCD" \u5373\u641C"\u54EA\u4E2A\u6587\u6863\u91CC\u63D0\u8FC7 XX"\uFF08rg \u5168\u6587\u5339\u914D\uFF0C\u8FD4\u56DE\u547D\u4E2D\u7247\u6BB5\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED',"panel.config.searchDocsMode.all":"\u90FD\u542F\u7528\uFF08\u6587\u4EF6\u540D + \u5185\u5BB9\uFF09","panel.config.searchDocsMode.filename":"\u4EC5\u6587\u4EF6\u540D\u641C\u7D22","panel.config.searchDocsMode.content":"\u4EC5\u5185\u5BB9\u641C\u7D22","panel.config.searchDocsMode.off":"\u5173\u95ED\uFF08\u5DE5\u5177\u4E0D\u53EF\u89C1\uFF09","panel.config.advisorEnabled":"\u4F1A\u8BDD\u8BC4\u5BA1\uFF08Advisor\uFF09","panel.config.advisorEnabled.hint":"\u4F1A\u8BDD\u8BC4\u5BA1\u6A21\u5757\u603B\u95F8\uFF1A\u5F00\u542F\u540E**\u6BCF\u4E2A\u4F1A\u8BDD\u4ECD\u9ED8\u8BA4\u5173\u95ED**\u2014\u2014\u9700\u5728\u60AC\u6D6E\u9762\u677F\u91CC\u7528\u72B6\u6001\u6761\u5F00\u5173\u4E3A\u672C\u4F1A\u8BDD\u624B\u52A8\u542F\u7528\uFF08\u8BC4\u5BA1\u6D88\u8017\u989D\u5916\u6A21\u578B\u8C03\u7528\uFF0C\u6309\u9700\u5F00\u542F\uFF1B\u624B\u52A8\u5F00\u8FC7\u7684\u4F1A\u8BDD\u5237\u65B0/\u91CD\u542F\u540E\u4FDD\u6301\uFF09\u3002\u603B\u95F8\u5173\u95ED\u65F6\u8BC4\u5BA1\u505C\u6B62\u3001\u4F1A\u8BDD\u8BC4\u5BA1\u5165\u53E3\uFF08\u4F1A\u8BDD\u5934\u90E8\u6309\u94AE/\u60AC\u6D6E\u9762\u677F\uFF09\u5168\u90E8\u9690\u85CF\uFF0C\u6A21\u5757\u6574\u4F53\u4E0D\u53EF\u7528\uFF1B\u91CD\u65B0\u5F00\u542F\u540E\u7ACB\u5373\u6062\u590D","panel.config.broadcastEnabled":"\u4F1A\u8BDD\u5E7F\u64AD","panel.config.broadcastEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u5E7F\u64AD\uFF08de_broadcast\uFF09\uFF1ADSH \u4F1A\u8BDD\u95F4\u6D88\u606F\u4F20\u9012\u2014\u2014\u5FEB\u7167\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u672A\u8BFB\u63D0\u793A\uFF08\u6536\u4EF6\u7BB1\u5F0F\u5217\u51FA id+\u4E3B\u9898+\u53D1\u9001\u8005+\u65F6\u95F4\uFF09+ de_broadcast \u5DE5\u5177\uFF08send/list/read\uFF0Cread \u5373\u6D88\u8D39\u3001\u5168\u8BFB\u540E\u81EA\u52A8\u5220\u9664\u30018KB \u843D\u6587\u4EF6\u300130 \u5929\u6E05\u7406\uFF09+ \u4F1A\u8BDD\u5E7F\u64AD\u7BA1\u7406\u9762\u677F Tab\u3002**\u72EC\u7ACB\u4E8E COI \u8C03\u5EA6**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u53EF\u5355\u72EC\u5F00\u542F\uFF09\uFF1B\u5173\u95ED\u65F6\u4EE5\u4E0A\u5168\u90E8\u4E0D\u53EF\u89C1\uFF1B\u300C\u4F60\u7684\u4F1A\u8BDD ID\u300D\u5E38\u9A7B\u5FEB\u7167\u6BB5\u4E0D\u53D7\u5F71\u54CD\uFF1B\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u300C\u270E \u522B\u540D\u300D\u6309\u94AE\u5C5E\u300C\u4F1A\u8BDD\u7F16\u6392\u300D\u6A21\u5757\uFF08\u9762\u677F\u9876\u90E8\u53E6\u6709\u590D\u5236\u5165\u53E3\uFF09","panel.config.notifyEnabled":"\u901A\u77E5\u6A21\u5757","panel.config.notifyEnabled.hint":"\u542F\u7528\u901A\u77E5\u6A21\u5757\uFF08de_notify\uFF09\uFF1AAI \u5B8C\u6210\u4EFB\u52A1\u540E\u4E3B\u52A8\u53D1\u901A\u77E5\u7ED9\u4F60\u2014\u2014de_notify \u624B\u52A8\u5DE5\u5177\uFF08\u968F\u65F6\u53EF\u53D1\u3001\u65E0\u9891\u7387\u9650\u5236\uFF0Cchannels \u542B feishu/qq/weixin/wecom/web\uFF09+ COI \u4EFB\u52A1\u5B8C\u6210\u81EA\u52A8\u901A\u77E5\uFF08coiNotifyChannels \u9009\u6E20\u9053\uFF09\u3002web \u6E20\u9053=\u53D1\u5230\u672C\u7F51\u9875\u53F3\u4E0A\u89D2\u7AD9\u5185\u901A\u77E5\u94C3\u94DB\uFF1A\u843D\u76D8 + \u672A\u8BFB\u6570\u5B57\u5FBD\u6807 + \u5F39\u7A97\u67E5\u770B\u300C\u54EA\u4E2A\u4F1A\u8BDD\u53D1\u6765\u4EC0\u4E48\u901A\u77E5\u300D+ \u70B9\u51FB\u8DF3\u8F6C\u5230\u8BE5\u4F1A\u8BDD\u3002\u72EC\u7ACB\u6A21\u5757\uFF0C\u9ED8\u8BA4\u5173\u95ED\uFF1BIM \u6E20\u9053\u4F9D\u8D56\u5BF9\u5E94\u6E20\u9053\u63D2\u4EF6\uFF08dsh-feishu \u7B49\uFF0C\u672A\u88C5\u5982\u5B9E\u62A5\u6E20\u9053\u4E0D\u53EF\u7528\uFF09\uFF0Cweb \u6E20\u9053\u7531\u672C\u63D2\u4EF6\u5185\u7F6E\u96F6\u4F9D\u8D56\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u4E0D\u6CE8\u518C\u3001\u94C3\u94DB\u6D88\u5931\u3001COI \u81EA\u52A8\u901A\u77E5\u9759\u9ED8\u8DF3\u8FC7","notify.title":"\u901A\u77E5","notify.bellAria":"\u7AD9\u5185\u901A\u77E5","notify.empty":"\u6682\u65E0\u672A\u8BFB\u901A\u77E5","notify.loading":"\u52A0\u8F7D\u4E2D\u2026","notify.readAll":"\u5168\u90E8\u5DF2\u8BFB","notify.system":"\u7CFB\u7EDF","notify.jump":"\u8DF3\u8F6C\u5230\u4F1A\u8BDD","notify.delete":"\u5220\u9664","notify.viewDetail":"\u67E5\u770B\u8BE6\u60C5","notify.close":"\u5173\u95ED","notify.markRead":"\u5DF2\u8BFB","panel.config.syncEnabled":"\u8BB0\u5FC6\u540C\u6B65","panel.config.syncEnabled.hint":"**\u6A21\u5757\u5F00\u5173**\uFF1A\u542F\u7528\u300C\u8BB0\u5FC6\u540C\u6B65\u300D\u6A21\u5757\u2014\u2014\u5BF9\u8BDD\u9875\u51FA\u73B0\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab\u3001/memory_sync \u547D\u4EE4\u53EF\u7528\u3002**\u6CE8\u610F\uFF1A\u8FD9\u53EA\u662F\u6A21\u5757\u542F\u7528\uFF0C\u4E0D\u7B49\u4E8E\u4EFB\u4F55\u9879\u76EE\u5F00\u59CB\u540C\u6B65**\u2014\u2014\u6BCF\u4E2A\u9879\u76EE\u7531\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab \u91CC\u7684\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5F00\u5173\u5355\u72EC\u542F\u7528\uFF08\u9ED8\u8BA4\u5173\uFF1B\u672A\u542F\u7528\u7684\u9879\u76EE\u4FDD\u6301\u7EAF\u672C\u5730\u72B6\u6001\uFF0C\u4E0D\u5EFA Git \u4ED3\u5E93\u3001\u4E0D\u751F\u6210\u8EAB\u4EFD\u8BC1\uFF09\u3002\u540C\u6B65\u673A\u5236\uFF1A\u9879\u76EE\u8BB0\u5FC6\uFF08KEY + \u9879\u76EE\u65E5\u5FD7 + \u5F52\u6863 + \u9879\u76EE\u5F85\u529E\uFF09\u7ECF Git \u5BF9\u8D26\u5230\u8BB0\u5FC6\u8FDC\u7AEF\u2014\u2014\u4E0D\u586B\u5730\u5740\u9ED8\u8BA4\u7528\u4F60\u7684\u4E3B\u4EE3\u7801\u4ED3\u5E93\uFF08\u4E13\u5C5E\u5206\u652F\uFF0C\u96F6\u914D\u7F6E\uFF09\uFF1B\u586B\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740 = \u4E00\u4E2A\u79C1\u6709\u4ED3\u5E93\u88C5\u6240\u6709\u9879\u76EE\u7684\u8BB0\u5FC6\uFF08\u5168\u5C40\u8BB0\u5FC6\u4E8C\u671F\u4E5F\u53EA\u80FD\u7528\u5B83\u540C\u6B65\uFF09\u3002push \u6C38\u8FDC\u9700\u4F60\u663E\u5F0F\u89E6\u53D1","panel.config.sessionSearchEnabled":"\u4F1A\u8BDD\u641C\u7D22","panel.config.sessionSearchEnabled.hint":"\u542F\u7528 de_session_search\uFF1A\u8BA9\u6A21\u578B\u641C\u7D22\u672C\u673A\u5176\u4ED6 AI \u5DE5\u5177\u7684\u5386\u53F2\u4F1A\u8BDD\uFF08\u5F53\u524D\u652F\u6301 Codex\uFF1A~/.codex/sessions \u4E0E archived_sessions \u7684\u660E\u6587 JSONL\u2014\u2014rg \u9884\u7B5B\u540E\u6BEB\u79D2\u7EA7\uFF1BDSH \u4F1A\u8BDD\u6682\u4E0D\u652F\u6301\uFF09\u3002\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u5B57\u9762\u5339\u914D\uFF0C\u53EA\u641C\u7528\u6237/\u52A9\u624B\u6D88\u606F\uFF1B\u652F\u6301 cwd \u9879\u76EE\u8FC7\u6EE4\u3001relevance/newest/oldest \u6392\u5E8F\u3001limit/window \u63A7\u5236\u89C4\u6A21\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u53EF\u5355\u72EC\u5F00\u542F\uFF0C\u4E0E COI \u8C03\u5EA6/\u5E7F\u64AD\u65E0\u5173\uFF09\uFF1B\u96F6\u5E38\u9A7B\u72B6\u6001\uFF1A\u65E0\u7D22\u5F15\u3001\u65E0\u7F13\u5B58\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B9E\u65F6\u53EA\u8BFB\u626B\u63CF\uFF0C\u4E0D\u4FEE\u6539\u4EFB\u4F55\u4F1A\u8BDD\u6587\u4EF6\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1","panel.config.canvasEnabled":"\u65E0\u9650\u753B\u677F","panel.config.canvasEnabled.hint":"**\u6A21\u5757\u5F00\u5173**\uFF1A\u542F\u7528\u300C\u65E0\u9650\u753B\u677F\u300D\u2014\u2014\u5BF9\u8BDD\u9875\u51FA\u73B0\u300C\u753B\u677F\u300DTab + de_canvas \u5DE5\u5177\uFF08AI \u53EF\u67E5\u753B\u677F\u3001\u6309 id \u8BFB\u5185\u5BB9\u3001\u5F80\u753B\u677F\u4E2D\u592E\u533A\u653E\u4FBF\u7B7E\uFF09\u3002\u672C\u5730\u8DEF\u5F84\u5F15\u7528\u3001\u5355\u677F+\u89C6\u89D2\u7B5B\u9009\uFF08\u4F1A\u8BDD/\u9879\u76EE/\u5168\u5C40 + \u5F52\u5C5E\u5FBD\u6807\uFF09\u3001AI \u53CC\u5411\u62C9\u53D6\u5F0F\uFF08\u753B\u677F\u5185\u5BB9\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u9700\u8981\u65F6\u4E3B\u52A8\u67E5\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF09\uFF1A\u5B58\u50A8 <memoryDir>/canvas/boards.json\uFF08\u6574\u677F\u539F\u5B50\u5199 + rev \u4E50\u89C2\u9501\u9632\u591A\u4F1A\u8BDD\u8986\u76D6\uFF09\uFF1B\u5173\u95ED\u65F6 Tab \u4E0E\u5DE5\u5177\u5B8C\u5168\u4E0D\u53EF\u89C1\uFF0C\u6570\u636E\u6587\u4EF6\u4FDD\u7559","panel.config.sessionEnabled":"\u4F1A\u8BDD\u7F16\u6392","panel.config.sessionEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u7F16\u6392\uFF08de_session\uFF09\uFF1A\u8BA9 AI **\u7A0B\u5E8F\u5316\u521B\u5EFA/\u5524\u9192 DSH \u4F1A\u8BDD**\u2014\u2014spawn \u65B0\u5EFA\u6807\u51C6\u4F1A\u8BDD\uFF08\u4E0E\u624B\u52A8\u6253\u5F00\u5B8C\u5168\u540C\u6784\uFF1A\u7CFB\u7EDF\u63D0\u793A\u8BCD/\u5DE5\u5177/\u8BB0\u5FC6\u5FEB\u7167/\u6301\u4E45\u5316\uFF0C\u51FA\u73B0\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EF\u63A5\u7BA1\uFF09\uFF0Cprompt=\u5B8C\u6574\u63D0\u793A\u8BCD\uFF08\u89D2\u8272/\u4EFB\u52A1\u81EA\u7531\u7EC4\u5408\u7684\u957F\u6587\u672C\uFF09\uFF0C\u521B\u5EFA\u540E\u7ACB\u5373\u81EA\u52A8\u5F00\u8DD1\uFF0C\u53EF\u9009 cwd/\u52A0\u5165\u5E7F\u64AD\u623F\u95F4/\u8986\u76D6\u6A21\u578B\uFF1Bwake \u5524\u9192\u5DF2\u6709\u4F1A\u8BDD\uFF08\u7B49\u4EF7\u66FF\u7528\u6237\u53D1\u6D88\u606F\uFF0C\u5BF9\u65B9 AI \u81EA\u52A8\u9192\u6765\u5904\u7406\uFF0C\u8FDB\u7A0B\u91CD\u542F\u540E\u81EA\u52A8\u6062\u590D\uFF09\uFF1Bstatus/list \u67E5\u72B6\u6001\uFF1B**\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u300C\u270E \u522B\u540D\u300D\u6309\u94AE\u968F\u672C\u5F00\u5173**\uFF08\u4F1A\u8BDD\u8EAB\u4EFD\u529F\u80FD\uFF0C\u66FE\u8BEF\u6302\u5728\u5E7F\u64AD\u4E0B\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF1B\u4F9D\u8D56 DSH agents \u670D\u52A1\uFF0C\u4EC5\u540C\u8FDB\u7A0B\u4F1A\u8BDD\u53EF\u5524\u9192\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u5BF9\u6A21\u578B\u4E0D\u53EF\u89C1\uFF09","panel.config.promptsEnabled":"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668","panel.config.promptsEnabled.hint":"\u542F\u7528\u300C\u63D0\u793A\u8BCD\u300DTab\uFF1A\u63D0\u793A\u8BCD\u5E93\uFF08\u7528\u6237\u81EA\u5199\u8303\u5F0F + \u5185\u7F6E\u793A\u4F8B\uFF09+ \u6CE8\u5165\u8F68\uFF08\u4E00\u6B21\u6027/\u6301\u7EED N \u8F6E/\u6BCF M \u56DE\u5408\u4E00\u6B21\uFF0C\u6B21\u6570\u4E0E\u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\u2014\u2014\u5199\u5165\u540E\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\uFF0C\u56DE\u5408\u9012\u51CF\u81EA\u52A8\u8FC7\u671F\uFF0C\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u4E34\u65F6\u6CE8\u5165\uFF0C\u81EA\u52A8\u5165\u5E93\u5F52\u5165\u300C\u4E34\u65F6\u300D\u5206\u7C7B\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1B\u5173\u95ED\u65F6\u5FEB\u7167\u6BB5/\u4E8B\u4EF6\u76D1\u542C/API \u5168\u90E8\u5378\u8F7D\uFF0CTab \u5237\u65B0\u540E\u9690\u85CF","panel.config.modelsEnabled":"\u6A21\u578B\u8BBE\u7F6E","panel.config.modelsEnabled.hint":"\u542F\u7528\u300C\u6A21\u578B\u8BBE\u7F6E\u300DTab + de_models \u5DE5\u5177\uFF1A\u8868\u683C\u5C55\u793A DSH \u4F9B\u5E94\u5546/\u6A21\u578B\uFF0C\u7ED9\u6BCF\u4E2A\u6A21\u578B\u8BBE\u7F6E\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528/\u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF08\u53EF\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF09\uFF1Bde_models \u4F9B AI \u67E5\u8BE2\u53EF\u7528\u6A21\u578B\u6E05\u5355\u3002**\u9ED8\u8BA4\u5173\u95ED**\uFF08\u6CE8\u518C\u5373\u5360\u6A21\u578B\u5DE5\u5177\u5217\u8868\uFF0C\u9700\u8981\u65F6\u518D\u5F00\uFF09\uFF1B\u26A0\uFE0F \u672C\u6A21\u5757\u7684\u914D\u7F6E**\u53EA\u5BF9\u63D2\u4EF6\u81EA\u8EAB\u6709\u7528\uFF0C\u4E0D\u4FEE\u6539\u4E5F\u4E0D\u5F71\u54CD DSH \u7684\u6A21\u578B\u8BBE\u7F6E**\uFF08DSH \u4FA7\u4ECD\u4EE5\u5B98\u65B9\u300C\u8BBE\u7F6E \u2192 \u6A21\u578B\u300D\u4E3A\u51C6\uFF09\u3002\u5173\u95ED\u65F6 Tab \u4E0E\u5DE5\u5177\u9690\u85CF\u3001API \u62D2\u7EDD\u8BBF\u95EE\uFF0C\u914D\u7F6E\u6570\u636E\u4FDD\u7559","panel.config.uiSettingsEnabled":"Web UI \u8BBE\u7F6E","panel.config.uiSettingsEnabled.hint":"\u542F\u7528\u300CWeb UI \u8BBE\u7F6E\u300D\u6A21\u5757\uFF1A\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u9876\u90E8\u51FA\u73B0\u7B5B\u9009\u6761\uFF0C\u9ED8\u8BA4\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF08\u6B63\u5728\u751F\u6210/\u7B49\u5BA1\u6279/\u7B49\u56DE\u7B54/\u6709\u5B50\u4EE3\u7406\u5728\u8DD1/\u51FA\u9519/\u5DF2\u5B8C\u6210\u672A\u67E5\u770B\u2014\u2014\u7EAF idle \u7684\u6298\u53E0\u9690\u85CF\uFF09\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF1B\u7EAF\u5BA2\u6237\u7AEF\u6837\u5F0F\u589E\u5F3A\uFF08CSS + DOM \u6CE8\u5165\uFF0C\u4E0D\u6539 DSH \u6846\u67B6\uFF09\uFF1B\u7B5B\u9009\u504F\u597D\u8BB0\u5728\u6D4F\u89C8\u5668\u672C\u5730\u3002**\u9ED8\u8BA4\u5173\u95ED**\uFF1B\u5173\u95ED\u65F6\u7B5B\u9009\u6761\u4E0E\u6CE8\u5165\u6837\u5F0F\u5168\u90E8\u79FB\u9664","panel.config.save":"\u4FDD\u5B58\u914D\u7F6E","panel.reveal.title":"\u6253\u5F00\u6587\u4EF6","panel.reveal.help":"\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00\u8BB0\u5FC6\u76EE\u5F55\u4E0E\u8BB0\u5FC6\u6587\u4EF6\u3002\u26A0\uFE0F \u968F\u610F\u7F16\u8F91\u53EF\u80FD\u7834\u574F \xA7 \u5206\u9694\u683C\u5F0F\u3001\u5BFC\u81F4\u8BB0\u5FC6\u8BFB\u53D6\u9519\u4E71\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539\u3002","panel.reveal.memoryDir":"\u8BB0\u5FC6\u76EE\u5F55","panel.reveal.memoryFile":"\u5168\u5C40\u8BB0\u5FC6","panel.reveal.userFile":"\u7528\u6237\u6863\u6848","panel.reveal.archiveMemoryFile":"\u5F52\u6863\u8BB0\u5FC6","panel.reveal.archiveUserFile":"\u5F52\u6863\u7528\u6237","panel.reveal.dailyDir":"\u6BCF\u65E5\u65E5\u5FD7\u76EE\u5F55","panel.reveal.dailyFile":"\u4ECA\u65E5\u65E5\u5FD7","panel.reveal.projectsDir":"\u9879\u76EE\u8BB0\u5FC6\u76EE\u5F55","panel.reveal.skillDir":"\u6280\u80FD\u76EE\u5F55","panel.reveal.agentsFile":"\u5168\u5C40\u89C4\u5219 (AGENTS.md)","panel.config.saved":"\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002\u65B0\u542F\u7528/\u5173\u95ED\u7684\u6A21\u5757\u9700\u5237\u65B0\u9875\u9762\u540E\u751F\u6548","panel.config.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{message}","panel.loading":"\u52A0\u8F7D\u4E2D\u2026"},zi={"tab.label":"Skill Manager","tab.label.alt":"Skill Manager","header.title":"Skill Manager","header.subtitle":"Manage every skill \xB7 custom dirs \xB7 enable/disable \xB7 view & edit","search.placeholder":"Search skills by name, description, or when-to-use\u2026","search.empty":"No matching skills","filter.all":"All","status.enabled":"Enabled",disable:"Disable",enable:"Enable","disabled.badge":"Disabled","disabled.hint":"Disabled: excluded from the model skill catalog","protected.badge":"System","protected.hint":"System skill (project source) \u2014 cannot be disabled","toggle.failed":"Toggle failed: {message}","manage.dirs":"Manage custom skill directories","dirs.title":"Custom Skill Directories","dirs.help":"Add directories containing skills (<dir>/<skill>/SKILL.md or <dir>/<skill>.md layouts). Directories persist in the plugin state.json and reload automatically after restart; paths overlapping an existing skill root are rejected.","dirs.placeholder":"Absolute path, e.g. ~/.hermes/skills/\u2026","dirs.add":"Add","dirs.remove":"Remove","dirs.empty":"No custom directories yet","dirs.missing":"Directory missing","pager.prev":"Prev","pager.next":"Next","pager.page":"Page {page} / {total}","skills.count":"{count} skills","roots.count":"{count} roots","pane.skills":"Skills","pane.files":"Files","pane.editor":"Editor","no.skill.selected":"Select a skill on the left to start browsing","no.root":"This skill has no browsable local directory","no.entries":"Empty directory","no.file":"Select a text file to view or edit","not.text":"Not a text file \u2014 cannot preview","too.large":"File exceeds the 512 KiB read cap","read.failed":"Read failed: {message}","write.failed":"Save failed: {message}",save:"Save",saving:"Saving\u2026",saved:"Saved",edit:"Edit",cancel:"Cancel",discard:"Discard","dirty.hint":"Unsaved changes",readonly:"Read-only",bytes:"{size} B",kib:"{size} KiB",mib:"{size} MiB","dir.up":"Parent directory","open.folder":"Open directory","source.badge":"{source}",invocable:"Invocable","when.to.use":"When to use",description:"Description","resource.directory":"Directory","resource.url":"Link","resource.opaque":"Resource",refresh:"Refresh","loading.skills":"Loading skills\u2026","loading.dir":"Loading\u2026","tree.collapse":"Collapse","tree.expand":"Expand",path:"Path","root.label":"Root","editor.placeholder":"Select a text file in the tree on the left to start editing.","status.ready":"Ready","status.skill":"Skill","status.file":"File","status.unsaved":"Unsaved","status.saved":"Saved","confirm.discard.title":"Discard unsaved changes?","confirm.discard.body":"Your changes to {name} are not saved. Switching files will lose them.","confirm.discard.ok":"Discard changes","mtime.label":"Modified {time}","open.in.new.tab":"Open in new tab",preview:"Preview","memoryTab.label":"Memory","memoryTab.label.pending":"\u{1F534} Memory ({count})","skillsTab.label":"Skills","skillsTab.label.pending":"\u{1F534} Skills ({count})","todosTab.label":"Todos","todosTab.label.pending":"\u{1F534} Todos ({count})","coiTab.label":"COI Dispatch","coiTab.label.pending":"\u{1F534} COI Dispatch ({count})","broadcastTab.label":"Broadcast","broadcast.tab.guide":"Guide","broadcast.tab.messages":"Messages","broadcast.tab.rooms":"Rooms","broadcast.tab.settings":"Settings","broadcast.settings.wsCoord.title":"Workspace coordination (ws-coord)","broadcast.settings.wsCoord.desc":'Resource-occupancy coordination for parallel sessions in one workspace \u2014 declare files you will modify (de_ws_declare), auto-register writes, write-conflict detection (soft warning / hard block switchable), and de_ws_status to see "who is running and what they are doing". These switches only control this sub-feature; the "Session broadcast" master switch lives under Memory Evolve Settings \u2192 Config.',"broadcast.settings.wsCoord.enabled":"Enable workspace coordination","broadcast.settings.wsCoord.enabled.hint":'Registers de_ws_declare / de_ws_status / de_ws_release tools + write-conflict detection listeners + the activity snapshot section. Depends on the "Session broadcast" master switch (unavailable while broadcast is off). Off by default',"broadcast.settings.wsCoord.snapshot":"Activity snapshot section","broadcast.settings.wsCoord.snapshot.hint":"When \u22652 sessions are active in the workspace, inject one \u3010Workspace activity\u3011 line into the per-turn snapshot (with the current time and what each session is doing); zero cost with 0-1 active sessions","broadcast.settings.wsCoord.enforce":"Hard-block mode","broadcast.settings.wsCoord.enforce.hint":"Off by default (soft mode: trust the AI \u2014 conflicts warn but never block); when on, writes to files occupied by other sessions are denied at the tool layer (deny), and the AI sees the reason and adjusts on its own","broadcast.guide.intro.title":"What is Session Broadcast","broadcast.guide.intro.body":'Session broadcast = a message channel between DSH sessions: send messages to other sessions (the AI sends them via the de_broadcast send tool) and the receiver sees a "Session broadcast" notice in its next snapshot. Messages are managed like an inbox \u2014 subject + summary, auto-deleted once every recipient has read them.',"broadcast.guide.send.title":"How to send","broadcast.guide.send.body":'Just tell the AI "broadcast to session XX\u2026" (default is one-to-one; the recipient is the other session ID):',"broadcast.guide.send.item1":'One-to-one: give the recipient session ID (send them your "copy session ID" result and their AI can reply to you);',"broadcast.guide.send.item2":"Rooms: multi-member chat rooms that work across working directories \u2014 everyone in the room sees the message (send to room:<room-id>);","broadcast.guide.send.item3":"Project: visible to every session under that working directory (send to project:/absolute-path).","broadcast.guide.inbox.title":"Inbox (Messages tab)","broadcast.guide.inbox.body":"The list shows only unread non-room messages by default (read ones are hidden; room messages live inside the room):","broadcast.guide.inbox.item1":"Filter: unread / all / read; search subject, sender, content; paged 20 per page;","broadcast.guide.inbox.item2":'Click "expand" for the full text; the red "delete" is an admin delete (hidden from everyone);',"broadcast.guide.inbox.item3":"One-to-one messages are auto-deleted once every recipient has read them (consumed, out of the list).","broadcast.guide.room.title":"Rooms tab: multi-member chat rooms","broadcast.guide.room.body":"Rooms = multi-member collaboration chat rooms:","broadcast.guide.room.item1":"Expand a room to see member presence: \u{1F7E2} running = generating right now (you can wait; it sees messages within its turn), \u26AA idle / unknown = turn over or unknown (do not just wait);","broadcast.guide.room.item2":"Room messages share the inbox filters / search / paging; the creator can kick members and dissolve the room (system notices are sent);","broadcast.guide.room.item3":"Dissolved rooms keep their records for traceability; members can no longer join or post.","broadcast.guide.alias.title":"Session aliases: recognize a session at a glance","broadcast.guide.alias.body":"Give a session a friendly name (\u226410 chars) \u2014 shown in snapshots, lists and messages as an alias (short ID):","broadcast.guide.alias.item1":'The "My session" row on top: copy session ID / copy alias, then send it to the other side to start chatting;',"broadcast.guide.alias.item2":"The \u29C9 copy-session-ID / \u270E alias buttons at the top right of a session also work.","broadcast.guide.switch.title":"Switch","broadcast.guide.switch.body":'Session broadcast is off by default: enable "Session broadcast" under "Config" in the "Memory Evolve Settings" tab, then refresh to reveal this tab.',"broadcast.guide.wscoord.title":"Workspace coordination: parallel work without collisions","broadcast.guide.wscoord.body":'When several sessions edit the same project in parallel, use the workspace coordination in the "Settings" page to avoid overwriting each other:',"broadcast.guide.wscoord.item1":'Before starting, have the AI "declare which files you will change" (de_ws_declare) \u2014 others (and their AIs) can see who is editing what;',"broadcast.guide.wscoord.item2":"Write-time conflict detection: soft mode warns first (default); hard mode can be enabled \u2014 writes into files claimed by others are rejected outright;","broadcast.guide.wscoord.item3":'The "activity" overview (de_ws_status) shows who is running and what they are doing; the switch lives in the Settings page (requires the Session broadcast master switch).',"broadcast.mySessionId":"My session ID","broadcast.copyId":"Copy","broadcast.copied":"Copied","broadcast.loading":"Loading\u2026","broadcast.refresh":"Refresh","broadcast.messages.empty":"(no messages)","broadcast.messages.sender":"From","broadcast.messages.to":"To","broadcast.messages.direct":"direct","broadcast.messages.room":"room","broadcast.messages.project":"project","broadcast.messages.unread":"unread","broadcast.messages.long":"long","broadcast.message.expand":"Expand","broadcast.message.collapse":"Collapse","broadcast.message.delete":"Delete","broadcast.message.deleteConfirm":`Delete this message? (admin action, invisible to everyone)

{subject}`,"broadcast.message.deleted":"Deleted","broadcast.copyAlias":"Copy alias","broadcast.msg.unread":"unread","broadcast.msg.read":"read","broadcast.filter.unread":"Unread","broadcast.filter.all":"All","broadcast.filter.read":"Read","broadcast.searchPh":"Search subject/sender/content\u2026","broadcast.pagePrev":"Prev","broadcast.pageNext":"Next","broadcast.pageInfo":"Page {page}/{total}","broadcast.room.detail":"Details","broadcast.room.messages":"Room messages","broadcast.room.messages.empty":"(no room messages)","broadcast.messages.roomInRooms":"Room messages live inside their room \u2014 open it from the Rooms view","broadcast.rooms.empty":"(no rooms)","broadcast.roomSearchPh":"Search room name\u2026","broadcast.roomStatus.all":"All","broadcast.roomStatus.active":"Active","broadcast.roomStatus.dissolved":"Dissolved","broadcast.roomDays.0":"Any time","broadcast.roomDays.7":"Last 7 days","broadcast.roomDays.30":"Last 30 days","broadcast.room.status.active":"active","broadcast.room.status.idle":"idle","broadcast.room.status.dissolved":"dissolved","broadcast.room.online":"{online}/{total} online","broadcast.room.members":"Members","broadcast.room.kick":"Kick","broadcast.room.kickConfirm":"Kick member {member}? (a system notice is sent; the session loses room access)","broadcast.room.dissolve":"Dissolve","broadcast.room.dissolveConfirm":'Dissolve room "{name}"? (soft delete: record kept for traceability, members get a system notice, no further joins/messages)',"broadcast.room.dissolved":"dissolved","broadcast.room.copyId":"Copy room id","broadcast.room.lastActive":"Last active","broadcast.room.created":"Created","broadcast.room.presence.unknown":"unknown \xB7 no activity recorded","header.copySessionId":"\u29C9 Copy session ID","header.copySessionId.done":"\u2713 Copied","header.copySessionId.title":"Copy this session's ID (send it to another session: tell its AI your session ID so it can broadcast to you via de_broadcast)","header.setAlias":"\u270E Alias","header.setAlias.title":"Set a session alias (\u226410 chars) \u2014 shown as your friendly name in the snapshot / broadcast panel / messages","header.setAlias.placeholder":"alias (\u226410 chars)","header.setAlias.save":"Save","header.setAlias.clear":"Clear","header.setAlias.saved":"Alias saved","header.setAlias.cleared":"Alias cleared","advisor.header.toggle":"Session Review","advisor.header.toggle.title":"Open or collapse the Advisor review panel","promptTab.label":"Prompts","promptTab.label.active":"\u{1F534} Prompts ({count})","settingsTab.label":"Memory Evolve Settings","settingsTab.label.pending":"\u{1F534} Memory Evolve Settings","settingsTab.feature.guide":"Guide","settingsTab.feature.config":"Config","settingsTab.feature.version":"Version","version.current":"Current version","version.latest":"Latest version","version.statusLabel":"Status","version.status.latest":"Up to date","version.status.outdated":"Update available","version.status.no-release":"No releases yet","version.status.unsupported":"Auto-check unsupported","version.status.unknown":"Unknown","version.loading":"Checking\u2026","version.lastError":"Last check failed","version.checkTime":"Last checked","version.checking":"Checking\u2026","version.checkNow":"Check for updates","version.updating":"Updating\u2026","version.updateNow":"Update to {tag}","version.restart.title":"Restart required","version.restart.hint":"New code is on disk. Restart dsh web first, then refresh the browser (a page refresh alone will not load the new code).","version.releaseNotes":"Release notes","version.unsupported.hint":"Auto-check requires a git clone install. Reinstall with `git clone git@github.com:csyangwen/dsh-memory-evolve.git` to enable it.","version.note.no-release":"No release tags (v0.x.y) on the remote yet.","version.note.outdated":"A new version is available \u2014 update below (restart dsh web afterwards).","version.note.latest-exact":"You are on the latest release.","version.note.latest-contained":"Your checkout already contains the latest release (dev-track ahead or synced).","version.note.unsupported":"Plugin dir is not a git repository or git is unavailable.","version.error.bad-request":"Bad request: {message}","version.error.dirty":"Update rejected: {message}","version.error.busy":"Update rejected: {message}","version.error.target-changed":"Target version changed: {message}","version.error.untrusted":"Update rejected: {message}","version.error.unsupported":"Auto-check unsupported: {message}","version.error.error":"Update failed: {message}","version.error.network":"Network request failed: {message}","version.error.unknown":"Unknown error","memoryTab.feature.guide":"Guide","memoryTab.feature.suggestions":"Memory suggestions","skillsTab.feature.guide":"Guide","skillsTab.feature.skills":"Skill suggestions","skillsTab.feature.skillBrowser":"Skill manager","todosTab.feature.guide":"Guide","todosTab.feature.todoSuggestions":"Todo suggestions","todosTab.feature.todo":"Todos","modelsTab.label":"Model Settings","modelsTab.feature.models":"Model Settings","modelsTab.feature.guide":"Guide","modelsTab.guide.what.title":"What is Model Settings","modelsTab.guide.what.body":"A table view of every DSH provider and model, with per-model plugin-side settings (enabled state, note, reasoning levels). All settings belong to this plugin (models.json) \u2014 DSH configuration is never touched and nothing couples to other plugins:","modelsTab.guide.what.item1":'Columns: enabled switch, provider (with DSH activation state), model (name + ID), context / output capacity, reasoning levels, image-input marker (\u{1F5BC}), note; search and a "show reasoning levels" toggle;',"modelsTab.guide.what.item2":"Per model: enable / disable (a plugin-side availability flag \u2014 DSH routing is untouched), note, thinking support, allowed reasoning levels, recommended level, custom levels;","modelsTab.guide.what.item3":"Settings persist immediately (<memoryDir>/models.json) across restarts.","modelsTab.guide.config.title":"Per-model settings","modelsTab.guide.config.body":'Expand a row ("configure levels") to edit reasoning settings:',"modelsTab.guide.config.item1":"Enable / disable: decides which models the de_models tool lists by default (all enabled by default);","modelsTab.guide.config.item2":"Thinking support: when off the model cannot reason (only the off level remains);","modelsTab.guide.config.item3":'Recommended level: "auto" follows the model own recommendation by default; you can pin any available level;',"modelsTab.guide.config.item4":"Allowed levels: tick which levels may be used (all by default); custom levels (e.g. ultra) can be added / removed;","modelsTab.guide.config.item5":'Image input: models explicitly declaring image support show the "\u{1F5BC} image input" marker (from DSH model capability metadata, read-only); undeclared = unknown, no marker.',"modelsTab.guide.tool.title":"de_models tool (for the AI)","modelsTab.guide.tool.body":"This module also registers the de_models tool so the AI can query the available model (endpoint) list:","modelsTab.guide.tool.item1":'Only "enabled" models are returned by default (all=true shows everything incl. disabled), filterable by provider;',"modelsTab.guide.tool.item2":"Each model reports: enabled, DSH-activated, image input support (supportsImage: true / false / null=unknown), thinking support, allowed reasoning levels (incl. recommended and custom), note.","modelsTab.guide.switch.title":"Switch","modelsTab.guide.switch.body":'Model Settings are on by default; they can be turned off independently under "Config" in the "Memory Evolve Settings" tab like other modules \u2014 the tab and the de_models tool hide, settings data is kept.',"modelsTab.searchPh":"Search provider, model, or note\u2026","modelsTab.showReasoning":"Show reasoning levels","modelsTab.refresh":"Refresh","modelsTab.loading":"Loading\u2026","modelsTab.count":"{total} models \xB7 {enabled} enabled","modelsTab.loadFailed":"Load failed: {message}","modelsTab.empty":"(No models)","modelsTab.enabled":"Enabled","modelsTab.enable":"Enable","modelsTab.disable":"Disable","modelsTab.provider":"Provider","modelsTab.model":"Model","modelsTab.capacity":"Context/Output","modelsTab.reasoning":"Reasoning","modelsTab.note":"Note","modelsTab.notePh":"Add a note\u2026","modelsTab.dormant":"Inactive","modelsTab.thinking":"Support thinking","modelsTab.thinkingHint":"When off, this model cannot reason (only the off level stays available)","modelsTab.thinkingOff":"Thinking off","modelsTab.supportsImage":"\u{1F5BC} Image input","modelsTab.supportsImageHint":"This model explicitly declares image input support (from DSH model capability metadata inputModalities)","modelsTab.recommendedLevel":"Recommended level","modelsTab.recommendedAuto":"Auto (follow model recommendation)","modelsTab.levelsNone":"All disabled","modelsTab.editLevels":"Configure levels","modelsTab.closeEditor":"Collapse","modelsTab.editorTitle":"Available reasoning levels (check = allowed; recommended comes from the model)","modelsTab.recommended":"Recommended","modelsTab.addLevel":"Add","modelsTab.removeLevel":"Remove","modelsTab.levelIdPh":"Level ID (e.g. ultra)","modelsTab.levelNamePh":"Display name (e.g. Ultra)","modelsTab.save":"Save","modelsTab.saving":"Saving\u2026","modelsTab.cancel":"Cancel","uiSettingsTab.label":"Web UI Settings","uiSettingsTab.feature.mixed":"General","uiSettingsTab.feature.guide":"Guide","uiSettingsTab.features.title":"Feature switches","uiSettingsTab.features.help":'Every feature has its own small switch, **all off by default** \u2014 you turn them on deliberately; changes apply immediately (features stay under "General" until they mature and get their own categories).',"uiSettingsTab.guide.what.title":"What is Web UI Settings","uiSettingsTab.guide.what.body":"Style-level tweaks for the DSH web GUI \u2014 no framework source changes, pure client-side injection (CSS + DOM enhancement) that survives DSH updates; future extensions (themes etc.) all land in this module.","uiSettingsTab.guide.switch.title":"Switches","uiSettingsTab.guide.switch.body":'The module switch lives under "Config" in the "Memory Evolve Settings" tab (off by default); the per-feature switches live in the "General" sub-tab \u2014 also all off by default, turned on deliberately.',"uiSettingsTab.guide.features.title":"Features","uiSettingsTab.guide.features.body":'Each feature has an independent switch in the "General" page; it takes effect immediately:',"uiSettingsTab.guide.features.item1":"Session filter: the left session list shows only active sessions; purely idle ones collapse, one click switches back to all;","uiSettingsTab.guide.features.item2":"Wide conversation: the middle transcript area widens from about half to about 95%, more comfortable for long messages;","uiSettingsTab.guide.features.item3":"Wide bubbles: the user message bubble grows from its 525px cap to about 80% width (pairs best with the wide conversation);","uiSettingsTab.guide.features.item4":"Context warning: the context ring turns yellow above 30% and red above 40% \u2014 a nudge to bookmark or start a fresh session;","uiSettingsTab.guide.features.item5":"Mermaid rendering: mermaid code blocks in messages render into diagrams; on failure they fall back to plain code blocks.","uiSettings.feature.sessionFilter":"Session filter","uiSettings.feature.sessionFilter.hint":"The left session list shows only active sessions (purely idle ones collapse; one click switches back to all); the filter bar appears only while this is on","uiSettings.feature.wideChat":"Wide conversation area","uiSettings.feature.wideChat.hint":"Widen the conversation transcript/input area from roughly half to about 95% of the right pane (aligned with the tabs bar above)","uiSettings.feature.wideBubble":"Wide message bubble","uiSettings.feature.wideBubble.hint":'Widen the user message bubble from its 525px cap to about 80% of the content column (pairs well with "Wide conversation area")',"uiSettings.feature.contextWarn":"Context usage warning","uiSettings.feature.contextWarn.hint":"The context-usage ring beside the input box turns yellow above 30% occupancy and red above 40%; back to its default color below the threshold","uiSettings.feature.mermaidRender":"Mermaid diagram rendering","uiSettings.feature.mermaidRender.hint":"Render mermaid code blocks in messages as diagrams (DSH itself does not render mermaid); the engine loads lazily on first diagram, works on PC and mobile alike, and falls back to the code block on failure","uiSettings.filter.on":"Running only","uiSettings.filter.off":"All","uiSettings.running.label":"{count} running","uiSettings.ungrouped":"Ungrouped","syncTab.label":"Memory Sync","syncTab.loading":"Loading\u2026","syncTab.loadFailed":"Failed to load status: {message}","syncTab.tab.project":"This project","syncTab.tab.global":"Global memory","syncTab.tab.remote":"Shared memory repo","syncTab.section.project":"Project memory (KEY + project log + archive + project todos)","syncTab.section.global":"Global memory (device-level, project-independent)","syncTab.section.remote":"Shared memory repo (device-level config)","syncTab.project.mode.off":"Disabled (local only)","syncTab.project.mode.off.desc":"Project memory stays on this machine: no repo, no entry IDs, no reconciliation with any remote","syncTab.project.mode.main":"Mode A: main code repo (zero config)","syncTab.project.mode.main.desc":"Project memory lives in a dedicated branch of your code repo (never touches your code). **A public code repo means public memory**","syncTab.project.mode.shared":"Mode B: shared memory repo","syncTab.project.mode.shared.desc":"Project memory lives in a dedicated branch of the shared memory repo, fully isolated from your code","syncTab.project.mode.shared.needRemote":'Shared memory repo is not enabled \u2014 switched to "Shared memory repo", please enable and save the URL first',"syncTab.status.title":"Current memory remote","syncTab.status.disabled":"Disabled \u2014 enable sync for this project above to begin","syncTab.status.notInit":"Enabled, but this project is not initialized yet \u2014 pick Mode A or B above to initialize","syncTab.status.remoteKind":"Memory remote: {kind}","syncTab.status.remoteKindMain":"main code repo","syncTab.status.remoteKindShared":"shared memory repo","syncTab.status.remoteKindNone":"not mounted","syncTab.status.originUrl":"Remote URL: {url}","syncTab.status.branch":"Remote branch: {branch}","syncTab.status.counts":"{pending} not pushed \xB7 {behind} behind \xB7 {conflicts} conflicts","syncTab.status.migrate":'Legacy memory dir found: {dir} \u2014 "Start sync" will migrate it',"syncTab.global.title":"Global memory","syncTab.global.uncommitted":"{n} tracks not pushed (uncommitted + unpushed commits)","syncTab.global.trackMemory":"Global memory (MEMORY.md)","syncTab.global.trackUser":"User profile (USER.md)","syncTab.global.trackDaily":"Daily logs (daily/*.md)","syncTab.global.trackTodo":"Todos: life/work/daily (TODOS-*.md)","syncTab.global.hint":"Global memory (user profile / daily logs / todos) belongs to no single project \u2014 all projects share this one set of switches; push always requires your explicit click","syncTab.global.sync":"Fetch & merge","syncTab.global.push":"Push","syncTab.global.notInit":'Shared memory repo is not enabled \u2014 global memory is unavailable; enable and save the URL on the "Shared memory repo" page first',"syncTab.remote.desc":"One shared memory repo for the whole device: project Mode B and global memory (user profile / daily logs / todos) both reference it \u2014 enable and save the URL once.","syncTab.remote.placeholder":"Paste a shared memory repo URL (e.g. ssh://git@.../dsh-memories.git)","syncTab.remote.save":"Enable & save","syncTab.remote.modify":"Modify & save","syncTab.remote.current":"Current shared memory repo: {url}","syncTab.remote.mode.off":"Disabled","syncTab.remote.mode.off.desc":"Project Mode B and global memory unavailable; synced data and the URL are kept","syncTab.remote.mode.on":"Enabled","syncTab.remote.mode.on.desc":"Project Mode B and global memory available; save the repo URL first","syncTab.remote.disable":"Disable shared memory repo","syncTab.remote.switchHint":"Disabling turns off the shared memory repo (project Mode B and global memory become unavailable); synced data and the URL are kept, re-enable anytime.","syncTab.actions.sync":"Fetch & merge","syncTab.actions.push":"Push","syncTab.actions.nothingToSync":"Nothing to sync \u2014 enable this project or a global track first","syncTab.conflicts.title":"Conflicts ({count} \u2014 both devices edited the same entry)","syncTab.conflicts.titleGlobal":"Global {track}: {count} pending conflicts (both devices edited the same entry)","syncTab.conflicts.base":"Base","syncTab.conflicts.ours":"Ours","syncTab.conflicts.theirs":"Theirs","syncTab.conflicts.oursBtn":"Use ours","syncTab.conflicts.theirsBtn":"Use theirs","syncTab.conflicts.bothBtn":"Keep both","syncTab.footnote":"Writing memory stays real-time local (no Git touched); sync batches up. Conflict markers never hit disk; resolving auto-commits.","bookmarkTab.label":"Bookmarks","bookmark.tab.list":"List","bookmark.tab.guide":"Guide","bookmark.list.title":"Session bookmarks","bookmark.list.help":"Click a bookmark to jump to that turn; star \u2606 at each turn tail to bookmark, \u2605 when bookmarked (rename/delete); searchable list; fork from any turn (official mid-turn branch buttons are taken over by Memory Evolve).","bookmark.refresh":"Refresh","bookmark.loading":"Loading\u2026","bookmark.empty":"(No bookmarks yet \u2014 click \u2606 at a turn tail)","bookmark.defaultLabel":"Turn {n}","bookmark.turn":"Turn {n}","bookmark.prompt.create":"Bookmark name (editable):","bookmark.prompt.rename":"New name:","bookmark.confirm.delete":'Delete bookmark "{label}"?',"bookmark.noSession":"Cannot determine the current session (refresh the page and retry)","bookmark.search.placeholder":"Search bookmarks\u2026","bookmark.search.empty":"(No matching bookmarks)","bookmark.star.title.off":"\u2606 Bookmark this turn (Memory Evolve session bookmarks)","bookmark.star.title.on":"\u2605 Bookmarked: {label} (Memory Evolve \u2014 click to rename/delete)","bookmark.menu.rename":"Rename","bookmark.menu.delete":"Delete","bookmark.action.jump":"Jump","bookmark.action.fork":"Fork","bookmark.action.rename":"Rename","bookmark.action.delete":"Delete","bookmark.fork.title":"Fork from this turn (Memory Evolve enhancement)","bookmark.fork.confirm":"Officially you can only fork from the last message. Fork from this turn ({n}) anyway? (Memory Evolve enhancement)","bookmark.fork.working":"Creating fork session\u2026","bookmark.fork.ok":"New session created: {id} (see the session list on the left)","bookmark.jump.hint":"Click to jump to this turn","bookmark.jumping":"Locating\u2026","bookmark.jump.ok":'Jumped to "{label}"',"bookmark.jump.notFound":'Could not find the message for "{label}" (may be compacted or outside the loaded window)',"bookmark.jump.noChat":"Chat tab not found \u2014 cannot jump","bookmark.renamed":"Renamed","bookmark.deleted":"Deleted","bookmark.error":"Failed: {message}","bookmark.guide.what.title":"What are session bookmarks","bookmark.guide.what.body":"Star any completed turn, then jump back to it from the list in one click; you can also fork an official branch session from any turn \u2014 start a new line from a mid-way decision point. Data lives in a plugin sidecar (official session logs are never touched); the official mid-turn branch buttons are taken over by this plugin (a confirm dialog, then the official fork path).","bookmark.guide.star.title":"How to star","bookmark.guide.star.body":'Every completed turn has a \u2606 button at its tail: click it, name it (default "Turn N") and it is bookmarked; \u2605 means bookmarked \u2014 click again to rename or delete. The small icon does not crowd Copy / Branch.',"bookmark.guide.list.title":"List and jump","bookmark.guide.list.body":"This tab lists every bookmark of the current session (label, turn, time, summary). Click to jump: it switches back to the Chat tab and scrolls to that turn; if the target lies outside the loaded history window it fetches older messages first.","bookmark.guide.switch.title":"Switch","bookmark.guide.switch.body":'Off by default; enable "Session bookmarks" under Memory Evolve Settings \u2192 Config. When off, stars and this tab hide; the sidecar file is kept.',"panel.guide.bookmark.title":"Session bookmarks","panel.guide.bookmark.desc":"Star any turn and jump back from the list; fork official branch sessions from any turn (including taking over official mid-turn branch buttons). Independent switch, off by default.","panel.config.bookmarkEnabled":"Session bookmarks","panel.config.bookmarkEnabled.hint":'Enable session bookmarks: a \u2606 star on each completed turn tail + a Bookmarks tab for the list and jump; fork official branch sessions from any turn (list "Fork" button, or click the official branch button \u2014 mid-turn buttons are taken over with a confirm dialog). Data lives in <memoryDir>/session-bookmarks.json (per-session, keyed by turn seq). **Independent submodule** (off by default; pure UI + host API, no AI tools); when off, stars and the tab hide, the data file is kept.',"panel.config.todoEnabled":"Todos","panel.config.todoEnabled.hint":"Enable the dtodo tool, Todos tab, and due reminders. When off, the tab hides immediately and todo writes stop; existing data and the sync track stay intact.","memoryTab.feature.config":"Config","memoryTab.feature.todoSuggestions":"Todo suggestions","memoryTab.feature.skills":"Skill suggestions","memoryTab.feature.skillBrowser":"Skill manager","memoryTab.feature.todo":"Todos","memoryTab.guide.tracks.title":"Five memory tracks: the AI long-term working memory","memoryTab.guide.tracks.body":'Memory is organized in five tiers by "who should see it"; injection scope narrows by tier and tiers never pollute each other \u2014 what should be injected is auto-injected, the rest is read on demand:',"memoryTab.guide.tracks.item1":"User profile (user): who you are \u2014 preferences, habits, communication style. Injected into every session, so you never re-introduce yourself;","memoryTab.guide.tracks.item2":"Long-term memory (memory): global facts \u2014 environment, tools, general conventions. Injected into every session;","memoryTab.guide.tracks.item3":"Key project facts (key): conventions, decisions, architecture, pitfalls of the current project. Injected only into this project sessions, filtered by git branch \u2014 each branch keeps its own conventions;","memoryTab.guide.tracks.item4":"Project log (project): the running record of this project. Never injected; the AI reads it on demand, history is traceable;","memoryTab.guide.tracks.item5":"Daily log (daily): per-day progress notes. Never injected; read on demand \u2014 like a daily work report.","memoryTab.guide.files.title":"File tabs: read the memory files directly","memoryTab.guide.files.body":"This tab previews AGENTS.md (global rules) and every memory file. File tabs are read-only \u2014 edit through the memory tool or via the actions in this tab, to avoid breaking the \xA7-delimited format:","memoryTab.guide.files.item1":"Beauty view: each entry is a card (time / branch / tag badges + content), searchable and filterable; a plain-text view shows the raw text;","memoryTab.guide.files.item2":"The KEY tab lets you manually add long-term project facts (optionally scoped to certain git branches); they are injected next turn after saving;","memoryTab.guide.files.item3":"Every entry can be edited (writes need confirmation), deleted (exact full-entry match, no accidental deletions), archived / restored to the main track.","memoryTab.guide.branch.title":"Git branch awareness: different branches, different conventions","memoryTab.guide.branch.body":"Different branches of the same project can carry completely different conventions; project-level memory tracks the current branch end to end:","memoryTab.guide.branch.item1":'Key entries can carry a branch-scope marker (no marker = visible on all branches); injection only includes "no marker" + "covers the current branch";',"memoryTab.guide.branch.item2":"Log entries are automatically tagged with their source branch ([git branch name]), so cross-branch reviews never mix things up.","memoryTab.guide.maintain.title":"Edit & maintain: day-to-day care of the memory","memoryTab.guide.maintain.body":"All memory maintenance happens right here:","memoryTab.guide.maintain.item1":"Edit the body only \u2014 timestamps / branch / tags are maintained by the program;","memoryTab.guide.maintain.item2":"Delete: exact full-entry matching (long entries that contain others are never accidentally removed); deletion is irreversible;","memoryTab.guide.maintain.item3":"Archive / restore: move low-frequency entries out of the main track (kept for reference, no injection), restore them anytime.","memoryTab.guide.suggestions.title":"Memory suggestions: the AI proposes, you decide","memoryTab.guide.suggestions.body":'The background review distills "what is worth remembering" into a pending queue \u2014 the AI never writes into the memory on its own:',"memoryTab.guide.suggestions.item1":"Approve: optionally edit the text first and pick the target track (long-term memory / user profile / key project facts); it is injected with the next snapshot;","memoryTab.guide.suggestions.item2":"Archive: no injection, kept for reference, restorable; Reject: discard.","memoryTab.guide.confirm.title":"The confirmation system: why your approval is required","memoryTab.guide.confirm.body":"Memory writes genuinely change the AI behavior \u2014 once written they enter the context and affect every later reply. So everything goes through your confirmation first: that is the gate of memory evolution. You are in charge.","skillsTab.guide.what.title":"What a skill is: a methodology manual for the AI","skillsTab.guide.what.body":"A skill = a methodology document for the AI (SKILL.md: name + description + steps). It is injected into every session system prompt \u2014 next time the AI meets the same kind of task it follows your process instead of re-inventing it:","skillsTab.guide.what.item1":"The skill library lives at ~/.agents/skills by default (one directory per skill);","skillsTab.guide.what.item2":"DSH also scans project skills, bundled skills and custom directories \u2014 all visible and manageable in this tab.","skillsTab.guide.how.title":"How skills form","skillsTab.guide.how.body":"Methodologies learned the hard way are solidified into skills through two main paths:","skillsTab.guide.how.item1":'Background review: when the AI notices a recurring pattern it creates a skill, which lands in "skill suggestions" \u2014 after your approval it moves into the library;',"skillsTab.guide.how.item2":'The skill_manage tool: just tell the AI "save this process as a skill" and it creates / updates one;',"skillsTab.guide.how.item3":'Create sparingly: only "recurring, hard-won, reusable" skills \u2014 every skill is injected into every session and affects the context.',"skillsTab.guide.pending.title":"Skill suggestions","skillsTab.guide.pending.body":"Review-created skills wait for your confirmation here:","skillsTab.guide.pending.item1":"Approve: moved into the skill library (~/.agents/skills), injected with the system prompt, immediately usable in every session;","skillsTab.guide.pending.item2":"Reject: discard the skill.","skillsTab.guide.manager.title":"Skill manager: browse, edit, custom directories","skillsTab.guide.manager.body":"The full skill manager (three panes: skill list / directory tree / file view-edit):","skillsTab.guide.manager.item1":"All skills are grouped by source (user user-* / custom / bundled / project project-*), searchable and filterable;","skillsTab.guide.manager.item2":"Custom skill directories: add / remove any skill directory (<dir>/<skill>/SKILL.md or <dir>/<skill>.md layout);","skillsTab.guide.manager.item3":"File browsing & editing: directory tree + text view / edit (scoped to skill directories; out-of-bounds, binary and oversized files are rejected);","skillsTab.guide.manager.item4":"Disabled-list and custom directories persist across restarts.","skillsTab.guide.disable.title":"Disable / enable: hide skills you do not want","skillsTab.guide.disable.body":"One click removes a skill from the model skill catalog (the model no longer sees it and the skill tool refuses to load it):","skillsTab.guide.disable.item1":"Re-enable anytime; the choice persists;","skillsTab.guide.disable.item2":"System skills (project source) cannot be disabled by design.","skillsTab.guide.dirs.title":"Custom skill directories","skillsTab.guide.dirs.body":'Add / remove your own skill directories in "Skill manager" (e.g. ~/.hermes/skills); paths overlapping an existing skill root are rejected; persisted and reloaded after restart.',"skillsTab.guide.restraint.title":"Creation discipline: restraint is what makes skills effective","skillsTab.guide.restraint.body":"Skills are injected into every session system prompt and affect context and cache \u2014 create sparingly:","skillsTab.guide.restraint.item1":'Only create skills for "hard, recurring problems you will meet again";',"skillsTab.guide.restraint.item2":"Never create a skill for a one-off or trivial task.","todosTab.guide.tracks.title":"Four todo tracks: everything in its place","todosTab.guide.tracks.body":"Todos are filed by target, isomorphic to the memory system:","todosTab.guide.tracks.item1":"Life (life): personal errands;","todosTab.guide.tracks.item2":"Work (work): cross-project business;","todosTab.guide.tracks.item3":"This project (project): todos of the current working directory \u2014 invisible from other directories, isolated by cwd;","todosTab.guide.tracks.item4":"Today (daily): per-day todo files, with past days reviewable (grouped by date).","todosTab.guide.add.title":"How to add","todosTab.guide.add.body":"Two ways, pick either:","todosTab.guide.add.item1":'Tell the AI "remember / I need to do X" (optionally say work / life / this project / today) and it files the todo into the right track;',"todosTab.guide.add.item2":"Add manually in this tab input (quadrant and due date optional).","todosTab.guide.pending.title":"Todo suggestions: the AI cannot assign you work on its own","todosTab.guide.pending.body":"AI-proposed todos enter a pending queue first, effective only after your confirmation:","todosTab.guide.pending.item1":"Approve: written into the target track (a todo stays a todo, never becomes memory);","todosTab.guide.pending.item2":"Archive: kept for reference; Reject: discard.","todosTab.guide.attrs.title":"Status & attributes","todosTab.guide.attrs.body":"Every todo carries full metadata to track:","todosTab.guide.attrs.item1":"Quadrant (important \xD7 urgent), due date, optional category;","todosTab.guide.attrs.item2":"Status: pending / doing / done (completion time stamped) / blocked / cancelled;","todosTab.guide.attrs.item3":"List / board views: list tabs by track with status / quadrant filters; board shows a 2\xD72 quadrant grid; each item can be done / restored, inline-edited, deleted (with confirm).","todosTab.guide.view.title":"Smart view: only what needs attention","todosTab.guide.view.body":"By default only items needing attention are shown (overdue / due today / current project / important-urgent, max 8) to avoid noise:","todosTab.guide.view.item1":'Past daily todos are read on demand \u2014 open the "past" tab to query history;',"todosTab.guide.view.item2":'Check "show expired" to reveal overdue leftovers (hidden by default).',"todosTab.guide.remind.title":"Due reminders: the AI keeps watch for you","todosTab.guide.remind.body":"The AI checks todos at the end of every turn and reminds you of overdue / due items in its reply \u2014 you never have to keep track yourself.","todo.track.life":"Life","todo.track.all":"All","todo.track":"Track","todo.track.work":"Work","todo.track.project":"This project","todo.track.daily":"Today","todo.track.past":"Past","todo.projectHint":"No working directory for this session \u2014 project todos unavailable (life/work/today only).","todo.help":"Four tracks: Life=personal errands; Work=cross-project tasks; This project=the current working directory's todos (invisible from other dirs); Today=today's tasks (one file per day). Past daily todos (earlier days) are not loaded by default \u2014 open the \u201CPast\u201D tab or tick \u201CShow expired\u201D to query history (expired leftovers stay hidden until then). To add: type content, optionally pick a quadrant (important \xD7 urgent) and a due date, then hit Add \u2014 or just tell me \u201Cadd a todo, it's for work/life/this project/today\u201D and I will file it in the right track.","todo.showExpired":"Show expired","todo.pastHint":"Past daily todos are mostly expired leftovers and are hidden by default; tick \u201CShow expired\u201D to view them.","todo.addPlaceholder":"Type a todo (multi-line ok), pick quadrant/due, add\u2026","todo.add":"Add","todo.added":"Todo added","todo.done":"Done","todo.undone":"Restore","todo.edit":"Edit","todo.save":"Save","todo.cancel":"Cancel","todo.updated":"Updated","todo.deleted":"Deleted","todo.deleteConfirm":`Delete this todo? This cannot be undone.

{snippet}`,"todo.due":"Due","todo.overdue":"Overdue","todo.all":"All","todo.filterStatus":"Status","todo.filterQuadrant":"Quadrant","todo.status.active":"Active","todo.status.pending":"Pending","todo.status.doing":"Doing","todo.status.done":"Done","todo.status.blocked":"Blocked","todo.status.cancelled":"Cancelled","todo.quadrant":"Quadrant","todo.quadrant.none":"Unclassified","todo.quadrant.q1":"Important & urgent","todo.quadrant.q2":"Important, not urgent","todo.quadrant.q3":"Urgent, not important","todo.quadrant.q4":"Neither","todo.empty":"(No todos yet \u2014 add one)","todo.view.mode":"View","todo.view.list":"List","todo.view.board":"Board","todo.board.empty":"No todos in this quadrant","todo.board.cycleStatus":"Click to cycle status","memoryTab.cwd":"Session working directory","memoryTab.loading":"Loading\u2026","memoryTab.warning":"These files are \xA7-delimited structured memory. If you open them with a system tool, edit with caution \u2014 careless changes can break the format and corrupt memory reads.","memoryTab.readonly":"Read-only","memoryTab.open":"Open file","memoryTab.opened":"Opened with the system tool","memoryTab.empty":"(missing or empty)","memoryTab.noCwd":"(no working directory for this session \u2014 project memory unavailable)","memoryTab.truncated":"(content truncated for display)","memoryTab.pagePrev":"Previous","memoryTab.pageNext":"Next","memoryTab.pageInfo":"Page {page}/{total} \xB7 {count} entries","memoryTab.viewPretty":"Pretty view","memoryTab.viewRaw":"Raw text","memoryTab.searchPlaceholder":"Search content, time or tag\u2026","memoryTab.noResults":"No matching entries \u2014 try another keyword.","memoryTab.projectTag":"Project tag","memoryTab.entryCount":"{count} entries","memoryTab.keyAddHelp":"Manually add a durable project fact (convention/decision/architecture/pitfall); it is written to KEY.md and injected into the context from the next turn on.","memoryTab.keyAddPlaceholder":"Type a key project fact, e.g. this project uses pnpm workspaces\u2026","memoryTab.keyAdd":"Save","memoryTab.keyAdded":"Key fact saved \u2014 it will be injected from the next turn","memoryTab.memoryAddPlaceholder":"Type a durable global fact/convention/environment note, e.g. internal Nexus registry\u2026","memoryTab.userAddPlaceholder":"Type a user preference/habit/communication note, e.g. Chinese replies by default\u2026","memoryTab.memoryUserAddHelp":"Manual non-project long-term memory write (global fact / user profile); the date is stamped automatically and it injects globally from the next turn.","memoryTab.memoryAdd":"Save","memoryTab.memoryUserAdded":"Saved \u2014 it will inject globally from the next turn","memoryTab.delete":"Delete","memoryTab.deleteConfirm":`Delete this memory entry? This cannot be undone.

{snippet}`,"memoryTab.deleted":"Entry deleted","memoryTab.edit":"Edit","memoryTab.save":"Save","memoryTab.cancel":"Cancel","memoryTab.updated":"Entry updated","memoryTab.editHint":"Content only: timestamps and branch tags are program-maintained and cannot be changed; the \xA7 delimiter cannot be typed.","memoryTab.editConfirm":`This entry is injected into the session context (the model's prompt) right after saving. Save anyway?

{snippet}`,"memoryTab.archive":"Archive","memoryTab.archiveConfirm":`Archive this entry? It leaves the main memory (no longer injected) and can be promoted back any time.

{snippet}`,"memoryTab.archived":"Archived (no longer injected; can be promoted back)","memoryTab.promote":"Promote to memory","memoryTab.promoted":"Promoted back into the main memory","memoryTab.keyScope":"Branch scope","memoryTab.keyScopeLabel":"Branch","memoryTab.keyScopeAll":"All branches","memoryTab.keyScopeAllHint":"All branches = visible everywhere","memoryTab.keyScopeAllWeight":"(checking it clears branch picks)","memoryTab.keyScopeHint":"Click to change the branch scope","memoryTab.keyScopeSaved":"Branch scope updated","memoryTab.keyScopeSave":"Save","memoryTab.keyScopeCancel":"Cancel","memoryTab.keyBranchInfo":"current branch: {branch} \u2014 only untagged entries or entries covering this branch are injected","memoryTab.gitBranch":"The git branch this record belongs to","memoryTab.dshOnly":"DSH-only","memoryTab.dshOnlyHint":"This entry is injected into DSH sessions only; external executors (COI tasks) skip it \u2014 for DSH-specific discipline/rules/architecture facts","memoryTab.dshOnlyOn":"DSH-only","memoryTab.dshOnlyOff":"Unmark DSH-only","memoryTab.dshOnlySet":"Marked DSH-only (skipped when injecting into external executors)","memoryTab.dshOnlyRemoved":"DSH-only mark removed (visible to external executors)","memoryTab.dshOnlyToggleHint":"Toggle the DSH-only mark: the entry reaches DSH sessions only, external executors (COI) skip it","memoryTab.dshOnlyAdd":"DSH-only (do not inject into external executors)","memoryTab.desc.project":"Project log: auto-recorded per turn; never injected, read on demand by the model.","memoryTab.desc.key":"Key project facts: conventions/decisions/pitfalls, injected into this project's sessions; written when important, addable/deletable manually.","memoryTab.desc.daily":"Daily log: per-day progress records with program-tagged project labels; never injected, read on demand.","memoryTab.desc.user":"User profile: preferences and habits, injected into every session; writes need review + confirmation.","memoryTab.desc.memory":"Long-term memory: global environment/project facts, injected into every session; writes need review + confirmation.","memoryTab.desc.archive-user":"Archived user facts: not good enough for the main track, never injected; can be promoted back or deleted.","memoryTab.desc.archive-memory":"Archived memory facts: not good enough for the main track, never injected; can be promoted back or deleted.","memoryTab.desc.archive-key":"Archived key project facts: not good enough for the main track (or paused from injection), never injected; can be promoted back or deleted.","memoryTab.desc.agents":"Global rules: cross-session user rules (AGENTS.md), injected with the system prompt.","panel.suggestions.title":"Pending memory suggestions","panel.suggestions.empty":"No pending suggestions.","panel.suggestions.help":"Global-track suggestions produced by the background review: approve writes them into the memory files (injected with the snapshot); archive keeps them aside (never injected); reject drops them.","panel.todoSuggestions.title":"Pending todo suggestions","panel.todoSuggestions.empty":"No pending todo suggestions.","panel.todoSuggestions.help":"Todo suggestions from the background review: approve writes into the matching todo track (a todo stays a todo); archive keeps aside; reject drops.","panel.guide.title":"Guide","panel.guide.intro":'memory-evolve is a "memory & self-evolution" toolkit: it turns conversations into durable memory, todos and skills \u2014 the AI gets to know you better over time and never loses context across sessions. Here is what each module does and how to use it.',"panel.guide.memory.title":"Memory read/write (memory tool)","panel.guide.memory.desc":'Five tracks: global memory, user profile, key project facts (auto-injected and git-branch aware \u2014 only facts relevant to the current branch reach the context), project log, daily log. How to use: just chat \u2014 the AI logs progress every turn; for important facts say "remember: the deploy port is 8080"; when resuming days later ask "check the memory" and it picks up seamlessly.',"panel.guide.review.title":"Memory review (self-evolution)","panel.guide.review.desc":"Every N turns (10 by default, configurable) the AI reviews the conversation and distills what is worth remembering into suggestions for your confirmation \u2014 it never writes into the memory on its own. Just approve or reject in the Memory tab queue from time to time.","panel.guide.todo.title":"Todo management (dtodo)","panel.guide.todo.desc":'Say "remember / I need to do X" and it becomes a structured todo (auto-filed into life / work / project / daily, with important-urgent flags and due dates); the AI reminds you of due items at the end of its replies. AI-proposed todos land in a pending queue first. Manage everything in the Todos tab.',"panel.guide.skill.title":"Skill accumulation (skill_manage)","panel.guide.skill.desc":'Methodologies learned the hard way can be solidified into skills; next time the same kind of task follows the process. Just say "save this process as a skill"; keep creation restrained and high-value. Browse, search and enable / disable skills in the Skills tab.',"panel.guide.search.title":"Local file search (memory_evolve_search_local_files)","panel.guide.search.desc":'When the memory has no answer and you need local material, tell the AI "search the machine for XX" \u2014 by filename (documents only by default, all types on request); "which document mentioned XX" searches file content and returns hits with snippets. Four modes under "Config": filename + content / filename only / content only / off. Off by default \u2014 the tool is invisible to the model until enabled.',"panel.guide.coi.title":"COI dispatch (de_coi)","panel.guide.coi.desc":'Dispatch tasks to external CLI agents (kimi / codex / grok / hermes\u2026): unified scheduling without blocking, live progress, layered sessions with one-click resume, cross-COI chaining, results archived and distilled into memory. Say "dispatch XX to kimi / codex" or use the COI Dispatch tab. Off by default: enable "COI dispatch" under Config.',"panel.guide.prompt.title":"Prompt manager","panel.guide.prompt.desc":'Turn recurring working patterns into prompt assets: pick one and inject \u2014 the model sees it next turn without interrupting the reply; supports one-shot, N turns, or every-M-turns reminders (numbers freely editable, auto-expiring by turn count), stoppable anytime; ad-hoc injection works without creating a prompt first. Off by default: enable "Prompt manager" under Config.',"panel.guide.models.title":"Model settings (de_models)","panel.guide.models.desc":'The "Model settings" tab + de_models tool: a table of DSH providers and models with plugin-side per-model settings (enabled, note, thinking support, allowed / recommended reasoning levels incl. custom levels) \u2014 these settings only affect this plugin (de_models queries and tab display); DSH own model settings stay untouched. Off by default: enable "Model settings" under Config.',"panel.guide.advisor.title":"Session review (Advisor)","panel.guide.advisor.desc":'Attach an independent reviewer to every session \u2014 it only observes what you see in the UI (no thinking / tool calls), reviews each turn in real time and nudges you as "user instructions" when needed (info / nit / concern / blocker; info is record-only by default; in the chat flow these appear as collapsed [severity] lines so you can tell them apart). It works as a persistent session \u2014 full context, never truncated; the panel supports starting a fresh reviewer, asking it directly, and four levels of constraints (system prompt / project / session / reviewer-session, most-local wins). Off by default: open the master switch under Config, then enable per session in the floating panel; the reviewer model inherits the session model by default and can be set separately.',"panel.guide.broadcast.title":"Session broadcast (de_broadcast)","panel.guide.broadcast.desc":'Message passing between DSH sessions: copy your session ID (\u29C9 button in the session header), send it to another session and let its AI use de_broadcast send to reach you \u2014 the receiver snapshot gets a targeted unread notice (visible only to the receiver), the AI reads the full text via list / read, auto-deleted once everyone has read it; very long content is stored to a file. Rooms support multi-member collaboration across working directories; project groups reach a whole directory. Off by default: enable "Session broadcast" under Config.',"panel.guide.session.title":"Session search (de_session_search)","panel.guide.session.desc":'Let the AI search the history of other AI tools (Codex currently) \u2014 "when did we do XX in Codex" just works: keyword hits with message snippets and context windows; scope by cwd, control scale with sort / limit / window; zero resident state \u2014 no index, no cache, read-only live scans. Off by default: enable "Session search" under Config.',"panel.guide.sessionOrch.title":"Session orchestration (de_session)","panel.guide.sessionOrch.desc":'Let the AI create / wake DSH sessions programmatically \u2014 spawn builds a standard session (fully isomorphic to a manual one: system prompt / tools / memory snapshot / persistence, listed on the left and adoptable) that starts running immediately; wake resumes an existing session with a task (queued if busy); status / list report state. Discipline: the AI never bulk-wakes sessions \u2014 you stay in command. Off by default: enable "Session orchestration" under Config; pairs well with broadcast rooms.',"panel.guide.uiSettings.title":"Web UI Settings","panel.guide.uiSettings.desc":'Style-level tweaks for the DSH web GUI (pure client-side injection): independent switches in the "Web UI Settings" tab "General" page \u2014 session filter (left list shows only active), wide conversation area, wide message bubbles, context-usage warning, Mermaid rendering. Off by default.',"panel.guide.canvas.title":"Infinite canvas","panel.guide.canvas.desc":'Collect scattered files / images / audio onto one infinite canvas (the "Canvas" tab) \u2014 board by path / note / search (local path references, no copying), preview in-card, copy a reference string and give it to the AI to fetch by id; the AI can also drop notes via de_canvas (nothing is injected \u2014 it queries on demand). Off by default: enable "Infinite canvas" under Config.',"panel.guide.sync.title":"Memory sync (cross-device)","panel.guide.sync.desc":'Keep project memory consistent across devices \u2014 share the same key facts / logs / archives / project todos between office and home machines. In the "Memory sync" tab enable "sync this project" and click start: by default it uses a dedicated branch of your code repo (zero config); or fill in a shared memory repo \u2014 one repo for all projects (global tracks too). Another machine recognizes the project automatically and pulls to continue. The module switch lives under Config; sync is always triggered by you, and projects with sync off are unaffected.',"panel.guide.confirm.title":"The confirmation system (why the AI cannot write directly)","panel.guide.confirm.desc":"AI-proposed memory, todos and skills all enter a pending queue and take effect only after your confirmation. These writes genuinely change AI behavior: memory enters the context, todos are work assigned to you, skills alter the AI capability set \u2014 unchecked writes could canonize mistakes or assign you work unprompted. You are the final gate: the AI proposes, you decide.","panel.guide.best.title":"Tips for the best experience","panel.guide.best.1":'Session continuity: say "check the memory" and the AI picks up project conventions and progress from the logs \u2014 no need to repeat yourself.',"panel.guide.best.2":'Capture on the fly: say "remember this / follow up on this" and the AI files it automatically; a word days later resumes the thread.',"panel.guide.best.3":"Review periodically: glance at the memory / todo suggestion queues and approve or reject \u2014 that is the confirmation loop of memory evolution.","panel.guide.best.4":'Multi-device sync: work from office and home? Enable "Memory sync" and both machines share the same project memory \u2014 important conclusions never need repeating.',"panel.guide.loop":"The loop: chat \u2192 record \u2192 review \u2192 distill \u2192 execute. This mechanism is the AI long-term working memory.","panel.suggestions.approve":"Approve","panel.suggestions.archive":"Archive","panel.suggestions.archiveHint":"Archive: kept out of the injected memory, can be promoted back later","panel.suggestions.editHint":"You may edit the text before approving; the edited text is what gets written.","panel.suggestions.reject":"Reject","panel.suggestions.approveAll":"Approve all","panel.suggestions.rejectAll":"Reject all","panel.suggestions.hits":"Suggested {count}\xD7","panel.suggestions.hitsHint":"This fact resurfaced across several reviews \u2014 worth a careful look","panel.suggestions.target.memory":"Memory","panel.suggestions.target.user":"User profile","panel.suggestions.target.key":"Project key facts","panel.suggestions.targetHint":"Track to write on approve: defaults to the AI-recommended one; re-classify if it fits better (memory/user/key are injected into the prompt immediately)","panel.suggestions.projectHint":"This suggestion comes from the working directory: {path}","panel.suggestions.done":"Done: {text}","panel.archive.title":"Archived memory","panel.archive.empty":"No archived entries.","panel.archive.help":"Archived suggestions are never injected; they stay here for later \u2014 promote them back into the memory files when they matter, or delete them.","panel.archive.promote":"Promote to memory","panel.archive.delete":"Delete","panel.archive.promoted":"Promoted to memory","panel.archive.deleted":"Archived entry deleted","panel.skills.title":"Pending skill suggestions","panel.skills.help":"New skills produced by background review; approving moves them into the skill library (~/.agents/skills) where they are injected into system prompts.","panel.skills.empty":"No pending skill suggestions.","panel.skills.pending":"Pending","panel.skills.approve":"Approve","panel.skills.reject":"Reject","panel.skills.done":"Skill {op}","panel.config.title":"Config","panel.config.help":"Changes apply immediately and persist (overriding the config.yaml entries).","panel.config.reviewEnabled":"Background review","panel.config.reviewEnabled.hint":"Automatically review sessions and harvest experience; when off, the memory/skill tools and the snapshot still work \u2014 only the automatic review stops","panel.config.reviewInterval":"Review interval (turns)","panel.config.reviewInterval.hint":"One automatic review per N user turns","panel.config.skillReviewEnabled":"Skill auto-harvest","panel.config.skillReviewEnabled.hint":"Off (default): new skills from review go to the pending queue and only install when approved; On: review creates skills directly without confirmation (skills are injected into every session \u2014 enable with care)","panel.config.perTurnWriteGuard":"Memory write watchdog","panel.config.perTurnWriteGuard.hint":"Off (default): the root cause is model instruction-following \u2014 strong models do not need it. On: after consecutive turns without a daily/project write, the snapshot pins a catch-up warning (clears once written)","panel.config.writeGuardThreshold":"Watchdog threshold (turns)","panel.config.writeGuardThreshold.hint":"Warn after N consecutive turns without ANY daily/project write (>=1; 2 = tolerates 1 missed turn, warns from the 2nd)","panel.config.perTurnProjectWrites":"Per-turn project writes","panel.config.perTurnProjectWrites.hint":"Require the model to check at the end of every turn and record project-related facts (decisions/progress/pitfalls); when off, project memory is read on demand only. \u26A0\uFE0F Relies on LLM instruction following \u2014 weaker models may not comply","panel.config.perTurnDailyWrites":"Per-turn daily writes","panel.config.perTurnDailyWrites.hint":"Require the model to check at the end of every turn and record the day's progress; when off, the daily log is read on demand only. \u26A0\uFE0F Relies on LLM instruction following \u2014 weaker models may not comply","panel.config.perTurnKeyWrites":"Per-turn key-fact check","panel.config.perTurnKeyWrites.hint":"Require the model to judge at the end of every turn whether an important project fact emerged (long-lived convention/decision/architecture/pitfall); if so, write it to target=key (injected into the context), otherwise skip. When off, key facts are only added manually or read. \u26A0\uFE0F Relies on LLM instruction following","panel.config.keyProgressiveDisclosure":"Key-track progressive disclosure","panel.config.keyProgressiveDisclosure.hint":"Control how key-track memories are injected: auto = full injection for small data, summary injection for large data; off = always full injection (default); on = always summary injection (saves tokens)","panel.config.keyProgressiveDisclosure.auto":"Auto","panel.config.keyProgressiveDisclosure.off":"Off (always full, default)","panel.config.keyProgressiveDisclosure.on":"On (always summary)","panel.config.keyFullInjectThreshold":"Full-injection entry-count threshold","panel.config.keyFullInjectThreshold.hint":"In auto mode, full injection when entry count \u2264 this value (default 3)","panel.config.keyFullInjectCharLimit":"Full-injection character limit","panel.config.keyFullInjectCharLimit.hint":"In auto mode, full injection when total characters \u2264 this value (default 1500)","panel.config.coiEnabled":"COI dispatch","panel.config.coiEnabled.hint":"Enable the de_coi_* tools and the CLI Dispatch tab: unified dispatch of CLI agents (kimi/codex/grok/hermes\u2026). Off by default \u2014 this plugin's core is memory/todos/skills, dispatch is an on-demand add-on; when off, the tools and the tab are completely invisible","panel.config.searchDocsEnabled":"Local file search tool","panel.config.searchDocsEnabled.hint":'Lets the model search files across all local disks/directories. **Four modes**: all = name + content search; filename only = content/contentQuery parameters are ignored (never reads file contents \u2014 for people who use their own content-search implementation); content only = every call does content matching (query acts as the content keyword); off = the tool is completely invisible to the model. Content search: contentQuery="keyword" answers "which document mentions XX" (rg full-text match, returns hit snippets). Off by default',"panel.config.searchDocsMode.all":"All (name + content)","panel.config.searchDocsMode.filename":"Filename only","panel.config.searchDocsMode.content":"Content only","panel.config.searchDocsMode.off":"Off (tool invisible)","panel.config.advisorEnabled":"Session review (Advisor)","panel.config.advisorEnabled.hint":"Master switch for the session-review module. With the switch on, every session still starts OFF \u2014 enable reviewing per session from the panel's session switch (reviews consume extra model calls, turn them on only where needed; enabled sessions keep their choice across refreshes/restarts). With the switch off, reviewing stops and all review UI (header toggle / floating panel) is hidden; turn it back on to restore the module instantly","panel.config.broadcastEnabled":"Session broadcast","panel.config.broadcastEnabled.hint":'Enable session broadcast (de_broadcast): inter-session messaging \u2014 the "Session broadcast" unread hint in the snapshot (inbox-style rows: id+subject+sender+time) + the de_broadcast tool (send/list/read; read consumes and auto-deletes once all recipients read; >8KB spills to a file; 30-day cleanup) + the broadcast management panel tab. **Independent of COI dispatch** (off by default, can be enabled alone); when off, all of the above are invisible; the persistent "Your session ID" snapshot section is unaffected; the header "\u29C9 Copy session ID" / "\u270E alias" buttons belong to "Session orchestration" (the panel top also has a copy entry)',"panel.config.notifyEnabled":"Notifications","panel.config.notifyEnabled.hint":'Enable the notification module (de_notify): the AI proactively notifies you when a task is done \u2014 the de_notify manual tool (send anytime, no frequency limit; channels include feishu/qq/weixin/wecom/web) + automatic COI completion notify (pick channels via coiNotifyChannels). The web channel delivers to an in-app notification bell at the top-right: persisted + unread badge + a popover showing "which session sent what" + click to jump to that session. Independent module, off by default; IM channels require the matching channel plugin (dsh-feishu etc., missing ones reported honestly), the web channel is built in with zero deps; when off, the tool is not registered, the bell disappears, and COI auto-notify silently skips',"notify.title":"Notifications","notify.bellAria":"In-app notifications","notify.empty":"No unread notifications","notify.loading":"Loading\u2026","notify.readAll":"Mark all read","notify.system":"System","notify.jump":"Jump to session","notify.delete":"Delete","notify.viewDetail":"View details","notify.close":"Close","notify.markRead":"Mark read","panel.config.syncEnabled":"Memory sync","panel.config.syncEnabled.hint":'**Module switch**: enables the Memory Sync module \u2014 the Memory Sync tab appears in conversations and /memory_sync works. **Note: this does NOT start syncing any project** \u2014 each project is opted in separately via the "Sync this project" switch in the Memory Sync tab (off by default; never-opted-in projects keep their pure-local state: no Git repo, no entry IDs). Sync moves project memory (KEY + project log + archive + project todos) over Git to one memory remote \u2014 leave the URL empty to use your main code repo by default (dedicated branch, zero config); paste a shared memory repo URL to use one private repo for all projects (global memory, phase 2, can only sync through it). Push always requires your explicit trigger',"panel.config.sessionSearchEnabled":"Session search","panel.config.sessionSearchEnabled.hint":"Enable de_session_search: lets the model search historical sessions of other local AI tools (Codex for now: plain JSONL under ~/.codex/sessions and archived_sessions \u2014 rg prefilter keeps it millisecond-fast; DSH sessions not supported yet). Case-insensitive literal matching over user/assistant messages only; supports cwd project filter, relevance/newest/oldest sorting, and limit/window result control. **Independent submodule** (off by default, can be enabled alone \u2014 unrelated to COI dispatch/broadcast); zero resident state: no index, no cache, every call scans read-only in real time and never modifies session files; when off the tool is completely invisible to the model","panel.config.canvasEnabled":"Infinite canvas","panel.config.canvasEnabled.hint":"**Module switch**: enables the Infinite Canvas \u2014 a Canvas tab in conversations + the de_canvas tool (the model can list the board, read nodes by id, and drop notes into the board's center zone). Local path references, single-board with perspective filters (session/project/global + ownership badges), pull-based AI access (board content is never injected into context; query it on demand). **Independent submodule** (off by default): stored at <memoryDir>/canvas/boards.json (whole-board atomic writes + rev optimistic lock to prevent cross-session overwrites); when off the tab and tool are completely invisible, data files are kept","panel.config.sessionEnabled":"Session orchestration","panel.config.sessionEnabled.hint":'Enable session orchestration (de_session): lets AI **programmatically create/wake DSH sessions** \u2014 spawn creates a standard session (identical to one opened manually: system prompt/tools/memory snapshot/persistence, appears in the left session list and can be taken over), prompt = the full instruction text (role/task freely composed), it starts running immediately; optional cwd / join a broadcast room / model override; wake wakes an existing session (equivalent to sending a message on its behalf \u2014 its AI wakes up and processes it, auto-resumed after process restart); status/list inspect state; the header **"\u29C9 Copy session ID" / "\u270E alias" buttons follow this switch** (session-identity features, previously mis-housed under broadcast). **Independent submodule** (off by default; depends on the DSH agents service, only same-process sessions can be woken; when off the tool is invisible to the model)',"panel.config.promptsEnabled":"Prompt manager","panel.config.promptsEnabled.hint":"Enable the Prompts tab: a prompt library (user-written paradigms + built-in examples) plus an injection track (once / N consecutive turns / every M turns \u2014 count and cadence accept any integers; injected content is visible to the model next turn, expires automatically by turn counting, and can be stopped anytime; quick inject works without saving a prompt first, auto-saved to the Temp category). Off by default; when off the snapshot section, event listener and API are fully uninstalled and the tab hides after refresh","panel.config.modelsEnabled":"Model Settings","panel.config.modelsEnabled.hint":`Enable the "Model Settings" tab + de_models tool: a table of DSH providers/models with per-model settings (enabled, note, thinking support, allowed/recommended reasoning levels, custom levels); de_models lets the AI query the available model list. **Off by default** (registering takes a slot in the model tool list; turn it on when needed). \u26A0\uFE0F These settings **only affect this plugin and never modify or affect DSH's own model settings** (DSH side stays as the official "Settings \u2192 Models" says). When off the tab and tool hide and the API refuses access, settings data is kept`,"panel.config.uiSettingsEnabled":"Web UI Settings","panel.config.uiSettingsEnabled.hint":'Enable the "Web UI Settings" module: a filter bar appears above the left session list, showing only active sessions by default (generating / awaiting approval / awaiting answer / subagents running / error / finished-but-unviewed \u2014 purely idle ones collapse away), one click switches back to all; pure client-side styling (CSS + DOM injection, no DSH framework changes); the filter preference is remembered in the browser. **Off by default**; when off, the filter bar and injected styles are fully removed',"panel.config.save":"Save config","panel.reveal.title":"Open files","panel.reveal.help":"Open the memory directories and files with your system tools. \u26A0\uFE0F Careless edits can break the \xA7-delimited format and corrupt memory reads \u2014 edit with caution.","panel.reveal.memoryDir":"Memory dir","panel.reveal.memoryFile":"Global memory","panel.reveal.userFile":"User profile","panel.reveal.archiveMemoryFile":"Archived memory","panel.reveal.archiveUserFile":"Archived user","panel.reveal.dailyDir":"Daily log dir","panel.reveal.dailyFile":"Today log","panel.reveal.projectsDir":"Project memory dir","panel.reveal.skillDir":"Skills dir","panel.reveal.agentsFile":"Global rules (AGENTS.md)","panel.config.saved":"Config saved. Refresh the page for newly enabled/disabled modules to take effect","panel.config.failed":"Failed: {message}","panel.loading":"Loading\u2026"},as=3e4,Ed={css:gi,enhance:ki},Id=["slots","locale","conversation","sessions"];function Pd(t){let e=t.locale.bind(Di);t.effect(()=>t.locale.register(Di,{zh:Oi,en:zi}),"memory-evolve: dictionaries"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-memory-evolve-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.memoryEvolveCss="1",H.textContent=ii,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-skill-browser-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.skillBrowserCss="1",H.textContent=ci,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: skill browser stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-coi-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.coiCss="1",H.textContent=ri,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: coi stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-broadcast-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.broadcastCss="1",H.textContent=di,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: broadcast stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-prompt-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.promptCss="1",H.textContent=li,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: prompt stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-ui-settings-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.uiSettingsCss="1",H.textContent=mi,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: ui-settings stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-me-mermaid-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.meMermaidCss="1",H.textContent=pi,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: mermaid stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-bookmark-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.bookmarkCss="1",H.textContent=ui,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: bookmark stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-advisor-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.advisorCss="1",H.textContent=bi,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: advisor stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-notify-css]")!==null)return()=>{};let H=document.createElement("style");return H.dataset.notifyCss="1",H.textContent=Li,document.head.appendChild(H),()=>{H.remove()}},"memory-evolve: notification stylesheet");let a=!1,o;fetch("/memory-evolve/api/notifications/unread").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(()=>{a||(o=Mi({openSession:R=>{t.sessions.open(R)},t:e}).dispose)}).catch(()=>{}),t.effect(()=>()=>{a=!0,o?.()},"memory-evolve: notification bell");let s=!1,i=0,l=0,c=0,g=0,b,m,h=()=>{b?.(),b=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"memory-files",order:10,label:()=>i>0?e("memoryTab.label.pending",{count:i}):e("memoryTab.label")},R=>rs({...R,t:e})))},k=()=>{m?.(),m=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"skills-hub",order:20,label:()=>c>0?e("skillsTab.label.pending",{count:c}):e("skillsTab.label")},R=>us({...R,t:e})))},A=os(()=>t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"todos-hub",order:30,label:()=>g>0?e("todosTab.label.pending",{count:g}):e("todosTab.label")},R=>ys({...R,t:e})))),F=R=>{let H=R.detail;A.setEnabled(H?.todoEnabled!==!1)};window.addEventListener(Ea,F),t.effect(()=>()=>window.removeEventListener(Ea,F),"memory-evolve: todo tab runtime listener");let M,B=()=>{M?.(),M=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"settings-hub",order:120,label:()=>l>0?e("settingsTab.label.pending"):e("settingsTab.label")},R=>Ts({...R,t:e})))},S,V=()=>{S?.(),S=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"models-hub",order:90,label:()=>e("modelsTab.label")},R=>Es({...R,t:e})))},y,D=()=>{y?.(),y=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"memory-sync-hub",order:80,label:()=>e("syncTab.label")},R=>dn({...R,t:e})))},w=()=>{s||b===void 0||fetch("/memory-evolve/api/badge").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{let H=R.suggestions??0,De=R.skills??0,Pe=R.todoSuggestions??0,We=R.update??0;We!==l&&(l=We,B()),H!==i&&(i=H,h()),De!==c&&(c=De,k()),Pe!==g&&(g=Pe,A.refresh())}).catch(()=>{})};fetch("/memory-evolve/api/config").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{if(!s&&R.config?.modelsEnabled===!0&&S===void 0&&V(),!s&&R.config?.syncEnabled===!0&&y===void 0&&D(),s||R.config?.memoryTabEnabled!==!0)return;h(),k(),A.setEnabled(R.config?.todoEnabled!==!1),B(),w();let H=setInterval(w,as);t.effect(()=>()=>clearInterval(H),"memory-evolve: memory tab badge poller"),fetch("/memory-evolve/api/update/status").then(Pe=>Pe.ok?Pe.json():Promise.reject(new Error(`HTTP ${Pe.status}`))).then(Pe=>{if(s)return;let We=Pe?.status==="outdated"?1:0;We!==l&&(l=We,B())}).catch(()=>{});let De=()=>w();window.addEventListener("dsh-memory-evolve:badge-change",De),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",De),"memory-evolve: memory tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{s=!0,b?.(),m?.(),A.dispose(),M?.()},"memory-evolve: memory tabs"),t.effect(()=>()=>{y?.()},"memory-evolve: sync tab"),t.effect(()=>()=>{S?.()},"memory-evolve: models tab");let O=!1,X,C=0,u,r=()=>{X?.(),X=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"coi-hub",order:40,label:()=>C>0?e("coiTab.label.pending",{count:C}):e("coiTab.label")},R=>(u=R.sessionId,Ds({...R,t:e}))))},v=()=>{if(O||X===void 0)return;let R=u!==void 0?`?limit=200&sessionId=${encodeURIComponent(u)}`:"?limit=200";fetch(`/memory-evolve/api/coi/tasks${R}`).then(H=>H.ok?H.json():Promise.reject(new Error(`HTTP ${H.status}`))).then(H=>{let De=(H.tasks??[]).filter(Pe=>Pe.status==="running"||Pe.status==="queued").length;De!==C&&(C=De,r())}).catch(()=>{})};fetch("/memory-evolve/api/coi/config").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(()=>{if(O)return;r(),v();let R=setInterval(v,as);t.effect(()=>()=>clearInterval(R),"memory-evolve: coi tab badge poller");let H=()=>v();window.addEventListener("dsh-memory-evolve:badge-change",H),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",H),"memory-evolve: coi tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{O=!0,X?.()},"memory-evolve: coi tab");let _;_=t.slots.inject("conversation.session.header.actions",()=>t.slots.register({name:"conversation.session.header.actions",id:"advisor-review-panel",order:30},R=>Ys({...R,t:e}))),t.effect(()=>()=>{_?.()},"memory-evolve: advisor panel"),t.effect(()=>t.on("connection/reset",()=>{typeof window<"u"&&window.dispatchEvent(new Event(Ga))}),"memory-evolve: advisor connection reset");let L=!1,G;fetch("/memory-evolve/api/config").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{L||R.config?.sessionEnabled!==!0||(G=t.slots.inject("conversation.session.header.actions",()=>t.slots.register({name:"conversation.session.header.actions",id:"copy-session-id",order:0},H=>Hs({...H,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{L=!0,G?.()},"memory-evolve: session header buttons");let q=!1,ce;fetch("/memory-evolve/api/broadcast/messages").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(()=>{q||(ce=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"broadcast-hub",order:50,label:()=>e("broadcastTab.label")},R=>en({...R,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{q=!0,ce?.()},"memory-evolve: broadcast tab");let Re=!1,Te,Ce,Q,Ye,Ie,be;fetch("/memory-evolve/api/ui-settings/state").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{if(Re||R.enabled!==!0)return;let H=Gn({barTitle:e("uiSettings.feature.sessionFilter"),on:e("uiSettings.filter.on"),off:e("uiSettings.filter.off"),runningLabel:e("uiSettings.running.label"),ungroupedLabel:e("uiSettings.ungrouped")});Ce=H.dispose;let De=Xn();Q=De.dispose;let Pe=Yn();Ye=Pe.dispose;let We=Zn();Ie=We.dispose;let E=ni();be=E.dispose;let Z=Wa();H.setEnabled(Z.sessionFilter),De.setEnabled(Z.wideChat),Pe.setEnabled(Z.wideBubble),We.setEnabled(Z.contextWarn),E.setEnabled(Z.mermaidRender);let ve=Ve=>{let z=Ve.detail;z!==void 0&&(H.setEnabled(z.sessionFilter),De.setEnabled(z.wideChat),Pe.setEnabled(z.wideBubble),We.setEnabled(z.contextWarn),E.setEnabled(z.mermaidRender))};window.addEventListener(Va,ve),t.effect(()=>()=>window.removeEventListener(Va,ve),"memory-evolve: ui-settings features listener"),Te=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"ui-settings-hub",order:110,label:()=>e("uiSettingsTab.label")},Ve=>js({...Ve,t:e})))}).catch(()=>{}),t.effect(()=>()=>{Re=!0,Te?.(),Ce?.(),Q?.(),Ye?.(),Ie?.(),be?.()},"memory-evolve: ui-settings tab");let j=!1,ge,re=0,Ue=()=>{ge?.(),ge=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"prompt-hub",order:60,label:()=>re>0?e("promptTab.label.active",{count:re}):e("promptTab.label")},R=>on({...R,t:e})))},Le=()=>{j||ge===void 0||fetch("/memory-evolve/api/prompts/injections").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{let H=R.injections?.length??0;H!==re&&(re=H,Ue())}).catch(()=>{})};fetch("/memory-evolve/api/prompts/sources").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(()=>{if(j)return;Ue(),Le();let R=setInterval(Le,as);t.effect(()=>()=>clearInterval(R),"memory-evolve: prompt tab badge poller");let H=()=>Le();window.addEventListener("dsh-memory-evolve:badge-change",H),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",H),"memory-evolve: prompt tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{j=!0,ge?.()},"memory-evolve: prompt tab");let Ae=!1,Ee,Ne,ye,we="",Qe=!1;fetch("/memory-evolve/api/bookmarks/state").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{Ae||R.enabled!==!0||(Ne=t.slots.inject("conversation.session.header.actions",()=>t.slots.register({name:"conversation.session.header.actions",id:"bookmark-session-catcher",order:100},H=>{let De=H.sessionId;return typeof De=="string"&&De!==""&&(we=De),Qe||(Qe=!0,ye=vn(()=>we,{t:e}).dispose),null})),Ee=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"bookmarks-hub",order:100,label:()=>e("bookmarkTab.label")},H=>ln({...H,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{Ae=!0,ye?.(),Ne?.(),Ee?.()},"memory-evolve: bookmarks");let Me=!1,Ke;fetch("/memory-evolve/api/canvas/state").then(R=>R.ok?R.json():Promise.reject(new Error(`HTTP ${R.status}`))).then(R=>{Me||R.enabled!==!0||(Ke=Wn(t,{t:e,openSession:H=>{t.sessions.open(H)}}))}).catch(()=>{}),t.effect(()=>()=>{Me=!0,Ke?.()},"memory-evolve: canvas-tab")}
return module.exports; } });
