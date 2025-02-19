/**
 * react-cookienotice v7.0.0-beta.4
 * (c) 2020-2025 by xavierbriole
 * Released under the MIT License.
 */
(function(M,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],f):(M=typeof globalThis<"u"?globalThis:M||self,f(M.ReactCookieNotice={},M.require$$0))})(this,function(M,f){"use strict";var he={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function _e(){if(Te)return F;Te=1;var t=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(p,l,b){var v=null;if(b!==void 0&&(v=""+b),l.key!==void 0&&(v=""+l.key),"key"in l){b={};for(var d in l)d!=="key"&&(b[d]=l[d])}else b=l;return l=b.ref,{$$typeof:t,type:p,key:v,ref:l!==void 0?l:null,props:b}}return F.Fragment=r,F.jsx=s,F.jsxs=s,F}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function Re(){return ze||(ze=1,process.env.NODE_ENV!=="production"&&function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case ge:return"Portal";case I:return"Profiler";case ce:return"StrictMode";case $:return"Suspense";case q:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case se:return(e.displayName||"Context")+".Provider";case ae:return(e._context.displayName||"Context")+".Consumer";case K:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return o=e.displayName||null,o!==null?o:t(e.type)||"Memo";case te:o=e._payload,e=e._init;try{return t(e(o))}catch{}}return null}function r(e){return""+e}function s(e){try{r(e);var o=!1}catch{o=!0}if(o){o=console;var n=o.error,a=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n.call(o,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",a),r(e)}}function p(){}function l(){if(B===0){oe=console.log,ue=console.info,fe=console.warn,de=console.error,be=console.group,ve=console.groupCollapsed,me=console.groupEnd;var e={configurable:!0,enumerable:!0,value:p,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}B++}function b(){if(B--,B===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},e,{value:oe}),info:O({},e,{value:ue}),warn:O({},e,{value:fe}),error:O({},e,{value:de}),group:O({},e,{value:be}),groupCollapsed:O({},e,{value:ve}),groupEnd:O({},e,{value:me})})}0>B&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function v(e){if(ne===void 0)try{throw Error()}catch(n){var o=n.stack.trim().match(/\n( *(at )?)/);ne=o&&o[1]||"",L=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+L}function d(e,o){if(!e||Ce)return"";var n=je.get(e);if(n!==void 0)return n;Ce=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var a=null;a=j.H,j.H=null,l();try{var k={DetermineComponentFrameRoot:function(){try{if(o){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(_){var pe=_}Reflect.construct(e,[],P)}else{try{P.call()}catch(_){pe=_}e.call(P.prototype)}}else{try{throw Error()}catch(_){pe=_}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(_){if(_&&pe&&typeof _.stack=="string")return[_.stack,pe.stack]}return[null,null]}};k.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(k.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(k.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=k.DetermineComponentFrameRoot(),N=i[0],G=i[1];if(N&&G){var g=N.split(`
`),U=G.split(`
`);for(i=u=0;u<g.length&&!g[u].includes("DetermineComponentFrameRoot");)u++;for(;i<U.length&&!U[i].includes("DetermineComponentFrameRoot");)i++;if(u===g.length||i===U.length)for(u=g.length-1,i=U.length-1;1<=u&&0<=i&&g[u]!==U[i];)i--;for(;1<=u&&0<=i;u--,i--)if(g[u]!==U[i]){if(u!==1||i!==1)do if(u--,i--,0>i||g[u]!==U[i]){var ie=`
`+g[u].replace(" at new "," at ");return e.displayName&&ie.includes("<anonymous>")&&(ie=ie.replace("<anonymous>",e.displayName)),typeof e=="function"&&je.set(e,ie),ie}while(1<=u&&0<=i);break}}}finally{Ce=!1,j.H=a,b(),Error.prepareStackTrace=n}return g=(g=e?e.displayName||e.name:"")?v(g):"",typeof e=="function"&&je.set(e,g),g}function h(e){if(e==null)return"";if(typeof e=="function"){var o=e.prototype;return d(e,!(!o||!o.isReactComponent))}if(typeof e=="string")return v(e);switch(e){case $:return v("Suspense");case q:return v("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case K:return e=d(e.render,!1),e;case ee:return h(e.type);case te:o=e._payload,e=e._init;try{return h(e(o))}catch{}}return""}function z(){var e=j.A;return e===null?null:e.getOwner()}function E(e){if(S.call(e,"key")){var o=Object.getOwnPropertyDescriptor(e,"key").get;if(o&&o.isReactWarning)return!1}return e.key!==void 0}function y(e,o){function n(){we||(we=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",o))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function Y(){var e=t(this.type);return Se[e]||(Se[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function W(e,o,n,a,k,u){return n=u.ref,e={$$typeof:Q,type:e,key:o,props:u,_owner:k},(n!==void 0?n:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:Y}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function H(e,o,n,a,k,u){if(typeof e=="string"||typeof e=="function"||e===D||e===I||e===ce||e===$||e===q||e===Ae||typeof e=="object"&&e!==null&&(e.$$typeof===te||e.$$typeof===ee||e.$$typeof===se||e.$$typeof===ae||e.$$typeof===K||e.$$typeof===ye||e.getModuleId!==void 0)){var i=o.children;if(i!==void 0)if(a)if(R(i)){for(a=0;a<i.length;a++)A(i[a],e);Object.freeze&&Object.freeze(i)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else A(i,e)}else i="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?a="null":R(e)?a="array":e!==void 0&&e.$$typeof===Q?(a="<"+(t(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,i);if(S.call(o,"key")){i=t(e);var N=Object.keys(o).filter(function(g){return g!=="key"});a=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",Oe[i+a]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,a,i,N,i),Oe[i+a]=!0)}if(i=null,n!==void 0&&(s(n),i=""+n),E(o)&&(s(o.key),i=""+o.key),"key"in o){n={};for(var G in o)G!=="key"&&(n[G]=o[G])}else n=o;return i&&y(n,typeof e=="function"?e.displayName||e.name||"Unknown":e),W(e,i,u,k,z(),n)}function A(e,o){if(typeof e=="object"&&e&&e.$$typeof!==Xe){if(R(e))for(var n=0;n<e.length;n++){var a=e[n];x(a)&&w(a,o)}else if(x(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?n=null:(n=le&&e[le]||e["@@iterator"],n=typeof n=="function"?n:null),typeof n=="function"&&n!==e.entries&&(n=n.call(e),n!==e))for(;!(e=n.next()).done;)x(e.value)&&w(e.value,o)}}function x(e){return typeof e=="object"&&e!==null&&e.$$typeof===Q}function w(e,o){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,o=X(o),!Ne[o])){Ne[o]=!0;var n="";e&&e._owner!=null&&e._owner!==z()&&(n=null,typeof e._owner.tag=="number"?n=t(e._owner.type):typeof e._owner.name=="string"&&(n=e._owner.name),n=" It was passed a child from "+n+".");var a=j.getCurrentStack;j.getCurrentStack=function(){var k=h(e.type);return a&&(k+=a()||""),k},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',o,n),j.getCurrentStack=a}}function X(e){var o="",n=z();return n&&(n=t(n.type))&&(o=`

Check the render method of \``+n+"`."),o||(e=t(e))&&(o=`

Check the top-level render call using <`+e+">."),o}var Z=f,Q=Symbol.for("react.transitional.element"),ge=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),ae=Symbol.for("react.consumer"),se=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),le=Symbol.iterator,Ee=Symbol.for("react.client.reference"),j=Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,S=Object.prototype.hasOwnProperty,O=Object.assign,ye=Symbol.for("react.client.reference"),R=Array.isArray,B=0,oe,ue,fe,de,be,ve,me;p.__reactDisabledLog=!0;var ne,L,Ce=!1,je=new(typeof WeakMap=="function"?WeakMap:Map),Xe=Symbol.for("react.client.reference"),we,Se={},Oe={},Ne={};J.Fragment=D,J.jsx=function(e,o,n,a,k){return H(e,o,n,!1,a,k)},J.jsxs=function(e,o,n,a,k){return H(e,o,n,!0,a,k)}}()),J}process.env.NODE_ENV==="production"?he.exports=_e():he.exports=Re();var c=he.exports;const re=t=>{const{name:r,value:s,expires:p,secure:l,httpOnly:b,sameSite:v}=t,d=new Date;d.setTime(d.getTime()+p*24*60*60*1e3);let h=`${r}=${s};expires=${d.toUTCString()};path=/;`;l&&(h+="Secure;"),b&&(h+="HttpOnly;"),h+=`SameSite=${v};`,document.cookie=h},Le=t=>{const r=document.cookie.match(`(^|;) ?${t}=([^;]*)(;|$)`);return r?decodeURIComponent(r[2]):null},m=t=>{process.env.NODE_ENV==="development"&&console.error(`[react-cookienotice] ${t}`)},C=t=>{if(typeof t=="string")return t},Pe=t=>{if(typeof t=="number"){if(t>=0)return t;m("timeout should be a positive number")}return 1e3},Me=t=>{if(Array.isArray(t)){if(t.length===0&&m("services should have at least one element"),t.every(r=>typeof r=="object"))return t;m("services should contain only objects")}},Ye=t=>{if(typeof t=="string"){if(t.lastIndexOf("http://",0)===0||t.lastIndexOf("https://",0)===0)return t;m('a link should start with "http://" or "https://"')}},We=t=>{if(typeof t=="boolean")return t},Be=t=>typeof t=="object"?((t.vertical!=="top"||t.vertical!=="bottom")&&m('placement.vertical parameter should be "top" or "bottom"'),(t.horizontal!=="left"||t.horizontal!=="right")&&m('placement.horizontal parameter should be "left" or "right"'),t):{vertical:"bottom",horizontal:"left"},Ue=t=>typeof t=="object"?(typeof t.name!="string"&&m("cookieOptions.name parameter should be a string"),typeof t.value!="string"&&m("cookieOptions.value parameter should be a string"),typeof t.expires!="number"&&m("cookieOptions.expires parameter should be a number"),typeof t.secure!="boolean"&&m("cookieOptions.secure parameter should be a boolean"),typeof t.httpOnly!="boolean"&&m("cookieOptions.httpOnly parameter should be a boolean"),(t.sameSite!=="strict"||t.sameSite!=="lax"||t.sameSite!=="none")&&m('cookieOptions.sameSite parameter should be "strict", "lax" or "none"'),/\s/.test(t.name)&&m("cookieOptions.name parameter should not contain whitespace"),t.name===""&&m("cookieOptions.name parameter should have at least one character"),/\s/.test(t.value)&&m("cookieOptions.value parameter should not contain whitespace"),t.value===""&&m("cookieOptions.value parameter should have at least one character"),t.expires<=0&&m("cookieOptions.expires parameter should be more than 0 day"),t):{name:"hide-notice",value:"true",expires:30,secure:!1,httpOnly:!1,sameSite:"lax"},ke={de:{"text.title":"Cookie-Zustimmung","text.description":"Indem Sie auf „Akzeptieren“ klicken, stimmen Sie der Verwendung von Cookies auf unserer Website zu, um Ihnen durch die Speicherung Ihrer Cookie-Einstellungen ein möglichst relevantes Erlebnis zu bieten.","text.customizeTitle":"Anpassen","button.accept":"Akzeptieren","button.acceptAll":"Akzeptiere alle","button.declineAll":"Alles ablehnen","button.customize":"Anpassen","button.back":"Zurück","button.customizeAcceptAll":"Akzeptiere alle","text.alwaysActive":"Immer aktiv"},en:{"text.title":"Cookie consent","text.description":"By clicking Accept, you consent to our website's use of cookies to provide you with the most relevant experience by remembering your cookie preferences.","text.customizeTitle":"Customize","button.accept":"Accept","button.acceptAll":"Accept all","button.declineAll":"Decline all","button.customize":"Customize","button.back":"Back","button.customizeAcceptAll":"Accept all","text.alwaysActive":"Always active"},es:{"text.title":"Consentimiento de cookies","text.description":"Al hacer clic en Aceptar, usted acepta el uso de cookies por parte de nuestro sitio web para brindarle la experiencia más relevante al recordar sus preferencias de cookies.","text.customizeTitle":"Personalizar","button.accept":"Aceptar","button.acceptAll":"Aceptar todo","button.declineAll":"Rechazar todo","button.customize":"Personalizar","button.back":"Atrás","button.customizeAcceptAll":"Aceptar todo","text.alwaysActive":"Siempre activo"},fr:{"text.title":"Consentement aux cookies","text.description":"En cliquant sur Accepter, vous consentez à l'utilisation de cookies par notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant vos préférences en matière de cookies.","text.customizeTitle":"Personnaliser","button.accept":"Accepter","button.acceptAll":"Accepter tout","button.declineAll":"Refuser tout","button.customize":"Personnaliser","button.back":"Retour","button.customizeAcceptAll":"Accepter tout","text.alwaysActive":"Toujours actif"},it:{"text.title":"Consenso ai cookie","text.description":"Facendo clic su Accetta, acconsenti all'utilizzo dei cookie da parte del nostro sito Web per fornirti l'esperienza più pertinente ricordando le tue preferenze sui cookie.","text.customizeTitle":"personalizzare","button.accept":"Accettare","button.acceptAll":"Accettare tutti","button.declineAll":"Rifiuta tutto","button.customize":"personalizzare","button.back":"Indietro","button.customizeAcceptAll":"Accettare tutti","text.alwaysActive":"Sempre attivo"},ko:{"text.title":"쿠키 동의","text.description":"동의를 클릭하면 귀하의 쿠키 기본 설정을 기억함으로써 가장 관련성 높은 경험을 제공하기 위해 당사 웹사이트의 쿠키 사용에 동의하는 것입니다.","text.customizeTitle":"사용자 정의","button.accept":"수용하다","button.acceptAll":"모든것을 받아 들인다","button.declineAll":"모두 거절","button.customize":"사용자 정의","button.back":"뒤쪽에","button.customizeAcceptAll":"모든것을 받아 들인다","text.alwaysActive":"항상 활성"},oc:{"text.title":"Consentiment als cookies","text.description":"En clicant Acceptar, consentètz a l'utilizacion de cookies per nòstre site Web per vos ofrir l'experiéncia mai pertinenta en memorizant vòstras preferéncias a prepaus dels cookies.","text.customizeTitle":"Personalizat","button.accept":"Acceptar","button.acceptAll":"Acceptar tot","button.declineAll":"Declinar tot","button.customize":"Personalizat","button.back":"Precedent","button.customizeAcceptAll":"Acceptar tot","text.alwaysActive":"Totjorn actiu"},zh:{"text.title":"Cookie 同意","text.description":"单击“接受”即表示您同意我们的网站使用 cookie, 通过记住您的 cookie 偏好来为您提供最相关的体验。","text.customizeTitle":"定制","button.accept":"接受","button.acceptAll":"全都接受","button.declineAll":"全部拒绝","button.customize":"定制","button.back":"后退","button.customizeAcceptAll":"全都接受","text.alwaysActive":"始终活跃"}},Ve="en",T=(t,r)=>{if(r!==void 0)return r;const s=navigator.language.split("-")[0],l=Object.keys(ke).includes(s)?s:Ve;return ke[l][t]===void 0?(m(`no message found for id "${t}"`),t):ke[l][t]},V=({onClick:t,children:r})=>c.jsx("button",{className:"react-cookienotice-button",onClick:t,children:r}),xe=({className:t,children:r})=>c.jsx("div",{className:t,children:c.jsx("span",{children:r})}),He=({name:t,description:r,code:s,alwaysActive:p,isChecked:l,onCheckboxChange:b})=>{const[v]=f.useState(!1),d=f.useRef(null);return f.useEffect(()=>{if(d.current instanceof HTMLDivElement){if(v){d.current.style.maxHeight=`${d.current.scrollHeight}px`;return}d.current.style.maxHeight="0"}},[v]),c.jsxs("div",{className:"react-cookienotice-service",style:{display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"},children:[c.jsxs("div",{className:"react-cookienotice-service-checkbox",children:[c.jsx("input",{type:"checkbox",id:s,name:s,checked:p||l,onChange:b,disabled:p}),c.jsx("label",{htmlFor:s,children:s})]}),c.jsxs("div",{className:"react-cookienotice-service-info",children:[t,c.jsx("div",{ref:d,className:"react-cookienotice-service-info-content",children:c.jsx("p",{className:"react-cookienotice-service-info-content-description",children:r})})]})]})},Ie=({customizeTitleLabel:t,services:r,onAcceptButtonClick:s,acceptButtonLabel:p,onBackButtonClick:l,backButtonLabel:b,alwaysActiveLabel:v,customizeAcceptAllButtonLabel:d,onCustomizeAcceptAllButtonClick:h,customizeAcceptAllTimeout:z})=>{const[E,y]=f.useState([]),Y=f.useCallback(A=>{const{name:x}=A.target;if(E.includes(x)){y(E.filter(w=>w!==x));return}y([...E,x])},[E]),W=f.useCallback(()=>{const A=r.filter(({alwaysActive:x})=>x).map(({code:x})=>x);s([...E,...A])},[E,s]),H=f.useCallback(()=>{y(r.map(({code:A})=>A)),setTimeout(()=>{h==null||h(r.map(({code:A})=>A))},z)},[]);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"react-cookienotice-body",children:[c.jsx(xe,{className:"react-cookienotice-title",children:T("text.customizeTitle",t)}),c.jsx("div",{className:"react-cookienotice-services",children:r.map(({name:A,description:x,code:w,alwaysActive:X},Z)=>c.jsx(He,{name:A,description:x,code:w,alwaysActive:X,alwaysActiveLabel:v,isChecked:E.includes(w),onCheckboxChange:Y},Z))})]}),c.jsxs("div",{className:"react-cookienotice-buttons",children:[c.jsx(V,{onClick:l,children:T("button.back",b)}),c.jsx(V,{onClick:H,children:T("button.customizeAcceptAll",d)}),c.jsx(V,{onClick:W,children:T("button.accept",p)})]})]})},Ge=({to:t,newTab:r,label:s})=>t===void 0||r===void 0||s===void 0?null:c.jsx("a",{href:t,target:r?"_blank":"_self",rel:r?"noreferrer":void 0,className:"react-cookienotice-link",children:s}),Fe=({titleLabel:t,descriptionLabel:r,readMoreLink:s,readMoreInNewTab:p,readMoreLabel:l,onAcceptAllButtonClick:b,acceptAllButtonLabel:v,onCustomizeButtonClick:d,customizeButtonLabel:h,onDeclineAllButtonClick:z,declineAllButtonLabel:E,services:y})=>{const Y=f.useCallback(()=>{b(y==null?void 0:y.map(({code:W})=>W))},[]);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"react-cookienotice-body",children:[c.jsx(xe,{className:"react-cookienotice-title",children:T("text.title",t)}),c.jsx(xe,{className:"react-cookienotice-description",children:T("text.description",r)}),c.jsx(Ge,{to:s,newTab:p,label:l})]}),c.jsxs("div",{className:"react-cookienotice-buttons",children:[c.jsx(V,{onClick:z,children:T("button.declineAll",E)}),y&&y.length>0&&c.jsx(V,{onClick:d,children:T("button.customize",h)}),c.jsx(V,{onClick:Y,children:T("button.acceptAll",v)})]})]})},Je=({acceptAllButtonLabel:t,onAcceptAllButtonClick:r,declineAllButtonLabel:s,onDeclineAllButtonClick:p,customizeButtonLabel:l,customizeTitleLabel:b,services:v,acceptButtonLabel:d,onAcceptButtonClick:h,backButtonLabel:z,alwaysActiveLabel:E,customizeAcceptAllButtonLabel:y,customizeAcceptAllTimeout:Y,titleLabel:W,descriptionLabel:H,readMoreLabel:A,readMoreLink:x,readMoreInNewTab:w,placement:X,cookieOptions:Z})=>{const Q=C(t),ge=C(s),D=C(l),ce=C(b),I=Me(v),ae=C(d),se=C(z),K=C(E),$=C(y),q=Pe(Y),ee=C(W),te=C(H),Ae=C(A),le=Ye(x),Ee=We(w),j=Be(X),S=Ue(Z),O=f.useMemo(()=>Le(S.name)===S.value,[]),[ye,R]=f.useState(!1),[B,oe]=f.useState(!1),ue=f.useCallback(L=>{R(!0),re(S),h==null||h(L)},[]),fe=f.useCallback(()=>{oe(!1)},[]),de=f.useCallback(L=>{R(!0),re(S),r==null||r(L)},[]),be=f.useCallback(()=>{oe(!0)},[]),ve=f.useCallback(()=>{R(!0),re(S),p==null||p()},[]),me=f.useCallback(L=>{R(!0),re(S),r==null||r(L)},[]),ne=()=>B&&I?c.jsx(Ie,{customizeTitleLabel:ce,services:I,onAcceptButtonClick:ue,acceptButtonLabel:ae,onBackButtonClick:fe,backButtonLabel:se,alwaysActiveLabel:K,customizeAcceptAllButtonLabel:$,onCustomizeAcceptAllButtonClick:me,customizeAcceptAllTimeout:q}):c.jsx(Fe,{titleLabel:ee,descriptionLabel:te,readMoreLink:le,readMoreInNewTab:Ee,readMoreLabel:Ae,onAcceptAllButtonClick:de,acceptAllButtonLabel:Q,onCustomizeButtonClick:be,customizeButtonLabel:D,onDeclineAllButtonClick:ve,declineAllButtonLabel:ge,services:I});return c.jsx("div",{className:`react-cookienotice-root${ye?" hide-with-animation":""}${O?" hidden":""} ${j.vertical} ${j.horizontal}`,children:ne()})};M.CookieNotice=Je,Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});
