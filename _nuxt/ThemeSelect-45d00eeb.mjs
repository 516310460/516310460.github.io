import{_ as f,d as p,q as g,o as h,c as k,j as s,w as l,n as a,J as C,a as i,K as r,L as _,m as v}from"./entry-1ea7b20d.mjs";import{u as x}from"./composables-8ab9c103.mjs";const z=p({__name:"ThemeSelect",props:{size:{type:String,default:"w-8 h-8"},spacing:{type:String,default:"p-0"}},setup(u,{expose:c}){c();const e=x(),n=g({get(){return e.value},set(t){e.preference=t}}),o={colorMode:e,mode:n,onClick:()=>n.value==="light"?n.value="dark":n.value="light"};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function b(u,c,e,n,d,o){const t=v,m=C;return h(),k("button",{class:a([[e.size,e.spacing],"u-text-gray-500 hover:u-text-gray-700 block"]),"aria-label":"Color Mode",onClick:n.onClick},[s(m,null,{placeholder:l(()=>[i("span",{class:a(["block",[e.size,e.spacing]])},"...",2)]),default:l(()=>[i("span",{class:a([e.spacing,e.size])},[r(s(t,{name:"heroicons-outline:sun",class:a([e.spacing,e.size])},null,8,["class"]),[[_,n.mode==="dark"]]),r(s(t,{name:"heroicons-outline:moon",class:a([e.spacing,e.size])},null,8,["class"]),[[_,n.mode!=="dark"]])],2)]),_:1})],2)}var w=f(z,[["render",b]]);export{w as default};
