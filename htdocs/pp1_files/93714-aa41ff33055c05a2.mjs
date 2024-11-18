"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[93714],{442279:(e,t)=>{function r(e,t){return e===t}t.P1=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var l=0,i=n.pop(),c=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(e){return"function"==typeof e}))throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t.map(function(e){return typeof e}).join(", ")+"]");return t}(n),a=e.apply(void 0,[function(){return l++,i.apply(void 0,arguments)}].concat(r)),u=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];var l=c.map(function(r){return r.apply(void 0,[e,t].concat(n))});return a.apply(void 0,function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}(l))};return u.resultFunc=i,u.recomputations=function(){return l},u.resetRecomputations=function(){return l=0},u}}(function(e){var t=arguments.length<=1||void 0===arguments[1]?r:arguments[1],n=null,o=null;return function(){for(var r=arguments.length,l=Array(r),i=0;i<r;i++)l[i]=arguments[i];return null!==n&&n.length===l.length&&l.every(function(e,r){return t(e,n[r])})||(o=e.apply(void 0,l)),n=l,o}})},179370:(e,t,r)=>{r.d(t,{F:()=>d,M:()=>p});var n=r(667294),o=r(702664),l=r(14890),i=r(342513),c=r(25919),a=r(957753),u=r(785893);let{Provider:s,useHook:p}=(0,i.Z)("ExperienceContext");function d({children:e}){let[t,r]=(0,n.useReducer)((e,t)=>{if("MOUNT_PLACEMENT"===t.type)return{...e,mountedPlacements:{...e.mountedPlacements,[t.payload]:!0}};if("UNMOUNT_PLACEMENT"===t.type){let r={...e};return delete r.mountedPlacements[t.payload],delete r.registerdAfterActionPlacements[t.payload],r}return"REGISTER_AFTER_ACTION_PLACEMENT"===t.type?{...e,registerdAfterActionPlacements:{...e.registerdAfterActionPlacements,[t.payload]:!0}}:e},{mountedPlacements:{},registerdAfterActionPlacements:{}}),{mountedPlacements:i,registerdAfterActionPlacements:p}=t,d=(0,o.useDispatch)(),f=(0,o.useSelector)(e=>e.experiences),m=(0,c.be)(),y=(0,c.Am)(),E=(0,c.Ig)(),_=(0,n.useMemo)(()=>{let e=(0,l.bindActionCreators)({completeExperience:m,dismissExperience:y,fetchAllExperiences:c.fO,fetchAllExperiencesMulti:a.NW,fetchExperienceForPlacements:c.pz,mountPlacement:c.N,triggerExperimentsForPlacement:c.kd,viewExperience:E},d);return{...e,mountPlacement:(t,...n)=>{e.mountPlacement(t,...n),r({type:"MOUNT_PLACEMENT",payload:t})},unmountPlacement:e=>{r({type:"UNMOUNT_PLACEMENT",payload:e})},registerAfterActionPlacement:e=>{r({type:"REGISTER_AFTER_ACTION_PLACEMENT",payload:e})}}},[m,y,d,r,E]),v=(0,n.useMemo)(()=>({experiences:f,mountedPlacements:i,registerdAfterActionPlacements:p,..._}),[f,i,p,_]);return(0,u.jsx)(s,{value:v,children:e})}},25919:(e,t,r)=>{let n;r.d(t,{Am:()=>_,Ig:()=>y,N:()=>x,Sd:()=>v,YX:()=>b,be:()=>E,fO:()=>d,kd:()=>g,pz:()=>f});var o=r(667294),l=r(216167),i=r(587703),c=r(703404),a=r(957753),u=r(107366),s=r(953565);let p=(e,t,r={})=>(0,s.nP)(`${e}.${t}`,{sampleRate:1,tags:r}),d=(e,t)=>r=>{let n=t?{extra_context:e,targeting:t}:{extra_context:e};return l.Z.create("UserExperiencePlatformResource",n).callGet().then(e=>e.resource_response?r((0,a.OD)(e.resource_response.data)):void 0)},f=(e,t,r,o)=>(i,u)=>{if(t)return Promise.resolve();if(o&&(n=o),1===e.length){let t=e[0],n=u().experiences,o=n[t],l=o?.extraContext||null;if(JSON.stringify(l)===JSON.stringify(r)||(0,c.E3)(o)&&!(r&&Object.keys(r).length>0))return Promise.resolve()}return l.Z.create("UserExperienceResource",{placement_ids:e,extra_context:r||null,targeting:o}).callGet().then(e=>e.resource_response?i((0,a.cL)(e.resource_response.data)):void 0)},m=(e,t,r,o)=>(i,c,u,s=!1,p,f)=>(m,y)=>{let{experiences:E,experiencesMulti:_}=y(),v=null,g=!0;if(s||(v=(g=E[i]&&E[i].experience_id===c)?E[i]:Array.isArray(_[i])&&_[i]?.find(e=>e.experience_id===c)),v&&v.experience_id===c||s&&i&&c){let s=l.Z.create(e,{placed_experience_id:`${i}%3A${c}`,extra_context:p??{},targeting:f}),y=g?a.Yb:a.xW;switch(t){case"dismissed":return s.callDelete().then(()=>{m(y(i,c,t)),m(d(void 0,n)),r&&o&&r({event_type:o,object_id_str:c.toString()})});case"completed":return s.callUpdate().then(()=>{!u&&(m(y(i,c,t)),m(d(void 0,n)),r&&o&&r({event_type:o,object_id_str:c.toString()}))});case"viewed":return m(y(i,c,t)),s.callUpdate().then(()=>{1000162===i&&m(d()),r&&o&&r({event_type:o,object_id_str:c.toString()})});case"completedWithoutHomefeed":return s.callUpdate().then(()=>{u||m(y(i,c,t)),r&&o&&r({event_type:o,object_id_str:c.toString()})})}}return Promise.resolve()},y=()=>{let e=(0,i.Z)(),t=(0,o.useCallback)(m("UserExperienceViewedResource","viewed",e,4503),[e]);return t},E=()=>{let e=(0,i.Z)(),t=(0,o.useCallback)(m("UserExperienceCompletedResource","completed",e,6567),[e]);return t},_=()=>{let e=(0,i.Z)(),t=(0,o.useCallback)(m("UserExperienceResource","dismissed",e,6568),[e]);return t},v=()=>{let e=(0,i.Z)(),t=(0,o.useCallback)(m("UserExperienceCompletedResource","completedWithoutHomefeed",e,6567),[e]);return t},g=(e,t)=>(r,n)=>{let{experiences:o}=n(),l=o[e];l&&l.triggerable_placed_exps&&l.triggerable_placed_exps.length&&l.triggerable_placed_exps.forEach(r=>{let[,n]=r.split(":"),o=t;l.metadata&&l.metadata[n]&&(o={...t,...l.metadata[n]}),(0,u.Z)({url:`/v3/experiences/${r.replace(":","%3A")}/trigger/`,method:"PUT",data:o?{extra_context:JSON.stringify(o,null,1)}:{}}).then(()=>{p("experienceservice","experimentTriggerCall.1",{placement_id:e,experience_id:n})})})},b=e=>(t,r)=>{t(g(e));let{experiences:n}=r();return n[e]},x=(e,t,r)=>o=>{r&&(n=r),o(g(e,t)),t&&Object.keys(t).length>0&&o(f([e],!1,t,r))}},703404:(e,t,r)=>{r.d(t,{A0:()=>a,E3:()=>i,MQ:()=>c,fL:()=>u});var n=r(883119),o=r(862249),l=r(785893);function i(e){return!!e&&0!==e.type}let c=(e,t,r)=>{let n=e[r];return t[r]&&i(n)?n:null};function a(e){return e.display_data?.anchor}let u=e=>{let t=new DOMParser,r=t.parseFromString(e,"text/html"),i=[...r.body?.childNodes||[]].map(e=>{if("A"!==e.nodeName)return(0,l.jsx)(n.xv,{inline:!0,children:e.textContent});{let t=e.href||"",r=(0,o.Z)({url:t});return(0,l.jsx)(n.rU,{display:"inline",externalLinkIcon:r?"default":"none",href:t,rel:r?"nofollow":"none",target:"blank",children:e.textContent})}});return(0,l.jsx)(n.xv,{inline:!0,children:i})}},26616:(e,t,r)=>{r.d(t,{$S:()=>n,V$:()=>o,_4:()=>i,iY:()=>c,mR:()=>l});let n="REFRESH_ALL_EXPERIENCES_MULTI",o="UPDATE_EXPERIENCE_MULTI",l="FETCH_EXPERIENCES",i="REFRESH_ALL_EXPERIENCES",c="UPDATE_EXPERIENCE"},957753:(e,t,r)=>{r.d(t,{NW:()=>c,OD:()=>u,Yb:()=>a,cL:()=>s,xW:()=>i});var n=r(216167),o=r(26616);let l=e=>({type:o.$S,payload:{experiencesMulti:e}}),i=(e,t,r)=>({type:o.V$,payload:{placementId:e,experienceId:t,status:r}}),c=e=>t=>n.Z.create("UserExperiencePlatformResource",{extra_context:e,multiExperiencePlatform:!0}).callGet().then(e=>e.resource_response?t(l(e.resource_response.data)):void 0),a=(e,t,r)=>({type:o.iY,payload:{placementId:e,experienceId:t,status:r}}),u=e=>({type:o._4,payload:{experiences:e}}),s=e=>({type:o.mR,payload:{experiences:e}})},172203:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(667294),o=r(702664),l=r(442279),i=r(179370),c=r(5859),a=r(953565);let u=(0,l.P1)(e=>e.experiences,(e,t)=>t,(e,t)=>e[t]),s=(e,t,r={})=>(0,a.nP)(`${e}.${t}`,{sampleRate:1,tags:r}),p=(e,t)=>"function"==typeof t?t(e):t,d=(e,t={},r=!1)=>{let[l,a]=(0,n.useReducer)(p,t),{isBot:d}=(0,c.B)(),{fetchExperienceForPlacements:f,mountPlacement:m,triggerExperimentsForPlacement:y,unmountPlacement:E}=(0,i.M)();(0,n.useDebugValue)(`Placement Hook ID - ${e}`),(0,n.useEffect)(()=>{let t={...l},n=r&&t?.advertiser_id?{advertiserId:t.advertiser_id}:void 0;return m(e,t,n),()=>{E(e)}},[]),(0,n.useEffect)(()=>{Object.keys(l).length>0&&f([e],d,l)},[l]);let _=(0,o.useSelector)(t=>u(t,e)),v=(0,o.useSelector)(t=>t.experiencesMulti[e]),g=_?_.triggerable_placed_exps:[];return(0,n.useEffect)(()=>{let t={platform:"web",placement_id:e,...g};s("experienceservice","placementHookExperimentTrigger.1",t),y(e,l)},[JSON.stringify(g)]),{experience:_,experiencesMulti:v,setExtraContext:a}}},140017:(e,t,r)=>{r.d(t,{ZP:()=>c,oz:()=>l,q6:()=>o});var n=r(342513);let{Provider:o,Consumer:l,useHook:i}=(0,n.Z)("i18n"),c=i},862249:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(968946);let o=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,n.Z)(e))},261328:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){!function(e,t,r){var o;o=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(o)?o:o+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{Z:()=>l})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/93714-aa41ff33055c05a2.mjs.map