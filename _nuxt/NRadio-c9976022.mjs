import{_ as i,d as r,o as c,c as u,K as m,ab as b,a as l,aa as v,g as _}from"./entry-1ea7b20d.mjs";import{a as f}from"./index-555682f3.mjs";import"./index-ec1b6683.mjs";const p=r({__name:"NRadio",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1},name:null,value:null},setup(d,{expose:n,emit:e}){n();const a=d,s=f(a,"modelValue",e,{passive:!0}),o={props:a,emit:e,model:s};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),h=["checked","disabled"],k=["disabled","name","value"],x=l("span",{class:"n-transition n-radio-box n-checked:n-radio-box-checked peer-active:n-active-base peer-focus-visible:n-focus-base"},[l("div",{class:"n-transition n-radio-inner n-checked:n-radio-inner-checked"})],-1);function y(d,n,e,a,s,o){return c(),u("label",{class:"n-radio inline-flex items-center select-none hover:n-radio-hover n-disabled:n-disabled",checked:a.model===e.value||null,disabled:e.disabled||null},[m(l("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>a.model=t),type:"radio",class:"absolute op0 peer",disabled:e.disabled,name:e.name,value:e.value,onKeypress:n[1]||(n[1]=v(t=>a.model=e.value,["enter"]))},null,40,k),[[b,a.model]]),x,l("span",null,[_(d.$slots,"default")])],8,h)}var N=i(p,[["render",y]]);export{N as default};
