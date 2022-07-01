import{_,d as m,o,c as n,a as e,t as s,b as p,e as u,F as x,r as g}from"./entry-62db5060.mjs";const f=m({__name:"ArticleHero",props:{page:{type:Object,default:()=>{}}},setup(d,{expose:c}){c();const r={formatDateByLocale:(l,i)=>new Date(i).toLocaleDateString(l,{year:"numeric",month:"long",day:"numeric"})};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),y={class:"py-10 sm:py-20"},h={class:"max-w-4xl px-4 mx-auto sm:px-6 lg:px-8 flex flex-col gap-y-8 items-center justify-center text-center"},b={key:0,class:"font-semibold text-gray-400"},k={class:"font-bold text-gray-900 dark:text-white text-5xl"},v={class:"text-gray-700 dark:text-gray-200 font-medium max-w-5xl"},w={class:"flex flex-wrap items-center justify-center gap-4"},B=["href"],D={class:"rounded-full h-12 w-12"},j=["src","alt"],L={class:"flex flex-col items-start justify-center"},S={class:"text-gray-900 dark:text-white"},N={class:"text-sm text-gray-400"};function V(d,c,t,r,l,i){return o(),n("div",y,[e("div",h,[t.page.date?(o(),n("div",b,[e("time",null,s(r.formatDateByLocale("en",t.page.date)),1),p(" - "+s(t.page.category),1)])):u("",!0),e("h1",k,s(t.page.title),1),e("p",v,s(t.page.description),1),e("ul",w,[(o(!0),n(x,null,g(t.page.authors,a=>(o(),n("li",{key:a.name,class:"group"},[e("a",{href:a.link,alt:"twitter account",class:"flex gap-x-2 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 p-2 rounded-md transition-colors duration-300"},[e("div",D,[e("img",{src:a.avatarUrl,alt:a.name,class:"rounded-full border-2 border-gray-500"},null,8,j)]),e("div",L,[e("span",S,s(a.name),1),e("span",N,s(`@${a.link.split("/").pop()}`),1)])],8,B)]))),128))])])])}var F=_(f,[["render",V]]);export{F as default};
