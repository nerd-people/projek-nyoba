import{w as fe,K as Be,M as Ne,N as $e,O as De,b as Fe,f as ge,g as X,o as A,p as Oe,e as G,P as ze,Q as qe,R as We,h as le,E as me,S as Ue,D as je,J as M,T as oe,U as Ke,V as U,I as K,W as He,t as Je,X as re,L as Ye,a as Qe,A as Xe,n as Ge,v as Ze}from"./CPIMTh_-.js";import{s as he,c as et}from"./GW7g2uS9.js";import{u as ve}from"./BUTK-O5U.js";import{d as be,r as tt,a as S,c as T,p as nt,w as at,n as W,k as lt,z as d,B as ye,Y as ot,J as w,M as rt,L as H,u as P,P as ie,a1 as J,I as _,q as it,F as Y,a0 as se,O as ce}from"./CS_v0reC.js";import{s as st}from"./DydMEu4S.js";import{s as ct}from"./CVvMKoCI.js";import{u as ut,w as dt,d as ft,c as gt}from"./CUgsq2x-.js";import{s as mt}from"./BOZaj71m.js";import{_ as ht}from"./DlAUqK2U.js";const vt=fe(he);function ke(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function bt(e,n){if(ke(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function yt(e,n){return new Promise(l=>{const c=n.validator(e,n);if($e(c)){c.then(l);return}l(c)})}function ue(e,n){const{message:l}=n;return De(l)?l(e,n):l||""}function kt({target:e}){e.composing=!0}function de({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function _t(e,n){const l=Be();e.style.height="auto";let c=e.scrollHeight;if(Fe(n)){const{maxHeight:a,minHeight:s}=n;a!==void 0&&(c=Math.min(c,a)),s!==void 0&&(c=Math.max(c,s))}c&&(e.style.height=`${c}px`,Ne(l))}function It(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function C(e){return[...e].length}function Q(e,n){return[...e].slice(0,n).join("")}const[Ct,b]=ge("field"),Z={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:X,formatter:Function,clearIcon:A("clear"),modelValue:Oe(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:A("focus"),formatTrigger:A("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},St=G({},et,Z,{rows:X,type:A("text"),rules:Array,autosize:[Boolean,Object],labelWidth:X,labelClass:ze,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Vt=be({name:Ct,props:St,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:l}){const c=ve(),a=tt({status:"unvalidated",focused:!1,validateMessage:""}),s=S(),x=S(),p=S(),{parent:m}=qe(We),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},u=t=>{if(M(e[t]))return e[t];if(m&&M(m.props[t]))return m.props[t]},B=T(()=>{const t=u("readonly");if(e.clearable&&!t){const o=h()!=="",r=e.clearTrigger==="always"||e.clearTrigger==="focus"&&a.focused;return o&&r}return!1}),E=T(()=>p.value&&l.input?p.value():e.modelValue),N=T(()=>{var t;const o=u("required");return o==="auto"?(t=e.rules)==null?void 0:t.some(r=>r.required):o}),$=t=>t.reduce((o,r)=>o.then(()=>{if(a.status==="failed")return;let{value:f}=E;if(r.formatter&&(f=r.formatter(f,r)),!bt(f,r)){a.status="failed",a.validateMessage=ue(f,r);return}if(r.validator)return ke(f)&&r.validateEmpty===!1?void 0:yt(f,r).then(g=>{g&&typeof g=="string"?(a.status="failed",a.validateMessage=g):g===!1&&(a.status="failed",a.validateMessage=ue(f,r))})}),Promise.resolve()),V=()=>{a.status="unvalidated",a.validateMessage=""},k=()=>n("endValidate",{status:a.status,message:a.validateMessage}),I=(t=e.rules)=>new Promise(o=>{V(),t?(n("startValidate"),$(t).then(()=>{a.status==="failed"?(o({name:e.name,message:a.validateMessage}),k()):(a.status="passed",o(),k())})):o()}),D=t=>{if(m&&e.rules){const{validateTrigger:o}=m.props,r=oe(o).includes(t),f=e.rules.filter(g=>g.trigger?oe(g.trigger).includes(t):r);f.length&&I(f)}},j=t=>{var o;const{maxlength:r}=e;if(M(r)&&C(t)>+r){const f=h();if(f&&C(f)===+r)return f;const g=(o=s.value)==null?void 0:o.selectionEnd;if(a.focused&&g){const v=[...t],y=v.length-+r;return v.splice(g-y,y),v.join("")}return Q(t,+r)}return t},R=(t,o="onChange")=>{const r=t;t=j(t);const f=C(r)-C(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";t=Ke(t,v,v)}let g=0;if(e.formatter&&o===e.formatTrigger){const{formatter:v,maxlength:y}=e;if(t=v(t),M(y)&&C(t)>+y&&(t=Q(t,+y)),s.value&&a.focused){const{selectionEnd:q}=s.value,ae=Q(r,q);g=C(v(ae))-C(ae)}}if(s.value&&s.value.value!==t)if(a.focused){let{selectionStart:v,selectionEnd:y}=s.value;if(s.value.value=t,M(v)&&M(y)){const q=C(t);f?(v-=f,y-=f):g&&(v+=g,y+=g),s.value.setSelectionRange(Math.min(v,q),Math.min(y,q))}}else s.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},i=t=>{t.target.composing||R(t.target.value)},L=()=>{var t;return(t=s.value)==null?void 0:t.blur()},O=()=>{var t;return(t=s.value)==null?void 0:t.focus()},z=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&_t(t,e.autosize)},_e=t=>{a.focused=!0,n("focus",t),W(z),u("readonly")&&L()},Ie=t=>{a.focused=!1,R(h(),"onBlur"),n("blur",t),!u("readonly")&&(D("onBlur"),W(z),He())},ee=t=>n("clickInput",t),Ce=t=>n("clickLeftIcon",t),Se=t=>n("clickRightIcon",t),Ve=t=>{U(t),n("update:modelValue",""),n("clear",t)},te=T(()=>{if(typeof e.error=="boolean")return e.error;if(m&&m.props.showError&&a.status==="failed")return!0}),we=T(()=>{const t=u("labelWidth"),o=u("labelAlign");if(t&&o!=="top")return{width:le(t)}}),xe=t=>{t.keyCode===13&&(!(m&&m.props.submitOnEnter)&&e.type!=="textarea"&&U(t),e.type==="search"&&L()),n("keypress",t)},ne=()=>e.id||`${c}-input`,pe=()=>a.status,Ee=()=>{const t=b("control",[u("inputAlign"),{error:te.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return d("div",{class:t,onClick:ee},[l.input()]);const o={id:ne(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:u("disabled"),readonly:u("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${c}-label`:void 0,onBlur:Ie,onFocus:_e,onInput:i,onClick:ee,onChange:de,onKeypress:xe,onCompositionend:de,onCompositionstart:kt};return e.type==="textarea"?d("textarea",o,null):d("input",ye(It(e.type),o),null)},Re=()=>{const t=l["left-icon"];if(e.leftIcon||t)return d("div",{class:b("left-icon"),onClick:Ce},[t?t():d(K,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},Le=()=>{const t=l["right-icon"];if(e.rightIcon||t)return d("div",{class:b("right-icon"),onClick:Se},[t?t():d(K,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Me=()=>{if(e.showWordLimit&&e.maxlength){const t=C(h());return d("div",{class:b("word-limit")},[d("span",{class:b("word-num")},[t]),ot("/"),e.maxlength])}},Te=()=>{if(m&&m.props.showErrorMessage===!1)return;const t=e.errorMessage||a.validateMessage;if(t){const o=l["error-message"],r=u("errorMessageAlign");return d("div",{class:b("error-message",r)},[o?o({message:t}):t])}},Pe=()=>{const t=u("labelWidth"),o=u("labelAlign"),r=u("colon")?":":"";if(l.label)return[l.label(),r];if(e.label)return d("label",{id:`${c}-label`,for:l.input?void 0:ne(),onClick:f=>{U(f),O()},style:o==="top"&&t?{width:le(t)}:void 0},[e.label+r])},Ae=()=>[d("div",{class:b("body")},[Ee(),B.value&&d(K,{ref:x,name:e.clearIcon,class:b("clear")},null),Le(),l.button&&d("div",{class:b("button")},[l.button()])]),Me(),Te()];return me({blur:L,focus:O,validate:I,formValue:E,resetValidation:V,getValidationStatus:pe}),nt(Ue,{customValue:p,resetValidation:V,validateWithTrigger:D}),at(()=>e.modelValue,()=>{R(h()),V(),D("onChange"),W(z)}),lt(()=>{R(h(),e.formatTrigger),W(z)}),je("touchstart",Ve,{target:T(()=>{var t;return(t=x.value)==null?void 0:t.$el})}),()=>{const t=u("disabled"),o=u("labelAlign"),r=Re(),f=()=>{const g=Pe();return o==="top"?[r,g].filter(Boolean):g||[]};return d(vt,{size:e.size,class:b({error:te.value,disabled:t,[`label-${o}`]:o}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:we.value,valueClass:b("value"),titleClass:[b("label",[o,{required:N.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:r&&o!=="top"?()=>r:null,title:f,value:Ae,extra:l.extra})}}});const wt=fe(Vt),[xt,F,pt]=ge("search"),Et=G({},Z,{label:String,shape:A("square"),leftIcon:A("search"),clearable:Je,actionText:String,background:String,showAction:Boolean});var Rt=be({name:xt,props:Et,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:l,attrs:c}){const a=ve(),s=S(),x=()=>{l.action||(n("update:modelValue",""),n("cancel"))},p=i=>{i.keyCode===13&&(U(i),n("search",e.modelValue))},m=()=>e.id||`${a}-input`,h=()=>{if(l.label||e.label)return d("label",{class:F("label"),for:m()},[l.label?l.label():e.label])},u=()=>{if(e.showAction){const i=e.actionText||pt("cancel");return d("div",{class:F("action"),role:"button",tabindex:0,onClick:x},[l.action?l.action():i])}},B=()=>{var i;return(i=s.value)==null?void 0:i.blur()},E=()=>{var i;return(i=s.value)==null?void 0:i.focus()},N=i=>n("blur",i),$=i=>n("focus",i),V=i=>n("clear",i),k=i=>n("clickInput",i),I=i=>n("clickLeftIcon",i),D=i=>n("clickRightIcon",i),j=Object.keys(Z),R=()=>{const i=G({},c,re(e,j),{id:m()}),L=O=>n("update:modelValue",O);return d(wt,ye({ref:s,type:"search",class:F("field",{"with-message":i.errorMessage}),border:!1,onBlur:N,onFocus:$,onClear:V,onKeypress:p,onClickInput:k,onClickLeftIcon:I,onClickRightIcon:D,"onUpdate:modelValue":L},i),re(l,["left-icon","right-icon"]))};return me({focus:E,blur:B}),()=>{var i;return d("div",{class:F({"show-action":e.showAction}),style:{background:e.background}},[(i=l.left)==null?void 0:i.call(l),d("div",{class:F("content",e.shape)},[h(),R()]),u()])}}});const Lt={style:{"padding-bottom":"80px !important"}},Mt={key:0,style:{"text-align":"center","margin-top":"20px"}},Tt={key:1},Pt={key:0,class:"color-scheme-magenta fw-bold"},At={key:1},Bt={__name:"search",setup(e){Ye.use("en-US",mt);const n=Qe();ut({selector:"html",attribute:"class",valueDark:"van-theme-dark",valueLight:"van-theme-light"});const l=S(),c=S(""),a=S([]),s=S(!1),x=S(!1);dt(c,async h=>{if(h.trim()!==""){s.value=!0;const{data:u}=await $fetch(`${Xe}/search/suggestion/`+h.trim().replace("/",""),{lazy:!0});u?(a.value=u,s.value=!1):(a.value=[],s.value=!1)}else a.value=[],s.value=!1;a.value.items===null&&c.value.trim()!==""?x.value=!0:x.value=!1},{eventFilter:ft(200)});const p=()=>{gt(l,{initialValue:!0}),c.value="",a.value=[]},m=()=>(c.value.trim()!==""&&n.push("/search-result?q="+encodeURIComponent(c.value.trim().replace("/",""))),!1);return(h,u)=>{const B=Rt,E=st,N=Ze,$=he,V=ct;return _(),w("div",null,[rt("div",Lt,[d(E,null,{default:H(()=>[d(B,{ref_key:"input",ref:l,modelValue:P(c),"onUpdate:modelValue":u[0]||(u[0]=k=>it(c)?c.value=k:null),"show-action":"",placeholder:"Search anime",onSearch:m,onClear:p,onCancel:u[1]||(u[1]=k=>("navBacks"in h?h.navBacks:P(Ge))(P(n))),clearable:"",autofocus:""},null,8,["modelValue"])]),_:1}),P(s)?(_(),w("div",Mt,[d(N,{type:"spinner",size:"24px"})])):(_(),w("div",Tt,[P(a).items?(_(),ie(V,{key:0},{default:H(()=>[(_(!0),w(Y,null,se(P(a).items,k=>(_(),ie($,{icon:"search",to:"/search-result?q="+encodeURIComponent(k.keyword)},{title:H(()=>[(_(!0),w(Y,null,se(k.match,I=>(_(),w(Y,null,[I.match===!0?(_(),w("span",Pt,ce(I.str),1)):J("",!0),I.match===!1?(_(),w("span",At,ce(I.str),1)):J("",!0)],64))),256))]),_:2},1032,["to"]))),256))]),_:1})):J("",!0)]))])])}}},jt=ht(Bt,[["__scopeId","data-v-1b237ae3"]]);export{jt as default};