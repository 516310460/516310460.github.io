import{_ as f,d as g,$ as m,o as v,c as $}from"./entry-62db5060.mjs";import{u as b}from"./useDocus-c6a9d185.mjs";import{w as h}from"./index-3389426a.mjs";const j=g({__name:"Debug",setup(_,{expose:c}){c();const{page:a,navigation:s,theme:o}=b(),n={page:!0,navigation:!0,theme:!0},u=m(()=>{var t;const e=(t=o.value)==null?void 0:t.debug;if(typeof e=="object")return Object.assign(n,e);if(e===!0)return n;if(e===!1)return e}),r={page:"\u{1F4C3}",navigation:"\u{1F516}",theme:"\u{1F3A8}"};Object.entries({page:a,navigation:s,theme:o}).forEach(([e,t])=>{var p;!u.value||!((p=u.value)!=null&&p[e])||h(t,()=>{var l,d;console.log(e==="page"?`[${r[e]}] Page updates detected! ${`(${(l=t.value)==null?void 0:l.title})`||`(${(d=t.value)==null?void 0:d._id})`||""}`:`[${r[e]}] ${e[0].toUpperCase()+e.slice(1,e.length)} updates detected!`),console.dir({...t.value})},{debounce:100})});const i={page:a,navigation:s,theme:o,defaultConfig:n,config:u,icons:r};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),C={style:{display:"none"}};function D(_,c,a,s,o,n){return v(),$("div",C)}var w=f(j,[["render",D]]);export{w as default};
