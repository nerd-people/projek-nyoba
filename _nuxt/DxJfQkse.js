import{f as S,e as v,Y as y,t as o,Z as x,o as B,_ as T,X as w,$ as O,I as m,a0 as _,a1 as K}from"./CPIMTh_-.js";import{d as N,z as n,B as D,n as E}from"./CS_v0reC.js";const[H,t]=S("action-sheet"),z=v({},y,{title:String,round:o,actions:x(),closeIcon:B("cross"),closeable:o,cancelText:String,description:String,closeOnPopstate:o,closeOnClickAction:Boolean,safeAreaInsetBottom:o}),F=[...T,"round","closeOnPopstate","safeAreaInsetBottom"];var V=N({name:H,props:z,emits:["select","cancel","update:show"],setup(c,{slots:a,emit:r}){const i=e=>r("update:show",e),l=()=>{i(!1),r("cancel")},f=()=>{if(c.title)return n("div",{class:t("header")},[c.title,c.closeable&&n(m,{name:c.closeIcon,class:[t("close"),_],onClick:l},null)])},b=()=>{if(a.cancel||c.cancelText)return[n("div",{class:t("gap")},null),n("button",{type:"button",class:t("cancel"),onClick:l},[a.cancel?a.cancel():c.cancelText])]},C=e=>{if(e.icon)return n(m,{class:t("item-icon"),name:e.icon},null)},h=(e,s)=>e.loading?n(K,{class:t("loading-icon")},null):a.action?a.action({action:e,index:s}):[n("span",{class:t("name")},[e.name]),e.subname&&n("div",{class:t("subname")},[e.subname])],k=(e,s)=>{const{color:g,loading:d,callback:u,disabled:p,className:A}=e,I=()=>{p||d||(u&&u(e),c.closeOnClickAction&&i(!1),E(()=>r("select",e,s)))};return n("button",{type:"button",style:{color:g},class:[t("item",{loading:d,disabled:p}),A],onClick:I},[C(e),h(e,s)])},P=()=>{if(c.description||a.description){const e=a.description?a.description():c.description;return n("div",{class:t("description")},[e])}};return()=>n(O,D({class:t(),position:"bottom","onUpdate:show":i},w(c,F)),{default:()=>{var e;return[f(),P(),n("div",{class:t("content")},[c.actions.map(k),(e=a.default)==null?void 0:e.call(a)]),b()]}})}});export{V as s};
