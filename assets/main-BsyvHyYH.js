import{k as W,r as y,c as we,j as c,d as ml,a as yr,l as ss,H as pl,e as fl,f as yt,i as vl}from"./clsx-BDnjZXfp.js";function Qe(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}function Cr(t,e,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(d){try{u(n.next(d))}catch(h){s(h)}}function l(d){try{u(n.throw(d))}catch(h){s(h)}}function u(d){d.done?i(d.value):o(d.value).then(a,l)}u((n=n.apply(t,e||[])).next())})}function xe(t,e){e===void 0&&(e={});var r=e.insertAt;if(t&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",r==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}function as(...t){return(...e)=>{for(let r of t)typeof r=="function"&&r(...e)}}const Ze=typeof document<"u"?W.useLayoutEffect:()=>{};function pe(t){const e=y.useRef(null);return Ze((()=>{e.current=t}),[t]),y.useCallback(((...r)=>{const n=e.current;return n?.(...r)}),[])}function gl(t){let[e,r]=y.useState(t),n=y.useRef(null),o=pe((()=>{if(!n.current)return;let s=n.current.next();s.done?n.current=null:e===s.value?o():r(s.value)}));Ze((()=>{n.current&&o()}));let i=pe((s=>{n.current=s(e),o()}));return[e,i]}const rn={prefix:String(Math.round(1e10*Math.random())),current:0},xo=W.createContext(rn),xl=W.createContext(!1);let yl=!!(typeof window<"u"&&window.document&&window.document.createElement),Nr=new WeakMap;const bl=typeof W.useId=="function"?function(t){let e=W.useId(),[r]=y.useState(jl()),n=r?"react-aria":`react-aria${rn.prefix}`;return t||`${n}-${e}`}:function(t){let e=y.useContext(xo);e!==rn||yl||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=(function(o=!1){let i=y.useContext(xo),s=y.useRef(null);if(s.current===null&&!o){var a,l;let u=(l=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||l===void 0||(a=l.ReactCurrentOwner)===null||a===void 0?void 0:a.current;if(u){let d=Nr.get(u);d==null?Nr.set(u,{id:i.current,state:u.memoizedState}):u.memoizedState!==d.state&&(i.current=d.id,Nr.delete(u))}s.current=++i.current}return s.current})(!!t),n=`react-aria${e.prefix}`;return t||`${n}-${r}`};function _l(){return!1}function wl(){return!0}function $l(t){return()=>{}}function jl(){return typeof W.useSyncExternalStore=="function"?W.useSyncExternalStore($l,_l,wl):y.useContext(xl)}let Pt,Pl=!!(typeof window<"u"&&window.document&&window.document.createElement),dt=new Map;function ht(t){let[e,r]=y.useState(t),n=y.useRef(null),o=bl(e),i=y.useRef(null);if(Pt&&Pt.register(i,o),Pl){const s=dt.get(o);s&&!s.includes(n)?s.push(n):dt.set(o,[n])}return Ze((()=>{let s=o;return()=>{Pt&&Pt.unregister(i),dt.delete(s)}}),[o]),y.useEffect((()=>{let s=n.current;return s&&r(s),()=>{s&&(n.current=null)}})),o}function Tl(t,e){if(t===e)return t;let r=dt.get(t);if(r)return r.forEach((o=>o.current=e)),e;let n=dt.get(e);return n?(n.forEach((o=>o.current=t)),t):e}function yo(t=[]){let e=ht(),[r,n]=gl(e),o=y.useCallback((()=>{n((function*(){yield e,yield document.getElementById(e)?e:void 0}))}),[e,n]);return Ze(o,[e,o,...t]),r}typeof FinalizationRegistry<"u"&&(Pt=new FinalizationRegistry((t=>{dt.delete(t)})));function ce(...t){let e={...t[0]};for(let r=1;r<t.length;r++){let n=t[r];for(let o in n){let i=e[o],s=n[o];typeof i=="function"&&typeof s=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?e[o]=as(i,s):o!=="className"&&o!=="UNSAFE_className"||typeof i!="string"||typeof s!="string"?o==="id"&&i&&s?e.id=Tl(i,s):e[o]=s!==void 0?s:i:e[o]=we(i,s)}}return e}function El(...t){return t.length===1&&t[0]?t[0]:e=>{for(let r of t)typeof r=="function"?r(e):r!=null&&(r.current=e)}}function ls(t){const e=y.useRef(null);return y.useMemo((()=>({get current(){return e.current},set current(r){e.current=r,typeof t=="function"?t(r):t&&(t.current=r)}})),[t])}const Sl=Symbol("default");function kl(t){let{className:e,style:r,children:n,defaultClassName:o,defaultChildren:i,defaultStyle:s,values:a}=t;return y.useMemo((()=>{let l,u,d;return l=typeof e=="function"?e({...a,defaultClassName:o}):e,u=typeof r=="function"?r({...a,defaultStyle:s||{}}):r,d=typeof n=="function"?n({...a,defaultChildren:i}):n??i,{className:l??o,style:u||s?{...s,...u}:void 0,children:d??i,"data-rac":""}}),[e,r,n,o,i,s,a])}function Cl(t,e){let r=y.useContext(t);if(e===null)return null;if(r&&typeof r=="object"&&"slots"in r&&r.slots){let n=e||Sl;if(!r.slots[n]){let o=new Intl.ListFormat().format(Object.keys(r.slots).map((i=>`"${i}"`)));throw new Error(`${e?`Invalid slot "${e}".`:"A slot prop is required."} Valid slot names are ${o}.`)}return r.slots[n]}return r}function Nl(t,e,r){let n=Cl(r,t.slot)||{},{ref:o,...i}=n,s=ls(y.useMemo((()=>El(e,o)),[e,o])),a=ce(i,t);return"style"in i&&i.style&&"style"in t&&t.style&&(typeof i.style=="function"||typeof t.style=="function"?a.style=l=>{let u=typeof i.style=="function"?i.style(l):i.style,d={...l.defaultStyle,...u},h=typeof t.style=="function"?t.style({...l,defaultStyle:d}):t.style;return{...d,...h}}:a.style={...i.style,...t.style}),[a,s]}var bo={shadow:"elevation-module_shadow__Vsh7b",disabled:"elevation-module_disabled__La41s"};xe(`.elevation-module_shadow__Vsh7b {\r
  border-radius: inherit;\r
  inset: 0px;\r
  position: absolute;\r
  transition-duration: inherit;\r
  transition-property: inherit;\r
  transition-timing-function: inherit;\r
  --md-elevation-level: var(--_container-elevation);\r
  --md-elevation-shadow-color: var(--_container-shadow-color);\r
  transition-duration: 280ms;\r
  display: flex;\r
  pointer-events: none;\r
  &:before,\r
  &:after {\r
    border-radius: inherit;\r
    inset: 0px;\r
    position: absolute;\r
    transition-duration: inherit;\r
    transition-property: inherit;\r
    transition-timing-function: inherit;\r
    content: '';\r
    transition-property: box-shadow, opacity;\r
    --_level: var(--md-elevation-level, 0);\r
    --_shadow-color: var(\r
      --md-elevation-shadow-color,\r
      var(--md-sys-color-shadow, #000)\r
    );\r
  }\r
  &:before {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 3, 1) + 2 *\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (\r
            2 * clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 2, 1) +\r
              clamp(0, var(--_level) - 4, 1)\r
          )\r
      )\r
      0px var(--_shadow-color);\r
    opacity: 0.3;\r
  }\r
  &:after {\r
    box-shadow: 0px\r
      calc(\r
        1px *\r
          (\r
            clamp(0, var(--_level), 1) + clamp(0, var(--_level) - 1, 1) + 2 *\r
              clamp(0, var(--_level) - 2, 3)\r
          )\r
      )\r
      calc(\r
        1px *\r
          (3 * clamp(0, var(--_level), 2) + 2 * clamp(0, var(--_level) - 2, 3))\r
      )\r
      calc(\r
        1px * (clamp(0, var(--_level), 4) + 2 * clamp(0, var(--_level) - 4, 1))\r
      )\r
      var(--_shadow-color);\r
    opacity: 0.15;\r
  }\r
}\r
\r
.elevation-module_disabled__La41s .elevation-module_shadow__Vsh7b {\r
  transition: none 0s ease 0s;\r
  --md-elevation-level: var(--_disabled-container-elevation);\r
}\r
`);const Nn=t=>{var{disabled:e=!1}=t,r=Qe(t,["disabled"]);const n=we(bo.shadow,e&&bo.disabled);return c.jsx("span",Object.assign({},r,{"aria-hidden":"true",className:n}))};Nn.displayName="Actify.Elevation";const cs=y.createContext({});function Ml(t){const e=y.useRef(null);return e.current===null&&(e.current=t()),e.current}const Mn=typeof window<"u",Al=Mn?y.useLayoutEffect:y.useEffect,An=y.createContext(null),ds=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Dl(t=!0){const e=y.useContext(An);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:n,register:o}=e,i=y.useId();y.useEffect((()=>{if(t)return o(i)}),[t]);const s=y.useCallback((()=>t&&n&&n(i)),[i,n,t]);return!r&&n?[!1,s]:[!0]}function Vl(t){if(typeof Proxy>"u")return t;const e=new Map;return new Proxy(((...r)=>t(...r)),{get:(r,n)=>n==="create"?t:(e.has(n)||e.set(n,t(n)),e.get(n))})}function br(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function _o(t){const e=[{},{}];return t?.values.forEach(((r,n)=>{e[0][n]=r.get(),e[1][n]=r.getVelocity()})),e}function Dn(t,e,r,n){if(typeof e=="function"){const[o,i]=_o(n);e=e(r!==void 0?r:t.custom,o,i)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,i]=_o(n);e=e(r!==void 0?r:t.custom,o,i)}return e}function At(t,e,r){const n=t.getProps();return Dn(n,e,r!==void 0?r:n.custom,t)}function Vn(t,e){return t?.[e]??t?.default??t}const ve=t=>t,Qt=["read","resolveKeyframes","update","preRender","render","postRender"],wo={value:null};function Ll(t,e){let r=new Set,n=new Set,o=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function u(h){s.has(h)&&(d.schedule(h),t()),l++,h(a)}const d={schedule:(h,p=!1,m=!1)=>{const v=m&&o?r:n;return p&&s.add(h),v.has(h)||v.add(h),h},cancel:h=>{n.delete(h),s.delete(h)},process:h=>{a=h,o?i=!0:(o=!0,[r,n]=[n,r],r.forEach(u),e&&wo.value&&wo.value.frameloop[e].push(l),l=0,r.clear(),o=!1,i&&(i=!1,d.process(h)))}};return d}function us(t,e){let r=!1,n=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>r=!0,s=Qt.reduce(((v,x)=>(v[x]=Ll(i,e?x:void 0),v)),{}),{read:a,resolveKeyframes:l,update:u,preRender:d,render:h,postRender:p}=s,m=()=>{const v=performance.now();r=!1,o.delta=n?1e3/60:Math.max(Math.min(v-o.timestamp,40),1),o.timestamp=v,o.isProcessing=!0,a.process(o),l.process(o),u.process(o),d.process(o),h.process(o),p.process(o),o.isProcessing=!1,r&&e&&(n=!1,t(m))};return{schedule:Qt.reduce(((v,x)=>{const b=s[x];return v[x]=(_,T=!1,N=!1)=>(r||(r=!0,n=!0,o.isProcessing||t(m)),b.schedule(_,T,N)),v}),{}),cancel:v=>{for(let x=0;x<Qt.length;x++)s[Qt[x]].cancel(v)},state:o,steps:s}}const{schedule:B,cancel:Ve,state:re,steps:Mr}=us(typeof requestAnimationFrame<"u"?requestAnimationFrame:ve,!0),vt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Je=new Set(vt),hs=new Set(["width","height","top","left","right","bottom",...vt]);function Ln(t,e){t.indexOf(e)===-1&&t.push(e)}function Rn(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}let Fn=class{constructor(){this.subscriptions=[]}add(e){return Ln(this.subscriptions,e),()=>Rn(this.subscriptions,e)}notify(e,r,n){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,r,n);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(e,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};function ms(t,e){return e?t*(1e3/e):0}const Rl={useManualTiming:!1};let or;function Fl(){or=void 0}const je={now:()=>(or===void 0&&je.set(re.isProcessing||Rl.useManualTiming?re.timestamp:performance.now()),or),set:t=>{or=t,queueMicrotask(Fl)}};let Il=class{constructor(e,r={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,o=!0)=>{const i=je.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){var r;this.current=e,this.updatedAt=je.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new Fn);const n=this.events[e].add(r);return e==="change"?()=>{n(),B.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){r&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,r)}setWithVelocity(e,r,n){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=je.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>30)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ms(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise((r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Dt(t,e){return new Il(t,e)}const nn=t=>Array.isArray(t),zl=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Ol=t=>nn(t)?t[t.length-1]||0:t;function Bl(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,Dt(r))}function Yl(t,e){const r=At(t,e);let{transitionEnd:n={},transition:o={},...i}=r||{};i={...i,...n};for(const s in i)Bl(t,s,Ol(i[s]))}const ie=t=>!!(t&&t.getVelocity);function Xl(t){return!!(ie(t)&&t.add)}function on(t,e){const r=t.getValue("willChange");if(Xl(r))return r.add(e)}const In=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ul="framerAppearId",ps="data-"+In(Ul);function fs(t){return t.props[ps]}const Pe=t=>1e3*t,Te=t=>t/1e3;function zn(t){let e;return()=>(e===void 0&&(e=t()),e)}const Hl=zn((()=>window.ScrollTimeline!==void 0));let Kl=class{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,r){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=r}attachTimeline(e,r){const n=this.animations.map((o=>Hl()&&o.attachTimeline?o.attachTimeline(e):typeof r=="function"?r(o):void 0));return()=>{n.forEach(((o,i)=>{o&&o(),this.animations[i].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let r=0;r<this.animations.length;r++)e=Math.max(e,this.animations[r].duration);return e}runAll(e){this.animations.forEach((r=>r[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}},Wl=class extends Kl{then(e,r){return this.finished.finally(e).then((()=>{}))}};const On=t=>Array.isArray(t)&&typeof t[0]=="number",ql={};function Gl(t,e){const r=zn(t);return()=>ql[e]??r()}const Vt=Gl((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}),"linearEasing"),vs=(t,e,r=10)=>{let n="";const o=Math.max(Math.round(e/r),2);for(let i=0;i<o;i++)n+=t(i/(o-1))+", ";return`linear(${n.substring(0,n.length-2)})`},Tt=([t,e,r,n])=>`cubic-bezier(${t}, ${e}, ${r}, ${n})`,sn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tt([0,.65,.55,1]),circOut:Tt([.55,0,1,.45]),backIn:Tt([.31,.01,.66,-.59]),backOut:Tt([.33,1.53,.69,.99])};function gs(t,e){return t?typeof t=="function"&&Vt()?vs(t,e):On(t)?Tt(t):Array.isArray(t)?t.map((r=>gs(r,e)||sn.easeOut)):sn[t]:void 0}function Ql(t,e,r,{delay:n=0,duration:o=300,repeat:i=0,repeatType:s="loop",ease:a="easeInOut",times:l}={},u=void 0){const d={[e]:r};l&&(d.offset=l);const h=gs(a,o);return Array.isArray(h)&&(d.easing=h),t.animate(d,{delay:n,duration:o,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal",pseudoElement:u})}function Bn(t){return typeof t=="function"&&"applyToOptions"in t}function xs(t){return!!(typeof t=="function"&&Vt()||!t||typeof t=="string"&&(t in sn||Vt())||On(t)||Array.isArray(t)&&t.every(xs))}function $o(t,e){t.timeline=e,t.onfinish=null}const jo=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t;function gt(t,e,r,n){if(t===e&&r===n)return ve;const o=i=>(function(s,a,l,u,d){let h,p,m=0;do p=a+(l-a)/2,h=jo(p,u,d)-s,h>0?l=p:a=p;while(Math.abs(h)>1e-7&&++m<12);return p})(i,0,1,t,r);return i=>i===0||i===1?i:jo(o(i),e,n)}const ys=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,bs=t=>e=>1-t(1-e),_s=gt(.33,1.53,.69,.99),Yn=bs(_s),ws=ys(Yn),$s=t=>(t*=2)<1?.5*Yn(t):.5*(2-Math.pow(2,-10*(t-1))),Xn=t=>1-Math.sin(Math.acos(t)),js=bs(Xn),Ps=ys(Xn),Ts=t=>/^0[^.\s]+$/u.test(t);function Zl(t){return typeof t=="number"?t===0:t===null||t==="none"||t==="0"||Ts(t)}const ke=(t,e,r)=>r>e?e:r<t?t:r,xt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Lt={...xt,transform:t=>ke(0,1,t)},Zt={...xt,default:1},St=t=>Math.round(1e5*t)/1e5,Un=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Jl(t){return t==null}const ec=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hn=(t,e)=>r=>!!(typeof r=="string"&&ec.test(r)&&r.startsWith(t)||e&&!Jl(r)&&Object.prototype.hasOwnProperty.call(r,e)),Es=(t,e,r)=>n=>{if(typeof n!="string")return n;const[o,i,s,a]=n.match(Un);return{[t]:parseFloat(o),[e]:parseFloat(i),[r]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Ar={...xt,transform:t=>Math.round((e=>ke(0,255,e))(t))},Ye={test:Hn("rgb","red"),parse:Es("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:n=1})=>"rgba("+Ar.transform(t)+", "+Ar.transform(e)+", "+Ar.transform(r)+", "+St(Lt.transform(n))+")"},an={test:Hn("#"),parse:function(t){let e="",r="",n="",o="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),n=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),n=t.substring(3,4),o=t.substring(4,5),e+=e,r+=r,n+=n,o+=o),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}},transform:Ye.transform},Xt=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ae=Xt("deg"),Ee=Xt("%"),L=Xt("px"),tc=Xt("vh"),rc=Xt("vw"),Po={...Ee,parse:t=>Ee.parse(t)/100,transform:t=>Ee.transform(100*t)},nt={test:Hn("hsl","hue"),parse:Es("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:n=1})=>"hsla("+Math.round(t)+", "+Ee.transform(St(e))+", "+Ee.transform(St(r))+", "+St(Lt.transform(n))+")"},ne={test:t=>Ye.test(t)||an.test(t)||nt.test(t),parse:t=>Ye.test(t)?Ye.parse(t):nt.test(t)?nt.parse(t):an.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ye.transform(t):nt.transform(t)},nc=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,Ss="number",ks="color",oc=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Rt(t){const e=t.toString(),r=[],n={color:[],number:[],var:[]},o=[];let i=0;const s=e.replace(oc,(a=>(ne.test(a)?(n.color.push(i),o.push(ks),r.push(ne.parse(a))):a.startsWith("var(")?(n.var.push(i),o.push("var"),r.push(a)):(n.number.push(i),o.push(Ss),r.push(parseFloat(a))),++i,"${}"))).split("${}");return{values:r,split:s,indexes:n,types:o}}function To(t){return Rt(t).values}function Eo(t){const{split:e,types:r}=Rt(t),n=e.length;return o=>{let i="";for(let s=0;s<n;s++)if(i+=e[s],o[s]!==void 0){const a=r[s];i+=a===Ss?St(o[s]):a===ks?ne.transform(o[s]):o[s]}return i}}const ic=t=>typeof t=="number"?0:t,Le={test:function(t){return isNaN(t)&&typeof t=="string"&&(t.match(Un)?.length||0)+(t.match(nc)?.length||0)>0},parse:To,createTransformer:Eo,getAnimatableNone:function(t){const e=To(t);return Eo(t)(e.map(ic))}},sc=new Set(["brightness","contrast","saturate","opacity"]);function ac(t){const[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=r.match(Un)||[];if(!n)return t;const o=r.replace(n,"");let i=sc.has(e)?1:0;return n!==r&&(i*=100),e+"("+i+o+")"}const lc=/\b([a-z-]*)\(.*?\)/gu,ln={...Le,getAnimatableNone:t=>{const e=t.match(lc);return e?e.map(ac).join(" "):t}},cc={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},dc={rotate:Ae,rotateX:Ae,rotateY:Ae,rotateZ:Ae,scale:Zt,scaleX:Zt,scaleY:Zt,scaleZ:Zt,skew:Ae,skewX:Ae,skewY:Ae,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Lt,originX:Po,originY:Po,originZ:L},So={...xt,transform:Math.round},Kn={...cc,...dc,zIndex:So,size:L,fillOpacity:Lt,strokeOpacity:Lt,numOctaves:So},uc={...Kn,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:ln,WebkitFilter:ln},Cs=t=>uc[t];function Ns(t,e){let r=Cs(t);return r!==ln&&(r=Le),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const hc=new Set(["auto","none","0"]);function mc(t,e,r){let n,o=0;for(;o<t.length&&!n;){const i=t[o];typeof i=="string"&&!hc.has(i)&&Rt(i).values.length&&(n=t[o]),o++}if(n&&r)for(const i of e)t[i]=Ns(r,n)}const Xe=t=>180*t/Math.PI,lr=t=>{const e=Xe(Math.atan2(t[1],t[0]));return cn(e)},pc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:lr,rotateZ:lr,skewX:t=>Xe(Math.atan(t[1])),skewY:t=>Xe(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},cn=t=>((t%=360)<0&&(t+=360),t),ko=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Co=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),fc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ko,scaleY:Co,scale:t=>(ko(t)+Co(t))/2,rotateX:t=>cn(Xe(Math.atan2(t[6],t[5]))),rotateY:t=>cn(Xe(Math.atan2(-t[2],t[0]))),rotateZ:lr,rotate:lr,skewX:t=>Xe(Math.atan(t[4])),skewY:t=>Xe(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function No(t){return t.includes("scale")?1:0}function dn(t,e){if(!t||t==="none")return No(e);const r=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let n,o;if(r)n=fc,o=r;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);n=pc,o=a}if(!o)return No(e);const i=n[e],s=o[1].split(",").map(gc);return typeof i=="function"?i(s):s[i]}const vc=(t,e)=>{const{transform:r="none"}=getComputedStyle(t);return dn(r,e)};function gc(t){return parseFloat(t.trim())}const Mo=t=>t===xt||t===L,xc=new Set(["x","y","z"]),yc=vt.filter((t=>!xc.has(t)));function bc(t){const e=[];return yc.forEach((r=>{const n=t.getValue(r);n!==void 0&&(e.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))})),e}const ot={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>dn(e,"x"),y:(t,{transform:e})=>dn(e,"y")};ot.translateX=ot.x,ot.translateY=ot.y;const We=new Set;let un=!1,hn=!1;function Ms(){if(hn){const t=Array.from(We).filter((n=>n.needsMeasurement)),e=new Set(t.map((n=>n.element))),r=new Map;e.forEach((n=>{const o=bc(n);o.length&&(r.set(n,o),n.render())})),t.forEach((n=>n.measureInitialState())),e.forEach((n=>{n.render();const o=r.get(n);o&&o.forEach((([i,s])=>{n.getValue(i)?.set(s)}))})),t.forEach((n=>n.measureEndState())),t.forEach((n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)}))}hn=!1,un=!1,We.forEach((t=>t.complete())),We.clear()}function As(){We.forEach((t=>{t.readKeyframes(),t.needsMeasurement&&(hn=!0)}))}function _c(){As(),Ms()}let Wn=class{constructor(e,r,n,o,i,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=n,this.motionValue=o,this.element=i,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(We.add(this),un||(un=!0,B.read(As),B.resolveKeyframes(Ms))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:n,motionValue:o}=this;for(let i=0;i<e.length;i++)if(e[i]===null)if(i===0){const s=o?.get(),a=e[e.length-1];if(s!==void 0)e[0]=s;else if(n&&r){const l=n.readValue(r,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),o&&s===void 0&&o.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),We.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,We.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},Ds=()=>{};const Vs=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Ls=t=>e=>typeof e=="string"&&e.startsWith(t),qn=Ls("--"),wc=Ls("var(--"),Gn=t=>!!wc(t)&&$c.test(t.split("/*")[0].trim()),$c=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,jc=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Pc(t){const e=jc.exec(t);if(!e)return[,];const[,r,n,o]=e;return[`--${r??n}`,o]}function Rs(t,e,r=1){const[n,o]=Pc(t);if(!n)return;const i=window.getComputedStyle(e).getPropertyValue(n);if(i){const s=i.trim();return Vs(s)?parseFloat(s):s}return Gn(o)?Rs(o,e,r+1):o}const Fs=t=>e=>e.test(t),Tc={test:t=>t==="auto",parse:t=>t},Is=[xt,L,Ee,Ae,rc,tc,Tc],Ao=t=>Is.find(Fs(t));let zs=class extends Wn{constructor(e,r,n,o,i){super(e,r,n,o,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:n}=this;if(!r||!r.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Gn(u))){const d=Rs(u,r.current);d!==void 0&&(e[l]=d),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!hs.has(n)||e.length!==2)return;const[o,i]=e,s=Ao(o),a=Ao(i);if(s!==a)if(Mo(s)&&Mo(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,n=[];for(let o=0;o<e.length;o++)Zl(e[o])&&n.push(o);n.length&&mc(e,n,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:n}=this;if(!e||!e.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ot[n](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&e.getValue(n,o).jump(o,!1)}measureEndState(){const{element:e,name:r,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const o=e.getValue(r);o&&o.jump(this.measuredOrigin,!1);const i=n.length-1,s=n[i];n[i]=ot[r](e.measureViewportBox(),window.getComputedStyle(e.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),this.removedTransforms?.length&&this.removedTransforms.forEach((([a,l])=>{e.getValue(a).set(l)})),this.resolveNoneKeyframes()}};const Do=(t,e)=>e!=="zIndex"&&(!(typeof t!="number"&&!Array.isArray(t))||!(typeof t!="string"||!Le.test(t)&&t!=="0"||t.startsWith("url(")));function Ec(t,e,r,n){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const i=t[t.length-1],s=Do(o,e),a=Do(i,e);return!(!s||!a)&&((function(l){const u=l[0];if(l.length===1)return!0;for(let d=0;d<l.length;d++)if(l[d]!==u)return!0})(t)||(r==="spring"||Bn(r))&&n)}const Sc=t=>t!==null;function _r(t,{repeat:e,repeatType:r="loop"},n){const o=t.filter(Sc),i=e&&r!=="loop"&&e%2==1?0:o.length-1;return i&&n!==void 0?n:o[i]}let Os=class{constructor({autoplay:e=!0,delay:r=0,type:n="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=je.now(),this.options={autoplay:e,delay:r,type:n,repeat:o,repeatDelay:i,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||_c(),this._resolved}onKeyframesResolved(e,r){this.resolvedAt=je.now(),this.hasAttemptedResolve=!0;const{name:n,type:o,velocity:i,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!Ec(e,n,o,i)){if(!s)return l&&l(_r(e,this.options,r)),a&&a(),void this.resolveFinishedPromise();this.options.duration=0}const d=this.initPlayback(e,r);d!==!1&&(this._resolved={keyframes:e,finalKeyframe:r,...d},this.onPostResolved())}onPostResolved(){}then(e,r){return this.currentFinishedPromise.then(e,r)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}};const cr=2e4;function Qn(t){let e=0,r=t.next(e);for(;!r.done&&e<cr;)e+=50,r=t.next(e);return e>=cr?1/0:e}const K=(t,e,r)=>t+(e-t)*r;function Dr(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function kc({hue:t,saturation:e,lightness:r,alpha:n}){t/=360,r/=100;let o=0,i=0,s=0;if(e/=100){const a=r<.5?r*(1+e):r+e-r*e,l=2*r-a;o=Dr(l,a,t+1/3),i=Dr(l,a,t),s=Dr(l,a,t-1/3)}else o=i=s=r;return{red:Math.round(255*o),green:Math.round(255*i),blue:Math.round(255*s),alpha:n}}function dr(t,e){return r=>r>0?e:t}const Vr=(t,e,r)=>{const n=t*t,o=r*(e*e-n)+n;return o<0?0:Math.sqrt(o)},Cc=[an,Ye,nt];function Vo(t){const e=(r=t,Cc.find((o=>o.test(r))));var r;if(!e)return!1;let n=e.parse(t);return e===nt&&(n=kc(n)),n}const Lo=(t,e)=>{const r=Vo(t),n=Vo(e);if(!r||!n)return dr(t,e);const o={...r};return i=>(o.red=Vr(r.red,n.red,i),o.green=Vr(r.green,n.green,i),o.blue=Vr(r.blue,n.blue,i),o.alpha=K(r.alpha,n.alpha,i),Ye.transform(o))},Nc=(t,e)=>r=>e(t(r)),Ut=(...t)=>t.reduce(Nc),mn=new Set(["none","hidden"]);function Mc(t,e){return mn.has(t)?r=>r<=0?t:e:r=>r>=1?e:t}function Ac(t,e){return r=>K(t,e,r)}function Zn(t){return typeof t=="number"?Ac:typeof t=="string"?Gn(t)?dr:ne.test(t)?Lo:Vc:Array.isArray(t)?Bs:typeof t=="object"?ne.test(t)?Lo:Dc:dr}function Bs(t,e){const r=[...t],n=r.length,o=t.map(((i,s)=>Zn(i)(i,e[s])));return i=>{for(let s=0;s<n;s++)r[s]=o[s](i);return r}}function Dc(t,e){const r={...t,...e},n={};for(const o in r)t[o]!==void 0&&e[o]!==void 0&&(n[o]=Zn(t[o])(t[o],e[o]));return o=>{for(const i in n)r[i]=n[i](o);return r}}const Vc=(t,e)=>{const r=Le.createTransformer(e),n=Rt(t),o=Rt(e);return n.indexes.var.length===o.indexes.var.length&&n.indexes.color.length===o.indexes.color.length&&n.indexes.number.length>=o.indexes.number.length?mn.has(t)&&!o.values.length||mn.has(e)&&!n.values.length?Mc(t,e):Ut(Bs((function(i,s){const a=[],l={color:0,var:0,number:0};for(let u=0;u<s.values.length;u++){const d=s.types[u],h=i.indexes[d][l[d]],p=i.values[h]??0;a[u]=p,l[d]++}return a})(n,o),o.values),r):dr(t,e)};function Ys(t,e,r){return typeof t=="number"&&typeof e=="number"&&typeof r=="number"?K(t,e,r):Zn(t)(t,e)}function Lc(t,e=100,r){const n=r({...t,keyframes:[0,e]}),o=Math.min(Qn(n),cr);return{type:"keyframes",ease:i=>n.next(o*i).value/e,duration:Te(o)}}function Xs(t,e,r){const n=Math.max(e-5,0);return ms(r-t(n),e-n)}const G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ro=.001;function Rc({duration:t=G.duration,bounce:e=G.bounce,velocity:r=G.velocity,mass:n=G.mass}){let o,i,s=1-e;s=ke(G.minDamping,G.maxDamping,s),t=ke(G.minDuration,G.maxDuration,Te(t)),s<1?(o=l=>{const u=l*s,d=u*t,h=u-r,p=pn(l,s),m=Math.exp(-d);return Ro-h/p*m},i=l=>{const u=l*s*t,d=u*r+r,h=Math.pow(s,2)*Math.pow(l,2)*t,p=Math.exp(-u),m=pn(Math.pow(l,2),s);return(-o(l)+Ro>0?-1:1)*((d-h)*p)/m}):(o=l=>Math.exp(-l*t)*((l-r)*t+1)-.001,i=l=>Math.exp(-l*t)*(t*t*(r-l)));const a=(function(l,u,d){let h=d;for(let p=1;p<Fc;p++)h-=l(h)/u(h);return h})(o,i,5/t);if(t=Pe(t),isNaN(a))return{stiffness:G.stiffness,damping:G.damping,duration:t};{const l=Math.pow(a,2)*n;return{stiffness:l,damping:2*s*Math.sqrt(n*l),duration:t}}}const Fc=12;function pn(t,e){return t*Math.sqrt(1-e*e)}const Ic=["duration","bounce"],zc=["stiffness","damping","mass"];function Fo(t,e){return e.some((r=>t[r]!==void 0))}function ur(t=G.visualDuration,e=G.bounce){const r=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:n,restDelta:o}=r;const i=r.keyframes[0],s=r.keyframes[r.keyframes.length-1],a={done:!1,value:i},{stiffness:l,damping:u,mass:d,duration:h,velocity:p,isResolvedFromDuration:m}=(function(w){let A={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...w};if(!Fo(w,zc)&&Fo(w,Ic))if(w.visualDuration){const D=w.visualDuration,f=2*Math.PI/(1.2*D),$=f*f,R=2*ke(.05,1,1-(w.bounce||0))*Math.sqrt($);A={...A,mass:G.mass,stiffness:$,damping:R}}else{const D=Rc(w);A={...A,...D,mass:G.mass},A.isResolvedFromDuration=!0}return A})({...r,velocity:-Te(r.velocity||0)}),v=p||0,x=u/(2*Math.sqrt(l*d)),b=s-i,_=Te(Math.sqrt(l/d)),T=Math.abs(b)<5;let N;if(n||(n=T?G.restSpeed.granular:G.restSpeed.default),o||(o=T?G.restDelta.granular:G.restDelta.default),x<1){const w=pn(_,x);N=A=>{const D=Math.exp(-x*_*A);return s-D*((v+x*_*b)/w*Math.sin(w*A)+b*Math.cos(w*A))}}else if(x===1)N=w=>s-Math.exp(-_*w)*(b+(v+_*b)*w);else{const w=_*Math.sqrt(x*x-1);N=A=>{const D=Math.exp(-x*_*A),f=Math.min(w*A,300);return s-D*((v+x*_*b)*Math.sinh(f)+w*b*Math.cosh(f))/w}}const M={calculatedDuration:m&&h||null,next:w=>{const A=N(w);if(m)a.done=w>=h;else{let D=0;x<1&&(D=w===0?Pe(v):Xs(N,w,A));const f=Math.abs(D)<=n,$=Math.abs(s-A)<=o;a.done=f&&$}return a.value=a.done?s:A,a},toString:()=>{const w=Math.min(Qn(M),cr),A=vs((D=>M.next(w*D).value),w,30);return w+"ms "+A},toTransition:()=>{}};return M}ur.applyToOptions=t=>{const e=Lc(t,100,ur);return t.ease=Vt()?e.ease:"easeOut",t.duration=Pe(e.duration),t.type="keyframes",t};function Io({keyframes:t,velocity:e=0,power:r=.8,timeConstant:n=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const h=t[0],p={done:!1,value:h},m=D=>a===void 0?l:l===void 0||Math.abs(a-D)<Math.abs(l-D)?a:l;let v=r*e;const x=h+v,b=s===void 0?x:s(x);b!==x&&(v=b-h);const _=D=>-v*Math.exp(-D/n),T=D=>b+_(D),N=D=>{const f=_(D),$=T(D);p.done=Math.abs(f)<=u,p.value=p.done?b:$};let M,w;const A=D=>{var f;f=p.value,(a!==void 0&&f<a||l!==void 0&&f>l)&&(M=D,w=ur({keyframes:[p.value,m(p.value)],velocity:Xs(T,D,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return A(0),{calculatedDuration:null,next:D=>{let f=!1;return w||M!==void 0||(f=!0,N(D),A(D)),M!==void 0&&D>=M?w.next(D-M):(!f&&N(D),p)}}}const Oc=gt(.42,0,1,1),Bc=gt(0,0,.58,1),Us=gt(.42,0,.58,1),Yc=t=>Array.isArray(t)&&typeof t[0]!="number",Xc={linear:ve,easeIn:Oc,easeInOut:Us,easeOut:Bc,circIn:Xn,circInOut:Ps,circOut:js,backIn:Yn,backInOut:ws,backOut:_s,anticipate:$s},zo=t=>{if(On(t)){Ds(t.length===4);const[e,r,n,o]=t;return gt(e,r,n,o)}return typeof t=="string"?Xc[t]:t},Ft=(t,e,r)=>{const n=e-t;return n===0?1:(r-t)/n};function Uc(t,e,{clamp:r=!0,ease:n,mixer:o}={}){const i=t.length;if(Ds(i===e.length),i===1)return()=>e[0];if(i===2&&e[0]===e[1])return()=>e[1];const s=t[0]===t[1];t[0]>t[i-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=(function(d,h,p){const m=[],v=p||Ys,x=d.length-1;for(let b=0;b<x;b++){let _=v(d[b],d[b+1]);if(h){const T=Array.isArray(h)?h[b]||ve:h;_=Ut(T,_)}m.push(_)}return m})(e,n,o),l=a.length,u=d=>{if(s&&d<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(d<t[h+1]);h++);const p=Ft(t[h],t[h+1],d);return a[h](p)};return r?d=>u(ke(t[0],t[i-1],d)):u}function Hc(t,e){const r=t[t.length-1];for(let n=1;n<=e;n++){const o=Ft(0,e,n);t.push(K(r,1,o))}}function Kc(t){const e=[0];return Hc(e,t.length-1),e}function Wc(t,e){return t.map((r=>r*e))}function qc(t,e){return t.map((()=>e||Us)).splice(0,t.length-1)}function hr({duration:t=300,keyframes:e,times:r,ease:n="easeInOut"}){const o=Yc(n)?n.map(zo):zo(n),i={done:!1,value:e[0]},s=Wc(r&&r.length===e.length?r:Kc(e),t),a=Uc(s,e,{ease:Array.isArray(o)?o:qc(e,o)});return{calculatedDuration:t,next:l=>(i.value=a(l),i.done=l>=t,i)}}const Gc=t=>{const e=({timestamp:r})=>t(r);return{start:()=>B.update(e,!0),stop:()=>Ve(e),now:()=>re.isProcessing?re.timestamp:je.now()}},Qc={decay:Io,inertia:Io,tween:hr,keyframes:hr,spring:ur},Zc=t=>t/100;let fn=class extends Os{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:r,motionValue:n,element:o,keyframes:i}=this.options,s=o?.KeyframeResolver||Wn;this.resolver=new s(i,((a,l)=>this.onKeyframesResolved(a,l)),r,n,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:r="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:i,velocity:s=0}=this.options,a=Bn(r)?r:Qc[r]||hr;let l,u;a!==hr&&typeof e[0]!="number"&&(l=Ut(Zc,Ys(e[0],e[1])),e=[0,100]);const d=a({...this.options,keyframes:e});i==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=Qn(d));const{calculatedDuration:h}=d,p=h+o;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:p,totalDuration:p*(n+1)-o}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState!=="paused"&&e?this.state=this.pendingPlayState:this.pause()}tick(e,r=!1){const{resolved:n}=this;if(!n){const{keyframes:f}=this.options;return{done:!0,value:f[f.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:h}=n;if(this.startTime===null)return i.next(0);const{delay:p,repeat:m,repeatType:v,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-d/this.speed,this.startTime)),r?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-p*(this.speed>=0?1:-1),T=this.speed>=0?_<0:_>d;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let N=this.currentTime,M=i;if(m){const f=Math.min(this.currentTime,d)/h;let $=Math.floor(f),R=f%1;!R&&f>=1&&(R=1),R===1&&$--,$=Math.min($,m+1),$%2&&(v==="reverse"?(R=1-R,x&&(R-=x/h)):v==="mirror"&&(M=s)),N=ke(0,1,R)*h}const w=T?{done:!1,value:l[0]}:M.next(N);a&&(w.value=a(w.value));let{done:A}=w;T||u===null||(A=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return D&&o!==void 0&&(w.value=_r(l,this.options,o)),b&&b(w.value),D&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Te(e.calculatedDuration):0}get time(){return Te(this.currentTime)}set time(e){e=Pe(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=Te(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Gc,onPlay:r,startTime:n}=this.options;this.driver||(this.driver=e((i=>this.tick(i)))),r&&r();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}};const Jc=new Set(["opacity","clipPath","filter","transform"]),ed=zn((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Oo={anticipate:$s,backInOut:ws,circInOut:Ps};let Bo=class extends Os{constructor(e){super(e);const{name:r,motionValue:n,element:o,keyframes:i}=this.options;this.resolver=new zs(i,((s,a)=>this.onKeyframesResolved(s,a)),r,n,o),this.resolver.scheduleResolve()}initPlayback(e,r){let{duration:n=300,times:o,ease:i,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;var d;if(typeof i=="string"&&Vt()&&i in Oo&&(i=Oo[i]),d=this.options,Bn(d.type)||d.type==="spring"||!xs(d.ease)){const{onComplete:p,onUpdate:m,motionValue:v,element:x,...b}=this.options,_=(function(T,N){const M=new fn({...N,keyframes:T,repeat:0,delay:0,isGenerator:!0});let w={done:!1,value:T[0]};const A=[];let D=0;for(;!w.done&&D<2e4;)w=M.sample(D),A.push(w.value),D+=10;return{times:void 0,keyframes:A,duration:D-10,ease:"linear"}})(e,b);(e=_.keyframes).length===1&&(e[1]=e[0]),n=_.duration,o=_.times,i=_.ease,s="keyframes"}const h=Ql(a.owner.current,l,e,{...this.options,duration:n,times:o,ease:i});return h.startTime=u??this.calcStartTime(),this.pendingTimeline?($o(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:p}=this.options;a.set(_r(e,this.options,r)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:n,times:o,type:s,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:r}=e;return Te(r)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:r}=e;return Te(r.currentTime||0)}set time(e){const{resolved:r}=this;if(!r)return;const{animation:n}=r;n.currentTime=Pe(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:r}=e;return r.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:r}=this;if(!r)return;const{animation:n}=r;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:r}=e;return r.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:r}=e;return r.startTime}attachTimeline(e){if(this._resolved){const{resolved:r}=this;if(!r)return ve;const{animation:n}=r;$o(n,e)}else this.pendingTimeline=e;return ve}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:r}=e;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:r,keyframes:n,duration:o,type:i,ease:s,times:a}=e;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:h,element:p,...m}=this.options,v=new fn({...m,keyframes:n,duration:o,type:i,ease:s,times:a,isGenerator:!0}),x=Pe(this.time);u.setWithVelocity(v.sample(x-10).value,v.sample(x).value,10)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:r,name:n,repeatDelay:o,repeatType:i,damping:s,type:a}=e;if(!(r&&r.owner&&r.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=r.owner.getProps();return ed()&&n&&Jc.has(n)&&(n!=="transform"||!u)&&!l&&!o&&i!=="mirror"&&s!==0&&a!=="inertia"}};const td={type:"spring",stiffness:500,damping:25,restSpeed:10},rd={type:"keyframes",duration:.8},nd={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},od=(t,{keyframes:e})=>e.length>2?rd:Je.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:e[1]===0?2*Math.sqrt(550):30,restSpeed:10}:td:nd;function id({when:t,delay:e,delayChildren:r,staggerChildren:n,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Jn=(t,e,r,n={},o,i)=>s=>{const a=Vn(n,t)||{},l=a.delay||n.delay||0;let{elapsed:u=0}=n;u-=Pe(l);let d={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:i?void 0:o};id(a)||(d={...d,...od(t,d)}),d.duration&&(d.duration=Pe(d.duration)),d.repeatDelay&&(d.repeatDelay=Pe(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(h=!0)),d.allowFlatten=!a.type&&!a.ease,h&&!i&&e.get()!==void 0){const p=_r(d.keyframes,a);if(p!==void 0)return B.update((()=>{d.onUpdate(p),d.onComplete()})),new Wl([])}return!i&&Bo.supports(d)?new Bo(d):new fn(d)};function sd({protectedKeys:t,needsAnimating:e},r){const n=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,n}function Hs(t,e,{delay:r=0,transitionOverride:n,type:o}={}){let{transition:i=t.getDefaultTransition(),transitionEnd:s,...a}=e;n&&(i=n);const l=[],u=o&&t.animationState&&t.animationState.getState()[o];for(const d in a){const h=t.getValue(d,t.latestValues[d]??null),p=a[d];if(p===void 0||u&&sd(u,d))continue;const m={delay:r,...Vn(i||{},d)};let v=!1;if(window.MotionHandoffAnimation){const b=fs(t);if(b){const _=window.MotionHandoffAnimation(b,d,B);_!==null&&(m.startTime=_,v=!0)}}on(t,d),h.start(Jn(d,h,p,t.shouldReduceMotion&&hs.has(d)?{type:!1}:m,t,v));const x=h.animation;x&&l.push(x)}return s&&Promise.all(l).then((()=>{B.update((()=>{s&&Yl(t,s)}))})),l}function vn(t,e,r={}){const n=At(t,e,r.type==="exit"?t.presenceContext?.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(o=r.transitionOverride);const i=n?()=>Promise.all(Hs(t,n,r)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=o;return(function(p,m,v=0,x=0,b=1,_){const T=[],N=(p.variantChildren.size-1)*x,M=b===1?(w=0)=>w*x:(w=0)=>N-w*x;return Array.from(p.variantChildren).sort(ad).forEach(((w,A)=>{w.notify("AnimationStart",m),T.push(vn(w,m,{..._,delay:v+M(A)}).then((()=>w.notify("AnimationComplete",m))))})),Promise.all(T)})(t,e,u+l,d,h,r)}:()=>Promise.resolve(),{when:a}=o;if(a){const[l,u]=a==="beforeChildren"?[i,s]:[s,i];return l().then((()=>u()))}return Promise.all([i(),s(r.delay)])}function ad(t,e){return t.sortNodePosition(e)}function ld(t,e,r={}){let n;if(t.notify("AnimationStart",e),Array.isArray(e)){const o=e.map((i=>vn(t,i,r)));n=Promise.all(o)}else if(typeof e=="string")n=vn(t,e,r);else{const o=typeof e=="function"?At(t,e,r.custom):e;n=Promise.all(Hs(t,o,r))}return n.then((()=>{t.notify("AnimationComplete",e)}))}function Ks(t,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==t.length)return!1;for(let n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function It(t){return typeof t=="string"||Array.isArray(t)}const eo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],to=["initial",...eo],cd=to.length;function Ws(t){if(!t)return;if(!t.isControllingVariants){const r=t.parent&&Ws(t.parent)||{};return t.props.initial!==void 0&&(r.initial=t.props.initial),r}const e={};for(let r=0;r<cd;r++){const n=to[r],o=t.props[n];(It(o)||o===!1)&&(e[n]=o)}return e}const dd=[...eo].reverse(),ud=eo.length;function hd(t){let e=(function(s){return a=>Promise.all(a.map((({animation:l,options:u})=>ld(s,l,u))))})(t),r=Yo(),n=!0;const o=s=>(a,l)=>{const u=At(t,l,s==="exit"?t.presenceContext?.custom:void 0);if(u){const{transition:d,transitionEnd:h,...p}=u;a={...a,...p,...h}}return a};function i(s){const{props:a}=t,l=Ws(t.parent)||{},u=[],d=new Set;let h={},p=1/0;for(let v=0;v<ud;v++){const x=dd[v],b=r[x],_=a[x]!==void 0?a[x]:l[x],T=It(_),N=x===s?b.isActive:null;N===!1&&(p=v);let M=_===l[x]&&_!==a[x]&&T;if(M&&n&&t.manuallyAnimateOnMount&&(M=!1),b.protectedKeys={...h},!b.isActive&&N===null||!_&&!b.prevProp||br(_)||typeof _=="boolean")continue;const w=md(b.prevProp,_);let A=w||x===s&&b.isActive&&!M&&T||v>p&&T,D=!1;const f=Array.isArray(_)?_:[_];let $=f.reduce(o(x),{});N===!1&&($={});const{prevResolvedValues:R={}}=b,C={...R,...$},z=g=>{A=!0,d.has(g)&&(D=!0,d.delete(g)),b.needsAnimating[g]=!0;const E=t.getValue(g);E&&(E.liveStyle=!1)};for(const g in C){const E=$[g],V=R[g];if(h.hasOwnProperty(g))continue;let S=!1;S=nn(E)&&nn(V)?!Ks(E,V):E!==V,S?E!=null?z(g):d.add(g):E!==void 0&&d.has(g)?z(g):b.protectedKeys[g]=!0}b.prevProp=_,b.prevResolvedValues=$,b.isActive&&(h={...h,...$}),n&&t.blockInitialAnimation&&(A=!1),A&&(!(M&&w)||D)&&u.push(...f.map((g=>({animation:g,options:{type:x}}))))}if(d.size){const v={};if(typeof a.initial!="boolean"){const x=At(t,Array.isArray(a.initial)?a.initial[0]:a.initial);x&&x.transition&&(v.transition=x.transition)}d.forEach((x=>{const b=t.getBaseTarget(x),_=t.getValue(x);_&&(_.liveStyle=!0),v[x]=b??null})),u.push({animation:v})}let m=!!u.length;return!n||a.initial!==!1&&a.initial!==a.animate||t.manuallyAnimateOnMount||(m=!1),n=!1,m?e(u):Promise.resolve()}return{animateChanges:i,setActive:function(s,a){if(r[s].isActive===a)return Promise.resolve();t.variantChildren?.forEach((u=>u.animationState?.setActive(s,a))),r[s].isActive=a;const l=i(s);for(const u in r)r[u].protectedKeys={};return l},setAnimateFunction:function(s){e=s(t)},getState:()=>r,reset:()=>{r=Yo(),n=!0}}}function md(t,e){return typeof e=="string"?e!==t:!!Array.isArray(e)&&!Ks(e,t)}function ze(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yo(){return{animate:ze(!0),whileInView:ze(),whileHover:ze(),whileTap:ze(),whileDrag:ze(),whileFocus:ze(),exit:ze()}}let Re=class{constructor(e){this.isMounted=!1,this.node=e}update(){}},pd=class extends Re{constructor(e){super(e),e.animationState||(e.animationState=hd(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();br(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},fd=0,vd=class extends Re{constructor(){super(...arguments),this.id=fd++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const o=this.node.animationState.setActive("exit",!e);r&&!e&&o.then((()=>{r(this.id)}))}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}};const gd={animation:{Feature:pd},exit:{Feature:vd}},be={x:!1,y:!1};function qs(){return be.x||be.y}function xd(t){return t==="x"||t==="y"?be[t]?null:(be[t]=!0,()=>{be[t]=!1}):be.x||be.y?null:(be.x=be.y=!0,()=>{be.x=be.y=!1})}function zt(t,e,r,n={passive:!0}){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r)}const ro=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Ht(t){return{point:{x:t.pageX,y:t.pageY}}}const yd=t=>e=>ro(e)&&t(e,Ht(e));function kt(t,e,r,n){return zt(t,e,yd(r),n)}function Gs({top:t,left:e,right:r,bottom:n}){return{x:{min:e,max:r},y:{min:t,max:n}}}function bd({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function _d(t,e){if(!e)return t;const r=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function ae(t){return t.max-t.min}function wd(t,e,r){return Math.abs(t-e)<=r}function Xo(t,e,r,n=.5){t.origin=n,t.originPoint=K(e.min,e.max,t.origin),t.scale=ae(r)/ae(e),t.translate=K(r.min,r.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function Ct(t,e,r,n){Xo(t.x,e.x,r.x,n?n.originX:void 0),Xo(t.y,e.y,r.y,n?n.originY:void 0)}function Uo(t,e,r){t.min=r.min+e.min,t.max=t.min+ae(e)}function $d(t,e,r){Uo(t.x,e.x,r.x),Uo(t.y,e.y,r.y)}function Ho(t,e,r){t.min=e.min-r.min,t.max=t.min+ae(e)}function Nt(t,e,r){Ho(t.x,e.x,r.x),Ho(t.y,e.y,r.y)}const it=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),Q=()=>({x:{min:0,max:0},y:{min:0,max:0}});function he(t){return[t("x"),t("y")]}function Lr(t){return t===void 0||t===1}function gn({scale:t,scaleX:e,scaleY:r}){return!Lr(t)||!Lr(e)||!Lr(r)}function Be(t){return gn(t)||Qs(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Qs(t){return Ko(t.x)||Ko(t.y)}function Ko(t){return t&&t!=="0%"}function mr(t,e,r){return r+e*(t-r)}function Wo(t,e,r,n,o){return o!==void 0&&(t=mr(t,o,n)),mr(t,r,n)+e}function xn(t,e=0,r=1,n,o){t.min=Wo(t.min,e,r,n,o),t.max=Wo(t.max,e,r,n,o)}function Zs(t,{x:e,y:r}){xn(t.x,e.translate,e.scale,e.originPoint),xn(t.y,r.translate,r.scale,r.originPoint)}const qo=.999999999999,Go=1.0000000000001;function jd(t,e,r,n=!1){const o=r.length;if(!o)return;let i,s;e.x=e.y=1;for(let a=0;a<o;a++){i=r[a],s=i.projectionDelta;const{visualElement:l}=i.options;l&&l.props.style&&l.props.style.display==="contents"||(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&at(t,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,Zs(t,s)),n&&Be(i.latestValues)&&at(t,i.latestValues))}e.x<Go&&e.x>qo&&(e.x=1),e.y<Go&&e.y>qo&&(e.y=1)}function st(t,e){t.min=t.min+e,t.max=t.max+e}function Qo(t,e,r,n,o=.5){xn(t,e,r,K(t.min,t.max,o),n)}function at(t,e){Qo(t.x,e.x,e.scaleX,e.scale,e.originX),Qo(t.y,e.y,e.scaleY,e.scale,e.originY)}function Js(t,e){return Gs(_d(t.getBoundingClientRect(),e))}function Pd(t,e,r){const n=Js(t,r),{scroll:o}=e;return o&&(st(n.x,o.offset.x),st(n.y,o.offset.y)),n}const ea=({current:t})=>t?t.ownerDocument.defaultView:null;function lt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const Zo=(t,e)=>Math.abs(t-e);function Td(t,e){const r=Zo(t.x,e.x),n=Zo(t.y,e.y);return Math.sqrt(r**2+n**2)}let ta=class{constructor(e,r,{transformPagePoint:n,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const d=Fr(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=Td(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:m}=d,{timestamp:v}=re;this.history.push({...m,timestamp:v});const{onStart:x,onMove:b}=this.handlers;h||(x&&x(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Rr(h,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const x=Fr(d.type==="pointercancel"?this.lastMoveEventInfo:Rr(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,x),m&&m(d,x)},!ro(e))return;this.dragSnapToOrigin=i,this.handlers=r,this.transformPagePoint=n,this.contextWindow=o||window;const s=Rr(Ht(e),this.transformPagePoint),{point:a}=s,{timestamp:l}=re;this.history=[{...a,timestamp:l}];const{onSessionStart:u}=r;u&&u(e,Fr(s,this.history)),this.removeListeners=Ut(kt(this.contextWindow,"pointermove",this.handlePointerMove),kt(this.contextWindow,"pointerup",this.handlePointerUp),kt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ve(this.updatePoint)}};function Rr(t,e){return e?{point:e(t.point)}:t}function Jo(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Fr({point:t},e){return{point:t,delta:Jo(t,ra(e)),offset:Jo(t,Ed(e)),velocity:Sd(e,.1)}}function Ed(t){return t[0]}function ra(t){return t[t.length-1]}function Sd(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,n=null;const o=ra(t);for(;r>=0&&(n=t[r],!(o.timestamp-n.timestamp>Pe(e)));)r--;if(!n)return{x:0,y:0};const i=Te(o.timestamp-n.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-n.x)/i,y:(o.y-n.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function kd(t,{min:e,max:r},n){return e!==void 0&&t<e?t=n?K(e,t,n.min):Math.max(t,e):r!==void 0&&t>r&&(t=n?K(r,t,n.max):Math.min(t,r)),t}function ei(t,e,r){return{min:e!==void 0?t.min+e:void 0,max:r!==void 0?t.max+r-(t.max-t.min):void 0}}function Cd(t,{top:e,left:r,bottom:n,right:o}){return{x:ei(t.x,r,o),y:ei(t.y,e,n)}}function ti(t,e){let r=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,n]=[n,r]),{min:r,max:n}}function Nd(t,e){return{x:ti(t.x,e.x),y:ti(t.y,e.y)}}function Md(t,e){let r=.5;const n=ae(t),o=ae(e);return o>n?r=Ft(e.min,e.max-n,t.min):n>o&&(r=Ft(t.min,t.max-o,e.min)),ke(0,1,r)}function Ad(t,e){const r={};return e.min!==void 0&&(r.min=e.min-t.min),e.max!==void 0&&(r.max=e.max-t.min),r}const na=.35;function Dd(t=.35){return t===!1?t=0:t===!0&&(t=na),{x:ri(t,"left","right"),y:ri(t,"top","bottom")}}function ri(t,e,r){return{min:ni(t,e),max:ni(t,r)}}function ni(t,e){return typeof t=="number"?t:t[e]||0}const Vd=new WeakMap;let Ld=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Q(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const{dragSnapToOrigin:o}=this.getProps();this.panSession=new ta(e,{onSessionStart:i=>{const{dragSnapToOrigin:s}=this.getProps();s?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Ht(i).point)},onStart:(i,s)=>{const{drag:a,dragPropagation:l,onDragStart:u}=this.getProps();if(a&&!l&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xd(a),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),he((h=>{let p=this.getAxisMotionValue(h).get()||0;if(Ee.test(p)){const{projection:m}=this.visualElement;if(m&&m.layout){const v=m.layout.layoutBox[h];v&&(p=ae(v)*(parseFloat(p)/100))}}this.originPoint[h]=p})),u&&B.postRender((()=>u(i,s))),on(this.visualElement,"transform");const{animationState:d}=this.visualElement;d&&d.setActive("whileDrag",!0)},onMove:(i,s)=>{const{dragPropagation:a,dragDirectionLock:l,onDirectionLock:u,onDrag:d}=this.getProps();if(!a&&!this.openDragLock)return;const{offset:h}=s;if(l&&this.currentDirection===null)return this.currentDirection=(function(p,m=10){let v=null;return Math.abs(p.y)>m?v="y":Math.abs(p.x)>m&&(v="x"),v})(h),void(this.currentDirection!==null&&u&&u(this.currentDirection));this.updateAxis("x",s.point,h),this.updateAxis("y",s.point,h),this.visualElement.render(),d&&d(i,s)},onSessionEnd:(i,s)=>this.stop(i,s),resumeAnimation:()=>he((i=>this.getAnimationState(i)==="paused"&&this.getAxisMotionValue(i).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:o,contextWindow:ea(this.visualElement)})}stop(e,r){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&B.postRender((()=>i(e,r)))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,n){const{drag:o}=this.getProps();if(!n||!Jt(e,o,this.currentDirection))return;const i=this.getAxisMotionValue(e);let s=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(s=kd(s,this.constraints[e],this.elastic[e])),i.set(s)}resolveConstraints(){const{dragConstraints:e,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&lt(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&Cd(n.layoutBox,e),this.elastic=Dd(r),o!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&he((i=>{this.constraints!==!1&&this.getAxisMotionValue(i)&&(this.constraints[i]=Ad(n.layoutBox[i],this.constraints[i]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!lt(e))return!1;const n=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=Pd(n,o.root,this.visualElement.getTransformPagePoint());let s=Nd(o.layout.layoutBox,i);if(r){const a=r(bd(s));this.hasMutatedConstraints=!!a,a&&(s=Gs(a))}return s}startAnimation(e){const{drag:r,dragMomentum:n,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=he((d=>{if(!Jt(d,r,this.currentDirection))return;let h=l&&l[d]||{};s&&(h={min:0,max:0});const p=o?200:1e6,m=o?40:1e7,v={type:"inertia",velocity:n?e[d]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(d,v)}));return Promise.all(u).then(a)}startAxisValueAnimation(e,r){const n=this.getAxisMotionValue(e);return on(this.visualElement,e),n.start(Jn(e,n,0,r,this.visualElement,!1))}stopAnimation(){he((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){he((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[r]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){he((r=>{const{drag:n}=this.getProps();if(!Jt(r,n,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(r);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[r];i.set(e[r]-K(s,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!lt(r)||!n||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};he((s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();o[s]=Md({min:l,max:l},this.constraints[s])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),he((s=>{if(!Jt(s,e,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(K(l,u,o[s]))}))}addListeners(){if(!this.visualElement.current)return;Vd.set(this.visualElement,this);const e=this.visualElement.current,r=kt(e,"pointerdown",(l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)})),n=()=>{const{dragConstraints:l}=this.getProps();lt(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",n);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),B.read(n);const s=zt(window,"resize",(()=>this.scalePositionWithinConstraints())),a=o.addEventListener("didUpdate",(({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(he((d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))})),this.visualElement.render())}));return()=>{s(),r(),i(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=na,dragMomentum:a=!0}=e;return{...e,drag:r,dragDirectionLock:n,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}};function Jt(t,e,r){return!(e!==!0&&e!==t||r!==null&&r!==t)}let Rd=class extends Re{constructor(e){super(e),this.removeGroupControls=ve,this.removeListeners=ve,this.controls=new Ld(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ve}unmount(){this.removeGroupControls(),this.removeListeners()}};const oi=t=>(e,r)=>{t&&B.postRender((()=>t(e,r)))};let Fd=class extends Re{constructor(){super(...arguments),this.removePointerDownListener=ve}onPointerDown(e){this.session=new ta(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ea(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:n,onPanEnd:o}=this.node.getProps();return{onSessionStart:oi(e),onStart:oi(r),onMove:n,onEnd:(i,s)=>{delete this.session,o&&B.postRender((()=>o(i,s)))}}}mount(){this.removePointerDownListener=kt(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};const{schedule:no}=us(queueMicrotask,!1),oa=y.createContext({}),ir={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ii(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const bt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string"){if(!L.test(t))return t;t=parseFloat(t)}return`${ii(t,e.target.x)}% ${ii(t,e.target.y)}%`}},Id={correct:(t,{treeScale:e,projectionDelta:r})=>{const n=t,o=Le.parse(t);if(o.length>5)return n;const i=Le.createTransformer(t),s=typeof o[0]!="number"?1:0,a=r.x.scale*e.x,l=r.y.scale*e.y;o[0+s]/=a,o[1+s]/=l;const u=K(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}},Ot={};function zd(t){for(const e in t)Ot[e]=t[e],qn(e)&&(Ot[e].isCSSVariable=!0)}let Od=class extends y.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:n,layoutId:o}=this.props,{projection:i}=e;zd(Bd),i&&(r.group&&r.group.add(i),n&&n.register&&o&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),ir.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:n,drag:o,isPresent:i}=this.props,s=n.projection;return s&&(s.isPresent=i,o||e.layoutDependency!==r||r===void 0||e.isPresent!==i?s.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?s.promote():s.relegate()||B.postRender((()=>{const a=s.getStack();a&&a.members.length||this.safeToRemove()})))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),no.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}};function ia(t){const[e,r]=Dl(),n=y.useContext(cs);return c.jsx(Od,{...t,layoutGroup:n,switchLayoutGroup:y.useContext(oa),isPresent:e,safeToRemove:r})}const Bd={borderRadius:{...bt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:bt,borderTopRightRadius:bt,borderBottomLeftRadius:bt,borderBottomRightRadius:bt,boxShadow:Id};function Yd(t,e,r){const n=ie(t)?t:Dt(t);return n.start(Jn("",n,e,r)),n.animation}function Xd(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Ud=(t,e)=>t.depth-e.depth;let Hd=class{constructor(){this.children=[],this.isDirty=!1}add(e){Ln(this.children,e),this.isDirty=!0}remove(e){Rn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ud),this.isDirty=!1,this.children.forEach(e)}};function Kd(t,e){const r=je.now(),n=({timestamp:o})=>{const i=o-r;i>=e&&(Ve(n),t(i-e))};return B.read(n,!0),()=>Ve(n)}function sr(t){const e=ie(t)?t.get():t;return zl(e)?e.toValue():e}const sa=["TopLeft","TopRight","BottomLeft","BottomRight"],Wd=sa.length,si=t=>typeof t=="string"?parseFloat(t):t,ai=t=>typeof t=="number"||L.test(t);function qd(t,e,r,n,o,i){o?(t.opacity=K(0,r.opacity!==void 0?r.opacity:1,Gd(n)),t.opacityExit=K(e.opacity!==void 0?e.opacity:1,0,Qd(n))):i&&(t.opacity=K(e.opacity!==void 0?e.opacity:1,r.opacity!==void 0?r.opacity:1,n));for(let s=0;s<Wd;s++){const a=`border${sa[s]}Radius`;let l=li(e,a),u=li(r,a);l===void 0&&u===void 0||(l||(l=0),u||(u=0),l===0||u===0||ai(l)===ai(u)?(t[a]=Math.max(K(si(l),si(u),n),0),(Ee.test(u)||Ee.test(l))&&(t[a]+="%")):t[a]=u)}(e.rotate||r.rotate)&&(t.rotate=K(e.rotate||0,r.rotate||0,n))}function li(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Gd=aa(0,.5,js),Qd=aa(.5,.95,ve);function aa(t,e,r){return n=>n<t?0:n>e?1:r(Ft(t,e,n))}function ci(t,e){t.min=e.min,t.max=e.max}function ue(t,e){ci(t.x,e.x),ci(t.y,e.y)}function di(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function ui(t,e,r,n,o){return t=mr(t-=e,1/r,n),o!==void 0&&(t=mr(t,1/o,n)),t}function Zd(t,e=0,r=1,n=.5,o,i=t,s=t){if(Ee.test(e)&&(e=parseFloat(e),e=K(s.min,s.max,e/100)-s.min),typeof e!="number")return;let a=K(i.min,i.max,n);t===i&&(a-=e),t.min=ui(t.min,e,r,a,o),t.max=ui(t.max,e,r,a,o)}function hi(t,e,[r,n,o],i,s){Zd(t,e[r],e[n],e[o],e.scale,i,s)}const Jd=["x","scaleX","originX"],eu=["y","scaleY","originY"];function mi(t,e,r,n){hi(t.x,e,Jd,r?r.x:void 0,n?n.x:void 0),hi(t.y,e,eu,r?r.y:void 0,n?n.y:void 0)}function pi(t){return t.translate===0&&t.scale===1}function la(t){return pi(t.x)&&pi(t.y)}function fi(t,e){return t.min===e.min&&t.max===e.max}function tu(t,e){return fi(t.x,e.x)&&fi(t.y,e.y)}function vi(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function ca(t,e){return vi(t.x,e.x)&&vi(t.y,e.y)}function gi(t){return ae(t.x)/ae(t.y)}function xi(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}let ru=class{constructor(){this.members=[]}add(e){Ln(this.members,e),e.scheduleRender()}remove(e){if(Rn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex((o=>e===o));if(r===0)return!1;let n;for(let o=r;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){n=i;break}}return!!n&&(this.promote(n),!0)}promote(e,r){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,r&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:r,resumingFrom:n}=e;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function nu(t,e,r){let n="";const o=t.x.translate/e.x,i=t.y.translate/e.y,s=r?.z||0;if((o||i||s)&&(n=`translate3d(${o}px, ${i}px, ${s}px) `),e.x===1&&e.y===1||(n+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:u,rotate:d,rotateX:h,rotateY:p,skewX:m,skewY:v}=r;u&&(n=`perspective(${u}px) ${n}`),d&&(n+=`rotate(${d}deg) `),h&&(n+=`rotateX(${h}deg) `),p&&(n+=`rotateY(${p}deg) `),m&&(n+=`skewX(${m}deg) `),v&&(n+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return a===1&&l===1||(n+=`scale(${a}, ${l})`),n||"none"}const Ir=["","X","Y","Z"],ou={visibility:"hidden"};let iu=0;function zr(t,e,r,n){const{latestValues:o}=e;o[t]&&(r[t]=o[t],e.setStaticValue(t,0),n&&(n[t]=0))}function da(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const r=fs(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(r,"transform",B,!(o||i))}const{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&da(n)}function ua({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:n,resetTransform:o}){return class{constructor(i={},s=e?.()){this.id=iu++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(lu),this.nodes.forEach(mu),this.nodes.forEach(pu),this.nodes.forEach(cu)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=i,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let a=0;a<this.path.length;a++)this.path[a].shouldResetTransform=!0;this.root===this&&(this.nodes=new Hd)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Fn),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const a=this.eventHandlers.get(i);a&&a.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}mount(i,s=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Xd(i),this.instance=i;const{layoutId:a,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(i),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),s&&(l||a)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(i,(()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Kd(h,250),ir.hasAnimatedSinceResize&&(ir.hasAnimatedSinceResize=!1,this.nodes.forEach(bi))}))}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||l)&&this.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h,hasRelativeLayoutChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const v=this.options.transition||u.getDefaultTransition()||yu,{onLayoutAnimationStart:x,onLayoutAnimationComplete:b}=u.getProps(),_=!this.targetLayout||!ca(this.targetLayout,m),T=!h&&p;if(this.options.layoutRoot||this.resumeFrom||T||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,T);const N={...Vn(v,"layout"),onPlay:x,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else h||bi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const i=this.getStack();i&&i.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ve(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fu),this.animationId++)}getTransformTemplate(){const{visualElement:i}=this.options;return i&&i.getProps().transformTemplate}willUpdate(i=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&da(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:a}=this.options;if(s===void 0&&!a)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(yi);this.isUpdating||this.nodes.forEach(uu),this.isUpdating=!1,this.nodes.forEach(hu),this.nodes.forEach(su),this.nodes.forEach(au),this.clearAllSnapshots();const i=je.now();re.delta=ke(0,1e3/60,i-re.timestamp),re.timestamp=i,re.isProcessing=!0,Mr.update.process(re),Mr.preRender.process(re),Mr.render.process(re),re.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,no.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(du),this.sharedNodes.forEach(vu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||ae(this.snapshot.measuredBox.x)||ae(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let a=0;a<this.path.length;a++)this.path[a].updateScroll();const i=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Q(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,i?i.layoutBox:void 0)}updateScroll(i="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s){const a=n(this.instance);this.scroll={animationId:this.root.animationId,phase:i,isRoot:a,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:a}}}resetTransform(){if(!o)return;const i=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!la(this.projectionDelta),a=this.getTransformTemplate(),l=a?a(this.latestValues,""):void 0,u=l!==this.prevTransformTemplateValue;i&&(s||Be(this.latestValues)||u)&&(o(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let a=this.removeElementScroll(s);var l;return i&&(a=this.removeTransform(a)),Pi((l=a).x),Pi(l.y),{animationId:this.root.animationId,measuredBox:s,layoutBox:a,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Q();const s=i.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(bu))){const{scroll:a}=this.root;a&&(st(s.x,a.offset.x),st(s.y,a.offset.y))}return s}removeElementScroll(i){const s=Q();if(ue(s,i),this.scroll?.wasRoot)return s;for(let a=0;a<this.path.length;a++){const l=this.path[a],{scroll:u,options:d}=l;l!==this.root&&u&&d.layoutScroll&&(u.wasRoot&&ue(s,i),st(s.x,u.offset.x),st(s.y,u.offset.y))}return s}applyTransform(i,s=!1){const a=Q();ue(a,i);for(let l=0;l<this.path.length;l++){const u=this.path[l];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&at(a,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Be(u.latestValues)&&at(a,u.latestValues)}return Be(this.latestValues)&&at(a,this.latestValues),a}removeTransform(i){const s=Q();ue(s,i);for(let a=0;a<this.path.length;a++){const l=this.path[a];if(!l.instance||!Be(l.latestValues))continue;gn(l.latestValues)&&l.updateSnapshot();const u=Q(),d=l.measurePageBox();ue(u,d),mi(s,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,u)}return Be(this.latestValues)&&mi(s,this.latestValues),s}setTargetDelta(i){this.targetDelta=i,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade===void 0||i.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==re.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(i=!1){const s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);const a=!!this.resumingFrom||this!==s;if(!(i||a&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:l,layoutId:u}=this.options;if(this.layout&&(l||u)){if(this.resolvedRelativeTargetAt=re.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),Nt(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Q(),this.targetWithTransforms=Q()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$d(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ue(this.target,this.layout.layoutBox),Zs(this.target,this.targetDelta)):ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),Nt(this.relativeTargetOrigin,this.target,d.target),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!gn(this.parent.latestValues)&&!Qs(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const i=this.getLead(),s=!!this.resumingFrom||this!==i;let a=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(a=!1),s&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(a=!1),this.resolvedRelativeTargetAt===re.timestamp&&(a=!1),a)return;const{layout:l,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!l&&!u)return;ue(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;jd(this.layoutCorrected,this.treeScale,this.path,s),!i.layout||i.target||this.treeScale.x===1&&this.treeScale.y===1||(i.target=i.layout.layoutBox,i.targetWithTransforms=Q());const{target:p}=i;p?(this.projectionDelta&&this.prevProjectionDelta?(di(this.prevProjectionDelta.x,this.projectionDelta.x),di(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Ct(this.projectionDelta,this.layoutCorrected,p,this.latestValues),this.treeScale.x===d&&this.treeScale.y===h&&xi(this.projectionDelta.x,this.prevProjectionDelta.x)&&xi(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){if(this.options.visualElement?.scheduleRender(),i){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=it(),this.projectionDelta=it(),this.projectionDeltaWithTransform=it()}setAnimationOrigin(i,s=!1){const a=this.snapshot,l=a?a.latestValues:{},u={...this.latestValues},d=it();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const h=Q(),p=(a?a.source:void 0)!==(this.layout?this.layout.source:void 0),m=this.getStack(),v=!m||m.members.length<=1,x=!!(p&&!v&&this.options.crossfade===!0&&!this.path.some(xu));let b;this.animationProgress=0,this.mixTargetDelta=_=>{const T=_/1e3;_i(d.x,i.x,T),_i(d.y,i.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Nt(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),gu(this.relativeTarget,this.relativeTargetOrigin,h,T),b&&tu(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Q()),ue(b,this.relativeTarget)),p&&(this.animationValues=u,qd(u,l,this.latestValues,T,x,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(i){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ve(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update((()=>{ir.hasAnimatedSinceResize=!0,this.currentAnimation=Yd(0,1e3,{...i,onUpdate:s=>{this.mixTargetDelta(s),i.onUpdate&&i.onUpdate(s)},onStop:()=>{},onComplete:()=>{i.onComplete&&i.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const i=this.getStack();i&&i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:a,layout:l,latestValues:u}=i;if(s&&a&&l){if(this!==i&&this.layout&&l&&ha(this.options.animationType,this.layout.layoutBox,l.layoutBox)){a=this.target||Q();const d=ae(this.layout.layoutBox.x);a.x.min=i.target.x.min,a.x.max=a.x.min+d;const h=ae(this.layout.layoutBox.y);a.y.min=i.target.y.min,a.y.max=a.y.min+h}ue(s,a),at(s,u),Ct(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(i,s){this.sharedNodes.has(i)||this.sharedNodes.set(i,new ru),this.sharedNodes.get(i).add(s);const a=s.options.initialPromotionConfig;s.promote({transition:a?a.transition:void 0,preserveFollowOpacity:a&&a.shouldPreserveFollowOpacity?a.shouldPreserveFollowOpacity(s):void 0})}isLead(){const i=this.getStack();return!i||i.lead===this}getLead(){const{layoutId:i}=this.options;return i&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:i}=this.options;return i?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:a}={}){const l=this.getStack();l&&l.promote(this,a),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return!!i&&i.relegate(this)}resetSkewAndRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:a}=i;if((a.z||a.rotate||a.rotateX||a.rotateY||a.rotateZ||a.skewX||a.skewY)&&(s=!0),!s)return;const l={};a.z&&zr("z",i,l,this.animationValues);for(let u=0;u<Ir.length;u++)zr(`rotate${Ir[u]}`,i,l,this.animationValues),zr(`skew${Ir[u]}`,i,l,this.animationValues);i.render();for(const u in l)i.setStaticValue(u,l[u]),this.animationValues&&(this.animationValues[u]=l[u]);i.scheduleRender()}getProjectionStyles(i){if(!this.instance||this.isSVG)return;if(!this.isVisible)return ou;const s={visibility:""},a=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,s.opacity="",s.pointerEvents=sr(i?.pointerEvents)||"",s.transform=a?a(this.latestValues,""):"none",s;const l=this.getLead();if(!this.projectionDelta||!this.layout||!l.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=sr(i?.pointerEvents)||""),this.hasProjected&&!Be(this.latestValues)&&(p.transform=a?a({},""):"none",this.hasProjected=!1),p}const u=l.animationValues||l.latestValues;this.applyTransformsToTarget(),s.transform=nu(this.projectionDeltaWithTransform,this.treeScale,u),a&&(s.transform=a(u,s.transform));const{x:d,y:h}=this.projectionDelta;s.transformOrigin=`${100*d.origin}% ${100*h.origin}% 0`,l.animationValues?s.opacity=l===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:s.opacity=l===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in Ot){if(u[p]===void 0)continue;const{correct:m,applyTo:v,isCSSVariable:x}=Ot[p],b=s.transform==="none"?u[p]:m(u[p],l);if(v){const _=v.length;for(let T=0;T<_;T++)s[v[T]]=b}else x?this.options.visualElement.renderState.vars[p]=b:s[p]=b}return this.options.layoutId&&(s.pointerEvents=l===this?sr(i?.pointerEvents)||"":"none"),s}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((i=>i.currentAnimation?.stop())),this.root.nodes.forEach(yi),this.root.sharedNodes.clear()}}}function su(t){t.updateLayout()}function au(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:n}=t.layout,{animationType:o}=t.options,i=e.source!==t.layout.source;o==="size"?he((d=>{const h=i?e.measuredBox[d]:e.layoutBox[d],p=ae(h);h.min=r[d].min,h.max=h.min+p})):ha(o,e.layoutBox,r)&&he((d=>{const h=i?e.measuredBox[d]:e.layoutBox[d],p=ae(r[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)}));const s=it();Ct(s,r,e.layoutBox);const a=it();i?Ct(a,t.applyTransform(n,!0),e.measuredBox):Ct(a,r,e.layoutBox);const l=!la(s);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const m=Q();Nt(m,e.layoutBox,h.layoutBox);const v=Q();Nt(v,r,p.layoutBox),ca(m,v)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function lu(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function cu(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function du(t){t.clearSnapshot()}function yi(t){t.clearMeasurements()}function uu(t){t.isLayoutDirty=!1}function hu(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function bi(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function mu(t){t.resolveTargetDelta()}function pu(t){t.calcProjection()}function fu(t){t.resetSkewAndRotation()}function vu(t){t.removeLeadSnapshot()}function _i(t,e,r){t.translate=K(e.translate,0,r),t.scale=K(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function wi(t,e,r,n){t.min=K(e.min,r.min,n),t.max=K(e.max,r.max,n)}function gu(t,e,r,n){wi(t.x,e.x,r.x,n),wi(t.y,e.y,r.y,n)}function xu(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yu={duration:.45,ease:[.4,0,.1,1]},$i=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ji=$i("applewebkit/")&&!$i("chrome/")?Math.round:ve;function Pi(t){t.min=ji(t.min),t.max=ji(t.max)}function ha(t,e,r){return t==="position"||t==="preserve-aspect"&&!wd(gi(e),gi(r),.2)}function bu(t){return t!==t.root&&t.scroll?.wasRoot}const _u=ua({attachResizeListener:(t,e)=>zt(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Or={current:void 0},ma=ua({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Or.current){const t=new _u({});t.mount(window),t.setOptions({layoutScroll:!0}),Or.current=t}return Or.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),wu={pan:{Feature:Fd},drag:{Feature:Rd,ProjectionNode:ma,MeasureLayout:ia}};function $u(t,e,r){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let n=document;const o=r?.[t]??n.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}function pa(t,e){const r=$u(t),n=new AbortController;return[r,{passive:!0,...e,signal:n.signal},()=>n.abort()]}function Ti(t){return!(t.pointerType==="touch"||qs())}function ju(t,e,r={}){const[n,o,i]=pa(t,r),s=a=>{if(!Ti(a))return;const{target:l}=a,u=e(l,a);if(typeof u!="function"||!l)return;const d=h=>{Ti(h)&&(u(h),l.removeEventListener("pointerleave",d))};l.addEventListener("pointerleave",d,o)};return n.forEach((a=>{a.addEventListener("pointerenter",s,o)})),i}function Ei(t,e,r){const{props:n}=t;t.animationState&&n.whileHover&&t.animationState.setActive("whileHover",r==="Start");const o=n["onHover"+r];o&&B.postRender((()=>o(e,Ht(e))))}let Pu=class extends Re{mount(){const{current:e}=this.node;e&&(this.unmount=ju(e,((r,n)=>(Ei(this.node,n,"Start"),o=>Ei(this.node,o,"End")))))}unmount(){}},Tu=class extends Re{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ut(zt(this.node.current,"focus",(()=>this.onFocus())),zt(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}};const fa=(t,e)=>!!e&&(t===e||fa(t,e.parentElement)),Eu=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Su(t){return Eu.has(t.tagName)||t.tabIndex!==-1}const Et=new WeakSet;function Si(t){return e=>{e.key==="Enter"&&t(e)}}function Br(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ku=(t,e)=>{const r=t.currentTarget;if(!r)return;const n=Si((()=>{if(Et.has(r))return;Br(r,"down");const o=Si((()=>{Br(r,"up")}));r.addEventListener("keyup",o,e),r.addEventListener("blur",(()=>Br(r,"cancel")),e)}));r.addEventListener("keydown",n,e),r.addEventListener("blur",(()=>r.removeEventListener("keydown",n)),e)};function ki(t){return ro(t)&&!qs()}function Cu(t,e,r={}){const[n,o,i]=pa(t,r),s=a=>{const l=a.currentTarget;if(!ki(a)||Et.has(l))return;Et.add(l);const u=e(l,a),d=(m,v)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",p),ki(m)&&Et.has(l)&&(Et.delete(l),typeof u=="function"&&u(m,{success:v}))},h=m=>{d(m,l===window||l===document||r.useGlobalTarget||fa(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",h,o),window.addEventListener("pointercancel",p,o)};return n.forEach((a=>{(r.useGlobalTarget?window:a).addEventListener("pointerdown",s,o),a instanceof HTMLElement&&(a.addEventListener("focus",(l=>ku(l,o))),Su(a)||a.hasAttribute("tabindex")||(a.tabIndex=0))})),i}function Ci(t,e,r){const{props:n}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&n.whileTap&&t.animationState.setActive("whileTap",r==="Start");const o=n["onTap"+(r==="End"?"":r)];o&&B.postRender((()=>o(e,Ht(e))))}let Nu=class extends Re{mount(){const{current:e}=this.node;e&&(this.unmount=Cu(e,((r,n)=>(Ci(this.node,n,"Start"),(o,{success:i})=>Ci(this.node,o,i?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}};const yn=new WeakMap,Yr=new WeakMap,Mu=t=>{const e=yn.get(t.target);e&&e(t)},Au=t=>{t.forEach(Mu)};function Du(t,e,r){const n=(function({root:o,...i}){const s=o||document;Yr.has(s)||Yr.set(s,{});const a=Yr.get(s),l=JSON.stringify(i);return a[l]||(a[l]=new IntersectionObserver(Au,{root:o,...i})),a[l]})(e);return yn.set(t,r),n.observe(t),()=>{yn.delete(t),n.unobserve(t)}}const Vu={some:0,all:1};let Lu=class extends Re{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:n,amount:o="some",once:i}=e,s={root:r?r.current:void 0,rootMargin:n,threshold:typeof o=="number"?o:Vu[o]};return Du(this.node.current,s,(a=>{const{isIntersecting:l}=a;if(this.isInView===l||(this.isInView=l,i&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=l?u:d;h&&h(a)}))}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some((function({viewport:n={}},{viewport:o={}}={}){return i=>n[i]!==o[i]})(e,r))&&this.startObserver()}unmount(){}};const Ru={inView:{Feature:Lu},tap:{Feature:Nu},focus:{Feature:Tu},hover:{Feature:Pu}},Fu={layout:{ProjectionNode:ma,MeasureLayout:ia}},va=y.createContext({strict:!1}),wr=y.createContext({});function $r(t){return br(t.animate)||to.some((e=>It(t[e])))}function ga(t){return!!($r(t)||t.variants)}function Iu(t,e){if($r(t)){const{initial:r,animate:n}=t;return{initial:r===!1||It(r)?r:void 0,animate:It(n)?n:void 0}}return t.inherit!==!1?e:{}}function zu(t){const{initial:e,animate:r}=Iu(t,y.useContext(wr));return y.useMemo((()=>({initial:e,animate:r})),[Ni(e),Ni(r)])}function Ni(t){return Array.isArray(t)?t.join(" "):t}const Mi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},mt={};for(const t in Mi)mt[t]={isEnabled:e=>Mi[t].some((r=>!!e[r]))};function Ou(t){for(const e in t)mt[e]={...mt[e],...t[e]}}const Bu=Symbol.for("motionComponentSymbol");function Yu(t,e,r){return y.useCallback((n=>{n&&t.onMount&&t.onMount(n),e&&(n?e.mount(n):e.unmount()),r&&(typeof r=="function"?r(n):lt(r)&&(r.current=n))}),[e])}function Xu(t,e,r,n,o){const{visualElement:i}=y.useContext(wr),s=y.useContext(va),a=y.useContext(An),l=y.useContext(ds).reducedMotion,u=y.useRef(null);n=n||s.renderer,!u.current&&n&&(u.current=n(t,{visualState:e,parent:i,props:r,presenceContext:a,blockInitialAnimation:!!a&&a.initial===!1,reducedMotionConfig:l}));const d=u.current,h=y.useContext(oa);!d||d.projection||!o||d.type!=="html"&&d.type!=="svg"||(function(x,b,_,T){const{layoutId:N,layout:M,drag:w,dragConstraints:A,layoutScroll:D,layoutRoot:f}=b;x.projection=new _(x.latestValues,b["data-framer-portal-id"]?void 0:xa(x.parent)),x.projection.setOptions({layoutId:N,layout:M,alwaysMeasureLayout:!!w||A&&lt(A),visualElement:x,animationType:typeof M=="string"?M:"both",initialPromotionConfig:T,layoutScroll:D,layoutRoot:f})})(u.current,r,o,h);const p=y.useRef(!1);y.useInsertionEffect((()=>{d&&p.current&&d.update(r,a)}));const m=r[ps],v=y.useRef(!!m&&!window.MotionHandoffIsComplete?.(m)&&window.MotionHasOptimisedAnimation?.(m));return Al((()=>{d&&(p.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),no.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())})),y.useEffect((()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(m)})),v.current=!1))})),d}function xa(t){if(t)return t.options.allowProjection!==!1?t.projection:xa(t.parent)}function Uu({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:n,Component:o}){function i(a,l){let u;const d={...y.useContext(ds),...a,layoutId:Hu(a)},{isStatic:h}=d,p=zu(a),m=n(a,h);if(!h&&Mn){(function(x,b){y.useContext(va).strict})();const v=(function(x){const{drag:b,layout:_}=mt;if(!b&&!_)return{};const T={...b,..._};return{MeasureLayout:b?.isEnabled(x)||_?.isEnabled(x)?T.MeasureLayout:void 0,ProjectionNode:T.ProjectionNode}})(d);u=v.MeasureLayout,p.visualElement=Xu(o,m,d,e,v.ProjectionNode)}return c.jsxs(wr.Provider,{value:p,children:[u&&p.visualElement?c.jsx(u,{visualElement:p.visualElement,...d}):null,r(o,a,Yu(m,p.visualElement,l),m,h,p.visualElement)]})}t&&Ou(t),i.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const s=y.forwardRef(i);return s[Bu]=o,s}function Hu({layoutId:t}){const e=y.useContext(cs).id;return e&&t!==void 0?e+"-"+t:t}function ya(t,{layout:e,layoutId:r}){return Je.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!Ot[t]||t==="opacity")}const ba=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Ku={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Wu=vt.length;function qu(t,e,r){let n="",o=!0;for(let i=0;i<Wu;i++){const s=vt[i],a=t[s];if(a===void 0)continue;let l=!0;if(l=typeof a=="number"?a===(s.startsWith("scale")?1:0):parseFloat(a)===0,!l||r){const u=ba(a,Kn[s]);l||(o=!1,n+=`${Ku[s]||s}(${u}) `),r&&(e[s]=u)}}return n=n.trim(),r?n=r(e,o?"":n):o&&(n="none"),n}function oo(t,e,r){const{style:n,vars:o,transformOrigin:i}=t;let s=!1,a=!1;for(const l in e){const u=e[l];if(Je.has(l))s=!0;else if(qn(l))o[l]=u;else{const d=ba(u,Kn[l]);l.startsWith("origin")?(a=!0,i[l]=d):n[l]=d}}if(e.transform||(s||r?n.transform=qu(e,t.transform,r):n.transform&&(n.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=i;n.transformOrigin=`${l} ${u} ${d}`}}const io=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function _a(t,e,r){for(const n in e)ie(e[n])||ya(n,r)||(t[n]=e[n])}function Gu(t,e){const r={};return _a(r,t.style||{},t),Object.assign(r,(function({transformTemplate:n},o){return y.useMemo((()=>{const i=io();return oo(i,o,n),Object.assign({},i.vars,i.style)}),[o])})(t,e)),r}function Qu(t,e){const r={},n=Gu(t,e);return t.drag&&t.dragListener!==!1&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=t.drag===!0?"none":"pan-"+(t.drag==="x"?"y":"x")),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=n,r}const Zu=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pr(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Zu.has(t)}let wa=t=>!pr(t);function Ju(t){t&&(wa=e=>e.startsWith("on")?!pr(e):t(e))}try{Ju(require("@emotion/is-prop-valid").default)}catch{}function eh(t,e,r){const n={};for(const o in t)o==="values"&&typeof t.values=="object"||(wa(o)||r===!0&&pr(o)||!e&&!pr(o)||t.draggable&&o.startsWith("onDrag"))&&(n[o]=t[o]);return n}const th=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function so(t){return typeof t=="string"&&!t.includes("-")&&!!(th.indexOf(t)>-1||/[A-Z]/u.test(t))}const rh={offset:"stroke-dashoffset",array:"stroke-dasharray"},nh={offset:"strokeDashoffset",array:"strokeDasharray"};function oh(t,e,r=1,n=0,o=!0){t.pathLength=1;const i=o?rh:nh;t[i.offset]=L.transform(-n);const s=L.transform(e),a=L.transform(r);t[i.array]=`${s} ${a}`}function Ai(t,e,r){return typeof t=="string"?t:L.transform(e+r*t)}function ih(t,e,r){return`${Ai(e,t.x,t.width)} ${Ai(r,t.y,t.height)}`}function ao(t,{attrX:e,attrY:r,attrScale:n,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,h){if(oo(t,u,h),d)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:v}=t;p.transform&&(v&&(m.transform=p.transform),delete p.transform),v&&(o!==void 0||i!==void 0||m.transform)&&(m.transformOrigin=ih(v,o!==void 0?o:.5,i!==void 0?i:.5)),e!==void 0&&(p.x=e),r!==void 0&&(p.y=r),n!==void 0&&(p.scale=n),s!==void 0&&oh(p,s,a,l,!1)}const $a=()=>({...io(),attrs:{}}),lo=t=>typeof t=="string"&&t.toLowerCase()==="svg";function sh(t,e,r,n){const o=y.useMemo((()=>{const i=$a();return ao(i,e,lo(n),t.transformTemplate),{...i.attrs,style:{...i.style}}}),[e]);if(t.style){const i={};_a(i,t.style,t),o.style={...i,...o.style}}return o}function ah(t=!1){return(e,r,n,{latestValues:o},i)=>{const s=(so(e)?sh:Qu)(r,o,i,e),a=eh(r,typeof e=="string",t),l=e!==y.Fragment?{...a,...s,ref:n}:{},{children:u}=r,d=y.useMemo((()=>ie(u)?u.get():u),[u]);return y.createElement(e,{...l,children:d})}}const ja=t=>(e,r)=>{const n=y.useContext(wr),o=y.useContext(An),i=()=>(function({scrapeMotionValuesFromProps:s,createRenderState:a,onUpdate:l},u,d,h){const p={latestValues:lh(u,d,h,s),renderState:a()};return l&&(p.onMount=m=>l({props:u,current:m,...p}),p.onUpdate=m=>l(m)),p})(t,e,n,o);return r?i():Ml(i)};function lh(t,e,r,n){const o={},i=n(t,{});for(const p in i)o[p]=sr(i[p]);let{initial:s,animate:a}=t;const l=$r(t),u=ga(t);e&&u&&!l&&t.inherit!==!1&&(s===void 0&&(s=e.initial),a===void 0&&(a=e.animate));let d=!!r&&r.initial===!1;d=d||s===!1;const h=d?a:s;if(h&&typeof h!="boolean"&&!br(h)){const p=Array.isArray(h)?h:[h];for(let m=0;m<p.length;m++){const v=Dn(t,p[m]);if(v){const{transitionEnd:x,transition:b,..._}=v;for(const T in _){let N=_[T];Array.isArray(N)&&(N=N[d?N.length-1:0]),N!==null&&(o[T]=N)}for(const T in x)o[T]=x[T]}}}return o}function co(t,e,r){const{style:n}=t,o={};for(const i in n)(ie(n[i])||e.style&&ie(e.style[i])||ya(i,t)||r?.getValue(i)?.liveStyle!==void 0)&&(o[i]=n[i]);return o}const ch={useVisualState:ja({scrapeMotionValuesFromProps:co,createRenderState:io})};function Pa(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}function Ta(t,{style:e,vars:r},n,o){Object.assign(t.style,e,o&&o.getProjectionStyles(n));for(const i in r)t.style.setProperty(i,r[i])}const Ea=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Sa(t,e,r,n){Ta(t,e,void 0,n);for(const o in e.attrs)t.setAttribute(Ea.has(o)?o:In(o),e.attrs[o])}function ka(t,e,r){const n=co(t,e,r);for(const o in t)(ie(t[o])||ie(e[o]))&&(n[vt.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=t[o]);return n}const Di=["x","y","width","height","cx","cy","r"],dh={useVisualState:ja({scrapeMotionValuesFromProps:ka,createRenderState:$a,onUpdate:({props:t,prevProps:e,current:r,renderState:n,latestValues:o})=>{if(!r)return;let i=!!t.drag;if(!i){for(const a in o)if(Je.has(a)){i=!0;break}}if(!i)return;let s=!e;if(e)for(let a=0;a<Di.length;a++){const l=Di[a];t[l]!==e[l]&&(s=!0)}s&&B.read((()=>{Pa(r,n),B.render((()=>{ao(n,o,lo(r.tagName),t.transformTemplate),Sa(r,n)}))}))}})};function uh(t,e){return function(r,{forwardMotionProps:n}={forwardMotionProps:!1}){const o={...so(r)?dh:ch,preloadedFeatures:t,useRender:ah(n),createVisualElement:e,Component:r};return Uu(o)}}const bn={current:null},Ca={current:!1};function hh(){if(Ca.current=!0,Mn)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>bn.current=t.matches;t.addListener(e),e()}else bn.current=!1}const mh=[...Is,ne,Le],ph=t=>mh.find(Fs(t)),fh=new WeakMap;function vh(t,e,r){for(const n in e){const o=e[n],i=r[n];if(ie(o))t.addValue(n,o);else if(ie(i))t.addValue(n,Dt(o,{owner:t}));else if(i!==o)if(t.hasValue(n)){const s=t.getValue(n);s.liveStyle===!0?s.jump(o):s.hasAnimated||s.set(o)}else{const s=t.getStaticValue(n);t.addValue(n,Dt(s!==void 0?s:o,{owner:t}))}}for(const n in r)e[n]===void 0&&t.removeValue(n);return e}const Vi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let gh=class{scrapeMotionValuesFromProps(e,r,n){return{}}constructor({parent:e,props:r,presenceContext:n,reducedMotionConfig:o,blockInitialAnimation:i,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=je.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,B.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=s;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=r.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=r,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=$r(r),this.isVariantNode=ga(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...p}=this.scrapeMotionValuesFromProps(r,{},this);for(const m in p){const v=p[m];l[m]!==void 0&&ie(v)&&v.set(l[m],!1)}}mount(e){this.current=e,fh.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((r,n)=>this.bindToMotionValue(n,r))),Ca.current||hh(),this.shouldReduceMotion=this.reducedMotionConfig!=="never"&&(this.reducedMotionConfig==="always"||bn.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Ve(this.notifyUpdate),Ve(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Je.has(e);n&&this.onBindTransform&&this.onBindTransform();const o=r.on("change",(a=>{this.latestValues[e]=a,this.props.onUpdate&&B.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=r.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,(()=>{o(),i(),s&&s(),r.owner&&r.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in mt){const r=mt[e];if(!r)continue;const{isEnabled:n,Feature:o}=r;if(!this.features[e]&&o&&n(this.props)&&(this.features[e]=new o(this)),this.features[e]){const i=this.features[e];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Q()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Vi.length;n++){const o=Vi[n];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=e["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=vh(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const n=this.values.get(e);r!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&r!==void 0&&(n=Dt(r===null?void 0:r,{owner:this}),this.addValue(e,n)),n}readValue(e,r){let n=this.latestValues[e]===void 0&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return n!=null&&(typeof n=="string"&&(Vs(n)||Ts(n))?n=parseFloat(n):!ph(n)&&Le.test(r)&&(n=Ns(e,r)),this.setBaseTarget(e,ie(n)?n.get():n)),ie(n)?n.get():n}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){const{initial:r}=this.props;let n;if(typeof r=="string"||typeof r=="object"){const i=Dn(this.props,r,this.presenceContext?.custom);i&&(n=i[e])}if(r&&n!==void 0)return n;const o=this.getBaseTargetFromProps(this.props,e);return o===void 0||ie(o)?this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]:o}on(e,r){return this.events[e]||(this.events[e]=new Fn),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}},Na=class extends gh{constructor(){super(...arguments),this.KeyframeResolver=zs}sortInstanceNodePosition(e,r){return 2&e.compareDocumentPosition(r)?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:n}){delete r[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ie(e)&&(this.childSubscription=e.on("change",(r=>{this.current&&(this.current.textContent=`${r}`)})))}};function xh(t){return window.getComputedStyle(t)}let yh=class extends Na{constructor(){super(...arguments),this.type="html",this.renderInstance=Ta}readValueFromInstance(e,r){if(Je.has(r))return vc(e,r);{const n=xh(e),o=(qn(r)?n.getPropertyValue(r):n[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:r}){return Js(e,r)}build(e,r,n){oo(e,r,n.transformTemplate)}scrapeMotionValuesFromProps(e,r,n){return co(e,r,n)}},bh=class extends Na{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Q,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Pa(this.current,this.renderState)}}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(Je.has(r)){const n=Cs(r);return n&&n.default||0}return r=Ea.has(r)?r:In(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,n){return ka(e,r,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&B.postRender(this.updateDimensions)}build(e,r,n){ao(e,r,this.isSVGTag,n.transformTemplate)}renderInstance(e,r,n,o){Sa(e,r,n,o)}mount(e){this.isSVGTag=lo(e.tagName),super.mount(e)}};const _h=(t,e)=>so(t)?new bh(e):new yh(e,{allowProjection:t!==y.Fragment}),wh=uh({...gd,...Ru,...wu,...Fu},_h),$h=Vl(wh),jh={STANDARD:`cubic-bezier(${[.2,0,0,1].toString()})`};var Xr={ripple:"ripple-module_ripple__8Y3pc",hovered:"ripple-module_hovered__nOsN-",pressed:"ripple-module_pressed__WGjcN"};xe(`.ripple-module_ripple__8Y3pc {\r
  inset: 0;\r
  cursor: inherit;\r
  overflow: hidden;\r
  position: absolute;\r
  border-radius: inherit;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  &:before,\r
  &:after {\r
    content: '';\r
    opacity: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    inset: 0;\r
    transition:\r
      opacity 15ms linear,\r
      background-color 15ms linear;\r
  }\r
  &:after {\r
    background: radial-gradient(\r
      closest-side,\r
      var(--md-ripple-pressed-color, var(--md-sys-color-on-surface))\r
        max(100% - 70px, 65%),\r
      transparent 100%\r
    );\r
    transform-origin: center center;\r
    transition: opacity 375ms linear;\r
  }\r
  &.ripple-module_hovered__nOsN-:before {\r
    background-color: var(\r
      --md-ripple-hover-color,\r
      var(--md-sys-color-on-surface)\r
    );\r
    opacity: var(--md-ripple-hover-opacity, 0.08);\r
  }\r
  &.ripple-module_pressed__WGjcN:after {\r
    opacity: var(--md-ripple-pressed-opacity, 0.12);\r
    transition-duration: 105ms;\r
  }\r
}\r
`);const Ph=t=>{const[e,r]=y.useState(null);return y.useEffect((()=>{var n,o;const i=(n=t.current)===null||n===void 0?void 0:n.getAttribute("for");if(i){const s=document.getElementById(i),a=(o=t.current)===null||o===void 0?void 0:o.parentElement;r(s||a)}}),[t]),e};var se;(function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(se||(se={}));const Th=["click","keydown","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Kt=t=>{const{id:e,disabled:r=!1,style:n,className:o}=t,i=e||`actify-ripple${y.useId()}`,[s,a]=y.useState(!1),[l,u]=y.useState(!1),d=y.useRef(null),h=Ph(d),p=y.useRef(se.INACTIVE),m=y.useRef(""),v=y.useRef(""),x=y.useRef(0),b=y.useRef(null),_=y.useRef(null),T=y.useRef(!1),N=({pointerType:g})=>g==="touch",M=g=>{const{height:E,width:V}=d.current.getBoundingClientRect(),S={x:(V-x.current)/2,y:(E-x.current)/2};let I;return I=g instanceof PointerEvent?(X=>{const{scrollX:ye,scrollY:te}=window,{left:Ie,top:qt}=d.current.getBoundingClientRect(),Sr=ye+Ie,Gt=te+qt,{pageX:kr,pageY:hl}=X;return{x:kr-Sr,y:hl-Gt}})(g):{x:V/2,y:E/2},I={x:I.x-x.current/2,y:I.y-x.current/2},{startPoint:I,endPoint:S}},w=g=>{var E,V;if(!d.current)return;u(!0),(E=b.current)===null||E===void 0||E.cancel(),(()=>{const{height:te,width:Ie}=d.current.getBoundingClientRect(),qt=Math.max(te,Ie),Sr=Math.max(.35*qt,75),Gt=Math.floor(.2*qt),kr=Math.sqrt(Math.pow(Ie,2)+Math.pow(te,2))+10;x.current=Gt,v.current=""+(kr+Sr)/Gt,m.current=`${x.current}px`})();const{startPoint:S,endPoint:I}=M(g),X=`${S.x}px, ${S.y}px`,ye=`${I.x}px, ${I.y}px`;b.current=(V=d.current)===null||V===void 0?void 0:V.animate({top:[0,0],left:[0,0],height:[m.current,m.current],width:[m.current,m.current],transform:[`translate(${X}) scale(1)`,`translate(${ye}) scale(${v.current})`]},{pseudoElement:"::after",duration:450,easing:jh.STANDARD,fill:"forwards"})},A=()=>Cr(void 0,void 0,void 0,(function*(){_.current=null,p.current=se.INACTIVE;const g=b.current;let E=1/0;typeof g?.currentTime=="number"?E=g.currentTime:g?.currentTime&&(E=g.currentTime.to("ms").value),E>=225?u(!1):(yield new Promise((V=>setTimeout(V,225-E))),b.current===g&&u(!1))})),D=g=>{if(r||!g.isPrimary||_.current&&_.current.pointerId!==g.pointerId)return!1;if(g.type==="pointerenter"||g.type==="pointerleave")return!N(g);const E=g.buttons===1;return N(g)||E},f=g=>{D(g)&&A()},$=g=>Cr(void 0,void 0,void 0,(function*(){if(D(g)){if(_.current=g,!N(g))return p.current=se.WAITING_FOR_CLICK,void w(g);T.current&&!(({x:E,y:V})=>{const{top:S,left:I,bottom:X,right:ye}=d.current.getBoundingClientRect();return E>=I&&E<=ye&&V>=S&&V<=X})(g)||(T.current=!1,p.current=se.TOUCH_DELAY,yield new Promise((E=>{setTimeout(E,150)})),p.current===se.TOUCH_DELAY&&(p.current=se.HOLDING,w(g)))}})),R=g=>{D(g)&&a(!0)},C=g=>{D(g)&&(a(!1),p.current!==se.INACTIVE&&A())},z=g=>{if(D(g)){if(p.current!==se.HOLDING)return p.current===se.TOUCH_DELAY?(p.current=se.WAITING_FOR_CLICK,void w(_.current)):void 0;p.current=se.WAITING_FOR_CLICK}};return y.useEffect((()=>{if(h)for(const g of Th)h.addEventListener(g,(E=>Cr(void 0,void 0,void 0,(function*(){if(E.type!="keydown"||E.code=="Enter"||E.code=="Space")switch(E.type){case"click":case"keydown":p.current!==se.WAITING_FOR_CLICK?p.current===se.INACTIVE&&(w(),A()):A();break;case"contextmenu":r||(T.current=!0,A());break;case"pointercancel":f(E);break;case"pointerdown":yield $(E);break;case"pointerenter":R(E);break;case"pointerleave":C(E);break;case"pointerup":z(E)}}))))}),[d.current,r]),c.jsx("label",{ref:d,style:n,htmlFor:i,"aria-hidden":"true",className:we(Xr.ripple,s&&Xr.hovered,l&&Xr.pressed,o)})};Kt.displayName="Actify.Ripple";var Ur={root:"card-module_root__o4tFN",filled:"card-module_filled__BUroO",outlined:"card-module_outlined__gIHoH",card:"card-module_card__ukHma"};xe(`.card-module_root__o4tFN {\r
  position: relative;\r
  display: inline-flex;\r
  flex-direction: column;\r
  border-radius: 0.75rem /* 12px */;\r
}\r
.card-module_filled__BUroO {\r
  background-color: var(--md-sys-color-inverse-surface);\r
}\r
.card-module_outlined__gIHoH {\r
  border-width: 1px;\r
  --tw-border-opacity: 1;\r
  border-color: var(--md-sys-color-outline) / var(--tw-border-opacity);\r
}\r
.card-module_card__ukHma {\r
  position: relative;\r
  overflow: hidden;\r
  border-top-left-radius: 0.75rem /* 12px */;\r
  border-top-right-radius: 0.75rem /* 12px */;\r
}\r
`);const Ma=t=>{const{id:e,ripple:r=!1,variant:n="elevated",elevation:o=1,children:i,className:s}=t,a=Qe(t,["id","ripple","variant","elevation","children","className"]),l=e||`actify-card${W.useId()}`;return c.jsxs("div",Object.assign({},a,{className:we(Ur.root,Ur[n],s),children:[c.jsx("div",{className:Ur.card,children:i}),r&&c.jsx(Kt,{id:l}),n==="elevated"&&c.jsx(Nn,{className:`[--md-elevation-level:${o}]`})]}))};Ma.displayName="Actify.Card";const Eh=y.createContext(null);let Ce=null;function Sh(t,e="assertive",r=7e3){Ce?Ce.announce(t,e,r):(Ce=new kh,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?Ce.announce(t,e,r):setTimeout((()=>{Ce?.isAttached()&&Ce?.announce(t,e,r)}),100))}let kh=class{isAttached(){var e;return(e=this.node)===null||e===void 0?void 0:e.isConnected}createLog(e){let r=document.createElement("div");return r.setAttribute("role","log"),r.setAttribute("aria-live",e),r.setAttribute("aria-relevant","additions"),r}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(e,r="assertive",n=7e3){var o,i;if(!this.node)return;let s=document.createElement("div");typeof e=="object"?(s.setAttribute("role","img"),s.setAttribute("aria-labelledby",e["aria-labelledby"])):s.textContent=e,r==="assertive"?(o=this.assertiveLog)===null||o===void 0||o.appendChild(s):(i=this.politeLog)===null||i===void 0||i.appendChild(s),e!==""&&setTimeout((()=>{s.remove()}),n)}clear(e){this.node&&(e&&e!=="assertive"||!this.assertiveLog||(this.assertiveLog.innerHTML=""),e&&e!=="polite"||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}};if(typeof HTMLTemplateElement<"u"){const t=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:t.call(this)}})}const Ch=y.createContext(!1);function Nh(t){let e=(r,n)=>y.useContext(Ch)?null:t(r,n);return e.displayName=t.displayName||t.name,y.forwardRef(e)}const Mh=new Set(["id"]),Ah=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Dh=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Vh=/^(data-.*)$/;function uo(t,e={}){let{labelable:r,isLink:n,propNames:o}=e,i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(Mh.has(s)||r&&Ah.has(s)||n&&Dh.has(s)||o?.has(s)||Vh.test(s))&&(i[s]=t[s]);return i}const le=t=>{var e;return(e=t?.ownerDocument)!==null&&e!==void 0?e:document},fe=t=>t&&"window"in t&&t.window===t?t:le(t).defaultView||window;let rt=new Map,_n=new Set;function Li(){if(typeof window>"u")return;function t(r){return"propertyName"in r}let e=r=>{if(!t(r)||!r.target)return;let n=rt.get(r.target);if(n&&(n.delete(r.propertyName),n.size===0&&(r.target.removeEventListener("transitioncancel",e),rt.delete(r.target)),rt.size===0)){for(let o of _n)o();_n.clear()}};document.body.addEventListener("transitionrun",(r=>{if(!t(r)||!r.target)return;let n=rt.get(r.target);n||(n=new Set,rt.set(r.target,n),r.target.addEventListener("transitioncancel",e,{once:!0})),n.add(r.propertyName)})),document.body.addEventListener("transitionend",e)}function Aa(t){requestAnimationFrame((()=>{rt.size===0?t():_n.add(t)}))}typeof document<"u"&&(document.readyState!=="loading"?Li():document.addEventListener("DOMContentLoaded",Li));function jr(t){var e;return typeof window<"u"&&window.navigator!=null&&(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands.some((r=>t.test(r.brand))))||t.test(window.navigator.userAgent))}function ho(t){var e;return typeof window<"u"&&window.navigator!=null&&t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform)}function Fe(t){let e=null;return()=>(e==null&&(e=t()),e)}const Bt=Fe((function(){return ho(/^Mac/i)})),Lh=Fe((function(){return ho(/^iPhone/i)})),Da=Fe((function(){return ho(/^iPad/i)||Bt()&&navigator.maxTouchPoints>1})),Va=Fe((function(){return Lh()||Da()})),Rh=Fe((function(){return jr(/AppleWebKit/i)&&!Fh()})),Fh=Fe((function(){return jr(/Chrome/i)})),La=Fe((function(){return jr(/Android/i)})),Ih=Fe((function(){return jr(/Firefox/i)}));let ct="default",wn="",ar=new WeakMap;function Ri(t){if(Va()){if(ct==="default"){const e=le(t);wn=e.documentElement.style.webkitUserSelect,e.documentElement.style.webkitUserSelect="none"}ct="disabled"}else if(t instanceof HTMLElement||t instanceof SVGElement){let e="userSelect"in t.style?"userSelect":"webkitUserSelect";ar.set(t,t.style[e]),t.style[e]="none"}}function Hr(t){if(Va()){if(ct!=="disabled")return;ct="restoring",setTimeout((()=>{Aa((()=>{if(ct==="restoring"){const e=le(t);e.documentElement.style.webkitUserSelect==="none"&&(e.documentElement.style.webkitUserSelect=wn||""),wn="",ct="default"}}))}),300)}else if((t instanceof HTMLElement||t instanceof SVGElement)&&t&&ar.has(t)){let e=ar.get(t),r="userSelect"in t.style?"userSelect":"webkitUserSelect";t.style[r]==="none"&&(t.style[r]=e),t.getAttribute("style")===""&&t.removeAttribute("style"),ar.delete(t)}}const Ra=W.createContext({register:()=>{}});Ra.displayName="PressResponderContext";function pt(t){if((function(){if(er==null){er=!1;try{document.createElement("div").focus({get preventScroll(){return er=!0,!0}})}catch{}}return er})())t.focus({preventScroll:!0});else{let e=(function(r){let n=r.parentNode,o=[],i=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==i;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&o.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return i instanceof HTMLElement&&o.push({element:i,scrollTop:i.scrollTop,scrollLeft:i.scrollLeft}),o})(t);t.focus(),(function(r){for(let{element:n,scrollTop:o,scrollLeft:i}of r)n.scrollTop=o,n.scrollLeft=i})(e)}}let er=null;const Fa=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],zh=Fa.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Fa.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function Oh(t){return t.matches(zh)}let Ia=class{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=e}};function za(t){let e=y.useRef({isFocused:!1,observer:null});Ze((()=>{const n=e.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}}),[]);let r=pe((n=>{t?.(n)}));return y.useCallback((n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){e.current.isFocused=!0;let o=n.target,i=s=>{e.current.isFocused=!1,o.disabled&&r(new Ia("blur",s)),e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};o.addEventListener("focusout",i,{once:!0}),e.current.observer=new MutationObserver((()=>{if(e.current.isFocused&&o.disabled){var s;(s=e.current.observer)===null||s===void 0||s.disconnect();let a=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:a})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:a}))}})),e.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}}),[r])}let fr=!1;function Fi(t){for(;t&&!Oh(t);)t=t.parentElement;let e=fe(t),r=e.document.activeElement;if(!r||r===t)return;fr=!0;let n=!1,o=d=>{(d.target===r||n)&&d.stopImmediatePropagation()},i=d=>{(d.target===r||n)&&(d.stopImmediatePropagation(),t||n||(n=!0,pt(r),l()))},s=d=>{(d.target===t||n)&&d.stopImmediatePropagation()},a=d=>{(d.target===t||n)&&(d.stopImmediatePropagation(),n||(n=!0,pt(r),l()))};e.addEventListener("blur",o,!0),e.addEventListener("focusout",i,!0),e.addEventListener("focusin",a,!0),e.addEventListener("focus",s,!0);let l=()=>{cancelAnimationFrame(u),e.removeEventListener("blur",o,!0),e.removeEventListener("focusout",i,!0),e.removeEventListener("focusin",a,!0),e.removeEventListener("focus",s,!0),fr=!1,n=!1},u=requestAnimationFrame(l);return l}function Bh(t,e){return e.get?e.get.call(t):e.value}function Oa(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}function Yh(t,e){var r=Oa(t,e,"get");return Bh(t,r)}function Xh(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Uh(t,e,r){Xh(t,e),e.set(t,r)}function Hh(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}function Ii(t,e,r){var n=Oa(t,e,"set");return Hh(t,n,r),r}function q(t,e){return!(!e||!t)&&t.contains(e)}const Yt=(t=document)=>t.activeElement;function Y(t){return t.target}y.createContext({isNative:!0,open:function(t,e){(function(r,n){if(r instanceof HTMLAnchorElement)n(r);else if(r.hasAttribute("data-href")){let o=document.createElement("a");o.href=r.getAttribute("data-href"),r.hasAttribute("data-target")&&(o.target=r.getAttribute("data-target")),r.hasAttribute("data-rel")&&(o.rel=r.getAttribute("data-rel")),r.hasAttribute("data-download")&&(o.download=r.getAttribute("data-download")),r.hasAttribute("data-ping")&&(o.ping=r.getAttribute("data-ping")),r.hasAttribute("data-referrer-policy")&&(o.referrerPolicy=r.getAttribute("data-referrer-policy")),r.appendChild(o),n(o),r.removeChild(o)}})(t,(r=>ft(r,e)))},useHref:t=>t});function ft(t,e,r=!0){var n,o;let{metaKey:i,ctrlKey:s,altKey:a,shiftKey:l}=e;Ih()&&(!((o=window.event)===null||o===void 0||(n=o.type)===null||n===void 0)&&n.startsWith("key"))&&t.target==="_blank"&&(Bt()?i=!0:s=!0);let u=Rh()&&Bt()&&!Da()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:i,ctrlKey:s,altKey:a,shiftKey:l}):new MouseEvent("click",{metaKey:i,ctrlKey:s,altKey:a,shiftKey:l,bubbles:!0,cancelable:!0});ft.isOpening=r,pt(t),t.dispatchEvent(u),ft.isOpening=!1}ft.isOpening=!1;function mo(){let t=y.useRef(new Map),e=y.useCallback(((o,i,s,a)=>{let l=a?.once?(...u)=>{t.current.delete(s),s(...u)}:s;t.current.set(s,{type:i,eventTarget:o,fn:l,options:a}),o.addEventListener(i,l,a)}),[]),r=y.useCallback(((o,i,s,a)=>{var l;let u=((l=t.current.get(s))===null||l===void 0?void 0:l.fn)||s;o.removeEventListener(i,u,a),t.current.delete(s)}),[]),n=y.useCallback((()=>{t.current.forEach(((o,i)=>{r(o.eventTarget,o.type,i,o.options)}))}),[r]);return y.useEffect((()=>n),[n]),{addGlobalListener:e,removeGlobalListener:r,removeAllGlobalListeners:n}}function Ba(t,e){Ze((()=>{if(t&&t.ref&&e)return t.ref.current=e.current,()=>{t.ref&&(t.ref.current=null)}}))}function $n(t){return!(t.mozInputSource!==0||!t.isTrusted)||(La()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType)}function Kh(t){return!La()&&t.width===0&&t.height===0||t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"}var tr=new WeakMap;let rr=class{continuePropagation(){Ii(this,tr,!1)}get shouldStopPropagation(){return Yh(this,tr)}constructor(e,r,n,o){var i;Uh(this,tr,{writable:!0,value:void 0}),Ii(this,tr,!0);let s=(i=o?.target)!==null&&i!==void 0?i:n.currentTarget;const a=s?.getBoundingClientRect();let l,u,d=0,h=null;n.clientX!=null&&n.clientY!=null&&(u=n.clientX,h=n.clientY),a&&(u!=null&&h!=null?(l=u-a.left,d=h-a.top):(l=a.width/2,d=a.height/2)),this.type=e,this.pointerType=r,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=l,this.y=d}};const zi=Symbol("linkClicked");function Wh(t){let{onPress:e,onPressChange:r,onPressStart:n,onPressEnd:o,onPressUp:i,isDisabled:s,isPressed:a,preventFocusOnPress:l,shouldCancelOnPointerExit:u,allowTextSelectionOnPress:d,ref:h,...p}=(function(f){let $=y.useContext(Ra);if($){let{register:R,...C}=$;f=ce(C,f),R()}return Ba($,f.ref),f})(t),[m,v]=y.useState(!1),x=y.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:b,removeAllGlobalListeners:_}=mo(),T=pe(((f,$)=>{let R=x.current;if(s||R.didFirePressStart)return!1;let C=!0;if(R.isTriggeringEvent=!0,n){let z=new rr("pressstart",$,f);n(z),C=z.shouldStopPropagation}return r&&r(!0),R.isTriggeringEvent=!1,R.didFirePressStart=!0,v(!0),C})),N=pe(((f,$,R=!0)=>{let C=x.current;if(!C.didFirePressStart)return!1;C.didFirePressStart=!1,C.isTriggeringEvent=!0;let z=!0;if(o){let g=new rr("pressend",$,f);o(g),z=g.shouldStopPropagation}if(r&&r(!1),v(!1),e&&R&&!s){let g=new rr("press",$,f);e(g),z&&(z=g.shouldStopPropagation)}return C.isTriggeringEvent=!1,z})),M=pe(((f,$)=>{let R=x.current;if(s)return!1;if(i){R.isTriggeringEvent=!0;let C=new rr("pressup",$,f);return i(C),R.isTriggeringEvent=!1,C.shouldStopPropagation}return!0})),w=pe((f=>{let $=x.current;if($.isPressed&&$.target){$.didFirePressStart&&$.pointerType!=null&&N(tt($.target,f),$.pointerType,!1),$.isPressed=!1,$.isOverTarget=!1,$.activePointerId=null,$.pointerType=null,_(),d||Hr($.target);for(let R of $.disposables)R();$.disposables=[]}})),A=pe((f=>{u&&w(f)})),D=y.useMemo((()=>{let f=x.current,$={onKeyDown(C){if(Kr(C.nativeEvent,C.currentTarget)&&q(C.currentTarget,Y(C.nativeEvent))){var z;Yi(Y(C.nativeEvent),C.key)&&C.preventDefault();let g=!0;if(!f.isPressed&&!C.repeat){f.target=C.currentTarget,f.isPressed=!0,f.pointerType="keyboard",g=T(C,"keyboard");let E=C.currentTarget,V=S=>{Kr(S,E)&&!S.repeat&&q(E,Y(S))&&f.target&&M(tt(f.target,S),"keyboard")};b(le(C.currentTarget),"keyup",as(V,R),!0)}g&&C.stopPropagation(),C.metaKey&&Bt()&&((z=f.metaKeyEvents)===null||z===void 0||z.set(C.key,C.nativeEvent))}else C.key==="Meta"&&(f.metaKeyEvents=new Map)},onClick(C){if((!C||q(C.currentTarget,Y(C.nativeEvent)))&&C&&C.button===0&&!f.isTriggeringEvent&&!ft.isOpening){let z=!0;if(s&&C.preventDefault(),f.ignoreEmulatedMouseEvents||f.isPressed||f.pointerType!=="virtual"&&!$n(C.nativeEvent)){if(f.isPressed&&f.pointerType!=="keyboard"){let g=f.pointerType||C.nativeEvent.pointerType||"virtual";z=N(tt(C.currentTarget,C),g,!0),f.isOverTarget=!1,w(C)}}else{let g=T(C,"virtual"),E=M(C,"virtual"),V=N(C,"virtual");z=g&&E&&V}f.ignoreEmulatedMouseEvents=!1,z&&C.stopPropagation()}}},R=C=>{var z;if(f.isPressed&&f.target&&Kr(C,f.target)){var g;Yi(Y(C),C.key)&&C.preventDefault();let V=Y(C);N(tt(f.target,C),"keyboard",q(f.target,Y(C))),_(),C.key!=="Enter"&&po(f.target)&&q(f.target,V)&&!C[zi]&&(C[zi]=!0,ft(f.target,C,!1)),f.isPressed=!1,(g=f.metaKeyEvents)===null||g===void 0||g.delete(C.key)}else if(C.key==="Meta"&&(!((z=f.metaKeyEvents)===null||z===void 0)&&z.size)){var E;let V=f.metaKeyEvents;f.metaKeyEvents=void 0;for(let S of V.values())(E=f.target)===null||E===void 0||E.dispatchEvent(new KeyboardEvent("keyup",S))}};if(typeof PointerEvent<"u"){$.onPointerDown=g=>{if(g.button!==0||!q(g.currentTarget,Y(g.nativeEvent)))return;if(Kh(g.nativeEvent))return void(f.pointerType="virtual");f.pointerType=g.pointerType;let E=!0;if(!f.isPressed){f.isPressed=!0,f.isOverTarget=!0,f.activePointerId=g.pointerId,f.target=g.currentTarget,d||Ri(f.target),E=T(g,f.pointerType);let V=Y(g.nativeEvent);"releasePointerCapture"in V&&V.releasePointerCapture(g.pointerId),b(le(g.currentTarget),"pointerup",C,!1),b(le(g.currentTarget),"pointercancel",z,!1)}E&&g.stopPropagation()},$.onMouseDown=g=>{if(q(g.currentTarget,Y(g.nativeEvent))&&g.button===0){if(l){let E=Fi(g.target);E&&f.disposables.push(E)}g.stopPropagation()}},$.onPointerUp=g=>{q(g.currentTarget,Y(g.nativeEvent))&&f.pointerType!=="virtual"&&g.button===0&&M(g,f.pointerType||g.pointerType)},$.onPointerEnter=g=>{g.pointerId===f.activePointerId&&f.target&&!f.isOverTarget&&f.pointerType!=null&&(f.isOverTarget=!0,T(tt(f.target,g),f.pointerType))},$.onPointerLeave=g=>{g.pointerId===f.activePointerId&&f.target&&f.isOverTarget&&f.pointerType!=null&&(f.isOverTarget=!1,N(tt(f.target,g),f.pointerType,!1),A(g))};let C=g=>{if(g.pointerId===f.activePointerId&&f.isPressed&&g.button===0&&f.target){if(q(f.target,Y(g))&&f.pointerType!=null){let E=!1,V=setTimeout((()=>{f.isPressed&&f.target instanceof HTMLElement&&(E?w(g):(pt(f.target),f.target.click()))}),80);b(g.currentTarget,"click",(()=>E=!0),!0),f.disposables.push((()=>clearTimeout(V)))}else w(g);f.isOverTarget=!1}},z=g=>{w(g)};$.onDragStart=g=>{q(g.currentTarget,Y(g.nativeEvent))&&w(g)}}else{$.onMouseDown=g=>{if(!(g.button!==0||!q(g.currentTarget,Y(g.nativeEvent)))){if(f.ignoreEmulatedMouseEvents)return void g.stopPropagation();if(f.isPressed=!0,f.isOverTarget=!0,f.target=g.currentTarget,f.pointerType=$n(g.nativeEvent)?"virtual":"mouse",ml.flushSync((()=>T(g,f.pointerType)))&&g.stopPropagation(),l){let E=Fi(g.target);E&&f.disposables.push(E)}b(le(g.currentTarget),"mouseup",C,!1)}},$.onMouseEnter=g=>{if(!q(g.currentTarget,Y(g.nativeEvent)))return;let E=!0;f.isPressed&&!f.ignoreEmulatedMouseEvents&&f.pointerType!=null&&(f.isOverTarget=!0,E=T(g,f.pointerType)),E&&g.stopPropagation()},$.onMouseLeave=g=>{if(!q(g.currentTarget,Y(g.nativeEvent)))return;let E=!0;f.isPressed&&!f.ignoreEmulatedMouseEvents&&f.pointerType!=null&&(f.isOverTarget=!1,E=N(g,f.pointerType,!1),A(g)),E&&g.stopPropagation()},$.onMouseUp=g=>{q(g.currentTarget,Y(g.nativeEvent))&&(f.ignoreEmulatedMouseEvents||g.button!==0||M(g,f.pointerType||"mouse"))};let C=g=>{g.button===0&&(f.ignoreEmulatedMouseEvents?f.ignoreEmulatedMouseEvents=!1:(f.target&&f.target.contains(g.target)&&f.pointerType!=null||w(g),f.isOverTarget=!1))};$.onTouchStart=g=>{if(!q(g.currentTarget,Y(g.nativeEvent)))return;let E=(function(V){const{targetTouches:S}=V;return S.length>0?S[0]:null})(g.nativeEvent);E&&(f.activePointerId=E.identifier,f.ignoreEmulatedMouseEvents=!0,f.isOverTarget=!0,f.isPressed=!0,f.target=g.currentTarget,f.pointerType="touch",d||Ri(f.target),T(Ne(f.target,g),f.pointerType)&&g.stopPropagation(),b(fe(g.currentTarget),"scroll",z,!0))},$.onTouchMove=g=>{if(!q(g.currentTarget,Y(g.nativeEvent)))return;if(!f.isPressed)return void g.stopPropagation();let E=Oi(g.nativeEvent,f.activePointerId),V=!0;E&&Bi(E,g.currentTarget)?f.isOverTarget||f.pointerType==null||(f.isOverTarget=!0,V=T(Ne(f.target,g),f.pointerType)):f.isOverTarget&&f.pointerType!=null&&(f.isOverTarget=!1,V=N(Ne(f.target,g),f.pointerType,!1),A(Ne(f.target,g))),V&&g.stopPropagation()},$.onTouchEnd=g=>{if(!q(g.currentTarget,Y(g.nativeEvent)))return;if(!f.isPressed)return void g.stopPropagation();let E=Oi(g.nativeEvent,f.activePointerId),V=!0;E&&Bi(E,g.currentTarget)&&f.pointerType!=null?(M(Ne(f.target,g),f.pointerType),V=N(Ne(f.target,g),f.pointerType)):f.isOverTarget&&f.pointerType!=null&&(V=N(Ne(f.target,g),f.pointerType,!1)),V&&g.stopPropagation(),f.isPressed=!1,f.activePointerId=null,f.isOverTarget=!1,f.ignoreEmulatedMouseEvents=!0,f.target&&!d&&Hr(f.target),_()},$.onTouchCancel=g=>{q(g.currentTarget,Y(g.nativeEvent))&&(g.stopPropagation(),f.isPressed&&w(Ne(f.target,g)))};let z=g=>{f.isPressed&&q(Y(g),f.target)&&w({currentTarget:f.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};$.onDragStart=g=>{q(g.currentTarget,Y(g.nativeEvent))&&w(g)}}return $}),[b,s,l,_,d,w,A,N,T,M]);return y.useEffect((()=>{let f=x.current;return()=>{var $;d||Hr(($=f.target)!==null&&$!==void 0?$:void 0);for(let R of f.disposables)R();f.disposables=[]}}),[d]),{isPressed:a||m,pressProps:ce(p,D)}}function po(t){return t.tagName==="A"&&t.hasAttribute("href")}function Kr(t,e){const{key:r,code:n}=t,o=e,i=o.getAttribute("role");return!(r!=="Enter"&&r!==" "&&r!=="Spacebar"&&n!=="Space"||o instanceof fe(o).HTMLInputElement&&!Ya(o,r)||o instanceof fe(o).HTMLTextAreaElement||o.isContentEditable||(i==="link"||!i&&po(o))&&r!=="Enter")}function Oi(t,e){const r=t.changedTouches;for(let n=0;n<r.length;n++){const o=r[n];if(o.identifier===e)return o}return null}function Ne(t,e){let r=0,n=0;return e.targetTouches&&e.targetTouches.length===1&&(r=e.targetTouches[0].clientX,n=e.targetTouches[0].clientY),{currentTarget:t,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,clientX:r,clientY:n}}function tt(t,e){let r=e.clientX,n=e.clientY;return{currentTarget:t,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey,clientX:r,clientY:n}}function Bi(t,e){let r=e.getBoundingClientRect();return i=(function(s){let a=0,l=0;return s.width!==void 0?a=s.width/2:s.radiusX!==void 0&&(a=s.radiusX),s.height!==void 0?l=s.height/2:s.radiusY!==void 0&&(l=s.radiusY),{top:s.clientY-l,right:s.clientX+a,bottom:s.clientY+l,left:s.clientX-a}})(t),!((o=r).left>i.right||i.left>o.right||o.top>i.bottom||i.top>o.bottom);var o,i}function Yi(t,e){return t instanceof HTMLInputElement?!Ya(t,e):(function(r){return!(r instanceof HTMLInputElement||(r instanceof HTMLButtonElement?r.type==="submit"||r.type==="reset":po(r)))})(t)}const qh=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ya(t,e){return t.type==="checkbox"||t.type==="radio"?e===" ":qh.has(t.type)}let et=null,jn=new Set,Mt=new Map,Ge=!1,Pn=!1;const Gh={Tab:!0,Escape:!0};function Pr(t,e){for(let r of jn)r(t,e)}function vr(t){Ge=!0,(function(e){return!(e.metaKey||!Bt()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")})(t)&&(et="keyboard",Pr("keyboard",t))}function me(t){et="pointer",t.type!=="mousedown"&&t.type!=="pointerdown"||(Ge=!0,Pr("pointer",t))}function Xa(t){$n(t)&&(Ge=!0,et="virtual")}function Ua(t){t.target!==window&&t.target!==document&&!fr&&t.isTrusted&&(Ge||Pn||(et="virtual",Pr("virtual",t)),Ge=!1,Pn=!1)}function Ha(){fr||(Ge=!1,Pn=!0)}function Tn(t){if(typeof window>"u"||Mt.get(fe(t)))return;const e=fe(t),r=le(t);let n=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){Ge=!0,n.apply(this,arguments)},r.addEventListener("keydown",vr,!0),r.addEventListener("keyup",vr,!0),r.addEventListener("click",Xa,!0),e.addEventListener("focus",Ua,!0),e.addEventListener("blur",Ha,!1),typeof PointerEvent<"u"?(r.addEventListener("pointerdown",me,!0),r.addEventListener("pointermove",me,!0),r.addEventListener("pointerup",me,!0)):(r.addEventListener("mousedown",me,!0),r.addEventListener("mousemove",me,!0),r.addEventListener("mouseup",me,!0)),e.addEventListener("beforeunload",(()=>{Ka(t)}),{once:!0}),Mt.set(e,{focus:n})}const Ka=(t,e)=>{const r=fe(t),n=le(t);e&&n.removeEventListener("DOMContentLoaded",e),Mt.has(r)&&(r.HTMLElement.prototype.focus=Mt.get(r).focus,n.removeEventListener("keydown",vr,!0),n.removeEventListener("keyup",vr,!0),n.removeEventListener("click",Xa,!0),r.removeEventListener("focus",Ua,!0),r.removeEventListener("blur",Ha,!1),typeof PointerEvent<"u"?(n.removeEventListener("pointerdown",me,!0),n.removeEventListener("pointermove",me,!0),n.removeEventListener("pointerup",me,!0)):(n.removeEventListener("mousedown",me,!0),n.removeEventListener("mousemove",me,!0),n.removeEventListener("mouseup",me,!0)),Mt.delete(r))};function Qh(t){const e=le(t);let r;return e.readyState!=="loading"?Tn(t):(r=()=>{Tn(t)},e.addEventListener("DOMContentLoaded",r)),()=>Ka(t,r)}function Wa(){return et!=="pointer"}function Zh(){return et}function Jh(t){et=t,Pr(t,null)}typeof document<"u"&&Qh();const em=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function tm(t,e,r){Tn(),y.useEffect((()=>{let n=(o,i)=>{(function(s,a,l){let u=le(l?.target);const d=typeof window<"u"?fe(l?.target).HTMLInputElement:HTMLInputElement,h=typeof window<"u"?fe(l?.target).HTMLTextAreaElement:HTMLTextAreaElement,p=typeof window<"u"?fe(l?.target).HTMLElement:HTMLElement,m=typeof window<"u"?fe(l?.target).KeyboardEvent:KeyboardEvent;return!((s=s||u.activeElement instanceof d&&!em.has(u.activeElement.type)||u.activeElement instanceof h||u.activeElement instanceof p&&u.activeElement.isContentEditable)&&a==="keyboard"&&l instanceof m&&!Gh[l.key])})(!!r?.isTextInput,o,i)&&t(Wa())};return jn.add(n),()=>{jn.delete(n)}}),e)}function rm(t){const e=le(t),r=Yt(e);if(Zh()==="virtual"){let n=r;Aa((()=>{Yt(e)===n&&t.isConnected&&pt(t)}))}else pt(t)}function qa(t){let{isDisabled:e,onFocus:r,onBlur:n,onFocusChange:o}=t;const i=y.useCallback((l=>{if(l.target===l.currentTarget)return n&&n(l),o&&o(!1),!0}),[n,o]),s=za(i),a=y.useCallback((l=>{const u=le(l.target),d=u?Yt(u):Yt();l.target===l.currentTarget&&d===Y(l.nativeEvent)&&(r&&r(l),o&&o(!0),s(l))}),[o,r,s]);return{focusProps:{onFocus:!e&&(r||o||n)?a:void 0,onBlur:e||!n&&!o?void 0:i}}}function Xi(t){if(!t)return;let e=!0;return r=>{let n={...r,preventDefault(){r.preventDefault()},isDefaultPrevented:()=>r.isDefaultPrevented(),stopPropagation(){e?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):e=!0},continuePropagation(){e=!1},isPropagationStopped:()=>e};t(n),e&&r.stopPropagation()}}function nm(t){return{keyboardProps:t.isDisabled?{}:{onKeyDown:Xi(t.onKeyDown),onKeyUp:Xi(t.onKeyUp)}}}let Ga=W.createContext(null);W.forwardRef((function(t,e){let{children:r,...n}=t,o={...n,ref:ls(e)};return W.createElement(Ga.Provider,{value:o},r)}));function Qa(t,e){let{focusProps:r}=qa(t),{keyboardProps:n}=nm(t),o=ce(r,n),i=(function(u){let d=y.useContext(Ga)||{};Ba(d,u);let{ref:h,...p}=d;return p})(e),s=t.isDisabled?{}:i,a=y.useRef(t.autoFocus);y.useEffect((()=>{a.current&&e.current&&rm(e.current),a.current=!1}),[e]);let l=t.excludeFromTabOrder?-1:0;return t.isDisabled&&(l=void 0),{focusableProps:ce({...o,tabIndex:l},s)}}function Za(t,e){let r,{elementType:n="button",isDisabled:o,onPress:i,onPressStart:s,onPressEnd:a,onPressUp:l,onPressChange:u,preventFocusOnPress:d,allowFocusWhenDisabled:h,onClick:p,href:m,target:v,rel:x,type:b="button"}=t;r=n==="button"?{type:b,disabled:o}:{role:"button",href:n!=="a"||o?void 0:m,target:n==="a"?v:void 0,type:n==="input"?b:void 0,disabled:n==="input"?o:void 0,"aria-disabled":o&&n!=="input"?o:void 0,rel:n==="a"?x:void 0};let{pressProps:_,isPressed:T}=Wh({onPressStart:s,onPressEnd:a,onPressChange:u,onPress:i,onPressUp:l,isDisabled:o,preventFocusOnPress:d,ref:e}),{focusableProps:N}=Qa(t,e);h&&(N.tabIndex=o?-1:N.tabIndex);let M=ce(N,_,uo(t,{labelable:!0}));return{isPressed:T,buttonProps:ce(r,M,{"aria-haspopup":t["aria-haspopup"],"aria-expanded":t["aria-expanded"],"aria-controls":t["aria-controls"],"aria-pressed":t["aria-pressed"],"aria-current":t["aria-current"],onClick:w=>{p&&(p(w),console.warn("onClick is deprecated, please use onPress"))}})}}function om(t){let{isDisabled:e,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:o}=t,i=y.useRef({isFocusWithin:!1}),{addGlobalListener:s,removeAllGlobalListeners:a}=mo(),l=y.useCallback((h=>{h.currentTarget.contains(h.target)&&i.current.isFocusWithin&&!h.currentTarget.contains(h.relatedTarget)&&(i.current.isFocusWithin=!1,a(),r&&r(h),o&&o(!1))}),[r,o,i,a]),u=za(l),d=y.useCallback((h=>{if(!h.currentTarget.contains(h.target))return;const p=le(h.target),m=Yt(p);if(!i.current.isFocusWithin&&m===Y(h.nativeEvent)){n&&n(h),o&&o(!0),i.current.isFocusWithin=!0,u(h);let v=h.currentTarget;s(p,"focus",(x=>{if(i.current.isFocusWithin&&!q(v,x.target)){let b=new Ia("blur",new p.defaultView.FocusEvent("blur",{relatedTarget:x.target}));b.target=v,b.currentTarget=v,l(b)}}),{capture:!0})}}),[n,o,u,s,l]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:d,onBlur:l}}}function Wt(t={}){let{autoFocus:e=!1,isTextInput:r,within:n}=t,o=y.useRef({isFocused:!1,isFocusVisible:e||Wa()}),[i,s]=y.useState(!1),[a,l]=y.useState((()=>o.current.isFocused&&o.current.isFocusVisible)),u=y.useCallback((()=>l(o.current.isFocused&&o.current.isFocusVisible)),[]),d=y.useCallback((m=>{o.current.isFocused=m,s(m),u()}),[u]);tm((m=>{o.current.isFocusVisible=m,u()}),[],{isTextInput:r});let{focusProps:h}=qa({isDisabled:n,onFocusChange:d}),{focusWithinProps:p}=om({isDisabled:!n,onFocusWithinChange:d});return{isFocused:i,isFocusVisible:a,focusProps:n?p:h}}let gr=!1,Wr=0;function En(){gr=!0,setTimeout((()=>{gr=!1}),50)}function Ui(t){t.pointerType==="touch"&&En()}function im(){if(typeof document<"u")return typeof PointerEvent<"u"?document.addEventListener("pointerup",Ui):document.addEventListener("touchend",En),Wr++,()=>{Wr--,Wr>0||(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Ui):document.removeEventListener("touchend",En))}}function sm(t){let{onHoverStart:e,onHoverChange:r,onHoverEnd:n,isDisabled:o}=t,[i,s]=y.useState(!1),a=y.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;y.useEffect(im,[]);let{addGlobalListener:l,removeAllGlobalListeners:u}=mo(),{hoverProps:d,triggerHoverEnd:h}=y.useMemo((()=>{let p=(x,b)=>{if(a.pointerType=b,o||b==="touch"||a.isHovered||!x.currentTarget.contains(x.target))return;a.isHovered=!0;let _=x.currentTarget;a.target=_,l(le(x.target),"pointerover",(T=>{a.isHovered&&a.target&&!q(a.target,T.target)&&m(T,T.pointerType)}),{capture:!0}),e&&e({type:"hoverstart",target:_,pointerType:b}),r&&r(!0),s(!0)},m=(x,b)=>{let _=a.target;a.pointerType="",a.target=null,b!=="touch"&&a.isHovered&&_&&(a.isHovered=!1,u(),n&&n({type:"hoverend",target:_,pointerType:b}),r&&r(!1),s(!1))},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=x=>{gr&&x.pointerType==="mouse"||p(x,x.pointerType)},v.onPointerLeave=x=>{!o&&x.currentTarget.contains(x.target)&&m(x,x.pointerType)}):(v.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=x=>{a.ignoreEmulatedMouseEvents||gr||p(x,"mouse"),a.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=x=>{!o&&x.currentTarget.contains(x.target)&&m(x,"mouse")}),{hoverProps:v,triggerHoverEnd:m}}),[e,r,n,o,a,l,u]);return y.useEffect((()=>{o&&h({currentTarget:a.target},a.pointerType)}),[o]),{hoverProps:d,isHovered:i}}const am=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),lm=y.createContext({}),Ja=Nh((function(t,e){[t,e]=Nl(t,e,lm);let r=t=(function(_){return _.isPending&&(_.onPress=void 0,_.onPressStart=void 0,_.onPressEnd=void 0,_.onPressChange=void 0,_.onPressUp=void 0,_.onKeyDown=void 0,_.onKeyUp=void 0,_.onClick=void 0,_.href=void 0),_})(t),{isPending:n}=r,{buttonProps:o,isPressed:i}=Za(t,e),{focusProps:s,isFocused:a,isFocusVisible:l}=Wt(t),{hoverProps:u,isHovered:d}=sm({...t,isDisabled:t.isDisabled||n}),h={isHovered:d,isPressed:(r.isPressed||i)&&!n,isFocused:a,isFocusVisible:l,isDisabled:t.isDisabled||!1,isPending:n!=null&&n},p=kl({...t,values:h,defaultClassName:"react-aria-Button"}),m=ht(o.id),v=ht(),x=o["aria-labelledby"];n&&(x?x=`${x} ${v}`:o["aria-label"]&&(x=`${m} ${v}`));let b=y.useRef(n);return y.useEffect((()=>{let _={"aria-labelledby":x||m};(!b.current&&a&&n||b.current&&a&&!n)&&Sh(_,"assertive"),b.current=n}),[n,a,x,m]),W.createElement("button",{...uo(t,{propNames:am}),...ce(o,s,u),...p,type:o.type==="submit"&&n?"button":o.type,id:m,ref:e,"aria-labelledby":x,slot:t.slot||void 0,"aria-disabled":n?"true":o["aria-disabled"],"data-disabled":t.isDisabled||void 0,"data-pressed":h.isPressed||void 0,"data-hovered":d||void 0,"data-focused":a||void 0,"data-pending":n||void 0,"data-focus-visible":l||void 0},W.createElement(Eh.Provider,{value:{id:v}},p.children))}));var cm={"focus-ring":"focusring-module_focus-ring__jYxTQ"};xe(`@keyframes focusring-module_outward-grow__Qdj-A {\r
  from {\r
    outline-width: 0;\r
  }\r
  to {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_outward-shrink__Rb3ur {\r
  from {\r
    outline-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-grow__g-09Q {\r
  from {\r
    border-width: 0;\r
  }\r
  to {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
@keyframes focusring-module_inward-shrink__ww4sN {\r
  from {\r
    border-width: var(--md-focus-ring-active-width, 8px);\r
  }\r
}\r
.focusring-module_focus-ring__jYxTQ {\r
  z-index: 1;\r
  animation-delay: 0s, calc(var(--md-focus-ring-duration, 600ms) * 0.25);\r
  animation-duration: calc(var(--md-focus-ring-duration, 600ms) * 0.25),\r
    calc(var(--md-focus-ring-duration, 600ms) * 0.75);\r
  animation-timing-function: cubic-bezier(0.2, 0, 0, 1);\r
  box-sizing: border-box;\r
  color: var(\r
    --md-focus-ring-color,\r
    var(--md-sys-color-secondary, #625b71)\r
  );\r
  pointer-events: none;\r
  position: absolute;\r
  &:not([inward]) {\r
    animation-name: focusring-module_outward-grow__Qdj-A, focusring-module_outward-shrink__Rb3ur;\r
    border-radius: inherit;\r
    inset: calc(-1 * var(--md-focus-ring-outward-offset, 2px));\r
    outline: var(--md-focus-ring-width, 3px) solid currentColor;\r
  }\r
  &[inward] {\r
    animation-name: focusring-module_inward-grow__g-09Q, focusring-module_inward-shrink__ww4sN;\r
    border-radius: calc(\r
      var(--md-focus-ring-shape, inherit) - var(--md-focus-ring-inward-offset, 0px)\r
    );\r
    border: var(--md-focus-ring-width, 3px) solid currentColor;\r
    inset: var(--md-focus-ring-inward-offset, 0px);\r
  }\r
  @media (prefers-reduced-motion) {\r
    .focusring-module_a-focus-ring__p-PXU {\r
      animation: none;\r
    }\r
  }\r
}\r
`);const Tr=({as:t="span",type:e="outward",style:r,className:n})=>c.jsx(t,{style:r,className:we(cm["focus-ring"],n),inward:e==="inward"?"true":void 0});Tr.displayName="Actify.FocusRing";var Oe={btn:"button-module_btn__sxcxC",disabled:"button-module_disabled__obywO",button:"button-module_button__vQZFj",touch:"button-module_touch__Cec8z",outline:"button-module_outline__rI4up",background:"button-module_background__erbWE",label:"button-module_label__rzPeC"};xe(`.button-module_btn__sxcxC {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  display: inline-flex;\r
  gap: 8px;\r
  min-height: var(--_container-height);\r
  outline: none;\r
  padding-block: calc(\r
    (\r
        var(--_container-height) -\r
          max(var(--_label-text-line-height), var(--_icon-size))\r
      ) / 2\r
  );\r
  padding-inline-start: var(--_leading-space);\r
  padding-inline-end: var(--_trailing-space);\r
  place-content: center;\r
  place-items: center;\r
  position: relative;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  text-overflow: ellipsis;\r
  text-wrap: nowrap;\r
  user-select: none;\r
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
  vertical-align: top;\r
  --md-ripple-hover-color: var(--_hover-state-layer-color);\r
  --md-ripple-pressed-color: var(--_pressed-state-layer-color);\r
  --md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
  --md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
}\r
\r
.button-module_disabled__obywO {\r
  cursor: default;\r
  pointer-events: none;\r
}\r
\r
.button-module_button__vQZFj {\r
  text-overflow: inherit;\r
  border-radius: inherit;\r
  cursor: inherit;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border: none;\r
  outline: none;\r
  appearance: none;\r
  vertical-align: middle;\r
  background: rgba(0, 0, 0, 0);\r
  text-decoration: none;\r
  min-width: calc(64px - var(--_leading-space) - var(--_trailing-space));\r
  width: 100%;\r
  z-index: 0;\r
  height: 100%;\r
  font: inherit;\r
  color: var(--_label-text-color);\r
  padding: 0px;\r
  gap: inherit;\r
  text-transform: inherit;\r
}\r
\r
.button-module_touch__Cec8z {\r
  position: absolute;\r
  top: 50%;\r
  height: 48px;\r
  left: 0px;\r
  right: 0px;\r
  transform: translateY(-50%);\r
}\r
\r
.button-module_outline__rI4up {\r
  outline-style: none;\r
  border-width: var(--_outline-width);\r
  inset: 0px;\r
  border-style: solid;\r
  position: absolute;\r
  box-sizing: border-box;\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
}\r
\r
.button-module_background__erbWE {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
.button-module_disabled__obywO .button-module_background__erbWE {\r
  opacity: var(--_disabled-container-opacity);\r
  background-color: var(--_disabled-container-color);\r
}\r
\r
.button-module_label__rzPeC {\r
  text-overflow: inherit;\r
  overflow: hidden;\r
  display: inherit;\r
  gap: inherit;\r
  z-index: 1;\r
  align-items: inherit;\r
}\r
.button-module_disabled__obywO .button-module_label__rzPeC {\r
  color: var(--_disabled-label-text-color);\r
  opacity: var(--_disabled-label-text-opacity);\r
}\r
`);var dm={secondary:"color-module_secondary__gpdVQ",tertiary:"color-module_tertiary__zPmbq",error:"color-module_error__VplyG"};xe(`.color-module_secondary__gpdVQ {\r
  --md-sys-color-primary: var(--md-sys-color-secondary);\r
}\r
.color-module_tertiary__zPmbq {\r
  --md-sys-color-primary: var(--md-sys-color-tertiary);\r
}\r
.color-module_error__VplyG {\r
  --md-sys-color-primary: var(--md-sys-color-error);\r
}\r
`);var um={filled:"variant-module_filled__rQH-3",elevated:"variant-module_elevated__F69Jv",outlined:"variant-module_outlined__nvVIW",tonal:"variant-module_tonal__ZqJTa",text:"variant-module_text__oL9YN"};xe(`.variant-module_filled__rQH-3 {\r
  --_container-color: var(\r
    --md-filled-button-container-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_container-elevation: var(--md-filled-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-button-focus-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-button-hover-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-button-hover-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-button-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-button-pressed-label-text-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-filled-button-focus-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-button-hover-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-color: var(\r
    --md-filled-button-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_icon-size: var(--md-filled-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-button-pressed-icon-color,\r
    var(--md-sys-color-on-primary, #ffffff)\r
  );\r
  --_leading-space: var(--md-filled-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_elevated__F69Jv {\r
  --_container-color: var(\r
    --md-elevated-button-container-color,\r
    var(--md-sys-color-surface-container-low, f7f2fa)\r
  );\r
  --_container-elevation: var(--md-elevated-button-container-elevation, 1);\r
  --_container-height: var(--md-elevated-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-elevated-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-elevated-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-elevated-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-elevated-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-elevated-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-elevated-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-elevated-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-elevated-button-focus-container-elevation,\r
    1\r
  );\r
  --_focus-label-text-color: var(\r
    --md-elevated-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-elevated-button-hover-container-elevation,\r
    2\r
  );\r
  --_hover-label-text-color: var(\r
    --md-elevated-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-elevated-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-elevated-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-elevated-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-elevated-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-elevated-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-elevated-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-elevated-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-elevated-button-pressed-container-elevation,\r
    1\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-elevated-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-elevated-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-elevated-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-elevated-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-elevated-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-elevated-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-elevated-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-elevated-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-elevated-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-elevated-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-elevated-button-leading-space, 24px);\r
  --_trailing-space: var(--md-elevated-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-elevated-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-elevated-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-elevated-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-elevated-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-elevated-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-elevated-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-elevated-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-elevated-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_outlined__nvVIW {\r
  --_container-height: var(--md-outlined-button-container-height, 40px);\r
  --_container-shape: var(--md-outlined-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-outlined-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-button-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-button-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-outlined-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-outlined-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_outline-color: var(\r
    --md-outlined-button-outline-color,\r
    var(--md-sys-color-outline,#79747e)\r
  );\r
  --_outline-width: var(--md-outlined-button-outline-width, 1px);\r
  --_pressed-label-text-color: var(\r
    --md-outlined-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-outline-color: var(\r
    --md-outlined-button-pressed-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-outlined-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-outlined-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-outlined-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-outlined-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-outlined-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-outlined-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-outlined-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-outlined-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-outlined-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-outlined-button-leading-space, 24px);\r
  --_trailing-space: var(--md-outlined-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-outlined-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-outlined-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-outlined-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-outlined-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-outlined-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_tonal__ZqJTa {\r
  --_container-color: var(\r
    --md-filled-tonal-button-container-color,\r
    var(--md-sys-color-secondary-container, #e8def8)\r
  );\r
  --_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);\r
  --_container-height: var(--md-filled-tonal-button-container-height, 40px);\r
  --_container-shadow-color: var(\r
    --md-filled-tonal-button-container-shadow-color,\r
    var(--md-sys-color-shadow, #000000)\r
  );\r
  --_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);\r
  --_disabled-container-color: var(\r
    --md-filled-tonal-button-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-elevation: var(\r
    --md-filled-tonal-button-disabled-container-elevation,\r
    0\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-tonal-button-disabled-container-opacity,\r
    0.12\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-tonal-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-tonal-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-container-elevation: var(\r
    --md-filled-tonal-button-focus-container-elevation,\r
    0\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-tonal-button-focus-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-container-elevation: var(\r
    --md-filled-tonal-button-hover-container-elevation,\r
    1\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-tonal-button-hover-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-tonal-button-hover-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-tonal-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-filled-tonal-button-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-tonal-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-tonal-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-tonal-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-tonal-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-container-elevation: var(\r
    --md-filled-tonal-button-pressed-container-elevation,\r
    0\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-filled-tonal-button-pressed-label-text-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-filled-tonal-button-pressed-state-layer-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-filled-tonal-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-filled-tonal-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(\r
    --md-filled-tonal-button-disabled-icon-opacity,\r
    0.38\r
  );\r
  --_focus-icon-color: var(\r
    --md-filled-tonal-button-focus-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_hover-icon-color: var(\r
    --md-filled-tonal-button-hover-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-color: var(\r
    --md-filled-tonal-button-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_icon-size: var(--md-filled-tonal-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-filled-tonal-button-pressed-icon-color,\r
    var(--md-sys-color-on-secondary-container, #1d192b)\r
  );\r
  --_leading-space: var(--md-filled-tonal-button-leading-space, 24px);\r
  --_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-filled-tonal-button-with-leading-icon-leading-space,\r
    16px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-leading-icon-trailing-space,\r
    24px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-leading-space,\r
    24px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-filled-tonal-button-with-trailing-icon-trailing-space,\r
    16px\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-tonal-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-tonal-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-tonal-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-tonal-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
.variant-module_text__oL9YN {\r
  --_container-height: var(--md-text-button-container-height, 40px);\r
  --_container-shape: var(--md-text-button-container-shape, 9999px);\r
  --_disabled-label-text-color: var(\r
    --md-text-button-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-text-button-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_focus-label-text-color: var(\r
    --md-text-button-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-text-button-hover-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-text-button-hover-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-text-button-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_label-text-color: var(\r
    --md-text-button-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_label-text-font: var(\r
    --md-text-button-label-text-font,\r
    var(\r
      --md-sys-typescale-label-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-text-button-label-text-line-height,\r
    var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
  );\r
  --_label-text-size: var(\r
    --md-text-button-label-text-size,\r
    var(--md-sys-typescale-label-large-size, 0.875rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-text-button-label-text-weight,\r
    var(\r
      --md-sys-typescale-label-large-weight,\r
      var(--md-ref-typeface-weight-medium, 500)\r
    )\r
  );\r
  --_pressed-label-text-color: var(\r
    --md-text-button-pressed-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-color: var(\r
    --md-text-button-pressed-state-layer-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_pressed-state-layer-opacity: var(\r
    --md-text-button-pressed-state-layer-opacity,\r
    0.12\r
  );\r
  --_disabled-icon-color: var(\r
    --md-text-button-disabled-icon-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);\r
  --_focus-icon-color: var(\r
    --md-text-button-focus-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_hover-icon-color: var(\r
    --md-text-button-hover-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-color: var(\r
    --md-text-button-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_icon-size: var(--md-text-button-icon-size, 18px);\r
  --_pressed-icon-color: var(\r
    --md-text-button-pressed-icon-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_leading-space: var(--md-text-button-leading-space, 12px);\r
  --_trailing-space: var(--md-text-button-trailing-space, 12px);\r
  --_with-leading-icon-leading-space: var(\r
    --md-text-button-with-leading-icon-leading-space,\r
    12px\r
  );\r
  --_with-leading-icon-trailing-space: var(\r
    --md-text-button-with-leading-icon-trailing-space,\r
    16px\r
  );\r
  --_with-trailing-icon-leading-space: var(\r
    --md-text-button-with-trailing-icon-leading-space,\r
    16px\r
  );\r
  --_with-trailing-icon-trailing-space: var(\r
    --md-text-button-with-trailing-icon-trailing-space,\r
    12px\r
  );\r
  --_container-color: none;\r
  --_disabled-container-color: none;\r
  --_disabled-container-opacity: 0;\r
  --_container-shape-start-start: var(\r
    --md-text-button-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-text-button-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-text-button-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-text-button-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
`);const H=t=>{const{ref:e,style:r,children:n,className:o,ripple:i=!0,color:s="primary",variant:a="elevated",isDisabled:l=!1}=t,{focusProps:u,isFocusVisible:d}=Wt();return c.jsx(Ja,Object.assign({ref:e},ce(t,u),{style:r,className:we(Oe.btn,dm[s],um[a],l&&Oe.disabled,o),children:c.jsxs("div",{className:Oe.button,children:[c.jsx("span",{className:Oe.background}),c.jsx("span",{className:Oe.touch}),c.jsx("span",{className:Oe.label,children:c.jsx(c.Fragment,{children:n})}),a=="outlined"&&c.jsx("div",{className:Oe.outline}),c.jsx(Nn,{disabled:l}),d&&c.jsx(Tr,{}),i&&c.jsx(Kt,{id:t.id,disabled:l})]})}))};H.displayName="Actify.Button";var qr={btn:"icon-button-module_btn__Ixgd4","text-outline":"icon-button-module_text-outline__42DFJ","icon-button":"icon-button-module_icon-button__-Xc9O"};xe(`.icon-button-module_btn__Ixgd4 {\r
  border: 0 solid #e5e7eb;\r
  appearance: button;\r
  background-color: transparent;\r
  background-image: none;\r
  font-feature-settings: inherit;\r
  font-variation-settings: inherit;\r
  letter-spacing: inherit;\r
  color: inherit;\r
  padding: 0;\r
  cursor: pointer;\r
\r
  width: 2.5rem /* 40px */;\r
  height: 2.5rem /* 40px */;\r
  position: relative;\r
  color: currentColor;\r
  display: inline-flex;\r
  align-items: center;\r
  border-radius: 9999px;\r
  justify-content: center;\r
}\r
.icon-button-module_btn__Ixgd4:focus-visible {\r
  outline: none;\r
}\r
.icon-button-module_text-outline__42DFJ {\r
  --tw-text-opacity: 1;\r
  color: var(--md-sys-color-outline) / var(--tw-text-opacity);\r
}\r
.icon-button-module_icon-button__-Xc9O {\r
  position: absolute;\r
  width: max(48px, 100%);\r
  height: max(48px, 100%);\r
}\r
`);const el=t=>{const{ref:e,ripple:r=!0,children:n,className:o,isDisabled:i}=t,{focusProps:s,isFocusVisible:a}=Wt();return c.jsxs(Ja,Object.assign({ref:e},ce(t,s),{className:we(qr.btn,i&&qr["text-outline"],o),children:[a&&c.jsx(Tr,{}),r&&c.jsx(Kt,{id:t.id,disabled:i}),c.jsx(c.Fragment,{children:n}),c.jsx("span",{className:qr["icon-button"]})]}))};el.displayName="Actify.IconButton";var Z={host:"segmented-buttont-module_host__Q7AyG","segmented-button":"segmented-buttont-module_segmented-button__tnT4D",selected:"segmented-buttont-module_selected__NCVOt",unselected:"segmented-buttont-module_unselected__V3O9p",outline:"segmented-buttont-module_outline__9n2UR",leading:"segmented-buttont-module_leading__6zkws",graphic:"segmented-buttont-module_graphic__KFB1e","with-label":"segmented-buttont-module_with-label__46HnX",checkmark:"segmented-buttont-module_checkmark__ean7d",deselecting:"segmented-buttont-module_deselecting__5aeDz","md3-segmented-button-simple-fade-out":"segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR","checkmark-path":"segmented-buttont-module_checkmark-path__jN9bX",selecting:"segmented-buttont-module_selecting__uyvR2","md3-segmented-button-checkmark-selection-draw-in":"segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy",icon:"segmented-buttont-module_icon__oEvPI","label-text":"segmented-buttont-module_label-text__-mx7c",touch:"segmented-buttont-module_touch__zz2Ce"};xe(`.segmented-buttont-module_host__Q7AyG {\r
	--_container-height: var(\r
		--md-outlined-segmented-button-container-height,\r
		40px\r
	);\r
	--_disabled-icon-color: var(\r
		--md-outlined-segmented-button-disabled-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_disabled-label-text-color: var(\r
		--md-outlined-segmented-button-disabled-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_disabled-outline-color: var(\r
		--md-outlined-segmented-button-disabled-outline-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_hover-state-layer-opacity: var(\r
		--md-outlined-segmented-button-hover-state-layer-opacity,\r
		0.08\r
	);\r
	--_label-text-font: var(\r
		--md-outlined-segmented-button-label-text-font,\r
		var(\r
			--md-sys-typescale-label-large-font,\r
			var(--md-ref-typeface-plain, Roboto)\r
		)\r
	);\r
	--_label-text-line-height: var(\r
		--md-outlined-segmented-button-label-text-line-height,\r
		var(--md-sys-typescale-label-large-line-height, 1.25rem)\r
	);\r
	--_label-text-size: var(\r
		--md-outlined-segmented-button-label-text-size,\r
		var(--md-sys-typescale-label-large-size, 0.875rem)\r
	);\r
	--_label-text-weight: var(\r
		--md-outlined-segmented-button-label-text-weight,\r
		var(\r
			--md-sys-typescale-label-large-weight,\r
			var(--md-ref-typeface-weight-medium, 500)\r
		)\r
	);\r
	--_outline-color: var(\r
		--md-outlined-segmented-button-outline-color,\r
		var(--md-sys-color-outline, #79747e)\r
	);\r
	--_pressed-state-layer-opacity: var(\r
		--md-outlined-segmented-button-pressed-state-layer-opacity,\r
		0.12\r
	);\r
	--_selected-container-color: var(\r
		--md-outlined-segmented-button-selected-container-color,\r
		var(--md-sys-color-secondary-container, #e8def8)\r
	);\r
	--_selected-focus-icon-color: var(\r
		--md-outlined-segmented-button-selected-focus-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-focus-label-text-color: var(\r
		--md-outlined-segmented-button-selected-focus-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-icon-color: var(\r
		--md-outlined-segmented-button-selected-hover-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-label-text-color: var(\r
		--md-outlined-segmented-button-selected-hover-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-hover-state-layer-color: var(\r
		--md-outlined-segmented-button-selected-hover-state-layer-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-label-text-color: var(\r
		--md-outlined-segmented-button-selected-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-icon-color: var(\r
		--md-outlined-segmented-button-selected-pressed-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-label-text-color: var(\r
		--md-outlined-segmented-button-selected-pressed-label-text-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_selected-pressed-state-layer-color: var(\r
		--md-outlined-segmented-button-selected-pressed-state-layer-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_shape: var(\r
		--md-outlined-segmented-button-shape,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_unselected-focus-icon-color: var(\r
		--md-outlined-segmented-button-unselected-focus-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-focus-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-focus-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-icon-color: var(\r
		--md-outlined-segmented-button-unselected-hover-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-hover-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-hover-state-layer-color: var(\r
		--md-outlined-segmented-button-unselected-hover-state-layer-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-icon-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-label-text-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-label-text-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_unselected-pressed-state-layer-color: var(\r
		--md-outlined-segmented-button-unselected-pressed-state-layer-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_icon-size: var(--md-outlined-segmented-button-icon-size, 18px);\r
	--_selected-icon-color: var(\r
		--md-outlined-segmented-button-selected-icon-color,\r
		var(--md-sys-color-on-secondary-container, #1d192b)\r
	);\r
	--_unselected-icon-color: var(\r
		--md-outlined-segmented-button-unselected-icon-color,\r
		var(--md-sys-color-on-surface, #1d1b20)\r
	);\r
	--_shape-start-start: var(\r
		--md-outlined-segmented-button-shape-start-start,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-start-end: var(\r
		--md-outlined-segmented-button-shape-start-end,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-end-end: var(\r
		--md-outlined-segmented-button-shape-end-end,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_shape-end-start: var(\r
		--md-outlined-segmented-button-shape-end-start,\r
		var(--md-sys-shape-corner-full, 9999px)\r
	);\r
	--_spacing-leading: var(--md-outlined-segmented-button-spacing-leading, 12px);\r
	--_spacing-trailing: var(\r
		--md-outlined-segmented-button-spacing-trailing,\r
		12px\r
	);\r
	display: inline-flex;\r
	outline: none;\r
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r
}\r
\r
.segmented-buttont-module_segmented-button__tnT4D {\r
	cursor: pointer;\r
	--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);\r
	--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
	--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);\r
	--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	align-items: center;\r
	background: rgba(0, 0, 0, 0);\r
	border: none;\r
	display: flex;\r
	flex: 1;\r
	justify-content: center;\r
	outline: none;\r
	position: relative;\r
	vertical-align: middle;\r
	padding-inline-start: var(--_spacing-leading);\r
	padding-inline-end: var(--_spacing-trailing);\r
	text-transform: inherit;\r
	&.segmented-buttont-module_selected__NCVOt {\r
		background-color: var(--_selected-container-color);\r
		--md-ripple-hover-color: var(--_selected-hover-state-layer-color);\r
		--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
		--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);\r
		--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	}\r
	&.segmented-buttont-module_unselected__V3O9p {\r
		--md-ripple-hover-color: var(--_unselected-hover-state-layer-color);\r
		--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);\r
		--md-ripple-pressed-color: var(--_unselected-pressed-state-layer-color);\r
		--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);\r
	}\r
}\r
\r
.segmented-buttont-module_outline__9n2UR {\r
	border-color: var(--_outline-color);\r
	border-radius: inherit;\r
	border-style: solid;\r
	border-width: 1px;\r
	inset: 0px -0.5px;\r
	pointer-events: none;\r
	position: absolute;\r
}\r
.segmented-buttont-module_leading__6zkws {\r
	display: inline-flex;\r
	justify-content: flex-start;\r
	align-items: center;\r
}\r
.segmented-buttont-module_graphic__KFB1e {\r
	overflow: hidden;\r
	position: relative;\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
	display: inline-flex;\r
	justify-content: flex-start;\r
	align-items: center;\r
	transition: width 150ms cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_graphic__KFB1e {\r
	width: 0;\r
}\r
.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_graphic__KFB1e,\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_graphic__KFB1e {\r
	width: calc(var(--_icon-size) + 8px);\r
}\r
\r
.segmented-buttont-module_checkmark__ean7d {\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
	transition: opacity 50ms ease-out;\r
}\r
.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_checkmark__ean7d {\r
	display: inline-flex;\r
	position: absolute;\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_checkmark__ean7d {\r
	opacity: 0;\r
}\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_checkmark__ean7d {\r
	stroke: var(--_selected-icon-color);\r
}\r
\r
@keyframes segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR {\r
	0% {\r
		opacity: 1;\r
	}\r
	100% {\r
		opacity: 0;\r
	}\r
}\r
.segmented-buttont-module_deselecting__5aeDz .segmented-buttont-module_checkmark__ean7d {\r
	animation: segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR;\r
	animation-duration: 50ms;\r
	animation-timing-function: linear;\r
	animation-fill-mode: forwards;\r
}\r
\r
.segmented-buttont-module_checkmark-path__jN9bX {\r
	stroke-width: 2px;\r
	stroke-dasharray: 29.7833;\r
}\r
@keyframes segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy {\r
	0% {\r
		stroke-dashoffset: 29.7833385;\r
	}\r
	100% {\r
		stroke-dashoffset: 0;\r
	}\r
}\r
.segmented-buttont-module_selecting__uyvR2 .segmented-buttont-module_checkmark-path__jN9bX {\r
	stroke-dashoffset: 29.7833385;\r
	animation: segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy;\r
	animation-duration: 150ms;\r
	animation-delay: 50ms;\r
	animation-fill-mode: forwards;\r
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
\r
.segmented-buttont-module_icon__oEvPI {\r
	display: flex;\r
	--md-icon-size: 18px;\r
	height: var(--_icon-size);\r
	width: var(--_icon-size);\r
	font-size: var(--_icon-size);\r
}\r
.segmented-buttont-module_selected__NCVOt.segmented-buttont-module_with-label__46HnX .segmented-buttont-module_icon__oEvPI {\r
	opacity: 0;\r
}\r
.segmented-buttont-module_label-text__-mx7c {\r
	font-family: var(--_label-text-font);\r
	font-size: var(--_label-text-size);\r
	line-height: var(--_label-text-line-height);\r
	font-weight: var(--_label-text-weight);\r
}\r
.segmented-buttont-module_selected__NCVOt .segmented-buttont-module_label-text__-mx7c {\r
	color: var(--_selected-label-text-color);\r
}\r
.segmented-buttont-module_unselected__V3O9p .segmented-buttont-module_label-text__-mx7c {\r
	color: var(--_unselected-label-text-color);\r
}\r
.segmented-buttont-module_touch__zz2Ce {\r
	position: absolute;\r
	top: 50%;\r
	height: 48px;\r
	left: 50%;\r
	width: 100%;\r
	transform: translate(-50%, -50%);\r
}\r
`);const hm=t=>{const{id:e,icon:r,label:n,disabled:o,selected:i,className:s,noCheckmark:a}=t,l=W.useRef(null),{buttonProps:u}=Za(t,l),d=e||`actify-segmented-button${W.useId()}`,h=W.useMemo((()=>i?"selecting":"deselecting"),[i]),p=we(Z["segmented-button"],r&&Z["with-icon"],Z[h],i?Z.selected:Z.unselected,n?Z["with-label"]:Z["without-label"],a?Z["without-checkmark"]:Z["with-checkmark"],s),{focusProps:m,isFocusVisible:v}=Wt();return c.jsx("div",{role:"presentation",className:Z.host,children:c.jsxs("button",Object.assign({id:d,ref:l,className:p,tabIndex:o?-1:0},ce(u,m),{children:[v&&c.jsx(Tr,{}),c.jsx(Kt,{id:d,disabled:o}),c.jsx("span",{className:Z.outline}),c.jsxs("span",{className:Z.leading,"aria-hidden":"true",children:[c.jsxs("span",{className:Z.graphic,children:[c.jsx("svg",{className:Z.checkmark,viewBox:"0 0 24 24",children:c.jsx("path",{fill:"none",className:Z["checkmark-path"],d:"M1.73,12.91 8.1,19.28 22.79,4.59"})}),n&&c.jsx("span",{className:Z.icon,"aria-hidden":"true",children:r})]}),!n&&c.jsx("span",{className:Z.icon,"aria-hidden":"true",children:r})]}),c.jsx("span",{className:Z["label-text"],children:n}),c.jsx("span",{className:Z.touch})]}))})},mm=t=>{const{children:e}=t,r=Qe(t,["children"]);return c.jsx("div",Object.assign({},r,{role:"presentation",children:e}))},tl={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},rl={...tl,customError:!0,valid:!1},_t={isInvalid:!1,validationDetails:tl,validationErrors:[]},pm=y.createContext({}),Hi="__formValidationState"+Date.now();function fm(t){if(t[Hi]){let{realtimeValidation:e,displayValidation:r,updateValidation:n,resetValidation:o,commitValidation:i}=t[Hi];return{realtimeValidation:e,displayValidation:r,updateValidation:n,resetValidation:o,commitValidation:i}}return(function(e){let{isInvalid:r,validationState:n,name:o,value:i,builtinValidation:s,validate:a,validationBehavior:l="aria"}=e;n&&(r||(r=n==="invalid"));let u=r!==void 0?{isInvalid:r,validationErrors:[],validationDetails:rl}:null,d=y.useMemo((()=>{if(!a||i==null)return null;let $=(function(R,C){if(typeof R=="function"){let z=R(C);if(z&&typeof z!="boolean")return Gr(z)}return[]})(a,i);return Ki($)}),[a,i]);s?.validationDetails.valid&&(s=void 0);let h=y.useContext(pm),p=y.useMemo((()=>o?Array.isArray(o)?o.flatMap(($=>Gr(h[$]))):Gr(h[o]):[]),[h,o]),[m,v]=y.useState(h),[x,b]=y.useState(!1);h!==m&&(v(h),b(!1));let _=y.useMemo((()=>Ki(x?[]:p)),[x,p]),T=y.useRef(_t),[N,M]=y.useState(_t),w=y.useRef(_t),A=()=>{if(!D)return;f(!1);let $=d||s||T.current;Qr($,w.current)||(w.current=$,M($))},[D,f]=y.useState(!1);return y.useEffect(A),{realtimeValidation:u||_||d||s||_t,displayValidation:l==="native"?u||_||N:u||_||d||s||N,updateValidation($){l!=="aria"||Qr(N,$)?T.current=$:M($)},resetValidation(){let $=_t;Qr($,w.current)||(w.current=$,M($)),l==="native"&&f(!1),b(!0)},commitValidation(){l==="native"&&f(!0),b(!0)}}})(t)}function Gr(t){return t?Array.isArray(t)?t:[t]:[]}function Ki(t){return t.length?{isInvalid:!0,validationErrors:t,validationDetails:rl}:null}function Qr(t,e){return t===e||!!t&&!!e&&t.isInvalid===e.isInvalid&&t.validationErrors.length===e.validationErrors.length&&t.validationErrors.every(((r,n)=>r===e.validationErrors[n]))&&Object.entries(t.validationDetails).every((([r,n])=>e.validationDetails[r]===n))}function vm(t,e,r){let[n,o]=y.useState(t||e),i=y.useRef(t!==void 0),s=t!==void 0;y.useEffect((()=>{let u=i.current;u!==s&&console.warn(`WARN: A component changed from ${u?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),i.current=s}),[s]);let a=s?t:n,l=y.useCallback(((u,...d)=>{let h=(p,...m)=>{r&&(Object.is(a,p)||r(p,...m)),s||(a=p)};typeof u=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o(((p,...m)=>{let v=u(s?a:p,...m);return h(v,...d),s?p:v}))):(s||o(u),h(u,...d))}),[s,a,r]);return[a,l]}function gm(t,e){let{id:r,"aria-label":n,"aria-labelledby":o}=t;return r=ht(r),o&&n?o=[...new Set([r,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),{id:r,"aria-label":n,"aria-labelledby":o}}function xm(t){let{id:e,label:r,"aria-labelledby":n,"aria-label":o,labelElementType:i="label"}=t;e=ht(e);let s=ht(),a={};return r?(n=n?`${s} ${n}`:s,a={id:s,htmlFor:i==="label"?e:void 0}):n||o||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:a,fieldProps:gm({id:e,"aria-label":o,"aria-labelledby":n})}}function ym(t){let{description:e,errorMessage:r,isInvalid:n,validationState:o}=t,{labelProps:i,fieldProps:s}=xm(t),a=yo([!!e,!!r,n,o]),l=yo([!!e,!!r,n,o]);return s=ce(s,{"aria-describedby":[a,l,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:i,fieldProps:s,descriptionProps:{id:a},errorMessageProps:{id:l}}}function bm(t,e,r){let{validationBehavior:n,focus:o}=t;Ze((()=>{if(n==="native"&&r?.current&&!r.current.disabled){let u=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";r.current.setCustomValidity(u),r.current.hasAttribute("title")||(r.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation({isInvalid:!(l=r.current).validity.valid,validationDetails:_m(l),validationErrors:l.validationMessage?[l.validationMessage]:[]})}var l}));let i=pe((()=>{e.resetValidation()})),s=pe((l=>{var u;e.displayValidation.isInvalid||e.commitValidation();let d=r==null||(u=r.current)===null||u===void 0?void 0:u.form;var h;!l.defaultPrevented&&r&&d&&(function(p){for(let m=0;m<p.elements.length;m++){let v=p.elements[m];if(!v.validity.valid)return v}return null})(d)===r.current&&(o?o():(h=r.current)===null||h===void 0||h.focus(),Jh("keyboard")),l.preventDefault()})),a=pe((()=>{e.commitValidation()}));y.useEffect((()=>{let l=r?.current;if(!l)return;let u=l.form;return l.addEventListener("invalid",s),l.addEventListener("change",a),u?.addEventListener("reset",i),()=>{l.removeEventListener("invalid",s),l.removeEventListener("change",a),u?.removeEventListener("reset",i)}}),[r,s,a,i,n])}function _m(t){let e=t.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function wm(t,e,r){let n=y.useRef(e),o=pe((()=>{r&&r(n.current)}));y.useEffect((()=>{var i;let s=t==null||(i=t.current)===null||i===void 0?void 0:i.form;return s?.addEventListener("reset",o),()=>{s?.removeEventListener("reset",o)}}),[t,o])}var Wi={text:"supporting-module_text__LAS2Y",counter:"supporting-module_counter__GuSE6"};xe(`.supporting-module_text__LAS2Y {\r
  color: var(--_supporting-text-color);\r
  display: flex;\r
  font-family: var(--_supporting-text-font);\r
  font-size: var(--_supporting-text-size);\r
  line-height: var(--_supporting-text-line-height);\r
  font-weight: var(--_supporting-text-weight);\r
  gap: 16px;\r
  justify-content: space-between;\r
  padding-inline-start: var(--_supporting-text-leading-space);\r
  padding-inline-end: var(--_supporting-text-trailing-space);\r
  padding-top: var(--_supporting-text-top-space);\r
}\r
.supporting-module_counter__GuSE6 {\r
  flex-shrink: 0;\r
}\r
`);const $m=({max:t=-1,count:e=-1,error:r,errorText:n,supportingText:o,refreshErrorAlert:i})=>{const s=r&&n&&!i?"alert":"",a=()=>e<0||t<=0?"":`${e} / ${t}`,l=()=>r&&n?n:o;return c.jsxs(W.Fragment,{children:[c.jsxs("div",{role:s,className:Wi.text,children:[c.jsx("span",{children:l()}),c.jsx("span",{className:Wi.counter,children:a()})]}),c.jsx("div",{hidden:!0,id:"description",children:`${l()} ${a()}`})]})};var O={filled:"field-module_filled__lGXpV",outlined:"field-module_outlined__7MFPd",field:"field-module_field__OUiHT",outline:"field-module_outline__MLMKT","container-overflow":"field-module_container-overflow__DVkGv",container:"field-module_container__Vg8QO",start:"field-module_start__hbiQQ",end:"field-module_end__k4pEv","with-start":"field-module_with-start__oQ4V1","with-end":"field-module_with-end__v1BEg",middle:"field-module_middle__o4DOl",focused:"field-module_focused__yovQv",content:"field-module_content__r4BW-",populated:"field-module_populated__Q-p--",label:"field-module_label__nLEGd",resting:"field-module_resting__WB4GE",floating:"field-module_floating__cHtoV",visible:"field-module_visible__192Ro",error:"field-module_error__Gwmtc","input-wrapper":"field-module_input-wrapper__euPtU","no-label":"field-module_no-label__WTIud",background:"field-module_background__lA8Sd","state-layer":"field-module_state-layer__C0so-",disabled:"field-module_disabled__-ZlOi","active-indicator":"field-module_active-indicator__EV61C","label-wrapper":"field-module_label-wrapper__rT6tK","outline-start":"field-module_outline-start__1g5Bi","outline-notch":"field-module_outline-notch__DkhHs","outline-end":"field-module_outline-end__u0aPt","outline-panel-inactive":"field-module_outline-panel-inactive__tdtyr","outline-panel-active":"field-module_outline-panel-active__BoFP8","outline-label":"field-module_outline-label__V41uw"};xe(`.field-module_filled__lGXpV {\r
  --_active-indicator-color: var(\r
    --md-filled-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-field-active-indicator-height,\r
    1px\r
  );\r
  --_bottom-space: var(--md-filled-field-bottom-space, 16px);\r
  --_container-color: var(\r
    --md-filled-field-container-color,\r
    var(--md-sys-color-surface-container-highest, #e6e0e9)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-field-container-shape-start-start,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-field-container-shape-start-end,\r
    var(--md-filled-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-field-container-shape-end-end,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-field-container-shape-end-start,\r
    var(--md-filled-field-container-shape, 0px)\r
  );\r
  --_content-color: var(\r
    --md-filled-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-filled-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-filled-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-filled-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-filled-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-field-disabled-container-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-content-color: var(\r
    --md-filled-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-filled-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-filled-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-filled-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-filled-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-filled-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-field-error-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-content-color: var(\r
    --md-filled-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-filled-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-filled-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-filled-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-filled-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-filled-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-filled-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-filled-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-filled-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-content-color: var(\r
    --md-filled-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-filled-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-filled-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-content-color: var(\r
    --md-filled-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-filled-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-filled-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-filled-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-filled-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-filled-field-leading-space, 16px);\r
  --_supporting-text-color: var(\r
    --md-filled-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-filled-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-filled-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-filled-field-trailing-space, 16px);\r
  --_with-label-bottom-space: var(\r
    --md-filled-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);\r
}\r
\r
.field-module_outlined__7MFPd {\r
  --_bottom-space: var(--md-outlined-field-bottom-space, 16px);\r
  --_container-shape: var(--md-outlined-field-container-shape, 4px);\r
  --_content-color: var(\r
    --md-outlined-field-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_content-font: var(\r
    --md-outlined-field-content-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_content-line-height: var(\r
    --md-outlined-field-content-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_content-size: var(\r
    --md-outlined-field-content-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_content-weight: var(\r
    --md-outlined-field-content-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_disabled-content-color: var(\r
    --md-outlined-field-disabled-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-content-opacity: var(\r
    --md-outlined-field-disabled-content-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-content-color: var(\r
    --md-outlined-field-disabled-leading-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-leading-content-opacity: var(\r
    --md-outlined-field-disabled-leading-content-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-content-color: var(\r
    --md-outlined-field-disabled-trailing-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_disabled-trailing-content-opacity: var(\r
    --md-outlined-field-disabled-trailing-content-opacity,\r
    0.38\r
  );\r
  --_error-content-color: var(\r
    --md-outlined-field-error-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-content-color: var(\r
    --md-outlined-field-error-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-field-error-focus-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-leading-content-color: var(\r
    --md-outlined-field-error-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-field-error-focus-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-focus-trailing-content-color: var(\r
    --md-outlined-field-error-focus-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-content-color: var(\r
    --md-outlined-field-error-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-leading-content-color: var(\r
    --md-outlined-field-error-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-hover-trailing-content-color: var(\r
    --md-outlined-field-error-hover-trailing-content-color,\r
    var(--md-sys-color-on-error-container, #410e0b)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-field-error-label-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-leading-content-color: var(\r
    --md-outlined-field-error-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-field-error-outline-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-field-error-supporting-text-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_error-trailing-content-color: var(\r
    --md-outlined-field-error-trailing-content-color,\r
    var(--md-sys-color-error, #b3261e)\r
  );\r
  --_focus-content-color: var(\r
    --md-outlined-field-focus-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-field-focus-label-text-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-leading-content-color: var(\r
    --md-outlined-field-focus-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-field-focus-outline-color,\r
    var(--md-sys-color-primary, #6750a4)\r
  );\r
  --_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_focus-trailing-content-color: var(\r
    --md-outlined-field-focus-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-content-color: var(\r
    --md-outlined-field-hover-content-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-leading-content-color: var(\r
    --md-outlined-field-hover-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-field-hover-outline-color,\r
    var(--md-sys-color-on-surface, #1d1b20)\r
  );\r
  --_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_hover-trailing-content-color: var(\r
    --md-outlined-field-hover-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-padding-bottom: var(\r
    --md-outlined-field-label-text-padding-bottom,\r
    8px\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-content-color: var(\r
    --md-outlined-field-leading-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_leading-space: var(--md-outlined-field-leading-space, 16px);\r
  --_outline-color: var(\r
    --md-outlined-field-outline-color,\r
    var(--md-sys-color-outline, #79747e)\r
  );\r
  --_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);\r
  --_outline-width: var(--md-outlined-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_top-space: var(--md-outlined-field-top-space, 16px);\r
  --_trailing-content-color: var(\r
    --md-outlined-field-trailing-content-color,\r
    var(--md-sys-color-on-surface-variant, #49454f)\r
  );\r
  --_trailing-space: var(--md-outlined-field-trailing-space, 16px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
}\r
\r
.field-module_field__OUiHT {\r
  --_with-leading-content-leading-space: var(\r
    --md-filled-field-with-leading-content-leading-space,\r
    12px\r
  );\r
  --_content-space: var(--md-filled-field-content-space, 16px);\r
  --_with-trailing-content-trailing-space: var(\r
    --md-filled-field-with-trailing-content-trailing-space,\r
    12px\r
  );\r
  width: 100%;\r
  cursor: text;\r
  display: flex;\r
  resize: inherit;\r
  flex: 1;\r
  outline: none;\r
  flex-direction: column;\r
  writing-mode: horizontal-tb;\r
  max-width: 100%;\r
  &:hover .field-module_outline__MLMKT {\r
    border-color: var(--_hover-outline-color);\r
    color: var(--_hover-outline-color);\r
  }\r
}\r
\r
.field-module_container-overflow__DVkGv {\r
  resize: inherit;\r
  border-start-start-radius: var(--_container-shape-start-start);\r
  border-start-end-radius: var(--_container-shape-start-end);\r
  border-end-end-radius: var(--_container-shape-end-end);\r
  border-end-start-radius: var(--_container-shape-end-start);\r
  display: flex;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.field-module_container__Vg8QO {\r
  align-items: center;\r
  border-radius: inherit;\r
  display: flex;\r
  flex: 1;\r
  max-height: 100%;\r
  min-height: 100%;\r
  min-width: min-content;\r
  position: relative;\r
}\r
\r
.field-module_start__hbiQQ {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_leading-content-color);\r
}\r
.field-module_end__k4pEv {\r
  height: 100%;\r
  display: flex;\r
  position: relative;\r
  align-items: center;\r
  box-sizing: border-box;\r
  justify-content: center;\r
  color: var(--_trailing-content-color);\r
}\r
\r
.field-module_with-start__oQ4V1 .field-module_start__hbiQQ {\r
  margin-inline: var(--_with-leading-content-leading-space)\r
    var(--_content-space);\r
}\r
.field-module_with-end__v1BEg .field-module_end__k4pEv {\r
  margin-inline: var(--_content-space)\r
    var(--_with-trailing-content-trailing-space);\r
}\r
\r
.field-module_middle__o4DOl {\r
  display: flex;\r
  box-sizing: border-box;\r
  height: 100%;\r
  position: relative;\r
  align-items: stretch;\r
  align-self: baseline;\r
  flex: 1;\r
}\r
\r
.field-module_focused__yovQv .field-module_end__k4pEv {\r
  color: var(--_focus-trailing-content-color);\r
}\r
\r
.field-module_content__r4BW- {\r
  color: var(--_content-color);\r
  display: flex;\r
  flex: 1 1 0%;\r
  opacity: 0;\r
  transition: opacity 83ms cubic-bezier(0.2, 0, 0, 1) 0s;\r
}\r
.field-module_focused__yovQv .field-module_content__r4BW-,\r
.field-module_populated__Q-p-- .field-module_content__r4BW- {\r
  opacity: 1;\r
  transition-delay: 67ms;\r
}\r
\r
.field-module_input__AB2-O {\r
  caret-color: var(--_caret-color);\r
  overflow-x: hidden;\r
  text-align: inherit;\r
}\r
\r
.field-module_label__nLEGd {\r
  box-sizing: border-box;\r
  color: var(--_label-text-color);\r
  overflow: hidden;\r
  max-width: 100%;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  z-index: 1;\r
  font-family: var(--_label-text-font);\r
  font-size: var(--_label-text-size);\r
  line-height: var(--_label-text-line-height);\r
  font-weight: var(--_label-text-weight);\r
  width: min-content;\r
  &.field-module_resting__WB4GE {\r
    position: absolute;\r
    top: var(--_top-space);\r
  }\r
  &.field-module_floating__cHtoV {\r
    font-size: var(--_label-text-populated-size);\r
    line-height: var(--_label-text-populated-line-height);\r
    transform-origin: top left;\r
  }\r
  &.field-module_visible__192Ro {\r
    opacity: 0;\r
  }\r
}\r
.field-module_error__Gwmtc .field-module_label__nLEGd {\r
  color: var(--_error-label-text-color);\r
}\r
\r
.field-module_input-wrapper__euPtU {\r
  all: unset;\r
  color: currentColor;\r
  font-family: var(--_content-font);\r
  font-size: var(--_content-size);\r
  line-height: var(--_content-line-height);\r
  font-weight: var(--_content-weight);\r
  width: 100%;\r
  overflow-wrap: revert;\r
  white-space: revert;\r
  display: flex;\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
  & > input,\r
  & > textarea {\r
    all: inherit;\r
    padding: 0;\r
  }\r
}\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-bottom: var(--_with-label-bottom-space);\r
  padding-top: calc(\r
    var(--_with-label-top-space) + var(--_label-text-populated-line-height)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_input-wrapper__euPtU {\r
  padding-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_no-label__WTIud) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-top: var(--_top-space);\r
  padding-bottom: var(--_bottom-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_input-wrapper__euPtU {\r
  padding-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_background__lA8Sd {\r
  background-color: var(--_container-color);\r
  border-radius: inherit;\r
  inset: 0;\r
  position: absolute;\r
}\r
\r
.field-module_state-layer__C0so- {\r
  border-radius: inherit;\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  visibility: hidden;\r
}\r
:hover .field-module_state-layer__C0so- {\r
  background: var(--_hover-state-layer-color);\r
  opacity: var(--_hover-state-layer-opacity);\r
}\r
.field-module_field__OUiHT:not(.field-module_disabled__-ZlOi):hover .field-module_state-layer__C0so- {\r
  visibility: visible;\r
}\r
\r
.field-module_active-indicator__EV61C {\r
  inset: auto 0 0 0;\r
  pointer-events: none;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
  &:before {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    border-bottom-color: var(--_hover-active-indicator-color);\r
    border-bottom-width: var(--_hover-active-indicator-height);\r
  }\r
  &:after {\r
    border-bottom: var(--_active-indicator-height) solid\r
      var(--_active-indicator-color);\r
    inset: auto 0 0 0;\r
    content: '';\r
    position: absolute;\r
    width: 100%;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-color: var(--_focus-active-indicator-color);\r
    border-bottom-width: var(--_focus-active-indicator-height);\r
  }\r
}\r
.field-module_focused__yovQv .field-module_active-indicator__EV61C:after {\r
  opacity: 1;\r
}\r
\r
.field-module_label-wrapper__rT6tK {\r
  inset: 0;\r
  pointer-events: none;\r
  position: absolute;\r
  text-align: initial;\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: var(--_leading-space);\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_filled__lGXpV .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: var(--_trailing-space);\r
}\r
\r
.field-module_field__OUiHT:not(.field-module_with-start__oQ4V1) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
}\r
.field-module_field__OUiHT:not(.field-module_with-end__v1BEg) .field-module_outlined__7MFPd .field-module_label-wrapper__rT6tK {\r
  margin-inline-end: max(\r
    var(--_trailing-space),\r
    max(var(--_container-shape-start-end), var(--_container-shape-end-end))\r
  );\r
}\r
\r
.field-module_outline__MLMKT {\r
  border-color: var(--_outline-color);\r
  border-radius: inherit;\r
  display: flex;\r
  pointer-events: none;\r
  height: 100%;\r
  position: absolute;\r
  width: 100%;\r
  z-index: 1;\r
}\r
\r
.field-module_field__OUiHT.field-module_focused__yovQv .field-module_outline__MLMKT {\r
  color: var(--_focus-outline-color);\r
  border-color: var(--_focus-outline-color);\r
}\r
.field-module_error__Gwmtc .field-module_outline__MLMKT {\r
  border-color: var(--_error-outline-color);\r
  color: var(--_error-outline-color);\r
}\r
\r
.field-module_outline-start__1g5Bi {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  padding-inline-start: max(\r
    var(--_leading-space),\r
    max(var(--_container-shape-start-start), var(--_container-shape-end-start)) +\r
      var(--_outline-label-padding)\r
  );\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: solid;\r
    border-inline-end-style: none;\r
    border-start-start-radius: inherit;\r
    border-start-end-radius: 0;\r
    border-end-start-radius: inherit;\r
    border-end-end-radius: 0;\r
    margin-inline-end: var(--_outline-label-padding);\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-notch__DkhHs {\r
  align-items: flex-start;\r
  border: inherit;\r
  display: flex;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  margin-inline-end: var(--_outline-label-padding);\r
  max-width: calc(100% - var(--_leading-space) - var(--_trailing-space));\r
  padding: 0 var(--_outline-label-padding);\r
  position: relative;\r
}\r
.field-module_no-label__WTIud .field-module_outline-notch__DkhHs {\r
  display: none;\r
}\r
\r
.field-module_outline-end__u0aPt {\r
  border: inherit;\r
  border-radius: inherit;\r
  box-sizing: border-box;\r
  position: relative;\r
  flex-grow: 1;\r
  margin-inline-start: calc(-1 * var(--_outline-label-padding));\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
  }\r
  &:before {\r
    border-width: var(--_outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
  &:after {\r
    border-width: var(--_focus-outline-width);\r
    border-inline-start-style: none;\r
    border-inline-end-style: solid;\r
    border-start-start-radius: 0;\r
    border-start-end-radius: inherit;\r
    border-end-start-radius: 0;\r
    border-end-end-radius: inherit;\r
    opacity: 0;\r
    transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
    border-bottom-style: solid;\r
    border-top-style: solid;\r
  }\r
}\r
\r
.field-module_outline-panel-inactive__tdtyr {\r
  border-width: var(--_outline-width);\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-top-style: none;\r
  border-color: inherit;\r
  border-bottom-style: solid;\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:after {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_outline-panel-active__BoFP8 {\r
  border: inherit;\r
  content: '';\r
  inset: 0;\r
  position: absolute;\r
  border-width: var(--_focus-outline-width);\r
  opacity: 0;\r
  border-top-style: none;\r
  border-left-style: none;\r
  border-right-style: none;\r
  border-bottom-style: solid;\r
  transition: opacity 150ms cubic-bezier(0.2, 0, 0, 1);\r
  &:before,\r
  &:after {\r
    border: inherit;\r
    content: '';\r
    inset: 0;\r
    position: absolute;\r
    border-width: var(--_focus-outline-width);\r
    border-top-style: solid;\r
    border-bottom: none;\r
    bottom: auto;\r
    transform: scaleX(1);\r
    transition: transform 150ms cubic-bezier(0.2, 0, 0, 1);\r
  }\r
  &:before {\r
    right: 50%;\r
    transform-origin: top left;\r
  }\r
  &:before {\r
    left: 50%;\r
    transform-origin: top right;\r
  }\r
}\r
\r
.field-module_focused__yovQv .field-module_outline-start__1g5Bi:after,\r
.field-module_focused__yovQv .field-module_outline-end__u0aPt:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8 {\r
  opacity: 1;\r
}\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:before,\r
.field-module_populated__Q-p-- .field-module_outline-panel-active__BoFP8:after,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:before,\r
.field-module_focused__yovQv .field-module_outline-panel-inactive__tdtyr:after,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:before,\r
.field-module_focused__yovQv .field-module_outline-panel-active__BoFP8:after {\r
  transform: scaleX(0);\r
}\r
\r
.field-module_outline-label__V41uw {\r
  display: flex;\r
  max-width: 100%;\r
  transform: translateY(calc(-100% + var(--_label-text-padding-bottom)));\r
}\r
`);const nl=t=>{const{disabled:e,className:r,label:n="",max:o,count:i,focused:s=!1,populated:a=!1,required:l=!1,children:u,leadingIcon:d,trailingIcon:h,error:p,errorText:m,supportingText:v,renderOutline:x,renderIndicator:b,renderBackground:_}=t,T=Qe(t,["disabled","className","label","max","count","focused","populated","required","children","leadingIcon","trailingIcon","error","errorText","supportingText","renderOutline","renderIndicator","renderBackground"]),N=W.useId(),M=$=>{if(!n)return"";let R;R=$?s||a:!s&&!a;const C=`${n}${l?"*":""}`;return R?c.jsx($h.span,{layoutId:N,transition:{duration:.15,easings:[gt(.2,0,0,1)]},"aria-hidden":!R,className:we(O.label,!R&&O.visible,$?O.floating:O.resting),children:C}):""},w=M(!0),A=M(!1),D=x?.(w),f=we(O.field,p&&O.error,s&&O.focused,e&&O.disabled,a&&O.populated,!n&&O["no-label"],!!d&&O["with-start"],!!h&&O["with-end"]);return c.jsxs("div",Object.assign({className:f},T,{children:[c.jsxs("div",{className:we(O["container-overflow"],r),children:[_?.(),b?.(s),D,c.jsxs("div",{className:O.container,children:[c.jsx("div",{className:O.start,children:d}),c.jsxs("div",{className:O.middle,children:[c.jsxs("span",{className:O["label-wrapper"],children:[A,D?"":w]}),c.jsx("div",{className:O.content,children:u})]}),c.jsx("div",{className:O.end,children:h})]})]}),c.jsx($m,{max:o,count:i,error:p,errorText:m,supportingText:v})]}))},jm=()=>c.jsxs(W.Fragment,{children:[c.jsx("div",{className:O.background}),c.jsx("div",{className:O["state-layer"]})]}),Pm=()=>c.jsx("div",{className:O["active-indicator"]}),qi=t=>{const{children:e}=t,r=Qe(t,["children"]);return c.jsx(nl,Object.assign({},r,{className:O.filled,renderBackground:jm,renderIndicator:Pm,children:c.jsx("div",{className:O["input-wrapper"],children:e})}))},Tm=t=>c.jsxs("div",{className:O.outline,children:[c.jsx("div",{className:O["outline-start"]}),c.jsxs("div",{className:O["outline-notch"],children:[c.jsx("div",{className:O["outline-panel-inactive"]}),c.jsx("div",{className:O["outline-panel-active"]}),c.jsx("div",{className:O["outline-label"],children:t})]}),c.jsx("div",{className:O["outline-end"]})]}),Em=t=>{const{children:e}=t,r=Qe(t,["children"]);return c.jsx(nl,Object.assign({},r,{className:O.outlined,renderOutline:Tm,children:c.jsx("div",{className:O["input-wrapper"],children:e})}))};var Zr={filled:"text-field-module_filled__bCfKF",outlined:"text-field-module_outlined__vwS7g",prefix:"text-field-module_prefix__9Zf4V",suffix:"text-field-module_suffix__itEyf"};xe(`.text-field-module_filled__bCfKF {\r
  --_leading-space: var(--md-filled-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-filled-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-filled-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-filled-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-filled-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-filled-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_with-label-top-space: var(\r
    --md-filled-text-field-with-label-top-space,\r
    8px\r
  );\r
  --_with-label-bottom-space: var(\r
    --md-filled-text-field-with-label-bottom-space,\r
    8px\r
  );\r
  --_focus-caret-color: var(\r
    --md-filled-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_active-indicator-color: var(\r
    --md-filled-text-field-active-indicator-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_active-indicator-height: var(\r
    --md-filled-text-field-active-indicator-height,\r
    1px\r
  );\r
  --_caret-color: var(\r
    --md-filled-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-color: var(\r
    --md-filled-text-field-container-color,\r
    var(--md-sys-color-surface-container-highest)\r
  );\r
  --_container-shape-start-start: var(\r
    --md-filled-text-field-container-shape-start-start,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-filled-text-field-container-shape-start-end,\r
    var(--md-filled-text-field-container-shape, 4px)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-filled-text-field-container-shape-end-end,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-filled-text-field-container-shape-end-start,\r
    var(--md-filled-text-field-container-shape, 0px)\r
  );\r
  --_disabled-active-indicator-color: var(\r
    --md-filled-text-field-disabled-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-active-indicator-height: var(\r
    --md-filled-text-field-disabled-active-indicator-height,\r
    1px\r
  );\r
  --_disabled-active-indicator-opacity: var(\r
    --md-filled-text-field-disabled-active-indicator-opacity,\r
    0.38\r
  );\r
  --_disabled-container-color: var(\r
    --md-filled-text-field-disabled-container-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-container-opacity: var(\r
    --md-filled-text-field-disabled-container-opacity,\r
    0.04\r
  );\r
  --_disabled-input-text-color: var(\r
    --md-filled-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-filled-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-filled-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-filled-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-filled-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-filled-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-filled-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-filled-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-filled-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-filled-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-active-indicator-color: var(\r
    --md-filled-text-field-error-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-active-indicator-color: var(\r
    --md-filled-text-field-error-focus-active-indicator-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-filled-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-filled-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-filled-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-filled-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-filled-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-filled-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-active-indicator-color: var(\r
    --md-filled-text-field-error-hover-active-indicator-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-filled-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-filled-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-filled-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-state-layer-color: var(\r
    --md-filled-text-field-error-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-state-layer-opacity: var(\r
    --md-filled-text-field-error-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-filled-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-filled-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-filled-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-filled-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-filled-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-filled-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-filled-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-active-indicator-color: var(\r
    --md-filled-text-field-focus-active-indicator-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-active-indicator-height: var(\r
    --md-filled-text-field-focus-active-indicator-height,\r
    3px\r
  );\r
  --_focus-input-text-color: var(\r
    --md-filled-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-filled-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-filled-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-filled-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-filled-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-active-indicator-color: var(\r
    --md-filled-text-field-hover-active-indicator-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-active-indicator-height: var(\r
    --md-filled-text-field-hover-active-indicator-height,\r
    1px\r
  );\r
  --_hover-input-text-color: var(\r
    --md-filled-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-filled-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-filled-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-state-layer-color: var(\r
    --md-filled-text-field-hover-state-layer-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-state-layer-opacity: var(\r
    --md-filled-text-field-hover-state-layer-opacity,\r
    0.08\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-filled-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-filled-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-filled-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-filled-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-filled-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-filled-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-filled-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-filled-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-filled-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-filled-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-filled-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-filled-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-filled-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-filled-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-filled-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-filled-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-filled-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-filled-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);\r
  --_supporting-text-color: var(\r
    --md-filled-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-filled-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-filled-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-filled-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-filled-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-filled-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-filled-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-filled-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-filled-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);\r
  --md-filled-field-active-indicator-color: var(--_active-indicator-color);\r
  --md-filled-field-active-indicator-height: var(--_active-indicator-height);\r
  --md-filled-field-bottom-space: var(--_bottom-space);\r
  --md-filled-field-container-color: var(--_container-color);\r
  --md-filled-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-filled-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-filled-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-filled-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-filled-field-content-color: var(--_input-text-color);\r
  --md-filled-field-content-font: var(--_input-text-font);\r
  --md-filled-field-content-line-height: var(--_input-text-line-height);\r
  --md-filled-field-content-size: var(--_input-text-size);\r
  --md-filled-field-content-weight: var(--_input-text-weight);\r
  --md-filled-field-disabled-active-indicator-color: var(\r
    --_disabled-active-indicator-color\r
  );\r
  --md-filled-field-disabled-active-indicator-height: var(\r
    --_disabled-active-indicator-height\r
  );\r
  --md-filled-field-disabled-active-indicator-opacity: var(\r
    --_disabled-active-indicator-opacity\r
  );\r
  --md-filled-field-disabled-container-color: var(--_disabled-container-color);\r
  --md-filled-field-disabled-container-opacity: var(\r
    --_disabled-container-opacity\r
  );\r
  --md-filled-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-filled-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-filled-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-filled-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-filled-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-filled-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-filled-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-filled-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-filled-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-filled-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-filled-field-error-active-indicator-color: var(\r
    --_error-active-indicator-color\r
  );\r
  --md-filled-field-error-content-color: var(--_error-input-text-color);\r
  --md-filled-field-error-focus-active-indicator-color: var(\r
    --_error-focus-active-indicator-color\r
  );\r
  --md-filled-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-filled-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-filled-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-filled-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-filled-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-filled-field-error-hover-active-indicator-color: var(\r
    --_error-hover-active-indicator-color\r
  );\r
  --md-filled-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-filled-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-filled-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-filled-field-error-hover-state-layer-color: var(\r
    --_error-hover-state-layer-color\r
  );\r
  --md-filled-field-error-hover-state-layer-opacity: var(\r
    --_error-hover-state-layer-opacity\r
  );\r
  --md-filled-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-filled-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-filled-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-filled-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-filled-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-filled-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-filled-field-focus-active-indicator-color: var(\r
    --_focus-active-indicator-color\r
  );\r
  --md-filled-field-focus-active-indicator-height: var(\r
    --_focus-active-indicator-height\r
  );\r
  --md-filled-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-filled-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-filled-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-filled-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-filled-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-filled-field-hover-active-indicator-color: var(\r
    --_hover-active-indicator-color\r
  );\r
  --md-filled-field-hover-active-indicator-height: var(\r
    --_hover-active-indicator-height\r
  );\r
  --md-filled-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-filled-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-filled-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);\r
  --md-filled-field-hover-state-layer-opacity: var(\r
    --_hover-state-layer-opacity\r
  );\r
  --md-filled-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-filled-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-filled-field-label-text-color: var(--_label-text-color);\r
  --md-filled-field-label-text-font: var(--_label-text-font);\r
  --md-filled-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-filled-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-filled-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-filled-field-label-text-size: var(--_label-text-size);\r
  --md-filled-field-label-text-weight: var(--_label-text-weight);\r
  --md-filled-field-leading-content-color: var(--_leading-icon-color);\r
  --md-filled-field-leading-space: var(--_leading-space);\r
  --md-filled-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-filled-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-filled-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-filled-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-filled-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-filled-field-top-space: var(--_top-space);\r
  --md-filled-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-filled-field-trailing-space: var(--_trailing-space);\r
  --md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);\r
  --md-filled-field-with-label-top-space: var(--_with-label-top-space);\r
}\r
\r
.text-field-module_outlined__vwS7g {\r
  --_leading-space: var(--md-outlined-text-field-leading-space, 16px);\r
  --_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);\r
  --_top-space: var(--md-outlined-text-field-top-space, 16px);\r
  --_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);\r
  --_input-text-prefix-trailing-space: var(\r
    --md-outlined-text-field-input-text-prefix-trailing-space,\r
    2px\r
  );\r
  --_input-text-suffix-leading-space: var(\r
    --md-outlined-text-field-input-text-suffix-leading-space,\r
    2px\r
  );\r
  --_focus-caret-color: var(\r
    --md-outlined-text-field-focus-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_caret-color: var(\r
    --md-outlined-text-field-caret-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_container-shape: var(--md-outlined-text-field-container-shape, 4px);\r
  --_disabled-input-text-color: var(\r
    --md-outlined-text-field-disabled-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-input-text-opacity: var(\r
    --md-outlined-text-field-disabled-input-text-opacity,\r
    0.38\r
  );\r
  --_disabled-label-text-color: var(\r
    --md-outlined-text-field-disabled-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-label-text-opacity: var(\r
    --md-outlined-text-field-disabled-label-text-opacity,\r
    0.38\r
  );\r
  --_disabled-leading-icon-color: var(\r
    --md-outlined-text-field-disabled-leading-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-leading-icon-opacity: var(\r
    --md-outlined-text-field-disabled-leading-icon-opacity,\r
    0.38\r
  );\r
  --_disabled-outline-color: var(\r
    --md-outlined-text-field-disabled-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-outline-opacity: var(\r
    --md-outlined-text-field-disabled-outline-opacity,\r
    0.12\r
  );\r
  --_disabled-outline-width: var(\r
    --md-outlined-text-field-disabled-outline-width,\r
    1px\r
  );\r
  --_disabled-supporting-text-color: var(\r
    --md-outlined-text-field-disabled-supporting-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-supporting-text-opacity: var(\r
    --md-outlined-text-field-disabled-supporting-text-opacity,\r
    0.38\r
  );\r
  --_disabled-trailing-icon-color: var(\r
    --md-outlined-text-field-disabled-trailing-icon-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_disabled-trailing-icon-opacity: var(\r
    --md-outlined-text-field-disabled-trailing-icon-opacity,\r
    0.38\r
  );\r
  --_error-focus-caret-color: var(\r
    --md-outlined-text-field-error-focus-caret-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-input-text-color: var(\r
    --md-outlined-text-field-error-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-focus-label-text-color: var(\r
    --md-outlined-text-field-error-focus-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-leading-icon-color: var(\r
    --md-outlined-text-field-error-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-focus-outline-color: var(\r
    --md-outlined-text-field-error-focus-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-supporting-text-color: var(\r
    --md-outlined-text-field-error-focus-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-focus-trailing-icon-color: var(\r
    --md-outlined-text-field-error-focus-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-input-text-color: var(\r
    --md-outlined-text-field-error-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-hover-label-text-color: var(\r
    --md-outlined-text-field-error-hover-label-text-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-leading-icon-color: var(\r
    --md-outlined-text-field-error-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-hover-outline-color: var(\r
    --md-outlined-text-field-error-hover-outline-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-hover-supporting-text-color: var(\r
    --md-outlined-text-field-error-hover-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-hover-trailing-icon-color: var(\r
    --md-outlined-text-field-error-hover-trailing-icon-color,\r
    var(--md-sys-color-on-error-container)\r
  );\r
  --_error-input-text-color: var(\r
    --md-outlined-text-field-error-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_error-label-text-color: var(\r
    --md-outlined-text-field-error-label-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-leading-icon-color: var(\r
    --md-outlined-text-field-error-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_error-outline-color: var(\r
    --md-outlined-text-field-error-outline-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-supporting-text-color: var(\r
    --md-outlined-text-field-error-supporting-text-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_error-trailing-icon-color: var(\r
    --md-outlined-text-field-error-trailing-icon-color,\r
    var(--md-sys-color-error)\r
  );\r
  --_focus-input-text-color: var(\r
    --md-outlined-text-field-focus-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_focus-label-text-color: var(\r
    --md-outlined-text-field-focus-label-text-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-leading-icon-color: var(\r
    --md-outlined-text-field-focus-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-outline-color: var(\r
    --md-outlined-text-field-focus-outline-color,\r
    var(--md-sys-color-primary)\r
  );\r
  --_focus-outline-width: var(\r
    --md-outlined-text-field-focus-outline-width,\r
    3px\r
  );\r
  --_focus-supporting-text-color: var(\r
    --md-outlined-text-field-focus-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_focus-trailing-icon-color: var(\r
    --md-outlined-text-field-focus-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-input-text-color: var(\r
    --md-outlined-text-field-hover-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-label-text-color: var(\r
    --md-outlined-text-field-hover-label-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-leading-icon-color: var(\r
    --md-outlined-text-field-hover-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-outline-color: var(\r
    --md-outlined-text-field-hover-outline-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_hover-outline-width: var(\r
    --md-outlined-text-field-hover-outline-width,\r
    1px\r
  );\r
  --_hover-supporting-text-color: var(\r
    --md-outlined-text-field-hover-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_hover-trailing-icon-color: var(\r
    --md-outlined-text-field-hover-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-color: var(\r
    --md-outlined-text-field-input-text-color,\r
    var(--md-sys-color-on-surface)\r
  );\r
  --_input-text-font: var(\r
    --md-outlined-text-field-input-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_input-text-line-height: var(\r
    --md-outlined-text-field-input-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_input-text-placeholder-color: var(\r
    --md-outlined-text-field-input-text-placeholder-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-prefix-color: var(\r
    --md-outlined-text-field-input-text-prefix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-size: var(\r
    --md-outlined-text-field-input-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_input-text-suffix-color: var(\r
    --md-outlined-text-field-input-text-suffix-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_input-text-weight: var(\r
    --md-outlined-text-field-input-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_label-text-color: var(\r
    --md-outlined-text-field-label-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_label-text-font: var(\r
    --md-outlined-text-field-label-text-font,\r
    var(\r
      --md-sys-typescale-body-large-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_label-text-line-height: var(\r
    --md-outlined-text-field-label-text-line-height,\r
    var(--md-sys-typescale-body-large-line-height, 1.5rem)\r
  );\r
  --_label-text-populated-line-height: var(\r
    --md-outlined-text-field-label-text-populated-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_label-text-populated-size: var(\r
    --md-outlined-text-field-label-text-populated-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_label-text-size: var(\r
    --md-outlined-text-field-label-text-size,\r
    var(--md-sys-typescale-body-large-size, 1rem)\r
  );\r
  --_label-text-weight: var(\r
    --md-outlined-text-field-label-text-weight,\r
    var(\r
      --md-sys-typescale-body-large-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_leading-icon-color: var(\r
    --md-outlined-text-field-leading-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);\r
  --_outline-color: var(\r
    --md-outlined-text-field-outline-color,\r
    var(--md-sys-color-outline)\r
  );\r
  --_outline-width: var(--md-outlined-text-field-outline-width, 1px);\r
  --_supporting-text-color: var(\r
    --md-outlined-text-field-supporting-text-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_supporting-text-font: var(\r
    --md-outlined-text-field-supporting-text-font,\r
    var(\r
      --md-sys-typescale-body-small-font,\r
      var(--md-ref-typeface-plain, Roboto)\r
    )\r
  );\r
  --_supporting-text-leading-space: var(\r
    --md-outlined-field-supporting-text-leading-space,\r
    16px\r
  );\r
  --_supporting-text-line-height: var(\r
    --md-outlined-text-field-supporting-text-line-height,\r
    var(--md-sys-typescale-body-small-line-height, 1rem)\r
  );\r
  --_supporting-text-size: var(\r
    --md-outlined-text-field-supporting-text-size,\r
    var(--md-sys-typescale-body-small-size, 0.75rem)\r
  );\r
  --_supporting-text-top-space: var(\r
    --md-outlined-field-supporting-text-top-space,\r
    4px\r
  );\r
  --_supporting-text-trailing-space: var(\r
    --md-outlined-field-supporting-text-trailing-space,\r
    16px\r
  );\r
  --_supporting-text-weight: var(\r
    --md-outlined-text-field-supporting-text-weight,\r
    var(\r
      --md-sys-typescale-body-small-weight,\r
      var(--md-ref-typeface-weight-regular, 400)\r
    )\r
  );\r
  --_trailing-icon-color: var(\r
    --md-outlined-text-field-trailing-icon-color,\r
    var(--md-sys-color-on-surface-variant)\r
  );\r
  --_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);\r
  --_container-shape-start-start: var(\r
    --md-outlined-text-field-container-shape-start-start,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-start-end: var(\r
    --md-outlined-text-field-container-shape-start-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-end: var(\r
    --md-outlined-text-field-container-shape-end-end,\r
    var(--_container-shape)\r
  );\r
  --_container-shape-end-start: var(\r
    --md-outlined-text-field-container-shape-end-start,\r
    var(--_container-shape)\r
  );\r
  --md-outlined-field-bottom-space: var(--_bottom-space);\r
  --md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);\r
  --md-outlined-field-container-shape-end-start: var(\r
    --_container-shape-end-start\r
  );\r
  --md-outlined-field-container-shape-start-end: var(\r
    --_container-shape-start-end\r
  );\r
  --md-outlined-field-container-shape-start-start: var(\r
    --_container-shape-start-start\r
  );\r
  --md-outlined-field-content-color: var(--_input-text-color);\r
  --md-outlined-field-content-font: var(--_input-text-font);\r
  --md-outlined-field-content-line-height: var(--_input-text-line-height);\r
  --md-outlined-field-content-size: var(--_input-text-size);\r
  --md-outlined-field-content-weight: var(--_input-text-weight);\r
  --md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);\r
  --md-outlined-field-disabled-content-opacity: var(\r
    --_disabled-input-text-opacity\r
  );\r
  --md-outlined-field-disabled-label-text-color: var(\r
    --_disabled-label-text-color\r
  );\r
  --md-outlined-field-disabled-label-text-opacity: var(\r
    --_disabled-label-text-opacity\r
  );\r
  --md-outlined-field-disabled-leading-content-color: var(\r
    --_disabled-leading-icon-color\r
  );\r
  --md-outlined-field-disabled-leading-content-opacity: var(\r
    --_disabled-leading-icon-opacity\r
  );\r
  --md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);\r
  --md-outlined-field-disabled-outline-opacity: var(\r
    --_disabled-outline-opacity\r
  );\r
  --md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);\r
  --md-outlined-field-disabled-supporting-text-color: var(\r
    --_disabled-supporting-text-color\r
  );\r
  --md-outlined-field-disabled-supporting-text-opacity: var(\r
    --_disabled-supporting-text-opacity\r
  );\r
  --md-outlined-field-disabled-trailing-content-color: var(\r
    --_disabled-trailing-icon-color\r
  );\r
  --md-outlined-field-disabled-trailing-content-opacity: var(\r
    --_disabled-trailing-icon-opacity\r
  );\r
  --md-outlined-field-error-content-color: var(--_error-input-text-color);\r
  --md-outlined-field-error-focus-content-color: var(\r
    --_error-focus-input-text-color\r
  );\r
  --md-outlined-field-error-focus-label-text-color: var(\r
    --_error-focus-label-text-color\r
  );\r
  --md-outlined-field-error-focus-leading-content-color: var(\r
    --_error-focus-leading-icon-color\r
  );\r
  --md-outlined-field-error-focus-outline-color: var(\r
    --_error-focus-outline-color\r
  );\r
  --md-outlined-field-error-focus-supporting-text-color: var(\r
    --_error-focus-supporting-text-color\r
  );\r
  --md-outlined-field-error-focus-trailing-content-color: var(\r
    --_error-focus-trailing-icon-color\r
  );\r
  --md-outlined-field-error-hover-content-color: var(\r
    --_error-hover-input-text-color\r
  );\r
  --md-outlined-field-error-hover-label-text-color: var(\r
    --_error-hover-label-text-color\r
  );\r
  --md-outlined-field-error-hover-leading-content-color: var(\r
    --_error-hover-leading-icon-color\r
  );\r
  --md-outlined-field-error-hover-outline-color: var(\r
    --_error-hover-outline-color\r
  );\r
  --md-outlined-field-error-hover-supporting-text-color: var(\r
    --_error-hover-supporting-text-color\r
  );\r
  --md-outlined-field-error-hover-trailing-content-color: var(\r
    --_error-hover-trailing-icon-color\r
  );\r
  --md-outlined-field-error-label-text-color: var(--_error-label-text-color);\r
  --md-outlined-field-error-leading-content-color: var(\r
    --_error-leading-icon-color\r
  );\r
  --md-outlined-field-error-outline-color: var(--_error-outline-color);\r
  --md-outlined-field-error-supporting-text-color: var(\r
    --_error-supporting-text-color\r
  );\r
  --md-outlined-field-error-trailing-content-color: var(\r
    --_error-trailing-icon-color\r
  );\r
  --md-outlined-field-focus-content-color: var(--_focus-input-text-color);\r
  --md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);\r
  --md-outlined-field-focus-leading-content-color: var(\r
    --_focus-leading-icon-color\r
  );\r
  --md-outlined-field-focus-outline-color: var(--_focus-outline-color);\r
  --md-outlined-field-focus-outline-width: var(--_focus-outline-width);\r
  --md-outlined-field-focus-supporting-text-color: var(\r
    --_focus-supporting-text-color\r
  );\r
  --md-outlined-field-focus-trailing-content-color: var(\r
    --_focus-trailing-icon-color\r
  );\r
  --md-outlined-field-hover-content-color: var(--_hover-input-text-color);\r
  --md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);\r
  --md-outlined-field-hover-leading-content-color: var(\r
    --_hover-leading-icon-color\r
  );\r
  --md-outlined-field-hover-outline-color: var(--_hover-outline-color);\r
  --md-outlined-field-hover-outline-width: var(--_hover-outline-width);\r
  --md-outlined-field-hover-supporting-text-color: var(\r
    --_hover-supporting-text-color\r
  );\r
  --md-outlined-field-hover-trailing-content-color: var(\r
    --_hover-trailing-icon-color\r
  );\r
  --md-outlined-field-label-text-color: var(--_label-text-color);\r
  --md-outlined-field-label-text-font: var(--_label-text-font);\r
  --md-outlined-field-label-text-line-height: var(--_label-text-line-height);\r
  --md-outlined-field-label-text-populated-line-height: var(\r
    --_label-text-populated-line-height\r
  );\r
  --md-outlined-field-label-text-populated-size: var(\r
    --_label-text-populated-size\r
  );\r
  --md-outlined-field-label-text-size: var(--_label-text-size);\r
  --md-outlined-field-label-text-weight: var(--_label-text-weight);\r
  --md-outlined-field-leading-content-color: var(--_leading-icon-color);\r
  --md-outlined-field-leading-space: var(--_leading-space);\r
  --md-outlined-field-outline-color: var(--_outline-color);\r
  --md-outlined-field-outline-width: var(--_outline-width);\r
  --md-outlined-field-supporting-text-color: var(--_supporting-text-color);\r
  --md-outlined-field-supporting-text-font: var(--_supporting-text-font);\r
  --md-outlined-field-supporting-text-line-height: var(\r
    --_supporting-text-line-height\r
  );\r
  --md-outlined-field-supporting-text-size: var(--_supporting-text-size);\r
  --md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);\r
  --md-outlined-field-top-space: var(--_top-space);\r
  --md-outlined-field-trailing-content-color: var(--_trailing-icon-color);\r
  --md-outlined-field-trailing-space: var(--_trailing-space);\r
}\r
.text-field-module_prefix__9Zf4V {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  color: var(--_input-text-prefix-color);\r
  padding-inline-end: var(--_input-text-prefix-trailing-space);\r
}\r
.text-field-module_suffix__itEyf {\r
  text-wrap: nowrap;\r
  width: min-content;\r
  padding-inline-start: var(--_input-text-suffix-leading-space);\r
}\r
`);function Sm(t,e){let{inputElementType:r="input",isDisabled:n=!1,isRequired:o=!1,isReadOnly:i=!1,type:s="text",validationBehavior:a="aria"}=t,[l,u]=vm(t.value,t.defaultValue||"",t.onChange),{focusableProps:d}=Qa(t,e),h=fm({...t,value:l}),{isInvalid:p,validationErrors:m,validationDetails:v}=h.displayValidation,{labelProps:x,fieldProps:b,descriptionProps:_,errorMessageProps:T}=ym({...t,isInvalid:p,errorMessage:t.errorMessage||m}),N=uo(t,{labelable:!0});const M={type:s,pattern:t.pattern};return wm(e,l,u),bm(t,h,e),y.useEffect((()=>{if(e.current instanceof fe(e.current).HTMLTextAreaElement){let w=e.current;Object.defineProperty(w,"defaultValue",{get:()=>w.value,set:()=>{},configurable:!0})}}),[e]),{labelProps:x,inputProps:ce(N,r==="input"?M:void 0,{disabled:n,readOnly:i,required:o&&a==="native","aria-required":o&&a==="aria"||void 0,"aria-invalid":p||void 0,"aria-errormessage":t["aria-errormessage"],"aria-activedescendant":t["aria-activedescendant"],"aria-autocomplete":t["aria-autocomplete"],"aria-haspopup":t["aria-haspopup"],"aria-controls":t["aria-controls"],value:l,onChange:w=>u(w.target.value),autoComplete:t.autoComplete,autoCapitalize:t.autoCapitalize,maxLength:t.maxLength,minLength:t.minLength,name:t.name,placeholder:t.placeholder,inputMode:t.inputMode,autoCorrect:t.autoCorrect,spellCheck:t.spellCheck,[parseInt(W.version,10)>=17?"enterKeyHint":"enterkeyhint"]:t.enterKeyHint,onCopy:t.onCopy,onCut:t.onCut,onPaste:t.onPaste,onCompositionEnd:t.onCompositionEnd,onCompositionStart:t.onCompositionStart,onCompositionUpdate:t.onCompositionUpdate,onSelect:t.onSelect,onBeforeInput:t.onBeforeInput,onInput:t.onInput,...d,...b}),descriptionProps:_,errorMessageProps:T,isInvalid:p,validationErrors:m,validationDetails:v}}const Sn=t=>{var e;const r=W.useRef(null),{style:n,onFocus:o,onBlur:i,className:s,suffixText:a,prefixText:l,leadingIcon:u,trailingIcon:d,ref:h=r,type:p="text",variant:m="filled",inputProps:v,children:x}=t,b=Qe(t,["style","onFocus","onBlur","className","suffixText","prefixText","leadingIcon","trailingIcon","ref","type","variant","inputProps","children"]),{inputProps:_,labelProps:T,descriptionProps:N,errorMessageProps:M,isInvalid:w,validationErrors:A}=Sm(Object.assign(Object.assign({},b),{inputElementType:t.type=="textarea"?"textarea":"input"}),h),{focusProps:D,isFocused:f}=Wt();let $=qi;m=="filled"&&($=qi),m=="outlined"&&($=Em);const R=(e=(v??_).value)===null||e===void 0?void 0:e.toString().length,C=!!(v??_).value;return c.jsxs("label",Object.assign({},T,{className:Zr[m],children:[c.jsxs($,{leadingIcon:u,trailingIcon:d,count:R,populated:C,label:t.label,focused:f,children:[l&&c.jsx("span",{className:Zr.prefix,children:l}),p=="textarea"?c.jsx("textarea",Object.assign({style:Object.assign({resize:"vertical",overflowX:"hidden",wordBreak:"break-word"},n),className:s},ce(D,v??_),{ref:h})):c.jsx("input",Object.assign({style:n,className:s},ce(D,v??_),{type:p,ref:h})),a&&c.jsx("span",{className:Zr.suffix,children:a})]}),t.description&&c.jsx("div",Object.assign({},N,{style:{fontSize:12},children:t.description})),w&&c.jsx("div",Object.assign({},M,{style:{color:"red",fontSize:12},children:A.join(" ")}))]}))};Sn.displayName="Actify.TextField";const Er="/deploy/backend";async function km(){const t=await fetch(`${Er}/api/get_content.php`);if(!t.ok)throw new Error(`Failed to load site content (${t.status})`);return t.json()}async function Cm(t){const e=await fetch(`${Er}/api/submit_order.php`,{method:"POST",body:t});let r={};try{const n=await e.text();r=n?JSON.parse(n):{}}catch{}if(!e.ok||!r.ok)throw new Error(r.error||"ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.");return r}async function ol(){const t=await fetch(`${Er}/api/get_blog_posts.php`);if(!t.ok)throw new Error(`Failed to load blog posts (${t.status})`);return t.json()}async function Gi(t,e,r){const n=await fetch(`${Er}/api/submit_comment.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post_id:t,content:e,parent_id:r})});if(!n.ok){const o=await n.json().catch(()=>({}));throw new Error(o.error||"ارسال نظر با خطا مواجه شد")}return n.json()}function kn(t){try{const e=new Date(t);return new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(e)}catch{return t}}const Cn={settings:{},benefits:[],products:[],gallery:[],form:[]},il=y.createContext({data:Cn,loading:!0,error:null}),Nm={color_primary:"--site-primary",color_on_primary:"--site-on-primary",color_bg_light:"--site-bg",color_surface_light:"--site-surface",color_text_light:"--site-on-surface",color_surface2_light:"--site-surface-2",color_border_light:"--site-border",color_footer_light:"--site-footer",color_footer_text_light:"--site-footer-text"},Mm={color_primary_dark:"--site-primary",color_on_primary_dark:"--site-on-primary",color_bg_dark:"--site-bg",color_surface_dark:"--site-surface",color_text_dark:"--site-on-surface",color_surface2_dark:"--site-surface-2",color_border_dark:"--site-border",color_footer_dark:"--site-footer",color_footer_text_dark:"--site-footer-text"},Qi=[{key:"color_primary",label:"رنگ اصلی (روشن)",group:"light"},{key:"color_on_primary",label:"رنگ متن روی رنگ اصلی (روشن)",group:"light"},{key:"color_bg_light",label:"پس‌زمینه (روشن)",group:"light"},{key:"color_surface_light",label:"سطح کارت (روشن)",group:"light"},{key:"color_surface2_light",label:"سطح فرعی / ورودی‌ها (روشن)",group:"light"},{key:"color_border_light",label:"حاشیه‌ها (روشن)",group:"light"},{key:"color_text_light",label:"متن (روشن)",group:"light"},{key:"color_footer_light",label:"پس‌زمینه فوتر (روشن)",group:"light"},{key:"color_footer_text_light",label:"متن فوتر (روشن)",group:"light"},{key:"color_primary_dark",label:"رنگ اصلی (تاریک)",group:"dark"},{key:"color_on_primary_dark",label:"رنگ متن روی رنگ اصلی (تاریک)",group:"dark"},{key:"color_bg_dark",label:"پس‌زمینه (تاریک)",group:"dark"},{key:"color_surface_dark",label:"سطح کارت (تاریک)",group:"dark"},{key:"color_surface2_dark",label:"سطح فرعی / ورودی‌ها (تاریک)",group:"dark"},{key:"color_border_dark",label:"حاشیه‌ها (تاریک)",group:"dark"},{key:"color_text_dark",label:"متن (تاریک)",group:"dark"},{key:"color_footer_dark",label:"پس‌زمینه فوتر (تاریک)",group:"dark"},{key:"color_footer_text_dark",label:"متن فوتر (تاریک)",group:"dark"}];function Am(t){let e=document.getElementById("dynamic-colors");e||(e=document.createElement("style"),e.id="dynamic-colors",document.head.appendChild(e));const r=i=>/^#[0-9a-fA-F]{3,8}$|^[a-zA-Z]+$|^rgba?\([^)]+\)$|^hsla?\([^)]+\)$/.test(i.trim()),n=Qi.filter(i=>i.group==="light"&&t[i.key]&&r(t[i.key])).map(i=>`${Nm[i.key]}: ${t[i.key]};`).join(" "),o=Qi.filter(i=>i.group==="dark"&&t[i.key]&&r(t[i.key])).map(i=>`${Mm[i.key]}: ${t[i.key]};`).join(" ");e.textContent=`:root { ${n} } html.dark { ${o} }`}function Dm({children:t}){const[e,r]=y.useState({data:Cn,loading:!0,error:null});return y.useEffect(()=>{let n=!1;return km().then(o=>{n||(Am(o.settings),r({data:o,loading:!1,error:null}))}).catch(o=>{n||r({data:Cn,loading:!1,error:o instanceof Error?o.message:"خطا در بارگذاری اطلاعات سایت"})}),()=>{n=!0}},[]),c.jsx(il.Provider,{value:e,children:t})}function de(){return y.useContext(il)}function Jr(t){if(typeof document>"u")return!1;const e=document.getElementById(t);return e?(e.scrollIntoView({behavior:"smooth",block:"start"}),!0):!1}function oe(t){Jr(t)||(window.location.href="#/",window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{Jr(t)||setTimeout(()=>Jr(t),300)})}))}function sl({height:t=40,title:e,variant:r="auto",className:n=""}){const{data:o}=de(),i=e||o.settings.site_title||"NorthStarWin",s=Math.round(t*1024/474),a=r==="onSurface"?"var(--site-on-surface)":r==="onFooter"?"var(--site-footer-text)":"currentColor";return c.jsxs("svg",{viewBox:"0 0 1024 474",width:s,height:t,role:"img","aria-label":i,className:`select-none ${n}`.trim(),children:[c.jsxs("g",{transform:"translate(512 162)",children:[c.jsx("circle",{r:"132",fill:"none",stroke:"var(--site-primary)",strokeWidth:"14"}),c.jsx("path",{d:"M 0 -170 L 26 -118 L -26 -118 Z",fill:"var(--site-primary)"}),c.jsx("path",{d:"M 0 170 L 26 118 L -26 118 Z",fill:"var(--site-primary)"}),c.jsx("path",{d:"M -170 0 L -118 26 L -118 -26 Z",fill:"var(--site-primary)"}),c.jsx("path",{d:"M 170 0 L 118 26 L 118 -26 Z",fill:"var(--site-primary)"}),c.jsxs("g",{stroke:"var(--site-primary)",strokeWidth:"12",strokeLinecap:"round",transform:"rotate(45)",children:[c.jsx("line",{x1:"0",y1:"-104",x2:"0",y2:"-58"}),c.jsx("line",{x1:"0",y1:"104",x2:"0",y2:"58"}),c.jsx("line",{x1:"-104",y1:"0",x2:"-58",y2:"0"}),c.jsx("line",{x1:"104",y1:"0",x2:"58",y2:"0"})]}),c.jsx("path",{d:"M 0 -80 Q 12 -12 80 0 Q 12 12 0 80 Q -12 12 -80 0 Q -12 -12 0 -80 Z",fill:"var(--site-primary)"})]}),c.jsx("text",{x:"512",y:"412",textAnchor:"middle",fontFamily:"inherit",fontWeight:"800",fontSize:"92",letterSpacing:"14",fill:a,children:i})]})}function wt(){const{data:t}=de(),e=t.settings,[r,n]=y.useState(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);y.useEffect(()=>{const i=document.documentElement;r?(i.classList.add("dark"),localStorage.setItem("theme","dark")):(i.classList.remove("dark"),localStorage.setItem("theme","light"))},[r]);const o=()=>n(i=>!i);return c.jsxs("header",{className:"w-full sticky top-0 z-50 shadow-sm transition-colors duration-300",children:[c.jsx("div",{className:"bg-primary text-on-primary text-label py-2 px-4 sm:px-8 transition-colors duration-300",children:c.jsxs("div",{className:"max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"campaign"}),c.jsx("span",{children:e.topbar_message||"فروش ویژه درب و پنجره UPVC با شرایط اقساطی"})]}),c.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"schedule"}),c.jsx("span",{children:e.topbar_hours||"شنبه تا پنجشنبه: ۸ الی ۲۰"})]}),c.jsxs("div",{className:"flex items-center gap-1.5",dir:"ltr",children:[c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"phone_in_talk"}),c.jsx("span",{children:e.site_phone||"+98 922 002 3242"})]})]})]})}),c.jsx("div",{className:"bg-surface border-b border-border px-4 sm:px-8 py-3 transition-colors duration-300",children:c.jsxs("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between",children:[c.jsx("a",{href:"#/",onClick:i=>{i.preventDefault(),oe("s1")},className:"flex items-center text-on-surface","aria-label":e.site_title||"NorthStarWin",children:c.jsx(sl,{height:48})}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[c.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-body-sm font-bold text-on-surface",children:[c.jsx("a",{href:"#s1",onClick:i=>{i.preventDefault(),oe("s1")},className:"hover:text-primary transition-colors",children:"خانه"}),c.jsx("a",{href:"#s1",onClick:i=>{i.preventDefault(),oe("products")},className:"hover:text-primary transition-colors",children:"محصولات"}),c.jsx("a",{href:"#s1",onClick:i=>{i.preventDefault(),oe("s2")},className:"hover:text-primary transition-colors",children:"همکاری"}),c.jsx("a",{href:"#s1",onClick:i=>{i.preventDefault(),oe("s3")},className:"hover:text-primary transition-colors",children:"ثبت سفارش"})]}),c.jsx(el,{onClick:o,"aria-label":r?"حالت روشن":"حالت تاریک",className:"text-on-surface hover:bg-surface-2 rounded-full cursor-pointer transition-all",children:c.jsx("span",{className:"material-symbols-outlined select-none text-xl",children:r?"light_mode":"dark_mode"})})]})]})})]})}function Vm(){const{data:t}=de(),e=t.settings,r={title:e.hero_security_title||"امنیت و پایداری",description:e.hero_security_description||"امنیت خانواده شما، اولویت اصلی ماست. درب‌های UPVC به دلیل بهره‌گیری از هسته فولادی گالوانیزه و سیستم‌های قفل پیشرفته، سدی نفوذناپذیر ایجاد می‌کنند.",image:e.hero_security_image},n={title:e.hero_durability_title||"دوام و طول عمر",description:e.hero_durability_description||"دوام بی‌نظیر در برابر زمان و طبیعت، درب‌های UPVC با مقاومت بالا در برابر اشعه‌های خورشیدی بدون تغییر شکل یا رنگ، تا ۳۰ سال در کنار شما می‌مانند.",image:e.hero_durability_image};return c.jsx("section",{id:"s1",className:"w-full py-16 px-6 sm:px-8 transition-colors duration-300 bg-bg/30 backdrop-blur-sm",children:c.jsxs("div",{className:"max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",children:[c.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-6 text-right",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h2",{className:"text-h2 text-on-surface mb-3",children:r.title}),c.jsx("p",{className:"text-body text-on-surface/80 mb-4",children:r.description}),c.jsxs("a",{href:"#s1",onClick:o=>{o.preventDefault(),oe("products")},className:"inline-flex items-center gap-1 text-body-sm font-bold text-on-surface hover:text-primary transition-colors group",children:[c.jsx("span",{children:"مشاهده محصولات"}),c.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]}),c.jsx("div",{className:"flex-1 flex justify-center",children:c.jsx("img",{src:r.image,alt:r.title,className:"max-h-[600px] w-auto object-contain drop-shadow-sm"})})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-right",children:[c.jsx("div",{className:"flex-1 flex justify-center",children:c.jsx("img",{src:n.image,alt:n.title,className:"max-h-[490px] w-auto object-contain drop-shadow-sm"})}),c.jsxs("div",{className:"flex-1",children:[c.jsx("h2",{className:"text-h2 text-on-surface mb-3",children:n.title}),c.jsx("p",{className:"text-body text-on-surface/80 mb-4",children:n.description}),c.jsxs("a",{href:"#s1",onClick:o=>{o.preventDefault(),oe("benefits")},className:"inline-flex items-center gap-1 text-body-sm font-bold text-on-surface hover:text-primary transition-colors group",children:[c.jsx("span",{children:"مزایا"}),c.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]})]})]})})}function Lm(){const{data:t}=de(),e=t.settings;return c.jsxs("section",{id:"s2",className:"py-16 px-4 sm:px-8 text-center max-w-[900px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:e.collab_title||"دعوت به همکاری"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3 mb-6"}),c.jsx("p",{className:"text-body text-on-surface/80 mb-6",children:e.collab_description||"ما به دنبال برقراری همکاری‌های بلندمدت با سازندگان، پیمانکاران و نصابان حرفه‌ای صنعت ساختمان هستیم."}),c.jsx("a",{href:"#s1",onClick:r=>{r.preventDefault(),oe("s3")},className:"inline-block text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:e.collab_button_text||"درخواست همکاری"})]})}const Rm=t=>new Intl.NumberFormat("fa-IR").format(t);function Fm(){const t=yr(),{data:e}=de();if(e.products.length===0)return null;const r=e.products.slice(0,3),n=e.products.length>3,o=()=>{t("/products")},i=s=>{t(`/products/${s}`)};return c.jsxs("section",{id:"products",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs("div",{className:"text-center mb-10",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:r.map(s=>c.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-border transition-all duration-300 flex flex-col text-center cursor-pointer",onClick:()=>i(s.id),children:[s.image_url&&c.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-surface-2",children:c.jsx("img",{src:s.image_url,alt:s.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),c.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[c.jsx("h3",{className:"text-h3 text-on-surface mb-2",children:s.name}),s.description&&c.jsx("p",{className:"text-body-sm text-on-surface/70 mb-4 flex-grow",children:s.description}),!!s.price_min&&c.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",Rm(s.price_min)," تومان"]}),c.jsx(H,{variant:"text",onClick:()=>i(s.id),className:"text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},s.id))}),n&&c.jsx("div",{className:"flex justify-center mt-8",children:c.jsxs(H,{variant:"text",onClick:o,className:"text-body-sm font-bold transition-colors shadow-md",children:["مشاهده همه محصولات",c.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})})]})}function Im(){const{data:t}=de();return t.benefits.length===0?null:c.jsxs("section",{id:"benefits",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs("div",{className:"text-center mb-14",children:[c.jsxs("h2",{className:"text-h2 text-primary tracking-tight",children:[t.settings.site_title||"NorthStarWin"," چرا؟"]}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8",children:t.benefits.map(e=>c.jsxs("div",{className:"flex flex-col items-center text-center p-2",children:[c.jsx("span",{className:"material-symbols-outlined text-primary mb-3 select-none",style:{fontSize:"56px"},children:e.icon_name||"star"}),c.jsx("h3",{className:"text-h3 text-on-surface mb-1.5",children:e.title}),c.jsx("p",{className:"text-body-sm text-on-surface/70",children:e.description})]},e.id))})]})}function zm(){const t=yr(),{data:e}=de(),[r,n]=y.useState(null);if(e.gallery.length===0)return null;const o=e.gallery.slice(0,3),i=e.gallery.length>3,s=()=>{t("/gallery")};return c.jsxs("section",{id:"gallery",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:o.map(a=>c.jsxs("div",{onClick:()=>n(a),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-surface-2",children:[c.jsx("img",{src:a.image_url,alt:a.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:c.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:a.title||"مشاهده تصویر"})})]},a.id))}),i&&c.jsx("div",{className:"flex justify-center mt-8",children:c.jsxs(H,{variant:"filled",onClick:s,className:"text-body-sm font-bold transition-colors shadow-md",children:["مشاهده همه پروژه‌ها",c.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})}),r&&c.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>n(null),children:c.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:a=>a.stopPropagation(),children:[c.jsx("button",{onClick:()=>n(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:c.jsx("span",{className:"material-symbols-outlined",children:"close"})}),c.jsx("img",{src:r.image_url,alt:r.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),r.title&&c.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-on-surface",children:r.title})]})})]})}const Om=({post:t,onReadMore:e})=>c.jsxs(Ma,{className:"w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-surface border border-border",children:[t.image_url&&c.jsx("div",{className:"h-56 w-full overflow-hidden bg-surface-2",children:c.jsx("img",{src:t.image_url,alt:t.title,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[t.category&&c.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:t.category}),c.jsxs("span",{className:"text-label-sm text-on-surface/60 flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),kn(t.created_at)]}),t.author_name&&c.jsxs("span",{className:"text-label-sm text-on-surface/60 flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),t.author_name]})]}),c.jsx("h3",{className:"text-h3 text-on-surface mb-3 font-bold tracking-tight",children:t.title}),t.excerpt&&c.jsx("p",{className:"text-body-sm text-on-surface/70 mb-4 line-clamp-3",children:t.excerpt}),c.jsxs("div",{className:"flex items-center justify-between mt-4",children:[c.jsxs("div",{className:"flex items-center gap-3 text-on-surface/60",children:[c.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),t.view_count||0]}),c.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),t.comment_count||0]})]}),c.jsxs(H,{variant:"text",onClick:()=>e(t),className:"text-body-sm font-bold text-primary hover:bg-primary/5 transition-colors",children:["ادامه مطلب",c.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})]})]})]});function Bm(){const{data:t}=de(),e=t.settings,[r,n]=y.useState([]),[o,i]=y.useState(!0),[s,a]=y.useState("all"),l=yr();y.useEffect(()=>{u()},[]);const u=async()=>{try{const m=await ol();n(m)}catch(m){console.error("Failed to load blog posts:",m)}finally{i(!1)}},d=m=>{l(`/blog/${m.id}`)},h=Array.from(new Set(r.map(m=>m.category).filter(m=>!!m))),p=s==="all"?[...r].sort((m,v)=>(v.view_count||0)-(m.view_count||0)).slice(0,3):r.filter(m=>m.category===s).sort((m,v)=>(v.view_count||0)-(m.view_count||0));return c.jsxs("section",{id:"blog",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs("div",{className:"text-center mb-10",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"وبلاگ"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"}),c.jsx("p",{className:"text-body-sm text-on-surface/70 mt-4",children:e.blog_description||"آخرین مقالات و اخبار را اینجا بخوانید"})]}),h.length>0&&c.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:[c.jsx(H,{variant:s==="all"?"filled":"outlined",onClick:()=>a("all"),className:`text-body-sm font-bold ${s==="all"?"bg-primary text-on-primary":"text-on-surface border-surface/30"}`,children:"همه"}),h.map(m=>c.jsx(H,{variant:s===m?"filled":"outlined",onClick:()=>a(m),className:`text-body-sm font-bold ${s===m?"bg-primary text-on-primary":"text-on-surface border-surface/30"}`,children:m},m))]}),o?c.jsx("div",{className:"flex justify-center items-center py-20",children:c.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):p.length===0?c.jsxs("div",{className:"text-center py-20",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-on-surface/30 mb-4",children:"article"}),c.jsx("p",{className:"text-body text-on-surface/60",children:"مقاله‌ای یافت نشد"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:p.map(m=>c.jsx(Om,{post:m,onReadMore:d},m.id))})]})}function Ym(){const{data:t,loading:e}=de(),r=t.form,[n,o]=y.useState(0),[i,s]=y.useState({}),[a,l]=y.useState(null),[u,d]=y.useState(null),[h,p]=y.useState(!1),[m,v]=y.useState(!1),[x,b]=y.useState(null),[_,T]=y.useState(""),[N,M]=y.useState(""),w=S=>{if(!S.depends_on||!S.depends_value)return!0;const I=i[S.depends_on];return I?S.depends_value.split(",").map(ye=>ye.trim()).includes(I):!1};if(e||r.length===0)return null;const A=(S,I)=>{s(X=>({...X,[S]:I}))},D=(S,I)=>{const X=I.target.files?.[0];if(!X)return;const ye=5*1024*1024;if(X.size>ye){b("حجم فایل نباید بیشتر از 5 مگابایت باشد."),I.target.value="";return}if(l(X),A(S,X.name),X.type.startsWith("image/")){const te=new FileReader;te.onloadend=()=>d(te.result),te.readAsDataURL(X)}else d(null)},f=S=>{l(null),d(null),A(S,"")},$=S=>{if(!w(S)||!S.required)return!0;if(S.type==="file")return!!a;const I=(i[S.key]||"").trim();return I===""?!1:S.key==="phone"?/^09[0-9]{9}$/.test(I):!0},R=S=>{if(!w(S)||!S.required)return null;if(S.type==="file")return!a&&!i[S.key]?`${S.label} الزامی است`:null;const I=(i[S.key]||"").trim();return I===""?`${S.label} الزامی است`:S.key==="phone"&&!/^09[0-9]{9}$/.test(I)?"شماره موبایل معتبر نیست":null},C=S=>r[S].fields.filter(w).every($),z=()=>{if(!C(n)){b("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}b(null),n===r.length-1?V():o(S=>S+1)},g=()=>n>0&&o(S=>S-1),E=S=>{if(S>n&&!C(n)){b("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}b(null),o(S)},V=async()=>{p(!0),b(null);try{if(!r.flatMap(te=>te.fields).filter(w).every($)){b("لطفاً تمام فیلدهای الزامی را پر کنید."),p(!1);return}const I=new FormData;Object.entries(i).forEach(([te,Ie])=>{Ie&&I.append(te,Ie)}),I.append("website",N);const X=r.flatMap(te=>te.fields).find(te=>te.type==="file"&&w(te));if(X&&a)I.append(X.key,a,a.name);else if(X&&X.required&&!a){b("لطفاً فایل مورد نظر را آپلود کنید."),p(!1);return}const ye=await Cm(I);T(ye.tracking_code??""),v(!0)}catch(S){b(S instanceof Error?S.message:"خطای غیرمنتظره‌ای رخ داد.")}finally{p(!1)}};return c.jsxs("section",{id:"s3",className:"w-full my-12 px-4",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"ثبت سفارش آنلاین"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),m?c.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-8 rounded-3xl bg-surface border border-border text-center text-on-surface shadow-xl transition-colors duration-300",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-green-500 mb-2 select-none",children:"check_circle"}),c.jsx("h3",{className:"text-h3 mb-2",children:"سفارش شما با موفقیت ثبت شد! 🎉"}),c.jsxs("p",{className:"text-body-sm text-on-surface/70 mb-6 flex items-center justify-center gap-2",children:["کد پیگیری:",c.jsxs("span",{className:"inline-block bg-primary/10 text-primary font-bold text-body px-3 py-0.5 rounded-full",children:["#",_]})]}),c.jsxs(H,{variant:"filled",className:"w-full sm:w-auto px-6 py-3 font-bold flex items-center justify-center gap-2 mx-auto bg-primary text-on-primary rounded-xl shadow-md cursor-pointer",onClick:()=>window.open("https://wa.me/989220023242","_blank"),children:[c.jsx("span",{className:"material-symbols-outlined select-none",children:"chat"}),"ارتباط سریع در واتساپ"]})]}):c.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-6 sm:p-8 rounded-3xl bg-surface border border-border text-on-surface shadow-xl transition-colors duration-300",children:[c.jsx("input",{type:"text",name:"website",value:N,onChange:S=>M(S.target.value),className:"hidden",tabIndex:-1,autoComplete:"off"}),c.jsx("div",{className:"w-full mb-8",children:c.jsx(mm,{className:"w-full",style:{"--md-outlined-segmented-button-selected-container-color":"var(--site-primary)","--md-outlined-segmented-button-selected-label-text-color":"var(--site-on-primary)","--md-outlined-segmented-button-selected-label-text-weight":"700"},children:c.jsx("div",{className:"grid w-full h-12 bg-surface-2 p-1 rounded-full border border-border",style:{gridTemplateColumns:`repeat(${r.length}, 1fr)`},children:r.map((S,I)=>c.jsx(hm,{label:S.title,selected:n===I,onPress:()=>E(I),className:`text-body-sm font-bold transition-all cursor-pointer ${I===0?"rounded-s-full":I===r.length-1?"rounded-e-full":""}`},S.title))})})}),c.jsxs("div",{className:"min-h-[320px]",children:[c.jsx("h3",{className:"text-h3 text-on-surface mb-1.5",children:r[n].title}),r[n].subtitle&&c.jsx("p",{className:"text-body-sm text-on-surface/70 mb-6",children:r[n].subtitle}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5",children:r[n].fields.filter(w).map(S=>{const I=R(S);return c.jsx(Xm,{field:S,value:i[S.key]||"",onChange:X=>{A(S.key,X),x&&I&&b(null)},onFileChange:X=>{D(S.key,X),x&&I&&b(null)},onRemoveFile:()=>f(S.key),filePreview:u,hasError:!!I,errorMessage:I},S.key)})})]}),x&&c.jsx("div",{className:"mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-body-sm text-red-600 dark:text-red-400 text-center",children:x}),c.jsxs("div",{className:"flex items-center justify-between border-t border-border pt-5 mt-8",children:[n>0?c.jsxs(H,{variant:"outlined",onClick:g,isDisabled:h,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl border-border text-on-surface cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_forward"}),"قبلی"]}):c.jsx("div",{}),c.jsxs(H,{variant:"filled",onClick:z,isDisabled:!C(n)||h,className:"flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-primary text-on-primary disabled:opacity-50 cursor-pointer transition-all",children:[h?"در حال ثبت...":n===r.length-1?"ثبت سفارش":"بعدی",n<r.length-1&&c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_back"})]})]})]})]})}function Xm({field:t,value:e,onChange:r,onFileChange:n,onRemoveFile:o,filePreview:i,hasError:s,errorMessage:a}){const l=`w-full h-12 bg-surface-2 border ${s?"border-red-500 focus:border-red-600":"border-border focus:border-primary"} rounded-xl text-body-sm px-3 text-on-surface outline-none transition-colors`;if(t.type==="segmented")return c.jsxs("div",{className:"sm:col-span-2",children:[c.jsxs("label",{className:"text-label text-on-surface/70 mb-2 block",children:[t.label,t.required&&c.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:(t.options||[]).map(d=>{const h=e===d.value;return c.jsxs("div",{onClick:()=>r(d.value),className:`flex flex-col items-center justify-center text-center p-6 min-h-[140px] rounded-2xl cursor-pointer border transition-all duration-200 ${h?"bg-primary text-on-primary border-primary font-bold shadow-md scale-[1.02]":"bg-surface-2 text-on-surface border-border hover:bg-surface-2/60"}`,children:[d.icon&&c.jsx("span",{className:"material-symbols-outlined text-7xl mb-2 select-none",children:d.icon}),c.jsx("span",{className:"text-body  font-semibold",children:d.label})]},d.value)})})]});if(t.type==="select")return c.jsxs("div",{className:"flex flex-col gap-1.5",children:[c.jsxs("label",{className:"text-label text-on-surface/70",children:[t.label,t.required&&c.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),c.jsxs("select",{value:e,onChange:d=>r(d.target.value),className:l,children:[c.jsx("option",{value:"",disabled:!0,children:"انتخاب کنید..."}),(t.options||[]).map(d=>c.jsx("option",{value:d.value,children:d.label},d.value))]})]});if(t.type==="textarea")return c.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[c.jsxs("label",{className:"text-label text-on-surface/70",children:[t.label,t.required&&c.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),c.jsx("textarea",{rows:2,placeholder:t.placeholder||"",value:e,onChange:d=>r(d.target.value),className:`w-full bg-surface-2 border ${s?"border-red-500 focus:border-red-600":"border-border focus:border-primary"} rounded-xl text-body-sm p-3 text-on-surface outline-none transition-colors resize-none`})]});if(t.type==="file")return c.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[c.jsxs("label",{className:"text-label text-on-surface/70",children:[t.label," ",t.required&&c.jsx("span",{className:"text-red-500",children:"*"})]}),c.jsx("input",{accept:"image/*,.pdf,.doc,.docx",className:"hidden",id:`upload-${t.key}`,type:"file",onChange:n}),c.jsx("label",{htmlFor:`upload-${t.key}`,className:"cursor-pointer",children:i?c.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden border border-border",children:[c.jsx("img",{src:i,alt:"پیش‌نمایش",className:"w-full h-36 object-cover"}),c.jsx("button",{type:"button",onClick:d=>{d.preventDefault(),o()},className:"absolute top-2 right-2 bg-black/70 p-1.5 rounded-full text-white hover:bg-black transition-colors cursor-pointer",children:c.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"close"})})]}):e?c.jsxs("div",{className:"border-2 border-dashed border-primary bg-surface-2 rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-primary select-none",children:"insert_drive_file"}),c.jsx("span",{className:"text-body-sm text-on-surface/70",children:e}),c.jsx("button",{type:"button",onClick:d=>{d.preventDefault(),o()},className:"mt-2 text-red-500 hover:text-red-600 text-sm cursor-pointer",children:"حذف فایل"})]}):c.jsxs("div",{className:"border-2 border-dashed border-border hover:border-primary bg-surface-2 rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-on-surface/50 select-none",children:"upload_file"}),c.jsx("span",{className:"text-body-sm text-on-surface/70",children:"برای آپلود عکس یا فایل نقشه کلیک کنید"})]})})]});const u=t.key==="phone";return c.jsxs("div",{className:"flex flex-col gap-1.5",children:[c.jsxs("label",{className:"text-label text-on-surface/70",children:[t.label,t.required&&c.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),c.jsx("input",{type:t.type==="number"?"number":"text",placeholder:t.placeholder||"",dir:u?"ltr":void 0,value:e,onChange:d=>r(d.target.value),className:`${l} ${u?"text-right":""}`}),u&&e&&!/^09[0-9]{9}$/.test(e)&&c.jsx("span",{className:"text-[11px] text-red-500",children:"شماره موبایل معتبر نیست"}),a&&c.jsx("span",{className:"text-[11px] text-red-500",children:a})]})}function $t(){const{data:t}=de(),e=t.settings,r=e.site_title||"NorthStarWin";return c.jsx("footer",{className:"bg-footer text-footer-text border-t border-footer-text/15 pt-16 pb-8 px-4 sm:px-8 transition-colors duration-300",children:c.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12",children:[c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx(sl,{height:64,variant:"onFooter",className:"self-start"}),c.jsx("h3",{className:"sr-only",children:r}),c.jsx("p",{className:"text-body-sm text-footer-text/70 max-w-[320px]",children:e.site_description||"تامین‌کننده برتر درب و پنجره UPVC در ایران با بالاترین استاندارد عایق‌بندی و امنیت."})]}),c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx("h4",{className:"text-body font-bold text-footer-text border-b border-footer-text/20 pb-2 w-fit",children:"لینک‌های سریع"}),c.jsxs("ul",{className:"flex flex-col gap-2.5 text-body-sm text-footer-text/70",children:[c.jsx("li",{children:c.jsx("a",{href:"#s1",onClick:n=>{n.preventDefault(),oe("products")},className:"hover:text-primary transition-colors inline-block",children:"محصولات"})}),c.jsx("li",{children:c.jsx("a",{href:"#s1",onClick:n=>{n.preventDefault(),oe("s2")},className:"hover:text-primary transition-colors inline-block",children:"همکاری"})}),c.jsx("li",{children:c.jsx("a",{href:"#s1",onClick:n=>{n.preventDefault(),oe("s3")},className:"hover:text-primary transition-colors inline-block",children:"ثبت سفارش"})})]})]}),c.jsxs("div",{className:"flex flex-col gap-4",children:[c.jsx("h4",{className:"text-body font-bold text-footer-text border-b border-footer-text/20 pb-2 w-fit",children:"تماس با ما"}),c.jsxs("div",{className:"flex flex-col gap-3 text-body-sm text-footer-text/70",children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"call"}),c.jsx("span",{dir:"ltr",className:"font-semibold",children:e.site_phone||"+98 922 002 3242"})]}),c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"mail"}),c.jsx("span",{children:e.site_email||"info@northstarwin.com"})]}),c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"location_on"}),c.jsx("span",{children:e.site_address||"تهران، ایران"})]})]})]})]}),c.jsx("div",{className:"border-t border-footer-text/15 pt-6 text-center text-body-sm text-footer-text/50",children:c.jsxs("p",{children:["© ۱۴۰۵ ",r," — تمامی حقوق محفوظ است"]})})]})})}function Um(){const{id:t}=ss(),[e,r]=y.useState(null),[n,o]=y.useState(!0),[i,s]=y.useState(""),[a,l]=y.useState(!1),[u,d]=y.useState(null),[h,p]=y.useState(null),[m,v]=y.useState("");y.useEffect(()=>{x()},[t]);const x=async()=>{try{const w=(await ol()).find(A=>A.id===parseInt(t||"0"));r(w||null)}catch(M){console.error("Failed to load post:",M)}finally{o(!1)}},b=()=>{oe("blog")},_=async M=>{if(M.preventDefault(),!(!i.trim()||!e)){l(!0),d(null);try{await Gi(e.id,i),s(""),d("نظر شما ثبت شد و پس از تایید مدیریت نمایش داده می‌شود.")}catch(w){console.error("Failed to submit comment:",w),d("ارسال نظر با خطا مواجه شد. لطفاً دوباره تلاش کنید.")}finally{l(!1)}}},T=async M=>{if(!(!m.trim()||!e)){l(!0),d(null);try{await Gi(e.id,m,M),v(""),p(null),d("پاسخ شما ثبت شد و پس از تایید مدیریت نمایش داده می‌شود.")}catch(w){console.error("Failed to submit reply:",w),d("ارسال پاسخ با خطا مواجه شد. لطفاً دوباره تلاش کنید.")}finally{l(!1)}}},N=(M,w=null,A=0)=>{const D=M.filter(f=>f.parent_id===w);return D.length===0?null:c.jsx("div",{className:`${A>0?"mr-8 mt-4":""}`,children:D.map(f=>c.jsxs("div",{className:"border-b border-border py-4",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:f.author_name?.charAt(0)||"U"}),c.jsxs("div",{className:"flex-1",children:[c.jsxs("div",{className:"flex items-center justify-between mb-1",children:[c.jsx("span",{className:"font-bold text-on-surface",children:f.author_name||"ناشناس"}),c.jsx("span",{className:"text-label-sm text-on-surface/60",children:kn(f.created_at)})]}),c.jsx("p",{className:"text-body-sm text-on-surface/80 mb-2",children:f.content}),A<2&&c.jsxs("button",{onClick:()=>p(h===f.id?null:f.id),className:"text-label-sm text-primary flex items-center gap-1 cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"reply"}),"پاسخ"]}),h===f.id&&c.jsxs("form",{onSubmit:$=>{$.preventDefault(),T(f.id)},className:"mt-3",children:[c.jsx(Sn,{value:m,onChange:$=>v($),placeholder:"پاسخ خود را بنویسید...",type:"textarea",className:"mb-2 w-full"}),c.jsxs("div",{className:"flex gap-2 mt-2",children:[c.jsx(H,{type:"submit",isDisabled:a||!m.trim(),variant:"filled",className:"text-body-sm font-bold bg-primary text-on-primary px-4 py-1.5 rounded-lg",children:"ارسال پاسخ"}),c.jsx(H,{type:"button",onClick:()=>p(null),variant:"text",className:"text-body-sm font-bold px-4 py-1.5",children:"انصراف"})]})]})]})]}),N(M,f.id,A+1)]},f.id))})};return n?c.jsx("div",{className:"flex justify-center items-center py-20",children:c.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):e?c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[900px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:b,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به لیست مقالات"]}),c.jsxs("article",{className:"bg-surface rounded-2xl shadow-sm border border-border overflow-hidden transition-colors duration-300",children:[e.image_url&&c.jsx("div",{className:"h-80 w-full overflow-hidden bg-surface-2",children:c.jsx("img",{src:e.image_url,alt:e.title,className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"p-6 sm:p-8",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[e.category&&c.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:e.category}),c.jsxs("span",{className:"text-label-sm text-on-surface/60 flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),kn(e.created_at)]}),e.author_name&&c.jsxs("span",{className:"text-label-sm text-on-surface/60 flex items-center gap-1",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),e.author_name]})]}),c.jsx("h1",{className:"text-h2 text-on-surface font-bold mb-6 tracking-tight",children:e.title}),c.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none mb-8",children:e.content&&e.content.split(`
`).map((M,w)=>c.jsx("p",{className:"text-body text-on-surface/80 mb-4 leading-relaxed",children:M},w))}),c.jsxs("div",{className:"flex items-center gap-4 text-on-surface/60 mb-8 pb-8 border-b border-border",children:[c.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),e.view_count||0," بازدید"]}),c.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),e.comment_count||0," نظر"]})]}),c.jsxs("div",{className:"mt-8",children:[c.jsxs("h3",{className:"text-h3 text-on-surface font-bold mb-4 flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-primary",children:"chat_bubble"}),"نظرات (",e.comment_count||0,")"]}),c.jsxs("form",{onSubmit:_,className:"mb-8 p-4 bg-surface-2 rounded-xl",children:[c.jsx(Sn,{value:i,onChange:M=>s(M),placeholder:"نظر خود را بنویسید...",type:"textarea",className:"w-full"}),u&&c.jsx("p",{className:"text-body-sm text-primary mt-2",children:u}),c.jsx(H,{type:"submit",isDisabled:a||!i.trim(),variant:"filled",className:"mt-3 bg-primary text-on-primary font-bold px-6 py-2 rounded-xl",children:a?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"material-symbols-outlined text-sm animate-spin ml-2",children:"progress_activity"}),"در حال ارسال..."]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-2",children:"send"}),"ارسال نظر"]})})]}),c.jsx("div",{className:"space-y-4",children:e.comments&&e.comments.length>0?N(e.comments):c.jsxs("div",{className:"text-center py-8 text-on-surface/60",children:[c.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"chat_bubble_outline"}),c.jsx("p",{children:"هنوز نظری ثبت نشده است. اولین نفر باشید!"})]})})]})]})]})]}):c.jsxs("div",{className:"text-center py-20",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-on-surface/30 mb-4",children:"article"}),c.jsx("p",{className:"text-body text-on-surface/60",children:"مقاله‌ای یافت نشد"}),c.jsx(H,{onClick:b,variant:"text",className:"mt-4",children:"بازگشت به لیست مقالات"})]})}function Hm(){const{data:t}=de(),[e,r]=y.useState(null),n=()=>{oe("gallery")};return t.gallery.length===0?c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:n,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به گالری"]}),c.jsxs("div",{className:"text-center py-20",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-on-surface/30 mb-4",children:"photo_library"}),c.jsx("p",{className:"text-body text-on-surface/60",children:"هیچ تصویری یافت نشد"})]})]}):c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:n,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به گالری"]}),c.jsxs("div",{className:"text-center mb-12",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.gallery.map(o=>c.jsxs("div",{onClick:()=>r(o),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-surface-2",children:[c.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:c.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:o.title||"مشاهده تصویر"})})]},o.id))}),e&&c.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>r(null),children:c.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:o=>o.stopPropagation(),children:[c.jsx("button",{onClick:()=>r(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:c.jsx("span",{className:"material-symbols-outlined",children:"close"})}),c.jsx("img",{src:e.image_url,alt:e.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),e.title&&c.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-on-surface",children:e.title})]})})]})}const Km=t=>new Intl.NumberFormat("fa-IR").format(t);function Wm(){const{data:t}=de(),e=yr(),r=()=>{oe("products")};return t.products.length===0?c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:r,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به محصولات"]}),c.jsxs("div",{className:"text-center py-20",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-on-surface/30 mb-4",children:"inventory_2"}),c.jsx("p",{className:"text-body text-on-surface/60",children:"هیچ محصولی یافت نشد"})]})]}):c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:r,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به محصولات"]}),c.jsxs("div",{className:"text-center mb-10",children:[c.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),c.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:t.products.map(n=>c.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-border transition-all duration-300 flex flex-col text-center cursor-pointer",onClick:()=>e(`/products/${n.id}`),children:[n.image_url&&c.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-surface-2",children:c.jsx("img",{src:n.image_url,alt:n.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),c.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[c.jsx("h3",{className:"text-h3 text-on-surface mb-2",children:n.name}),n.description&&c.jsx("p",{className:"text-body-sm text-on-surface/70 mb-4 flex-grow",children:n.description}),!!n.price_min&&c.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",Km(n.price_min)," تومان"]}),c.jsx(H,{variant:"text",onClick:()=>e(`/products/${n.id}`),className:"text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},n.id))})]})}const qm=t=>new Intl.NumberFormat("fa-IR").format(t);function Gm(){const{id:t}=ss(),{data:e,loading:r}=de();y.useEffect(()=>{window.scrollTo({top:0})},[t]);const n=e.products.find(s=>s.id===parseInt(t||"0")),o=()=>{oe("products")},i=()=>{oe("s3")};return r?c.jsx("div",{className:"flex justify-center items-center py-20",children:c.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):n?c.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1000px] mx-auto text-on-surface transition-colors duration-300",children:[c.jsxs(H,{variant:"text",onClick:o,className:"mb-6 text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به لیست محصولات"]}),c.jsxs("article",{className:"bg-surface rounded-2xl shadow-sm border border-border overflow-hidden transition-colors duration-300",children:[n.image_url&&c.jsx("div",{className:"h-72 sm:h-96 w-full overflow-hidden bg-surface-2",children:c.jsx("img",{src:n.image_url,alt:n.name,className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"p-6 sm:p-10",children:[c.jsx("h1",{className:"text-h2 text-on-surface font-bold tracking-tight mb-4",children:n.name}),n.description&&c.jsx("p",{className:"text-body text-on-surface/80 mb-6 leading-relaxed",children:n.description}),!!n.price_min&&c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary mb-8",children:[c.jsx("span",{className:"material-symbols-outlined text-sm",children:"sell"}),c.jsxs("span",{className:"text-body-sm font-bold",children:["قیمت: از ",qm(n.price_min)," تومان"]})]}),n.details&&c.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none mb-8",children:n.details.split(`
`).map((s,a)=>c.jsx("p",{className:"text-body text-on-surface/80 mb-4 leading-relaxed",children:s},a))}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-border",children:[c.jsxs(H,{onClick:i,variant:"filled",className:"bg-primary text-on-primary font-bold px-8 py-3 rounded-xl flex-1 sm:flex-none",children:[c.jsx("span",{className:"material-symbols-outlined text-sm ml-2",children:"shopping_cart"}),"ثبت سفارش این محصول"]}),c.jsx(H,{variant:"text",onClick:o,className:"text-body-sm font-bold text-on-surface hover:text-primary transition-colors",children:"بازگشت به لیست محصولات"})]})]})]})]}):c.jsxs("div",{className:"text-center py-20",children:[c.jsx("span",{className:"material-symbols-outlined text-6xl text-on-surface/30 mb-4",children:"inventory_2"}),c.jsx("p",{className:"text-body text-on-surface/60",children:"محصولی یافت نشد"}),c.jsx(H,{onClick:o,variant:"text",className:"mt-4",children:"بازگشت به لیست محصولات"})]})}function Zi(t,e,r){return t+(e-t)*r}class F{x;y;constructor(e,r){this.x=e,this.y=r}static interpolate(e,r,n){return new F(Zi(e.x,r.x,n),Zi(e.y,r.y,n))}copy(e=this.x,r=this.y){return new F(e,r)}getDistance(){return Math.sqrt(this.x*this.x+this.y*this.y)}getDistanceSquared(){return this.x*this.x+this.y*this.y}dotProduct(e,r){return e instanceof F?this.x*e.x+this.y*e.y:this.x*e+this.y*r}clockwise(e){return this.x*e.y-this.y*e.x>0}getDirection(){const e=this.getDistance();if(e<=0)throw new Error("Can't get the direction of a 0-length vector");return this.div(e)}unaryMinus(){return new F(-this.x,-this.y)}minus(e){return new F(this.x-e.x,this.y-e.y)}plus(e){return new F(this.x+e.x,this.y+e.y)}times(e){return new F(this.x*e,this.y*e)}div(e){return new F(this.x/e,this.y/e)}rem(e){return new F(this.x%e,this.y%e)}transformed(e){const r=e.transform(this.x,this.y);return new F(r.first,r.second)}rotate90(){return new F(-this.y,this.x)}}function fo(t,e){return Math.sqrt(t*t+e*e)}function xr(t,e){if(e!==void 0){const r=fo(t,e);if(r<=0)throw new Error("Required distance greater than zero");return new F(t/r,e/r)}else return new F(Math.cos(t),Math.sin(t))}function Ue(t,e,r=new F(0,0)){return xr(e).times(t).plus(r)}const J=1e-4,Ji=1e-6,_e=Math.PI,Qm=2*Math.PI;function en(t){return t*t}function He(t,e,r){return(1-r)*t+r*e}function Se(t,e){return(t%e+e)%e}function al(t,e,r){return e.minus(t).clockwise(r.minus(e))}class U{points;constructor(e=[0,0,0,0,0,0,0,0]){if(this.points=e,e.length!==8)throw new Error("Points array size should be 8")}get anchor0X(){return this.points[0]}get anchor0Y(){return this.points[1]}get control0X(){return this.points[2]}get control0Y(){return this.points[3]}get control1X(){return this.points[4]}get control1Y(){return this.points[5]}get anchor1X(){return this.points[6]}get anchor1Y(){return this.points[7]}static fromPoints(e,r,n,o){return new U([e.x,e.y,r.x,r.y,n.x,n.y,o.x,o.y])}pointOnCurve(e){const r=1-e;return new F(this.anchor0X*(r*r*r)+this.control0X*(3*e*r*r)+this.control1X*(3*e*e*r)+this.anchor1X*(e*e*e),this.anchor0Y*(r*r*r)+this.control0Y*(3*e*r*r)+this.control1Y*(3*e*e*r)+this.anchor1Y*(e*e*e))}zeroLength(){return Math.abs(this.anchor0X-this.anchor1X)<J&&Math.abs(this.anchor0Y-this.anchor1Y)<J}convexTo(e){const r=new F(this.anchor0X,this.anchor0Y),n=new F(this.anchor1X,this.anchor1Y),o=new F(e.anchor1X,e.anchor1Y);return al(r,n,o)}zeroIsh(e){return Math.abs(e)<J}calculateBounds(e=[0,0,0,0],r=!1){if(this.zeroLength()){e[0]=this.anchor0X,e[1]=this.anchor0Y,e[2]=this.anchor0X,e[3]=this.anchor0Y;return}let n=Math.min(this.anchor0X,this.anchor1X),o=Math.min(this.anchor0Y,this.anchor1Y),i=Math.max(this.anchor0X,this.anchor1X),s=Math.max(this.anchor0Y,this.anchor1Y);if(r){e[0]=Math.min(n,this.control0X,this.control1X),e[1]=Math.min(o,this.control0Y,this.control1Y),e[2]=Math.max(i,this.control0X,this.control1X),e[3]=Math.max(s,this.control0Y,this.control1Y);return}const a=-this.anchor0X+3*this.control0X-3*this.control1X+this.anchor1X,l=2*this.anchor0X-4*this.control0X+2*this.control1X,u=-this.anchor0X+this.control0X;if(this.zeroIsh(a)){if(l!==0){const m=2*u/(-2*l);if(m>=0&&m<=1){const v=this.pointOnCurve(m).x;n=Math.min(n,v),i=Math.max(i,v)}}}else{const m=l*l-4*a*u;if(m>=0){const v=Math.sqrt(m),x=(-l+v)/(2*a);if(x>=0&&x<=1){const _=this.pointOnCurve(x).x;n=Math.min(n,_),i=Math.max(i,_)}const b=(-l-v)/(2*a);if(b>=0&&b<=1){const _=this.pointOnCurve(b).x;n=Math.min(n,_),i=Math.max(i,_)}}}const d=-this.anchor0Y+3*this.control0Y-3*this.control1Y+this.anchor1Y,h=2*this.anchor0Y-4*this.control0Y+2*this.control1Y,p=-this.anchor0Y+this.control0Y;if(this.zeroIsh(d)){if(h!==0){const m=2*p/(-2*h);if(m>=0&&m<=1){const v=this.pointOnCurve(m).y;o=Math.min(o,v),s=Math.max(s,v)}}}else{const m=h*h-4*d*p;if(m>=0){const v=Math.sqrt(m),x=(-h+v)/(2*d);if(x>=0&&x<=1){const _=this.pointOnCurve(x).y;o=Math.min(o,_),s=Math.max(s,_)}const b=(-h-v)/(2*d);if(b>=0&&b<=1){const _=this.pointOnCurve(b).y;o=Math.min(o,_),s=Math.max(s,_)}}}e[0]=n,e[1]=o,e[2]=i,e[3]=s}split(e){const r=1-e,n=this.pointOnCurve(e),o=new U([this.anchor0X,this.anchor0Y,this.anchor0X*r+this.control0X*e,this.anchor0Y*r+this.control0Y*e,this.anchor0X*(r*r)+this.control0X*(2*r*e)+this.control1X*(e*e),this.anchor0Y*(r*r)+this.control0Y*(2*r*e)+this.control1Y*(e*e),n.x,n.y]),i=new U([n.x,n.y,this.control0X*(r*r)+this.control1X*(2*r*e)+this.anchor1X*(e*e),this.control0Y*(r*r)+this.control1Y*(2*r*e)+this.anchor1Y*(e*e),this.control1X*r+this.anchor1X*e,this.control1Y*r+this.anchor1Y*e,this.anchor1X,this.anchor1Y]);return[o,i]}reverse(){return new U([this.anchor1X,this.anchor1Y,this.control1X,this.control1Y,this.control0X,this.control0Y,this.anchor0X,this.anchor0Y])}plus(e){return new U(this.points.map((r,n)=>r+e.points[n]))}times(e){return new U(this.points.map(r=>r*e))}div(e){return this.times(1/e)}toString(){return`anchor0: (${this.anchor0X}, ${this.anchor0Y}) control0: (${this.control0X}, ${this.control0Y}), control1: (${this.control1X}, ${this.control1Y}), anchor1: (${this.anchor1X}, ${this.anchor1Y})`}equals(e){return this===e?!0:e instanceof U?this.points.every((r,n)=>r===e.points[n]):!1}transformed(e){const r=new ll;return r.points=[...this.points],r.transform(e),r}static straightLine(e,r,n,o){return new U([e,r,He(e,n,1/3),He(r,o,1/3),He(e,n,2/3),He(r,o,2/3),n,o])}static circularArc(e,r,n,o,i,s){const a=xr(n-e,o-r),l=xr(i-e,s-r),u=a.rotate90(),d=l.rotate90(),h=u.dotProduct(i-e,s-r)>=0,p=a.dotProduct(l);if(p>.999)return U.straightLine(n,o,i,s);const m=fo(n-e,o-r)*4/3*(Math.sqrt(2*(1-p))-Math.sqrt(1-p*p))/(1-p)*(h?1:-1);return new U([n,o,n+u.x*m,o+u.y*m,i-d.x*m,s-d.y*m,i,s])}static empty(e,r){return new U([e,r,e,r,e,r,e,r])}static extend(e,r){return e.zeroLength()?new U([e.anchor0X,e.anchor0Y,r.control0X,r.control0Y,r.control1X,r.control1Y,r.anchor1X,r.anchor1Y]):new U([e.anchor0X,e.anchor0Y,e.control0X,e.control0Y,e.control1X,e.control1Y,r.anchor1X,r.anchor1Y])}}class ll extends U{transformOnePoint(e,r){const n=e.transform(this.points[r],this.points[r+1]);this.points[r]=n.first,this.points[r+1]=n.second}transform(e){this.transformOnePoint(e,0),this.transformOnePoint(e,2),this.transformOnePoint(e,4),this.transformOnePoint(e,6)}interpolate(e,r,n){for(let o=0;o<8;o++)this.points[o]=He(e.points[o],r.points[o],n)}}class Ke{cubics;constructor(e){this.cubics=e}static buildIgnorableFeature(e){return Ke.validated(new qe(e))}static buildEdge(e){return new qe([e])}static buildConvexCorner(e){return Ke.validated(new ge(e,!0))}static buildConcaveCorner(e){return Ke.validated(new ge(e,!1))}static validated(e){if(e.cubics.length===0)throw new Error("Features need at least one cubic.");if(!Ke.isContinuous(e))throw new Error("Feature must be continuous, with the anchor points of all cubics matching the anchor points of the preceding and succeeding cubics");return e}static isContinuous(e){let r=e.cubics[0];for(let n=1;n<e.cubics.length;n++){const o=e.cubics[n];if(Math.abs(o.anchor0X-r.anchor1X)>J||Math.abs(o.anchor0Y-r.anchor1Y)>J)return!1;r=o}return!0}}class qe extends Ke{constructor(e){super(e)}transformed(e){return new qe(this.cubics.map(r=>r.transformed(e)))}reversed(){return new qe(this.cubics.map(e=>e.reverse()).reverse())}equals(e){return this===e?!0:!(e instanceof qe)||this.cubics.length!==e.cubics.length?!1:this.cubics.every((r,n)=>r.equals(e.cubics[n]))}get isIgnorableFeature(){return!0}get isEdge(){return!0}get isConvexCorner(){return!1}get isConcaveCorner(){return!1}toString(){return"Edge"}}class ge extends Ke{convex;constructor(e,r=!0){super(e),this.convex=r}transformed(e){return new ge(this.cubics.map(r=>r.transformed(e)),this.convex)}reversed(){return new ge(this.cubics.map(e=>e.reverse()).reverse(),!this.convex)}equals(e){return this===e?!0:!(e instanceof ge)||this.convex!==e.convex||this.cubics.length!==e.cubics.length?!1:this.cubics.every((r,n)=>r.equals(e.cubics[n]))}get isIgnorableFeature(){return!1}get isEdge(){return!1}get isConvexCorner(){return this.convex}get isConcaveCorner(){return!this.convex}toString(){return`Corner: cubics=${this.cubics.map(e=>`[${e}]`).join(", ")} convex=${this.convex}`}}function Zm(t,e,r){return r>=e?t>=e&&t<=r:t>=e||t<=r}function es(t,e,r){if(r<0||r>1)throw new Error(`Invalid progress: ${r}`);const n=t.findIndex((l,u)=>Zm(r,t[u],t[(u+1)%t.length]));if(n===-1)throw new Error(`No segment found in linearMap for x=${r} over ${t.join(", ")}`);const o=(n+1)%t.length,i=Se(t[o]-t[n],1),s=Se(e[o]-e[n],1),a=i<.001?.5:Se(r-t[n],1)/i;return Se(e[n]+s*a,1)}function ts(t){let e=t[t.length-1],r=0;for(let n=0;n<t.length;n++){const o=t[n];if(o<0||o>=1)throw new Error(`FloatMapping - Progress outside of range: ${t.join(", ")}`);if(Jm(o,e)<=J)throw new Error(`FloatMapping - Progress repeats a value: ${t.join(", ")}`);if(o<e&&(r++,r>1))throw new Error(`FloatMapping - Progress wraps more than once: ${t.join(", ")}`);e=o}}function Jm(t,e){const r=Math.abs(t-e);return Math.min(r,1-r)}class vo{sourceValues;targetValues;constructor(e){this.sourceValues=e.map(r=>r[0]),this.targetValues=e.map(r=>r[1]),ts(this.sourceValues),ts(this.targetValues)}map(e){return es(this.sourceValues,this.targetValues,e)}mapBack(e){return es(this.targetValues,this.sourceValues,e)}static Identity=new vo([[0,0],[.5,.5]])}function ep(t,e){const r=t.filter(s=>s.feature instanceof ge),n=e.filter(s=>s.feature instanceof ge),o=tp(r,n);return new vo(o)}function tp(t,e){const r=t.flatMap(o=>e.map(i=>{const s=op(o.feature,i.feature);return s!==1/0?{distance:s,f1:o,f2:i}:null})).filter(o=>o!==null).sort((o,i)=>o.distance-i.distance);if(r.length===0)return[[0,0],[.5,.5]];if(r.length===1){const{f1:o,f2:i}=r[0];return[[o.progress,i.progress],[(o.progress+.5)%1,(i.progress+.5)%1]]}const n=new rp;return r.forEach(({f1:o,f2:i})=>n.addMapping(o,i)),n.mapping}class rp{mapping=[];usedF1=new Set;usedF2=new Set;addMapping(e,r){if(this.usedF1.has(e)||this.usedF2.has(r))return;const n=this.mapping.findIndex(([s,a])=>s>e.progress),o=n===-1?this.mapping.length:n,i=this.mapping.length;if(i>=1){const[s,a]=this.mapping[(o+i-1)%i],[l,u]=this.mapping[o%i];if(nr(e.progress,s)<J||nr(e.progress,l)<J||nr(r.progress,a)<J||nr(r.progress,u)<J||i>1&&!np(r.progress,a,u))return}this.mapping.splice(o,0,[e.progress,r.progress]),this.usedF1.add(e),this.usedF2.add(r)}}function nr(t,e){const r=Math.abs(t-e);return Math.min(r,1-r)}function np(t,e,r){return r>=e?t>=e&&t<=r:t>=e||t<=r}function op(t,e){if(t instanceof ge&&e instanceof ge&&t.convex!==e.convex)return 1/0;const r=rs(t),n=rs(e);return r.minus(n).getDistanceSquared()}function rs(t){const e=t.cubics[0],r=t.cubics[t.cubics.length-1],n=(e.anchor0X+r.anchor1X)/2,o=(e.anchor0Y+r.anchor1Y)/2;return new F(n,o)}class De extends Array{measurer;features;constructor(e,r,n,o){if(super(),this.measurer=e,this.features=r,o.length!==n.length+1)throw new Error("Outline progress size is expected to be the cubics size + 1");if(o[0]!==0)throw new Error("First outline progress value is expected to be zero");if(o[o.length-1]!==1)throw new Error("Last outline progress value is expected to be one");let i=0;for(let s=0;s<n.length;s++)o[s+1]-o[s]>J&&(this.push(new De.MeasuredCubic(this.measurer,n[s],i,o[s+1])),i=o[s+1]);this[this.length-1].updateProgressRange(void 0,1)}cutAndShift(e){if(e<0||e>1)throw new Error("Cutting point is expected to be between 0 and 1");if(e<J)return this;const r=this.findIndex(u=>e>=u.startOutlineProgress&&e<=u.endOutlineProgress),n=this[r],[o,i]=n.cutAtProgress(e),s=[i.cubic];for(let u=1;u<this.length;u++)s.push(this[(u+r)%this.length].cubic);s.push(o.cubic);const a=[0];for(let u=0;u<this.length;u++){const d=(r+u)%this.length;a.push(Se(this[d].endOutlineProgress-e,1))}a.push(1);const l=this.features.map(u=>({progress:Se(u.progress-e,1),feature:u.feature}));return new De(this.measurer,l,s,a)}static measurePolygon(e,r){const n=[],o=[];for(const u of r.features)for(let d=0;d<u.cubics.length;d++)u instanceof ge&&d===Math.floor(u.cubics.length/2)&&o.push([u,n.length]),n.push(u.cubics[d]);const i=n.reduce((u,d)=>{const h=e.measureCubic(d);if(h<0)throw new Error("Measured cubic is expected to be greater or equal to zero");return u.push(u[u.length-1]+h),u},[0]),s=i[i.length-1],a=i.map(u=>u/s),l=o.map(([u,d])=>({progress:Se((a[d]+a[d+1])/2,1),feature:u}));return new De(e,l,n,a)}}(function(t){class e{measurer;cubic;startOutlineProgress;endOutlineProgress;measuredSize;constructor(n,o,i,s){if(this.measurer=n,this.cubic=o,this.startOutlineProgress=i,this.endOutlineProgress=s,s<i)throw new Error("endOutlineProgress is expected to be equal or greater than startOutlineProgress");this.measuredSize=n.measureCubic(o)}updateProgressRange(n=this.startOutlineProgress,o=this.endOutlineProgress){if(o<n)throw new Error("endOutlineProgress is expected to be equal or greater than startOutlineProgress");this.startOutlineProgress=n,this.endOutlineProgress=o}cutAtProgress(n){const o=Math.max(this.startOutlineProgress,Math.min(n,this.endOutlineProgress)),i=this.endOutlineProgress-this.startOutlineProgress,a=(o-this.startOutlineProgress)/i,l=this.measurer.findCubicCutPoint(this.cubic,a*this.measuredSize);if(l<0||l>1)throw new Error("Cubic cut point is expected to be between 0 and 1");const[u,d]=this.cubic.split(l);return[new e(this.measurer,u,this.startOutlineProgress,o),new e(this.measurer,d,o,this.endOutlineProgress)]}toString(){return`MeasuredCubic(outlineProgress=[${this.startOutlineProgress} .. ${this.endOutlineProgress}], size=${this.measuredSize}, cubic=${this.cubic})`}}t.MeasuredCubic=e})(De||(De={}));class ns{segments=3;measureCubic(e){return this.closestProgressTo(e,1/0)[1]}findCubicCutPoint(e,r){return this.closestProgressTo(e,r)[0]}closestProgressTo(e,r){let n=0,o=r,i=new F(e.anchor0X,e.anchor0Y);for(let s=1;s<=this.segments;s++){const a=s/this.segments,l=e.pointOnCurve(a),u=l.minus(i).getDistance();if(u>=o)return[a-(1-o/u)/this.segments,r];o-=u,n+=u,i=l}return[1,n]}}class go{start;end;morphMatch;constructor(e,r){this.start=e,this.end=r,this.morphMatch=go.match(e,r)}calculateBounds(e=[0,0,0,0],r=!0){this.start.calculateBounds(e,r);const[n,o,i,s]=e;return this.end.calculateBounds(e,r),e[0]=Math.min(n,e[0]),e[1]=Math.min(o,e[1]),e[2]=Math.max(i,e[2]),e[3]=Math.max(s,e[3]),e}calculateMaxBounds(e=[0,0,0,0]){this.start.calculateMaxBounds(e);const[r,n,o,i]=e;return this.end.calculateMaxBounds(e),e[0]=Math.min(r,e[0]),e[1]=Math.min(n,e[1]),e[2]=Math.max(o,e[2]),e[3]=Math.max(i,e[3]),e}asCubics(e){const r=[];let n=null,o=null;for(const[i,s]of this.morphMatch){const a=i.points.map((u,d)=>He(u,s.points[d],e)),l=new U(a);n||(n=l),o&&r.push(o),o=l}return o&&n&&r.push(new U([o.anchor0X,o.anchor0Y,o.control0X,o.control0Y,o.control1X,o.control1Y,n.anchor0X,n.anchor0Y])),r}forEachCubic(e,r=new ll,n){for(const[o,i]of this.morphMatch)r.interpolate(o,i,e),n(r)}static match(e,r){const n=De.measurePolygon(new ns,e),o=De.measurePolygon(new ns,r),i=n.features,s=o.features,a=ep(i,s),l=a.map(0),u=n,d=o.cutAndShift(l),h=[];let p=0,m=0,v=p<u.length?u[p++]:null,x=m<d.length?d[m++]:null;for(;v&&x;){const b=p===u.length?1:v.endOutlineProgress,_=m===d.length?1:a.mapBack(Se(x.endOutlineProgress+l,1)),T=Math.min(b,_);let N,M;b>T+Ji?[N,M]=v.cutAtProgress(T):(N=v,M=p<u.length?u[p++]:null);let w,A;_>T+Ji?[w,A]=x.cutAtProgress(Se(a.map(T)-l,1)):(w=x,A=m<d.length?d[m++]:null),h.push([N.cubic,w.cubic]),v=M,x=A}if(v||x)throw new Error("Expected both Polygon's Cubic to be fully matched");return h}}class k{radius;smoothing;constructor(e=0,r=0){this.radius=e,this.smoothing=r}static Unrounded=new k}class ee{features;center;cubics;constructor(e,r){this.features=e,this.center=r,this.cubics=this.calculateCubics(),this.validate()}get centerX(){return this.center.x}get centerY(){return this.center.y}calculateCubics(){const e=[];let r=null,n=null,o=null,i=null;if(this.features.length>0&&this.features[0].cubics.length===3){const s=this.features[0].cubics[1],[a,l]=s.split(.5);o=[this.features[0].cubics[0],a],i=[l,this.features[0].cubics[2]]}for(let s=0;s<=this.features.length;s++){let a;if(s===0&&i!=null)a=i;else if(s===this.features.length)if(o!=null)a=o;else break;else a=this.features[s].cubics;for(const l of a)if(!l.zeroLength())n!=null&&e.push(n),n=l,r==null&&(r=l);else if(n!=null){const u=[...n.points];u[6]=l.anchor1X,u[7]=l.anchor1Y,n=new U(u)}}return n!=null&&r!=null?e.push(new U([n.anchor0X,n.anchor0Y,n.control0X,n.control0Y,n.control1X,n.control1Y,r.anchor0X,r.anchor0Y])):e.push(new U([this.centerX,this.centerY,this.centerX,this.centerY,this.centerX,this.centerY,this.centerX,this.centerY])),e}validate(){if(this.cubics.length===0)return;let e=this.cubics[this.cubics.length-1];for(let r=0;r<this.cubics.length;r++){const n=this.cubics[r];if(Math.abs(n.anchor0X-e.anchor1X)>J||Math.abs(n.anchor0Y-e.anchor1Y)>J)throw new Error("RoundedPolygon must be contiguous, with the anchor points of all curves matching the anchor points of the preceding and succeeding cubics");e=n}}transformed(e){const r=this.center.transformed(e),n=this.features.map(o=>o.transformed(e));return new ee(n,r)}normalized(){const e=this.calculateBounds(),r=e[2]-e[0],n=e[3]-e[1],o=Math.max(r,n),i=(o-r)/2-e[0],s=(o-n)/2-e[1];return this.transformed({transform(a,l){return{first:(a+i)/o,second:(l+s)/o}}})}toString(){return"[RoundedPolygon. Cubics = "+this.cubics.join(", ")+" || Features = "+this.features.join(", ")+" || Center = ("+this.centerX+", "+this.centerY+")]"}calculateMaxBounds(e=[0,0,0,0]){if(e.length<4)throw new Error("Required bounds size of 4");let r=0;for(const o of this.cubics){const i=o.anchor0X-this.centerX,s=o.anchor0Y-this.centerY,a=i*i+s*s,l=o.pointOnCurve(.5),u=l.x-this.centerX,d=l.y-this.centerY,h=u*u+d*d;r=Math.max(r,a,h)}const n=Math.sqrt(r);return e[0]=this.centerX-n,e[1]=this.centerY-n,e[2]=this.centerX+n,e[3]=this.centerY+n,e}calculateBounds(e=[0,0,0,0],r=!0){if(e.length<4)throw new Error("Required bounds size of 4");let n=1/0,o=1/0,i=-1/0,s=-1/0;const a=[0,0,0,0];for(const l of this.cubics)l.calculateBounds(a,r),n=Math.min(n,a[0]),o=Math.min(o,a[1]),i=Math.max(i,a[2]),s=Math.max(s,a[3]);return e[0]=n,e[1]=o,e[2]=i,e[3]=s,e}equals(e){if(this===e)return!0;if(!(e instanceof ee)||this.features.length!==e.features.length)return!1;for(let r=0;r<this.features.length;r++)if(!this.features[r].equals(e.features[r]))return!1;return!0}static create(e,r,n,o,i,s){if(typeof e=="number"){const a=e,l=r??1,u=n??0,d=o??0,h=i??k.Unrounded,p=s??void 0;return ee.createFromNumVertices(a,l,u,d,h,p)}else if(Array.isArray(e)&&(e.length===0||typeof e[0]=="number")){const a=e,l=r??k.Unrounded,u=n??void 0,d=o??-1/0,h=i??-1/0;return ee.createFromVertices(a,l,u,d,h)}else if(Array.isArray(e)){const a=e,l=r??NaN,u=n??NaN;return ee.createFromFeatures(a,l,u)}else{const a=e;return new ee(a.features,a.center)}}static createFromNumVertices(e,r=1,n=0,o=0,i=k.Unrounded,s){if(e<3)throw new Error("Polygons must have at least 3 vertices");const a=ap(e,r,n,o);return ee.createFromVertices(a,i,s,n,o)}static createFromVertices(e,r=k.Unrounded,n,o=-1/0,i=-1/0){if(e.length<6)throw new Error("Polygons must have at least 3 vertices");if(e.length%2===1)throw new Error("The vertices array should have even size");const s=e.length/2;if(n&&n.length!==s)throw new Error("perVertexRounding list should be either null or the same size as the number of vertices (vertices.size / 2)");const a=[];for(let m=0;m<s;m++){const v=n?.[m]??r,x=(m+s-1)%s*2,b=(m+1)%s*2;a.push(new ip(new F(e[x],e[x+1]),new F(e[m*2],e[m*2+1]),new F(e[b],e[b+1]),v))}const l=Array.from({length:s},(m,v)=>{const x=a[v].expectedRoundCut+a[(v+1)%s].expectedRoundCut,b=a[v].expectedCut+a[(v+1)%s].expectedCut,_=e[v*2],T=e[v*2+1],N=e[(v+1)%s*2],M=e[(v+1)%s*2+1],w=fo(_-N,T-M);return x>w?{roundCutRatio:w/x,cutRatio:0}:b>w?{roundCutRatio:1,cutRatio:(w-x)/(b-x)}:{roundCutRatio:1,cutRatio:1}}),u=[];for(let m=0;m<s;m++){const v=[];for(let x=0;x<=1;x++){const{roundCutRatio:b,cutRatio:_}=l[(m+s-1+x)%s];v.push(a[m].expectedRoundCut*b+(a[m].expectedCut-a[m].expectedRoundCut)*_)}u.push(a[m].getCubics(v[0],v[1]))}const d=[];for(let m=0;m<s;m++){const v=(m+s-1)%s,x=(m+1)%s,b=new F(e[m*2],e[m*2+1]),_=new F(e[v*2],e[v*2+1]),T=new F(e[x*2],e[x*2+1]),N=al(_,b,T);d.push(new ge(u[m],N));const M=u[m][u[m].length-1],w=u[(m+1)%s][0];d.push(new qe([U.straightLine(M.anchor1X,M.anchor1Y,w.anchor0X,w.anchor0Y)]))}let h,p;if(o===-1/0||i===-1/0){const m=os(e);h=m.x,p=m.y}else h=o,p=i;return new ee(d,new F(h,p))}static createFromFeatures(e,r=NaN,n=NaN){if(e.length<2)throw new Error("Polygons must have at least 2 features");const o=[];for(const l of e)for(const u of l.cubics)o.push(u.anchor0X,u.anchor0Y);const i=os(o),s=isNaN(r)?i.x:r,a=isNaN(n)?i.y:n;return new ee(e,new F(s,a))}}function os(t){let e=0,r=0;for(let n=0;n<t.length;n+=2)e+=t[n],r+=t[n+1];return new F(e/(t.length/2),r/(t.length/2))}class ip{p0;p1;p2;rounding;d1;d2;cornerRadius;smoothing;cosAngle;sinAngle;expectedRoundCut;center=new F(0,0);constructor(e,r,n,o=null){this.p0=e,this.p1=r,this.p2=n,this.rounding=o;const i=e.minus(r),s=n.minus(r),a=i.getDistance(),l=s.getDistance();a>0&&l>0?(this.d1=i.div(a),this.d2=s.div(l),this.cornerRadius=o?.radius??0,this.smoothing=o?.smoothing??0,this.cosAngle=this.d1.dotProduct(this.d2),this.sinAngle=Math.sqrt(1-en(this.cosAngle)),this.expectedRoundCut=this.sinAngle>.001?this.cornerRadius*(this.cosAngle+1)/this.sinAngle:0):(this.d1=new F(0,0),this.d2=new F(0,0),this.cornerRadius=0,this.smoothing=0,this.cosAngle=0,this.sinAngle=0,this.expectedRoundCut=0)}get expectedCut(){return(1+this.smoothing)*this.expectedRoundCut}getCubics(e,r=e){const n=Math.min(e,r);if(this.expectedRoundCut<J||n<J||this.cornerRadius<J)return this.center=this.p1,[U.straightLine(this.p1.x,this.p1.y,this.p1.x,this.p1.y)];const o=Math.min(n,this.expectedRoundCut),i=this.calculateActualSmoothingValue(e),s=this.calculateActualSmoothingValue(r),a=this.cornerRadius*o/this.expectedRoundCut,l=Math.sqrt(en(a)+en(o));this.center=this.p1.plus(this.d1.plus(this.d2).div(2).getDirection().times(l));const u=this.p1.plus(this.d1.times(o)),d=this.p1.plus(this.d2.times(o)),h=this.computeFlankingCurve(o,i,this.p1,this.p0,u,d,this.center,a),p=this.computeFlankingCurve(o,s,this.p1,this.p2,d,u,this.center,a).reverse();return[h,U.circularArc(this.center.x,this.center.y,h.anchor1X,h.anchor1Y,p.anchor0X,p.anchor0Y),p]}calculateActualSmoothingValue(e){return e>this.expectedCut?this.smoothing:e>this.expectedRoundCut?this.smoothing*(e-this.expectedRoundCut)/(this.expectedCut-this.expectedRoundCut):0}computeFlankingCurve(e,r,n,o,i,s,a,l){const u=o.minus(n).getDirection(),d=n.plus(u.times(e*(1+r))),h=F.interpolate(i,i.plus(s).div(2),r),p=a.plus(xr(h.x-a.x,h.y-a.y).times(l)),m=p.minus(a).rotate90(),v=sp(o,u,p,m)??i,x=d.plus(v.times(2)).div(3);return U.fromPoints(d,x,v,p)}}function sp(t,e,r,n){const o=n.rotate90(),i=e.dotProduct(o);if(Math.abs(i)<J)return null;const s=r.minus(t).dotProduct(o);if(Math.abs(i)<J*Math.abs(s))return null;const a=s/i;return t.plus(e.times(a))}function ap(t,e,r,n){const o=[];for(let i=0;i<t;i++){const s=Ue(e,_e/t*2*i).plus(new F(r,n));o.push(s.x,s.y)}return o}class Me{static circle(e=8,r=1,n=0,o=0){if(e<3)throw new Error("Circle must have at least three vertices");const i=_e/e,s=r/Math.cos(i);return ee.createFromNumVertices(e,s,n,o,new k(r))}static rectangle(e=2,r=2,n=k.Unrounded,o,i=0,s=0){const a=i-e/2,l=s-r/2,u=i+e/2,d=s+r/2;return ee.createFromVertices([u,d,a,d,a,l,u,l],n,o,i,s)}static star(e,r=1,n=.5,o=k.Unrounded,i,s,a=0,l=0){if(r<=0||n<=0)throw new Error("Star radii must both be greater than 0");if(n>=r)throw new Error("innerRadius must be less than radius");let u=s;return!u&&i&&(u=Array.from({length:e}).flatMap(()=>[o,i])),ee.createFromVertices(lp(e,r,n,a,l),o,u,a,l)}static pill(e=2,r=1,n=0,o=0,i=0){if(e<=0||r<=0)throw new Error("Pill shapes must have positive width and height");const s=e/2,a=r/2;return ee.createFromVertices([s+o,a+i,-s+o,a+i,-s+o,-a+i,s+o,-a+i],new k(Math.min(s,a),n),void 0,o,i)}static pillStar(e=2,r=1,n=8,o=.5,i=k.Unrounded,s,a,l=.5,u=0,d=0,h=0){if(e<=0||r<=0)throw new Error("Pill shapes must have positive width and height");if(o<=0||o>1)throw new Error("innerRadius must be between 0 and 1");let p=a;return!p&&s&&(p=Array.from({length:n}).flatMap(()=>[i,s])),ee.createFromVertices(cp(n,e,r,o,l,u,d,h),i,p,d,h)}}function lp(t,e,r,n,o){const i=[];for(let s=0;s<t;s++){let a=Ue(e,_e/t*2*s);i.push(a.x+n,a.y+o),a=Ue(r,_e/t*(2*s+1)),i.push(a.x+n,a.y+o)}return i}function cp(t,e,r,n,o,i,s,a){const l=Math.min(e,r),u=Math.max(0,r-e),d=Math.max(0,e-r),h=u/2,p=d/2,m=Qm*l*He(n,1,o),v=2*d+2*u+m,x=[0,u/2,u/2+m/4,u/2+m/4+d,u/2+m/4+d+m/4,u/2+m/4+d+m/4+u,u/2+m/4+d+m/4+u+m/4,u/2+m/4+d+m/4+u+m/4+d,u/2+m/4+d+m/4+u+m/4+d+m/4,u/2+m/4+d+m/4+u+m/4+d+m/4+u/2,v],b=v/(2*t);let _=!1,T=0,N=i*v;const M=[],w=new F(p,h),A=new F(-p,h),D=new F(-p,-h),f=new F(p,-h);for(let $=0;$<t*2;$++){const R=N%v;for(R<x[T]&&(T=0);R>=x[T+1];)T++;const C=x[T],z=x[T+1],E=(R-C)/(z-C),V=_?l*n:l;let S;switch(T){case 0:S=new F(V,E*h);break;case 1:S=Ue(V,E*_e/2).plus(w);break;case 2:S=new F(p-E*d,V);break;case 3:S=Ue(V,_e/2+E*_e/2).plus(A);break;case 4:S=new F(-V,h-E*u);break;case 5:S=Ue(V,_e+E*_e/2).plus(D);break;case 6:S=new F(-p+E*d,-V);break;case 7:S=Ue(V,_e*1.5+E*_e/2).plus(f);break;default:S=new F(V,-h+E*h);break}M.push(S.x+s,S.y+a),N+=b,_=!_}return M}const dp=5,is=10**dp;function $e(t){if(!Number.isFinite(t))return"0";let e=Math.round(t*is)/is;return Object.is(e,-0)&&(e=0),String(e)}class cl{pathData="";moveTo(e,r){this.pathData+=`M${$e(e)} ${$e(r)}`}lineTo(e,r){this.pathData+=`L${$e(e)} ${$e(r)}`}cubicTo(e,r,n,o,i,s){this.pathData+=`C${$e(e)} ${$e(r)} ${$e(n)} ${$e(o)} ${$e(i)} ${$e(s)}`}close(){this.pathData+="Z"}rewind(){this.pathData=""}toSvgPathData(){return this.pathData}toString(){return this.pathData}}class jt{matrix;constructor(){this.matrix=[1,0,0,0,1,0,0,0,1]}rotateZ(e){const r=e*Math.PI/180,n=Math.cos(r),o=Math.sin(r),i=[n,-o,0,o,n,0,0,0,1];return this.multiply(i),this}scale(e,r){const n=[e,0,0,0,r,0,0,0,1];return this.multiply(n),this}transform(e,r){const n=this.matrix[0]*e+this.matrix[1]*r+this.matrix[2],o=this.matrix[3]*e+this.matrix[4]*r+this.matrix[5];return{first:n,second:o}}multiply(e){const r=[0,0,0,0,0,0,0,0,1];for(let n=0;n<3;n++)for(let o=0;o<3;o++){let i=0;for(let s=0;s<3;s++)i+=this.matrix[n*3+s]*e[s*3+o];r[n*3+o]=i}this.matrix=r}}class j{x;y;constructor(e,r){this.x=e,this.y=r}}function dl(t,e){e.moveTo(t[0].anchor0X,t[0].anchor0Y);for(const r of t)e.cubicTo(r.control0X,r.control0Y,r.control1X,r.control1Y,r.anchor1X,r.anchor1Y);return e.close(),e}function ul(t,e,r=new cl){return dl(t.asCubics(e),r)}function up(t,e=new cl){return dl(t.cubics,e)}class P{o;r;constructor(e,r=k.Unrounded){this.o=e,this.r=r}}class ut{static cornerRound15=new k(.15);static cornerRound20=new k(.2);static cornerRound30=new k(.3);static cornerRound50=new k(.5);static cornerRound100=new k(1);static rotateNeg45=new jt().rotateZ(-45);static rotateNeg90=new jt().rotateZ(-90);static rotateNeg135=new jt().rotateZ(-135);static _circle;static _square;static _slanted;static _arch;static _fan;static _arrow;static _semiCircle;static _oval;static _pill;static _triangle;static _diamond;static _clamShell;static _pentagon;static _gem;static _verySunny;static _sunny;static _cookie4Sided;static _cookie6Sided;static _cookie7Sided;static _cookie9Sided;static _cookie12Sided;static _ghostish;static _clover4Leaf;static _clover8Leaf;static _burst;static _softBurst;static _boom;static _softBoom;static _flower;static _puffy;static _puffyDiamond;static _pixelCircle;static _pixelTriangle;static _bun;static _heart;static get Circle(){return this._circle||(this._circle=Me.circle().normalized()),this._circle}static get Square(){return this._square||(this._square=this.square().normalized()),this._square}static get Slanted(){return this._slanted||(this._slanted=this.slanted().normalized()),this._slanted}static get Arch(){return this._arch||(this._arch=this.arch().normalized()),this._arch}static get Fan(){return this._fan||(this._fan=this.fan().normalized()),this._fan}static get Arrow(){return this._arrow||(this._arrow=this.arrow().normalized()),this._arrow}static get SemiCircle(){return this._semiCircle||(this._semiCircle=this.semiCircle().normalized()),this._semiCircle}static get Oval(){return this._oval||(this._oval=this.oval().normalized()),this._oval}static get Pill(){return this._pill||(this._pill=this.pill().normalized()),this._pill}static get Triangle(){return this._triangle||(this._triangle=this.triangle().normalized()),this._triangle}static get Diamond(){return this._diamond||(this._diamond=this.diamond().normalized()),this._diamond}static get ClamShell(){return this._clamShell||(this._clamShell=this.clamShell().normalized()),this._clamShell}static get Pentagon(){return this._pentagon||(this._pentagon=this.pentagon().normalized()),this._pentagon}static get Gem(){return this._gem||(this._gem=this.gem().normalized()),this._gem}static get Sunny(){return this._sunny||(this._sunny=this.sunny().normalized()),this._sunny}static get VerySunny(){return this._verySunny||(this._verySunny=this.verySunny().normalized()),this._verySunny}static get Cookie4Sided(){return this._cookie4Sided||(this._cookie4Sided=this.cookie4().normalized()),this._cookie4Sided}static get Cookie6Sided(){return this._cookie6Sided||(this._cookie6Sided=this.cookie6().normalized()),this._cookie6Sided}static get Cookie7Sided(){return this._cookie7Sided||(this._cookie7Sided=this.cookie7().normalized()),this._cookie7Sided}static get Cookie9Sided(){return this._cookie9Sided||(this._cookie9Sided=this.cookie9().normalized()),this._cookie9Sided}static get Cookie12Sided(){return this._cookie12Sided||(this._cookie12Sided=this.cookie12().normalized()),this._cookie12Sided}static get Ghostish(){return this._ghostish||(this._ghostish=this.ghostish().normalized()),this._ghostish}static get Clover4Leaf(){return this._clover4Leaf||(this._clover4Leaf=this.clover4().normalized()),this._clover4Leaf}static get Clover8Leaf(){return this._clover8Leaf||(this._clover8Leaf=this.clover8().normalized()),this._clover8Leaf}static get Burst(){return this._burst||(this._burst=this.burst().normalized()),this._burst}static get SoftBurst(){return this._softBurst||(this._softBurst=this.softBurst().normalized()),this._softBurst}static get Boom(){return this._boom||(this._boom=this.boom().normalized()),this._boom}static get SoftBoom(){return this._softBoom||(this._softBoom=this.softBoom().normalized()),this._softBoom}static get Flower(){return this._flower||(this._flower=this.flower().normalized()),this._flower}static get Puffy(){return this._puffy||(this._puffy=this.puffy().normalized()),this._puffy}static get PuffyDiamond(){return this._puffyDiamond||(this._puffyDiamond=this.puffyDiamond().normalized()),this._puffyDiamond}static get PixelCircle(){return this._pixelCircle||(this._pixelCircle=this.pixelCircle().normalized()),this._pixelCircle}static get PixelTriangle(){return this._pixelTriangle||(this._pixelTriangle=this.pixelTriangle().normalized()),this._pixelTriangle}static get Bun(){return this._bun||(this._bun=this.bun().normalized()),this._bun}static get Heart(){return this._heart||(this._heart=this.heart().normalized()),this._heart}static names=["Circle","Square","Slanted","Arch","SemiCircle","Oval","Pill","Triangle","Arrow","Fan","Diamond","ClamShell","Pentagon","Gem","VerySunny","Sunny","Cookie4Sided","Cookie6Sided","Cookie7Sided","Cookie9Sided","Cookie12Sided","Clover4Leaf","Clover8Leaf","Burst","SoftBurst","Boom","SoftBoom","Flower","Puffy","PuffyDiamond","Ghostish","PixelCircle","PixelTriangle","Bun","Heart"];static byName(e){return this[e]}static all(){return ut.names.map(e=>({name:e,polygon:ut.byName(e)}))}static square(){return Me.rectangle(1,1,this.cornerRound30)}static slanted(){return this.customPolygon([new P(new j(.926,.97),new k(.189,.811)),new P(new j(-.021,.967),new k(.187,.057))],2)}static arch(){return ee.createFromNumVertices(4,1,0,0,k.Unrounded,[this.cornerRound100,this.cornerRound100,this.cornerRound20,this.cornerRound20]).transformed(this.rotateNeg135)}static fan(){return this.customPolygon([new P(new j(1.004,1),new k(.148,.417)),new P(new j(0,1),new k(.151)),new P(new j(0,-.003),new k(.148)),new P(new j(.978,.02),new k(.803))],1)}static arrow(){return this.customPolygon([new P(new j(.5,.892),new k(.313)),new P(new j(-.216,1.05),new k(.207)),new P(new j(.499,-.16),new k(.215,1)),new P(new j(1.225,1.06),new k(.211))],1)}static semiCircle(){return Me.rectangle(1.6,1,void 0,[this.cornerRound20,this.cornerRound20,this.cornerRound100,this.cornerRound100])}static oval(){const e=new jt().scale(1,.64);return Me.circle().transformed(e).transformed(this.rotateNeg45)}static pill(){return this.customPolygon([new P(new j(.961,.039),new k(.426)),new P(new j(1.001,.428)),new P(new j(1,.609),new k(1))],2,!0)}static triangle(){return ee.createFromNumVertices(3,1,0,0,this.cornerRound20).transformed(this.rotateNeg90)}static diamond(){return this.customPolygon([new P(new j(.5,1.096),new k(.151,.524)),new P(new j(.04,.5),new k(.159))],2)}static clamShell(){return this.customPolygon([new P(new j(.171,.841),new k(.159)),new P(new j(-.02,.5),new k(.14)),new P(new j(.17,.159),new k(.159))],2)}static pentagon(){return this.customPolygon([new P(new j(.5,-.009),new k(.172)),new P(new j(1.03,.365),new k(.164)),new P(new j(.828,.97),new k(.169))],1,!0)}static gem(){return this.customPolygon([new P(new j(.499,1.023),new k(.241,.778)),new P(new j(-.005,.792),new k(.208)),new P(new j(.073,.258),new k(.228)),new P(new j(.433,-0),new k(.491))],1,!0)}static sunny(){return Me.star(8,void 0,.8,this.cornerRound15)}static verySunny(){return this.customPolygon([new P(new j(.5,1.08),new k(.085)),new P(new j(.358,.843),new k(.085))],8)}static cookie4(){return this.customPolygon([new P(new j(1.237,1.236),new k(.258)),new P(new j(.5,.918),new k(.233))],4)}static cookie6(){return this.customPolygon([new P(new j(.723,.884),new k(.394)),new P(new j(.5,1.099),new k(.398))],6)}static cookie7(){return Me.star(7,void 0,.75,this.cornerRound50).transformed(this.rotateNeg90)}static cookie9(){return Me.star(9,void 0,.8,this.cornerRound50).transformed(this.rotateNeg90)}static cookie12(){return Me.star(12,void 0,.8,this.cornerRound50).transformed(this.rotateNeg90)}static ghostish(){return this.customPolygon([new P(new j(.5,0),new k(1)),new P(new j(1,0),new k(1)),new P(new j(1,1.14),new k(.254,.106)),new P(new j(.575,.906),new k(.253))],1,!0)}static clover4(){return this.customPolygon([new P(new j(.5,.074)),new P(new j(.725,-.099),new k(.476))],4,!0)}static clover8(){return this.customPolygon([new P(new j(.5,.036)),new P(new j(.758,-.101),new k(.209))],8)}static burst(){return this.customPolygon([new P(new j(.5,-.006),new k(.006)),new P(new j(.592,.158),new k(.006))],12)}static softBurst(){return this.customPolygon([new P(new j(.193,.277),new k(.053)),new P(new j(.176,.055),new k(.053))],10)}static boom(){return this.customPolygon([new P(new j(.457,.296),new k(.007)),new P(new j(.5,-.051),new k(.007))],15)}static softBoom(){return this.customPolygon([new P(new j(.733,.454)),new P(new j(.839,.437),new k(.532)),new P(new j(.949,.449),new k(.439,1)),new P(new j(.998,.478),new k(.174))],16,!0)}static flower(){return this.customPolygon([new P(new j(.37,.187)),new P(new j(.416,.049),new k(.381)),new P(new j(.479,.001),new k(.095))],8,!0)}static puffy(){const e=new jt().scale(1,.742);return this.customPolygon([new P(new j(.5,.053)),new P(new j(.545,-.04),new k(.405)),new P(new j(.67,-.035),new k(.426)),new P(new j(.717,.066),new k(.574)),new P(new j(.722,.128)),new P(new j(.777,.002),new k(.36)),new P(new j(.914,.149),new k(.66)),new P(new j(.926,.289),new k(.66)),new P(new j(.881,.346)),new P(new j(.94,.344),new k(.126)),new P(new j(1.003,.437),new k(.255))],2,!0).transformed(e)}static puffyDiamond(){return this.customPolygon([new P(new j(.87,.13),new k(.146)),new P(new j(.818,.357)),new P(new j(1,.332),new k(.853))],4,!0)}static pixelCircle(){return this.customPolygon([new P(new j(.5,0)),new P(new j(.704,0)),new P(new j(.704,.065)),new P(new j(.843,.065)),new P(new j(.843,.148)),new P(new j(.926,.148)),new P(new j(.926,.296)),new P(new j(1,.296))],2,!0)}static pixelTriangle(){return this.customPolygon([new P(new j(.11,.5)),new P(new j(.113,0)),new P(new j(.287,0)),new P(new j(.287,.087)),new P(new j(.421,.087)),new P(new j(.421,.17)),new P(new j(.56,.17)),new P(new j(.56,.265)),new P(new j(.674,.265)),new P(new j(.675,.344)),new P(new j(.789,.344)),new P(new j(.789,.439)),new P(new j(.888,.439))],1,!0)}static bun(){return this.customPolygon([new P(new j(.796,.5)),new P(new j(.853,.518),new k(1)),new P(new j(.992,.631),new k(1)),new P(new j(.968,1),new k(1))],2,!0)}static heart(){return this.customPolygon([new P(new j(.5,.268),new k(.016)),new P(new j(.792,-.066),new k(.958)),new P(new j(1.064,.276),new k(1)),new P(new j(.501,.946),new k(.129))],1,!0)}static customPolygon(e,r,n=!1,o=new j(.5,.5)){const i=this.doRepeat(e,r,o,n),s=i.flatMap(l=>[l.o.x,l.o.y]),a=i.map(l=>l.r);return ee.createFromVertices(s,void 0,a,o.x,o.y)}static doRepeat(e,r,n,o){if(o){const i=e.map(d=>Math.atan2(d.o.y-n.y,d.o.x-n.x)),s=e.map(d=>Math.sqrt(Math.pow(d.o.x-n.x,2)+Math.pow(d.o.y-n.y,2))),a=r*2,l=2*Math.PI/a,u=[];for(let d=0;d<a;d++)e.forEach((h,p)=>{const m=d%2===0?p:e.length-1-p;if(m>0||d%2===0){const v=l*d+(d%2===0?i[m]:l-i[m]+2*i[0]),x=new j(Math.cos(v)*s[m]+n.x,Math.sin(v)*s[m]+n.y);u.push(new P(x,e[m].r))}});return u}else return Array.from({length:e.length*r},(i,s)=>{const a=Math.floor(s/e.length),l=this.rotatePoint(e[s%e.length].o,a*360/r,n);return new P(l,e[s%e.length].r)})}static rotatePoint(e,r,n){const o=r*Math.PI/180,i=e.x-n.x,s=e.y-n.y;return new j(i*Math.cos(o)-s*Math.sin(o)+n.x,i*Math.sin(o)+s*Math.cos(o)+n.y)}}const tn=[["Circle","Flower"],["Sunny","Clover8Leaf"],["Cookie6Sided","Gem"],["Puffy","PuffyDiamond"],["SoftBurst","Bun"],["Clover4Leaf","VerySunny"],["Slanted","Cookie12Sided"],["Fan","Heart"]],hp=["Cookie9Sided","Diamond","Ghostish","Arch","Pill","Burst"],mp=[{x:2,y:6,size:120},{x:88,y:4,size:100},{x:6,y:30,size:72},{x:92,y:28,size:128},{x:3,y:56,size:96},{x:87,y:54,size:80},{x:7,y:80,size:68},{x:90,y:76,size:104},{x:20,y:13,size:54},{x:73,y:86,size:60},{x:46,y:3,size:46},{x:54,y:92,size:52},{x:14,y:68,size:48},{x:79,y:38,size:56}];function pp(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let r=Math.imul(e^e>>>15,1|e);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function fp(){const t=pp(20260816);return mp.map((e,r)=>{const n=r<tn.length,o=t()>.3;if(n){const[s,a]=tn[r],l=new go(ut.byName(s),ut.byName(a));return{id:r,...e,opacity:.05+t()*.08,fill:o?"var(--site-primary)":"var(--site-on-surface)",d:ul(l,0).toSvgPathData(),morph:l,speed:.08+t()*.12,phase:t()*Math.PI*2,dur:14+t()*16,delay:-t()*20,dx:(t()-.5)*70,dy:(t()-.5)*90,rot:(t()-.5)*50}}const i=ut.byName(hp[r-tn.length]);return{id:r,...e,opacity:.04+t()*.07,fill:o?"var(--site-primary)":"var(--site-on-surface)",d:up(i).toSvgPathData(),morph:null,speed:0,phase:0,dur:12+t()*18,delay:-t()*20,dx:(t()-.5)*80,dy:(t()-.5)*100,rot:(t()-.5)*70}})}function vp(){const t=y.useRef([]),e=y.useMemo(fp,[]);return y.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let r=0;const n=performance.now(),o=i=>{const s=(i-n)/1e3;for(let a=0;a<e.length;a++){const l=e[a];if(!l.morph)continue;const u=.5+.5*Math.sin(s*l.speed+l.phase),d=t.current[a];d&&d.setAttribute("d",ul(l.morph,u).toSvgPathData())}r=requestAnimationFrame(o)};return r=requestAnimationFrame(o),()=>cancelAnimationFrame(r)},[e]),c.jsx("div",{className:"fixed inset-0 -z-10 overflow-hidden","aria-hidden":"true",children:e.map((r,n)=>c.jsx("svg",{className:"fshape",viewBox:"0 0 1 1",style:{left:`${r.x}vw`,top:`${r.y}vh`,width:`min(${r.size}px, 24vw)`,aspectRatio:"1 / 1",opacity:r.opacity,"--dur":`${r.dur}s`,"--delay":`${r.delay}s`,"--dx":`${r.dx}px`,"--dy":`${r.dy}px`,"--rot":`${r.rot}deg`},children:c.jsx("path",{ref:o=>{t.current[n]=o},d:r.d,fill:r.fill})},r.id))})}function gp(){return c.jsxs(pl,{children:[c.jsx(vp,{}),c.jsxs(fl,{children:[c.jsx(yt,{path:"/",element:c.jsxs("div",{children:[c.jsx("div",{className:"mb-16 sm:mb-24",children:c.jsx(wt,{})}),c.jsx(Vm,{}),c.jsx(Lm,{}),c.jsx(Fm,{}),c.jsx(zm,{}),c.jsx(Im,{}),c.jsx("div",{className:"mb-16 sm:mb-24",children:c.jsx(Ym,{})}),c.jsx(Bm,{}),c.jsx($t,{})]})}),c.jsx(yt,{path:"/blog/:id",element:c.jsxs("div",{children:[c.jsx(wt,{}),c.jsx(Um,{}),c.jsx($t,{})]})}),c.jsx(yt,{path:"/gallery",element:c.jsxs("div",{children:[c.jsx(wt,{}),c.jsx(Hm,{}),c.jsx($t,{})]})}),c.jsx(yt,{path:"/products",element:c.jsxs("div",{children:[c.jsx(wt,{}),c.jsx(Wm,{}),c.jsx($t,{})]})}),c.jsx(yt,{path:"/products/:id",element:c.jsxs("div",{children:[c.jsx(wt,{}),c.jsx(Gm,{}),c.jsx($t,{})]})})]})]})}vl.createRoot(document.getElementById("root")).render(c.jsx(y.StrictMode,{children:c.jsx(Dm,{children:c.jsx(gp,{})})}));
