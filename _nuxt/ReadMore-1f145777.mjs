import{_ as d,d as m,q as f,o as x,h,w as p,s as k,u as y,j as l,b as a,t as S,m as b,l as j}from"./entry-1ea7b20d.mjs";import B from"./Alert-264786ab.mjs";const T=m({__name:"ReadMore",props:{link:{type:String,required:!0},title:{type:String,required:!1,default:void 0}},setup(i,{expose:c}){c();const e=i,t=(n,r)=>n||r.split("/").filter(Boolean).map(s=>k(s).map(u=>y(u)).join(" ")).join(" > ").replace("Api","API"),_=f(()=>t(e.title,e.link)),o={props:e,createTitle:t,computedTitle:_};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),$=a(" Read more in "),g=a(". ");function q(i,c,e,t,_,o){const n=b,r=j,s=B;return x(),h(s,null,{default:p(()=>[l(n,{class:"inline-block w-5 h-5",name:"heroicons-outline:information-circle"}),$,l(r,{to:e.link},{default:p(()=>[a(S(t.computedTitle),1)]),_:1},8,["to"]),g]),_:1})}var A=d(T,[["render",q]]);export{A as default};
