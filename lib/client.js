window.__ModuleLoader__.load({ id: "dsh-memory-evolve", factory: (require) => {
var module = { exports: {} }; var exports = module.exports;
"use strict";var Wa=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var Jn=Object.getOwnPropertyNames;var Xn=Object.prototype.hasOwnProperty;var Yn=(t,e)=>{for(var o in e)Wa(t,o,{get:e[o],enumerable:!0})},Qn=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Jn(e))!Xn.call(t,n)&&n!==o&&Wa(t,n,{get:()=>e[n],enumerable:!(a=Gn(e,n))||a.enumerable});return t};var Zn=t=>Qn(Wa({},"__esModule",{value:!0}),t);var el={};Yn(el,{apply:()=>Zr,dshMobile:()=>Yr,en:()=>qn,inject:()=>Qr,zh:()=>Bn});module.exports=Zn(el);var _e=require("react");var Ct=require("react");var ga="dsh-memory-evolve:runtime-config-changed";function Ro(t){let e=!1,o,a=()=>{o?.(),o=t()};return{setEnabled(n){e=n===!0,e?o===void 0&&a():(o?.(),o=void 0)},refresh(){e&&o!==void 0&&a()},dispose(){e=!1,o?.(),o=void 0},enabled:()=>e}}var r=require("react/jsx-runtime");function ei(t,e){let o=e.slice(5);return o==="life"?`${Gt()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.life")}`:o==="work"?`${Gt()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.work")}`:o==="project"?`${Gt()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.project")}`:o==="daily"?`${Gt()?"Todo":"\u5F85\u529E"}\xB7${t("todo.track.daily")}`:e}function Mo(t,e){return e.startsWith("todo-")?ei(t,e):e==="memory"?t("panel.suggestions.target.memory"):e==="user"?t("panel.suggestions.target.user"):e==="key"?t("panel.suggestions.target.key"):e}function ti(t){return t.startsWith("todo-")?"todo":t}var ai=["memory","user","key"];function oi(t){let e=t.split(/[\\/]/).filter(o=>o.length>0);return e.length>0?e[e.length-1]:t}async function na(t,e){let o=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!o.ok){let a=await o.json().catch(()=>({}));throw new Error(a.error??`HTTP ${o.status}`)}return o.json()}function si(t){let e=t.lines?.join(Gt()?"; ":"\uFF1B")??(Gt()?`${t.removed??0} handled`:`\u5DF2\u5904\u7406 ${t.removed??0} \u6761`);return Gt()?`${e} (${t.remaining} remaining)`:`${e}\uFF08\u5269\u4F59 ${t.remaining} \u6761\uFF09`}function ni(t){let e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}var Gt=()=>typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en");function Ft(t){let{t:e,feature:o,onChanged:a}=t,[n,i]=(0,Ct.useState)(null),[d,p]=(0,Ct.useState)(null),[C,w]=(0,Ct.useState)(null),[u,g]=(0,Ct.useState)(null),[k,j]=(0,Ct.useState)({}),[z,A]=(0,Ct.useState)({}),[U,T]=(0,Ct.useState)(null),[G,v]=(0,Ct.useState)(!1),D=()=>{Promise.all([na("/api/suggestions"),na("/api/pending-skills"),na("/api/config")]).then(([l,x,V])=>{let P=[...l.entries].map((ne,oe)=>({entry:ne,origIndex:oe})).sort((ne,oe)=>(oe.entry.hits??1)-(ne.entry.hits??1));i(P),p(x.entries),j({}),A({}),w(V.config),g(ne=>ne??V.config)}).catch(l=>{T({kind:"error",text:e("panel.config.failed",{message:l.message})})})};(0,Ct.useEffect)(()=>{D()},[]);let y=(l,x)=>{v(!0);let V={};if(V.indices=x,l==="approve"){let P=x.map(oe=>k[oe]??"");P.some(oe=>oe!=="")&&(V.contents=P);let ne={};for(let oe of x){let be=z[oe],Me=(n??[]).find(Te=>Te.origIndex+1===oe);be!==void 0&&be!==Me?.entry.target&&(ne[String(oe)]=be)}Object.keys(ne).length>0&&(V.targets=ne)}na(`/api/suggestions/${l}`,{method:"POST",body:JSON.stringify(V)}).then(P=>{T({kind:"ok",text:si(P)}),D(),a()}).catch(P=>{T({kind:"error",text:e("panel.config.failed",{message:P.message})})}).finally(()=>v(!1))},O=(l,x)=>{v(!0),na(`/api/pending-skills/${l}`,{method:"POST",body:JSON.stringify({name:x})}).then(()=>{T({kind:"ok",text:e("panel.skills.done",{op:e(l==="approve"?"panel.skills.approve":"panel.skills.reject")})}),D(),a()}).catch(V=>{T({kind:"error",text:e("panel.config.failed",{message:V.message})})}).finally(()=>v(!1))},Z=()=>{if(u===null)return;v(!0);let l={reviewEnabled:u.reviewEnabled,reviewInterval:u.reviewInterval,skillReviewEnabled:u.skillReviewEnabled,perTurnProjectWrites:u.perTurnProjectWrites,perTurnDailyWrites:u.perTurnDailyWrites,perTurnKeyWrites:u.perTurnKeyWrites,perTurnWriteGuard:u.perTurnWriteGuard,writeGuardThreshold:u.writeGuardThreshold,searchDocsEnabled:u.searchDocsEnabled,searchDocsMode:u.searchDocsMode,coiEnabled:u.coiEnabled,broadcastEnabled:u.broadcastEnabled,sessionSearchEnabled:u.sessionSearchEnabled,sessionEnabled:u.sessionEnabled,promptsEnabled:u.promptsEnabled,modelsEnabled:u.modelsEnabled,uiSettingsEnabled:u.uiSettingsEnabled,bookmarkEnabled:u.bookmarkEnabled,todoEnabled:u.todoEnabled,notifyEnabled:u.notifyEnabled,syncEnabled:u.syncEnabled,canvasEnabled:u.canvasEnabled,keyProgressiveDisclosure:u.keyProgressiveDisclosure,keyFullInjectThreshold:u.keyFullInjectThreshold,keyFullInjectCharLimit:u.keyFullInjectCharLimit};na("/api/config",{method:"POST",body:JSON.stringify({patch:l})}).then(x=>{w(x.config),g(x.config),window.dispatchEvent(new CustomEvent(ga,{detail:x.config})),T({kind:"ok",text:e("panel.config.saved")})}).catch(x=>{T({kind:"error",text:e("panel.config.failed",{message:x.message})})}).finally(()=>v(!1))},I=l=>{g(x=>x===null?x:{...x,...l})},m=(n??[]).map(l=>({entry:l.entry,index:l.origIndex+1})).filter(({entry:l})=>o==="todo-suggestions"?l.target.startsWith("todo-"):!l.target.startsWith("todo-"));return(0,r.jsxs)("div",{className:"me-panel",children:[U!==null&&(0,r.jsx)("div",{className:`me-notice me-notice-${U.kind}`,children:U.text}),o==="guide"&&(0,r.jsxs)("section",{className:"me-block",children:[(0,r.jsx)("div",{className:"me-block-head",children:(0,r.jsx)("h3",{className:"me-heading",children:e("panel.guide.title")})}),(0,r.jsx)("p",{className:"me-help",children:e("panel.guide.intro")}),(0,r.jsxs)("div",{className:"me-guide",children:[(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F9E0}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.memory.title")}),(0,r.jsx)("span",{children:e("panel.guide.memory.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F504}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.review.title")}),(0,r.jsx)("span",{children:e("panel.guide.review.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u2705"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.todo.title")}),(0,r.jsx)("span",{children:e("panel.guide.todo.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F6E0}\uFE0F"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.skill.title")}),(0,r.jsx)("span",{children:e("panel.guide.skill.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F50D}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.search.title")}),(0,r.jsx)("span",{children:e("panel.guide.search.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F680}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.coi.title")}),(0,r.jsx)("span",{children:e("panel.guide.coi.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F4CC}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.prompt.title")}),(0,r.jsx)("span",{children:e("panel.guide.prompt.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F9E9}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.models.title")}),(0,r.jsx)("span",{children:e("panel.guide.models.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F4E8}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.broadcast.title")}),(0,r.jsx)("span",{children:e("panel.guide.broadcast.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F4E1}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.session.title")}),(0,r.jsx)("span",{children:e("panel.guide.session.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F9ED}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.sessionOrch.title")}),(0,r.jsx)("span",{children:e("panel.guide.sessionOrch.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F3A8}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.uiSettings.title")}),(0,r.jsx)("span",{children:e("panel.guide.uiSettings.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u2B50"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.bookmark.title")}),(0,r.jsx)("span",{children:e("panel.guide.bookmark.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F5BC}\uFE0F"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.canvas.title")}),(0,r.jsx)("span",{children:e("panel.guide.canvas.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F501}"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.sync.title")}),(0,r.jsx)("span",{children:e("panel.guide.sync.desc")})]})]}),(0,r.jsxs)("div",{className:"me-guide-row",children:[(0,r.jsx)("span",{className:"me-guide-icon",children:"\u{1F6E1}\uFE0F"}),(0,r.jsxs)("span",{className:"me-guide-body",children:[(0,r.jsx)("strong",{children:e("panel.guide.confirm.title")}),(0,r.jsx)("span",{children:e("panel.guide.confirm.desc")})]})]})]}),(0,r.jsx)("h4",{className:"me-guide-sub",children:e("panel.guide.best.title")}),(0,r.jsxs)("ul",{className:"me-guide-tips",children:[(0,r.jsx)("li",{children:e("panel.guide.best.1")}),(0,r.jsx)("li",{children:e("panel.guide.best.2")}),(0,r.jsx)("li",{children:e("panel.guide.best.3")}),(0,r.jsx)("li",{children:e("panel.guide.best.4")})]}),(0,r.jsx)("p",{className:"me-guide-loop",children:e("panel.guide.loop")})]}),(o==="suggestions"||o==="todo-suggestions")&&(0,r.jsxs)("section",{className:"me-block",children:[(0,r.jsxs)("div",{className:"me-block-head",children:[(0,r.jsx)("h3",{className:"me-heading",children:e(o==="todo-suggestions"?"panel.todoSuggestions.title":"panel.suggestions.title")}),m.length>0&&(0,r.jsx)("span",{className:"me-count",children:m.length})]}),(0,r.jsx)("p",{className:"me-help",children:e(o==="todo-suggestions"?"panel.todoSuggestions.help":"panel.suggestions.help")}),n===null?(0,r.jsx)("p",{className:"me-muted",children:e("panel.loading")}):m.length===0?(0,r.jsx)("p",{className:"me-empty",children:e(o==="todo-suggestions"?"panel.todoSuggestions.empty":"panel.suggestions.empty")}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ul",{className:"me-list",children:m.map(({entry:l,index:x})=>(0,r.jsxs)("li",{className:"me-item",children:[(0,r.jsxs)("div",{className:"me-item-head",children:[(0,r.jsx)("span",{className:`me-badge me-badge-suggest me-badge-suggest-${ti(l.target)}`,title:e("panel.suggestions.targetHint"),children:Mo(e,l.target)}),l.cwd&&(l.target==="key"||l.target==="todo-project")&&(0,r.jsxs)("span",{className:"me-badge me-badge-project",title:e("panel.suggestions.projectHint",{path:l.cwd}),children:["\u{1F4C1} ",oi(l.cwd)]}),(l.hits??1)>1&&(0,r.jsx)("span",{className:"me-badge me-badge-hits",title:e("panel.suggestions.hitsHint"),children:e("panel.suggestions.hits",{count:l.hits??1})}),(0,r.jsx)("span",{className:"me-item-time",title:l.time,children:ni(l.time)}),(0,r.jsxs)("span",{className:"me-item-actions",children:[!l.target.startsWith("todo-")&&(0,r.jsx)("select",{className:"me-pick-target",title:e("panel.suggestions.targetHint"),value:z[x]??l.target,onChange:V=>A(P=>({...P,[x]:V.target.value})),children:ai.map(V=>(0,r.jsx)("option",{value:V,children:Mo(e,V)},V))}),(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:G,onClick:()=>y("approve",[x]),children:e("panel.suggestions.approve")}),(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-archive",disabled:G,title:e("panel.suggestions.archiveHint"),onClick:()=>y("archive",[x]),children:e("panel.suggestions.archive")}),(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:G,onClick:()=>y("reject",[x]),children:e("panel.suggestions.reject")})]})]}),(0,r.jsx)("textarea",{className:"me-item-edit",rows:3,value:k[x]??l.content,onChange:V=>j(P=>({...P,[x]:V.target.value}))}),(0,r.jsx)("p",{className:"me-item-reason",children:l.reason!==void 0&&l.reason!==""?l.reason:e("panel.suggestions.editHint")})]},`${l.time}-${x}`))}),(0,r.jsxs)("div",{className:"me-bulk",children:[(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:G,onClick:()=>y("approve",m.map(l=>l.index)),children:e("panel.suggestions.approveAll")}),(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:G,onClick:()=>y("reject",m.map(l=>l.index)),children:e("panel.suggestions.rejectAll")})]})]})]}),o==="skills"&&(0,r.jsxs)("section",{className:"me-block",children:[(0,r.jsxs)("div",{className:"me-block-head",children:[(0,r.jsx)("h3",{className:"me-heading",children:e("panel.skills.title")}),d!==null&&d.length>0&&(0,r.jsx)("span",{className:"me-count",children:d.length})]}),(0,r.jsx)("p",{className:"me-help",children:e("panel.skills.help")}),d===null?(0,r.jsx)("p",{className:"me-muted",children:e("panel.loading")}):d.length===0?(0,r.jsx)("p",{className:"me-empty",children:e("panel.skills.empty")}):(0,r.jsx)("ul",{className:"me-list",children:d.map(l=>(0,r.jsxs)("li",{className:"me-item",children:[(0,r.jsxs)("div",{className:"me-item-head",children:[(0,r.jsx)("span",{className:"me-badge me-badge-target",children:l.name}),(0,r.jsx)("span",{className:"me-item-time",children:e("panel.skills.pending")}),(0,r.jsxs)("span",{className:"me-item-actions",children:[(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:G,onClick:()=>O("approve",l.name),children:e("panel.skills.approve")}),(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:G,onClick:()=>O("reject",l.name),children:e("panel.skills.reject")})]})]}),(0,r.jsx)("p",{className:"me-item-reason",children:l.description})]},l.name))})]}),o==="config"&&(0,r.jsxs)("section",{className:"me-block",children:[(0,r.jsx)("div",{className:"me-block-head",children:(0,r.jsx)("h3",{className:"me-heading",children:e("panel.config.title")})}),(0,r.jsx)("p",{className:"me-help",children:e("panel.config.help")}),u===null?(0,r.jsx)("p",{className:"me-muted",children:e("panel.loading")}):(0,r.jsxs)("div",{className:"me-form",children:[(0,r.jsxs)("div",{className:"me-group",children:[(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.reviewEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.reviewEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.reviewEnabled,onChange:l=>I({reviewEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.reviewInterval"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.reviewInterval.hint")})]}),(0,r.jsx)("input",{type:"number",className:"me-input",min:1,value:u.reviewInterval,onChange:l=>I({reviewInterval:Number(l.target.value)})})]})]}),(0,r.jsxs)("div",{className:"me-group",children:[(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.skillReviewEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.skillReviewEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.skillReviewEnabled,onChange:l=>I({skillReviewEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnWriteGuard"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnWriteGuard.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.perTurnWriteGuard,onChange:l=>I({perTurnWriteGuard:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.writeGuardThreshold"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.writeGuardThreshold.hint")})]}),(0,r.jsx)("input",{type:"number",className:"me-input",min:1,value:u.writeGuardThreshold,onChange:l=>{let x=Number(l.target.value);I({writeGuardThreshold:Number.isFinite(x)&&x>=1?Math.floor(x):1})}})]})]}),(0,r.jsxs)("div",{className:"me-group",children:[(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnProjectWrites"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnProjectWrites.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.perTurnProjectWrites,onChange:l=>I({perTurnProjectWrites:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnDailyWrites"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnDailyWrites.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.perTurnDailyWrites,onChange:l=>I({perTurnDailyWrites:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.perTurnKeyWrites"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.perTurnKeyWrites.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.perTurnKeyWrites,onChange:l=>I({perTurnKeyWrites:l.target.checked})})]})]}),(0,r.jsxs)("div",{className:"me-group",children:[(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyProgressiveDisclosure"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyProgressiveDisclosure.hint")})]}),(0,r.jsxs)("select",{className:"me-todo-select",value:u.keyProgressiveDisclosure??"off",onChange:l=>I({keyProgressiveDisclosure:l.target.value}),children:[(0,r.jsx)("option",{value:"auto",children:e("panel.config.keyProgressiveDisclosure.auto")}),(0,r.jsx)("option",{value:"off",children:e("panel.config.keyProgressiveDisclosure.off")}),(0,r.jsx)("option",{value:"on",children:e("panel.config.keyProgressiveDisclosure.on")})]})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyFullInjectThreshold"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyFullInjectThreshold.hint")})]}),(0,r.jsx)("input",{type:"number",className:"me-input",min:1,value:u.keyFullInjectThreshold??3,onChange:l=>{let x=Number(l.target.value);I({keyFullInjectThreshold:Number.isFinite(x)&&x>=1?Math.floor(x):1})}})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.keyFullInjectCharLimit"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.keyFullInjectCharLimit.hint")})]}),(0,r.jsx)("input",{type:"number",className:"me-input",min:100,value:u.keyFullInjectCharLimit??1500,onChange:l=>{let x=Number(l.target.value);I({keyFullInjectCharLimit:Number.isFinite(x)&&x>=100?Math.floor(x):100})}})]})]}),(0,r.jsxs)("div",{className:"me-group",children:[(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.searchDocsEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.searchDocsEnabled.hint")})]}),(0,r.jsxs)("select",{className:"me-todo-select",value:u.searchDocsMode??(u.searchDocsEnabled?"all":"off"),onChange:l=>{let x=l.target.value;I({searchDocsMode:x,searchDocsEnabled:x!=="off"})},children:[(0,r.jsx)("option",{value:"all",children:e("panel.config.searchDocsMode.all")}),(0,r.jsx)("option",{value:"filename",children:e("panel.config.searchDocsMode.filename")}),(0,r.jsx)("option",{value:"content",children:e("panel.config.searchDocsMode.content")}),(0,r.jsx)("option",{value:"off",children:e("panel.config.searchDocsMode.off")})]})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.coiEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.coiEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.coiEnabled,onChange:l=>I({coiEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.broadcastEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.broadcastEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.broadcastEnabled,onChange:l=>I({broadcastEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.notifyEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.notifyEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.notifyEnabled,onChange:l=>I({notifyEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.syncEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.syncEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.syncEnabled,onChange:l=>I({syncEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.canvasEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.canvasEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.canvasEnabled,onChange:l=>I({canvasEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.sessionEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.sessionEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.sessionEnabled,onChange:l=>I({sessionEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.sessionSearchEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.sessionSearchEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.sessionSearchEnabled,onChange:l=>I({sessionSearchEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.promptsEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.promptsEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.promptsEnabled,onChange:l=>I({promptsEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.modelsEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.modelsEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.modelsEnabled,onChange:l=>I({modelsEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.uiSettingsEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.uiSettingsEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.uiSettingsEnabled,onChange:l=>I({uiSettingsEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.bookmarkEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.bookmarkEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.bookmarkEnabled,onChange:l=>I({bookmarkEnabled:l.target.checked})})]}),(0,r.jsxs)("label",{className:"me-field",children:[(0,r.jsxs)("span",{className:"me-field-label",children:[e("panel.config.todoEnabled"),(0,r.jsx)("em",{className:"me-field-hint",children:e("panel.config.todoEnabled.hint")})]}),(0,r.jsx)("input",{type:"checkbox",className:"me-switch",checked:u.todoEnabled,onChange:l=>I({todoEnabled:l.target.checked})})]})]}),(0,r.jsx)("div",{className:"me-actions",children:(0,r.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:G,onClick:Z,children:e("panel.config.save")})})]})]})]})}var xt=require("react/jsx-runtime");function ft({sections:t}){return(0,xt.jsx)("div",{className:"me-panel",children:t.map((e,o)=>(0,xt.jsxs)("section",{className:"me-block",children:[(0,xt.jsx)("div",{className:"me-block-head",children:(0,xt.jsxs)("h3",{className:"me-heading",children:[e.icon," ",e.title]})}),e.body!==void 0&&e.body!==""&&(0,xt.jsx)("p",{className:"me-help",children:e.body}),e.items!==void 0&&e.items.length>0&&(0,xt.jsx)("div",{className:"me-guide",children:e.items.map((a,n)=>(0,xt.jsxs)("div",{className:"me-guide-row",children:[(0,xt.jsx)("span",{className:"me-guide-icon",children:"\u2022"}),(0,xt.jsx)("span",{className:"me-guide-body",children:(0,xt.jsx)("span",{children:a})})]},n))})]},o))})}var ee=require("react/jsx-runtime"),ii=`
\xA7
`,Do=/(?:^\[\d{4}-\d{2}-\d{2}[^\]]*\]\s*)?\[branch:([^\]]*)\]\s*/,Lo=/\[dsh-only\]\s*/,Ka={project:/^\[(\d{4}-\d{2}-\d{2} \d{1,2}:\d{2}(?::\d{2})?)\]\s*/,daily:/^\[(\d{1,2}:\d{2}(?::\d{2})?)\]\s*/,date:/^\[(\d{4}-\d{2}-\d{2})\]\s*/},ri=new Set(["memory","user","archive-memory","archive-user","archive-key","project","key","daily"]),li=new Set(["memory","user","project","key","daily"]),di=new Set(["memory","user","key"]);function ci(t){let e=t.key==="project"?Ka.project:t.key==="daily"?Ka.daily:Ka.date,o=[];for(let a of t.content.split(ii)){let n=a.trim();if(n==="")continue;let i=n,d=null,p=null,C=null,w=null,u=!1,g=e.exec(n);if(g!==null){if(d=g[1],n=n.slice(g[0].length),t.key==="daily"||t.key==="project"){let k=/^\[git ([^\]]+)\]\s*/.exec(n);k!==null&&(C=k[1],n=n.slice(k[0].length))}if(t.key==="daily"){let k=/^\[([^\]]+)\]\s*/.exec(n);k!==null&&(p=k[1],n=n.slice(k[0].length))}else if(t.key==="key"){let k=Do.exec(i);if(k!==null){let j=k[1].split(",").map(z=>z.trim()).filter(Boolean);w=j.length>0?j:null,n=n.replace(Do,"")}}Lo.test(n)&&(u=!0,n=n.replace(Lo,"")),n=n.replace(/^\[summary:[^\]]*\]\s*/,"")}o.push({time:d,tag:p,branch:C,text:n,branches:w,dshOnly:u,raw:i})}return o}function mi(t,e){return t.text.toLowerCase().includes(e)||(t.time??"").toLowerCase().includes(e)||(t.tag??"").toLowerCase().includes(e)}var Ga=50;async function Mt(t,e){let o=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!o.ok){let a=await o.json().catch(()=>({}));throw new Error(a.error??`HTTP ${o.status}`)}return o.json()}var Ja=new Map,Xa=new Map;function pi(t){return[{icon:"\u{1F9E0}",title:t("memoryTab.guide.tracks.title"),body:t("memoryTab.guide.tracks.body"),items:[t("memoryTab.guide.tracks.item1"),t("memoryTab.guide.tracks.item2"),t("memoryTab.guide.tracks.item3"),t("memoryTab.guide.tracks.item4"),t("memoryTab.guide.tracks.item5")]},{icon:"\u{1F4C2}",title:t("memoryTab.guide.files.title"),body:t("memoryTab.guide.files.body"),items:[t("memoryTab.guide.files.item1"),t("memoryTab.guide.files.item2"),t("memoryTab.guide.files.item3")]},{icon:"\u{1F33F}",title:t("memoryTab.guide.branch.title"),body:t("memoryTab.guide.branch.body"),items:[t("memoryTab.guide.branch.item1"),t("memoryTab.guide.branch.item2")]},{icon:"\u{1F6E0}\uFE0F",title:t("memoryTab.guide.maintain.title"),body:t("memoryTab.guide.maintain.body"),items:[t("memoryTab.guide.maintain.item1"),t("memoryTab.guide.maintain.item2"),t("memoryTab.guide.maintain.item3")]},{icon:"\u2705",title:t("memoryTab.guide.suggestions.title"),body:t("memoryTab.guide.suggestions.body"),items:[t("memoryTab.guide.suggestions.item1"),t("memoryTab.guide.suggestions.item2")]},{icon:"\u{1F6E1}\uFE0F",title:t("memoryTab.guide.confirm.title"),body:t("memoryTab.guide.confirm.body")}]}function Oo(t){let{sessionId:e,t:o}=t,[a,n]=(0,_e.useState)(null),[i,d]=(0,_e.useState)(null),[p,C]=(0,_e.useState)(null),[w,u]=(0,_e.useState)(null),[g,k]=(0,_e.useState)([]),[j,z]=(0,_e.useState)("pretty"),[A,U]=(0,_e.useState)(""),[T,G]=(0,_e.useState)(0),[v,D]=(0,_e.useState)(Xa.get(e)??null),[y,O]=(0,_e.useState)(""),[Z,I]=(0,_e.useState)(!1),[m,l]=(0,_e.useState)({}),[x,V]=(0,_e.useState)(!1),[P,ne]=(0,_e.useState)(!1),[oe,be]=(0,_e.useState)([]),[Me,Te]=(0,_e.useState)(null),[Ce,X]=(0,_e.useState)([]),[Ve,Ne]=(0,_e.useState)(!1),[fe,ce]=(0,_e.useState)(null),[ze,me]=(0,_e.useState)(""),[Ze,ot]=(0,_e.useState)(!1),[Fe,Ee]=(0,_e.useState)(!1),[ke,ye]=(0,_e.useState)(Ja.get(e)??null),[ve,M]=(0,_e.useState)({suggestions:0}),F=(0,_e.useCallback)(()=>{Mt("/api/badge").then(R=>M({suggestions:R.suggestions??0})).catch(()=>{})},[]);(0,_e.useEffect)(()=>{F();let R=window.setInterval(F,3e4);return()=>window.clearInterval(R)},[F]),(0,_e.useEffect)(()=>{D(Xa.get(e)??null),ye(Ja.get(e)??null)},[e]),(0,_e.useEffect)(()=>{Ja.set(e,ke)},[ke,e]),(0,_e.useEffect)(()=>{Xa.set(e,v)},[v,e]);let Se=(0,_e.useCallback)(()=>{n(null),Mt(`/api/memory-files?sessionId=${encodeURIComponent(String(e))}`).then(R=>{n(R.files),C(R.cwd),u(R.branch),k(R.branches??[])}).catch(R=>{d({kind:"error",text:R.message}),n([])})},[e]);(0,_e.useEffect)(()=>{Se()},[Se]),(0,_e.useEffect)(()=>{if(a===null||a.length===0||v!==null&&a.some(h=>h.key===v))return;let R=a.find(h=>h.available)??a[0];D(R.key)},[a,v]);let xe=R=>{d({kind:"ok",text:R}),window.setTimeout(()=>{d(h=>h?.text===R?null:h)},3500)},je=R=>{let h=R.key==="memory"?"memoryFile":R.key==="user"?"userFile":R.key==="daily"?"dailyFile":R.key==="project"||R.key==="key"?"projectsDir":R.key==="archive-memory"?"archiveMemoryFile":R.key==="archive-user"?"archiveUserFile":R.key==="archive-key"?"projectsDir":"agentsFile";Mt("/api/reveal",{method:"POST",body:JSON.stringify({target:h})}).then(()=>xe(o("memoryTab.opened"))).catch(te=>d({kind:"error",text:te.message}))},et=()=>{let R=y.trim();R===""||Z||(I(!0),Mt("/api/memory/key",{method:"POST",body:JSON.stringify({sessionId:String(e),content:R,branches:oe,dshOnly:P})}).then(()=>{O(""),ne(!1),Se(),xe(o("memoryTab.keyAdded"))}).catch(h=>{d({kind:"error",text:h.message})}).finally(()=>I(!1)))},He=R=>{let h=(m[R]??"").trim();h===""||x||(V(!0),Mt(`/api/memory/${R}`,{method:"POST",body:JSON.stringify({content:h})}).then(()=>{l(te=>({...te,[R]:""})),Se(),xe(o("memoryTab.memoryUserAdded"))}).catch(te=>{d({kind:"error",text:te.message})}).finally(()=>V(!1)))},Je=R=>{X(h=>h.includes(R)?h.filter(te=>te!==R):[...h,R])},N=R=>{be(h=>h.includes(R)?h.filter(te=>te!==R):[...h,R])},W=R=>{Te(R.raw),X(R.branches??[])},ue=()=>{Me===null||pe===null||Ve||(Ne(!0),Mt("/api/key/scope",{method:"POST",body:JSON.stringify({sessionId:String(e),match:Me,branches:Ce})}).then(()=>{Te(null),Se(),xe(o("memoryTab.keyScopeSaved"))}).catch(R=>{d({kind:"error",text:R.message})}).finally(()=>Ne(!1)))},Ue=R=>{pe===null||Fe||(Ee(!0),Mt("/api/memory/dsh-only",{method:"POST",body:JSON.stringify({sessionId:String(e),target:pe.key,match:R.raw,on:!R.dshOnly})}).then(()=>{Se(),xe(R.dshOnly?o("memoryTab.dshOnlyRemoved"):o("memoryTab.dshOnlySet"))}).catch(h=>{d({kind:"error",text:h.message})}).finally(()=>Ee(!1)))},L=R=>{if(pe===null||Fe)return;let h=R.text.length>60?`${R.text.slice(0,60)}\u2026`:R.text;window.confirm(o("memoryTab.deleteConfirm",{snippet:h}))&&(Ee(!0),Mt("/api/memory/delete",{method:"POST",body:JSON.stringify({sessionId:String(e),target:pe.key,match:R.raw})}).then(()=>{Se(),xe(o("memoryTab.deleted"))}).catch(te=>{d({kind:"error",text:te.message})}).finally(()=>Ee(!1)))},we=R=>{ce(R.raw),me(R.text)},nt=()=>{if(fe===null||pe===null||Ze)return;let R=ze.trim();if(R!==""){if(di.has(pe.key)){let h=R.length>60?`${R.slice(0,60)}\u2026`:R;if(!window.confirm(o("memoryTab.editConfirm",{snippet:h})))return}ot(!0),Mt("/api/memory/update",{method:"POST",body:JSON.stringify({sessionId:String(e),target:pe.key,match:fe,content:ze})}).then(()=>{ce(null),Se(),xe(o("memoryTab.updated"))}).catch(h=>{d({kind:"error",text:h.message})}).finally(()=>ot(!1))}},Be=(R,h)=>{if(pe===null||Fe)return;if(h==="archive"){let De=R.text.length>60?`${R.text.slice(0,60)}\u2026`:R.text;if(!window.confirm(o("memoryTab.archiveConfirm",{snippet:De})))return}Ee(!0);let te=h==="archive"?"/api/memory/archive":"/api/archive/promote",Ie=h==="archive"?pe.key:pe.key==="archive-memory"?"memory":pe.key==="archive-key"?"key":"user";Mt(te,{method:"POST",body:JSON.stringify({sessionId:String(e),target:Ie,match:R.raw})}).then(()=>{Se(),xe(o(h==="archive"?"memoryTab.archived":"memoryTab.promoted"))}).catch(De=>{d({kind:"error",text:De.message})}).finally(()=>Ee(!1))},dt=A.trim().toLowerCase(),pe=(a??[]).find(R=>R.key===v)??null,tt=null,gt=!1;if(pe!==null&&pe.available&&pe.exists)if(j==="raw"||!ri.has(pe.key))gt=dt!==""&&!pe.content.toLowerCase().includes(dt);else{let R=ci(pe);tt=dt===""?R:R.filter(h=>mi(h,dt)),gt=dt!==""&&tt.length===0}let S=tt===null?1:Math.max(1,Math.ceil(tt.length/Ga)),re=Math.min(T,S-1),at=tt===null?null:[...tt].reverse().slice(re*Ga,(re+1)*Ga);return(0,ee.jsxs)("div",{className:"mt-panel",children:[i!==null&&(0,ee.jsx)("div",{className:`mt-notice mt-notice-${i.kind}`,children:i.text}),(0,ee.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,ee.jsx)("button",{type:"button",role:"tab","aria-selected":ke==="guide",className:ke==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>ye(ke==="guide"?null:"guide"),children:o("memoryTab.feature.guide")}),(0,ee.jsxs)("button",{type:"button",role:"tab","aria-selected":ke==="suggestions",className:ke==="suggestions"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>ye(ke==="suggestions"?null:"suggestions"),children:[o("memoryTab.feature.suggestions"),ve.suggestions>0&&(0,ee.jsx)("span",{className:"mt-feature-count",children:ve.suggestions})]}),(0,ee.jsx)("span",{className:"mt-tab-sep",role:"presentation"}),a!==null&&(a??[]).map(R=>(0,ee.jsx)("button",{type:"button",role:"tab","aria-selected":R.key===v,className:R.key===v?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>{D(R.key),ye(null),G(0)},children:R.title},R.key))]}),(0,ee.jsxs)("p",{className:"mt-warning",children:["\u26A0\uFE0F ",o("memoryTab.warning")]}),p!==null&&(0,ee.jsxs)("p",{className:"mt-cwd",children:[o("memoryTab.cwd"),": ",p]}),ke!==null?ke==="guide"?(0,ee.jsx)(ft,{sections:pi(o)}):(0,ee.jsx)(Ft,{t:o,feature:"suggestions",onChanged:()=>{F(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}}):a===null?(0,ee.jsx)("p",{className:"mt-muted",children:o("memoryTab.loading")}):(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsxs)("div",{className:"mt-toolbar",children:[(0,ee.jsxs)("div",{className:"mt-view-toggle",role:"group",children:[(0,ee.jsx)("button",{type:"button",className:j==="pretty"?"mt-view-btn mt-view-btn-active":"mt-view-btn",onClick:()=>z("pretty"),children:o("memoryTab.viewPretty")}),(0,ee.jsx)("button",{type:"button",className:j==="raw"?"mt-view-btn mt-view-btn-active":"mt-view-btn",onClick:()=>z("raw"),children:o("memoryTab.viewRaw")})]}),(0,ee.jsx)("input",{type:"search",className:"mt-search",value:A,placeholder:o("memoryTab.searchPlaceholder"),onChange:R=>{U(R.target.value),G(0)}})]}),dt!==""&&gt&&(0,ee.jsx)("p",{className:"mt-empty",children:o("memoryTab.noResults")}),pe!==null&&(0,ee.jsxs)("div",{className:"mt-card",children:[(0,ee.jsxs)("div",{className:"mt-card-head",children:[(0,ee.jsx)("span",{className:"mt-card-title",children:pe.title}),(0,ee.jsx)("span",{className:"mt-badge mt-badge-ro",children:o("memoryTab.readonly")}),tt!==null&&(0,ee.jsx)("span",{className:"mt-badge mt-badge-count",children:o("memoryTab.entryCount",{count:tt.length})}),pe.path!==void 0&&(0,ee.jsx)("span",{className:"mt-card-path",title:pe.path,children:pe.path}),pe.available&&(0,ee.jsx)("span",{className:"mt-card-actions",children:(0,ee.jsx)("button",{type:"button",className:"mt-btn",onClick:()=>je(pe),children:o("memoryTab.open")})})]}),(0,ee.jsxs)("p",{className:"mt-card-desc",children:[o(`memoryTab.desc.${pe.key}`),pe.key==="key"&&w!==null&&(0,ee.jsxs)("span",{className:"mt-card-desc-branch",children:[" ",o("memoryTab.keyBranchInfo",{branch:w})]})]}),pe.key==="key"&&pe.available&&(0,ee.jsxs)("div",{className:"mt-key-add",children:[(0,ee.jsx)("textarea",{className:"mt-key-input",rows:2,value:y,placeholder:o("memoryTab.keyAddPlaceholder"),onChange:R=>O(R.target.value)}),g.length>0&&(0,ee.jsxs)("div",{className:"mt-key-scope",children:[(0,ee.jsxs)("span",{className:"mt-key-scope-label",children:[o("memoryTab.keyScope"),":"]}),(0,ee.jsxs)("label",{className:"mt-scope-opt",children:[(0,ee.jsx)("input",{type:"checkbox",checked:oe.length===0,onChange:()=>be([])}),o("memoryTab.keyScopeAll")]}),g.map(R=>(0,ee.jsxs)("label",{className:"mt-scope-opt",children:[(0,ee.jsx)("input",{type:"checkbox",checked:oe.includes(R),onChange:()=>N(R)}),R]},R))]}),(0,ee.jsxs)("div",{className:"mt-key-add-foot",children:[(0,ee.jsx)("span",{className:"mt-key-help",children:o("memoryTab.keyAddHelp")}),(0,ee.jsxs)("label",{className:"mt-key-dsh-opt",title:o("memoryTab.dshOnlyHint"),children:[(0,ee.jsx)("input",{type:"checkbox",checked:P,onChange:R=>ne(R.target.checked)}),o("memoryTab.dshOnlyAdd")]}),(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:Z||y.trim()==="",onClick:et,children:o("memoryTab.keyAdd")})]})]}),(pe.key==="memory"||pe.key==="user")&&pe.available&&(0,ee.jsxs)("div",{className:"mt-key-add",children:[(0,ee.jsx)("textarea",{className:"mt-key-input",rows:2,value:m[pe.key]??"",placeholder:pe.key==="memory"?o("memoryTab.memoryAddPlaceholder"):o("memoryTab.userAddPlaceholder"),onChange:R=>l(h=>({...h,[pe.key]:R.target.value}))}),(0,ee.jsxs)("div",{className:"mt-key-add-foot",children:[(0,ee.jsx)("span",{className:"mt-key-help",children:o("memoryTab.memoryUserAddHelp")}),(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:x||(m[pe.key]??"").trim()==="",onClick:()=>{He(pe.key)},children:o("memoryTab.memoryAdd")})]})]}),pe.available?pe.exists?tt===null?(0,ee.jsx)("pre",{className:"mt-content",children:pe.content}):(0,ee.jsx)("div",{className:"mt-entries",children:(at??[]).map((R,h)=>(0,ee.jsxs)("div",{className:"mt-entry",children:[(0,ee.jsxs)("div",{className:"mt-entry-head",children:[R.time!==null&&(0,ee.jsx)("span",{className:"mt-entry-time",children:R.time}),R.branch!==null&&(0,ee.jsx)("span",{className:"mt-entry-branch mt-entry-branch-tag",title:o("memoryTab.gitBranch"),children:R.branch}),R.tag!==null&&(0,ee.jsx)("span",{className:"mt-entry-tag",title:o("memoryTab.projectTag"),children:R.tag}),R.dshOnly&&(0,ee.jsxs)("span",{className:"mt-entry-dsh-only",title:o("memoryTab.dshOnlyHint"),children:["\u{1F512} ",o("memoryTab.dshOnly")]}),pe.key==="key"&&g.length>0&&(0,ee.jsxs)("button",{type:"button",className:R.branches===null?"mt-entry-branch mt-entry-branch-all":"mt-entry-branch",title:R.branches===null?o("memoryTab.keyScopeAllHint"):o("memoryTab.keyScopeHint"),onClick:()=>W(R),children:[o("memoryTab.keyScopeLabel"),": ",R.branches===null?o("memoryTab.keyScopeAll"):R.branches.join(", ")," \u25BE"]}),(0,ee.jsxs)("span",{className:"mt-entry-ops",children:[(pe.key==="memory"||pe.key==="user"||pe.key==="key")&&(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:o("memoryTab.archive"),disabled:Fe,onClick:()=>Be(R,"archive"),children:o("memoryTab.archive")}),(pe.key==="archive-memory"||pe.key==="archive-user"||pe.key==="archive-key")&&(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:o("memoryTab.promote"),disabled:Fe,onClick:()=>Be(R,"promote"),children:o("memoryTab.promote")}),li.has(pe.key)&&fe!==R.raw&&(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-entry-op",title:o("memoryTab.edit"),disabled:Fe,onClick:()=>we(R),children:o("memoryTab.edit")}),(pe.key==="memory"||pe.key==="user"||pe.key==="key")&&(0,ee.jsx)("button",{type:"button",className:`mt-btn mt-entry-op${R.dshOnly?" mt-entry-dsh-on":""}`,title:o("memoryTab.dshOnlyToggleHint"),disabled:Fe,onClick:()=>Ue(R),children:R.dshOnly?o("memoryTab.dshOnlyOff"):o("memoryTab.dshOnlyOn")}),(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-entry-del",title:o("memoryTab.delete"),disabled:Fe,onClick:()=>L(R),children:o("memoryTab.delete")})]})]}),fe===R.raw?(0,ee.jsxs)("div",{className:"mt-entry-edit",children:[(0,ee.jsx)("textarea",{className:"mt-item-edit",rows:3,value:ze,onChange:te=>me(te.target.value.replaceAll("\xA7",""))}),(0,ee.jsxs)("div",{className:"mt-entry-edit-row",children:[(0,ee.jsx)("span",{className:"mt-entry-edit-hint",children:o("memoryTab.editHint")}),(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:Ze||ze.trim()==="",onClick:nt,children:o("memoryTab.save")}),(0,ee.jsx)("button",{type:"button",className:"mt-btn",disabled:Ze,onClick:()=>ce(null),children:o("memoryTab.cancel")})]})]}):(0,ee.jsx)("p",{className:"mt-entry-text",children:R.text}),pe.key==="key"&&Me===R.raw&&g.length>0&&(0,ee.jsxs)("div",{className:"mt-scope",children:[(0,ee.jsxs)("span",{className:"mt-key-scope-label",children:[o("memoryTab.keyScope"),":"]}),(0,ee.jsxs)("label",{className:"mt-scope-opt",children:[(0,ee.jsx)("input",{type:"checkbox",checked:Ce.length===0,onChange:()=>X([])}),o("memoryTab.keyScopeAll"),(0,ee.jsx)("em",{className:"mt-scope-all-hint",children:o("memoryTab.keyScopeAllWeight")})]}),g.map(te=>(0,ee.jsxs)("label",{className:"mt-scope-opt",children:[(0,ee.jsx)("input",{type:"checkbox",checked:Ce.includes(te),onChange:()=>Je(te)}),te]},te)),(0,ee.jsxs)("span",{className:"mt-scope-actions",children:[(0,ee.jsx)("button",{type:"button",className:"mt-btn mt-btn-primary",disabled:Ve,onClick:ue,children:o("memoryTab.keyScopeSave")}),(0,ee.jsx)("button",{type:"button",className:"mt-btn",disabled:Ve,onClick:()=>Te(null),children:o("memoryTab.keyScopeCancel")})]})]})]},h))}):(0,ee.jsx)("pre",{className:"mt-content",children:o("memoryTab.empty")}):(0,ee.jsx)("p",{className:"mt-muted",children:o("memoryTab.noCwd")}),tt!==null&&S>1&&(0,ee.jsxs)("div",{className:"mt-pager",children:[(0,ee.jsx)("button",{type:"button",className:"mt-btn",disabled:re<=0,onClick:()=>G(re-1),children:o("memoryTab.pagePrev")}),(0,ee.jsx)("span",{className:"mt-pager-info",children:o("memoryTab.pageInfo",{page:re+1,total:S,count:tt.length})}),(0,ee.jsx)("button",{type:"button",className:"mt-btn",disabled:re>=S-1,onClick:()=>G(re+1),children:o("memoryTab.pageNext")})]}),pe.truncated&&(0,ee.jsx)("p",{className:"mt-muted",children:o("memoryTab.truncated")})]})]})]})}var Ht=require("react");var ie=require("react"),Oe=require("@deepseek-ai/dsh-client-ui-primitives"),f=require("react/jsx-runtime"),Dt="/skills-manager/api",zo="skills-manager.state.v1",fa=class extends Error{constructor(o,a){super(a);this.status=o}status};async function $t(t,e={}){let o;try{o=await fetch(t,e)}catch(n){throw n.name==="AbortError"?n:new fa(0,n instanceof Error?n.message:String(n))}let a=await o.json().catch(()=>({}));if(!o.ok)throw new fa(o.status,typeof a.error=="string"?a.error:`HTTP ${o.status}`);return a}function ha(t){let e=t.replace(/\/+$/,"");if(e==="")return"/";let o=e.lastIndexOf("/");return o<0?e:e.slice(o+1)}function Fo(t,e){let o=t.replace(/\/+$/,"");return o===""?`/${e}`:`${o}/${e}`}function ia(t,e){if(e===t)return"";let o=t==="/"?"/":`${t}/`;return e.startsWith(o)?e.slice(o.length):""}function $o(t,e){return e==null?"":e<1024?t("bytes",{size:e}):e<1024*1024?t("kib",{size:(e/1024).toFixed(1)}):t("mib",{size:(e/1024/1024).toFixed(1)})}function ui(t){let e=new Date(t),o=a=>String(a).padStart(2,"0");return`${e.getFullYear()}-${o(e.getMonth()+1)}-${o(e.getDate())} ${o(e.getHours())}:${o(e.getMinutes())}`}function bi(t){return t.startsWith("user")?" sb-badge--user":t.startsWith("project")?" sb-badge--project":t==="bundled"?" sb-badge--bundled":" sb-badge--other"}function gi({skill:t}){return t.resourceBase?.kind==="directory"?(0,f.jsx)(Oe.IconFolderOpen16,{className:"sb-card-meta-icon"}):(0,f.jsx)(Oe.IconDataOutline16,{className:"sb-card-meta-icon"})}var Ya=20;function hi(t){let{t:e,skills:o,loading:a,error:n,query:i,sourceFilter:d,sourceCounts:p,statusFilter:C,selectedName:w,togglingName:u,page:g,onSourceFilter:k,onStatusFilter:j,onToggleDisabled:z,onSelect:A,onRetry:U,onPrevPage:T,onNextPage:G}=t,v=(0,ie.useMemo)(()=>{let I=i.trim().toLowerCase();return o.filter(m=>{if(d!=="all"&&m.source!==d)return!1;let l=m.invocable&&!m.disabled;return C==="enabled"&&!l||C==="disabled"&&l?!1:I===""?!0:`${m.name} ${m.description} ${m.whenToUse??""}`.toLowerCase().includes(I)})},[o,i,d,C]),D=p.reduce((I,m)=>I+m.count,0),y=Math.max(1,Math.ceil(v.length/Ya)),O=Math.min(Math.max(1,g),y),Z=v.slice((O-1)*Ya,O*Ya);return(0,f.jsxs)("div",{className:"sb-section sb-section--skills",children:[(0,f.jsxs)("div",{className:"sb-pane-head",children:[(0,f.jsx)("span",{className:"sb-pane-title",children:e("pane.skills")}),(0,f.jsx)("span",{className:"sb-count",children:e("skills.count",{count:v.length})})]}),(0,f.jsxs)("div",{className:"sb-chips",children:[p.length>1&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{type:"button",className:`sb-chip${d==="all"?" sb-chip--active":""}`,onClick:()=>k("all"),children:[e("filter.all")," ",D]}),p.map(({source:I,count:m})=>(0,f.jsxs)("button",{type:"button",className:`sb-chip${d===I?" sb-chip--active":""}`,onClick:()=>k(I),children:[I," ",m]},I)),(0,f.jsx)("span",{className:"sb-chips-sep"})]}),["all","enabled","disabled"].map(I=>(0,f.jsx)("button",{type:"button",className:`sb-chip${C===I?" sb-chip--active":""}`,onClick:()=>j(I),children:e(I==="all"?"filter.all":I==="enabled"?"status.enabled":"disabled.badge")},I))]}),(0,f.jsxs)("div",{className:"sb-list",children:[a&&(0,f.jsxs)("div",{className:"sb-note",children:[(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}),(0,f.jsx)("span",{children:e("loading.skills")})]}),!a&&n!==null&&(0,f.jsxs)("div",{className:"sb-note sb-note--error",children:[(0,f.jsx)(Oe.IconWarningOutline16,{}),(0,f.jsx)("span",{children:n}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:U,children:e("refresh")})]}),!a&&n===null&&v.length===0&&(0,f.jsx)("div",{className:"sb-note",children:e("search.empty")}),!a&&n===null&&Z.map(I=>(0,f.jsxs)("button",{type:"button",className:`sb-card${I.name===w?" sb-card--active":""}${I.disabled?" sb-card--disabled":""}`,onClick:()=>A(I),title:I.disabled?e("disabled.hint"):void 0,children:[(0,f.jsxs)("span",{className:"sb-card-top",children:[(0,f.jsx)("span",{className:"sb-card-name",children:I.name}),I.disabled&&(0,f.jsx)("span",{className:"sb-badge sb-badge--disabled",children:e("disabled.badge")}),(0,f.jsx)("span",{className:`sb-badge${bi(I.source)}`,children:e("source.badge",{source:I.source})})]}),(0,f.jsx)("span",{className:"sb-card-desc",children:I.description}),(0,f.jsxs)("span",{className:"sb-card-meta",children:[(0,f.jsx)(gi,{skill:I}),I.whenToUse!==null&&I.whenToUse!==""&&(0,f.jsxs)("span",{className:"sb-card-when",children:[(0,f.jsx)("span",{className:"sb-card-when-label",children:e("when.to.use")}),I.whenToUse]}),(0,f.jsx)("span",{className:"sb-spacer"}),I.protected?(0,f.jsx)("span",{className:"sb-badge sb-badge--protected",title:e("protected.hint"),children:e("protected.badge")}):(0,f.jsx)("span",{className:`sb-toggle${I.disabled?" sb-toggle--disabled":""}`,role:"button",tabIndex:0,title:I.disabled?e("enable"):e("disable"),onClick:m=>{m.stopPropagation(),z(I)},onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.stopPropagation(),z(I))},children:u===I.name?(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}):I.disabled?e("enable"):e("disable")})]})]},I.name))]}),y>1&&(0,f.jsxs)("div",{className:"sb-pager",children:[(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:O<=1,onClick:T,children:e("pager.prev")}),(0,f.jsx)("span",{className:"sb-pager-info",children:e("pager.page",{page:O,total:y})}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:O>=y,onClick:G,children:e("pager.next")})]})]})}function fi(t){let{t:e,hasSkill:o,root:a,rootOptions:n,cache:i,loadingDirs:d,dirErrors:p,expanded:C,selectedPath:w,crumbs:u,onRootChange:g,onJump:k,onToggleDir:j,onFileClick:z,onRetryDir:A}=t,U=(T,G)=>{let v={paddingLeft:8+G*14};if(d.has(T))return(0,f.jsxs)("div",{className:"sb-tree-note",style:v,children:[(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}),(0,f.jsx)("span",{children:e("loading.dir")})]});let D=p.get(T);if(D!==void 0)return(0,f.jsxs)("div",{className:"sb-tree-note sb-note--error",style:v,children:[(0,f.jsx)(Oe.IconWarningOutline16,{}),(0,f.jsx)("span",{className:"sb-tree-errmsg",title:D,children:D}),(0,f.jsx)("button",{type:"button",className:"sb-tree-retry",onClick:()=>A(T),children:e("refresh")})]});let y=i.get(T);return y===void 0?null:y.length===0?(0,f.jsx)("div",{className:"sb-tree-note",style:v,children:e("no.entries")}):y.map(O=>{let Z=Fo(T,O.name);if(O.type==="dir"){let I=C.has(Z);return(0,f.jsxs)("div",{children:[(0,f.jsxs)("button",{type:"button",className:"sb-tree-row",style:v,onClick:()=>j(Z),title:Z,children:[I?(0,f.jsx)(Oe.IconChevronDownOutline14,{}):(0,f.jsx)(Oe.IconChevronRightOutline14,{}),I?(0,f.jsx)(Oe.IconFolderOpen16,{}):(0,f.jsx)(Oe.IconFolderClose16,{}),(0,f.jsx)("span",{className:"sb-tree-name",children:O.name})]}),I&&U(Z,G+1)]},Z)}return(0,f.jsxs)("button",{type:"button",className:`sb-tree-row sb-tree-row--file${Z===w?" sb-tree-row--active":""}`,style:{paddingLeft:8+G*14+14},onClick:()=>z(Z),title:Z,children:[(0,f.jsx)("span",{className:"sb-tree-name",children:O.name}),(0,f.jsx)("span",{className:"sb-tree-size",children:$o(e,O.size)})]},Z)})};return(0,f.jsxs)("div",{className:"sb-section sb-section--files",children:[(0,f.jsx)("div",{className:"sb-pane-head",children:(0,f.jsx)("span",{className:"sb-pane-title",children:e("pane.files")})}),!o&&(0,f.jsx)("div",{className:"sb-note",children:e("no.skill.selected")}),o&&a===null&&(0,f.jsx)("div",{className:"sb-note",children:e("no.root")}),o&&a!==null&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"sb-root-bar",children:[(0,f.jsx)("span",{className:"sb-root-label",children:e("root.label")}),(0,f.jsx)("select",{className:"sb-root-select",value:a,title:a,onChange:T=>g(T.target.value),children:n.map(T=>(0,f.jsx)("option",{value:T,children:ha(T)},T))})]}),(0,f.jsx)("div",{className:"sb-crumbs",children:u.map((T,G)=>(0,f.jsxs)("span",{className:"sb-crumb-seg",children:[G>0&&(0,f.jsx)(Oe.IconChevronRightOutline14,{className:"sb-crumb-sep"}),(0,f.jsx)("button",{type:"button",className:"sb-crumb",onClick:()=>k(T.abs),children:T.label})]},T.abs))}),(0,f.jsx)("div",{className:"sb-tree",children:U(a,0)})]})]})}function vi(t){let{t:e,file:o,fileLoading:a,fileError:n,hasSelection:i,editing:d,draft:p,dirty:C,saveState:w,onDraftChange:u,onEdit:g,onCancel:k,onSave:j}=t,z=(0,ie.useRef)(null),A=d?p:o?.content??"",U=(0,ie.useMemo)(()=>A.split(`
`).length,[A]),T=(0,ie.useMemo)(()=>{let D=[];for(let y=1;y<=U;y+=1)D.push(y);return D},[U]),G=D=>{(D.metaKey||D.ctrlKey)&&D.key.toLowerCase()==="s"&&(D.preventDefault(),j())},v;if(a)v=(0,f.jsxs)("div",{className:"sb-editor-empty",children:[(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}),(0,f.jsx)("span",{children:e("loading.dir")})]});else if(n!==null){let D=n.kind==="not.text"?e("not.text"):n.kind==="too.large"?e("too.large"):e("read.failed",{message:n.message});v=(0,f.jsxs)("div",{className:"sb-editor-empty sb-note--error",children:[(0,f.jsx)(Oe.IconWarningOutline16,{}),(0,f.jsx)("span",{children:D})]})}else o===null?v=(0,f.jsx)("div",{className:"sb-editor-empty",children:e("no.file")}):d?v=(0,f.jsxs)("div",{className:"sb-editor-edit",children:[(0,f.jsx)("div",{className:"sb-gutter sb-gutter--edit",ref:z,"aria-hidden":!0,children:T.map(D=>(0,f.jsx)("div",{children:D},D))}),(0,f.jsx)("textarea",{className:"sb-textarea",value:p,spellCheck:!1,onChange:D=>u(D.target.value),onScroll:D=>{z.current!==null&&(z.current.scrollTop=D.target.scrollTop)},onKeyDown:G})]}):v=(0,f.jsxs)("div",{className:"sb-editor-scroll",children:[(0,f.jsx)("div",{className:"sb-gutter","aria-hidden":!0,children:T.map(D=>(0,f.jsx)("div",{children:D},D))}),(0,f.jsx)("pre",{className:"sb-pre",children:o.content})]});return(0,f.jsxs)("div",{className:"sb-main",children:[(0,f.jsxs)("div",{className:"sb-editor-topbar",children:[o!==null?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"sb-editor-filename",children:ha(o.path)}),(0,f.jsx)("span",{className:"sb-editor-path",title:`${e("path")}: ${o.path}`,children:o.path})]}):(0,f.jsx)("span",{className:"sb-editor-path",children:e("no.file")}),(0,f.jsx)("span",{className:"sb-spacer"}),o!==null&&!d&&(0,f.jsxs)("button",{type:"button",className:"sb-btn",onClick:g,children:[(0,f.jsx)(Oe.IconEditOutline16,{}),e("edit")]}),d&&C&&(0,f.jsx)("span",{className:"sb-dirty-dot",title:e("dirty.hint")}),d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{type:"button",className:"sb-btn sb-btn--primary",onClick:j,disabled:w==="saving"||!C,children:[(0,f.jsx)(Oe.IconCheckOutline16,{}),e(w==="saving"?"saving":"save")]}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:k,children:e("cancel")})]})]}),v]})}function yi(t){let{t:e,dirs:o,loading:a,error:n,input:i,mutating:d,onInputChange:p,onAdd:C,onRemove:w,onClose:u}=t;return(0,f.jsx)("div",{className:"sb-modal-overlay",onClick:u,children:(0,f.jsxs)("div",{className:"sb-modal sb-modal--dirs",onClick:g=>g.stopPropagation(),children:[(0,f.jsx)("div",{className:"sb-modal-title",children:e("dirs.title")}),(0,f.jsxs)("div",{className:"sb-modal-body",children:[(0,f.jsx)("p",{className:"sb-dirs-help",children:e("dirs.help")}),(0,f.jsxs)("div",{className:"sb-dirs-addrow",children:[(0,f.jsx)("input",{className:"sb-dirs-input",type:"text",value:i,placeholder:e("dirs.placeholder"),spellCheck:!1,onChange:g=>p(g.target.value),onKeyDown:g=>{g.key==="Enter"&&i.trim()!==""&&!d&&(g.preventDefault(),C())}}),(0,f.jsxs)("button",{type:"button",className:"sb-btn sb-btn--primary",disabled:d||i.trim()==="",onClick:C,children:[d?(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}):null,e("dirs.add")]})]}),n!==null&&(0,f.jsxs)("div",{className:"sb-action-error",children:[(0,f.jsx)(Oe.IconWarningOutline16,{}),(0,f.jsx)("span",{className:"sb-action-error-text",children:n})]}),(0,f.jsxs)("div",{className:"sb-dirs-list",children:[a&&(0,f.jsxs)("div",{className:"sb-note",children:[(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}),(0,f.jsx)("span",{children:e("loading.skills")})]}),!a&&o.length===0&&(0,f.jsx)("div",{className:"sb-note",children:e("dirs.empty")}),!a&&o.map(g=>(0,f.jsxs)("div",{className:"sb-dirs-row",children:[(0,f.jsx)("span",{className:`sb-dirs-path${g.exists?"":" sb-dirs-path--missing"}`,title:g.path,children:g.path}),!g.exists&&(0,f.jsx)("span",{className:"sb-badge sb-badge--disabled",children:e("dirs.missing")}),g.exists&&(0,f.jsx)("span",{className:"sb-count",children:e("skills.count",{count:g.skillCount})}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",disabled:d,onClick:()=>w(g.path),children:e("dirs.remove")})]},g.path))]})]}),(0,f.jsx)("div",{className:"sb-modal-actions",children:(0,f.jsx)("button",{type:"button",className:"sb-btn",onClick:u,children:e("cancel")})})]})})}function Ho({t,sessionId:e}){let[o,a]=(0,ie.useState)([]),[n,i]=(0,ie.useState)([]),[d,p]=(0,ie.useState)(!0),[C,w]=(0,ie.useState)(null),[u,g]=(0,ie.useState)(""),[k,j]=(0,ie.useState)("all"),[z,A]=(0,ie.useState)("all"),[U,T]=(0,ie.useState)(1),[G,v]=(0,ie.useState)(null),[D,y]=(0,ie.useState)(null),[O,Z]=(0,ie.useState)(null),[I,m]=(0,ie.useState)(!1),[l,x]=(0,ie.useState)([]),[V,P]=(0,ie.useState)(!1),[ne,oe]=(0,ie.useState)(null),[be,Me]=(0,ie.useState)(""),[Te,Ce]=(0,ie.useState)(!1),[X,Ve]=(0,ie.useState)(null),[Ne,fe]=(0,ie.useState)(new Set),[ce,ze]=(0,ie.useState)(new Map),[me,Ze]=(0,ie.useState)(new Set),[ot,Fe]=(0,ie.useState)(new Map),[Ee,ke]=(0,ie.useState)(null),[ye,ve]=(0,ie.useState)(null),[M,F]=(0,ie.useState)(!1),[Se,xe]=(0,ie.useState)(null),[je,et]=(0,ie.useState)(!1),[He,Je]=(0,ie.useState)(""),[N,W]=(0,ie.useState)("idle"),[ue,Ue]=(0,ie.useState)(""),[L,we]=(0,ie.useState)(null),[nt,Be]=(0,ie.useState)(!1),dt=e?`&sessionId=${encodeURIComponent(e)}`:"",pe=e?`${Dt}/skills?sessionId=${encodeURIComponent(e)}`:`${Dt}/skills`,tt=(0,ie.useRef)(null),gt=(0,ie.useRef)(null),S=(0,ie.useRef)(0),re=(0,ie.useRef)(new Map),at=(0,ie.useRef)(null),R=(0,ie.useRef)(!1),h=je&&ye!==null&&He!==ye.content,te=(0,ie.useMemo)(()=>o.find(J=>J.name===O)??null,[o,O]),Ie=(0,ie.useMemo)(()=>{let J=new Map;for(let le of o)J.set(le.source,(J.get(le.source)??0)+1);return[...J.entries()].map(([le,qe])=>({source:le,count:qe}))},[o]);(0,ie.useEffect)(()=>{T(1)},[u,k,z]);let De=(0,ie.useCallback)(J=>{h?we(()=>J):J()},[h]),Xe=(0,ie.useCallback)(async(J=!1)=>{tt.current?.abort();let le=new AbortController;tt.current=le,J||p(!0),w(null);try{let qe=await $t(pe,{signal:le.signal});if(tt.current!==le)return;a(qe.skills),i(qe.roots)}catch(qe){if(qe.name==="AbortError"||tt.current!==le)return;w(qe instanceof Error?qe.message:String(qe))}finally{tt.current===le&&!J&&p(!1)}},[pe]);(0,ie.useEffect)(()=>(Xe(),()=>{tt.current?.abort(),gt.current?.abort();for(let J of re.current.values())J.abort();at.current!==null&&clearTimeout(at.current)}),[Xe]);let wt=(0,ie.useCallback)(async J=>{if(G===null){v(J.name),y(null);try{let le=J.disabled?"enable":"disable";await $t(`${Dt}/skills/${le}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J.name})}),a(qe=>qe.map(Re=>Re.name===J.name?{...Re,disabled:!Re.disabled}:Re)),await Xe(!0)}catch(le){y(le instanceof Error?le.message:t("toggle.failed",{message:String(le)}))}finally{v(null)}}},[G,Xe,t]),We=(0,ie.useCallback)(async()=>{P(!0),oe(null);try{let J=await $t(`${Dt}/dirs`);x(J.dirs)}catch(J){oe(J instanceof Error?J.message:String(J))}finally{P(!1)}},[]),kt=(0,ie.useCallback)(async()=>{let J=be.trim();if(!(J===""||Te)){Ce(!0),oe(null);try{await $t(`${Dt}/dirs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:J})}),Me(""),await We(),await Xe(!0)}catch(le){oe(le instanceof Error?le.message:String(le))}finally{Ce(!1)}}},[be,Te,We,Xe]),_=(0,ie.useCallback)(async J=>{if(!Te){Ce(!0),oe(null);try{await $t(`${Dt}/dirs?path=${encodeURIComponent(J)}`,{method:"DELETE"}),await We(),await Xe(!0)}catch(le){oe(le instanceof Error?le.message:String(le))}finally{Ce(!1)}}},[Te,We,Xe]),Y=(0,ie.useCallback)(async(J,le)=>{re.current.get(le)?.abort();let qe=new AbortController;re.current.set(le,qe),Ze(Re=>new Set(Re).add(le)),Fe(Re=>{let lt=new Map(Re);return lt.delete(le),lt});try{let Re=ia(J,le),lt=await $t(`${Dt}/browse?root=${encodeURIComponent(J)}&path=${encodeURIComponent(Re)}${dt}`,{signal:qe.signal});if(re.current.get(le)!==qe)return;ze(Kt=>new Map(Kt).set(le,lt.entries))}catch(Re){if(Re.name==="AbortError"||re.current.get(le)!==qe)return;Fe(lt=>new Map(lt).set(le,Re instanceof Error?Re.message:String(Re)))}finally{Ze(Re=>{let lt=new Set(Re);return lt.delete(le),lt})}},[dt]);(0,ie.useEffect)(()=>{X!==null&&!ce.has(X)&&!me.has(X)&&Y(X,X)},[X,ce,me,Y]);let se=(0,ie.useCallback)(J=>{X!==null&&(Ne.has(J)?fe(le=>{let qe=new Set(le);return qe.delete(J),qe}):(fe(le=>new Set(le).add(J)),ce.has(J)||Y(X,J)))},[X,Ne,ce,Y]),c=(0,ie.useCallback)(J=>{X!==null&&Y(X,J)},[X,Y]),$=(0,ie.useCallback)(async J=>{S.current+=1;let le=S.current;gt.current?.abort();let qe=new AbortController;gt.current=qe,ke(J),F(!0),xe(null),W("idle"),Ue("");try{let Re=await $t(`${Dt}/read?path=${encodeURIComponent(J)}${dt}`,{signal:qe.signal});if(le!==S.current)return;ve({path:Re.path,content:Re.content,size:Re.size,mtime:Re.mtime}),Je(Re.content),et(!1)}catch(Re){if(Re.name==="AbortError"||le!==S.current)return;let lt=Re instanceof fa?Re.status:0,Kt=Re instanceof Error?Re.message:String(Re);ve(null),et(!1),xe(lt===415?{kind:"not.text",message:Kt}:lt===413?{kind:"too.large",message:Kt}:{kind:"read.failed",message:Kt})}finally{le===S.current&&F(!1)}},[dt]),he=(0,ie.useCallback)(J=>{De(()=>{$(J)})},[De,$]),Ae=(0,ie.useCallback)((J,le,qe)=>{Z(J.name);let Re=J.resourceBase?.kind==="directory"?J.resourceBase.path:null;Ve(le!==void 0?le:Re),fe(qe??new Set),ze(new Map),Fe(new Map),ke(null),ve(null),xe(null),et(!1),W("idle")},[]),ht=(0,ie.useCallback)(J=>{J.name!==O&&De(()=>Ae(J))},[O,De,Ae]),Nt=(0,ie.useCallback)(J=>{J!==X&&De(()=>{Ve(J),fe(new Set),ze(new Map),Fe(new Map),ke(null),ve(null),xe(null),et(!1),W("idle")})},[X,De]),St=(0,ie.useMemo)(()=>X===null?null:Ee!==null&&ia(X,Ee)!==""?Ee.slice(0,Ee.lastIndexOf("/")):X,[X,Ee]),ba=(0,ie.useMemo)(()=>{if(X===null||St===null)return[];let J=[{label:ha(X),abs:X}],le=ia(X,St),qe=X;for(let Re of le===""?[]:le.split("/"))qe=Fo(qe,Re),J.push({label:Re,abs:qe});return J},[X,St]),Rt=(0,ie.useCallback)(J=>{if(X===null)return;fe(qe=>{let Re=new Set(qe),lt=J;for(;lt!==X&&ia(X,lt)!=="";)Re.add(lt),lt=lt.slice(0,lt.lastIndexOf("/"));return Re});let le=J;for(;le!==X&&ia(X,le)!=="";)!ce.has(le)&&!me.has(le)&&Y(X,le),le=le.slice(0,le.lastIndexOf("/"))},[X,ce,me,Y]),_n=(0,ie.useCallback)(()=>{ye!==null&&(Je(ye.content),et(!0),W("idle"),Ue(""))},[ye]),Un=(0,ie.useCallback)(()=>{De(()=>{et(!1),ye!==null&&Je(ye.content),W("idle"),Ue("")})},[De,ye]),Vn=(0,ie.useCallback)(async()=>{if(!(ye===null||N==="saving"||!h)){W("saving"),Ue("");try{let J=await $t(`${Dt}/write?path=${encodeURIComponent(ye.path)}${dt}`,{method:"PUT",headers:{"Content-Type":"text/plain; charset=utf-8"},body:He});ve({path:J.path,content:He,size:J.size,mtime:J.mtime}),W("saved"),at.current!==null&&clearTimeout(at.current),at.current=setTimeout(()=>W("idle"),2500)}catch(J){if(J.name==="AbortError")return;W("error"),Ue(J instanceof Error?J.message:String(J))}}},[ye,He,h,N,dt]),Wn=(0,ie.useCallback)(async()=>{if(Be(!0),ze(new Map),Fe(new Map),await Xe(),X!==null){Y(X,X);for(let J of Ne)J!==X&&ia(X,J)!==""&&Y(X,J)}Ee!==null&&!je&&$(Ee),Be(!1)},[Xe,X,Ne,Ee,je,Y,$]);(0,ie.useEffect)(()=>{if(!(R.current||o.length===0)){R.current=!0;try{let J=localStorage.getItem(zo);if(J===null)return;let le=JSON.parse(J);if(typeof le.skill!="string")return;let qe=o.find(Kt=>Kt.name===le.skill);if(qe===void 0)return;let Re=qe.resourceBase?.kind==="directory"?qe.resourceBase.path:null,lt=typeof le.root=="string"?le.root:Re;Ae(qe,lt,new Set(Array.isArray(le.expanded)?le.expanded:[])),lt!==null&&typeof le.file=="string"&&$(le.file)}catch{}}},[o,Ae,$]),(0,ie.useEffect)(()=>{if(!R.current)return;let J={skill:O,root:X,expanded:[...Ne],file:Ee};try{localStorage.setItem(zo,JSON.stringify(J))}catch{}},[O,X,Ne,Ee]);let Kn=(0,ie.useMemo)(()=>{let J=[];X!==null&&J.push(X);for(let le of n)J.includes(le)||J.push(le);return J},[X,n]);return(0,f.jsxs)("div",{className:"sb-root",children:[(0,f.jsxs)("div",{className:"sb-body",children:[(0,f.jsxs)("div",{className:"sb-side",children:[(0,f.jsxs)("div",{className:"sb-side-toolbar",children:[(0,f.jsxs)("div",{className:"sb-search",children:[(0,f.jsx)(Oe.IconSearchOutline16,{className:"sb-search-icon"}),(0,f.jsx)("input",{className:"sb-search-input",type:"text",value:u,placeholder:t("search.placeholder"),onChange:J=>g(J.target.value)}),u!==""&&(0,f.jsx)("button",{type:"button",className:"sb-search-clear",onClick:()=>g(""),"aria-label":t("cancel"),children:(0,f.jsx)(Oe.IconCloseOutline16,{})})]}),(0,f.jsx)("button",{type:"button",className:"sb-icon-btn",onClick:()=>{m(!0),oe(null),We()},title:t("manage.dirs"),children:(0,f.jsx)(Oe.IconFolderOpen16,{})}),(0,f.jsx)("button",{type:"button",className:"sb-icon-btn",onClick:()=>{Wn()},disabled:nt,title:t("refresh"),children:nt?(0,f.jsx)(Oe.IconLoadingOutline16,{className:"sb-spin"}):(0,f.jsx)(Oe.IconRefreshOutline16,{})})]}),(0,f.jsx)(hi,{t,skills:o,loading:d,error:C,query:u,sourceFilter:k,sourceCounts:Ie,statusFilter:z,selectedName:O,togglingName:G,page:U,onSourceFilter:j,onStatusFilter:A,onToggleDisabled:J=>{wt(J)},onSelect:ht,onRetry:()=>{Xe()},onPrevPage:()=>T(J=>Math.max(1,J-1)),onNextPage:()=>T(J=>J+1)}),D!==null&&(0,f.jsxs)("div",{className:"sb-action-error",children:[(0,f.jsx)(Oe.IconWarningOutline16,{}),(0,f.jsx)("span",{className:"sb-action-error-text",children:D}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:()=>y(null),children:(0,f.jsx)(Oe.IconCloseOutline16,{})})]}),(0,f.jsx)(fi,{t,hasSkill:te!==null,root:X,rootOptions:Kn,cache:ce,loadingDirs:me,dirErrors:ot,expanded:Ne,selectedPath:Ee,crumbs:ba,onRootChange:Nt,onJump:Rt,onToggleDir:se,onFileClick:he,onRetryDir:c})]}),(ye!==null||M||Se!==null)&&(0,f.jsx)(vi,{t,skillName:O,file:ye,fileLoading:M,fileError:Se,hasSelection:Ee!==null,editing:je,draft:He,dirty:h,saveState:N,saveMessage:ue,onDraftChange:Je,onEdit:_n,onCancel:Un,onSave:()=>{Vn()}})]}),(0,f.jsxs)("div",{className:"sb-statusbar sb-statusbar--panel",children:[(0,f.jsxs)("span",{className:"sb-status-item",children:[t("status.skill"),": ",O??"-"]}),(0,f.jsxs)("span",{className:"sb-status-item",children:[t("status.file"),": ",ye!==null?ha(ye.path):"-"]}),(0,f.jsx)("span",{className:"sb-spacer"}),N==="error"&&(0,f.jsx)("span",{className:"sb-status-item sb-status--error",children:t("write.failed",{message:ue})}),h&&(0,f.jsx)("span",{className:"sb-status-item sb-status--dirty",children:t("status.unsaved")}),N==="saved"&&!h&&(0,f.jsx)("span",{className:"sb-status-item sb-status--saved",children:t("status.saved")}),ye!==null&&(0,f.jsx)("span",{className:"sb-status-item",children:$o(t,ye.size)}),ye!==null&&(0,f.jsx)("span",{className:"sb-status-item",children:t("mtime.label",{time:ui(ye.mtime)})})]}),I&&(0,f.jsx)(yi,{t,dirs:l,loading:V,error:ne,input:be,mutating:Te,onInputChange:Me,onAdd:()=>{kt()},onRemove:J=>{_(J)},onClose:()=>m(!1)}),L!==null&&(0,f.jsx)("div",{className:"sb-modal-overlay",onClick:()=>we(null),children:(0,f.jsxs)("div",{className:"sb-modal",onClick:J=>J.stopPropagation(),children:[(0,f.jsx)("div",{className:"sb-modal-title",children:t("confirm.discard.title")}),(0,f.jsx)("div",{className:"sb-modal-body",children:t("confirm.discard.body",{name:ye!==null?ha(ye.path):""})}),(0,f.jsxs)("div",{className:"sb-modal-actions",children:[(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--ghost",onClick:()=>we(null),children:t("cancel")}),(0,f.jsx)("button",{type:"button",className:"sb-btn sb-btn--danger",onClick:()=>{let J=L;we(null),J()},children:t("confirm.discard.ok")})]})]})})]})}var Et=require("react/jsx-runtime"),Bo=null;function wi(t){return[{icon:"\u{1F6E0}\uFE0F",title:t("skillsTab.guide.what.title"),body:t("skillsTab.guide.what.body"),items:[t("skillsTab.guide.what.item1"),t("skillsTab.guide.what.item2")]},{icon:"\u{1F504}",title:t("skillsTab.guide.how.title"),body:t("skillsTab.guide.how.body"),items:[t("skillsTab.guide.how.item1"),t("skillsTab.guide.how.item2"),t("skillsTab.guide.how.item3")]},{icon:"\u{1F4E5}",title:t("skillsTab.guide.pending.title"),body:t("skillsTab.guide.pending.body"),items:[t("skillsTab.guide.pending.item1"),t("skillsTab.guide.pending.item2")]},{icon:"\u{1F50D}",title:t("skillsTab.guide.manager.title"),body:t("skillsTab.guide.manager.body"),items:[t("skillsTab.guide.manager.item1"),t("skillsTab.guide.manager.item2"),t("skillsTab.guide.manager.item3"),t("skillsTab.guide.manager.item4")]},{icon:"\u26D4",title:t("skillsTab.guide.disable.title"),body:t("skillsTab.guide.disable.body"),items:[t("skillsTab.guide.disable.item1"),t("skillsTab.guide.disable.item2")]},{icon:"\u{1F4C1}",title:t("skillsTab.guide.dirs.title"),body:t("skillsTab.guide.dirs.body")},{icon:"\u{1F6AB}",title:t("skillsTab.guide.restraint.title"),body:t("skillsTab.guide.restraint.body"),items:[t("skillsTab.guide.restraint.item1"),t("skillsTab.guide.restraint.item2")]}]}function qo(t){let{t:e,sessionId:o}=t,[a,n]=(0,Ht.useState)(Bo??"skills"),[i,d]=(0,Ht.useState)(0),p=(0,Ht.useCallback)(()=>{fetch("/memory-evolve/api/badge").then(C=>C.ok?C.json():Promise.reject(new Error(`HTTP ${C.status}`))).then(C=>d(C.skills??0)).catch(()=>{})},[]);return(0,Ht.useEffect)(()=>{Bo=a},[a]),(0,Ht.useEffect)(()=>{p();let C=window.setInterval(p,3e4),w=()=>p();return window.addEventListener("dsh-memory-evolve:badge-change",w),()=>{window.clearInterval(C),window.removeEventListener("dsh-memory-evolve:badge-change",w)}},[p]),(0,Et.jsxs)("div",{className:"mt-panel",children:[(0,Et.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,Et.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("guide"),children:e("skillsTab.feature.guide")}),(0,Et.jsxs)("button",{type:"button",role:"tab","aria-selected":a==="skills",className:a==="skills"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("skills"),children:[e("skillsTab.feature.skills"),i>0&&(0,Et.jsx)("span",{className:"mt-feature-count",children:i})]}),(0,Et.jsx)("button",{type:"button",role:"tab","aria-selected":a==="skill-browser",className:a==="skill-browser"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("skill-browser"),children:e("skillsTab.feature.skillBrowser")})]}),a==="guide"?(0,Et.jsx)(ft,{sections:wi(e)}):a==="skill-browser"?(0,Et.jsx)(Ho,{t:e,sessionId:o}):(0,Et.jsx)(Ft,{t:e,feature:"skills",onChanged:()=>{p(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var Bt=require("react");var it=require("react"),K=require("react/jsx-runtime"),_o=["life","work","project","daily"],Jt=new Set(["done","cancelled"]),ki=["q1","q2","q3","q4"],Uo=null;async function ra(t,e){let o=await fetch(`/memory-evolve${t}`,{headers:{"content-type":"application/json"},...e});if(!o.ok){let a=await o.json().catch(()=>({}));throw new Error(a.error??`HTTP ${o.status}`)}return o.json()}function xi(t,e){return t(e===null?"todo.quadrant.none":`todo.quadrant.${e}`)}function Ti(t){if(t.quadrant==="q1"||t.quadrant==="q2"||t.quadrant==="q3"||t.quadrant==="q4")return t.quadrant;let e=t.important===!0,o=t.urgent===!0;return e&&o?"q1":e&&!o?"q2":!e&&o?"q3":"q4"}function Ni(t,e){let o=`todo.status.${e}`,a=t(o);return a===o?e:a}function Vo(t){let[,e,o]=t.split("-");return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?`${Number(e)}/${Number(o)}`:`${Number(e)}\u6708${Number(o)}\u65E5`}function Wo(t){let{t:e,sessionId:o}=t,[a,n]=(0,it.useState)("all"),[i,d]=(0,it.useState)("work"),[p,C]=(0,it.useState)(null),[w,u]=(0,it.useState)(null),[g,k]=(0,it.useState)("active"),[j,z]=(0,it.useState)("all"),[A,U]=(0,it.useState)(!1),[T,G]=(0,it.useState)(Uo??"list"),[v,D]=(0,it.useState)(""),[y,O]=(0,it.useState)(""),[Z,I]=(0,it.useState)(""),[m,l]=(0,it.useState)(null),[x,V]=(0,it.useState)(""),[P,ne]=(0,it.useState)(""),[oe,be]=(0,it.useState)(""),[Me,Te]=(0,it.useState)(""),[Ce,X]=(0,it.useState)(!1),[Ve,Ne]=(0,it.useState)(null);(0,it.useEffect)(()=>{Uo=T},[T]);let fe=(0,it.useCallback)(()=>{C(null);let N=new URLSearchParams({sessionId:o,all:"1"});a==="past"?N.set("target","daily"):a!=="all"&&N.set("target",a),(a==="past"||a==="all"&&A)&&(N.set("past","1"),A&&N.set("expired","1")),ra(`/api/todo?${N.toString()}`).then(ue=>{C(ue.items),u(ue.cwd),d(Ue=>a!=="all"?Ue:ue.cwd?"project":"work")}).catch(ue=>Ne({kind:"error",text:ue.message}))},[o,a,A]);(0,it.useEffect)(()=>{fe()},[fe]);let ce=N=>{Ne({kind:"ok",text:N}),window.setTimeout(()=>{Ne(W=>W?.text===N?null:W)},3e3)},ze=()=>{let N=v.trim();if(N===""||Ce)return;X(!0),ra("/api/todo",{method:"POST",body:JSON.stringify({sessionId:o,action:"add",target:a==="all"?i:a,content:N,quadrant:y===""?void 0:y,due:Z===""?void 0:Z})}).then(()=>{D(""),O(""),I(""),fe(),ce(e("todo.added"))}).catch(ue=>{Ne({kind:"error",text:ue.message})}).finally(()=>X(!1))},me=N=>{if(Ce)return;X(!0);let W=!Jt.has(N.status);ra("/api/todo",{method:"POST",body:JSON.stringify({sessionId:o,action:W?"done":"update",target:N.target,id:N.id,status:"pending"})}).then(()=>{fe(),ce(e(W?"todo.done":"todo.undone"))}).catch(ue=>{Ne({kind:"error",text:ue.message})}).finally(()=>X(!1))},Ze=N=>{if(Ce)return;let W=N.text.split(`
`)[0].slice(0,40);window.confirm(e("todo.deleteConfirm",{snippet:W}))&&(X(!0),ra("/api/todo",{method:"POST",body:JSON.stringify({sessionId:o,action:"remove",target:N.target,id:N.id})}).then(()=>{fe(),ce(e("todo.deleted"))}).catch(ue=>{Ne({kind:"error",text:ue.message})}).finally(()=>X(!1)))},ot=N=>{l(N.id),V(N.text),ne(N.quadrant??""),be(N.due??""),Te(N.status)},Fe=N=>{Ce||(X(!0),ra("/api/todo",{method:"POST",body:JSON.stringify({sessionId:o,action:"update",target:N.target,id:N.id,content:x.trim(),quadrant:P===""?void 0:P,due:oe===""?void 0:oe,status:Me})}).then(()=>{l(null),fe(),ce(e("todo.updated"))}).catch(W=>{Ne({kind:"error",text:W.message})}).finally(()=>X(!1)))},Ee=N=>{if(Ce)return;let W=["pending","doing","done","blocked","cancelled"],ue=W.indexOf(N.status),Ue=W[(ue+1)%W.length]??"pending";X(!0),ra("/api/todo",{method:"POST",body:JSON.stringify({sessionId:o,action:"update",target:N.target,id:N.id,status:Ue})}).then(()=>{fe(),ce(e("todo.updated"))}).catch(L=>{Ne({kind:"error",text:L.message})}).finally(()=>X(!1))},ke=new Date,ye=`${ke.getFullYear()}-${String(ke.getMonth()+1).padStart(2,"0")}-${String(ke.getDate()).padStart(2,"0")}`,ve=(p??[]).filter(N=>!(a==="past"&&N.past!==!0||g==="active"&&Jt.has(N.status)||g==="done"&&!Jt.has(N.status)||j==="none"&&N.quadrant!==null||j!=="all"&&j!=="none"&&N.quadrant!==j)),M=[];for(let N of ve){let W=N.past===!0?N.day??null:null,ue=M[M.length-1];W!==null&&ue!==void 0&&ue.day===W?ue.items.push(N):M.push({day:W,items:[N]})}let F={q1:[],q2:[],q3:[],q4:[]};for(let N of ve)F[Ti(N)].push(N);let Se=(N,W)=>{let ue=Jt.has(N.status),Ue=N.due!==null&&N.due<ye&&!ue;return(0,K.jsxs)(K.Fragment,{children:[a==="all"&&(0,K.jsx)("span",{className:"me-badge me-badge-target",children:N.past===!0?e("todo.track.past"):e(`todo.track.${N.target}`)}),N.past===!0&&a!=="all"&&(0,K.jsx)("span",{className:"me-badge me-badge-day",children:Vo(N.day??"")}),W?.showQuad===!0&&(0,K.jsx)("span",{className:`me-badge me-badge-quad me-badge-quad-${N.quadrant??"none"}`,children:xi(e,N.quadrant)}),N.due!==null&&(0,K.jsx)("span",{className:`me-badge ${Ue?"me-badge-overdue":"me-badge-due"}`,children:Ue?`${e("todo.overdue")} ${N.due}`:`${e("todo.due")} ${N.due}`}),N.cat!==null&&(0,K.jsx)("span",{className:"me-badge me-badge-target",children:N.cat}),(0,K.jsx)("button",{type:"button",className:`me-badge me-badge-status me-badge-status-${N.status}`,title:e("todo.board.cycleStatus"),disabled:Ce,onClick:L=>{L.stopPropagation(),Ee(N)},children:Ni(e,N.status)})]})},xe=N=>{let W=Jt.has(N.status);return(0,K.jsxs)("span",{className:"me-item-actions",children:[(0,K.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce,onClick:()=>me(N),children:e(W?"todo.undone":"todo.done")}),m!==N.id&&(0,K.jsx)("button",{type:"button",className:"me-btn",disabled:Ce,onClick:()=>ot(N),children:e("todo.edit")}),(0,K.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:Ce,onClick:()=>Ze(N),children:e("memoryTab.delete")})]})},je=N=>(0,K.jsxs)("div",{className:"me-todo-edit",children:[(0,K.jsx)("textarea",{className:"me-item-edit",rows:2,value:x,onChange:W=>V(W.target.value)}),(0,K.jsxs)("div",{className:"me-todo-edit-row",children:[(0,K.jsxs)("select",{value:P,onChange:W=>ne(W.target.value),children:[(0,K.jsx)("option",{value:"",children:e("todo.quadrant.none")}),(0,K.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,K.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,K.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,K.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")})]}),(0,K.jsx)("input",{type:"date",value:oe,onChange:W=>be(W.target.value)}),(0,K.jsxs)("select",{value:Me,onChange:W=>Te(W.target.value),children:[(0,K.jsx)("option",{value:"pending",children:e("todo.status.pending")}),(0,K.jsx)("option",{value:"doing",children:e("todo.status.doing")}),(0,K.jsx)("option",{value:"done",children:e("todo.status.done")}),(0,K.jsx)("option",{value:"blocked",children:e("todo.status.blocked")}),(0,K.jsx)("option",{value:"cancelled",children:e("todo.status.cancelled")})]}),(0,K.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce||x.trim()==="",onClick:()=>Fe(N),children:e("todo.save")}),(0,K.jsx)("button",{type:"button",className:"me-btn",disabled:Ce,onClick:()=>l(null),children:e("todo.cancel")})]})]}),et=N=>{let W=Jt.has(N.status),ue=N.text.split(`
`)[0]||N.text;return(0,K.jsxs)("article",{className:`me-todo-card${W?" me-todo-card--done":""}`,children:[(0,K.jsx)("div",{className:"me-todo-card-meta",children:Se(N)}),m===N.id?je(N):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)("p",{className:"me-todo-card-title",title:N.text,children:ue}),N.text.includes(`
`)&&(0,K.jsx)("p",{className:"me-todo-card-body",children:N.text.slice(ue.length).trim()})]}),(0,K.jsxs)("div",{className:"me-todo-card-foot",children:[(0,K.jsx)("span",{className:"me-item-time",children:N.time}),xe(N)]})]},N.id)},He=()=>(0,K.jsx)("div",{className:"me-todo-board",role:"region","aria-label":e("todo.view.board"),children:ki.map(N=>{let W=F[N];return(0,K.jsxs)("section",{className:`me-todo-quad me-todo-quad-${N}`,"aria-label":e(`todo.quadrant.${N}`),children:[(0,K.jsxs)("header",{className:"me-todo-quad-head",children:[(0,K.jsx)("span",{className:"me-todo-quad-title",children:e(`todo.quadrant.${N}`)}),(0,K.jsx)("span",{className:"me-todo-quad-count",children:W.length})]}),(0,K.jsx)("div",{className:"me-todo-quad-body",children:W.length===0?(0,K.jsx)("p",{className:"me-todo-quad-empty",children:e("todo.board.empty")}):W.map(ue=>et(ue))})]},N)})}),Je=()=>ve.length===0?(0,K.jsxs)("p",{className:"me-empty",children:[e("todo.empty"),(a==="all"||a==="past")&&!A&&` ${e("todo.pastHint")}`]}):(0,K.jsx)("ul",{className:"me-list",children:M.map(N=>(0,K.jsxs)(it.Fragment,{children:[N.day!==null&&(0,K.jsx)("li",{className:"me-todo-day",children:Vo(N.day)}),N.items.map(W=>{let ue=Jt.has(W.status);return(0,K.jsxs)("li",{className:`me-item me-todo-item${ue?" me-todo-item--done":""}`,children:[(0,K.jsxs)("div",{className:"me-item-head",children:[Se(W,{showQuad:!0}),(0,K.jsx)("span",{className:"me-item-time",children:W.time}),xe(W)]}),m===W.id?je(W):(0,K.jsx)("p",{className:"me-todo-text",children:W.text})]},W.id)})]},N.day??N.items[0].id))});return(0,K.jsxs)("div",{className:"me-panel",children:[Ve!==null&&(0,K.jsx)("div",{className:`me-notice me-notice-${Ve.kind}`,children:Ve.text}),(0,K.jsxs)("div",{className:"me-tabs",role:"tablist",children:[(0,K.jsx)("button",{type:"button",role:"tab","aria-selected":a==="all",className:a==="all"?"me-tab me-tab-active":"me-tab",onClick:()=>n("all"),children:e("todo.track.all")}),_o.map(N=>(0,K.jsx)("button",{type:"button",role:"tab","aria-selected":a===N,className:a===N?"me-tab me-tab-active":"me-tab",onClick:()=>n(N),children:e(`todo.track.${N}`)},N)),(0,K.jsx)("button",{type:"button",role:"tab","aria-selected":a==="past",className:a==="past"?"me-tab me-tab-active":"me-tab",onClick:()=>n("past"),children:e("todo.track.past")})]}),(0,K.jsx)("p",{className:"me-muted me-todo-help",children:e("todo.help")}),a==="project"&&w===null&&(0,K.jsx)("p",{className:"me-muted",children:e("todo.projectHint")}),a!=="past"&&(0,K.jsxs)("div",{className:"me-todo-add",children:[a==="all"&&(0,K.jsx)("select",{className:"me-todo-select",value:i,onChange:N=>d(N.target.value),title:e("todo.track"),children:_o.map(N=>(0,K.jsx)("option",{value:N,children:e(`todo.track.${N}`)},N))}),(0,K.jsx)("input",{type:"text",className:"me-todo-input",value:v,placeholder:e("todo.addPlaceholder"),onChange:N=>D(N.target.value),onKeyDown:N=>{N.key==="Enter"&&ze()}}),(0,K.jsxs)("select",{className:"me-todo-select",value:y,onChange:N=>O(N.target.value),title:e("todo.quadrant"),children:[(0,K.jsx)("option",{value:"",children:e("todo.quadrant.none")}),(0,K.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,K.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,K.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,K.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")})]}),(0,K.jsx)("input",{type:"date",className:"me-todo-date",value:Z,onChange:N=>I(N.target.value),title:e("todo.due")}),(0,K.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:Ce||v.trim()==="",onClick:ze,children:e("todo.add")})]}),(0,K.jsxs)("div",{className:"me-todo-filters",children:[(0,K.jsxs)("label",{className:"me-todo-filter",children:[(0,K.jsx)("span",{children:e("todo.filterStatus")}),(0,K.jsxs)("select",{value:g,onChange:N=>k(N.target.value),children:[(0,K.jsx)("option",{value:"active",children:e("todo.status.active")}),(0,K.jsx)("option",{value:"all",children:e("todo.all")}),(0,K.jsx)("option",{value:"done",children:e("todo.status.done")})]})]}),(0,K.jsxs)("label",{className:"me-todo-filter",children:[(0,K.jsx)("span",{children:e("todo.filterQuadrant")}),(0,K.jsxs)("select",{value:j,onChange:N=>z(N.target.value),children:[(0,K.jsx)("option",{value:"all",children:e("todo.all")}),(0,K.jsx)("option",{value:"q1",children:e("todo.quadrant.q1")}),(0,K.jsx)("option",{value:"q2",children:e("todo.quadrant.q2")}),(0,K.jsx)("option",{value:"q3",children:e("todo.quadrant.q3")}),(0,K.jsx)("option",{value:"q4",children:e("todo.quadrant.q4")}),(0,K.jsx)("option",{value:"none",children:e("todo.quadrant.none")})]})]}),(a==="all"||a==="past")&&(0,K.jsxs)("label",{className:"me-todo-filter me-todo-filter-check",children:[(0,K.jsx)("input",{type:"checkbox",checked:A,onChange:N=>U(N.target.checked)}),(0,K.jsx)("span",{children:e("todo.showExpired")})]}),(0,K.jsxs)("div",{className:"me-todo-view-switch",role:"group","aria-label":e("todo.view.mode"),children:[(0,K.jsx)("button",{type:"button",className:T==="list"?"me-todo-view-btn me-todo-view-btn-active":"me-todo-view-btn","aria-pressed":T==="list",onClick:()=>G("list"),children:e("todo.view.list")}),(0,K.jsx)("button",{type:"button",className:T==="board"?"me-todo-view-btn me-todo-view-btn-active":"me-todo-view-btn","aria-pressed":T==="board",onClick:()=>G("board"),children:e("todo.view.board")})]})]}),p===null?(0,K.jsx)("p",{className:"me-muted",children:e("panel.loading")}):T==="board"?He():Je()]})}var It=require("react/jsx-runtime"),Ko=null;function Si(t){return[{icon:"\u{1F4CB}",title:t("todosTab.guide.tracks.title"),body:t("todosTab.guide.tracks.body"),items:[t("todosTab.guide.tracks.item1"),t("todosTab.guide.tracks.item2"),t("todosTab.guide.tracks.item3"),t("todosTab.guide.tracks.item4")]},{icon:"\u2795",title:t("todosTab.guide.add.title"),body:t("todosTab.guide.add.body"),items:[t("todosTab.guide.add.item1"),t("todosTab.guide.add.item2")]},{icon:"\u{1F532}",title:t("todosTab.guide.pending.title"),body:t("todosTab.guide.pending.body"),items:[t("todosTab.guide.pending.item1"),t("todosTab.guide.pending.item2")]},{icon:"\u{1F3AF}",title:t("todosTab.guide.attrs.title"),body:t("todosTab.guide.attrs.body"),items:[t("todosTab.guide.attrs.item1"),t("todosTab.guide.attrs.item2"),t("todosTab.guide.attrs.item3")]},{icon:"\u{1F4C5}",title:t("todosTab.guide.view.title"),body:t("todosTab.guide.view.body"),items:[t("todosTab.guide.view.item1"),t("todosTab.guide.view.item2")]},{icon:"\u23F0",title:t("todosTab.guide.remind.title"),body:t("todosTab.guide.remind.body")}]}function Go(t){let{sessionId:e,t:o}=t,[a,n]=(0,Bt.useState)(Ko??"todo-suggestions"),[i,d]=(0,Bt.useState)(0),p=(0,Bt.useCallback)(()=>{fetch("/memory-evolve/api/badge").then(C=>C.ok?C.json():Promise.reject(new Error(`HTTP ${C.status}`))).then(C=>d(C.todoSuggestions??0)).catch(()=>{})},[]);return(0,Bt.useEffect)(()=>{Ko=a},[a]),(0,Bt.useEffect)(()=>{p();let C=window.setInterval(p,3e4),w=()=>p();return window.addEventListener("dsh-memory-evolve:badge-change",w),()=>{window.clearInterval(C),window.removeEventListener("dsh-memory-evolve:badge-change",w)}},[p]),(0,It.jsxs)("div",{className:"mt-panel",children:[(0,It.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,It.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("guide"),children:o("todosTab.feature.guide")}),(0,It.jsxs)("button",{type:"button",role:"tab","aria-selected":a==="todo-suggestions",className:a==="todo-suggestions"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("todo-suggestions"),children:[o("todosTab.feature.todoSuggestions"),i>0&&(0,It.jsx)("span",{className:"mt-feature-count",children:i})]}),(0,It.jsx)("button",{type:"button",role:"tab","aria-selected":a==="todo",className:a==="todo"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("todo"),children:o("todosTab.feature.todo")})]}),a==="guide"?(0,It.jsx)(ft,{sections:Si(o)}):a==="todo"?(0,It.jsx)(Wo,{t:o,sessionId:String(e)}):(0,It.jsx)(Ft,{t:o,feature:"todo-suggestions",onChanged:()=>{p(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var Pa=require("react");var qt=require("react"),Ke=require("react/jsx-runtime");async function Jo(t){let e=await fetch(`/memory-evolve/api/update/status${t?"?force=1":""}`);if(!e.ok)throw new Error(`HTTP ${e.status}`);return await e.json()}function Ci(t){if(typeof t!="number"||Number.isNaN(t))return"\u2014";let e=new Date(t);return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")} ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}function Xo(t){let{t:e}=t,[o,a]=(0,qt.useState)(null),[n,i]=(0,qt.useState)(""),[d,p]=(0,qt.useState)(!1),[C,w]=(0,qt.useState)(!1),[u,g]=(0,qt.useState)(null),k=U=>{g(null),U&&p(!0),Jo(U).then(T=>{a(T),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}).catch(T=>g({code:"network",message:T instanceof Error?T.message:"network error"})).finally(()=>p(!1))};(0,qt.useEffect)(()=>{k(!1)},[]);let j=()=>{C||!o?.latestTag||(w(!0),g(null),fetch("/memory-evolve/api/update",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({expectedTag:o.latestTag})}).then(async U=>{let T=await U.json();if(!U.ok||!T.ok){g({code:T.code??"unknown",message:T.error??""});return}i(T.releaseNotes??""),a({...o??{},restartRequired:!0});try{let G=await Jo(!1);a(G)}catch{}g(null),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}).catch(U=>g({code:"network",message:U instanceof Error?U.message:"network error"})).finally(()=>w(!1)))},z=d||C||o===null,A=o?.noteCode?e(`version.note.${o.noteCode}`):"";return(0,Ke.jsxs)("div",{className:"me-panel",children:[o?.restartRequired===!0&&(0,Ke.jsxs)("div",{className:"me-notice me-notice-warn",role:"alert",children:[(0,Ke.jsx)("strong",{children:e("version.restart.title")}),"\uFF1A",e("version.restart.hint")]}),(0,Ke.jsx)("div",{className:"me-block",children:(0,Ke.jsxs)("div",{className:"me-group",children:[(0,Ke.jsxs)("div",{className:"me-field",children:[(0,Ke.jsx)("span",{className:"me-field-label",children:e("version.current")}),(0,Ke.jsx)("span",{className:"me-field-value",children:o?.localTag??"\u2014"})]}),(0,Ke.jsxs)("div",{className:"me-field",children:[(0,Ke.jsx)("span",{className:"me-field-label",children:e("version.latest")}),(0,Ke.jsx)("span",{className:"me-field-value",children:o?.latestTag??"\u2014"})]}),(0,Ke.jsxs)("div",{className:"me-field",children:[(0,Ke.jsx)("span",{className:"me-field-label",children:e("version.statusLabel")}),(0,Ke.jsx)("span",{className:"me-field-value",children:e(o===null?"version.loading":`version.status.${o.status??"unknown"}`)})]}),A!==""&&(0,Ke.jsx)("p",{className:"me-help",children:A}),o?.lastError&&(0,Ke.jsxs)("p",{className:"me-help",children:[e("version.lastError"),"\uFF1A",o.lastError.message??o.lastError.kind??"\u2014"]}),(0,Ke.jsxs)("p",{className:"me-help",children:[e("version.checkTime"),"\uFF1A",Ci(o?.lastSuccessAt??o?.lastAttemptAt)]})]})}),(0,Ke.jsxs)("div",{className:"me-block",children:[(0,Ke.jsx)("button",{type:"button",className:"me-btn",disabled:z,onClick:()=>k(!0),children:e(d?"version.checking":"version.checkNow")}),o?.status==="outdated"&&o.latestTag&&(0,Ke.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:z,onClick:j,children:C?e("version.updating"):e("version.updateNow",{tag:o.latestTag})}),u&&(0,Ke.jsx)("p",{className:"me-notice me-notice-error",role:"alert",children:e(`version.error.${u.code}`,{message:u.message})})]}),(n!==""||o?.lastUpdated?.notes)&&(0,Ke.jsx)("div",{className:"me-block",children:(0,Ke.jsx)("div",{className:"me-group",children:(0,Ke.jsxs)("div",{className:"me-field",children:[(0,Ke.jsx)("span",{className:"me-field-label",children:e("version.releaseNotes")}),(0,Ke.jsx)("span",{className:"me-field-value me-notes-pre",children:o?.lastUpdated?.notes??n})]})})}),o?.status==="unsupported"&&(0,Ke.jsx)("div",{className:"me-block",children:(0,Ke.jsx)("p",{className:"me-help",children:e("version.unsupported.hint")})})]})}var Lt=require("react/jsx-runtime"),Yo=null;function Qo(t){let{t:e}=t,[o,a]=(0,Pa.useState)(Yo??"guide");return(0,Pa.useEffect)(()=>{Yo=o},[o]),(0,Lt.jsxs)("div",{className:"mt-panel",children:[(0,Lt.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,Lt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("guide"),children:e("settingsTab.feature.guide")}),(0,Lt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="config",className:o==="config"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("config"),children:e("settingsTab.feature.config")}),(0,Lt.jsx)("button",{type:"button",role:"tab","aria-selected":o==="version",className:o==="version"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("version"),children:e("settingsTab.feature.version")})]}),o==="version"?(0,Lt.jsx)(Xo,{t:e}):(0,Lt.jsx)(Ft,{t:e,feature:o,onChanged:()=>{window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}})]})}var Ye=require("react");var ae=require("react/jsx-runtime"),la=(t,e)=>`${t}\0${e}`;function Zo(t){return t===void 0?"\u2014":t>=1e6?`${(t/1e6).toFixed(t%1e6===0?0:1)}M`:t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}K`:String(t)}var es=null;function Ei(t){return[{icon:"\u{1F9ED}",title:t("modelsTab.guide.what.title"),body:t("modelsTab.guide.what.body"),items:[t("modelsTab.guide.what.item1"),t("modelsTab.guide.what.item2"),t("modelsTab.guide.what.item3")]},{icon:"\u2699\uFE0F",title:t("modelsTab.guide.config.title"),body:t("modelsTab.guide.config.body"),items:[t("modelsTab.guide.config.item1"),t("modelsTab.guide.config.item2"),t("modelsTab.guide.config.item3"),t("modelsTab.guide.config.item4"),t("modelsTab.guide.config.item5")]},{icon:"\u{1F916}",title:t("modelsTab.guide.tool.title"),body:t("modelsTab.guide.tool.body"),items:[t("modelsTab.guide.tool.item1"),t("modelsTab.guide.tool.item2")]},{icon:"\u{1F50C}",title:t("modelsTab.guide.switch.title"),body:t("modelsTab.guide.switch.body")}]}function as(t){let{t:e}=t,[o,a]=(0,Ye.useState)(es??"models"),[n,i]=(0,Ye.useState)(null),[d,p]=(0,Ye.useState)(!1),[C,w]=(0,Ye.useState)(void 0),[u,g]=(0,Ye.useState)(""),[k,j]=(0,Ye.useState)(!0),[z,A]=(0,Ye.useState)(void 0),[U,T]=(0,Ye.useState)(new Set);(0,Ye.useEffect)(()=>{es=o},[o]);let G=(0,Ye.useCallback)(()=>{p(!0),w(void 0),fetch("/memory-evolve/api/models").then(m=>m.ok?m.json():Promise.reject(new Error(`HTTP ${m.status}`))).then(m=>{i(m)}).catch(m=>{w(m instanceof Error?m.message:String(m))}).finally(()=>{p(!1)})},[]);(0,Ye.useEffect)(()=>{G()},[G]);let v=(0,Ye.useCallback)(async(m,l,x)=>{let V=la(m,l);T(P=>new Set(P).add(V));try{let P=await fetch("/memory-evolve/api/models/update",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({provider:m,model:l,patch:x})}),ne=await P.json();if(!P.ok||ne.ok!==!0)throw new Error(ne.error??`HTTP ${P.status}`);return!0}finally{T(P=>{let ne=new Set(P);return ne.delete(V),ne})}},[]),D=(0,Ye.useCallback)((m,l,x)=>{i(V=>{if(V===null)return V;let P=V.providers.map(oe=>oe.provider!==m?oe:{...oe,models:oe.models.map(be=>{if(be.id!==l)return be;let Me={...be};return x(Me),Me})}),ne=0;for(let oe of P)for(let be of oe.models)be.enabled&&(ne+=1);return{providers:P,total:V.total,enabledTotal:ne}})},[]),y=(0,Ye.useCallback)((m,l)=>{let x=ts(n,m,l);x!==null&&v(m,l,{enabled:!x.enabled}).then(V=>{V&&D(m,l,P=>{P.enabled=!P.enabled})})},[n,v,D]),O=(0,Ye.useCallback)((m,l,x)=>{v(m,l,{note:x}).then(V=>{V&&D(m,l,P=>{P.note=x})})},[v,D]),Z=(0,Ye.useCallback)((m,l,x,V,P,ne)=>{let oe=ts(n,m,l);if(oe===null||oe.reasoning===null)return;let be=oe.reasoning.levels.map(Te=>Te.id),Me=P.length===be.length&&be.every(Te=>P.includes(Te))?null:P;v(m,l,{thinking:x,reasoning:{enabled:Me,recommended:V===""?null:V,custom:ne}}).then(Te=>{Te&&(A(void 0),D(m,l,Ce=>{let X=Ce.reasoning;if(X===null)return;Ce.thinking=x,X.recommendedOverride=V===""?void 0:V,V!==""&&(X.recommended=V);let Ve=new Set(P),Ne=new Map(ne.map(fe=>[fe.id,fe]));X.levels=[...X.levels.map(fe=>{let ce=Ne.get(fe.id);return ce!==void 0?{id:fe.id,name:ce.name,custom:!0,enabled:Ve.has(fe.id)}:{id:fe.id,name:fe.name,custom:!1,enabled:Ve.has(fe.id)}}),...ne.filter(fe=>!X.levels.some(ce=>ce.id===fe.id)).map(fe=>({id:fe.id,name:fe.name,custom:!0,enabled:Ve.has(fe.id)}))]}))})},[n,v,D]),I=(0,Ye.useMemo)(()=>{let m=u.trim().toLowerCase(),l=[];for(let x of n?.providers??[])for(let V of x.models)m!==""&&!(x.providerDisplay.toLowerCase().includes(m)||x.provider.toLowerCase().includes(m)||V.name.toLowerCase().includes(m)||V.id.toLowerCase().includes(m)||V.note.toLowerCase().includes(m))||l.push({group:x,row:V});return l},[n,u]);return(0,ae.jsxs)("div",{className:"mt-panel",children:[(0,ae.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,ae.jsx)("button",{type:"button",role:"tab","aria-selected":o==="models",className:o==="models"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("models"),children:e("modelsTab.feature.models")}),(0,ae.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("guide"),children:e("modelsTab.feature.guide")})]}),o==="guide"?(0,ae.jsx)(ft,{sections:Ei(e)}):(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsxs)("div",{className:"mt-toolbar",children:[(0,ae.jsx)("input",{className:"mt-search",type:"search",placeholder:e("modelsTab.searchPh"),value:u,onChange:m=>{g(m.target.value)},"aria-label":e("modelsTab.searchPh")}),(0,ae.jsxs)("label",{className:"mt-models-toggle-label",children:[(0,ae.jsx)("input",{type:"checkbox",checked:k,onChange:m=>{j(m.target.checked)}}),(0,ae.jsx)("span",{children:e("modelsTab.showReasoning")})]}),(0,ae.jsx)("button",{type:"button",className:"mt-btn",disabled:d,onClick:G,children:e(d?"modelsTab.loading":"modelsTab.refresh")}),n!==null?(0,ae.jsx)("span",{className:"mt-muted",children:e("modelsTab.count",{total:n.total,enabled:n.enabledTotal})}):null]}),C!==void 0?(0,ae.jsx)("div",{className:"mt-notice mt-notice-error",children:e("modelsTab.loadFailed",{message:C})}):null,n!==null&&I.length===0?(0,ae.jsx)("p",{className:"mt-muted",children:e("modelsTab.empty")}):null,(0,ae.jsx)("div",{className:"mt-models-scroll",children:(0,ae.jsxs)("table",{className:"mt-models-table",children:[(0,ae.jsx)("thead",{children:(0,ae.jsxs)("tr",{children:[(0,ae.jsx)("th",{className:"mt-models-cell mt-models-col-enable",children:e("modelsTab.enabled")}),(0,ae.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.provider")}),(0,ae.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.model")}),(0,ae.jsx)("th",{className:"mt-models-cell mt-models-col-capacity",children:e("modelsTab.capacity")}),k?(0,ae.jsx)("th",{className:"mt-models-cell mt-models-col-reasoning",children:e("modelsTab.reasoning")}):null,(0,ae.jsx)("th",{className:"mt-models-cell",children:e("modelsTab.note")})]})}),(0,ae.jsx)("tbody",{children:I.map(({group:m,row:l})=>(0,ae.jsx)(Ii,{t:e,group:m,row:l,showReasoning:k,expanded:z===la(m.provider,l.id),saving:U.has(la(m.provider,l.id)),onToggle:()=>{y(m.provider,l.id)},onExpand:()=>{A(z===la(m.provider,l.id)?void 0:la(m.provider,l.id))},onSaveNote:x=>{O(m.provider,l.id,x)},onSaveReasoning:(x,V,P,ne)=>{Z(m.provider,l.id,x,V,P,ne)}},la(m.provider,l.id)))})]})})]})]})}function ts(t,e,o){for(let a of t?.providers??[]){if(a.provider!==e)continue;return a.models.find(i=>i.id===o)??null}return null}function Ii(t){let{t:e,group:o,row:a,showReasoning:n,expanded:i,saving:d,onToggle:p,onExpand:C,onSaveNote:w,onSaveReasoning:u}=t,[g,k]=(0,Ye.useState)(a.note),[j,z]=(0,Ye.useState)(a.thinking),[A,U]=(0,Ye.useState)(a.reasoning?.recommendedOverride??""),[T,G]=(0,Ye.useState)(()=>new Set((a.reasoning?.levels??[]).filter(P=>P.enabled).map(P=>P.id))),[v,D]=(0,Ye.useState)(()=>(a.reasoning?.levels??[]).filter(P=>P.custom).map(P=>({id:P.id,name:P.name}))),[y,O]=(0,Ye.useState)(""),[Z,I]=(0,Ye.useState)("");(0,Ye.useEffect)(()=>{k(a.note)},[a.note]);let m=a.reasoning?.levels??[],l=a.reasoning?.recommended,x=m.filter(P=>P.enabled),V=P=>{z(P),P||G(ne=>{let oe=new Set;for(let be of ne){let Me=m.find(Te=>Te.id===be);Me!==void 0&&Me.id==="off"&&oe.add(be)}return oe})};return(0,ae.jsxs)("tr",{className:a.enabled?"mt-models-row":"mt-models-row mt-models-row-muted",children:[(0,ae.jsx)("td",{className:"mt-models-cell mt-models-col-enable",children:(0,ae.jsx)("input",{type:"checkbox",checked:a.enabled,disabled:d,onChange:p,"aria-label":a.enabled?e("modelsTab.disable"):e("modelsTab.enable")})}),(0,ae.jsxs)("td",{className:"mt-models-cell",children:[(0,ae.jsx)("span",{className:"mt-models-provider",children:o.providerDisplay}),o.active?null:(0,ae.jsx)("span",{className:"mt-models-tag mt-models-tag-dormant",children:e("modelsTab.dormant")})]}),(0,ae.jsx)("td",{className:"mt-models-cell",children:(0,ae.jsxs)("div",{className:"mt-models-model",children:[(0,ae.jsx)("span",{className:"mt-models-model-name",children:a.name}),(0,ae.jsx)("span",{className:"mt-models-model-id",children:a.id}),a.supportsImage===!0?(0,ae.jsx)("span",{className:"mt-models-tag",title:e("modelsTab.supportsImageHint"),children:e("modelsTab.supportsImage")}):null]})}),(0,ae.jsx)("td",{className:"mt-models-cell mt-models-col-capacity",children:(0,ae.jsxs)("span",{className:"mt-models-capacity",children:[Zo(a.contextWindow)," / ",Zo(a.maxTokens)]})}),n?(0,ae.jsx)("td",{className:"mt-models-cell mt-models-col-reasoning",children:a.thinking?m.length===0?(0,ae.jsx)("span",{className:"mt-models-muted-cell",children:"\u2014"}):(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsxs)("div",{className:"mt-models-levels",children:[x.length===0?(0,ae.jsx)("span",{className:"mt-models-level-none",children:e("modelsTab.levelsNone")}):x.slice(0,4).map(P=>(0,ae.jsx)("span",{className:P.id===l?"mt-models-tag mt-models-tag-rec":"mt-models-tag",children:P.name},P.id)),x.length>4?(0,ae.jsxs)("span",{className:"mt-models-level-more",children:["+",x.length-4]}):null]}),(0,ae.jsx)("button",{type:"button",className:"mt-models-link",onClick:C,"aria-expanded":i,children:e(i?"modelsTab.closeEditor":"modelsTab.editLevels")})]}):(0,ae.jsxs)(ae.Fragment,{children:[(0,ae.jsx)("span",{className:"mt-models-tag mt-models-tag-off",children:e("modelsTab.thinkingOff")}),m.length>0&&(0,ae.jsx)("button",{type:"button",className:"mt-models-link",onClick:C,"aria-expanded":i,children:e(i?"modelsTab.closeEditor":"modelsTab.editLevels")})]})}):null,(0,ae.jsx)("td",{className:"mt-models-cell",children:(0,ae.jsx)("input",{className:"mt-models-note",type:"text",value:g,placeholder:e("modelsTab.notePh"),disabled:d,"aria-label":e("modelsTab.note"),onChange:P=>{k(P.target.value)},onBlur:()=>{g!==a.note&&w(g)}})}),i&&m.length>0?(0,ae.jsx)("td",{className:"mt-models-expanded",colSpan:n?6:5,children:(0,ae.jsxs)("div",{className:"mt-models-editor",children:[(0,ae.jsx)("div",{className:"mt-models-editor-title",children:e("modelsTab.editorTitle")}),(0,ae.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ae.jsx)("input",{type:"checkbox",checked:j,disabled:d,onChange:P=>{V(P.target.checked)}}),(0,ae.jsx)("span",{className:"mt-models-editor-level-name",children:e("modelsTab.thinking")}),(0,ae.jsx)("span",{className:"mt-models-editor-hint",children:e("modelsTab.thinkingHint")})]}),(0,ae.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ae.jsx)("span",{className:"mt-models-editor-label",children:e("modelsTab.recommendedLevel")}),(0,ae.jsxs)("select",{className:"mt-models-select",value:j?A:"",disabled:d||!j||x.length===0,onChange:P=>{U(P.target.value)},children:[(0,ae.jsx)("option",{value:"",children:e("modelsTab.recommendedAuto")}),m.filter(P=>P.enabled).map(P=>(0,ae.jsxs)("option",{value:P.id,children:[P.name," (",P.id,")"]},P.id))]})]}),(0,ae.jsx)("div",{className:"mt-models-editor-levels",children:m.map(P=>(0,ae.jsxs)("label",{className:"mt-models-editor-level",children:[(0,ae.jsx)("input",{type:"checkbox",checked:T.has(P.id),disabled:d||!j&&P.id!=="off",onChange:()=>{G(ne=>{let oe=new Set(ne);return oe.delete(P.id)||oe.add(P.id),oe})}}),(0,ae.jsx)("span",{className:"mt-models-editor-level-name",children:P.name}),(0,ae.jsx)("span",{className:"mt-models-editor-level-id",children:P.id}),P.id===l&&j?(0,ae.jsx)("span",{className:"mt-models-tag mt-models-tag-rec",children:e("modelsTab.recommended")}):null,P.custom?(0,ae.jsx)("button",{type:"button",className:"mt-models-link mt-models-link-danger",disabled:d,onClick:()=>{D(ne=>ne.filter(oe=>oe.id!==P.id)),G(ne=>{let oe=new Set(ne);return oe.delete(P.id),oe})},children:e("modelsTab.removeLevel")}):null]},P.id))}),(0,ae.jsxs)("div",{className:"mt-models-editor-add",children:[(0,ae.jsx)("input",{className:"mt-search",type:"text",value:y,placeholder:e("modelsTab.levelIdPh"),"aria-label":e("modelsTab.levelIdPh"),disabled:d,onChange:P=>{O(P.target.value.trim())}}),(0,ae.jsx)("input",{className:"mt-search",type:"text",value:Z,placeholder:e("modelsTab.levelNamePh"),"aria-label":e("modelsTab.levelNamePh"),disabled:d,onChange:P=>{I(P.target.value)}}),(0,ae.jsx)("button",{type:"button",className:"mt-btn",disabled:d||y===""||!/^[A-Za-z0-9._-]{1,32}$/.test(y),onClick:()=>{D(P=>P.some(ne=>ne.id===y)?P:[...P,{id:y,name:Z===""?y:Z}]),G(P=>new Set(P).add(y)),O(""),I("")},children:e("modelsTab.addLevel")})]}),(0,ae.jsxs)("div",{className:"mt-models-editor-actions",children:[(0,ae.jsx)("button",{type:"button",className:"mt-btn",disabled:d,onClick:()=>{u(j,A,[...T],v)},children:e(d?"modelsTab.saving":"modelsTab.save")}),(0,ae.jsx)("button",{type:"button",className:"mt-btn",disabled:d,onClick:C,children:e("modelsTab.cancel")})]})]})}):null]})}var ya=require("react");var os="dsh-memory-evolve:ui-settings:features",ja="dsh-memory-evolve:ui-settings-features",da={sessionFilter:!1,wideChat:!1,wideBubble:!1,contextWarn:!1,mermaidRender:!1};function Aa(){try{let t=localStorage.getItem(os);if(t!==null){let e=JSON.parse(t);return{sessionFilter:typeof e.sessionFilter=="boolean"?e.sessionFilter:da.sessionFilter,wideChat:typeof e.wideChat=="boolean"?e.wideChat:da.wideChat,wideBubble:typeof e.wideBubble=="boolean"?e.wideBubble:da.wideBubble,contextWarn:typeof e.contextWarn=="boolean"?e.contextWarn:da.contextWarn,mermaidRender:typeof e.mermaidRender=="boolean"?e.mermaidRender:da.mermaidRender}}}catch{}return{...da}}function ss(t){try{localStorage.setItem(os,JSON.stringify(t))}catch{}window.dispatchEvent(new CustomEvent(ja,{detail:{...t}}))}var ct=require("react/jsx-runtime"),ns=null;function va({label:t,hint:e,checked:o,onChange:a}){return(0,ct.jsxs)("label",{className:"me-field",children:[(0,ct.jsxs)("span",{className:"me-field-label",children:[t,(0,ct.jsx)("em",{className:"me-field-hint",children:e})]}),(0,ct.jsx)("input",{type:"checkbox",className:"me-switch",checked:o,onChange:n=>a(n.target.checked)})]})}function is(t){let{t:e}=t,[o,a]=(0,ya.useState)(ns??"mixed"),[n,i]=(0,ya.useState)(()=>Aa());(0,ya.useEffect)(()=>{ns=o},[o]);let d=(w,u)=>{i(g=>{let k={...g,[w]:u};return ss(k),k})},p=()=>(0,ct.jsxs)("section",{className:"me-block",children:[(0,ct.jsx)("div",{className:"me-block-head",children:(0,ct.jsx)("h3",{className:"me-heading",children:e("uiSettingsTab.features.title")})}),(0,ct.jsx)("p",{className:"me-help",children:e("uiSettingsTab.features.help")}),(0,ct.jsx)("div",{className:"me-form",children:(0,ct.jsxs)("div",{className:"me-group",children:[(0,ct.jsx)(va,{label:e("uiSettings.feature.sessionFilter"),hint:e("uiSettings.feature.sessionFilter.hint"),checked:n.sessionFilter,onChange:w=>d("sessionFilter",w)}),(0,ct.jsx)(va,{label:e("uiSettings.feature.wideChat"),hint:e("uiSettings.feature.wideChat.hint"),checked:n.wideChat,onChange:w=>d("wideChat",w)}),(0,ct.jsx)(va,{label:e("uiSettings.feature.wideBubble"),hint:e("uiSettings.feature.wideBubble.hint"),checked:n.wideBubble,onChange:w=>d("wideBubble",w)}),(0,ct.jsx)(va,{label:e("uiSettings.feature.contextWarn"),hint:e("uiSettings.feature.contextWarn.hint"),checked:n.contextWarn,onChange:w=>d("contextWarn",w)}),(0,ct.jsx)(va,{label:e("uiSettings.feature.mermaidRender"),hint:e("uiSettings.feature.mermaidRender.hint"),checked:n.mermaidRender,onChange:w=>d("mermaidRender",w)})]})})]}),C=()=>(0,ct.jsx)(ft,{sections:[{icon:"\u{1F3A8}",title:e("uiSettingsTab.guide.what.title"),body:e("uiSettingsTab.guide.what.body")},{icon:"\u{1F9E9}",title:e("uiSettingsTab.guide.features.title"),body:e("uiSettingsTab.guide.features.body"),items:[e("uiSettingsTab.guide.features.item1"),e("uiSettingsTab.guide.features.item2"),e("uiSettingsTab.guide.features.item3"),e("uiSettingsTab.guide.features.item4"),e("uiSettingsTab.guide.features.item5")]},{icon:"\u{1FA84}",title:e("uiSettingsTab.guide.switch.title"),body:e("uiSettingsTab.guide.switch.body")}]});return(0,ct.jsxs)("div",{className:"me-panel",children:[(0,ct.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,ct.jsx)("button",{type:"button",role:"tab","aria-selected":o==="mixed",className:o==="mixed"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("mixed"),children:e("uiSettingsTab.feature.mixed")}),(0,ct.jsx)("button",{type:"button",role:"tab","aria-selected":o==="guide",className:o==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>a("guide"),children:e("uiSettingsTab.feature.guide")})]}),o==="mixed"&&p(),o==="guide"&&C()]})}var B=require("react"),s=require("react/jsx-runtime"),rs={zh:{tab:"CLI\u8C03\u5EA6",guide:"\u6307\u5357","guide.title":"COI \u8C03\u5EA6\u4F7F\u7528\u6307\u5357","guide.intro":"COI \u8C03\u5EA6 = \u628A\u4EFB\u52A1\u6D3E\u7ED9\u5916\u90E8 AI \u4EE3\u7406\uFF08kimi / codex / grok / hermes \u7B49\uFF09\u7684\u300C\u5916\u63F4\u8C03\u5EA6\u53F0\u300D\uFF1A\u540E\u53F0\u5F02\u6B65\u6267\u884C\u3001\u4E0D\u5361\u5F53\u524D\u4F1A\u8BDD\uFF1B\u5B9E\u65F6\u770B\u8FDB\u5EA6\u548C\u65E5\u5FD7\uFF1B\u4F1A\u8BDD\u5206\u5C42\u7BA1\u7406\u3001\u53EF\u4E00\u952E\u6062\u590D\u7EE7\u7EED\uFF1B\u4EFB\u52A1\u8FD8\u80FD\u8DE8\u4EE3\u7406\u63A5\u529B\uFF1B\u7ED3\u679C\u81EA\u52A8\u7559\u6863\u5E76\u6C89\u6DC0\u5230\u8BB0\u5FC6\u3002\u9ED8\u8BA4\u5173\u95ED\u2014\u2014\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300D\u5F00\u5173\u3002","guide.use.title":"\u600E\u4E48\u53D1\u8D77\u4EFB\u52A1","guide.use.desc":"\u4E09\u79CD\u5165\u53E3\uFF0C\u4EFB\u9009\u5176\u4E00\uFF1A","guide.use.ai":"\u5BF9 AI \u8BF4\uFF1A","guide.use.aiDesc":"\u76F4\u63A5\u8BF4\u300C\u6D3E\u7ED9 kimi \u505A XX / \u8BA9 codex \u4FEE\u590D\u6D4B\u8BD5\u300D\u2014\u2014AI \u7528 de_coi_dispatch \u5DE5\u5177\u53D1\u8D77\uFF0C\u540E\u53F0\u5F02\u6B65\u8DD1\uFF0C\u5B8C\u6210\u540E\u7ED3\u679C\u6458\u8981\u81EA\u52A8\u5199\u8FDB\u9879\u76EE\u65E5\u5FD7\u548C\u4ECA\u65E5\u65E5\u5FD7\u3002","guide.use.slash":"\u7EC8\u7AEF\u547D\u4EE4\uFF1A","guide.use.slashDesc":'/de_coi run "\u4EFB\u52A1" --coi kimi\uFF08\u67E5\u770B\u5168\u90E8\u5B50\u547D\u4EE4\uFF1A/de_coi help\uFF09\u3002',"guide.use.tab":"\u672C Tab\uFF1A","guide.use.tabDesc":"\u300C\u4EFB\u52A1\u300D\u9875\u586B\u9002\u914D\u5668\u3001\u4EFB\u52A1\u5185\u5BB9\u3001\u5C42\u7EA7\uFF0C\u53EF\u9009\u6062\u590D\u4F1A\u8BDD / \u4EFB\u52A1\u6A21\u677F / \u63A5\u529B\u5F15\u7528\uFF1B\u8FD8\u80FD\u52FE\u9009\u300C\u6CE8\u5165 DSH \u8BB0\u5FC6\u300D\u8BA9\u5916\u63F4\u5E26\u4E0A\u4F60\u7684\u9879\u76EE\u7EA6\u5B9A\uFF0C\u6216\u9644\u52A0\u4E0A\u4E0B\u6587\u6587\u672C\u3001\u5E26\u56FE\u5206\u6790\uFF1B\u70B9\u53D1\u8D77\uFF0C\u8FDB\u5EA6\u4E0E\u8F93\u51FA\u5B9E\u65F6\u53EF\u89C1\u3002","guide.scope.title":"\u4F1A\u8BDD\u5206\u5C42\uFF08\u8C01\u80FD\u770B\u5230\uFF09","guide.scope.desc":"\u4EFB\u52A1\u4E0E\u4F1A\u8BDD\u6309\u5C42\u7EA7\u5F52\u5C5E\uFF0C\u51B3\u5B9A\u8C01\u80FD\u770B\u5230\u3001\u80FD\u5426\u6062\u590D\uFF1A","guide.scope.temp":"\u4EC5\u53D1\u8D77\u5B83\u7684\u90A3\u4E2A\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u4E00\u6B21\u6027\u4EFB\u52A1\uFF08\u6D4B\u8BD5\u9002\u914D\u5668\u7528\u8FD9\u4E2A\uFF09\u3002","guide.scope.session":"\u4EC5\u53D1\u8D77\u5B83\u7684\u90A3\u4E2A\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u4F1A\u8BDD\u5185\u53EF\u6062\u590D\u3002","guide.scope.project":"\u8BE5\u9879\u76EE\uFF08\u76F8\u540C\u5DE5\u4F5C\u76EE\u5F55\uFF09\u7684\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u53EF\u6302 git \u5206\u652F\u3002","guide.scope.global":"\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF0C\u957F\u671F\u4FDD\u7559\u3002","guide.skill.title":"\u9002\u914D\u5668\u4E0E\u6280\u80FD","guide.skill.desc":"\u6BCF\u4E2A\u9002\u914D\u5668\u5BF9\u5E94\u4E00\u4E2A\u6280\u80FD\uFF08AI \u7684\u4F7F\u7528\u6307\u5357\uFF0C\u6CE8\u5165\u6A21\u578B\u4E0A\u4E0B\u6587\uFF09\uFF1A\u5185\u7F6E\u56DB\u5BB6\u5F00\u7BB1\u5373\u7528\uFF1B\u81EA\u5B9A\u4E49 CLI \u53EF\u5728\u300C\u9002\u914D\u5668\u300D\u9875\u6DFB\u52A0\uFF08\u542B\u666E\u901A\u547D\u4EE4 plain-cli\uFF09\uFF0C\u586B\u6280\u80FD\u540D\u4E0E\u5185\u5BB9\u540E AI \u5373\u5B66\u4F1A\u8C03\u7528\u5B83\u3002\u6280\u80FD\u53EF\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300DTab \u7981\u7528\uFF0C\u53EF\u5728\u9002\u914D\u5668\u9875\u300C\u6280\u80FD\u300D\u6309\u94AE\u7F16\u8F91\u3002","guide.tips.title":"\u6700\u4F73\u5B9E\u8DF5","guide.tips.1":"\u5206\u5DE5\uFF1A\u524D\u7AEF\u2192kimi\uFF0C\u590D\u6742\u540E\u7AEF\u2192codex\uFF0C\u5FEB\u901F\u4EFB\u52A1\u2192grok\u3002","guide.tips.2":"\u63A5\u529B\u94FE\uFF1Acodex \u5199\u4EE3\u7801 \u2192 kimi review\uFF08\u53D1\u8D77\u65F6\u9009\u300C\u63A5\u529B\u5F15\u7528\u300D\uFF09\u3002","guide.tips.3":"\u91CD\u8981\u4F1A\u8BDD\u8BB0\u5F97\u5907\u6CE8\uFF08\u4F1A\u8BDD\u9875\u70B9\u5907\u6CE8\uFF09\uFF0C\u6062\u590D\u65F6\u6309\u540D\u5B57\u627E\u3002","guide.tips.4":"\u4EFB\u52A1\u7ED3\u675F\u53EF\u63A8\u9001\u901A\u77E5\uFF08\u914D\u7F6E\u9875\u586B\u901A\u77E5\u547D\u4EE4\uFF0C\u5982 hermes send \u63A8\u5FAE\u4FE1\uFF09\u3002","guide.tips.5":"\u6D3E\u6D3B\u65F6\u52FE\u9009\u300C\u6CE8\u5165 DSH \u8BB0\u5FC6\u300D\uFF0C\u5916\u63F4\u4F1A\u5E26\u7740\u4F60\u7684\u5168\u5C40\u89C4\u5219\u3001\u7528\u6237\u504F\u597D\u4E0E\u672C\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u5E72\u6D3B\uFF08\u6309\u5206\u652F\u8FC7\u6EE4\uFF0C\u4E0E DSH \u6CE8\u5165\u540C\u89C4\u5219\uFF09\uFF1B\u6D3E\u6D3B\u4E5F\u80FD\u5E26\u56FE\u2014\u2014\u622A\u56FE\u76F4\u63A5\u53D1\u7ED9\u5916\u63F4\u5206\u6790\uFF08codex / kimi / hermes \u652F\u6301\u8BFB\u56FE\uFF0Czcode \u7EAF\u6587\u672C\u4F1A\u660E\u786E\u62D2\u7EDD\uFF09\u3002","guide.loop":"\u95ED\u73AF\uFF1A\u6D3E\u4EFB\u52A1 \u2192 \u5B9E\u65F6\u770B\u8FDB\u5EA6 \u2192 \u62FF\u7ED3\u679C\u7559\u6863 \u2192 \u6458\u8981\u6C89\u6DC0\u8BB0\u5FC6 \u2192 \u4F1A\u8BDD\u53EF\u6062\u590D\u518D\u63A5\u529B\u3002",tasks:"\u4EFB\u52A1",sessions:"\u4F1A\u8BDD",adapters:"\u9002\u914D\u5668",templates:"\u6A21\u677F",stats:"\u7EDF\u8BA1",config:"\u914D\u7F6E",loading:"\u52A0\u8F7D\u4E2D\u2026",refresh:"\u5237\u65B0",all:"\u5168\u90E8",none:"\uFF08\u65E0\uFF09","launch.title":"\u53D1\u8D77\u4EFB\u52A1","launch.expand":"\u5C55\u5F00","launch.collapse":"\u6536\u8D77","launch.adapter":"\u9002\u914D\u5668","launch.prompt":"\u4EFB\u52A1\u5185\u5BB9","launch.promptPh":"\u4F8B\u5982\uFF1A\u4FEE\u590D tests/store.test.js \u4E2D\u5931\u8D25\u7684\u7528\u4F8B\u5E76\u9A8C\u8BC1","launch.scope":"\u8303\u56F4","launch.session":"\u6062\u590D\u4F1A\u8BDD","launch.sessionNone":"\uFF08\u65B0\u4F1A\u8BDD\uFF09","launch.sessionEmpty":"\uFF08\u5F53\u524D\u9002\u914D\u5668\u6682\u65E0\u4F1A\u8BDD\uFF09","launch.template":"\u6A21\u677F","launch.templateNone":"\uFF08\u4E0D\u7528\u6A21\u677F\uFF09","launch.ref":"\u63A5\u529B\u5F15\u7528","launch.refNone":"\uFF08\u4E0D\u5F15\u7528\uFF09","launch.submit":"\u53D1\u8D77","launch.injectTracks":"\u6CE8\u5165 DSH \u8BB0\u5FC6\uFF08\u53EF\u9009\uFF09","launch.injectTracksHint":"\u81EA\u4E3B\u9009\u62E9\u8981\u5E26\u7ED9 COI \u7684\u8BB0\u5FC6\u8F68\uFF08\u4E0E\u5C42\u7EA7 scope \u65E0\u5173\uFF0C\u4EFB\u4F55\u5C42\u7EA7\u90FD\u53EF\u6CE8\u5165\uFF09\uFF1A\u957F\u671F\u8BB0\u5FC6=\u5168\u5C40\u4E8B\u5B9E\u3001\u7528\u6237\u6863\u6848=\u4F60\u7684\u504F\u597D\u3001\u9879\u76EE\u5173\u952E\u8BB0\u5FC6=\u672C\u5DE5\u4F5C\u533A\u9879\u76EE\u6309\u5206\u652F\u8FC7\u6EE4\uFF08\u4E0D\u542B AGENTS.md\uFF09\u3002\u5185\u5BB9\u4F1A\u53D1\u7ED9\u5916\u90E8 COI \u670D\u52A1\uFF0C\u6CE8\u610F\u9690\u79C1\uFF1B\u7559\u7A7A=\u4E0D\u6CE8\u5165","launch.ctxText":"\u9644\u52A0\u4E0A\u4E0B\u6587\u6587\u672C\uFF08\u53EF\u9009\uFF09","launch.ctxTextPh":"\u81EA\u5DF1\u62FC\u63A5\u7684\u4E0A\u4E0B\u6587\uFF1A\u5982\u9879\u76EE\u8FDB\u5C55\u3001\u76F8\u5173\u65E5\u5FD7\u8981\u70B9\u2026\uFF08\u8D85 32KB \u81EA\u52A8\u5199\u6587\u4EF6\u5E76\u628A\u8DEF\u5F84\u544A\u8BC9 COI\uFF09","launch.needPrompt":"\u4EFB\u52A1\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A","launch.ok":"\u5DF2\u53D1\u8D77","tasks.empty":"\u6682\u65E0\u4EFB\u52A1","tasks.selectHint":"\u70B9\u51FB\u5DE6\u4FA7\u4EFB\u52A1\u67E5\u770B\u8BE6\u60C5\u4E0E\u8F93\u51FA","tasks.kill":"\u7EC8\u6B62","tasks.confirmKill":"\u786E\u8BA4\u7EC8\u6B62\u8BE5\u4EFB\u52A1\uFF1F","tasks.killed":"\u5DF2\u7EC8\u6B62","tasks.retry":"\u91CD\u8BD5","tasks.retried":"\u5DF2\u91CD\u65B0\u53D1\u8D77","tasks.copy":"\u590D\u5236","tasks.copied":"\u5DF2\u590D\u5236","tasks.copyFail":"\u590D\u5236\u5931\u8D25","tasks.log":"\u8F93\u51FA\u65E5\u5FD7","tasks.logEmpty":"\uFF08\u6682\u65E0\u8F93\u51FA\uFF09","tasks.logFull":"\u653E\u5927","tasks.prompt":"\u4EFB\u52A1\u5185\u5BB9","tasks.searchPh":"\u641C\u7D22\u4EFB\u52A1\uFF08\u5185\u5BB9/\u4EFB\u52A1 id\uFF09\u2026","tasks.pager.prev":"\u4E0A\u4E00\u9875","tasks.pager.next":"\u4E0B\u4E00\u9875","tasks.pager.total":"\u5171","tasks.delete":"\u5220\u9664","tasks.confirmDelete":`\u5220\u9664\u8BE5\u4EFB\u52A1\uFF1F\u5C06\u79FB\u9664\u4EFB\u52A1\u8BB0\u5F55\u4E0E\u8F93\u51FA\u7559\u6863\uFF08\u5DF2\u6C89\u6DC0\u5230\u8BB0\u5FC6\u7684\u6458\u8981\u4E0D\u53D7\u5F71\u54CD\uFF1B\u88AB\u63A5\u529B\u5F15\u7528\u7684\u4EFB\u52A1\u5220\u9664\u540E\uFF0C\u65B0\u63A5\u529B\u4F1A\u63D0\u793A\u4EFB\u52A1\u4E0D\u5B58\u5728\uFF09\u3002

{id}`,"tasks.status":"\u72B6\u6001","tasks.adapter":"\u9002\u914D\u5668","tasks.scope":"\u8303\u56F4","tasks.branch":"\u5206\u652F","tasks.sessionId":"\u4F1A\u8BDD ID","tasks.created":"\u521B\u5EFA\u65F6\u95F4","tasks.duration":"\u8017\u65F6","tasks.lastOutput":"\u6700\u540E\u8F93\u51FA","tasks.exitCode":"\u9000\u51FA\u7801","tasks.error":"\u9519\u8BEF","sessions.filterScope":"\u8303\u56F4\u8FC7\u6EE4","sessions.searchPh":"\u641C\u7D22\u2026","sessions.note":"\u5907\u6CE8","sessions.save":"\u4FDD\u5B58","sessions.delete":"\u5220\u9664","sessions.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u4F1A\u8BDD\u8BB0\u5F55\uFF1F","sessions.empty":"\u6682\u65E0\u4F1A\u8BDD","sessions.locked":"\u6709\u4EFB\u52A1\u5360\u7528\u4E2D","sessions.lastSeen":"\u6700\u8FD1\u6D3B\u8DC3","adapters.guide":"\u6307\u5357","adapters.test":"\u6D4B\u8BD5","adapters.testOk":"\u6D4B\u8BD5\u4EFB\u52A1\u5DF2\u53D1\u8D77","adapters.skill":"\u6280\u80FD","adapters.skillHint":"\u8BE5\u9002\u914D\u5668\u7684\u4F7F\u7528\u6307\u5357\u6240\u5728\u6280\u80FD\uFF1A\u5B83\u662F\u540C\u6B65\u6CE8\u5165\u7684\u771F\u5B9E\u6709\u6548\u6280\u80FD\uFF08\u6765\u6E90=\u7528\u6237\u6280\u80FD\u5E93\uFF0C\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\uFF09\uFF0CAI \u6BCF\u6B21\u4F1A\u8BDD\u90FD\u80FD\u770B\u5230\uFF1B\u7981\u7528\u8BF7\u5230\u300C\u6280\u80FD\u7BA1\u7406\u300DTab","adapters.skillBtn":"\u6280\u80FD","adapters.editSkillTitle":"\u7F16\u8F91\u6280\u80FD\uFF08AI \u4F7F\u7528\u6307\u5357\uFF09","adapters.editSkillHint":"\u6280\u80FD = AI \u7684\u4F7F\u7528\u6307\u5357\uFF1A\u672C\u6280\u80FD\u5DF2\u540C\u6B65\u6CE8\u5165\u7528\u6237\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\uFF0C\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u91CC\u90FD\u80FD\u770B\u5230\u5B83\uFF0CAI \u636E\u6B64\u6B63\u786E\u8C03\u7528\u672C\u9002\u914D\u5668\u3002\u5728\u8FD9\u91CC\u7F16\u8F91\u5373\u66F4\u65B0 SKILL.md\uFF1B\u63D2\u4EF6\u91CD\u542F\u65F6\u5185\u7F6E\u7248\u672C\u672A\u53D8\u4E0D\u4F1A\u8986\u76D6\u4F60\u7684\u7F16\u8F91\uFF1B\u7981\u7528\u5165\u53E3\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300DTab\u3002","adapters.saveSkill":"\u4FDD\u5B58","adapters.skillSaved":"\u6280\u80FD\u5DF2\u4FDD\u5B58","adapters.skillName":"\u6280\u80FD\u540D\uFF08\u53EF\u9009\uFF09","adapters.skillNamePh":"\u5982 my-cli-skill\uFF08\u8BE5\u6280\u80FD\u7684 SKILL.md \u5C06\u6CE8\u5165 AI \u4E0A\u4E0B\u6587\uFF0CAI \u636E\u6B64\u5B66\u4F1A\u8C03\u7528\u6B64 CLI\uFF09","adapters.useCase":"\u9002\u7528\u573A\u666F","adapters.useCasePh":"\u544A\u8BC9 AI \u4EC0\u4E48\u4EFB\u52A1\u9002\u5408\u7528\u8FD9\u4E2A CLI\uFF0C\u5982\uFF1A\u590D\u6742\u540E\u7AEF\u903B\u8F91/\u6D4B\u8BD5\u4FEE\u590D\u2026","adapters.useCaseEmpty":"\uFF08\u672A\u586B\u5199\u9002\u7528\u573A\u666F\uFF09","adapters.editUseCase":"\u7F16\u8F91\u573A\u666F","adapters.saveUseCase":"\u4FDD\u5B58","adapters.skillContent":"\u6280\u80FD\u5185\u5BB9\uFF08SKILL.md\uFF09","adapters.skillContentPh":`# \u6280\u80FD\u6B63\u6587

\u544A\u8BC9 AI \u5982\u4F55\u8C03\u7528\u8FD9\u4E2A CLI\uFF1A\u547D\u4EE4\u683C\u5F0F\u3001\u53C2\u6570\u3001\u4F1A\u8BDD\u6062\u590D\u65B9\u5F0F\u3001\u6CE8\u610F\u4E8B\u9879\u2026\uFF08frontmatter \u7684 name/description \u4F1A\u81EA\u52A8\u8865\u5168\uFF09`,"adapters.skillContentHint":"\u7559\u7A7A = \u53EA\u5173\u8054\u6280\u80FD\u540D\uFF08\u6280\u80FD\u6587\u4EF6\u9700\u53E6\u5916\u521B\u5EFA\uFF0C\u53EF\u6DFB\u52A0\u540E\u5230\u300C\u6280\u80FD\u300D\u6309\u94AE\u91CC\u7F16\u8F91\uFF09\uFF1B\u586B\u5199 = \u6280\u80FD\u4E0D\u5B58\u5728\u65F6\u81EA\u52A8\u521B\u5EFA",cancel:"\u53D6\u6D88",saving:"\u4FDD\u5B58\u4E2D\u2026","adapters.addTitle":"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u9002\u914D\u5668","adapters.name":"\u540D\u79F0","adapters.type":"\u7C7B\u578B","adapters.binary":"\u53EF\u6267\u884C\u6587\u4EF6","adapters.args":"\u53C2\u6570","adapters.argsPh":"\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1A-p, {task}","adapters.add":"\u6DFB\u52A0","adapters.delete":"\u5220\u9664","adapters.enable":"\u542F\u7528","adapters.disable":"\u7981\u7528","adapters.disabledHint":"\u5DF2\u7981\u7528\uFF1AAI \u8C03\u5EA6\u6B64\u9002\u914D\u5668\u4F1A\u88AB\u62D2\u7EDD\u5E76\u63D0\u793A\u6362\u7528\u5176\u4ED6\u53EF\u7528\u9879","adapters.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u81EA\u5B9A\u4E49\u9002\u914D\u5668\uFF1F","adapters.builtin":"\u5185\u7F6E","adapters.custom":"\u81EA\u5B9A\u4E49","adapters.resumeSection":"\u4F1A\u8BDD\u6062\u590D\u914D\u7F6E\uFF08ai-cli \u5FC5\u586B\uFF09","adapters.resumeSectionHint":"ai-cli \u7C7B\u578B\u5FC5\u987B\u6709\u6307\u5B9A\u4F1A\u8BDD\u6062\u590D\u80FD\u529B\uFF1B\u6CA1\u6709\u6062\u590D\u80FD\u529B\u7684 CLI \u8BF7\u9009 plain-cli \u7C7B\u578B","adapters.resumeKind":"\u6062\u590D\u65B9\u5F0F","adapters.resumeKindFlag":"flag \u6A21\u5F0F\uFF08\u6062\u590D\u53C2\u6570\u63D2\u5728\u57FA\u7840\u53C2\u6570\u524D\uFF09","adapters.resumeKindArgs":"args \u6A21\u5F0F\uFF08\u5B8C\u6574\u6062\u590D\u547D\u4EE4\uFF09","adapters.resumeFlag":"\u6062\u590D flag","adapters.resumeFlagPh":"\u5982 -S / -r / --resume","adapters.resumeArg":"\u4F1A\u8BDD\u53C2\u6570","adapters.resumeArgPh":"\u542B {sessionId} \u5360\u4F4D\u7B26\uFF0C\u5982 {sessionId}","adapters.resumeArgs":"\u6062\u590D\u547D\u4EE4\u53C2\u6570","adapters.resumeArgsPh":"\u9017\u53F7\u5206\u9694\uFF0C\u542B {sessionId}\uFF08\u53CA\u53EF\u9009 {task}\uFF09\uFF0C\u5982 exec, resume, {sessionId}, {task}","adapters.continueFlag":"\u6700\u8FD1\u4F1A\u8BDD\u6062\u590D flag\uFF08\u53EF\u9009\uFF09","adapters.continueFlagPh":'\u5982 -c\uFF1B\u7559\u7A7A = \u4E0D\u652F\u6301"\u6700\u8FD1\u4F1A\u8BDD"\u6062\u590D',"adapters.extractSection":"\u4F1A\u8BDD ID \u81EA\u52A8\u63D0\u53D6\uFF08\u53EF\u9009\uFF09","adapters.extractSource":"\u8F93\u51FA\u6D41","adapters.extractRegex":"\u63D0\u53D6\u6B63\u5219","adapters.extractRegexPh":"\u6355\u83B7\u7EC4 1 \u4E3A\u4F1A\u8BDD ID\uFF0C\u5982 To resume this session: kimi -r (session_\\S+)","adapters.resumeMissing":"ai-cli \u7C7B\u578B\u5FC5\u987B\u586B\u5199\u4F1A\u8BDD\u6062\u590D\u914D\u7F6E\uFF08resume\uFF09","templates.addTitle":"\u6DFB\u52A0\u6A21\u677F","templates.name":"\u540D\u79F0","templates.prompt":"\u4EFB\u52A1\u5185\u5BB9","templates.adapterOpt":"\u9002\u914D\u5668\uFF08\u53EF\u9009\uFF09","templates.idOpt":"ID\uFF08\u53EF\u9009\uFF0C\u4E0D\u586B\u81EA\u52A8\uFF09","templates.add":"\u6DFB\u52A0","templates.delete":"\u5220\u9664","templates.confirmDelete":"\u786E\u8BA4\u5220\u9664\u8BE5\u6A21\u677F\uFF1F","templates.builtinKeep":"\u5185\u7F6E\u6A21\u677F\u4E0D\u53EF\u5220\u9664","templates.empty":"\u6682\u65E0\u6A21\u677F","stats.total":"\u603B\u4EFB\u52A1\u6570","stats.count":"\u4EFB\u52A1\u6570","stats.hours":"\u7D2F\u8BA1\u65F6\u957F","stats.byStatus":"\u72B6\u6001\u5206\u5E03","stats.empty":"\u6682\u65E0\u7EDF\u8BA1\u6570\u636E","config.notify":"\u901A\u77E5\u547D\u4EE4","config.notifyHint":"\u4EFB\u52A1\u7ED3\u675F\u65F6\u6267\u884C\uFF1B\u5360\u4F4D\u7B26\uFF1A{taskId} {coi} {status} {summary}","config.retention":"\u4EFB\u52A1\u4FDD\u7559\u5929\u6570","config.timeout":"\u4EFB\u52A1\u8D85\u65F6","config.timeoutHours":"\u5C0F\u65F6","config.timeoutMinutes":"\u5206\u949F","config.timeoutHint":"\u8D85\u65F6\u4EC5\u4F5C\u515C\u5E95\u9632\u7EBF\uFF08AI \u4EFB\u52A1\u53EF\u80FD\u6570\u5C0F\u65F6\u65E0\u8F93\u51FA\u5C5E\u6B63\u5E38\uFF09\uFF1B\u7559\u7A7A = \u4E0D\u4FEE\u6539","config.timeoutBad":"\u8D85\u65F6\u683C\u5F0F\u4E0D\u6B63\u786E","config.save":"\u4FDD\u5B58","config.saved":"\u5DF2\u4FDD\u5B58","scope.temporary":"\u4E34\u65F6","scope.session":"\u4F1A\u8BDD","scope.project":"\u9879\u76EE","scope.global":"\u5168\u5C40"},en:{tab:"CLI Dispatch",guide:"Guide","guide.title":"COI Dispatch Guide","guide.intro":'COI Dispatch = the "external helper console" for handing tasks to external AI agents (kimi / codex / grok / hermes\u2026): tasks run in the background without blocking your session; progress and logs are live; sessions are tiered and resumable in one click; tasks can chain across agents; results are archived and distilled into memory. Off by default \u2014 enable "COI dispatch" under Config in the Memory Evolve Settings tab.',"guide.use.title":"How to launch a task","guide.use.desc":"Three entries, pick any:","guide.use.ai":"Tell the AI:","guide.use.aiDesc":'Say "dispatch XX to kimi / have codex fix the tests" \u2014 the AI launches it via de_coi_dispatch, it runs in the background, and on completion the summary is automatically written into the project log and daily log.',"guide.use.slash":"Terminal command:","guide.use.slashDesc":'/de_coi run "task" --coi kimi (see all subcommands: /de_coi help).',"guide.use.tab":"This tab:","guide.use.tabDesc":'In the Tasks page fill in the adapter, prompt and scope; optionally resume a session / use a template / chain a reference task; you can also tick "inject DSH memory" so the helper carries your project conventions, attach context text or images; hit launch and watch progress and output live.',"guide.scope.title":"Session tiers (who can see)","guide.scope.desc":"Tasks and sessions belong to a tier, which decides who can see and resume them:","guide.scope.temp":"Visible only to the launching session; one-off (use for testing an adapter).","guide.scope.session":"Visible only to the launching session; resumable within it.","guide.scope.project":"Visible to all sessions of the project (same working directory); can carry a git branch.","guide.scope.global":"Visible to every session; kept long-term.","guide.skill.title":"Adapters & skills","guide.skill.desc":"Every adapter maps to a skill (the AI usage guide, injected into the model context): the four built-ins work out of the box; custom CLIs can be added in the Adapters page (plain-cli included) \u2014 fill the skill name and content and the AI learns to drive it. Skills can be disabled in the Skill Manager tab and edited via the Skill button on the adapter page.","guide.tips.title":"Best practices","guide.tips.1":"Division of labor: frontend\u2192kimi, complex backend\u2192codex, quick tasks\u2192grok.","guide.tips.2":'Chaining: codex writes code \u2192 kimi reviews (pick "reference task" when launching).',"guide.tips.3":"Note important sessions (the note button in the sessions page) so you can find them by name when resuming.","guide.tips.4":"Tasks can push a notification on completion (set the notify command in the config page, e.g. hermes send to WeChat).","guide.tips.5":'Tick "inject DSH memory" when dispatching and the helper works with your global rules, profile and this project key facts (branch-filtered, same rules as DSH injection); tasks can also carry images \u2014 send a screenshot for analysis (codex / kimi / hermes read images; zcode is text-only and will refuse clearly).',"guide.loop":"The loop: dispatch \u2192 watch progress live \u2192 archive the result \u2192 distill the summary into memory \u2192 resume and chain the session.",tasks:"Tasks",sessions:"Sessions",adapters:"Adapters",templates:"Templates",stats:"Stats",config:"Config",loading:"Loading\u2026",refresh:"Refresh",all:"All",none:"(none)","launch.title":"Launch task","launch.expand":"Expand","launch.collapse":"Collapse","launch.adapter":"Adapter","launch.prompt":"Prompt","launch.promptPh":"e.g. fix the failing cases in tests/store.test.js and verify","launch.scope":"Scope","launch.session":"Resume session","launch.sessionNone":"(new session)","launch.sessionEmpty":"(no sessions for this adapter)","launch.template":"Template","launch.templateNone":"(no template)","launch.ref":"Relay ref","launch.refNone":"(none)","launch.submit":"Launch","launch.injectTracks":"Inject DSH memory (optional)","launch.injectTracksHint":"Pick which memory tracks to hand to the COI (independent of scope \u2014 any tier can inject): long-term memory=global facts, user profile=your preferences, project key=this workspace's key facts (branch-filtered; no AGENTS.md). Content is sent to external COI services \u2014 mind privacy; empty = no injection","launch.ctxText":"Extra context text (optional)","launch.ctxTextPh":"Your own context: project progress, log highlights\u2026 (over 32KB it is written to a file and the path is given to the COI)","launch.needPrompt":"Prompt must not be empty","launch.ok":"Launched","tasks.empty":"No tasks yet","tasks.selectHint":"Click a task on the left to view details and output","tasks.kill":"Kill","tasks.confirmKill":"Kill this task?","tasks.killed":"Killed","tasks.retry":"Retry","tasks.retried":"Re-launched","tasks.copy":"Copy","tasks.copied":"Copied","tasks.copyFail":"Copy failed","tasks.log":"Output log","tasks.logEmpty":"(no output yet)","tasks.logFull":"Expand","tasks.prompt":"Task prompt","tasks.searchPh":"Search tasks (content / task id)\u2026","tasks.pager.prev":"Prev","tasks.pager.next":"Next","tasks.pager.total":"of","tasks.delete":"Delete","tasks.confirmDelete":`Delete this task? Its record and output archive will be removed (memory summaries are unaffected; relay references to it will fail afterwards).

{id}`,"tasks.status":"Status","tasks.adapter":"Adapter","tasks.scope":"Scope","tasks.branch":"Branch","tasks.sessionId":"Session ID","tasks.created":"Created","tasks.duration":"Duration","tasks.lastOutput":"Last output","tasks.exitCode":"Exit code","tasks.error":"Error","sessions.filterScope":"Scope filter","sessions.searchPh":"Search\u2026","sessions.note":"Note","sessions.save":"Save","sessions.delete":"Delete","sessions.confirmDelete":"Delete this session record?","sessions.empty":"No sessions","sessions.locked":"Occupied by a task","sessions.lastSeen":"Last seen","adapters.guide":"Guide","adapters.test":"Test","adapters.testOk":"Test task launched","adapters.skill":"Skill","adapters.skillHint":"The skill holding this adapter's usage guide: a real injected skill (source = user skill library, injected into every session's system prompt); disable it via the Skill Manager tab","adapters.skillBtn":"Skill","adapters.editSkillTitle":"Edit skill (AI usage guide)","adapters.editSkillHint":"The skill IS the AI usage guide: it is synced into the user skill library (~/.agents/skills) and injected into every session's system prompt, so the AI knows how to drive this adapter. Editing here updates that SKILL.md; plugin restarts will not overwrite your edits while the built-in version is unchanged; disable it via the Skill Manager tab.","adapters.saveSkill":"Save","adapters.skillSaved":"Skill saved","adapters.skillName":"Skill name (optional)","adapters.skillNamePh":"e.g. my-cli-skill (that SKILL.md will be injected into the AI context so the AI learns how to use this CLI)","adapters.useCase":"Use case","adapters.useCasePh":"Tell the AI which tasks suit this CLI, e.g. complex backend logic / test fixes\u2026","adapters.useCaseEmpty":"(no use case set)","adapters.editUseCase":"Edit","adapters.saveUseCase":"Save","adapters.skillContent":"Skill content (SKILL.md)","adapters.skillContentPh":`# Skill body

Tell the AI how to drive this CLI: command format, args, session resume, caveats\u2026 (frontmatter name/description are auto-completed)`,"adapters.skillContentHint":"Leave empty = link the skill name only (create the file later via the Skill button); filled = the skill is auto-created when missing",cancel:"Cancel",saving:"Saving\u2026","adapters.addTitle":"Add custom adapter","adapters.name":"Name","adapters.type":"Type","adapters.binary":"Binary","adapters.args":"Args","adapters.argsPh":"comma separated, e.g.: -p, {task}","adapters.add":"Add","adapters.delete":"Delete","adapters.enable":"Enable","adapters.disable":"Disable","adapters.disabledHint":"Disabled: dispatching to this adapter is rejected with a hint to use another one","adapters.confirmDelete":"Delete this custom adapter?","adapters.builtin":"builtin","adapters.custom":"custom","adapters.resumeSection":"Session resume (required for ai-cli)","adapters.resumeSectionHint":"ai-cli must support resuming a named session; CLIs without resume support should use plain-cli","adapters.resumeKind":"Resume mode","adapters.resumeKindFlag":"flag mode (resume flag + arg prepended to base args)","adapters.resumeKindArgs":"args mode (full resume command)","adapters.resumeFlag":"Resume flag","adapters.resumeFlagPh":"e.g. -S / -r / --resume","adapters.resumeArg":"Session arg","adapters.resumeArgPh":"with {sessionId} placeholder, e.g. {sessionId}","adapters.resumeArgs":"Resume command args","adapters.resumeArgsPh":"comma separated, with {sessionId} (and optional {task}), e.g. exec, resume, {sessionId}, {task}","adapters.continueFlag":"Continue-last flag (optional)","adapters.continueFlagPh":"e.g. -c; leave empty = no \u201Ccontinue last session\u201D support","adapters.extractSection":"Auto session-ID extraction (optional)","adapters.extractSource":"Output stream","adapters.extractRegex":"Extract regex","adapters.extractRegexPh":"capture group 1 = session ID, e.g. To resume this session: kimi -r (session_\\S+)","adapters.resumeMissing":"ai-cli requires a session resume config","templates.addTitle":"Add template","templates.name":"Name","templates.prompt":"Prompt","templates.adapterOpt":"Adapter (optional)","templates.idOpt":"ID (optional, auto if empty)","templates.add":"Add","templates.delete":"Delete","templates.confirmDelete":"Delete this template?","templates.builtinKeep":"Builtin templates cannot be deleted","templates.empty":"No templates","stats.total":"Total tasks","stats.count":"Tasks","stats.hours":"Total time","stats.byStatus":"By status","stats.empty":"No stats yet","config.notify":"Notify command","config.notifyHint":"Runs when a task finishes; placeholders: {taskId} {coi} {status} {summary}","config.retention":"Retention days","config.timeout":"Task timeout","config.timeoutHours":"hours","config.timeoutMinutes":"minutes","config.timeoutHint":"Timeout is a safety net only (AI agents may stay quiet for hours); leave empty to keep current","config.timeoutBad":"Bad timeout format","config.save":"Save","config.saved":"Saved","scope.temporary":"temporary","scope.session":"session","scope.project":"project","scope.global":"global"}},Pt=typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"en":"zh";function b(t){return rs[Pt][t]??rs.en[t]??t}var Pi="/memory-evolve/api/coi";async function ut(t,e){let o=await fetch(`${Pi}${t}`,{headers:{"content-type":"application/json"},...e}),a=await o.json().catch(()=>({}));if(!o.ok)throw new Error(a.message??a.error??`HTTP ${o.status}`);return a}function jt(t,e){return ut(t,{method:"POST",body:JSON.stringify(e??{})})}function Ma(t){return ut(t,{method:"DELETE"})}function rt(t){let e=t instanceof Error?t.message:String(t);return e!==void 0&&e.trim()!==""?e:"\u64CD\u4F5C\u5931\u8D25\uFF08\u65E0\u9519\u8BEF\u8BE6\u60C5\uFF09"}function Xt(t,e){return t!==void 0&&t.trim()!==""?t:e}function wa(t){return t<10?`0${t}`:String(t)}function Qa(t){if(t==null)return"\u2014";let e=new Date(t);return`${e.getFullYear()}-${wa(e.getMonth()+1)}-${wa(e.getDate())} ${wa(e.getHours())}:${wa(e.getMinutes())}:${wa(e.getSeconds())}`}function ji(t){if(t==null)return"\u2014";let e=Math.max(0,Date.now()-t);if(e<5e3)return Pt==="zh"?"\u521A\u521A":"just now";let o=Math.floor(e/1e3);if(o<60)return Pt==="zh"?`${o} \u79D2\u524D`:`${o}s ago`;let a=Math.floor(o/60);if(a<60)return Pt==="zh"?`${a} \u5206\u949F\u524D`:`${a}m ago`;let n=Math.floor(a/60);return Pt==="zh"?`${n} \u5C0F\u65F6\u524D`:`${n}h ago`}function Ai(t){if(t==null||t<0)return"\u2014";if(t<1e3)return`${Math.round(t)}ms`;let e=Math.floor(t/1e3);if(e<60)return`${e}s`;let o=Math.floor(e/60);return o<60?`${o}m ${e%60}s`:`${Math.floor(o/60)}h ${o%60}m`}function Ra(t,e=40){let o=t.replace(/\s+/g," ").trim();return o.length>e?`${o.slice(0,e)}\u2026`:o}var Ri={queued:{icon:"\u23F3",label:Pt==="zh"?"\u6392\u961F\u4E2D":"Queued",cls:"coi-status-queued"},running:{icon:"\u23F3",label:Pt==="zh"?"\u8FD0\u884C\u4E2D":"Running",cls:"coi-status-running"},completed:{icon:"\u2705",label:Pt==="zh"?"\u5DF2\u5B8C\u6210":"Completed",cls:"coi-status-completed"},failed:{icon:"\u274C",label:Pt==="zh"?"\u5931\u8D25":"Failed",cls:"coi-status-failed"},killed:{icon:"\u{1F6D1}",label:Pt==="zh"?"\u5DF2\u7EC8\u6B62":"Killed",cls:"coi-status-killed"},interrupted:{icon:"\u26A0\uFE0F",label:Pt==="zh"?"\u4E2D\u65AD":"Interrupted",cls:"coi-status-interrupted"}};function xa(t){return Ri[t]??{icon:"\u2754",label:t,cls:""}}var ds=["temporary","session","project","global"],Mi=new Set(["kimi","codex","grok","hermes"]),ls=new Set(["review-code","fix-tests","summarize-logs","architecture-analysis"]),Di=3e3,Li=2e3,ka=20;function Ta(t){return t.notice===null?null:(0,s.jsx)("div",{className:`coi-notice coi-notice-${t.notice.kind}`,children:t.notice.text})}function ca(t){return t.error===null?null:(0,s.jsx)("div",{className:"coi-error",children:t.error})}function cs(t){let e=t.sessionId,[o,a]=(0,B.useState)("tasks");return(0,s.jsxs)("div",{className:"coi-root",children:[(0,s.jsx)("div",{className:"coi-tabs",role:"tablist",children:[{id:"guide",key:"guide"},{id:"tasks",key:"tasks"},{id:"sessions",key:"sessions"},{id:"adapters",key:"adapters"},{id:"templates",key:"templates"},{id:"stats",key:"stats"},{id:"config",key:"config"}].map(i=>(0,s.jsx)("button",{type:"button",role:"tab","aria-selected":o===i.id,className:`coi-tab${o===i.id?" coi-tab-active":""}`,onClick:()=>a(i.id),children:b(i.key)},i.id))}),(0,s.jsxs)("div",{className:"coi-body",children:[o==="guide"&&(0,s.jsx)(Oi,{}),o==="tasks"&&(0,s.jsx)(zi,{dsSessionId:e}),o==="sessions"&&(0,s.jsx)(Fi,{dsSessionId:e}),o==="adapters"&&(0,s.jsx)($i,{}),o==="templates"&&(0,s.jsx)(Hi,{}),o==="stats"&&(0,s.jsx)(Bi,{}),o==="config"&&(0,s.jsx)(qi,{})]})]})}function Oi(){return(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsx)("div",{className:"coi-card-title",children:b("guide.title")}),(0,s.jsx)("p",{className:"coi-muted",children:b("guide.intro")})]}),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("div",{className:"coi-card-title",children:["\u{1F680} ",b("guide.use.title")]}),(0,s.jsx)("p",{className:"coi-muted",children:b("guide.use.desc")}),(0,s.jsxs)("ul",{className:"coi-guide-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("guide.use.ai")}),b("guide.use.aiDesc")]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("guide.use.slash")}),b("guide.use.slashDesc")]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("guide.use.tab")}),b("guide.use.tabDesc")]})]})]}),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("div",{className:"coi-card-title",children:["\u{1F5C2}\uFE0F ",b("guide.scope.title")]}),(0,s.jsx)("p",{className:"coi-muted",children:b("guide.scope.desc")}),(0,s.jsxs)("ul",{className:"coi-guide-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("scope.temporary")}),"\uFF1A",b("guide.scope.temp")]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("scope.session")}),"\uFF1A",b("guide.scope.session")]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("scope.project")}),"\uFF1A",b("guide.scope.project")]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:b("scope.global")}),"\uFF1A",b("guide.scope.global")]})]})]}),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("div",{className:"coi-card-title",children:["\u{1F9ED} ",b("guide.skill.title")]}),(0,s.jsx)("p",{className:"coi-muted",children:b("guide.skill.desc")})]}),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("div",{className:"coi-card-title",children:["\u{1F4A1} ",b("guide.tips.title")]}),(0,s.jsxs)("ul",{className:"coi-guide-list",children:[(0,s.jsx)("li",{children:b("guide.tips.1")}),(0,s.jsx)("li",{children:b("guide.tips.2")}),(0,s.jsx)("li",{children:b("guide.tips.3")}),(0,s.jsx)("li",{children:b("guide.tips.4")})]})]}),(0,s.jsx)("p",{className:"coi-muted coi-pad",children:b("guide.loop")})]})}function zi({dsSessionId:t}){let e=(t??"")!==""?`&sessionId=${encodeURIComponent(String(t))}`:"",[o,a]=(0,B.useState)([]),[n,i]=(0,B.useState)([]),[d,p]=(0,B.useState)([]),[C,w]=(0,B.useState)([]),[u,g]=(0,B.useState)(null),[k,j]=(0,B.useState)(1),[z,A]=(0,B.useState)(0),[U,T]=(0,B.useState)(null),[G,v]=(0,B.useState)(null),[D,y]=(0,B.useState)("kimi"),[O,Z]=(0,B.useState)(""),[I,m]=(0,B.useState)("session"),[l,x]=(0,B.useState)(""),[V,P]=(0,B.useState)(""),[ne,oe]=(0,B.useState)(""),[be,Me]=(0,B.useState)(!1),[Te,Ce]=(0,B.useState)([]),[X,Ve]=(0,B.useState)(""),[Ne,fe]=(0,B.useState)(!1),[ce,ze]=(0,B.useState)(null),[me,Ze]=(0,B.useState)(null),[ot,Fe]=(0,B.useState)(""),[Ee,ke]=(0,B.useState)(null),[ye,ve]=(0,B.useState)(!1),[M,F]=(0,B.useState)(!1),[Se,xe]=(0,B.useState)(!1),[je,et]=(0,B.useState)(""),He=(0,B.useRef)(null),Je=(0,B.useRef)(null),N=(0,B.useRef)(null);(0,B.useEffect)(()=>{N.current=ce},[ce]);let W=(0,B.useCallback)(async()=>{try{let S=je.trim(),re=await ut(`/tasks?page=${k}&pageSize=${ka}${e}${S!==""?`&q=${encodeURIComponent(S)}`:""}`);if(re.tasks.length===0&&re.total>0&&k>1){j(Math.max(1,Math.ceil(re.total/ka)));return}g(re.tasks),A(re.total),T(null)}catch(S){T(rt(S))}},[je,k]),ue=(0,B.useCallback)(async S=>{try{let re=await ut(`/tasks/${encodeURIComponent(S)}`);Ze(re.task)}catch(re){v({kind:"error",text:rt(re)})}},[]),Ue=async S=>{if(window.confirm(b("tasks.confirmDelete").replace("{id}",S)))try{let re=await Ma(`/tasks/${encodeURIComponent(S)}`);if(re.ok!==!0){v({kind:"error",text:Xt(re.message,"\u5220\u9664\u5931\u8D25")});return}ze(null),Ze(null),W(),v({kind:"ok",text:re.message??"\u5DF2\u5220\u9664"})}catch(re){v({kind:"error",text:rt(re)})}},L=(0,B.useCallback)(async S=>{try{let re=await ut(`/tasks/${encodeURIComponent(S)}/log?tail=8000`);Fe(re.text),ke(null)}catch(re){ke(rt(re))}},[]);(0,B.useEffect)(()=>{W();let S=setInterval(()=>{W();let re=N.current;re!==null&&ue(re)},Di);return()=>clearInterval(S)},[W,ue]),(0,B.useEffect)(()=>{ut("/adapters").then(S=>{a(S.adapters),y(re=>S.adapters.some(at=>at.id===re)?re:S.adapters[0]?.id??re)}).catch(()=>{}),ut("/templates").then(S=>i(S.templates)).catch(()=>{}),ut(`/sessions?${e.slice(1)}`).then(S=>p(S.sessions)).catch(()=>{}),ut(`/tasks?status=completed&limit=50${e}`).then(S=>w(S.tasks)).catch(()=>{})},[]),(0,B.useEffect)(()=>{if(ce===null){Ze(null);return}Ze(null),Fe(""),ke(null),ue(ce),L(ce)},[ce,ue,L]);let we=me!==null&&(me.status==="running"||me.status==="queued");(0,B.useEffect)(()=>{if(ce===null||!we)return;let S=setInterval(()=>{L(ce),ue(ce)},Li);return()=>clearInterval(S)},[ce,we,L,ue]),(0,B.useEffect)(()=>{let S=He.current;S!==null&&(S.scrollTop=S.scrollHeight);let re=Je.current;re!==null&&(re.scrollTop=re.scrollHeight)},[ot]);let nt=S=>{P(S);let re=n.find(at=>at.id===S);re!==void 0&&(Z(re.prompt),re.adapterId!==void 0&&y(re.adapterId),re.scope!==void 0&&m(re.scope))},Be=async()=>{if(O.trim()===""){v({kind:"error",text:b("launch.needPrompt")});return}Me(!0);try{let S={adapterId:D,prompt:O,scope:I};I!=="temporary"&&l!==""&&(S.sessionId=l),V!==""&&(S.templateId=V),ne!==""&&(S.refTaskId=ne);let re=await jt("/tasks",{...S,dsSessionId:t??"",injectTracks:Te.length>0?Te:void 0,contextText:X.trim()===""?void 0:X});v({kind:"ok",text:`${b("launch.ok")}${re.taskId!==void 0?`\uFF1A${re.taskId}`:""}`}),Z(""),P(""),oe(""),W(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch(S){v({kind:"error",text:rt(S)})}finally{Me(!1)}},dt=async()=>{if(me!==null&&window.confirm(b("tasks.confirmKill")))try{await jt(`/tasks/${encodeURIComponent(me.id)}/cancel`,{force:!1}),v({kind:"ok",text:b("tasks.killed")}),W(),ue(me.id)}catch(S){let re=rt(S);if(window.confirm(re))try{await jt(`/tasks/${encodeURIComponent(me.id)}/cancel`,{force:!0}),v({kind:"ok",text:b("tasks.killed")}),W(),ue(me.id)}catch(at){v({kind:"error",text:rt(at)})}}},pe=async()=>{if(me!==null)try{let S=await jt(`/tasks/${encodeURIComponent(me.id)}/retry`);v({kind:"ok",text:S.message??`${b("tasks.retried")}${S.taskId!==void 0?`\uFF1A${S.taskId}`:""}`}),W()}catch(S){v({kind:"error",text:rt(S)})}},tt=async S=>{try{await navigator.clipboard.writeText(S),ve(!0),setTimeout(()=>ve(!1),1500)}catch{v({kind:"error",text:b("tasks.copyFail")})}},gt=S=>S.startedAt===null?null:S.finishedAt!==null?S.finishedAt-S.startedAt:S.status==="running"?Date.now()-S.startedAt:null;return(0,s.jsxs)("div",{className:"coi-pane coi-tasks",children:[(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("div",{className:"coi-card-head",children:[(0,s.jsx)("span",{className:"coi-card-title",children:b("launch.title")}),(0,s.jsx)("span",{className:"coi-grow"}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>fe(!Ne),children:b(Ne?"launch.collapse":"launch.expand")})]}),Ne&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"coi-form-grid",children:[(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.adapter")}),(0,s.jsxs)("select",{className:"coi-select",value:D,onChange:S=>{let re=S.target.value;y(re),l!==""&&!d.some(at=>at.id===l&&at.adapterId===re)&&x("")},children:[o.map(S=>(0,s.jsxs)("option",{value:S.id,children:[S.name,"\uFF08",S.id,"\uFF09"]},S.id)),o.length===0&&(0,s.jsx)("option",{value:D,children:D})]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.scope")}),(0,s.jsx)("select",{className:"coi-select",value:I,onChange:S=>m(S.target.value),children:ds.map(S=>(0,s.jsx)("option",{value:S,children:b(`scope.${S}`)},S))})]}),I!=="temporary"&&(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.session")}),(0,s.jsxs)("select",{className:"coi-select",value:l,onChange:S=>x(S.target.value),children:[(0,s.jsx)("option",{value:"",children:b("launch.sessionNone")}),d.filter(S=>S.adapterId===D).map(S=>(0,s.jsxs)("option",{value:S.id,children:[S.id,"\uFF08",S.adapterId,S.note!==null&&S.note!==""?` \xB7 ${Ra(S.note,12)}`:"","\uFF09"]},S.id)),d.filter(S=>S.adapterId===D).length===0&&(0,s.jsx)("option",{value:"",disabled:!0,children:b("launch.sessionEmpty")})]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.template")}),(0,s.jsxs)("select",{className:"coi-select",value:V,onChange:S=>nt(S.target.value),children:[(0,s.jsx)("option",{value:"",children:b("launch.templateNone")}),n.map(S=>(0,s.jsxs)("option",{value:S.id,children:[S.name,"\uFF08",S.id,"\uFF09"]},S.id))]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.ref")}),(0,s.jsxs)("select",{className:"coi-select",value:ne,onChange:S=>oe(S.target.value),children:[(0,s.jsx)("option",{value:"",children:b("launch.refNone")}),C.map(S=>(0,s.jsxs)("option",{value:S.id,children:[S.id," \xB7 ",Ra(S.prompt,24)]},S.id))]})]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.prompt")}),(0,s.jsx)("textarea",{className:"coi-textarea coi-textarea-lg",rows:6,placeholder:b("launch.promptPh"),value:O,onChange:S=>Z(S.target.value)})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-field-check",children:(0,s.jsx)("span",{className:"coi-label",children:b("launch.injectTracks")})}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("launch.injectTracksHint")})]}),(0,s.jsx)("label",{className:"coi-field coi-field-wide coi-inject-track-line",children:["memory","user","key"].map(S=>(0,s.jsxs)("span",{className:"coi-field-check",children:[(0,s.jsx)("input",{type:"checkbox",checked:Te.includes(S),onChange:re=>Ce(re.target.checked?[...Te,S]:Te.filter(at=>at!==S))}),(0,s.jsx)("span",{className:"coi-label",children:S})]},S))}),Te.length>0&&(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("launch.ctxText")}),(0,s.jsx)("textarea",{className:"coi-textarea",rows:4,value:X,onChange:S=>Ve(S.target.value),placeholder:b("launch.ctxTextPh")})]}),(0,s.jsx)("div",{className:"coi-form-actions",children:(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:be,onClick:()=>{Be()},children:b("launch.submit")})})]})]}),(0,s.jsx)(Ta,{notice:G}),(0,s.jsx)("div",{className:"coi-task-toolbar",children:(0,s.jsx)("input",{className:"coi-input",placeholder:b("tasks.searchPh"),value:je,onChange:S=>{et(S.target.value),j(1)}})}),(0,s.jsxs)("div",{className:"coi-split",children:[(0,s.jsxs)("div",{className:"coi-task-list",children:[(0,s.jsx)(ca,{error:U}),u===null&&U===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),u!==null&&u.length===0&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("tasks.empty")}),u?.map(S=>{let re=xa(S.status);return(0,s.jsxs)("button",{type:"button",className:`coi-task-row${ce===S.id?" coi-task-row-active":""}`,onClick:()=>ze(S.id),children:[(0,s.jsx)("span",{className:`coi-task-status ${re.cls}`,title:re.label,children:re.icon}),(0,s.jsx)("span",{className:"coi-mono coi-task-id",children:S.id}),(0,s.jsx)("span",{className:"coi-task-adapter",children:S.adapterId}),(0,s.jsx)("span",{className:"coi-task-prompt",title:S.prompt,children:Ra(S.prompt)}),(0,s.jsx)("span",{className:"coi-badge",children:b("scope."+S.scope)??S.scope}),(0,s.jsx)("span",{className:"coi-muted coi-task-time",children:Qa(S.createdAt)})]},S.id)}),u!==null&&z>ka&&(0,s.jsxs)("div",{className:"coi-pager",children:[(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",disabled:k<=1,onClick:()=>j(S=>Math.max(1,S-1)),children:["\u2039 ",b("tasks.pager.prev")]}),(0,s.jsxs)("span",{className:"coi-pager-info",children:[k," / ",Math.max(1,Math.ceil(z/ka))," \xB7 ",b("tasks.pager.total")," ",z]}),(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",disabled:k>=Math.max(1,Math.ceil(z/ka)),onClick:()=>j(S=>S+1),children:[b("tasks.pager.next")," \u203A"]})]})]}),(0,s.jsxs)("div",{className:"coi-detail",children:[ce===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("tasks.selectHint")}),ce!==null&&me===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),me!==null&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"coi-detail-meta",children:[(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.status")}),(0,s.jsxs)("span",{className:xa(me.status).cls,children:[xa(me.status).icon," ",xa(me.status).label]})]}),(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.adapter")}),(0,s.jsx)("span",{children:me.adapterId})]}),(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.scope")}),(0,s.jsx)("span",{className:"coi-badge",children:b("scope."+me.scope)??me.scope})]}),me.branch!==null&&(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.branch")}),(0,s.jsx)("span",{className:"coi-mono",children:me.branch})]}),me.sessionId!==null&&(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.sessionId")}),(0,s.jsx)("span",{className:"coi-mono coi-small",children:me.sessionId}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{tt(me.sessionId??"")},children:b(ye?"tasks.copied":"tasks.copy")})]}),(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.created")}),(0,s.jsx)("span",{children:Qa(me.createdAt)})]}),(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.duration")}),(0,s.jsx)("span",{children:Ai(gt(me))})]}),we&&me.lastOutputAt!=null&&(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.lastOutput")}),(0,s.jsx)("span",{children:ji(me.lastOutputAt)})]}),me.exitCode!==null&&(0,s.jsxs)("div",{className:"coi-meta-row",children:[(0,s.jsx)("span",{className:"coi-label",children:b("tasks.exitCode")}),(0,s.jsx)("span",{className:"coi-mono",children:me.exitCode})]})]}),(0,s.jsxs)("div",{className:"coi-detail-actions",children:[we&&(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-danger",onClick:()=>{dt()},children:["\u{1F6D1} ",b("tasks.kill")]}),!we&&(0,s.jsxs)("button",{type:"button",className:"coi-btn",onClick:()=>{pe()},children:["\u21BB ",b("tasks.retry")]}),!we&&(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-danger",onClick:()=>{Ue(me.id)},children:["\u{1F5D1} ",b("tasks.delete")]})]}),me.error!==null&&me.error!==""&&(0,s.jsxs)("div",{className:"coi-error",children:[b("tasks.error"),"\uFF1A",me.error]}),(0,s.jsxs)("div",{className:"coi-log-head",children:[(0,s.jsx)("span",{className:"coi-label coi-log-title",children:b("tasks.prompt")}),(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>xe(!0),children:["\u26F6 ",b("tasks.logFull")]})]}),(0,s.jsx)("pre",{className:"coi-prompt-view",children:me.prompt}),(0,s.jsxs)("div",{className:"coi-log-head",children:[(0,s.jsx)("span",{className:"coi-label coi-log-title",children:b("tasks.log")}),(0,s.jsxs)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>F(!0),children:["\u26F6 ",b("tasks.logFull")]})]}),Ee!==null&&(0,s.jsx)("div",{className:"coi-error",children:Ee}),(0,s.jsx)("pre",{ref:He,className:"coi-log",children:ot===""?b("tasks.logEmpty"):ot})]})]})]}),Se&&me!==null&&(0,s.jsx)("div",{className:"coi-modal",onClick:()=>xe(!1),children:(0,s.jsxs)("div",{className:"coi-modal-box",onClick:S=>S.stopPropagation(),children:[(0,s.jsxs)("div",{className:"coi-modal-head",children:[(0,s.jsxs)("span",{className:"coi-mono coi-small",children:[b("tasks.prompt")," \u2014 ",me.id]}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>xe(!1),children:"\u2715"})]}),(0,s.jsx)("pre",{className:"coi-log coi-log-full coi-prompt-view-full",children:me.prompt})]})}),M&&me!==null&&(0,s.jsx)("div",{className:"coi-modal",onClick:()=>F(!1),children:(0,s.jsxs)("div",{className:"coi-modal-box",onClick:S=>S.stopPropagation(),children:[(0,s.jsxs)("div",{className:"coi-modal-head",children:[(0,s.jsxs)("span",{className:"coi-mono coi-small",children:[b("tasks.log")," \u2014 ",me.id,"\uFF08",me.adapterId," ",b("scope."+me.scope)??me.scope,"\uFF09"]}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>F(!1),children:"\u2715"})]}),(0,s.jsx)("pre",{ref:Je,className:"coi-log coi-log-full",children:ot===""?b("tasks.logEmpty"):ot})]})})]})}function Fi({dsSessionId:t}){let e=(t??"")!==""?`&sessionId=${encodeURIComponent(String(t))}`:"",[o,a]=(0,B.useState)(null),[n,i]=(0,B.useState)(null),[d,p]=(0,B.useState)(null),[C,w]=(0,B.useState)(""),[u,g]=(0,B.useState)(""),[k,j]=(0,B.useState)(null),[z,A]=(0,B.useState)(""),U=(0,B.useCallback)(async()=>{try{let v=new URLSearchParams;C!==""&&v.set("scope",C),u.trim()!==""&&v.set("q",u.trim());let D=await ut(`/sessions?${v.toString()}${e}`);a(D.sessions),i(null)}catch(v){i(rt(v))}},[C,u]);(0,B.useEffect)(()=>{U()},[U]);let T=async v=>{try{await jt("/sessions/note",{id:v,note:z}),j(null),p({kind:"ok",text:b("config.saved")}),U()}catch(D){p({kind:"error",text:rt(D)})}},G=async v=>{if(window.confirm(b("sessions.confirmDelete")))try{await Ma(`/sessions/${encodeURIComponent(v)}`),U()}catch(D){p({kind:"error",text:rt(D)})}};return(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsxs)("div",{className:"coi-toolbar",children:[(0,s.jsxs)("select",{className:"coi-select",value:C,onChange:v=>w(v.target.value),title:b("sessions.filterScope"),children:[(0,s.jsx)("option",{value:"",children:b("all")}),ds.map(v=>(0,s.jsx)("option",{value:v,children:b(`scope.${v}`)},v))]}),(0,s.jsx)("input",{className:"coi-input",placeholder:b("sessions.searchPh"),value:u,onChange:v=>g(v.target.value)}),(0,s.jsx)("button",{type:"button",className:"coi-btn",onClick:()=>{U()},children:b("refresh")})]}),(0,s.jsx)(Ta,{notice:d}),(0,s.jsx)(ca,{error:n}),o===null&&n===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),o!==null&&o.length===0&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("sessions.empty")}),o?.map(v=>(0,s.jsxs)("div",{className:"coi-row",children:[(0,s.jsxs)("div",{className:"coi-row-line",children:[(0,s.jsx)("span",{className:"coi-mono coi-small",children:v.id}),v.activeTaskId!==null&&v.activeTaskId!==""&&(0,s.jsx)("span",{title:`${b("sessions.locked")}\uFF1A${v.activeTaskId}`,children:"\u{1F512}"}),(0,s.jsx)("span",{className:"coi-badge",children:b("scope."+v.scope)??v.scope}),(0,s.jsx)("span",{children:v.adapterId}),v.branch!==null&&(0,s.jsx)("span",{className:"coi-muted coi-mono coi-small",children:v.branch}),(0,s.jsxs)("span",{className:"coi-muted coi-small",children:[b("sessions.lastSeen")," ",Qa(v.lastSeen)]})]}),(0,s.jsxs)("div",{className:"coi-row-line",children:[k===v.id?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{className:"coi-input coi-grow",value:z,onChange:D=>A(D.target.value),placeholder:b("sessions.note")}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{T(v.id)},children:b("sessions.save")})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"coi-muted coi-grow",children:v.note!==null&&v.note!==""?v.note:"\u2014"}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{j(v.id),A(v.note??"")},children:b("sessions.note")})]}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{G(v.id)},children:b("sessions.delete")})]})]},v.id))]})}function $i(){let[t,e]=(0,B.useState)(null),[o,a]=(0,B.useState)(null),[n,i]=(0,B.useState)(null),[d,p]=(0,B.useState)(null),[C,w]=(0,B.useState)(null),[u,g]=(0,B.useState)(""),[k,j]=(0,B.useState)(""),[z,A]=(0,B.useState)(!1),[U,T]=(0,B.useState)(null),[G,v]=(0,B.useState)(null),[D,y]=(0,B.useState)(""),[O,Z]=(0,B.useState)(""),[I,m]=(0,B.useState)(""),[l,x]=(0,B.useState)("ai-cli"),[V,P]=(0,B.useState)(""),[ne,oe]=(0,B.useState)(""),[be,Me]=(0,B.useState)(""),[Te,Ce]=(0,B.useState)(""),[X,Ve]=(0,B.useState)(""),[Ne,fe]=(0,B.useState)("flag"),[ce,ze]=(0,B.useState)(""),[me,Ze]=(0,B.useState)(""),[ot,Fe]=(0,B.useState)(""),[Ee,ke]=(0,B.useState)(""),[ye,ve]=(0,B.useState)("none"),[M,F]=(0,B.useState)(""),[Se,xe]=(0,B.useState)(!1),je=(0,B.useCallback)(async()=>{try{let L=await ut("/adapters");e(L.adapters),a(null)}catch(L){a(rt(L))}},[]);(0,B.useEffect)(()=>{je()},[je]);let et=async L=>{try{let we=await jt("/adapters/test",{id:L});i({kind:"ok",text:`${b("adapters.testOk")}${we.taskId!==void 0?`\uFF1A${we.taskId}`:""}${we.message!==void 0?`\uFF08${we.message}\uFF09`:""}`})}catch(we){i({kind:"error",text:rt(we)})}},He=async L=>{if(window.confirm(b("adapters.confirmDelete")))try{let we=await Ma(`/adapters/${encodeURIComponent(L)}`);if(we.ok===!1){i({kind:"error",text:Xt(we.message,"ok:false")});return}je()}catch(we){i({kind:"error",text:rt(we)})}},Je=async L=>{try{let we={...L,useCase:D.trim()},nt=await jt("/adapters",{def:we});if(nt.ok!==!0){i({kind:"error",text:Xt(nt.message,"\u4FDD\u5B58\u5931\u8D25")});return}v(null),je()}catch(we){i({kind:"error",text:rt(we)})}},N=async L=>{try{let we=L.enabled===!1,nt=await jt(`/adapters/${encodeURIComponent(L.id)}/enabled`,{enabled:we});if(nt.ok!==!0){i({kind:"error",text:Xt(nt.message,"\u64CD\u4F5C\u5931\u8D25")});return}je()}catch(we){i({kind:"error",text:rt(we)})}},W=async L=>{T(null),g(L.skillName??""),j(""),w(L.id);try{let we=await ut(`/adapters/${encodeURIComponent(L.id)}/skill`);if(we.ok!==!0){T(Xt(we.message,"\u8BFB\u53D6\u5931\u8D25"));return}g(we.skillName??""),j(we.content??"")}catch(we){T(rt(we))}},ue=async()=>{if(C!==null){A(!0),T(null);try{let L=await ut(`/adapters/${encodeURIComponent(C)}/skill`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({content:k})});if(L.ok!==!0){T(Xt(L.message,"\u4FDD\u5B58\u5931\u8D25"));return}i({kind:"ok",text:L.message??b("adapters.skillSaved")}),w(null),j("")}catch(L){T(rt(L))}finally{A(!1)}}},Ue=async()=>{if(l==="ai-cli"&&(Ne==="flag"?ce.trim()==="":ot.trim()==="")){i({kind:"error",text:b("adapters.resumeMissing")});return}xe(!0);try{let L={id:O.trim(),name:I.trim(),type:l,binary:V.trim(),args:ne.split(",").map(Be=>Be.trim()).filter(Be=>Be!==""),skillName:be.trim()===""?void 0:be.trim(),useCase:Te.trim()===""?void 0:Te.trim()};l==="ai-cli"&&(L.resume=Ne==="flag"?{kind:"flag",flag:ce.trim(),arg:me.trim()===""?"{sessionId}":me.trim()}:{kind:"args",args:ot.split(",").map(Be=>Be.trim()).filter(Be=>Be!=="")},Ee.trim()!==""&&(L.continue={kind:"flag",flag:Ee.trim()}),ye!=="none"&&M.trim()!==""&&(L.sessionIdExtract={source:ye,regex:M.trim()}));let we=be.trim()!==""&&X.trim()!==""?X:void 0,nt=await jt("/adapters",{def:L,skillContent:we});if(nt.ok!==!0){i({kind:"error",text:Xt(nt.message,"\u4FDD\u5B58\u5931\u8D25")});return}i({kind:"ok",text:nt.skillMessage!==void 0?nt.skillMessage:b("config.saved")}),Z(""),m(""),P(""),oe(""),Ce(""),ze(""),Ze(""),Fe(""),ke(""),F(""),je()}catch(L){i({kind:"error",text:rt(L)})}finally{xe(!1)}};return(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsx)(Ta,{notice:n}),(0,s.jsx)(ca,{error:o}),t===null&&o===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),(0,s.jsx)("div",{className:"coi-cards",children:t?.map(L=>{let we=Mi.has(L.id);return(0,s.jsxs)("div",{className:"coi-card coi-adapter-card",children:[(0,s.jsxs)("div",{className:"coi-row-line",children:[(0,s.jsx)("span",{className:"coi-strong",children:L.name}),(0,s.jsx)("span",{className:"coi-mono coi-small coi-muted",children:L.id}),(0,s.jsx)("span",{className:"coi-badge",children:L.type}),(0,s.jsx)("span",{className:"coi-badge",children:b(we?"adapters.builtin":"adapters.custom")}),(0,s.jsx)("span",{className:"coi-grow"}),L.skillName!==void 0&&L.skillName!==""&&(0,s.jsxs)("span",{className:"coi-muted coi-small coi-skill-tag",title:b("adapters.skillHint"),children:[b("adapters.skill"),"\uFF1A",L.skillName]}),L.skillName!==void 0&&L.skillName!==""&&(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{W(L)},children:b("adapters.skillBtn")}),(0,s.jsx)("button",{type:"button",className:`coi-btn coi-btn-mini${L.enabled===!1?" coi-btn-danger":""}`,onClick:()=>{N(L)},children:L.enabled===!1?b("adapters.enable"):b("adapters.disable")}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{et(L.id)},children:b("adapters.test")}),!we&&(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{He(L.id)},children:b("adapters.delete")})]}),(0,s.jsxs)("div",{className:"coi-row-line coi-muted coi-small",children:[(0,s.jsx)("span",{className:"coi-mono",children:L.binary}),L.args.length>0&&(0,s.jsx)("span",{className:"coi-mono",children:L.args.join(" ")}),L.avgMs!==void 0&&L.avgMs>0&&(0,s.jsxs)("span",{className:"coi-avg-ms",title:"\u5386\u53F2 completed \u4EFB\u52A1\u7684\u5E73\u5747\u8017\u65F6\uFF08de_coi_adapters \u540C\u6E90\uFF09",children:["\u23F1 \u5747\u8017\u65F6 ",(L.avgMs/6e4).toFixed(1)," \u5206\u949F"]})]}),(0,s.jsx)("div",{className:"coi-row-line coi-muted coi-small",children:G===L.id?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"\u{1F3AF}"}),(0,s.jsx)("input",{className:"coi-input coi-grow",value:D,onChange:nt=>y(nt.target.value),placeholder:b("adapters.useCasePh")}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-primary",onClick:()=>{Je(L)},children:b("adapters.saveUseCase")}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>v(null),children:b("cancel")})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"coi-grow",children:["\u{1F3AF} ",L.useCase!==void 0&&L.useCase!==""?L.useCase:b("adapters.useCaseEmpty")]}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>{v(L.id),y(L.useCase??"")},children:b("adapters.editUseCase")})]})}),L.enabled===!1&&(0,s.jsx)("div",{className:"coi-row-line coi-error",children:(0,s.jsxs)("span",{children:["\u26D4 ",b("adapters.disabledHint")]})}),d===L.id&&L.guide!==void 0&&(0,s.jsx)("pre",{className:"coi-guide",children:L.guide})]},L.id)})}),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsx)("div",{className:"coi-card-title",children:b("adapters.addTitle")}),(0,s.jsxs)("div",{className:"coi-form-grid",children:[(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:"id"}),(0,s.jsx)("input",{className:"coi-input",value:O,onChange:L=>Z(L.target.value),placeholder:"my-cli"})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.name")}),(0,s.jsx)("input",{className:"coi-input",value:I,onChange:L=>m(L.target.value)})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.type")}),(0,s.jsxs)("select",{className:"coi-select",value:l,onChange:L=>x(L.target.value),children:[(0,s.jsx)("option",{value:"ai-cli",children:"ai-cli"}),(0,s.jsx)("option",{value:"plain-cli",children:"plain-cli"})]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.binary")}),(0,s.jsx)("input",{className:"coi-input",value:V,onChange:L=>P(L.target.value),placeholder:"/usr/local/bin/my-cli"})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.args")}),(0,s.jsx)("input",{className:"coi-input",value:ne,onChange:L=>oe(L.target.value),placeholder:b("adapters.argsPh")})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.skillName")}),(0,s.jsx)("input",{className:"coi-input",value:be,onChange:L=>Me(L.target.value),placeholder:b("adapters.skillNamePh")})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.useCase")}),(0,s.jsx)("input",{className:"coi-input",value:Te,onChange:L=>Ce(L.target.value),placeholder:b("adapters.useCasePh")})]}),l==="ai-cli"&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"coi-field coi-field-wide coi-resume-section",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.resumeSection")}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("adapters.resumeSectionHint")})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.resumeKind")}),(0,s.jsxs)("select",{className:"coi-select",value:Ne,onChange:L=>fe(L.target.value),children:[(0,s.jsx)("option",{value:"flag",children:b("adapters.resumeKindFlag")}),(0,s.jsx)("option",{value:"args",children:b("adapters.resumeKindArgs")})]})]}),Ne==="flag"?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.resumeFlag")}),(0,s.jsx)("input",{className:"coi-input",value:ce,onChange:L=>ze(L.target.value),placeholder:b("adapters.resumeFlagPh")})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.resumeArg")}),(0,s.jsx)("input",{className:"coi-input",value:me,onChange:L=>Ze(L.target.value),placeholder:b("adapters.resumeArgPh")})]})]}):(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.resumeArgs")}),(0,s.jsx)("input",{className:"coi-input",value:ot,onChange:L=>Fe(L.target.value),placeholder:b("adapters.resumeArgsPh")})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.continueFlag")}),(0,s.jsx)("input",{className:"coi-input",value:Ee,onChange:L=>ke(L.target.value),placeholder:b("adapters.continueFlagPh")})]}),(0,s.jsx)("div",{className:"coi-field coi-field-wide coi-resume-section",children:(0,s.jsx)("span",{className:"coi-label",children:b("adapters.extractSection")})}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.extractSource")}),(0,s.jsxs)("select",{className:"coi-select",value:ye,onChange:L=>ve(L.target.value),children:[(0,s.jsx)("option",{value:"none",children:"none"}),(0,s.jsx)("option",{value:"stdout",children:"stdout"}),(0,s.jsx)("option",{value:"stderr",children:"stderr"}),(0,s.jsx)("option",{value:"any",children:"any"})]})]}),ye!=="none"&&(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.extractRegex")}),(0,s.jsx)("input",{className:"coi-input",value:M,onChange:L=>F(L.target.value),placeholder:b("adapters.extractRegexPh")})]})]}),be.trim()!==""&&(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("adapters.skillContent")}),(0,s.jsx)("textarea",{className:"coi-textarea",rows:5,value:X,onChange:L=>Ve(L.target.value),placeholder:b("adapters.skillContentPh")}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("adapters.skillContentHint")})]})]}),(0,s.jsx)("div",{className:"coi-form-actions",children:(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:Se||O.trim()===""||I.trim()===""||V.trim()===""||l==="ai-cli"&&(Ne==="flag"?ce.trim()==="":ot.trim()===""),onClick:()=>{Ue()},children:b("adapters.add")})})]}),C!==null&&(0,s.jsx)("div",{className:"coi-modal",onClick:()=>w(null),children:(0,s.jsxs)("div",{className:"coi-modal-box",onClick:L=>L.stopPropagation(),children:[(0,s.jsxs)("div",{className:"coi-modal-head",children:[(0,s.jsxs)("span",{className:"coi-small",children:[b("adapters.editSkillTitle"),"\uFF1A",u]}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>w(null),children:"\u2715"})]}),U!==null&&(0,s.jsx)("div",{className:"coi-error coi-pad",children:U}),(0,s.jsx)("div",{className:"coi-pad coi-muted coi-small",children:b("adapters.editSkillHint")}),(0,s.jsx)("textarea",{className:"coi-textarea coi-skill-editor",value:k,onChange:L=>j(L.target.value),placeholder:"# SKILL.md"}),(0,s.jsxs)("div",{className:"coi-modal-head",children:[(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini",onClick:()=>w(null),children:b("cancel")}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary coi-btn-mini",disabled:z,onClick:()=>{ue()},children:b(z?"saving":"adapters.saveSkill")})]})]})})]})}function Hi(){let[t,e]=(0,B.useState)(null),[o,a]=(0,B.useState)([]),[n,i]=(0,B.useState)(null),[d,p]=(0,B.useState)(null),[C,w]=(0,B.useState)(""),[u,g]=(0,B.useState)(""),[k,j]=(0,B.useState)(""),[z,A]=(0,B.useState)(""),[U,T]=(0,B.useState)(!1),G=(0,B.useCallback)(async()=>{try{let y=await ut("/templates");e(y.templates),i(null)}catch(y){i(rt(y))}},[]);(0,B.useEffect)(()=>{G(),ut("/adapters").then(y=>a(y.adapters)).catch(()=>{})},[G]);let v=async y=>{if(ls.has(y)){p({kind:"error",text:b("templates.builtinKeep")});return}if(window.confirm(b("templates.confirmDelete")))try{await Ma(`/templates/${encodeURIComponent(y)}`),G()}catch(O){p({kind:"error",text:rt(O)})}},D=async()=>{T(!0);try{let y={name:u.trim(),prompt:k};C.trim()!==""&&(y.id=C.trim()),z!==""&&(y.adapterId=z),await jt("/templates",{def:y}),p({kind:"ok",text:b("config.saved")}),w(""),g(""),j(""),A(""),G()}catch(y){p({kind:"error",text:rt(y)})}finally{T(!1)}};return(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsx)(Ta,{notice:d}),(0,s.jsx)(ca,{error:n}),t===null&&n===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),t!==null&&t.length===0&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("templates.empty")}),t?.map(y=>(0,s.jsxs)("div",{className:"coi-row",children:[(0,s.jsxs)("div",{className:"coi-row-line",children:[(0,s.jsx)("span",{className:"coi-strong",children:y.name}),(0,s.jsx)("span",{className:"coi-mono coi-small coi-muted",children:y.id}),y.adapterId!==void 0&&(0,s.jsx)("span",{className:"coi-badge",children:y.adapterId}),ls.has(y.id)&&(0,s.jsx)("span",{className:"coi-badge",children:b("adapters.builtin")}),(0,s.jsx)("span",{className:"coi-grow"}),(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-mini coi-btn-danger",onClick:()=>{v(y.id)},children:b("templates.delete")})]}),(0,s.jsx)("div",{className:"coi-row-line coi-muted",title:y.prompt,children:Ra(y.prompt,80)})]},y.id)),(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsx)("div",{className:"coi-card-title",children:b("templates.addTitle")}),(0,s.jsxs)("div",{className:"coi-form-grid",children:[(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("templates.name")}),(0,s.jsx)("input",{className:"coi-input",value:u,onChange:y=>g(y.target.value)})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("templates.adapterOpt")}),(0,s.jsxs)("select",{className:"coi-select",value:z,onChange:y=>A(y.target.value),children:[(0,s.jsx)("option",{value:"",children:b("none")}),o.map(y=>(0,s.jsx)("option",{value:y.id,children:y.id},y.id))]})]}),(0,s.jsxs)("label",{className:"coi-field coi-field-wide",children:[(0,s.jsx)("span",{className:"coi-label",children:b("templates.idOpt")}),(0,s.jsx)("input",{className:"coi-input",value:C,onChange:y=>w(y.target.value),placeholder:"my-template"})]})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("templates.prompt")}),(0,s.jsx)("textarea",{className:"coi-textarea",rows:3,value:k,onChange:y=>j(y.target.value)})]}),(0,s.jsx)("div",{className:"coi-form-actions",children:(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:U||u.trim()===""||k.trim()==="",onClick:()=>{D()},children:b("templates.add")})})]})]})}function Bi(){let[t,e]=(0,B.useState)(null),[o,a]=(0,B.useState)(null),n=(0,B.useCallback)(async()=>{try{let i=await ut("/stats");e(i),a(null)}catch(i){a(rt(i))}},[]);return(0,B.useEffect)(()=>{n()},[n]),(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsx)("div",{className:"coi-toolbar",children:(0,s.jsx)("button",{type:"button",className:"coi-btn",onClick:()=>{n()},children:b("refresh")})}),(0,s.jsx)(ca,{error:o}),t===null&&o===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),t!==null&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"coi-stat-grid",children:(0,s.jsxs)("div",{className:"coi-stat-card",children:[(0,s.jsx)("div",{className:"coi-stat-num",children:t.total}),(0,s.jsx)("div",{className:"coi-muted",children:b("stats.total")})]})}),(0,s.jsx)("div",{className:"coi-stat-grid",children:Object.entries(t.byAdapter).map(([i,d])=>(0,s.jsxs)("div",{className:"coi-stat-card",children:[(0,s.jsx)("div",{className:"coi-strong",children:i}),(0,s.jsx)("div",{className:"coi-stat-num",children:d.count}),(0,s.jsxs)("div",{className:"coi-muted coi-small",children:[b("stats.count")," \xB7 ",b("stats.hours")," ",(d.totalMs/36e5).toFixed(2),"h"]}),(0,s.jsx)("div",{className:"coi-row-line coi-small",children:Object.entries(d.byStatus).map(([p,C])=>{let w=xa(p);return(0,s.jsxs)("span",{className:w.cls,title:w.label,children:[w.icon," ",C]},p)})})]},i))}),Object.keys(t.byAdapter).length===0&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("stats.empty")})]})]})}function qi(){let[t,e]=(0,B.useState)(!1),[o,a]=(0,B.useState)(null),[n,i]=(0,B.useState)(null),[d,p]=(0,B.useState)(""),[C,w]=(0,B.useState)(""),[u,g]=(0,B.useState)(""),[k,j]=(0,B.useState)(""),[z,A]=(0,B.useState)(!1);(0,B.useEffect)(()=>{ut("/config").then(T=>{p(T.config.coiNotifyCommand??""),w(String(T.config.coiRetentionDays??""));let G=T.config.coiTaskTimeoutMs??0;g(String(Math.floor(G/36e5))),j(String(Math.round(G%36e5/6e4))),e(!0)}).catch(T=>a(rt(T)))},[]);let U=async()=>{A(!0);try{let T={coiNotifyCommand:d},G=Number(C),v=Number(u),D=Number(k);if(C.trim()!==""&&Number.isFinite(G)&&(T.coiRetentionDays=G),u.trim()!==""||k.trim()!==""){let y=(Number.isFinite(v)?v:0)*60+(Number.isFinite(D)?D:0);if(!Number.isFinite(y)||y<0)throw new Error(b("config.timeoutBad"));T.coiTaskTimeoutMs=y*6e4}await jt("/config",{patch:T}),i({kind:"ok",text:b("config.saved")})}catch(T){i({kind:"error",text:rt(T)})}finally{A(!1)}};return(0,s.jsxs)("div",{className:"coi-pane",children:[(0,s.jsx)(Ta,{notice:n}),(0,s.jsx)(ca,{error:o}),!t&&o===null&&(0,s.jsx)("div",{className:"coi-muted coi-pad",children:b("loading")}),t&&(0,s.jsxs)("div",{className:"coi-card",children:[(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("config.notify")}),(0,s.jsx)("input",{className:"coi-input",value:d,onChange:T=>p(T.target.value)}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("config.notifyHint")})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("config.retention")}),(0,s.jsx)("input",{className:"coi-input",type:"number",min:0,value:C,onChange:T=>w(T.target.value)})]}),(0,s.jsxs)("label",{className:"coi-field",children:[(0,s.jsx)("span",{className:"coi-label",children:b("config.timeout")}),(0,s.jsxs)("div",{className:"coi-inline",children:[(0,s.jsx)("input",{className:"coi-input",type:"number",min:0,value:u,onChange:T=>g(T.target.value),placeholder:"0"}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("config.timeoutHours")}),(0,s.jsx)("input",{className:"coi-input",type:"number",min:0,max:59,value:k,onChange:T=>j(T.target.value),placeholder:"0"}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("config.timeoutMinutes")})]}),(0,s.jsx)("span",{className:"coi-muted coi-small",children:b("config.timeoutHint")})]}),(0,s.jsx)("div",{className:"coi-form-actions",children:(0,s.jsx)("button",{type:"button",className:"coi-btn coi-btn-primary",disabled:z,onClick:()=>{U()},children:b("config.save")})})]})]})}var ms=require("react"),us=require("react/jsx-runtime");function ps(t){let[e,o]=(0,ms.useState)(!1);return(0,us.jsx)("button",{type:"button",className:"me-copy-session-id",title:t.t("header.copySessionId.title"),onClick:()=>{navigator.clipboard.writeText(t.sessionId).then(()=>{o(!0),window.setTimeout(()=>o(!1),1500)}).catch(()=>{})},children:e?t.t("header.copySessionId.done"):t.t("header.copySessionId")})}var Na=require("react"),Ot=require("react/jsx-runtime"),Za="/memory-evolve/api/aliases";function bs(t){let[e,o]=(0,Na.useState)(!1),[a,n]=(0,Na.useState)(""),[i,d]=(0,Na.useState)(!1),[p,C]=(0,Na.useState)(null),w=()=>{o(!0),C(null),fetch(`${Za}`).then(k=>k.ok?k.json():Promise.reject(new Error(`HTTP ${k.status}`))).then(k=>{n(k.aliases?.[t.sessionId]??"")}).catch(()=>{})},u=async()=>{d(!0),C(null);try{let k=a.trim(),j=await fetch(`${Za}/${encodeURIComponent(t.sessionId)}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({name:k})}),z=await j.json().catch(()=>({}));if(j.ok!==!0||z.ok!==!0)throw new Error(z.message??`HTTP ${j.status}`);C(k===""?t.t("header.setAlias.cleared"):t.t("header.setAlias.saved")),o(!1)}catch(k){C(k instanceof Error?k.message:String(k))}finally{d(!1)}},g=async()=>{d(!0),C(null);try{let k=await fetch(`${Za}/${encodeURIComponent(t.sessionId)}`,{method:"DELETE"}),j=await k.json().catch(()=>({}));if(k.ok!==!0||j.ok!==!0)throw new Error(j.message??`HTTP ${k.status}`);n(""),C(t.t("header.setAlias.cleared")),o(!1)}catch(k){C(k instanceof Error?k.message:String(k))}finally{d(!1)}};return(0,Ot.jsxs)("span",{className:"me-alias-wrap",children:[(0,Ot.jsx)("button",{type:"button",className:"me-copy-session-id",title:t.t("header.setAlias.title"),onClick:()=>e?o(!1):w(),children:t.t("header.setAlias")}),e&&(0,Ot.jsxs)("span",{className:"me-alias-editor",children:[(0,Ot.jsx)("input",{className:"me-alias-input",value:a,maxLength:10,placeholder:t.t("header.setAlias.placeholder"),onChange:k=>n(k.target.value),onKeyDown:k=>{k.key==="Enter"&&u()},autoFocus:!0}),(0,Ot.jsx)("button",{type:"button",className:"me-copy-session-id",disabled:i,onClick:()=>{u()},children:t.t("header.setAlias.save")}),(0,Ot.jsx)("button",{type:"button",className:"me-copy-session-id",disabled:i||a==="",onClick:()=>{g()},children:t.t("header.setAlias.clear")}),p!==null&&(0,Ot.jsx)("span",{className:"me-alias-notice",children:p})]})]})}var Yt=require("react/jsx-runtime");function gs(t){return(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsx)(ps,{...t}),(0,Yt.jsx)(bs,{...t})]})}var Le=require("react");var H=require("react/jsx-runtime"),fs="/memory-evolve/api/broadcast",zt=20;async function Qt(t,e){let o=await fetch(`${fs}${t}`,{headers:{"content-type":"application/json"},...e}),a=await o.json().catch(()=>({}));if(!o.ok)throw new Error(a.message??`HTTP ${o.status}`);return a}function _t(t){let e=t instanceof Error?t.message:String(t);return e!==void 0&&e.trim()!==""?e:La()?"Operation failed (no error detail)":"\u64CD\u4F5C\u5931\u8D25\uFF08\u65E0\u9519\u8BEF\u8BE6\u60C5\uFF09"}function Da(t){return new Date(t).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function hs(t){return t.startsWith("room:")||/^room-[0-9a-z-]+$/.test(t)}function _i(t,e,o){if(t.startsWith("room:")||/^room-[0-9a-z-]+$/.test(t)){let a=t.startsWith("room:")?t.slice(5):t,n=e.get(a);return n!==void 0?n.name:a}return t.startsWith("project:")?t.slice(8):to(t,o)}function eo(t,e=14){return t.length>e?`${t.slice(0,e)}\u2026`:t}function to(t,e){let o=eo(t,14);return e[t]!==void 0?`${e[t]}\uFF08${o}\uFF09`:o}function Ui({t}){let[e,o]=(0,Le.useState)(null),[a,n]=(0,Le.useState)(!1),[i,d]=(0,Le.useState)(null);(0,Le.useEffect)(()=>{let w=!1;return fetch("/memory-evolve/api/config").then(u=>u.ok?u.json():Promise.reject(new Error(`HTTP ${u.status}`))).then(u=>{!w&&u.config&&o(u.config)}).catch(u=>{w||d(_t(u))}),()=>{w=!0}},[]);let p=(w,u)=>{n(!0),d(null),fetch("/memory-evolve/api/config",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({patch:{[w]:u}})}).then(g=>g.ok?g.json():Promise.reject(new Error(`HTTP ${g.status}`))).then(g=>{g.config&&o(g.config)}).catch(g=>d(_t(g))).finally(()=>n(!1))};if(e===null)return(0,H.jsx)("div",{className:"bb-empty",children:t("broadcast.loading")});let C=w=>e[w]===!0;return(0,H.jsxs)("div",{className:"bb-settings",children:[(0,H.jsx)("div",{className:"bb-settings-title",children:t("broadcast.settings.wsCoord.title")}),(0,H.jsx)("p",{className:"bb-settings-desc",children:t("broadcast.settings.wsCoord.desc")}),(0,H.jsxs)("label",{className:"me-field",children:[(0,H.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.enabled"),(0,H.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.enabled.hint")})]}),(0,H.jsx)("input",{type:"checkbox",className:"me-switch",checked:C("wsCoordEnabled"),disabled:a,onChange:w=>p("wsCoordEnabled",w.target.checked)})]}),C("wsCoordEnabled")&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("label",{className:"me-field me-field-sub",children:[(0,H.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.snapshot"),(0,H.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.snapshot.hint")})]}),(0,H.jsx)("input",{type:"checkbox",className:"me-switch",checked:C("wsCoordSnapshot"),disabled:a,onChange:w=>p("wsCoordSnapshot",w.target.checked)})]}),(0,H.jsxs)("label",{className:"me-field me-field-sub",children:[(0,H.jsxs)("span",{className:"me-field-label",children:[t("broadcast.settings.wsCoord.enforce"),(0,H.jsx)("em",{className:"me-field-hint",children:t("broadcast.settings.wsCoord.enforce.hint")})]}),(0,H.jsx)("input",{type:"checkbox",className:"me-switch",checked:C("wsCoordEnforceWrite"),disabled:a,onChange:w=>p("wsCoordEnforceWrite",w.target.checked)})]})]}),i!==null&&(0,H.jsx)("div",{className:"bb-error",children:i})]})}var La=()=>typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en");function vs(t){let{t:e,sessionId:o}=t,[a,n]=(0,Le.useState)("messages"),[i,d]=(0,Le.useState)(null),[p,C]=(0,Le.useState)(null),[w,u]=(0,Le.useState)(new Map),[g,k]=(0,Le.useState)({}),[j,z]=(0,Le.useState)("unread"),[A,U]=(0,Le.useState)(""),[T,G]=(0,Le.useState)(1),[v,D]=(0,Le.useState)("unread"),[y,O]=(0,Le.useState)(""),[Z,I]=(0,Le.useState)(1),[m,l]=(0,Le.useState)(""),[x,V]=(0,Le.useState)("active"),[P,ne]=(0,Le.useState)(0),[oe,be]=(0,Le.useState)(1),[Me,Te]=(0,Le.useState)(null),[Ce,X]=(0,Le.useState)({}),[Ve,Ne]=(0,Le.useState)(null),[fe,ce]=(0,Le.useState)(null),[ze,me]=(0,Le.useState)(null),[Ze,ot]=(0,Le.useState)({}),[Fe,Ee]=(0,Le.useState)(null),[ke,ye]=(0,Le.useState)(null),[ve,M]=(0,Le.useState)(""),F=(0,Le.useCallback)(async()=>{try{let[h,te,Ie]=await Promise.all([Qt("/messages"),Qt("/rooms"),fetch("/memory-evolve/api/aliases").then(De=>De.ok?De.json():{aliases:{}})]);d(h.messages),C(te.rooms),u(new Map(te.rooms.map(De=>[De.id,De]))),k(Ie.aliases??{}),Ee(null)}catch(h){Ee(_t(h))}},[]);(0,Le.useEffect)(()=>{F();let h=setInterval(()=>{F()},3e4);return()=>clearInterval(h)},[F]);let Se=(0,Le.useMemo)(()=>(i??[]).filter(te=>!te.recipients.some(Ie=>hs(Ie))),[i]),xe=(0,Le.useMemo)(()=>{let h=Se;if(j==="unread"&&(h=h.filter(te=>te.readBy.length===0)),j==="read"&&(h=h.filter(te=>te.readBy.length>0)),A.trim()!==""){let te=A.trim().toLowerCase();h=h.filter(Ie=>Ie.subject.toLowerCase().includes(te)||Ie.sender.toLowerCase().includes(te)||Ie.content.toLowerCase().includes(te))}return h},[Se,j,A]),je=Math.max(1,Math.ceil(xe.length/zt)),et=xe.slice((T-1)*zt,T*zt),He=(0,Le.useMemo)(()=>fe===null||i===null?[]:i.filter(h=>h.recipients.includes(`room:${fe}`)||h.recipients.includes(fe)),[fe,i]),Je=(0,Le.useMemo)(()=>{let h=He;if(v==="unread"&&(h=h.filter(te=>te.readBy.length===0)),v==="read"&&(h=h.filter(te=>te.readBy.length>0)),y.trim()!==""){let te=y.trim().toLowerCase();h=h.filter(Ie=>Ie.subject.toLowerCase().includes(te)||Ie.sender.toLowerCase().includes(te)||Ie.content.toLowerCase().includes(te))}return h},[He,v,y]),N=Math.max(1,Math.ceil(Je.length/zt)),W=Je.slice((Z-1)*zt,Z*zt),ue=(0,Le.useMemo)(()=>{let h=p??[],te=m.trim().toLowerCase(),Ie=P>0?Date.now()-P*864e5:0;return h.filter(De=>x==="all"||De.status===x).filter(De=>te===""||De.name.toLowerCase().includes(te)).filter(De=>Ie===0||De.createdAt>=Ie)},[p,m,x,P]),Ue=Math.max(1,Math.ceil(ue.length/zt)),L=ue.slice((oe-1)*zt,oe*zt),we=async h=>{if(window.confirm(e("broadcast.message.deleteConfirm",{subject:h.subject})))try{await Qt(`/messages/${encodeURIComponent(h.id)}`,{method:"DELETE"}),ye({kind:"ok",text:e("broadcast.message.deleted")}),F()}catch(te){ye({kind:"error",text:_t(te)})}},nt=async(h,te,Ie)=>{if(te===h.id){Ie(null);return}if(Ie(h.id),Ce[h.id]===void 0)try{let De=await Qt(`/messages/${encodeURIComponent(h.id)}/content`);X(Xe=>({...Xe,[h.id]:De.content}))}catch(De){ye({kind:"error",text:_t(De)})}},Be=async h=>{if(fe===h.id){ce(null),me(null),D("unread"),O(""),I(1);return}ce(h.id),me(null),D("unread"),O(""),I(1);try{let te=await Qt(`/rooms/${encodeURIComponent(h.id)}/presence`);ot(Ie=>({...Ie,[h.id]:te.presence}))}catch(te){ye({kind:"error",text:_t(te)})}},dt=async(h,te)=>{if(window.confirm(e("broadcast.room.kickConfirm",{member:te})))try{await Qt(`/rooms/${encodeURIComponent(h.id)}/kick`,{method:"POST",body:JSON.stringify({member:te})}),ye({kind:"ok",text:e("broadcast.room.kick")}),F(),ce(null)}catch(Ie){ye({kind:"error",text:_t(Ie)})}},pe=async h=>{if(window.confirm(e("broadcast.room.dissolveConfirm",{name:h.name})))try{let te=await Qt(`/rooms/${encodeURIComponent(h.id)}/dissolve`,{method:"POST"});if(te.ok!==!0){ye({kind:"error",text:te.message??(La()?"Operation failed":"\u64CD\u4F5C\u5931\u8D25")});return}ye({kind:"ok",text:e("broadcast.room.dissolved")}),F()}catch(te){ye({kind:"error",text:_t(te)})}},tt=(h,te)=>{navigator.clipboard.writeText(h).then(()=>{M(te),window.setTimeout(()=>M(""),1500)}).catch(()=>{})},gt=(h,te,Ie)=>{let De=h.sender==="system"?La()?"System":"\u7CFB\u7EDF":to(h.sender,g),Xe=h.recipients.map(kt=>_i(kt,w,g)).join(", "),wt=h.readBy.length===0,We=te===h.id;return(0,H.jsxs)("div",{className:"bb-card",children:[(0,H.jsxs)("div",{className:"bb-row",children:[(0,H.jsx)("span",{className:"bb-strong",children:h.subject||(La()?"(no subject)":"\uFF08\u65E0\u4E3B\u9898\uFF09")}),(0,H.jsx)("span",{className:`bb-badge${wt?" bb-badge-unread":" bb-badge-read"}`,children:e(wt?"broadcast.msg.unread":"broadcast.msg.read")}),h.hasBody&&(0,H.jsx)("span",{className:"bb-badge bb-badge-long",children:e("broadcast.messages.long")}),(0,H.jsx)("span",{className:"bb-grow"}),(0,H.jsx)("span",{className:"bb-muted bb-small",children:Da(h.createdAt)}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>{nt(h,te,Ie)},children:e(We?"broadcast.message.collapse":"broadcast.message.expand")}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{we(h)},children:e("broadcast.message.delete")})]}),(0,H.jsxs)("div",{className:"bb-muted bb-small",title:h.sender==="system"?void 0:h.sender,children:[e("broadcast.messages.sender"),"\uFF1A",De," \xB7 ",e("broadcast.messages.to"),"\uFF1A",Xe]}),We&&(0,H.jsx)("pre",{className:"bb-content",children:Ce[h.id]??h.content}),Array.isArray(h.attachments)&&h.attachments.length>0&&(0,H.jsx)("div",{className:"bb-attachments",children:h.attachments.map((kt,_)=>{let Y=`${h.id}:${_}`,se=`${fs}/messages/${encodeURIComponent(h.id)}/attachment/${_}`,c=Ve===Y;return(0,H.jsxs)("div",{className:"bb-att-item",children:[(0,H.jsx)("button",{type:"button",className:"bb-att-thumb",title:`${kt.name}\uFF08${(kt.size/1024).toFixed(0)} KB\uFF09`,onClick:()=>Ne(c?null:Y),children:(0,H.jsx)("img",{src:se,alt:kt.name,loading:"lazy",className:"bb-att-thumb-img"})}),c&&(0,H.jsxs)("div",{className:"bb-att-preview",onClick:()=>Ne(null),children:[(0,H.jsx)("img",{src:se,alt:kt.name,className:"bb-att-preview-img"}),(0,H.jsx)("span",{className:"bb-att-preview-name",children:kt.name})]})]},Y)})})]},h.id)},S=(h,te,Ie,De)=>(0,H.jsxs)("div",{className:"bb-toolbar",children:[["unread","all","read"].map(Xe=>(0,H.jsx)("button",{type:"button",className:`bb-chip${h===Xe?" bb-chip-active":""}`,onClick:()=>te(Xe),children:e(`broadcast.filter.${Xe}`)},Xe)),(0,H.jsx)("input",{className:"bb-search",placeholder:e("broadcast.searchPh"),value:Ie,onChange:Xe=>De(Xe.target.value)})]}),re=(h,te,Ie)=>te<=1?null:(0,H.jsxs)("div",{className:"bb-pager",children:[(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",disabled:h<=1,onClick:()=>Ie(h-1),children:e("broadcast.pagePrev")}),(0,H.jsx)("span",{className:"bb-muted bb-small",children:e("broadcast.pageInfo",{page:h,total:te})}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",disabled:h>=te,onClick:()=>Ie(h+1),children:e("broadcast.pageNext")})]}),at=g[o],R=()=>(0,H.jsx)(ft,{sections:[{icon:"\u{1F4E8}",title:e("broadcast.guide.intro.title"),body:e("broadcast.guide.intro.body")},{icon:"\u2709\uFE0F",title:e("broadcast.guide.send.title"),body:e("broadcast.guide.send.body"),items:[e("broadcast.guide.send.item1"),e("broadcast.guide.send.item2"),e("broadcast.guide.send.item3")]},{icon:"\u{1F4E5}",title:e("broadcast.guide.inbox.title"),body:e("broadcast.guide.inbox.body"),items:[e("broadcast.guide.inbox.item1"),e("broadcast.guide.inbox.item2"),e("broadcast.guide.inbox.item3")]},{icon:"\u{1F465}",title:e("broadcast.guide.room.title"),body:e("broadcast.guide.room.body"),items:[e("broadcast.guide.room.item1"),e("broadcast.guide.room.item2"),e("broadcast.guide.room.item3")]},{icon:"\u{1F3F7}\uFE0F",title:e("broadcast.guide.alias.title"),body:e("broadcast.guide.alias.body"),items:[e("broadcast.guide.alias.item1"),e("broadcast.guide.alias.item2")]},{icon:"\u{1F6E1}\uFE0F",title:e("broadcast.guide.wscoord.title"),body:e("broadcast.guide.wscoord.body"),items:[e("broadcast.guide.wscoord.item1"),e("broadcast.guide.wscoord.item2"),e("broadcast.guide.wscoord.item3")]},{icon:"\u2699\uFE0F",title:e("broadcast.guide.switch.title"),body:e("broadcast.guide.switch.body")}]});return(0,H.jsxs)("div",{className:"bb-pane",children:[(0,H.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,H.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("guide"),children:e("broadcast.tab.guide")}),(0,H.jsx)("button",{type:"button",role:"tab","aria-selected":a==="messages",className:a==="messages"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("messages"),children:e("broadcast.tab.messages")}),(0,H.jsx)("button",{type:"button",role:"tab","aria-selected":a==="rooms",className:a==="rooms"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("rooms"),children:e("broadcast.tab.rooms")}),(0,H.jsx)("button",{type:"button",role:"tab","aria-selected":a==="settings",className:a==="settings"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("settings"),children:e("broadcast.tab.settings")})]}),(0,H.jsxs)("div",{className:"bb-session-line",title:o,children:[(0,H.jsxs)("span",{className:"bb-session-label",children:[e("broadcast.mySessionId"),"\uFF1A"]}),(0,H.jsx)("code",{className:"bb-mono",children:at!==void 0?`${at}\uFF08${eo(o)}\uFF09`:eo(o)}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>tt(o,"id"),children:e(ve==="id"?"broadcast.copied":"broadcast.copyId")}),at!==void 0&&(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>tt(at,"alias"),children:e(ve==="alias"?"broadcast.copied":"broadcast.copyAlias")})]}),ke!==null&&(0,H.jsx)("div",{className:`bb-notice bb-notice-${ke.kind}`,children:ke.text}),Fe!==null&&(0,H.jsx)("div",{className:"bb-error",children:Fe}),a==="guide"&&R(),a==="settings"&&(0,H.jsx)(Ui,{t:e}),a==="messages"&&(0,H.jsxs)("div",{className:"bb-list",children:[i===null&&(0,H.jsx)("div",{className:"bb-empty",children:e("broadcast.loading")}),i!==null&&(0,H.jsxs)(H.Fragment,{children:[S(j,h=>{z(h),G(1)},A,h=>{U(h),G(1)}),Se.length===0&&(0,H.jsxs)("div",{className:"bb-empty",children:[e("broadcast.messages.empty"),i.some(h=>h.recipients.some(te=>hs(te)))&&(0,H.jsx)("div",{className:"bb-hint",children:e("broadcast.messages.roomInRooms")})]}),Se.length>0&&xe.length===0&&(0,H.jsx)("div",{className:"bb-empty",children:e("broadcast.messages.empty")}),et.map(h=>gt(h,Me,Te)),re(T,je,G)]})]}),a==="rooms"&&(0,H.jsxs)("div",{className:"bb-list",children:[p===null&&(0,H.jsx)("div",{className:"bb-empty",children:e("broadcast.loading")}),p!==null&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{className:"bb-toolbar",children:[["all","active","dissolved"].map(h=>(0,H.jsx)("button",{type:"button",className:`bb-chip${x===h?" bb-chip-active":""}`,onClick:()=>{V(h),be(1)},children:e(`broadcast.roomStatus.${h}`)},h)),[0,7,30].map(h=>(0,H.jsx)("button",{type:"button",className:`bb-chip${P===h?" bb-chip-active":""}`,onClick:()=>{ne(h),be(1)},children:e(`broadcast.roomDays.${h}`)},h)),(0,H.jsx)("input",{className:"bb-search",placeholder:e("broadcast.roomSearchPh"),value:m,onChange:h=>{l(h.target.value),be(1)}})]}),ue.length===0&&(0,H.jsx)("div",{className:"bb-empty",children:e("broadcast.rooms.empty")}),L.map(h=>{let te=h.status==="dissolved",Ie=h.onlineCount>0&&!te,De=e(te?"broadcast.room.status.dissolved":Ie?"broadcast.room.status.active":"broadcast.room.status.idle"),Xe=Ze[h.id]??h.members.map(We=>({sessionId:We,status:"unknown",online:!1,lastActiveAt:null})),wt=fe===h.id;return(0,H.jsxs)("div",{className:`bb-card${wt?" bb-card-open":""}${te?" bb-card-dissolved":""}`,children:[(0,H.jsxs)("div",{className:"bb-row",children:[(0,H.jsx)("span",{className:`bb-dot${Ie?" bb-dot-on":te?" bb-dot-off":" bb-dot-idle"}`}),(0,H.jsx)("span",{className:"bb-strong",children:h.name}),(0,H.jsx)("span",{className:`bb-badge${te?" bb-badge-dissolved":Ie?" bb-badge-online":""}`,children:De}),(0,H.jsx)("span",{className:"bb-badge",children:e("broadcast.room.online",{online:h.onlineCount,total:h.members.length})}),(0,H.jsx)("span",{className:"bb-grow"}),(0,H.jsxs)("span",{className:"bb-muted bb-small",children:[e("broadcast.room.lastActive"),"\uFF1A",Da(h.lastActiveAt)]}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-detail",onClick:()=>{Be(h)},children:e(wt?"broadcast.message.collapse":"broadcast.room.detail")}),!te&&(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{pe(h)},children:e("broadcast.room.dissolve")})]}),(0,H.jsxs)("div",{className:"bb-meta",children:[(0,H.jsx)("code",{className:"bb-mono bb-small",children:h.id}),(0,H.jsxs)("span",{className:"bb-muted bb-small",children:["\xB7 ",e("broadcast.room.created")," ",Da(h.createdAt)," \xB7 ",h.members.length," ",e("broadcast.room.members")]}),(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini",onClick:()=>tt(h.id,`room-${h.id}`),children:e("broadcast.room.copyId")})]}),wt&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{className:"bb-members",children:[(0,H.jsx)("div",{className:"bb-section-title",children:e("broadcast.room.members")}),Xe.map(We=>(0,H.jsxs)("div",{className:"bb-row bb-member",title:We.sessionId,children:[(0,H.jsx)("span",{className:`bb-dot${We.online?" bb-dot-on":" bb-dot-idle"}`}),(0,H.jsx)("code",{className:"bb-mono",children:to(We.sessionId,g)}),(0,H.jsxs)("span",{className:"bb-muted bb-small",children:[We.online?"running":We.status==="idle"?"idle":e("broadcast.room.presence.unknown"),We.lastActiveAt!==null?` \xB7 ${Da(We.lastActiveAt)}`:""]}),(0,H.jsx)("span",{className:"bb-grow"}),!te&&(0,H.jsx)("button",{type:"button",className:"bb-btn bb-btn-mini bb-btn-danger",onClick:()=>{dt(h,We.sessionId)},children:e("broadcast.room.kick")})]},We.sessionId))]}),(0,H.jsxs)("div",{className:"bb-room-msgs",children:[(0,H.jsxs)("div",{className:"bb-section-title",children:[e("broadcast.room.messages"),(0,H.jsx)("span",{className:"bb-count",children:He.length})]}),S(v,We=>{D(We),I(1)},y,We=>{O(We),I(1)}),He.length===0&&(0,H.jsx)("div",{className:"bb-empty bb-empty-sm",children:e("broadcast.room.messages.empty")}),He.length>0&&Je.length===0&&(0,H.jsx)("div",{className:"bb-empty bb-empty-sm",children:e("broadcast.room.messages.empty")}),W.map(We=>gt(We,ze,me)),re(Z,N,I)]})]})]},h.id)}),re(oe,Ue,be)]})]})]})}var Pe=require("react");var E=require("react/jsx-runtime"),Vi={zh:{guide:"\u6307\u5357",library:"\u63D0\u793A\u8BCD\u5E93",guideIntro:"\u63D0\u793A\u8BCD\u6CE8\u5165 = \u300C\u6307\u4EE4\u8303\u5F0F\u8D44\u4EA7\u5E93 + \u4E00\u952E\u6CE8\u5165\u300D\uFF1A\u628A\u5E38\u7528\u5DE5\u4F5C\u8303\u5F0F\uFF08\u4EE3\u7801\u5BA1\u67E5 / \u8C03\u8BD5 / PRD / \u6D4B\u8BD5\u7B49\uFF09\u56FA\u5316\u6210\u63D0\u793A\u8BCD\uFF0C\u9009\u4E2D\u5373\u6CE8\u5165\u2014\u2014\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF0C\u7B49\u4E8E\u7ED9 AI \u4E0B\u53D1\u64CD\u4F5C\u624B\u518C\u3002",guideLibTitle:"\u63D0\u793A\u8BCD\u5E93\uFF1A\u4F60\u7684\u8303\u5F0F\u8D44\u4EA7",guideLibBody:"\u53EF\u590D\u7528\u7684\u6307\u4EE4\u8303\u5F0F\u8D44\u4EA7\uFF0C\u6765\u6E90\u4EE5\u7528\u6237\u81EA\u5199\u4E3A\u4E3B\uFF1A",guideLibItem1:"\u65B0\u5EFA / \u7F16\u8F91 / \u5220\u9664\uFF1A\u540D\u79F0 + \u7B80\u4ECB + \u5206\u7C7B + \u6807\u7B7E + \u6B63\u6587\uFF08Markdown\uFF09\uFF0C\u65B0\u5EFA\u65F6\u5206\u7C7B\u7559\u7A7A\u81EA\u52A8\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF1B",guideLibItem2:"\u5206\u7C7B\u7BA1\u7406\uFF1A\u5185\u7F6E\u5206\u7C7B + \u81EA\u5B9A\u4E49\u6DFB\u52A0 / \u91CD\u547D\u540D / \u5220\u9664\uFF08\u5220\u9664\u65F6\u8BE5\u5206\u7C7B\u4E0B\u63D0\u793A\u8BCD\u81EA\u52A8\u79FB\u5230\u672A\u5206\u7C7B\uFF09\uFF1B",guideLibItem3:"\u641C\u7D22\uFF08\u540D\u79F0 / \u5206\u7C7B / \u6807\u7B7E / \u5185\u5BB9\uFF09+ \u590D\u5236\u5230\u526A\u8D34\u677F + \u4F7F\u7528\u7EDF\u8BA1\uFF1B",guideLibItem4:"\u5185\u7F6E 13 \u6761\u6765\u81EA GitHub \u771F\u5B9E\u63D0\u793A\u8BCD\u8D44\u4EA7\u7684\u51B7\u542F\u52A8\u793A\u4F8B\uFF08SpecRoute / Claude-Code-Promts-Skills\uFF09\uFF0C\u5E76\u9644\u8303\u5F0F\u5E93\u94FE\u63A5\u4F9B\u81EA\u53D6\uFF1B",guideLibItem5:"\u542F\u7528\u72B6\u6001\uFF1A\u7981\u7528\u540E AI \u7684\u63D0\u793A\u8BCD\u5DE5\u5177\uFF08de_prompts\uFF09\u770B\u4E0D\u5230\u3001\u4E5F\u4E0D\u80FD\u6CE8\u5165\u2014\u2014GUI \u4ECD\u53EF\u7F16\u8F91\uFF0C\u968F\u65F6\u53EF\u91CD\u65B0\u542F\u7528\uFF1BAI \u53EF\u67E5\u8BE2\u5217\u8868\uFF08\u6309 ID \u53D6\u8BE6\u60C5\uFF09\u5E76\u9009\u62E9\u5408\u9002\u63D0\u793A\u8BCD\u6CE8\u5165\u5F53\u524D\u4F1A\u8BDD\uFF0C\u6216\u7528\u4F5C\u5B50\u4F1A\u8BDD / \u5B50\u4EE3\u7406 / CLI \u4EFB\u52A1\u63D0\u793A\u8BCD\u3002",guideInjectTitle:"\u6CE8\u5165\u673A\u5236\uFF1A\u6B21\u6570 \xD7 \u95F4\u9694",guideInjectBody:"\u9009\u4E2D\u63D0\u793A\u8BCD\u914D\u7F6E\u300C\u6B21\u6570 \xD7 \u95F4\u9694\u300D\u5373\u6CE8\u5165\uFF08\u6B21\u6570 / \u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\uFF09\uFF1A",guideInjectItem1:"\u6B21\u6570\uFF1A\u4E00\u6B21\u6027\uFF081 \u8F6E\uFF09/ \u6709\u9650 N \u6B21 / \u65E0\u9650\uFF080 = \u6301\u7EED\u6CE8\u5165\u76F4\u5230\u624B\u52A8\u505C\u6B62\uFF09\uFF1B",guideInjectItem2:"\u95F4\u9694\uFF1A\u6BCF\u56DE\u5408\uFF081\uFF09/ \u6BCF M \u56DE\u5408\u51FA\u73B0 1 \u6B21\uFF08\u5982\u300C\u6BCF 3 \u56DE\u5408\u63D0\u9192\u4E00\u6B21\u300D\uFF09\uFF1B",guideInjectItem3:"\u5199\u540E\u5373\u65F6\u6CE8\u5165\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF1A\u5185\u5BB9\u5199\u5165\u6CE8\u5165\u8F68\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u751F\u6210\u65F6\u81EA\u52A8\u770B\u5230\uFF1B",guideInjectItem4:"\u6B63\u6587\u652F\u6301 {{date}} / {{time}} \u53D8\u91CF\uFF0C\u6CE8\u5165\u65F6\u81EA\u52A8\u5C55\u5F00\uFF08\u9002\u5408\u5E26\u65E5\u671F\u7684\u65E5\u62A5\u6A21\u677F\uFF09\uFF1B",guideInjectItem5:"\u4E34\u65F6\u6CE8\u5165\uFF1A\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u6CE8\u5165\u2014\u2014\u8BE6\u60C5\u680F\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u70B9\u300C\u6CE8\u5165\u300D\uFF0C\u81EA\u52A8\u5B58\u5165\u63D0\u793A\u8BCD\u5E93\uFF08\u5206\u7C7B\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09\uFF0C\u4E00\u6B21\u64CD\u4F5C\u540C\u65F6\u5165\u5E93\u5E76\u751F\u6548\u3002",guideTrackTitle:"\u6CE8\u5165\u72B6\u6001\uFF1A\u968F\u65F6\u53EF\u89C1\u3001\u53EF\u505C",guideTrackBody:"\u6BCF\u4E2A\u63D0\u793A\u8BCD\u6709\u660E\u786E\u72B6\u6001\uFF08\u672A\u6CE8\u5165 / \u6CE8\u5165\u4E2D\xB7\u5269 N \u6B21 / \u6301\u7EED\u6CE8\u5165\u4E2D\uFF09\uFF0C\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u300C\u6CE8\u5165\u4E2D\u300D\u6D6E\u5C42\u5B9E\u65F6\u5C55\u793A\uFF1B\u4F1A\u8BDD\u9875 Tab \u680F\u6709\u6D3B\u8DC3\u6CE8\u5165\u65F6\u663E\u793A\u7EA2\u70B9 \u{1F534}\u3002",guideSwitchTitle:"\u5F00\u5173",guideSwitchBody:"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u300D\u5F00\u5173\uFF0C\u5237\u65B0\u540E\u672C Tab \u51FA\u73B0\u3002",search:"\u641C\u7D22\u540D\u79F0\u3001\u5206\u7C7B\u3001\u6807\u7B7E\u6216\u5185\u5BB9\u2026",new:"\u65B0\u5EFA\u63D0\u793A\u8BCD",all:"\u5168\u90E8",uncategorized:"\u672A\u5206\u7C7B",inject:"\u6CE8\u5165",injectRound:"\u6CE8\u5165 {n} \u6B21",injectInfinite:"\u65E0\u9650\u6B21\uFF08\u6301\u7EED\u6CE8\u5165\uFF09",injectCadence:"\u6BCF {n} \u56DE\u5408\u4E00\u6B21",everyTurn:"\u6BCF\u56DE\u5408",injectHint:"\u5199\u5165\u6CE8\u5165\u8F68\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\uFF1B\u6B21\u6570\u6309\u5BF9\u8BDD\u56DE\u5408\u6D88\u8017\uFF08\u53EF\u95F4\u9694\u6CE8\u5165\uFF09\uFF0C\u65E0\u9650\u6B21\u5219\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",injecting:"\u6CE8\u5165\u4E2D",injectingBadge:"\u6CE8\u5165\u4E2D\xB7\u5269{n}\u6B21",injectingBadgeInfinite:"\u6CE8\u5165\u4E2D\xB7\u6301\u7EED",injectingIdle:"\u672A\u6CE8\u5165",noInjection:"\u8FD8\u6CA1\u6709\u6CE8\u5165\u4E2D\u7684\u63D0\u793A\u8BCD",removeInjection:"\u505C\u6B62\u6CE8\u5165",stoppedInjection:"\u5DF2\u505C\u6B62\u6CE8\u5165",copy:"\u590D\u5236",copied:"\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F",save:"\u4FDD\u5B58",saving:"\u4FDD\u5B58\u4E2D\u2026",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",deleteConfirm:"\u786E\u5B9A\u5220\u9664\u300C{name}\u300D\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u5176\u6D3B\u8DC3\u6CE8\u5165\u4F1A\u4E00\u5E76\u79FB\u9664\u3002",sources:"GitHub \u8303\u5F0F\u5E93\u6765\u6E90",sourcesHint:"\u4EE5\u4E0B\u4ED3\u5E93\u6709\u5927\u91CF\u9AD8\u8D28\u91CF\u63D0\u793A\u8BCD/\u89C4\u8303\uFF08\u7528\u6237\u81EA\u53D6\uFF0C\u4E0D\u505A\u81EA\u52A8\u5BFC\u5165\uFF09\uFF1A",empty:"\u8FD8\u6CA1\u6709\u63D0\u793A\u8BCD\u3002\u70B9\u300C\u65B0\u5EFA\u63D0\u793A\u8BCD\u300D\u5F00\u59CB\uFF0C\u6216\u4ECE\u53F3\u4FA7\u6765\u6E90\u94FE\u63A5\u83B7\u53D6\u7075\u611F\u3002",noMatch:"\u6CA1\u6709\u5339\u914D\u7684\u63D0\u793A\u8BCD",formNew:"\u65B0\u5EFA\u63D0\u793A\u8BCD",formEdit:"\u7F16\u8F91\u63D0\u793A\u8BCD",name:"\u540D\u79F0",namePh:"\u5982\uFF1A\u4EE3\u7801\u5BA1\u67E5\uFF08Code Review\uFF09",description:"\u7B80\u4ECB",descriptionPh:"\u4E00\u53E5\u8BDD\u8BF4\u660E\u8FD9\u4E2A\u63D0\u793A\u8BCD\u7684\u7528\u9014\uFF08AI \u9009\u62E9\u63D0\u793A\u8BCD\u65F6\u770B\u8FD9\u91CC\uFF09",enabled:"\u542F\u7528\u72B6\u6001",enabledOn:"\u5DF2\u542F\u7528",enabledOff:"\u5DF2\u7981\u7528",disabledHint:"\u7981\u7528\u540E\u4E0D\u51FA\u73B0\u5728 AI \u7684\u63D0\u793A\u8BCD\u5217\u8868\uFF0C\u4E5F\u4E0D\u80FD\u88AB AI \u6CE8\u5165\uFF1B\u53EF\u5728\u672C\u9875\u91CD\u65B0\u542F\u7528",category:"\u5206\u7C7B",categoryPh:"\u5982\uFF1A\u5F00\u53D1\u6D41\u7A0B\uFF08\u7559\u7A7A\u81EA\u52A8\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09",tags:"\u6807\u7B7E",tagsPh:"\u9017\u53F7\u5206\u9694\uFF0C\u5982\uFF1Areview, \u8D28\u91CF",content:"\u5185\u5BB9",contentPh:`\u5728\u8FD9\u91CC\u7F16\u5199\u63D0\u793A\u8BCD\u6B63\u6587\u2026
\u652F\u6301 {{date}}\u3001{{time}} \u53D8\u91CF\uFF0C\u6CE8\u5165\u65F6\u81EA\u52A8\u5C55\u5F00\u3002`,usage:"\u5DF2\u6CE8\u5165 {n} \u6B21",lastUsed:"\u6700\u8FD1\u6CE8\u5165\uFF1A{time}",neverUsed:"\u4ECE\u672A\u6CE8\u5165\u8FC7",rounds:"\u6B21\u6570",cadence:"\u95F4\u9694",roundsHint:"0=\u65E0\u9650\uFF1B1=\u53EA\u6CE8\u5165\u4E00\u6B21",everyHint:"0=\u53EA\u6CE8\u5165\u4E00\u6B21\uFF1B1=\u6BCF\u56DE\u5408\uFF1BN=\u6BCF N \u56DE\u5408\u4E00\u6B21",onceOnly:"\u53EA\u6CE8\u5165\u4E00\u6B21",effectOnce:"\u4E00\u6B21\u6027\uFF1A\u4E0B\u4E00\u8F6E\u51FA\u73B0\u4E00\u6B21\u540E\u81EA\u52A8\u7ED3\u675F",effectInfinite:"\u65E0\u9650\u6B21\uFF1A\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",effectInfiniteCadence:"\u65E0\u9650\u6B21\uFF1A\u6BCF {n} \u56DE\u5408\u51FA\u73B0\u4E00\u6B21\uFF0C\u6301\u7EED\u5230\u624B\u52A8\u505C\u6B62",effectFinite:"\u5171 {n} \u6B21\uFF1A\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",effectFiniteCadence:"\u5171 {n} \u6B21\uFF1A\u6BCF {m} \u56DE\u5408\u51FA\u73B0\u4E00\u6B21\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",roundsInvalid:"\u6B21\u6570\u5FC5\u987B\u662F \u22650 \u7684\u6574\u6570\uFF080 = \u65E0\u9650\u6B21\uFF09",everyInvalid:"\u95F4\u9694\u5FC5\u987B\u662F \u22650 \u7684\u6574\u6570\uFF080 = \u53EA\u6CE8\u5165\u4E00\u6B21\uFF09",injectOnceBtn:"\u6CE8\u5165\u4E00\u6B21",injectOnceBtnHint:"\u53EA\u6CE8\u5165\u4E00\u6B21\uFF1A\u4E0B\u4E00\u8F6E\u51FA\u73B0\u540E\u81EA\u52A8\u7ED3\u675F",injectInfiniteBtn:"\u6301\u7EED\u6CE8\u5165",injectInfiniteBtnHint:"\u6BCF\u56DE\u5408\u51FA\u73B0\uFF0C\u76F4\u5230\u624B\u52A8\u505C\u6B62",customBtn:"\u81EA\u5B9A\u4E49",customBtnHint:"\u81EA\u7531\u8BBE\u7F6E\u6B21\u6570\u4E0E\u95F4\u9694",injectNowBtn:"\u26A1 \u7ACB\u5373\u6CE8\u5165",injectNowBtnHint:"\u7ACB\u523B\u751F\u6548\u4E00\u6B21\uFF08\u5F53\u524D\u56DE\u5408/\u9A6C\u4E0A\u5524\u9192\uFF09\uFF0C\u53EA\u6CE8\u5165\u4E00\u6B21\uFF0C\u4E0D\u53D7\u6B21\u6570\u4E0E\u95F4\u9694\u5F71\u54CD",injectedNow:"\u5DF2\u7ACB\u5373\u6CE8\u5165\u300C{name}\u300D\uFF1A\u5F53\u524D\u56DE\u5408\u751F\u6548\uFF0C\u4EC5\u6B64\u4E00\u6B21\uFF08\u4E0D\u53D7\u6B21\u6570/\u95F4\u9694\u5F71\u54CD\uFF09",injectedNowFallback:"\u5DF2\u7ACB\u5373\u6CE8\u5165\u300C{name}\u300D\uFF08\u63D2\u8BDD\u672A\u9001\u8FBE\uFF0C\u5C06\u5728\u4E0B\u4E00\u8F6E\u751F\u6548\uFF09",collapseCustom:"\u6536\u8D77",quickTitle:"\u4E34\u65F6\u6CE8\u5165",quickDesc:"\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u6CE8\u5165\uFF1A\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u70B9\u300C\u6CE8\u5165\u4E00\u6B21\u300D\uFF0C\u4F1A\u81EA\u52A8\u5B58\u5165\u63D0\u793A\u8BCD\u5E93\uFF08\u5206\u7C7B\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09\uFF0C\u4E00\u6B21\u64CD\u4F5C\u540C\u65F6\u5165\u5E93\u5E76\u751F\u6548\u3002",quickNamePh:"\u540D\u79F0\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u53D6\u5185\u5BB9\u9996\u884C\uFF09",quickCategoryPh:"\u5206\u7C7B\uFF08\u53EF\u9009\uFF0C\u7559\u7A7A\u5F52\u5165\u300C\u4E34\u65F6\u300D\uFF09",contentRequired:"\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",error:"{message}",loadFailed:"\u52A0\u8F7D\u5931\u8D25\uFF1A{message}",injected:"\u5DF2\u6CE8\u5165\u300C{name}\u300D\uFF1A{rounds}{cadence}\uFF0C\u6A21\u578B\u4E0B\u4E00\u8F6E\u751F\u6548{ending}",injectedOnceEnding:"\uFF0C\u4E4B\u540E\u81EA\u52A8\u7ED3\u675F",injectedFiniteEnding:"\uFF0C\u7528\u5C3D\u81EA\u52A8\u7ED3\u675F",injectedInfiniteEnding:"\uFF0C\u76F4\u5230\u624B\u52A8\u505C\u6B62",injectInfiniteShort:"\u6301\u7EED\u6CE8\u5165",everyTurnParen:"\uFF08\u6BCF\u56DE\u5408\u51FA\u73B0\uFF09",injectCadenceParen:"\uFF08\u6BCF {n} \u56DE\u5408\u51FA\u73B0\uFF09",removed:"\u5DF2\u79FB\u9664\u6CE8\u5165",reload:"\u5237\u65B0",newCategory:"\u65B0\u5206\u7C7B",newCategoryPh:"\u8F93\u5165\u5206\u7C7B\u540D\uFF0C\u56DE\u8F66\u786E\u8BA4",deleteCategory:"\u5220\u9664\u5206\u7C7B",renameCategory:"\u91CD\u547D\u540D\u5206\u7C7B",renamePh:"\u8F93\u5165\u65B0\u5206\u7C7B\u540D\uFF0C\u56DE\u8F66\u786E\u8BA4",categoryRemoved:"\u5DF2\u5220\u9664\u5206\u7C7B\u300C{name}\u300D{moved}",categoryDeleted:"\u5DF2\u5220\u9664\u5206\u7C7B\u300C{name}\u300D",categoryMoved:"\uFF0C{count} \u6761\u63D0\u793A\u8BCD\u5DF2\u79FB\u5230\u672A\u5206\u7C7B",categoryExists:"\u5206\u7C7B\u300C{name}\u300D\u5DF2\u5B58\u5728\uFF0C\u5DF2\u4E3A\u4F60\u9009\u4E2D",categoryRenamed:"\u5DF2\u91CD\u547D\u540D\u300C{from}\u300D\u2192\u300C{to}\u300D{renamed}",categoryRenamedSuffix:"\uFF0C{count} \u6761\u63D0\u793A\u8BCD\u5DF2\u540C\u6B65"},en:{guide:"Guide",library:"Prompt library",guideIntro:'Prompt injection = an "instruction-pattern asset library + one-click injection": turn recurring working paradigms (code review / debugging / PRD / testing\u2026) into prompts, then inject one with a click \u2014 the model sees it next turn without interrupting the reply, like handing the AI an operating manual.',guideLibTitle:"Prompt library: your pattern assets",guideLibBody:"Reusable instruction patterns, mostly user-written:",guideLibItem1:"Create / edit / delete: name + description + category + tags + body (Markdown); a new prompt with an empty category goes to Temp automatically;",guideLibItem2:"Categories: built-in ones plus custom add / rename / delete (prompts in a deleted category move to Uncategorized);",guideLibItem3:"Search (name / category / tags / content) + copy to clipboard + usage stats;",guideLibItem4:"13 cold-start examples from real GitHub prompt assets (SpecRoute / Claude-Code-Promts-Skills) plus links to public pattern libraries;",guideLibItem5:"Enabled state: disabled prompts are hidden from the AI prompt tool (de_prompts) and cannot be injected by AI \u2014 still editable here, re-enable anytime; the AI can list prompts (fetch details by ID) and inject the right one into the current session, or use it as a sub-session / subagent / CLI task prompt.",guideInjectTitle:"Injection mechanics: rounds \xD7 cadence",guideInjectBody:'Pick a prompt, set "rounds \xD7 cadence" and inject (both numbers freely editable):',guideInjectItem1:"Rounds: one-shot (1) / finite N / infinite (0 = keep injecting until stopped);",guideInjectItem2:'Cadence: every turn (1) / once every M turns (e.g. "remind every 3 turns");',guideInjectItem3:"Injected without interrupting: content goes to the injection track and the model sees it next turn;",guideInjectItem4:"The body supports {{date}} / {{time}} variables, expanded at injection time (handy for dated templates);",guideInjectItem5:"Ad-hoc injection: inject without creating a prompt first \u2014 type content in the detail bar and click inject; it is auto-saved to the library (empty category \u2192 Temp) and takes effect in one step.",guideTrackTitle:"Injection status: visible and stoppable",guideTrackBody:'Every prompt has a clear status (idle / injecting\xB7N left / injecting forever) and can be stopped anytime; the "injecting" overlay shows it live; the session tab bar shows a red dot \u{1F534} while any injection is active.',guideSwitchTitle:"Switch",guideSwitchBody:'The prompt manager is off by default: enable "Prompt manager" under Config in the Memory Evolve Settings tab, then refresh to reveal this tab.',search:"Search name, category, tags or content\u2026",new:"New prompt",all:"All",uncategorized:"Uncategorized",inject:"Inject",injectRound:"Inject {n} times",injectInfinite:"Unlimited (until stopped)",injectCadence:"every {n} turns",everyTurn:"every turn",injectHint:"Writes to the injection track \u2014 visible to the model next turn; countdown consumes per conversation turn (interval injection supported); unlimited runs until stopped manually",injecting:"Injecting",injectingBadge:"injecting\xB7{n} left",injectingBadgeInfinite:"injecting\xB7ongoing",injectingIdle:"not injected",noInjection:"Nothing is being injected right now",removeInjection:"Stop",stoppedInjection:"Injection stopped",copy:"Copy",copied:"Copied to clipboard",save:"Save",saving:"Saving\u2026",cancel:"Cancel",delete:"Delete",deleteConfirm:'Delete "{name}"? This cannot be undone and removes its active injections too.',sources:"GitHub prompt sources",sourcesHint:"These repos host high-quality prompts/specs (browse yourself \u2014 no auto import):",empty:'No prompts yet. Click "New prompt" to start, or grab ideas from the source links.',noMatch:"No matching prompts",formNew:"New prompt",formEdit:"Edit prompt",name:"Name",namePh:"e.g. Code Review",description:"Description",descriptionPh:"One line about what this prompt does (AI reads this when picking a prompt)",enabled:"Enabled",enabledOn:"Enabled",enabledOff:"Disabled",disabledHint:"Disabled prompts are hidden from AI lists and cannot be injected by AI; re-enable here anytime",category:"Category",categoryPh:"e.g. workflow (empty = Temp category)",tags:"Tags",tagsPh:"Comma-separated, e.g. review, quality",content:"Content",contentPh:`Write the prompt body here\u2026
{{date}} and {{time}} variables expand on inject.`,usage:"Injected {n} times",lastUsed:"Last injected: {time}",neverUsed:"Never injected",rounds:"Count",cadence:"Cadence",roundsHint:"0=unlimited; 1=once only",everyHint:"0=once only; 1=every turn; N=every N turns",onceOnly:"once only",effectOnce:"Once: appears next turn, then auto-ends",effectInfinite:"Unlimited: every turn, until stopped",effectInfiniteCadence:"Unlimited: once every {n} turns, until stopped",effectFinite:"{n} times: every turn, auto-ends when spent",effectFiniteCadence:"{n} times: once every {m} turns, auto-ends when spent",roundsInvalid:"Count must be an integer \u2265 0 (0 = unlimited)",everyInvalid:"Cadence must be an integer \u2265 0 (0 = once only)",injectOnceBtn:"Inject once",injectOnceBtnHint:"Once only: appears next turn, then auto-ends",injectInfiniteBtn:"Keep injecting",injectInfiniteBtnHint:"Every turn, until stopped",customBtn:"Custom",customBtnHint:"Free-form count and cadence",injectNowBtn:"\u26A1 Inject now",injectNowBtnHint:"Takes effect immediately (this turn / wakes the session), once only \u2014 ignores count and cadence",injectedNow:'Injected "{name}" now: effective this turn, once only (ignores count/cadence)',injectedNowFallback:'Injected "{name}" now (steer not delivered \u2014 will take effect next turn)',collapseCustom:"Collapse",quickTitle:"Quick inject",quickDesc:'Inject without saving a prompt first: type content and hit "Inject once" \u2014 it is auto-saved to the library (empty category goes to Temp) in one step.',quickNamePh:"Name (optional; defaults to first content line)",quickCategoryPh:"Category (optional; empty = Temp)",contentRequired:"Content is required",error:"{message}",loadFailed:"Load failed: {message}",injected:'Injected "{name}": {rounds}{cadence} \u2014 visible next turn{ending}',injectedOnceEnding:", then auto-ends",injectedFiniteEnding:", auto-ends when spent",injectedInfiniteEnding:", until stopped",injectInfiniteShort:"Keep injecting",everyTurnParen:" (every turn)",injectCadenceParen:" (every {n} turns)",removed:"Injection removed",reload:"Reload",newCategory:"New category",newCategoryPh:"Type a category name, Enter to confirm",deleteCategory:"Delete category",renameCategory:"Rename category",renamePh:"Type a new name, Enter to confirm",categoryRemoved:'Category "{name}" deleted{moved}',categoryDeleted:'Category "{name}" deleted',categoryMoved:", {count} prompts moved to Uncategorized",categoryExists:'Category "{name}" already exists \u2014 selected',categoryRenamed:'Renamed "{from}" \u2192 "{to}"{renamed}',categoryRenamedSuffix:", {count} prompts updated"}};function Wi(t,e){return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?e:t}function yt(t){return(t instanceof Error?t.message:String(t))||"unknown error"}function Ki(t){return new Date(t).toLocaleString([],{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}async function pt(t,e){let o=await fetch(t,{headers:{"content-type":"application/json"},...e}),a=await o.json().catch(()=>({}));if(!o.ok)throw new Error(a.error??`HTTP ${o.status}`);return a}function ys(t,e,o){let a=t.trim()===""?0:Number(t),n=e.trim()===""?1:Number(e);if(!Number.isInteger(a)||a<0)throw new Error(o("roundsInvalid"));if(!Number.isInteger(n)||n<0)throw new Error(o("everyInvalid"));return{rounds:a,every:n}}function ws(t){let e=t.roundsText.trim()===""?0:Number(t.roundsText),o=t.everyText.trim()===""?1:Number(t.everyText);if(!Number.isInteger(e)||e<0||!Number.isInteger(o)||o<0)return null;let a=t.say,n;return o===0?n=a("effectOnce"):e===0?n=o===1?a("effectInfinite"):a("effectInfiniteCadence").replace("{n}",String(o)):e===1?n=a("effectOnce"):n=o===1?a("effectFinite").replace("{n}",String(e)):a("effectFiniteCadence").replace("{n}",String(e)).replace("{m}",String(o)),(0,E.jsx)("div",{className:"pm-effect-hint",children:n})}function Oa(t){return(0,E.jsxs)("label",{className:"pm-field pm-num-field",children:[(0,E.jsxs)("span",{className:"pm-field-label",children:[t.label,(0,E.jsx)("span",{className:"pm-field-hint",children:t.hint})]}),(0,E.jsx)("input",{type:"number",className:"pm-input pm-num-input",min:t.min,step:1,value:t.value,onChange:e=>t.onChange(e.target.value)})]})}function ks(t){let e=typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"en":"zh",o=Vi[e],a=c=>o[c],[n,i]=(0,Pe.useState)([]),[d,p]=(0,Pe.useState)([]),[C,w]=(0,Pe.useState)([]),[u,g]=(0,Pe.useState)([]),[k,j]=(0,Pe.useState)("main"),[z,A]=(0,Pe.useState)(""),[U,T]=(0,Pe.useState)("\u5168\u90E8"),[G,v]=(0,Pe.useState)(null),[D,y]=(0,Pe.useState)(!1),[O,Z]=(0,Pe.useState)(!1),[I,m]=(0,Pe.useState)(!1),[l,x]=(0,Pe.useState)(null),[V,P]=(0,Pe.useState)(null),[ne,oe]=(0,Pe.useState)("0"),[be,Me]=(0,Pe.useState)("1"),[Te,Ce]=(0,Pe.useState)(!1),[X,Ve]=(0,Pe.useState)(!1),[Ne,fe]=(0,Pe.useState)(!1),[ce,ze]=(0,Pe.useState)(""),[me,Ze]=(0,Pe.useState)(null),[ot,Fe]=(0,Pe.useState)(""),[Ee,ke]=(0,Pe.useState)(""),[ye,ve]=(0,Pe.useState)(""),[M,F]=(0,Pe.useState)(""),[Se,xe]=(0,Pe.useState)(""),[je,et]=(0,Pe.useState)(""),[He,Je]=(0,Pe.useState)(!0),N=(0,Pe.useRef)(null);(0,Pe.useEffect)(()=>{let c=$=>{N.current===null||N.current.contains($.target)||(Z(!1),m(!1))};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);let W=(0,Pe.useCallback)(c=>{x(yt(c))},[]),ue=(0,Pe.useCallback)(c=>{P(c),window.setTimeout(()=>P(null),4e3)},[]),Ue=(0,Pe.useCallback)(async()=>{try{let[c,$,he]=await Promise.all([pt("/memory-evolve/api/prompts"),pt("/memory-evolve/api/prompts/injections"),pt("/memory-evolve/api/prompts/categories")]);i(c.prompts),p($.injections),g(he.categories)}catch(c){W(a("loadFailed").replace("{message}",yt(c)))}},[W]);(0,Pe.useEffect)(()=>{Ue(),pt("/memory-evolve/api/prompts/sources").then(c=>w(c.sources)).catch(()=>{})},[Ue]);let L=(0,Pe.useMemo)(()=>{let c=n.map($=>$.category).filter($=>$&&$!=="\u672A\u5206\u7C7B");return[...new Set([...u,...c])].sort(($,he)=>$.localeCompare(he,"zh"))},[u,n]),we=(0,Pe.useMemo)(()=>n.filter(c=>c.category==="\u672A\u5206\u7C7B").length,[n]),nt=(0,Pe.useMemo)(()=>{let c=z.trim().toLowerCase();return n.filter($=>U!=="\u5168\u90E8"&&$.category!==U?!1:c?$.name.toLowerCase().includes(c)||$.category.toLowerCase().includes(c)||$.tags.some(he=>he.toLowerCase().includes(c))||$.content.toLowerCase().includes(c):!0)},[n,z,U]),Be=n.find(c=>c.id===G)??null,dt=c=>{let $=n.find(he=>he.id===c);$&&(v(c),y(!1),ke($.name),ve($.description??""),F($.category==="\u672A\u5206\u7C7B"?"":$.category),xe($.tags.join(", ")),et($.content),Je($.enabled!==!1))},pe=()=>{v(null),y(!0),ke(""),ve(""),F(""),xe(""),et(""),Je(!0),x(null)},tt=async()=>{if(X)return;let c={name:Ee,description:ye,category:M,tags:Se.split(/[,，]/).map($=>$.trim()).filter(Boolean),content:je,enabled:He};Ve(!0);try{if(D){let $=await pt("/memory-evolve/api/prompts",{method:"POST",body:JSON.stringify(c)});await Ue(),y(!1),v($.prompt.id)}else G!==null&&(await pt(`/memory-evolve/api/prompts/${encodeURIComponent(G)}`,{method:"PUT",body:JSON.stringify(c)}),await Ue())}catch($){W(yt($))}finally{Ve(!1)}},gt=async()=>{if(G===null)return;let c=a("deleteConfirm").replace("{name}",Be?.name??"");if(window.confirm(c))try{await pt(`/memory-evolve/api/prompts/${encodeURIComponent(G)}`,{method:"DELETE"}),v(null),y(!1),await Ue()}catch($){W(yt($))}},S=async c=>{let $=c.roundsLeft===null?a("injectInfiniteShort"):c.roundsLeft===1?a("onceOnly"):a("injectRound").replace("{n}",String(c.roundsLeft)),he=c.every===0||c.roundsLeft===1?"":(c.every??1)===1?a("everyTurnParen"):a("injectCadenceParen").replace("{n}",String(c.every)),Ae=c.every===0||c.roundsLeft===1?a("injectedOnceEnding"):c.roundsLeft===null?a("injectedInfiniteEnding"):a("injectedFiniteEnding");ue(a("injected").replace("{name}",c.title).replace("{rounds}",$).replace("{cadence}",he).replace("{ending}",Ae)),await Ue(),Z(!0),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))},re=async()=>{if(G===null)return;let c;try{c=ys(ne,be,a)}catch($){W(yt($));return}try{let $=await pt(`/memory-evolve/api/prompts/${encodeURIComponent(G)}/inject`,{method:"POST",body:JSON.stringify(c)});await S($.injection)}catch($){W(yt($))}},at=async(c,$)=>{if(G!==null)try{let he=await pt(`/memory-evolve/api/prompts/${encodeURIComponent(G)}/inject`,{method:"POST",body:JSON.stringify({rounds:c,every:$})});await S(he.injection)}catch(he){W(yt(he))}},R=async c=>{try{let $=await pt(`/memory-evolve/api/prompts/${encodeURIComponent(c)}/inject`,{method:"POST",body:JSON.stringify({immediate:!0,sessionId:t.sessionId})}),he=$.injection.title;ue($.steered?a("injectedNow").replace("{name}",he):a("injectedNowFallback").replace("{name}",he)),await Ue(),Z(!0),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch($){W(yt($))}},h=async(c,$=!1)=>{if(X)return;let he=je.trim();if(!he){W(a("contentRequired"));return}let Ae;if(c!==void 0)Ae=c;else try{Ae=ys(ne,be,a)}catch(ht){W(yt(ht));return}Ve(!0);try{let ht=he.split(`
`).map(Rt=>Rt.trim()).find(Rt=>Rt.length>0)??"",Nt=Ee.trim()||(ht.length>20?`${ht.slice(0,20)}\u2026`:ht)||"\u672A\u547D\u540D\u63D0\u793A\u8BCD",St=await pt("/memory-evolve/api/prompts",{method:"POST",body:JSON.stringify({name:Nt,description:ye,category:M.trim(),tags:Se.split(/[,，]/).map(Rt=>Rt.trim()).filter(Boolean),content:he,enabled:He})}),ba=$?await pt(`/memory-evolve/api/prompts/${encodeURIComponent(St.prompt.id)}/inject`,{method:"POST",body:JSON.stringify({immediate:!0,sessionId:t.sessionId})}):await pt(`/memory-evolve/api/prompts/${encodeURIComponent(St.prompt.id)}/inject`,{method:"POST",body:JSON.stringify(Ae)});if($){let Rt=ba.injection.title;ue(ba.steered?a("injectedNow").replace("{name}",Rt):a("injectedNowFallback").replace("{name}",Rt))}else await S(ba.injection);dt(St.prompt.id)}catch(ht){W(yt(ht))}finally{Ve(!1)}},te=async c=>{try{await pt(`/memory-evolve/api/prompts/injections/${encodeURIComponent(c)}`,{method:"DELETE"}),ue(a("stoppedInjection")),await Ue(),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:badge-change"))}catch($){W(yt($))}},Ie=c=>d.find($=>$.sourcePromptId===c),De=c=>c.every===0?a("onceOnly"):(c.every??1)===1?a("everyTurn"):a("injectCadence").replace("{n}",String(c.every)),Xe=c=>c.roundsLeft===null?a("injectInfinite"):a("injectRound").replace("{n}",String(c.roundsLeft)),wt=async()=>{let c=ce.trim();if(c)try{let $=await pt("/memory-evolve/api/prompts/categories",{method:"POST",body:JSON.stringify({name:c})});g($.categories),T(c),ze(""),fe(!1),$.alreadyExists&&ue(a("categoryExists").replace("{name}",c))}catch($){W(yt($))}},We=async c=>{let $=ot.trim();if(!$||$===c){Ze(null),Fe("");return}try{let he=await pt(`/memory-evolve/api/prompts/categories/${encodeURIComponent(c)}`,{method:"PUT",body:JSON.stringify({name:$})});g(he.categories),U===c&&T($),Ze(null),Fe(""),await Ue();let Ae=he.renamed>0?a("categoryRenamedSuffix").replace("{count}",String(he.renamed)):"";ue(`${a("categoryRenamed").replace("{from}",c).replace("{to}",$).replace("{renamed}","")}${Ae}`)}catch(he){W(yt(he))}},kt=async c=>{let $=n.filter(Ae=>Ae.category===c).length,he=$>0?a("categoryMoved").replace("{count}",String($)):"";if(window.confirm(`${a("deleteCategory")}\u300C${c}\u300D\uFF1F${he}`))try{let Ae=await pt(`/memory-evolve/api/prompts/categories/${encodeURIComponent(c)}`,{method:"DELETE"}),ht=await pt("/memory-evolve/api/prompts/categories");g(ht.categories),U===c&&T("\u5168\u90E8"),await Ue();let Nt=Ae.moved>0?a("categoryMoved").replace("{count}",String(Ae.moved)):"";ue(`${a("categoryDeleted").replace("{name}",c)}${Nt}`)}catch(Ae){W(yt(Ae))}},_=async()=>{let c=Be?.content??"";try{await navigator.clipboard.writeText(c),ue(a("copied"))}catch($){W(yt($))}},Y=c=>{let $=(c.description??"").trim();if($)return $.length>60?`${$.slice(0,60)}\u2026`:$;let he=c.content.split(`
`).map(Ae=>Ae.trim()).find(Ae=>Ae.length>0)??"";return he.length>60?`${he.slice(0,60)}\u2026`:he},se=Be!==null&&(Ee!==Be.name||ye!==(Be.description??"")||(M||"\u672A\u5206\u7C7B")!==Be.category||Se!==Be.tags.join(", ")||je!==Be.content||He!==(Be.enabled!==!1));return(0,E.jsxs)("div",{className:"pm-root",children:[(0,E.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,E.jsx)("button",{type:"button",role:"tab","aria-selected":k==="guide",className:k==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>j("guide"),children:a("guide")}),(0,E.jsx)("button",{type:"button",role:"tab","aria-selected":k==="main",className:k==="main"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>j("main"),children:a("library")})]}),k==="guide"?(0,E.jsx)(ft,{sections:[{icon:"\u{1F4CC}",title:a("guideIntro"),body:""},{icon:"\u{1F4DA}",title:a("guideLibTitle"),body:a("guideLibBody"),items:[a("guideLibItem1"),a("guideLibItem2"),a("guideLibItem3"),a("guideLibItem4"),a("guideLibItem5")]},{icon:"\u{1F489}",title:a("guideInjectTitle"),body:a("guideInjectBody"),items:[a("guideInjectItem1"),a("guideInjectItem2"),a("guideInjectItem3"),a("guideInjectItem4")]},{icon:"\u{1F534}",title:a("guideTrackTitle"),body:a("guideTrackBody")},{icon:"\u2699\uFE0F",title:a("guideSwitchTitle"),body:a("guideSwitchBody")}]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"pm-toolbar",children:[(0,E.jsx)("input",{className:"pm-search",placeholder:a("search"),value:z,onChange:c=>A(c.target.value)}),(0,E.jsx)("select",{className:"pm-select",value:U,onChange:c=>T(c.target.value),title:a("category"),children:u.map(c=>(0,E.jsx)("option",{value:c,children:c},c))}),(0,E.jsxs)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{Z(!O),m(!1)},title:a("injectHint"),children:[a("injecting"),d.length>0?` (${d.length})`:""]}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{m(!I),Z(!1)},children:a("sources")}),(0,E.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:pe,children:a("new")})]}),(l!==null||V!==null)&&(0,E.jsxs)("div",{className:`pm-banner ${l!==null?"pm-banner-error":""}`,children:[l!==null?l:V,l!==null&&(0,E.jsx)("button",{type:"button",className:"pm-banner-close",onClick:()=>x(null),children:"\xD7"})]}),O&&(0,E.jsxs)("div",{className:"pm-overlay",ref:N,children:[(0,E.jsx)("div",{className:"pm-overlay-title",children:a("injecting")}),d.length===0&&(0,E.jsx)("div",{className:"pm-overlay-empty",children:a("noInjection")}),d.map(c=>(0,E.jsxs)("div",{className:"pm-overlay-item",children:[(0,E.jsxs)("div",{className:"pm-overlay-item-main",children:[(0,E.jsxs)("div",{className:"pm-overlay-item-title",children:["\u300C",c.title,"\u300D"]}),(0,E.jsxs)("div",{className:"pm-overlay-item-sub",children:[Xe(c)," \xB7 ",De(c)]})]}),(0,E.jsx)("button",{type:"button",className:"pm-danger-btn pm-overlay-remove",onClick:()=>{te(c.id)},children:a("removeInjection")})]},c.id))]}),I&&(0,E.jsxs)("div",{className:"pm-overlay pm-overlay-wide",ref:N,children:[(0,E.jsx)("div",{className:"pm-overlay-title",children:a("sources")}),(0,E.jsx)("div",{className:"pm-overlay-sub",children:a("sourcesHint")}),C.map(c=>(0,E.jsxs)("div",{className:"pm-source-item",children:[(0,E.jsx)("a",{className:"pm-source-link",href:c.url,target:"_blank",rel:"noreferrer",children:c.name}),(0,E.jsx)("div",{className:"pm-source-desc",children:c.desc})]},c.url))]}),(0,E.jsxs)("div",{className:"pm-body",children:[(0,E.jsxs)("div",{className:"pm-pane-cats",children:[(0,E.jsxs)("button",{type:"button",className:`pm-cat ${U==="\u5168\u90E8"?"pm-cat-active":""}`,onClick:()=>T("\u5168\u90E8"),children:[(0,E.jsx)("span",{className:"pm-cat-name",children:a("all")}),(0,E.jsx)("span",{className:"pm-cat-count",children:n.length})]}),L.map(c=>{let $=n.filter(he=>he.category===c).length;return me===c?(0,E.jsxs)("div",{className:"pm-cat-row",children:[(0,E.jsx)("input",{className:"pm-cat-add-input",autoFocus:!0,placeholder:a("renamePh"),value:ot,onChange:he=>Fe(he.target.value),onKeyDown:he=>{he.key==="Enter"&&We(c),he.key==="Escape"&&(Ze(null),Fe(""))}}),(0,E.jsx)("button",{type:"button",className:"pm-cat-add-ok",onClick:()=>{We(c)},children:"\u2713"})]},c):(0,E.jsxs)("div",{className:"pm-cat-row",children:[(0,E.jsxs)("button",{type:"button",className:`pm-cat ${U===c?"pm-cat-active":""}`,onClick:()=>T(c),children:[(0,E.jsx)("span",{className:"pm-cat-name",children:c}),(0,E.jsx)("span",{className:"pm-cat-count",children:$})]}),(0,E.jsx)("button",{type:"button",className:"pm-cat-del",title:a("renameCategory"),onClick:()=>{Ze(c),Fe(c)},children:"\u270E"}),(0,E.jsx)("button",{type:"button",className:"pm-cat-del",title:a("deleteCategory"),onClick:()=>{kt(c)},children:"\xD7"})]},c)}),we>0&&(0,E.jsxs)("button",{type:"button",className:`pm-cat ${U==="\u672A\u5206\u7C7B"?"pm-cat-active":""}`,onClick:()=>T("\u672A\u5206\u7C7B"),children:[(0,E.jsx)("span",{className:"pm-cat-name",children:a("uncategorized")}),(0,E.jsx)("span",{className:"pm-cat-count",children:we})]}),Ne?(0,E.jsxs)("div",{className:"pm-cat-add",children:[(0,E.jsx)("input",{className:"pm-cat-add-input",autoFocus:!0,placeholder:a("newCategoryPh"),value:ce,onChange:c=>ze(c.target.value),onKeyDown:c=>{c.key==="Enter"&&wt(),c.key==="Escape"&&(fe(!1),ze(""))}}),(0,E.jsx)("button",{type:"button",className:"pm-cat-add-ok",onClick:()=>{wt()},children:"\u2713"})]}):(0,E.jsxs)("button",{type:"button",className:"pm-cat-add-btn",onClick:()=>fe(!0),children:["\uFF0B ",a("newCategory")]})]}),(0,E.jsxs)("div",{className:"pm-pane-list",children:[n.length===0&&(0,E.jsx)("div",{className:"pm-pane-empty",children:a("empty")}),n.length>0&&nt.length===0&&(0,E.jsx)("div",{className:"pm-pane-empty",children:a("noMatch")}),nt.map(c=>{let $=Ie(c.id);return(0,E.jsxs)("button",{type:"button",className:`pm-item ${G===c.id&&!D?"pm-item-active":""} ${c.enabled===!1?"pm-item-disabled":""}`,onClick:()=>dt(c.id),children:[(0,E.jsxs)("div",{className:"pm-item-row1",children:[(0,E.jsx)("span",{className:"pm-item-name",children:c.name}),(0,E.jsx)("span",{className:"pm-item-badge",children:c.category}),c.enabled===!1&&(0,E.jsx)("span",{className:"pm-item-badge pm-item-badge-off",title:a("disabledHint"),children:a("enabledOff")}),$!==void 0&&(0,E.jsx)("span",{className:"pm-item-badge pm-item-badge-active",title:a("injectHint"),children:$.roundsLeft===null?a("injectingBadgeInfinite"):a("injectingBadge").replace("{n}",String($.roundsLeft))})]}),(0,E.jsx)("div",{className:"pm-item-summary",children:Y(c)}),(0,E.jsxs)("div",{className:"pm-item-row3",children:[(0,E.jsx)("span",{className:"pm-item-usage",children:a("usage").replace("{n}",String(c.usageCount??0))}),(0,E.jsx)("span",{className:"pm-item-used",children:c.lastUsedAt!==null?a("lastUsed").replace("{time}",Ki(c.lastUsedAt)):a("neverUsed")})]})]},c.id)})]}),(0,E.jsxs)("div",{className:"pm-pane-detail",children:[Be===null&&!D&&(0,E.jsxs)("div",{className:"pm-form",children:[(0,E.jsx)("div",{className:"pm-form-title",children:a("quickTitle")}),(0,E.jsx)("div",{className:"pm-quick-sub",children:a("quickDesc")}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("name")}),(0,E.jsx)("input",{className:"pm-input",placeholder:a("quickNamePh"),value:Ee,onChange:c=>ke(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("description")}),(0,E.jsx)("input",{className:"pm-input",placeholder:a("descriptionPh"),value:ye,onChange:c=>ve(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field pm-field-grow",children:[(0,E.jsxs)("span",{className:"pm-field-label",children:[a("content")," *"]}),(0,E.jsx)("textarea",{className:"pm-textarea",placeholder:a("contentPh"),value:je,onChange:c=>et(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("category")}),(0,E.jsx)("input",{className:"pm-input",list:"pm-category-list",placeholder:a("quickCategoryPh"),value:M,onChange:c=>F(c.target.value)}),(0,E.jsx)("datalist",{id:"pm-category-list",children:L.map(c=>(0,E.jsx)("option",{value:c},c))})]}),(0,E.jsxs)("div",{className:"pm-actions",children:[(0,E.jsx)("button",{type:"button",className:"pm-primary-btn",title:a("injectOnceBtnHint"),onClick:()=>{h({rounds:1,every:0})},disabled:X,children:a(X?"saving":"injectOnceBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("injectInfiniteBtnHint"),onClick:()=>{h({rounds:0,every:1})},disabled:X,children:a("injectInfiniteBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("injectNowBtnHint"),onClick:()=>{h(void 0,!0)},disabled:X,children:a("injectNowBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("customBtnHint"),onClick:()=>Ce(!Te),children:a("customBtn")})]}),Te&&(0,E.jsxs)("div",{className:"pm-custom-zone",children:[(0,E.jsxs)("div",{className:"pm-num-row",children:[(0,E.jsx)(Oa,{label:a("rounds"),hint:a("roundsHint"),value:ne,min:0,onChange:oe}),(0,E.jsx)(Oa,{label:a("cadence"),hint:a("everyHint"),value:be,min:0,onChange:Me})]}),(0,E.jsx)(ws,{roundsText:ne,everyText:be,say:a}),(0,E.jsxs)("div",{className:"pm-actions",children:[(0,E.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:()=>{h()},disabled:X,children:a(X?"saving":"inject")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>Ce(!1),children:a("collapseCustom")})]})]})]}),(Be!==null||D)&&(0,E.jsxs)("div",{className:"pm-form",children:[(0,E.jsx)("div",{className:"pm-form-title",children:a(D?"formNew":"formEdit")}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsxs)("span",{className:"pm-field-label",children:[a("name")," *"]}),(0,E.jsx)("input",{className:"pm-input",placeholder:a("namePh"),value:Ee,onChange:c=>ke(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("description")}),(0,E.jsx)("input",{className:"pm-input",placeholder:a("descriptionPh"),value:ye,onChange:c=>ve(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("category")}),(0,E.jsx)("input",{className:"pm-input",list:"pm-category-list",placeholder:a("categoryPh"),value:M,onChange:c=>F(c.target.value)}),(0,E.jsx)("datalist",{id:"pm-category-list",children:L.map(c=>(0,E.jsx)("option",{value:c},c))})]}),(0,E.jsxs)("label",{className:"pm-field",children:[(0,E.jsx)("span",{className:"pm-field-label",children:a("tags")}),(0,E.jsx)("input",{className:"pm-input",placeholder:a("tagsPh"),value:Se,onChange:c=>xe(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field pm-field-grow",children:[(0,E.jsxs)("span",{className:"pm-field-label",children:[a("content")," *"]}),(0,E.jsx)("textarea",{className:"pm-textarea",placeholder:a("contentPh"),value:je,onChange:c=>et(c.target.value)})]}),(0,E.jsxs)("label",{className:"pm-field pm-enable-row",children:[(0,E.jsxs)("span",{className:"pm-field-label",children:[a("enabled"),(0,E.jsx)("span",{className:"pm-field-hint",children:a("disabledHint")})]}),(0,E.jsx)("button",{type:"button",role:"switch","aria-checked":He,className:`pm-toggle ${He?"pm-toggle-on":""}`,onClick:()=>Je(!He),children:a(He?"enabledOn":"enabledOff")})]}),(0,E.jsxs)("div",{className:"pm-actions",children:[!D&&(()=>{let c=Be!==null?Ie(Be.id):void 0;return c!==void 0?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("span",{className:"pm-inject-status",children:[c.roundsLeft===null?a("injectingBadgeInfinite"):a("injectingBadge").replace("{n}",String(c.roundsLeft))," ","\xB7 ",De(c)]}),(0,E.jsx)("button",{type:"button",className:"pm-danger-btn",onClick:()=>{te(c.id)},children:a("removeInjection")})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("button",{type:"button",className:"pm-primary-btn",title:a("injectOnceBtnHint"),onClick:()=>{at(1,0)},children:a("injectOnceBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("injectInfiniteBtnHint"),onClick:()=>{at(0,1)},children:a("injectInfiniteBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("injectNowBtnHint"),onClick:()=>{R(Be.id)},children:a("injectNowBtn")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",title:a("customBtnHint"),onClick:()=>Ce(!Te),children:a("customBtn")}),Te&&(0,E.jsxs)("div",{className:"pm-custom-zone pm-custom-zone-inline",children:[(0,E.jsxs)("div",{className:"pm-inject-group",children:[(0,E.jsx)(Oa,{label:a("rounds"),hint:a("roundsHint"),value:ne,min:0,onChange:oe}),(0,E.jsx)(Oa,{label:a("cadence"),hint:a("everyHint"),value:be,min:0,onChange:Me}),(0,E.jsx)("button",{type:"button",className:"pm-primary-btn",onClick:()=>{re()},children:a("inject")}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>Ce(!1),children:a("collapseCustom")})]}),(0,E.jsx)(ws,{roundsText:ne,everyText:be,say:a})]}),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{_()},children:a("copy")})]})})(),(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{tt()},disabled:X,children:a(X?"saving":"save")}),!D&&(0,E.jsx)("button",{type:"button",className:"pm-danger-btn",onClick:()=>{gt()},children:a("delete")}),D&&(0,E.jsx)("button",{type:"button",className:"pm-tool-btn",onClick:()=>{y(!1),v(null)},children:a("cancel")})]}),!D&&Be!==null&&se&&(0,E.jsx)("div",{className:"pm-dirty-hint",children:Wi("\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539","Unsaved changes")})]})]})]})]})]})}var Tt=require("react");var Qe=require("react/jsx-runtime"),xs=null;async function ao(t,e){let o=await fetch(`/memory-evolve/api/bookmarks${t}`,{headers:{"content-type":"application/json"},...e}),a=await o.json().catch(()=>({}));if(!o.ok)throw new Error(a.error??`HTTP ${o.status}`);return a}function Gi(t){let e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleString()}function Ji(){let t=document.querySelectorAll('[role="tab"]');for(let o of t){let a=(o.textContent??"").trim();if(a==="\u5BF9\u8BDD"||a==="Chat"||a.startsWith("\u5BF9\u8BDD")||a.startsWith("Chat"))return o.click(),!0}let e=t[0];return e!==void 0?(e.click(),!0):!1}function Xi(){let o=(document.querySelector("[data-chat-flow]")?.parentElement??document).querySelectorAll("button");for(let a of o){if(a.disabled)continue;let n=(a.textContent??"").trim();if(n.includes("\u66F4\u65E9")||n.includes("older")||n.includes("Older")||n.includes("Load earlier")||n.includes("\u52A0\u8F7D\u5386\u53F2"))return a.click(),!0}return!1}function Ts(t,e=2500){let o=document.querySelector(`[data-chat-anchor-key="${t}"]`);return o!==null?Promise.resolve(o):new Promise(a=>{let n=Date.now(),i=window.setInterval(()=>{let d=document.querySelector(`[data-chat-anchor-key="${t}"]`);if(d!==null){window.clearInterval(i),a(d);return}Date.now()-n>=e&&(window.clearInterval(i),a(null))},80)})}function Yi(t){return t.anchorKey!==null&&t.anchorKey!==""?t.anchorKey:`node:${t.seq}`}async function Qi(t){let e=Yi(t);if(!Ji())return"no-chat";await new Promise(n=>window.setTimeout(n,120));let a=await Ts(e,800);if(a!==null)return a.scrollIntoView({behavior:"smooth",block:"center"}),Ns(a),"ok";for(let n=0;n<12&&Xi();n+=1)if(a=await Ts(e,3e3),a!==null)return a.scrollIntoView({behavior:"smooth",block:"center"}),Ns(a),"ok";return"not-found"}function Ns(t){let e=t.style.outline;t.style.outline="2px solid var(--dsw-static-yellow-9, #f5a623)",t.style.outlineOffset="4px",window.setTimeout(()=>{t.style.outline=e,t.style.outlineOffset=""},1600)}function Ss(t){let{t:e,sessionId:o}=t,[a,n]=(0,Tt.useState)(xs??"list"),[i,d]=(0,Tt.useState)(null),[p,C]=(0,Tt.useState)(""),[w,u]=(0,Tt.useState)(null),[g,k]=(0,Tt.useState)(!1);(0,Tt.useEffect)(()=>{xs=a},[a]);let j=(0,Tt.useCallback)(()=>{if(!o){d([]);return}ao(`?sessionId=${encodeURIComponent(o)}`).then(y=>d(y.bookmarks??[])).catch(y=>{u({kind:"error",text:e("bookmark.error",{message:y.message})}),d([])})},[o,e]);(0,Tt.useEffect)(()=>{j()},[j]),(0,Tt.useEffect)(()=>{let y=()=>j();return window.addEventListener("dsh-memory-evolve:bookmarks-change",y),()=>window.removeEventListener("dsh-memory-evolve:bookmarks-change",y)},[j]);let z=y=>{k(!0),u({kind:"info",text:e("bookmark.jumping")}),Qi(y).then(O=>{u(O==="ok"?{kind:"ok",text:e("bookmark.jump.ok",{label:y.label})}:O==="no-chat"?{kind:"error",text:e("bookmark.jump.noChat")}:{kind:"error",text:e("bookmark.jump.notFound",{label:y.label})})}).finally(()=>k(!1))},A=y=>{let O=window.prompt(e("bookmark.prompt.rename"),y.label);if(O===null)return;let Z=O.trim();Z!==""&&(k(!0),ao("",{method:"PATCH",body:JSON.stringify({sessionId:o,id:y.id,label:Z})}).then(()=>{j(),u({kind:"ok",text:e("bookmark.renamed")})}).catch(I=>{u({kind:"error",text:e("bookmark.error",{message:I.message})})}).finally(()=>k(!1)))},U=y=>{window.confirm(e("bookmark.confirm.delete",{label:y.label}))&&(k(!0),ao("",{method:"DELETE",body:JSON.stringify({sessionId:o,id:y.id})}).then(()=>{j(),u({kind:"ok",text:e("bookmark.deleted")})}).catch(O=>{u({kind:"error",text:e("bookmark.error",{message:O.message})})}).finally(()=>k(!1)))},T=y=>{window.confirm(e("bookmark.fork.confirm",{n:String(y.turn??y.seq)}))&&(k(!0),u({kind:"info",text:e("bookmark.fork.working")}),fetch("/memory-evolve/api/bookmarks/fork",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({sessionId:y.sessionId,seq:y.seq,anchorKey:y.anchorKey??void 0})}).then(O=>O.json().catch(()=>({}))).then(O=>{typeof O.sessionId=="string"?u({kind:"ok",text:e("bookmark.fork.ok",{id:O.sessionId})}):u({kind:"error",text:e("bookmark.error",{message:O.error??"HTTP error"})})}).catch(O=>{u({kind:"error",text:e("bookmark.error",{message:O.message})})}).finally(()=>k(!1)))},G=p.trim().toLowerCase(),v=i===null?null:G===""?i:i.filter(y=>y.label.toLowerCase().includes(G)||y.summary.toLowerCase().includes(G)),D=[{icon:"\u2B50",title:e("bookmark.guide.what.title"),body:e("bookmark.guide.what.body")},{icon:"\u{1F4CD}",title:e("bookmark.guide.star.title"),body:e("bookmark.guide.star.body")},{icon:"\u{1F4DC}",title:e("bookmark.guide.list.title"),body:e("bookmark.guide.list.body")},{icon:"\u2699\uFE0F",title:e("bookmark.guide.switch.title"),body:e("bookmark.guide.switch.body")}];return(0,Qe.jsxs)("div",{className:"bm-panel",children:[(0,Qe.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,Qe.jsx)("button",{type:"button",role:"tab","aria-selected":a==="list",className:a==="list"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("list"),children:e("bookmark.tab.list")}),(0,Qe.jsx)("button",{type:"button",role:"tab","aria-selected":a==="guide",className:a==="guide"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>n("guide"),children:e("bookmark.tab.guide")})]}),a==="guide"&&(0,Qe.jsx)(ft,{sections:D}),a==="list"&&(0,Qe.jsxs)(Qe.Fragment,{children:[(0,Qe.jsxs)("div",{className:"bm-toolbar",children:[(0,Qe.jsx)("h3",{children:e("bookmark.list.title")}),(0,Qe.jsx)("button",{type:"button",className:"bm-toolbar-btn",disabled:g,onClick:()=>j(),children:e("bookmark.refresh")})]}),(0,Qe.jsx)("p",{className:"bm-help",children:e("bookmark.list.help")}),(0,Qe.jsx)("input",{type:"search",className:"bm-search",placeholder:e("bookmark.search.placeholder"),value:p,onChange:y=>C(y.target.value),"aria-label":e("bookmark.search.placeholder")}),w!==null&&(0,Qe.jsx)("div",{className:`bm-notice bm-notice-${w.kind}`,children:w.text}),(0,Qe.jsxs)("div",{className:"bm-list",children:[v===null&&(0,Qe.jsx)("div",{className:"bm-empty",children:e("bookmark.loading")}),v!==null&&v.length===0&&(0,Qe.jsx)("div",{className:"bm-empty",children:e(G===""?"bookmark.empty":"bookmark.search.empty")}),v!==null&&v.map(y=>(0,Qe.jsxs)("div",{className:"bm-item",role:"article",onClick:()=>{g||z(y)},onKeyDown:O=>{!g&&(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),z(y))},tabIndex:0,title:e("bookmark.jump.hint"),children:[(0,Qe.jsxs)("div",{className:"bm-item-head",children:[(0,Qe.jsxs)("span",{className:"bm-item-label",children:["\u2605 ",y.label]}),(0,Qe.jsxs)("span",{className:"bm-item-meta",children:[y.turn!==null?e("bookmark.turn",{n:String(y.turn)}):`seq ${y.seq}`," \xB7 ",Gi(y.createdAt)]})]}),y.summary!==""&&(0,Qe.jsx)("div",{className:"bm-item-summary",children:y.summary}),(0,Qe.jsxs)("div",{className:"bm-item-actions",onClick:O=>O.stopPropagation(),onKeyDown:O=>O.stopPropagation(),children:[(0,Qe.jsx)("button",{type:"button",disabled:g,onClick:()=>z(y),children:e("bookmark.action.jump")}),(0,Qe.jsx)("button",{type:"button",disabled:g,onClick:()=>T(y),children:e("bookmark.action.fork")}),(0,Qe.jsx)("button",{type:"button",disabled:g,onClick:()=>A(y),children:e("bookmark.action.rename")}),(0,Qe.jsx)("button",{type:"button",className:"bm-danger",disabled:g,onClick:()=>U(y),children:e("bookmark.action.delete")})]})]},y.id))]})]})]})}var bt=require("react"),q=require("react/jsx-runtime"),Zi="/memory-evolve/memory-sync",za={memory:"memory-global",user:"user-global",daily:"daily-global",todo:"todo-global"},er={memory:"syncTab.global.trackMemory",user:"syncTab.global.trackUser",daily:"syncTab.global.trackDaily",todo:"syncTab.global.trackTodo"};async function mt(t,e){let o=await fetch(`${Zi}${t}`,{headers:{"content-type":"application/json"},...e});if(!o.ok){let a=await o.json().catch(()=>({}));throw new Error(a.error??`HTTP ${o.status}`)}return o.json()}function ma(t,e=60){if(t===null)return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("en")?"(none)":"\uFF08\u65E0\uFF09";let o=t.replace(/\s+/g," ");return o.length>e?`${o.slice(0,e)}\u2026`:o}function Cs(t){let{t:e,sessionId:o}=t,[a,n]=(0,bt.useState)(null),[i,d]=(0,bt.useState)([]),[p,C]=(0,bt.useState)({}),[w,u]=(0,bt.useState)(!1),[g,k]=(0,bt.useState)(null),[j,z]=(0,bt.useState)(!1),[A,U]=(0,bt.useState)("project"),[T,G]=(0,bt.useState)(""),v=(0,bt.useRef)(!1),[D,y]=(0,bt.useState)(!1),O=(0,bt.useCallback)(async()=>{try{let[m,l]=await Promise.all([mt(`/status?sessionId=${encodeURIComponent(o)}`),mt(`/conflicts?sessionId=${encodeURIComponent(o)}`)]),x="status"in m&&m.status!==void 0?m.status:m;n(x),v.current||G(x.global?.url??""),y(x.global?.enabled===!0),d(l.conflicts??[]);let V={},P=x.global?.conflicts??{},ne=Object.keys(P).filter(oe=>(P[oe]??0)>0);await Promise.all(ne.map(async oe=>{let be=za[oe];if(!be)return;let Me=await mt(`/conflicts?sessionId=${encodeURIComponent(o)}&fileset=${encodeURIComponent(be)}`);V[oe]=Me.conflicts??[]})),C(V)}catch(m){k({kind:"error",text:e("syncTab.loadFailed",{message:m.message})})}finally{z(!0)}},[o,e]);(0,bt.useEffect)(()=>{v.current=!1,G("")},[o]),(0,bt.useEffect)(()=>{O()},[O]);let Z=async m=>{if(!w){u(!0),k(null);try{let x=await m();k({kind:x.ok===!1?"error":"ok",text:x.text??"ok"})}catch(l){k({kind:"error",text:l.message})}finally{u(!1),O()}}},I=async m=>{if(m==="off")return await mt("/off",{method:"POST",body:JSON.stringify({sessionId:o})});if(m==="shared"){if(a?.global?.enabled!==!0||a?.global?.initialized!==!0)return U("remote"),{ok:!1,text:e("syncTab.project.mode.shared.needRemote")};let x=a.global.url;return await mt("/setup",{method:"POST",body:JSON.stringify({sessionId:o,url:x})})}return await mt("/setup",{method:"POST",body:JSON.stringify({sessionId:o})})};return(0,q.jsx)("div",{className:"mt-panel",children:j?(0,q.jsxs)(q.Fragment,{children:[g!==null&&(0,q.jsx)("div",{className:g.kind==="ok"?"me-notice-ok":"me-notice-error",children:g.text}),(0,q.jsxs)("div",{className:"mt-file-tabs",role:"tablist",children:[(0,q.jsx)("button",{type:"button",role:"tab","aria-selected":A==="project",className:A==="project"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>U("project"),children:e("syncTab.tab.project")}),(0,q.jsx)("button",{type:"button",role:"tab","aria-selected":A==="global",className:A==="global"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>U("global"),children:e("syncTab.tab.global")}),(0,q.jsx)("button",{type:"button",role:"tab","aria-selected":A==="remote",className:A==="remote"?"mt-file-tab mt-file-tab-active":"mt-file-tab",onClick:()=>U("remote"),children:e("syncTab.tab.remote")})]}),A==="project"&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("div",{className:"sv-section",children:[(0,q.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.project")}),(0,q.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,q.jsxs)("label",{className:`sv-radio-row${a?.projectEnabled!==!0?" sv-radio-active":""}`,children:[(0,q.jsx)("input",{type:"radio",name:"sync-project-mode",checked:a?.projectEnabled!==!0,onChange:()=>{Z(()=>I("off"))}}),(0,q.jsxs)("span",{style:{flex:1},children:[(0,q.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.off")}),(0,q.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.off.desc")})]})]}),(0,q.jsxs)("label",{className:`sv-radio-row${a?.projectEnabled===!0&&a?.remoteKind==="main-repo"?" sv-radio-active":""}`,children:[(0,q.jsx)("input",{type:"radio",name:"sync-project-mode",checked:a?.projectEnabled===!0&&a?.remoteKind==="main-repo",onChange:()=>{Z(()=>I("main"))}}),(0,q.jsxs)("span",{style:{flex:1},children:[(0,q.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.main")}),(0,q.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.main.desc")})]})]}),(0,q.jsxs)("label",{className:`sv-radio-row${a?.projectEnabled===!0&&a?.remoteKind==="shared-repo"?" sv-radio-active":""}`,children:[(0,q.jsx)("input",{type:"radio",name:"sync-project-mode",checked:a?.projectEnabled===!0&&a?.remoteKind==="shared-repo",onChange:()=>{Z(()=>I("shared"))}}),(0,q.jsxs)("span",{style:{flex:1},children:[(0,q.jsx)("span",{className:"sv-radio-label",children:e("syncTab.project.mode.shared")}),(0,q.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.project.mode.shared.desc")})]})]})]}),a?.projectEnabled===!0&&a?.initialized===!0&&(0,q.jsxs)("div",{className:"sv-status",style:{marginTop:"10px"},children:[(0,q.jsxs)("p",{children:[(0,q.jsx)("strong",{children:e("syncTab.status.remoteKind",{kind:a?.remoteKind==="main-repo"?e("syncTab.status.remoteKindMain"):a?.remoteKind==="shared-repo"?e("syncTab.status.remoteKindShared"):e("syncTab.status.remoteKindNone")})}),(0,q.jsx)("br",{}),(0,q.jsx)("span",{className:"sv-status-url",children:a?.originUrl||e("syncTab.status.remoteKindNone")})]}),(0,q.jsxs)("p",{children:[e("syncTab.status.branch",{branch:a?.remoteBranch??"?"}),(0,q.jsx)("br",{}),e("syncTab.status.counts",{pending:String((a?.uncommitted??0)+(a?.ahead??0)),behind:String(a?.behind??0),conflicts:String(a?.conflicts??0)})]}),a?.migrateFrom!=null&&(0,q.jsx)("p",{children:e("syncTab.status.migrate",{dir:a.migrateFrom})})]}),a?.projectEnabled===!0&&a?.initialized===!0&&(0,q.jsxs)("div",{className:"sv-actions",children:[(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:w,onClick:()=>{Z(()=>mt("/sync",{method:"POST",body:JSON.stringify({sessionId:o})}))},children:e("syncTab.actions.sync")}),(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:w,onClick:()=>{Z(()=>mt("/sync",{method:"POST",body:JSON.stringify({sessionId:o,push:!0})}))},children:e("syncTab.actions.push")})]}),a?.enabled===!0&&a?.projectEnabled===!0&&a?.initialized!==!0&&(0,q.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.status.notInit")})]}),a?.enabled===!0&&i.length>0&&(0,q.jsxs)("div",{className:"sv-section",children:[(0,q.jsx)("div",{className:"sv-section-title",children:e("syncTab.conflicts.title",{count:i.length})}),i.map(m=>(0,q.jsxs)("div",{className:"bb-session-line",children:[(0,q.jsxs)("div",{children:[(0,q.jsxs)("strong",{children:["#",m.index," ",m.entryKey]}),"\uFF08",m.file,"\uFF09\xB7 ",m.reason,(0,q.jsx)("br",{}),(0,q.jsxs)("span",{className:"bb-meta",children:[e("syncTab.conflicts.base"),"\uFF1A",ma(m.base),(0,q.jsx)("br",{}),e("syncTab.conflicts.ours"),"\uFF1A",ma(m.ours),(0,q.jsx)("br",{}),e("syncTab.conflicts.theirs"),"\uFF1A",ma(m.theirs)]})]}),(0,q.jsxs)("div",{className:"bb-actions",children:[(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:m.index,choice:"ours"})}))},children:e("syncTab.conflicts.oursBtn")}),(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:m.index,choice:"theirs"})}))},children:e("syncTab.conflicts.theirsBtn")}),(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:m.index,choice:"both"})}))},children:e("syncTab.conflicts.bothBtn")})]})]},m.index))]})]}),A==="global"&&(0,q.jsxs)("div",{className:"sv-section",children:[(0,q.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.global")}),a?.global?.enabled===!0&&a?.global?.initialized===!0?(0,q.jsxs)(q.Fragment,{children:[[["memory","syncTab.global.trackMemory"],["user","syncTab.global.trackUser"],["daily","syncTab.global.trackDaily"],["todo","syncTab.global.trackTodo"]].map(([m,l])=>(0,q.jsxs)("label",{className:"me-field",children:[(0,q.jsx)("span",{className:"me-field-label",children:e(l)}),(0,q.jsx)("input",{type:"checkbox",className:"me-switch",checked:a.global?.tracks?.[m]===!0,onChange:x=>{let V=x.target.checked;Z(()=>mt("/global-track",{method:"POST",body:JSON.stringify({sessionId:o,track:m,on:V})}))}})]},m)),(0,q.jsxs)("p",{className:"bb-meta",children:[e("syncTab.global.uncommitted",{n:String((a.global.uncommitted??0)+(a.global.ahead??0))}),(0,q.jsx)("br",{}),e("syncTab.global.hint")]}),(0,q.jsxs)("div",{className:"sv-actions",children:[(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:w,onClick:()=>{Z(()=>mt("/global-sync",{method:"POST",body:JSON.stringify({sessionId:o})}))},children:e("syncTab.global.sync")}),(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-ok",disabled:w,onClick:()=>{Z(()=>mt("/global-sync",{method:"POST",body:JSON.stringify({sessionId:o,push:!0})}))},children:e("syncTab.global.push")})]}),Object.entries(p).map(([m,l])=>l.length>0?(0,q.jsxs)("div",{className:"sv-section",children:[(0,q.jsx)("div",{className:"sv-section-title",children:e("syncTab.conflicts.titleGlobal",{track:e(er[m]??"syncTab.global.title"),count:String(l.length)})}),l.map(x=>(0,q.jsxs)("div",{className:"bb-session-line",children:[(0,q.jsxs)("div",{children:[(0,q.jsxs)("strong",{children:["#",x.index," ",x.entryKey]}),"\uFF08",x.file,"\uFF09\xB7 ",x.reason,(0,q.jsx)("br",{}),(0,q.jsxs)("span",{className:"bb-meta",children:[e("syncTab.conflicts.base"),"\uFF1A",ma(x.base),(0,q.jsx)("br",{}),e("syncTab.conflicts.ours"),"\uFF1A",ma(x.ours),(0,q.jsx)("br",{}),e("syncTab.conflicts.theirs"),"\uFF1A",ma(x.theirs)]})]}),(0,q.jsxs)("div",{className:"bb-actions",children:[(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:x.index,choice:"ours",fileset:za[m]})}))},children:e("syncTab.conflicts.oursBtn")}),(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:x.index,choice:"theirs",fileset:za[m]})}))},children:e("syncTab.conflicts.theirsBtn")}),(0,q.jsx)("button",{type:"button",className:"me-btn",disabled:w,onClick:()=>{Z(()=>mt("/resolve",{method:"POST",body:JSON.stringify({sessionId:o,index:x.index,choice:"both",fileset:za[m]})}))},children:e("syncTab.conflicts.bothBtn")})]})]},`g-${m}-${x.index}`))]},`g-${m}`):null)]}):(0,q.jsx)("p",{className:"bb-settings-desc",children:e("syncTab.global.notInit")})]}),A==="remote"&&(0,q.jsxs)("div",{className:"sv-section",children:[(0,q.jsx)("div",{className:"sv-section-title",children:e("syncTab.section.remote")}),(0,q.jsx)("p",{className:"bb-settings-desc",children:e("syncTab.remote.desc")}),(0,q.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[(0,q.jsxs)("label",{className:`sv-radio-row${D?"":" sv-radio-active"}`,children:[(0,q.jsx)("input",{type:"radio",name:"sync-remote-enabled",checked:!D,onChange:()=>{a?.global?.enabled===!0?Z(()=>mt("/global-remote",{method:"POST",body:JSON.stringify({enabled:!1})})):y(!1)}}),(0,q.jsxs)("span",{style:{flex:1},children:[(0,q.jsx)("span",{className:"sv-radio-label",children:e("syncTab.remote.mode.off")}),(0,q.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.remote.mode.off.desc")})]})]}),(0,q.jsxs)("label",{className:`sv-radio-row${D?" sv-radio-active":""}`,children:[(0,q.jsx)("input",{type:"radio",name:"sync-remote-enabled",checked:D,onChange:()=>y(!0)}),(0,q.jsxs)("span",{style:{flex:1},children:[(0,q.jsx)("span",{className:"sv-radio-label",children:e("syncTab.remote.mode.on")}),(0,q.jsx)("span",{className:"sv-radio-desc",children:e("syncTab.remote.mode.on.desc")})]})]})]}),D?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("div",{className:"sv-actions",style:{marginTop:"10px"},children:[(0,q.jsx)("input",{type:"text",className:"me-input",style:{flex:"1 1 360px",width:"auto",minWidth:"min(280px, 100%)"},placeholder:e("syncTab.remote.placeholder"),value:T,onChange:m=>{v.current=!0,G(m.target.value)}}),(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-primary",disabled:w||T.trim()==="",onClick:()=>{Z(()=>mt("/global-remote",{method:"POST",body:JSON.stringify({url:T.trim(),enabled:!0})}))},children:a?.global?.initialized===!0&&a?.global?.url!==""?e("syncTab.remote.modify"):e("syncTab.remote.save")}),a?.global?.initialized===!0&&a?.global?.url!==""&&(0,q.jsx)("button",{type:"button",className:"me-btn me-btn-danger",disabled:w,onClick:()=>{Z(()=>mt("/global-remote",{method:"POST",body:JSON.stringify({enabled:!1})}))},children:e("syncTab.remote.disable")})]}),a?.global?.initialized===!0&&a?.global?.url!==""&&(0,q.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.remote.current",{url:a.global.url})})]}):(0,q.jsx)("p",{className:"bb-meta",style:{marginTop:"8px"},children:e("syncTab.remote.switchHint")})]}),(0,q.jsx)("p",{className:"bb-empty",children:e("syncTab.footnote")})]}):(0,q.jsx)("div",{className:"bb-empty",children:e("syncTab.loading")})})}var Rs=require("react-dom/client");var At=require("react"),Ut=require("react/jsx-runtime");function oo(t){return typeof t=="function"?t():t}async function Fa(t,e){let o=await fetch(`/memory-evolve/api/bookmarks${t}`,{headers:{"content-type":"application/json"},...e}),a=await o.json().catch(()=>({}));if(!o.ok)throw new Error(a.error??`HTTP ${o.status}`);return a}function Es(t){let{anchorKey:e,seq:o,turn:a,summary:n,t:i}=t,[d,p]=(0,At.useState)(null),[C,w]=(0,At.useState)(!1),[u,g]=(0,At.useState)(!1),k=(0,At.useRef)(null),j=(0,At.useCallback)(()=>{let v=oo(t.sessionId);v&&Fa(`?sessionId=${encodeURIComponent(v)}`).then(D=>{let y=(D.bookmarks??[]).find(O=>O.anchorKey!=null&&O.anchorKey===e||O.anchorKey==null&&O.seq===o)??null;p(y)}).catch(()=>{})},[t.sessionId,e,o]);(0,At.useEffect)(()=>{j()},[j]),(0,At.useEffect)(()=>{if(!u)return;let v=D=>{k.current!==null&&!k.current.contains(D.target)&&g(!1)};return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[u]);let z=i("bookmark.defaultLabel",{n:String(a??o??"?")}),A=v=>{let D=oo(t.sessionId);if(!D){window.alert(i("bookmark.error",{message:i("bookmark.noSession")}));return}let y=v==="rename"&&d!==null?d.label:z,O=window.prompt(i(v==="rename"?"bookmark.prompt.rename":"bookmark.prompt.create"),y);if(O===null)return;let Z=O.trim()===""?z:O.trim();w(!0),g(!1),v==="create"?Fa("",{method:"POST",body:JSON.stringify({sessionId:D,anchorKey:e,seq:o,label:Z,summary:n,turn:a})}).then(I=>{p({id:I.bookmark.id,seq:I.bookmark.seq,anchorKey:I.bookmark.anchorKey??null,label:I.bookmark.label}),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(I=>{window.alert(i("bookmark.error",{message:I.message}))}).finally(()=>w(!1)):d!==null?Fa("",{method:"PATCH",body:JSON.stringify({sessionId:D,id:d.id,label:Z})}).then(I=>{p({id:I.bookmark.id,seq:I.bookmark.seq,anchorKey:I.bookmark.anchorKey??null,label:I.bookmark.label}),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(I=>{window.alert(i("bookmark.error",{message:I.message}))}).finally(()=>w(!1)):w(!1)},U=()=>{let v=oo(t.sessionId);d!==null&&window.confirm(i("bookmark.confirm.delete",{label:d.label}))&&(w(!0),g(!1),Fa("",{method:"DELETE",body:JSON.stringify({sessionId:v,id:d.id})}).then(()=>{p(null),window.dispatchEvent(new CustomEvent("dsh-memory-evolve:bookmarks-change"))}).catch(D=>{window.alert(i("bookmark.error",{message:D.message}))}).finally(()=>w(!1)))},T=d!==null,G=T?i("bookmark.star.title.on",{label:d.label}):i("bookmark.star.title.off");return(0,Ut.jsxs)("div",{className:"bm-star-wrap",ref:k,"data-bm-anchor":e,children:[(0,Ut.jsx)("button",{type:"button",className:"bm-star-btn","data-bookmarked":T?"true":void 0,title:G,"aria-label":G,disabled:C,onClick:()=>{T?g(v=>!v):A("create")},children:(0,Ut.jsx)("span",{className:"bm-star-icon","aria-hidden":"true",children:T?"\u2605":"\u2606"})}),u&&T&&(0,Ut.jsxs)("div",{className:"bm-star-menu",role:"menu",children:[(0,Ut.jsx)("button",{type:"button",role:"menuitem",onClick:()=>A("rename"),children:i("bookmark.menu.rename")}),(0,Ut.jsx)("button",{type:"button",role:"menuitem",className:"bm-danger",onClick:U,children:i("bookmark.menu.delete")})]})]})}var Ds=require("react/jsx-runtime"),Is="data-bm-star-host",so="data-bm-fork-enabled",tr=["\u5728\u65B0\u5BF9\u8BDD\u4E2D\u5206\u652F","Branch into a new conversation"],Ps=200;function no(t){let e=t.getAttribute("data-chat-anchor-key")??"",o=/^node:(\d+)$/.exec(e);if(o!==null){let d=Number(o[1]);return Number.isInteger(d)&&d>=1?{kind:"node",id:o[1],legacySeq:d,rawKey:e}:null}let a=/^(\d+):/.exec(e);if(a===null)return null;let n=Number(a[1]);if(!Number.isInteger(n)||n<=0)return null;let i=e.slice(a[0].length,a[0].length+n);return i.length!==n?null:{kind:i,id:e.slice(a[0].length+n),legacySeq:null,rawKey:e}}function js(t){let e=Number(t.split(":")[0]);return Number.isInteger(e)&&e>=1?e:null}function io(t){let e=(t.getAttribute("title")??"")+" "+(t.getAttribute("aria-label")??"");return e===" "?!1:tr.some(o=>e.includes(o))}function As(t){let e=t.replace(/\s+/g," ").trim();return e.length<=Ps?e:`${e.slice(0,Ps-1)}\u2026`}function ar(t,e){let o=Array.from(e.querySelectorAll("[data-chat-anchor-key]")),a=o.indexOf(t);if(a<0)return"";for(let n=a-1;n>=0;n-=1){let i=o[n];if(i===void 0)continue;let d=no(i);if(d!==null&&d.legacySeq===null){if(d.kind==="input-message")return As(i.textContent??"");continue}if(!(i.querySelector("button")!==null&&Array.from(i.querySelectorAll("button")).some(io)))return As(i.textContent??"")}return""}function Ms(t,e){let o=!1,a=null,n=new Map,i=0;function d(u){let k=Array.from(u.querySelectorAll("button")).find(io);return k===void 0||k.getAttribute("aria-disabled")==="true"?null:k}function p(u){return Array.from(u.querySelectorAll("button")).find(io)??null}function C(u){let g=p(u);g!==null&&g.getAttribute("aria-disabled")==="true"&&(g.hasAttribute(so)||(g.setAttribute(so,""),g.removeAttribute("aria-disabled"),g.removeAttribute("disabled"),g.removeAttribute("data-unavailable"),g.title=e.t("bookmark.fork.title"),g.setAttribute("aria-label",e.t("bookmark.fork.title")),g.addEventListener("click",k=>{k.preventDefault(),k.stopPropagation();let j=no(u),z=t();if(j===null||z===""){window.alert(e.t("bookmark.error",{message:e.t("bookmark.noSession")}));return}let A=j.legacySeq,U=j.kind==="assistant-step"?js(j.id):null;window.confirm(e.t("bookmark.fork.confirm",{n:String(U??A??"?")}))&&fetch("/memory-evolve/api/bookmarks/fork",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({sessionId:z,seq:j.legacySeq??void 0,anchorKey:j.legacySeq===null?j.rawKey:void 0})}).then(T=>T.json().catch(()=>({}))).then(T=>{typeof T.sessionId=="string"?window.alert(e.t("bookmark.fork.ok",{id:T.sessionId})):window.alert(e.t("bookmark.error",{message:T.error??"HTTP error"}))}).catch(T=>{window.alert(e.t("bookmark.error",{message:T.message}))})})))}function w(){if(o)return;let u=document.querySelector("[data-chat-flow]");if(u===null)return;let g=u.querySelectorAll('[role="tooltip"]');for(let j of g){let z=j.previousElementSibling;z instanceof HTMLButtonElement&&z.hasAttribute(so)&&(j.style.display="none")}let k=u.querySelectorAll("[data-chat-anchor-key]");for(let j of k){C(j);let z=no(j);if(z===null||z.kind!=="assistant-step"&&z.legacySeq===null||j.querySelector(`[${Is}]`)!==null)continue;let A=d(j);if(A===null)continue;let U=ar(j,u),T=document.createElement("div");T.setAttribute(Is,""),T.dataset.bmAnchor=z.rawKey,A.insertAdjacentElement("afterend",T);let G=(0,Rs.createRoot)(T);G.render((0,Ds.jsx)(Es,{anchorKey:z.rawKey,seq:z.legacySeq,turn:z.kind==="assistant-step"?js(z.id):null,summary:U,sessionId:t,t:e.t})),n.set(z.rawKey,{root:G,host:T})}}return a=new MutationObserver(()=>{o||i===0&&(i=requestAnimationFrame(()=>{i=0,!o&&w()}))}),a.observe(document.body,{childList:!0,subtree:!0}),w(),{dispose(){o=!0,i!==0&&(cancelAnimationFrame(i),i=0),a?.disconnect(),a=null;for(let{root:u,host:g}of n.values())u.unmount(),g.remove();n.clear()}}}var de=require("react"),pa=require("@deepseek-ai/dsh-client-ui-primitives");var Ge=require("react");var Ea=require("react");var ro="memory-evolve.canvas.v1",lo="data-cg-canvas-css";var Ls="sess-demo-current",$a="\u5F53\u524D\u4F1A\u8BDD";var Ha="proj-demo",Os="dsh-memory-evolve";var Sa={x:80,y:40,width:560,height:300},co={folder:{width:248,height:168},markdown:{width:360,height:260},plainText:{width:340,height:240},image:{width:320,height:240},media:{width:320,height:220},file:{width:260,height:170}},Zt={folder:"\u6587\u4EF6\u5939",markdown:"Markdown",plainText:"\u7EAF\u6587\u672C",image:"\u56FE\u7247",media:"\u97F3\u89C6\u9891",file:"\u6587\u4EF6"},ea={folder:"\u{1F4C1}",markdown:"\u{1F4DD}",plainText:"\u{1F4C4}",image:"\u{1F5BC}",media:"\u{1F3AC}",file:"\u{1F4E6}"},zs={md:"markdown",markdown:"markdown",txt:"plainText",text:"plainText",log:"plainText",png:"image",jpg:"image",jpeg:"image",gif:"image",webp:"image",svg:"image",bmp:"image",ico:"image",mp3:"media",wav:"media",m4a:"media",aac:"media",ogg:"media",flac:"media",mp4:"media",mov:"media",webm:"media",avi:"media",mkv:"media"},mo={x:48,y:36,scale:.88};function Fs(){let t=Math.random().toString(36).slice(2,8);return`canvas_${Date.now().toString(36)}_${t}`}function Ba(t){let e=t.trim();return e.startsWith('"')&&e.endsWith('"')||e.startsWith("'")&&e.endsWith("'")?e.slice(1,-1).trim():e}function qa(t){let e=Ba(t).replace(/\\/g,"/");if(!e)return"file";if(e.endsWith("/"))return"folder";let o=e.split("/").pop()??e;if(!o.includes(".")||o.startsWith("."))return"folder";let a=o.split(".").pop()?.toLowerCase()??"";return zs[a]??"file"}function po(t){let e=Ba(t).replace(/\\/g,"/").replace(/\/+$/,""),o=e.split("/").pop();return o&&o.length>0?o:e||"\u672A\u547D\u540D"}function $s(t){return`[canvas:${t.id}] ${t.title}`}function uo(t,e){return t.scope==="global"?`\u{1F310} ${t.scopeLabel||"\u5168\u5C40"}`:t.scope==="project"?`\u{1F4C1} ${t.scopeLabel}`:e&&t.sessionId&&t.sessionId===e?"\u{1F4AC} \u5F53\u524D\u4F1A\u8BDD":t.sessionId?`\u{1F4AC} \u5176\u4ED6\u4F1A\u8BDD ${t.sessionName||bo(t.sessionId)}`:`\u{1F4AC} ${t.scopeLabel||"\u4F1A\u8BDD"}`}function bo(t){let e=/^session-(.+)$/.exec(t);return(e?e[1]:t).slice(0,8)}function Hs(t,e,o=Ls,a=Ha){return e==="global"||t.scope==="global"?!0:e==="project"?t.scope==="project"?(t.projectId??a)===a:t.projectId===a:t.scope==="project"?(t.projectId??a)===a:t.sessionId===o}function go(t,e){let o=e.trim().toLowerCase();if(!o)return!0;let a=Zt[t.type];return t.title.toLowerCase().includes(o)||t.type.toLowerCase().includes(o)||a.toLowerCase().includes(o)||(t.path?.toLowerCase().includes(o)??!1)||t.id.toLowerCase().includes(o)}function Bs(t,e,o){return Math.min(o,Math.max(e,t))}function qs(t,e,o,a){let n=(e-t.x)/t.scale,i=(o-t.y)/t.scale;return{x:e-n*a,y:o-i*a,scale:a}}function _s(t,e,o,a){let n=t.placement.x+t.placement.width/2,i=t.placement.y+t.placement.height/2;return{x:o/2-n*e.scale,y:a/2-i*e.scale,scale:e.scale}}function Us(t,e,o,a,n){let{x:i,y:d,width:p,height:C}=t.placement,w=-e.x/e.scale-n,u=-e.y/e.scale-n,g=w+o/e.scale+n*2,k=u+a/e.scale+n*2;return i+p>=w&&i<=g&&d+C>=u&&d<=k}async function Vs(t){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(t),!0}catch{}try{let e=document.createElement("textarea");e.value=t,e.setAttribute("readonly","true"),e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select();let o=document.execCommand("copy");return e.remove(),o}catch{return!1}}async function Ws(t,e){let o=or(t)||"\u4FBF\u7B7E",a=/\.(md|txt)$/i.test(o)?o:`${o}.md`,n=window.showSaveFilePicker;if(typeof n=="function")try{let d=await(await n({suggestedName:a,types:[{description:"Markdown \u6587\u672C",accept:{"text/markdown":[".md",".txt"]}}]})).createWritable();return await d.write(e),await d.close(),{ok:!0}}catch(i){if(i?.name==="AbortError")return{ok:!1,canceled:!0}}try{let i=new Blob([e],{type:"text/markdown;charset=utf-8"}),d=URL.createObjectURL(i),p=document.createElement("a");return p.href=d,p.download=a,document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(d),5e3),{ok:!0,message:"\u5DF2\u4E0B\u8F7D\u5230\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4E0B\u8F7D\u76EE\u5F55"}}catch(i){return{ok:!1,message:i instanceof Error?i.message:String(i)}}}function or(t){return t.replace(/[\\/:*?"<>|\u0000-\u001f]/g,"_").trim().slice(0,120)}function _a(t){let e=0;for(let o=0;o<t.length;o++)e=e*31+t.charCodeAt(o)>>>0;return e%360}function Ks(t){if(!(t instanceof HTMLElement))return!1;let e=t.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"?!0:t.isContentEditable}var ta="/memory-evolve/api/canvas",Ca=null;async function Gs(){if(Ca!==null)return Ca;try{Ca=(await fetch(`${ta}/state`,{method:"GET"})).ok}catch{Ca=!1}return Ca}async function Js(t){try{let e=t?`?sessionId=${encodeURIComponent(t)}`:"",o=await fetch(`${ta}${e}`,{method:"GET"});if(!o.ok)return null;let a=await o.json();if(!a||typeof a!="object")return null;let n=a;if(!Array.isArray(n.nodes))return null;let i=n.viewport;return{version:1,nodes:n.nodes,viewport:i&&typeof i.x=="number"&&typeof i.y=="number"&&typeof i.scale=="number"?{x:i.x,y:i.y,scale:i.scale}:{x:520,y:330,scale:.9},viewMode:n.viewMode==="project"||n.viewMode==="global"?n.viewMode:"session",lastAiNodeId:typeof n.lastAiNodeId=="string"?n.lastAiNodeId:null,rev:Number.isFinite(Number(n.rev))?Number(n.rev):0,currentProjectId:typeof n.currentProjectId=="string"?n.currentProjectId:void 0,currentProjectLabel:typeof n.currentProjectLabel=="string"?n.currentProjectLabel:void 0}}catch{return null}}async function Xs(t,e,o){try{let a=await fetch(`${ta}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodes:t.nodes,rev:e,viewport:t.viewport,viewMode:t.viewMode,lastAiNodeId:t.lastAiNodeId,sessionId:o})});if(a.status===409)return{ok:!1,conflict:!0,error:"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539"};if(!a.ok){let d=await a.json().catch(()=>null);return{ok:!1,error:d&&typeof d=="object"&&typeof d.error=="string"?d.error:`HTTP ${a.status}`}}let n=await a.json();return{ok:!0,rev:n&&typeof n=="object"&&typeof n.rev=="number"?n.rev:e+1}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}async function Ys(t,e={}){try{let o=new URLSearchParams({q:t});e.dir&&o.set("dir",e.dir),e.sessionId&&o.set("sessionId",e.sessionId),e.scope&&o.set("scope",e.scope),e.limit&&o.set("limit",String(e.limit));let a=await fetch(`${ta}/search?${o.toString()}`,{method:"GET"});if(!a.ok)return null;let n=await a.json();if(!n||typeof n!="object")return null;let i=n;return Array.isArray(i.items)?i.items:null}catch{return null}}async function Qs(t){return en("/open",t)}async function Zs(t){return en("/open-dir",t)}async function en(t,e){try{let o=await fetch(`${ta}${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodeId:e})});if(!o.ok){let a=await o.json().catch(()=>null);return{ok:!1,error:a&&typeof a=="object"&&typeof a.error=="string"?a.error:`HTTP ${o.status}`}}return{ok:!0}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}function aa(t){return`${ta}/file?nodeId=${encodeURIComponent(t)}`}async function tn(t,e,o,a){try{let n=await fetch(`${ta}/migrate`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nodeId:t,scope:e,sessionId:o,rev:a})});if(n.status===409)return{ok:!1,conflict:!0,error:"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5"};if(!n.ok){let p=await n.json().catch(()=>null);return{ok:!1,error:p&&typeof p=="object"&&typeof p.error=="string"?p.error:`HTTP ${n.status}`}}let d=await n.json();return{ok:!0,node:d.node,rev:typeof d.rev=="number"?d.rev:void 0}}catch{return{ok:!1,error:"\u7F51\u7EDC\u9519\u8BEF\uFF08\u5BBF\u4E3B\u4E0D\u53EF\u8FBE\uFF09"}}}var ge=require("react/jsx-runtime");function sr(t){if(!t)return"FILE";let e=t.split(/[/\\]/).pop()??t,o=e.lastIndexOf(".");return o<=0?"FILE":e.slice(o+1).toUpperCase().slice(0,6)}function nr(t){let{node:e,backendReady:o,onChangeContent:a}=t,n=_a(e.id);if(e.type==="markdown"||e.type==="plainText")return(0,ge.jsxs)(ge.Fragment,{children:[e.path?(0,ge.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,ge.jsx)("textarea",{className:"cg-editor",value:e.content??"",placeholder:e.type==="markdown"?"\u5199\u4E00\u6BB5 Markdown\u2026":"\u5199\u4E00\u6BB5\u7EAF\u6587\u672C\u2026",onPointerDown:i=>i.stopPropagation(),onWheel:i=>i.stopPropagation(),onChange:i=>a(e.id,i.target.value)})]});if(e.type==="image"){let i=o&&e.path?aa(e.id):"";return(0,ge.jsxs)(ge.Fragment,{children:[i?(0,ge.jsx)("div",{className:"cg-card-media-wrap",children:(0,ge.jsx)("img",{className:"cg-card-media",src:i,alt:e.title,loading:"lazy",decoding:"async",draggable:!1})}):(0,ge.jsxs)("div",{className:"cg-ph",style:{background:`linear-gradient(145deg, hsl(${n} 42% 46%), hsl(${(n+40)%360} 38% 32%))`},children:["\u{1F5BC}",(0,ge.jsx)("small",{children:"\u56FE\u7247\u9884\u89C8"})]}),e.path?(0,ge.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null]})}if(e.type==="media"){let i=o&&e.path?aa(e.id):"",d=!!e.path?.toLowerCase().match(/\.(mp3|wav|m4a|aac|ogg|flac)$/);return(0,ge.jsxs)(ge.Fragment,{children:[i?(0,ge.jsx)("div",{className:"cg-card-media-wrap",children:d?(0,ge.jsx)("audio",{className:"cg-card-media",src:i,controls:!0,preload:"metadata"}):(0,ge.jsx)("video",{className:"cg-card-media",src:i,controls:!0,preload:"metadata"})}):(0,ge.jsxs)("div",{className:"cg-ph",style:{background:`linear-gradient(160deg, hsl(${n} 35% 38%), hsl(${(n+60)%360} 30% 22%))`},children:["\u25B6",(0,ge.jsx)("small",{children:d?"\u97F3\u9891":"\u89C6\u9891"})]}),e.path?(0,ge.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null]})}return e.type==="folder"?(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("div",{className:"cg-ph",style:{fontSize:32,minHeight:56},children:"\u{1F4C1}"}),e.path?(0,ge.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,ge.jsxs)("div",{className:"cg-card-meta",children:[e.meta?.size??"\u6587\u4EF6\u5939"," \xB7 \u6682\u4E0D\u652F\u6301\u5185\u5D4C\u6D4F\u89C8"]})]}):(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("span",{className:"cg-file-ext",children:sr(e.path)}),e.path?(0,ge.jsx)("div",{className:"cg-card-path",title:e.path,children:e.path}):null,(0,ge.jsx)("div",{className:"cg-card-meta",children:[e.meta?.size,e.meta?.mtime].filter(Boolean).join(" \xB7 ")||Zt[e.type]})]})}function ir(t){let{node:e,lod:o,selected:a,flashing:n,dimmed:i,highlighted:d}=t,{placement:p}=e,C=(0,Ea.useCallback)(g=>{g.button===0&&(t.onSelect(e.id),t.onDragStart(e.id,g))},[e.id,t]),w=(0,Ea.useCallback)(g=>{g.button===0&&(g.preventDefault(),g.stopPropagation(),t.onSelect(e.id),t.onResizeStart(e.id,g))},[e.id,t]),u=["cg-card",a?"cg-selected":"",n?"cg-flash":"",i?"cg-dimmed":"",d?"cg-fresh":"",e.aiPlaced?"cg-ai":""].filter(Boolean).join(" ");return(0,ge.jsxs)("article",{className:u,"data-node-id":e.id,style:{left:p.x,top:p.y,width:p.width,height:p.height,zIndex:p.zIndex},onPointerDown:g=>{g.button===0&&t.onSelect(e.id)},children:[(0,ge.jsxs)("header",{className:"cg-card-head",onPointerDown:C,children:[(0,ge.jsx)("span",{className:"cg-drag","aria-hidden":!0,children:"\u22EE\u22EE"}),(0,ge.jsx)("span",{className:"cg-type-glyph",title:Zt[e.type],children:ea[e.type]}),(0,ge.jsx)("strong",{className:"cg-card-title",title:e.title,children:e.title}),(0,ge.jsxs)("span",{className:"cg-badges",children:[e.aiPlaced?(0,ge.jsx)("span",{className:"cg-badge cg-badge-ai",children:"AI \u653E\u7F6E"}):null,e.unverified?(0,ge.jsx)("span",{className:"cg-badge cg-badge-warn",children:"\u672A\u9A8C\u8BC1"}):null,(0,ge.jsx)("span",{className:"cg-badge",title:uo(e,t.currentSessionId),children:uo(e,t.currentSessionId)})]})]}),o?(0,ge.jsxs)("div",{className:"cg-lod",children:[ea[e.type],(0,ge.jsx)("span",{children:e.title})]}):(0,ge.jsxs)(ge.Fragment,{children:[(0,ge.jsx)("div",{className:"cg-card-body",children:(0,ge.jsx)(nr,{node:e,backendReady:t.backendReady,onChangeContent:t.onChangeContent})}),(0,ge.jsxs)("footer",{className:"cg-card-foot",children:[(0,ge.jsx)("button",{type:"button",onClick:()=>t.onPreview(e.id),children:"\u9884\u89C8"}),(e.type==="markdown"||e.type==="plainText")&&e.content?(0,ge.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onSave(e.id),title:"\u4FDD\u5B58\u5185\u5BB9\u5230\u672C\u673A\u6587\u4EF6",children:"\u4FDD\u5B58"}):null,e.path?(0,ge.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onOpen(e.id),title:"\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00",children:"\u6253\u5F00"}):null,e.path?(0,ge.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.onOpenFolder(e.id),title:"\u5728\u7CFB\u7EDF\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u8BE5\u6587\u4EF6\u6240\u5728\u7684\u6587\u4EF6\u5939\uFF08Finder / \u8D44\u6E90\u7BA1\u7406\u5668\uFF09",children:"\u6240\u5728\u6587\u4EF6\u5939"}):null,(0,ge.jsx)("button",{type:"button",onClick:()=>t.onMigrate(e.id),title:"\u8FC1\u79FB\u8282\u70B9\u5F52\u5C5E\uFF08\u672C\u4F1A\u8BDD/\u672C\u9879\u76EE/\u6240\u6709\u9879\u76EE\u53EF\u89C1\uFF09",children:"\u5F52\u5C5E"}),t.openSession&&e.scope==="session"&&e.sessionId&&e.sessionId!==t.currentSessionId?(0,ge.jsx)("button",{type:"button",className:"cg-open",onClick:()=>t.openSession?.(e.sessionId),title:"\u8DF3\u8F6C\u5230\u8BE5\u8282\u70B9\u6240\u5C5E\u4F1A\u8BDD",children:"\u8DF3\u8F6C"}):null,(0,ge.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"id"),children:"\u590D\u5236 ID"}),(0,ge.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"title"),children:"\u590D\u5236\u6807\u9898"}),(0,ge.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"path"),disabled:!e.path,children:"\u590D\u5236\u8DEF\u5F84"}),(0,ge.jsx)("button",{type:"button",onClick:()=>t.onCopy(e.id,"ref"),children:"\u5F15\u7528"}),(0,ge.jsx)("button",{type:"button",className:"cg-danger",onClick:()=>t.onAskRemove(e.id),children:"\u79FB\u9664"})]})]}),(0,ge.jsx)("button",{type:"button",className:"cg-resize-handle","aria-label":"\u62D6\u52A8\u8C03\u6574\u5361\u7247\u5927\u5C0F",title:"\u62D6\u52A8\u8C03\u6574\u5927\u5C0F",onPointerDown:w})]})}var ho=(0,Ea.memo)(ir);ho.displayName="CanvasCard";var Vt=require("react/jsx-runtime");function fo(t,e){t&&(t.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) scale(${e.scale})`)}function vo(t,e){if(!t)return;let o=Math.max(10,22*e.scale);t.style.backgroundSize=`${o}px ${o}px`,t.style.backgroundPosition=`${e.x}px ${e.y}px`}function on(t){let e=(0,Ge.useRef)(null),o=(0,Ge.useRef)(null),a=(0,Ge.useRef)(t.viewport),n=(0,Ge.useRef)(t.nodes),i=(0,Ge.useRef)(null),d=(0,Ge.useRef)(!1),p=(0,Ge.useRef)(0),[C,w]=(0,Ge.useState)(!1),[u,g]=(0,Ge.useState)(!1),[k,j]=(0,Ge.useState)({w:800,h:560}),[z,A]=(0,Ge.useState)(()=>t.nodes.map(m=>m.id));i.current||(a.current=t.viewport),n.current=t.nodes,(0,Ge.useEffect)(()=>{let m=e.current;if(!m)return;let l=()=>{let V=m.getBoundingClientRect();j({w:Math.max(1,V.width),h:Math.max(1,V.height)})};l();let x=new ResizeObserver(l);return x.observe(m),()=>x.disconnect()},[]);let U=(0,Ge.useCallback)((m,l)=>{let x=[];for(let V of l)Us(V,m,k.w,k.h,280)&&x.push(V.id);A(V=>V.length===x.length&&V.every((P,ne)=>P===x[ne])?V:x)},[k.h,k.w]);(0,Ge.useEffect)(()=>{i.current||(fo(o.current,t.viewport),vo(e.current,t.viewport),U(t.viewport,t.nodes))},[t.nodes,t.viewport,U]),(0,Ge.useEffect)(()=>()=>{p.current&&cancelAnimationFrame(p.current)},[]),(0,Ge.useEffect)(()=>{let m=x=>{x.code!=="Space"||x.repeat||Ks(x.target)||(x.preventDefault(),d.current=!0,w(!0))},l=x=>{x.code==="Space"&&(d.current=!1,w(!1))};return window.addEventListener("keydown",m,{passive:!1}),window.addEventListener("keyup",l),()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",l)}},[]);let T=(0,Ge.useCallback)((m,l)=>{a.current=m,fo(o.current,m),vo(e.current,m),U(m,n.current),t.onViewportChange(m,l)},[t,U]);(0,Ge.useEffect)(()=>{let m=e.current;if(!m)return;let l=x=>{x.preventDefault();let V=m.getBoundingClientRect(),P=x.clientX-V.left,ne=x.clientY-V.top,oe=x.deltaY<0?1.08:1/1.08,be=Bs(a.current.scale*oe,.15,2.8);be!==a.current.scale&&T(qs(a.current,P,ne,be),!0)};return m.addEventListener("wheel",l,{passive:!1}),()=>m.removeEventListener("wheel",l)},[T]);let G=(0,Ge.useCallback)(m=>{if(m.button!==0)return;let l=!!m.target?.closest?.("[data-node-id]");(!l||d.current)&&(m.preventDefault(),m.currentTarget.setPointerCapture(m.pointerId),i.current={kind:"pan",lastX:m.clientX,lastY:m.clientY},g(!0),l||t.onSelect(null))},[t]),v=(0,Ge.useCallback)(m=>{let l=i.current;if(!l)return;if(l.kind==="pan"){let ne=m.clientX-l.lastX,oe=m.clientY-l.lastY;l.lastX=m.clientX,l.lastY=m.clientY;let be={...a.current,x:a.current.x+ne,y:a.current.y+oe};a.current=be,fo(o.current,be),vo(e.current,be),p.current||(p.current=requestAnimationFrame(()=>{p.current=0,U(a.current,n.current)}));return}let x=a.current.scale||1;if(l.kind==="resize"){let ne=Math.max(120,l.originW+(m.clientX-l.startX)/x),oe=Math.max(60,l.originH+(m.clientY-l.startY)/x);t.onResizeNode(l.id,ne,oe,!1);return}let V=l.originX+(m.clientX-l.startX)/x,P=l.originY+(m.clientY-l.startY)/x;t.onMoveNode(l.id,V,P,!1)},[t,U]),D=(0,Ge.useCallback)(m=>{let l=i.current;if(!l)return;i.current=null,g(!1);try{m.currentTarget.releasePointerCapture(m.pointerId)}catch{}if(l.kind==="pan"){U(a.current,n.current),t.onViewportChange(a.current,!0);return}let x=a.current.scale||1;if(l.kind==="resize"){let ne=Math.max(120,l.originW+(m.clientX-l.startX)/x),oe=Math.max(60,l.originH+(m.clientY-l.startY)/x);t.onResizeNode(l.id,ne,oe,!0);return}let V=l.originX+(m.clientX-l.startX)/x,P=l.originY+(m.clientY-l.startY)/x;t.onMoveNode(l.id,V,P,!0)},[t,U]),y=(0,Ge.useCallback)((m,l)=>{if(d.current)return;l.preventDefault(),l.stopPropagation();let x=n.current.find(P=>P.id===m);if(!x)return;let V=e.current;if(V)try{V.setPointerCapture(l.pointerId)}catch{}i.current={kind:"drag",id:m,originX:x.placement.x,originY:x.placement.y,startX:l.clientX,startY:l.clientY}},[]),O=(0,Ge.useCallback)((m,l)=>{if(d.current)return;let x=n.current.find(P=>P.id===m);if(!x)return;let V=e.current;if(V)try{V.setPointerCapture(l.pointerId)}catch{}i.current={kind:"resize",id:m,originW:x.placement.width,originH:x.placement.height,startX:l.clientX,startY:l.clientY}},[]),Z=(0,Ge.useMemo)(()=>new Set(z),[z]),I=(0,Ge.useMemo)(()=>t.nodes.filter(m=>Z.has(m.id)),[t.nodes,Z]);return(0,Vt.jsxs)("div",{ref:e,className:`cg-stage${u?" cg-panning":""}${C?" cg-space":""}`,onPointerDown:G,onPointerMove:v,onPointerUp:D,onPointerCancel:D,children:[(0,Vt.jsxs)("div",{ref:o,className:"cg-world",children:[(0,Vt.jsx)("div",{className:"cg-ai-zone",style:{left:Sa.x,top:Sa.y,width:Sa.width,height:Sa.height},children:(0,Vt.jsx)("span",{className:"cg-ai-zone-label",children:"AI \u4FBF\u7B7E\u533A \xB7 AI \u65B0\u653E\u7684\u4FBF\u7B7E\u843D\u5728\u8FD9\u91CC\uFF0C\u53EF\u62D6\u8D70"})}),I.map(m=>(0,Vt.jsx)(ho,{node:m,lod:t.lod,selected:t.selectedId===m.id,flashing:t.flashIds.has(m.id),dimmed:t.searchActive&&!t.matchIds.has(m.id),highlighted:t.highlightIds.has(m.id),currentSessionId:t.currentSessionId,backendReady:t.backendReady,openSession:t.openSession,onSelect:t.onSelect,onDragStart:y,onResizeStart:O,onPreview:t.onPreview,onOpen:t.onOpen,onOpenFolder:t.onOpenFolder,onSave:t.onSave,onMigrate:t.onMigrate,onCopy:t.onCopy,onAskRemove:t.onAskRemove,onChangeContent:t.onChangeContent},m.id))]}),(0,Vt.jsxs)("div",{className:"cg-hint-bar",children:["\u62D6\u7A7A\u767D\u5904\u5E73\u79FB \xB7 \u7A7A\u683C+\u62D6 \u4E5F\u53EF\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E\uFF08\u4E2D\u5FC3\u4E3A\u6307\u9488\uFF09\xB7 \u7F29\u653E ",Math.round(t.viewport.scale*100),"%",t.lod?" \xB7 \u8FDC\u770B\u7B80\u5316\u6A21\u5F0F":"",I.length<t.nodes.length?` \xB7 \u89C6\u53E3 ${I.length}/${t.nodes.length}`:""]})]})}var vt=require("react");var Q=require("react/jsx-runtime");function cr(t){let[e,o]=(0,vt.useState)(""),a=qa(e);return(0,Q.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u8DEF\u5F84\u4E0A\u677F",children:[(0,Q.jsx)("h3",{children:"\u8DEF\u5F84\u4E0A\u677F"}),(0,Q.jsx)("p",{children:"\u7C98\u8D34\u672C\u5730\u8DEF\u5F84\u5373\u53EF\u751F\u6210\u5361\u7247\u3002\u6682\u4E0D\u6821\u9A8C\u6587\u4EF6\u662F\u5426\u5B58\u5728\uFF0C\u5361\u7247\u4F1A\u6807\u300C\u672A\u9A8C\u8BC1\u300D\u3002"}),(0,Q.jsxs)("div",{className:"cg-field",children:[(0,Q.jsx)("label",{htmlFor:"cg-path-input",children:"\u672C\u5730\u8DEF\u5F84"}),(0,Q.jsx)("input",{id:"cg-path-input",autoFocus:!0,value:e,placeholder:"/Users/me/Documents/\u5408\u540C.pdf",onChange:n=>o(n.target.value),onKeyDown:n=>{n.key==="Enter"&&e.trim()&&t.onPath({path:e}),n.key==="Escape"&&t.onClose()}})]}),(0,Q.jsxs)("div",{className:"cg-hint",children:["\u5C06\u8BC6\u522B\u4E3A\uFF1A",ea[a]," ",Zt[a]]}),(0,Q.jsxs)("div",{className:"cg-dialog-actions",children:[(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",disabled:!e.trim(),onClick:()=>t.onPath({path:e}),children:"\u4E0A\u677F"})]})]})}function mr(t){let[e,o]=(0,vt.useState)("\u672A\u547D\u540D\u4FBF\u7B7E"),[a,n]=(0,vt.useState)("markdown"),[i,d]=(0,vt.useState)("");return(0,Q.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u65B0\u5EFA\u4FBF\u7B7E",children:[(0,Q.jsx)("h3",{children:"\u4FBF\u7B7E\u4E0A\u677F"}),(0,Q.jsx)("p",{children:"\u5185\u5BB9\u5B58\u5728\u753B\u677F\u91CC\uFF0C\u4E0D\u6307\u5411\u4EFB\u4F55\u6587\u4EF6\u3002"}),(0,Q.jsxs)("div",{className:"cg-field",children:[(0,Q.jsx)("label",{htmlFor:"cg-note-title",children:"\u6807\u9898"}),(0,Q.jsx)("input",{id:"cg-note-title",autoFocus:!0,value:e,onChange:p=>o(p.target.value)})]}),(0,Q.jsxs)("div",{className:"cg-field",children:[(0,Q.jsx)("label",{htmlFor:"cg-note-type",children:"\u7C7B\u578B"}),(0,Q.jsxs)("select",{id:"cg-note-type",value:a,onChange:p=>n(p.target.value==="plainText"?"plainText":"markdown"),children:[(0,Q.jsx)("option",{value:"markdown",children:"Markdown"}),(0,Q.jsx)("option",{value:"plainText",children:"\u7EAF\u6587\u672C"})]})]}),(0,Q.jsxs)("div",{className:"cg-field",children:[(0,Q.jsx)("label",{htmlFor:"cg-note-body",children:"\u5185\u5BB9"}),(0,Q.jsx)("textarea",{id:"cg-note-body",value:i,onChange:p=>d(p.target.value)})]}),(0,Q.jsxs)("div",{className:"cg-dialog-actions",children:[(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:()=>t.onNote({title:e.trim()||"\u672A\u547D\u540D\u4FBF\u7B7E",type:a,content:i}),children:"\u4E0A\u677F"})]})]})}function pr(t){let[e,o]=(0,vt.useState)(""),[a,n]=(0,vt.useState)("local"),[i,d]=(0,vt.useState)(null),[p,C]=(0,vt.useState)(!1),[w,u]=(0,vt.useState)(null),g=(0,vt.useRef)(0),k=(0,vt.useCallback)(()=>{let A=e.trim();if(!t.backendReady)return;if(!A){d(null),u(null);return}C(!0),u(null);let U=++g.current;Ys(A,{sessionId:t.sessionId,scope:a,limit:20}).then(T=>{g.current===U&&(C(!1),d(T),T===null&&u("\u672C\u5730\u641C\u7D22\u4E0D\u53EF\u7528"))})},[t.backendReady,t.sessionId,e,a]),j=(0,vt.useCallback)(A=>{A!==a&&(g.current++,n(A),d(null),u(null),C(!1))},[a]),z=t.backendReady&&i!==null?i:[];return(0,Q.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u641C\u7D22\u4E0A\u677F",children:[(0,Q.jsx)("h3",{children:"\u641C\u7D22\u4E0A\u677F"}),(0,Q.jsx)("p",{children:"\u641C\u7D22\u672C\u673A\u6587\u4EF6\uFF0C\u9009\u4E2D\u5373\u4E0A\u677F\u3002"}),(0,Q.jsxs)("div",{className:"cg-field",children:[(0,Q.jsx)("label",{htmlFor:"cg-cat-q",children:"\u5173\u952E\u5B57"}),(0,Q.jsxs)("div",{className:"cg-search-row",children:[(0,Q.jsx)("input",{id:"cg-cat-q",autoFocus:!0,value:e,placeholder:"\u5408\u540C / \u8BBE\u8BA1\u7A3F / \u5F55\u97F3\u2026",onChange:A=>o(A.target.value),onKeyDown:A=>{A.key==="Enter"&&k()}}),(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:k,disabled:!e.trim(),children:"\u641C\u7D22"})]})]}),(0,Q.jsxs)("div",{className:"cg-seg cg-scope",role:"group","aria-label":"\u641C\u7D22\u8303\u56F4",children:[(0,Q.jsx)("button",{type:"button",className:a==="local"?"cg-on":"",onClick:()=>j("local"),children:"\u672C\u673A\u5168\u90E8"}),(0,Q.jsx)("button",{type:"button",className:a==="project"?"cg-on":"",onClick:()=>j("project"),children:"\u5F53\u524D\u9879\u76EE"})]}),p?(0,Q.jsx)("div",{className:"cg-hint",children:"\u641C\u7D22\u4E2D\u2026"}):null,w?(0,Q.jsx)("div",{className:"cg-hint cg-hint-error",children:w}):null,(0,Q.jsxs)("div",{className:"cg-catalog",children:[!p&&z.length===0?(0,Q.jsx)("div",{className:"cg-hint",children:e.trim()?"\u6CA1\u6709\u5339\u914D\u7684\u6587\u4EF6":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\u672C\u673A\u6587\u4EF6"}):null,z.map(A=>(0,Q.jsxs)("button",{type:"button",className:"cg-catalog-row",onClick:()=>t.onCatalog(A.title,A.path,A.type,A.size),children:[(0,Q.jsx)("span",{"aria-hidden":!0,children:ea[A.type]??"\u25A4"}),(0,Q.jsxs)("span",{children:[(0,Q.jsx)("strong",{children:A.title}),(0,Q.jsxs)("small",{children:[A.path," \xB7 ",A.size??""]})]})]},A.path))]}),(0,Q.jsx)("div",{className:"cg-dialog-actions",children:(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u5173\u95ED"})})]})}function ur(t){let{node:e}=t,o=e.type==="markdown"||e.type==="plainText"||e.type==="image"||e.type==="media",a=_a(e.id),n=t.backendReady?aa(e.id):"";return(0,Q.jsxs)("div",{className:"cg-dialog cg-dialog-wide",role:"dialog","aria-label":"\u9884\u89C8",children:[(0,Q.jsxs)("h3",{children:[ea[e.type]," ",e.title]}),(0,Q.jsxs)("p",{children:[e.path??"\u753B\u677F\u5185\u4FBF\u7B7E",e.unverified?" \xB7 \u8DEF\u5F84\u672A\u9A8C\u8BC1":""]}),e.type==="markdown"||e.type==="plainText"?(0,Q.jsx)("div",{className:"cg-preview-body",children:e.content||"\uFF08\u7A7A\u5185\u5BB9\uFF09"}):null,e.type==="image"?n?(0,Q.jsx)("img",{className:"cg-preview-img",src:n,alt:e.title,loading:"lazy",decoding:"async"}):(0,Q.jsxs)("div",{className:"cg-ph",style:{minHeight:180,background:`linear-gradient(145deg, hsl(${a} 42% 46%), hsl(${(a+40)%360} 38% 32%))`},children:["\u{1F5BC}",(0,Q.jsx)("small",{children:"\u542F\u7528\u753B\u677F\u6A21\u5757\u540E\u53EF\u9884\u89C8\u771F\u5B9E\u56FE\u7247"})]}):null,e.type==="media"?n?/\.(mp3|wav|m4a|aac|ogg)$/i.test(e.path??"")?(0,Q.jsx)("audio",{className:"cg-preview-media",src:n,controls:!0,preload:"metadata"}):(0,Q.jsx)("video",{className:"cg-preview-media",src:n,controls:!0,preload:"metadata"}):(0,Q.jsxs)("div",{className:"cg-ph",style:{minHeight:160,background:`linear-gradient(160deg, hsl(${a} 35% 38%), hsl(${(a+60)%360} 30% 22%))`},children:["\u25B6",(0,Q.jsx)("small",{children:"\u542F\u7528\u753B\u677F\u6A21\u5757\u540E\u53EF\u64AD\u653E\u771F\u5B9E\u6587\u4EF6"})]}):null,o?null:(0,Q.jsxs)("div",{children:[(0,Q.jsx)("p",{children:"\u6B64\u7C7B\u7D20\u6750\u6682\u4E0D\u5728\u6D4F\u89C8\u5668\u5185\u6E32\u67D3\uFF08Word / PDF / \u6587\u4EF6\u5939\u7B49\uFF09\u3002"}),e.path?(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>t.onOpen(e.id),children:"\u7528\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00"}):null]}),(0,Q.jsx)("div",{className:"cg-dialog-actions",children:(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:t.onClose,children:"\u5173\u95ED"})})]})}function br(t){return(0,Q.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u786E\u8BA4\u79FB\u9664",children:[(0,Q.jsx)("h3",{children:"\u4ECE\u753B\u677F\u79FB\u9664\uFF1F"}),(0,Q.jsxs)("p",{children:["\u5C06\u79FB\u9664\u300C",t.node.title,"\u300D\u3002\u53EA\u4ECE\u753B\u677F\u62FF\u6389\uFF0C\u4E0D\u5220\u9664\u6E90\u6587\u4EF6",t.node.path?`\uFF08${t.node.path}\uFF09`:"","\u3002"]}),(0,Q.jsxs)("div",{className:"cg-dialog-actions",children:[(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:t.onConfirm,children:"\u79FB\u9664"})]})]})}function gr(t){let[e,o]=(0,vt.useState)(t.node.scope==="global"?"global":t.node.scope==="project"?"project":"session");return(0,Q.jsxs)("div",{className:"cg-dialog",role:"dialog","aria-label":"\u8FC1\u79FB\u5F52\u5C5E",children:[(0,Q.jsx)("h3",{children:"\u8FC1\u79FB\u5F52\u5C5E"}),(0,Q.jsxs)("p",{children:["\u300C",t.node.title,"\u300D\u5C06\u79FB\u52A8\u5230\uFF1A"]}),(0,Q.jsxs)("div",{className:"cg-migrate-opts",children:[(0,Q.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="session"?" cg-on":""}`,onClick:()=>o("session"),children:[(0,Q.jsx)("strong",{children:"\u{1F4AC} \u672C\u4F1A\u8BDD"}),(0,Q.jsx)("small",{children:"\u5F52\u5F53\u524D\u4F1A\u8BDD\uFF08\u5728\u522B\u7684\u4F1A\u8BDD\u6253\u5F00\u753B\u677F\u770B\u4E0D\u5230\u5B83\uFF0C\u9664\u975E\u5207\u300C\u6240\u6709\u9879\u76EE\u300D\uFF09"})]}),(0,Q.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="project"?" cg-on":""}`,onClick:()=>o("project"),children:[(0,Q.jsx)("strong",{children:"\u{1F4C1} \u672C\u9879\u76EE"}),(0,Q.jsx)("small",{children:"\u9879\u76EE\u7EA7\uFF1A\u5F53\u524D\u9879\u76EE\u5185\u6240\u6709\u4F1A\u8BDD\u90FD\u80FD\u770B\u5230"})]}),(0,Q.jsxs)("button",{type:"button",className:`cg-migrate-opt${e==="global"?" cg-on":""}`,onClick:()=>o("global"),children:[(0,Q.jsx)("strong",{children:"\u{1F310} \u6240\u6709\u9879\u76EE\u53EF\u89C1"}),(0,Q.jsx)("small",{children:"\u5168\u5C40\uFF1A\u4EFB\u4F55\u4F1A\u8BDD\u3001\u4EFB\u4F55\u89C6\u89D2\u90FD\u80FD\u770B\u5230"})]})]}),(0,Q.jsxs)("div",{className:"cg-dialog-actions",children:[(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-ghost",onClick:t.onClose,children:"\u53D6\u6D88"}),(0,Q.jsx)("button",{type:"button",className:"cg-btn cg-primary",onClick:()=>t.onMigrate(t.node.id,e),children:"\u8FC1\u79FB"})]})]})}function sn(t){return t.kind?(0,Q.jsxs)("div",{className:"cg-overlay",onMouseDown:e=>{e.target===e.currentTarget&&t.onClose()},children:[t.kind==="path"?(0,Q.jsx)(cr,{onClose:t.onClose,onPath:t.onPath}):null,t.kind==="note"?(0,Q.jsx)(mr,{onClose:t.onClose,onNote:t.onNote}):null,t.kind==="catalog"?(0,Q.jsx)(pr,{onClose:t.onClose,onCatalog:t.onCatalog,backendReady:t.backendReady,sessionId:t.sessionId}):null,t.kind==="preview"&&t.previewNode?(0,Q.jsx)(ur,{node:t.previewNode,onClose:t.onClose,onToast:t.onToast,backendReady:t.backendReady,onOpen:t.onOpen}):null,t.kind==="remove"&&t.removeNode?(0,Q.jsx)(br,{node:t.removeNode,onClose:t.onClose,onConfirm:t.onConfirmRemove}):null,t.kind==="migrate"&&t.migrateNode?(0,Q.jsx)(gr,{node:t.migrateNode,onClose:t.onClose,onMigrate:t.onMigrate}):null]}):null}function hr(t){try{localStorage.setItem(ro,JSON.stringify(t))}catch{}}function nn(t){let e=null,o=()=>{e!==null&&(clearTimeout(e),e=null)},a=n=>{typeof n=="function"?n():hr(n)};return{schedule(n){o(),e=setTimeout(()=>{e=null,a(n)},t)},flush(n){o(),a(n)},cancel:o}}var st=require("react/jsx-runtime");function rn(t){let e=1;for(let o of t)o.placement.zIndex>e&&(e=o.placement.zIndex);return e+1}function wr(t,e,o,a){let n=co[e],i=t.length%6*28;return{x:o+i,y:a+i+n.height*0}}function ln(t){let e=(0,de.useRef)(!1),o=(0,de.useRef)(0),[a,n]=(0,de.useState)(!1),[i,d]=(0,de.useState)("idle"),[p,C]=(0,de.useState)([]),[w,u]=(0,de.useState)(mo),[g,k]=(0,de.useState)("session"),[j,z]=(0,de.useState)(null),[A,U]=(0,de.useState)(null),[T,G]=(0,de.useState)(""),[v,D]=(0,de.useState)(""),[y,O]=(0,de.useState)(null),[Z,I]=(0,de.useState)(null),[m,l]=(0,de.useState)(()=>new Set),[x,V]=(0,de.useState)(()=>new Set),[P,ne]=(0,de.useState)(null),[oe,be]=(0,de.useState)({w:800,h:560}),Me=(0,de.useRef)(nn(500)).current,Te=(0,de.useRef)(null),Ce=(0,de.useRef)(null),X=(0,de.useRef)(null),Ve=(0,de.useRef)(null),Ne=(0,de.useRef)({version:1,nodes:p,viewport:w,viewMode:g,lastAiNodeId:j});Ne.current={version:1,nodes:p,viewport:w,viewMode:g,lastAiNodeId:j};let fe=(0,de.useRef)(p);fe.current=p;let ce=typeof t.sessionId=="string"?t.sessionId:"session-local",[ze,me]=(0,de.useState)(Ha),[Ze,ot]=(0,de.useState)(Os);(0,de.useEffect)(()=>{let _=!1;return(async()=>{let Y=await Gs();if(_)return;if(!Y){d("offline");return}let se=await Js(ce);_||(se!==null&&(o.current=se.rev,Ne.current=se,C(se.nodes),u(se.viewport),k(se.viewMode),se.lastAiNodeId&&z(se.lastAiNodeId),se.currentProjectId&&me(se.currentProjectId),se.currentProjectLabel&&ot(se.currentProjectLabel)),e.current=!0,n(!0),d("idle"))})(),()=>{_=!0}},[ce]);let Fe=(0,de.useRef)(Promise.resolve()),Ee=(0,de.useCallback)(_=>{d("saving"),Fe.current=Fe.current.catch(()=>{}).then(()=>Xs(_,o.current,ce)).then(Y=>{Y.ok&&typeof Y.rev=="number"?(o.current=Y.rev,d("idle")):Y.conflict?(d("conflict"),ve("\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u52A0\u8F7D\u6700\u65B0\u5185\u5BB9")):d("offline")})},[ce]),ke=(0,de.useCallback)(_=>{let Y={version:1,nodes:_.nodes??Ne.current.nodes,viewport:_.viewport??Ne.current.viewport,viewMode:_.viewMode??Ne.current.viewMode,lastAiNodeId:_.lastAiNodeId===void 0?Ne.current.lastAiNodeId:_.lastAiNodeId};Ne.current=Y,_.nodes!==void 0||_.lastAiNodeId!==void 0?Ee(Y):Me.schedule(()=>Ee(Y))},[Ee,Me]);(0,de.useEffect)(()=>()=>{Me.cancel(),Te.current&&clearTimeout(Te.current),Ce.current&&clearTimeout(Ce.current),X.current&&clearTimeout(X.current)},[Me]);let ye=(0,de.useRef)(new Set);(0,de.useEffect)(()=>{if(!a)return;let _=p.filter(c=>(c.type==="markdown"||c.type==="plainText")&&typeof c.path=="string"&&c.path!==""&&!c.content&&!ye.current.has(c.id));if(_.length===0)return;let Y=!1,se=(c,$)=>{(async()=>{try{let he=await fetch(aa(c.id));if(!he.ok){$<3&&!Y&&setTimeout(()=>{Y||se(c,$+1)},500*($+1));return}let Ae=await he.text();if(Y)return;ye.current.add(c.id);let ht=Ae.length>120*1024?`${Ae.slice(0,120*1024)}
\u2026\uFF08\u5185\u5BB9\u8FC7\u957F\uFF0C\u5DF2\u622A\u65AD\uFF09`:Ae,Nt=fe.current.map(St=>St.id===c.id?{...St,content:ht}:St);fe.current=Nt,C(Nt),ke({nodes:Nt})}catch{}})()};return _.forEach(c=>se(c,0)),()=>{Y=!0}},[a,p]),(0,de.useEffect)(()=>{let _=setTimeout(()=>D(T),180);return()=>clearTimeout(_)},[T]),(0,de.useEffect)(()=>{let _=Ve.current;if(!_)return;let Y=_.querySelector(".cg-stage");if(!(Y instanceof HTMLElement))return;let se=new ResizeObserver(()=>{let c=Y.getBoundingClientRect();be({w:c.width,h:c.height})});return se.observe(Y),()=>se.disconnect()},[]);let ve=(0,de.useCallback)(_=>{ne(_),X.current&&clearTimeout(X.current),X.current=setTimeout(()=>ne(null),1600)},[]),M=(0,de.useCallback)(_=>{V(new Set([_])),Ce.current&&clearTimeout(Ce.current),Ce.current=setTimeout(()=>V(new Set),1800)},[]),F=(0,de.useMemo)(()=>p.filter(_=>Hs(_,g,ce,ze)),[p,g,ce,ze]),Se=(0,de.useMemo)(()=>{let _=new Set,Y=v.trim();if(!Y)return _;for(let se of F)go(se,Y)&&_.add(se.id);return _},[v,F]),xe=v.trim().length>0,je=w.scale<.36,et=Z?p.find(_=>_.id===Z)??null:null,He=et,Je=(0,de.useCallback)((_,Y)=>{u(_),Y&&ke({viewport:_})},[ke]),N=(0,de.useCallback)(_=>{k(_),ke({viewMode:_})},[ke]),W=(0,de.useCallback)((_,Y)=>{C(_),ke({...Y,nodes:_})},[ke]),ue=(0,de.useCallback)(_=>{let{x:Y,y:se,...c}=_,$=Fs(),he=co[c.type],Ae=wr(p,c.type,Y??360,se??160),ht={...c,id:$,createdAt:Date.now(),placement:{x:Y??Ae.x,y:se??Ae.y,width:he.width,height:he.height,zIndex:rn(p)}},Nt=[...p,ht];return W(Nt),U($),M($),ht},[p,M,W]),Ue=(0,de.useCallback)(_=>{let Y=Ba(_.path);if(!Y)return;let se=qa(Y);ue({type:se,title:po(Y),scope:"session",scopeLabel:$a,sessionId:ce,projectId:ze,path:Y,unverified:!0,meta:{mtime:"\u672A\u9A8C\u8BC1"}}),O(null),ve(`\u5DF2\u4E0A\u677F\uFF1A${po(Y)}`)},[ue,ze,ce,ve]),L=(0,de.useCallback)(_=>{ue({type:_.type,title:_.title,scope:"session",scopeLabel:$a,sessionId:ce,projectId:ze,content:_.content}),O(null),ve("\u4FBF\u7B7E\u5DF2\u4E0A\u677F")},[ue,ze,ce,ve]),we=(0,de.useCallback)((_,Y,se,c)=>{ue({type:se,title:_,scope:"session",scopeLabel:$a,sessionId:ce,projectId:ze,path:Y,unverified:!0,meta:c?{size:c,mtime:"\u672A\u9A8C\u8BC1"}:void 0}),O(null),ve(`\u5DF2\u4E0A\u677F\uFF1A${_}`)},[ue,ze,ce,ve]),nt=(0,de.useCallback)((_,Y,se,c)=>{C($=>{let he=$.map(Ae=>Ae.id!==_?Ae:{...Ae,placement:{...Ae.placement,x:Y,y:se}});return c&&ke({nodes:he}),he})},[ke]),Be=(0,de.useCallback)((_,Y,se,c)=>{C($=>{let he=$.map(Ae=>Ae.id!==_?Ae:{...Ae,placement:{...Ae.placement,width:Y,height:se}});return c&&ke({nodes:he}),he})},[ke]),dt=(0,de.useCallback)(_=>{U(_),_&&C(Y=>{let se=rn(Y);return Y.map(c=>c.id===_?{...c,placement:{...c.placement,zIndex:se}}:c)})},[]),pe=(0,de.useCallback)((_,Y)=>{C(se=>{let c=se.map($=>$.id===_?{...$,content:Y}:$);return ke({nodes:c}),c})},[ke]),tt=(0,de.useCallback)(async(_,Y)=>{let se=p.find(he=>he.id===_);if(!se)return;let c=Y==="id"?se.id:Y==="title"?se.title:Y==="path"?se.path??"":$s(se);if(!c){ve("\u6CA1\u6709\u53EF\u590D\u5236\u7684\u8DEF\u5F84");return}let $=await Vs(c);ve($?Y==="id"?"\u5DF2\u590D\u5236 ID":Y==="title"?"\u5DF2\u590D\u5236\u6807\u9898":Y==="path"?"\u5DF2\u590D\u5236\u8DEF\u5F84":"\u5DF2\u590D\u5236\u5F15\u7528\u4E32":"\u590D\u5236\u5931\u8D25")},[p,ve]),gt=(0,de.useCallback)(_=>{I(_),O("remove")},[]),S=(0,de.useCallback)(async _=>{let Y=p.find(c=>c.id===_);if(!Y?.path){ve("\u8BE5\u8282\u70B9\u6CA1\u6709\u672C\u5730\u8DEF\u5F84\u53EF\u6253\u5F00");return}let se=await Qs(_);ve(se.ok?`\u5DF2\u7528\u9ED8\u8BA4\u5E94\u7528\u6253\u5F00\uFF1A${Y.title}`:`\u6253\u5F00\u5931\u8D25\uFF1A${se.error??"\u672A\u77E5\u9519\u8BEF"}`)},[p,ve]),re=(0,de.useCallback)(async _=>{let Y=p.find(c=>c.id===_);if(!Y?.path){ve("\u8BE5\u8282\u70B9\u6CA1\u6709\u672C\u5730\u8DEF\u5F84\u53EF\u6253\u5F00");return}let se=await Zs(_);ve(se.ok?`\u5DF2\u5728\u6587\u4EF6\u7BA1\u7406\u5668\u4E2D\u6253\u5F00\u6240\u5728\u6587\u4EF6\u5939\uFF1A${Y.title}`:`\u6253\u5F00\u5931\u8D25\uFF1A${se.error??"\u672A\u77E5\u9519\u8BEF"}`)},[p,ve]),at=(0,de.useCallback)(async _=>{let Y=p.find(c=>c.id===_);if(!Y||typeof Y.content!="string"||Y.content===""){ve("\u8BE5\u8282\u70B9\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u5185\u5BB9");return}let se=await Ws(Y.title,Y.content);se.ok?ve(se.message?`\u5DF2\u4FDD\u5B58\uFF1A${Y.title}\uFF08${se.message}\uFF09`:`\u5DF2\u4FDD\u5B58\uFF1A${Y.title}`):se.canceled||ve(`\u4FDD\u5B58\u5931\u8D25\uFF1A${se.message??"\u672A\u77E5\u9519\u8BEF"}`)},[p,ve]),R=(0,de.useCallback)(_=>{I(_),O("migrate")},[]),h=(0,de.useCallback)(async(_,Y)=>{if(!e.current){ve("\u753B\u677F\u672A\u8FDE\u63A5\u540E\u7AEF\uFF0C\u65E0\u6CD5\u8FC1\u79FB\u5F52\u5C5E");return}let se=await tn(_,Y,ce,o.current);if(!se.ok){ve(se.conflict?"\u753B\u677F\u5DF2\u88AB\u5176\u4ED6\u4F1A\u8BDD\u4FEE\u6539\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5":`\u8FC1\u79FB\u5931\u8D25\uFF1A${se.error??"\u672A\u77E5\u9519\u8BEF"}`);return}se.node&&typeof se.rev=="number"&&(o.current=se.rev,C(c=>c.map(he=>he.id===_?{...he,...se.node}:he))),O(null),ve("\u5F52\u5C5E\u5DF2\u8FC1\u79FB")},[e,ce,ve]),te=(0,de.useCallback)(_=>{let se=p.find(c=>c.sessionId===_)?.sessionName??bo(_);ve(`\u6B63\u5728\u8DF3\u8F6C\u5230\u4F1A\u8BDD\uFF1A${se}`),setTimeout(()=>{t.openSession?.(_)},600)},[p,t.openSession,ve]),Ie=(0,de.useCallback)(()=>{if(!Z)return;let _=p.filter(se=>se.id!==Z),Y=j===Z?null:j;W(_,{lastAiNodeId:Y}),z(Y),U(se=>se===Z?null:se),I(null),O(null),ve("\u5DF2\u4ECE\u753B\u677F\u79FB\u9664")},[Z,j,p,ve,W]),De=(0,de.useCallback)(_=>{I(_),O("preview")},[]),Xe=(0,de.useRef)(w),wt=(0,de.useRef)(oe),We=(0,de.useRef)(F);Xe.current=w,wt.current=oe,We.current=F,(0,de.useEffect)(()=>{let _=v.trim();if(!_){l(new Set);return}let Y=We.current.filter(se=>go(se,_));if(l(new Set(Y.map(se=>se.id))),Te.current&&clearTimeout(Te.current),Te.current=setTimeout(()=>l(new Set),1400),Y[0]){let se=Xe.current,c=wt.current;Je(_s(Y[0],se,c.w,c.h),!1),U(Y[0].id)}},[v,Je]);let kt=(0,de.useCallback)(()=>{O(null),I(null)},[]);return(0,st.jsxs)("div",{className:"cg-root",ref:Ve,children:[(0,st.jsxs)("div",{className:"cg-toolbar",children:[(0,st.jsxs)("div",{className:"cg-toolbar-group",children:[(0,st.jsx)("span",{className:"cg-meta",children:"\u89C6\u89D2"}),(0,st.jsxs)("div",{className:"cg-seg",role:"tablist","aria-label":"\u89C6\u89D2\u7B5B\u9009",children:[(0,st.jsx)("button",{type:"button",className:g==="session"?"cg-on":"",onClick:()=>N("session"),children:"\u672C\u4F1A\u8BDD"}),(0,st.jsx)("button",{type:"button",className:g==="project"?"cg-on":"",onClick:()=>N("project"),children:"\u672C\u9879\u76EE"}),(0,st.jsx)("button",{type:"button",className:g==="global"?"cg-on":"",onClick:()=>N("global"),children:"\u6240\u6709\u9879\u76EE"})]})]}),(0,st.jsxs)("label",{className:"cg-search",children:[(0,st.jsx)(pa.IconSearchOutline16,{}),(0,st.jsx)("input",{value:T,placeholder:"\u641C\u7D22\u753B\u677F\u8282\u70B9\u2026",onChange:_=>G(_.target.value)})]}),(0,st.jsxs)("div",{className:"cg-toolbar-group",children:[(0,st.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("path"),children:[(0,st.jsx)(pa.IconPlusOutline16,{})," \u8DEF\u5F84\u4E0A\u677F"]}),(0,st.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("note"),children:[(0,st.jsx)(pa.IconPlusOutline16,{})," \u4FBF\u7B7E"]}),(0,st.jsxs)("button",{type:"button",className:"cg-btn cg-ghost",onClick:()=>O("catalog"),children:[(0,st.jsx)(pa.IconPlusOutline16,{})," \u641C\u7D22\u4E0A\u677F"]})]}),(0,st.jsx)("div",{className:"cg-toolbar-sep"}),(0,st.jsx)("div",{className:"cg-toolbar-group",children:(0,st.jsxs)("button",{type:"button",className:"cg-btn cg-ghost cg-scale",title:"\u590D\u4F4D\u89C6\u89D2",onClick:()=>Je({...mo},!0),children:[Math.round(w.scale*100),"%"]})}),(0,st.jsxs)("span",{className:"cg-meta",children:[F.length,"/",p.length," \u5F20",xe?` \xB7 \u547D\u4E2D ${Se.size}`:""," \xB7 ",g==="session"?"\u672C\u4F1A\u8BDD":g==="project"?Ze:"\u6240\u6709\u9879\u76EE",a?i==="conflict"?" \xB7 \u26A0\uFE0F \u51B2\u7A81\uFF0C\u8BF7\u5237\u65B0":i==="saving"?" \xB7 \u4FDD\u5B58\u4E2D":i==="offline"?" \xB7 \u672A\u8FDE\u63A5\u540E\u7AEF":" \xB7 \u5DF2\u540C\u6B65":" \xB7 \u4EC5\u672C\u5730\u4FDD\u5B58"]})]}),(0,st.jsx)(on,{nodes:F,viewport:w,lod:je,selectedId:A,flashIds:m,highlightIds:x,searchActive:xe,matchIds:Se,currentSessionId:ce,backendReady:a,openSession:te,onViewportChange:Je,onSelect:dt,onMoveNode:nt,onResizeNode:Be,onPreview:De,onOpen:S,onOpenFolder:re,onSave:at,onMigrate:R,onCopy:tt,onAskRemove:gt,onChangeContent:pe}),(0,st.jsx)(sn,{kind:y,previewNode:y==="preview"?et:null,removeNode:y==="remove"?He:null,migrateNode:y==="migrate"&&Z?p.find(_=>_.id===Z)??null:null,backendReady:a,sessionId:ce,onClose:kt,onPath:Ue,onNote:L,onCatalog:we,onConfirmRemove:Ie,onToast:ve,onOpen:S,onMigrate:h}),P?(0,st.jsx)("div",{className:"cg-toast",role:"status",children:P}):null]})}var dn=`/**
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
`;function xr(){if(typeof document>"u")return()=>{};if(document.querySelector(`style[${lo}]`)!==null)return()=>{};let e=document.createElement("style");return e.setAttribute(lo,"1"),e.textContent=dn,document.head.appendChild(e),()=>{e.remove()}}function cn(t,e){let o=xr(),a=e.id??"canvas-hub",n=e.label??"\u753B\u677F",i=e.order??80,d=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:a,order:i,label:()=>n},p=>ln({...p,t:e.t,openSession:e.openSession})));return()=>{d(),o()}}var ua="dsh-ui-filter-bar",pn="dsh-memory-evolve:ui-settings:filter";function Tr(){try{return localStorage.getItem(pn)==="off"?"off":"on"}catch{return"on"}}function Nr(t){try{localStorage.setItem(pn,t)}catch{}}function mn(t){let e=document.documentElement;t==="on"?e.dataset.dshUiFilter="on":delete e.dataset.dshUiFilter}async function Sr(){try{let t=await fetch("/memory-evolve/api/ui-settings/running",{cache:"no-store"});if(!t.ok)return{total:0,groups:[]};let e=await t.json();return Array.isArray(e.groups)?{total:e.total??0,groups:e.groups}:{total:e.total??0,groups:[]}}catch{return{total:0,groups:[]}}}function un(t){let e=Tr(),o=!1,a=!1,n=null,i=null,d=0,p={total:0,groups:[]},C=()=>{a||!o||d===0&&(d=requestAnimationFrame(()=>{if(d=0,a||!o)return;let A=document.getElementById(ua)?.querySelector('.dsh-ui-filter-btn[data-mode="on"]');A!=null&&(A.textContent=`${t.on} (${p.total})`)}))},w=()=>{if(a||!o)return;let A=document.querySelectorAll('div[role="treeitem"][aria-expanded]');for(let U of A){let T=U.getAttribute("aria-expanded")==="false",G=U.textContent??"",v=null,D=-1;for(let Z of p.groups){let I=Z.title??t.ungroupedLabel;I!==""&&G.startsWith(I)&&I.length>D&&(v=Z,D=I.length)}let y=T&&v!==null&&v.running>0,O=U.querySelector(".dsh-ui-ws-run-badge");if(y){let Z=t.runningLabel.replace("{count}",String(v.running));if(O!==null)O.textContent!==Z&&(O.textContent=Z);else{let I=document.createElement("span");I.className="dsh-ui-ws-run-badge",I.textContent=Z,U.appendChild(I)}}else O!==null&&O.remove()}},u=()=>{a||!o||Sr().then(A=>{a||!o||(p=A,C(),w())})},g=()=>{let A=document.createElement("div");A.id=ua,A.className="dsh-ui-filter-bar",A.setAttribute("role","group"),A.setAttribute("aria-label",t.barTitle),A.title=t.barTitle;let U=(T,G)=>{let v=document.createElement("button");return v.type="button",v.className=`dsh-ui-filter-btn${e===T?" dsh-ui-filter-btn-active":""}`,v.dataset.mode=T,v.textContent=G,v.setAttribute("aria-pressed",e===T?"true":"false"),v.addEventListener("click",()=>{if(!(a||!o)){e=T,mn(e),Nr(e);for(let D of A.querySelectorAll(".dsh-ui-filter-btn")){let y=D.dataset.mode===e;D.classList.toggle("dsh-ui-filter-btn-active",y),D.setAttribute("aria-pressed",y?"true":"false")}}}),v};return A.appendChild(U("on",t.on)),A.appendChild(U("off",t.off)),A},k=()=>{if(a||!o||document.getElementById(ua)!==null)return;let A=document.querySelector('[role="tree"]');A===null||A.parentNode===null||(A.parentNode.insertBefore(g(),A),C())},j=()=>{n!==null||a||(n=new MutationObserver(()=>{if(!(a||!o)){if(document.getElementById(ua)===null){k();return}w()}}),n.observe(document.body,{childList:!0,subtree:!0}))},z=()=>{i!==null||a||(i=setInterval(u,5e3))};return{setEnabled(A){a||(o=A,o?(mn(e),k(),j(),z(),u()):(d!==0&&(cancelAnimationFrame(d),d=0),i!==null&&(clearInterval(i),i=null),n?.disconnect(),n=null,document.getElementById(ua)?.remove(),document.querySelectorAll(".dsh-ui-ws-run-badge").forEach(U=>U.remove()),delete document.documentElement.dataset.dshUiFilter))},dispose(){a=!0,d!==0&&(cancelAnimationFrame(d),d=0),i!==null&&(clearInterval(i),i=null),n?.disconnect(),n=null,document.getElementById(ua)?.remove(),document.querySelectorAll(".dsh-ui-ws-run-badge").forEach(A=>A.remove()),delete document.documentElement.dataset.dshUiFilter}}}var yo="data-dsh-ui-wide-chat";function bn(){let t=!1;return{setEnabled(e){if(t)return;let o=document.documentElement;e?o.setAttribute(yo,"on"):o.removeAttribute(yo)},dispose(){t=!0,document.documentElement.removeAttribute(yo)}}}var wo="data-dsh-ui-wide-bubble";function gn(){let t=!1;return{setEnabled(e){if(t)return;let o=document.documentElement;e?o.setAttribute(wo,"on"):o.removeAttribute(wo)},dispose(){t=!0,document.documentElement.removeAttribute(wo)}}}var Cr=2*Math.PI*5.5,Er=30,Ir=40,Pr="--dsw-alias-state-warn-primary",jr="--dsw-alias-state-error-primary";function ko(){return[...document.querySelectorAll('button[aria-haspopup="dialog"] svg circle[stroke-dasharray]')]}function Ar(t){let e=Number.parseFloat((t.getAttribute("stroke-dasharray")??"").split(" ")[0]??"");return!Number.isFinite(e)||e<=0?null:Math.min(100,Math.round(e/Cr*100))}function hn(t,e){let o=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return o===""?e:o}function fn(){let t=!1,e=!1,o=null,a=()=>{if(e)return;let i=hn(Pr,"#d97706"),d=hn(jr,"#dc2626");for(let p of ko()){let C=Ar(p);if(C===null)continue;let w=C>=Ir?d:C>=Er?i:null;w===null?p.style.removeProperty("stroke"):p.style.stroke=w}},n=()=>{o!==null||e||(o=new MutationObserver(()=>{a()}),o.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["stroke-dasharray"]}))};return{setEnabled(i){if(!e)if(t=i,t)a(),n();else{o?.disconnect(),o=null;for(let d of ko())d.style.removeProperty("stroke")}},dispose(){e=!0,o?.disconnect(),o=null;for(let i of ko())i.style.removeProperty("stroke")}}}var vn="/memory-evolve/mermaid/mermaid.min.js",yn="data-me-mermaid",To="data-me-mermaid-rendered",No="data-me-mermaid-failed",xo,Rr=0,wn=new WeakMap;function Mr(){return xo??=new Promise((t,e)=>{document.querySelector(`script[${yn}]`)?.remove();let o=document.createElement("script");o.src=vn,o.setAttribute(yn,"");let a=n=>{xo=void 0,e(new Error(n))};o.onload=()=>{let n=window.mermaid;if(n===void 0){a("mermaid global missing after script load");return}n.initialize({startOnLoad:!1,securityLevel:"strict",suppressErrorRendering:!0,theme:Dr(),themeVariables:{background:"transparent"}}),t(n)},o.onerror=()=>a(`mermaid engine load failed: ${vn}`),document.head.appendChild(o)}),xo}function Dr(){let t=getComputedStyle(document.body).backgroundColor,e=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(t);return e===null?"base":(.299*Number(e[1])+.587*Number(e[2])+.114*Number(e[3]))/255<.5?"dark":"base"}function Lr(t){return t.querySelector('[class*="infostring"]')?.textContent?.trim().toLowerCase()==="mermaid"}function Or(t,e){if(t.querySelector(".me-mermaid-error")!==null)return;let o=t.querySelector("pre");if(o===null)return;let a=document.createElement("div");a.className="me-mermaid-error";let n=e instanceof Error?(String(e.message).split(`
`)[0]??"").slice(0,80):"",i=(document.documentElement.lang??"").toLowerCase().startsWith("zh");a.textContent=i?`\u26A0 mermaid \u6E32\u67D3\u5931\u8D25${n===""?"":`\uFF1A${n}`}\uFF0C\u5DF2\u4FDD\u7559\u4EE3\u7801\uFF08\u53EF\u590D\u5236\u4FEE\u6B63\uFF09`:`\u26A0 mermaid render failed${n===""?"":`: ${n}`}, code kept`,o.insertAdjacentElement("beforebegin",a)}function zr(t){let e=!1,o=t.split(`
`).map(a=>{let n=/^(\s*subgraph\s+)(.+?)\s*$/.exec(a);if(n!==null){let p=n[2];return!p.startsWith('"')&&!p.startsWith("[")&&/[（）()！？!?，。；：、""''【】《》]/.test(p)?(e=!0,`${n[1]}"${p.replace(/"/g,'\\"')}"`):a}let i=/^(\s*\S[^|]*?)\|([^|]*)\|(.*)$/.exec(a);if(i!==null&&i[1].includes("-->")&&!i[2].startsWith('"')&&!i[2].startsWith("'")){let p=kn(i[2]);return p!==i[2]?(e=!0,`${i[1]}|${p}|${i[3]}`):a}let d=/^(\s*\S+?\s*)(\[)([^\]]*)(\])(.*)$/.exec(a);if(d!==null&&!d[3].startsWith('"')&&!d[3].startsWith("'")&&/['"]/.test(d[3])){let p=kn(d[3]);if(p!==d[3])return e=!0,`${d[1]}${d[2]}${p}${d[4]}${d[5]}`}return a});return e?o.join(`
`):null}function kn(t){let e=!0,o=!0;return t.replace(/['"()]/g,a=>{if(a==="'"){let n=e?"\u2018":"\u2019";return e=!e,n}if(a==='"'){let n=o?"\u201C":"\u201D";return o=!o,n}return a==="("?"\uFF08":"\uFF09"})}function xn(t){let e=t.querySelector(".me-mermaid-wrap");if(e===null)return;let o=e.querySelector("svg");if(o===null||t.querySelector(".me-mermaid-download")!==null)return;let n=t.querySelector('[class*="action"]')??e,i=document.createElement("button");i.type="button",i.className="me-mermaid-download";let d=(document.documentElement.lang??"").toLowerCase().startsWith("zh");i.textContent=d?"\u4E0B\u8F7D":"SVG",i.title=d?"\u4E0B\u8F7D\u6B64\u56FE\u4E3A SVG\uFF08\u77E2\u91CF\uFF0C\u53EF\u65E0\u635F\u7F29\u653E\uFF09":"Download diagram as SVG",i.addEventListener("click",p=>{p.stopPropagation(),Fr(o)}),n.appendChild(i)}function Fr(t){let e=new XMLSerializer().serializeToString(t),o=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),a=URL.createObjectURL(o),n=new Date,i=C=>String(C).padStart(2,"0"),d=`${n.getFullYear()}${i(n.getMonth()+1)}${i(n.getDate())}-${i(n.getHours())}${i(n.getMinutes())}`,p=document.createElement("a");p.href=a,p.download=`mermaid-${d}.svg`,document.body.appendChild(p),p.click(),p.remove(),URL.revokeObjectURL(a)}async function $r(t,e,o){if(o.rendering)return;o.rendering=!0;let a;try{a=await Mr()}catch(p){o.engineFails+=1,o.engineFails===1&&console.warn("[dsh-memory-evolve] mermaid engine load failed, will retry:",p);return}let n=[{text:e}],i=zr(e);i!==null&&n.push({text:i});let d;try{for(let p of n){let C=`me-${++Rr}`;try{let w=t.querySelector("pre");if(w===null||!w.isConnected)return;let{svg:u}=await a.render(C,p.text);if(t.querySelector("pre")!==w)return;let k=document.createElement("div");k.className="me-mermaid-wrap",k.innerHTML=u,w.replaceWith(k),o.rendered=!0,o.failCount=0,o.engineFails=0,t.setAttribute(To,""),t.removeAttribute(No),xn(t);return}catch(w){d=w,document.getElementById(`d${C}`)?.remove()}}o.failCount+=1,o.failCount>=2&&(o.rendered=!0,t.setAttribute(To,""),t.setAttribute(No,""),Or(t,d)),console.warn(`[dsh-memory-evolve] mermaid render failed (attempt ${o.failCount}):`,d)}finally{o.rendering=!1}!o.rendered&&t.isConnected&&t.querySelector("pre")!==null&&window.setTimeout(()=>{Wt(t,!0)},200)}function Wt(t,e=!1){if(!Lr(t))return;let o=wn.get(t);o===void 0&&(o={source:"",rendered:!1,rendering:!1,failCount:0,engineFails:0},wn.set(t,o));let a=o;if(a.rendered){if(t.querySelector(".me-mermaid-wrap")===null){if(t.hasAttribute(No))return;a.rendered=!1,a.failCount=0,t.removeAttribute(To),Wt(t,!0);return}xn(t);return}let n=t.querySelector("pre")?.textContent??"";!e&&n===a.source&&a.timer!==void 0||(a.source=n,window.clearTimeout(a.timer),a.timer=window.setTimeout(()=>{(t.querySelector("pre")?.textContent??"")===a.source?a.rendering||$r(t,a.source,a):Wt(t)},e?150:400))}function Tn(){let t,e=!1,o,a=d=>{let p=0;for(let C of d)if(C.type==="childList")for(let w of C.addedNodes){if(p+=1,!(w instanceof HTMLElement))continue;let u=w.classList.contains("md-code-block")?w:w.closest(".md-code-block");if(u instanceof HTMLElement&&Wt(u),u===null)for(let g of w.querySelectorAll(".md-code-block"))Wt(g)}else{let u=(C.target instanceof HTMLElement?C.target:C.target.parentElement)?.closest(".md-code-block");u instanceof HTMLElement&&Wt(u)}p>40&&n()},n=()=>{window.clearTimeout(o);let d=[300,1e3,2500,6e3],p=C=>{C>=d.length||(o=window.setTimeout(()=>{if(!(e||t===void 0)){for(let w of document.querySelectorAll(".md-code-block"))Wt(w);p(C+1)}},d[C]))};p(0)};return{setEnabled:d=>{if(!e)if(d&&t===void 0){t=new MutationObserver(a),t.observe(document.body,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["class"]});for(let p of document.querySelectorAll(".md-code-block"))Wt(p);n()}else!d&&t!==void 0&&(t.disconnect(),t=void 0,window.clearTimeout(o))},dispose(){e=!0,t?.disconnect(),t=void 0,window.clearTimeout(o)}}}var Nn=`/**
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
`;var Sn=`/**
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
`;var Cn=`/**
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
`;var En=`/* \u4F1A\u8BDD\u5E7F\u64AD\u7BA1\u7406 Tab\uFF08bb- \u524D\u7F00\uFF0C\u72EC\u7ACB\u6CE8\u5165\uFF1B\u5E7F\u64AD\u6A21\u5757\u72EC\u7ACB\u6837\u5F0F\uFF09\u3002
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
`;var In=`/**
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
`;var Pn=`/**
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
}`;var jn=`/**
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
`;var An=`/**
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
`;var Rn=`/**
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
`;var Va="data-dsh-mobile-sheet",oa="dsh-mobile-more-btn",So="--dsh-mobile-menu-max-h",zn="--dsh-mobile-menu-left",Fn="--dsh-mobile-menu-width",Co="--dsh-mobile-menu-top",Eo="--dsh-mobile-menu-bottom",Io="data-dsh-mobile-menu-flip";var jo="[data-composer-card] > [data-input-scroll] + div",Po=`${jo} > div:last-of-type > div:has(> button[aria-haspopup="menu"])`,Mn=`${jo} > div:first-child`,Jr='<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="3" cy="8" r="1.5" fill="currentColor"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="13" cy="8" r="1.5" fill="currentColor"/></svg>',Dn=360,Ia=12,Xr=8;function Ua(){let t=document.documentElement;t.style.removeProperty(So),t.style.removeProperty(zn),t.style.removeProperty(Fn),t.style.removeProperty(Co),t.style.removeProperty(Eo),t.removeAttribute(Io)}function sa(){return document.documentElement.hasAttribute(Va)}function Ln(t){let e=document.documentElement;t?e.setAttribute(Va,"on"):e.removeAttribute(Va)}function On(t){let e=document.documentElement;if(!sa()){Ua();return}let o=t??document.querySelector(`${Po}:has(> button[aria-expanded="true"])`);if(o===null){Ua();return}let a=getComputedStyle(o),n=o.getBoundingClientRect();if(a.display==="none"||a.visibility==="hidden"||n.width<=0&&n.height<=0){Ua();return}let i=window.visualViewport,d=i?.offsetTop??0,p=i?.offsetLeft??0,C=i?.width??window.innerWidth,w=i?.height??window.innerHeight,u=document.documentElement.clientHeight||window.innerHeight,g=n.top-Xr,k=Math.floor(g-(d+Ia));if(e.style.setProperty(zn,`${Math.round(p+Ia)}px`),e.style.setProperty(Fn,`${Math.max(1,Math.floor(C-Ia*2))}px`),k>=100){e.removeAttribute(Io),e.style.setProperty(Co,"auto"),e.style.setProperty(Eo,`${Math.max(0,Math.round(u-g))}px`),e.style.setProperty(So,`${Math.min(Dn,k)}px`);return}e.setAttribute(Io,"on"),e.style.setProperty(Co,`${Math.round(d+Ia)}px`),e.style.setProperty(Eo,"auto"),e.style.setProperty(So,`${Math.max(1,Math.min(Dn,Math.floor(w-Ia*2)))}px`)}function $n(){let t=!1,e=null,o=0,a=0,n=new WeakSet,i=()=>{t||a!==0||(a=requestAnimationFrame(()=>{a=0,t||On()}))},d=()=>{if(t)return;let g=document.querySelectorAll(jo);for(let k of g){if(k.querySelector(`.${oa}`)!==null)continue;let j=document.createElement("button");j.type="button",j.className=oa,j.setAttribute("aria-label","\u66F4\u591A\u64CD\u4F5C"),j.setAttribute("aria-haspopup","true"),j.setAttribute("aria-expanded",sa()?"true":"false"),j.innerHTML=Jr,j.addEventListener("click",z=>{z.stopPropagation();let A=!sa();Ln(A),document.querySelectorAll(`.${oa}`).forEach(U=>{U.setAttribute("aria-expanded",A?"true":"false")}),i()}),k.appendChild(j)}sa()&&i()},p=()=>{t||o!==0||(o=requestAnimationFrame(()=>{o=0,t||d()}))},C=g=>{if(!sa())return;let k;g.composedPath().some(z=>z instanceof Element?z.classList.contains(oa)||z.matches('[role="menu"], [role="listbox"], [role="dialog"]')||z.matches(Mn)?!0:z.matches(Po)?(k=z,!0):!1:!1)&&n.add(g),k!==void 0&&On(k)},w=g=>{if(!sa())return;if(n.has(g)){i();return}let k=g.target;if(k===null)return;let j=k instanceof Element?k:k.parentElement;if(j!==null&&j.closest(`.${oa}`)===null){for(let z of document.querySelectorAll(Mn))if(z.contains(k))return;for(let z of document.querySelectorAll(Po))if(z.contains(k))return;j.closest('[role="menu"], [role="listbox"], [role="dialog"]')===null&&(Ln(!1),document.querySelectorAll(`.${oa}`).forEach(z=>{z.setAttribute("aria-expanded","false")}),i())}},u=()=>{sa()&&i()};return d(),e=new MutationObserver(p),e.observe(document.body,{childList:!0,subtree:!0}),document.addEventListener("click",C,!0),document.addEventListener("click",w),window.addEventListener("resize",u),window.visualViewport?.addEventListener("resize",u),window.visualViewport?.addEventListener("scroll",u),()=>{t=!0,o!==0&&(cancelAnimationFrame(o),o=0),a!==0&&(cancelAnimationFrame(a),a=0),e!==null&&e.disconnect(),document.removeEventListener("click",C,!0),document.removeEventListener("click",w),window.removeEventListener("resize",u),window.visualViewport?.removeEventListener("resize",u),window.visualViewport?.removeEventListener("scroll",u),document.documentElement.removeAttribute(Va),Ua(),document.querySelectorAll(`.${oa}`).forEach(g=>{g.parentElement?.removeChild(g)})}}var Hn="memory-evolve",Bn={"tab.label":"\u6280\u80FD\u7BA1\u7406\u5668","tab.label.alt":"\u6280\u80FD\u7BA1\u7406\u5668","header.title":"\u6280\u80FD\u7BA1\u7406\u5668","header.subtitle":"\u7BA1\u7406\u5168\u90E8\u6280\u80FD \xB7 \u81EA\u5B9A\u4E49\u76EE\u5F55 \xB7 \u7981\u7528/\u542F\u7528 \xB7 \u67E5\u770B\u4E0E\u7F16\u8F91","search.placeholder":"\u641C\u7D22\u6280\u80FD\u540D\u79F0\u3001\u63CF\u8FF0\u6216\u9002\u7528\u573A\u666F\u2026","search.empty":"\u6CA1\u6709\u5339\u914D\u7684\u6280\u80FD","filter.all":"\u5168\u90E8","status.enabled":"\u53EF\u7528",disable:"\u7981\u7528",enable:"\u542F\u7528","disabled.badge":"\u5DF2\u7981\u7528","disabled.hint":"\u5DF2\u7981\u7528\uFF1A\u4E0D\u4F1A\u51FA\u73B0\u5728\u6A21\u578B\u7684\u6280\u80FD\u76EE\u5F55\u4E2D","protected.badge":"\u7CFB\u7EDF","protected.hint":"\u7CFB\u7EDF\u6280\u80FD\uFF08project \u6765\u6E90\uFF09\uFF0C\u4E0D\u53EF\u7981\u7528","toggle.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{message}","manage.dirs":"\u7BA1\u7406\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","dirs.title":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","dirs.help":"\u6DFB\u52A0\u5305\u542B\u6280\u80FD\u7684\u76EE\u5F55\uFF08\u652F\u6301 <\u76EE\u5F55>/<\u6280\u80FD>/SKILL.md \u6216 <\u76EE\u5F55>/<\u6280\u80FD>.md \u5E03\u5C40\uFF09\u3002\u76EE\u5F55\u6C38\u4E45\u4FDD\u5B58\u5728\u63D2\u4EF6 state.json\uFF0C\u91CD\u542F\u540E\u81EA\u52A8\u52A0\u8F7D\uFF1B\u4E0E\u5DF2\u6709\u6280\u80FD\u6839\u76EE\u5F55\u91CD\u53E0\u7684\u8DEF\u5F84\u4F1A\u88AB\u62D2\u7EDD\u3002","dirs.placeholder":"\u8F93\u5165\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5982 ~/.hermes/skills/\u2026","dirs.add":"\u6DFB\u52A0","dirs.remove":"\u79FB\u9664","dirs.empty":"\u8FD8\u6CA1\u6709\u81EA\u5B9A\u4E49\u76EE\u5F55","dirs.missing":"\u76EE\u5F55\u4E0D\u5B58\u5728","pager.prev":"\u4E0A\u4E00\u9875","pager.next":"\u4E0B\u4E00\u9875","pager.page":"{page} / {total} \u9875","skills.count":"{count} \u4E2A\u6280\u80FD","roots.count":"{count} \u4E2A\u76EE\u5F55","pane.skills":"\u6280\u80FD","pane.files":"\u6587\u4EF6","pane.editor":"\u7F16\u8F91","no.skill.selected":"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u6280\u80FD\u5F00\u59CB\u6D4F\u89C8","no.root":"\u8BE5\u6280\u80FD\u6CA1\u6709\u53EF\u6D4F\u89C8\u7684\u672C\u5730\u76EE\u5F55","no.entries":"\u7A7A\u76EE\u5F55","no.file":"\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u67E5\u770B\u6216\u7F16\u8F91","not.text":"\u4E0D\u662F\u6587\u672C\u6587\u4EF6\uFF0C\u65E0\u6CD5\u9884\u89C8","too.large":"\u6587\u4EF6\u8D85\u8FC7\u8BFB\u53D6\u4E0A\u9650\uFF08512 KiB\uFF09","read.failed":"\u8BFB\u53D6\u5931\u8D25\uFF1A{message}","write.failed":"\u4FDD\u5B58\u5931\u8D25\uFF1A{message}",save:"\u4FDD\u5B58",saving:"\u4FDD\u5B58\u4E2D\u2026",saved:"\u5DF2\u4FDD\u5B58",edit:"\u7F16\u8F91",cancel:"\u53D6\u6D88",discard:"\u653E\u5F03","dirty.hint":"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539",readonly:"\u53EA\u8BFB",bytes:"{size} B",kib:"{size} KiB",mib:"{size} MiB","dir.up":"\u4E0A\u7EA7\u76EE\u5F55","open.folder":"\u6253\u5F00\u76EE\u5F55","source.badge":"{source}",invocable:"\u53EF\u8C03\u7528","when.to.use":"\u9002\u7528\u573A\u666F",description:"\u63CF\u8FF0","resource.directory":"\u76EE\u5F55","resource.url":"\u94FE\u63A5","resource.opaque":"\u8D44\u6E90",refresh:"\u5237\u65B0","loading.skills":"\u6B63\u5728\u52A0\u8F7D\u6280\u80FD\u2026","loading.dir":"\u52A0\u8F7D\u4E2D\u2026","tree.collapse":"\u6298\u53E0","tree.expand":"\u5C55\u5F00",path:"\u8DEF\u5F84","root.label":"\u76EE\u5F55","editor.placeholder":"\u5728\u5DE6\u4FA7\u6587\u4EF6\u6811\u4E2D\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u5F00\u59CB\u7F16\u8F91\u3002","status.ready":"\u5C31\u7EEA","status.skill":"\u6280\u80FD","status.file":"\u6587\u4EF6","status.unsaved":"\u672A\u4FDD\u5B58","status.saved":"\u5DF2\u4FDD\u5B58","confirm.discard.title":"\u653E\u5F03\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF1F","confirm.discard.body":"\u4F60\u5BF9 {name} \u7684\u4FEE\u6539\u5C1A\u672A\u4FDD\u5B58\uFF0C\u5207\u6362\u6587\u4EF6\u5C06\u4E22\u5931\u8FD9\u4E9B\u4FEE\u6539\u3002","confirm.discard.ok":"\u653E\u5F03\u4FEE\u6539","mtime.label":"\u4FEE\u6539\u4E8E {time}","open.in.new.tab":"\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00",preview:"\u9884\u89C8","memoryTab.label":"\u8BB0\u5FC6","memoryTab.label.pending":"\u{1F534} \u8BB0\u5FC6 ({count})","skillsTab.label":"\u6280\u80FD","skillsTab.label.pending":"\u{1F534} \u6280\u80FD ({count})","todosTab.label":"\u5F85\u529E","todosTab.label.pending":"\u{1F534} \u5F85\u529E ({count})","coiTab.label":"COI\u8C03\u5EA6","coiTab.label.pending":"\u{1F534} COI\u8C03\u5EA6 ({count})","broadcastTab.label":"\u4F1A\u8BDD\u5E7F\u64AD","broadcast.tab.guide":"\u6307\u5357","broadcast.tab.messages":"\u6D88\u606F","broadcast.tab.rooms":"\u623F\u95F4","broadcast.tab.settings":"\u8BBE\u7F6E","broadcast.settings.wsCoord.title":"\u5DE5\u4F5C\u533A\u534F\u8C03\uFF08ws-coord\uFF09","broadcast.settings.wsCoord.desc":'\u540C\u5DE5\u4F5C\u533A\u591A\u4F1A\u8BDD\u5E76\u884C\u65F6\u7684\u8D44\u6E90\u5360\u7528\u534F\u8C03\u2014\u2014\u58F0\u660E\u8981\u6539\u7684\u6587\u4EF6\uFF08de_ws_declare\uFF09\u3001\u5199\u540E\u81EA\u52A8\u767B\u8BB0\u5360\u7528\u3001\u5199\u524D\u51B2\u7A81\u68C0\u6D4B\uFF08\u8F6F\u6A21\u5F0F\u8B66\u544A / \u786C\u62E6\u622A\u53EF\u5207\u6362\uFF09\u3001de_ws_status \u67E5\u770B"\u8C01\u5728\u8DD1\u3001\u5728\u5E72\u4EC0\u4E48"\u3002\u4EE5\u4E0B\u5F00\u5173\u53EA\u63A7\u5236\u672C\u5B50\u529F\u80FD\uFF1B\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300D\u2192\u300C\u914D\u7F6E\u300D\u91CC\u3002',"broadcast.settings.wsCoord.enabled":"\u542F\u7528\u5DE5\u4F5C\u533A\u534F\u8C03","broadcast.settings.wsCoord.enabled.hint":"\u6CE8\u518C de_ws_declare / de_ws_status / de_ws_release \u5DE5\u5177 + \u5199\u524D\u51B2\u7A81\u68C0\u6D4B\u4E8B\u4EF6\u76D1\u542C + \u6D3B\u52A8\u611F\u77E5\u5FEB\u7167\u6BB5\u3002\u4F9D\u8D56\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\uFF08\u5E7F\u64AD\u5173\u95ED\u65F6\u672C\u529F\u80FD\u4E0D\u53EF\u7528\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED","broadcast.settings.wsCoord.snapshot":"\u6D3B\u52A8\u5FEB\u7167\u6BB5","broadcast.settings.wsCoord.snapshot.hint":"\u5DE5\u4F5C\u533A\u6D3B\u8DC3\u4F1A\u8BDD \u22652 \u65F6\uFF0C\u6BCF\u56DE\u5408\u5FEB\u7167\u6CE8\u5165\u4E00\u884C\u3010\u5DE5\u4F5C\u533A\u6D3B\u52A8\u3011\uFF08\u5E26\u5F53\u524D\u65F6\u95F4\uFF0C\u542B\u5404\u4F1A\u8BDD\u5728\u505A\u4EC0\u4E48\uFF09\uFF1B0~1 \u4E2A\u4F1A\u8BDD\u65F6\u96F6\u5F00\u9500","broadcast.settings.wsCoord.enforce":"\u786C\u62E6\u622A\u6A21\u5F0F","broadcast.settings.wsCoord.enforce.hint":"\u9ED8\u8BA4\u5173\uFF08\u8F6F\u6A21\u5F0F\uFF1A\u5148\u4FE1\u4EFB AI\uFF0C\u51B2\u7A81\u53EA\u8B66\u544A\u4E0D\u62E6\u622A\uFF09\uFF1B\u6253\u5F00\u540E\u5347\u7EA7\u4E3A\u786C\u62E6\u622A\u2014\u2014\u5199\u5165\u4ED6\u4EBA\u5360\u7528\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB\u5DE5\u5177\u5C42\u76F4\u63A5\u62D2\u7EDD\uFF08deny\uFF09\uFF0CAI \u770B\u5230\u62D2\u7EDD\u539F\u56E0\u81EA\u4E3B\u8C03\u6574","broadcast.guide.intro.title":"\u4F1A\u8BDD\u5E7F\u64AD\u662F\u4EC0\u4E48","broadcast.guide.intro.body":"\u4F1A\u8BDD\u5E7F\u64AD = DSH \u4F1A\u8BDD\u4E4B\u95F4\u7684\u6D88\u606F\u901A\u9053\uFF1A\u7ED9\u5176\u4ED6\u4F1A\u8BDD\u53D1\u6D88\u606F\uFF08AI \u7528 de_broadcast send \u53D1\u9001\uFF09\uFF0C\u5BF9\u65B9\u4E0B\u6B21\u751F\u6210\u524D\u5FEB\u7167\u81EA\u52A8\u51FA\u73B0\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u63D0\u793A\uFF1B\u6D88\u606F\u6309\u6536\u4EF6\u7BB1\u7BA1\u7406\u2014\u2014\u4E3B\u9898 + \u7B80\u4ECB\uFF0C\u5168\u5458\u5DF2\u8BFB\u540E\u81EA\u52A8\u5220\u9664\u3002","broadcast.guide.send.title":"\u600E\u4E48\u53D1\u6D88\u606F","broadcast.guide.send.body":"\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u7ED9 XX \u4F1A\u8BDD\u53D1\u5E7F\u64AD\u2026\u300D\u5373\u53EF\uFF08\u9ED8\u8BA4\u4E00\u5BF9\u4E00\uFF0C\u6536\u4EF6\u4EBA = \u5BF9\u65B9\u7684\u4F1A\u8BDD ID\uFF09\uFF1A","broadcast.guide.send.item1":"\u4E00\u5BF9\u4E00\uFF1A\u6307\u5B9A\u63A5\u6536\u65B9\u4F1A\u8BDD ID\uFF08\u628A\u300C\u590D\u5236\u4F1A\u8BDD ID\u300D\u7684\u7ED3\u679C\u53D1\u7ED9\u5BF9\u65B9\uFF0C\u5BF9\u65B9 AI \u5C31\u80FD\u7ED9\u4F60\u53D1\uFF09\uFF1B","broadcast.guide.send.item2":"\u623F\u95F4\uFF1A\u591A\u4EBA\u804A\u5929\u5BA4\uFF0C\u8DE8\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6210\u5458\u90FD\u80FD\u770B\u5230\uFF08\u53D1\u9001\u7ED9 room:<\u623F\u95F4id>\uFF09\uFF1B","broadcast.guide.send.item3":"\u9879\u76EE\uFF1A\u8BE5\u5DE5\u4F5C\u76EE\u5F55\u5185\u6240\u6709\u4F1A\u8BDD\u53EF\u89C1\uFF08\u53D1\u9001\u7ED9 project:/\u7EDD\u5BF9\u8DEF\u5F84\uFF09\u3002","broadcast.guide.inbox.title":"\u6536\u4EF6\u7BB1\uFF08\u6D88\u606F\u9875\uFF09","broadcast.guide.inbox.body":"\u6D88\u606F\u5217\u8868\u9ED8\u8BA4\u53EA\u770B\u672A\u8BFB\u7684\u975E\u623F\u95F4\u6D88\u606F\uFF08\u5DF2\u8BFB\u81EA\u52A8\u9690\u85CF\uFF1B\u623F\u95F4\u6D88\u606F\u8FDB\u5BF9\u5E94\u623F\u95F4\u67E5\u770B\uFF09\uFF1A","broadcast.guide.inbox.item1":"\u7B5B\u9009\uFF1A\u672A\u8BFB / \u5168\u90E8 / \u5DF2\u8BFB\uFF1B\u641C\u7D22\u4E3B\u9898\u3001\u53D1\u4EF6\u4EBA\u3001\u5185\u5BB9\uFF1B\u5206\u9875 20 \u6761 / \u9875\uFF1B","broadcast.guide.inbox.item2":"\u70B9\u300C\u5C55\u5F00\u5168\u6587\u300D\u770B\u5B8C\u6574\u5185\u5BB9\uFF1B\u7EA2\u8272\u300C\u5220\u9664\u300D= \u8D85\u7BA1\u5220\u9664\uFF08\u5BF9\u6240\u6709\u4EBA\u4E0D\u53EF\u89C1\uFF09\uFF1B","broadcast.guide.inbox.item3":"\u4E00\u5BF9\u4E00\u6D88\u606F\u5168\u90E8\u63A5\u6536\u65B9\u5DF2\u8BFB\u540E\u81EA\u52A8\u5220\u9664\uFF08\u5DF2\u6D88\u8D39\uFF0C\u4E0D\u5360\u5217\u8868\uFF09\u3002","broadcast.guide.room.title":"\u623F\u95F4\u9875\uFF1A\u591A\u4EBA\u534F\u4F5C\u804A\u5929\u5BA4","broadcast.guide.room.body":"\u623F\u95F4 = \u591A\u4EBA\u534F\u4F5C\u804A\u5929\u5BA4\uFF1A","broadcast.guide.room.item1":"\u5C55\u5F00\u623F\u95F4\u770B\u6210\u5458\u5728\u7EBF\u72B6\u6001\uFF1A\u{1F7E2} running = \u6B63\u5728\u751F\u6210\uFF08\u53EF\u7B49\u5B83 / \u5B83\u56DE\u5408\u5185\u53EF\u89C1\uFF09\uFF0C\u26AA idle / unknown = \u5DF2\u7ED3\u675F\u56DE\u5408\u6216\u672A\u8BB0\u5F55\uFF08\u4E0D\u8981\u50BB\u7B49\uFF09\uFF1B","broadcast.guide.room.item2":"\u623F\u95F4\u6D88\u606F\u4E0E\u6536\u4EF6\u7BB1\u540C\u6B3E\u7B5B\u9009 / \u641C\u7D22 / \u5206\u9875\uFF1B\u521B\u5EFA\u8005\u53EF\u8E22\u4EBA\u3001\u89E3\u6563\u623F\u95F4\uFF08\u89E6\u53D1\u7CFB\u7EDF\u901A\u77E5\uFF09\uFF1B","broadcast.guide.room.item3":"\u5DF2\u89E3\u6563\u623F\u95F4\u4FDD\u7559\u8BB0\u5F55\u53EF\u8FFD\u6EAF\uFF0C\u6210\u5458\u4E0D\u80FD\u518D\u52A0\u5165 / \u53D1\u6D88\u606F\u3002","broadcast.guide.alias.title":"\u4F1A\u8BDD\u522B\u540D\uFF1A\u4E00\u773C\u8BA4\u51FA\u662F\u8C01","broadcast.guide.alias.body":"\u7ED9\u4F1A\u8BDD\u8BBE\u7F6E\u53CB\u597D\u540D\uFF08\u226410 \u5B57\uFF09\u2014\u2014\u5FEB\u7167\u3001\u5217\u8868\u3001\u6D88\u606F\u91CC\u90FD\u663E\u793A\u522B\u540D\uFF08\u77ED ID\uFF09\uFF0C\u4E00\u773C\u8BA4\u51FA\u662F\u8C01\uFF1A","broadcast.guide.alias.item1":"\u9876\u90E8\u300C\u6211\u7684\u4F1A\u8BDD\u300D\u884C\uFF1A\u590D\u5236\u4F1A\u8BDD ID / \u590D\u5236\u522B\u540D\uFF0C\u628A\u7ED3\u679C\u53D1\u7ED9\u5BF9\u65B9\u5C31\u80FD\u5F00\u804A\uFF1B","broadcast.guide.alias.item2":"\u4F1A\u8BDD\u9875\u53F3\u4E0A\u89D2 \u29C9 \u590D\u5236\u4F1A\u8BDDID / \u270E \u522B\u540D \u6309\u94AE\u4E5F\u53EF\u8BBE\u7F6E\u3002","broadcast.guide.switch.title":"\u5F00\u5173","broadcast.guide.switch.body":"\u4F1A\u8BDD\u5E7F\u64AD\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5F00\u5173\uFF0C\u5237\u65B0\u540E\u672C Tab \u51FA\u73B0\u3002","broadcast.guide.wscoord.title":"\u5DE5\u4F5C\u533A\u534F\u8C03\uFF1A\u591A\u4EBA\u5E76\u884C\u4E0D\u6253\u67B6","broadcast.guide.wscoord.body":"\u540C\u4E00\u9879\u76EE\u591A\u4E2A\u4F1A\u8BDD\u5E76\u884C\u6539\u4EE3\u7801\u65F6\uFF0C\u7528\u300C\u8BBE\u7F6E\u300D\u9875\u7684\u5DE5\u4F5C\u533A\u534F\u8C03\u907F\u514D\u4E92\u76F8\u8986\u76D6\uFF1A","broadcast.guide.wscoord.item1":"\u5F00\u5DE5\u524D\u8BA9 AI\u300C\u58F0\u660E\u4E00\u4E0B\u6211\u8981\u6539\u54EA\u4E9B\u6587\u4EF6\u300D\uFF08de_ws_declare\uFF09\u2014\u2014\u5176\u4ED6\u4EBA\uFF08\u53CA\u5176 AI\uFF09\u80FD\u770B\u5230\u8C01\u5728\u6539\u4EC0\u4E48\uFF1B","broadcast.guide.wscoord.item2":"\u5199\u524D\u51B2\u7A81\u68C0\u6D4B\uFF1A\u8F6F\u6A21\u5F0F\u5148\u8B66\u544A\uFF08\u9ED8\u8BA4\uFF09\uFF1B\u53EF\u5207\u786C\u62E6\u622A\u2014\u2014\u5199\u5165\u4ED6\u4EBA\u5360\u7528\u4E2D\u7684\u6587\u4EF6\u4F1A\u88AB\u76F4\u63A5\u62D2\u7EDD\uFF1B","broadcast.guide.wscoord.item3":"\u300C\u6D3B\u52A8\u300D\u6982\u89C8\uFF08de_ws_status\uFF09\u968F\u65F6\u770B\u8C01\u5728\u8DD1\u3001\u5728\u5E72\u4EC0\u4E48\uFF1B\u5F00\u5173\u5728\u300C\u8BBE\u7F6E\u300D\u9875\uFF08\u4F9D\u8D56\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5927\u5F00\u5173\uFF09\u3002","broadcast.mySessionId":"\u6211\u7684\u4F1A\u8BDD ID","broadcast.copyId":"\u590D\u5236","broadcast.copied":"\u5DF2\u590D\u5236","broadcast.loading":"\u52A0\u8F7D\u4E2D\u2026","broadcast.refresh":"\u5237\u65B0","broadcast.messages.empty":"\uFF08\u6682\u65E0\u6D88\u606F\uFF09","broadcast.messages.sender":"\u6765\u81EA","broadcast.messages.to":"\u6536\u4EF6\u4EBA","broadcast.messages.direct":"\u79C1\u4FE1","broadcast.messages.room":"\u623F\u95F4","broadcast.messages.project":"\u9879\u76EE","broadcast.messages.unread":"\u672A\u8BFB","broadcast.messages.long":"\u957F\u5185\u5BB9","broadcast.message.expand":"\u5C55\u5F00\u5168\u6587","broadcast.message.collapse":"\u6536\u8D77","broadcast.message.delete":"\u5220\u9664","broadcast.message.deleteConfirm":`\u5220\u9664\u8FD9\u6761\u6D88\u606F\uFF1F\uFF08\u8D85\u7BA1\u64CD\u4F5C\uFF0C\u6D88\u606F\u5BF9\u6240\u6709\u4EBA\u4E0D\u53EF\u89C1\uFF09

{subject}`,"broadcast.message.deleted":"\u5DF2\u5220\u9664","broadcast.copyAlias":"\u590D\u5236\u522B\u540D","broadcast.msg.unread":"\u672A\u8BFB","broadcast.msg.read":"\u5DF2\u8BFB","broadcast.filter.unread":"\u672A\u8BFB","broadcast.filter.all":"\u5168\u90E8","broadcast.filter.read":"\u5DF2\u8BFB","broadcast.searchPh":"\u641C\u7D22\u4E3B\u9898/\u53D1\u4EF6\u4EBA/\u5185\u5BB9\u2026","broadcast.pagePrev":"\u4E0A\u4E00\u9875","broadcast.pageNext":"\u4E0B\u4E00\u9875","broadcast.pageInfo":"{page}/{total} \u9875","broadcast.room.detail":"\u8BE6\u60C5","broadcast.room.messages":"\u623F\u95F4\u6D88\u606F","broadcast.room.messages.empty":"\uFF08\u6682\u65E0\u623F\u95F4\u6D88\u606F\uFF09","broadcast.messages.roomInRooms":"\u623F\u95F4\u6D88\u606F\u8BF7\u5728\u300C\u623F\u95F4\u300D\u9875\u8FDB\u5165\u5BF9\u5E94\u623F\u95F4\u67E5\u770B","broadcast.rooms.empty":"\uFF08\u6682\u65E0\u623F\u95F4\uFF09","broadcast.roomSearchPh":"\u641C\u7D22\u623F\u95F4\u540D\u2026","broadcast.roomStatus.all":"\u5168\u90E8","broadcast.roomStatus.active":"\u6D3B\u8DC3","broadcast.roomStatus.dissolved":"\u5DF2\u89E3\u6563","broadcast.roomDays.0":"\u5168\u90E8\u65F6\u95F4","broadcast.roomDays.7":"\u6700\u8FD17\u5929","broadcast.roomDays.30":"\u6700\u8FD130\u5929","broadcast.room.status.active":"\u6D3B\u8DC3","broadcast.room.status.idle":"\u7A7A\u95F2","broadcast.room.status.dissolved":"\u5DF2\u89E3\u6563","broadcast.room.online":"{online}/{total} \u5728\u7EBF","broadcast.room.members":"\u6210\u5458","broadcast.room.kick":"\u8E22\u51FA","broadcast.room.kickConfirm":"\u8E22\u51FA\u6210\u5458 {member}\uFF1F\uFF08\u5C06\u53D1\u9001\u7CFB\u7EDF\u901A\u77E5\uFF0C\u8BE5\u4F1A\u8BDD\u5931\u53BB\u623F\u95F4\u8BBF\u95EE\uFF09","broadcast.room.dissolve":"\u89E3\u6563","broadcast.room.dissolveConfirm":"\u89E3\u6563\u623F\u95F4\u300C{name}\u300D\uFF1F\uFF08\u8F6F\u5220\u9664\uFF1A\u8BB0\u5F55\u4FDD\u7559\u53EF\u8FFD\u6EAF\uFF0C\u6210\u5458\u6536\u5230\u7CFB\u7EDF\u901A\u77E5\uFF0C\u4E4B\u540E\u65E0\u6CD5\u52A0\u5165/\u53D1\u6D88\u606F\uFF09","broadcast.room.dissolved":"\u5DF2\u89E3\u6563","broadcast.room.copyId":"\u590D\u5236\u623F\u95F4 id","broadcast.room.lastActive":"\u6700\u540E\u6D3B\u52A8","broadcast.room.created":"\u521B\u5EFA\u4E8E","broadcast.room.presence.unknown":"unknown \xB7 \u65E0\u6D3B\u52A8\u8BB0\u5F55","header.copySessionId":"\u29C9 \u590D\u5236\u4F1A\u8BDDID","header.copySessionId.done":"\u2713 \u5DF2\u590D\u5236","header.copySessionId.title":"\u590D\u5236\u5F53\u524D\u4F1A\u8BDD ID\uFF08\u53D1\u7ED9\u5176\u4ED6\u4F1A\u8BDD\uFF1A\u544A\u8BC9\u5BF9\u65B9 AI \u4F60\u7684\u4F1A\u8BDD ID\uFF0C\u8BA9\u5B83\u7528 de_broadcast \u7ED9\u4F60\u53D1\u5E7F\u64AD\uFF09","header.setAlias":"\u270E \u522B\u540D","header.setAlias.title":"\u8BBE\u7F6E\u4F1A\u8BDD\u522B\u540D\uFF08\u226410 \u5B57\uFF09\u2014\u2014\u5FEB\u7167/\u5E7F\u64AD\u9762\u677F/\u6D88\u606F\u4E2D\u663E\u793A\u4E3A\u4F60\u7684\u53CB\u597D\u540D\u79F0","header.setAlias.placeholder":"\u8F93\u5165\u522B\u540D\uFF08\u226410 \u5B57\uFF09","header.setAlias.save":"\u4FDD\u5B58","header.setAlias.clear":"\u6E05\u9664","header.setAlias.saved":"\u522B\u540D\u5DF2\u4FDD\u5B58","header.setAlias.cleared":"\u522B\u540D\u5DF2\u6E05\u9664","promptTab.label":"\u63D0\u793A\u8BCD","promptTab.label.active":"\u{1F534} \u63D0\u793A\u8BCD ({count})","settingsTab.label":"Memory Evolve \u8BBE\u7F6E","settingsTab.label.pending":"\u{1F534} Memory Evolve \u8BBE\u7F6E","settingsTab.feature.guide":"\u6307\u5357","settingsTab.feature.config":"\u914D\u7F6E","settingsTab.feature.version":"\u7248\u672C","version.current":"\u5F53\u524D\u7248\u672C","version.latest":"\u6700\u65B0\u7248\u672C","version.statusLabel":"\u72B6\u6001","version.status.latest":"\u5DF2\u662F\u6700\u65B0","version.status.outdated":"\u6709\u65B0\u7248\u672C","version.status.no-release":"\u6682\u65E0\u53D1\u5E03\u7248\u672C","version.status.unsupported":"\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B","version.status.unknown":"\u672A\u77E5","version.loading":"\u68C0\u67E5\u4E2D\u2026","version.lastError":"\u4E0A\u6B21\u68C0\u6D4B\u5931\u8D25","version.checkTime":"\u4E0A\u6B21\u68C0\u67E5","version.checking":"\u68C0\u67E5\u4E2D\u2026","version.checkNow":"\u68C0\u67E5\u66F4\u65B0","version.updating":"\u66F4\u65B0\u4E2D\u2026","version.updateNow":"\u66F4\u65B0\u5230 {tag}","version.restart.title":"\u7B49\u5F85\u91CD\u542F","version.restart.hint":"\u65B0\u7248\u672C\u4EE3\u7801\u5DF2\u5199\u5165\u78C1\u76D8\uFF0C\u8BF7\u5148\u91CD\u542F dsh web\uFF0C\u518D\u5237\u65B0\u6D4F\u89C8\u5668\uFF08\u4EC5\u5237\u65B0\u9875\u9762\u4E0D\u4F1A\u52A0\u8F7D\u65B0\u4EE3\u7801\uFF09\u3002","version.releaseNotes":"\u53D1\u5E03\u8BF4\u660E","version.unsupported.hint":"\u5F53\u524D\u5B89\u88C5\u65B9\u5F0F\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B\uFF08\u9700\u8981 git clone \u5B89\u88C5\uFF09\u3002\u8BF7\u7528 `git clone git@github.com:csyangwen/dsh-memory-evolve.git` \u91CD\u65B0\u5B89\u88C5\u540E\u4F7F\u7528\u3002","version.note.no-release":"\u8FDC\u7AEF\u4ED3\u5E93\u6682\u65E0\u53D1\u5E03\u7248\u672C\uFF08v0.x.y tag\uFF09\u3002","version.note.outdated":"\u68C0\u6D4B\u5230\u65B0\u7248\u672C\uFF0C\u53EF\u5728\u4E0B\u65B9\u70B9\u51FB\u66F4\u65B0\uFF08\u66F4\u65B0\u9700\u91CD\u542F dsh web \u751F\u6548\uFF09\u3002","version.note.latest-exact":"\u672C\u5730\u5DF2\u662F\u6700\u65B0\u53D1\u5E03\u7248\u672C\u3002","version.note.latest-contained":"\u672C\u5730\u5DF2\u5305\u542B\u53D1\u5E03\u7248\u672C\uFF08\u5F00\u53D1\u8F68\u9886\u5148\u6216\u5DF2\u540C\u6B65\uFF09\u3002","version.note.unsupported":"\u63D2\u4EF6\u76EE\u5F55\u4E0D\u662F git \u4ED3\u5E93\u6216 git \u4E0D\u53EF\u7528\u3002","version.error.bad-request":"\u8BF7\u6C42\u53C2\u6570\u9519\u8BEF\uFF1A{message}","version.error.dirty":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.busy":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.target-changed":"\u76EE\u6807\u7248\u672C\u5DF2\u53D8\u5316\uFF1A{message}","version.error.untrusted":"\u66F4\u65B0\u88AB\u62D2\u7EDD\uFF1A{message}","version.error.unsupported":"\u4E0D\u652F\u6301\u81EA\u52A8\u68C0\u6D4B\uFF1A{message}","version.error.error":"\u66F4\u65B0\u5931\u8D25\uFF1A{message}","version.error.network":"\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF1A{message}","version.error.unknown":"\u672A\u77E5\u9519\u8BEF","memoryTab.feature.guide":"\u6307\u5357","memoryTab.feature.suggestions":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE","skillsTab.feature.guide":"\u6307\u5357","skillsTab.feature.skills":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","skillsTab.feature.skillBrowser":"\u6280\u80FD\u7BA1\u7406","todosTab.feature.guide":"\u6307\u5357","todosTab.feature.todoSuggestions":"\u5F85\u786E\u8BA4\u5F85\u529E\u7BA1\u7406","todosTab.feature.todo":"\u5F85\u529E","modelsTab.label":"\u6A21\u578B\u8BBE\u7F6E","modelsTab.feature.models":"\u6A21\u578B\u8BBE\u7F6E","modelsTab.feature.guide":"\u6307\u5357","modelsTab.guide.what.title":"\u6A21\u578B\u8BBE\u7F6E\u662F\u4EC0\u4E48","modelsTab.guide.what.body":"\u4EE5\u8868\u683C\u5F62\u5F0F\u4E00\u89C8 DSH \u7684\u5168\u90E8\u4F9B\u5E94\u5546\u4E0E\u6A21\u578B\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u6A21\u578B\u7EF4\u62A4\u63D2\u4EF6\u4FA7\u914D\u7F6E\uFF08\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u601D\u8003\u7B49\u7EA7\uFF09\u2014\u2014\u6240\u6709\u914D\u7F6E\u5F52\u5C5E\u672C\u63D2\u4EF6\uFF08models.json\uFF09\uFF0C\u4E0D\u4FEE\u6539 DSH \u914D\u7F6E\u3001\u4E0D\u4E0E\u5176\u4ED6\u63D2\u4EF6\u8026\u5408\uFF1A","modelsTab.guide.what.item1":"\u8868\u683C\u5217\uFF1A\u542F\u7528\u5F00\u5173\u3001\u4F9B\u5E94\u5546\uFF08\u542B DSH \u6FC0\u6D3B\u72B6\u6001\uFF09\u3001\u6A21\u578B\uFF08\u540D\u79F0 + ID\uFF09\u3001\u4E0A\u4E0B\u6587 / \u8F93\u51FA\u5BB9\u91CF\u3001\u601D\u8003\u7B49\u7EA7\u3001\u56FE\u7247\u8F93\u5165\u6807\u8BB0\uFF08\u{1F5BC}\uFF09\u3001\u5907\u6CE8\uFF1B\u652F\u6301\u641C\u7D22\u4E0E\u300C\u663E\u793A\u601D\u8003\u7B49\u7EA7\u300D\u5207\u6362\uFF1B","modelsTab.guide.what.item2":"\u6BCF\u6A21\u578B\u53EF\u8BBE\u7F6E\uFF1A\u542F\u7528 / \u7981\u7528\uFF08\u63D2\u4EF6\u53E3\u5F84\u7684\u53EF\u7528\u6027\u6807\u8BB0\uFF0C\u4E0D\u6539\u53D8 DSH \u5B9E\u9645\u8DEF\u7531\uFF09\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528\u601D\u8003\u7B49\u7EA7\u3001\u63A8\u8350\u601D\u8003\u7B49\u7EA7\u3001\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF1B","modelsTab.guide.what.item3":"\u914D\u7F6E\u5199\u5165\u5373\u6301\u4E45\u5316\uFF08<memoryDir>/models.json\uFF09\uFF0C\u91CD\u542F\u4E0D\u4E22\u3002","modelsTab.guide.config.title":"\u6BCF\u6A21\u578B\u914D\u7F6E\u9879","modelsTab.guide.config.body":"\u5C55\u5F00\u4E00\u884C\uFF08\u300C\u914D\u7F6E\u7B49\u7EA7\u300D\uFF09\u5373\u53EF\u7F16\u8F91\u601D\u8003\u76F8\u5173\u914D\u7F6E\uFF1A","modelsTab.guide.config.item1":"\u542F\u7528 / \u7981\u7528\uFF1A\u51B3\u5B9A de_models \u5DE5\u5177\u9ED8\u8BA4\u5217\u51FA\u7684\u53EF\u7528\u6A21\u578B\uFF08\u9ED8\u8BA4\u5168\u90E8\u542F\u7528\uFF09\uFF1B","modelsTab.guide.config.item2":"\u652F\u6301\u601D\u8003\uFF1A\u5173\u95ED\u540E\u8BE5\u6A21\u578B\u4E0D\u5141\u8BB8\u601D\u8003\uFF08\u4EC5 off \u7B49\u7EA7\u53EF\u7528\uFF09\uFF1B","modelsTab.guide.config.item3":"\u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF1A\u9ED8\u8BA4\u300C\u81EA\u52A8\u300D\u8DDF\u968F\u6A21\u578B\u81EA\u8EAB\u63A8\u8350\uFF0C\u53EF\u624B\u52A8\u6307\u5B9A\u4EFB\u4E00\u53EF\u7528\u7B49\u7EA7\uFF1B","modelsTab.guide.config.item4":"\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF1A\u52FE\u9009\u54EA\u4E9B\u7B49\u7EA7\u5141\u8BB8\u4F7F\u7528\uFF08\u9ED8\u8BA4\u5168\u90E8\uFF09\uFF1B\u53EF\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF08\u5982 ultra\uFF09\uFF0C\u79FB\u9664\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF1B","modelsTab.guide.config.item5":"\u56FE\u7247\u8F93\u5165\u80FD\u529B\uFF1A\u6A21\u578B\u663E\u5F0F\u58F0\u660E\u652F\u6301\u56FE\u7247\u8F93\u5165\u65F6\u663E\u793A\u300C\u{1F5BC} \u56FE\u7247\u8F93\u5165\u300D\u6807\u8BB0\uFF08\u6765\u81EA DSH \u6A21\u578B\u80FD\u529B\u5143\u6570\u636E\uFF0C\u53EA\u8BFB\u5C55\u793A\uFF09\uFF1B\u672A\u58F0\u660E = \u672A\u77E5\uFF0C\u4E0D\u663E\u793A\u3002","modelsTab.guide.tool.title":"de_models \u5DE5\u5177\uFF08\u7ED9 AI \u7528\uFF09","modelsTab.guide.tool.body":"\u672C\u6A21\u5757\u540C\u65F6\u6CE8\u518C de_models \u5DE5\u5177\uFF0CAI \u53EF\u4EE5\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u53EF\u7528\u6A21\u578B\uFF08\u63A5\u53E3\uFF09\u6E05\u5355\uFF1A","modelsTab.guide.tool.item1":"\u9ED8\u8BA4\u53EA\u8FD4\u56DE\u300C\u542F\u7528\u300D\u7684\u6A21\u578B\uFF08all=true \u67E5\u770B\u5168\u90E8\u542B\u7981\u7528\uFF09\uFF0C\u53EF\u6309\u4F9B\u5E94\u5546\u8FC7\u6EE4\uFF1B","modelsTab.guide.tool.item2":"\u6BCF\u4E2A\u6A21\u578B\u8FD4\u56DE\uFF1A\u662F\u5426\u542F\u7528\u3001DSH \u662F\u5426\u6FC0\u6D3B\u3001\u662F\u5426\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF08supportsImage\uFF1Atrue / false / null=\u672A\u77E5\uFF09\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF08\u542B\u63A8\u8350\u4E0E\u81EA\u5B9A\u4E49\uFF09\u3001\u5907\u6CE8\u3002","modelsTab.guide.switch.title":"\u5F00\u5173","modelsTab.guide.switch.body":"\u6A21\u578B\u8BBE\u7F6E\u9ED8\u8BA4\u5F00\u542F\uFF1B\u53EF\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\u72EC\u7ACB\u5173\u95ED\uFF08\u4E0E\u5176\u4ED6\u6A21\u5757\u540C\u6B3E\u5F00\u5173\uFF09\u2014\u2014\u5173\u95ED\u540E\u672C Tab \u4E0E de_models \u5DE5\u5177\u9690\u85CF\uFF0C\u914D\u7F6E\u6570\u636E\u4FDD\u7559\u3002","modelsTab.searchPh":"\u641C\u7D22\u4F9B\u5E94\u5546\u3001\u6A21\u578B\u6216\u5907\u6CE8\u2026","modelsTab.showReasoning":"\u663E\u793A\u601D\u8003\u7B49\u7EA7","modelsTab.refresh":"\u5237\u65B0","modelsTab.loading":"\u52A0\u8F7D\u4E2D\u2026","modelsTab.count":"\u5171 {total} \u4E2A\u6A21\u578B \xB7 {enabled} \u4E2A\u542F\u7528","modelsTab.loadFailed":"\u52A0\u8F7D\u5931\u8D25\uFF1A{message}","modelsTab.empty":"\uFF08\u6682\u65E0\u6A21\u578B\uFF09","modelsTab.enabled":"\u542F\u7528","modelsTab.enable":"\u542F\u7528","modelsTab.disable":"\u7981\u7528","modelsTab.provider":"\u4F9B\u5E94\u5546","modelsTab.model":"\u6A21\u578B","modelsTab.capacity":"\u4E0A\u4E0B\u6587/\u8F93\u51FA","modelsTab.reasoning":"\u601D\u8003\u7B49\u7EA7","modelsTab.note":"\u5907\u6CE8","modelsTab.notePh":"\u8F93\u5165\u5907\u6CE8\u2026","modelsTab.dormant":"\u672A\u6FC0\u6D3B","modelsTab.thinking":"\u652F\u6301\u601D\u8003","modelsTab.thinkingHint":"\u5173\u95ED\u540E\u8BE5\u6A21\u578B\u4E0D\u5141\u8BB8\u601D\u8003\uFF08\u4EC5 off \u7B49\u7EA7\u53EF\u7528\uFF09","modelsTab.thinkingOff":"\u4E0D\u652F\u6301\u601D\u8003","modelsTab.supportsImage":"\u{1F5BC} \u56FE\u7247\u8F93\u5165","modelsTab.supportsImageHint":"\u8BE5\u6A21\u578B\u663E\u5F0F\u58F0\u660E\u652F\u6301\u56FE\u7247\u8F93\u5165\uFF08\u6765\u81EA DSH \u6A21\u578B\u80FD\u529B\u5143\u6570\u636E inputModalities\uFF09","modelsTab.recommendedLevel":"\u63A8\u8350\u601D\u8003\u7B49\u7EA7","modelsTab.recommendedAuto":"\u81EA\u52A8\uFF08\u8DDF\u968F\u6A21\u578B\u63A8\u8350\uFF09","modelsTab.levelsNone":"\u5168\u90E8\u7981\u7528","modelsTab.editLevels":"\u914D\u7F6E\u7B49\u7EA7","modelsTab.closeEditor":"\u6536\u8D77","modelsTab.editorTitle":"\u53EF\u7528\u601D\u8003\u7B49\u7EA7\uFF08\u52FE\u9009 = \u5141\u8BB8\u8BE5\u7B49\u7EA7\uFF1B\u63A8\u8350\u6765\u81EA\u6A21\u578B\u80FD\u529B\uFF09","modelsTab.recommended":"\u63A8\u8350","modelsTab.addLevel":"\u6DFB\u52A0","modelsTab.removeLevel":"\u79FB\u9664","modelsTab.levelIdPh":"\u7B49\u7EA7 ID\uFF08\u5982 ultra\uFF09","modelsTab.levelNamePh":"\u663E\u793A\u540D\uFF08\u5982 Ultra\uFF09","modelsTab.save":"\u4FDD\u5B58","modelsTab.saving":"\u4FDD\u5B58\u4E2D\u2026","modelsTab.cancel":"\u53D6\u6D88","uiSettingsTab.label":"Web UI \u8BBE\u7F6E","uiSettingsTab.feature.mixed":"\u7EFC\u5408","uiSettingsTab.feature.guide":"\u6307\u5357","uiSettingsTab.features.title":"\u529F\u80FD\u5F00\u5173","uiSettingsTab.features.help":"\u6BCF\u4E2A\u529F\u80FD\u90FD\u6709\u72EC\u7ACB\u7684\u5C0F\u5F00\u5173\uFF0C**\u9ED8\u8BA4\u5168\u90E8\u5173\u95ED**\u3001\u7531\u4F60\u4E3B\u52A8\u5F00\u542F\uFF0C\u6539\u52A8\u5373\u65F6\u751F\u6548\uFF08\u529F\u80FD\u672A\u5B9A\u578B\u524D\u7EDF\u4E00\u6536\u5728\u300C\u7EFC\u5408\u300D\uFF0C\u540E\u7EED\u518D\u5206\u7C7B\uFF09\u3002","uiSettingsTab.guide.what.title":"Web UI \u8BBE\u7F6E\u662F\u4EC0\u4E48","uiSettingsTab.guide.what.body":"\u7ED9 DSH web \u754C\u9762\u505A\u6837\u5F0F\u7EA7\u5C0F\u529F\u80FD\u2014\u2014\u4E0D\u6539\u6846\u67B6\u6E90\u7801\uFF0C\u7EAF\u5BA2\u6237\u7AEF\u6CE8\u5165\uFF08CSS + DOM \u589E\u5F3A\uFF09\uFF0C\u968F DSH \u66F4\u65B0\u4E0D\u6389\u529F\u80FD\uFF1B\u540E\u671F\u6269\u5C55\uFF08\u4E3B\u9898\u66F4\u6362\u7B49\uFF09\u90FD\u6536\u8FDB\u672C\u6A21\u5757\u3002","uiSettingsTab.guide.switch.title":"\u5F00\u5173","uiSettingsTab.guide.switch.body":"\u6A21\u5757\u5F00\u5173\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300DTab \u7684\u300C\u914D\u7F6E\u300D\u91CC\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF09\uFF1B\u672C Tab\u300C\u7EFC\u5408\u300D\u91CC\u662F\u5404\u529F\u80FD\u7684\u72EC\u7ACB\u5C0F\u5F00\u5173\uFF08\u9ED8\u8BA4\u4E5F\u5168\u90E8\u5173\u95ED\uFF0C\u7531\u4F60\u4E3B\u52A8\u5F00\u542F\uFF09\u3002","uiSettingsTab.guide.features.title":"\u529F\u80FD\u4ECB\u7ECD","uiSettingsTab.guide.features.body":"\u6BCF\u4E2A\u529F\u80FD\u5728\u300C\u7EFC\u5408\u300D\u9875\u6709\u72EC\u7ACB\u5C0F\u5F00\u5173\uFF0C\u5F00\u542F\u540E\u5373\u65F6\u751F\u6548\uFF1A","uiSettingsTab.guide.features.item1":"\u4F1A\u8BDD\u7B5B\u9009\uFF1A\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF0C\u7EAF\u7A7A\u95F2\u7684\u6298\u53E0\u9690\u85CF\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF1B","uiSettingsTab.guide.features.item2":"\u5BF9\u8BDD\u533A\u52A0\u5BBD\uFF1A\u4E2D\u95F4\u5BF9\u8BDD\u533A\u57DF\u4ECE\u7EA6\u4E00\u534A\u5BBD\u5EA6\u6269\u5927\u5230\u7EA6 95%\uFF0C\u957F\u6D88\u606F\u770B\u7740\u66F4\u8212\u670D\uFF1B","uiSettingsTab.guide.features.item3":"\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD\uFF1A\u7528\u6237\u6D88\u606F\u6846\u4ECE\u9ED8\u8BA4 525px \u4E0A\u9650\u6269\u5927\u5230\u7EA6 80% \u5BBD\uFF08\u914D\u5408\u4E0A\u4E00\u6761\u6548\u679C\u66F4\u660E\u663E\uFF09\uFF1B","uiSettingsTab.guide.features.item4":"\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192\uFF1A\u8F93\u5165\u6846\u5706\u73AF \u226530% \u53D8\u9EC4\u3001\u226540% \u53D8\u7EA2\uFF0C\u63D0\u9192\u4F60\u8BE5\u6253\u4E66\u7B7E / \u5F00\u65B0\u4F1A\u8BDD\u4E86\uFF1B","uiSettingsTab.guide.features.item5":"Mermaid \u56FE\u8868\u6E32\u67D3\uFF1A\u6D88\u606F\u91CC\u7684 mermaid \u4EE3\u7801\u5757\u81EA\u52A8\u6E32\u67D3\u6210\u56FE\u8868\uFF0C\u6E32\u67D3\u5931\u8D25\u81EA\u52A8\u9000\u56DE\u4EE3\u7801\u5757\u3002","uiSettings.feature.sessionFilter":"\u4F1A\u8BDD\u7B5B\u9009","uiSettings.feature.sessionFilter.hint":"\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF08\u7EAF idle \u6298\u53E0\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF09\uFF1B\u5F00\u542F\u540E\u624D\u51FA\u73B0\u7B5B\u9009\u6761","uiSettings.feature.wideChat":"\u5BF9\u8BDD\u533A\u52A0\u5BBD","uiSettings.feature.wideChat.hint":"\u628A\u4E2D\u95F4\u7684\u5BF9\u8BDD\u5386\u53F2/\u8F93\u5165\u6846\u533A\u57DF\u4ECE\u7EA6\u4E00\u534A\u5BBD\u5EA6\u6269\u5927\u5230\u53F3\u4FA7\u7EA6 95%\uFF08\u4E0E\u4E0A\u65B9 Tab \u5BFC\u822A\u6761\u5BF9\u9F50\uFF09","uiSettings.feature.wideBubble":"\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD","uiSettings.feature.wideBubble.hint":"\u7528\u6237\u63D0\u4EA4\u540E\u7684\u6D88\u606F\u6846\u4ECE\u9ED8\u8BA4\u4E0A\u9650 525px \u6269\u5927\u5230\u5360\u4E2D\u95F4\u5185\u5BB9\u6846\u7EA6 80%\uFF08\u914D\u5408\u300C\u5BF9\u8BDD\u533A\u52A0\u5BBD\u300D\u6548\u679C\u66F4\u660E\u663E\uFF09","uiSettings.feature.contextWarn":"\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192","uiSettings.feature.contextWarn.hint":"\u8F93\u5165\u6846\u53F3\u4E0B\u4FA7\u7684\u4E0A\u4E0B\u6587\u4F7F\u7528\u91CF\u5706\u73AF\uFF1A\u5360\u7528\u8D85\u8FC7 30% \u53D8\u9EC4\u3001\u8D85\u8FC7 40% \u53D8\u7EA2\u63D0\u9192\uFF0C\u4F4E\u4E8E\u9608\u503C\u6062\u590D\u539F\u8272","uiSettings.feature.mermaidRender":"Mermaid \u56FE\u8868\u6E32\u67D3","uiSettings.feature.mermaidRender.hint":"\u628A\u6D88\u606F\u91CC\u7684 mermaid \u4EE3\u7801\u5757\u6E32\u67D3\u6210\u56FE\u8868\uFF08DSH \u754C\u9762\u672C\u8EAB\u4E0D\u6E32\u67D3 mermaid\uFF09\uFF1B\u9996\u6B21\u89C1\u5230\u56FE\u65F6\u624D\u52A0\u8F7D\u6E32\u67D3\u5F15\u64CE\uFF0CPC \u4E0E\u624B\u673A\u7AEF\u540C\u65F6\u751F\u6548\uFF0C\u6E32\u67D3\u5931\u8D25\u81EA\u52A8\u9000\u56DE\u4EE3\u7801\u5757","uiSettings.filter.on":"\u4EC5\u8FDB\u884C\u4E2D","uiSettings.filter.off":"\u5168\u90E8","uiSettings.running.label":"{count} \u8FD0\u884C\u4E2D","uiSettings.ungrouped":"\u672A\u5206\u7EC4","syncTab.label":"\u8BB0\u5FC6\u540C\u6B65","syncTab.loading":"\u52A0\u8F7D\u4E2D\u2026","syncTab.loadFailed":"\u72B6\u6001\u52A0\u8F7D\u5931\u8D25\uFF1A{message}","syncTab.tab.project":"\u672C\u9879\u76EE","syncTab.tab.global":"\u5168\u5C40\u8BB0\u5FC6","syncTab.tab.remote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93","syncTab.section.project":"\u672C\u9879\u76EE\u8BB0\u5FC6\uFF08KEY + \u9879\u76EE\u65E5\u5FD7 + \u5F52\u6863 + \u9879\u76EE\u5F85\u529E\uFF09","syncTab.section.global":"\u5168\u5C40\u8BB0\u5FC6\uFF08\u8BBE\u5907\u7EA7\uFF0C\u4E0E\u9879\u76EE\u65E0\u5173\uFF09","syncTab.section.remote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF08\u8BBE\u5907\u7EA7\u914D\u7F6E\uFF09","syncTab.project.mode.off":"\u4E0D\u542F\u7528\uFF08\u7EAF\u672C\u5730\uFF09","syncTab.project.mode.off.desc":"\u9879\u76EE\u8BB0\u5FC6\u53EA\u7559\u5728\u672C\u673A\uFF0C\u4E0D\u5EFA\u4ED3\u5E93\u3001\u4E0D\u751F\u6210\u8EAB\u4EFD\u8BC1\uFF0C\u4E5F\u4E0D\u4E0E\u4EFB\u4F55\u8FDC\u7AEF\u5BF9\u8D26","syncTab.project.mode.main":"A \u6A21\u5F0F\uFF1A\u4E3B\u4EE3\u7801\u4ED3\u5E93\uFF08\u96F6\u914D\u7F6E\uFF09","syncTab.project.mode.main.desc":"\u9879\u76EE\u8BB0\u5FC6\u653E\u8FDB\u4EE3\u7801\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF08\u4E0D\u6C61\u67D3\u4EE3\u7801\uFF09\u3002**\u4EE3\u7801\u4ED3\u5E93\u516C\u5F00 = \u8BB0\u5FC6\u4E5F\u516C\u5F00**","syncTab.project.mode.shared":"B \u6A21\u5F0F\uFF1A\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93","syncTab.project.mode.shared.desc":"\u9879\u76EE\u8BB0\u5FC6\u653E\u8FDB\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF0C\u8BB0\u5FC6\u4E0E\u4EE3\u7801\u5F7B\u5E95\u9694\u79BB","syncTab.project.mode.shared.needRemote":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\u672A\u542F\u7528\u2014\u2014\u5DF2\u5207\u6362\u5230\u300C\u5171\u4EAB\u8BB0\u5FC6\u5E93\u300D\uFF0C\u8BF7\u5148\u542F\u7528\u5E76\u4FDD\u5B58\u4ED3\u5E93\u5730\u5740","syncTab.status.title":"\u5F53\u524D\u8BB0\u5FC6\u8FDC\u7AEF","syncTab.status.disabled":"\u672A\u542F\u7528\u2014\u2014\u6253\u5F00\u4E0A\u65B9\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5F00\u5173\u5F00\u59CB","syncTab.status.notInit":"\u5DF2\u542F\u7528\uFF0C\u4F46\u5F53\u524D\u9879\u76EE\u5C1A\u672A\u521D\u59CB\u5316\u2014\u2014\u70B9\u4E0A\u65B9 A/B \u6A21\u5F0F\u5B8C\u6210\u521D\u59CB\u5316","syncTab.status.remoteKind":"\u8BB0\u5FC6\u8FDC\u7AEF\uFF1A{kind}","syncTab.status.remoteKindMain":"\u4E3B\u4EE3\u7801\u4ED3\u5E93","syncTab.status.remoteKindShared":"\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93","syncTab.status.remoteKindNone":"\u672A\u6302\u8F7D","syncTab.status.originUrl":"\u8FDC\u7AEF\u5730\u5740\uFF1A{url}","syncTab.status.branch":"\u8FDC\u7AEF\u5206\u652F\uFF1A{branch}","syncTab.status.counts":"\u672A\u63A8\u9001 {pending} \u6761 \xB7 \u843D\u540E\u8FDC\u7AEF {behind} \u4E2A\u63D0\u4EA4 \xB7 \u51B2\u7A81 {conflicts} \u6761","syncTab.status.migrate":"\u53D1\u73B0\u65E7\u8BB0\u5FC6\u76EE\u5F55\uFF1A{dir}\u2014\u2014\u70B9\u300C\u5F00\u59CB\u540C\u6B65\u300D\u4F1A\u81EA\u52A8\u8FC1\u79FB","syncTab.global.title":"\u5168\u5C40\u8BB0\u5FC6","syncTab.global.uncommitted":"\u672A\u63A8\u9001 {n} \u4E2A\u8F68\uFF08\u5DE5\u4F5C\u6811\u53D8\u66F4 + \u5DF2\u63D0\u4EA4\u672A\u63A8\u9001\uFF09","syncTab.global.trackMemory":"\u5168\u5C40\u8BB0\u5FC6\uFF08MEMORY.md\uFF09","syncTab.global.trackUser":"\u7528\u6237\u6863\u6848\uFF08USER.md\uFF09","syncTab.global.trackDaily":"\u6BCF\u65E5\u65E5\u5FD7\uFF08daily/*.md\uFF09","syncTab.global.trackTodo":"\u5F85\u529E\uFF1A\u751F\u6D3B/\u5DE5\u4F5C/\u6BCF\u65E5\uFF08TODOS-*.md\uFF09","syncTab.global.hint":"\u5168\u5C40\u8BB0\u5FC6\uFF08\u7528\u6237\u6863\u6848/\u6BCF\u65E5\u65E5\u5FD7/\u5F85\u529E\uFF09\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u9879\u76EE\uFF0C\u6240\u6709\u9879\u76EE\u5171\u7528\u8FD9\u4E00\u5957\u5F00\u5173\uFF1B\u63A8\u9001\u6C38\u8FDC\u9700\u4F60\u663E\u5F0F\u70B9\u51FB","syncTab.global.sync":"\u62C9\u53D6\u5408\u5E76","syncTab.global.push":"\u63A8\u9001","syncTab.global.notInit":"\u5171\u4EAB\u8BB0\u5FC6\u5E93\u672A\u542F\u7528\u2014\u2014\u5168\u5C40\u8BB0\u5FC6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u5230\u300C\u5171\u4EAB\u8BB0\u5FC6\u5E93\u300D\u9875\u542F\u7528\u5E76\u4FDD\u5B58\u5730\u5740","syncTab.remote.desc":"\u8FD9\u662F\u5168\u8BBE\u5907\u7684\u7EDF\u4E00\u8BB0\u5FC6\u5E93\uFF1A\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\uFF08\u7528\u6237\u6863\u6848/\u6BCF\u65E5\u65E5\u5FD7/\u5F85\u529E\uFF09\u90FD\u5F15\u7528\u5B83\uFF0C\u542F\u7528\u5E76\u4FDD\u5B58\u5730\u5740\u4E00\u6B21\u5373\u53EF\u3002","syncTab.remote.mode.off":"\u4E0D\u542F\u7528","syncTab.remote.mode.off.desc":"\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\u5747\u4E0D\u53EF\u7528\uFF1B\u5DF2\u540C\u6B65\u7684\u6570\u636E\u4E0E\u5730\u5740\u4FDD\u7559","syncTab.remote.mode.on":"\u542F\u7528","syncTab.remote.mode.on.desc":"\u9879\u76EE B \u6A21\u5F0F\u4E0E\u5168\u5C40\u8BB0\u5FC6\u53EF\u7528\uFF1B\u5148\u4FDD\u5B58\u4ED3\u5E93\u5730\u5740","syncTab.remote.disable":"\u505C\u7528\u5171\u4EAB\u8BB0\u5FC6\u5E93","syncTab.remote.current":"\u5F53\u524D\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF1A{url}","syncTab.remote.placeholder":"\u7C98\u8D34\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740\uFF08\u5982 ssh://git@.../dsh-memories.git\uFF09","syncTab.remote.save":"\u542F\u7528\u5E76\u4FDD\u5B58","syncTab.remote.modify":"\u4FEE\u6539\u5E76\u4FDD\u5B58","syncTab.remote.switchHint":"\u505C\u7528\u53EA\u5173\u6389\u5171\u4EAB\u8BB0\u5FC6\u5E93\uFF08\u9879\u76EE B \u4E0E\u5168\u5C40\u8BB0\u5FC6\u4E0D\u53EF\u7528\uFF09\uFF0C\u5DF2\u540C\u6B65\u6570\u636E\u4E0E\u5730\u5740\u4FDD\u7559\uFF0C\u53EF\u968F\u65F6\u91CD\u65B0\u542F\u7528\u3002","syncTab.actions.sync":"\u62C9\u53D6\u5408\u5E76","syncTab.actions.push":"\u63A8\u9001","syncTab.actions.nothingToSync":"\u6CA1\u6709\u53EF\u540C\u6B65\u7684\u5185\u5BB9\u2014\u2014\u5148\u542F\u7528\u672C\u9879\u76EE\u6216\u5168\u5C40\u8F68","syncTab.conflicts.title":"\u5F85\u5904\u7406\u51B2\u7A81\uFF08{count} \u6761\u2014\u2014\u4E24\u53F0\u8BBE\u5907\u6539\u4E86\u540C\u4E00\u6761\u8BB0\u5FC6\uFF09","syncTab.conflicts.titleGlobal":"\u5168\u5C40{track}\uFF1A\u5F85\u5904\u7406\u51B2\u7A81\uFF08{count} \u6761\u2014\u2014\u4E24\u53F0\u8BBE\u5907\u6539\u4E86\u540C\u4E00\u6761\u8BB0\u5FC6\uFF09","syncTab.conflicts.base":"\u5171\u540C\u7248\u672C","syncTab.conflicts.ours":"\u672C\u673A\u7248\u672C","syncTab.conflicts.theirs":"\u8FDC\u7AEF\u7248\u672C","syncTab.conflicts.oursBtn":"\u91C7\u7528\u672C\u673A","syncTab.conflicts.theirsBtn":"\u91C7\u7528\u8FDC\u7AEF","syncTab.conflicts.bothBtn":"\u4E24\u8005\u90FD\u8981","syncTab.footnote":"\u5199\u8BB0\u5FC6\u7167\u5E38\u5B9E\u65F6\u843D\u76D8\uFF08\u5B8C\u5168\u4E0D\u78B0 Git\uFF09\uFF1B\u540C\u6B65\u662F\u6512\u4E00\u6279\u5408\u4E00\u6B21\u3002\u51B2\u7A81\u6807\u8BB0\u6C38\u4E0D\u843D\u76D8\uFF0C\u89E3\u51B3\u540E\u81EA\u52A8\u63D0\u4EA4\u3002","bookmarkTab.label":"\u4E66\u7B7E","bookmark.tab.list":"\u5217\u8868","bookmark.tab.guide":"\u6307\u5357","bookmark.list.title":"\u672C\u4F1A\u8BDD\u4E66\u7B7E","bookmark.list.help":"\u70B9\u51FB\u4E66\u7B7E\u8DF3\u8F6C\u5230\u5BF9\u5E94\u8F6E\u6B21\uFF1B\u8F6E\u5C3E \u2606 \u6253\u661F\u3001\u2605 \u5DF2\u6253\u661F\uFF08\u53EF\u6539\u540D/\u5220\u9664\uFF09\uFF1B\u5217\u8868\u53EF\u641C\u7D22\u3001\u53EF\u4ECE\u6B64\u8F6E\u521B\u5EFA\u5206\u652F\uFF08\u4E2D\u95F4\u8F6E\u7684\u5B98\u65B9\u5206\u652F\u6309\u94AE\u540C\u6837\u5DF2\u88AB Memory Evolve \u63A5\u7BA1\uFF09\u3002","bookmark.refresh":"\u5237\u65B0","bookmark.loading":"\u52A0\u8F7D\u4E2D\u2026","bookmark.empty":"\uFF08\u6682\u65E0\u4E66\u7B7E\u2014\u2014\u5728\u5BF9\u8BDD\u8F6E\u5C3E\u70B9 \u2606 \u6253\u661F\uFF09","bookmark.defaultLabel":"\u8F6E\u6B21 {n}","bookmark.turn":"\u8F6E\u6B21 {n}","bookmark.prompt.create":"\u4E66\u7B7E\u540D\u79F0\uFF08\u53EF\u6539\uFF09\uFF1A","bookmark.prompt.rename":"\u65B0\u540D\u79F0\uFF1A","bookmark.confirm.delete":"\u5220\u9664\u4E66\u7B7E\u300C{label}\u300D\uFF1F","bookmark.noSession":"\u65E0\u6CD5\u786E\u5B9A\u5F53\u524D\u4F1A\u8BDD\uFF08\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\uFF09","bookmark.search.placeholder":"\u641C\u7D22\u4E66\u7B7E\u2026","bookmark.search.empty":"\uFF08\u6CA1\u6709\u5339\u914D\u7684\u4E66\u7B7E\uFF09","bookmark.star.title.off":"\u2606 \u6253\u4E66\u7B7E\uFF08Memory Evolve \u4F1A\u8BDD\u4E66\u7B7E\uFF09","bookmark.star.title.on":"\u2605 \u5DF2\u6253\u4E66\u7B7E\uFF1A{label}\uFF08Memory Evolve\uFF0C\u70B9\u51FB\u6539\u540D/\u5220\u9664\uFF09","bookmark.menu.rename":"\u6539\u540D","bookmark.menu.delete":"\u5220\u9664","bookmark.action.jump":"\u8DF3\u8F6C","bookmark.action.fork":"\u5206\u652F","bookmark.action.rename":"\u6539\u540D","bookmark.action.delete":"\u5220\u9664","bookmark.fork.title":"\u7531\u6B64\u8F6E\u521B\u5EFA\u5206\u652F\uFF08Memory Evolve \u589E\u5F3A\uFF09","bookmark.fork.confirm":"\u5B98\u65B9\u4EC5\u652F\u6301\u4ECE\u6700\u540E\u4E00\u6761\u6D88\u606F\u521B\u5EFA\u5206\u652F\u3002\u662F\u5426\u4ECD\u8981\u4ECE\u8FD9\u4E00\u8F6E\uFF08{n}\uFF09\u521B\u5EFA\u5206\u652F\uFF1F\uFF08Memory Evolve \u589E\u5F3A\uFF09","bookmark.fork.working":"\u6B63\u5728\u521B\u5EFA\u5206\u652F\u4F1A\u8BDD\u2026","bookmark.fork.ok":"\u5DF2\u521B\u5EFA\u65B0\u4F1A\u8BDD {id}\uFF08\u53EF\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u67E5\u770B\uFF09","bookmark.jump.hint":"\u70B9\u51FB\u8DF3\u8F6C\u5230\u8BE5\u8F6E","bookmark.jumping":"\u6B63\u5728\u5B9A\u4F4D\u2026","bookmark.jump.ok":"\u5DF2\u5B9A\u4F4D\u5230\u300C{label}\u300D","bookmark.jump.notFound":"\u672A\u627E\u5230\u300C{label}\u300D\u5BF9\u5E94\u6D88\u606F\uFF08\u53EF\u80FD\u5DF2\u88AB\u538B\u7F29/\u4E0D\u5728\u5F53\u524D\u5386\u53F2\u7A97\u53E3\uFF09","bookmark.jump.noChat":"\u627E\u4E0D\u5230\u300C\u5BF9\u8BDD\u300DTab\uFF0C\u65E0\u6CD5\u8DF3\u8F6C","bookmark.renamed":"\u5DF2\u6539\u540D","bookmark.deleted":"\u5DF2\u5220\u9664","bookmark.error":"\u5931\u8D25\uFF1A{message}","bookmark.guide.what.title":"\u4F1A\u8BDD\u4E66\u7B7E\u662F\u4EC0\u4E48","bookmark.guide.what.body":"\u7ED9\u5BF9\u8BDD\u7684\u6BCF\u4E00\u8F6E\u6253\u4E0A\u661F\u6807\uFF0C\u4E4B\u540E\u4ECE\u5217\u8868\u4E00\u952E\u8DF3\u56DE\u90A3\u4E00\u8F6E\uFF1B\u4E5F\u80FD\u4ECE\u4EFB\u610F\u4E00\u8F6E\u76F4\u63A5\u521B\u5EFA\u5B98\u65B9\u5206\u652F\u4F1A\u8BDD\u2014\u2014\u4ECE\u4E2D\u95F4\u67D0\u4E2A\u51B3\u7B56\u70B9\u300C\u53E6\u8D77\u4E00\u6761\u7EBF\u300D\u3002\u6570\u636E\u5B58\u5728\u63D2\u4EF6\u4FA7\u8FB9\u6587\u4EF6\uFF08\u4E0D\u78B0\u5B98\u65B9\u4F1A\u8BDD\u65E5\u5FD7\uFF09\uFF1B\u4E2D\u95F4\u8F6E\u7684\u5B98\u65B9\u5206\u652F\u6309\u94AE\u5DF2\u88AB\u672C\u63D2\u4EF6\u63A5\u7BA1\uFF08\u70B9\u51FB\u5F39\u786E\u8BA4\u540E\u8D70\u5B98\u65B9 fork \u901A\u9053\uFF09\u3002","bookmark.guide.star.title":"\u600E\u4E48\u6253\u661F","bookmark.guide.star.body":"\u6BCF\u4E2A\u5DF2\u5B8C\u6210\u8F6E\u5C3E\u6709 \u2606 \u6309\u94AE\uFF1A\u70B9\u4E00\u4E0B\u53D6\u540D\uFF08\u9ED8\u8BA4\u300C\u8F6E\u6B21 N\u300D\uFF09\u5373\u6253\u661F\uFF1B\u2605 \u8868\u793A\u5DF2\u6253\u661F\uFF0C\u518D\u70B9\u53EF\u6539\u540D\u6216\u5220\u9664\u3002\u5C0F\u56FE\u6807\u4E0D\u5E72\u6270 Copy / Branch\u3002","bookmark.guide.list.title":"\u5217\u8868\u4E0E\u8DF3\u8F6C","bookmark.guide.list.body":"\u672C Tab \u5217\u51FA\u5F53\u524D\u4F1A\u8BDD\u5168\u90E8\u4E66\u7B7E\uFF08\u6807\u7B7E\u3001\u8F6E\u6B21\u3001\u65F6\u95F4\u3001\u6458\u8981\uFF09\u3002\u70B9\u51FB\u8DF3\u8F6C\uFF1A\u81EA\u52A8\u5207\u56DE\u300C\u5BF9\u8BDD\u300DTab \u5B9A\u4F4D\u5230\u90A3\u4E00\u8F6E\uFF1B\u82E5\u76EE\u6807\u5728\u672A\u52A0\u8F7D\u7684\u5386\u53F2\u7A97\u53E3\uFF0C\u4F1A\u5148\u62C9\u66F4\u65E9\u6D88\u606F\u518D\u5B9A\u4F4D\u3002","bookmark.guide.switch.title":"\u5F00\u5173","bookmark.guide.switch.body":"\u9ED8\u8BA4\u5173\u95ED\uFF1B\u5728\u300CMemory Evolve \u8BBE\u7F6E\u300D\u2192\u300C\u914D\u7F6E\u300D\u6253\u5F00\u300C\u4F1A\u8BDD\u4E66\u7B7E\u300D\u3002\u5173\u95ED\u540E\u661F\u6807\u4E0E\u672C Tab \u9690\u85CF\uFF0C\u5DF2\u5B58\u4E66\u7B7E\u6587\u4EF6\u4FDD\u7559\u3002","panel.guide.bookmark.title":"\u4F1A\u8BDD\u4E66\u7B7E","panel.guide.bookmark.desc":"\u7ED9\u6BCF\u8F6E\u6253\u661F\u6807\u8BB0\uFF0C\u5217\u8868\u4E00\u952E\u8DF3\u56DE\uFF0C\u5E76\u652F\u6301\u4ECE\u4EFB\u610F\u8F6E\u521B\u5EFA\u5B98\u65B9\u5206\u652F\uFF08\u542B\u63A5\u7BA1\u5B98\u65B9\u4E2D\u95F4\u8F6E\u5206\u652F\u6309\u94AE\uFF09\u3002\u72EC\u7ACB\u5F00\u5173\uFF0C\u9ED8\u8BA4\u5173\u3002","panel.config.bookmarkEnabled":"\u4F1A\u8BDD\u4E66\u7B7E","panel.config.bookmarkEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u4E66\u7B7E\uFF1A\u6BCF\u4E2A\u5DF2\u5B8C\u6210\u8F6E\u5C3E\u51FA\u73B0 \u2606 \u661F\u6807\u6309\u94AE + \u300C\u4E66\u7B7E\u300DTab \u5217\u8868\u4E0E\u8DF3\u8F6C\uFF1B\u652F\u6301\u4ECE\u4EFB\u610F\u8F6E\u521B\u5EFA\u5B98\u65B9\u5206\u652F\uFF08\u5217\u8868\u300C\u5206\u652F\u300D\u6309\u94AE\uFF0C\u6216\u76F4\u63A5\u70B9\u5B98\u65B9\u5206\u652F\u6309\u94AE\u2014\u2014\u4E2D\u95F4\u8F6E\u4F1A\u88AB\u63A5\u7BA1\u5E76\u5F39\u786E\u8BA4\uFF09\u3002\u6570\u636E\u5B58\u5728 <memoryDir>/session-bookmarks.json\uFF08\u6309\u4F1A\u8BDD\u9694\u79BB\uFF0C\u6309\u8F6E seq \u5B9A\u4F4D\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u7EAF UI + \u5BBF\u4E3B API\uFF0C\u4E0D\u6CE8\u518C AI \u5DE5\u5177\uFF09\uFF1B\u5173\u95ED\u65F6\u661F\u6807\u4E0E Tab \u9690\u85CF\uFF0C\u6570\u636E\u6587\u4EF6\u4FDD\u7559\u3002","panel.config.todoEnabled":"\u5F85\u529E\u529F\u80FD","panel.config.todoEnabled.hint":"\u542F\u7528 dtodo \u5DE5\u5177\u3001\u5F85\u529E Tab \u548C\u5230\u671F\u63D0\u9192\u3002\u5173\u95ED\u540E\u7ACB\u5373\u9690\u85CF Tab\u3001\u505C\u6B62\u5F85\u529E\u5199\u5165\uFF1B\u73B0\u6709\u5F85\u529E\u6570\u636E\u548C\u540C\u6B65\u8F68\u4FDD\u6301\u4E0D\u53D8\u3002","memoryTab.feature.config":"\u914D\u7F6E","memoryTab.feature.todoSuggestions":"\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE","memoryTab.feature.skills":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","memoryTab.feature.skillBrowser":"\u6280\u80FD\u7BA1\u7406","memoryTab.feature.todo":"\u5F85\u529E","memoryTab.guide.tracks.title":"\u4E94\u8F68\u8BB0\u5FC6\uFF1AAI \u7684\u957F\u671F\u5DE5\u4F5C\u8BB0\u5FC6","memoryTab.guide.tracks.body":"\u8BB0\u5FC6\u6309\u300C\u8BE5\u7ED9\u8C01\u770B\u300D\u5206\u6210\u4E94\u5C42\uFF0C\u6CE8\u5165\u8303\u56F4\u968F\u5C42\u7EA7\u6536\u7A84\u3001\u4E92\u4E0D\u6C61\u67D3\u2014\u2014\u8BE5\u6CE8\u5165\u7684\u81EA\u52A8\u6CE8\u5165\uFF0C\u4E0D\u8BE5\u5360\u4E0A\u4E0B\u6587\u7684\u6309\u9700\u8BFB\u53D6\uFF1A","memoryTab.guide.tracks.item1":"\u7528\u6237\u6863\u6848\uFF08user\uFF09\uFF1A\u4F60\u662F\u8C01\u2014\u2014\u504F\u597D\u3001\u4E60\u60EF\u3001\u6C9F\u901A\u65B9\u5F0F\u3002\u6BCF\u4E2A\u4F1A\u8BDD\u90FD\u6CE8\u5165\uFF0C\u4E0D\u7528\u91CD\u590D\u4ECB\u7ECD\uFF1B","memoryTab.guide.tracks.item2":"\u957F\u671F\u8BB0\u5FC6\uFF08memory\uFF09\uFF1A\u5168\u5C40\u4E8B\u5B9E\u2014\u2014\u73AF\u5883\u3001\u5DE5\u5177\u3001\u901A\u7528\u60EF\u4F8B\u3002\u6BCF\u4E2A\u4F1A\u8BDD\u90FD\u6CE8\u5165\uFF1B","memoryTab.guide.tracks.item3":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF08key\uFF09\uFF1A\u5F53\u524D\u9879\u76EE\u7684\u7EA6\u5B9A\u3001\u51B3\u7B56\u3001\u67B6\u6784\u3001\u8E29\u5751\u3002\u53EA\u6CE8\u5165\u5F53\u524D\u9879\u76EE\u4F1A\u8BDD\uFF0C\u5E76\u6309 git \u5206\u652F\u8FC7\u6EE4\u2014\u2014\u4E0D\u540C\u5206\u652F\u5404\u7528\u5404\u7684\u7EA6\u5B9A\uFF1B","memoryTab.guide.tracks.item4":"\u9879\u76EE\u65E5\u5FD7\uFF08project\uFF09\uFF1A\u5F53\u524D\u9879\u76EE\u7684\u8FDB\u5C55\u6D41\u6C34\u3002\u4E0D\u6CE8\u5165\uFF0CAI \u9700\u8981\u65F6\u6309\u9700\u8BFB\u53D6\uFF0C\u5386\u53F2\u53EF\u8FFD\u6EAF\uFF1B","memoryTab.guide.tracks.item5":"\u4ECA\u65E5\u65E5\u5FD7\uFF08daily\uFF09\uFF1A\u6309\u5929\u8BB0\u5F55\u7684\u5F53\u5929\u8FDB\u5C55\u3002\u4E0D\u6CE8\u5165\uFF0CAI \u9700\u8981\u65F6\u8BFB\u53D6\u2014\u2014\u76F8\u5F53\u4E8E\u6BCF\u5929\u7684\u300C\u5DE5\u4F5C\u65E5\u62A5\u300D\u3002","memoryTab.guide.files.title":"\u6587\u4EF6\u9875\u7B7E\uFF1A\u76F4\u63A5\u770B\u8BB0\u5FC6\u539F\u6587","memoryTab.guide.files.body":"\u672C Tab \u76F4\u63A5\u9884\u89C8 AGENTS.md\uFF08\u5168\u5C40\u89C4\u5219\uFF09\u4E0E\u5168\u90E8\u8BB0\u5FC6\u6587\u4EF6\u3002\u6587\u4EF6\u9875\u7B7E\u662F\u53EA\u8BFB\u7684\u2014\u2014\u4FEE\u6539\u8BF7\u8BA9 AI \u7528 memory \u5DE5\u5177\u3001\u6216\u5728\u672C\u9875\u64CD\u4F5C\uFF0C\u907F\u514D\u624B\u52A8\u7834\u574F \xA7 \u5206\u9694\u683C\u5F0F\u5BFC\u81F4\u8BB0\u5FC6\u89E3\u6790\u9519\u4E71\uFF1A","memoryTab.guide.files.item1":"\u7F8E\u89C2\u89C6\u56FE\uFF1A\u6BCF\u6761\u8BB0\u5FC6\u4EE5\u5361\u7247\u5C55\u793A\uFF08\u65F6\u95F4 / \u5206\u652F / \u6807\u7B7E\u5FBD\u6807 + \u6B63\u6587\uFF09\uFF0C\u53EF\u641C\u7D22\u8FC7\u6EE4\uFF0C\u4E5F\u53EF\u5207\u6362\u7EAF\u6587\u672C\u89C6\u56FE\u770B\u539F\u6587\uFF1B","memoryTab.guide.files.item2":"KEY \u9875\u7B7E\u53EF\u624B\u52A8\u6DFB\u52A0\u957F\u671F\u9879\u76EE\u4E8B\u5B9E\uFF08\u53EF\u540C\u65F6\u6307\u5B9A\u5BF9\u54EA\u4E9B git \u5206\u652F\u751F\u6548\uFF09\uFF0C\u4FDD\u5B58\u540E\u4E0B\u4E00\u8F6E\u81EA\u52A8\u6CE8\u5165\uFF1B","memoryTab.guide.files.item3":"\u6BCF\u6761\u8BB0\u5FC6\u53EF\u7F16\u8F91\uFF08\u5199\u5165\u9700\u786E\u8BA4\uFF09\u3001\u5220\u9664\uFF08\u6309\u5B8C\u6574\u6761\u76EE\u7CBE\u786E\u5339\u914D\uFF0C\u675C\u7EDD\u8BEF\u5220\uFF09\u3001\u5F52\u6863 / \u79FB\u56DE\u4E3B\u8BB0\u5FC6\u3002","memoryTab.guide.branch.title":"git \u5206\u652F\u611F\u77E5\uFF1A\u4E0D\u540C\u5206\u652F\uFF0C\u4E0D\u540C\u7EA6\u5B9A","memoryTab.guide.branch.body":"\u540C\u4E00\u9879\u76EE\u4E0D\u540C\u5206\u652F\u7684\u7EA6\u5B9A\u53EF\u80FD\u5B8C\u5168\u4E0D\u540C\uFF08\u5982 main \u7528\u4E00\u5957\u89C4\u8303\u3001dev \u7528\u53E6\u4E00\u5957\uFF09\uFF0C\u9879\u76EE\u7EA7\u8BB0\u5FC6\u5168\u7A0B\u611F\u77E5\u5F53\u524D\u5206\u652F\uFF1A","memoryTab.guide.branch.item1":"key \u6761\u76EE\u53EF\u5E26\u5206\u652F\u8303\u56F4\u6807\u8BB0\uFF08\u65E0\u6807\u8BB0 = \u5168\u90E8\u5206\u652F\u53EF\u89C1\uFF09\uFF1B\u6CE8\u5165\u65F6\u53EA\u6CE8\u5165\u300C\u65E0\u6807\u8BB0\u300D+\u300C\u8986\u76D6\u5F53\u524D\u5206\u652F\u300D\u7684\u6761\u76EE\uFF1B","memoryTab.guide.branch.item2":"\u65E5\u5FD7\u6761\u76EE\u81EA\u52A8\u5E26\u6765\u6E90\u5206\u652F\u6807\u8BB0\uFF08[git \u5206\u652F\u540D]\uFF09\uFF0C\u8DE8\u5206\u652F\u56DE\u987E\u4E0D\u4F1A\u5F20\u51A0\u674E\u6234\u3002","memoryTab.guide.maintain.title":"\u7F16\u8F91\u4E0E\u7EF4\u62A4\uFF1A\u8BB0\u5FC6\u7684\u65E5\u5E38\u6253\u7406","memoryTab.guide.maintain.body":"\u8BB0\u5FC6\u7684\u7EF4\u62A4\u64CD\u4F5C\u90FD\u5728\u672C Tab \u5B8C\u6210\uFF1A","memoryTab.guide.maintain.item1":"\u7F16\u8F91\u6B63\u6587\uFF1A\u53EA\u6539\u5185\u5BB9\uFF0C\u65F6\u95F4\u6233 / \u5206\u652F / \u6807\u7B7E\u7531\u7A0B\u5E8F\u7EF4\u62A4\uFF1B","memoryTab.guide.maintain.item2":"\u5220\u9664\uFF1A\u6309\u5B8C\u6574\u6761\u76EE\u7CBE\u786E\u5339\u914D\uFF08\u4E0D\u4F1A\u8BEF\u5220\u5305\u542B\u5173\u7CFB\u7684\u957F\u6761\u76EE\uFF09\uFF0C\u5220\u9664\u4E0D\u53EF\u6062\u590D\uFF1B","memoryTab.guide.maintain.item3":"\u5F52\u6863 / \u79FB\u56DE\uFF1A\u4F4E\u9891\u8BB0\u5FC6\u79FB\u51FA\u4E3B\u8F68\u4E0D\u518D\u6CE8\u5165\u3001\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u968F\u65F6\u79FB\u56DE\u3002","memoryTab.guide.suggestions.title":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\uFF1AAI \u53EA\u63D0\u8BAE\uFF0C\u4F60\u62CD\u677F","memoryTab.guide.suggestions.body":"\u540E\u53F0\u5BA1\u67E5\u81EA\u52A8\u63D0\u70BC\u300C\u503C\u5F97\u8BB0\u4F4F\u7684\u4FE1\u606F\u300D\uFF0C\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\u2014\u2014AI \u4E0D\u4F1A\u64C5\u81EA\u5F80\u8BB0\u5FC6\u91CC\u5199\u4E1C\u897F\uFF1A","memoryTab.guide.suggestions.item1":"\u91C7\u7EB3\uFF1A\u53EF\u5148\u4FEE\u6539\u6587\u672C\u3001\u53EF\u9009\u76EE\u6807\u8F68\uFF08\u957F\u671F\u8BB0\u5FC6 / \u7528\u6237\u6863\u6848 / \u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF09\uFF0C\u5199\u5165\u540E\u968F\u5FEB\u7167\u6CE8\u5165\uFF1B","memoryTab.guide.suggestions.item2":"\u5F52\u6863\uFF1A\u4E0D\u6CE8\u5165\u3001\u4EC5\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\uFF1B\u62D2\u7EDD\uFF1A\u76F4\u63A5\u4E22\u5F03\u3002","memoryTab.guide.confirm.title":"\u786E\u8BA4\u5236\uFF1A\u4E3A\u4EC0\u4E48\u5FC5\u987B\u4F60\u70B9\u5934","memoryTab.guide.confirm.body":"\u8BB0\u5FC6\u5199\u5165\u4F1A\u771F\u5B9E\u6539\u53D8 AI \u7684\u884C\u4E3A\u2014\u2014\u5199\u8FDB\u53BB\u5C31\u8FDB\u5165\u4E0A\u4E0B\u6587\u3001\u5F71\u54CD\u540E\u7EED\u6240\u6709\u56DE\u590D\u3002\u6240\u4EE5\u4E00\u5F8B\u5148\u7ECF\u4F60\u786E\u8BA4\uFF0C\u8FD9\u662F\u8BB0\u5FC6\u8FDB\u5316\u7684\u628A\u5173\u73AF\u8282\uFF1A\u4F60\u8BF4\u4E86\u7B97\u3002","skillsTab.guide.what.title":"\u6280\u80FD\u662F\u4EC0\u4E48\uFF1A\u7ED9 AI \u7684\u65B9\u6CD5\u8BBA\u624B\u518C","skillsTab.guide.what.body":"\u6280\u80FD = \u4E00\u4EFD\u7ED9 AI \u770B\u7684\u65B9\u6CD5\u8BBA\u6587\u6863\uFF08SKILL.md\uFF1Aname + description + \u64CD\u4F5C\u6B65\u9AA4\uFF09\u3002\u5B83\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u2014\u2014AI \u9047\u5230\u540C\u7C7B\u4EFB\u52A1\uFF0C\u76F4\u63A5\u6309\u4F60\u7684\u6D41\u7A0B\u6267\u884C\uFF0C\u4E0D\u7528\u91CD\u65B0\u6478\u7D22\uFF1A","skillsTab.guide.what.item1":"\u6280\u80FD\u5E93\u9ED8\u8BA4\u5728 ~/.agents/skills\uFF08\u6BCF\u4E2A\u6280\u80FD\u4E00\u4E2A\u76EE\u5F55\uFF09\uFF1B","skillsTab.guide.what.item2":"DSH \u8FD8\u4F1A\u626B\u63CF\u9879\u76EE\u6280\u80FD\u3001\u5185\u7F6E\u6280\u80FD\u4E0E\u81EA\u5B9A\u4E49\u76EE\u5F55\u2014\u2014\u5168\u90E8\u5728\u672C Tab \u53EF\u89C1\u3001\u53EF\u7BA1\u7406\u3002","skillsTab.guide.how.title":"\u6280\u80FD\u600E\u4E48\u6C89\u6DC0","skillsTab.guide.how.body":"\u628A\u300C\u8E29\u8FC7\u7684\u5751\u3001\u597D\u7528\u7684\u6D41\u7A0B\u300D\u56FA\u5316\u6210\u6280\u80FD\uFF0C\u4E3B\u8981\u6709\u4E24\u6761\u8DEF\uFF1A","skillsTab.guide.how.item1":"\u540E\u53F0\u5BA1\u67E5\u81EA\u52A8\u521B\u5EFA\uFF1AAI \u53D1\u73B0\u53CD\u590D\u51FA\u73B0\u7684\u7ECF\u9A8C\u4F1A\u521B\u5EFA\u65B0\u6280\u80FD\uFF0C\u5148\u8FDB\u300C\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE\u300D\uFF0C\u4F60\u91C7\u7EB3\u540E\u79FB\u5165\u6280\u80FD\u5E93\uFF1B","skillsTab.guide.how.item2":"skill_manage \u5DE5\u5177\uFF1A\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u628A\u8FD9\u4E2A\u6D41\u7A0B\u5B58\u6210\u6280\u80FD\u300D\uFF0C\u5B83\u521B\u5EFA / \u66F4\u65B0\u6280\u80FD\uFF1B","skillsTab.guide.how.item3":"\u521B\u5EFA\u4FDD\u6301\u514B\u5236\uFF1A\u53EA\u5EFA\u300C\u591A\u6B21\u8E29\u5751\u3001\u96BE\u5EA6\u5927\u3001\u540E\u7EED\u590D\u7528\u300D\u7684\u6280\u80FD\u2014\u2014\u6280\u80FD\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\uFF0C\u5F71\u54CD\u4E0A\u4E0B\u6587\u3002","skillsTab.guide.pending.title":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","skillsTab.guide.pending.body":"\u5BA1\u67E5\u81EA\u52A8\u521B\u5EFA\u7684\u65B0\u6280\u80FD\u5728\u8FD9\u91CC\u7B49\u4F60\u786E\u8BA4\uFF1A","skillsTab.guide.pending.item1":"\u91C7\u7EB3\uFF1A\u79FB\u5165\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\uFF0C\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\uFF0C\u6240\u6709\u4F1A\u8BDD\u7ACB\u5373\u53EF\u7528\uFF1B","skillsTab.guide.pending.item2":"\u62D2\u7EDD\uFF1A\u4E22\u5F03\u8BE5\u6280\u80FD\u3002","skillsTab.guide.manager.title":"\u6280\u80FD\u7BA1\u7406\uFF1A\u6D4F\u89C8\u3001\u7F16\u8F91\u3001\u81EA\u5B9A\u4E49\u76EE\u5F55","skillsTab.guide.manager.body":"\u5B8C\u6574\u6280\u80FD\u7BA1\u7406\u5668\uFF08\u4E09\u680F\uFF1A\u6280\u80FD\u5217\u8868 / \u76EE\u5F55\u6811 / \u6587\u4EF6\u67E5\u770B\u7F16\u8F91\uFF09\uFF1A","skillsTab.guide.manager.item1":"\u5168\u90E8\u6280\u80FD\u6309\u6765\u6E90\u5206\u5C42\u5C55\u793A\uFF08\u7528\u6237 user-* / \u81EA\u5B9A\u4E49 custom / \u5185\u7F6E bundled / \u9879\u76EE project-*\uFF09\uFF0C\u53EF\u641C\u7D22\u4E0E\u7B5B\u9009\uFF1B","skillsTab.guide.manager.item2":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55\uFF1A\u6DFB\u52A0 / \u79FB\u9664\u4EFB\u610F\u6280\u80FD\u76EE\u5F55\uFF08<\u76EE\u5F55>/<\u6280\u80FD>/SKILL.md \u6216 <\u76EE\u5F55>/<\u6280\u80FD>.md \u5E03\u5C40\uFF09\uFF1B","skillsTab.guide.manager.item3":"\u6587\u4EF6\u6D4F\u89C8\u4E0E\u7F16\u8F91\uFF1A\u76EE\u5F55\u6811 + \u6587\u672C\u67E5\u770B / \u7F16\u8F91\uFF08\u9650\u6280\u80FD\u76EE\u5F55\u8303\u56F4\u5185\uFF0C\u8D8A\u754C / \u4E8C\u8FDB\u5236 / \u8D85\u5927\u6587\u4EF6\u4F1A\u88AB\u62D2\u7EDD\uFF09\uFF1B","skillsTab.guide.manager.item4":"\u7981\u7528\u5217\u8868\u4E0E\u81EA\u5B9A\u4E49\u76EE\u5F55\u6301\u4E45\u4FDD\u5B58\uFF0C\u91CD\u542F\u540E\u81EA\u52A8\u6062\u590D\u3002","skillsTab.guide.disable.title":"\u7981\u7528 / \u542F\u7528\uFF1A\u628A\u4E0D\u60F3\u8981\u7684\u6280\u80FD\u85CF\u8D77\u6765","skillsTab.guide.disable.body":"\u4E00\u952E\u7981\u7528\u53EF\u4EE5\u628A\u6280\u80FD\u4ECE\u6A21\u578B\u7684\u6280\u80FD\u76EE\u5F55\u4E2D\u79FB\u9664\uFF08\u6A21\u578B\u4E0D\u518D\u770B\u5230\u3001skill \u5DE5\u5177\u62D2\u7EDD\u52A0\u8F7D\uFF09\uFF1A","skillsTab.guide.disable.item1":"\u53EF\u968F\u65F6\u91CD\u65B0\u542F\u7528\uFF0C\u9009\u62E9\u6301\u4E45\u4FDD\u5B58\uFF1B","skillsTab.guide.disable.item2":"\u7CFB\u7EDF\u6280\u80FD\uFF08project \u6765\u6E90\uFF09\u7ED3\u6784\u6027\u4E0D\u53EF\u7981\u7528\u3002","skillsTab.guide.dirs.title":"\u81EA\u5B9A\u4E49\u6280\u80FD\u76EE\u5F55","skillsTab.guide.dirs.body":"\u5728\u300C\u6280\u80FD\u7BA1\u7406\u300D\u91CC\u76F4\u63A5\u6DFB\u52A0 / \u79FB\u9664\u4F60\u81EA\u5DF1\u7684\u6280\u80FD\u76EE\u5F55\uFF08\u5982 ~/.hermes/skills\uFF09\uFF0C\u4E0E\u5DF2\u6709\u6280\u80FD\u6839\u91CD\u53E0\u7684\u8DEF\u5F84\u4F1A\u88AB\u62D2\u7EDD\uFF1B\u6C38\u4E45\u4FDD\u5B58\u3001\u91CD\u542F\u540E\u81EA\u52A8\u52A0\u8F7D\u3002","skillsTab.guide.restraint.title":"\u521B\u5EFA\u7EAA\u5F8B\uFF1A\u514B\u5236\u624D\u6709\u6548","skillsTab.guide.restraint.body":"\u6280\u80FD\u4F1A\u6CE8\u5165\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7CFB\u7EDF\u63D0\u793A\u8BCD\u3001\u5F71\u54CD\u4E0A\u4E0B\u6587\u4E0E\u7F13\u5B58\u2014\u2014\u521B\u5EFA\u5FC5\u987B\u514B\u5236\uFF1A","skillsTab.guide.restraint.item1":"\u53EA\u521B\u5EFA\u300C\u591A\u6B21\u5C1D\u8BD5\u4ECD\u96BE\u89E3\u51B3\u3001\u96BE\u5EA6\u5927\u3001\u540E\u7EED\u53EF\u80FD\u591A\u6B21\u590D\u7528\u300D\u7684\u6280\u80FD\uFF1B","skillsTab.guide.restraint.item2":"\u4E00\u6B21\u6027\u3001\u7B80\u5355\u4EFB\u52A1\u4E0D\u521B\u5EFA\u6280\u80FD\u3002","todosTab.guide.tracks.title":"\u56DB\u8F68\u5F85\u529E\uFF1A\u4E8B\u60C5\u5404\u5F52\u5176\u4F4D","todosTab.guide.tracks.body":"\u5F85\u529E\u6309\u76EE\u6807\u5206\u56DB\u8F68\uFF0C\u4E0E\u8BB0\u5FC6\u7CFB\u7EDF\u540C\u6784\uFF1A","todosTab.guide.tracks.item1":"\u751F\u6D3B\uFF08life\uFF09\uFF1A\u4E2A\u4EBA\u7410\u4E8B\uFF1B","todosTab.guide.tracks.item2":"\u5DE5\u4F5C\uFF08work\uFF09\uFF1A\u8DE8\u9879\u76EE\u7684\u6B63\u4E8B\uFF1B","todosTab.guide.tracks.item3":"\u672C\u9879\u76EE\uFF08project\uFF09\uFF1A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u5F85\u529E\u2014\u2014\u6362\u4E2A\u76EE\u5F55\u5C31\u770B\u4E0D\u5230\uFF0C\u6309 cwd \u9694\u79BB\uFF1B","todosTab.guide.tracks.item4":"\u4ECA\u65E5\uFF08daily\uFF09\uFF1A\u6309\u5929\u5206\u6587\u4EF6\u7684\u6BCF\u65E5\u5F85\u529E\uFF0C\u53EF\u56DE\u770B\u8FC7\u5F80\uFF08\u6309\u65E5\u671F\u5206\u7EC4\uFF09\u3002","todosTab.guide.add.title":"\u600E\u4E48\u6DFB\u52A0\u5F85\u529E","todosTab.guide.add.body":"\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4EFB\u9009\u5176\u4E00\uFF1A","todosTab.guide.add.item1":"\u76F4\u63A5\u5BF9 AI \u8BF4\u300C\u8BB0\u4F4F / \u6211\u8981\u505A X\u300D\uFF08\u53EF\u6307\u660E \u5DE5\u4F5C / \u751F\u6D3B / \u8FD9\u4E2A\u9879\u76EE / \u4ECA\u5929\uFF09\uFF0CAI \u81EA\u52A8\u5F52\u5165\u5BF9\u5E94\u8F68\uFF1B","todosTab.guide.add.item2":"\u5728\u672C Tab \u8F93\u5165\u6846\u624B\u52A8\u6DFB\u52A0\uFF08\u53EF\u9009\u56DB\u8C61\u9650\u4E0E\u622A\u6B62\u65E5\u671F\uFF09\u3002","todosTab.guide.pending.title":"\u5F85\u786E\u8BA4\u5F85\u529E\uFF1AAI \u4E0D\u80FD\u64C5\u81EA\u7ED9\u4F60\u6D3E\u6D3B","todosTab.guide.pending.body":"AI \u81EA\u5EFA\u7684\u5F85\u529E\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u4F60\u786E\u8BA4\u540E\u624D\u751F\u6548\uFF1A","todosTab.guide.pending.item1":"\u91C7\u7EB3\uFF1A\u5199\u5165\u5BF9\u5E94\u5F85\u529E\u8F68\uFF08\u5F85\u529E\u6C38\u8FDC\u662F\u5F85\u529E\uFF0C\u4E0D\u4F1A\u53D8\u6210\u8BB0\u5FC6\uFF09\uFF1B","todosTab.guide.pending.item2":"\u5F52\u6863\uFF1A\u4FDD\u7559\u5907\u67E5\uFF1B\u62D2\u7EDD\uFF1A\u4E22\u5F03\u3002","todosTab.guide.attrs.title":"\u72B6\u6001\u4E0E\u5C5E\u6027","todosTab.guide.attrs.body":"\u6BCF\u6761\u5F85\u529E\u5E26\u5B8C\u6574\u5143\u6570\u636E\uFF0C\u65B9\u4FBF\u8DDF\u8E2A\uFF1A","todosTab.guide.attrs.item1":"\u56DB\u8C61\u9650\uFF08\u91CD\u8981 \xD7 \u7D27\u6025\uFF09\u3001\u622A\u6B62\u65E5\u671F\u3001\u53EF\u9009\u5206\u7C7B\uFF1B","todosTab.guide.attrs.item2":"\u72B6\u6001\uFF1A\u5F85\u529E / \u8FDB\u884C\u4E2D / \u5DF2\u5B8C\u6210\uFF08\u81EA\u52A8\u76D6\u5B8C\u6210\u65F6\u95F4\uFF09/ \u53D7\u963B / \u5DF2\u53D6\u6D88\uFF1B","todosTab.guide.attrs.item3":"\u5217\u8868 / \u770B\u677F\u4E24\u79CD\u89C6\u56FE\uFF1A\u5217\u8868\u6309\u8F68\u5206\u9875\u7B7E + \u72B6\u6001 / \u8C61\u9650\u7B5B\u9009\uFF1B\u770B\u677F\u6309\u56DB\u8C61\u9650\u56DB\u5BAB\u683C\u5C55\u793A\uFF1B\u6BCF\u6761\u53EF\u5B8C\u6210 / \u6062\u590D\u3001\u884C\u5185\u7F16\u8F91\u3001\u5220\u9664\uFF08\u786E\u8BA4\uFF09\u3002","todosTab.guide.view.title":"\u667A\u80FD\u89C6\u56FE\uFF1A\u53EA\u770B\u9700\u8981\u5173\u6CE8\u7684","todosTab.guide.view.body":"\u9ED8\u8BA4\u53EA\u663E\u793A\u9700\u8981\u5173\u6CE8\u7684\uFF08\u903E\u671F / \u4ECA\u65E5\u5230\u671F / \u5F53\u524D\u9879\u76EE / \u91CD\u8981\u7D27\u6025\uFF0C\u6700\u591A 8 \u6761\uFF09\uFF0C\u907F\u514D\u5237\u5C4F\uFF1A","todosTab.guide.view.item1":"\u8FC7\u5F80\u6BCF\u65E5\u5F85\u529E\u6309\u9700\u8BFB\u53D6\u2014\u2014\u70B9\u300C\u8FC7\u5F80\u300D\u9875\u7B7E\u624D\u67E5\u8BE2\u5386\u53F2\uFF1B","todosTab.guide.view.item2":"\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u52FE\u9009\u540E\u624D\u5C55\u793A\u8FC7\u671F\u7684\u9057\u7559\uFF08\u9ED8\u8BA4\u9690\u85CF\uFF0C\u4E0D\u589E\u52A0\u8D1F\u62C5\uFF09\u3002","todosTab.guide.remind.title":"\u5230\u671F\u63D0\u9192\uFF1AAI \u66FF\u4F60\u76EF\u7740","todosTab.guide.remind.body":"AI \u6BCF\u8F6E\u6536\u5C3E\u81EA\u52A8\u68C0\u67E5\u5F85\u529E\u5230\u671F\u60C5\u51B5\uFF0C\u6709\u5230\u671F\u672A\u5B8C\u6210\u9879\u5C31\u5728\u56DE\u590D\u672B\u5C3E\u63D0\u9192\u4F60\u2014\u2014\u4E0D\u7528\u81EA\u5DF1\u8BB0\u7740\u76EF\u3002","todo.track.life":"\u751F\u6D3B","todo.track.all":"\u5168\u90E8","todo.track":"\u5F85\u529E\u8F68","todo.track.work":"\u5DE5\u4F5C","todo.track.project":"\u672C\u9879\u76EE","todo.track.daily":"\u4ECA\u65E5","todo.track.past":"\u8FC7\u5F80","todo.projectHint":"\u5F53\u524D\u4F1A\u8BDD\u65E0\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u9879\u76EE\u5F85\u529E\u4E0D\u53EF\u7528\uFF08\u53EA\u6709 \u751F\u6D3B/\u5DE5\u4F5C/\u4ECA\u65E5\uFF09\u3002","todo.help":"\u56DB\u8F68\u5F85\u529E\uFF1A\u751F\u6D3B=\u4E2A\u4EBA\u7410\u4E8B\uFF1B\u5DE5\u4F5C=\u8DE8\u9879\u76EE\u7684\u6B63\u4E8B\uFF1B\u672C\u9879\u76EE=\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u5F85\u529E\uFF08\u6362\u4E2A\u76EE\u5F55\u770B\u4E0D\u5230\uFF09\uFF1B\u4ECA\u65E5=\u4ECA\u5929\u8981\u505A\u7684\uFF08\u6309\u5929\u5206\u6587\u4EF6\uFF09\u3002\u6BCF\u65E5\u7684\u8FC7\u5F80\u5F85\u529E\uFF08\u4ECA\u5929\u4E4B\u524D\uFF09\u9ED8\u8BA4\u4E0D\u8BFB\u53D6\u2014\u2014\u70B9\u300C\u8FC7\u5F80\u300D\u9875\u7B7E\u6216\u52FE\u9009\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u624D\u4F1A\u67E5\u8BE2\u5386\u53F2\uFF08\u5DF2\u8FC7\u671F\u7684\u9057\u7559\u9ED8\u8BA4\u9690\u85CF\uFF0C\u52FE\u9009\u540E\u5168\u90E8\u663E\u793A\uFF09\u3002\u6DFB\u52A0\uFF1A\u8F93\u5165\u5185\u5BB9\uFF0C\u53EF\u9009\u56DB\u8C61\u9650\uFF08\u91CD\u8981\xD7\u7D27\u6025\uFF09\u4E0E\u622A\u6B62\u65E5\u671F\uFF0C\u70B9\u300C\u6DFB\u52A0\u300D\uFF1B\u6216\u76F4\u63A5\u5BF9\u6211\u8BF4\u201C\u5E2E\u6211\u52A0\u4E2A\u5F85\u529E\uFF0C\u662F\u5DE5\u4F5C\u4E0A\u7684/\u751F\u6D3B\u4E2D\u7684/\u8FD9\u4E2A\u9879\u76EE\u7684/\u4ECA\u5929\u8981\u7684\u201D\u2014\u2014\u6211\u4F1A\u6309\u7C7B\u522B\u5199\u5165\u5BF9\u5E94\u8F68\u3002","todo.showExpired":"\u663E\u793A\u5DF2\u8FC7\u671F","todo.pastHint":"\u8FC7\u5F80\u5F85\u529E\u5927\u591A\u662F\u5DF2\u8FC7\u671F\u7684\u9057\u7559\uFF0C\u9ED8\u8BA4\u5DF2\u9690\u85CF\uFF1B\u52FE\u9009\u300C\u663E\u793A\u5DF2\u8FC7\u671F\u300D\u5373\u53EF\u67E5\u770B\u3002","todo.addPlaceholder":"\u8F93\u5165\u5F85\u529E\u5185\u5BB9\uFF08\u53EF\u591A\u884C\uFF09\uFF0C\u9009\u62E9\u8C61\u9650/\u622A\u6B62\u540E\u6DFB\u52A0\u2026","todo.add":"\u6DFB\u52A0","todo.added":"\u5DF2\u6DFB\u52A0\u5F85\u529E","todo.done":"\u5B8C\u6210","todo.undone":"\u6062\u590D","todo.edit":"\u7F16\u8F91","todo.save":"\u4FDD\u5B58","todo.cancel":"\u53D6\u6D88","todo.updated":"\u5DF2\u66F4\u65B0","todo.deleted":"\u5DF2\u5220\u9664","todo.deleteConfirm":`\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u5F85\u529E\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002

{snippet}`,"todo.due":"\u622A\u6B62","todo.overdue":"\u903E\u671F","todo.all":"\u5168\u90E8","todo.filterStatus":"\u72B6\u6001","todo.filterQuadrant":"\u8C61\u9650","todo.status.active":"\u672A\u5B8C\u6210","todo.status.pending":"\u5F85\u529E","todo.status.doing":"\u8FDB\u884C\u4E2D","todo.status.done":"\u5DF2\u5B8C\u6210","todo.status.blocked":"\u53D7\u963B","todo.status.cancelled":"\u5DF2\u53D6\u6D88","todo.quadrant":"\u56DB\u8C61\u9650","todo.quadrant.none":"\u672A\u5206\u7C7B","todo.quadrant.q1":"\u91CD\u8981\u7D27\u6025","todo.quadrant.q2":"\u91CD\u8981\u4E0D\u7D27\u6025","todo.quadrant.q3":"\u7D27\u6025\u4E0D\u91CD\u8981","todo.quadrant.q4":"\u4E0D\u91CD\u8981\u4E0D\u7D27\u6025","todo.empty":"\uFF08\u6682\u65E0\u5F85\u529E\uFF0C\u6DFB\u52A0\u4E00\u6761\u5427\uFF09","todo.view.mode":"\u89C6\u56FE","todo.view.list":"\u5217\u8868","todo.view.board":"\u770B\u677F","todo.board.empty":"\u6B64\u8C61\u9650\u6682\u65E0\u5F85\u529E","todo.board.cycleStatus":"\u70B9\u51FB\u5207\u6362\u72B6\u6001","memoryTab.cwd":"\u5F53\u524D\u4F1A\u8BDD\u5DE5\u4F5C\u76EE\u5F55","memoryTab.loading":"\u52A0\u8F7D\u4E2D\u2026","memoryTab.warning":"\u4EE5\u4E0B\u6587\u4EF6\u4E3A \xA7 \u5206\u9694\u7684\u7ED3\u6784\u5316\u8BB0\u5FC6\uFF0C\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00\u540E\u8BF7\u8C28\u614E\u7F16\u8F91\uFF0C\u968F\u610F\u4FEE\u6539\u53EF\u80FD\u7834\u574F\u683C\u5F0F\u3001\u5BFC\u81F4\u8BB0\u5FC6\u8BFB\u53D6\u9519\u4E71\u3002","memoryTab.readonly":"\u53EA\u8BFB","memoryTab.open":"\u6253\u5F00\u6587\u4EF6","memoryTab.opened":"\u5DF2\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00","memoryTab.empty":"\uFF08\u6587\u4EF6\u4E0D\u5B58\u5728\u6216\u4E3A\u7A7A\uFF09","memoryTab.noCwd":"\uFF08\u5F53\u524D\u4F1A\u8BDD\u65E0\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u65E0\u6CD5\u5B9A\u4F4D\u9879\u76EE\u8BB0\u5FC6\uFF09","memoryTab.truncated":"\uFF08\u5185\u5BB9\u8FC7\u957F\uFF0C\u5DF2\u622A\u65AD\u663E\u793A\uFF09","memoryTab.pagePrev":"\u4E0A\u4E00\u9875","memoryTab.pageNext":"\u4E0B\u4E00\u9875","memoryTab.pageInfo":"\u7B2C {page}/{total} \u9875 \xB7 \u5171 {count} \u6761","memoryTab.viewPretty":"\u7F8E\u89C2\u89C6\u56FE","memoryTab.viewRaw":"\u7EAF\u6587\u672C\u89C6\u56FE","memoryTab.searchPlaceholder":"\u641C\u7D22\u5185\u5BB9\u3001\u65F6\u95F4\u6216\u6807\u7B7E\u2026","memoryTab.noResults":"\u6CA1\u6709\u5339\u914D\u7684\u6761\u76EE\uFF0C\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002","memoryTab.projectTag":"\u9879\u76EE\u6807\u7B7E","memoryTab.entryCount":"{count} \u6761","memoryTab.keyAddHelp":"\u624B\u52A8\u6DFB\u52A0\u4E00\u6761\u957F\u671F\u6709\u6548\u7684\u9879\u76EE\u4E8B\u5B9E\uFF08\u7EA6\u5B9A/\u51B3\u7B56/\u67B6\u6784/\u8E29\u5751\uFF09\uFF0C\u4FDD\u5B58\u540E\u5199\u5165 KEY.md\uFF0C\u4E0B\u4E00\u8F6E\u81EA\u52A8\u6CE8\u5165\u4E0A\u4E0B\u6587\u3002","memoryTab.keyAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u9879\u76EE\u91CD\u8981\u8BB0\u5FC6\uFF0C\u4F8B\u5982\uFF1A\u672C\u9879\u76EE\u7EA6\u5B9A\u4F7F\u7528 pnpm workspaces\u2026","memoryTab.keyAdd":"\u4FDD\u5B58","memoryTab.keyAdded":"\u5DF2\u5199\u5165\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF0C\u4E0B\u4E00\u8F6E\u5C06\u6CE8\u5165\u4E0A\u4E0B\u6587","memoryTab.memoryAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u60F3\u957F\u671F\u8BB0\u4F4F\u7684\u5168\u5C40\u4E8B\u5B9E/\u60EF\u4F8B/\u73AF\u5883\uFF0C\u4F8B\u5982\uFF1A\u516C\u53F8\u5185\u90E8 Nexus \u4ED3\u5E93\u5730\u5740\u2026","memoryTab.userAddPlaceholder":"\u8F93\u5165\u4E00\u6761\u7528\u6237\u504F\u597D/\u4E60\u60EF/\u6C9F\u901A\u65B9\u5F0F\uFF0C\u4F8B\u5982\uFF1A\u56DE\u590D\u9ED8\u8BA4\u7528\u4E2D\u6587\u2026","memoryTab.memoryUserAddHelp":"\u624B\u52A8\u5199\u5165\u975E\u9879\u76EE\u7EA7\u957F\u671F\u8BB0\u5FC6\uFF08\u5168\u5C40\u4E8B\u5B9E / \u7528\u6237\u6863\u6848\uFF09\uFF0C\u65E5\u671F\u81EA\u52A8\u76D6\u6233\uFF0C\u4E0B\u4E00\u8F6E\u5168\u5C40\u6CE8\u5165\u751F\u6548\u3002","memoryTab.memoryAdd":"\u4FDD\u5B58","memoryTab.memoryUserAdded":"\u5DF2\u5199\u5165\uFF0C\u4E0B\u4E00\u8F6E\u8D77\u5168\u5C40\u6CE8\u5165\u751F\u6548","memoryTab.delete":"\u5220\u9664","memoryTab.deleteConfirm":`\u786E\u5B9A\u5220\u9664\u8FD9\u6761\u8BB0\u5FC6\uFF1F\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\u3002

{snippet}`,"memoryTab.deleted":"\u5DF2\u5220\u9664\u8BE5\u6761\u76EE","memoryTab.edit":"\u7F16\u8F91","memoryTab.save":"\u4FDD\u5B58","memoryTab.cancel":"\u53D6\u6D88","memoryTab.updated":"\u5DF2\u66F4\u65B0\u8BE5\u6761\u76EE","memoryTab.editHint":"\u53EA\u80FD\u4FEE\u6539\u5185\u5BB9\uFF1A\u65F6\u95F4\u6233\u4E0E\u5206\u652F\u7B49\u6807\u8BB0\u7531\u7A0B\u5E8F\u7EF4\u62A4\uFF0C\u4E0D\u80FD\u6539\u52A8\uFF1B\u5206\u9694\u7B26 \xA7 \u4E0D\u53EF\u8F93\u5165\u3002","memoryTab.editConfirm":`\u8FD9\u6761\u8BB0\u5FC6\u4FDD\u5B58\u540E\u4F1A\u7ACB\u5373\u6CE8\u5165\u4F1A\u8BDD\u4E0A\u4E0B\u6587\uFF08\u8FDB\u5165\u540E\u7EED\u6A21\u578B\u7684\u63D0\u793A\u8BCD\uFF09\uFF0C\u786E\u5B9A\u4FDD\u5B58\uFF1F

{snippet}`,"memoryTab.archive":"\u5F52\u6863","memoryTab.archiveConfirm":`\u5F52\u6863\u8FD9\u6761\u8BB0\u5FC6\uFF1F\u5C06\u4ECE\u4E3B\u8BB0\u5FC6\u79FB\u5165\u5F52\u6863\u6587\u4EF6\uFF0C\u4E0D\u518D\u6CE8\u5165\u4F1A\u8BDD\uFF1B\u9700\u8981\u65F6\u53EF\u968F\u65F6\u79FB\u56DE\u3002

{snippet}`,"memoryTab.archived":"\u5DF2\u5F52\u6863\uFF08\u4E0D\u518D\u6CE8\u5165\uFF0C\u53EF\u968F\u65F6\u79FB\u56DE\uFF09","memoryTab.promote":"\u79FB\u56DE\u4E3B\u8BB0\u5FC6","memoryTab.promoted":"\u5DF2\u79FB\u56DE\u4E3B\u8BB0\u5FC6\uFF08\u91CD\u65B0\u6CE8\u5165\u4F1A\u8BDD\uFF09","memoryTab.keyScope":"\u5206\u652F\u8303\u56F4","memoryTab.keyScopeLabel":"\u5206\u652F","memoryTab.keyScopeAll":"\u5168\u90E8","memoryTab.keyScopeAllHint":"\u5168\u90E8 = \u6240\u6709\u5206\u652F\u53EF\u89C1","memoryTab.keyScopeAllWeight":"\uFF08\u52FE\u9009\u540E\u6E05\u7A7A\u5206\u652F\u9009\u62E9\uFF09","memoryTab.keyScopeHint":"\u70B9\u51FB\u4FEE\u6539\u5206\u652F\u8303\u56F4","memoryTab.keyScopeSaved":"\u5206\u652F\u8303\u56F4\u5DF2\u66F4\u65B0","memoryTab.keyScopeSave":"\u4FDD\u5B58","memoryTab.keyScopeCancel":"\u53D6\u6D88","memoryTab.keyBranchInfo":"\u5F53\u524D\u5206\u652F\uFF1A{branch}\uFF0C\u4EC5\u6CE8\u5165\u65E0\u6807\u8BB0\u6216\u542B\u8BE5\u5206\u652F\u7684\u6761\u76EE","memoryTab.gitBranch":"\u8BE5\u6761\u8BB0\u5F55\u6240\u5C5E\u7684 git \u5206\u652F","memoryTab.dshOnly":"\u4EC5DSH","memoryTab.dshOnlyHint":"\u8BE5\u6761\u76EE\u53EA\u6CE8\u5165 DSH \u81EA\u8EAB\u4F1A\u8BDD\uFF1B\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF08COI \u4EFB\u52A1\uFF09\u65F6\u81EA\u52A8\u8DF3\u8FC7\u2014\u2014\u7528\u4E8E\u5B58\u653E\u53EA\u5BF9 DSH \u6709\u610F\u4E49\u7684\u7EAA\u5F8B/\u89C4\u5219/\u67B6\u6784\u7C7B\u4E8B\u5B9E","memoryTab.dshOnlyOn":"\u4EC5DSH","memoryTab.dshOnlyOff":"\u53D6\u6D88\u4EC5DSH","memoryTab.dshOnlySet":"\u5DF2\u6807\u8BB0\u4E3A\u4EC5 DSH \u9002\u7528\uFF08\u5916\u90E8\u6267\u884C\u5668\u6CE8\u5165\u65F6\u8DF3\u8FC7\uFF09","memoryTab.dshOnlyRemoved":"\u5DF2\u53D6\u6D88\u4EC5 DSH \u6807\u8BB0\uFF08\u5916\u90E8\u6267\u884C\u5668\u53EF\u89C1\uFF09","memoryTab.dshOnlyToggleHint":"\u5207\u6362\u300C\u4EC5 DSH\u300D\u6807\u8BB0\uFF1A\u8BE5\u6761\u76EE\u53EA\u6CE8\u5165 DSH \u81EA\u8EAB\uFF0C\u4E0D\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF08COI\uFF09","memoryTab.dshOnlyAdd":"\u4EC5 DSH \u9002\u7528\uFF08\u4E0D\u6CE8\u5165\u5916\u90E8\u6267\u884C\u5668\uFF09","memoryTab.desc.project":"\u9879\u76EE\u65E5\u5FD7\uFF1A\u6BCF\u56DE\u5408\u6536\u5C3E\u81EA\u52A8\u8BB0\u5F55\u672C\u56DE\u5408\u8FDB\u5C55\uFF1B\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u6A21\u578B\u6309\u9700\u8BFB\u53D6\u3002","memoryTab.desc.key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF1A\u957F\u671F\u7EA6\u5B9A/\u51B3\u7B56/\u8E29\u5751\uFF0C\u81EA\u52A8\u6CE8\u5165\u5F53\u524D\u9879\u76EE\u4F1A\u8BDD\uFF1B\u6309\u91CD\u8981\u6027\u5199\u5165\uFF0C\u53EF\u624B\u52A8\u6DFB\u52A0\u6216\u5220\u9664\u3002","memoryTab.desc.daily":"\u4ECA\u65E5\u65E5\u5FD7\uFF1A\u6309\u5929\u5206\u6587\u4EF6\u7684\u6D41\u6C34\u8BB0\u5F55\uFF0C\u7A0B\u5E8F\u81EA\u52A8\u6807\u6CE8\u9879\u76EE\u6807\u7B7E\uFF1B\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u6A21\u578B\u6309\u9700\u8BFB\u53D6\u3002","memoryTab.desc.user":"\u7528\u6237\u6863\u6848\uFF1A\u7528\u6237\u504F\u597D\u4E0E\u4E60\u60EF\uFF0C\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF1B\u5199\u5165\u9700\u5BA1\u67E5\u5EFA\u8BAE\u5E76\u7ECF\u786E\u8BA4\u3002","memoryTab.desc.memory":"\u957F\u671F\u8BB0\u5FC6\uFF1A\u5168\u5C40\u73AF\u5883\u4E0E\u9879\u76EE\u4E8B\u5B9E\uFF0C\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF1B\u5199\u5165\u9700\u5BA1\u67E5\u5EFA\u8BAE\u5E76\u7ECF\u786E\u8BA4\u3002","memoryTab.desc.archive-user":"\u5F52\u6863\u7528\u6237\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\u7684\u7528\u6237\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.archive-memory":"\u5F52\u6863\u8BB0\u5FC6\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\u7684\u5168\u5C40\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.archive-key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u5F52\u6863\uFF1A\u4E0D\u591F\u683C\u8FDB\u4E3B\u8BB0\u5FC6\uFF08\u6216\u9700\u6682\u505C\u6CE8\u5165\uFF09\u7684\u9879\u76EE\u4E8B\u5B9E\uFF0C\u4E0D\u6CE8\u5165\u4EFB\u4F55\u4F1A\u8BDD\uFF1B\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u6216\u5220\u9664\u3002","memoryTab.desc.agents":"\u5168\u5C40\u89C4\u5219\uFF1A\u8DE8\u4F1A\u8BDD\u751F\u6548\u7684\u7528\u6237\u89C4\u5219\uFF08AGENTS.md\uFF09\uFF0C\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\u3002","panel.suggestions.title":"\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE","panel.suggestions.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u5EFA\u8BAE\u3002","panel.suggestions.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u5168\u5C40\u8BB0\u5FC6\u5EFA\u8BAE\uFF1A\u91C7\u7EB3\u540E\u5199\u5165\u8BB0\u5FC6\u6587\u4EF6\u5E76\u968F\u5FEB\u7167\u6CE8\u5165\uFF1B\u5F52\u6863\u4FDD\u7559\u5907\u67E5\uFF08\u4E0D\u6CE8\u5165\uFF09\uFF1B\u62D2\u7EDD\u4E22\u5F03\u3002","panel.todoSuggestions.title":"\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE","panel.todoSuggestions.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u5F85\u529E\u5EFA\u8BAE\u3002","panel.todoSuggestions.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u5F85\u529E\u5EFA\u8BAE\uFF1A\u91C7\u7EB3\u540E\u5199\u5165\u5BF9\u5E94\u5F85\u529E\u8F68\uFF08\u5F85\u529E\u4E0D\u80FD\u53D8\u6210\u8BB0\u5FC6\uFF09\uFF1B\u5F52\u6863\u4FDD\u7559\u5907\u67E5\uFF1B\u62D2\u7EDD\u4E22\u5F03\u3002","panel.guide.title":"\u4F7F\u7528\u6307\u5357","panel.guide.intro":"memory-evolve \u662F\u300C\u8BB0\u5FC6\u4E0E\u81EA\u6211\u8FDB\u5316\u300D\u80FD\u529B\u96C6\u5408\uFF1A\u8BA9 AI \u628A\u5BF9\u8BDD\u6C89\u6DC0\u4E3A\u957F\u671F\u8BB0\u5FC6\u3001\u5F85\u529E\u548C\u6280\u80FD\u2014\u2014\u8D8A\u7528\u8D8A\u61C2\u4F60\uFF0C\u8DE8\u4F1A\u8BDD\u4E0D\u4E22\u4E0A\u4E0B\u6587\u3002\u4E0B\u9762\u6309\u6A21\u5757\u4ECB\u7ECD\u80FD\u505A\u4EC0\u4E48\u3001\u600E\u4E48\u7528\u3002","panel.guide.memory.title":"\u8BB0\u5FC6\u8BFB\u5199\uFF08memory \u5DE5\u5177\uFF09","panel.guide.memory.desc":"\u4E94\u8F68\u8BB0\u5FC6\uFF1A\u957F\u671F\u8BB0\u5FC6\uFF08\u5168\u5C40\uFF09\u3001\u7528\u6237\u6863\u6848\u3001\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\uFF08\u81EA\u52A8\u6CE8\u5165\uFF0C\u4E14\u6309 git \u5206\u652F\u8FC7\u6EE4\u2014\u2014\u53EA\u6709\u5F53\u524D\u5206\u652F\u76F8\u5173\u7684\u5173\u952E\u8BB0\u5FC6\u8FDB\u5165 AI \u4E0A\u4E0B\u6587\uFF09\u3001\u9879\u76EE\u65E5\u5FD7\u3001\u4ECA\u65E5\u65E5\u5FD7\u3002\u600E\u4E48\u7528\uFF1A\u6B63\u5E38\u5BF9\u8BDD\u5373\u53EF\u2014\u2014AI \u6BCF\u56DE\u5408\u81EA\u52A8\u628A\u8FDB\u5C55\u5199\u8FDB\u65E5\u5FD7\uFF1B\u53D1\u73B0\u91CD\u8981\u4E8B\u5B9E\u5C31\u8BF4\u300C\u8BB0\u4E00\u4E0B\uFF1A\u8FD9\u4E2A\u9879\u76EE\u7684\u90E8\u7F72\u7AEF\u53E3\u662F 8080\u300D\uFF1B\u6362\u9879\u76EE / \u9694\u5929\u7EE7\u7EED\u65F6\u76F4\u63A5\u95EE AI\u300C\u67E5\u4E00\u4E0B\u8BB0\u5FC6\u300D\uFF0C\u5B83\u65E0\u7F1D\u8854\u63A5\uFF0C\u4E0D\u7528\u4F60\u590D\u8FF0\u3002","panel.guide.review.title":"\u8BB0\u5FC6\u5BA1\u67E5\uFF08\u81EA\u52A8\u8FDB\u5316\uFF09","panel.guide.review.desc":"\u6BCF\u9694 N \u8F6E\uFF08\u9ED8\u8BA4 10 \u8F6E\uFF0C\u914D\u7F6E\u91CC\u53EF\u6539\uFF09AI \u81EA\u52A8\u56DE\u987E\u4F1A\u8BDD\u3001\u63D0\u70BC\u503C\u5F97\u8BB0\u4F4F\u7684\u4FE1\u606F\uFF0C\u63D0\u4EA4\u5230\u300C\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\u300D\u7531\u4F60\u786E\u8BA4\u540E\u751F\u6548\u2014\u2014AI \u4E0D\u4F1A\u64C5\u81EA\u5F80\u8BB0\u5FC6\u91CC\u5199\u4E1C\u897F\u3002\u5076\u5C14\u53BB\u300C\u8BB0\u5FC6\u300DTab \u7684\u5F85\u786E\u8BA4\u961F\u5217\u91CC\u91C7\u7EB3\u6216\u62D2\u7EDD\u5373\u53EF\u3002","panel.guide.todo.title":"\u5F85\u529E\u7BA1\u7406\uFF08dtodo\uFF09","panel.guide.todo.desc":"\u5BF9 AI \u8BF4\u300C\u8BB0\u4F4F / \u6211\u8981\u505A X\u300D\u5373\u843D\u6210\u7ED3\u6784\u5316\u5F85\u529E\uFF08\u81EA\u52A8\u5206 \u751F\u6D3B / \u5DE5\u4F5C / \u9879\u76EE / \u6BCF\u65E5\uFF0C\u53EF\u8BBE\u91CD\u8981\u7D27\u6025\u4E0E\u622A\u6B62\u65E5\u671F\uFF09\uFF0C\u5230\u671F AI \u4F1A\u5728\u56DE\u590D\u672B\u5C3E\u63D0\u9192\u4F60\uFF1BAI \u81EA\u5EFA\u7684\u5F85\u529E\u5148\u8FDB\u300C\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE\u300D\u7B49\u4F60\u786E\u8BA4\u3002\u7BA1\u7406\u754C\u9762\u5728\u300C\u5F85\u529E\u300DTab\u3002","panel.guide.skill.title":"\u6280\u80FD\u6C89\u6DC0\uFF08skill_manage\uFF09","panel.guide.skill.desc":"\u53CD\u590D\u8E29\u5751\u7684\u65B9\u6CD5\u8BBA\u53EF\u56FA\u5316\u4E3A\u6280\u80FD\uFF0C\u540C\u7C7B\u4EFB\u52A1\u4E0B\u6B21\u76F4\u63A5\u6309\u6D41\u7A0B\u6267\u884C\u3002\u5BF9 AI \u8BF4\u300C\u628A\u8FD9\u4E2A\u6D41\u7A0B\u5B58\u6210\u6280\u80FD\u300D\u5373\u53EF\uFF1B\u521B\u5EFA\u4FDD\u6301\u514B\u5236\uFF0C\u53EA\u5EFA\u9AD8\u590D\u7528\u4EF7\u503C\u7684\u3002\u6280\u80FD\u5E93\u53EF\u5728\u300C\u6280\u80FD\u300DTab \u91CC\u6D4F\u89C8\u3001\u641C\u7D22\u5E76\u4E00\u952E\u542F\u7528 / \u7981\u7528\u3002","panel.guide.search.title":"\u672C\u5730\u641C\u7D22\uFF08memory_evolve_search_local_files\uFF09","panel.guide.search.desc":"\u8BB0\u5FC6\u91CC\u6CA1\u6709\u3001\u8981\u627E\u672C\u5730\u8D44\u6599\u65F6\uFF0C\u5BF9 AI \u8BF4\u300C\u641C\u4E00\u4E0B\u672C\u673A\u6709\u6CA1\u6709 XX\u300D\u2014\u2014\u6309\u6587\u4EF6\u540D\u627E\uFF08\u9ED8\u8BA4\u53EA\u641C\u6587\u6863\u6269\u5C55\u540D\uFF0C\u53EF\u663E\u5F0F\u5168\u7C7B\u578B\uFF09\uFF1B\u300C\u54EA\u4E2A\u6587\u6863\u91CC\u63D0\u8FC7 XX\u300D\u5219\u662F\u6309\u5185\u5BB9\u641C\uFF0C\u76F4\u63A5\u8FD4\u56DE\u547D\u4E2D\u6587\u4EF6\u548C\u7247\u6BB5\u3002\u56DB\u6863\u6A21\u5F0F\u5728\u300C\u914D\u7F6E\u300D\u91CC\u9009\uFF1A\u6587\u4EF6\u540D + \u5185\u5BB9 / \u4EC5\u6587\u4EF6\u540D / \u4EC5\u5185\u5BB9 / \u5173\u95ED\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1\uFF0C\u6253\u5F00\u624D\u751F\u6548\u3002","panel.guide.coi.title":"COI \u8C03\u5EA6\uFF08de_coi\uFF09","panel.guide.coi.desc":"\u628A\u4EFB\u52A1\u6D3E\u7ED9\u5916\u90E8 CLI \u4EE3\u7406\uFF08kimi / codex / grok / hermes \u7B49\uFF09\uFF1A\u7EDF\u4E00\u8C03\u5EA6\u4E0D\u5361\u4E3B\u8FDB\u7A0B\u3001\u5B9E\u65F6\u770B\u8FDB\u5EA6\u3001\u4F1A\u8BDD\u81EA\u52A8\u5206\u5C42\u7BA1\u7406\u53EF\u4E00\u952E\u6062\u590D\u3001\u8DE8 COI \u63A5\u529B\u3001\u4EFB\u52A1\u7ED3\u679C\u7559\u6863\u5E76\u6C89\u6DC0\u5230\u8BB0\u5FC6\u3002\u8BF4\u300C\u6D3E\u7ED9 kimi / codex \u505A XX\u300D\u5373\u53EF\uFF0C\u6216\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300DTab \u624B\u52A8\u53D1\u8D77\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300CCOI \u8C03\u5EA6\u300D\u5F00\u5173\uFF08\u5DE5\u5177\u5373\u65F6\u751F\u6548\uFF0CTab \u5237\u65B0\u540E\u51FA\u73B0\uFF09\u3002","panel.guide.prompt.title":"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\uFF08Prompt Manager\uFF09","panel.guide.prompt.desc":"\u628A\u5E38\u7528\u7684\u5DE5\u4F5C\u8303\u5F0F\u56FA\u5316\u6210\u63D0\u793A\u8BCD\u8D44\u4EA7\uFF1A\u9009\u4E2D\u4E00\u6761\u5373\u53EF\u6CE8\u5165\u2014\u2014\u5199\u5165\u540E\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\u3001\u4E0D\u6253\u65AD\u56DE\u590D\uFF1B\u652F\u6301\u4E00\u6B21\u6027\u3001\u6301\u7EED N \u8F6E\u3001\u6BCF M \u56DE\u5408\u63D0\u9192\u4E00\u6B21\uFF08\u6B21\u6570 / \u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\uFF0C\u6309\u5BF9\u8BDD\u56DE\u5408\u8BA1\u6570\u81EA\u52A8\u8FC7\u671F\uFF09\uFF0C\u300C\u6CE8\u5165\u4E2D\u300D\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u4E5F\u652F\u6301\u4E34\u65F6\u6CE8\u5165\uFF1A\u4E0D\u5EFA\u63D0\u793A\u8BCD\u76F4\u63A5\u8F93\u5165\u5185\u5BB9\u6CE8\u5165\uFF0C\u81EA\u52A8\u5B58\u5165\u5E93\u4E2D\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u63D0\u793A\u8BCD\u7BA1\u7406\u5668\u300D\u5F00\u5173\uFF0CTab \u5237\u65B0\u540E\u51FA\u73B0\u3002","panel.guide.models.title":"\u6A21\u578B\u8BBE\u7F6E\uFF08de_models\uFF09","panel.guide.models.desc":"\u300C\u6A21\u578B\u8BBE\u7F6E\u300DTab + de_models \u5DE5\u5177\uFF1A\u8868\u683C\u4E00\u89C8 DSH \u73B0\u6709\u4F9B\u5E94\u5546\u4E0E\u6A21\u578B\uFF0C\u7ED9\u6BCF\u4E2A\u6A21\u578B\u8BBE\u7F6E\u300C\u63D2\u4EF6\u4FA7\u300D\u7684\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u4E0E\u53EF\u7528 / \u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF08\u53EF\u52FE\u9009\u7B49\u7EA7\u767D\u540D\u5355\u3001\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF09\u2014\u2014\u8FD9\u4E9B\u914D\u7F6E\u53EA\u5BF9\u672C\u63D2\u4EF6\u6709\u7528\uFF08\u51B3\u5B9A de_models \u67E5\u8BE2\u53E3\u5F84\u4E0E Tab \u5C55\u793A\uFF09\uFF0C\u4E0D\u4FEE\u6539\u3001\u4E5F\u4E0D\u5F71\u54CD DSH \u81EA\u8EAB\u7684\u6A21\u578B\u8BBE\u7F6E\uFF08DSH \u7684\u6A21\u578B\u914D\u7F6E\u4ECD\u4EE5\u5B98\u65B9\u300C\u8BBE\u7F6E \u2192 \u6A21\u578B\u300D\u4E3A\u51C6\uFF09\u3002\u9ED8\u8BA4\u7981\u7528\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u6A21\u578B\u8BBE\u7F6E\u300D\u5F00\u5173\u540E\uFF0CTab \u5237\u65B0\u51FA\u73B0\u3001de_models \u5DE5\u5177\u751F\u6548\u3002","panel.guide.broadcast.title":"\u4F1A\u8BDD\u5E7F\u64AD\uFF08de_broadcast\uFF09","panel.guide.broadcast.desc":"DSH \u4F1A\u8BDD\u4E4B\u95F4\u4F20\u9012\u6D88\u606F\uFF1A\u590D\u5236\u672C\u4F1A\u8BDD ID\uFF08\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u6309\u94AE\uFF09\u53D1\u7ED9\u53E6\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u8BA9\u5B83\u7684 AI \u7528 de_broadcast send \u628A\u5185\u5BB9\u53D1\u7ED9\u4F60\u2014\u2014\u63A5\u6536\u65B9\u5FEB\u7167\u5B9A\u70B9\u6CE8\u5165\u672A\u8BFB\u63D0\u793A\uFF08\u53EA\u6709\u63A5\u6536\u8005\u770B\u5F97\u5230\uFF0C\u5176\u4ED6\u4F1A\u8BDD\u65E0\u611F\u77E5\uFF09\uFF0CAI \u7528 list / read \u67E5\u770B\u5168\u6587\u5904\u7406\uFF08\u5168\u5458\u5DF2\u8BFB\u81EA\u52A8\u5220\u9664\uFF09\uFF1B\u8D85\u957F\u5185\u5BB9\u81EA\u52A8\u843D\u6587\u4EF6\u3002\u623F\u95F4\uFF08\u804A\u5929\u5BA4\uFF09\u652F\u6301\u591A\u4EBA\u534F\u4F5C\u3001\u53EF\u8DE8\u5DE5\u4F5C\u76EE\u5F55\uFF1B\u9879\u76EE\u7FA4\u53EF\u53D1\u7ED9\u6574\u4E2A\u76EE\u5F55\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u5F00\u5173\u3002","panel.guide.session.title":"\u4F1A\u8BDD\u641C\u7D22\uFF08de_session_search\uFF09","panel.guide.session.desc":"\u8BA9 AI \u641C\u7D22\u300C\u5176\u4ED6 AI \u5DE5\u5177\u7684\u5386\u53F2\u4F1A\u8BDD\u300D\uFF08\u5F53\u524D\u652F\u6301 Codex\uFF09\u2014\u2014\u300C\u4E4B\u524D Codex \u91CC\u505A\u8FC7 XX\u300D\u76F4\u63A5\u95EE AI\uFF0C\u5B83\u6309\u5173\u952E\u8BCD\u641C\u51FA\u547D\u4E2D\u4F1A\u8BDD + \u6D88\u606F\u6458\u8981\uFF08snippet\uFF09+ \u4E0A\u4E0B\u6587\u7A97\u53E3\uFF1B\u53EF\u7528 cwd \u9650\u5B9A\u9879\u76EE\u3001sort / limit / window \u63A7\u5236\u7ED3\u679C\u89C4\u6A21\uFF1B\u96F6\u5E38\u9A7B\u72B6\u6001\u2014\u2014\u65E0\u7D22\u5F15\u3001\u65E0\u7F13\u5B58\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B9E\u65F6\u53EA\u8BFB\u626B\u63CF\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u641C\u7D22\u300D\u5F00\u5173\u3002","panel.guide.sessionOrch.title":"\u4F1A\u8BDD\u7F16\u6392\uFF08de_session\uFF09","panel.guide.sessionOrch.desc":"\u8BA9 AI \u7A0B\u5E8F\u5316\u521B\u5EFA / \u5524\u9192 DSH \u4F1A\u8BDD\u2014\u2014spawn \u65B0\u5EFA\u6807\u51C6\u4F1A\u8BDD\uFF08\u4E0E\u624B\u52A8\u6253\u5F00\u5B8C\u5168\u540C\u6784\uFF1A\u7CFB\u7EDF\u63D0\u793A\u8BCD / \u5DE5\u5177 / \u8BB0\u5FC6\u5FEB\u7167 / \u6301\u4E45\u5316\uFF0C\u51FA\u73B0\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EF\u63A5\u7BA1\uFF09\uFF0C\u521B\u5EFA\u540E\u7ACB\u5373\u81EA\u52A8\u5F00\u8DD1\uFF1Bwake \u5524\u9192\u5DF2\u6709\u4F1A\u8BDD\u6D3E\u6D3B\uFF08\u5FD9\u5219\u6392\u961F\uFF09\uFF1Bstatus / list \u67E5\u72B6\u6001\u3002\u534F\u4F5C\u7EAA\u5F8B\uFF1AAI \u4E0D\u4F1A\u81EA\u52A8\u5524\u9192\u4EFB\u4F55\u4F1A\u8BDD\u2014\u2014\u7531\u4F60\u6709\u610F\u8BC6\u5730\u6307\u6325\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u4F1A\u8BDD\u7F16\u6392\u300D\u5F00\u5173\uFF1B\u5EFA\u8BAE\u914D\u5408\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u623F\u95F4\u4F7F\u7528\u3002","panel.guide.uiSettings.title":"Web UI \u8BBE\u7F6E","panel.guide.uiSettings.desc":"\u7ED9 DSH web \u754C\u9762\u52A0\u6837\u5F0F\u7EA7\u5C0F\u529F\u80FD\uFF08\u7EAF\u5BA2\u6237\u7AEF\u6CE8\u5165\uFF0C\u4E0D\u6539\u6846\u67B6\uFF09\uFF1A\u5404\u529F\u80FD\u7684\u72EC\u7ACB\u5C0F\u5F00\u5173\u5728\u300CWeb UI \u8BBE\u7F6E\u300DTab \u7684\u300C\u7EFC\u5408\u300D\u91CC\u2014\u2014\u4F1A\u8BDD\u7B5B\u9009\uFF08\u5DE6\u4FA7\u5217\u8868\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\uFF09\u3001\u5BF9\u8BDD\u533A\u52A0\u5BBD\u3001\u6D88\u606F\u6C14\u6CE1\u52A0\u5BBD\u3001\u4E0A\u4E0B\u6587\u5360\u7528\u63D0\u9192\u3001Mermaid \u56FE\u8868\u6E32\u67D3\u3002\u9ED8\u8BA4\u5173\u95ED\u3002","panel.guide.canvas.title":"\u65E0\u9650\u753B\u677F","panel.guide.canvas.desc":"\u628A\u6563\u843D\u5728\u5404\u5904\u7684\u6587\u4EF6 / \u56FE\u7247 / \u97F3\u9891\u96C6\u4E2D\u5230\u4E00\u5757\u65E0\u9650\u753B\u5E03\u4E0A\uFF08\u5BF9\u8BDD\u9875\u300C\u753B\u677F\u300DTab\uFF09\u2014\u2014\u8DEF\u5F84 / \u4FBF\u7B7E / \u641C\u7D22\u4E00\u952E\u4E0A\u677F\uFF08\u672C\u5730\u8DEF\u5F84\u5F15\u7528\uFF0C\u4E0D\u62F7\u8D1D\uFF09\u3001\u5361\u7247\u5185\u76F4\u63A5\u9884\u89C8\u3001\u53EF\u590D\u5236\u5F15\u7528\u4E32\u4E22\u7ED9 AI \u8BA9\u5B83\u6309 id \u53D6\u7D20\u6750\uFF1BAI \u4E5F\u80FD\u7528 de_canvas \u5F80\u753B\u677F\u653E\u4FBF\u7B7E\uFF08\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u9700\u8981\u65F6\u4E3B\u52A8\u67E5\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1A\u5728\u300C\u914D\u7F6E\u300D\u91CC\u6253\u5F00\u300C\u65E0\u9650\u753B\u677F\u300D\u5F00\u5173\u3002","panel.guide.sync.title":"\u8BB0\u5FC6\u540C\u6B65\uFF08\u8DE8\u8BBE\u5907\uFF09","panel.guide.sync.desc":"\u8BA9\u9879\u76EE\u8BB0\u5FC6\u8DE8\u8BBE\u5907\u4E00\u81F4\u2014\u2014\u529E\u516C\u5BA4\u548C\u5BB6\u91CC\u7684\u7535\u8111\u5171\u4EAB\u540C\u4E00\u4EFD\u9879\u76EE\u5173\u952E\u8BB0\u5FC6 / \u65E5\u5FD7 / \u5F52\u6863 / \u9879\u76EE\u5F85\u529E\u3002\u5728\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab \u6253\u5F00\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5E76\u70B9\u300C\u5F00\u59CB\u540C\u6B65\u300D\uFF1A\u9ED8\u8BA4\u7528\u4F60\u7684\u4EE3\u7801\u4ED3\u5E93\u7684\u4E13\u5C5E\u5206\u652F\uFF0C\u96F6\u914D\u7F6E\uFF1B\u4E5F\u53EF\u586B\u4E00\u4E2A\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740\uFF0C\u4E00\u4E2A\u4ED3\u5E93\u88C5\u6240\u6709\u9879\u76EE\u7684\u8BB0\u5FC6\uFF08\u5168\u5C40\u8BB0\u5FC6\u4E5F\u80FD\u540C\u6B65\uFF09\u3002\u53E6\u4E00\u53F0\u7535\u8111\u6253\u5F00\u9879\u76EE\u81EA\u52A8\u8BA4\u4EB2\u3001\u62C9\u53D6\u5373\u53EF\u7EE7\u7EED\u7528\u3002\u6A21\u5757\u5F00\u5173\u5728\u300C\u914D\u7F6E\u300D\u91CC\uFF1B\u540C\u6B65\u6C38\u8FDC\u7531\u4F60\u624B\u52A8\u89E6\u53D1\uFF0C\u6CA1\u5F00\u540C\u6B65\u7684\u9879\u76EE\u4E0D\u53D7\u5F71\u54CD\u3002","panel.guide.confirm.title":"\u786E\u8BA4\u5236\uFF08\u4E3A\u4EC0\u4E48 AI \u4E0D\u80FD\u76F4\u63A5\u5199\uFF09","panel.guide.confirm.desc":"AI \u81EA\u5EFA\u7684\u8BB0\u5FC6\u3001\u5F85\u529E\u3001\u6280\u80FD\u90FD\u5148\u8FDB\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u7B49\u4F60\u786E\u8BA4\u624D\u751F\u6548\u3002\u56E0\u4E3A\u8FD9\u4E9B\u5199\u5165\u4F1A\u771F\u5B9E\u6539\u53D8 AI \u7684\u884C\u4E3A\uFF1A\u8BB0\u5FC6\u4F1A\u8FDB\u5165\u4E0A\u4E0B\u6587\u3001\u5F85\u529E\u662F\u7ED9\u4F60\u6D3E\u7684\u6D3B\u3001\u6280\u80FD\u4F1A\u6539\u53D8 AI \u7684\u80FD\u529B\u5E93\u2014\u2014\u5982\u679C AI \u64C5\u81EA\u5199\u5165\uFF0C\u53EF\u80FD\u628A\u5B83\u7684\u8BEF\u5224\u5F53\u4E8B\u5B9E\u6C89\u6DC0\u3001\u6216\u81EA\u4F5C\u4E3B\u5F20\u7ED9\u4F60\u6D3E\u6D3B\u3002\u4F60\u662F\u6700\u7EC8\u628A\u5173\u8005\uFF1AAI \u53EA\u63D0\u8BAE\uFF0C\u4F60\u51B3\u5B9A\u3002","panel.guide.best.title":"\u600E\u4E48\u7528\u5F97\u6700\u597D","panel.guide.best.1":"\u8DE8\u4F1A\u8BDD\u8854\u63A5\uFF1A\u9879\u76EE\u7EA6\u5B9A / \u8FDB\u5C55\u76F4\u63A5\u8BF4\u300C\u67E5\u4E00\u4E0B\u8BB0\u5FC6\u300D\uFF0CAI \u4ECE\u9879\u76EE\u65E5\u5FD7\u4E0E\u5173\u952E\u8BB0\u5FC6\u91CC\u63A5\u7EED\uFF0C\u4E0D\u91CD\u590D\u4EA4\u4EE3\u3002","panel.guide.best.2":"\u53E3\u5934\u5373\u8BB0\uFF1A\u60F3\u5230\u4EC0\u4E48\u5C31\u8BF4\u300C\u8BB0\u4F4F\u8FD9\u4E2A / \u8FD9\u4E2A\u8981\u8DDF\u8FDB\u300D\uFF0CAI \u81EA\u52A8\u5206\u7C7B\u6C89\u6DC0\uFF1B\u9694\u51E0\u5929\u56DE\u6765\u8BF4\u4E00\u53E5\u5C31\u80FD\u63A5\u4E0A\u3002","panel.guide.best.3":"\u5B9A\u671F\u786E\u8BA4\uFF1A\u5076\u5C14\u770B\u770B\u300C\u5F85\u786E\u8BA4\u8BB0\u5FC6\u5EFA\u8BAE\u300D\u300C\u5F85\u786E\u8BA4\u5F85\u529E\u5EFA\u8BAE\u300D\uFF0C\u91C7\u7EB3\u6216\u62D2\u7EDD\u2014\u2014\u8FD9\u662F\u8BB0\u5FC6\u8FDB\u5316\u7684\u786E\u8BA4\u73AF\u8282\u3002","panel.guide.best.4":"\u591A\u8BBE\u5907\u540C\u6B65\uFF1A\u529E\u516C\u5BA4\u548C\u5BB6\u91CC\u90FD\u5E72\u6D3B\uFF1F\u6253\u5F00\u300C\u8BB0\u5FC6\u540C\u6B65\u300D\uFF0C\u4E24\u53F0\u7535\u8111\u5171\u4EAB\u540C\u4E00\u4EFD\u9879\u76EE\u8BB0\u5FC6\uFF0C\u91CD\u8981\u7ED3\u8BBA\u4E0D\u7528\u8BB2\u4E24\u904D\u3002","panel.guide.loop":"\u95ED\u73AF\uFF1A\u804A \u2192 \u8BB0 \u2192 \u5BA1\u67E5 \u2192 \u6C89\u6DC0 \u2192 \u6267\u884C\u3002\u8FD9\u5957\u673A\u5236\u5C31\u662F AI \u7684\u957F\u671F\u5DE5\u4F5C\u8BB0\u5FC6\u3002","panel.suggestions.approve":"\u91C7\u7EB3","panel.suggestions.archive":"\u5F52\u6863","panel.suggestions.archiveHint":"\u5F52\u6863\uFF1A\u4E0D\u6CE8\u5165\u4F1A\u8BDD\uFF0C\u4EC5\u4FDD\u7559\u5907\u67E5\uFF0C\u9700\u8981\u65F6\u53EF\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.suggestions.editHint":"\u91C7\u7EB3\u524D\u53EF\u4FEE\u6539\u6587\u672C\uFF0C\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u5C06\u5199\u5165\u8BB0\u5FC6\u3002","panel.suggestions.reject":"\u62D2\u7EDD","panel.suggestions.approveAll":"\u5168\u90E8\u91C7\u7EB3","panel.suggestions.rejectAll":"\u5168\u90E8\u62D2\u7EDD","panel.suggestions.hits":"\u5DF2\u5EFA\u8BAE {count} \u6B21","panel.suggestions.hitsHint":"\u8BE5\u5185\u5BB9\u5728\u591A\u8F6E\u5BA1\u67E5\u4E2D\u53CD\u590D\u51FA\u73B0\uFF0C\u503C\u5F97\u8BA4\u771F\u786E\u8BA4","panel.suggestions.target.memory":"\u957F\u671F\u8BB0\u5FC6","panel.suggestions.target.user":"\u7528\u6237\u6863\u6848","panel.suggestions.target.key":"\u9879\u76EE\u5173\u952E\u8BB0\u5FC6","panel.suggestions.targetHint":"\u91C7\u7EB3\u65F6\u5199\u5165\u7684\u8F68\uFF1A\u9ED8\u8BA4=AI \u63A8\u8350\u7684\u5206\u7C7B\uFF1B\u53EF\u6539\u4E3A\u66F4\u5408\u9002\u7684\uFF08\u8BB0\u5FC6/\u7528\u6237\u6863\u6848/\u9879\u76EE\u5173\u952E\u8BB0\u5FC6\u90FD\u4F1A\u7ACB\u5373\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF09","panel.suggestions.projectHint":"\u8FD9\u6761\u5EFA\u8BAE\u6765\u81EA\u8BE5\u9879\u76EE\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF1A{path}","panel.suggestions.done":"\u64CD\u4F5C\u5B8C\u6210\uFF1A{text}","panel.archive.title":"\u5DF2\u5F52\u6863\u8BB0\u5FC6","panel.archive.empty":"\u6682\u65E0\u5F52\u6863\u6761\u76EE","panel.archive.help":"\u5F52\u6863\u7684\u5EFA\u8BAE\u4E0D\u4F1A\u6CE8\u5165\u4F1A\u8BDD\uFF0C\u4EC5\u5728\u6B64\u4FDD\u7559\u5907\u67E5\u2014\u2014\u9700\u8981\u65F6\u53EF\u300C\u79FB\u56DE\u4E3B\u8BB0\u5FC6\u300D\uFF08\u5199\u5165\u5BF9\u5E94\u8BB0\u5FC6\u6587\u4EF6\uFF09\u6216\u300C\u5220\u9664\u300D\u3002","panel.archive.promote":"\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.archive.delete":"\u5220\u9664","panel.archive.promoted":"\u5DF2\u79FB\u56DE\u4E3B\u8BB0\u5FC6","panel.archive.deleted":"\u5DF2\u5220\u9664\u5F52\u6863\u6761\u76EE","panel.skills.title":"\u5F85\u786E\u8BA4\u6280\u80FD\u5EFA\u8BAE","panel.skills.help":"\u540E\u53F0\u5BA1\u67E5\u4EA7\u51FA\u7684\u65B0\u6280\u80FD\uFF0C\u91C7\u7EB3\u540E\u79FB\u5165\u6280\u80FD\u5E93\uFF08~/.agents/skills\uFF09\u5E76\u968F\u7CFB\u7EDF\u63D0\u793A\u8BCD\u6CE8\u5165\u3002","panel.skills.empty":"\u6CA1\u6709\u5F85\u786E\u8BA4\u7684\u6280\u80FD\u5EFA\u8BAE\u3002","panel.skills.pending":"\u5F85\u91C7\u7EB3","panel.skills.approve":"\u91C7\u7EB3","panel.skills.reject":"\u62D2\u7EDD","panel.skills.done":"\u5DF2{op}\u6280\u80FD","panel.config.title":"\u914D\u7F6E","panel.config.help":"\u4FEE\u6539\u7ACB\u5373\u751F\u6548\u5E76\u6301\u4E45\u5316\uFF08\u8986\u76D6 config.yaml \u7684\u5BF9\u5E94\u9879\uFF09\u3002","panel.config.reviewEnabled":"\u540E\u53F0\u5BA1\u67E5","panel.config.reviewEnabled.hint":"\u81EA\u52A8\u56DE\u987E\u4F1A\u8BDD\u5E76\u6C89\u6DC0\u7ECF\u9A8C\uFF1B\u5173\u95ED\u540E memory/skill \u5DE5\u5177\u4E0E\u8BB0\u5FC6\u5FEB\u7167\u4ECD\u53EF\u7528\uFF0C\u53EA\u662F\u4E0D\u518D\u81EA\u52A8\u5BA1\u67E5","panel.config.reviewInterval":"\u5BA1\u67E5\u95F4\u9694\uFF08\u56DE\u5408\uFF09","panel.config.reviewInterval.hint":"\u6BCF N \u4E2A\u7528\u6237\u56DE\u5408\u81EA\u52A8\u5BA1\u67E5\u4E00\u6B21","panel.config.skillReviewEnabled":"\u6280\u80FD\u81EA\u52A8\u6C89\u6DC0","panel.config.skillReviewEnabled.hint":"\u5173\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u5BA1\u67E5\u521B\u5EFA\u7684\u65B0\u6280\u80FD\u8FDB\u5165\u5F85\u786E\u8BA4\u961F\u5217\uFF0C\u91C7\u7EB3\u540E\u624D\u8FDB\u5165\u6280\u80FD\u5E93\uFF1B\u5F00\uFF1A\u5BA1\u67E5\u76F4\u63A5\u521B\u5EFA\u6280\u80FD\uFF0C\u65E0\u9700\u786E\u8BA4\uFF08\u6280\u80FD\u6CE8\u5165\u6240\u6709\u4F1A\u8BDD\uFF0C\u8BF7\u8C28\u614E\u5F00\u542F\uFF09","panel.config.perTurnWriteGuard":"\u8BB0\u5FC6\u5199\u5165\u770B\u95E8\u72D7","panel.config.perTurnWriteGuard.hint":"\u5173\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u6839\u6E90\u662F\u6A21\u578B\u7684\u6307\u4EE4\u9075\u5FAA\u80FD\u529B\uFF0C\u5F3A\u6A21\u578B\u7528\u4E0D\u4E0A\uFF1B\u5F00\uFF1A\u8FDE\u7EED\u591A\u8F6E\u672A\u5199 daily/project \u8BB0\u5FC6\u65F6\u5FEB\u7167\u7F6E\u9876\u63D0\u9192\uFF08\u5199\u5165\u5373\u6D88\uFF09\uFF0C\u76EF\u4F4F\u957F\u4F1A\u8BDD\u662F\u5426\u6F0F\u505A\u6BCF\u8F6E\u6536\u5C3E\u5199\u8BB0\u5FC6","panel.config.writeGuardThreshold":"\u770B\u95E8\u72D7\u89E6\u53D1\u9608\u503C\uFF08\u8F6E\uFF09","panel.config.writeGuardThreshold.hint":"\u8FDE\u7EED N \u8F6E\u672A\u5199\u5165\u4EFB\u4F55 daily/project \u8BB0\u5FC6\u5373\u63D0\u9192\uFF08>=1\uFF1B2 = \u5BB9\u5FCD\u6F0F 1 \u8F6E\u3001\u7B2C 2 \u8F6E\u8D77\u63D0\u9192\uFF09","panel.config.perTurnProjectWrites":"\u6BCF\u56DE\u5408\u5199\u5165\u9879\u76EE\u8BB0\u5FC6","panel.config.perTurnProjectWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u4E3B\u52A8\u68C0\u67E5\u5E76\u8BB0\u5F55\u9879\u76EE\u76F8\u5173\u65B0\u4E8B\u5B9E\uFF08\u5173\u952E\u51B3\u7B56/\u8FDB\u5C55/\u8E29\u5751\uFF09\uFF1B\u5173\u95ED\u540E\u9879\u76EE\u8BB0\u5FC6\u4EC5\u6309\u9700\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA\uFF0C\u5F31\u9075\u5FAA\u7684\u6A21\u578B\u4E0D\u4E00\u5B9A\u4F1A\u6267\u884C","panel.config.perTurnDailyWrites":"\u6BCF\u56DE\u5408\u5199\u5165\u6BCF\u65E5\u65E5\u5FD7","panel.config.perTurnDailyWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u4E3B\u52A8\u68C0\u67E5\u5E76\u8BB0\u5F55\u5F53\u5929\u8FDB\u5C55\uFF1B\u5173\u95ED\u540E\u6BCF\u65E5\u65E5\u5FD7\u4EC5\u6309\u9700\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA\uFF0C\u5F31\u9075\u5FAA\u7684\u6A21\u578B\u4E0D\u4E00\u5B9A\u4F1A\u6267\u884C","panel.config.perTurnKeyWrites":"\u6BCF\u56DE\u5408\u68C0\u67E5\u9879\u76EE\u5173\u952E\u8BB0\u5FC6","panel.config.perTurnKeyWrites.hint":"\u8981\u6C42\u6A21\u578B\u6BCF\u4E2A\u56DE\u5408\u7ED3\u675F\u524D\u5224\u65AD\u662F\u5426\u51FA\u73B0\u91CD\u8981\u9879\u76EE\u4E8B\u5B9E\uFF08\u957F\u671F\u7EA6\u5B9A/\u51B3\u7B56/\u67B6\u6784/\u8E29\u5751\uFF09\uFF0C\u6709\u5219\u5199\u5165 target=key\uFF08\u81EA\u52A8\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF09\uFF0C\u6CA1\u6709\u5C31\u8DF3\u8FC7\uFF1B\u5173\u95ED\u540E key \u4EC5\u4FDD\u7559\u624B\u52A8\u6DFB\u52A0\u4E0E\u8BFB\u53D6\u3002\u26A0\uFE0F \u4F9D\u8D56 LLM \u6307\u4EE4\u9075\u5FAA","panel.config.keyProgressiveDisclosure":"key \u8F68\u6E10\u8FDB\u5F0F\u62AB\u9732","panel.config.keyProgressiveDisclosure.hint":"\u63A7\u5236 key \u8F68\u8BB0\u5FC6\u7684\u6CE8\u5165\u65B9\u5F0F\uFF1Aauto = \u5C0F\u6570\u636E\u91CF\u5168\u91CF\u6CE8\u5165\u3001\u5927\u6570\u636E\u91CF\u6458\u8981\u6CE8\u5165\uFF1Boff = \u59CB\u7EC8\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4\uFF09\uFF1Bon = \u59CB\u7EC8\u6458\u8981\u6CE8\u5165\uFF08\u8282\u7701 token\uFF09","panel.config.keyProgressiveDisclosure.auto":"\u81EA\u52A8","panel.config.keyProgressiveDisclosure.off":"\u5173\u95ED\uFF08\u59CB\u7EC8\u5168\u91CF\uFF0C\u9ED8\u8BA4\uFF09","panel.config.keyProgressiveDisclosure.on":"\u5F00\u542F\uFF08\u59CB\u7EC8\u6458\u8981\uFF09","panel.config.keyFullInjectThreshold":"\u5168\u91CF\u6CE8\u5165\u6761\u76EE\u6570\u9608\u503C","panel.config.keyFullInjectThreshold.hint":"auto \u6A21\u5F0F\u4E0B\uFF0C\u6761\u76EE\u6570 \u2264 \u6B64\u503C\u65F6\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4 3\uFF09","panel.config.keyFullInjectCharLimit":"\u5168\u91CF\u6CE8\u5165\u5B57\u7B26\u6570\u9608\u503C","panel.config.keyFullInjectCharLimit.hint":"auto \u6A21\u5F0F\u4E0B\uFF0C\u603B\u5B57\u7B26\u6570 \u2264 \u6B64\u503C\u65F6\u5168\u91CF\u6CE8\u5165\uFF08\u9ED8\u8BA4 1500\uFF09","panel.config.coiEnabled":"COI \u8C03\u5EA6","panel.config.coiEnabled.hint":"\u542F\u7528 de_coi_* \u5DE5\u5177\u4E0E\u300CCOI \u8C03\u5EA6\u300DTab\uFF1A\u7EDF\u4E00\u8C03\u5EA6 kimi/codex/grok/hermes \u7B49 CLI \u4EE3\u7406\uFF08\u9ED8\u8BA4\u7981\u7528\u2014\u2014\u672C\u63D2\u4EF6\u7684\u672C\u804C\u662F\u8BB0\u5FC6/\u5F85\u529E/\u6280\u80FD\uFF0C\u8C03\u5EA6\u662F\u6309\u9700\u589E\u5F3A\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u4E0E Tab \u5B8C\u5168\u4E0D\u53EF\u89C1\uFF09","panel.config.searchDocsEnabled":"\u672C\u5730\u6587\u4EF6\u641C\u7D22\u5DE5\u5177","panel.config.searchDocsEnabled.hint":'\u8BA9\u6A21\u578B\u5728\u672C\u673A\u6240\u6709\u78C1\u76D8/\u76EE\u5F55\u4E2D\u641C\u7D22\u6587\u4EF6\u3002**\u56DB\u6863\u6A21\u5F0F**\uFF1A\u90FD\u542F\u7528 = \u6587\u4EF6\u540D + \u5185\u5BB9\u68C0\u7D22\u90FD\u53EF\u7528\uFF1B\u4EC5\u6587\u4EF6\u540D = content/contentQuery \u53C2\u6570\u88AB\u5FFD\u7565\uFF08\u4E0D\u8BFB\u4EFB\u4F55\u6587\u4EF6\u5185\u5BB9\uFF0C\u9002\u5408\u5185\u5BB9\u68C0\u7D22\u7528\u522B\u7684\u5B9E\u73B0\u7684\u4EBA\uFF09\uFF1B\u4EC5\u5185\u5BB9 = \u6BCF\u6B21\u8C03\u7528\u90FD\u505A\u5185\u5BB9\u5339\u914D\uFF08query \u89C6\u4E3A\u5185\u5BB9\u5173\u952E\u8BCD\uFF09\uFF1B\u5173\u95ED = \u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1\u3002\u5185\u5BB9\u68C0\u7D22\uFF1AcontentQuery="\u5173\u952E\u8BCD" \u5373\u641C"\u54EA\u4E2A\u6587\u6863\u91CC\u63D0\u8FC7 XX"\uFF08rg \u5168\u6587\u5339\u914D\uFF0C\u8FD4\u56DE\u547D\u4E2D\u7247\u6BB5\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED',"panel.config.searchDocsMode.all":"\u90FD\u542F\u7528\uFF08\u6587\u4EF6\u540D + \u5185\u5BB9\uFF09","panel.config.searchDocsMode.filename":"\u4EC5\u6587\u4EF6\u540D\u641C\u7D22","panel.config.searchDocsMode.content":"\u4EC5\u5185\u5BB9\u641C\u7D22","panel.config.searchDocsMode.off":"\u5173\u95ED\uFF08\u5DE5\u5177\u4E0D\u53EF\u89C1\uFF09","panel.config.broadcastEnabled":"\u4F1A\u8BDD\u5E7F\u64AD","panel.config.broadcastEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u5E7F\u64AD\uFF08de_broadcast\uFF09\uFF1ADSH \u4F1A\u8BDD\u95F4\u6D88\u606F\u4F20\u9012\u2014\u2014\u5FEB\u7167\u300C\u4F1A\u8BDD\u5E7F\u64AD\u300D\u672A\u8BFB\u63D0\u793A\uFF08\u6536\u4EF6\u7BB1\u5F0F\u5217\u51FA id+\u4E3B\u9898+\u53D1\u9001\u8005+\u65F6\u95F4\uFF09+ de_broadcast \u5DE5\u5177\uFF08send/list/read\uFF0Cread \u5373\u6D88\u8D39\u3001\u5168\u8BFB\u540E\u81EA\u52A8\u5220\u9664\u30018KB \u843D\u6587\u4EF6\u300130 \u5929\u6E05\u7406\uFF09+ \u4F1A\u8BDD\u5E7F\u64AD\u7BA1\u7406\u9762\u677F Tab\u3002**\u72EC\u7ACB\u4E8E COI \u8C03\u5EA6**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u53EF\u5355\u72EC\u5F00\u542F\uFF09\uFF1B\u5173\u95ED\u65F6\u4EE5\u4E0A\u5168\u90E8\u4E0D\u53EF\u89C1\uFF1B\u300C\u4F60\u7684\u4F1A\u8BDD ID\u300D\u5E38\u9A7B\u5FEB\u7167\u6BB5\u4E0D\u53D7\u5F71\u54CD\uFF1B\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u300C\u270E \u522B\u540D\u300D\u6309\u94AE\u5C5E\u300C\u4F1A\u8BDD\u7F16\u6392\u300D\u6A21\u5757\uFF08\u9762\u677F\u9876\u90E8\u53E6\u6709\u590D\u5236\u5165\u53E3\uFF09","panel.config.notifyEnabled":"\u901A\u77E5\u6A21\u5757","panel.config.notifyEnabled.hint":"\u542F\u7528\u901A\u77E5\u6A21\u5757\uFF08de_notify\uFF09\uFF1AAI \u5B8C\u6210\u4EFB\u52A1\u540E\u4E3B\u52A8\u53D1\u901A\u77E5\u7ED9\u4F60\u2014\u2014de_notify \u624B\u52A8\u5DE5\u5177\uFF08\u968F\u65F6\u53EF\u53D1\u3001\u65E0\u9891\u7387\u9650\u5236\uFF0Cchannels \u542B feishu/qq/weixin/wecom\uFF09+ COI \u4EFB\u52A1\u5B8C\u6210\u81EA\u52A8\u901A\u77E5\uFF08coiNotifyChannels \u9009\u6E20\u9053\uFF09\u3002\u72EC\u7ACB\u6A21\u5757\uFF0C\u9ED8\u8BA4\u5173\u95ED\uFF1B\u6E20\u9053\u4F9D\u8D56\u5BF9\u5E94\u6E20\u9053\u63D2\u4EF6\uFF08dsh-feishu \u7B49\uFF0C\u672A\u88C5\u5982\u5B9E\u62A5\u6E20\u9053\u4E0D\u53EF\u7528\uFF09\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u4E0D\u6CE8\u518C\u3001COI \u81EA\u52A8\u901A\u77E5\u9759\u9ED8\u8DF3\u8FC7","panel.config.syncEnabled":"\u8BB0\u5FC6\u540C\u6B65","panel.config.syncEnabled.hint":"**\u6A21\u5757\u5F00\u5173**\uFF1A\u542F\u7528\u300C\u8BB0\u5FC6\u540C\u6B65\u300D\u6A21\u5757\u2014\u2014\u5BF9\u8BDD\u9875\u51FA\u73B0\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab\u3001/memory_sync \u547D\u4EE4\u53EF\u7528\u3002**\u6CE8\u610F\uFF1A\u8FD9\u53EA\u662F\u6A21\u5757\u542F\u7528\uFF0C\u4E0D\u7B49\u4E8E\u4EFB\u4F55\u9879\u76EE\u5F00\u59CB\u540C\u6B65**\u2014\u2014\u6BCF\u4E2A\u9879\u76EE\u7531\u300C\u8BB0\u5FC6\u540C\u6B65\u300DTab \u91CC\u7684\u300C\u672C\u9879\u76EE\u540C\u6B65\u300D\u5F00\u5173\u5355\u72EC\u542F\u7528\uFF08\u9ED8\u8BA4\u5173\uFF1B\u672A\u542F\u7528\u7684\u9879\u76EE\u4FDD\u6301\u7EAF\u672C\u5730\u72B6\u6001\uFF0C\u4E0D\u5EFA Git \u4ED3\u5E93\u3001\u4E0D\u751F\u6210\u8EAB\u4EFD\u8BC1\uFF09\u3002\u540C\u6B65\u673A\u5236\uFF1A\u9879\u76EE\u8BB0\u5FC6\uFF08KEY + \u9879\u76EE\u65E5\u5FD7 + \u5F52\u6863 + \u9879\u76EE\u5F85\u529E\uFF09\u7ECF Git \u5BF9\u8D26\u5230\u8BB0\u5FC6\u8FDC\u7AEF\u2014\u2014\u4E0D\u586B\u5730\u5740\u9ED8\u8BA4\u7528\u4F60\u7684\u4E3B\u4EE3\u7801\u4ED3\u5E93\uFF08\u4E13\u5C5E\u5206\u652F\uFF0C\u96F6\u914D\u7F6E\uFF09\uFF1B\u586B\u5171\u4EAB\u8BB0\u5FC6\u4ED3\u5E93\u5730\u5740 = \u4E00\u4E2A\u79C1\u6709\u4ED3\u5E93\u88C5\u6240\u6709\u9879\u76EE\u7684\u8BB0\u5FC6\uFF08\u5168\u5C40\u8BB0\u5FC6\u4E8C\u671F\u4E5F\u53EA\u80FD\u7528\u5B83\u540C\u6B65\uFF09\u3002push \u6C38\u8FDC\u9700\u4F60\u663E\u5F0F\u89E6\u53D1","panel.config.sessionSearchEnabled":"\u4F1A\u8BDD\u641C\u7D22","panel.config.sessionSearchEnabled.hint":"\u542F\u7528 de_session_search\uFF1A\u8BA9\u6A21\u578B\u641C\u7D22\u672C\u673A\u5176\u4ED6 AI \u5DE5\u5177\u7684\u5386\u53F2\u4F1A\u8BDD\uFF08\u5F53\u524D\u652F\u6301 Codex\uFF1A~/.codex/sessions \u4E0E archived_sessions \u7684\u660E\u6587 JSONL\u2014\u2014rg \u9884\u7B5B\u540E\u6BEB\u79D2\u7EA7\uFF1BDSH \u4F1A\u8BDD\u6682\u4E0D\u652F\u6301\uFF09\u3002\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u5B57\u9762\u5339\u914D\uFF0C\u53EA\u641C\u7528\u6237/\u52A9\u624B\u6D88\u606F\uFF1B\u652F\u6301 cwd \u9879\u76EE\u8FC7\u6EE4\u3001relevance/newest/oldest \u6392\u5E8F\u3001limit/window \u63A7\u5236\u89C4\u6A21\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF0C\u53EF\u5355\u72EC\u5F00\u542F\uFF0C\u4E0E COI \u8C03\u5EA6/\u5E7F\u64AD\u65E0\u5173\uFF09\uFF1B\u96F6\u5E38\u9A7B\u72B6\u6001\uFF1A\u65E0\u7D22\u5F15\u3001\u65E0\u7F13\u5B58\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B9E\u65F6\u53EA\u8BFB\u626B\u63CF\uFF0C\u4E0D\u4FEE\u6539\u4EFB\u4F55\u4F1A\u8BDD\u6587\u4EF6\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u5BF9\u6A21\u578B\u5B8C\u5168\u4E0D\u53EF\u89C1","panel.config.canvasEnabled":"\u65E0\u9650\u753B\u677F","panel.config.canvasEnabled.hint":"**\u6A21\u5757\u5F00\u5173**\uFF1A\u542F\u7528\u300C\u65E0\u9650\u753B\u677F\u300D\u2014\u2014\u5BF9\u8BDD\u9875\u51FA\u73B0\u300C\u753B\u677F\u300DTab + de_canvas \u5DE5\u5177\uFF08AI \u53EF\u67E5\u753B\u677F\u3001\u6309 id \u8BFB\u5185\u5BB9\u3001\u5F80\u753B\u677F\u4E2D\u592E\u533A\u653E\u4FBF\u7B7E\uFF09\u3002\u672C\u5730\u8DEF\u5F84\u5F15\u7528\u3001\u5355\u677F+\u89C6\u89D2\u7B5B\u9009\uFF08\u4F1A\u8BDD/\u9879\u76EE/\u5168\u5C40 + \u5F52\u5C5E\u5FBD\u6807\uFF09\u3001AI \u53CC\u5411\u62C9\u53D6\u5F0F\uFF08\u753B\u677F\u5185\u5BB9\u4E0D\u6CE8\u5165\u4E0A\u4E0B\u6587\uFF0C\u9700\u8981\u65F6\u4E3B\u52A8\u67E5\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF09\uFF1A\u5B58\u50A8 <memoryDir>/canvas/boards.json\uFF08\u6574\u677F\u539F\u5B50\u5199 + rev \u4E50\u89C2\u9501\u9632\u591A\u4F1A\u8BDD\u8986\u76D6\uFF09\uFF1B\u5173\u95ED\u65F6 Tab \u4E0E\u5DE5\u5177\u5B8C\u5168\u4E0D\u53EF\u89C1\uFF0C\u6570\u636E\u6587\u4EF6\u4FDD\u7559","panel.config.sessionEnabled":"\u4F1A\u8BDD\u7F16\u6392","panel.config.sessionEnabled.hint":"\u542F\u7528\u4F1A\u8BDD\u7F16\u6392\uFF08de_session\uFF09\uFF1A\u8BA9 AI **\u7A0B\u5E8F\u5316\u521B\u5EFA/\u5524\u9192 DSH \u4F1A\u8BDD**\u2014\u2014spawn \u65B0\u5EFA\u6807\u51C6\u4F1A\u8BDD\uFF08\u4E0E\u624B\u52A8\u6253\u5F00\u5B8C\u5168\u540C\u6784\uFF1A\u7CFB\u7EDF\u63D0\u793A\u8BCD/\u5DE5\u5177/\u8BB0\u5FC6\u5FEB\u7167/\u6301\u4E45\u5316\uFF0C\u51FA\u73B0\u5728\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u53EF\u63A5\u7BA1\uFF09\uFF0Cprompt=\u5B8C\u6574\u63D0\u793A\u8BCD\uFF08\u89D2\u8272/\u4EFB\u52A1\u81EA\u7531\u7EC4\u5408\u7684\u957F\u6587\u672C\uFF09\uFF0C\u521B\u5EFA\u540E\u7ACB\u5373\u81EA\u52A8\u5F00\u8DD1\uFF0C\u53EF\u9009 cwd/\u52A0\u5165\u5E7F\u64AD\u623F\u95F4/\u8986\u76D6\u6A21\u578B\uFF1Bwake \u5524\u9192\u5DF2\u6709\u4F1A\u8BDD\uFF08\u7B49\u4EF7\u66FF\u7528\u6237\u53D1\u6D88\u606F\uFF0C\u5BF9\u65B9 AI \u81EA\u52A8\u9192\u6765\u5904\u7406\uFF0C\u8FDB\u7A0B\u91CD\u542F\u540E\u81EA\u52A8\u6062\u590D\uFF09\uFF1Bstatus/list \u67E5\u72B6\u6001\uFF1B**\u4F1A\u8BDD\u5934\u90E8\u300C\u29C9 \u590D\u5236\u4F1A\u8BDDID\u300D\u300C\u270E \u522B\u540D\u300D\u6309\u94AE\u968F\u672C\u5F00\u5173**\uFF08\u4F1A\u8BDD\u8EAB\u4EFD\u529F\u80FD\uFF0C\u66FE\u8BEF\u6302\u5728\u5E7F\u64AD\u4E0B\uFF09\u3002**\u72EC\u7ACB\u5B50\u6A21\u5757**\uFF08\u9ED8\u8BA4\u5173\u95ED\uFF1B\u4F9D\u8D56 DSH agents \u670D\u52A1\uFF0C\u4EC5\u540C\u8FDB\u7A0B\u4F1A\u8BDD\u53EF\u5524\u9192\uFF1B\u5173\u95ED\u65F6\u5DE5\u5177\u5BF9\u6A21\u578B\u4E0D\u53EF\u89C1\uFF09","panel.config.promptsEnabled":"\u63D0\u793A\u8BCD\u7BA1\u7406\u5668","panel.config.promptsEnabled.hint":"\u542F\u7528\u300C\u63D0\u793A\u8BCD\u300DTab\uFF1A\u63D0\u793A\u8BCD\u5E93\uFF08\u7528\u6237\u81EA\u5199\u8303\u5F0F + \u5185\u7F6E\u793A\u4F8B\uFF09+ \u6CE8\u5165\u8F68\uFF08\u4E00\u6B21\u6027/\u6301\u7EED N \u8F6E/\u6BCF M \u56DE\u5408\u4E00\u6B21\uFF0C\u6B21\u6570\u4E0E\u95F4\u9694\u53EF\u8F93\u5165\u4EFB\u610F\u6570\u5B57\u2014\u2014\u5199\u5165\u540E\u6A21\u578B\u4E0B\u4E00\u8F6E\u81EA\u52A8\u770B\u5230\uFF0C\u56DE\u5408\u9012\u51CF\u81EA\u52A8\u8FC7\u671F\uFF0C\u53EF\u968F\u65F6\u505C\u6B62\uFF1B\u4E0D\u5EFA\u63D0\u793A\u8BCD\u4E5F\u80FD\u4E34\u65F6\u6CE8\u5165\uFF0C\u81EA\u52A8\u5165\u5E93\u5F52\u5165\u300C\u4E34\u65F6\u300D\u5206\u7C7B\uFF09\u3002\u9ED8\u8BA4\u5173\u95ED\uFF1B\u5173\u95ED\u65F6\u5FEB\u7167\u6BB5/\u4E8B\u4EF6\u76D1\u542C/API \u5168\u90E8\u5378\u8F7D\uFF0CTab \u5237\u65B0\u540E\u9690\u85CF","panel.config.modelsEnabled":"\u6A21\u578B\u8BBE\u7F6E","panel.config.modelsEnabled.hint":"\u542F\u7528\u300C\u6A21\u578B\u8BBE\u7F6E\u300DTab + de_models \u5DE5\u5177\uFF1A\u8868\u683C\u5C55\u793A DSH \u4F9B\u5E94\u5546/\u6A21\u578B\uFF0C\u7ED9\u6BCF\u4E2A\u6A21\u578B\u8BBE\u7F6E\u542F\u7528\u72B6\u6001\u3001\u5907\u6CE8\u3001\u662F\u5426\u652F\u6301\u601D\u8003\u3001\u53EF\u7528/\u63A8\u8350\u601D\u8003\u7B49\u7EA7\uFF08\u53EF\u52A0\u81EA\u5B9A\u4E49\u7B49\u7EA7\uFF09\uFF1Bde_models \u4F9B AI \u67E5\u8BE2\u53EF\u7528\u6A21\u578B\u6E05\u5355\u3002**\u9ED8\u8BA4\u5173\u95ED**\uFF08\u6CE8\u518C\u5373\u5360\u6A21\u578B\u5DE5\u5177\u5217\u8868\uFF0C\u9700\u8981\u65F6\u518D\u5F00\uFF09\uFF1B\u26A0\uFE0F \u672C\u6A21\u5757\u7684\u914D\u7F6E**\u53EA\u5BF9\u63D2\u4EF6\u81EA\u8EAB\u6709\u7528\uFF0C\u4E0D\u4FEE\u6539\u4E5F\u4E0D\u5F71\u54CD DSH \u7684\u6A21\u578B\u8BBE\u7F6E**\uFF08DSH \u4FA7\u4ECD\u4EE5\u5B98\u65B9\u300C\u8BBE\u7F6E \u2192 \u6A21\u578B\u300D\u4E3A\u51C6\uFF09\u3002\u5173\u95ED\u65F6 Tab \u4E0E\u5DE5\u5177\u9690\u85CF\u3001API \u62D2\u7EDD\u8BBF\u95EE\uFF0C\u914D\u7F6E\u6570\u636E\u4FDD\u7559","panel.config.uiSettingsEnabled":"Web UI \u8BBE\u7F6E","panel.config.uiSettingsEnabled.hint":"\u542F\u7528\u300CWeb UI \u8BBE\u7F6E\u300D\u6A21\u5757\uFF1A\u5DE6\u4FA7\u4F1A\u8BDD\u5217\u8868\u9876\u90E8\u51FA\u73B0\u7B5B\u9009\u6761\uFF0C\u9ED8\u8BA4\u53EA\u663E\u793A\u8FDB\u884C\u4E2D\u7684\u4F1A\u8BDD\uFF08\u6B63\u5728\u751F\u6210/\u7B49\u5BA1\u6279/\u7B49\u56DE\u7B54/\u6709\u5B50\u4EE3\u7406\u5728\u8DD1/\u51FA\u9519/\u5DF2\u5B8C\u6210\u672A\u67E5\u770B\u2014\u2014\u7EAF idle \u7684\u6298\u53E0\u9690\u85CF\uFF09\uFF0C\u53EF\u4E00\u952E\u5207\u56DE\u5168\u90E8\uFF1B\u7EAF\u5BA2\u6237\u7AEF\u6837\u5F0F\u589E\u5F3A\uFF08CSS + DOM \u6CE8\u5165\uFF0C\u4E0D\u6539 DSH \u6846\u67B6\uFF09\uFF1B\u7B5B\u9009\u504F\u597D\u8BB0\u5728\u6D4F\u89C8\u5668\u672C\u5730\u3002**\u9ED8\u8BA4\u5173\u95ED**\uFF1B\u5173\u95ED\u65F6\u7B5B\u9009\u6761\u4E0E\u6CE8\u5165\u6837\u5F0F\u5168\u90E8\u79FB\u9664","panel.config.save":"\u4FDD\u5B58\u914D\u7F6E","panel.reveal.title":"\u6253\u5F00\u6587\u4EF6","panel.reveal.help":"\u7528\u7CFB\u7EDF\u5DE5\u5177\u6253\u5F00\u8BB0\u5FC6\u76EE\u5F55\u4E0E\u8BB0\u5FC6\u6587\u4EF6\u3002\u26A0\uFE0F \u968F\u610F\u7F16\u8F91\u53EF\u80FD\u7834\u574F \xA7 \u5206\u9694\u683C\u5F0F\u3001\u5BFC\u81F4\u8BB0\u5FC6\u8BFB\u53D6\u9519\u4E71\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539\u3002","panel.reveal.memoryDir":"\u8BB0\u5FC6\u76EE\u5F55","panel.reveal.memoryFile":"\u5168\u5C40\u8BB0\u5FC6","panel.reveal.userFile":"\u7528\u6237\u6863\u6848","panel.reveal.archiveMemoryFile":"\u5F52\u6863\u8BB0\u5FC6","panel.reveal.archiveUserFile":"\u5F52\u6863\u7528\u6237","panel.reveal.dailyDir":"\u6BCF\u65E5\u65E5\u5FD7\u76EE\u5F55","panel.reveal.dailyFile":"\u4ECA\u65E5\u65E5\u5FD7","panel.reveal.projectsDir":"\u9879\u76EE\u8BB0\u5FC6\u76EE\u5F55","panel.reveal.skillDir":"\u6280\u80FD\u76EE\u5F55","panel.reveal.agentsFile":"\u5168\u5C40\u89C4\u5219 (AGENTS.md)","panel.config.saved":"\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002\u65B0\u542F\u7528/\u5173\u95ED\u7684\u6A21\u5757\u9700\u5237\u65B0\u9875\u9762\u540E\u751F\u6548","panel.config.failed":"\u64CD\u4F5C\u5931\u8D25\uFF1A{message}","panel.loading":"\u52A0\u8F7D\u4E2D\u2026"},qn={"tab.label":"Skill Manager","tab.label.alt":"Skill Manager","header.title":"Skill Manager","header.subtitle":"Manage every skill \xB7 custom dirs \xB7 enable/disable \xB7 view & edit","search.placeholder":"Search skills by name, description, or when-to-use\u2026","search.empty":"No matching skills","filter.all":"All","status.enabled":"Enabled",disable:"Disable",enable:"Enable","disabled.badge":"Disabled","disabled.hint":"Disabled: excluded from the model skill catalog","protected.badge":"System","protected.hint":"System skill (project source) \u2014 cannot be disabled","toggle.failed":"Toggle failed: {message}","manage.dirs":"Manage custom skill directories","dirs.title":"Custom Skill Directories","dirs.help":"Add directories containing skills (<dir>/<skill>/SKILL.md or <dir>/<skill>.md layouts). Directories persist in the plugin state.json and reload automatically after restart; paths overlapping an existing skill root are rejected.","dirs.placeholder":"Absolute path, e.g. ~/.hermes/skills/\u2026","dirs.add":"Add","dirs.remove":"Remove","dirs.empty":"No custom directories yet","dirs.missing":"Directory missing","pager.prev":"Prev","pager.next":"Next","pager.page":"Page {page} / {total}","skills.count":"{count} skills","roots.count":"{count} roots","pane.skills":"Skills","pane.files":"Files","pane.editor":"Editor","no.skill.selected":"Select a skill on the left to start browsing","no.root":"This skill has no browsable local directory","no.entries":"Empty directory","no.file":"Select a text file to view or edit","not.text":"Not a text file \u2014 cannot preview","too.large":"File exceeds the 512 KiB read cap","read.failed":"Read failed: {message}","write.failed":"Save failed: {message}",save:"Save",saving:"Saving\u2026",saved:"Saved",edit:"Edit",cancel:"Cancel",discard:"Discard","dirty.hint":"Unsaved changes",readonly:"Read-only",bytes:"{size} B",kib:"{size} KiB",mib:"{size} MiB","dir.up":"Parent directory","open.folder":"Open directory","source.badge":"{source}",invocable:"Invocable","when.to.use":"When to use",description:"Description","resource.directory":"Directory","resource.url":"Link","resource.opaque":"Resource",refresh:"Refresh","loading.skills":"Loading skills\u2026","loading.dir":"Loading\u2026","tree.collapse":"Collapse","tree.expand":"Expand",path:"Path","root.label":"Root","editor.placeholder":"Select a text file in the tree on the left to start editing.","status.ready":"Ready","status.skill":"Skill","status.file":"File","status.unsaved":"Unsaved","status.saved":"Saved","confirm.discard.title":"Discard unsaved changes?","confirm.discard.body":"Your changes to {name} are not saved. Switching files will lose them.","confirm.discard.ok":"Discard changes","mtime.label":"Modified {time}","open.in.new.tab":"Open in new tab",preview:"Preview","memoryTab.label":"Memory","memoryTab.label.pending":"\u{1F534} Memory ({count})","skillsTab.label":"Skills","skillsTab.label.pending":"\u{1F534} Skills ({count})","todosTab.label":"Todos","todosTab.label.pending":"\u{1F534} Todos ({count})","coiTab.label":"COI Dispatch","coiTab.label.pending":"\u{1F534} COI Dispatch ({count})","broadcastTab.label":"Broadcast","broadcast.tab.guide":"Guide","broadcast.tab.messages":"Messages","broadcast.tab.rooms":"Rooms","broadcast.tab.settings":"Settings","broadcast.settings.wsCoord.title":"Workspace coordination (ws-coord)","broadcast.settings.wsCoord.desc":'Resource-occupancy coordination for parallel sessions in one workspace \u2014 declare files you will modify (de_ws_declare), auto-register writes, write-conflict detection (soft warning / hard block switchable), and de_ws_status to see "who is running and what they are doing". These switches only control this sub-feature; the "Session broadcast" master switch lives under Memory Evolve Settings \u2192 Config.',"broadcast.settings.wsCoord.enabled":"Enable workspace coordination","broadcast.settings.wsCoord.enabled.hint":'Registers de_ws_declare / de_ws_status / de_ws_release tools + write-conflict detection listeners + the activity snapshot section. Depends on the "Session broadcast" master switch (unavailable while broadcast is off). Off by default',"broadcast.settings.wsCoord.snapshot":"Activity snapshot section","broadcast.settings.wsCoord.snapshot.hint":"When \u22652 sessions are active in the workspace, inject one \u3010Workspace activity\u3011 line into the per-turn snapshot (with the current time and what each session is doing); zero cost with 0-1 active sessions","broadcast.settings.wsCoord.enforce":"Hard-block mode","broadcast.settings.wsCoord.enforce.hint":"Off by default (soft mode: trust the AI \u2014 conflicts warn but never block); when on, writes to files occupied by other sessions are denied at the tool layer (deny), and the AI sees the reason and adjusts on its own","broadcast.guide.intro.title":"What is Session Broadcast","broadcast.guide.intro.body":'Session broadcast = a message channel between DSH sessions: send messages to other sessions (the AI sends them via the de_broadcast send tool) and the receiver sees a "Session broadcast" notice in its next snapshot. Messages are managed like an inbox \u2014 subject + summary, auto-deleted once every recipient has read them.',"broadcast.guide.send.title":"How to send","broadcast.guide.send.body":'Just tell the AI "broadcast to session XX\u2026" (default is one-to-one; the recipient is the other session ID):',"broadcast.guide.send.item1":'One-to-one: give the recipient session ID (send them your "copy session ID" result and their AI can reply to you);',"broadcast.guide.send.item2":"Rooms: multi-member chat rooms that work across working directories \u2014 everyone in the room sees the message (send to room:<room-id>);","broadcast.guide.send.item3":"Project: visible to every session under that working directory (send to project:/absolute-path).","broadcast.guide.inbox.title":"Inbox (Messages tab)","broadcast.guide.inbox.body":"The list shows only unread non-room messages by default (read ones are hidden; room messages live inside the room):","broadcast.guide.inbox.item1":"Filter: unread / all / read; search subject, sender, content; paged 20 per page;","broadcast.guide.inbox.item2":'Click "expand" for the full text; the red "delete" is an admin delete (hidden from everyone);',"broadcast.guide.inbox.item3":"One-to-one messages are auto-deleted once every recipient has read them (consumed, out of the list).","broadcast.guide.room.title":"Rooms tab: multi-member chat rooms","broadcast.guide.room.body":"Rooms = multi-member collaboration chat rooms:","broadcast.guide.room.item1":"Expand a room to see member presence: \u{1F7E2} running = generating right now (you can wait; it sees messages within its turn), \u26AA idle / unknown = turn over or unknown (do not just wait);","broadcast.guide.room.item2":"Room messages share the inbox filters / search / paging; the creator can kick members and dissolve the room (system notices are sent);","broadcast.guide.room.item3":"Dissolved rooms keep their records for traceability; members can no longer join or post.","broadcast.guide.alias.title":"Session aliases: recognize a session at a glance","broadcast.guide.alias.body":"Give a session a friendly name (\u226410 chars) \u2014 shown in snapshots, lists and messages as an alias (short ID):","broadcast.guide.alias.item1":'The "My session" row on top: copy session ID / copy alias, then send it to the other side to start chatting;',"broadcast.guide.alias.item2":"The \u29C9 copy-session-ID / \u270E alias buttons at the top right of a session also work.","broadcast.guide.switch.title":"Switch","broadcast.guide.switch.body":'Session broadcast is off by default: enable "Session broadcast" under "Config" in the "Memory Evolve Settings" tab, then refresh to reveal this tab.',"broadcast.guide.wscoord.title":"Workspace coordination: parallel work without collisions","broadcast.guide.wscoord.body":'When several sessions edit the same project in parallel, use the workspace coordination in the "Settings" page to avoid overwriting each other:',"broadcast.guide.wscoord.item1":'Before starting, have the AI "declare which files you will change" (de_ws_declare) \u2014 others (and their AIs) can see who is editing what;',"broadcast.guide.wscoord.item2":"Write-time conflict detection: soft mode warns first (default); hard mode can be enabled \u2014 writes into files claimed by others are rejected outright;","broadcast.guide.wscoord.item3":'The "activity" overview (de_ws_status) shows who is running and what they are doing; the switch lives in the Settings page (requires the Session broadcast master switch).',"broadcast.mySessionId":"My session ID","broadcast.copyId":"Copy","broadcast.copied":"Copied","broadcast.loading":"Loading\u2026","broadcast.refresh":"Refresh","broadcast.messages.empty":"(no messages)","broadcast.messages.sender":"From","broadcast.messages.to":"To","broadcast.messages.direct":"direct","broadcast.messages.room":"room","broadcast.messages.project":"project","broadcast.messages.unread":"unread","broadcast.messages.long":"long","broadcast.message.expand":"Expand","broadcast.message.collapse":"Collapse","broadcast.message.delete":"Delete","broadcast.message.deleteConfirm":`Delete this message? (admin action, invisible to everyone)

{subject}`,"broadcast.message.deleted":"Deleted","broadcast.copyAlias":"Copy alias","broadcast.msg.unread":"unread","broadcast.msg.read":"read","broadcast.filter.unread":"Unread","broadcast.filter.all":"All","broadcast.filter.read":"Read","broadcast.searchPh":"Search subject/sender/content\u2026","broadcast.pagePrev":"Prev","broadcast.pageNext":"Next","broadcast.pageInfo":"Page {page}/{total}","broadcast.room.detail":"Details","broadcast.room.messages":"Room messages","broadcast.room.messages.empty":"(no room messages)","broadcast.messages.roomInRooms":"Room messages live inside their room \u2014 open it from the Rooms view","broadcast.rooms.empty":"(no rooms)","broadcast.roomSearchPh":"Search room name\u2026","broadcast.roomStatus.all":"All","broadcast.roomStatus.active":"Active","broadcast.roomStatus.dissolved":"Dissolved","broadcast.roomDays.0":"Any time","broadcast.roomDays.7":"Last 7 days","broadcast.roomDays.30":"Last 30 days","broadcast.room.status.active":"active","broadcast.room.status.idle":"idle","broadcast.room.status.dissolved":"dissolved","broadcast.room.online":"{online}/{total} online","broadcast.room.members":"Members","broadcast.room.kick":"Kick","broadcast.room.kickConfirm":"Kick member {member}? (a system notice is sent; the session loses room access)","broadcast.room.dissolve":"Dissolve","broadcast.room.dissolveConfirm":'Dissolve room "{name}"? (soft delete: record kept for traceability, members get a system notice, no further joins/messages)',"broadcast.room.dissolved":"dissolved","broadcast.room.copyId":"Copy room id","broadcast.room.lastActive":"Last active","broadcast.room.created":"Created","broadcast.room.presence.unknown":"unknown \xB7 no activity recorded","header.copySessionId":"\u29C9 Copy session ID","header.copySessionId.done":"\u2713 Copied","header.copySessionId.title":"Copy this session's ID (send it to another session: tell its AI your session ID so it can broadcast to you via de_broadcast)","header.setAlias":"\u270E Alias","header.setAlias.title":"Set a session alias (\u226410 chars) \u2014 shown as your friendly name in the snapshot / broadcast panel / messages","header.setAlias.placeholder":"alias (\u226410 chars)","header.setAlias.save":"Save","header.setAlias.clear":"Clear","header.setAlias.saved":"Alias saved","header.setAlias.cleared":"Alias cleared","promptTab.label":"Prompts","promptTab.label.active":"\u{1F534} Prompts ({count})","settingsTab.label":"Memory Evolve Settings","settingsTab.label.pending":"\u{1F534} Memory Evolve Settings","settingsTab.feature.guide":"Guide","settingsTab.feature.config":"Config","settingsTab.feature.version":"Version","version.current":"Current version","version.latest":"Latest version","version.statusLabel":"Status","version.status.latest":"Up to date","version.status.outdated":"Update available","version.status.no-release":"No releases yet","version.status.unsupported":"Auto-check unsupported","version.status.unknown":"Unknown","version.loading":"Checking\u2026","version.lastError":"Last check failed","version.checkTime":"Last checked","version.checking":"Checking\u2026","version.checkNow":"Check for updates","version.updating":"Updating\u2026","version.updateNow":"Update to {tag}","version.restart.title":"Restart required","version.restart.hint":"New code is on disk. Restart dsh web first, then refresh the browser (a page refresh alone will not load the new code).","version.releaseNotes":"Release notes","version.unsupported.hint":"Auto-check requires a git clone install. Reinstall with `git clone git@github.com:csyangwen/dsh-memory-evolve.git` to enable it.","version.note.no-release":"No release tags (v0.x.y) on the remote yet.","version.note.outdated":"A new version is available \u2014 update below (restart dsh web afterwards).","version.note.latest-exact":"You are on the latest release.","version.note.latest-contained":"Your checkout already contains the latest release (dev-track ahead or synced).","version.note.unsupported":"Plugin dir is not a git repository or git is unavailable.","version.error.bad-request":"Bad request: {message}","version.error.dirty":"Update rejected: {message}","version.error.busy":"Update rejected: {message}","version.error.target-changed":"Target version changed: {message}","version.error.untrusted":"Update rejected: {message}","version.error.unsupported":"Auto-check unsupported: {message}","version.error.error":"Update failed: {message}","version.error.network":"Network request failed: {message}","version.error.unknown":"Unknown error","memoryTab.feature.guide":"Guide","memoryTab.feature.suggestions":"Memory suggestions","skillsTab.feature.guide":"Guide","skillsTab.feature.skills":"Skill suggestions","skillsTab.feature.skillBrowser":"Skill manager","todosTab.feature.guide":"Guide","todosTab.feature.todoSuggestions":"Todo suggestions","todosTab.feature.todo":"Todos","modelsTab.label":"Model Settings","modelsTab.feature.models":"Model Settings","modelsTab.feature.guide":"Guide","modelsTab.guide.what.title":"What is Model Settings","modelsTab.guide.what.body":"A table view of every DSH provider and model, with per-model plugin-side settings (enabled state, note, reasoning levels). All settings belong to this plugin (models.json) \u2014 DSH configuration is never touched and nothing couples to other plugins:","modelsTab.guide.what.item1":'Columns: enabled switch, provider (with DSH activation state), model (name + ID), context / output capacity, reasoning levels, image-input marker (\u{1F5BC}), note; search and a "show reasoning levels" toggle;',"modelsTab.guide.what.item2":"Per model: enable / disable (a plugin-side availability flag \u2014 DSH routing is untouched), note, thinking support, allowed reasoning levels, recommended level, custom levels;","modelsTab.guide.what.item3":"Settings persist immediately (<memoryDir>/models.json) across restarts.","modelsTab.guide.config.title":"Per-model settings","modelsTab.guide.config.body":'Expand a row ("configure levels") to edit reasoning settings:',"modelsTab.guide.config.item1":"Enable / disable: decides which models the de_models tool lists by default (all enabled by default);","modelsTab.guide.config.item2":"Thinking support: when off the model cannot reason (only the off level remains);","modelsTab.guide.config.item3":'Recommended level: "auto" follows the model own recommendation by default; you can pin any available level;',"modelsTab.guide.config.item4":"Allowed levels: tick which levels may be used (all by default); custom levels (e.g. ultra) can be added / removed;","modelsTab.guide.config.item5":'Image input: models explicitly declaring image support show the "\u{1F5BC} image input" marker (from DSH model capability metadata, read-only); undeclared = unknown, no marker.',"modelsTab.guide.tool.title":"de_models tool (for the AI)","modelsTab.guide.tool.body":"This module also registers the de_models tool so the AI can query the available model (endpoint) list:","modelsTab.guide.tool.item1":'Only "enabled" models are returned by default (all=true shows everything incl. disabled), filterable by provider;',"modelsTab.guide.tool.item2":"Each model reports: enabled, DSH-activated, image input support (supportsImage: true / false / null=unknown), thinking support, allowed reasoning levels (incl. recommended and custom), note.","modelsTab.guide.switch.title":"Switch","modelsTab.guide.switch.body":'Model Settings are on by default; they can be turned off independently under "Config" in the "Memory Evolve Settings" tab like other modules \u2014 the tab and the de_models tool hide, settings data is kept.',"modelsTab.searchPh":"Search provider, model, or note\u2026","modelsTab.showReasoning":"Show reasoning levels","modelsTab.refresh":"Refresh","modelsTab.loading":"Loading\u2026","modelsTab.count":"{total} models \xB7 {enabled} enabled","modelsTab.loadFailed":"Load failed: {message}","modelsTab.empty":"(No models)","modelsTab.enabled":"Enabled","modelsTab.enable":"Enable","modelsTab.disable":"Disable","modelsTab.provider":"Provider","modelsTab.model":"Model","modelsTab.capacity":"Context/Output","modelsTab.reasoning":"Reasoning","modelsTab.note":"Note","modelsTab.notePh":"Add a note\u2026","modelsTab.dormant":"Inactive","modelsTab.thinking":"Support thinking","modelsTab.thinkingHint":"When off, this model cannot reason (only the off level stays available)","modelsTab.thinkingOff":"Thinking off","modelsTab.supportsImage":"\u{1F5BC} Image input","modelsTab.supportsImageHint":"This model explicitly declares image input support (from DSH model capability metadata inputModalities)","modelsTab.recommendedLevel":"Recommended level","modelsTab.recommendedAuto":"Auto (follow model recommendation)","modelsTab.levelsNone":"All disabled","modelsTab.editLevels":"Configure levels","modelsTab.closeEditor":"Collapse","modelsTab.editorTitle":"Available reasoning levels (check = allowed; recommended comes from the model)","modelsTab.recommended":"Recommended","modelsTab.addLevel":"Add","modelsTab.removeLevel":"Remove","modelsTab.levelIdPh":"Level ID (e.g. ultra)","modelsTab.levelNamePh":"Display name (e.g. Ultra)","modelsTab.save":"Save","modelsTab.saving":"Saving\u2026","modelsTab.cancel":"Cancel","uiSettingsTab.label":"Web UI Settings","uiSettingsTab.feature.mixed":"General","uiSettingsTab.feature.guide":"Guide","uiSettingsTab.features.title":"Feature switches","uiSettingsTab.features.help":'Every feature has its own small switch, **all off by default** \u2014 you turn them on deliberately; changes apply immediately (features stay under "General" until they mature and get their own categories).',"uiSettingsTab.guide.what.title":"What is Web UI Settings","uiSettingsTab.guide.what.body":"Style-level tweaks for the DSH web GUI \u2014 no framework source changes, pure client-side injection (CSS + DOM enhancement) that survives DSH updates; future extensions (themes etc.) all land in this module.","uiSettingsTab.guide.switch.title":"Switches","uiSettingsTab.guide.switch.body":'The module switch lives under "Config" in the "Memory Evolve Settings" tab (off by default); the per-feature switches live in the "General" sub-tab \u2014 also all off by default, turned on deliberately.',"uiSettingsTab.guide.features.title":"Features","uiSettingsTab.guide.features.body":'Each feature has an independent switch in the "General" page; it takes effect immediately:',"uiSettingsTab.guide.features.item1":"Session filter: the left session list shows only active sessions; purely idle ones collapse, one click switches back to all;","uiSettingsTab.guide.features.item2":"Wide conversation: the middle transcript area widens from about half to about 95%, more comfortable for long messages;","uiSettingsTab.guide.features.item3":"Wide bubbles: the user message bubble grows from its 525px cap to about 80% width (pairs best with the wide conversation);","uiSettingsTab.guide.features.item4":"Context warning: the context ring turns yellow above 30% and red above 40% \u2014 a nudge to bookmark or start a fresh session;","uiSettingsTab.guide.features.item5":"Mermaid rendering: mermaid code blocks in messages render into diagrams; on failure they fall back to plain code blocks.","uiSettings.feature.sessionFilter":"Session filter","uiSettings.feature.sessionFilter.hint":"The left session list shows only active sessions (purely idle ones collapse; one click switches back to all); the filter bar appears only while this is on","uiSettings.feature.wideChat":"Wide conversation area","uiSettings.feature.wideChat.hint":"Widen the conversation transcript/input area from roughly half to about 95% of the right pane (aligned with the tabs bar above)","uiSettings.feature.wideBubble":"Wide message bubble","uiSettings.feature.wideBubble.hint":'Widen the user message bubble from its 525px cap to about 80% of the content column (pairs well with "Wide conversation area")',"uiSettings.feature.contextWarn":"Context usage warning","uiSettings.feature.contextWarn.hint":"The context-usage ring beside the input box turns yellow above 30% occupancy and red above 40%; back to its default color below the threshold","uiSettings.feature.mermaidRender":"Mermaid diagram rendering","uiSettings.feature.mermaidRender.hint":"Render mermaid code blocks in messages as diagrams (DSH itself does not render mermaid); the engine loads lazily on first diagram, works on PC and mobile alike, and falls back to the code block on failure","uiSettings.filter.on":"Running only","uiSettings.filter.off":"All","uiSettings.running.label":"{count} running","uiSettings.ungrouped":"Ungrouped","syncTab.label":"Memory Sync","syncTab.loading":"Loading\u2026","syncTab.loadFailed":"Failed to load status: {message}","syncTab.tab.project":"This project","syncTab.tab.global":"Global memory","syncTab.tab.remote":"Shared memory repo","syncTab.section.project":"Project memory (KEY + project log + archive + project todos)","syncTab.section.global":"Global memory (device-level, project-independent)","syncTab.section.remote":"Shared memory repo (device-level config)","syncTab.project.mode.off":"Disabled (local only)","syncTab.project.mode.off.desc":"Project memory stays on this machine: no repo, no entry IDs, no reconciliation with any remote","syncTab.project.mode.main":"Mode A: main code repo (zero config)","syncTab.project.mode.main.desc":"Project memory lives in a dedicated branch of your code repo (never touches your code). **A public code repo means public memory**","syncTab.project.mode.shared":"Mode B: shared memory repo","syncTab.project.mode.shared.desc":"Project memory lives in a dedicated branch of the shared memory repo, fully isolated from your code","syncTab.project.mode.shared.needRemote":'Shared memory repo is not enabled \u2014 switched to "Shared memory repo", please enable and save the URL first',"syncTab.status.title":"Current memory remote","syncTab.status.disabled":"Disabled \u2014 enable sync for this project above to begin","syncTab.status.notInit":"Enabled, but this project is not initialized yet \u2014 pick Mode A or B above to initialize","syncTab.status.remoteKind":"Memory remote: {kind}","syncTab.status.remoteKindMain":"main code repo","syncTab.status.remoteKindShared":"shared memory repo","syncTab.status.remoteKindNone":"not mounted","syncTab.status.originUrl":"Remote URL: {url}","syncTab.status.branch":"Remote branch: {branch}","syncTab.status.counts":"{pending} not pushed \xB7 {behind} behind \xB7 {conflicts} conflicts","syncTab.status.migrate":'Legacy memory dir found: {dir} \u2014 "Start sync" will migrate it',"syncTab.global.title":"Global memory","syncTab.global.uncommitted":"{n} tracks not pushed (uncommitted + unpushed commits)","syncTab.global.trackMemory":"Global memory (MEMORY.md)","syncTab.global.trackUser":"User profile (USER.md)","syncTab.global.trackDaily":"Daily logs (daily/*.md)","syncTab.global.trackTodo":"Todos: life/work/daily (TODOS-*.md)","syncTab.global.hint":"Global memory (user profile / daily logs / todos) belongs to no single project \u2014 all projects share this one set of switches; push always requires your explicit click","syncTab.global.sync":"Fetch & merge","syncTab.global.push":"Push","syncTab.global.notInit":'Shared memory repo is not enabled \u2014 global memory is unavailable; enable and save the URL on the "Shared memory repo" page first',"syncTab.remote.desc":"One shared memory repo for the whole device: project Mode B and global memory (user profile / daily logs / todos) both reference it \u2014 enable and save the URL once.","syncTab.remote.placeholder":"Paste a shared memory repo URL (e.g. ssh://git@.../dsh-memories.git)","syncTab.remote.save":"Enable & save","syncTab.remote.modify":"Modify & save","syncTab.remote.current":"Current shared memory repo: {url}","syncTab.remote.mode.off":"Disabled","syncTab.remote.mode.off.desc":"Project Mode B and global memory unavailable; synced data and the URL are kept","syncTab.remote.mode.on":"Enabled","syncTab.remote.mode.on.desc":"Project Mode B and global memory available; save the repo URL first","syncTab.remote.disable":"Disable shared memory repo","syncTab.remote.switchHint":"Disabling turns off the shared memory repo (project Mode B and global memory become unavailable); synced data and the URL are kept, re-enable anytime.","syncTab.actions.sync":"Fetch & merge","syncTab.actions.push":"Push","syncTab.actions.nothingToSync":"Nothing to sync \u2014 enable this project or a global track first","syncTab.conflicts.title":"Conflicts ({count} \u2014 both devices edited the same entry)","syncTab.conflicts.titleGlobal":"Global {track}: {count} pending conflicts (both devices edited the same entry)","syncTab.conflicts.base":"Base","syncTab.conflicts.ours":"Ours","syncTab.conflicts.theirs":"Theirs","syncTab.conflicts.oursBtn":"Use ours","syncTab.conflicts.theirsBtn":"Use theirs","syncTab.conflicts.bothBtn":"Keep both","syncTab.footnote":"Writing memory stays real-time local (no Git touched); sync batches up. Conflict markers never hit disk; resolving auto-commits.","bookmarkTab.label":"Bookmarks","bookmark.tab.list":"List","bookmark.tab.guide":"Guide","bookmark.list.title":"Session bookmarks","bookmark.list.help":"Click a bookmark to jump to that turn; star \u2606 at each turn tail to bookmark, \u2605 when bookmarked (rename/delete); searchable list; fork from any turn (official mid-turn branch buttons are taken over by Memory Evolve).","bookmark.refresh":"Refresh","bookmark.loading":"Loading\u2026","bookmark.empty":"(No bookmarks yet \u2014 click \u2606 at a turn tail)","bookmark.defaultLabel":"Turn {n}","bookmark.turn":"Turn {n}","bookmark.prompt.create":"Bookmark name (editable):","bookmark.prompt.rename":"New name:","bookmark.confirm.delete":'Delete bookmark "{label}"?',"bookmark.noSession":"Cannot determine the current session (refresh the page and retry)","bookmark.search.placeholder":"Search bookmarks\u2026","bookmark.search.empty":"(No matching bookmarks)","bookmark.star.title.off":"\u2606 Bookmark this turn (Memory Evolve session bookmarks)","bookmark.star.title.on":"\u2605 Bookmarked: {label} (Memory Evolve \u2014 click to rename/delete)","bookmark.menu.rename":"Rename","bookmark.menu.delete":"Delete","bookmark.action.jump":"Jump","bookmark.action.fork":"Fork","bookmark.action.rename":"Rename","bookmark.action.delete":"Delete","bookmark.fork.title":"Fork from this turn (Memory Evolve enhancement)","bookmark.fork.confirm":"Officially you can only fork from the last message. Fork from this turn ({n}) anyway? (Memory Evolve enhancement)","bookmark.fork.working":"Creating fork session\u2026","bookmark.fork.ok":"New session created: {id} (see the session list on the left)","bookmark.jump.hint":"Click to jump to this turn","bookmark.jumping":"Locating\u2026","bookmark.jump.ok":'Jumped to "{label}"',"bookmark.jump.notFound":'Could not find the message for "{label}" (may be compacted or outside the loaded window)',"bookmark.jump.noChat":"Chat tab not found \u2014 cannot jump","bookmark.renamed":"Renamed","bookmark.deleted":"Deleted","bookmark.error":"Failed: {message}","bookmark.guide.what.title":"What are session bookmarks","bookmark.guide.what.body":"Star any completed turn, then jump back to it from the list in one click; you can also fork an official branch session from any turn \u2014 start a new line from a mid-way decision point. Data lives in a plugin sidecar (official session logs are never touched); the official mid-turn branch buttons are taken over by this plugin (a confirm dialog, then the official fork path).","bookmark.guide.star.title":"How to star","bookmark.guide.star.body":'Every completed turn has a \u2606 button at its tail: click it, name it (default "Turn N") and it is bookmarked; \u2605 means bookmarked \u2014 click again to rename or delete. The small icon does not crowd Copy / Branch.',"bookmark.guide.list.title":"List and jump","bookmark.guide.list.body":"This tab lists every bookmark of the current session (label, turn, time, summary). Click to jump: it switches back to the Chat tab and scrolls to that turn; if the target lies outside the loaded history window it fetches older messages first.","bookmark.guide.switch.title":"Switch","bookmark.guide.switch.body":'Off by default; enable "Session bookmarks" under Memory Evolve Settings \u2192 Config. When off, stars and this tab hide; the sidecar file is kept.',"panel.guide.bookmark.title":"Session bookmarks","panel.guide.bookmark.desc":"Star any turn and jump back from the list; fork official branch sessions from any turn (including taking over official mid-turn branch buttons). Independent switch, off by default.","panel.config.bookmarkEnabled":"Session bookmarks","panel.config.bookmarkEnabled.hint":'Enable session bookmarks: a \u2606 star on each completed turn tail + a Bookmarks tab for the list and jump; fork official branch sessions from any turn (list "Fork" button, or click the official branch button \u2014 mid-turn buttons are taken over with a confirm dialog). Data lives in <memoryDir>/session-bookmarks.json (per-session, keyed by turn seq). **Independent submodule** (off by default; pure UI + host API, no AI tools); when off, stars and the tab hide, the data file is kept.',"panel.config.todoEnabled":"Todos","panel.config.todoEnabled.hint":"Enable the dtodo tool, Todos tab, and due reminders. When off, the tab hides immediately and todo writes stop; existing data and the sync track stay intact.","memoryTab.feature.config":"Config","memoryTab.feature.todoSuggestions":"Todo suggestions","memoryTab.feature.skills":"Skill suggestions","memoryTab.feature.skillBrowser":"Skill manager","memoryTab.feature.todo":"Todos","memoryTab.guide.tracks.title":"Five memory tracks: the AI long-term working memory","memoryTab.guide.tracks.body":'Memory is organized in five tiers by "who should see it"; injection scope narrows by tier and tiers never pollute each other \u2014 what should be injected is auto-injected, the rest is read on demand:',"memoryTab.guide.tracks.item1":"User profile (user): who you are \u2014 preferences, habits, communication style. Injected into every session, so you never re-introduce yourself;","memoryTab.guide.tracks.item2":"Long-term memory (memory): global facts \u2014 environment, tools, general conventions. Injected into every session;","memoryTab.guide.tracks.item3":"Key project facts (key): conventions, decisions, architecture, pitfalls of the current project. Injected only into this project sessions, filtered by git branch \u2014 each branch keeps its own conventions;","memoryTab.guide.tracks.item4":"Project log (project): the running record of this project. Never injected; the AI reads it on demand, history is traceable;","memoryTab.guide.tracks.item5":"Daily log (daily): per-day progress notes. Never injected; read on demand \u2014 like a daily work report.","memoryTab.guide.files.title":"File tabs: read the memory files directly","memoryTab.guide.files.body":"This tab previews AGENTS.md (global rules) and every memory file. File tabs are read-only \u2014 edit through the memory tool or via the actions in this tab, to avoid breaking the \xA7-delimited format:","memoryTab.guide.files.item1":"Beauty view: each entry is a card (time / branch / tag badges + content), searchable and filterable; a plain-text view shows the raw text;","memoryTab.guide.files.item2":"The KEY tab lets you manually add long-term project facts (optionally scoped to certain git branches); they are injected next turn after saving;","memoryTab.guide.files.item3":"Every entry can be edited (writes need confirmation), deleted (exact full-entry match, no accidental deletions), archived / restored to the main track.","memoryTab.guide.branch.title":"Git branch awareness: different branches, different conventions","memoryTab.guide.branch.body":"Different branches of the same project can carry completely different conventions; project-level memory tracks the current branch end to end:","memoryTab.guide.branch.item1":'Key entries can carry a branch-scope marker (no marker = visible on all branches); injection only includes "no marker" + "covers the current branch";',"memoryTab.guide.branch.item2":"Log entries are automatically tagged with their source branch ([git branch name]), so cross-branch reviews never mix things up.","memoryTab.guide.maintain.title":"Edit & maintain: day-to-day care of the memory","memoryTab.guide.maintain.body":"All memory maintenance happens right here:","memoryTab.guide.maintain.item1":"Edit the body only \u2014 timestamps / branch / tags are maintained by the program;","memoryTab.guide.maintain.item2":"Delete: exact full-entry matching (long entries that contain others are never accidentally removed); deletion is irreversible;","memoryTab.guide.maintain.item3":"Archive / restore: move low-frequency entries out of the main track (kept for reference, no injection), restore them anytime.","memoryTab.guide.suggestions.title":"Memory suggestions: the AI proposes, you decide","memoryTab.guide.suggestions.body":'The background review distills "what is worth remembering" into a pending queue \u2014 the AI never writes into the memory on its own:',"memoryTab.guide.suggestions.item1":"Approve: optionally edit the text first and pick the target track (long-term memory / user profile / key project facts); it is injected with the next snapshot;","memoryTab.guide.suggestions.item2":"Archive: no injection, kept for reference, restorable; Reject: discard.","memoryTab.guide.confirm.title":"The confirmation system: why your approval is required","memoryTab.guide.confirm.body":"Memory writes genuinely change the AI behavior \u2014 once written they enter the context and affect every later reply. So everything goes through your confirmation first: that is the gate of memory evolution. You are in charge.","skillsTab.guide.what.title":"What a skill is: a methodology manual for the AI","skillsTab.guide.what.body":"A skill = a methodology document for the AI (SKILL.md: name + description + steps). It is injected into every session system prompt \u2014 next time the AI meets the same kind of task it follows your process instead of re-inventing it:","skillsTab.guide.what.item1":"The skill library lives at ~/.agents/skills by default (one directory per skill);","skillsTab.guide.what.item2":"DSH also scans project skills, bundled skills and custom directories \u2014 all visible and manageable in this tab.","skillsTab.guide.how.title":"How skills form","skillsTab.guide.how.body":"Methodologies learned the hard way are solidified into skills through two main paths:","skillsTab.guide.how.item1":'Background review: when the AI notices a recurring pattern it creates a skill, which lands in "skill suggestions" \u2014 after your approval it moves into the library;',"skillsTab.guide.how.item2":'The skill_manage tool: just tell the AI "save this process as a skill" and it creates / updates one;',"skillsTab.guide.how.item3":'Create sparingly: only "recurring, hard-won, reusable" skills \u2014 every skill is injected into every session and affects the context.',"skillsTab.guide.pending.title":"Skill suggestions","skillsTab.guide.pending.body":"Review-created skills wait for your confirmation here:","skillsTab.guide.pending.item1":"Approve: moved into the skill library (~/.agents/skills), injected with the system prompt, immediately usable in every session;","skillsTab.guide.pending.item2":"Reject: discard the skill.","skillsTab.guide.manager.title":"Skill manager: browse, edit, custom directories","skillsTab.guide.manager.body":"The full skill manager (three panes: skill list / directory tree / file view-edit):","skillsTab.guide.manager.item1":"All skills are grouped by source (user user-* / custom / bundled / project project-*), searchable and filterable;","skillsTab.guide.manager.item2":"Custom skill directories: add / remove any skill directory (<dir>/<skill>/SKILL.md or <dir>/<skill>.md layout);","skillsTab.guide.manager.item3":"File browsing & editing: directory tree + text view / edit (scoped to skill directories; out-of-bounds, binary and oversized files are rejected);","skillsTab.guide.manager.item4":"Disabled-list and custom directories persist across restarts.","skillsTab.guide.disable.title":"Disable / enable: hide skills you do not want","skillsTab.guide.disable.body":"One click removes a skill from the model skill catalog (the model no longer sees it and the skill tool refuses to load it):","skillsTab.guide.disable.item1":"Re-enable anytime; the choice persists;","skillsTab.guide.disable.item2":"System skills (project source) cannot be disabled by design.","skillsTab.guide.dirs.title":"Custom skill directories","skillsTab.guide.dirs.body":'Add / remove your own skill directories in "Skill manager" (e.g. ~/.hermes/skills); paths overlapping an existing skill root are rejected; persisted and reloaded after restart.',"skillsTab.guide.restraint.title":"Creation discipline: restraint is what makes skills effective","skillsTab.guide.restraint.body":"Skills are injected into every session system prompt and affect context and cache \u2014 create sparingly:","skillsTab.guide.restraint.item1":'Only create skills for "hard, recurring problems you will meet again";',"skillsTab.guide.restraint.item2":"Never create a skill for a one-off or trivial task.","todosTab.guide.tracks.title":"Four todo tracks: everything in its place","todosTab.guide.tracks.body":"Todos are filed by target, isomorphic to the memory system:","todosTab.guide.tracks.item1":"Life (life): personal errands;","todosTab.guide.tracks.item2":"Work (work): cross-project business;","todosTab.guide.tracks.item3":"This project (project): todos of the current working directory \u2014 invisible from other directories, isolated by cwd;","todosTab.guide.tracks.item4":"Today (daily): per-day todo files, with past days reviewable (grouped by date).","todosTab.guide.add.title":"How to add","todosTab.guide.add.body":"Two ways, pick either:","todosTab.guide.add.item1":'Tell the AI "remember / I need to do X" (optionally say work / life / this project / today) and it files the todo into the right track;',"todosTab.guide.add.item2":"Add manually in this tab input (quadrant and due date optional).","todosTab.guide.pending.title":"Todo suggestions: the AI cannot assign you work on its own","todosTab.guide.pending.body":"AI-proposed todos enter a pending queue first, effective only after your confirmation:","todosTab.guide.pending.item1":"Approve: written into the target track (a todo stays a todo, never becomes memory);","todosTab.guide.pending.item2":"Archive: kept for reference; Reject: discard.","todosTab.guide.attrs.title":"Status & attributes","todosTab.guide.attrs.body":"Every todo carries full metadata to track:","todosTab.guide.attrs.item1":"Quadrant (important \xD7 urgent), due date, optional category;","todosTab.guide.attrs.item2":"Status: pending / doing / done (completion time stamped) / blocked / cancelled;","todosTab.guide.attrs.item3":"List / board views: list tabs by track with status / quadrant filters; board shows a 2\xD72 quadrant grid; each item can be done / restored, inline-edited, deleted (with confirm).","todosTab.guide.view.title":"Smart view: only what needs attention","todosTab.guide.view.body":"By default only items needing attention are shown (overdue / due today / current project / important-urgent, max 8) to avoid noise:","todosTab.guide.view.item1":'Past daily todos are read on demand \u2014 open the "past" tab to query history;',"todosTab.guide.view.item2":'Check "show expired" to reveal overdue leftovers (hidden by default).',"todosTab.guide.remind.title":"Due reminders: the AI keeps watch for you","todosTab.guide.remind.body":"The AI checks todos at the end of every turn and reminds you of overdue / due items in its reply \u2014 you never have to keep track yourself.","todo.track.life":"Life","todo.track.all":"All","todo.track":"Track","todo.track.work":"Work","todo.track.project":"This project","todo.track.daily":"Today","todo.track.past":"Past","todo.projectHint":"No working directory for this session \u2014 project todos unavailable (life/work/today only).","todo.help":"Four tracks: Life=personal errands; Work=cross-project tasks; This project=the current working directory's todos (invisible from other dirs); Today=today's tasks (one file per day). Past daily todos (earlier days) are not loaded by default \u2014 open the \u201CPast\u201D tab or tick \u201CShow expired\u201D to query history (expired leftovers stay hidden until then). To add: type content, optionally pick a quadrant (important \xD7 urgent) and a due date, then hit Add \u2014 or just tell me \u201Cadd a todo, it's for work/life/this project/today\u201D and I will file it in the right track.","todo.showExpired":"Show expired","todo.pastHint":"Past daily todos are mostly expired leftovers and are hidden by default; tick \u201CShow expired\u201D to view them.","todo.addPlaceholder":"Type a todo (multi-line ok), pick quadrant/due, add\u2026","todo.add":"Add","todo.added":"Todo added","todo.done":"Done","todo.undone":"Restore","todo.edit":"Edit","todo.save":"Save","todo.cancel":"Cancel","todo.updated":"Updated","todo.deleted":"Deleted","todo.deleteConfirm":`Delete this todo? This cannot be undone.

{snippet}`,"todo.due":"Due","todo.overdue":"Overdue","todo.all":"All","todo.filterStatus":"Status","todo.filterQuadrant":"Quadrant","todo.status.active":"Active","todo.status.pending":"Pending","todo.status.doing":"Doing","todo.status.done":"Done","todo.status.blocked":"Blocked","todo.status.cancelled":"Cancelled","todo.quadrant":"Quadrant","todo.quadrant.none":"Unclassified","todo.quadrant.q1":"Important & urgent","todo.quadrant.q2":"Important, not urgent","todo.quadrant.q3":"Urgent, not important","todo.quadrant.q4":"Neither","todo.empty":"(No todos yet \u2014 add one)","todo.view.mode":"View","todo.view.list":"List","todo.view.board":"Board","todo.board.empty":"No todos in this quadrant","todo.board.cycleStatus":"Click to cycle status","memoryTab.cwd":"Session working directory","memoryTab.loading":"Loading\u2026","memoryTab.warning":"These files are \xA7-delimited structured memory. If you open them with a system tool, edit with caution \u2014 careless changes can break the format and corrupt memory reads.","memoryTab.readonly":"Read-only","memoryTab.open":"Open file","memoryTab.opened":"Opened with the system tool","memoryTab.empty":"(missing or empty)","memoryTab.noCwd":"(no working directory for this session \u2014 project memory unavailable)","memoryTab.truncated":"(content truncated for display)","memoryTab.pagePrev":"Previous","memoryTab.pageNext":"Next","memoryTab.pageInfo":"Page {page}/{total} \xB7 {count} entries","memoryTab.viewPretty":"Pretty view","memoryTab.viewRaw":"Raw text","memoryTab.searchPlaceholder":"Search content, time or tag\u2026","memoryTab.noResults":"No matching entries \u2014 try another keyword.","memoryTab.projectTag":"Project tag","memoryTab.entryCount":"{count} entries","memoryTab.keyAddHelp":"Manually add a durable project fact (convention/decision/architecture/pitfall); it is written to KEY.md and injected into the context from the next turn on.","memoryTab.keyAddPlaceholder":"Type a key project fact, e.g. this project uses pnpm workspaces\u2026","memoryTab.keyAdd":"Save","memoryTab.keyAdded":"Key fact saved \u2014 it will be injected from the next turn","memoryTab.memoryAddPlaceholder":"Type a durable global fact/convention/environment note, e.g. internal Nexus registry\u2026","memoryTab.userAddPlaceholder":"Type a user preference/habit/communication note, e.g. Chinese replies by default\u2026","memoryTab.memoryUserAddHelp":"Manual non-project long-term memory write (global fact / user profile); the date is stamped automatically and it injects globally from the next turn.","memoryTab.memoryAdd":"Save","memoryTab.memoryUserAdded":"Saved \u2014 it will inject globally from the next turn","memoryTab.delete":"Delete","memoryTab.deleteConfirm":`Delete this memory entry? This cannot be undone.

{snippet}`,"memoryTab.deleted":"Entry deleted","memoryTab.edit":"Edit","memoryTab.save":"Save","memoryTab.cancel":"Cancel","memoryTab.updated":"Entry updated","memoryTab.editHint":"Content only: timestamps and branch tags are program-maintained and cannot be changed; the \xA7 delimiter cannot be typed.","memoryTab.editConfirm":`This entry is injected into the session context (the model's prompt) right after saving. Save anyway?

{snippet}`,"memoryTab.archive":"Archive","memoryTab.archiveConfirm":`Archive this entry? It leaves the main memory (no longer injected) and can be promoted back any time.

{snippet}`,"memoryTab.archived":"Archived (no longer injected; can be promoted back)","memoryTab.promote":"Promote to memory","memoryTab.promoted":"Promoted back into the main memory","memoryTab.keyScope":"Branch scope","memoryTab.keyScopeLabel":"Branch","memoryTab.keyScopeAll":"All branches","memoryTab.keyScopeAllHint":"All branches = visible everywhere","memoryTab.keyScopeAllWeight":"(checking it clears branch picks)","memoryTab.keyScopeHint":"Click to change the branch scope","memoryTab.keyScopeSaved":"Branch scope updated","memoryTab.keyScopeSave":"Save","memoryTab.keyScopeCancel":"Cancel","memoryTab.keyBranchInfo":"current branch: {branch} \u2014 only untagged entries or entries covering this branch are injected","memoryTab.gitBranch":"The git branch this record belongs to","memoryTab.dshOnly":"DSH-only","memoryTab.dshOnlyHint":"This entry is injected into DSH sessions only; external executors (COI tasks) skip it \u2014 for DSH-specific discipline/rules/architecture facts","memoryTab.dshOnlyOn":"DSH-only","memoryTab.dshOnlyOff":"Unmark DSH-only","memoryTab.dshOnlySet":"Marked DSH-only (skipped when injecting into external executors)","memoryTab.dshOnlyRemoved":"DSH-only mark removed (visible to external executors)","memoryTab.dshOnlyToggleHint":"Toggle the DSH-only mark: the entry reaches DSH sessions only, external executors (COI) skip it","memoryTab.dshOnlyAdd":"DSH-only (do not inject into external executors)","memoryTab.desc.project":"Project log: auto-recorded per turn; never injected, read on demand by the model.","memoryTab.desc.key":"Key project facts: conventions/decisions/pitfalls, injected into this project's sessions; written when important, addable/deletable manually.","memoryTab.desc.daily":"Daily log: per-day progress records with program-tagged project labels; never injected, read on demand.","memoryTab.desc.user":"User profile: preferences and habits, injected into every session; writes need review + confirmation.","memoryTab.desc.memory":"Long-term memory: global environment/project facts, injected into every session; writes need review + confirmation.","memoryTab.desc.archive-user":"Archived user facts: not good enough for the main track, never injected; can be promoted back or deleted.","memoryTab.desc.archive-memory":"Archived memory facts: not good enough for the main track, never injected; can be promoted back or deleted.","memoryTab.desc.archive-key":"Archived key project facts: not good enough for the main track (or paused from injection), never injected; can be promoted back or deleted.","memoryTab.desc.agents":"Global rules: cross-session user rules (AGENTS.md), injected with the system prompt.","panel.suggestions.title":"Pending memory suggestions","panel.suggestions.empty":"No pending suggestions.","panel.suggestions.help":"Global-track suggestions produced by the background review: approve writes them into the memory files (injected with the snapshot); archive keeps them aside (never injected); reject drops them.","panel.todoSuggestions.title":"Pending todo suggestions","panel.todoSuggestions.empty":"No pending todo suggestions.","panel.todoSuggestions.help":"Todo suggestions from the background review: approve writes into the matching todo track (a todo stays a todo); archive keeps aside; reject drops.","panel.guide.title":"Guide","panel.guide.intro":'memory-evolve is a "memory & self-evolution" toolkit: it turns conversations into durable memory, todos and skills \u2014 the AI gets to know you better over time and never loses context across sessions. Here is what each module does and how to use it.',"panel.guide.memory.title":"Memory read/write (memory tool)","panel.guide.memory.desc":'Five tracks: global memory, user profile, key project facts (auto-injected and git-branch aware \u2014 only facts relevant to the current branch reach the context), project log, daily log. How to use: just chat \u2014 the AI logs progress every turn; for important facts say "remember: the deploy port is 8080"; when resuming days later ask "check the memory" and it picks up seamlessly.',"panel.guide.review.title":"Memory review (self-evolution)","panel.guide.review.desc":"Every N turns (10 by default, configurable) the AI reviews the conversation and distills what is worth remembering into suggestions for your confirmation \u2014 it never writes into the memory on its own. Just approve or reject in the Memory tab queue from time to time.","panel.guide.todo.title":"Todo management (dtodo)","panel.guide.todo.desc":'Say "remember / I need to do X" and it becomes a structured todo (auto-filed into life / work / project / daily, with important-urgent flags and due dates); the AI reminds you of due items at the end of its replies. AI-proposed todos land in a pending queue first. Manage everything in the Todos tab.',"panel.guide.skill.title":"Skill accumulation (skill_manage)","panel.guide.skill.desc":'Methodologies learned the hard way can be solidified into skills; next time the same kind of task follows the process. Just say "save this process as a skill"; keep creation restrained and high-value. Browse, search and enable / disable skills in the Skills tab.',"panel.guide.search.title":"Local file search (memory_evolve_search_local_files)","panel.guide.search.desc":'When the memory has no answer and you need local material, tell the AI "search the machine for XX" \u2014 by filename (documents only by default, all types on request); "which document mentioned XX" searches file content and returns hits with snippets. Four modes under "Config": filename + content / filename only / content only / off. Off by default \u2014 the tool is invisible to the model until enabled.',"panel.guide.coi.title":"COI dispatch (de_coi)","panel.guide.coi.desc":'Dispatch tasks to external CLI agents (kimi / codex / grok / hermes\u2026): unified scheduling without blocking, live progress, layered sessions with one-click resume, cross-COI chaining, results archived and distilled into memory. Say "dispatch XX to kimi / codex" or use the COI Dispatch tab. Off by default: enable "COI dispatch" under Config.',"panel.guide.prompt.title":"Prompt manager","panel.guide.prompt.desc":'Turn recurring working patterns into prompt assets: pick one and inject \u2014 the model sees it next turn without interrupting the reply; supports one-shot, N turns, or every-M-turns reminders (numbers freely editable, auto-expiring by turn count), stoppable anytime; ad-hoc injection works without creating a prompt first. Off by default: enable "Prompt manager" under Config.',"panel.guide.models.title":"Model settings (de_models)","panel.guide.models.desc":'The "Model settings" tab + de_models tool: a table of DSH providers and models with plugin-side per-model settings (enabled, note, thinking support, allowed / recommended reasoning levels incl. custom levels) \u2014 these settings only affect this plugin (de_models queries and tab display); DSH own model settings stay untouched. Off by default: enable "Model settings" under Config.',"panel.guide.broadcast.title":"Session broadcast (de_broadcast)","panel.guide.broadcast.desc":'Message passing between DSH sessions: copy your session ID (\u29C9 button in the session header), send it to another session and let its AI use de_broadcast send to reach you \u2014 the receiver snapshot gets a targeted unread notice (visible only to the receiver), the AI reads the full text via list / read, auto-deleted once everyone has read it; very long content is stored to a file. Rooms support multi-member collaboration across working directories; project groups reach a whole directory. Off by default: enable "Session broadcast" under Config.',"panel.guide.session.title":"Session search (de_session_search)","panel.guide.session.desc":'Let the AI search the history of other AI tools (Codex currently) \u2014 "when did we do XX in Codex" just works: keyword hits with message snippets and context windows; scope by cwd, control scale with sort / limit / window; zero resident state \u2014 no index, no cache, read-only live scans. Off by default: enable "Session search" under Config.',"panel.guide.sessionOrch.title":"Session orchestration (de_session)","panel.guide.sessionOrch.desc":'Let the AI create / wake DSH sessions programmatically \u2014 spawn builds a standard session (fully isomorphic to a manual one: system prompt / tools / memory snapshot / persistence, listed on the left and adoptable) that starts running immediately; wake resumes an existing session with a task (queued if busy); status / list report state. Discipline: the AI never bulk-wakes sessions \u2014 you stay in command. Off by default: enable "Session orchestration" under Config; pairs well with broadcast rooms.',"panel.guide.uiSettings.title":"Web UI Settings","panel.guide.uiSettings.desc":'Style-level tweaks for the DSH web GUI (pure client-side injection): independent switches in the "Web UI Settings" tab "General" page \u2014 session filter (left list shows only active), wide conversation area, wide message bubbles, context-usage warning, Mermaid rendering. Off by default.',"panel.guide.canvas.title":"Infinite canvas","panel.guide.canvas.desc":'Collect scattered files / images / audio onto one infinite canvas (the "Canvas" tab) \u2014 board by path / note / search (local path references, no copying), preview in-card, copy a reference string and give it to the AI to fetch by id; the AI can also drop notes via de_canvas (nothing is injected \u2014 it queries on demand). Off by default: enable "Infinite canvas" under Config.',"panel.guide.sync.title":"Memory sync (cross-device)","panel.guide.sync.desc":'Keep project memory consistent across devices \u2014 share the same key facts / logs / archives / project todos between office and home machines. In the "Memory sync" tab enable "sync this project" and click start: by default it uses a dedicated branch of your code repo (zero config); or fill in a shared memory repo \u2014 one repo for all projects (global tracks too). Another machine recognizes the project automatically and pulls to continue. The module switch lives under Config; sync is always triggered by you, and projects with sync off are unaffected.',"panel.guide.confirm.title":"The confirmation system (why the AI cannot write directly)","panel.guide.confirm.desc":"AI-proposed memory, todos and skills all enter a pending queue and take effect only after your confirmation. These writes genuinely change AI behavior: memory enters the context, todos are work assigned to you, skills alter the AI capability set \u2014 unchecked writes could canonize mistakes or assign you work unprompted. You are the final gate: the AI proposes, you decide.","panel.guide.best.title":"Tips for the best experience","panel.guide.best.1":'Session continuity: say "check the memory" and the AI picks up project conventions and progress from the logs \u2014 no need to repeat yourself.',"panel.guide.best.2":'Capture on the fly: say "remember this / follow up on this" and the AI files it automatically; a word days later resumes the thread.',"panel.guide.best.3":"Review periodically: glance at the memory / todo suggestion queues and approve or reject \u2014 that is the confirmation loop of memory evolution.","panel.guide.best.4":'Multi-device sync: work from office and home? Enable "Memory sync" and both machines share the same project memory \u2014 important conclusions never need repeating.',"panel.guide.loop":"The loop: chat \u2192 record \u2192 review \u2192 distill \u2192 execute. This mechanism is the AI long-term working memory.","panel.suggestions.approve":"Approve","panel.suggestions.archive":"Archive","panel.suggestions.archiveHint":"Archive: kept out of the injected memory, can be promoted back later","panel.suggestions.editHint":"You may edit the text before approving; the edited text is what gets written.","panel.suggestions.reject":"Reject","panel.suggestions.approveAll":"Approve all","panel.suggestions.rejectAll":"Reject all","panel.suggestions.hits":"Suggested {count}\xD7","panel.suggestions.hitsHint":"This fact resurfaced across several reviews \u2014 worth a careful look","panel.suggestions.target.memory":"Memory","panel.suggestions.target.user":"User profile","panel.suggestions.target.key":"Project key facts","panel.suggestions.targetHint":"Track to write on approve: defaults to the AI-recommended one; re-classify if it fits better (memory/user/key are injected into the prompt immediately)","panel.suggestions.projectHint":"This suggestion comes from the working directory: {path}","panel.suggestions.done":"Done: {text}","panel.archive.title":"Archived memory","panel.archive.empty":"No archived entries.","panel.archive.help":"Archived suggestions are never injected; they stay here for later \u2014 promote them back into the memory files when they matter, or delete them.","panel.archive.promote":"Promote to memory","panel.archive.delete":"Delete","panel.archive.promoted":"Promoted to memory","panel.archive.deleted":"Archived entry deleted","panel.skills.title":"Pending skill suggestions","panel.skills.help":"New skills produced by background review; approving moves them into the skill library (~/.agents/skills) where they are injected into system prompts.","panel.skills.empty":"No pending skill suggestions.","panel.skills.pending":"Pending","panel.skills.approve":"Approve","panel.skills.reject":"Reject","panel.skills.done":"Skill {op}","panel.config.title":"Config","panel.config.help":"Changes apply immediately and persist (overriding the config.yaml entries).","panel.config.reviewEnabled":"Background review","panel.config.reviewEnabled.hint":"Automatically review sessions and harvest experience; when off, the memory/skill tools and the snapshot still work \u2014 only the automatic review stops","panel.config.reviewInterval":"Review interval (turns)","panel.config.reviewInterval.hint":"One automatic review per N user turns","panel.config.skillReviewEnabled":"Skill auto-harvest","panel.config.skillReviewEnabled.hint":"Off (default): new skills from review go to the pending queue and only install when approved; On: review creates skills directly without confirmation (skills are injected into every session \u2014 enable with care)","panel.config.perTurnWriteGuard":"Memory write watchdog","panel.config.perTurnWriteGuard.hint":"Off (default): the root cause is model instruction-following \u2014 strong models do not need it. On: after consecutive turns without a daily/project write, the snapshot pins a catch-up warning (clears once written)","panel.config.writeGuardThreshold":"Watchdog threshold (turns)","panel.config.writeGuardThreshold.hint":"Warn after N consecutive turns without ANY daily/project write (>=1; 2 = tolerates 1 missed turn, warns from the 2nd)","panel.config.perTurnProjectWrites":"Per-turn project writes","panel.config.perTurnProjectWrites.hint":"Require the model to check at the end of every turn and record project-related facts (decisions/progress/pitfalls); when off, project memory is read on demand only. \u26A0\uFE0F Relies on LLM instruction following \u2014 weaker models may not comply","panel.config.perTurnDailyWrites":"Per-turn daily writes","panel.config.perTurnDailyWrites.hint":"Require the model to check at the end of every turn and record the day's progress; when off, the daily log is read on demand only. \u26A0\uFE0F Relies on LLM instruction following \u2014 weaker models may not comply","panel.config.perTurnKeyWrites":"Per-turn key-fact check","panel.config.perTurnKeyWrites.hint":"Require the model to judge at the end of every turn whether an important project fact emerged (long-lived convention/decision/architecture/pitfall); if so, write it to target=key (injected into the context), otherwise skip. When off, key facts are only added manually or read. \u26A0\uFE0F Relies on LLM instruction following","panel.config.keyProgressiveDisclosure":"Key-track progressive disclosure","panel.config.keyProgressiveDisclosure.hint":"Control how key-track memories are injected: auto = full injection for small data, summary injection for large data; off = always full injection (default); on = always summary injection (saves tokens)","panel.config.keyProgressiveDisclosure.auto":"Auto","panel.config.keyProgressiveDisclosure.off":"Off (always full, default)","panel.config.keyProgressiveDisclosure.on":"On (always summary)","panel.config.keyFullInjectThreshold":"Full-injection entry-count threshold","panel.config.keyFullInjectThreshold.hint":"In auto mode, full injection when entry count \u2264 this value (default 3)","panel.config.keyFullInjectCharLimit":"Full-injection character limit","panel.config.keyFullInjectCharLimit.hint":"In auto mode, full injection when total characters \u2264 this value (default 1500)","panel.config.coiEnabled":"COI dispatch","panel.config.coiEnabled.hint":"Enable the de_coi_* tools and the CLI Dispatch tab: unified dispatch of CLI agents (kimi/codex/grok/hermes\u2026). Off by default \u2014 this plugin's core is memory/todos/skills, dispatch is an on-demand add-on; when off, the tools and the tab are completely invisible","panel.config.searchDocsEnabled":"Local file search tool","panel.config.searchDocsEnabled.hint":'Lets the model search files across all local disks/directories. **Four modes**: all = name + content search; filename only = content/contentQuery parameters are ignored (never reads file contents \u2014 for people who use their own content-search implementation); content only = every call does content matching (query acts as the content keyword); off = the tool is completely invisible to the model. Content search: contentQuery="keyword" answers "which document mentions XX" (rg full-text match, returns hit snippets). Off by default',"panel.config.searchDocsMode.all":"All (name + content)","panel.config.searchDocsMode.filename":"Filename only","panel.config.searchDocsMode.content":"Content only","panel.config.searchDocsMode.off":"Off (tool invisible)","panel.config.broadcastEnabled":"Session broadcast","panel.config.broadcastEnabled.hint":'Enable session broadcast (de_broadcast): inter-session messaging \u2014 the "Session broadcast" unread hint in the snapshot (inbox-style rows: id+subject+sender+time) + the de_broadcast tool (send/list/read; read consumes and auto-deletes once all recipients read; >8KB spills to a file; 30-day cleanup) + the broadcast management panel tab. **Independent of COI dispatch** (off by default, can be enabled alone); when off, all of the above are invisible; the persistent "Your session ID" snapshot section is unaffected; the header "\u29C9 Copy session ID" / "\u270E alias" buttons belong to "Session orchestration" (the panel top also has a copy entry)',"panel.config.notifyEnabled":"Notifications","panel.config.notifyEnabled.hint":"Enable the notification module (de_notify): the AI proactively notifies you when a task is done \u2014 the de_notify manual tool (send anytime, no frequency limit; channels include feishu/qq/weixin/wecom) + automatic COI completion notify (pick channels via coiNotifyChannels). Independent module, off by default; channels require the matching channel plugin (dsh-feishu etc., missing ones reported honestly); when off, the tool is not registered and COI auto-notify silently skips","panel.config.syncEnabled":"Memory sync","panel.config.syncEnabled.hint":'**Module switch**: enables the Memory Sync module \u2014 the Memory Sync tab appears in conversations and /memory_sync works. **Note: this does NOT start syncing any project** \u2014 each project is opted in separately via the "Sync this project" switch in the Memory Sync tab (off by default; never-opted-in projects keep their pure-local state: no Git repo, no entry IDs). Sync moves project memory (KEY + project log + archive + project todos) over Git to one memory remote \u2014 leave the URL empty to use your main code repo by default (dedicated branch, zero config); paste a shared memory repo URL to use one private repo for all projects (global memory, phase 2, can only sync through it). Push always requires your explicit trigger',"panel.config.sessionSearchEnabled":"Session search","panel.config.sessionSearchEnabled.hint":"Enable de_session_search: lets the model search historical sessions of other local AI tools (Codex for now: plain JSONL under ~/.codex/sessions and archived_sessions \u2014 rg prefilter keeps it millisecond-fast; DSH sessions not supported yet). Case-insensitive literal matching over user/assistant messages only; supports cwd project filter, relevance/newest/oldest sorting, and limit/window result control. **Independent submodule** (off by default, can be enabled alone \u2014 unrelated to COI dispatch/broadcast); zero resident state: no index, no cache, every call scans read-only in real time and never modifies session files; when off the tool is completely invisible to the model","panel.config.canvasEnabled":"Infinite canvas","panel.config.canvasEnabled.hint":"**Module switch**: enables the Infinite Canvas \u2014 a Canvas tab in conversations + the de_canvas tool (the model can list the board, read nodes by id, and drop notes into the board's center zone). Local path references, single-board with perspective filters (session/project/global + ownership badges), pull-based AI access (board content is never injected into context; query it on demand). **Independent submodule** (off by default): stored at <memoryDir>/canvas/boards.json (whole-board atomic writes + rev optimistic lock to prevent cross-session overwrites); when off the tab and tool are completely invisible, data files are kept","panel.config.sessionEnabled":"Session orchestration","panel.config.sessionEnabled.hint":'Enable session orchestration (de_session): lets AI **programmatically create/wake DSH sessions** \u2014 spawn creates a standard session (identical to one opened manually: system prompt/tools/memory snapshot/persistence, appears in the left session list and can be taken over), prompt = the full instruction text (role/task freely composed), it starts running immediately; optional cwd / join a broadcast room / model override; wake wakes an existing session (equivalent to sending a message on its behalf \u2014 its AI wakes up and processes it, auto-resumed after process restart); status/list inspect state; the header **"\u29C9 Copy session ID" / "\u270E alias" buttons follow this switch** (session-identity features, previously mis-housed under broadcast). **Independent submodule** (off by default; depends on the DSH agents service, only same-process sessions can be woken; when off the tool is invisible to the model)',"panel.config.promptsEnabled":"Prompt manager","panel.config.promptsEnabled.hint":"Enable the Prompts tab: a prompt library (user-written paradigms + built-in examples) plus an injection track (once / N consecutive turns / every M turns \u2014 count and cadence accept any integers; injected content is visible to the model next turn, expires automatically by turn counting, and can be stopped anytime; quick inject works without saving a prompt first, auto-saved to the Temp category). Off by default; when off the snapshot section, event listener and API are fully uninstalled and the tab hides after refresh","panel.config.modelsEnabled":"Model Settings","panel.config.modelsEnabled.hint":`Enable the "Model Settings" tab + de_models tool: a table of DSH providers/models with per-model settings (enabled, note, thinking support, allowed/recommended reasoning levels, custom levels); de_models lets the AI query the available model list. **Off by default** (registering takes a slot in the model tool list; turn it on when needed). \u26A0\uFE0F These settings **only affect this plugin and never modify or affect DSH's own model settings** (DSH side stays as the official "Settings \u2192 Models" says). When off the tab and tool hide and the API refuses access, settings data is kept`,"panel.config.uiSettingsEnabled":"Web UI Settings","panel.config.uiSettingsEnabled.hint":'Enable the "Web UI Settings" module: a filter bar appears above the left session list, showing only active sessions by default (generating / awaiting approval / awaiting answer / subagents running / error / finished-but-unviewed \u2014 purely idle ones collapse away), one click switches back to all; pure client-side styling (CSS + DOM injection, no DSH framework changes); the filter preference is remembered in the browser. **Off by default**; when off, the filter bar and injected styles are fully removed',"panel.config.save":"Save config","panel.reveal.title":"Open files","panel.reveal.help":"Open the memory directories and files with your system tools. \u26A0\uFE0F Careless edits can break the \xA7-delimited format and corrupt memory reads \u2014 edit with caution.","panel.reveal.memoryDir":"Memory dir","panel.reveal.memoryFile":"Global memory","panel.reveal.userFile":"User profile","panel.reveal.archiveMemoryFile":"Archived memory","panel.reveal.archiveUserFile":"Archived user","panel.reveal.dailyDir":"Daily log dir","panel.reveal.dailyFile":"Today log","panel.reveal.projectsDir":"Project memory dir","panel.reveal.skillDir":"Skills dir","panel.reveal.agentsFile":"Global rules (AGENTS.md)","panel.config.saved":"Config saved. Refresh the page for newly enabled/disabled modules to take effect","panel.config.failed":"Failed: {message}","panel.loading":"Loading\u2026"},Ao=3e4,Yr={css:Rn,enhance:$n},Qr=["slots","locale","conversation","sessions"];function Zr(t){let e=t.locale.bind(Hn);t.effect(()=>t.locale.register(Hn,{zh:Bn,en:qn}),"memory-evolve: dictionaries"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-memory-evolve-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.memoryEvolveCss="1",F.textContent=Nn,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-skill-browser-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.skillBrowserCss="1",F.textContent=In,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: skill browser stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-coi-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.coiCss="1",F.textContent=Sn,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: coi stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-broadcast-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.broadcastCss="1",F.textContent=En,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: broadcast stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-prompt-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.promptCss="1",F.textContent=Cn,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: prompt stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-ui-settings-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.uiSettingsCss="1",F.textContent=Pn,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: ui-settings stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-me-mermaid-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.meMermaidCss="1",F.textContent=jn,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: mermaid stylesheet"),t.effect(()=>{if(typeof document>"u")return()=>{};if(document.querySelector("style[data-bookmark-css]")!==null)return()=>{};let F=document.createElement("style");return F.dataset.bookmarkCss="1",F.textContent=An,document.head.appendChild(F),()=>{F.remove()}},"memory-evolve: bookmark stylesheet");let o=!1,a=0,n=0,i=0,d=0,p,C,w=()=>{p?.(),p=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"memory-files",order:10,label:()=>a>0?e("memoryTab.label.pending",{count:a}):e("memoryTab.label")},M=>Oo({...M,t:e})))},u=()=>{C?.(),C=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"skills-hub",order:20,label:()=>i>0?e("skillsTab.label.pending",{count:i}):e("skillsTab.label")},M=>qo({...M,t:e})))},g=Ro(()=>t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"todos-hub",order:30,label:()=>d>0?e("todosTab.label.pending",{count:d}):e("todosTab.label")},M=>Go({...M,t:e})))),k=M=>{let F=M.detail;g.setEnabled(F?.todoEnabled!==!1)};window.addEventListener(ga,k),t.effect(()=>()=>window.removeEventListener(ga,k),"memory-evolve: todo tab runtime listener");let j,z=()=>{j?.(),j=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"settings-hub",order:120,label:()=>n>0?e("settingsTab.label.pending"):e("settingsTab.label")},M=>Qo({...M,t:e})))},A,U=()=>{A?.(),A=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"models-hub",order:90,label:()=>e("modelsTab.label")},M=>as({...M,t:e})))},T,G=()=>{T?.(),T=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"memory-sync-hub",order:80,label:()=>e("syncTab.label")},M=>Cs({...M,t:e})))},v=()=>{o||p===void 0||fetch("/memory-evolve/api/badge").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{let F=M.suggestions??0,Se=M.skills??0,xe=M.todoSuggestions??0,je=M.update??0;je!==n&&(n=je,z()),F!==a&&(a=F,w()),Se!==i&&(i=Se,u()),xe!==d&&(d=xe,g.refresh())}).catch(()=>{})};fetch("/memory-evolve/api/config").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{if(!o&&M.config?.modelsEnabled===!0&&A===void 0&&U(),!o&&M.config?.syncEnabled===!0&&T===void 0&&G(),o||M.config?.memoryTabEnabled!==!0)return;w(),u(),g.setEnabled(M.config?.todoEnabled!==!1),z(),v();let F=setInterval(v,Ao);t.effect(()=>()=>clearInterval(F),"memory-evolve: memory tab badge poller"),fetch("/memory-evolve/api/update/status").then(xe=>xe.ok?xe.json():Promise.reject(new Error(`HTTP ${xe.status}`))).then(xe=>{if(o)return;let je=xe?.status==="outdated"?1:0;je!==n&&(n=je,z())}).catch(()=>{});let Se=()=>v();window.addEventListener("dsh-memory-evolve:badge-change",Se),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",Se),"memory-evolve: memory tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{o=!0,p?.(),C?.(),g.dispose(),j?.()},"memory-evolve: memory tabs"),t.effect(()=>()=>{T?.()},"memory-evolve: sync tab"),t.effect(()=>()=>{A?.()},"memory-evolve: models tab");let D=!1,y,O=0,Z,I=()=>{y?.(),y=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"coi-hub",order:40,label:()=>O>0?e("coiTab.label.pending",{count:O}):e("coiTab.label")},M=>(Z=M.sessionId,cs({...M,t:e}))))},m=()=>{if(D||y===void 0)return;let M=Z!==void 0?`?limit=200&sessionId=${encodeURIComponent(Z)}`:"?limit=200";fetch(`/memory-evolve/api/coi/tasks${M}`).then(F=>F.ok?F.json():Promise.reject(new Error(`HTTP ${F.status}`))).then(F=>{let Se=(F.tasks??[]).filter(xe=>xe.status==="running"||xe.status==="queued").length;Se!==O&&(O=Se,I())}).catch(()=>{})};fetch("/memory-evolve/api/coi/config").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(()=>{if(D)return;I(),m();let M=setInterval(m,Ao);t.effect(()=>()=>clearInterval(M),"memory-evolve: coi tab badge poller");let F=()=>m();window.addEventListener("dsh-memory-evolve:badge-change",F),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",F),"memory-evolve: coi tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{D=!0,y?.()},"memory-evolve: coi tab");let l=!1,x;fetch("/memory-evolve/api/config").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{l||M.config?.sessionEnabled!==!0||(x=t.slots.inject("conversation.session.header.actions",()=>t.slots.register({name:"conversation.session.header.actions",id:"copy-session-id",order:0},F=>gs({...F,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{l=!0,x?.()},"memory-evolve: session header buttons");let V=!1,P;fetch("/memory-evolve/api/broadcast/messages").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(()=>{V||(P=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"broadcast-hub",order:50,label:()=>e("broadcastTab.label")},M=>vs({...M,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{V=!0,P?.()},"memory-evolve: broadcast tab");let ne=!1,oe,be,Me,Te,Ce,X;fetch("/memory-evolve/api/ui-settings/state").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{if(ne||M.enabled!==!0)return;let F=un({barTitle:e("uiSettings.feature.sessionFilter"),on:e("uiSettings.filter.on"),off:e("uiSettings.filter.off"),runningLabel:e("uiSettings.running.label"),ungroupedLabel:e("uiSettings.ungrouped")});be=F.dispose;let Se=bn();Me=Se.dispose;let xe=gn();Te=xe.dispose;let je=fn();Ce=je.dispose;let et=Tn();X=et.dispose;let He=Aa();F.setEnabled(He.sessionFilter),Se.setEnabled(He.wideChat),xe.setEnabled(He.wideBubble),je.setEnabled(He.contextWarn),et.setEnabled(He.mermaidRender);let Je=N=>{let W=N.detail;W!==void 0&&(F.setEnabled(W.sessionFilter),Se.setEnabled(W.wideChat),xe.setEnabled(W.wideBubble),je.setEnabled(W.contextWarn),et.setEnabled(W.mermaidRender))};window.addEventListener(ja,Je),t.effect(()=>()=>window.removeEventListener(ja,Je),"memory-evolve: ui-settings features listener"),oe=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"ui-settings-hub",order:110,label:()=>e("uiSettingsTab.label")},N=>is({...N,t:e})))}).catch(()=>{}),t.effect(()=>()=>{ne=!0,oe?.(),be?.(),Me?.(),Te?.(),Ce?.(),X?.()},"memory-evolve: ui-settings tab");let Ve=!1,Ne,fe=0,ce=()=>{Ne?.(),Ne=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"prompt-hub",order:60,label:()=>fe>0?e("promptTab.label.active",{count:fe}):e("promptTab.label")},M=>ks({...M,t:e})))},ze=()=>{Ve||Ne===void 0||fetch("/memory-evolve/api/prompts/injections").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{let F=M.injections?.length??0;F!==fe&&(fe=F,ce())}).catch(()=>{})};fetch("/memory-evolve/api/prompts/sources").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(()=>{if(Ve)return;ce(),ze();let M=setInterval(ze,Ao);t.effect(()=>()=>clearInterval(M),"memory-evolve: prompt tab badge poller");let F=()=>ze();window.addEventListener("dsh-memory-evolve:badge-change",F),t.effect(()=>()=>window.removeEventListener("dsh-memory-evolve:badge-change",F),"memory-evolve: prompt tab badge listener")}).catch(()=>{}),t.effect(()=>()=>{Ve=!0,Ne?.()},"memory-evolve: prompt tab");let me=!1,Ze,ot,Fe,Ee="",ke=!1;fetch("/memory-evolve/api/bookmarks/state").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{me||M.enabled!==!0||(ot=t.slots.inject("conversation.session.header.actions",()=>t.slots.register({name:"conversation.session.header.actions",id:"bookmark-session-catcher",order:100},F=>{let Se=F.sessionId;return typeof Se=="string"&&Se!==""&&(Ee=Se),ke||(ke=!0,Fe=Ms(()=>Ee,{t:e}).dispose),null})),Ze=t.slots.inject("conversation.view",()=>t.slots.register({name:"conversation.view",id:"bookmarks-hub",order:100,label:()=>e("bookmarkTab.label")},F=>Ss({...F,t:e}))))}).catch(()=>{}),t.effect(()=>()=>{me=!0,Fe?.(),ot?.(),Ze?.()},"memory-evolve: bookmarks");let ye=!1,ve;fetch("/memory-evolve/api/canvas/state").then(M=>M.ok?M.json():Promise.reject(new Error(`HTTP ${M.status}`))).then(M=>{ye||M.enabled!==!0||(ve=cn(t,{t:e,openSession:F=>{t.sessions.open(F)}}))}).catch(()=>{}),t.effect(()=>()=>{ye=!0,ve?.()},"memory-evolve: canvas-tab")}
return module.exports; } });
