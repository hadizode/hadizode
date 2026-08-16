(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(u){if(u.ep)return;u.ep=!0;const c=i(u);fetch(u.href,c)}})();function L1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xc={exports:{}},Gl={};var Kv;function U1(){if(Kv)return Gl;Kv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(o,u,c){var f=null;if(c!==void 0&&(f=""+c),u.key!==void 0&&(f=""+u.key),"key"in u){c={};for(var m in u)m!=="key"&&(c[m]=u[m])}else c=u;return u=c.ref,{$$typeof:n,type:o,key:f,ref:u!==void 0?u:null,props:c}}return Gl.Fragment=a,Gl.jsx=i,Gl.jsxs=i,Gl}var Qv;function V1(){return Qv||(Qv=1,Xc.exports=U1()),Xc.exports}var y=V1(),Pc={exports:{}},fe={};var Zv;function B1(){if(Zv)return fe;Zv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),_=Symbol.iterator;function A(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,j={};function D(C,G,I){this.props=C,this.context=G,this.refs=j,this.updater=I||N}D.prototype.isReactComponent={},D.prototype.setState=function(C,G){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,G,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function k(){}k.prototype=D.prototype;function q(C,G,I){this.props=C,this.context=G,this.refs=j,this.updater=I||N}var Z=q.prototype=new k;Z.constructor=q,w(Z,D.prototype),Z.isPureReactComponent=!0;var B=Array.isArray;function J(){}var Q={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function K(C,G,I){var te=I.ref;return{$$typeof:n,type:C,key:G,ref:te!==void 0?te:null,props:I}}function le(C,G){return K(C.type,G,C.props)}function F(C){return typeof C=="object"&&C!==null&&C.$$typeof===n}function oe(C){var G={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(I){return G[I]})}var R=/\/+/g;function W(C,G){return typeof C=="object"&&C!==null&&C.key!=null?oe(""+C.key):G.toString(36)}function re(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(J,J):(C.status="pending",C.then(function(G){C.status==="pending"&&(C.status="fulfilled",C.value=G)},function(G){C.status==="pending"&&(C.status="rejected",C.reason=G)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function z(C,G,I,te,ce){var ve=typeof C;(ve==="undefined"||ve==="boolean")&&(C=null);var je=!1;if(C===null)je=!0;else switch(ve){case"bigint":case"string":case"number":je=!0;break;case"object":switch(C.$$typeof){case n:case a:je=!0;break;case g:return je=C._init,z(je(C._payload),G,I,te,ce)}}if(je)return ce=ce(C),je=te===""?"."+W(C,0):te,B(ce)?(I="",je!=null&&(I=je.replace(R,"$&/")+"/"),z(ce,G,I,"",function(Ja){return Ja})):ce!=null&&(F(ce)&&(ce=le(ce,I+(ce.key==null||C&&C.key===ce.key?"":(""+ce.key).replace(R,"$&/")+"/")+je)),G.push(ce)),1;je=0;var mt=te===""?".":te+":";if(B(C))for(var Xe=0;Xe<C.length;Xe++)te=C[Xe],ve=mt+W(te,Xe),je+=z(te,G,I,ve,ce);else if(Xe=A(C),typeof Xe=="function")for(C=Xe.call(C),Xe=0;!(te=C.next()).done;)te=te.value,ve=mt+W(te,Xe++),je+=z(te,G,I,ve,ce);else if(ve==="object"){if(typeof C.then=="function")return z(re(C),G,I,te,ce);throw G=String(C),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return je}function X(C,G,I){if(C==null)return C;var te=[],ce=0;return z(C,te,"","",function(ve){return G.call(I,ve,ce++)}),te}function ee(C){if(C._status===-1){var G=C._result;G=G(),G.then(function(I){(C._status===0||C._status===-1)&&(C._status=1,C._result=I)},function(I){(C._status===0||C._status===-1)&&(C._status=2,C._result=I)}),C._status===-1&&(C._status=0,C._result=G)}if(C._status===1)return C._result.default;throw C._result}var pe=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},de={map:X,forEach:function(C,G,I){X(C,function(){G.apply(this,arguments)},I)},count:function(C){var G=0;return X(C,function(){G++}),G},toArray:function(C){return X(C,function(G){return G})||[]},only:function(C){if(!F(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return fe.Activity=b,fe.Children=de,fe.Component=D,fe.Fragment=i,fe.Profiler=u,fe.PureComponent=q,fe.StrictMode=o,fe.Suspense=h,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,fe.__COMPILER_RUNTIME={__proto__:null,c:function(C){return Q.H.useMemoCache(C)}},fe.cache=function(C){return function(){return C.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(C,G,I){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var te=w({},C.props),ce=C.key;if(G!=null)for(ve in G.key!==void 0&&(ce=""+G.key),G)!E.call(G,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&G.ref===void 0||(te[ve]=G[ve]);var ve=arguments.length-2;if(ve===1)te.children=I;else if(1<ve){for(var je=Array(ve),mt=0;mt<ve;mt++)je[mt]=arguments[mt+2];te.children=je}return K(C.type,ce,te)},fe.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},fe.createElement=function(C,G,I){var te,ce={},ve=null;if(G!=null)for(te in G.key!==void 0&&(ve=""+G.key),G)E.call(G,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=G[te]);var je=arguments.length-2;if(je===1)ce.children=I;else if(1<je){for(var mt=Array(je),Xe=0;Xe<je;Xe++)mt[Xe]=arguments[Xe+2];ce.children=mt}if(C&&C.defaultProps)for(te in je=C.defaultProps,je)ce[te]===void 0&&(ce[te]=je[te]);return K(C,ve,ce)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:m,render:C}},fe.isValidElement=F,fe.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:ee}},fe.memo=function(C,G){return{$$typeof:p,type:C,compare:G===void 0?null:G}},fe.startTransition=function(C){var G=Q.T,I={};Q.T=I;try{var te=C(),ce=Q.S;ce!==null&&ce(I,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(J,pe)}catch(ve){pe(ve)}finally{G!==null&&I.types!==null&&(G.types=I.types),Q.T=G}},fe.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},fe.use=function(C){return Q.H.use(C)},fe.useActionState=function(C,G,I){return Q.H.useActionState(C,G,I)},fe.useCallback=function(C,G){return Q.H.useCallback(C,G)},fe.useContext=function(C){return Q.H.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C,G){return Q.H.useDeferredValue(C,G)},fe.useEffect=function(C,G){return Q.H.useEffect(C,G)},fe.useEffectEvent=function(C){return Q.H.useEffectEvent(C)},fe.useId=function(){return Q.H.useId()},fe.useImperativeHandle=function(C,G,I){return Q.H.useImperativeHandle(C,G,I)},fe.useInsertionEffect=function(C,G){return Q.H.useInsertionEffect(C,G)},fe.useLayoutEffect=function(C,G){return Q.H.useLayoutEffect(C,G)},fe.useMemo=function(C,G){return Q.H.useMemo(C,G)},fe.useOptimistic=function(C,G){return Q.H.useOptimistic(C,G)},fe.useReducer=function(C,G,I){return Q.H.useReducer(C,G,I)},fe.useRef=function(C){return Q.H.useRef(C)},fe.useState=function(C){return Q.H.useState(C)},fe.useSyncExternalStore=function(C,G,I){return Q.H.useSyncExternalStore(C,G,I)},fe.useTransition=function(){return Q.H.useTransition()},fe.version="19.2.8",fe}var Fv;function Id(){return Fv||(Fv=1,Pc.exports=B1()),Pc.exports}var S=Id();const Be=L1(S);var ef=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Gy=/^[\\/]{2}/;function H1(n,a){return a+n.replace(/\\/g,"/")}var Jv="popstate";function Wv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function k1(n={}){function a(u,c){let{pathname:f="/",search:m="",hash:h=""}=qr(u.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ed("",{pathname:f,search:m,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(u,c){let f=u.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let h=u.location.href,p=h.indexOf("#");m=p===-1?h:h.slice(0,p)}return m+"#"+(typeof c=="string"?c:ai(c))}function o(u,c){sn(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return q1(a,i,o,n)}function He(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function sn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Y1(){return Math.random().toString(36).substring(2,10)}function Iv(n,a){return{usr:n.state,key:n.key,idx:a,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Ed(n,a,i=null,o,u){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?qr(a):a,state:i,key:a&&a.key||o||Y1(),mask:u}}function ai({pathname:n="/",search:a="",hash:i=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function qr(n){let a={};if(n){let i=n.indexOf("#");i>=0&&(a.hash=n.substring(i),n=n.substring(0,i));let o=n.indexOf("?");o>=0&&(a.search=n.substring(o),n=n.substring(0,o)),n&&(a.pathname=n)}return a}function q1(n,a,i,o={}){let{window:u=document.defaultView,v5Compat:c=!1}=o,f=u.history,m="POP",h=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function b(){m="POP";let j=g(),D=j==null?null:j-p;p=j,h&&h({action:m,location:w.location,delta:D})}function _(j,D){m="PUSH";let k=Wv(j)?j:Ed(w.location,j,D);i&&i(k,j),p=g()+1;let q=Iv(k,p),Z=w.createHref(k.mask||k);try{f.pushState(q,"",Z)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;u.location.assign(Z)}c&&h&&h({action:m,location:w.location,delta:1})}function A(j,D){m="REPLACE";let k=Wv(j)?j:Ed(w.location,j,D);i&&i(k,j),p=g();let q=Iv(k,p),Z=w.createHref(k.mask||k);f.replaceState(q,"",Z),c&&h&&h({action:m,location:w.location,delta:0})}function N(j){return G1(u,j)}let w={get action(){return m},get location(){return n(u,f)},listen(j){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Jv,b),h=j,()=>{u.removeEventListener(Jv,b),h=null}},createHref(j){return a(u,j)},createURL:N,encodeLocation(j){let D=N(j);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:A,go(j){return f.go(j)}};return w}function G1(n,a,i=!1){let o="http://localhost";n&&(o=n.location.origin!=="null"?n.location.origin:n.location.href),He(o,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:ai(a);return u=u.replace(/ $/,"%20"),!i&&Gy.test(u)&&(u=o+u),new URL(u,o)}function Xy(n,a,i="/"){return X1(n,a,i,!1)}function X1(n,a,i,o,u){let c=typeof a=="string"?qr(a):a,f=Ln(c.pathname||"/",i);if(f==null)return null;let m=P1(n),h=null,p=rS(f);for(let g=0;h==null&&g<m.length;++g)h=nS(m[g],p,o);return h}function P1(n){let a=Py(n);return K1(a),a}function Py(n,a=[],i=[],o="",u=!1){let c=(f,m,h=u,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&h)return;He(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let b=ln([o,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(He(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Py(f.children,a,_,b,h)),!(f.path==null&&!f.index)&&a.push({path:b,score:eS(b,f.index),routesMeta:_.map((A,N)=>{let[w,j]=Zy(A.relativePath,A.caseSensitive,N===_.length-1);return{...A,matcher:w,compiledParams:j}})})};return n.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))c(f,m);else for(let h of Ky(f.path))c(f,m,!0,h)}),a}function Ky(n){let a=n.split("/");if(a.length===0)return[];let[i,...o]=a,u=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return u?[c,""]:[c];let f=Ky(o.join("/")),m=[];return m.push(...f.map(h=>h===""?c:[c,h].join("/"))),u&&m.push(...f),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function K1(n){n.sort((a,i)=>a.score!==i.score?i.score-a.score:tS(a.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var Q1=/^:[\w-]+$/,Z1=3,F1=2,J1=1,W1=10,I1=-2,eg=n=>n==="*";function eS(n,a){let i=n.split("/"),o=i.length;return i.some(eg)&&(o+=I1),a&&(o+=F1),i.filter(u=>!eg(u)).reduce((u,c)=>u+(Q1.test(c)?Z1:c===""?J1:W1),o)}function tS(n,a){return n.length===a.length&&n.slice(0,-1).every((o,u)=>o===a[u])?n[n.length-1]-a[a.length-1]:0}function nS(n,a,i=!1){let{routesMeta:o}=n,u={},c="/",f=[];for(let m=0;m<o.length;++m){let h=o[m],p=m===o.length-1,g=c==="/"?a:a.slice(c.length)||"/",b={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_=h.matcher&&h.compiledParams?Qy(b,g,h.matcher,h.compiledParams):as(b,g),A=h.route;if(!_&&p&&i&&!o[o.length-1].route.index&&(_=as({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!_)return null;Object.assign(u,_.params),f.push({params:u,pathname:ln([c,_.pathname]),pathnameBase:iS(ln([c,_.pathnameBase])),route:A}),_.pathnameBase!=="/"&&(c=ln([c,_.pathnameBase]))}return f}function as(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,o]=Zy(n.path,n.caseSensitive,n.end);return Qy(n,a,i,o)}function Qy(n,a,i,o){let u=a.match(i);if(!u)return null;let c=u[0],f=c.replace(/(.)\/+$/,"$1"),m=u.slice(1);return{params:o.reduce((p,{paramName:g,isOptional:b},_)=>{if(g==="*"){let N=m[_]||"";f=c.slice(0,c.length-N.length).replace(/(.)\/+$/,"$1")}const A=m[_];return b&&!A?p[g]=void 0:p[g]=(A||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:n}}function Zy(n,a=!1,i=!0){sn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h,p,g)=>{if(o.push({paramName:m,isOptional:h!=null}),h){let b=g.charAt(p+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),o]}function rS(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return sn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function Ln(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,o=n.charAt(i);return o&&o!=="/"?null:n.slice(i)||"/"}function aS(n,a="/"){let{pathname:i,search:o="",hash:u=""}=typeof n=="string"?qr(n):n,c;return i?(i=Jy(i),i.startsWith("/")?c=tg(i.substring(1),"/"):c=tg(i,a)):c=a,{pathname:c,search:oS(o),hash:sS(u)}}function tg(n,a){let i=ls(a).split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function Kc(n,a,i,o){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lS(n){return n.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Fy(n){let a=lS(n);return a.map((i,o)=>o===a.length-1?i.pathname:i.pathnameBase)}function tf(n,a,i,o=!1){let u;typeof n=="string"?u=qr(n):(u={...n},He(!u.pathname||!u.pathname.includes("?"),Kc("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),Kc("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),Kc("#","search","hash",u)));let c=n===""||u.pathname==="",f=c?"/":u.pathname,m;if(f==null)m=i;else{let b=a.length-1;if(!o&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),b-=1;u.pathname=_.join("/")}m=b>=0?a[b]:"/"}let h=aS(u,m),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Jy=n=>n.replace(/[\\/]{2,}/g,"/"),ln=n=>Jy(n.join("/")),ls=n=>n.replace(/\/+$/,""),iS=n=>ls(n).replace(/^\/*/,"/"),oS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,uS=class{constructor(n,a,i,o=!1){this.status=n,this.statusText=a||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function cS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function dS(n){let a=n.map(i=>i.route.path).filter(Boolean);return ln(a)||"/"}var Wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Iy(n,a){let i=n;if(typeof i!="string"||!ef.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,u=!1;if(Wy)try{let c=new URL(window.location.href),f=Gy.test(i)?new URL(H1(i,c.protocol)):new URL(i),m=Ln(f.pathname,a);f.origin===c.origin&&m!=null?i=m+f.search+f.hash:u=!0}catch{sn(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:u,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var eb=["POST","PUT","PATCH","DELETE"];new Set(eb);var fS=["GET",...eb];new Set(fS);var mS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function hS(n){try{return mS.includes(new URL(n).protocol)}catch{return!1}}var Ka=S.createContext(null);Ka.displayName="DataRouter";var vs=S.createContext(null);vs.displayName="DataRouterState";var tb=S.createContext(!1);function pS(){return S.useContext(tb)}var nb=S.createContext({isTransitioning:!1});nb.displayName="ViewTransition";var vS=S.createContext(new Map);vS.displayName="Fetchers";var gS=S.createContext(null);gS.displayName="Await";var It=S.createContext(null);It.displayName="Navigation";var vi=S.createContext(null);vi.displayName="Location";var gn=S.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var nf=S.createContext(null);nf.displayName="RouteError";var rb="REACT_ROUTER_ERROR",yS="REDIRECT",bS="ROUTE_ERROR_RESPONSE";function xS(n){if(n.startsWith(`${rb}:${yS}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function _S(n){if(n.startsWith(`${rb}:${bS}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new uS(a.status,a.statusText,a.data)}catch{}}function SS(n,{relative:a}={}){He(gi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=S.useContext(It),{hash:u,pathname:c,search:f}=yi(n,{relative:a}),m=c;return i!=="/"&&(m=c==="/"?i:ln([i,c])),o.createHref({pathname:m,search:f,hash:u})}function gi(){return S.useContext(vi)!=null}function Vn(){return He(gi(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(vi).location}var ab="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lb(n){S.useContext(It).static||S.useLayoutEffect(n)}function Gr(){let{isDataRoute:n}=S.useContext(gn);return n?LS():ES()}function ES(){He(gi(),"useNavigate() may be used only in the context of a <Router> component.");let n=S.useContext(Ka),{basename:a,navigator:i}=S.useContext(It),{matches:o}=S.useContext(gn),{pathname:u}=Vn(),c=JSON.stringify(Fy(o)),f=S.useRef(!1);return lb(()=>{f.current=!0}),S.useCallback((h,p={})=>{if(sn(f.current,ab),!f.current)return;if(typeof h=="number"){i.go(h);return}let g=tf(h,JSON.parse(c),u,p.relative==="path");n==null&&a!=="/"&&(g.pathname=g.pathname==="/"?a:ln([a,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[a,i,c,u,n])}S.createContext(null);function TS(){let{matches:n}=S.useContext(gn);return n[n.length-1]?.params??{}}function yi(n,{relative:a}={}){let{matches:i}=S.useContext(gn),{pathname:o}=Vn(),u=JSON.stringify(Fy(i));return S.useMemo(()=>tf(n,JSON.parse(u),o,a==="path"),[n,u,o,a])}function wS(n,a){return ib(n,a)}function ib(n,a,i){He(gi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=S.useContext(It),{matches:u}=S.useContext(gn),c=u[u.length-1],f=c?c.params:{},m=c?c.pathname:"/",h=c?c.pathnameBase:"/",p=c&&c.route;{let j=p&&p.path||"";sb(m,!p||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render. 
 
Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let g=Vn(),b;if(a){let j=typeof a=="string"?qr(a):a;He(h==="/"||j.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${j.pathname}" was given in the \`location\` prop.`),b=j}else b=g;let _=b.pathname||"/",A=_;if(h!=="/"){let j=h.replace(/^\//,"").split("/");A="/"+_.replace(/^\//,"").split("/").slice(j.length).join("/")}let N=i&&i.state.matches.length?i.state.matches.map(j=>Object.assign(j,{route:i.manifest[j.route.id]||j.route})):Xy(n,{pathname:A});sn(p||N!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),sn(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=MS(N&&N.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:ln([h,o.encodeLocation?o.encodeLocation(j.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?h:ln([h,o.encodeLocation?o.encodeLocation(j.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),u,i);return a&&w?S.createElement(vi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},w):w}function jS(){let n=$S(),a=cS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:c},"ErrorBoundary")," or"," ",S.createElement("code",{style:c},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},a),i?S.createElement("pre",{style:u},i):null,f)}var AS=S.createElement(jS,null),ob=class extends S.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const i=_S(n.digest);i&&(n=i)}let a=n!==void 0?S.createElement(gn.Provider,{value:this.props.routeContext},S.createElement(nf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?S.createElement(NS,{error:n},a):a}};ob.contextType=tb;var Qc=new WeakMap;function NS({children:n,error:a}){let{basename:i}=S.useContext(It);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let o=xS(a.digest);if(o){let u=Qc.get(a);if(u)throw u;let c=Iy(o.location,i),f=c.absoluteURL||c.to;if(hS(f))throw new Error("Invalid redirect location");if(Wy&&!Qc.get(a))if(c.isExternal||o.reloadDocument)window.location.href=f;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw Qc.set(a,m),m}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return n}function CS({routeContext:n,match:a,children:i}){let o=S.useContext(Ka);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),S.createElement(gn.Provider,{value:n},i)}function MS(n,a=[],i){let o=i?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let u=n,c=o?.errors;if(c!=null){let g=u.findIndex(b=>b.route.id&&c?.[b.route.id]!==void 0);He(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let f=!1,m=-1;if(i&&o){f=o.renderFallback;for(let g=0;g<u.length;g++){let b=u[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=g),b.route.id){let{loaderData:_,errors:A}=o,N=b.route.loader&&!_.hasOwnProperty(b.route.id)&&(!A||A[b.route.id]===void 0);if(b.route.lazy||N){i.isStatic&&(f=!0),m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}}let h=i?.onError,p=o&&h?(g,b)=>{h(g,{location:o.location,params:o.matches?.[0]?.params??{},pattern:dS(o.matches),errorInfo:b})}:void 0;return u.reduceRight((g,b,_)=>{let A,N=!1,w=null,j=null;o&&(A=c&&b.route.id?c[b.route.id]:void 0,w=b.route.errorElement||AS,f&&(m<0&&_===0?(sb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,j=null):m===_&&(N=!0,j=b.route.hydrateFallbackElement||null)));let D=a.concat(u.slice(0,_+1)),k=()=>{let q;return A?q=w:N?q=j:b.route.Component?q=S.createElement(b.route.Component,null):b.route.element?q=b.route.element:q=g,S.createElement(CS,{match:b,routeContext:{outlet:g,matches:D,isDataRoute:o!=null},children:q})};return o&&(b.route.ErrorBoundary||b.route.errorElement||_===0)?S.createElement(ob,{location:o.location,revalidation:o.revalidation,component:w,error:A,children:k(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:p}):k()},null)}function rf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RS(n){let a=S.useContext(Ka);return He(a,rf(n)),a}function zS(n){let a=S.useContext(vs);return He(a,rf(n)),a}function DS(n){let a=S.useContext(gn);return He(a,rf(n)),a}function af(n){let a=DS(n),i=a.matches[a.matches.length-1];return He(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function OS(){return af("useRouteId")}function $S(){let n=S.useContext(nf),a=zS("useRouteError"),i=af("useRouteError");return n!==void 0?n:a.errors?.[i]}function LS(){let{router:n}=RS("useNavigate"),a=af("useNavigate"),i=S.useRef(!1);return lb(()=>{i.current=!0}),S.useCallback(async(u,c={})=>{sn(i.current,ab),i.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:a,...c}))},[n,a])}var ng={};function sb(n,a,i){!a&&!ng[n]&&(ng[n]=!0,sn(!1,i))}S.memo(US);function US({routes:n,manifest:a,future:i,state:o,isStatic:u,onError:c}){return ib(n,void 0,{manifest:a,state:o,isStatic:u,onError:c})}function Zl(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VS({basename:n="/",children:a=null,location:i,navigationType:o="POP",navigator:u,static:c=!1,useTransitions:f}){He(!gi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),h=S.useMemo(()=>({basename:m,navigator:u,static:c,useTransitions:f,future:{}}),[m,u,c,f]);typeof i=="string"&&(i=qr(i));let{pathname:p="/",search:g="",hash:b="",state:_=null,key:A="default",mask:N}=i,w=S.useMemo(()=>{let j=Ln(p,m);return j==null?null:{location:{pathname:j,search:g,hash:b,state:_,key:A,mask:N},navigationType:o}},[m,p,g,b,_,A,o,N]);return sn(w!=null,`<Router basename="${m}"> is not able to match the URL "${p}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:S.createElement(It.Provider,{value:h},S.createElement(vi.Provider,{children:a,value:w}))}function BS({children:n,location:a}){return wS(Td(n),a)}function Td(n,a=[]){let i=[];return S.Children.forEach(n,(o,u)=>{if(!S.isValidElement(o))return;let c=[...a,u];if(o.type===S.Fragment){i.push.apply(i,Td(o.props.children,c));return}He(o.type===Zl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let f={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(f.children=Td(o.props.children,c)),i.push(f)}),i}var Wo="get",Io="application/x-www-form-urlencoded";function gs(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function HS(n){return gs(n)&&n.tagName.toLowerCase()==="button"}function kS(n){return gs(n)&&n.tagName.toLowerCase()==="form"}function YS(n){return gs(n)&&n.tagName.toLowerCase()==="input"}function qS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function GS(n,a){return n.button===0&&(!a||a==="_self")&&!qS(n)}var qo=null;function XS(){if(qo===null)try{new FormData(document.createElement("form"),0),qo=!1}catch{qo=!0}return qo}var PS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zc(n){return n!=null&&!PS.has(n)?(sn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Io}"`),null):n}function KS(n,a){let i,o,u,c,f;if(kS(n)){let m=n.getAttribute("action");o=m?Ln(m,a):null,i=n.getAttribute("method")||Wo,u=Zc(n.getAttribute("enctype"))||Io,c=new FormData(n)}else if(HS(n)||YS(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(o=h?Ln(h,a):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Wo,u=Zc(n.getAttribute("formenctype"))||Zc(m.getAttribute("enctype"))||Io,c=new FormData(m,n),!XS()){let{name:p,type:g,value:b}=n;if(g==="image"){let _=p?`${p}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else p&&c.append(p,b)}}else{if(gs(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Wo,o=null,u=Io,f=n}return c&&u==="text/plain"&&(f=c,c=void 0),{action:o,method:i.toLowerCase(),encType:u,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lf(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function ub(n,a,i,o){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return i?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${o}`:u.pathname=`${u.pathname}.${o}`:u.pathname==="/"?u.pathname=`_root.${o}`:a&&Ln(u.pathname,a)==="/"?u.pathname=`${ls(a)}/_root.${o}`:u.pathname=`${ls(u.pathname)}.${o}`,u}async function QS(n,a){if(n.id in a)return a[n.id];try{let i=await import(n.module);return a[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function FS(n,a,i){let o=await Promise.all(n.map(async u=>{let c=a.routes[u.route.id];if(c){let f=await QS(c,i);return f.links?f.links():[]}return[]}));return eE(o.flat(1).filter(ZS).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function rg(n,a,i,o,u,c){let f=(h,p)=>i[p]?h.route.id!==i[p].route.id:!0,m=(h,p)=>i[p].pathname!==h.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==h.params["*"];return c==="assets"?a.filter((h,p)=>f(h,p)||m(h,p)):c==="data"?a.filter((h,p)=>{let g=o.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(f(h,p)||m(h,p))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function JS(n,a,{includeHydrateFallback:i}={}){return WS(n.map(o=>{let u=a.routes[o.route.id];if(!u)return[];let c=[u.module];return u.clientActionModule&&(c=c.concat(u.clientActionModule)),u.clientLoaderModule&&(c=c.concat(u.clientLoaderModule)),i&&u.hydrateFallbackModule&&(c=c.concat(u.hydrateFallbackModule)),u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function WS(n){return[...new Set(n)]}function IS(n){let a={},i=Object.keys(n).sort();for(let o of i)a[o]=n[o];return a}function eE(n,a){let i=new Set;return new Set(a),n.reduce((o,u)=>{let c=JSON.stringify(IS(u));return i.has(c)||(i.add(c),o.push({key:c,link:u})),o},[])}function of(){let n=S.useContext(Ka);return lf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function tE(){let n=S.useContext(vs);return lf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var sf=S.createContext(void 0);sf.displayName="FrameworkContext";function ys(){let n=S.useContext(sf);return lf(n,"You must render this element inside a <HydratedRouter> element"),n}function nE(n,a){let i=S.useContext(sf),[o,u]=S.useState(!1),[c,f]=S.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:b}=a,_=S.useRef(null);S.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let w=D=>{D.forEach(k=>{f(k.isIntersecting)})},j=new IntersectionObserver(w,{threshold:.5});return _.current&&j.observe(_.current),()=>{j.disconnect()}}},[n]),S.useEffect(()=>{if(o){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[o]);let A=()=>{u(!0)},N=()=>{u(!1),f(!1)};return i?n!=="intent"?[c,_,{}]:[c,_,{onFocus:Xl(m,A),onBlur:Xl(h,N),onMouseEnter:Xl(p,A),onMouseLeave:Xl(g,N),onTouchStart:Xl(b,A)}]:[!1,_,{}]}function Xl(n,a){return i=>{n&&n(i),i.defaultPrevented||a(i)}}function rE({page:n,...a}){let i=pS(),{nonce:o}=ys(),{router:u}=of(),c=S.useMemo(()=>Xy(u.routes,n,u.basename),[u.routes,n,u.basename]);return c?(a.nonce==null&&o&&(a={...a,nonce:o}),i?S.createElement(lE,{page:n,matches:c,...a}):S.createElement(iE,{page:n,matches:c,...a})):null}function aE(n){let{manifest:a,routeModules:i}=ys(),[o,u]=S.useState([]);return S.useEffect(()=>{let c=!1;return FS(n,a,i).then(f=>{c||u(f)}),()=>{c=!0}},[n,a,i]),o}function lE({page:n,matches:a,...i}){let o=Vn(),{future:u}=ys(),{basename:c}=of(),f=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let m=ub(n,c,u.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let g of a)typeof g.route.shouldRevalidate=="function"?h=!0:p.push(g.route.id);return h&&p.length>0&&m.searchParams.set("_routes",p.join(",")),[m.pathname+m.search]},[c,u.v8_trailingSlashAwareDataRequests,n,o,a]);return S.createElement(S.Fragment,null,f.map(m=>S.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...i})))}function iE({page:n,matches:a,...i}){let o=Vn(),{future:u,manifest:c,routeModules:f}=ys(),{basename:m}=of(),{loaderData:h,matches:p}=tE(),g=S.useMemo(()=>rg(n,a,p,c,o,"data"),[n,a,p,c,o]),b=S.useMemo(()=>rg(n,a,p,c,o,"assets"),[n,a,p,c,o]),_=S.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let w=new Set,j=!1;if(a.forEach(k=>{let q=c.routes[k.route.id];!q||!q.hasLoader||(!g.some(Z=>Z.route.id===k.route.id)&&k.route.id in h&&f[k.route.id]?.shouldRevalidate||q.hasClientLoader?j=!0:w.add(k.route.id))}),w.size===0)return[];let D=ub(n,m,u.v8_trailingSlashAwareDataRequests,"data");return j&&w.size>0&&D.searchParams.set("_routes",a.filter(k=>w.has(k.route.id)).map(k=>k.route.id).join(",")),[D.pathname+D.search]},[m,u.v8_trailingSlashAwareDataRequests,h,o,c,g,a,n,f]),A=S.useMemo(()=>JS(b,c),[b,c]),N=aE(b);return S.createElement(S.Fragment,null,_.map(w=>S.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),A.map(w=>S.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),N.map(({key:w,link:j})=>S.createElement("link",{key:w,nonce:i.nonce,...j,crossOrigin:j.crossOrigin??i.crossOrigin})))}function oE(...n){return a=>{n.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var sE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sE&&(window.__reactRouterVersion="7.18.2")}catch{}function uE({basename:n,children:a,useTransitions:i,window:o}){let u=S.useRef();u.current==null&&(u.current=k1({window:o,v5Compat:!0}));let c=u.current,[f,m]=S.useState({action:c.action,location:c.location}),h=S.useCallback(p=>{i===!1?m(p):S.startTransition(()=>m(p))},[i]);return S.useLayoutEffect(()=>c.listen(h),[c,h]),S.createElement(VS,{basename:n,children:a,location:f.location,navigationType:f.action,navigator:c,useTransitions:i})}var cb=S.forwardRef(function({onClick:a,discover:i="render",prefetch:o="none",relative:u,reloadDocument:c,replace:f,mask:m,state:h,target:p,to:g,preventScrollReset:b,viewTransition:_,defaultShouldRevalidate:A,...N},w){let{basename:j,navigator:D,useTransitions:k}=S.useContext(It),q=typeof g=="string"&&ef.test(g),Z=Iy(g,j);g=Z.to;let B=SS(g,{relative:u}),J=Vn(),Q=null;if(m){let re=tf(m,[],J.mask?J.mask.pathname:"/",!0);j!=="/"&&(re.pathname=re.pathname==="/"?j:ln([j,re.pathname])),Q=D.createHref(re)}let[E,K,le]=nE(o,N),F=mE(g,{replace:f,mask:m,state:h,target:p,preventScrollReset:b,relative:u,viewTransition:_,defaultShouldRevalidate:A,useTransitions:k});function oe(re){a&&a(re),re.defaultPrevented||F(re)}let R=!(Z.isExternal||c),W=S.createElement("a",{...N,...le,href:(R?Q:void 0)||Z.absoluteURL||B,onClick:R?oe:a,ref:oE(w,K),target:p,"data-discover":!q&&i==="render"?"true":void 0});return E&&!q?S.createElement(S.Fragment,null,W,S.createElement(rE,{page:B})):W});cb.displayName="Link";var cE=S.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:o="",end:u=!1,style:c,to:f,viewTransition:m,children:h,...p},g){let b=yi(f,{relative:p.relative}),_=Vn(),A=S.useContext(vs),{navigator:N,basename:w}=S.useContext(It),j=A!=null&&yE(b)&&m===!0,D=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,k=_.pathname,q=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(k=k.toLowerCase(),q=q?q.toLowerCase():null,D=D.toLowerCase()),q&&w&&(q=Ln(q,w)||q);const Z=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let B=k===D||!u&&k.startsWith(D)&&k.charAt(Z)==="/",J=q!=null&&(q===D||!u&&q.startsWith(D)&&q.charAt(D.length)==="/"),Q={isActive:B,isPending:J,isTransitioning:j},E=B?a:void 0,K;typeof o=="function"?K=o(Q):K=[o,B?"active":null,J?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let le=typeof c=="function"?c(Q):c;return S.createElement(cb,{...p,"aria-current":E,className:K,ref:g,style:le,to:f,viewTransition:m},typeof h=="function"?h(Q):h)});cE.displayName="NavLink";var dE=S.forwardRef(({discover:n="render",fetcherKey:a,navigate:i,reloadDocument:o,replace:u,state:c,method:f=Wo,action:m,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:_,...A},N)=>{let{useTransitions:w}=S.useContext(It),j=vE(),D=gE(m,{relative:p}),k=f.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&ef.test(m),Z=B=>{if(h&&h(B),B.defaultPrevented)return;B.preventDefault();let J=B.nativeEvent.submitter,Q=J?.getAttribute("formmethod")||f,E=()=>j(J||B.currentTarget,{fetcherKey:a,method:Q,navigate:i,replace:u,state:c,relative:p,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:_});w&&i!==!1?S.startTransition(()=>E()):E()};return S.createElement("form",{ref:N,method:k,action:D,onSubmit:o?h:Z,...A,"data-discover":!q&&n==="render"?"true":void 0})});dE.displayName="Form";function fE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function db(n){let a=S.useContext(Ka);return He(a,fE(n)),a}function mE(n,{target:a,replace:i,mask:o,state:u,preventScrollReset:c,relative:f,viewTransition:m,defaultShouldRevalidate:h,useTransitions:p}={}){let g=Gr(),b=Vn(),_=yi(n,{relative:f});return S.useCallback(A=>{if(GS(A,a)){A.preventDefault();let N=i!==void 0?i:ai(b)===ai(_),w=()=>g(n,{replace:N,mask:o,state:u,preventScrollReset:c,relative:f,viewTransition:m,defaultShouldRevalidate:h});p?S.startTransition(()=>w()):w()}},[b,g,_,i,o,u,a,n,c,f,m,h,p])}var hE=0,pE=()=>`__${String(++hE)}__`;function vE(){let{router:n}=db("useSubmit"),{basename:a}=S.useContext(It),i=OS(),o=n.fetch,u=n.navigate;return S.useCallback(async(c,f={})=>{let{action:m,method:h,encType:p,formData:g,body:b}=KS(c,a);if(f.navigate===!1){let _=f.fetcherKey||pE();await o(_,i,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||h,formEncType:f.encType||p,flushSync:f.flushSync})}else await u(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:b,formMethod:f.method||h,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[o,u,a,i])}function gE(n,{relative:a}={}){let{basename:i}=S.useContext(It),o=S.useContext(gn);He(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),c={...yi(n||".",{relative:a})},f=Vn();if(n==null){c.search=f.search;let m=new URLSearchParams(c.search),h=m.getAll("index");if(h.some(g=>g==="")){m.delete("index"),h.filter(b=>b).forEach(b=>m.append("index",b));let g=m.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&u.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ln([i,c.pathname])),ai(c)}function yE(n,{relative:a}={}){let i=S.useContext(nb);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=db("useViewTransitionState"),u=yi(n,{relative:a});if(!i.isTransitioning)return!1;let c=Ln(i.currentLocation.pathname,o)||i.currentLocation.pathname,f=Ln(i.nextLocation.pathname,o)||i.nextLocation.pathname;return as(u.pathname,f)!=null||as(u.pathname,c)!=null}var Fc={exports:{}},ct={};var ag;function bE(){if(ag)return ct;ag=1;var n=Id();function a(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal");function c(h,p,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:h,containerInfo:p,implementation:g}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(a(299));return c(h,p,null,g)},ct.flushSync=function(h){var p=f.T,g=o.p;try{if(f.T=null,o.p=2,h)return h()}finally{f.T=p,o.p=g,o.d.f()}},ct.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(h,p))},ct.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},ct.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,b=m(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?o.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:_,fetchPriority:A}):g==="script"&&o.d.X(h,{crossOrigin:b,integrity:_,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ct.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=m(p.as,p.crossOrigin);o.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(h)},ct.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,b=m(g,p.crossOrigin);o.d.L(h,g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ct.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=m(p.as,p.crossOrigin);o.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(h)},ct.requestFormReset=function(h){o.d.r(h)},ct.unstable_batchedUpdates=function(h,p){return h(p)},ct.useFormState=function(h,p,g){return f.H.useFormState(h,p,g)},ct.useFormStatus=function(){return f.H.useHostTransitionStatus()},ct.version="19.2.8",ct}var lg;function fb(){if(lg)return Fc.exports;lg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Fc.exports=bE(),Fc.exports}var xE=fb();function Xr(n,a){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&a.indexOf(o)<0&&(i[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(n);u<o.length;u++)a.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(n,o[u])&&(i[o[u]]=n[o[u]]);return i}function Jc(n,a,i,o){function u(c){return c instanceof i?c:new i(function(f){f(c)})}return new(i||(i=Promise))(function(c,f){function m(g){try{p(o.next(g))}catch(b){f(b)}}function h(g){try{p(o.throw(g))}catch(b){f(b)}}function p(g){g.done?c(g.value):u(g.value).then(m,h)}p((o=o.apply(n,a||[])).next())})}function mb(n){var a,i,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var u=n.length;for(a=0;a<u;a++)n[a]&&(i=mb(n[a]))&&(o&&(o+=" "),o+=i)}else for(i in n)n[i]&&(o&&(o+=" "),o+=i);return o}function on(){for(var n,a,i=0,o="",u=arguments.length;i<u;i++)(n=arguments[i])&&(a=mb(n))&&(o&&(o+=" "),o+=a);return o}function en(n,a){a===void 0&&(a={});var i=a.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",i==="top"&&o.firstChild?o.insertBefore(u,o.firstChild):o.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}function hb(...n){return(...a)=>{for(let i of n)typeof i=="function"&&i(...a)}}const Pr=typeof document<"u"?Be.useLayoutEffect:()=>{};function Ft(n){const a=S.useRef(null);return Pr((()=>{a.current=n}),[n]),S.useCallback(((...i)=>{const o=a.current;return o?.(...i)}),[])}function _E(n){let[a,i]=S.useState(n),o=S.useRef(null),u=Ft((()=>{if(!o.current)return;let f=o.current.next();f.done?o.current=null:a===f.value?u():i(f.value)}));Pr((()=>{o.current&&u()}));let c=Ft((f=>{o.current=f(a),u()}));return[a,c]}const wd={prefix:String(Math.round(1e10*Math.random())),current:0},ig=Be.createContext(wd),SE=Be.createContext(!1);let EE=!!(typeof window<"u"&&window.document&&window.document.createElement),Wc=new WeakMap;const TE=typeof Be.useId=="function"?function(n){let a=Be.useId(),[i]=S.useState(NE()),o=i?"react-aria":`react-aria${wd.prefix}`;return n||`${o}-${a}`}:function(n){let a=S.useContext(ig);a!==wd||EE||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=(function(u=!1){let c=S.useContext(ig),f=S.useRef(null);if(f.current===null&&!u){var m,h;let p=(h=Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||h===void 0||(m=h.ReactCurrentOwner)===null||m===void 0?void 0:m.current;if(p){let g=Wc.get(p);g==null?Wc.set(p,{id:c.current,state:p.memoizedState}):p.memoizedState!==g.state&&(c.current=g.id,Wc.delete(p))}f.current=++c.current}return f.current})(!!n),o=`react-aria${a.prefix}`;return n||`${o}-${i}`};function wE(){return!1}function jE(){return!0}function AE(n){return()=>{}}function NE(){return typeof Be.useSyncExternalStore=="function"?Be.useSyncExternalStore(AE,wE,jE):S.useContext(SE)}let Fl,CE=!!(typeof window<"u"&&window.document&&window.document.createElement),Ya=new Map;function qa(n){let[a,i]=S.useState(n),o=S.useRef(null),u=TE(a),c=S.useRef(null);if(Fl&&Fl.register(c,u),CE){const f=Ya.get(u);f&&!f.includes(o)?f.push(o):Ya.set(u,[o])}return Pr((()=>{let f=u;return()=>{Fl&&Fl.unregister(c),Ya.delete(f)}}),[u]),S.useEffect((()=>{let f=o.current;return f&&i(f),()=>{f&&(o.current=null)}})),u}function ME(n,a){if(n===a)return n;let i=Ya.get(n);if(i)return i.forEach((u=>u.current=a)),a;let o=Ya.get(a);return o?(o.forEach((u=>u.current=n)),n):a}function og(n=[]){let a=qa(),[i,o]=_E(a),u=S.useCallback((()=>{o((function*(){yield a,yield document.getElementById(a)?a:void 0}))}),[a,o]);return Pr(u,[a,u,...n]),i}typeof FinalizationRegistry<"u"&&(Fl=new FinalizationRegistry((n=>{Ya.delete(n)})));function yt(...n){let a={...n[0]};for(let i=1;i<n.length;i++){let o=n[i];for(let u in o){let c=a[u],f=o[u];typeof c=="function"&&typeof f=="function"&&u[0]==="o"&&u[1]==="n"&&u.charCodeAt(2)>=65&&u.charCodeAt(2)<=90?a[u]=hb(c,f):u!=="className"&&u!=="UNSAFE_className"||typeof c!="string"||typeof f!="string"?u==="id"&&c&&f?a.id=ME(c,f):a[u]=f!==void 0?f:c:a[u]=on(c,f)}}return a}function RE(...n){return n.length===1&&n[0]?n[0]:a=>{for(let i of n)typeof i=="function"?i(a):i!=null&&(i.current=a)}}function pb(n){const a=S.useRef(null);return S.useMemo((()=>({get current(){return a.current},set current(i){a.current=i,typeof n=="function"?n(i):n&&(n.current=i)}})),[n])}const zE=Symbol("default");function DE(n){let{className:a,style:i,children:o,defaultClassName:u,defaultChildren:c,defaultStyle:f,values:m}=n;return S.useMemo((()=>{let h,p,g;return h=typeof a=="function"?a({...m,defaultClassName:u}):a,p=typeof i=="function"?i({...m,defaultStyle:f||{}}):i,g=typeof o=="function"?o({...m,defaultChildren:c}):o??c,{className:h??u,style:p||f?{...f,...p}:void 0,children:g??c,"data-rac":""}}),[a,i,o,u,c,f,m])}function OE(n,a){let i=S.useContext(n);if(a===null)return null;if(i&&typeof i=="object"&&"slots"in i&&i.slots){let o=a||zE;if(!i.slots[o]){let u=new Intl.ListFormat().format(Object.keys(i.slots).map((c=>`"${c}"`)));throw new Error(`${a?`Invalid slot "${a}".`:"A slot prop is required."} Valid slot names are ${u}.`)}return i.slots[o]}return i}function $E(n,a,i){let o=OE(i,n.slot)||{},{ref:u,...c}=o,f=pb(S.useMemo((()=>RE(a,u)),[a,u])),m=yt(c,n);return"style"in c&&c.style&&"style"in n&&n.style&&(typeof c.style=="function"||typeof n.style=="function"?m.style=h=>{let p=typeof c.style=="function"?c.style(h):c.style,g={...h.defaultStyle,...p},b=typeof n.style=="function"?n.style({...h,defaultStyle:g}):n.style;return{...g,...b}}:m.style={...c.style,...n.style}),[m,f]}var sg={shadow:"elevation-module_shadow__Vsh7b",disabled:"elevation-module_disabled__La41s"};en(`.elevation-module_shadow__Vsh7b {\r 
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
`);const uf=n=>{var{disabled:a=!1}=n,i=Xr(n,["disabled"]);const o=on(sg.shadow,a&&sg.disabled);return y.jsx("span",Object.assign({},i,{"aria-hidden":"true",className:o}))};uf.displayName="Actify.Elevation";const vb=S.createContext({});function LE(n){const a=S.useRef(null);return a.current===null&&(a.current=n()),a.current}const cf=typeof window<"u",UE=cf?S.useLayoutEffect:S.useEffect,df=S.createContext(null),gb=S.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function VE(n=!0){const a=S.useContext(df);if(a===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:u}=a,c=S.useId();S.useEffect((()=>{if(n)return u(c)}),[n]);const f=S.useCallback((()=>n&&o&&o(c)),[c,o,n]);return!i&&o?[!1,f]:[!0]}function BE(n){if(typeof Proxy>"u")return n;const a=new Map;return new Proxy(((...i)=>n(...i)),{get:(i,o)=>o==="create"?n:(a.has(o)||a.set(o,n(o)),a.get(o))})}function bs(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function ug(n){const a=[{},{}];return n?.values.forEach(((i,o)=>{a[0][o]=i.get(),a[1][o]=i.getVelocity()})),a}function ff(n,a,i,o){if(typeof a=="function"){const[u,c]=ug(o);a=a(i!==void 0?i:n.custom,u,c)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,c]=ug(o);a=a(i!==void 0?i:n.custom,u,c)}return a}function li(n,a,i){const o=n.getProps();return ff(o,a,i!==void 0?i:o.custom,n)}function mf(n,a){return n?.[a]??n?.default??n}const Wt=n=>n,Go=["read","resolveKeyframes","update","preRender","render","postRender"],cg={value:null};function HE(n,a){let i=new Set,o=new Set,u=!1,c=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1},h=0;function p(b){f.has(b)&&(g.schedule(b),n()),h++,b(m)}const g={schedule:(b,_=!1,A=!1)=>{const N=A&&u?i:o;return _&&f.add(b),N.has(b)||N.add(b),b},cancel:b=>{o.delete(b),f.delete(b)},process:b=>{m=b,u?c=!0:(u=!0,[i,o]=[o,i],i.forEach(p),a&&cg.value&&cg.value.frameloop[a].push(h),h=0,i.clear(),u=!1,c&&(c=!1,g.process(b)))}};return g}function yb(n,a){let i=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,f=Go.reduce(((N,w)=>(N[w]=HE(c,a?w:void 0),N)),{}),{read:m,resolveKeyframes:h,update:p,preRender:g,render:b,postRender:_}=f,A=()=>{const N=performance.now();i=!1,u.delta=o?1e3/60:Math.max(Math.min(N-u.timestamp,40),1),u.timestamp=N,u.isProcessing=!0,m.process(u),h.process(u),p.process(u),g.process(u),b.process(u),_.process(u),u.isProcessing=!1,i&&a&&(o=!1,n(A))};return{schedule:Go.reduce(((N,w)=>{const j=f[w];return N[w]=(D,k=!1,q=!1)=>(i||(i=!0,o=!0,u.isProcessing||n(A)),j.schedule(D,k,q)),N}),{}),cancel:N=>{for(let w=0;w<Go.length;w++)f[Go[w]].cancel(N)},state:u,steps:f}}const{schedule:De,cancel:mr,state:ut,steps:Ic}=yb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wt,!0),Qa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kr=new Set(Qa),bb=new Set(["width","height","top","left","right","bottom",...Qa]);function hf(n,a){n.indexOf(a)===-1&&n.push(a)}function pf(n,a){const i=n.indexOf(a);i>-1&&n.splice(i,1)}let vf=class{constructor(){this.subscriptions=[]}add(a){return hf(this.subscriptions,a),()=>pf(this.subscriptions,a)}notify(a,i,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,i,o);else for(let c=0;c<u;c++){const f=this.subscriptions[c];f&&f(a,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}};function xb(n,a){return a?n*(1e3/a):0}const kE={useManualTiming:!1};let es;function YE(){es=void 0}const mn={now:()=>(es===void 0&&mn.set(ut.isProcessing||kE.useManualTiming?ut.timestamp:performance.now()),es),set:n=>{es=n,queueMicrotask(YE)}};let qE=class{constructor(a,i={}){this.version="12.6.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,u=!0)=>{const c=mn.now();this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(a),this.owner=i.owner}setCurrent(a){var i;this.current=a,this.updatedAt=mn.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=(i=this.current,!isNaN(parseFloat(i))))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,i){this.events[a]||(this.events[a]=new vf);const o=this.events[a].add(i);return a==="change"?()=>{o(),De.read((()=>{this.events.change.getSize()||this.stop()}))}:o}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,i){this.passiveEffect=a,this.stopPassiveEffect=i}set(a,i=!0){i&&this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a,i)}setWithVelocity(a,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-o}jump(a,i=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=mn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>30)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return xb(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(a){return this.stop(),new Promise((i=>{this.hasAnimated=!0,this.animation=a(i),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ii(n,a){return new qE(n,a)}const jd=n=>Array.isArray(n),GE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),XE=n=>jd(n)?n[n.length-1]||0:n;function PE(n,a,i){n.hasValue(a)?n.getValue(a).set(i):n.addValue(a,ii(i))}function KE(n,a){const i=li(n,a);let{transitionEnd:o={},transition:u={},...c}=i||{};c={...c,...o};for(const f in c)PE(n,f,XE(c[f]))}const ft=n=>!!(n&&n.getVelocity);function QE(n){return!!(ft(n)&&n.add)}function Ad(n,a){const i=n.getValue("willChange");if(QE(i))return i.add(a)}const gf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ZE="framerAppearId",_b="data-"+gf(ZE);function Sb(n){return n.props[_b]}const hn=n=>1e3*n,pn=n=>n/1e3;function yf(n){let a;return()=>(a===void 0&&(a=n()),a)}const FE=yf((()=>window.ScrollTimeline!==void 0));let JE=class{constructor(a){this.stop=()=>this.runAll("stop"),this.animations=a.filter(Boolean)}get finished(){return Promise.all(this.animations.map((a=>a.finished)))}getAll(a){return this.animations[0][a]}setAll(a,i){for(let o=0;o<this.animations.length;o++)this.animations[o][a]=i}attachTimeline(a,i){const o=this.animations.map((u=>FE()&&u.attachTimeline?u.attachTimeline(a):typeof i=="function"?i(u):void 0));return()=>{o.forEach(((u,c)=>{u&&u(),this.animations[c].stop()}))}}get time(){return this.getAll("time")}set time(a){this.setAll("time",a)}get speed(){return this.getAll("speed")}set speed(a){this.setAll("speed",a)}get startTime(){return this.getAll("startTime")}get duration(){let a=0;for(let i=0;i<this.animations.length;i++)a=Math.max(a,this.animations[i].duration);return a}runAll(a){this.animations.forEach((i=>i[a]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}},WE=class extends JE{then(a,i){return this.finished.finally(a).then((()=>{}))}};const bf=n=>Array.isArray(n)&&typeof n[0]=="number",IE={};function e2(n,a){const i=yf(n);return()=>IE[a]??i()}const oi=e2((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}),"linearEasing"),Eb=(n,a,i=10)=>{let o="";const u=Math.max(Math.round(a/i),2);for(let c=0;c<u;c++)o+=n(c/(u-1))+", ";return`linear(${o.substring(0,o.length-2)})`},Jl=([n,a,i,o])=>`cubic-bezier(${n}, ${a}, ${i}, ${o})`,Nd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Jl([0,.65,.55,1]),circOut:Jl([.55,0,1,.45]),backIn:Jl([.31,.01,.66,-.59]),backOut:Jl([.33,1.53,.69,.99])};function Tb(n,a){return n?typeof n=="function"&&oi()?Eb(n,a):bf(n)?Jl(n):Array.isArray(n)?n.map((i=>Tb(i,a)||Nd.easeOut)):Nd[n]:void 0}function t2(n,a,i,{delay:o=0,duration:u=300,repeat:c=0,repeatType:f="loop",ease:m="easeInOut",times:h}={},p=void 0){const g={[a]:i};h&&(g.offset=h);const b=Tb(m,u);return Array.isArray(b)&&(g.easing=b),n.animate(g,{delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:c+1,direction:f==="reverse"?"alternate":"normal",pseudoElement:p})}function xf(n){return typeof n=="function"&&"applyToOptions"in n}function wb(n){return!!(typeof n=="function"&&oi()||!n||typeof n=="string"&&(n in Nd||oi())||bf(n)||Array.isArray(n)&&n.every(wb))}function dg(n,a){n.timeline=a,n.onfinish=null}const fg=(n,a,i)=>(((1-3*i+3*a)*n+(3*i-6*a))*n+3*a)*n;function Za(n,a,i,o){if(n===a&&i===o)return Wt;const u=c=>(function(f,m,h,p,g){let b,_,A=0;do _=m+(h-m)/2,b=fg(_,p,g)-f,b>0?h=_:m=_;while(Math.abs(b)>1e-7&&++A<12);return _})(c,0,1,n,i);return c=>c===0||c===1?c:fg(u(c),a,o)}const jb=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,Ab=n=>a=>1-n(1-a),Nb=Za(.33,1.53,.69,.99),_f=Ab(Nb),Cb=jb(_f),Mb=n=>(n*=2)<1?.5*_f(n):.5*(2-Math.pow(2,-10*(n-1))),Sf=n=>1-Math.sin(Math.acos(n)),Rb=Ab(Sf),zb=jb(Sf),Db=n=>/^0[^.\s]+$/u.test(n);function n2(n){return typeof n=="number"?n===0:n===null||n==="none"||n==="0"||Db(n)}const Un=(n,a,i)=>i>a?a:i<n?n:i,Fa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},si={...Fa,transform:n=>Un(0,1,n)},Xo={...Fa,default:1},Il=n=>Math.round(1e5*n)/1e5,Ef=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function r2(n){return n==null}const a2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Tf=(n,a)=>i=>!!(typeof i=="string"&&a2.test(i)&&i.startsWith(n)||a&&!r2(i)&&Object.prototype.hasOwnProperty.call(i,a)),Ob=(n,a,i)=>o=>{if(typeof o!="string")return o;const[u,c,f,m]=o.match(Ef);return{[n]:parseFloat(u),[a]:parseFloat(c),[i]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},ed={...Fa,transform:n=>Math.round((a=>Un(0,255,a))(n))},Br={test:Tf("rgb","red"),parse:Ob("red","green","blue"),transform:({red:n,green:a,blue:i,alpha:o=1})=>"rgba("+ed.transform(n)+", "+ed.transform(a)+", "+ed.transform(i)+", "+Il(si.transform(o))+")"},Cd={test:Tf("#"),parse:function(n){let a="",i="",o="",u="";return n.length>5?(a=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),a+=a,i+=i,o+=o,u+=u),{red:parseInt(a,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}},transform:Br.transform},bi=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),fr=bi("deg"),vn=bi("%"),ue=bi("px"),l2=bi("vh"),i2=bi("vw"),mg={...vn,parse:n=>vn.parse(n)/100,transform:n=>vn.transform(100*n)},$a={test:Tf("hsl","hue"),parse:Ob("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+vn.transform(Il(a))+", "+vn.transform(Il(i))+", "+Il(si.transform(o))+")"},dt={test:n=>Br.test(n)||Cd.test(n)||$a.test(n),parse:n=>Br.test(n)?Br.parse(n):$a.test(n)?$a.parse(n):Cd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Br.transform(n):$a.transform(n)},o2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,$b="number",Lb="color",s2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ui(n){const a=n.toString(),i=[],o={color:[],number:[],var:[]},u=[];let c=0;const f=a.replace(s2,(m=>(dt.test(m)?(o.color.push(c),u.push(Lb),i.push(dt.parse(m))):m.startsWith("var(")?(o.var.push(c),u.push("var"),i.push(m)):(o.number.push(c),u.push($b),i.push(parseFloat(m))),++c,"${}"))).split("${}");return{values:i,split:f,indexes:o,types:u}}function hg(n){return ui(n).values}function pg(n){const{split:a,types:i}=ui(n),o=a.length;return u=>{let c="";for(let f=0;f<o;f++)if(c+=a[f],u[f]!==void 0){const m=i[f];c+=m===$b?Il(u[f]):m===Lb?dt.transform(u[f]):u[f]}return c}}const u2=n=>typeof n=="number"?0:n,hr={test:function(n){return isNaN(n)&&typeof n=="string"&&(n.match(Ef)?.length||0)+(n.match(o2)?.length||0)>0},parse:hg,createTransformer:pg,getAnimatableNone:function(n){const a=hg(n);return pg(n)(a.map(u2))}},c2=new Set(["brightness","contrast","saturate","opacity"]);function d2(n){const[a,i]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[o]=i.match(Ef)||[];if(!o)return n;const u=i.replace(o,"");let c=c2.has(a)?1:0;return o!==i&&(c*=100),a+"("+c+u+")"}const f2=/\b([a-z-]*)\(.*?\)/gu,Md={...hr,getAnimatableNone:n=>{const a=n.match(f2);return a?a.map(d2).join(" "):n}},m2={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,radius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,backgroundPositionX:ue,backgroundPositionY:ue},h2={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:Xo,scaleX:Xo,scaleY:Xo,scaleZ:Xo,skew:fr,skewX:fr,skewY:fr,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:si,originX:mg,originY:mg,originZ:ue},vg={...Fa,transform:Math.round},wf={...m2,...h2,zIndex:vg,size:ue,fillOpacity:si,strokeOpacity:si,numOctaves:vg},p2={...wf,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:Md,WebkitFilter:Md},Ub=n=>p2[n];function Vb(n,a){let i=Ub(n);return i!==Md&&(i=hr),i.getAnimatableNone?i.getAnimatableNone(a):void 0}const v2=new Set(["auto","none","0"]);function g2(n,a,i){let o,u=0;for(;u<n.length&&!o;){const c=n[u];typeof c=="string"&&!v2.has(c)&&ui(c).values.length&&(o=n[u]),u++}if(o&&i)for(const c of a)n[c]=Vb(i,o)}const Hr=n=>180*n/Math.PI,is=n=>{const a=Hr(Math.atan2(n[1],n[0]));return Rd(a)},y2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:is,rotateZ:is,skewX:n=>Hr(Math.atan(n[1])),skewY:n=>Hr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Rd=n=>((n%=360)<0&&(n+=360),n),gg=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),yg=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),b2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gg,scaleY:yg,scale:n=>(gg(n)+yg(n))/2,rotateX:n=>Rd(Hr(Math.atan2(n[6],n[5]))),rotateY:n=>Rd(Hr(Math.atan2(-n[2],n[0]))),rotateZ:is,rotate:is,skewX:n=>Hr(Math.atan(n[4])),skewY:n=>Hr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function bg(n){return n.includes("scale")?1:0}function zd(n,a){if(!n||n==="none")return bg(a);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(i)o=b2,u=i;else{const m=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=y2,u=m}if(!u)return bg(a);const c=o[a],f=u[1].split(",").map(_2);return typeof c=="function"?c(f):f[c]}const x2=(n,a)=>{const{transform:i="none"}=getComputedStyle(n);return zd(i,a)};function _2(n){return parseFloat(n.trim())}const xg=n=>n===Fa||n===ue,S2=new Set(["x","y","z"]),E2=Qa.filter((n=>!S2.has(n)));function T2(n){const a=[];return E2.forEach((i=>{const o=n.getValue(i);o!==void 0&&(a.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))})),a}const La={width:({x:n},{paddingLeft:a="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),height:({y:n},{paddingTop:a="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(a)-parseFloat(i),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>zd(a,"x"),y:(n,{transform:a})=>zd(a,"y")};La.translateX=La.x,La.translateY=La.y;const kr=new Set;let Dd=!1,Od=!1;function Bb(){if(Od){const n=Array.from(kr).filter((o=>o.needsMeasurement)),a=new Set(n.map((o=>o.element))),i=new Map;a.forEach((o=>{const u=T2(o);u.length&&(i.set(o,u),o.render())})),n.forEach((o=>o.measureInitialState())),a.forEach((o=>{o.render();const u=i.get(o);u&&u.forEach((([c,f])=>{o.getValue(c)?.set(f)}))})),n.forEach((o=>o.measureEndState())),n.forEach((o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)}))}Od=!1,Dd=!1,kr.forEach((n=>n.complete())),kr.clear()}function Hb(){kr.forEach((n=>{n.readKeyframes(),n.needsMeasurement&&(Od=!0)}))}function w2(){Hb(),Bb()}let jf=class{constructor(a,i,o,u,c,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...a],this.onComplete=i,this.name=o,this.motionValue=u,this.element=c,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(kr.add(this),Dd||(Dd=!0,De.read(Hb),De.resolveKeyframes(Bb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:i,element:o,motionValue:u}=this;for(let c=0;c<a.length;c++)if(a[c]===null)if(c===0){const f=u?.get(),m=a[a.length-1];if(f!==void 0)a[0]=f;else if(o&&i){const h=o.readValue(i,m);h!=null&&(a[0]=h)}a[0]===void 0&&(a[0]=m),u&&f===void 0&&u.set(a[0])}else a[c]=a[c-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),kr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,kr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}},kb=()=>{};const Yb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),qb=n=>a=>typeof a=="string"&&a.startsWith(n),Af=qb("--"),j2=qb("var(--"),Nf=n=>!!j2(n)&&A2.test(n.split("/*")[0].trim()),A2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,N2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function C2(n){const a=N2.exec(n);if(!a)return[,];const[,i,o,u]=a;return[`--${i??o}`,u]}function Gb(n,a,i=1){const[o,u]=C2(n);if(!o)return;const c=window.getComputedStyle(a).getPropertyValue(o);if(c){const f=c.trim();return Yb(f)?parseFloat(f):f}return Nf(u)?Gb(u,a,i+1):u}const Xb=n=>a=>a.test(n),M2={test:n=>n==="auto",parse:n=>n},Pb=[Fa,ue,vn,fr,i2,l2,M2],_g=n=>Pb.find(Xb(n));let Kb=class extends jf{constructor(a,i,o,u,c){super(a,i,o,u,c,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let h=0;h<a.length;h++){let p=a[h];if(typeof p=="string"&&(p=p.trim(),Nf(p))){const g=Gb(p,i.current);g!==void 0&&(a[h]=g),h===a.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!bb.has(o)||a.length!==2)return;const[u,c]=a,f=_g(u),m=_g(c);if(f!==m)if(xg(f)&&xg(m))for(let h=0;h<a.length;h++){const p=a[h];typeof p=="string"&&(a[h]=parseFloat(p))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:i}=this,o=[];for(let u=0;u<a.length;u++)n2(a[u])&&o.push(u);o.length&&g2(a,o,i)}measureInitialState(){const{element:a,unresolvedKeyframes:i,name:o}=this;if(!a||!a.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=La[o](a.measureViewportBox(),window.getComputedStyle(a.current)),i[0]=this.measuredOrigin;const u=i[i.length-1];u!==void 0&&a.getValue(o,u).jump(u,!1)}measureEndState(){const{element:a,name:i,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const u=a.getValue(i);u&&u.jump(this.measuredOrigin,!1);const c=o.length-1,f=o[c];o[c]=La[i](a.measureViewportBox(),window.getComputedStyle(a.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach((([m,h])=>{a.getValue(m).set(h)})),this.resolveNoneKeyframes()}};const Sg=(n,a)=>a!=="zIndex"&&(!(typeof n!="number"&&!Array.isArray(n))||!(typeof n!="string"||!hr.test(n)&&n!=="0"||n.startsWith("url(")));function R2(n,a,i,o){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const c=n[n.length-1],f=Sg(u,a),m=Sg(c,a);return!(!f||!m)&&((function(h){const p=h[0];if(h.length===1)return!0;for(let g=0;g<h.length;g++)if(h[g]!==p)return!0})(n)||(i==="spring"||xf(i))&&o)}const z2=n=>n!==null;function xs(n,{repeat:a,repeatType:i="loop"},o){const u=n.filter(z2),c=a&&i!=="loop"&&a%2==1?0:u.length-1;return c&&o!==void 0?o:u[c]}let Qb=class{constructor({autoplay:a=!0,delay:i=0,type:o="keyframes",repeat:u=0,repeatDelay:c=0,repeatType:f="loop",...m}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=mn.now(),this.options={autoplay:a,delay:i,type:o,repeat:u,repeatDelay:c,repeatType:f,...m},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||w2(),this._resolved}onKeyframesResolved(a,i){this.resolvedAt=mn.now(),this.hasAttemptedResolve=!0;const{name:o,type:u,velocity:c,delay:f,onComplete:m,onUpdate:h,isGenerator:p}=this.options;if(!p&&!R2(a,o,u,c)){if(!f)return h&&h(xs(a,this.options,i)),m&&m(),void this.resolveFinishedPromise();this.options.duration=0}const g=this.initPlayback(a,i);g!==!1&&(this._resolved={keyframes:a,finalKeyframe:i,...g},this.onPostResolved())}onPostResolved(){}then(a,i){return this.currentFinishedPromise.then(a,i)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((a=>{this.resolveFinishedPromise=a}))}};const os=2e4;function Cf(n){let a=0,i=n.next(a);for(;!i.done&&a<os;)a+=50,i=n.next(a);return a>=os?1/0:a}const Ve=(n,a,i)=>n+(a-n)*i;function td(n,a,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+6*(a-n)*i:i<.5?a:i<2/3?n+(a-n)*(2/3-i)*6:n}function D2({hue:n,saturation:a,lightness:i,alpha:o}){n/=360,i/=100;let u=0,c=0,f=0;if(a/=100){const m=i<.5?i*(1+a):i+a-i*a,h=2*i-m;u=td(h,m,n+1/3),c=td(h,m,n),f=td(h,m,n-1/3)}else u=c=f=i;return{red:Math.round(255*u),green:Math.round(255*c),blue:Math.round(255*f),alpha:o}}function ss(n,a){return i=>i>0?a:n}const nd=(n,a,i)=>{const o=n*n,u=i*(a*a-o)+o;return u<0?0:Math.sqrt(u)},O2=[Cd,Br,$a];function Eg(n){const a=(i=n,O2.find((u=>u.test(i))));var i;if(!a)return!1;let o=a.parse(n);return a===$a&&(o=D2(o)),o}const Tg=(n,a)=>{const i=Eg(n),o=Eg(a);if(!i||!o)return ss(n,a);const u={...i};return c=>(u.red=nd(i.red,o.red,c),u.green=nd(i.green,o.green,c),u.blue=nd(i.blue,o.blue,c),u.alpha=Ve(i.alpha,o.alpha,c),Br.transform(u))},$2=(n,a)=>i=>a(n(i)),xi=(...n)=>n.reduce($2),$d=new Set(["none","hidden"]);function L2(n,a){return $d.has(n)?i=>i<=0?n:a:i=>i>=1?a:n}function U2(n,a){return i=>Ve(n,a,i)}function Mf(n){return typeof n=="number"?U2:typeof n=="string"?Nf(n)?ss:dt.test(n)?Tg:B2:Array.isArray(n)?Zb:typeof n=="object"?dt.test(n)?Tg:V2:ss}function Zb(n,a){const i=[...n],o=i.length,u=n.map(((c,f)=>Mf(c)(c,a[f])));return c=>{for(let f=0;f<o;f++)i[f]=u[f](c);return i}}function V2(n,a){const i={...n,...a},o={};for(const u in i)n[u]!==void 0&&a[u]!==void 0&&(o[u]=Mf(n[u])(n[u],a[u]));return u=>{for(const c in o)i[c]=o[c](u);return i}}const B2=(n,a)=>{const i=hr.createTransformer(a),o=ui(n),u=ui(a);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?$d.has(n)&&!u.values.length||$d.has(a)&&!o.values.length?L2(n,a):xi(Zb((function(c,f){const m=[],h={color:0,var:0,number:0};for(let p=0;p<f.values.length;p++){const g=f.types[p],b=c.indexes[g][h[g]],_=c.values[b]??0;m[p]=_,h[g]++}return m})(o,u),u.values),i):ss(n,a)};function Fb(n,a,i){return typeof n=="number"&&typeof a=="number"&&typeof i=="number"?Ve(n,a,i):Mf(n)(n,a)}function H2(n,a=100,i){const o=i({...n,keyframes:[0,a]}),u=Math.min(Cf(o),os);return{type:"keyframes",ease:c=>o.next(u*c).value/a,duration:pn(u)}}function Jb(n,a,i){const o=Math.max(a-5,0);return xb(i-n(o),a-o)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wg=.001;function k2({duration:n=Ge.duration,bounce:a=Ge.bounce,velocity:i=Ge.velocity,mass:o=Ge.mass}){let u,c,f=1-a;f=Un(Ge.minDamping,Ge.maxDamping,f),n=Un(Ge.minDuration,Ge.maxDuration,pn(n)),f<1?(u=h=>{const p=h*f,g=p*n,b=p-i,_=Ld(h,f),A=Math.exp(-g);return wg-b/_*A},c=h=>{const p=h*f*n,g=p*i+i,b=Math.pow(f,2)*Math.pow(h,2)*n,_=Math.exp(-p),A=Ld(Math.pow(h,2),f);return(-u(h)+wg>0?-1:1)*((g-b)*_)/A}):(u=h=>Math.exp(-h*n)*((h-i)*n+1)-.001,c=h=>Math.exp(-h*n)*(n*n*(i-h)));const m=(function(h,p,g){let b=g;for(let _=1;_<Y2;_++)b-=h(b)/p(b);return b})(u,c,5/n);if(n=hn(n),isNaN(m))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:n};{const h=Math.pow(m,2)*o;return{stiffness:h,damping:2*f*Math.sqrt(o*h),duration:n}}}const Y2=12;function Ld(n,a){return n*Math.sqrt(1-a*a)}const q2=["duration","bounce"],G2=["stiffness","damping","mass"];function jg(n,a){return a.some((i=>n[i]!==void 0))}function us(n=Ge.visualDuration,a=Ge.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:o,restDelta:u}=i;const c=i.keyframes[0],f=i.keyframes[i.keyframes.length-1],m={done:!1,value:c},{stiffness:h,damping:p,mass:g,duration:b,velocity:_,isResolvedFromDuration:A}=(function(B){let J={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...B};if(!jg(B,G2)&&jg(B,q2))if(B.visualDuration){const Q=B.visualDuration,E=2*Math.PI/(1.2*Q),K=E*E,le=2*Un(.05,1,1-(B.bounce||0))*Math.sqrt(K);J={...J,mass:Ge.mass,stiffness:K,damping:le}}else{const Q=k2(B);J={...J,...Q,mass:Ge.mass},J.isResolvedFromDuration=!0}return J})({...i,velocity:-pn(i.velocity||0)}),N=_||0,w=p/(2*Math.sqrt(h*g)),j=f-c,D=pn(Math.sqrt(h/g)),k=Math.abs(j)<5;let q;if(o||(o=k?Ge.restSpeed.granular:Ge.restSpeed.default),u||(u=k?Ge.restDelta.granular:Ge.restDelta.default),w<1){const B=Ld(D,w);q=J=>{const Q=Math.exp(-w*D*J);return f-Q*((N+w*D*j)/B*Math.sin(B*J)+j*Math.cos(B*J))}}else if(w===1)q=B=>f-Math.exp(-D*B)*(j+(N+D*j)*B);else{const B=D*Math.sqrt(w*w-1);q=J=>{const Q=Math.exp(-w*D*J),E=Math.min(B*J,300);return f-Q*((N+w*D*j)*Math.sinh(E)+B*j*Math.cosh(E))/B}}const Z={calculatedDuration:A&&b||null,next:B=>{const J=q(B);if(A)m.done=B>=b;else{let Q=0;w<1&&(Q=B===0?hn(N):Jb(q,B,J));const E=Math.abs(Q)<=o,K=Math.abs(f-J)<=u;m.done=E&&K}return m.value=m.done?f:J,m},toString:()=>{const B=Math.min(Cf(Z),os),J=Eb((Q=>Z.next(B*Q).value),B,30);return B+"ms "+J},toTransition:()=>{}};return Z}us.applyToOptions=n=>{const a=H2(n,100,us);return n.ease=oi()?a.ease:"easeOut",n.duration=hn(a.duration),n.type="keyframes",n};function Ag({keyframes:n,velocity:a=0,power:i=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:c=500,modifyTarget:f,min:m,max:h,restDelta:p=.5,restSpeed:g}){const b=n[0],_={done:!1,value:b},A=Q=>m===void 0?h:h===void 0||Math.abs(m-Q)<Math.abs(h-Q)?m:h;let N=i*a;const w=b+N,j=f===void 0?w:f(w);j!==w&&(N=j-b);const D=Q=>-N*Math.exp(-Q/o),k=Q=>j+D(Q),q=Q=>{const E=D(Q),K=k(Q);_.done=Math.abs(E)<=p,_.value=_.done?j:K};let Z,B;const J=Q=>{var E;E=_.value,(m!==void 0&&E<m||h!==void 0&&E>h)&&(Z=Q,B=us({keyframes:[_.value,A(_.value)],velocity:Jb(k,Q,_.value),damping:u,stiffness:c,restDelta:p,restSpeed:g}))};return J(0),{calculatedDuration:null,next:Q=>{let E=!1;return B||Z!==void 0||(E=!0,q(Q),J(Q)),Z!==void 0&&Q>=Z?B.next(Q-Z):(!E&&q(Q),_)}}}const X2=Za(.42,0,1,1),P2=Za(0,0,.58,1),Wb=Za(.42,0,.58,1),K2=n=>Array.isArray(n)&&typeof n[0]!="number",Q2={linear:Wt,easeIn:X2,easeInOut:Wb,easeOut:P2,circIn:Sf,circInOut:zb,circOut:Rb,backIn:_f,backInOut:Cb,backOut:Nb,anticipate:Mb},Ng=n=>{if(bf(n)){kb(n.length===4);const[a,i,o,u]=n;return Za(a,i,o,u)}return typeof n=="string"?Q2[n]:n},ci=(n,a,i)=>{const o=a-n;return o===0?1:(i-n)/o};function Z2(n,a,{clamp:i=!0,ease:o,mixer:u}={}){const c=n.length;if(kb(c===a.length),c===1)return()=>a[0];if(c===2&&a[0]===a[1])return()=>a[1];const f=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),a=[...a].reverse());const m=(function(g,b,_){const A=[],N=_||Fb,w=g.length-1;for(let j=0;j<w;j++){let D=N(g[j],g[j+1]);if(b){const k=Array.isArray(b)?b[j]||Wt:b;D=xi(k,D)}A.push(D)}return A})(a,o,u),h=m.length,p=g=>{if(f&&g<n[0])return a[0];let b=0;if(h>1)for(;b<n.length-2&&!(g<n[b+1]);b++);const _=ci(n[b],n[b+1],g);return m[b](_)};return i?g=>p(Un(n[0],n[c-1],g)):p}function F2(n,a){const i=n[n.length-1];for(let o=1;o<=a;o++){const u=ci(0,a,o);n.push(Ve(i,1,u))}}function J2(n){const a=[0];return F2(a,n.length-1),a}function W2(n,a){return n.map((i=>i*a))}function I2(n,a){return n.map((()=>a||Wb)).splice(0,n.length-1)}function cs({duration:n=300,keyframes:a,times:i,ease:o="easeInOut"}){const u=K2(o)?o.map(Ng):Ng(o),c={done:!1,value:a[0]},f=W2(i&&i.length===a.length?i:J2(a),n),m=Z2(f,a,{ease:Array.isArray(u)?u:I2(a,u)});return{calculatedDuration:n,next:h=>(c.value=m(h),c.done=h>=n,c)}}const eT=n=>{const a=({timestamp:i})=>n(i);return{start:()=>De.update(a,!0),stop:()=>mr(a),now:()=>ut.isProcessing?ut.timestamp:mn.now()}},tT={decay:Ag,inertia:Ag,tween:cs,keyframes:cs,spring:us},nT=n=>n/100;let Ud=class extends Qb{constructor(a){super(a),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:i,motionValue:o,element:u,keyframes:c}=this.options,f=u?.KeyframeResolver||jf;this.resolver=new f(c,((m,h)=>this.onKeyframesResolved(m,h)),i,o,u),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(a){const{type:i="keyframes",repeat:o=0,repeatDelay:u=0,repeatType:c,velocity:f=0}=this.options,m=xf(i)?i:tT[i]||cs;let h,p;m!==cs&&typeof a[0]!="number"&&(h=xi(nT,Fb(a[0],a[1])),a=[0,100]);const g=m({...this.options,keyframes:a});c==="mirror"&&(p=m({...this.options,keyframes:[...a].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=Cf(g));const{calculatedDuration:b}=g,_=b+u;return{generator:g,mirroredGenerator:p,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:_,totalDuration:_*(o+1)-u}}onPostResolved(){const{autoplay:a=!0}=this.options;this.play(),this.pendingPlayState!=="paused"&&a?this.state=this.pendingPlayState:this.pause()}tick(a,i=!1){const{resolved:o}=this;if(!o){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:u,generator:c,mirroredGenerator:f,mapPercentToKeyframes:m,keyframes:h,calculatedDuration:p,totalDuration:g,resolvedDuration:b}=o;if(this.startTime===null)return c.next(0);const{delay:_,repeat:A,repeatType:N,repeatDelay:w,onUpdate:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-g/this.speed,this.startTime)),i?this.currentTime=a:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(a-this.startTime)*this.speed;const D=this.currentTime-_*(this.speed>=0?1:-1),k=this.speed>=0?D<0:D>g;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let q=this.currentTime,Z=c;if(A){const E=Math.min(this.currentTime,g)/b;let K=Math.floor(E),le=E%1;!le&&E>=1&&(le=1),le===1&&K--,K=Math.min(K,A+1),K%2&&(N==="reverse"?(le=1-le,w&&(le-=w/b)):N==="mirror"&&(Z=f)),q=Un(0,1,le)*b}const B=k?{done:!1,value:h[0]}:Z.next(q);m&&(B.value=m(B.value));let{done:J}=B;k||p===null||(J=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const Q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return Q&&u!==void 0&&(B.value=xs(h,this.options,u)),j&&j(B.value),Q&&this.finish(),B}get duration(){const{resolved:a}=this;return a?pn(a.calculatedDuration):0}get time(){return pn(this.currentTime)}set time(a){a=hn(a),this.currentTime=a,this.holdTime!==null||this.speed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.speed)}get speed(){return this.playbackSpeed}set speed(a){const i=this.playbackSpeed!==a;this.playbackSpeed=a,i&&(this.time=pn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:a=eT,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=a((c=>this.tick(c)))),i&&i();const u=this.driver.now();this.holdTime!==null?this.startTime=u-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=u):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:a}=this.options;a&&a()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}get finished(){return this.currentFinishedPromise}};const rT=new Set(["opacity","clipPath","filter","transform"]),aT=yf((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Cg={anticipate:Mb,backInOut:Cb,circInOut:zb};let Mg=class extends Qb{constructor(a){super(a);const{name:i,motionValue:o,element:u,keyframes:c}=this.options;this.resolver=new Kb(c,((f,m)=>this.onKeyframesResolved(f,m)),i,o,u),this.resolver.scheduleResolve()}initPlayback(a,i){let{duration:o=300,times:u,ease:c,type:f,motionValue:m,name:h,startTime:p}=this.options;if(!m.owner||!m.owner.current)return!1;var g;if(typeof c=="string"&&oi()&&c in Cg&&(c=Cg[c]),g=this.options,xf(g.type)||g.type==="spring"||!wb(g.ease)){const{onComplete:_,onUpdate:A,motionValue:N,element:w,...j}=this.options,D=(function(k,q){const Z=new Ud({...q,keyframes:k,repeat:0,delay:0,isGenerator:!0});let B={done:!1,value:k[0]};const J=[];let Q=0;for(;!B.done&&Q<2e4;)B=Z.sample(Q),J.push(B.value),Q+=10;return{times:void 0,keyframes:J,duration:Q-10,ease:"linear"}})(a,j);(a=D.keyframes).length===1&&(a[1]=a[0]),o=D.duration,u=D.times,c=D.ease,f="keyframes"}const b=t2(m.owner.current,h,a,{...this.options,duration:o,times:u,ease:c});return b.startTime=p??this.calcStartTime(),this.pendingTimeline?(dg(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:_}=this.options;m.set(xs(a,this.options,i)),_&&_(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:o,times:u,type:f,ease:c,keyframes:a}}get duration(){const{resolved:a}=this;if(!a)return 0;const{duration:i}=a;return pn(i)}get time(){const{resolved:a}=this;if(!a)return 0;const{animation:i}=a;return pn(i.currentTime||0)}set time(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=hn(a)}get speed(){const{resolved:a}=this;if(!a)return 1;const{animation:i}=a;return i.playbackRate}get finished(){return this.resolved.animation.finished}set speed(a){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=a}get state(){const{resolved:a}=this;if(!a)return"idle";const{animation:i}=a;return i.playState}get startTime(){const{resolved:a}=this;if(!a)return null;const{animation:i}=a;return i.startTime}attachTimeline(a){if(this._resolved){const{resolved:i}=this;if(!i)return Wt;const{animation:o}=i;dg(o,a)}else this.pendingTimeline=a;return Wt}play(){if(this.isStopped)return;const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:a}=this;if(!a)return;const{animation:i}=a;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:a}=this;if(!a)return;const{animation:i,keyframes:o,duration:u,type:c,ease:f,times:m}=a;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:p,onUpdate:g,onComplete:b,element:_,...A}=this.options,N=new Ud({...A,keyframes:o,duration:u,type:c,ease:f,times:m,isGenerator:!0}),w=hn(this.time);p.setWithVelocity(N.sample(w-10).value,N.sample(w).value,10)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:a}=this;a&&a.animation.finish()}cancel(){const{resolved:a}=this;a&&a.animation.cancel()}static supports(a){const{motionValue:i,name:o,repeatDelay:u,repeatType:c,damping:f,type:m}=a;if(!(i&&i.owner&&i.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=i.owner.getProps();return aT()&&o&&rT.has(o)&&(o!=="transform"||!p)&&!h&&!u&&c!=="mirror"&&f!==0&&m!=="inertia"}};const lT={type:"spring",stiffness:500,damping:25,restSpeed:10},iT={type:"keyframes",duration:.8},oT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},sT=(n,{keyframes:a})=>a.length>2?iT:Kr.has(n)?n.startsWith("scale")?{type:"spring",stiffness:550,damping:a[1]===0?2*Math.sqrt(550):30,restSpeed:10}:lT:oT;function uT({when:n,delay:a,delayChildren:i,staggerChildren:o,staggerDirection:u,repeat:c,repeatType:f,repeatDelay:m,from:h,elapsed:p,...g}){return!!Object.keys(g).length}const Rf=(n,a,i,o={},u,c)=>f=>{const m=mf(o,n)||{},h=m.delay||o.delay||0;let{elapsed:p=0}=o;p-=hn(h);let g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:a.getVelocity(),...m,delay:-p,onUpdate:_=>{a.set(_),m.onUpdate&&m.onUpdate(_)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:n,motionValue:a,element:c?void 0:u};uT(m)||(g={...g,...sT(n,g)}),g.duration&&(g.duration=hn(g.duration)),g.repeatDelay&&(g.repeatDelay=hn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),g.allowFlatten=!m.type&&!m.ease,b&&!c&&a.get()!==void 0){const _=xs(g.keyframes,m);if(_!==void 0)return De.update((()=>{g.onUpdate(_),g.onComplete()})),new WE([])}return!c&&Mg.supports(g)?new Mg(g):new Ud(g)};function cT({protectedKeys:n,needsAnimating:a},i){const o=n.hasOwnProperty(i)&&a[i]!==!0;return a[i]=!1,o}function Ib(n,a,{delay:i=0,transitionOverride:o,type:u}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:f,...m}=a;o&&(c=o);const h=[],p=u&&n.animationState&&n.animationState.getState()[u];for(const g in m){const b=n.getValue(g,n.latestValues[g]??null),_=m[g];if(_===void 0||p&&cT(p,g))continue;const A={delay:i,...mf(c||{},g)};let N=!1;if(window.MotionHandoffAnimation){const j=Sb(n);if(j){const D=window.MotionHandoffAnimation(j,g,De);D!==null&&(A.startTime=D,N=!0)}}Ad(n,g),b.start(Rf(g,b,_,n.shouldReduceMotion&&bb.has(g)?{type:!1}:A,n,N));const w=b.animation;w&&h.push(w)}return f&&Promise.all(h).then((()=>{De.update((()=>{f&&KE(n,f)}))})),h}function Vd(n,a,i={}){const o=li(n,a,i.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(u=i.transitionOverride);const c=o?()=>Promise.all(Ib(n,o,i)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:b}=u;return(function(_,A,N=0,w=0,j=1,D){const k=[],q=(_.variantChildren.size-1)*w,Z=j===1?(B=0)=>B*w:(B=0)=>q-B*w;return Array.from(_.variantChildren).sort(dT).forEach(((B,J)=>{B.notify("AnimationStart",A),k.push(Vd(B,A,{...D,delay:N+Z(J)}).then((()=>B.notify("AnimationComplete",A))))})),Promise.all(k)})(n,a,p+h,g,b,i)}:()=>Promise.resolve(),{when:m}=u;if(m){const[h,p]=m==="beforeChildren"?[c,f]:[f,c];return h().then((()=>p()))}return Promise.all([c(),f(i.delay)])}function dT(n,a){return n.sortNodePosition(a)}function fT(n,a,i={}){let o;if(n.notify("AnimationStart",a),Array.isArray(a)){const u=a.map((c=>Vd(n,c,i)));o=Promise.all(u)}else if(typeof a=="string")o=Vd(n,a,i);else{const u=typeof a=="function"?li(n,a,i.custom):a;o=Promise.all(Ib(n,u,i))}return o.then((()=>{n.notify("AnimationComplete",a)}))}function ex(n,a){if(!Array.isArray(a))return!1;const i=a.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(a[o]!==n[o])return!1;return!0}function di(n){return typeof n=="string"||Array.isArray(n)}const zf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Df=["initial",...zf],mT=Df.length;function tx(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent&&tx(n.parent)||{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const a={};for(let i=0;i<mT;i++){const o=Df[i],u=n.props[o];(di(u)||u===!1)&&(a[o]=u)}return a}const hT=[...zf].reverse(),pT=zf.length;function vT(n){let a=(function(f){return m=>Promise.all(m.map((({animation:h,options:p})=>fT(f,h,p))))})(n),i=Rg(),o=!0;const u=f=>(m,h)=>{const p=li(n,h,f==="exit"?n.presenceContext?.custom:void 0);if(p){const{transition:g,transitionEnd:b,..._}=p;m={...m,..._,...b}}return m};function c(f){const{props:m}=n,h=tx(n.parent)||{},p=[],g=new Set;let b={},_=1/0;for(let N=0;N<pT;N++){const w=hT[N],j=i[w],D=m[w]!==void 0?m[w]:h[w],k=di(D),q=w===f?j.isActive:null;q===!1&&(_=N);let Z=D===h[w]&&D!==m[w]&&k;if(Z&&o&&n.manuallyAnimateOnMount&&(Z=!1),j.protectedKeys={...b},!j.isActive&&q===null||!D&&!j.prevProp||bs(D)||typeof D=="boolean")continue;const B=gT(j.prevProp,D);let J=B||w===f&&j.isActive&&!Z&&k||N>_&&k,Q=!1;const E=Array.isArray(D)?D:[D];let K=E.reduce(u(w),{});q===!1&&(K={});const{prevResolvedValues:le={}}=j,F={...le,...K},oe=R=>{J=!0,g.has(R)&&(Q=!0,g.delete(R)),j.needsAnimating[R]=!0;const W=n.getValue(R);W&&(W.liveStyle=!1)};for(const R in F){const W=K[R],re=le[R];if(b.hasOwnProperty(R))continue;let z=!1;z=jd(W)&&jd(re)?!ex(W,re):W!==re,z?W!=null?oe(R):g.add(R):W!==void 0&&g.has(R)?oe(R):j.protectedKeys[R]=!0}j.prevProp=D,j.prevResolvedValues=K,j.isActive&&(b={...b,...K}),o&&n.blockInitialAnimation&&(J=!1),J&&(!(Z&&B)||Q)&&p.push(...E.map((R=>({animation:R,options:{type:w}}))))}if(g.size){const N={};if(typeof m.initial!="boolean"){const w=li(n,Array.isArray(m.initial)?m.initial[0]:m.initial);w&&w.transition&&(N.transition=w.transition)}g.forEach((w=>{const j=n.getBaseTarget(w),D=n.getValue(w);D&&(D.liveStyle=!0),N[w]=j??null})),p.push({animation:N})}let A=!!p.length;return!o||m.initial!==!1&&m.initial!==m.animate||n.manuallyAnimateOnMount||(A=!1),o=!1,A?a(p):Promise.resolve()}return{animateChanges:c,setActive:function(f,m){if(i[f].isActive===m)return Promise.resolve();n.variantChildren?.forEach((p=>p.animationState?.setActive(f,m))),i[f].isActive=m;const h=c(f);for(const p in i)i[p].protectedKeys={};return h},setAnimateFunction:function(f){a=f(n)},getState:()=>i,reset:()=>{i=Rg(),o=!0}}}function gT(n,a){return typeof a=="string"?a!==n:!!Array.isArray(a)&&!ex(a,n)}function Lr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rg(){return{animate:Lr(!0),whileInView:Lr(),whileHover:Lr(),whileTap:Lr(),whileDrag:Lr(),whileFocus:Lr(),exit:Lr()}}let pr=class{constructor(a){this.isMounted=!1,this.node=a}update(){}},yT=class extends pr{constructor(a){super(a),a.animationState||(a.animationState=vT(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();bs(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:i}=this.node.prevProps||{};a!==i&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},bT=0,xT=class extends pr{constructor(){super(...arguments),this.id=bT++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===o)return;const u=this.node.animationState.setActive("exit",!a);i&&!a&&u.then((()=>{i(this.id)}))}mount(){const{register:a,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),a&&(this.unmount=a(this.id))}unmount(){}};const _T={animation:{Feature:yT},exit:{Feature:xT}},an={x:!1,y:!1};function nx(){return an.x||an.y}function ST(n){return n==="x"||n==="y"?an[n]?null:(an[n]=!0,()=>{an[n]=!1}):an.x||an.y?null:(an.x=an.y=!0,()=>{an.x=an.y=!1})}function fi(n,a,i,o={passive:!0}){return n.addEventListener(a,i,o),()=>n.removeEventListener(a,i)}const Of=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function _i(n){return{point:{x:n.pageX,y:n.pageY}}}const ET=n=>a=>Of(a)&&n(a,_i(a));function ei(n,a,i,o){return fi(n,a,ET(i),o)}function rx({top:n,left:a,right:i,bottom:o}){return{x:{min:a,max:i},y:{min:n,max:o}}}function TT({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function wT(n,a){if(!a)return n;const i=a({x:n.left,y:n.top}),o=a({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function vt(n){return n.max-n.min}function jT(n,a,i){return Math.abs(n-a)<=i}function zg(n,a,i,o=.5){n.origin=o,n.originPoint=Ve(a.min,a.max,n.origin),n.scale=vt(i)/vt(a),n.translate=Ve(i.min,i.max,n.origin)-n.originPoint,(n.scale>=.9999&&n.scale<=1.0001||isNaN(n.scale))&&(n.scale=1),(n.translate>=-.01&&n.translate<=.01||isNaN(n.translate))&&(n.translate=0)}function ti(n,a,i,o){zg(n.x,a.x,i.x,o?o.originX:void 0),zg(n.y,a.y,i.y,o?o.originY:void 0)}function Dg(n,a,i){n.min=i.min+a.min,n.max=n.min+vt(a)}function AT(n,a,i){Dg(n.x,a.x,i.x),Dg(n.y,a.y,i.y)}function Og(n,a,i){n.min=a.min-i.min,n.max=n.min+vt(a)}function ni(n,a,i){Og(n.x,a.x,i.x),Og(n.y,a.y,i.y)}const Ua=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),Qe=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Qt(n){return[n("x"),n("y")]}function rd(n){return n===void 0||n===1}function Bd({scale:n,scaleX:a,scaleY:i}){return!rd(n)||!rd(a)||!rd(i)}function Vr(n){return Bd(n)||ax(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ax(n){return $g(n.x)||$g(n.y)}function $g(n){return n&&n!=="0%"}function ds(n,a,i){return i+a*(n-i)}function Lg(n,a,i,o,u){return u!==void 0&&(n=ds(n,u,o)),ds(n,i,o)+a}function Hd(n,a=0,i=1,o,u){n.min=Lg(n.min,a,i,o,u),n.max=Lg(n.max,a,i,o,u)}function lx(n,{x:a,y:i}){Hd(n.x,a.translate,a.scale,a.originPoint),Hd(n.y,i.translate,i.scale,i.originPoint)}const Ug=.999999999999,Vg=1.0000000000001;function NT(n,a,i,o=!1){const u=i.length;if(!u)return;let c,f;a.x=a.y=1;for(let m=0;m<u;m++){c=i[m],f=c.projectionDelta;const{visualElement:h}=c.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ba(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),f&&(a.x*=f.x.scale,a.y*=f.y.scale,lx(n,f)),o&&Vr(c.latestValues)&&Ba(n,c.latestValues))}a.x<Vg&&a.x>Ug&&(a.x=1),a.y<Vg&&a.y>Ug&&(a.y=1)}function Va(n,a){n.min=n.min+a,n.max=n.max+a}function Bg(n,a,i,o,u=.5){Hd(n,a,i,Ve(n.min,n.max,u),o)}function Ba(n,a){Bg(n.x,a.x,a.scaleX,a.scale,a.originX),Bg(n.y,a.y,a.scaleY,a.scale,a.originY)}function ix(n,a){return rx(wT(n.getBoundingClientRect(),a))}function CT(n,a,i){const o=ix(n,i),{scroll:u}=a;return u&&(Va(o.x,u.offset.x),Va(o.y,u.offset.y)),o}const ox=({current:n})=>n?n.ownerDocument.defaultView:null;function Ha(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}const Hg=(n,a)=>Math.abs(n-a);function MT(n,a){const i=Hg(n.x,a.x),o=Hg(n.y,a.y);return Math.sqrt(i**2+o**2)}let sx=class{constructor(a,i,{transformPagePoint:o,contextWindow:u,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const g=ld(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,_=MT(g.offset,{x:0,y:0})>=3;if(!b&&!_)return;const{point:A}=g,{timestamp:N}=ut;this.history.push({...A,timestamp:N});const{onStart:w,onMove:j}=this.handlers;b||(w&&w(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,g)},this.handlePointerMove=(g,b)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=ad(b,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(g,b)=>{this.end();const{onEnd:_,onSessionEnd:A,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const w=ld(g.type==="pointercancel"?this.lastMoveEventInfo:ad(b,this.transformPagePoint),this.history);this.startEvent&&_&&_(g,w),A&&A(g,w)},!Of(a))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.contextWindow=u||window;const f=ad(_i(a),this.transformPagePoint),{point:m}=f,{timestamp:h}=ut;this.history=[{...m,timestamp:h}];const{onSessionStart:p}=i;p&&p(a,ld(f,this.history)),this.removeListeners=xi(ei(this.contextWindow,"pointermove",this.handlePointerMove),ei(this.contextWindow,"pointerup",this.handlePointerUp),ei(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),mr(this.updatePoint)}};function ad(n,a){return a?{point:a(n.point)}:n}function kg(n,a){return{x:n.x-a.x,y:n.y-a.y}}function ld({point:n},a){return{point:n,delta:kg(n,ux(a)),offset:kg(n,RT(a)),velocity:zT(a,.1)}}function RT(n){return n[0]}function ux(n){return n[n.length-1]}function zT(n,a){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const u=ux(n);for(;i>=0&&(o=n[i],!(u.timestamp-o.timestamp>hn(a)));)i--;if(!o)return{x:0,y:0};const c=pn(u.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const f={x:(u.x-o.x)/c,y:(u.y-o.y)/c};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function DT(n,{min:a,max:i},o){return a!==void 0&&n<a?n=o?Ve(a,n,o.min):Math.max(n,a):i!==void 0&&n>i&&(n=o?Ve(i,n,o.max):Math.min(n,i)),n}function Yg(n,a,i){return{min:a!==void 0?n.min+a:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function OT(n,{top:a,left:i,bottom:o,right:u}){return{x:Yg(n.x,i,u),y:Yg(n.y,a,o)}}function qg(n,a){let i=a.min-n.min,o=a.max-n.max;return a.max-a.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function $T(n,a){return{x:qg(n.x,a.x),y:qg(n.y,a.y)}}function LT(n,a){let i=.5;const o=vt(n),u=vt(a);return u>o?i=ci(a.min,a.max-o,n.min):o>u&&(i=ci(n.min,n.max-u,a.min)),Un(0,1,i)}function UT(n,a){const i={};return a.min!==void 0&&(i.min=a.min-n.min),a.max!==void 0&&(i.max=a.max-n.min),i}const cx=.35;function VT(n=.35){return n===!1?n=0:n===!0&&(n=cx),{x:Gg(n,"left","right"),y:Gg(n,"top","bottom")}}function Gg(n,a,i){return{min:Xg(n,a),max:Xg(n,i)}}function Xg(n,a){return typeof n=="number"?n:n[a]||0}const BT=new WeakMap;let HT=class{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qe(),this.visualElement=a}start(a,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const{dragSnapToOrigin:u}=this.getProps();this.panSession=new sx(a,{onSessionStart:c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(_i(c).point)},onStart:(c,f)=>{const{drag:m,dragPropagation:h,onDragStart:p}=this.getProps();if(m&&!h&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ST(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qt((b=>{let _=this.getAxisMotionValue(b).get()||0;if(vn.test(_)){const{projection:A}=this.visualElement;if(A&&A.layout){const N=A.layout.layoutBox[b];N&&(_=vt(N)*(parseFloat(_)/100))}}this.originPoint[b]=_})),p&&De.postRender((()=>p(c,f))),Ad(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},onMove:(c,f)=>{const{dragPropagation:m,dragDirectionLock:h,onDirectionLock:p,onDrag:g}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=f;if(h&&this.currentDirection===null)return this.currentDirection=(function(_,A=10){let N=null;return Math.abs(_.y)>A?N="y":Math.abs(_.x)>A&&(N="x"),N})(b),void(this.currentDirection!==null&&p&&p(this.currentDirection));this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),g&&g(c,f)},onSessionEnd:(c,f)=>this.stop(c,f),resumeAnimation:()=>Qt((c=>this.getAnimationState(c)==="paused"&&this.getAxisMotionValue(c).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:ox(this.visualElement)})}stop(a,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:u}=i;this.startAnimation(u);const{onDragEnd:c}=this.getProps();c&&De.postRender((()=>c(a,i)))}cancel(){this.isDragging=!1;const{projection:a,animationState:i}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(a,i,o){const{drag:u}=this.getProps();if(!o||!Po(a,u,this.currentDirection))return;const c=this.getAxisMotionValue(a);let f=this.originPoint[a]+o[a];this.constraints&&this.constraints[a]&&(f=DT(f,this.constraints[a],this.elastic[a])),c.set(f)}resolveConstraints(){const{dragConstraints:a,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&Ha(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!a||!o)&&OT(o.layoutBox,a),this.elastic=VT(i),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Qt((c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=UT(o.layoutBox[c],this.constraints[c]))}))}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:i}=this.getProps();if(!a||!Ha(a))return!1;const o=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const c=CT(o,u.root,this.visualElement.getTransformPagePoint());let f=$T(u.layout.layoutBox,c);if(i){const m=i(TT(f));this.hasMutatedConstraints=!!m,m&&(f=rx(m))}return f}startAnimation(a){const{drag:i,dragMomentum:o,dragElastic:u,dragTransition:c,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),h=this.constraints||{},p=Qt((g=>{if(!Po(g,i,this.currentDirection))return;let b=h&&h[g]||{};f&&(b={min:0,max:0});const _=u?200:1e6,A=u?40:1e7,N={type:"inertia",velocity:o?a[g]:0,bounceStiffness:_,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...c,...b};return this.startAxisValueAnimation(g,N)}));return Promise.all(p).then(m)}startAxisValueAnimation(a,i){const o=this.getAxisMotionValue(a);return Ad(this.visualElement,a),o.start(Rf(a,o,0,i,this.visualElement,!1))}stopAnimation(){Qt((a=>this.getAxisMotionValue(a).stop()))}pauseAnimation(){Qt((a=>this.getAxisMotionValue(a).animation?.pause()))}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const i=`_drag${a.toUpperCase()}`,o=this.visualElement.getProps();return o[i]||this.visualElement.getValue(a,(o.initial?o.initial[a]:void 0)||0)}snapToCursor(a){Qt((i=>{const{drag:o}=this.getProps();if(!Po(i,o,this.currentDirection))return;const{projection:u}=this.visualElement,c=this.getAxisMotionValue(i);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[i];c.set(a[i]-Ve(f,m,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ha(i)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Qt((f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const h=m.get();u[f]=LT({min:h,max:h},this.constraints[f])}}));const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Qt((f=>{if(!Po(f,a,null))return;const m=this.getAxisMotionValue(f),{min:h,max:p}=this.constraints[f];m.set(Ve(h,p,u[f]))}))}addListeners(){if(!this.visualElement.current)return;BT.set(this.visualElement,this);const a=this.visualElement.current,i=ei(a,"pointerdown",(h=>{const{drag:p,dragListener:g=!0}=this.getProps();p&&g&&this.start(h)})),o=()=>{const{dragConstraints:h}=this.getProps();Ha(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,c=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),De.read(o);const f=fi(window,"resize",(()=>this.scalePositionWithinConstraints())),m=u.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Qt((g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=h[g].translate,b.set(b.get()+h[g].translate))})),this.visualElement.render())}));return()=>{f(),i(),c(),m&&m()}}getProps(){const a=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:c=!1,dragElastic:f=cx,dragMomentum:m=!0}=a;return{...a,drag:i,dragDirectionLock:o,dragPropagation:u,dragConstraints:c,dragElastic:f,dragMomentum:m}}};function Po(n,a,i){return!(a!==!0&&a!==n||i!==null&&i!==n)}let kT=class extends pr{constructor(a){super(a),this.removeGroupControls=Wt,this.removeListeners=Wt,this.controls=new HT(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wt}unmount(){this.removeGroupControls(),this.removeListeners()}};const Pg=n=>(a,i)=>{n&&De.postRender((()=>n(a,i)))};let YT=class extends pr{constructor(){super(...arguments),this.removePointerDownListener=Wt}onPointerDown(a){this.session=new sx(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ox(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:i,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:Pg(a),onStart:Pg(i),onMove:o,onEnd:(c,f)=>{delete this.session,u&&De.postRender((()=>u(c,f)))}}}mount(){this.removePointerDownListener=ei(this.node.current,"pointerdown",(a=>this.onPointerDown(a)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}};const{schedule:$f}=yb(queueMicrotask,!1),dx=S.createContext({}),ts={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Kg(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Pl={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string"){if(!ue.test(n))return n;n=parseFloat(n)}return`${Kg(n,a.target.x)}% ${Kg(n,a.target.y)}%`}},qT={correct:(n,{treeScale:a,projectionDelta:i})=>{const o=n,u=hr.parse(n);if(u.length>5)return o;const c=hr.createTransformer(n),f=typeof u[0]!="number"?1:0,m=i.x.scale*a.x,h=i.y.scale*a.y;u[0+f]/=m,u[1+f]/=h;const p=Ve(m,h,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),c(u)}},mi={};function GT(n){for(const a in n)mi[a]=n[a],Af(a)&&(mi[a].isCSSVariable=!0)}let XT=class extends S.Component{componentDidMount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o,layoutId:u}=this.props,{projection:c}=a;GT(PT),c&&(i.group&&i.group.add(c),o&&o.register&&u&&o.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",(()=>{this.safeToRemove()})),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),ts.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:i,visualElement:o,drag:u,isPresent:c}=this.props,f=o.projection;return f&&(f.isPresent=c,u||a.layoutDependency!==i||i===void 0||a.isPresent!==c?f.willUpdate():this.safeToRemove(),a.isPresent!==c&&(c?f.promote():f.relegate()||De.postRender((()=>{const m=f.getStack();m&&m.members.length||this.safeToRemove()})))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),$f.postRender((()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:a,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:u}=a;u&&(u.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}};function fx(n){const[a,i]=VE(),o=S.useContext(vb);return y.jsx(XT,{...n,layoutGroup:o,switchLayoutGroup:S.useContext(dx),isPresent:a,safeToRemove:i})}const PT={borderRadius:{...Pl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pl,borderTopRightRadius:Pl,borderBottomLeftRadius:Pl,borderBottomRightRadius:Pl,boxShadow:qT};function KT(n,a,i){const o=ft(n)?n:ii(n);return o.start(Rf("",o,a,i)),o.animation}function QT(n){return n instanceof SVGElement&&n.tagName!=="svg"}const ZT=(n,a)=>n.depth-a.depth;let FT=class{constructor(){this.children=[],this.isDirty=!1}add(a){hf(this.children,a),this.isDirty=!0}remove(a){pf(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(ZT),this.isDirty=!1,this.children.forEach(a)}};function JT(n,a){const i=mn.now(),o=({timestamp:u})=>{const c=u-i;c>=a&&(mr(o),n(c-a))};return De.read(o,!0),()=>mr(o)}function ns(n){const a=ft(n)?n.get():n;return GE(a)?a.toValue():a}const mx=["TopLeft","TopRight","BottomLeft","BottomRight"],WT=mx.length,Qg=n=>typeof n=="string"?parseFloat(n):n,Zg=n=>typeof n=="number"||ue.test(n);function IT(n,a,i,o,u,c){u?(n.opacity=Ve(0,i.opacity!==void 0?i.opacity:1,ew(o)),n.opacityExit=Ve(a.opacity!==void 0?a.opacity:1,0,tw(o))):c&&(n.opacity=Ve(a.opacity!==void 0?a.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let f=0;f<WT;f++){const m=`border${mx[f]}Radius`;let h=Fg(a,m),p=Fg(i,m);h===void 0&&p===void 0||(h||(h=0),p||(p=0),h===0||p===0||Zg(h)===Zg(p)?(n[m]=Math.max(Ve(Qg(h),Qg(p),o),0),(vn.test(p)||vn.test(h))&&(n[m]+="%")):n[m]=p)}(a.rotate||i.rotate)&&(n.rotate=Ve(a.rotate||0,i.rotate||0,o))}function Fg(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const ew=hx(0,.5,Rb),tw=hx(.5,.95,Wt);function hx(n,a,i){return o=>o<n?0:o>a?1:i(ci(n,a,o))}function Jg(n,a){n.min=a.min,n.max=a.max}function Kt(n,a){Jg(n.x,a.x),Jg(n.y,a.y)}function Wg(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}function Ig(n,a,i,o,u){return n=ds(n-=a,1/i,o),u!==void 0&&(n=ds(n,1/u,o)),n}function nw(n,a=0,i=1,o=.5,u,c=n,f=n){if(vn.test(a)&&(a=parseFloat(a),a=Ve(f.min,f.max,a/100)-f.min),typeof a!="number")return;let m=Ve(c.min,c.max,o);n===c&&(m-=a),n.min=Ig(n.min,a,i,m,u),n.max=Ig(n.max,a,i,m,u)}function ey(n,a,[i,o,u],c,f){nw(n,a[i],a[o],a[u],a.scale,c,f)}const rw=["x","scaleX","originX"],aw=["y","scaleY","originY"];function ty(n,a,i,o){ey(n.x,a,rw,i?i.x:void 0,o?o.x:void 0),ey(n.y,a,aw,i?i.y:void 0,o?o.y:void 0)}function ny(n){return n.translate===0&&n.scale===1}function px(n){return ny(n.x)&&ny(n.y)}function ry(n,a){return n.min===a.min&&n.max===a.max}function lw(n,a){return ry(n.x,a.x)&&ry(n.y,a.y)}function ay(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function vx(n,a){return ay(n.x,a.x)&&ay(n.y,a.y)}function ly(n){return vt(n.x)/vt(n.y)}function iy(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}let iw=class{constructor(){this.members=[]}add(a){hf(this.members,a),a.scheduleRender()}remove(a){if(pf(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(a){const i=this.members.findIndex((u=>a===u));if(i===0)return!1;let o;for(let u=i;u>=0;u--){const c=this.members[u];if(c.isPresent!==!1){o=c;break}}return!!o&&(this.promote(o),!0)}promote(a,i){const o=this.lead;if(a!==o&&(this.prevLead=o,this.lead=a,a.show(),o)){o.instance&&o.scheduleRender(),a.scheduleRender(),a.resumeFrom=o,i&&(a.resumeFrom.preserveOpacity=!0),o.snapshot&&(a.snapshot=o.snapshot,a.snapshot.latestValues=o.animationValues||o.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach((a=>{const{options:i,resumingFrom:o}=a;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()}))}scheduleRender(){this.members.forEach((a=>{a.instance&&a.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}};function ow(n,a,i){let o="";const u=n.x.translate/a.x,c=n.y.translate/a.y,f=i?.z||0;if((u||c||f)&&(o=`translate3d(${u}px, ${c}px, ${f}px) `),a.x===1&&a.y===1||(o+=`scale(${1/a.x}, ${1/a.y}) `),i){const{transformPerspective:p,rotate:g,rotateX:b,rotateY:_,skewX:A,skewY:N}=i;p&&(o=`perspective(${p}px) ${o}`),g&&(o+=`rotate(${g}deg) `),b&&(o+=`rotateX(${b}deg) `),_&&(o+=`rotateY(${_}deg) `),A&&(o+=`skewX(${A}deg) `),N&&(o+=`skewY(${N}deg) `)}const m=n.x.scale*a.x,h=n.y.scale*a.y;return m===1&&h===1||(o+=`scale(${m}, ${h})`),o||"none"}const id=["","X","Y","Z"],sw={visibility:"hidden"};let uw=0;function od(n,a,i,o){const{latestValues:u}=a;u[n]&&(i[n]=u[n],a.setStaticValue(n,0),o&&(o[n]=0))}function gx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const i=Sb(a);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:u,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",De,!(u||c))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&gx(o)}function yx({attachResizeListener:n,defaultParent:a,measureScroll:i,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(c={},f=a?.()){this.id=uw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fw),this.nodes.forEach(gw),this.nodes.forEach(yw),this.nodes.forEach(mw)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new FT)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new vf),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const m=this.eventHandlers.get(c);m&&m.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=QT(c),this.instance=c;const{layoutId:m,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||m)&&(this.isLayoutDirty=!0),n){let g;const b=()=>this.root.updateBlockedByResize=!1;n(c,(()=>{this.root.updateBlockedByResize=!0,g&&g(),g=JT(b,250),ts.hasAnimatedSinceResize&&(ts.hasAnimatedSinceResize=!1,this.nodes.forEach(sy))}))}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||h)&&this.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:b,hasRelativeLayoutChanged:_,layout:A})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const N=this.options.transition||p.getDefaultTransition()||Ew,{onLayoutAnimationStart:w,onLayoutAnimationComplete:j}=p.getProps(),D=!this.targetLayout||!vx(this.targetLayout,A),k=!b&&_;if(this.options.layoutRoot||this.resumeFrom||k||b&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,k);const q={...mf(N,"layout"),onPlay:w,onComplete:j};(p.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q)}else b||sy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bw),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(oy);this.isUpdating||this.nodes.forEach(pw),this.isUpdating=!1,this.nodes.forEach(vw),this.nodes.forEach(cw),this.nodes.forEach(dw),this.clearAllSnapshots();const c=mn.now();ut.delta=Un(0,1e3/60,c-ut.timestamp),ut.timestamp=c,ut.isProcessing=!0,Ic.update.process(ut),Ic.preRender.process(ut),Ic.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$f.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hw),this.sharedNodes.forEach(xw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||vt(this.snapshot.measuredBox.x)||vt(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!px(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(f||Vr(this.latestValues)||p)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);var h;return c&&(m=this.removeTransform(m)),my((h=m).x),my(h.y),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return Qe();const f=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Tw))){const{scroll:m}=this.root;m&&(Va(f.x,m.offset.x),Va(f.y,m.offset.y))}return f}removeElementScroll(c){const f=Qe();if(Kt(f,c),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:p,options:g}=h;h!==this.root&&p&&g.layoutScroll&&(p.wasRoot&&Kt(f,c),Va(f.x,p.offset.x),Va(f.y,p.offset.y))}return f}applyTransform(c,f=!1){const m=Qe();Kt(m,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!f&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Ba(m,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Vr(p.latestValues)&&Ba(m,p.latestValues)}return Vr(this.latestValues)&&Ba(m,this.latestValues),m}removeTransform(c){const f=Qe();Kt(f,c);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Vr(h.latestValues))continue;Bd(h.latestValues)&&h.updateSnapshot();const p=Qe(),g=h.measurePageBox();Kt(p,g),ty(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Vr(this.latestValues)&&ty(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade===void 0||c.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(c||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:p}=this.options;if(this.layout&&(h||p)){if(this.resolvedRelativeTargetAt=ut.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ni(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if((this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Qe(),this.targetWithTransforms=Qe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),AT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),lx(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Qe(),this.relativeTargetOrigin=Qe(),ni(this.relativeTargetOrigin,this.target,g.target),Kt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(this.parent&&!Bd(this.parent.latestValues)&&!ax(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const c=this.getLead(),f=!!this.resumingFrom||this!==c;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(m=!1),m)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!h&&!p)return;Kt(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,b=this.treeScale.y;NT(this.layoutCorrected,this.treeScale,this.path,f),!c.layout||c.target||this.treeScale.x===1&&this.treeScale.y===1||(c.target=c.layout.layoutBox,c.targetWithTransforms=Qe());const{target:_}=c;_?(this.projectionDelta&&this.prevProjectionDelta?(Wg(this.prevProjectionDelta.x,this.projectionDelta.x),Wg(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ti(this.projectionDelta,this.layoutCorrected,_,this.latestValues),this.treeScale.x===g&&this.treeScale.y===b&&iy(this.projectionDelta.x,this.prevProjectionDelta.x)&&iy(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ua(),this.projectionDelta=Ua(),this.projectionDeltaWithTransform=Ua()}setAnimationOrigin(c,f=!1){const m=this.snapshot,h=m?m.latestValues:{},p={...this.latestValues},g=Ua();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const b=Qe(),_=(m?m.source:void 0)!==(this.layout?this.layout.source:void 0),A=this.getStack(),N=!A||A.members.length<=1,w=!!(_&&!N&&this.options.crossfade===!0&&!this.path.some(Sw));let j;this.animationProgress=0,this.mixTargetDelta=D=>{const k=D/1e3;uy(g.x,c.x,k),uy(g.y,c.y,k),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ni(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_w(this.relativeTarget,this.relativeTargetOrigin,b,k),j&&lw(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=Qe()),Kt(j,this.relativeTarget)),_&&(this.animationValues=p,IT(p,h,this.latestValues,k,w,N)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update((()=>{ts.hasAnimatedSinceResize=!0,this.currentAnimation=KT(0,1e3,{...c,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:m,layout:h,latestValues:p}=c;if(f&&m&&h){if(this!==c&&this.layout&&h&&bx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||Qe();const g=vt(this.layout.layoutBox.x);m.x.min=c.target.x.min,m.x.max=m.x.min+g;const b=vt(this.layout.layoutBox.y);m.y.min=c.target.y.min,m.y.max=m.y.min+b}Kt(f,m),Ba(f,p),ti(this.projectionDeltaWithTransform,this.layoutCorrected,f,p)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new iw),this.sharedNodes.get(c).add(f);const m=f.options.initialPromotionConfig;f.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return!c||c.lead===this}getLead(){const{layoutId:c}=this.options;return c&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return!!c&&c.relegate(this)}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:m}=c;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const h={};m.z&&od("z",c,h,this.animationValues);for(let p=0;p<id.length;p++)od(`rotate${id[p]}`,c,h,this.animationValues),od(`skew${id[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return sw;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=ns(c?.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=ns(c?.pointerEvents)||""),this.hasProjected&&!Vr(this.latestValues)&&(_.transform=m?m({},""):"none",this.hasProjected=!1),_}const p=h.animationValues||h.latestValues;this.applyTransformsToTarget(),f.transform=ow(this.projectionDeltaWithTransform,this.treeScale,p),m&&(f.transform=m(p,f.transform));const{x:g,y:b}=this.projectionDelta;f.transformOrigin=`${100*g.origin}% ${100*b.origin}% 0`,h.animationValues?f.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:f.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const _ in mi){if(p[_]===void 0)continue;const{correct:A,applyTo:N,isCSSVariable:w}=mi[_],j=f.transform==="none"?p[_]:A(p[_],h);if(N){const D=N.length;for(let k=0;k<D;k++)f[N[k]]=j}else w?this.options.visualElement.renderState.vars[_]=j:f[_]=j}return this.options.layoutId&&(f.pointerEvents=h===this?ns(c?.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((c=>c.currentAnimation?.stop())),this.root.nodes.forEach(oy),this.root.sharedNodes.clear()}}}function cw(n){n.updateLayout()}function dw(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:u}=n.options,c=a.source!==n.layout.source;u==="size"?Qt((g=>{const b=c?a.measuredBox[g]:a.layoutBox[g],_=vt(b);b.min=i[g].min,b.max=b.min+_})):bx(u,a.layoutBox,i)&&Qt((g=>{const b=c?a.measuredBox[g]:a.layoutBox[g],_=vt(i[g]);b.max=b.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+_)}));const f=Ua();ti(f,i,a.layoutBox);const m=Ua();c?ti(m,n.applyTransform(o,!0),a.measuredBox):ti(m,i,a.layoutBox);const h=!px(f);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:b,layout:_}=g;if(b&&_){const A=Qe();ni(A,a.layoutBox,b.layoutBox);const N=Qe();ni(N,i,_.layoutBox),vx(A,N)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=N,n.relativeTargetOrigin=A,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:a,delta:m,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function fw(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function mw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function hw(n){n.clearSnapshot()}function oy(n){n.clearMeasurements()}function pw(n){n.isLayoutDirty=!1}function vw(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function sy(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function gw(n){n.resolveTargetDelta()}function yw(n){n.calcProjection()}function bw(n){n.resetSkewAndRotation()}function xw(n){n.removeLeadSnapshot()}function uy(n,a,i){n.translate=Ve(a.translate,0,i),n.scale=Ve(a.scale,1,i),n.origin=a.origin,n.originPoint=a.originPoint}function cy(n,a,i,o){n.min=Ve(a.min,i.min,o),n.max=Ve(a.max,i.max,o)}function _w(n,a,i,o){cy(n.x,a.x,i.x,o),cy(n.y,a.y,i.y,o)}function Sw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Ew={duration:.45,ease:[.4,0,.1,1]},dy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),fy=dy("applewebkit/")&&!dy("chrome/")?Math.round:Wt;function my(n){n.min=fy(n.min),n.max=fy(n.max)}function bx(n,a,i){return n==="position"||n==="preserve-aspect"&&!jT(ly(a),ly(i),.2)}function Tw(n){return n!==n.root&&n.scroll?.wasRoot}const ww=yx({attachResizeListener:(n,a)=>fi(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sd={current:void 0},xx=yx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!sd.current){const n=new ww({});n.mount(window),n.setOptions({layoutScroll:!0}),sd.current=n}return sd.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),jw={pan:{Feature:YT},drag:{Feature:kT,ProjectionNode:xx,MeasureLayout:fx}};function Aw(n,a,i){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=i?.[n]??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}function _x(n,a){const i=Aw(n),o=new AbortController;return[i,{passive:!0,...a,signal:o.signal},()=>o.abort()]}function hy(n){return!(n.pointerType==="touch"||nx())}function Nw(n,a,i={}){const[o,u,c]=_x(n,i),f=m=>{if(!hy(m))return;const{target:h}=m,p=a(h,m);if(typeof p!="function"||!h)return;const g=b=>{hy(b)&&(p(b),h.removeEventListener("pointerleave",g))};h.addEventListener("pointerleave",g,u)};return o.forEach((m=>{m.addEventListener("pointerenter",f,u)})),c}function py(n,a,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const u=o["onHover"+i];u&&De.postRender((()=>u(a,_i(a))))}let Cw=class extends pr{mount(){const{current:a}=this.node;a&&(this.unmount=Nw(a,((i,o)=>(py(this.node,o,"Start"),u=>py(this.node,u,"End")))))}unmount(){}},Mw=class extends pr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}a&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xi(fi(this.node.current,"focus",(()=>this.onFocus())),fi(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}};const Sx=(n,a)=>!!a&&(n===a||Sx(n,a.parentElement)),Rw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function zw(n){return Rw.has(n.tagName)||n.tabIndex!==-1}const Wl=new WeakSet;function vy(n){return a=>{a.key==="Enter"&&n(a)}}function ud(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const Dw=(n,a)=>{const i=n.currentTarget;if(!i)return;const o=vy((()=>{if(Wl.has(i))return;ud(i,"down");const u=vy((()=>{ud(i,"up")}));i.addEventListener("keyup",u,a),i.addEventListener("blur",(()=>ud(i,"cancel")),a)}));i.addEventListener("keydown",o,a),i.addEventListener("blur",(()=>i.removeEventListener("keydown",o)),a)};function gy(n){return Of(n)&&!nx()}function Ow(n,a,i={}){const[o,u,c]=_x(n,i),f=m=>{const h=m.currentTarget;if(!gy(m)||Wl.has(h))return;Wl.add(h);const p=a(h,m),g=(A,N)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",_),gy(A)&&Wl.has(h)&&(Wl.delete(h),typeof p=="function"&&p(A,{success:N}))},b=A=>{g(A,h===window||h===document||i.useGlobalTarget||Sx(h,A.target))},_=A=>{g(A,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",_,u)};return o.forEach((m=>{(i.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),m instanceof HTMLElement&&(m.addEventListener("focus",(h=>Dw(h,u))),zw(m)||m.hasAttribute("tabindex")||(m.tabIndex=0))})),c}function yy(n,a,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const u=o["onTap"+(i==="End"?"":i)];u&&De.postRender((()=>u(a,_i(a))))}let $w=class extends pr{mount(){const{current:a}=this.node;a&&(this.unmount=Ow(a,((i,o)=>(yy(this.node,o,"Start"),(u,{success:c})=>yy(this.node,u,c?"End":"Cancel"))),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}};const kd=new WeakMap,cd=new WeakMap,Lw=n=>{const a=kd.get(n.target);a&&a(n)},Uw=n=>{n.forEach(Lw)};function Vw(n,a,i){const o=(function({root:u,...c}){const f=u||document;cd.has(f)||cd.set(f,{});const m=cd.get(f),h=JSON.stringify(c);return m[h]||(m[h]=new IntersectionObserver(Uw,{root:u,...c})),m[h]})(a);return kd.set(n,i),o.observe(n),()=>{kd.delete(n),o.unobserve(n)}}const Bw={some:0,all:1};let Hw=class extends pr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:i,margin:o,amount:u="some",once:c}=a,f={root:i?i.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:Bw[u]};return Vw(this.node.current,f,(m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,c&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),b=h?p:g;b&&b(m)}))}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:i}=this.node;["amount","margin","root"].some((function({viewport:o={}},{viewport:u={}}={}){return c=>o[c]!==u[c]})(a,i))&&this.startObserver()}unmount(){}};const kw={inView:{Feature:Hw},tap:{Feature:$w},focus:{Feature:Mw},hover:{Feature:Cw}},Yw={layout:{ProjectionNode:xx,MeasureLayout:fx}},Ex=S.createContext({strict:!1}),_s=S.createContext({});function Ss(n){return bs(n.animate)||Df.some((a=>di(n[a])))}function Tx(n){return!!(Ss(n)||n.variants)}function qw(n,a){if(Ss(n)){const{initial:i,animate:o}=n;return{initial:i===!1||di(i)?i:void 0,animate:di(o)?o:void 0}}return n.inherit!==!1?a:{}}function Gw(n){const{initial:a,animate:i}=qw(n,S.useContext(_s));return S.useMemo((()=>({initial:a,animate:i})),[by(a),by(i)])}function by(n){return Array.isArray(n)?n.join(" "):n}const xy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ga={};for(const n in xy)Ga[n]={isEnabled:a=>xy[n].some((i=>!!a[i]))};function Xw(n){for(const a in n)Ga[a]={...Ga[a],...n[a]}}const Pw=Symbol.for("motionComponentSymbol");function Kw(n,a,i){return S.useCallback((o=>{o&&n.onMount&&n.onMount(o),a&&(o?a.mount(o):a.unmount()),i&&(typeof i=="function"?i(o):Ha(i)&&(i.current=o))}),[a])}function Qw(n,a,i,o,u){const{visualElement:c}=S.useContext(_s),f=S.useContext(Ex),m=S.useContext(df),h=S.useContext(gb).reducedMotion,p=S.useRef(null);o=o||f.renderer,!p.current&&o&&(p.current=o(n,{visualState:a,parent:c,props:i,presenceContext:m,blockInitialAnimation:!!m&&m.initial===!1,reducedMotionConfig:h}));const g=p.current,b=S.useContext(dx);!g||g.projection||!u||g.type!=="html"&&g.type!=="svg"||(function(w,j,D,k){const{layoutId:q,layout:Z,drag:B,dragConstraints:J,layoutScroll:Q,layoutRoot:E}=j;w.projection=new D(w.latestValues,j["data-framer-portal-id"]?void 0:wx(w.parent)),w.projection.setOptions({layoutId:q,layout:Z,alwaysMeasureLayout:!!B||J&&Ha(J),visualElement:w,animationType:typeof Z=="string"?Z:"both",initialPromotionConfig:k,layoutScroll:Q,layoutRoot:E})})(p.current,i,u,b);const _=S.useRef(!1);S.useInsertionEffect((()=>{g&&_.current&&g.update(i,m)}));const A=i[_b],N=S.useRef(!!A&&!window.MotionHandoffIsComplete?.(A)&&window.MotionHasOptimisedAnimation?.(A));return UE((()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),$f.render(g.render),N.current&&g.animationState&&g.animationState.animateChanges())})),S.useEffect((()=>{g&&(!N.current&&g.animationState&&g.animationState.animateChanges(),N.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(A)})),N.current=!1))})),g}function wx(n){if(n)return n.options.allowProjection!==!1?n.projection:wx(n.parent)}function Zw({preloadedFeatures:n,createVisualElement:a,useRender:i,useVisualState:o,Component:u}){function c(m,h){let p;const g={...S.useContext(gb),...m,layoutId:Fw(m)},{isStatic:b}=g,_=Gw(m),A=o(m,b);if(!b&&cf){(function(w,j){S.useContext(Ex).strict})();const N=(function(w){const{drag:j,layout:D}=Ga;if(!j&&!D)return{};const k={...j,...D};return{MeasureLayout:j?.isEnabled(w)||D?.isEnabled(w)?k.MeasureLayout:void 0,ProjectionNode:k.ProjectionNode}})(g);p=N.MeasureLayout,_.visualElement=Qw(u,A,g,a,N.ProjectionNode)}return y.jsxs(_s.Provider,{value:_,children:[p&&_.visualElement?y.jsx(p,{visualElement:_.visualElement,...g}):null,i(u,m,Kw(A,_.visualElement,h),A,b,_.visualElement)]})}n&&Xw(n),c.displayName=`motion.${typeof u=="string"?u:`create(${u.displayName??u.name??""})`}`;const f=S.forwardRef(c);return f[Pw]=u,f}function Fw({layoutId:n}){const a=S.useContext(vb).id;return a&&n!==void 0?a+"-"+n:n}function jx(n,{layout:a,layoutId:i}){return Kr.has(n)||n.startsWith("origin")||(a||i!==void 0)&&(!!mi[n]||n==="opacity")}const Ax=(n,a)=>a&&typeof n=="number"?a.transform(n):n,Jw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ww=Qa.length;function Iw(n,a,i){let o="",u=!0;for(let c=0;c<Ww;c++){const f=Qa[c],m=n[f];if(m===void 0)continue;let h=!0;if(h=typeof m=="number"?m===(f.startsWith("scale")?1:0):parseFloat(m)===0,!h||i){const p=Ax(m,wf[f]);h||(u=!1,o+=`${Jw[f]||f}(${p}) `),i&&(a[f]=p)}}return o=o.trim(),i?o=i(a,u?"":o):u&&(o="none"),o}function Lf(n,a,i){const{style:o,vars:u,transformOrigin:c}=n;let f=!1,m=!1;for(const h in a){const p=a[h];if(Kr.has(h))f=!0;else if(Af(h))u[h]=p;else{const g=Ax(p,wf[h]);h.startsWith("origin")?(m=!0,c[h]=g):o[h]=g}}if(a.transform||(f||i?o.transform=Iw(a,n.transform,i):o.transform&&(o.transform="none")),m){const{originX:h="50%",originY:p="50%",originZ:g=0}=c;o.transformOrigin=`${h} ${p} ${g}`}}const Uf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nx(n,a,i){for(const o in a)ft(a[o])||jx(o,i)||(n[o]=a[o])}function ej(n,a){const i={};return Nx(i,n.style||{},n),Object.assign(i,(function({transformTemplate:o},u){return S.useMemo((()=>{const c=Uf();return Lf(c,u,o),Object.assign({},c.vars,c.style)}),[u])})(n,a)),i}function tj(n,a){const i={},o=ej(n,a);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":"pan-"+(n.drag==="x"?"y":"x")),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const nj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fs(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||nj.has(n)}let Cx=n=>!fs(n);function rj(n){n&&(Cx=a=>a.startsWith("on")?!fs(a):n(a))}try{rj(require("@emotion/is-prop-valid").default)}catch{}function aj(n,a,i){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(Cx(u)||i===!0&&fs(u)||!a&&!fs(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const lj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vf(n){return typeof n=="string"&&!n.includes("-")&&!!(lj.indexOf(n)>-1||/[A-Z]/u.test(n))}const ij={offset:"stroke-dashoffset",array:"stroke-dasharray"},oj={offset:"strokeDashoffset",array:"strokeDasharray"};function sj(n,a,i=1,o=0,u=!0){n.pathLength=1;const c=u?ij:oj;n[c.offset]=ue.transform(-o);const f=ue.transform(a),m=ue.transform(i);n[c.array]=`${f} ${m}`}function _y(n,a,i){return typeof n=="string"?n:ue.transform(a+i*n)}function uj(n,a,i){return`${_y(a,n.x,n.width)} ${_y(i,n.y,n.height)}`}function Bf(n,{attrX:a,attrY:i,attrScale:o,originX:u,originY:c,pathLength:f,pathSpacing:m=1,pathOffset:h=0,...p},g,b){if(Lf(n,p,b),g)return void(n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox));n.attrs=n.style,n.style={};const{attrs:_,style:A,dimensions:N}=n;_.transform&&(N&&(A.transform=_.transform),delete _.transform),N&&(u!==void 0||c!==void 0||A.transform)&&(A.transformOrigin=uj(N,u!==void 0?u:.5,c!==void 0?c:.5)),a!==void 0&&(_.x=a),i!==void 0&&(_.y=i),o!==void 0&&(_.scale=o),f!==void 0&&sj(_,f,m,h,!1)}const Mx=()=>({...Uf(),attrs:{}}),Hf=n=>typeof n=="string"&&n.toLowerCase()==="svg";function cj(n,a,i,o){const u=S.useMemo((()=>{const c=Mx();return Bf(c,a,Hf(o),n.transformTemplate),{...c.attrs,style:{...c.style}}}),[a]);if(n.style){const c={};Nx(c,n.style,n),u.style={...c,...u.style}}return u}function dj(n=!1){return(a,i,o,{latestValues:u},c)=>{const f=(Vf(a)?cj:tj)(i,u,c,a),m=aj(i,typeof a=="string",n),h=a!==S.Fragment?{...m,...f,ref:o}:{},{children:p}=i,g=S.useMemo((()=>ft(p)?p.get():p),[p]);return S.createElement(a,{...h,children:g})}}const Rx=n=>(a,i)=>{const o=S.useContext(_s),u=S.useContext(df),c=()=>(function({scrapeMotionValuesFromProps:f,createRenderState:m,onUpdate:h},p,g,b){const _={latestValues:fj(p,g,b,f),renderState:m()};return h&&(_.onMount=A=>h({props:p,current:A,..._}),_.onUpdate=A=>h(A)),_})(n,a,o,u);return i?c():LE(c)};function fj(n,a,i,o){const u={},c=o(n,{});for(const _ in c)u[_]=ns(c[_]);let{initial:f,animate:m}=n;const h=Ss(n),p=Tx(n);a&&p&&!h&&n.inherit!==!1&&(f===void 0&&(f=a.initial),m===void 0&&(m=a.animate));let g=!!i&&i.initial===!1;g=g||f===!1;const b=g?m:f;if(b&&typeof b!="boolean"&&!bs(b)){const _=Array.isArray(b)?b:[b];for(let A=0;A<_.length;A++){const N=ff(n,_[A]);if(N){const{transitionEnd:w,transition:j,...D}=N;for(const k in D){let q=D[k];Array.isArray(q)&&(q=q[g?q.length-1:0]),q!==null&&(u[k]=q)}for(const k in w)u[k]=w[k]}}}return u}function kf(n,a,i){const{style:o}=n,u={};for(const c in o)(ft(o[c])||a.style&&ft(a.style[c])||jx(c,n)||i?.getValue(c)?.liveStyle!==void 0)&&(u[c]=o[c]);return u}const mj={useVisualState:Rx({scrapeMotionValuesFromProps:kf,createRenderState:Uf})};function zx(n,a){try{a.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{a.dimensions={x:0,y:0,width:0,height:0}}}function Dx(n,{style:a,vars:i},o,u){Object.assign(n.style,a,u&&u.getProjectionStyles(o));for(const c in i)n.style.setProperty(c,i[c])}const Ox=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $x(n,a,i,o){Dx(n,a,void 0,o);for(const u in a.attrs)n.setAttribute(Ox.has(u)?u:gf(u),a.attrs[u])}function Lx(n,a,i){const o=kf(n,a,i);for(const u in n)(ft(n[u])||ft(a[u]))&&(o[Qa.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u]=n[u]);return o}const Sy=["x","y","width","height","cx","cy","r"],hj={useVisualState:Rx({scrapeMotionValuesFromProps:Lx,createRenderState:Mx,onUpdate:({props:n,prevProps:a,current:i,renderState:o,latestValues:u})=>{if(!i)return;let c=!!n.drag;if(!c){for(const m in u)if(Kr.has(m)){c=!0;break}}if(!c)return;let f=!a;if(a)for(let m=0;m<Sy.length;m++){const h=Sy[m];n[h]!==a[h]&&(f=!0)}f&&De.read((()=>{zx(i,o),De.render((()=>{Bf(o,u,Hf(i.tagName),n.transformTemplate),$x(i,o)}))}))}})};function pj(n,a){return function(i,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Vf(i)?hj:mj,preloadedFeatures:n,useRender:dj(o),createVisualElement:a,Component:i};return Zw(u)}}const Yd={current:null},Ux={current:!1};function vj(){if(Ux.current=!0,cf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>Yd.current=n.matches;n.addListener(a),a()}else Yd.current=!1}const gj=[...Pb,dt,hr],yj=n=>gj.find(Xb(n)),bj=new WeakMap;function xj(n,a,i){for(const o in a){const u=a[o],c=i[o];if(ft(u))n.addValue(o,u);else if(ft(c))n.addValue(o,ii(u,{owner:n}));else if(c!==u)if(n.hasValue(o)){const f=n.getValue(o);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(o);n.addValue(o,ii(f!==void 0?f:u,{owner:n}))}}for(const o in i)a[o]===void 0&&n.removeValue(o);return a}const Ey=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let _j=class{scrapeMotionValuesFromProps(a,i,o){return{}}constructor({parent:a,props:i,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:c,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=jf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=mn.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,De.render(this.render,!1,!0))};const{latestValues:h,renderState:p,onUpdate:g}=f;this.onUpdate=g,this.latestValues=h,this.baseTarget={...h},this.initialValues=i.initial?{...h}:{},this.renderState=p,this.parent=a,this.props=i,this.presenceContext=o,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=m,this.blockInitialAnimation=!!c,this.isControllingVariants=Ss(i),this.isVariantNode=Tx(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:b,..._}=this.scrapeMotionValuesFromProps(i,{},this);for(const A in _){const N=_[A];h[A]!==void 0&&ft(N)&&N.set(h[A],!1)}}mount(a){this.current=a,bj.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((i,o)=>this.bindToMotionValue(o,i))),Ux.current||vj(),this.shouldReduceMotion=this.reducedMotionConfig!=="never"&&(this.reducedMotionConfig==="always"||Yd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach((a=>a())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(a,i){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const o=Kr.has(a);o&&this.onBindTransform&&this.onBindTransform();const u=i.on("change",(m=>{this.latestValues[a]=m,this.props.onUpdate&&De.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)})),c=i.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,a,i)),this.valueSubscriptions.set(a,(()=>{u(),c(),f&&f(),i.owner&&i.stop()}))}sortNodePosition(a){return this.current&&this.sortInstanceNodePosition&&this.type===a.type?this.sortInstanceNodePosition(this.current,a.current):0}updateFeatures(){let a="animation";for(a in Ga){const i=Ga[a];if(!i)continue;const{isEnabled:o,Feature:u}=i;if(!this.features[a]&&u&&o(this.props)&&(this.features[a]=new u(this)),this.features[a]){const c=this.features[a];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qe()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,i){this.latestValues[a]=i}update(a,i){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Ey.length;o++){const u=Ey[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const c=a["on"+u];c&&(this.propEventSubscriptions[u]=this.on(u,c))}this.prevMotionValues=xj(this,this.scrapeMotionValuesFromProps(a,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(a),()=>i.variantChildren.delete(a)}addValue(a,i){const o=this.values.get(a);i!==o&&(o&&this.removeValue(a),this.bindToMotionValue(a,i),this.values.set(a,i),this.latestValues[a]=i.get())}removeValue(a){this.values.delete(a);const i=this.valueSubscriptions.get(a);i&&(i(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,i){if(this.props.values&&this.props.values[a])return this.props.values[a];let o=this.values.get(a);return o===void 0&&i!==void 0&&(o=ii(i===null?void 0:i,{owner:this}),this.addValue(a,o)),o}readValue(a,i){let o=this.latestValues[a]===void 0&&this.current?this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options):this.latestValues[a];return o!=null&&(typeof o=="string"&&(Yb(o)||Db(o))?o=parseFloat(o):!yj(o)&&hr.test(i)&&(o=Vb(a,i)),this.setBaseTarget(a,ft(o)?o.get():o)),ft(o)?o.get():o}setBaseTarget(a,i){this.baseTarget[a]=i}getBaseTarget(a){const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=ff(this.props,i,this.presenceContext?.custom);c&&(o=c[a])}if(i&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,a);return u===void 0||ft(u)?this.initialValues[a]!==void 0&&o===void 0?void 0:this.baseTarget[a]:u}on(a,i){return this.events[a]||(this.events[a]=new vf),this.events[a].add(i)}notify(a,...i){this.events[a]&&this.events[a].notify(...i)}},Vx=class extends _j{constructor(){super(...arguments),this.KeyframeResolver=Kb}sortInstanceNodePosition(a,i){return 2&a.compareDocumentPosition(i)?1:-1}getBaseTargetFromProps(a,i){return a.style?a.style[i]:void 0}removeValueFromRenderState(a,{vars:i,style:o}){delete i[a],delete o[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;ft(a)&&(this.childSubscription=a.on("change",(i=>{this.current&&(this.current.textContent=`${i}`)})))}};function Sj(n){return window.getComputedStyle(n)}let Ej=class extends Vx{constructor(){super(...arguments),this.type="html",this.renderInstance=Dx}readValueFromInstance(a,i){if(Kr.has(i))return x2(a,i);{const o=Sj(a),u=(Af(i)?o.getPropertyValue(i):o[i])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:i}){return ix(a,i)}build(a,i,o){Lf(a,i,o.transformTemplate)}scrapeMotionValuesFromProps(a,i,o){return kf(a,i,o)}},Tj=class extends Vx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Qe,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&zx(this.current,this.renderState)}}getBaseTargetFromProps(a,i){return a[i]}readValueFromInstance(a,i){if(Kr.has(i)){const o=Ub(i);return o&&o.default||0}return i=Ox.has(i)?i:gf(i),a.getAttribute(i)}scrapeMotionValuesFromProps(a,i,o){return Lx(a,i,o)}onBindTransform(){this.current&&!this.renderState.dimensions&&De.postRender(this.updateDimensions)}build(a,i,o){Bf(a,i,this.isSVGTag,o.transformTemplate)}renderInstance(a,i,o,u){$x(a,i,o,u)}mount(a){this.isSVGTag=Hf(a.tagName),super.mount(a)}};const wj=(n,a)=>Vf(n)?new Tj(a):new Ej(a,{allowProjection:n!==S.Fragment}),jj=pj({..._T,...kw,...jw,...Yw},wj),Aj=BE(jj),Nj={STANDARD:`cubic-bezier(${[.2,0,0,1].toString()})`};var dd={ripple:"ripple-module_ripple__8Y3pc",hovered:"ripple-module_hovered__nOsN-",pressed:"ripple-module_pressed__WGjcN"};en(`.ripple-module_ripple__8Y3pc {\r 
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
`);const Cj=n=>{const[a,i]=S.useState(null);return S.useEffect((()=>{var o,u;const c=(o=n.current)===null||o===void 0?void 0:o.getAttribute("for");if(c){const f=document.getElementById(c),m=(u=n.current)===null||u===void 0?void 0:u.parentElement;i(f||m)}}),[n]),a};var pt;(function(n){n[n.INACTIVE=0]="INACTIVE",n[n.TOUCH_DELAY=1]="TOUCH_DELAY",n[n.HOLDING=2]="HOLDING",n[n.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(pt||(pt={}));const Mj=["click","keydown","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Si=n=>{const{id:a,disabled:i=!1,style:o,className:u}=n,c=a||`actify-ripple${S.useId()}`,[f,m]=S.useState(!1),[h,p]=S.useState(!1),g=S.useRef(null),b=Cj(g),_=S.useRef(pt.INACTIVE),A=S.useRef(""),N=S.useRef(""),w=S.useRef(0),j=S.useRef(null),D=S.useRef(null),k=S.useRef(!1),q=({pointerType:R})=>R==="touch",Z=R=>{const{height:W,width:re}=g.current.getBoundingClientRect(),z={x:(re-w.current)/2,y:(W-w.current)/2};let X;return X=R instanceof PointerEvent?(ee=>{const{scrollX:pe,scrollY:de}=window,{left:C,top:G}=g.current.getBoundingClientRect(),I=pe+C,te=de+G,{pageX:ce,pageY:ve}=ee;return{x:ce-I,y:ve-te}})(R):{x:re/2,y:W/2},X={x:X.x-w.current/2,y:X.y-w.current/2},{startPoint:X,endPoint:z}},B=R=>{var W,re;if(!g.current)return;p(!0),(W=j.current)===null||W===void 0||W.cancel(),(()=>{const{height:de,width:C}=g.current.getBoundingClientRect(),G=Math.max(de,C),I=Math.max(.35*G,75),te=Math.floor(.2*G),ce=Math.sqrt(Math.pow(C,2)+Math.pow(de,2))+10;w.current=te,N.current=""+(ce+I)/te,A.current=`${w.current}px`})();const{startPoint:z,endPoint:X}=Z(R),ee=`${z.x}px, ${z.y}px`,pe=`${X.x}px, ${X.y}px`;j.current=(re=g.current)===null||re===void 0?void 0:re.animate({top:[0,0],left:[0,0],height:[A.current,A.current],width:[A.current,A.current],transform:[`translate(${ee}) scale(1)`,`translate(${pe}) scale(${N.current})`]},{pseudoElement:"::after",duration:450,easing:Nj.STANDARD,fill:"forwards"})},J=()=>Jc(void 0,void 0,void 0,(function*(){D.current=null,_.current=pt.INACTIVE;const R=j.current;let W=1/0;typeof R?.currentTime=="number"?W=R.currentTime:R?.currentTime&&(W=R.currentTime.to("ms").value),W>=225?p(!1):(yield new Promise((re=>setTimeout(re,225-W))),j.current===R&&p(!1))})),Q=R=>{if(i||!R.isPrimary||D.current&&D.current.pointerId!==R.pointerId)return!1;if(R.type==="pointerenter"||R.type==="pointerleave")return!q(R);const W=R.buttons===1;return q(R)||W},E=R=>{Q(R)&&J()},K=R=>Jc(void 0,void 0,void 0,(function*(){if(Q(R)){if(D.current=R,!q(R))return _.current=pt.WAITING_FOR_CLICK,void B(R);k.current&&!(({x:W,y:re})=>{const{top:z,left:X,bottom:ee,right:pe}=g.current.getBoundingClientRect();return W>=X&&W<=pe&&re>=z&&re<=ee})(R)||(k.current=!1,_.current=pt.TOUCH_DELAY,yield new Promise((W=>{setTimeout(W,150)})),_.current===pt.TOUCH_DELAY&&(_.current=pt.HOLDING,B(R)))}})),le=R=>{Q(R)&&m(!0)},F=R=>{Q(R)&&(m(!1),_.current!==pt.INACTIVE&&J())},oe=R=>{if(Q(R)){if(_.current!==pt.HOLDING)return _.current===pt.TOUCH_DELAY?(_.current=pt.WAITING_FOR_CLICK,void B(D.current)):void 0;_.current=pt.WAITING_FOR_CLICK}};return S.useEffect((()=>{if(b)for(const R of Mj)b.addEventListener(R,(W=>Jc(void 0,void 0,void 0,(function*(){if(W.type!="keydown"||W.code=="Enter"||W.code=="Space")switch(W.type){case"click":case"keydown":_.current!==pt.WAITING_FOR_CLICK?_.current===pt.INACTIVE&&(B(),J()):J();break;case"contextmenu":i||(k.current=!0,J());break;case"pointercancel":E(W);break;case"pointerdown":yield K(W);break;case"pointerenter":le(W);break;case"pointerleave":F(W);break;case"pointerup":oe(W)}}))))}),[g.current,i]),y.jsx("label",{ref:g,style:o,htmlFor:c,"aria-hidden":"true",className:on(dd.ripple,f&&dd.hovered,h&&dd.pressed,u)})};Si.displayName="Actify.Ripple";var fd={root:"card-module_root__o4tFN",filled:"card-module_filled__BUroO",outlined:"card-module_outlined__gIHoH",card:"card-module_card__ukHma"};en(`.card-module_root__o4tFN {\r 
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
`);const Bx=n=>{const{id:a,ripple:i=!1,variant:o="elevated",elevation:u=1,children:c,className:f}=n,m=Xr(n,["id","ripple","variant","elevation","children","className"]),h=a||`actify-card${Be.useId()}`;return y.jsxs("div",Object.assign({},m,{className:on(fd.root,fd[o],f),children:[y.jsx("div",{className:fd.card,children:c}),i&&y.jsx(Si,{id:h}),o==="elevated"&&y.jsx(uf,{className:`[--md-elevation-level:${u}]`})]}))};Bx.displayName="Actify.Card";const Rj=S.createContext(null);let cr=null;function zj(n,a="assertive",i=7e3){cr?cr.announce(n,a,i):(cr=new Dj,(typeof IS_REACT_ACT_ENVIRONMENT=="boolean"?IS_REACT_ACT_ENVIRONMENT:typeof jest<"u")?cr.announce(n,a,i):setTimeout((()=>{cr?.isAttached()&&cr?.announce(n,a,i)}),100))}let Dj=class{isAttached(){var a;return(a=this.node)===null||a===void 0?void 0:a.isConnected}createLog(a){let i=document.createElement("div");return i.setAttribute("role","log"),i.setAttribute("aria-live",a),i.setAttribute("aria-relevant","additions"),i}destroy(){this.node&&(document.body.removeChild(this.node),this.node=null)}announce(a,i="assertive",o=7e3){var u,c;if(!this.node)return;let f=document.createElement("div");typeof a=="object"?(f.setAttribute("role","img"),f.setAttribute("aria-labelledby",a["aria-labelledby"])):f.textContent=a,i==="assertive"?(u=this.assertiveLog)===null||u===void 0||u.appendChild(f):(c=this.politeLog)===null||c===void 0||c.appendChild(f),a!==""&&setTimeout((()=>{f.remove()}),o)}clear(a){this.node&&(a&&a!=="assertive"||!this.assertiveLog||(this.assertiveLog.innerHTML=""),a&&a!=="polite"||!this.politeLog||(this.politeLog.innerHTML=""))}constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<"u"&&(this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}};if(typeof HTMLTemplateElement<"u"){const n=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:n.call(this)}})}const Oj=S.createContext(!1);function $j(n){let a=(i,o)=>S.useContext(Oj)?null:n(i,o);return a.displayName=n.displayName||n.name,S.forwardRef(a)}const Lj=new Set(["id"]),Uj=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),Vj=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),Bj=/^(data-.*)$/;function Yf(n,a={}){let{labelable:i,isLink:o,propNames:u}=a,c={};for(const f in n)Object.prototype.hasOwnProperty.call(n,f)&&(Lj.has(f)||i&&Uj.has(f)||o&&Vj.has(f)||u?.has(f)||Bj.test(f))&&(c[f]=n[f]);return c}const gt=n=>{var a;return(a=n?.ownerDocument)!==null&&a!==void 0?a:document},Jt=n=>n&&"window"in n&&n.window===n?n:gt(n).defaultView||window;let Oa=new Map,qd=new Set;function Ty(){if(typeof window>"u")return;function n(i){return"propertyName"in i}let a=i=>{if(!n(i)||!i.target)return;let o=Oa.get(i.target);if(o&&(o.delete(i.propertyName),o.size===0&&(i.target.removeEventListener("transitioncancel",a),Oa.delete(i.target)),Oa.size===0)){for(let u of qd)u();qd.clear()}};document.body.addEventListener("transitionrun",(i=>{if(!n(i)||!i.target)return;let o=Oa.get(i.target);o||(o=new Set,Oa.set(i.target,o),i.target.addEventListener("transitioncancel",a,{once:!0})),o.add(i.propertyName)})),document.body.addEventListener("transitionend",a)}function Hx(n){requestAnimationFrame((()=>{Oa.size===0?n():qd.add(n)}))}typeof document<"u"&&(document.readyState!=="loading"?Ty():document.addEventListener("DOMContentLoaded",Ty));function Es(n){var a;return typeof window<"u"&&window.navigator!=null&&(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.brands.some((i=>n.test(i.brand))))||n.test(window.navigator.userAgent))}function qf(n){var a;return typeof window<"u"&&window.navigator!=null&&n.test(((a=window.navigator.userAgentData)===null||a===void 0?void 0:a.platform)||window.navigator.platform)}function vr(n){let a=null;return()=>(a==null&&(a=n()),a)}const hi=vr((function(){return qf(/^Mac/i)})),Hj=vr((function(){return qf(/^iPhone/i)})),kx=vr((function(){return qf(/^iPad/i)||hi()&&navigator.maxTouchPoints>1})),Yx=vr((function(){return Hj()||kx()})),kj=vr((function(){return Es(/AppleWebKit/i)&&!Yj()})),Yj=vr((function(){return Es(/Chrome/i)})),qx=vr((function(){return Es(/Android/i)})),qj=vr((function(){return Es(/Firefox/i)}));let ka="default",Gd="",rs=new WeakMap;function wy(n){if(Yx()){if(ka==="default"){const a=gt(n);Gd=a.documentElement.style.webkitUserSelect,a.documentElement.style.webkitUserSelect="none"}ka="disabled"}else if(n instanceof HTMLElement||n instanceof SVGElement){let a="userSelect"in n.style?"userSelect":"webkitUserSelect";rs.set(n,n.style[a]),n.style[a]="none"}}function md(n){if(Yx()){if(ka!=="disabled")return;ka="restoring",setTimeout((()=>{Hx((()=>{if(ka==="restoring"){const a=gt(n);a.documentElement.style.webkitUserSelect==="none"&&(a.documentElement.style.webkitUserSelect=Gd||""),Gd="",ka="default"}}))}),300)}else if((n instanceof HTMLElement||n instanceof SVGElement)&&n&&rs.has(n)){let a=rs.get(n),i="userSelect"in n.style?"userSelect":"webkitUserSelect";n.style[i]==="none"&&(n.style[i]=a),n.getAttribute("style")===""&&n.removeAttribute("style"),rs.delete(n)}}const Gx=Be.createContext({register:()=>{}});Gx.displayName="PressResponderContext";function Xa(n){if((function(){if(Ko==null){Ko=!1;try{document.createElement("div").focus({get preventScroll(){return Ko=!0,!0}})}catch{}}return Ko})())n.focus({preventScroll:!0});else{let a=(function(i){let o=i.parentNode,u=[],c=document.scrollingElement||document.documentElement;for(;o instanceof HTMLElement&&o!==c;)(o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth)&&u.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),o=o.parentNode;return c instanceof HTMLElement&&u.push({element:c,scrollTop:c.scrollTop,scrollLeft:c.scrollLeft}),u})(n);n.focus(),(function(i){for(let{element:o,scrollTop:u,scrollLeft:c}of i)o.scrollTop=u,o.scrollLeft=c})(a)}}let Ko=null;const Xx=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable^="false"])'],Gj=Xx.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";Xx.push('[tabindex]:not([tabindex="-1"]):not([disabled])');function Xj(n){return n.matches(Gj)}let Px=class{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(a,i){this.nativeEvent=i,this.target=i.target,this.currentTarget=i.currentTarget,this.relatedTarget=i.relatedTarget,this.bubbles=i.bubbles,this.cancelable=i.cancelable,this.defaultPrevented=i.defaultPrevented,this.eventPhase=i.eventPhase,this.isTrusted=i.isTrusted,this.timeStamp=i.timeStamp,this.type=a}};function Kx(n){let a=S.useRef({isFocused:!1,observer:null});Pr((()=>{const o=a.current;return()=>{o.observer&&(o.observer.disconnect(),o.observer=null)}}),[]);let i=Ft((o=>{n?.(o)}));return S.useCallback((o=>{if(o.target instanceof HTMLButtonElement||o.target instanceof HTMLInputElement||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLSelectElement){a.current.isFocused=!0;let u=o.target,c=f=>{a.current.isFocused=!1,u.disabled&&i(new Px("blur",f)),a.current.observer&&(a.current.observer.disconnect(),a.current.observer=null)};u.addEventListener("focusout",c,{once:!0}),a.current.observer=new MutationObserver((()=>{if(a.current.isFocused&&u.disabled){var f;(f=a.current.observer)===null||f===void 0||f.disconnect();let m=u===document.activeElement?null:document.activeElement;u.dispatchEvent(new FocusEvent("blur",{relatedTarget:m})),u.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:m}))}})),a.current.observer.observe(u,{attributes:!0,attributeFilter:["disabled"]})}}),[i])}let ms=!1;function jy(n){for(;n&&!Xj(n);)n=n.parentElement;let a=Jt(n),i=a.document.activeElement;if(!i||i===n)return;ms=!0;let o=!1,u=g=>{(g.target===i||o)&&g.stopImmediatePropagation()},c=g=>{(g.target===i||o)&&(g.stopImmediatePropagation(),n||o||(o=!0,Xa(i),h()))},f=g=>{(g.target===n||o)&&g.stopImmediatePropagation()},m=g=>{(g.target===n||o)&&(g.stopImmediatePropagation(),o||(o=!0,Xa(i),h()))};a.addEventListener("blur",u,!0),a.addEventListener("focusout",c,!0),a.addEventListener("focusin",m,!0),a.addEventListener("focus",f,!0);let h=()=>{cancelAnimationFrame(p),a.removeEventListener("blur",u,!0),a.removeEventListener("focusout",c,!0),a.removeEventListener("focusin",m,!0),a.removeEventListener("focus",f,!0),ms=!1,o=!1},p=requestAnimationFrame(h);return h}function Pj(n,a){return a.get?a.get.call(n):a.value}function Qx(n,a,i){if(!a.has(n))throw new TypeError("attempted to "+i+" private field on non-instance");return a.get(n)}function Kj(n,a){var i=Qx(n,a,"get");return Pj(n,i)}function Qj(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Zj(n,a,i){Qj(n,a),a.set(n,i)}function Fj(n,a,i){if(a.set)a.set.call(n,i);else{if(!a.writable)throw new TypeError("attempted to set read only private field");a.value=i}}function Ay(n,a,i){var o=Qx(n,a,"set");return Fj(n,o,i),i}function qe(n,a){return!(!a||!n)&&n.contains(a)}const pi=(n=document)=>n.activeElement;function Le(n){return n.target}S.createContext({isNative:!0,open:function(n,a){(function(i,o){if(i instanceof HTMLAnchorElement)o(i);else if(i.hasAttribute("data-href")){let u=document.createElement("a");u.href=i.getAttribute("data-href"),i.hasAttribute("data-target")&&(u.target=i.getAttribute("data-target")),i.hasAttribute("data-rel")&&(u.rel=i.getAttribute("data-rel")),i.hasAttribute("data-download")&&(u.download=i.getAttribute("data-download")),i.hasAttribute("data-ping")&&(u.ping=i.getAttribute("data-ping")),i.hasAttribute("data-referrer-policy")&&(u.referrerPolicy=i.getAttribute("data-referrer-policy")),i.appendChild(u),o(u),i.removeChild(u)}})(n,(i=>Pa(i,a)))},useHref:n=>n});function Pa(n,a,i=!0){var o,u;let{metaKey:c,ctrlKey:f,altKey:m,shiftKey:h}=a;qj()&&(!((u=window.event)===null||u===void 0||(o=u.type)===null||o===void 0)&&o.startsWith("key"))&&n.target==="_blank"&&(hi()?c=!0:f=!0);let p=kj()&&hi()&&!kx()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:c,ctrlKey:f,altKey:m,shiftKey:h}):new MouseEvent("click",{metaKey:c,ctrlKey:f,altKey:m,shiftKey:h,bubbles:!0,cancelable:!0});Pa.isOpening=i,Xa(n),n.dispatchEvent(p),Pa.isOpening=!1}Pa.isOpening=!1;function Gf(){let n=S.useRef(new Map),a=S.useCallback(((u,c,f,m)=>{let h=m?.once?(...p)=>{n.current.delete(f),f(...p)}:f;n.current.set(f,{type:c,eventTarget:u,fn:h,options:m}),u.addEventListener(c,h,m)}),[]),i=S.useCallback(((u,c,f,m)=>{var h;let p=((h=n.current.get(f))===null||h===void 0?void 0:h.fn)||f;u.removeEventListener(c,p,m),n.current.delete(f)}),[]),o=S.useCallback((()=>{n.current.forEach(((u,c)=>{i(u.eventTarget,u.type,c,u.options)}))}),[i]);return S.useEffect((()=>o),[o]),{addGlobalListener:a,removeGlobalListener:i,removeAllGlobalListeners:o}}function Zx(n,a){Pr((()=>{if(n&&n.ref&&a)return n.ref.current=a.current,()=>{n.ref&&(n.ref.current=null)}}))}function Xd(n){return!(n.mozInputSource!==0||!n.isTrusted)||(qx()&&n.pointerType?n.type==="click"&&n.buttons===1:n.detail===0&&!n.pointerType)}function Jj(n){return!qx()&&n.width===0&&n.height===0||n.width===1&&n.height===1&&n.pressure===0&&n.detail===0&&n.pointerType==="mouse"}var Qo=new WeakMap;let Zo=class{continuePropagation(){Ay(this,Qo,!1)}get shouldStopPropagation(){return Kj(this,Qo)}constructor(a,i,o,u){var c;Zj(this,Qo,{writable:!0,value:void 0}),Ay(this,Qo,!0);let f=(c=u?.target)!==null&&c!==void 0?c:o.currentTarget;const m=f?.getBoundingClientRect();let h,p,g=0,b=null;o.clientX!=null&&o.clientY!=null&&(p=o.clientX,b=o.clientY),m&&(p!=null&&b!=null?(h=p-m.left,g=b-m.top):(h=m.width/2,g=m.height/2)),this.type=a,this.pointerType=i,this.target=o.currentTarget,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.x=h,this.y=g}};const Ny=Symbol("linkClicked");function Wj(n){let{onPress:a,onPressChange:i,onPressStart:o,onPressEnd:u,onPressUp:c,isDisabled:f,isPressed:m,preventFocusOnPress:h,shouldCancelOnPointerExit:p,allowTextSelectionOnPress:g,ref:b,..._}=(function(E){let K=S.useContext(Gx);if(K){let{register:le,...F}=K;E=yt(F,E),le()}return Zx(K,E.ref),E})(n),[A,N]=S.useState(!1),w=S.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:j,removeAllGlobalListeners:D}=Gf(),k=Ft(((E,K)=>{let le=w.current;if(f||le.didFirePressStart)return!1;let F=!0;if(le.isTriggeringEvent=!0,o){let oe=new Zo("pressstart",K,E);o(oe),F=oe.shouldStopPropagation}return i&&i(!0),le.isTriggeringEvent=!1,le.didFirePressStart=!0,N(!0),F})),q=Ft(((E,K,le=!0)=>{let F=w.current;if(!F.didFirePressStart)return!1;F.didFirePressStart=!1,F.isTriggeringEvent=!0;let oe=!0;if(u){let R=new Zo("pressend",K,E);u(R),oe=R.shouldStopPropagation}if(i&&i(!1),N(!1),a&&le&&!f){let R=new Zo("press",K,E);a(R),oe&&(oe=R.shouldStopPropagation)}return F.isTriggeringEvent=!1,oe})),Z=Ft(((E,K)=>{let le=w.current;if(f)return!1;if(c){le.isTriggeringEvent=!0;let F=new Zo("pressup",K,E);return c(F),le.isTriggeringEvent=!1,F.shouldStopPropagation}return!0})),B=Ft((E=>{let K=w.current;if(K.isPressed&&K.target){K.didFirePressStart&&K.pointerType!=null&&q(Da(K.target,E),K.pointerType,!1),K.isPressed=!1,K.isOverTarget=!1,K.activePointerId=null,K.pointerType=null,D(),g||md(K.target);for(let le of K.disposables)le();K.disposables=[]}})),J=Ft((E=>{p&&B(E)})),Q=S.useMemo((()=>{let E=w.current,K={onKeyDown(F){if(hd(F.nativeEvent,F.currentTarget)&&qe(F.currentTarget,Le(F.nativeEvent))){var oe;Ry(Le(F.nativeEvent),F.key)&&F.preventDefault();let R=!0;if(!E.isPressed&&!F.repeat){E.target=F.currentTarget,E.isPressed=!0,E.pointerType="keyboard",R=k(F,"keyboard");let W=F.currentTarget,re=z=>{hd(z,W)&&!z.repeat&&qe(W,Le(z))&&E.target&&Z(Da(E.target,z),"keyboard")};j(gt(F.currentTarget),"keyup",hb(re,le),!0)}R&&F.stopPropagation(),F.metaKey&&hi()&&((oe=E.metaKeyEvents)===null||oe===void 0||oe.set(F.key,F.nativeEvent))}else F.key==="Meta"&&(E.metaKeyEvents=new Map)},onClick(F){if((!F||qe(F.currentTarget,Le(F.nativeEvent)))&&F&&F.button===0&&!E.isTriggeringEvent&&!Pa.isOpening){let oe=!0;if(f&&F.preventDefault(),E.ignoreEmulatedMouseEvents||E.isPressed||E.pointerType!=="virtual"&&!Xd(F.nativeEvent)){if(E.isPressed&&E.pointerType!=="keyboard"){let R=E.pointerType||F.nativeEvent.pointerType||"virtual";oe=q(Da(F.currentTarget,F),R,!0),E.isOverTarget=!1,B(F)}}else{let R=k(F,"virtual"),W=Z(F,"virtual"),re=q(F,"virtual");oe=R&&W&&re}E.ignoreEmulatedMouseEvents=!1,oe&&F.stopPropagation()}}},le=F=>{var oe;if(E.isPressed&&E.target&&hd(F,E.target)){var R;Ry(Le(F),F.key)&&F.preventDefault();let re=Le(F);q(Da(E.target,F),"keyboard",qe(E.target,Le(F))),D(),F.key!=="Enter"&&Xf(E.target)&&qe(E.target,re)&&!F[Ny]&&(F[Ny]=!0,Pa(E.target,F,!1)),E.isPressed=!1,(R=E.metaKeyEvents)===null||R===void 0||R.delete(F.key)}else if(F.key==="Meta"&&(!((oe=E.metaKeyEvents)===null||oe===void 0)&&oe.size)){var W;let re=E.metaKeyEvents;E.metaKeyEvents=void 0;for(let z of re.values())(W=E.target)===null||W===void 0||W.dispatchEvent(new KeyboardEvent("keyup",z))}};if(typeof PointerEvent<"u"){K.onPointerDown=R=>{if(R.button!==0||!qe(R.currentTarget,Le(R.nativeEvent)))return;if(Jj(R.nativeEvent))return void(E.pointerType="virtual");E.pointerType=R.pointerType;let W=!0;if(!E.isPressed){E.isPressed=!0,E.isOverTarget=!0,E.activePointerId=R.pointerId,E.target=R.currentTarget,g||wy(E.target),W=k(R,E.pointerType);let re=Le(R.nativeEvent);"releasePointerCapture"in re&&re.releasePointerCapture(R.pointerId),j(gt(R.currentTarget),"pointerup",F,!1),j(gt(R.currentTarget),"pointercancel",oe,!1)}W&&R.stopPropagation()},K.onMouseDown=R=>{if(qe(R.currentTarget,Le(R.nativeEvent))&&R.button===0){if(h){let W=jy(R.target);W&&E.disposables.push(W)}R.stopPropagation()}},K.onPointerUp=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&E.pointerType!=="virtual"&&R.button===0&&Z(R,E.pointerType||R.pointerType)},K.onPointerEnter=R=>{R.pointerId===E.activePointerId&&E.target&&!E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!0,k(Da(E.target,R),E.pointerType))},K.onPointerLeave=R=>{R.pointerId===E.activePointerId&&E.target&&E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,q(Da(E.target,R),E.pointerType,!1),J(R))};let F=R=>{if(R.pointerId===E.activePointerId&&E.isPressed&&R.button===0&&E.target){if(qe(E.target,Le(R))&&E.pointerType!=null){let W=!1,re=setTimeout((()=>{E.isPressed&&E.target instanceof HTMLElement&&(W?B(R):(Xa(E.target),E.target.click()))}),80);j(R.currentTarget,"click",(()=>W=!0),!0),E.disposables.push((()=>clearTimeout(re)))}else B(R);E.isOverTarget=!1}},oe=R=>{B(R)};K.onDragStart=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&B(R)}}else{K.onMouseDown=R=>{if(!(R.button!==0||!qe(R.currentTarget,Le(R.nativeEvent)))){if(E.ignoreEmulatedMouseEvents)return void R.stopPropagation();if(E.isPressed=!0,E.isOverTarget=!0,E.target=R.currentTarget,E.pointerType=Xd(R.nativeEvent)?"virtual":"mouse",xE.flushSync((()=>k(R,E.pointerType)))&&R.stopPropagation(),h){let W=jy(R.target);W&&E.disposables.push(W)}j(gt(R.currentTarget),"mouseup",F,!1)}},K.onMouseEnter=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!0,W=k(R,E.pointerType)),W&&R.stopPropagation()},K.onMouseLeave=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=!0;E.isPressed&&!E.ignoreEmulatedMouseEvents&&E.pointerType!=null&&(E.isOverTarget=!1,W=q(R,E.pointerType,!1),J(R)),W&&R.stopPropagation()},K.onMouseUp=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&(E.ignoreEmulatedMouseEvents||R.button!==0||Z(R,E.pointerType||"mouse"))};let F=R=>{R.button===0&&(E.ignoreEmulatedMouseEvents?E.ignoreEmulatedMouseEvents=!1:(E.target&&E.target.contains(R.target)&&E.pointerType!=null||B(R),E.isOverTarget=!1))};K.onTouchStart=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;let W=(function(re){const{targetTouches:z}=re;return z.length>0?z[0]:null})(R.nativeEvent);W&&(E.activePointerId=W.identifier,E.ignoreEmulatedMouseEvents=!0,E.isOverTarget=!0,E.isPressed=!0,E.target=R.currentTarget,E.pointerType="touch",g||wy(E.target),k(dr(E.target,R),E.pointerType)&&R.stopPropagation(),j(Jt(R.currentTarget),"scroll",oe,!0))},K.onTouchMove=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;if(!E.isPressed)return void R.stopPropagation();let W=Cy(R.nativeEvent,E.activePointerId),re=!0;W&&My(W,R.currentTarget)?E.isOverTarget||E.pointerType==null||(E.isOverTarget=!0,re=k(dr(E.target,R),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(E.isOverTarget=!1,re=q(dr(E.target,R),E.pointerType,!1),J(dr(E.target,R))),re&&R.stopPropagation()},K.onTouchEnd=R=>{if(!qe(R.currentTarget,Le(R.nativeEvent)))return;if(!E.isPressed)return void R.stopPropagation();let W=Cy(R.nativeEvent,E.activePointerId),re=!0;W&&My(W,R.currentTarget)&&E.pointerType!=null?(Z(dr(E.target,R),E.pointerType),re=q(dr(E.target,R),E.pointerType)):E.isOverTarget&&E.pointerType!=null&&(re=q(dr(E.target,R),E.pointerType,!1)),re&&R.stopPropagation(),E.isPressed=!1,E.activePointerId=null,E.isOverTarget=!1,E.ignoreEmulatedMouseEvents=!0,E.target&&!g&&md(E.target),D()},K.onTouchCancel=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&(R.stopPropagation(),E.isPressed&&B(dr(E.target,R)))};let oe=R=>{E.isPressed&&qe(Le(R),E.target)&&B({currentTarget:E.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};K.onDragStart=R=>{qe(R.currentTarget,Le(R.nativeEvent))&&B(R)}}return K}),[j,f,h,D,g,B,J,q,k,Z]);return S.useEffect((()=>{let E=w.current;return()=>{var K;g||md((K=E.target)!==null&&K!==void 0?K:void 0);for(let le of E.disposables)le();E.disposables=[]}}),[g]),{isPressed:m||A,pressProps:yt(_,Q)}}function Xf(n){return n.tagName==="A"&&n.hasAttribute("href")}function hd(n,a){const{key:i,code:o}=n,u=a,c=u.getAttribute("role");return!(i!=="Enter"&&i!==" "&&i!=="Spacebar"&&o!=="Space"||u instanceof Jt(u).HTMLInputElement&&!Fx(u,i)||u instanceof Jt(u).HTMLTextAreaElement||u.isContentEditable||(c==="link"||!c&&Xf(u))&&i!=="Enter")}function Cy(n,a){const i=n.changedTouches;for(let o=0;o<i.length;o++){const u=i[o];if(u.identifier===a)return u}return null}function dr(n,a){let i=0,o=0;return a.targetTouches&&a.targetTouches.length===1&&(i=a.targetTouches[0].clientX,o=a.targetTouches[0].clientY),{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function Da(n,a){let i=a.clientX,o=a.clientY;return{currentTarget:n,shiftKey:a.shiftKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,altKey:a.altKey,clientX:i,clientY:o}}function My(n,a){let i=a.getBoundingClientRect();return c=(function(f){let m=0,h=0;return f.width!==void 0?m=f.width/2:f.radiusX!==void 0&&(m=f.radiusX),f.height!==void 0?h=f.height/2:f.radiusY!==void 0&&(h=f.radiusY),{top:f.clientY-h,right:f.clientX+m,bottom:f.clientY+h,left:f.clientX-m}})(n),!((u=i).left>c.right||c.left>u.right||u.top>c.bottom||c.top>u.bottom);var u,c}function Ry(n,a){return n instanceof HTMLInputElement?!Fx(n,a):(function(i){return!(i instanceof HTMLInputElement||(i instanceof HTMLButtonElement?i.type==="submit"||i.type==="reset":Xf(i)))})(n)}const Ij=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Fx(n,a){return n.type==="checkbox"||n.type==="radio"?a===" ":Ij.has(n.type)}let Qr=null,Pd=new Set,ri=new Map,Yr=!1,Kd=!1;const eA={Tab:!0,Escape:!0};function Ts(n,a){for(let i of Pd)i(n,a)}function hs(n){Yr=!0,(function(a){return!(a.metaKey||!hi()&&a.altKey||a.ctrlKey||a.key==="Control"||a.key==="Shift"||a.key==="Meta")})(n)&&(Qr="keyboard",Ts("keyboard",n))}function Zt(n){Qr="pointer",n.type!=="mousedown"&&n.type!=="pointerdown"||(Yr=!0,Ts("pointer",n))}function Jx(n){Xd(n)&&(Yr=!0,Qr="virtual")}function Wx(n){n.target!==window&&n.target!==document&&!ms&&n.isTrusted&&(Yr||Kd||(Qr="virtual",Ts("virtual",n)),Yr=!1,Kd=!1)}function Ix(){ms||(Yr=!1,Kd=!0)}function Qd(n){if(typeof window>"u"||ri.get(Jt(n)))return;const a=Jt(n),i=gt(n);let o=a.HTMLElement.prototype.focus;a.HTMLElement.prototype.focus=function(){Yr=!0,o.apply(this,arguments)},i.addEventListener("keydown",hs,!0),i.addEventListener("keyup",hs,!0),i.addEventListener("click",Jx,!0),a.addEventListener("focus",Wx,!0),a.addEventListener("blur",Ix,!1),typeof PointerEvent<"u"?(i.addEventListener("pointerdown",Zt,!0),i.addEventListener("pointermove",Zt,!0),i.addEventListener("pointerup",Zt,!0)):(i.addEventListener("mousedown",Zt,!0),i.addEventListener("mousemove",Zt,!0),i.addEventListener("mouseup",Zt,!0)),a.addEventListener("beforeunload",(()=>{e0(n)}),{once:!0}),ri.set(a,{focus:o})}const e0=(n,a)=>{const i=Jt(n),o=gt(n);a&&o.removeEventListener("DOMContentLoaded",a),ri.has(i)&&(i.HTMLElement.prototype.focus=ri.get(i).focus,o.removeEventListener("keydown",hs,!0),o.removeEventListener("keyup",hs,!0),o.removeEventListener("click",Jx,!0),i.removeEventListener("focus",Wx,!0),i.removeEventListener("blur",Ix,!1),typeof PointerEvent<"u"?(o.removeEventListener("pointerdown",Zt,!0),o.removeEventListener("pointermove",Zt,!0),o.removeEventListener("pointerup",Zt,!0)):(o.removeEventListener("mousedown",Zt,!0),o.removeEventListener("mousemove",Zt,!0),o.removeEventListener("mouseup",Zt,!0)),ri.delete(i))};function tA(n){const a=gt(n);let i;return a.readyState!=="loading"?Qd(n):(i=()=>{Qd(n)},a.addEventListener("DOMContentLoaded",i)),()=>e0(n,i)}function t0(){return Qr!=="pointer"}function nA(){return Qr}function rA(n){Qr=n,Ts(n,null)}typeof document<"u"&&tA();const aA=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function lA(n,a,i){Qd(),S.useEffect((()=>{let o=(u,c)=>{(function(f,m,h){let p=gt(h?.target);const g=typeof window<"u"?Jt(h?.target).HTMLInputElement:HTMLInputElement,b=typeof window<"u"?Jt(h?.target).HTMLTextAreaElement:HTMLTextAreaElement,_=typeof window<"u"?Jt(h?.target).HTMLElement:HTMLElement,A=typeof window<"u"?Jt(h?.target).KeyboardEvent:KeyboardEvent;return!((f=f||p.activeElement instanceof g&&!aA.has(p.activeElement.type)||p.activeElement instanceof b||p.activeElement instanceof _&&p.activeElement.isContentEditable)&&m==="keyboard"&&h instanceof A&&!eA[h.key])})(!!i?.isTextInput,u,c)&&n(t0())};return Pd.add(o),()=>{Pd.delete(o)}}),a)}function iA(n){const a=gt(n),i=pi(a);if(nA()==="virtual"){let o=i;Hx((()=>{pi(a)===o&&n.isConnected&&Xa(n)}))}else Xa(n)}function n0(n){let{isDisabled:a,onFocus:i,onBlur:o,onFocusChange:u}=n;const c=S.useCallback((h=>{if(h.target===h.currentTarget)return o&&o(h),u&&u(!1),!0}),[o,u]),f=Kx(c),m=S.useCallback((h=>{const p=gt(h.target),g=p?pi(p):pi();h.target===h.currentTarget&&g===Le(h.nativeEvent)&&(i&&i(h),u&&u(!0),f(h))}),[u,i,f]);return{focusProps:{onFocus:!a&&(i||u||o)?m:void 0,onBlur:a||!o&&!u?void 0:c}}}function zy(n){if(!n)return;let a=!0;return i=>{let o={...i,preventDefault(){i.preventDefault()},isDefaultPrevented:()=>i.isDefaultPrevented(),stopPropagation(){a?console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."):a=!0},continuePropagation(){a=!1},isPropagationStopped:()=>a};n(o),a&&i.stopPropagation()}}function oA(n){return{keyboardProps:n.isDisabled?{}:{onKeyDown:zy(n.onKeyDown),onKeyUp:zy(n.onKeyUp)}}}let r0=Be.createContext(null);Be.forwardRef((function(n,a){let{children:i,...o}=n,u={...o,ref:pb(a)};return Be.createElement(r0.Provider,{value:u},i)}));function a0(n,a){let{focusProps:i}=n0(n),{keyboardProps:o}=oA(n),u=yt(i,o),c=(function(p){let g=S.useContext(r0)||{};Zx(g,p);let{ref:b,..._}=g;return _})(a),f=n.isDisabled?{}:c,m=S.useRef(n.autoFocus);S.useEffect((()=>{m.current&&a.current&&iA(a.current),m.current=!1}),[a]);let h=n.excludeFromTabOrder?-1:0;return n.isDisabled&&(h=void 0),{focusableProps:yt({...u,tabIndex:h},f)}}function l0(n,a){let i,{elementType:o="button",isDisabled:u,onPress:c,onPressStart:f,onPressEnd:m,onPressUp:h,onPressChange:p,preventFocusOnPress:g,allowFocusWhenDisabled:b,onClick:_,href:A,target:N,rel:w,type:j="button"}=n;i=o==="button"?{type:j,disabled:u}:{role:"button",href:o!=="a"||u?void 0:A,target:o==="a"?N:void 0,type:o==="input"?j:void 0,disabled:o==="input"?u:void 0,"aria-disabled":u&&o!=="input"?u:void 0,rel:o==="a"?w:void 0};let{pressProps:D,isPressed:k}=Wj({onPressStart:f,onPressEnd:m,onPressChange:p,onPress:c,onPressUp:h,isDisabled:u,preventFocusOnPress:g,ref:a}),{focusableProps:q}=a0(n,a);b&&(q.tabIndex=u?-1:q.tabIndex);let Z=yt(q,D,Yf(n,{labelable:!0}));return{isPressed:k,buttonProps:yt(i,Z,{"aria-haspopup":n["aria-haspopup"],"aria-expanded":n["aria-expanded"],"aria-controls":n["aria-controls"],"aria-pressed":n["aria-pressed"],"aria-current":n["aria-current"],onClick:B=>{_&&(_(B),console.warn("onClick is deprecated, please use onPress"))}})}}function sA(n){let{isDisabled:a,onBlurWithin:i,onFocusWithin:o,onFocusWithinChange:u}=n,c=S.useRef({isFocusWithin:!1}),{addGlobalListener:f,removeAllGlobalListeners:m}=Gf(),h=S.useCallback((b=>{b.currentTarget.contains(b.target)&&c.current.isFocusWithin&&!b.currentTarget.contains(b.relatedTarget)&&(c.current.isFocusWithin=!1,m(),i&&i(b),u&&u(!1))}),[i,u,c,m]),p=Kx(h),g=S.useCallback((b=>{if(!b.currentTarget.contains(b.target))return;const _=gt(b.target),A=pi(_);if(!c.current.isFocusWithin&&A===Le(b.nativeEvent)){o&&o(b),u&&u(!0),c.current.isFocusWithin=!0,p(b);let N=b.currentTarget;f(_,"focus",(w=>{if(c.current.isFocusWithin&&!qe(N,w.target)){let j=new Px("blur",new _.defaultView.FocusEvent("blur",{relatedTarget:w.target}));j.target=N,j.currentTarget=N,h(j)}}),{capture:!0})}}),[o,u,p,f,h]);return a?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:g,onBlur:h}}}function Ei(n={}){let{autoFocus:a=!1,isTextInput:i,within:o}=n,u=S.useRef({isFocused:!1,isFocusVisible:a||t0()}),[c,f]=S.useState(!1),[m,h]=S.useState((()=>u.current.isFocused&&u.current.isFocusVisible)),p=S.useCallback((()=>h(u.current.isFocused&&u.current.isFocusVisible)),[]),g=S.useCallback((A=>{u.current.isFocused=A,f(A),p()}),[p]);lA((A=>{u.current.isFocusVisible=A,p()}),[],{isTextInput:i});let{focusProps:b}=n0({isDisabled:o,onFocusChange:g}),{focusWithinProps:_}=sA({isDisabled:!o,onFocusWithinChange:g});return{isFocused:c,isFocusVisible:m,focusProps:o?_:b}}let ps=!1,pd=0;function Zd(){ps=!0,setTimeout((()=>{ps=!1}),50)}function Dy(n){n.pointerType==="touch"&&Zd()}function uA(){if(typeof document<"u")return typeof PointerEvent<"u"?document.addEventListener("pointerup",Dy):document.addEventListener("touchend",Zd),pd++,()=>{pd--,pd>0||(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Dy):document.removeEventListener("touchend",Zd))}}function cA(n){let{onHoverStart:a,onHoverChange:i,onHoverEnd:o,isDisabled:u}=n,[c,f]=S.useState(!1),m=S.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;S.useEffect(uA,[]);let{addGlobalListener:h,removeAllGlobalListeners:p}=Gf(),{hoverProps:g,triggerHoverEnd:b}=S.useMemo((()=>{let _=(w,j)=>{if(m.pointerType=j,u||j==="touch"||m.isHovered||!w.currentTarget.contains(w.target))return;m.isHovered=!0;let D=w.currentTarget;m.target=D,h(gt(w.target),"pointerover",(k=>{m.isHovered&&m.target&&!qe(m.target,k.target)&&A(k,k.pointerType)}),{capture:!0}),a&&a({type:"hoverstart",target:D,pointerType:j}),i&&i(!0),f(!0)},A=(w,j)=>{let D=m.target;m.pointerType="",m.target=null,j!=="touch"&&m.isHovered&&D&&(m.isHovered=!1,p(),o&&o({type:"hoverend",target:D,pointerType:j}),i&&i(!1),f(!1))},N={};return typeof PointerEvent<"u"?(N.onPointerEnter=w=>{ps&&w.pointerType==="mouse"||_(w,w.pointerType)},N.onPointerLeave=w=>{!u&&w.currentTarget.contains(w.target)&&A(w,w.pointerType)}):(N.onTouchStart=()=>{m.ignoreEmulatedMouseEvents=!0},N.onMouseEnter=w=>{m.ignoreEmulatedMouseEvents||ps||_(w,"mouse"),m.ignoreEmulatedMouseEvents=!1},N.onMouseLeave=w=>{!u&&w.currentTarget.contains(w.target)&&A(w,"mouse")}),{hoverProps:N,triggerHoverEnd:A}}),[a,i,o,u,m,h,p]);return S.useEffect((()=>{u&&b({currentTarget:m.target},m.pointerType)}),[u]),{hoverProps:g,isHovered:c}}const dA=new Set(["form","formAction","formEncType","formMethod","formNoValidate","formTarget","name","value"]),fA=S.createContext({}),i0=$j((function(n,a){[n,a]=$E(n,a,fA);let i=n=(function(D){return D.isPending&&(D.onPress=void 0,D.onPressStart=void 0,D.onPressEnd=void 0,D.onPressChange=void 0,D.onPressUp=void 0,D.onKeyDown=void 0,D.onKeyUp=void 0,D.onClick=void 0,D.href=void 0),D})(n),{isPending:o}=i,{buttonProps:u,isPressed:c}=l0(n,a),{focusProps:f,isFocused:m,isFocusVisible:h}=Ei(n),{hoverProps:p,isHovered:g}=cA({...n,isDisabled:n.isDisabled||o}),b={isHovered:g,isPressed:(i.isPressed||c)&&!o,isFocused:m,isFocusVisible:h,isDisabled:n.isDisabled||!1,isPending:o!=null&&o},_=DE({...n,values:b,defaultClassName:"react-aria-Button"}),A=qa(u.id),N=qa(),w=u["aria-labelledby"];o&&(w?w=`${w} ${N}`:u["aria-label"]&&(w=`${A} ${N}`));let j=S.useRef(o);return S.useEffect((()=>{let D={"aria-labelledby":w||A};(!j.current&&m&&o||j.current&&m&&!o)&&zj(D,"assertive"),j.current=o}),[o,m,w,A]),Be.createElement("button",{...Yf(n,{propNames:dA}),...yt(u,f,p),..._,type:u.type==="submit"&&o?"button":u.type,id:A,ref:a,"aria-labelledby":w,slot:n.slot||void 0,"aria-disabled":o?"true":u["aria-disabled"],"data-disabled":n.isDisabled||void 0,"data-pressed":b.isPressed||void 0,"data-hovered":g||void 0,"data-focused":m||void 0,"data-pending":o||void 0,"data-focus-visible":h||void 0},Be.createElement(Rj.Provider,{value:{id:N}},_.children))}));var mA={"focus-ring":"focusring-module_focus-ring__jYxTQ"};en(`@keyframes focusring-module_outward-grow__Qdj-A {\r 
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
`);const ws=({as:n="span",type:a="outward",style:i,className:o})=>y.jsx(n,{style:i,className:on(mA["focus-ring"],o),inward:a==="inward"?"true":void 0});ws.displayName="Actify.FocusRing";var Ur={btn:"button-module_btn__sxcxC",disabled:"button-module_disabled__obywO",button:"button-module_button__vQZFj",touch:"button-module_touch__Cec8z",outline:"button-module_outline__rI4up",background:"button-module_background__erbWE",label:"button-module_label__rzPeC"};en(`.button-module_btn__sxcxC {\r 
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
`);var hA={secondary:"color-module_secondary__gpdVQ",tertiary:"color-module_tertiary__zPmbq",error:"color-module_error__VplyG"};en(`.color-module_secondary__gpdVQ {\r 
  --md-sys-color-primary: var(--md-sys-color-secondary);\r 
}\r 
.color-module_tertiary__zPmbq {\r 
  --md-sys-color-primary: var(--md-sys-color-tertiary);\r 
}\r 
.color-module_error__VplyG {\r 
  --md-sys-color-primary: var(--md-sys-color-error);\r 
}\r 
`);var pA={filled:"variant-module_filled__rQH-3",elevated:"variant-module_elevated__F69Jv",outlined:"variant-module_outlined__nvVIW",tonal:"variant-module_tonal__ZqJTa",text:"variant-module_text__oL9YN"};en(`.variant-module_filled__rQH-3 {\r 
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
`);const Ie=n=>{const{ref:a,style:i,children:o,className:u,ripple:c=!0,color:f="primary",variant:m="elevated",isDisabled:h=!1}=n,{focusProps:p,isFocusVisible:g}=Ei();return y.jsx(i0,Object.assign({ref:a},yt(n,p),{style:i,className:on(Ur.btn,hA[f],pA[m],h&&Ur.disabled,u),children:y.jsxs("div",{className:Ur.button,children:[y.jsx("span",{className:Ur.background}),y.jsx("span",{className:Ur.touch}),y.jsx("span",{className:Ur.label,children:y.jsx(y.Fragment,{children:o})}),m=="outlined"&&y.jsx("div",{className:Ur.outline}),y.jsx(uf,{disabled:h}),g&&y.jsx(ws,{}),c&&y.jsx(Si,{id:n.id,disabled:h})]})}))};Ie.displayName="Actify.Button";var vd={btn:"icon-button-module_btn__Ixgd4","text-outline":"icon-button-module_text-outline__42DFJ","icon-button":"icon-button-module_icon-button__-Xc9O"};en(`.icon-button-module_btn__Ixgd4 {\r 
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
`);const o0=n=>{const{ref:a,ripple:i=!0,children:o,className:u,isDisabled:c}=n,{focusProps:f,isFocusVisible:m}=Ei();return y.jsxs(i0,Object.assign({ref:a},yt(n,f),{className:on(vd.btn,c&&vd["text-outline"],u),children:[m&&y.jsx(ws,{}),i&&y.jsx(Si,{id:n.id,disabled:c}),y.jsx(y.Fragment,{children:o}),y.jsx("span",{className:vd["icon-button"]})]}))};o0.displayName="Actify.IconButton";var tt={host:"segmented-buttont-module_host__Q7AyG","segmented-button":"segmented-buttont-module_segmented-button__tnT4D",selected:"segmented-buttont-module_selected__NCVOt",unselected:"segmented-buttont-module_unselected__V3O9p",outline:"segmented-buttont-module_outline__9n2UR",leading:"segmented-buttont-module_leading__6zkws",graphic:"segmented-buttont-module_graphic__KFB1e","with-label":"segmented-buttont-module_with-label__46HnX",checkmark:"segmented-buttont-module_checkmark__ean7d",deselecting:"segmented-buttont-module_deselecting__5aeDz","md3-segmented-button-simple-fade-out":"segmented-buttont-module_md3-segmented-button-simple-fade-out__AcHfR","checkmark-path":"segmented-buttont-module_checkmark-path__jN9bX",selecting:"segmented-buttont-module_selecting__uyvR2","md3-segmented-button-checkmark-selection-draw-in":"segmented-buttont-module_md3-segmented-button-checkmark-selection-draw-in__GE-vy",icon:"segmented-buttont-module_icon__oEvPI","label-text":"segmented-buttont-module_label-text__-mx7c",touch:"segmented-buttont-module_touch__zz2Ce"};en(`.segmented-buttont-module_host__Q7AyG {\r 
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
`);const vA=n=>{const{id:a,icon:i,label:o,disabled:u,selected:c,className:f,noCheckmark:m}=n,h=Be.useRef(null),{buttonProps:p}=l0(n,h),g=a||`actify-segmented-button${Be.useId()}`,b=Be.useMemo((()=>c?"selecting":"deselecting"),[c]),_=on(tt["segmented-button"],i&&tt["with-icon"],tt[b],c?tt.selected:tt.unselected,o?tt["with-label"]:tt["without-label"],m?tt["without-checkmark"]:tt["with-checkmark"],f),{focusProps:A,isFocusVisible:N}=Ei();return y.jsx("div",{role:"presentation",className:tt.host,children:y.jsxs("button",Object.assign({id:g,ref:h,className:_,tabIndex:u?-1:0},yt(p,A),{children:[N&&y.jsx(ws,{}),y.jsx(Si,{id:g,disabled:u}),y.jsx("span",{className:tt.outline}),y.jsxs("span",{className:tt.leading,"aria-hidden":"true",children:[y.jsxs("span",{className:tt.graphic,children:[y.jsx("svg",{className:tt.checkmark,viewBox:"0 0 24 24",children:y.jsx("path",{fill:"none",className:tt["checkmark-path"],d:"M1.73,12.91 8.1,19.28 22.79,4.59"})}),o&&y.jsx("span",{className:tt.icon,"aria-hidden":"true",children:i})]}),!o&&y.jsx("span",{className:tt.icon,"aria-hidden":"true",children:i})]}),y.jsx("span",{className:tt["label-text"],children:o}),y.jsx("span",{className:tt.touch})]}))})},gA=n=>{const{children:a}=n,i=Xr(n,["children"]);return y.jsx("div",Object.assign({},i,{role:"presentation",children:a}))},s0={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},u0={...s0,customError:!0,valid:!1},Kl={isInvalid:!1,validationDetails:s0,validationErrors:[]},yA=S.createContext({}),Oy="__formValidationState"+Date.now();function bA(n){if(n[Oy]){let{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:c}=n[Oy];return{realtimeValidation:a,displayValidation:i,updateValidation:o,resetValidation:u,commitValidation:c}}return(function(a){let{isInvalid:i,validationState:o,name:u,value:c,builtinValidation:f,validate:m,validationBehavior:h="aria"}=a;o&&(i||(i=o==="invalid"));let p=i!==void 0?{isInvalid:i,validationErrors:[],validationDetails:u0}:null,g=S.useMemo((()=>{if(!m||c==null)return null;let K=(function(le,F){if(typeof le=="function"){let oe=le(F);if(oe&&typeof oe!="boolean")return gd(oe)}return[]})(m,c);return $y(K)}),[m,c]);f?.validationDetails.valid&&(f=void 0);let b=S.useContext(yA),_=S.useMemo((()=>u?Array.isArray(u)?u.flatMap((K=>gd(b[K]))):gd(b[u]):[]),[b,u]),[A,N]=S.useState(b),[w,j]=S.useState(!1);b!==A&&(N(b),j(!1));let D=S.useMemo((()=>$y(w?[]:_)),[w,_]),k=S.useRef(Kl),[q,Z]=S.useState(Kl),B=S.useRef(Kl),J=()=>{if(!Q)return;E(!1);let K=g||f||k.current;yd(K,B.current)||(B.current=K,Z(K))},[Q,E]=S.useState(!1);return S.useEffect(J),{realtimeValidation:p||D||g||f||Kl,displayValidation:h==="native"?p||D||q:p||D||g||f||q,updateValidation(K){h!=="aria"||yd(q,K)?k.current=K:Z(K)},resetValidation(){let K=Kl;yd(K,B.current)||(B.current=K,Z(K)),h==="native"&&E(!1),j(!0)},commitValidation(){h==="native"&&E(!0),j(!0)}}})(n)}function gd(n){return n?Array.isArray(n)?n:[n]:[]}function $y(n){return n.length?{isInvalid:!0,validationErrors:n,validationDetails:u0}:null}function yd(n,a){return n===a||!!n&&!!a&&n.isInvalid===a.isInvalid&&n.validationErrors.length===a.validationErrors.length&&n.validationErrors.every(((i,o)=>i===a.validationErrors[o]))&&Object.entries(n.validationDetails).every((([i,o])=>a.validationDetails[i]===o))}function xA(n,a,i){let[o,u]=S.useState(n||a),c=S.useRef(n!==void 0),f=n!==void 0;S.useEffect((()=>{let p=c.current;p!==f&&console.warn(`WARN: A component changed from ${p?"controlled":"uncontrolled"} to ${f?"controlled":"uncontrolled"}.`),c.current=f}),[f]);let m=f?n:o,h=S.useCallback(((p,...g)=>{let b=(_,...A)=>{i&&(Object.is(m,_)||i(_,...A)),f||(m=_)};typeof p=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),u(((_,...A)=>{let N=p(f?m:_,...A);return b(N,...g),f?_:N}))):(f||u(p),b(p,...g))}),[f,m,i]);return[m,h]}function _A(n,a){let{id:i,"aria-label":o,"aria-labelledby":u}=n;return i=qa(i),u&&o?u=[...new Set([i,...u.trim().split(/\s+/)])].join(" "):u&&(u=u.trim().split(/\s+/).join(" ")),{id:i,"aria-label":o,"aria-labelledby":u}}function SA(n){let{id:a,label:i,"aria-labelledby":o,"aria-label":u,labelElementType:c="label"}=n;a=qa(a);let f=qa(),m={};return i?(o=o?`${f} ${o}`:f,m={id:f,htmlFor:c==="label"?a:void 0}):o||u||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:m,fieldProps:_A({id:a,"aria-label":u,"aria-labelledby":o})}}function EA(n){let{description:a,errorMessage:i,isInvalid:o,validationState:u}=n,{labelProps:c,fieldProps:f}=SA(n),m=og([!!a,!!i,o,u]),h=og([!!a,!!i,o,u]);return f=yt(f,{"aria-describedby":[m,h,n["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:c,fieldProps:f,descriptionProps:{id:m},errorMessageProps:{id:h}}}function TA(n,a,i){let{validationBehavior:o,focus:u}=n;Pr((()=>{if(o==="native"&&i?.current&&!i.current.disabled){let p=a.realtimeValidation.isInvalid?a.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(p),i.current.hasAttribute("title")||(i.current.title=""),a.realtimeValidation.isInvalid||a.updateValidation({isInvalid:!(h=i.current).validity.valid,validationDetails:wA(h),validationErrors:h.validationMessage?[h.validationMessage]:[]})}var h}));let c=Ft((()=>{a.resetValidation()})),f=Ft((h=>{var p;a.displayValidation.isInvalid||a.commitValidation();let g=i==null||(p=i.current)===null||p===void 0?void 0:p.form;var b;!h.defaultPrevented&&i&&g&&(function(_){for(let A=0;A<_.elements.length;A++){let N=_.elements[A];if(!N.validity.valid)return N}return null})(g)===i.current&&(u?u():(b=i.current)===null||b===void 0||b.focus(),rA("keyboard")),h.preventDefault()})),m=Ft((()=>{a.commitValidation()}));S.useEffect((()=>{let h=i?.current;if(!h)return;let p=h.form;return h.addEventListener("invalid",f),h.addEventListener("change",m),p?.addEventListener("reset",c),()=>{h.removeEventListener("invalid",f),h.removeEventListener("change",m),p?.removeEventListener("reset",c)}}),[i,f,m,c,o])}function wA(n){let a=n.validity;return{badInput:a.badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid}}function jA(n,a,i){let o=S.useRef(a),u=Ft((()=>{i&&i(o.current)}));S.useEffect((()=>{var c;let f=n==null||(c=n.current)===null||c===void 0?void 0:c.form;return f?.addEventListener("reset",u),()=>{f?.removeEventListener("reset",u)}}),[n,u])}var Ly={text:"supporting-module_text__LAS2Y",counter:"supporting-module_counter__GuSE6"};en(`.supporting-module_text__LAS2Y {\r 
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
`);const AA=({max:n=-1,count:a=-1,error:i,errorText:o,supportingText:u,refreshErrorAlert:c})=>{const f=i&&o&&!c?"alert":"",m=()=>a<0||n<=0?"":`${a} / ${n}`,h=()=>i&&o?o:u;return y.jsxs(Be.Fragment,{children:[y.jsxs("div",{role:f,className:Ly.text,children:[y.jsx("span",{children:h()}),y.jsx("span",{className:Ly.counter,children:m()})]}),y.jsx("div",{hidden:!0,id:"description",children:`${h()} ${m()}`})]})};var Se={filled:"field-module_filled__lGXpV",outlined:"field-module_outlined__7MFPd",field:"field-module_field__OUiHT",outline:"field-module_outline__MLMKT","container-overflow":"field-module_container-overflow__DVkGv",container:"field-module_container__Vg8QO",start:"field-module_start__hbiQQ",end:"field-module_end__k4pEv","with-start":"field-module_with-start__oQ4V1","with-end":"field-module_with-end__v1BEg",middle:"field-module_middle__o4DOl",focused:"field-module_focused__yovQv",content:"field-module_content__r4BW-",populated:"field-module_populated__Q-p--",label:"field-module_label__nLEGd",resting:"field-module_resting__WB4GE",floating:"field-module_floating__cHtoV",visible:"field-module_visible__192Ro",error:"field-module_error__Gwmtc","input-wrapper":"field-module_input-wrapper__euPtU","no-label":"field-module_no-label__WTIud",background:"field-module_background__lA8Sd","state-layer":"field-module_state-layer__C0so-",disabled:"field-module_disabled__-ZlOi","active-indicator":"field-module_active-indicator__EV61C","label-wrapper":"field-module_label-wrapper__rT6tK","outline-start":"field-module_outline-start__1g5Bi","outline-notch":"field-module_outline-notch__DkhHs","outline-end":"field-module_outline-end__u0aPt","outline-panel-inactive":"field-module_outline-panel-inactive__tdtyr","outline-panel-active":"field-module_outline-panel-active__BoFP8","outline-label":"field-module_outline-label__V41uw"};en(`.field-module_filled__lGXpV {\r 
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
`);const c0=n=>{const{disabled:a,className:i,label:o="",max:u,count:c,focused:f=!1,populated:m=!1,required:h=!1,children:p,leadingIcon:g,trailingIcon:b,error:_,errorText:A,supportingText:N,renderOutline:w,renderIndicator:j,renderBackground:D}=n,k=Xr(n,["disabled","className","label","max","count","focused","populated","required","children","leadingIcon","trailingIcon","error","errorText","supportingText","renderOutline","renderIndicator","renderBackground"]),q=Be.useId(),Z=K=>{if(!o)return"";let le;le=K?f||m:!f&&!m;const F=`${o}${h?"*":""}`;return le?y.jsx(Aj.span,{layoutId:q,transition:{duration:.15,easings:[Za(.2,0,0,1)]},"aria-hidden":!le,className:on(Se.label,!le&&Se.visible,K?Se.floating:Se.resting),children:F}):""},B=Z(!0),J=Z(!1),Q=w?.(B),E=on(Se.field,_&&Se.error,f&&Se.focused,a&&Se.disabled,m&&Se.populated,!o&&Se["no-label"],!!g&&Se["with-start"],!!b&&Se["with-end"]);return y.jsxs("div",Object.assign({className:E},k,{children:[y.jsxs("div",{className:on(Se["container-overflow"],i),children:[D?.(),j?.(f),Q,y.jsxs("div",{className:Se.container,children:[y.jsx("div",{className:Se.start,children:g}),y.jsxs("div",{className:Se.middle,children:[y.jsxs("span",{className:Se["label-wrapper"],children:[J,Q?"":B]}),y.jsx("div",{className:Se.content,children:p})]}),y.jsx("div",{className:Se.end,children:b})]})]}),y.jsx(AA,{max:u,count:c,error:_,errorText:A,supportingText:N})]}))},NA=()=>y.jsxs(Be.Fragment,{children:[y.jsx("div",{className:Se.background}),y.jsx("div",{className:Se["state-layer"]})]}),CA=()=>y.jsx("div",{className:Se["active-indicator"]}),Uy=n=>{const{children:a}=n,i=Xr(n,["children"]);return y.jsx(c0,Object.assign({},i,{className:Se.filled,renderBackground:NA,renderIndicator:CA,children:y.jsx("div",{className:Se["input-wrapper"],children:a})}))},MA=n=>y.jsxs("div",{className:Se.outline,children:[y.jsx("div",{className:Se["outline-start"]}),y.jsxs("div",{className:Se["outline-notch"],children:[y.jsx("div",{className:Se["outline-panel-inactive"]}),y.jsx("div",{className:Se["outline-panel-active"]}),y.jsx("div",{className:Se["outline-label"],children:n})]}),y.jsx("div",{className:Se["outline-end"]})]}),RA=n=>{const{children:a}=n,i=Xr(n,["children"]);return y.jsx(c0,Object.assign({},i,{className:Se.outlined,renderOutline:MA,children:y.jsx("div",{className:Se["input-wrapper"],children:a})}))};var bd={filled:"text-field-module_filled__bCfKF",outlined:"text-field-module_outlined__vwS7g",prefix:"text-field-module_prefix__9Zf4V",suffix:"text-field-module_suffix__itEyf"};en(`.text-field-module_filled__bCfKF {\r 
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
`);function zA(n,a){let{inputElementType:i="input",isDisabled:o=!1,isRequired:u=!1,isReadOnly:c=!1,type:f="text",validationBehavior:m="aria"}=n,[h,p]=xA(n.value,n.defaultValue||"",n.onChange),{focusableProps:g}=a0(n,a),b=bA({...n,value:h}),{isInvalid:_,validationErrors:A,validationDetails:N}=b.displayValidation,{labelProps:w,fieldProps:j,descriptionProps:D,errorMessageProps:k}=EA({...n,isInvalid:_,errorMessage:n.errorMessage||A}),q=Yf(n,{labelable:!0});const Z={type:f,pattern:n.pattern};return jA(a,h,p),TA(n,b,a),S.useEffect((()=>{if(a.current instanceof Jt(a.current).HTMLTextAreaElement){let B=a.current;Object.defineProperty(B,"defaultValue",{get:()=>B.value,set:()=>{},configurable:!0})}}),[a]),{labelProps:w,inputProps:yt(q,i==="input"?Z:void 0,{disabled:o,readOnly:c,required:u&&m==="native","aria-required":u&&m==="aria"||void 0,"aria-invalid":_||void 0,"aria-errormessage":n["aria-errormessage"],"aria-activedescendant":n["aria-activedescendant"],"aria-autocomplete":n["aria-autocomplete"],"aria-haspopup":n["aria-haspopup"],"aria-controls":n["aria-controls"],value:h,onChange:B=>p(B.target.value),autoComplete:n.autoComplete,autoCapitalize:n.autoCapitalize,maxLength:n.maxLength,minLength:n.minLength,name:n.name,placeholder:n.placeholder,inputMode:n.inputMode,autoCorrect:n.autoCorrect,spellCheck:n.spellCheck,[parseInt(Be.version,10)>=17?"enterKeyHint":"enterkeyhint"]:n.enterKeyHint,onCopy:n.onCopy,onCut:n.onCut,onPaste:n.onPaste,onCompositionEnd:n.onCompositionEnd,onCompositionStart:n.onCompositionStart,onCompositionUpdate:n.onCompositionUpdate,onSelect:n.onSelect,onBeforeInput:n.onBeforeInput,onInput:n.onInput,...g,...j}),descriptionProps:D,errorMessageProps:k,isInvalid:_,validationErrors:A,validationDetails:N}}const Fd=n=>{var a;const i=Be.useRef(null),{style:o,onFocus:u,onBlur:c,className:f,suffixText:m,prefixText:h,leadingIcon:p,trailingIcon:g,ref:b=i,type:_="text",variant:A="filled",inputProps:N,children:w}=n,j=Xr(n,["style","onFocus","onBlur","className","suffixText","prefixText","leadingIcon","trailingIcon","ref","type","variant","inputProps","children"]),{inputProps:D,labelProps:k,descriptionProps:q,errorMessageProps:Z,isInvalid:B,validationErrors:J}=zA(Object.assign(Object.assign({},j),{inputElementType:n.type=="textarea"?"textarea":"input"}),b),{focusProps:Q,isFocused:E}=Ei();let K=Uy;A=="filled"&&(K=Uy),A=="outlined"&&(K=RA);const le=(a=(N??D).value)===null||a===void 0?void 0:a.toString().length,F=!!(N??D).value;return y.jsxs("label",Object.assign({},k,{className:bd[A],children:[y.jsxs(K,{leadingIcon:p,trailingIcon:g,count:le,populated:F,label:n.label,focused:E,children:[h&&y.jsx("span",{className:bd.prefix,children:h}),_=="textarea"?y.jsx("textarea",Object.assign({style:Object.assign({resize:"vertical",overflowX:"hidden",wordBreak:"break-word"},o),className:f},yt(Q,N??D),{ref:b})):y.jsx("input",Object.assign({style:o,className:f},yt(Q,N??D),{type:_,ref:b})),m&&y.jsx("span",{className:bd.suffix,children:m})]}),n.description&&y.jsx("div",Object.assign({},q,{style:{fontSize:12},children:n.description})),B&&y.jsx("div",Object.assign({},Z,{style:{color:"red",fontSize:12},children:J.join(" ")}))]}))};Fd.displayName="Actify.TextField";const js="test/../backend";async function DA(){const n=await fetch(`${js}/api/get_content.php`);if(!n.ok)throw new Error(`Failed to load site content (${n.status})`);return n.json()}async function OA(n){const a=await fetch(`${js}/api/submit_order.php`,{method:"POST",body:n});let i={};try{const o=await a.text();i=o?JSON.parse(o):{}}catch{}if(!a.ok||!i.ok)throw new Error(i.error||"ثبت سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.");return i}async function d0(){const n=await fetch(`${js}/api/get_blog_posts.php`);if(!n.ok)throw new Error(`Failed to load blog posts (${n.status})`);return n.json()}async function Vy(n,a,i){const o=await fetch(`${js}/api/submit_comment.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post_id:n,content:a,parent_id:i})});if(!o.ok){const u=await o.json().catch(()=>({}));throw new Error(u.error||"ارسال نظر با خطا مواجه شد")}return o.json()}function Jd(n){try{const a=new Date(n);return new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(a)}catch{return n}}const Wd={settings:{},benefits:[],products:[],gallery:[],form:[]},f0=S.createContext({data:Wd,loading:!0,error:null}),$A={color_primary:"--color-primary",color_on_primary:"--color-on-primary",color_bg_light:"--color-bg",color_surface_light:"--color-surface",color_text_light:"--color-on-bg"},LA={color_primary_dark:"--color-primary",color_on_primary_dark:"--color-on-primary",color_bg_dark:"--color-bg",color_surface_dark:"--color-surface",color_text_dark:"--color-on-bg"},By=[{key:"color_primary",label:"رنگ اصلی (روشن)",group:"light"},{key:"color_on_primary",label:"رنگ متن روی رنگ اصلی (روشن)",group:"light"},{key:"color_bg_light",label:"پس‌زمینه (روشن)",group:"light"},{key:"color_surface_light",label:"سطح کارت (روشن)",group:"light"},{key:"color_text_light",label:"متن (روشن)",group:"light"},{key:"color_primary_dark",label:"رنگ اصلی (تاریک)",group:"dark"},{key:"color_on_primary_dark",label:"رنگ متن روی رنگ اصلی (تاریک)",group:"dark"},{key:"color_bg_dark",label:"پس‌زمینه (تاریک)",group:"dark"},{key:"color_surface_dark",label:"سطح کارت (تاریک)",group:"dark"},{key:"color_text_dark",label:"متن (تاریک)",group:"dark"}];function UA(n){let a=document.getElementById("dynamic-colors");a||(a=document.createElement("style"),a.id="dynamic-colors",document.head.appendChild(a));const i=By.filter(u=>u.group==="light"&&n[u.key]).map(u=>`${$A[u.key]}: ${n[u.key]};`).join(" "),o=By.filter(u=>u.group==="dark"&&n[u.key]).map(u=>`${LA[u.key]}: ${n[u.key]};`).join(" ");a.textContent=`:root { ${i} } html.dark { ${o} }`}function VA({children:n}){const[a,i]=S.useState({data:Wd,loading:!0,error:null});return S.useEffect(()=>{let o=!1;return DA().then(u=>{o||(UA(u.settings),i({data:u,loading:!1,error:null}))}).catch(u=>{o||i({data:Wd,loading:!1,error:u instanceof Error?u.message:"خطا در بارگذاری اطلاعات سایت"})}),()=>{o=!0}},[]),y.jsx(f0.Provider,{value:a,children:n})}function Lt(){return S.useContext(f0)}function Fo(){const{data:n}=Lt(),a=n.settings,[i,o]=S.useState(()=>typeof window<"u"?localStorage.getItem("theme")==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches:!1);S.useEffect(()=>{const c=document.documentElement;i?(c.classList.add("dark"),localStorage.setItem("theme","dark")):(c.classList.remove("dark"),localStorage.setItem("theme","light"))},[i]);const u=()=>o(c=>!c);return y.jsxs("header",{className:"w-full sticky top-0 z-50 shadow-sm transition-colors duration-300",children:[y.jsx("div",{className:"bg-primary text-on-primary text-label py-2 px-4 sm:px-8 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"campaign"}),y.jsx("span",{children:a.topbar_message||"فروش ویژه درب و پنجره UPVC با شرایط اقساطی"})]}),y.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"schedule"}),y.jsx("span",{children:a.topbar_hours||"شنبه تا پنجشنبه: ۸ الی ۲۰"})]}),y.jsxs("div",{className:"flex items-center gap-1.5",dir:"ltr",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"phone_in_talk"}),y.jsx("span",{children:a.site_phone||"+98 922 002 3242"})]})]})]})}),y.jsx("div",{className:"bg-surface border-b border-slate-200 dark:border-white/10 px-4 sm:px-8 py-3 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto flex items-center justify-between",children:[y.jsx("a",{href:"#s1",className:"text-h3 text-primary tracking-tight",children:a.site_title||"NorthStarWin"}),y.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[y.jsxs("nav",{className:"hidden md:flex items-center gap-6 text-body-sm font-bold text-surface",children:[y.jsx("a",{href:"#products",className:"hover:text-primary transition-colors",children:"محصولات"}),y.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors",children:"همکاری"}),y.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors",children:"ثبت سفارش"})]}),y.jsx(o0,{onClick:u,className:"text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full cursor-pointer transition-all",title:i?"حالت روشن":"حالت تاریک",children:y.jsx("span",{className:"material-symbols-outlined select-none text-xl",children:i?"light_mode":"dark_mode"})})]})]})})]})}function BA(){const{data:n}=Lt(),a=n.settings,i={title:a.hero_security_title||"امنیت و پایداری",description:a.hero_security_description||"امنیت خانواده شما، اولویت اصلی ماست. درب‌های UPVC به دلیل بهره‌گیری از هسته فولادی گالوانیزه و سیستم‌های قفل پیشرفته، سدی نفوذناپذیر ایجاد می‌کنند.",image:a.hero_security_image},o={title:a.hero_durability_title||"دوام و طول عمر",description:a.hero_durability_description||"دوام بی‌نظیر در برابر زمان و طبیعت، درب‌های UPVC با مقاومت بالا در برابر اشعه‌های خورشیدی بدون تغییر شکل یا رنگ، تا ۳۰ سال در کنار شما می‌مانند.",image:a.hero_durability_image};return y.jsx("section",{id:"s1",className:"w-full py-16 px-6 sm:px-8 transition-colors duration-300",style:{backgroundColor:"var(--color-bg)"},children:y.jsxs("div",{className:"max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",children:[y.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-6 text-right",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h2",{className:"text-h2 text-surface mb-3",children:i.title}),y.jsx("p",{className:"text-body text-surface/80 mb-4",children:i.description}),y.jsxs("a",{href:"#products",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[y.jsx("span",{children:"مشاهده محصولات"}),y.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]}),y.jsx("div",{className:"flex-1 flex justify-center",children:y.jsx("img",{src:i.image,alt:i.title,className:"max-h-[600px] w-auto object-contain drop-shadow-sm"})})]}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 text-right",children:[y.jsx("div",{className:"flex-1 flex justify-center",children:y.jsx("img",{src:o.image,alt:o.title,className:"max-h-[490px] w-auto object-contain drop-shadow-sm"})}),y.jsxs("div",{className:"flex-1",children:[y.jsx("h2",{className:"text-h2 text-surface mb-3",children:o.title}),y.jsx("p",{className:"text-body text-surface/80 mb-4",children:o.description}),y.jsxs("a",{href:"#benefits",className:"inline-flex items-center gap-1 text-body-sm font-bold text-surface hover:text-primary transition-colors group",children:[y.jsx("span",{children:"مزایا"}),y.jsx("span",{className:"material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1 select-none",children:"arrow_back"})]})]})]})]})})}function HA(){const{data:n}=Lt(),a=n.settings;return y.jsxs("section",{id:"s2",className:"py-16 px-4 sm:px-8 text-center max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:a.collab_title||"دعوت به همکاری"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3 mb-6"}),y.jsx("p",{className:"text-body text-surface/80 mb-6",children:a.collab_description||"ما به دنبال برقراری همکاری‌های بلندمدت با سازندگان، پیمانکاران و نصابان حرفه‌ای صنعت ساختمان هستیم."}),y.jsx("a",{href:"#s3",className:"inline-block text-body-sm font-bold text-surface hover:text-primary transition-colors",children:a.collab_button_text||"درخواست همکاری"})]})}const kA=n=>new Intl.NumberFormat("fa-IR").format(n);function YA(){const n=Gr(),{data:a}=Lt();if(a.products.length===0)return null;const i=a.products.slice(0,3),o=a.products.length>3,u=()=>{n("/products")};return y.jsxs("section",{id:"products",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:i.map(c=>y.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/60 dark:border-white/10 transition-all duration-300 flex flex-col text-center",children:[c.image_url&&y.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:c.image_url,alt:c.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),y.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[y.jsx("h3",{className:"text-h3 text-surface mb-2",children:c.name}),c.description&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-4 flex-grow",children:c.description}),!!c.price_min&&y.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",kA(c.price_min)," تومان"]}),y.jsx(Ie,{variant:"text",onClick:handleViewOne,className:"text-body-sm font-bold text-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},c.id))}),o&&y.jsx("div",{className:"flex justify-center mt-8",children:y.jsxs(Ie,{variant:"text",onClick:u,className:"text-body-sm font-bold transition-colors shadow-md",children:["مشاهده همه محصولات",y.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})})]})}function qA(){const{data:n}=Lt();return n.benefits.length===0?null:y.jsxs("section",{id:"benefits",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-14",children:[y.jsxs("h2",{className:"text-h2 text-primary tracking-tight",children:[n.settings.site_title||"NorthStarWin"," چرا؟"]}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8",children:n.benefits.map(a=>y.jsxs("div",{className:"flex flex-col items-center text-center p-2",children:[y.jsx("span",{className:"material-symbols-outlined text-primary mb-3 select-none",style:{fontSize:"56px"},children:a.icon_name||"star"}),y.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:a.title}),y.jsx("p",{className:"text-body-sm text-surface/70",children:a.description})]},a.id))})]})}function GA(){const n=Gr(),{data:a}=Lt(),[i,o]=S.useState(null);if(a.gallery.length===0)return null;const u=a.gallery.slice(0,3),c=a.gallery.length>3,f=()=>{n("/gallery")};return y.jsxs("section",{id:"gallery",className:"py-16 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-12",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:u.map(m=>y.jsxs("div",{onClick:()=>o(m),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-200 dark:bg-[#1f1f21]",children:[y.jsx("img",{src:m.image_url,alt:m.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:y.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:m.title||"مشاهده تصویر"})})]},m.id))}),c&&y.jsx("div",{className:"flex justify-center mt-8",children:y.jsxs(Ie,{variant:"contained",onClick:f,className:"text-body-sm font-bold transition-colors shadow-md",children:["مشاهده همه پروژه‌ها",y.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})}),i&&y.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>o(null),children:y.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:m=>m.stopPropagation(),children:[y.jsx("button",{onClick:()=>o(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:y.jsx("span",{className:"material-symbols-outlined",children:"close"})}),y.jsx("img",{src:i.image_url,alt:i.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),i.title&&y.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-surface",children:i.title})]})})]})}const XA=({post:n,onReadMore:a})=>{const{data:i}=Lt();return i.settings,y.jsxs(Bx,{className:"w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-surface dark:bg-surface-dark border border-slate-200/60 dark:border-white/10",children:[n.image_url&&y.jsx("div",{className:"h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:n.image_url,alt:n.title,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),y.jsxs("div",{className:"p-6",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3 flex-wrap",children:[n.category&&y.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:n.category}),y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Jd(n.created_at)]}),n.author_name&&y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),n.author_name]})]}),y.jsx("h3",{className:"text-h3 text-surface mb-3 font-bold tracking-tight",children:n.title}),n.excerpt&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-4 line-clamp-3",children:n.excerpt}),y.jsxs("div",{className:"flex items-center justify-between mt-4",children:[y.jsxs("div",{className:"flex items-center gap-3 text-surface/60",children:[y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),n.view_count||0]}),y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),n.comment_count||0]})]}),y.jsxs(Ie,{variant:"text",onClick:()=>a(n),className:"text-body-sm font-bold text-primary hover:bg-primary/5 transition-colors",children:["ادامه مطلب",y.jsx("span",{className:"material-symbols-outlined text-sm mr-1",children:"arrow_left_alt"})]})]})]})]})};function PA(){const{data:n}=Lt(),a=n.settings,[i,o]=S.useState([]),[u,c]=S.useState(!0),[f,m]=S.useState(null),[h,p]=S.useState("all"),g=Gr();S.useEffect(()=>{b()},[]);const b=async()=>{try{const D=await d0();o(D)}catch(D){console.error("Failed to load blog posts:",D)}finally{c(!1)}},_=D=>{g(`/blog/${D.id}`)},A=Array.from(new Set(i.map(D=>D.category).filter(Boolean))),w=[...i].sort((D,k)=>(k.view_count||0)-(D.view_count||0)).slice(0,3),j=h==="all"?w:w.filter(D=>D.category===h);return y.jsxs("section",{id:"blog",className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"وبلاگ"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"}),y.jsx("p",{className:"text-body-sm text-surface/70 mt-4",children:a.blog_description||"آخرین مقالات و اخبار را اینجا بخوانید"})]}),A.length>0&&y.jsxs("div",{className:"flex flex-wrap justify-center gap-2 mb-8",children:[y.jsx(Ie,{variant:h==="all"?"contained":"outlined",onClick:()=>p("all"),className:`text-body-sm font-bold ${h==="all"?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:"همه"}),A.map(D=>y.jsx(Ie,{variant:h===D?"contained":"outlined",onClick:()=>p(D),className:`text-body-sm font-bold ${h===D?"bg-primary text-on-primary":"text-surface border-surface/30"}`,children:D},D))]}),u?y.jsx("div",{className:"flex justify-center items-center py-20",children:y.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):j.length===0?y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),y.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"})]}):y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:j.map(D=>y.jsx(XA,{post:D,onReadMore:_},D.id))})]})}function KA(){const{data:n,loading:a}=Lt(),i=n.form,[o,u]=S.useState(0),[c,f]=S.useState({}),[m,h]=S.useState(null),[p,g]=S.useState(null),[b,_]=S.useState(!1),[A,N]=S.useState(!1),[w,j]=S.useState(null),[D,k]=S.useState(""),[q,Z]=S.useState(""),B=z=>{if(!z.depends_on||!z.depends_value)return!0;const X=c[z.depends_on];return X?z.depends_value.split(",").map(pe=>pe.trim()).includes(X):!1};if(a||i.length===0)return null;const J=(z,X)=>{f(ee=>({...ee,[z]:X}))},Q=(z,X)=>{const ee=X.target.files?.[0];if(!ee)return;const pe=5*1024*1024;if(ee.size>pe){j("حجم فایل نباید بیشتر از 5 مگابایت باشد."),X.target.value="";return}if(h(ee),J(z,ee.name),ee.type.startsWith("image/")){const de=new FileReader;de.onloadend=()=>g(de.result),de.readAsDataURL(ee)}else g(null)},E=z=>{h(null),g(null),J(z,"")},K=z=>{if(!B(z)||!z.required)return!0;if(z.type==="file")return!!m;const X=(c[z.key]||"").trim();return X===""?!1:z.key==="phone"?/^09[0-9]{9}$/.test(X):!0},le=z=>{if(!B(z)||!z.required)return null;if(z.type==="file")return!m&&!c[z.key]?`${z.label} الزامی است`:null;const X=(c[z.key]||"").trim();return X===""?`${z.label} الزامی است`:z.key==="phone"&&!/^09[0-9]{9}$/.test(X)?"شماره موبایل معتبر نیست":null},F=z=>i[z].fields.filter(B).every(K),oe=()=>{if(!F(o)){j("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}j(null),o===i.length-1?re():u(z=>z+1)},R=()=>o>0&&u(z=>z-1),W=z=>{if(z>o&&!F(o)){j("لطفاً تمام فیلدهای الزامی این مرحله را پر کنید.");return}j(null),u(z)},re=async()=>{_(!0),j(null);try{if(!i.flatMap(de=>de.fields).filter(B).every(K)){j("لطفاً تمام فیلدهای الزامی را پر کنید."),_(!1);return}const X=new FormData;Object.entries(c).forEach(([de,C])=>{C&&X.append(de,C)}),X.append("website",q);const ee=i.flatMap(de=>de.fields).find(de=>de.type==="file"&&B(de));if(ee&&m)X.append(ee.key,m,m.name);else if(ee&&ee.required&&!m){j("لطفاً فایل مورد نظر را آپلود کنید."),_(!1);return}const pe=await OA(X);k(pe.tracking_code??""),N(!0)}catch(z){j(z instanceof Error?z.message:"خطای غیرمنتظره‌ای رخ داد.")}finally{_(!1)}};return y.jsxs("section",{id:"s3",className:"w-full my-12 px-4",children:[y.jsxs("div",{className:"text-center mb-8",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"ثبت سفارش آنلاین"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),A?y.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-center text-surface shadow-xl transition-colors duration-300",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-green-500 mb-2 select-none",children:"check_circle"}),y.jsx("h3",{className:"text-h3 mb-2",children:"سفارش شما با موفقیت ثبت شد! 🎉"}),y.jsxs("p",{className:"text-body-sm text-surface/70 mb-6 flex items-center justify-center gap-2",children:["کد پیگیری:",y.jsxs("span",{className:"inline-block bg-primary/10 text-primary font-bold text-body px-3 py-0.5 rounded-full",children:["#",D]})]}),y.jsxs(Ie,{variant:"filled",className:"w-full sm:w-auto px-6 py-3 font-bold flex items-center justify-center gap-2 mx-auto bg-primary text-on-primary rounded-xl shadow-md cursor-pointer",onClick:()=>window.open("https://wa.me/989220023242","_blank"),children:[y.jsx("span",{className:"material-symbols-outlined select-none",children:"chat"}),"ارتباط سریع در واتساپ"]})]}):y.jsxs("div",{className:"w-full max-w-[720px] mx-auto p-6 sm:p-8 rounded-3xl bg-surface border border-slate-200 dark:border-white/10 text-surface shadow-xl transition-colors duration-300",children:[y.jsx("input",{type:"text",name:"website",value:q,onChange:z=>Z(z.target.value),className:"hidden",tabIndex:-1,autoComplete:"off"}),y.jsx("div",{className:"w-full mb-8",children:y.jsx(gA,{className:"w-full",children:y.jsx("div",{className:"grid w-full h-12 bg-slate-100 dark:bg-[color:var(--color-bg)] p-1 rounded-full border border-slate-200 dark:border-white/10",style:{gridTemplateColumns:`repeat(${i.length}, 1fr)`},children:i.map((z,X)=>y.jsx(vA,{label:z.title,selected:o===X,onPress:()=>W(X),className:`text-body-sm font-bold transition-all cursor-pointer ${X===0?"rounded-s-full":X===i.length-1?"rounded-e-full":""}`},z.title))})})}),y.jsxs("div",{className:"min-h-[320px]",children:[y.jsx("h3",{className:"text-h3 text-surface mb-1.5",children:i[o].title}),i[o].subtitle&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-6",children:i[o].subtitle}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5",children:i[o].fields.filter(B).map(z=>{const X=le(z);return y.jsx(QA,{field:z,value:c[z.key]||"",onChange:ee=>{J(z.key,ee),w&&X&&j(null)},onFileChange:ee=>{Q(z.key,ee),w&&X&&j(null)},onRemoveFile:()=>E(z.key),filePreview:p,hasError:!!X,errorMessage:X},z.key)})})]}),w&&y.jsx("div",{className:"mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-body-sm text-red-600 dark:text-red-400 text-center",children:w}),y.jsxs("div",{className:"flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-5 mt-8",children:[o>0?y.jsxs(Ie,{variant:"outlined",onClick:R,disabled:b,className:"flex items-center gap-2 px-5 py-2.5 rounded-xl border-slate-300 dark:border-[#45464d] text-surface cursor-pointer",children:[y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_forward"}),"قبلی"]}):y.jsx("div",{}),y.jsxs(Ie,{variant:"filled",onClick:oe,disabled:!F(o)||b,className:"flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold bg-primary text-on-primary disabled:opacity-50 cursor-pointer transition-all",children:[b?"در حال ثبت...":o===i.length-1?"ثبت سفارش":"بعدی",o<i.length-1&&y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"arrow_back"})]})]})]})]})}function QA({field:n,value:a,onChange:i,onFileChange:o,onRemoveFile:u,filePreview:c,hasError:f,errorMessage:m}){const h=`w-full h-12 bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm px-3 text-surface outline-none transition-colors`;if(n.type==="segmented")return y.jsxs("div",{className:"sm:col-span-2",children:[y.jsxs("label",{className:"text-label text-surface/70 mb-2 block",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:(n.options||[]).map(g=>{const b=a===g.value;return y.jsxs("div",{onClick:()=>i(g.value),className:`flex flex-col items-center justify-center text-center p-6 min-h-[140px] rounded-2xl cursor-pointer border transition-all duration-200 ${b?"bg-primary text-on-primary border-primary font-bold shadow-md scale-[1.02]":"bg-slate-50 dark:bg-[color:var(--color-bg)] text-surface border-slate-200 dark:border-[#45464d] hover:bg-slate-100 dark:hover:bg-white/5"} ${f&&!a?"border-red-500":""}`,children:[g.icon&&y.jsx("span",{className:"material-symbols-outlined text-7xl mb-2 select-none",children:g.icon}),y.jsx("span",{className:"text-body  font-semibold",children:g.label})]},g.value)})})]});if(n.type==="select")return y.jsxs("div",{className:"flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsxs("select",{value:a,onChange:g=>i(g.target.value),className:h,children:[y.jsx("option",{value:"",disabled:!0,children:"انتخاب کنید..."}),(n.options||[]).map(g=>y.jsx("option",{value:g.value,children:g.label},g.value))]})]});if(n.type==="textarea")return y.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("textarea",{rows:2,placeholder:n.placeholder||"",value:a,onChange:g=>i(g.target.value),className:`w-full bg-slate-50 dark:bg-[color:var(--color-bg)] border ${f?"border-red-500 focus:border-red-600":"border-slate-200 dark:border-[#45464d] focus:border-primary"} rounded-xl text-body-sm p-3 text-surface outline-none transition-colors resize-none`})]});if(n.type==="file")return y.jsxs("div",{className:"sm:col-span-2 flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label," ",n.required&&y.jsx("span",{className:"text-red-500",children:"*"})]}),y.jsx("input",{accept:"image/*,.pdf,.doc,.docx",className:"hidden",id:`upload-${n.key}`,type:"file",onChange:o}),y.jsx("label",{htmlFor:`upload-${n.key}`,className:"cursor-pointer",children:c?y.jsxs("div",{className:"relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-[#45464d]",children:[y.jsx("img",{src:c,alt:"پیش‌نمایش",className:"w-full h-36 object-cover"}),y.jsx("button",{type:"button",onClick:g=>{g.preventDefault(),u()},className:"absolute top-2 right-2 bg-black/70 p-1.5 rounded-full text-white hover:bg-black transition-colors cursor-pointer",children:y.jsx("span",{className:"material-symbols-outlined text-sm select-none",children:"close"})})]}):a?y.jsxs("div",{className:"border-2 border-dashed border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-primary select-none",children:"insert_drive_file"}),y.jsx("span",{className:"text-body-sm text-surface/70",children:a}),y.jsx("button",{type:"button",onClick:g=>{g.preventDefault(),u()},className:"mt-2 text-red-500 hover:text-red-600 text-sm cursor-pointer",children:"حذف فایل"})]}):y.jsxs("div",{className:"border-2 border-dashed border-slate-300 dark:border-[#45464d] hover:border-primary bg-slate-50 dark:bg-[color:var(--color-bg)] rounded-xl p-4 text-center transition-all flex flex-col items-center justify-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-slate-500 dark:text-[#c6c6cd] select-none",children:"upload_file"}),y.jsx("span",{className:"text-body-sm text-surface/70",children:"برای آپلود عکس یا فایل نقشه کلیک کنید"}),n.required&&y.jsx("span",{className:"text-xs text-red-500",children:"* الزامی"})]})})]});const p=n.key==="phone";return y.jsxs("div",{className:"flex flex-col gap-1.5",children:[y.jsxs("label",{className:"text-label text-surface/70",children:[n.label,n.required&&y.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),y.jsx("input",{type:n.type==="number"?"number":"text",placeholder:n.placeholder||"",dir:p?"ltr":void 0,value:a,onChange:g=>i(g.target.value),className:`${h} ${p?"text-right":""}`}),p&&a&&!/^09[0-9]{9}$/.test(a)&&y.jsx("span",{className:"text-[11px] text-red-500",children:"شماره موبایل معتبر نیست"}),m&&y.jsx("span",{className:"text-[11px] text-red-500",children:m})]})}function Jo(){const{data:n}=Lt(),a=n.settings,i=a.site_title||"NorthStarWin";return y.jsx("footer",{className:"bg-slate-900 text-slate-300 dark:bg-[#111113] border-t border-slate-800/80 pt-16 pb-8 px-4 sm:px-8 transition-colors duration-300",children:y.jsxs("div",{className:"max-w-[1200px] mx-auto",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12",children:[y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h3",{className:"text-h3 text-white tracking-tight",children:i}),y.jsx("p",{className:"text-body-sm text-slate-400 max-w-[320px]",children:a.site_description||"تامین‌کننده برتر درب و پنجره UPVC در ایران با بالاترین استاندارد عایق‌بندی و امنیت."})]}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"لینک‌های سریع"}),y.jsxs("ul",{className:"flex flex-col gap-2.5 text-body-sm text-slate-400",children:[y.jsx("li",{children:y.jsx("a",{href:"#products",className:"hover:text-primary transition-colors inline-block",children:"محصولات"})}),y.jsx("li",{children:y.jsx("a",{href:"#s2",className:"hover:text-primary transition-colors inline-block",children:"همکاری"})}),y.jsx("li",{children:y.jsx("a",{href:"#s3",className:"hover:text-primary transition-colors inline-block",children:"ثبت سفارش"})})]})]}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsx("h4",{className:"text-body font-bold text-white border-b border-slate-800 pb-2 w-fit",children:"تماس با ما"}),y.jsxs("div",{className:"flex flex-col gap-3 text-body-sm text-slate-400",children:[y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"call"}),y.jsx("span",{dir:"ltr",className:"font-semibold",children:a.site_phone||"+98 922 002 3242"})]}),y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"mail"}),y.jsx("span",{children:a.site_email||"info@northstarwin.com"})]}),y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("span",{className:"material-symbols-outlined text-primary text-lg select-none",children:"location_on"}),y.jsx("span",{children:a.site_address||"تهران، ایران"})]})]})]})]}),y.jsx("div",{className:"border-t border-slate-800/80 pt-6 text-center text-body-sm text-slate-500",children:y.jsxs("p",{children:["© ۱۴۰۵ ",i," — تمامی حقوق محفوظ است"]})})]})})}function ZA(){const{id:n}=TS(),a=Gr(),{data:i}=Lt();i.settings;const[o,u]=S.useState(null),[c,f]=S.useState(!0),[m,h]=S.useState(""),[p,g]=S.useState(!1),[b,_]=S.useState(null),[A,N]=S.useState("");S.useEffect(()=>{w()},[n]);const w=async()=>{try{const B=(await d0()).find(J=>J.id===parseInt(n||"0"));u(B||null)}catch(Z){console.error("Failed to load post:",Z)}finally{f(!1)}},j=()=>{a("/#blog")},D=async Z=>{if(Z.preventDefault(),!(!m.trim()||!o)){g(!0);try{await Vy(o.id,m),h(""),w()}catch(B){console.error("Failed to submit comment:",B),alert("ارسال نظر با خطا مواجه شد")}finally{g(!1)}}},k=async Z=>{if(!(!A.trim()||!o)){g(!0);try{await Vy(o.id,A,Z),N(""),_(null),w()}catch(B){console.error("Failed to submit reply:",B),alert("ارسال پاسخ با خطا مواجه شد")}finally{g(!1)}}},q=(Z,B=null,J=0)=>{const Q=Z.filter(E=>E.parent_id===B);return Q.length===0?null:y.jsx("div",{className:`${J>0?"mr-8 mt-4":""}`,children:Q.map(E=>y.jsxs("div",{className:"border-b border-slate-200 dark:border-white/10 py-4",children:[y.jsxs("div",{className:"flex items-start gap-3",children:[y.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:E.author_name?.charAt(0)||"U"}),y.jsxs("div",{className:"flex-1",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1",children:[y.jsx("span",{className:"font-bold text-surface",children:E.author_name||"ناشناس"}),y.jsx("span",{className:"text-label-sm text-surface/60",children:Jd(E.created_at)})]}),y.jsx("p",{className:"text-body-sm text-surface/80 mb-2",children:E.content}),E.is_approved===0&&y.jsxs("span",{className:"text-label-xs text-amber-600 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"pending"}),"در انتظار تایید"]}),J<2&&y.jsxs("button",{onClick:()=>_(b===E.id?null:E.id),className:"text-label-sm text-primary hover:text-primary-dark flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"reply"}),"پاسخ"]}),b===E.id&&y.jsxs("form",{onSubmit:K=>{K.preventDefault(),k(E.id)},className:"mt-3",children:[y.jsx(Fd,{value:A,onChange:K=>N(K.target.value),placeholder:"پاسخ خود را بنویسید...",multiline:!0,rows:2,fullWidth:!0,className:"mb-2"}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx(Ie,{type:"submit",disabled:p||!A.trim(),variant:"contained",size:"small",children:"ارسال پاسخ"}),y.jsx(Ie,{type:"button",onClick:()=>_(null),variant:"text",size:"small",children:"انصراف"})]})]})]})]}),q(Z,E.id,J+1)]},E.id))})};return c?y.jsx("div",{className:"flex justify-center items-center py-20",children:y.jsx("span",{className:"material-symbols-outlined text-4xl text-primary animate-spin",children:"progress_activity"})}):o?y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[900px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs(Ie,{variant:"text",onClick:j,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به لیست مقالات"]}),y.jsxs("article",{className:"bg-surface dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-200/60 dark:border-white/10 overflow-hidden",children:[o.image_url&&y.jsx("div",{className:"h-80 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:o.image_url,alt:o.title,className:"w-full h-full object-cover"})}),y.jsxs("div",{className:"p-6 sm:p-8",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[o.category&&y.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-label-sm font-bold bg-primary/10 text-primary",children:o.category}),y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"schedule"}),Jd(o.created_at)]}),o.author_name&&y.jsxs("span",{className:"text-label-sm text-surface/60 flex items-center gap-1",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"person"}),o.author_name]})]}),y.jsx("h1",{className:"text-h2 text-surface font-bold mb-6 tracking-tight",children:o.title}),y.jsx("div",{className:"prose prose-slate dark:prose-invert max-w-none mb-8",children:o.content&&o.content.split(` 
`).map((Z,B)=>y.jsx("p",{className:"text-body text-surface/80 mb-4 leading-relaxed",children:Z},B))}),y.jsxs("div",{className:"flex items-center gap-4 text-surface/60 mb-8 pb-8 border-b border-slate-200 dark:border-white/10",children:[y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"visibility"}),o.view_count||0," بازدید"]}),y.jsxs("span",{className:"flex items-center gap-1 text-label-sm",children:[y.jsx("span",{className:"material-symbols-outlined text-sm",children:"chat_bubble"}),o.comment_count||0," نظر"]})]}),y.jsxs("div",{className:"mt-8",children:[y.jsxs("h3",{className:"text-h3 text-surface font-bold mb-4 flex items-center gap-2",children:[y.jsx("span",{className:"material-symbols-outlined text-primary",children:"chat_bubble"}),"نظرات (",o.comment_count||0,")"]}),y.jsxs("form",{onSubmit:D,className:"mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",children:[y.jsx(Fd,{value:m,onChange:Z=>h(Z.target.value),placeholder:"نظر خود را بنویسید...",multiline:!0,rows:4,fullWidth:!0,className:"mb-3"}),y.jsx(Ie,{type:"submit",disabled:p||!m.trim(),variant:"contained",className:"bg-primary text-on-primary",children:p?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"material-symbols-outlined text-sm animate-spin ml-2",children:"progress_activity"}),"در حال ارسال..."]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-2",children:"send"}),"ارسال نظر"]})})]}),y.jsx("div",{className:"space-y-4",children:o.comments&&o.comments.length>0?q(o.comments):y.jsxs("div",{className:"text-center py-8 text-surface/60",children:[y.jsx("span",{className:"material-symbols-outlined text-4xl mb-2",children:"chat_bubble_outline"}),y.jsx("p",{children:"هنوز نظری ثبت نشده است. اولین نفر باشید!"})]})})]})]})]})]}):y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"article"}),y.jsx("p",{className:"text-body text-surface/60",children:"مقاله‌ای یافت نشد"}),y.jsx(Ie,{onClick:j,variant:"text",className:"mt-4",children:"بازگشت به لیست مقالات"})]})}function FA(){const n=Gr(),{data:a}=Lt(),[i,o]=S.useState(null),u=()=>{n("/#gallery")};return a.gallery.length===0?y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs(Ie,{variant:"text",onClick:u,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به گالری"]}),y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"photo_library"}),y.jsx("p",{className:"text-body text-surface/60",children:"هیچ تصویری یافت نشد"})]})]}):y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs(Ie,{variant:"text",onClick:u,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به گالری"]}),y.jsxs("div",{className:"text-center mb-12",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"پروژه‌های اجرا شده"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:a.gallery.map(c=>y.jsxs("div",{onClick:()=>o(c),className:"group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-slate-200 dark:bg-[#1f1f21]",children:[y.jsx("img",{src:c.image_url,alt:c.title,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5",children:y.jsx("span",{className:"text-white text-body-sm font-bold drop-shadow",children:c.title||"مشاهده تصویر"})})]},c.id))}),i&&y.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",onClick:()=>o(null),children:y.jsxs("div",{className:"relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl p-2",onClick:c=>c.stopPropagation(),children:[y.jsx("button",{onClick:()=>o(null),className:"absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer",children:y.jsx("span",{className:"material-symbols-outlined",children:"close"})}),y.jsx("img",{src:i.image_url,alt:i.title,className:"w-full max-h-[80vh] object-contain rounded-2xl"}),i.title&&y.jsx("p",{className:"text-center py-3 text-body-sm font-bold text-surface",children:i.title})]})})]})}const JA=n=>new Intl.NumberFormat("fa-IR").format(n);function WA(){const n=Gr(),{data:a}=Lt(),i=()=>{n("/#products")};return a.products.length===0?y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs(Ie,{variant:"text",onClick:i,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به محصولات"]}),y.jsxs("div",{className:"text-center py-20",children:[y.jsx("span",{className:"material-symbols-outlined text-6xl text-surface/30 mb-4",children:"inventory_2"}),y.jsx("p",{className:"text-body text-surface/60",children:"هیچ محصولی یافت نشد"})]})]}):y.jsxs("section",{className:"py-12 px-4 sm:px-8 max-w-[1200px] mx-auto text-surface transition-colors duration-300",children:[y.jsxs(Ie,{variant:"text",onClick:i,className:"mb-6 text-body-sm font-bold text-surface hover:text-primary transition-colors",children:[y.jsx("span",{className:"material-symbols-outlined text-sm ml-1",children:"arrow_right_alt"}),"بازگشت به محصولات"]}),y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h2",{className:"text-h2 text-primary tracking-tight",children:"محصولات ما"}),y.jsx("div",{className:"w-16 h-1 bg-primary rounded-full mx-auto mt-3"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:a.products.map(o=>y.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/60 dark:border-white/10 transition-all duration-300 flex flex-col text-center",children:[o.image_url&&y.jsx("div",{className:"h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800",children:y.jsx("img",{src:o.image_url,alt:o.name,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-105"})}),y.jsxs("div",{className:"p-6 flex flex-col items-center flex-grow",children:[y.jsx("h3",{className:"text-h3 text-surface mb-2",children:o.name}),o.description&&y.jsx("p",{className:"text-body-sm text-surface/70 mb-4 flex-grow",children:o.description}),!!o.price_min&&y.jsxs("p",{className:"text-body-sm font-semibold text-primary mb-4",children:["قیمت: از ",JA(o.price_min)," تومان"]}),y.jsx(Ie,{variant:"text",onClick:()=>window.location.hash="#gallery",className:"text-body-sm font-bold text-surface hover:text-primary transition-colors",children:"مشاهده جزئیات"})]})]},o.id))})]})}function IA(){return y.jsx(uE,{children:y.jsxs(BS,{children:[y.jsx(Zl,{path:"/",element:y.jsxs("div",{children:[y.jsx("div",{className:"mb-16 sm:mb-24",children:y.jsx(Fo,{})}),y.jsx(BA,{}),y.jsx(HA,{}),y.jsx(YA,{}),y.jsx(GA,{}),y.jsx(qA,{}),y.jsx("div",{className:"mb-16 sm:mb-24",children:y.jsx(KA,{})}),y.jsx(PA,{}),y.jsx(Jo,{})]})}),y.jsx(Zl,{path:"/blog/:id",element:y.jsxs("div",{children:[y.jsx(Fo,{}),y.jsx(ZA,{}),y.jsx(Jo,{})]})}),y.jsx(Zl,{path:"/gallery",element:y.jsxs("div",{children:[y.jsx(Fo,{}),y.jsx(FA,{}),y.jsx(Jo,{})]})}),y.jsx(Zl,{path:"/products",element:y.jsxs("div",{children:[y.jsx(Fo,{}),y.jsx(WA,{}),y.jsx(Jo,{})]})})]})})}var xd={exports:{}},Ql={},_d={exports:{}},Sd={};var Hy;function e3(){return Hy||(Hy=1,(function(n){function a(z,X){var ee=z.length;z.push(X);e:for(;0<ee;){var pe=ee-1>>>1,de=z[pe];if(0<u(de,X))z[pe]=X,z[ee]=de,ee=pe;else break e}}function i(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var X=z[0],ee=z.pop();if(ee!==X){z[0]=ee;e:for(var pe=0,de=z.length,C=de>>>1;pe<C;){var G=2*(pe+1)-1,I=z[G],te=G+1,ce=z[te];if(0>u(I,ee))te<de&&0>u(ce,I)?(z[pe]=ce,z[te]=ee,pe=te):(z[pe]=I,z[G]=ee,pe=G);else if(te<de&&0>u(ce,ee))z[pe]=ce,z[te]=ee,pe=te;else break e}}return X}function u(z,X){var ee=z.sortIndex-X.sortIndex;return ee!==0?ee:z.id-X.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var h=[],p=[],g=1,b=null,_=3,A=!1,N=!1,w=!1,j=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function Z(z){for(var X=i(p);X!==null;){if(X.callback===null)o(p);else if(X.startTime<=z)o(p),X.sortIndex=X.expirationTime,a(h,X);else break;X=i(p)}}function B(z){if(w=!1,Z(z),!N)if(i(h)!==null)N=!0,J||(J=!0,oe());else{var X=i(p);X!==null&&re(B,X.startTime-z)}}var J=!1,Q=-1,E=5,K=-1;function le(){return j?!0:!(n.unstable_now()-K<E)}function F(){if(j=!1,J){var z=n.unstable_now();K=z;var X=!0;try{e:{N=!1,w&&(w=!1,k(Q),Q=-1),A=!0;var ee=_;try{t:{for(Z(z),b=i(h);b!==null&&!(b.expirationTime>z&&le());){var pe=b.callback;if(typeof pe=="function"){b.callback=null,_=b.priorityLevel;var de=pe(b.expirationTime<=z);if(z=n.unstable_now(),typeof de=="function"){b.callback=de,Z(z),X=!0;break t}b===i(h)&&o(h),Z(z)}else o(h);b=i(h)}if(b!==null)X=!0;else{var C=i(p);C!==null&&re(B,C.startTime-z),X=!1}}break e}finally{b=null,_=ee,A=!1}X=void 0}}finally{X?oe():J=!1}}}var oe;if(typeof q=="function")oe=function(){q(F)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,W=R.port2;R.port1.onmessage=F,oe=function(){W.postMessage(null)}}else oe=function(){D(F,0)};function re(z,X){Q=D(function(){z(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_next=function(z){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var ee=_;_=X;try{return z()}finally{_=ee}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=_;_=z;try{return X()}finally{_=ee}},n.unstable_scheduleCallback=function(z,X,ee){var pe=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=ee+de,z={id:g++,callback:X,priorityLevel:z,startTime:ee,expirationTime:de,sortIndex:-1},ee>pe?(z.sortIndex=ee,a(p,z),i(h)===null&&z===i(p)&&(w?(k(Q),Q=-1):w=!0,re(B,ee-pe))):(z.sortIndex=de,a(h,z),N||A||(N=!0,J||(J=!0,oe()))),z},n.unstable_shouldYield=le,n.unstable_wrapCallback=function(z){var X=_;return function(){var ee=_;_=X;try{return z.apply(this,arguments)}finally{_=ee}}}})(Sd)),Sd}var ky;function t3(){return ky||(ky=1,_d.exports=e3()),_d.exports}var Yy;function n3(){if(Yy)return Ql;Yy=1;var n=t3(),a=Id(),i=fb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,l=t;;){var s=r.return;if(s===null)break;var d=s.alternate;if(d===null){if(l=s.return,l!==null){r=l;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===r)return h(s),e;if(d===l)return h(s),t;d=d.sibling}throw Error(o(188))}if(r.return!==l.return)r=s,l=d;else{for(var v=!1,x=s.child;x;){if(x===r){v=!0,r=s,l=d;break}if(x===l){v=!0,l=s,r=d;break}x=x.sibling}if(!v){for(x=d.child;x;){if(x===r){v=!0,r=d,l=s;break}if(x===l){v=!0,l=d,r=s;break}x=x.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==l)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,_=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case D:return"Profiler";case j:return"StrictMode";case B:return"Suspense";case J:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case q:return e.displayName||"Context";case k:return(e._context.displayName||"Context")+".Consumer";case Z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case E:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var re=Array.isArray,z=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],de=-1;function C(e){return{current:e}}function G(e){0>de||(e.current=pe[de],pe[de]=null,de--)}function I(e,t){de++,pe[de]=e.current,e.current=t}var te=C(null),ce=C(null),ve=C(null),je=C(null);function mt(e,t){switch(I(ve,t),I(ce,e),I(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vv(t),e=gv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(te),I(te,e)}function Xe(){G(te),G(ce),G(ve)}function Ja(e){e.memoizedState!==null&&I(je,e);var t=te.current,r=gv(t,e.type);t!==r&&(I(ce,e),I(te,r))}function Ti(e){ce.current===e&&(G(te),G(ce)),je.current===e&&(G(je),Hl._currentValue=ee)}var As,Pf;function gr(e){if(As===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);As=t&&t[1]||"",Pf=-1<r.stack.indexOf(` 
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return` 
`+As+e+Pf}var Ns=!1;function Cs(e,t){if(!e||Ns)return"";Ns=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(V){var U=V}Reflect.construct(e,[],P)}else{try{P.call()}catch(V){U=V}e.call(P.prototype)}}else{try{throw Error()}catch(V){U=V}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(V){if(V&&U&&typeof V.stack=="string")return[V.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],x=d[1];if(v&&x){var T=v.split(` 
`),L=x.split(` 
`);for(s=l=0;l<T.length&&!T[l].includes("DetermineComponentFrameRoot");)l++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(l===T.length||s===L.length)for(l=T.length-1,s=L.length-1;1<=l&&0<=s&&T[l]!==L[s];)s--;for(;1<=l&&0<=s;l--,s--)if(T[l]!==L[s]){if(l!==1||s!==1)do if(l--,s--,0>s||T[l]!==L[s]){var H=` 
`+T[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=s);break}}}finally{Ns=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?gr(r):""}function m0(e,t){switch(e.tag){case 26:case 27:case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return e.child!==t&&t!==null?gr("Suspense Fallback"):gr("Suspense");case 19:return gr("SuspenseList");case 0:case 15:return Cs(e.type,!1);case 11:return Cs(e.type.render,!1);case 1:return Cs(e.type,!0);case 31:return gr("Activity");default:return""}}function Kf(e){try{var t="",r=null;do t+=m0(e,r),r=e,e=e.return;while(e);return t}catch(l){return` 
Error generating stack: `+l.message+` 
`+l.stack}}var Ms=Object.prototype.hasOwnProperty,Rs=n.unstable_scheduleCallback,zs=n.unstable_cancelCallback,h0=n.unstable_shouldYield,p0=n.unstable_requestPaint,jt=n.unstable_now,v0=n.unstable_getCurrentPriorityLevel,Qf=n.unstable_ImmediatePriority,Zf=n.unstable_UserBlockingPriority,wi=n.unstable_NormalPriority,g0=n.unstable_LowPriority,Ff=n.unstable_IdlePriority,y0=n.log,b0=n.unstable_setDisableYieldValue,Wa=null,At=null;function Bn(e){if(typeof y0=="function"&&b0(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(Wa,e)}catch{}}var Nt=Math.clz32?Math.clz32:S0,x0=Math.log,_0=Math.LN2;function S0(e){return e>>>=0,e===0?32:31-(x0(e)/_0|0)|0}var ji=256,Ai=262144,Ni=4194304;function yr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,r){var l=e.pendingLanes;if(l===0)return 0;var s=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var x=l&134217727;return x!==0?(l=x&~d,l!==0?s=yr(l):(v&=x,v!==0?s=yr(v):r||(r=x&~e,r!==0&&(s=yr(r))))):(x=l&~d,x!==0?s=yr(x):v!==0?s=yr(v):r||(r=l&~e,r!==0&&(s=yr(r)))),s===0?0:t!==0&&t!==s&&(t&d)===0&&(d=s&-s,r=t&-t,d>=r||d===32&&(r&4194048)!==0)?t:s}function Ia(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function E0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jf(){var e=Ni;return Ni<<=1,(Ni&62914560)===0&&(Ni=4194304),e}function Ds(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function el(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function T0(e,t,r,l,s,d){var v=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,L=e.hiddenUpdates;for(r=v&~r;0<r;){var H=31-Nt(r),P=1<<H;x[H]=0,T[H]=-1;var U=L[H];if(U!==null)for(L[H]=null,H=0;H<U.length;H++){var V=U[H];V!==null&&(V.lane&=-536870913)}r&=~P}l!==0&&Wf(e,l,0),d!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~t))}function Wf(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Nt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function If(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Nt(r),s=1<<l;s&t|e[l]&t&&(e[l]|=t),r&=~s}}function em(e,t){var r=t&-t;return r=(r&42)!==0?1:Os(r),(r&(e.suspendedLanes|t))!==0?0:r}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tm(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Hv(e.type))}function nm(e,t){var r=X.p;try{return X.p=e,t()}finally{X.p=r}}var Hn=Math.random().toString(36).slice(2),at="__reactFiber$"+Hn,bt="__reactProps$"+Hn,Zr="__reactContainer$"+Hn,Ls="__reactEvents$"+Hn,w0="__reactListeners$"+Hn,j0="__reactHandles$"+Hn,rm="__reactResources$"+Hn,tl="__reactMarker$"+Hn;function Us(e){delete e[at],delete e[bt],delete e[Ls],delete e[w0],delete e[j0]}function Fr(e){var t=e[at];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Zr]||r[at]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Tv(e);e!==null;){if(r=e[at])return r;e=Tv(e)}return t}e=r,r=e.parentNode}return null}function Jr(e){if(e=e[at]||e[Zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Wr(e){var t=e[rm];return t||(t=e[rm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[tl]=!0}var am=new Set,lm={};function br(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(lm[e]=t,e=0;e<t.length;e++)am.add(t[e])}var A0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),im={},om={};function N0(e){return Ms.call(om,e)?!0:Ms.call(im,e)?!1:A0.test(e)?om[e]=!0:(im[e]=!0,!1)}function Mi(e,t,r){if(N0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Ri(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function yn(e,t,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+l)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function C0(e,t,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,d=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(v){r=""+v,d.call(this,v)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){if(!e._valueTracker){var t=sm(e)?"checked":"value";e._valueTracker=C0(e,t,""+e[t])}}function um(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=sm(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var M0=/[\n"\\]/g;function Vt(e){return e.replace(M0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bs(e,t,r,l,s,d,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Hs(e,v,Ut(t)):r!=null?Hs(e,v,Ut(r)):l!=null&&e.removeAttribute("value"),s==null&&d!=null&&(e.defaultChecked=!!d),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ut(x):e.removeAttribute("name")}function cm(e,t,r,l,s,d,v,x){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){Vs(e);return}r=r!=null?""+Ut(r):"",t=t!=null?""+Ut(t):r,x||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=x?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Vs(e)}function Hs(e,t,r){t==="number"&&zi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ea(e,t,r,l){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Ut(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function dm(e,t,r){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+Ut(r):""}function fm(e,t,r,l){if(t==null){if(l!=null){if(r!=null)throw Error(o(92));if(re(l)){if(1<l.length)throw Error(o(93));l=l[0]}r=l}r==null&&(r=""),t=r}r=Ut(t),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Vs(e)}function ta(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var R0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mm(e,t,r){var l=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,r):typeof r!="number"||r===0||R0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function hm(e,t,r){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&r[s]!==l&&mm(e,s,l)}else for(var d in t)t.hasOwnProperty(d)&&mm(e,d,t[d])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function bn(){}var Ys=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ra=null;function pm(e){var t=Jr(e);if(t&&(e=t.stateNode)){var r=e[bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bs(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Vt(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var s=l[bt]||null;if(!s)throw Error(o(90));Bs(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<r.length;t++)l=r[t],l.form===e.form&&um(l)}break e;case"textarea":dm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&ea(e,!!r.multiple,t,!1)}}}var Gs=!1;function vm(e,t,r){if(Gs)return e(t,r);Gs=!0;try{var l=e(t);return l}finally{if(Gs=!1,(na!==null||ra!==null)&&(_o(),na&&(t=na,e=ra,ra=na=null,pm(t),e)))for(t=0;t<e.length;t++)pm(e[t])}}function rl(e,t){var r=e.stateNode;if(r===null)return null;var l=r[bt]||null;if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(xn)try{var al={};Object.defineProperty(al,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{Xs=!1}var kn=null,Ps=null,Oi=null;function gm(){if(Oi)return Oi;var e,t=Ps,r=t.length,l,s="value"in kn?kn.value:kn.textContent,d=s.length;for(e=0;e<r&&t[e]===s[e];e++);var v=r-e;for(l=1;l<=v&&t[r-l]===s[d-l];l++);return Oi=s.slice(e,1<l?1-l:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function ym(){return!1}function xt(e){function t(r,l,s,d,v){this._reactName=r,this._targetInst=s,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(d):d[x]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Li:ym,this.isPropagationStopped=ym,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ui=xt(xr),ll=b({},xr,{view:0,detail:0}),O0=xt(ll),Ks,Qs,il,Vi=b({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Ks=e.screenX-il.screenX,Qs=e.screenY-il.screenY):Qs=Ks=0,il=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),bm=xt(Vi),$0=b({},Vi,{dataTransfer:0}),L0=xt($0),U0=b({},ll,{relatedTarget:0}),Zs=xt(U0),V0=b({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=xt(V0),H0=b({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k0=xt(H0),Y0=b({},xr,{data:0}),xm=xt(Y0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X0[e])?!!t[e]:!1}function Fs(){return P0}var K0=b({},ll,{key:function(e){if(e.key){var t=q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q0=xt(K0),Z0=b({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=xt(Z0),F0=b({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),J0=xt(F0),W0=b({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=xt(W0),e_=b({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=xt(e_),n_=b({},xr,{newState:0,oldState:0}),r_=xt(n_),a_=[9,13,27,32],Js=xn&&"CompositionEvent"in window,ol=null;xn&&"documentMode"in document&&(ol=document.documentMode);var l_=xn&&"TextEvent"in window&&!ol,Sm=xn&&(!Js||ol&&8<ol&&11>=ol),Em=" ",Tm=!1;function wm(e,t){switch(e){case"keyup":return a_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var aa=!1;function i_(e,t){switch(e){case"compositionend":return jm(t);case"keypress":return t.which!==32?null:(Tm=!0,Em);case"textInput":return e=t.data,e===Em&&Tm?null:e;default:return null}}function o_(e,t){if(aa)return e==="compositionend"||!Js&&wm(e,t)?(e=gm(),Oi=Ps=kn=null,aa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sm&&t.locale!=="ko"?null:t.data;default:return null}}var s_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s_[e.type]:t==="textarea"}function Nm(e,t,r,l){na?ra?ra.push(l):ra=[l]:na=l,t=No(t,"onChange"),0<t.length&&(r=new Ui("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var sl=null,ul=null;function u_(e){cv(e,0)}function Bi(e){var t=nl(e);if(um(t))return e}function Cm(e,t){if(e==="change")return t}var Mm=!1;if(xn){var Ws;if(xn){var Is="oninput"in document;if(!Is){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),Is=typeof Rm.oninput=="function"}Ws=Is}else Ws=!1;Mm=Ws&&(!document.documentMode||9<document.documentMode)}function zm(){sl&&(sl.detachEvent("onpropertychange",Dm),ul=sl=null)}function Dm(e){if(e.propertyName==="value"&&Bi(ul)){var t=[];Nm(t,ul,e,qs(e)),vm(u_,t)}}function c_(e,t,r){e==="focusin"?(zm(),sl=t,ul=r,sl.attachEvent("onpropertychange",Dm)):e==="focusout"&&zm()}function d_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(ul)}function f_(e,t){if(e==="click")return Bi(t)}function m_(e,t){if(e==="input"||e==="change")return Bi(t)}function h_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:h_;function cl(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var s=r[l];if(!Ms.call(t,s)||!Ct(e[s],t[s]))return!1}return!0}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $m(e,t){var r=Om(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Om(r)}}function Lm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=zi(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=zi(e.document)}return t}function eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var p_=xn&&"documentMode"in document&&11>=document.documentMode,la=null,tu=null,dl=null,nu=!1;function Vm(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;nu||la==null||la!==zi(l)||(l=la,"selectionStart"in l&&eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dl&&cl(dl,l)||(dl=l,l=No(tu,"onSelect"),0<l.length&&(t=new Ui("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=la)))}function _r(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ia={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},ru={},Bm={};xn&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function Sr(e){if(ru[e])return ru[e];if(!ia[e])return e;var t=ia[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bm)return ru[e]=t[r];return e}var Hm=Sr("animationend"),km=Sr("animationiteration"),Ym=Sr("animationstart"),v_=Sr("transitionrun"),g_=Sr("transitionstart"),y_=Sr("transitioncancel"),qm=Sr("transitionend"),Gm=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function tn(e,t){Gm.set(e,t),br(t,[e])}var Hi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],oa=0,lu=0;function ki(){for(var e=oa,t=lu=oa=0;t<e;){var r=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var s=Bt[t];Bt[t++]=null;var d=Bt[t];if(Bt[t++]=null,l!==null&&s!==null){var v=l.pending;v===null?s.next=s:(s.next=v.next,v.next=s),l.pending=s}d!==0&&Xm(r,s,d)}}function Yi(e,t,r,l){Bt[oa++]=e,Bt[oa++]=t,Bt[oa++]=r,Bt[oa++]=l,lu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function iu(e,t,r,l){return Yi(e,t,r,l),qi(e)}function Er(e,t){return Yi(e,null,null,t),qi(e)}function Xm(e,t,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var s=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(s=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,s&&t!==null&&(s=31-Nt(r),e=d.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=r|536870912),d):null}function qi(e){if(50<Dl)throw Dl=0,pc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sa={};function b_(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,r,l){return new b_(e,t,r,l)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var r=e.alternate;return r===null?(r=Mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Pm(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gi(e,t,r,l,s,d){var v=0;if(l=e,typeof e=="function")ou(e)&&(v=1);else if(typeof e=="string")v=T1(e,r,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Mt(31,r,t,s),e.elementType=K,e.lanes=d,e;case w:return Tr(r.children,s,d,t);case j:v=8,s|=24;break;case D:return e=Mt(12,r,t,s|2),e.elementType=D,e.lanes=d,e;case B:return e=Mt(13,r,t,s),e.elementType=B,e.lanes=d,e;case J:return e=Mt(19,r,t,s),e.elementType=J,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:v=10;break e;case k:v=9;break e;case Z:v=11;break e;case Q:v=14;break e;case E:v=16,l=null;break e}v=29,r=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Mt(v,r,t,s),t.elementType=e,t.type=l,t.lanes=d,t}function Tr(e,t,r,l){return e=Mt(7,e,l,t),e.lanes=r,e}function su(e,t,r){return e=Mt(6,e,null,t),e.lanes=r,e}function Km(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function uu(e,t,r){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qm=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var r=Qm.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Kf(t)},Qm.set(e,t),t)}return{value:e,source:t,stack:Kf(t)}}var ua=[],ca=0,Xi=null,fl=0,kt=[],Yt=0,Yn=null,un=1,cn="";function Sn(e,t){ua[ca++]=fl,ua[ca++]=Xi,Xi=e,fl=t}function Zm(e,t,r){kt[Yt++]=un,kt[Yt++]=cn,kt[Yt++]=Yn,Yn=e;var l=un;e=cn;var s=32-Nt(l)-1;l&=~(1<<s),r+=1;var d=32-Nt(t)+s;if(30<d){var v=s-s%5;d=(l&(1<<v)-1).toString(32),l>>=v,s-=v,un=1<<32-Nt(t)+s|r<<s|l,cn=d+e}else un=1<<d|r<<s|l,cn=e}function cu(e){e.return!==null&&(Sn(e,1),Zm(e,1,0))}function du(e){for(;e===Xi;)Xi=ua[--ca],ua[ca]=null,fl=ua[--ca],ua[ca]=null;for(;e===Yn;)Yn=kt[--Yt],kt[Yt]=null,cn=kt[--Yt],kt[Yt]=null,un=kt[--Yt],kt[Yt]=null}function Fm(e,t){kt[Yt++]=un,kt[Yt++]=cn,kt[Yt++]=Yn,un=t.id,cn=t.overflow,Yn=e}var lt=null,Oe=null,_e=!1,qn=null,qt=!1,fu=Error(o(519));function Gn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ml(Ht(t,e)),fu}function Jm(e){var t=e.stateNode,r=e.type,l=e.memoizedProps;switch(t[at]=e,t[bt]=l,r){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(r=0;r<$l.length;r++)ye($l[r],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),cm(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),fm(t,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||l.suppressHydrationWarning===!0||hv(t.textContent,r)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||Gn(e,!0)}function Wm(e){for(lt=e.return;lt;)switch(lt.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:lt=lt.return}}function da(e){if(e!==lt)return!1;if(!_e)return Wm(e),_e=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Mc(e.type,e.memoizedProps)),r=!r),r&&Oe&&Gn(e),Wm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Ev(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Oe=Ev(e)}else t===27?(t=Oe,ar(e.type)?(e=$c,$c=null,Oe=e):Oe=t):Oe=lt?Xt(e.stateNode.nextSibling):null;return!0}function wr(){Oe=lt=null,_e=!1}function mu(){var e=qn;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),qn=null),e}function ml(e){qn===null?qn=[e]:qn.push(e)}var hu=C(null),jr=null,En=null;function Xn(e,t,r){I(hu,t._currentValue),t._currentValue=r}function Tn(e){e._currentValue=hu.current,G(hu)}function pu(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function vu(e,t,r,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var d=s.dependencies;if(d!==null){var v=s.child;d=d.firstContext;e:for(;d!==null;){var x=d;d=s;for(var T=0;T<t.length;T++)if(x.context===t[T]){d.lanes|=r,x=d.alternate,x!==null&&(x.lanes|=r),pu(d.return,r,e),l||(v=null);break e}d=x.next}}else if(s.tag===18){if(v=s.return,v===null)throw Error(o(341));v.lanes|=r,d=v.alternate,d!==null&&(d.lanes|=r),pu(v,r,e),v=null}else v=s.child;if(v!==null)v.return=s;else for(v=s;v!==null;){if(v===e){v=null;break}if(s=v.sibling,s!==null){s.return=v.return,v=s;break}v=v.return}s=v}}function fa(e,t,r,l){e=null;for(var s=t,d=!1;s!==null;){if(!d){if((s.flags&524288)!==0)d=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var v=s.alternate;if(v===null)throw Error(o(387));if(v=v.memoizedProps,v!==null){var x=s.type;Ct(s.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(s===je.current){if(v=s.alternate,v===null)throw Error(o(387));v.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}s=s.return}e!==null&&vu(t,e,r,l),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){jr=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return Im(jr,e)}function Ki(e,t){return jr===null&&Ar(e),Im(e,t)}function Im(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},En===null){if(e===null)throw Error(o(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return r}var x_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},__=n.unstable_scheduleCallback,S_=n.unstable_NormalPriority,Ze={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new x_,data:new Map,refCount:0}}function hl(e){e.refCount--,e.refCount===0&&__(S_,function(){e.controller.abort()})}var pl=null,yu=0,ma=0,ha=null;function E_(e,t){if(pl===null){var r=pl=[];yu=0,ma=_c(),ha={status:"pending",value:void 0,then:function(l){r.push(l)}}}return yu++,t.then(eh,eh),t}function eh(){if(--yu===0&&pl!==null){ha!==null&&(ha.status="fulfilled");var e=pl;pl=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function T_(e,t){var r=[],l={status:"pending",value:null,reason:null,then:function(s){r.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<r.length;s++)(0,r[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<r.length;s++)(0,r[s])(void 0)}),l}var th=z.S;z.S=function(e,t){Vp=jt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&E_(e,t),th!==null&&th(e,t)};var Nr=C(null);function bu(){var e=Nr.current;return e!==null?e:ze.pooledCache}function Qi(e,t){t===null?I(Nr,Nr.current):I(Nr,t.pool)}function nh(){var e=bu();return e===null?null:{parent:Ze._currentValue,pool:e}}var pa=Error(o(460)),xu=Error(o(474)),Zi=Error(o(542)),Fi={then:function(){}};function rh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ah(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(bn,bn),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e;default:if(typeof t.status=="string")t.then(bn,bn);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ih(e),e}throw Mr=t,pa}}function Cr(e){try{var t=e._init;return t(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Mr=r,pa):r}}var Mr=null;function lh(){if(Mr===null)throw Error(o(459));var e=Mr;return Mr=null,e}function ih(e){if(e===pa||e===Zi)throw Error(o(483))}var va=null,vl=0;function Ji(e){var t=vl;return vl+=1,va===null&&(va=[]),ah(va,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wi(e,t){throw t.$$typeof===_?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oh(e){function t(O,M){if(e){var $=O.deletions;$===null?(O.deletions=[M],O.flags|=16):$.push(M)}}function r(O,M){if(!e)return null;for(;M!==null;)t(O,M),M=M.sibling;return null}function l(O){for(var M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function s(O,M){return O=_n(O,M),O.index=0,O.sibling=null,O}function d(O,M,$){return O.index=$,e?($=O.alternate,$!==null?($=$.index,$<M?(O.flags|=67108866,M):$):(O.flags|=67108866,M)):(O.flags|=1048576,M)}function v(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function x(O,M,$,Y){return M===null||M.tag!==6?(M=su($,O.mode,Y),M.return=O,M):(M=s(M,$),M.return=O,M)}function T(O,M,$,Y){var ie=$.type;return ie===w?H(O,M,$.props.children,Y,$.key):M!==null&&(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Cr(ie)===M.type)?(M=s(M,$.props),gl(M,$),M.return=O,M):(M=Gi($.type,$.key,$.props,null,O.mode,Y),gl(M,$),M.return=O,M)}function L(O,M,$,Y){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=uu($,O.mode,Y),M.return=O,M):(M=s(M,$.children||[]),M.return=O,M)}function H(O,M,$,Y,ie){return M===null||M.tag!==7?(M=Tr($,O.mode,Y,ie),M.return=O,M):(M=s(M,$),M.return=O,M)}function P(O,M,$){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=su(""+M,O.mode,$),M.return=O,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return $=Gi(M.type,M.key,M.props,null,O.mode,$),gl($,M),$.return=O,$;case N:return M=uu(M,O.mode,$),M.return=O,M;case E:return M=Cr(M),P(O,M,$)}if(re(M)||oe(M))return M=Tr(M,O.mode,$,null),M.return=O,M;if(typeof M.then=="function")return P(O,Ji(M),$);if(M.$$typeof===q)return P(O,Ki(O,M),$);Wi(O,M)}return null}function U(O,M,$,Y){var ie=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ie!==null?null:x(O,M,""+$,Y);if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return $.key===ie?T(O,M,$,Y):null;case N:return $.key===ie?L(O,M,$,Y):null;case E:return $=Cr($),U(O,M,$,Y)}if(re($)||oe($))return ie!==null?null:H(O,M,$,Y,null);if(typeof $.then=="function")return U(O,M,Ji($),Y);if($.$$typeof===q)return U(O,M,Ki(O,$),Y);Wi(O,$)}return null}function V(O,M,$,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return O=O.get($)||null,x(M,O,""+Y,ie);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case A:return O=O.get(Y.key===null?$:Y.key)||null,T(M,O,Y,ie);case N:return O=O.get(Y.key===null?$:Y.key)||null,L(M,O,Y,ie);case E:return Y=Cr(Y),V(O,M,$,Y,ie)}if(re(Y)||oe(Y))return O=O.get($)||null,H(M,O,Y,ie,null);if(typeof Y.then=="function")return V(O,M,$,Ji(Y),ie);if(Y.$$typeof===q)return V(O,M,$,Ki(M,Y),ie);Wi(M,Y)}return null}function ne(O,M,$,Y){for(var ie=null,Ee=null,ae=M,he=M=0,xe=null;ae!==null&&he<$.length;he++){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var Te=U(O,ae,$[he],Y);if(Te===null){ae===null&&(ae=xe);break}e&&ae&&Te.alternate===null&&t(O,ae),M=d(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te,ae=xe}if(he===$.length)return r(O,ae),_e&&Sn(O,he),ie;if(ae===null){for(;he<$.length;he++)ae=P(O,$[he],Y),ae!==null&&(M=d(ae,M,he),Ee===null?ie=ae:Ee.sibling=ae,Ee=ae);return _e&&Sn(O,he),ie}for(ae=l(ae);he<$.length;he++)xe=V(ae,O,he,$[he],Y),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?he:xe.key),M=d(xe,M,he),Ee===null?ie=xe:Ee.sibling=xe,Ee=xe);return e&&ae.forEach(function(ur){return t(O,ur)}),_e&&Sn(O,he),ie}function se(O,M,$,Y){if($==null)throw Error(o(151));for(var ie=null,Ee=null,ae=M,he=M=0,xe=null,Te=$.next();ae!==null&&!Te.done;he++,Te=$.next()){ae.index>he?(xe=ae,ae=null):xe=ae.sibling;var ur=U(O,ae,Te.value,Y);if(ur===null){ae===null&&(ae=xe);break}e&&ae&&ur.alternate===null&&t(O,ae),M=d(ur,M,he),Ee===null?ie=ur:Ee.sibling=ur,Ee=ur,ae=xe}if(Te.done)return r(O,ae),_e&&Sn(O,he),ie;if(ae===null){for(;!Te.done;he++,Te=$.next())Te=P(O,Te.value,Y),Te!==null&&(M=d(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return _e&&Sn(O,he),ie}for(ae=l(ae);!Te.done;he++,Te=$.next())Te=V(ae,O,he,Te.value,Y),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?he:Te.key),M=d(Te,M,he),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return e&&ae.forEach(function($1){return t(O,$1)}),_e&&Sn(O,he),ie}function Re(O,M,$,Y){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case A:e:{for(var ie=$.key;M!==null;){if(M.key===ie){if(ie=$.type,ie===w){if(M.tag===7){r(O,M.sibling),Y=s(M,$.props.children),Y.return=O,O=Y;break e}}else if(M.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&Cr(ie)===M.type){r(O,M.sibling),Y=s(M,$.props),gl(Y,$),Y.return=O,O=Y;break e}r(O,M);break}else t(O,M);M=M.sibling}$.type===w?(Y=Tr($.props.children,O.mode,Y,$.key),Y.return=O,O=Y):(Y=Gi($.type,$.key,$.props,null,O.mode,Y),gl(Y,$),Y.return=O,O=Y)}return v(O);case N:e:{for(ie=$.key;M!==null;){if(M.key===ie)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){r(O,M.sibling),Y=s(M,$.children||[]),Y.return=O,O=Y;break e}else{r(O,M);break}else t(O,M);M=M.sibling}Y=uu($,O.mode,Y),Y.return=O,O=Y}return v(O);case E:return $=Cr($),Re(O,M,$,Y)}if(re($))return ne(O,M,$,Y);if(oe($)){if(ie=oe($),typeof ie!="function")throw Error(o(150));return $=ie.call($),se(O,M,$,Y)}if(typeof $.then=="function")return Re(O,M,Ji($),Y);if($.$$typeof===q)return Re(O,M,Ki(O,$),Y);Wi(O,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,M!==null&&M.tag===6?(r(O,M.sibling),Y=s(M,$),Y.return=O,O=Y):(r(O,M),Y=su($,O.mode,Y),Y.return=O,O=Y),v(O)):r(O,M)}return function(O,M,$,Y){try{vl=0;var ie=Re(O,M,$,Y);return va=null,ie}catch(ae){if(ae===pa||ae===Zi)throw ae;var Ee=Mt(29,ae,null,O.mode);return Ee.lanes=Y,Ee.return=O,Ee}}}var Rr=oh(!0),sh=oh(!1),Pn=!1;function _u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=qi(e),Xm(e,null,r),t}return Yi(e,l,t,r),qi(e)}function yl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,If(e,r)}}function Eu(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var s=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var v={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?s=d=v:d=d.next=v,r=r.next}while(r!==null);d===null?s=d=t:d=d.next=t}else s=d=t;r={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var Tu=!1;function bl(){if(Tu){var e=ha;if(e!==null)throw e}}function xl(e,t,r,l){Tu=!1;var s=e.updateQueue;Pn=!1;var d=s.firstBaseUpdate,v=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var T=x,L=T.next;T.next=null,v===null?d=L:v.next=L,v=T;var H=e.alternate;H!==null&&(H=H.updateQueue,x=H.lastBaseUpdate,x!==v&&(x===null?H.firstBaseUpdate=L:x.next=L,H.lastBaseUpdate=T))}if(d!==null){var P=s.baseState;v=0,H=L=T=null,x=d;do{var U=x.lane&-536870913,V=U!==x.lane;if(V?(be&U)===U:(l&U)===U){U!==0&&U===ma&&(Tu=!0),H!==null&&(H=H.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ne=e,se=x;U=t;var Re=r;switch(se.tag){case 1:if(ne=se.payload,typeof ne=="function"){P=ne.call(Re,P,U);break e}P=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=se.payload,U=typeof ne=="function"?ne.call(Re,P,U):ne,U==null)break e;P=b({},P,U);break e;case 2:Pn=!0}}U=x.callback,U!==null&&(e.flags|=64,V&&(e.flags|=8192),V=s.callbacks,V===null?s.callbacks=[U]:V.push(U))}else V={lane:U,tag:x.tag,payload:x.payload,callback:x.callback,next:null},H===null?(L=H=V,T=P):H=H.next=V,v|=U;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;V=x,x=V.next,V.next=null,s.lastBaseUpdate=V,s.shared.pending=null}}while(!0);H===null&&(T=P),s.baseState=T,s.firstBaseUpdate=L,s.lastBaseUpdate=H,d===null&&(s.shared.lanes=0),In|=v,e.lanes=v,e.memoizedState=P}}function uh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function ch(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)uh(r[e],t)}var ga=C(null),Ii=C(0);function dh(e,t){e=Dn,I(Ii,e),I(ga,t),Dn=e|t.baseLanes}function wu(){I(Ii,Dn),I(ga,ga.current)}function ju(){Dn=Ii.current,G(ga),G(Ii)}var Rt=C(null),Gt=null;function Zn(e){var t=e.alternate;I(Pe,Pe.current&1),I(Rt,e),Gt===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(Gt=e)}function Au(e){I(Pe,Pe.current),I(Rt,e),Gt===null&&(Gt=e)}function fh(e){e.tag===22?(I(Pe,Pe.current),I(Rt,e),Gt===null&&(Gt=e)):Fn()}function Fn(){I(Pe,Pe.current),I(Rt,Rt.current)}function zt(e){G(Rt),Gt===e&&(Gt=null),G(Pe)}var Pe=C(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Dc(r)||Oc(r)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wn=0,me=null,Ce=null,Fe=null,to=!1,ya=!1,zr=!1,no=0,_l=0,ba=null,w_=0;function ke(){throw Error(o(321))}function Nu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ct(e[r],t[r]))return!1;return!0}function Cu(e,t,r,l,s,d){return wn=d,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Zh:Gu,zr=!1,d=r(l,s),zr=!1,ya&&(d=hh(t,r,l,s)),mh(e),d}function mh(e){z.H=Tl;var t=Ce!==null&&Ce.next!==null;if(wn=0,Fe=Ce=me=null,to=!1,_l=0,ba=null,t)throw Error(o(300));e===null||Je||(e=e.dependencies,e!==null&&Pi(e)&&(Je=!0))}function hh(e,t,r,l){me=e;var s=0;do{if(ya&&(ba=null),_l=0,ya=!1,25<=s)throw Error(o(301));if(s+=1,Fe=Ce=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Fh,d=t(r,l)}while(ya);return d}function j_(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Sl(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(me.flags|=1024),t}function Mu(){var e=no!==0;return no=0,e}function Ru(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function zu(e){if(to){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}to=!1}wn=0,Fe=Ce=me=null,ya=!1,_l=no=0,ba=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ke(){if(Ce===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Fe===null?me.memoizedState:Fe.next;if(t!==null)Fe=t,Ce=e;else{if(e===null)throw me.alternate===null?Error(o(467)):Error(o(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Fe===null?me.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var t=_l;return _l+=1,ba===null&&(ba=[]),e=ah(ba,e,t),t=me,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Zh:Gu),e}function ao(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===q)return it(e)}throw Error(o(438,String(e)))}function Du(e){var t=null,r=me.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=ro(),me.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),l=0;l<e;l++)r[l]=le;return t.index++,r}function jn(e,t){return typeof t=="function"?t(e):t}function lo(e){var t=Ke();return Ou(t,Ce,e)}function Ou(e,t,r){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=r;var s=e.baseQueue,d=l.pending;if(d!==null){if(s!==null){var v=s.next;s.next=d.next,d.next=v}t.baseQueue=s=d,l.pending=null}if(d=e.baseState,s===null)e.memoizedState=d;else{t=s.next;var x=v=null,T=null,L=t,H=!1;do{var P=L.lane&-536870913;if(P!==L.lane?(be&P)===P:(wn&P)===P){var U=L.revertLane;if(U===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),P===ma&&(H=!0);else if((wn&U)===U){L=L.next,U===ma&&(H=!0);continue}else P={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=P,v=d):T=T.next=P,me.lanes|=U,In|=U;P=L.action,zr&&r(d,P),d=L.hasEagerState?L.eagerState:r(d,P)}else U={lane:P,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},T===null?(x=T=U,v=d):T=T.next=U,me.lanes|=P,In|=P;L=L.next}while(L!==null&&L!==t);if(T===null?v=d:T.next=x,!Ct(d,e.memoizedState)&&(Je=!0,H&&(r=ha,r!==null)))throw r;e.memoizedState=d,e.baseState=v,e.baseQueue=T,l.lastRenderedState=d}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $u(e){var t=Ke(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var l=r.dispatch,s=r.pending,d=t.memoizedState;if(s!==null){r.pending=null;var v=s=s.next;do d=e(d,v.action),v=v.next;while(v!==s);Ct(d,t.memoizedState)||(Je=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,l]}function ph(e,t,r){var l=me,s=Ke(),d=_e;if(d){if(r===void 0)throw Error(o(407));r=r()}else r=t();var v=!Ct((Ce||s).memoizedState,r);if(v&&(s.memoizedState=r,Je=!0),s=s.queue,Vu(yh.bind(null,l,s,e),[e]),s.getSnapshot!==t||v||Fe!==null&&Fe.memoizedState.tag&1){if(l.flags|=2048,xa(9,{destroy:void 0},gh.bind(null,l,s,r,t),null),ze===null)throw Error(o(349));d||(wn&127)!==0||vh(l,t,r)}return r}function vh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t=ro(),me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function gh(e,t,r,l){t.value=r,t.getSnapshot=l,bh(t)&&xh(e)}function yh(e,t,r){return r(function(){bh(t)&&xh(e)})}function bh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ct(e,r)}catch{return!0}}function xh(e){var t=Er(e,2);t!==null&&wt(t,e,2)}function Lu(e){var t=ht();if(typeof e=="function"){var r=e;if(e=r(),zr){Bn(!0);try{r()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t}function _h(e,t,r,l){return e.baseState=r,Ou(e,Ce,typeof l=="function"?l:jn)}function A_(e,t,r,l,s){if(so(e))throw Error(o(485));if(e=t.action,e!==null){var d={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};z.T!==null?r(!0):d.isTransition=!1,l(d),r=t.pending,r===null?(d.next=t.pending=d,Sh(t,d)):(d.next=r.next,t.pending=r.next=d)}}function Sh(e,t){var r=t.action,l=t.payload,s=e.state;if(t.isTransition){var d=z.T,v={};z.T=v;try{var x=r(s,l),T=z.S;T!==null&&T(v,x),Eh(e,t,x)}catch(L){Uu(e,t,L)}finally{d!==null&&v.types!==null&&(d.types=v.types),z.T=d}}else try{d=r(s,l),Eh(e,t,d)}catch(L){Uu(e,t,L)}}function Eh(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Th(e,t,l)},function(l){return Uu(e,t,l)}):Th(e,t,r)}function Th(e,t,r){t.status="fulfilled",t.value=r,wh(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,Sh(e,r)))}function Uu(e,t,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=r,wh(t),t=t.next;while(t!==l)}e.action=null}function wh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jh(e,t){return t}function Ah(e,t){if(_e){var r=ze.formState;if(r!==null){e:{var l=me;if(_e){if(Oe){t:{for(var s=Oe,d=qt;s.nodeType!==8;){if(!d){s=null;break t}if(s=Xt(s.nextSibling),s===null){s=null;break t}}d=s.data,s=d==="F!"||d==="F"?s:null}if(s){Oe=Xt(s.nextSibling),l=s.data==="F!";break e}}Gn(l)}l=!1}l&&(t=r[0])}}return r=ht(),r.memoizedState=r.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jh,lastRenderedState:t},r.queue=l,r=Ph.bind(null,me,l),l.dispatch=r,l=Lu(!1),d=qu.bind(null,me,!1,l.queue),l=ht(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,r=A_.bind(null,me,s,d,r),s.dispatch=r,l.memoizedState=e,[t,r,!1]}function Nh(e){var t=Ke();return Ch(t,Ce,e)}function Ch(e,t,r){if(t=Ou(e,t,jh)[0],e=lo(jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Sl(t)}catch(v){throw v===pa?Zi:v}else l=t;t=Ke();var s=t.queue,d=s.dispatch;return r!==t.memoizedState&&(me.flags|=2048,xa(9,{destroy:void 0},N_.bind(null,s,r),null)),[l,d,e]}function N_(e,t){e.action=t}function Mh(e){var t=Ke(),r=Ce;if(r!==null)return Ch(t,r,e);Ke(),t=t.memoizedState,r=Ke();var l=r.queue.dispatch;return r.memoizedState=e,[t,l,!1]}function xa(e,t,r,l){return e={tag:e,create:r,deps:l,inst:t,next:null},t=me.updateQueue,t===null&&(t=ro(),me.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e),e}function Rh(){return Ke().memoizedState}function io(e,t,r,l){var s=ht();me.flags|=e,s.memoizedState=xa(1|t,{destroy:void 0},r,l===void 0?null:l)}function oo(e,t,r,l){var s=Ke();l=l===void 0?null:l;var d=s.memoizedState.inst;Ce!==null&&l!==null&&Nu(l,Ce.memoizedState.deps)?s.memoizedState=xa(t,d,r,l):(me.flags|=e,s.memoizedState=xa(1|t,d,r,l))}function zh(e,t){io(8390656,8,e,t)}function Vu(e,t){oo(2048,8,e,t)}function C_(e){me.flags|=4;var t=me.updateQueue;if(t===null)t=ro(),me.updateQueue=t,t.events=[e];else{var r=t.events;r===null?t.events=[e]:r.push(e)}}function Dh(e){var t=Ke().memoizedState;return C_({ref:t,nextImpl:e}),function(){if((we&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Oh(e,t){return oo(4,2,e,t)}function $h(e,t){return oo(4,4,e,t)}function Lh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uh(e,t,r){r=r!=null?r.concat([e]):null,oo(4,4,Lh.bind(null,t,e),r)}function Bu(){}function Vh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;return t!==null&&Nu(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function Bh(e,t){var r=Ke();t=t===void 0?null:t;var l=r.memoizedState;if(t!==null&&Nu(t,l[1]))return l[0];if(l=e(),zr){Bn(!0);try{e()}finally{Bn(!1)}}return r.memoizedState=[l,t],l}function Hu(e,t,r){return r===void 0||(wn&1073741824)!==0&&(be&261930)===0?e.memoizedState=t:(e.memoizedState=r,e=Hp(),me.lanes|=e,In|=e,r)}function Hh(e,t,r,l){return Ct(r,t)?r:ga.current!==null?(e=Hu(e,r,l),Ct(e,t)||(Je=!0),e):(wn&42)===0||(wn&1073741824)!==0&&(be&261930)===0?(Je=!0,e.memoizedState=r):(e=Hp(),me.lanes|=e,In|=e,t)}function kh(e,t,r,l,s){var d=X.p;X.p=d!==0&&8>d?d:8;var v=z.T,x={};z.T=x,qu(e,!1,t,r);try{var T=s(),L=z.S;if(L!==null&&L(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=T_(T,l);El(e,t,H,$t(e))}else El(e,t,l,$t(e))}catch(P){El(e,t,{then:function(){},status:"rejected",reason:P},$t())}finally{X.p=d,v!==null&&x.types!==null&&(v.types=x.types),z.T=v}}function M_(){}function ku(e,t,r,l){if(e.tag!==5)throw Error(o(476));var s=Yh(e).queue;kh(e,s,t,ee,r===null?M_:function(){return qh(e),r(l)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:ee},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qh(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),El(e,t.next.queue,{},$t())}function Yu(){return it(Hl)}function Gh(){return Ke().memoizedState}function Xh(){return Ke().memoizedState}function R_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=$t();e=Kn(r);var l=Qn(t,e,r);l!==null&&(wt(l,t,r),yl(l,t,r)),t={cache:gu()},e.payload=t;return}t=t.return}}function z_(e,t,r){var l=$t();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},so(e)?Kh(t,r):(r=iu(e,t,r,l),r!==null&&(wt(r,e,l),Qh(r,t,l)))}function Ph(e,t,r){var l=$t();El(e,t,r,l)}function El(e,t,r,l){var s={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(so(e))Kh(t,s);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var v=t.lastRenderedState,x=d(v,r);if(s.hasEagerState=!0,s.eagerState=x,Ct(x,v))return Yi(e,t,s,0),ze===null&&ki(),!1}catch{}if(r=iu(e,t,s,l),r!==null)return wt(r,e,l),Qh(r,t,l),!0}return!1}function qu(e,t,r,l){if(l={lane:2,revertLane:_c(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},so(e)){if(t)throw Error(o(479))}else t=iu(e,r,l,2),t!==null&&wt(t,e,2)}function so(e){var t=e.alternate;return e===me||t!==null&&t===me}function Kh(e,t){ya=to=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Qh(e,t,r){if((r&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,If(e,r)}}var Tl={readContext:it,use:ao,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};Tl.useEffectEvent=ke;var Zh={readContext:it,use:ao,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:zh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,io(4194308,4,Lh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){io(4,2,e,t)},useMemo:function(e,t){var r=ht();t=t===void 0?null:t;var l=e();if(zr){Bn(!0);try{e()}finally{Bn(!1)}}return r.memoizedState=[l,t],l},useReducer:function(e,t,r){var l=ht();if(r!==void 0){var s=r(t);if(zr){Bn(!0);try{r(t)}finally{Bn(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=z_.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Lu(e);var t=e.queue,r=Ph.bind(null,me,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Bu,useDeferredValue:function(e,t){var r=ht();return Hu(r,e,t)},useTransition:function(){var e=Lu(!1);return e=kh.bind(null,me,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var l=me,s=ht();if(_e){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),ze===null)throw Error(o(349));(be&127)!==0||vh(l,t,r)}s.memoizedState=r;var d={value:r,getSnapshot:t};return s.queue=d,zh(yh.bind(null,l,d,e),[e]),l.flags|=2048,xa(9,{destroy:void 0},gh.bind(null,l,d,r,t),null),r},useId:function(){var e=ht(),t=ze.identifierPrefix;if(_e){var r=cn,l=un;r=(l&~(1<<32-Nt(l)-1)).toString(32)+r,t="_"+t+"R_"+r,r=no++,0<r&&(t+="H"+r.toString(32)),t+="_"}else r=w_++,t="_"+t+"r_"+r.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yu,useFormState:Ah,useActionState:Ah,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=qu.bind(null,me,!0,r),r.dispatch=t,[e,t]},useMemoCache:Du,useCacheRefresh:function(){return ht().memoizedState=R_.bind(null,me)},useEffectEvent:function(e){var t=ht(),r={impl:e};return t.memoizedState=r,function(){if((we&2)!==0)throw Error(o(440));return r.impl.apply(void 0,arguments)}}},Gu={readContext:it,use:ao,useCallback:Vh,useContext:it,useEffect:Vu,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Bh,useReducer:lo,useRef:Rh,useState:function(){return lo(jn)},useDebugValue:Bu,useDeferredValue:function(e,t){var r=Ke();return Hh(r,Ce.memoizedState,e,t)},useTransition:function(){var e=lo(jn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:ph,useId:Gh,useHostTransitionStatus:Yu,useFormState:Nh,useActionState:Nh,useOptimistic:function(e,t){var r=Ke();return _h(r,Ce,e,t)},useMemoCache:Du,useCacheRefresh:Xh};Gu.useEffectEvent=Dh;var Fh={readContext:it,use:ao,useCallback:Vh,useContext:it,useEffect:Vu,useImperativeHandle:Uh,useInsertionEffect:Oh,useLayoutEffect:$h,useMemo:Bh,useReducer:$u,useRef:Rh,useState:function(){return $u(jn)},useDebugValue:Bu,useDeferredValue:function(e,t){var r=Ke();return Ce===null?Hu(r,e,t):Hh(r,Ce.memoizedState,e,t)},useTransition:function(){var e=$u(jn)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:Sl(e),t]},useSyncExternalStore:ph,useId:Gh,useHostTransitionStatus:Yu,useFormState:Mh,useActionState:Mh,useOptimistic:function(e,t){var r=Ke();return Ce!==null?_h(r,Ce,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Du,useCacheRefresh:Xh};Fh.useEffectEvent=Dh;function Xu(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Pu={enqueueSetState:function(e,t,r){e=e._reactInternals;var l=$t(),s=Kn(l);s.payload=t,r!=null&&(s.callback=r),t=Qn(e,s,l),t!==null&&(wt(t,e,l),yl(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=$t(),s=Kn(l);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=Qn(e,s,l),t!==null&&(wt(t,e,l),yl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=$t(),l=Kn(r);l.tag=2,t!=null&&(l.callback=t),t=Qn(e,l,r),t!==null&&(wt(t,e,r),yl(t,e,r))}};function Jh(e,t,r,l,s,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):t.prototype&&t.prototype.isPureReactComponent?!cl(r,l)||!cl(s,d):!0}function Wh(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&Pu.enqueueReplaceState(t,t.state,null)}function Dr(e,t){var r=t;if("ref"in t){r={};for(var l in t)l!=="ref"&&(r[l]=t[l])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var s in e)r[s]===void 0&&(r[s]=e[s])}return r}function Ih(e){Hi(e)}function ep(e){console.error(e)}function tp(e){Hi(e)}function uo(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function np(e,t,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Ku(e,t,r){return r=Kn(r),r.tag=3,r.payload={element:null},r.callback=function(){uo(e,t)},r}function rp(e){return e=Kn(e),e.tag=3,e}function ap(e,t,r,l){var s=r.type.getDerivedStateFromError;if(typeof s=="function"){var d=l.value;e.payload=function(){return s(d)},e.callback=function(){np(t,r,l)}}var v=r.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){np(t,r,l),typeof s!="function"&&(er===null?er=new Set([this]):er.add(this));var x=l.stack;this.componentDidCatch(l.value,{componentStack:x!==null?x:""})})}function D_(e,t,r,l,s){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=r.alternate,t!==null&&fa(t,r,s,!0),r=Rt.current,r!==null){switch(r.tag){case 31:case 13:return Gt===null?So():r.alternate===null&&Ye===0&&(Ye=3),r.flags&=-257,r.flags|=65536,r.lanes=s,l===Fi?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([l]):t.add(l),yc(e,l,s)),!1;case 22:return r.flags|=65536,l===Fi?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([l]):r.add(l)),yc(e,l,s)),!1}throw Error(o(435,r.tag))}return yc(e,l,s),So(),!1}if(_e)return t=Rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==fu&&(e=Error(o(422),{cause:l}),ml(Ht(e,r)))):(l!==fu&&(t=Error(o(423),{cause:l}),ml(Ht(t,r))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=Ht(l,r),s=Ku(e.stateNode,l,s),Eu(e,s),Ye!==4&&(Ye=2)),!1;var d=Error(o(520),{cause:l});if(d=Ht(d,r),zl===null?zl=[d]:zl.push(d),Ye!==4&&(Ye=2),t===null)return!0;l=Ht(l,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=s&-s,r.lanes|=e,e=Ku(r.stateNode,l,e),Eu(r,e),!1;case 1:if(t=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(er===null||!er.has(d))))return r.flags|=65536,s&=-s,r.lanes|=s,s=rp(s),ap(s,e,r,l),Eu(r,s),!1}r=r.return}while(r!==null);return!1}var Qu=Error(o(461)),Je=!1;function ot(e,t,r,l){t.child=e===null?sh(t,null,r,l):Rr(t,e.child,r,l)}function lp(e,t,r,l,s){r=r.render;var d=t.ref;if("ref"in l){var v={};for(var x in l)x!=="ref"&&(v[x]=l[x])}else v=l;return Ar(t),l=Cu(e,t,r,v,d,s),x=Mu(),e!==null&&!Je?(Ru(e,t,s),An(e,t,s)):(_e&&x&&cu(t),t.flags|=1,ot(e,t,l,s),t.child)}function ip(e,t,r,l,s){if(e===null){var d=r.type;return typeof d=="function"&&!ou(d)&&d.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=d,op(e,t,d,l,s)):(e=Gi(r.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!nc(e,s)){var v=d.memoizedProps;if(r=r.compare,r=r!==null?r:cl,r(v,l)&&e.ref===t.ref)return An(e,t,s)}return t.flags|=1,e=_n(d,l),e.ref=t.ref,e.return=t,t.child=e}function op(e,t,r,l,s){if(e!==null){var d=e.memoizedProps;if(cl(d,l)&&e.ref===t.ref)if(Je=!1,t.pendingProps=l=d,nc(e,s))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,An(e,t,s)}return Zu(e,t,r,l,s)}function sp(e,t,r,l){var s=l.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~d}else l=0,t.child=null;return up(e,t,d,r,l)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qi(t,d!==null?d.cachePool:null),d!==null?dh(t,d):wu(),fh(t);else return l=t.lanes=536870912,up(e,t,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(Qi(t,d.cachePool),dh(t,d),Fn(),t.memoizedState=null):(e!==null&&Qi(t,null),wu(),Fn());return ot(e,t,s,r),t.child}function wl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function up(e,t,r,l,s){var d=bu();return d=d===null?null:{parent:Ze._currentValue,pool:d},t.memoizedState={baseLanes:r,cachePool:d},e!==null&&Qi(t,null),wu(),fh(t),e!==null&&fa(e,t,l,!0),t.childLanes=s,null}function co(e,t){return t=mo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cp(e,t,r){return Rr(t,e.child,null,r),e=co(t,t.pendingProps),e.flags|=2,zt(t),t.memoizedState=null,e}function O_(e,t,r){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(l.mode==="hidden")return e=co(t,l),t.lanes=536870912,wl(null,e);if(Au(t),(e=Oe)?(e=Sv(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},r=Km(e),r.return=t,t.child=r,lt=t,Oe=null)):e=null,e===null)throw Gn(t);return t.lanes=536870912,null}return co(t,l)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(Au(t),s)if(t.flags&256)t.flags&=-257,t=cp(e,t,r);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Je||fa(e,t,r,!1),s=(r&e.childLanes)!==0,Je||s){if(l=ze,l!==null&&(v=em(l,r),v!==0&&v!==d.retryLane))throw d.retryLane=v,Er(e,v),wt(l,e,v),Qu;So(),t=cp(e,t,r)}else e=d.treeContext,Oe=Xt(v.nextSibling),lt=t,_e=!0,qn=null,qt=!1,e!==null&&Fm(t,e),t=co(t,l),t.flags|=4096;return t}return e=_n(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fo(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(o(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Zu(e,t,r,l,s){return Ar(t),r=Cu(e,t,r,l,void 0,s),l=Mu(),e!==null&&!Je?(Ru(e,t,s),An(e,t,s)):(_e&&l&&cu(t),t.flags|=1,ot(e,t,r,s),t.child)}function dp(e,t,r,l,s,d){return Ar(t),t.updateQueue=null,r=hh(t,l,r,s),mh(e),l=Mu(),e!==null&&!Je?(Ru(e,t,d),An(e,t,d)):(_e&&l&&cu(t),t.flags|=1,ot(e,t,r,d),t.child)}function fp(e,t,r,l,s){if(Ar(t),t.stateNode===null){var d=sa,v=r.contextType;typeof v=="object"&&v!==null&&(d=it(v)),d=new r(l,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pu,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=l,d.state=t.memoizedState,d.refs={},_u(t),v=r.contextType,d.context=typeof v=="object"&&v!==null?it(v):sa,d.state=t.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Xu(t,r,v,l),d.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Pu.enqueueReplaceState(d,d.state,null),xl(t,l,d,s),bl(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){d=t.stateNode;var x=t.memoizedProps,T=Dr(r,x);d.props=T;var L=d.context,H=r.contextType;v=sa,typeof H=="object"&&H!==null&&(v=it(H));var P=r.getDerivedStateFromProps;H=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x||L!==v)&&Wh(t,d,l,v),Pn=!1;var U=t.memoizedState;d.state=U,xl(t,l,d,s),bl(),L=t.memoizedState,x||U!==L||Pn?(typeof P=="function"&&(Xu(t,r,P,l),L=t.memoizedState),(T=Pn||Jh(t,r,T,l,U,L,v))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=L),d.props=l,d.state=L,d.context=v,l=T):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{d=t.stateNode,Su(e,t),v=t.memoizedProps,H=Dr(r,v),d.props=H,P=t.pendingProps,U=d.context,L=r.contextType,T=sa,typeof L=="object"&&L!==null&&(T=it(L)),x=r.getDerivedStateFromProps,(L=typeof x=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==P||U!==T)&&Wh(t,d,l,T),Pn=!1,U=t.memoizedState,d.state=U,xl(t,l,d,s),bl();var V=t.memoizedState;v!==P||U!==V||Pn||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof x=="function"&&(Xu(t,r,x,l),V=t.memoizedState),(H=Pn||Jh(t,r,H,l,U,V,T)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,V,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,V,T)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=V),d.props=l,d.state=V,d.context=T,l=H):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return d=l,fo(e,t),l=(t.flags&128)!==0,d||l?(d=t.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&l?(t.child=Rr(t,e.child,null,s),t.child=Rr(t,null,r,s)):ot(e,t,r,s),t.memoizedState=d.state,e=t.child):e=An(e,t,s),e}function mp(e,t,r,l){return wr(),t.flags|=256,ot(e,t,r,l),t.child}var Fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:nh()}}function Wu(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=Ot),e}function hp(e,t,r){var l=t.pendingProps,s=!1,d=(t.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),v&&(s=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(s?Zn(t):Fn(),(e=Oe)?(e=Sv(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:un,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},r=Km(e),r.return=t,t.child=r,lt=t,Oe=null)):e=null,e===null)throw Gn(t);return Oc(e)?t.lanes=32:t.lanes=536870912,null}var x=l.children;return l=l.fallback,s?(Fn(),s=t.mode,x=mo({mode:"hidden",children:x},s),l=Tr(l,s,r,null),x.return=t,l.return=t,x.sibling=l,t.child=x,l=t.child,l.memoizedState=Ju(r),l.childLanes=Wu(e,v,r),t.memoizedState=Fu,wl(null,l)):(Zn(t),Iu(t,x))}var T=e.memoizedState;if(T!==null&&(x=T.dehydrated,x!==null)){if(d)t.flags&256?(Zn(t),t.flags&=-257,t=ec(e,t,r)):t.memoizedState!==null?(Fn(),t.child=e.child,t.flags|=128,t=null):(Fn(),x=l.fallback,s=t.mode,l=mo({mode:"visible",children:l.children},s),x=Tr(x,s,r,null),x.flags|=2,l.return=t,x.return=t,l.sibling=x,t.child=l,Rr(t,e.child,null,r),l=t.child,l.memoizedState=Ju(r),l.childLanes=Wu(e,v,r),t.memoizedState=Fu,t=wl(null,l));else if(Zn(t),Oc(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(o(419)),l.stack="",l.digest=v,ml({value:l,source:null,stack:null}),t=ec(e,t,r)}else if(Je||fa(e,t,r,!1),v=(r&e.childLanes)!==0,Je||v){if(v=ze,v!==null&&(l=em(v,r),l!==0&&l!==T.retryLane))throw T.retryLane=l,Er(e,l),wt(v,e,l),Qu;Dc(x)||So(),t=ec(e,t,r)}else Dc(x)?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Oe=Xt(x.nextSibling),lt=t,_e=!0,qn=null,qt=!1,e!==null&&Fm(t,e),t=Iu(t,l.children),t.flags|=4096);return t}return s?(Fn(),x=l.fallback,s=t.mode,T=e.child,L=T.sibling,l=_n(T,{mode:"hidden",children:l.children}),l.subtreeFlags=T.subtreeFlags&65011712,L!==null?x=_n(L,x):(x=Tr(x,s,r,null),x.flags|=2),x.return=t,l.return=t,l.sibling=x,t.child=l,wl(null,l),l=t.child,x=e.child.memoizedState,x===null?x=Ju(r):(s=x.cachePool,s!==null?(T=Ze._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=nh(),x={baseLanes:x.baseLanes|r,cachePool:s}),l.memoizedState=x,l.childLanes=Wu(e,v,r),t.memoizedState=Fu,wl(e.child,l)):(Zn(t),r=e.child,e=r.sibling,r=_n(r,{mode:"visible",children:l.children}),r.return=t,r.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=r,t.memoizedState=null,r)}function Iu(e,t){return t=mo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function mo(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function ec(e,t,r){return Rr(t,e.child,null,r),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pp(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pu(e.return,t,r)}function tc(e,t,r,l,s,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:s,treeForkCount:d}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=r,v.tailMode=s,v.treeForkCount=d)}function vp(e,t,r){var l=t.pendingProps,s=l.revealOrder,d=l.tail;l=l.children;var v=Pe.current,x=(v&2)!==0;if(x?(v=v&1|2,t.flags|=128):v&=1,I(Pe,v),ot(e,t,l,r),l=_e?fl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,r,t);else if(e.tag===19)pp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&eo(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),tc(t,!1,s,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&eo(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}tc(t,!0,r,null,d,l);break;case"together":tc(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function An(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),In|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(fa(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=_n(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_n(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function nc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function $_(e,t,r){switch(t.tag){case 3:mt(t,t.stateNode.containerInfo),Xn(t,Ze,e.memoizedState.cache),wr();break;case 27:case 5:Ja(t);break;case 4:mt(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Au(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Zn(t),t.flags|=128,null):(r&t.child.childLanes)!==0?hp(e,t,r):(Zn(t),e=An(e,t,r),e!==null?e.sibling:null);Zn(t);break;case 19:var s=(e.flags&128)!==0;if(l=(r&t.childLanes)!==0,l||(fa(e,t,r,!1),l=(r&t.childLanes)!==0),s){if(l)return vp(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(Pe,Pe.current),l)break;return null;case 22:return t.lanes=0,sp(e,t,r,t.pendingProps);case 24:Xn(t,Ze,e.memoizedState.cache)}return An(e,t,r)}function gp(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!nc(e,r)&&(t.flags&128)===0)return Je=!1,$_(e,t,r);Je=(e.flags&131072)!==0}else Je=!1,_e&&(t.flags&1048576)!==0&&Zm(t,fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Cr(t.elementType),t.type=e,typeof e=="function")ou(e)?(l=Dr(e,l),t.tag=1,t=fp(null,t,e,l,r)):(t.tag=0,t=Zu(null,t,e,l,r));else{if(e!=null){var s=e.$$typeof;if(s===Z){t.tag=11,t=lp(null,t,e,l,r);break e}else if(s===Q){t.tag=14,t=ip(null,t,e,l,r);break e}}throw t=W(e)||e,Error(o(306,t,""))}}return t;case 0:return Zu(e,t,t.type,t.pendingProps,r);case 1:return l=t.type,s=Dr(l,t.pendingProps),fp(e,t,l,s,r);case 3:e:{if(mt(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var d=t.memoizedState;s=d.element,Su(e,t),xl(t,l,null,r);var v=t.memoizedState;if(l=v.cache,Xn(t,Ze,l),l!==d.cache&&vu(t,[Ze],r,!0),bl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=mp(e,t,l,r);break e}else if(l!==s){s=Ht(Error(o(424)),t),ml(s),t=mp(e,t,l,r);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Oe=Xt(e.firstChild),lt=t,_e=!0,qn=null,qt=!0,r=sh(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wr(),l===s){t=An(e,t,r);break e}ot(e,t,l,r)}t=t.child}return t;case 26:return fo(e,t),e===null?(r=Nv(t.type,null,t.pendingProps,null))?t.memoizedState=r:_e||(r=t.type,e=t.pendingProps,l=Co(ve.current).createElement(r),l[at]=t,l[bt]=e,st(l,r,e),nt(l),t.stateNode=l):t.memoizedState=Nv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ja(t),e===null&&_e&&(l=t.stateNode=wv(t.type,t.pendingProps,ve.current),lt=t,qt=!0,s=Oe,ar(t.type)?($c=s,Oe=Xt(l.firstChild)):Oe=s),ot(e,t,t.pendingProps.children,r),fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((s=l=Oe)&&(l=d1(l,t.type,t.pendingProps,qt),l!==null?(t.stateNode=l,lt=t,Oe=Xt(l.firstChild),qt=!1,s=!0):s=!1),s||Gn(t)),Ja(t),s=t.type,d=t.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,Mc(s,d)?l=null:v!==null&&Mc(s,v)&&(t.flags|=32),t.memoizedState!==null&&(s=Cu(e,t,j_,null,null,r),Hl._currentValue=s),fo(e,t),ot(e,t,l,r),t.child;case 6:return e===null&&_e&&((e=r=Oe)&&(r=f1(r,t.pendingProps,qt),r!==null?(t.stateNode=r,lt=t,Oe=null,e=!0):e=!1),e||Gn(t)),null;case 13:return hp(e,t,r);case 4:return mt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Rr(t,null,l,r):ot(e,t,l,r),t.child;case 11:return lp(e,t,t.type,t.pendingProps,r);case 7:return ot(e,t,t.pendingProps,r),t.child;case 8:return ot(e,t,t.pendingProps.children,r),t.child;case 12:return ot(e,t,t.pendingProps.children,r),t.child;case 10:return l=t.pendingProps,Xn(t,t.type,l.value),ot(e,t,l.children,r),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Ar(t),s=it(s),l=l(s),t.flags|=1,ot(e,t,l,r),t.child;case 14:return ip(e,t,t.type,t.pendingProps,r);case 15:return op(e,t,t.type,t.pendingProps,r);case 19:return vp(e,t,r);case 31:return O_(e,t,r);case 22:return sp(e,t,r,t.pendingProps);case 24:return Ar(t),l=it(Ze),e===null?(s=bu(),s===null&&(s=ze,d=gu(),s.pooledCache=d,d.refCount++,d!==null&&(s.pooledCacheLanes|=r),s=d),t.memoizedState={parent:l,cache:s},_u(t),Xn(t,Ze,s)):((e.lanes&r)!==0&&(Su(e,t),xl(t,null,null,r),bl()),s=e.memoizedState,d=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Xn(t,Ze,l)):(l=d.cache,Xn(t,Ze,l),l!==s.cache&&vu(t,[Ze],r,!0))),ot(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Nn(e){e.flags|=4}function rc(e,t,r,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Gp())e.flags|=8192;else throw Mr=Fi,xu}else e.flags&=-16777217}function yp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dv(t))if(Gp())e.flags|=8192;else throw Mr=Fi,xu}function ho(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Jf():536870912,e.lanes|=t,Ta|=t)}function jl(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function L_(e,t,r){var l=t.pendingProps;switch(du(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return $e(t),null;case 3:return r=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(Ze),Xe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?Nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mu())),$e(t),null;case 26:var s=t.type,d=t.memoizedState;return e===null?(Nn(t),d!==null?($e(t),yp(t,d)):($e(t),rc(t,s,null,l,r))):d?d!==e.memoizedState?(Nn(t),$e(t),yp(t,d)):($e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Nn(t),$e(t),rc(t,s,e,l,r)),null;case 27:if(Ti(t),r=ve.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}e=te.current,da(t)?Jm(t):(e=wv(s,l,r),t.stateNode=e,Nn(t))}return $e(t),null;case 5:if(Ti(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return $e(t),null}if(d=te.current,da(t))Jm(t);else{var v=Co(ve.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?v.createElement(s,{is:l.is}):v.createElement(s)}}d[at]=t,d[bt]=l;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=d;e:switch(st(d,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Nn(t)}}return $e(t),rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,r),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Nn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,da(t)){if(e=t.stateNode,r=t.memoizedProps,l=null,s=lt,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[at]=t,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||hv(e.nodeValue,r)),e||Gn(t,!0)}else e=Co(e).createTextNode(l),e[at]=t,t.stateNode=e}return $e(t),null;case 31:if(r=t.memoizedState,e===null||e.memoizedState!==null){if(l=da(t),r!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),e=!1}else r=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return t.flags&256?(zt(t),t):(zt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return $e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=da(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[at]=t}else wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$e(t),s=!1}else s=mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(zt(t),t):(zt(t),null)}return zt(t),(t.flags&128)!==0?(t.lanes=r,t):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==s&&(l.flags|=2048)),r!==e&&r&&(t.child.flags|=8192),ho(t,t.updateQueue),$e(t),null);case 4:return Xe(),e===null&&wc(t.stateNode.containerInfo),$e(t),null;case 10:return Tn(t.type),$e(t),null;case 19:if(G(Pe),l=t.memoizedState,l===null)return $e(t),null;if(s=(t.flags&128)!==0,d=l.rendering,d===null)if(s)jl(l,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=eo(e),d!==null){for(t.flags|=128,jl(l,!1),e=d.updateQueue,t.updateQueue=e,ho(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Pm(r,e),r=r.sibling;return I(Pe,Pe.current&1|2),_e&&Sn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&jt()>bo&&(t.flags|=128,s=!0,jl(l,!1),t.lanes=4194304)}else{if(!s)if(e=eo(d),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ho(t,e),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!_e)return $e(t),null}else 2*jt()-l.renderingStartTime>bo&&r!==536870912&&(t.flags|=128,s=!0,jl(l,!1),t.lanes=4194304);l.isBackwards?(d.sibling=t.child,t.child=d):(e=l.last,e!==null?e.sibling=d:t.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=jt(),e.sibling=null,r=Pe.current,I(Pe,s?r&1|2:r&1),_e&&Sn(t,l.treeForkCount),e):($e(t),null);case 22:case 23:return zt(t),ju(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(r&536870912)!==0&&(t.flags&128)===0&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),r=t.updateQueue,r!==null&&ho(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==r&&(t.flags|=2048),e!==null&&G(Nr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Tn(Ze),$e(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function U_(e,t){switch(du(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(Ze),Xe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ti(t),null;case 31:if(t.memoizedState!==null){if(zt(t),t.alternate===null)throw Error(o(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Pe),null;case 4:return Xe(),null;case 10:return Tn(t.type),null;case 22:case 23:return zt(t),ju(),e!==null&&G(Nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(Ze),null;case 25:return null;default:return null}}function bp(e,t){switch(du(t),t.tag){case 3:Tn(Ze),Xe();break;case 26:case 27:case 5:Ti(t);break;case 4:Xe();break;case 31:t.memoizedState!==null&&zt(t);break;case 13:zt(t);break;case 19:G(Pe);break;case 10:Tn(t.type);break;case 22:case 23:zt(t),ju(),e!==null&&G(Nr);break;case 24:Tn(Ze)}}function Al(e,t){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){l=void 0;var d=r.create,v=r.inst;l=d(),v.destroy=l}r=r.next}while(r!==s)}}catch(x){Ne(t,t.return,x)}}function Jn(e,t,r){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var d=s.next;l=d;do{if((l.tag&e)===e){var v=l.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,s=t;var T=r,L=x;try{L()}catch(H){Ne(s,T,H)}}}l=l.next}while(l!==d)}}catch(H){Ne(t,t.return,H)}}function xp(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{ch(t,r)}catch(l){Ne(e,e.return,l)}}}function _p(e,t,r){r.props=Dr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ne(e,t,l)}}function Nl(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(s){Ne(e,t,s)}}function dn(e,t){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(s){Ne(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(s){Ne(e,t,s)}else r.current=null}function Sp(e){var t=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(s){Ne(e,e.return,s)}}function ac(e,t,r){try{var l=e.stateNode;l1(l,e.type,r,t),l[bt]=t}catch(s){Ne(e,e.return,s)}}function Ep(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ar(e.type)||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=bn));else if(l!==4&&(l===27&&ar(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(ic(e,t,r),e=e.sibling;e!==null;)ic(e,t,r),e=e.sibling}function po(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(l===27&&ar(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(po(e,t,r),e=e.sibling;e!==null;)po(e,t,r),e=e.sibling}function Tp(e){var t=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);st(t,l,r),t[at]=e,t[bt]=r}catch(d){Ne(e,e.return,d)}}var Cn=!1,We=!1,oc=!1,wp=typeof WeakSet=="function"?WeakSet:Set,rt=null;function V_(e,t){if(e=e.containerInfo,Nc=Lo,e=Um(e),eu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var s=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var v=0,x=-1,T=-1,L=0,H=0,P=e,U=null;t:for(;;){for(var V;P!==r||s!==0&&P.nodeType!==3||(x=v+s),P!==d||l!==0&&P.nodeType!==3||(T=v+l),P.nodeType===3&&(v+=P.nodeValue.length),(V=P.firstChild)!==null;)U=P,P=V;for(;;){if(P===e)break t;if(U===r&&++L===s&&(x=v),U===d&&++H===l&&(T=v),(V=P.nextSibling)!==null)break;P=U,U=P.parentNode}P=V}r=x===-1||T===-1?null:{start:x,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cc={focusedElem:e,selectionRange:r},Lo=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)s=e[r],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=t,s=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var ne=Dr(r.type,s);e=l.getSnapshotBeforeUpdate(ne,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ne(r,r.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)zc(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function jp(e,t,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Rn(e,r),l&4&&Al(5,r);break;case 1:if(Rn(e,r),l&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(v){Ne(r,r.return,v)}else{var s=Dr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ne(r,r.return,v)}}l&64&&xp(r),l&512&&Nl(r,r.return);break;case 3:if(Rn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{ch(e,t)}catch(v){Ne(r,r.return,v)}}break;case 27:t===null&&l&4&&Tp(r);case 26:case 5:Rn(e,r),t===null&&l&4&&Sp(r),l&512&&Nl(r,r.return);break;case 12:Rn(e,r);break;case 31:Rn(e,r),l&4&&Cp(e,r);break;case 13:Rn(e,r),l&4&&Mp(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=K_.bind(null,r),m1(e,r))));break;case 22:if(l=r.memoizedState!==null||Cn,!l){t=t!==null&&t.memoizedState!==null||We,s=Cn;var d=We;Cn=l,(We=t)&&!d?zn(e,r,(r.subtreeFlags&8772)!==0):Rn(e,r),Cn=s,We=d}break;case 30:break;default:Rn(e,r)}}function Ap(e){var t=e.alternate;t!==null&&(e.alternate=null,Ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Us(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,_t=!1;function Mn(e,t,r){for(r=r.child;r!==null;)Np(e,t,r),r=r.sibling}function Np(e,t,r){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(Wa,r)}catch{}switch(r.tag){case 26:We||dn(r,t),Mn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:We||dn(r,t);var l=Ue,s=_t;ar(r.type)&&(Ue=r.stateNode,_t=!1),Mn(e,t,r),Ul(r.stateNode),Ue=l,_t=s;break;case 5:We||dn(r,t);case 6:if(l=Ue,s=_t,Ue=null,Mn(e,t,r),Ue=l,_t=s,Ue!==null)if(_t)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(r.stateNode)}catch(d){Ne(r,t,d)}else try{Ue.removeChild(r.stateNode)}catch(d){Ne(r,t,d)}break;case 18:Ue!==null&&(_t?(e=Ue,xv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),za(e)):xv(Ue,r.stateNode));break;case 4:l=Ue,s=_t,Ue=r.stateNode.containerInfo,_t=!0,Mn(e,t,r),Ue=l,_t=s;break;case 0:case 11:case 14:case 15:Jn(2,r,t),We||Jn(4,r,t),Mn(e,t,r);break;case 1:We||(dn(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"&&_p(r,t,l)),Mn(e,t,r);break;case 21:Mn(e,t,r);break;case 22:We=(l=We)||r.memoizedState!==null,Mn(e,t,r),We=l;break;default:Mn(e,t,r)}}function Cp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{za(e)}catch(r){Ne(t,t.return,r)}}}function Mp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{za(e)}catch(r){Ne(t,t.return,r)}}function B_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new wp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new wp),t;default:throw Error(o(435,e.tag))}}function vo(e,t){var r=B_(e);t.forEach(function(l){if(!r.has(l)){r.add(l);var s=Q_.bind(null,e,l);l.then(s,s)}})}function St(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var s=r[l],d=e,v=t,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(ar(x.type)){Ue=x.stateNode,_t=!1;break e}break;case 5:Ue=x.stateNode,_t=!1;break e;case 3:case 4:Ue=x.stateNode.containerInfo,_t=!0;break e}x=x.return}if(Ue===null)throw Error(o(160));Np(d,v,s),Ue=null,_t=!1,d=s.alternate,d!==null&&(d.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rp(t,e),t=t.sibling}var nn=null;function Rp(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Et(e),l&4&&(Jn(3,e,e.return),Al(3,e),Jn(5,e,e.return));break;case 1:St(t,e),Et(e),l&512&&(We||r===null||dn(r,r.return)),l&64&&Cn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var s=nn;if(St(t,e),Et(e),l&512&&(We||r===null||dn(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":d=s.getElementsByTagName("title")[0],(!d||d[tl]||d[at]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=s.createElement(l),s.head.insertBefore(d,s.querySelector("head > title"))),st(d,l,r),d[at]=e,nt(d),l=d;break e;case"link":var v=Rv("link","href",s).get(l+(r.href||""));if(v){for(var x=0;x<v.length;x++)if(d=v[x],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){v.splice(x,1);break t}}d=s.createElement(l),st(d,l,r),s.head.appendChild(d);break;case"meta":if(v=Rv("meta","content",s).get(l+(r.content||""))){for(x=0;x<v.length;x++)if(d=v[x],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){v.splice(x,1);break t}}d=s.createElement(l),st(d,l,r),s.head.appendChild(d);break;default:throw Error(o(468,l))}d[at]=e,nt(d),l=d}e.stateNode=l}else zv(s,e.type,e.stateNode);else e.stateNode=Mv(s,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?zv(s,e.type,e.stateNode):Mv(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ac(e,e.memoizedProps,r.memoizedProps)}break;case 27:St(t,e),Et(e),l&512&&(We||r===null||dn(r,r.return)),r!==null&&l&4&&ac(e,e.memoizedProps,r.memoizedProps);break;case 5:if(St(t,e),Et(e),l&512&&(We||r===null||dn(r,r.return)),e.flags&32){s=e.stateNode;try{ta(s,"")}catch(ne){Ne(e,e.return,ne)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,ac(e,s,r!==null?r.memoizedProps:s)),l&1024&&(oc=!0);break;case 6:if(St(t,e),Et(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(ne){Ne(e,e.return,ne)}}break;case 3:if(zo=null,s=nn,nn=Mo(t.containerInfo),St(t,e),nn=s,Et(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(ne){Ne(e,e.return,ne)}oc&&(oc=!1,zp(e));break;case 4:l=nn,nn=Mo(e.stateNode.containerInfo),St(t,e),Et(e),nn=l;break;case 12:St(t,e),Et(e);break;case 31:St(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 13:St(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(yo=jt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 22:s=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,L=Cn,H=We;if(Cn=L||s,We=H||T,St(t,e),We=H,Cn=L,Et(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(r===null||T||Cn||We||Or(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){T=r=t;try{if(d=T.stateNode,s)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=T.stateNode;var P=T.memoizedProps.style,U=P!=null&&P.hasOwnProperty("display")?P.display:null;x.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ne){Ne(T,T.return,ne)}}}else if(t.tag===6){if(r===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(ne){Ne(T,T.return,ne)}}}else if(t.tag===18){if(r===null){T=t;try{var V=T.stateNode;s?_v(V,!0):_v(T.stateNode,!1)}catch(ne){Ne(T,T.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,vo(e,r))));break;case 19:St(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vo(e,l)));break;case 30:break;case 21:break;default:St(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var r,l=e.return;l!==null;){if(Ep(l)){r=l;break}l=l.return}if(r==null)throw Error(o(160));switch(r.tag){case 27:var s=r.stateNode,d=lc(e);po(e,d,s);break;case 5:var v=r.stateNode;r.flags&32&&(ta(v,""),r.flags&=-33);var x=lc(e);po(e,x,v);break;case 3:case 4:var T=r.stateNode.containerInfo,L=lc(e);ic(e,L,T);break;default:throw Error(o(161))}}catch(H){Ne(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jp(e,t.alternate,t),t=t.sibling}function Or(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Jn(4,t,t.return),Or(t);break;case 1:dn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&_p(t,t.return,r),Or(t);break;case 27:Ul(t.stateNode);case 26:case 5:dn(t,t.return),Or(t);break;case 22:t.memoizedState===null&&Or(t);break;case 30:Or(t);break;default:Or(t)}e=e.sibling}}function zn(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,d=t,v=d.flags;switch(d.tag){case 0:case 11:case 15:zn(s,d,r),Al(4,d);break;case 1:if(zn(s,d,r),l=d,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){Ne(l,l.return,L)}if(l=d,s=l.updateQueue,s!==null){var x=l.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)uh(T[s],x)}catch(L){Ne(l,l.return,L)}}r&&v&64&&xp(d),Nl(d,d.return);break;case 27:Tp(d);case 26:case 5:zn(s,d,r),r&&l===null&&v&4&&Sp(d),Nl(d,d.return);break;case 12:zn(s,d,r);break;case 31:zn(s,d,r),r&&v&4&&Cp(s,d);break;case 13:zn(s,d,r),r&&v&4&&Mp(s,d);break;case 22:d.memoizedState===null&&zn(s,d,r),Nl(d,d.return);break;case 30:break;default:zn(s,d,r)}t=t.sibling}}function sc(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&hl(r))}function uc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e))}function rn(e,t,r,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dp(e,t,r,l),t=t.sibling}function Dp(e,t,r,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:rn(e,t,r,l),s&2048&&Al(9,t);break;case 1:rn(e,t,r,l);break;case 3:rn(e,t,r,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hl(e)));break;case 12:if(s&2048){rn(e,t,r,l),e=t.stateNode;try{var d=t.memoizedProps,v=d.id,x=d.onPostCommit;typeof x=="function"&&x(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ne(t,t.return,T)}}else rn(e,t,r,l);break;case 31:rn(e,t,r,l);break;case 13:rn(e,t,r,l);break;case 23:break;case 22:d=t.stateNode,v=t.alternate,t.memoizedState!==null?d._visibility&2?rn(e,t,r,l):Cl(e,t):d._visibility&2?rn(e,t,r,l):(d._visibility|=2,_a(e,t,r,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&sc(v,t);break;case 24:rn(e,t,r,l),s&2048&&uc(t.alternate,t);break;default:rn(e,t,r,l)}}function _a(e,t,r,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,v=t,x=r,T=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:_a(d,v,x,T,s),Al(8,v);break;case 23:break;case 22:var H=v.stateNode;v.memoizedState!==null?H._visibility&2?_a(d,v,x,T,s):Cl(d,v):(H._visibility|=2,_a(d,v,x,T,s)),s&&L&2048&&sc(v.alternate,v);break;case 24:_a(d,v,x,T,s),s&&L&2048&&uc(v.alternate,v);break;default:_a(d,v,x,T,s)}t=t.sibling}}function Cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,l=t,s=l.flags;switch(l.tag){case 22:Cl(r,l),s&2048&&sc(l.alternate,l);break;case 24:Cl(r,l),s&2048&&uc(l.alternate,l);break;default:Cl(r,l)}t=t.sibling}}var Ml=8192;function Sa(e,t,r){if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Op(e,t,r),e=e.sibling}function Op(e,t,r){switch(e.tag){case 26:Sa(e,t,r),e.flags&Ml&&e.memoizedState!==null&&w1(r,nn,e.memoizedState,e.memoizedProps);break;case 5:Sa(e,t,r);break;case 3:case 4:var l=nn;nn=Mo(e.stateNode.containerInfo),Sa(e,t,r),nn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ml,Ml=16777216,Sa(e,t,r),Ml=l):Sa(e,t,r));break;default:Sa(e,t,r)}}function $p(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Rl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];rt=l,Up(l,e)}$p(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lp(e),e=e.sibling}function Lp(e){switch(e.tag){case 0:case 11:case 15:Rl(e),e.flags&2048&&Jn(9,e,e.return);break;case 3:Rl(e);break;case 12:Rl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,go(e)):Rl(e);break;default:Rl(e)}}function go(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];rt=l,Up(l,e)}$p(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Jn(8,t,t.return),go(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,go(t));break;default:go(t)}e=e.sibling}}function Up(e,t){for(;rt!==null;){var r=rt;switch(r.tag){case 0:case 11:case 15:Jn(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:hl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,rt=l;else e:for(r=e;rt!==null;){l=rt;var s=l.sibling,d=l.return;if(Ap(l),l===r){rt=null;break e}if(s!==null){s.return=d,rt=s;break e}rt=d}}}var H_={getCacheForType:function(e){var t=it(Ze),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r},cacheSignal:function(){return it(Ze).controller.signal}},k_=typeof WeakMap=="function"?WeakMap:Map,we=0,ze=null,ge=null,be=0,Ae=0,Dt=null,Wn=!1,Ea=!1,cc=!1,Dn=0,Ye=0,In=0,$r=0,dc=0,Ot=0,Ta=0,zl=null,Tt=null,fc=!1,yo=0,Vp=0,bo=1/0,xo=null,er=null,et=0,tr=null,wa=null,On=0,mc=0,hc=null,Bp=null,Dl=0,pc=null;function $t(){return(we&2)!==0&&be!==0?be&-be:z.T!==null?_c():tm()}function Hp(){if(Ot===0)if((be&536870912)===0||_e){var e=Ai;Ai<<=1,(Ai&3932160)===0&&(Ai=262144),Ot=e}else Ot=536870912;return e=Rt.current,e!==null&&(e.flags|=32),Ot}function wt(e,t,r){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(ja(e,0),nr(e,be,Ot,!1)),el(e,r),((we&2)===0||e!==ze)&&(e===ze&&((we&2)===0&&($r|=r),Ye===4&&nr(e,be,Ot,!1)),fn(e))}function kp(e,t,r){if((we&6)!==0)throw Error(o(327));var l=!r&&(t&127)===0&&(t&e.expiredLanes)===0||Ia(e,t),s=l?G_(e,t):gc(e,t,!0),d=l;do{if(s===0){Ea&&!l&&nr(e,t,0,!1);break}else{if(r=e.current.alternate,d&&!Y_(r)){s=gc(e,t,!1),d=!1;continue}if(s===2){if(d=t,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var x=e;s=zl;var T=x.current.memoizedState.isDehydrated;if(T&&(ja(x,v).flags|=256),v=gc(x,v,!1),v!==2){if(cc&&!T){x.errorRecoveryDisabledLanes|=d,$r|=d,s=4;break e}d=Tt,Tt=s,d!==null&&(Tt===null?Tt=d:Tt.push.apply(Tt,d))}s=v}if(d=!1,s!==2)continue}}if(s===1){ja(e,0),nr(e,t,0,!0);break}e:{switch(l=e,d=s,d){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:nr(l,t,Ot,!Wn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=yo+300-jt(),10<s)){if(nr(l,t,Ot,!Wn),Ci(l,0,!0)!==0)break e;On=t,l.timeoutHandle=yv(Yp.bind(null,l,r,Tt,xo,fc,t,Ot,$r,Ta,Wn,d,"Throttled",-0,0),s);break e}Yp(l,r,Tt,xo,fc,t,Ot,$r,Ta,Wn,d,null,-0,0)}}break}while(!0);fn(e)}function Yp(e,t,r,l,s,d,v,x,T,L,H,P,U,V){if(e.timeoutHandle=-1,P=t.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Op(t,d,P);var ne=(d&62914560)===d?yo-jt():(d&4194048)===d?Vp-jt():0;if(ne=j1(P,ne),ne!==null){On=d,e.cancelPendingCommit=ne(Fp.bind(null,e,t,d,r,l,s,v,x,T,H,P,null,U,V)),nr(e,d,v,!L);return}}Fp(e,t,d,r,l,s,v,x,T)}function Y_(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var s=r[l],d=s.getSnapshot;s=s.value;try{if(!Ct(d(),s))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t,r,l){t&=~dc,t&=~$r,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var d=31-Nt(s),v=1<<d;l[d]=-1,s&=~v}r!==0&&Wf(e,r,t)}function _o(){return(we&6)===0?(Ol(0),!1):!0}function vc(){if(ge!==null){if(Ae===0)var e=ge.return;else e=ge,En=jr=null,zu(e),va=null,vl=0,e=ge;for(;e!==null;)bp(e.alternate,e),e=e.return;ge=null}}function ja(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,s1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),On=0,vc(),ze=e,ge=r=_n(e.current,null),be=t,Ae=0,Dt=null,Wn=!1,Ea=Ia(e,t),cc=!1,Ta=Ot=dc=$r=In=Ye=0,Tt=zl=null,fc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-Nt(l),d=1<<s;t|=e[s],l&=~d}return Dn=t,ki(),r}function qp(e,t){me=null,z.H=Tl,t===pa||t===Zi?(t=lh(),Ae=3):t===xu?(t=lh(),Ae=4):Ae=t===Qu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ge===null&&(Ye=1,uo(e,Ht(t,e.current)))}function Gp(){var e=Rt.current;return e===null?!0:(be&4194048)===be?Gt===null:(be&62914560)===be||(be&536870912)!==0?e===Gt:!1}function Xp(){var e=z.H;return z.H=Tl,e===null?Tl:e}function Pp(){var e=z.A;return z.A=H_,e}function So(){Ye=4,Wn||(be&4194048)!==be&&Rt.current!==null||(Ea=!0),(In&134217727)===0&&($r&134217727)===0||ze===null||nr(ze,be,Ot,!1)}function gc(e,t,r){var l=we;we|=2;var s=Xp(),d=Pp();(ze!==e||be!==t)&&(xo=null,ja(e,t)),t=!1;var v=Ye;e:do try{if(Ae!==0&&ge!==null){var x=ge,T=Dt;switch(Ae){case 8:vc(),v=6;break e;case 3:case 2:case 9:case 6:Rt.current===null&&(t=!0);var L=Ae;if(Ae=0,Dt=null,Aa(e,x,T,L),r&&Ea){v=0;break e}break;default:L=Ae,Ae=0,Dt=null,Aa(e,x,T,L)}}q_(),v=Ye;break}catch(H){qp(e,H)}while(!0);return t&&e.shellSuspendCounter++,En=jr=null,we=l,z.H=s,z.A=d,ge===null&&(ze=null,be=0,ki()),v}function q_(){for(;ge!==null;)Kp(ge)}function G_(e,t){var r=we;we|=2;var l=Xp(),s=Pp();ze!==e||be!==t?(xo=null,bo=jt()+500,ja(e,t)):Ea=Ia(e,t);e:do try{if(Ae!==0&&ge!==null){t=ge;var d=Dt;t:switch(Ae){case 1:Ae=0,Dt=null,Aa(e,t,d,1);break;case 2:case 9:if(rh(d)){Ae=0,Dt=null,Qp(t);break}t=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),fn(e)},d.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:rh(d)?(Ae=0,Dt=null,Qp(t)):(Ae=0,Dt=null,Aa(e,t,d,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var x=ge;if(v?Dv(v):x.stateNode.complete){Ae=0,Dt=null;var T=x.sibling;if(T!==null)ge=T;else{var L=x.return;L!==null?(ge=L,Eo(L)):ge=null}break t}}Ae=0,Dt=null,Aa(e,t,d,5);break;case 6:Ae=0,Dt=null,Aa(e,t,d,6);break;case 8:vc(),Ye=6;break e;default:throw Error(o(462))}}X_();break}catch(H){qp(e,H)}while(!0);return En=jr=null,z.H=l,z.A=s,we=r,ge!==null?0:(ze=null,be=0,ki(),Ye)}function X_(){for(;ge!==null&&!h0();)Kp(ge)}function Kp(e){var t=gp(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?Eo(e):ge=t}function Qp(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=dp(r,t,t.pendingProps,t.type,void 0,be);break;case 11:t=dp(r,t,t.pendingProps,t.type.render,t.ref,be);break;case 5:zu(t);default:bp(r,t),t=ge=Pm(t,Dn),t=gp(r,t,Dn)}e.memoizedProps=e.pendingProps,t===null?Eo(e):ge=t}function Aa(e,t,r,l){En=jr=null,zu(t),va=null,vl=0;var s=t.return;try{if(D_(e,s,t,r,be)){Ye=1,uo(e,Ht(r,e.current)),ge=null;return}}catch(d){if(s!==null)throw ge=s,d;Ye=1,uo(e,Ht(r,e.current)),ge=null;return}t.flags&32768?(_e||l===1?e=!0:Ea||(be&536870912)!==0?e=!1:(Wn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Rt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zp(t,e)):Eo(t)}function Eo(e){var t=e;do{if((t.flags&32768)!==0){Zp(t,Wn);return}e=t.return;var r=L_(t.alternate,t,Dn);if(r!==null){ge=r;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function Zp(e,t){do{var r=U_(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);Ye=6,ge=null}function Fp(e,t,r,l,s,d,v,x,T){e.cancelPendingCommit=null;do To();while(et!==0);if((we&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(d=t.lanes|t.childLanes,d|=lu,T0(e,r,d,v,x,T),e===ze&&(ge=ze=null,be=0),wa=t,tr=e,On=r,mc=d,hc=s,Bp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Z_(wi,function(){return tv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,s=X.p,X.p=2,v=we,we|=4;try{V_(e,t,r)}finally{we=v,X.p=s,z.T=l}}et=1,Jp(),Wp(),Ip()}}function Jp(){if(et===1){et=0;var e=tr,t=wa,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var l=X.p;X.p=2;var s=we;we|=4;try{Rp(t,e);var d=Cc,v=Um(e.containerInfo),x=d.focusedElem,T=d.selectionRange;if(v!==x&&x&&x.ownerDocument&&Lm(x.ownerDocument.documentElement,x)){if(T!==null&&eu(x)){var L=T.start,H=T.end;if(H===void 0&&(H=L),"selectionStart"in x)x.selectionStart=L,x.selectionEnd=Math.min(H,x.value.length);else{var P=x.ownerDocument||document,U=P&&P.defaultView||window;if(U.getSelection){var V=U.getSelection(),ne=x.textContent.length,se=Math.min(T.start,ne),Re=T.end===void 0?se:Math.min(T.end,ne);!V.extend&&se>Re&&(v=Re,Re=se,se=v);var O=$m(x,se),M=$m(x,Re);if(O&&M&&(V.rangeCount!==1||V.anchorNode!==O.node||V.anchorOffset!==O.offset||V.focusNode!==M.node||V.focusOffset!==M.offset)){var $=P.createRange();$.setStart(O.node,O.offset),V.removeAllRanges(),se>Re?(V.addRange($),V.extend(M.node,M.offset)):($.setEnd(M.node,M.offset),V.addRange($))}}}}for(P=[],V=x;V=V.parentNode;)V.nodeType===1&&P.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<P.length;x++){var Y=P[x];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Lo=!!Nc,Cc=Nc=null}finally{we=s,X.p=l,z.T=r}}e.current=t,et=2}}function Wp(){if(et===2){et=0;var e=tr,t=wa,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var l=X.p;X.p=2;var s=we;we|=4;try{jp(e,t.alternate,t)}finally{we=s,X.p=l,z.T=r}}et=3}}function Ip(){if(et===4||et===3){et=0,p0();var e=tr,t=wa,r=On,l=Bp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?et=5:(et=0,wa=tr=null,ev(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(er=null),$s(r),t=t.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=z.T,s=X.p,X.p=2,z.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var x=l[v];d(x.value,{componentStack:x.stack})}}finally{z.T=t,X.p=s}}(On&3)!==0&&To(),fn(e),s=e.pendingLanes,(r&261930)!==0&&(s&42)!==0?e===pc?Dl++:(Dl=0,pc=e):Dl=0,Ol(0)}}function ev(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hl(t)))}function To(){return Jp(),Wp(),Ip(),tv()}function tv(){if(et!==5)return!1;var e=tr,t=mc;mc=0;var r=$s(On),l=z.T,s=X.p;try{X.p=32>r?32:r,z.T=null,r=hc,hc=null;var d=tr,v=On;if(et=0,wa=tr=null,On=0,(we&6)!==0)throw Error(o(331));var x=we;if(we|=4,Lp(d.current),Dp(d,d.current,v,r),we=x,Ol(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(Wa,d)}catch{}return!0}finally{X.p=s,z.T=l,ev(e,t)}}function nv(e,t,r){t=Ht(r,t),t=Ku(e.stateNode,t,2),e=Qn(e,t,2),e!==null&&(el(e,2),fn(e))}function Ne(e,t,r){if(e.tag===3)nv(e,e,r);else for(;t!==null;){if(t.tag===3){nv(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(er===null||!er.has(l))){e=Ht(r,e),r=rp(2),l=Qn(t,r,2),l!==null&&(ap(r,l,t,e),el(l,2),fn(l));break}}t=t.return}}function yc(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new k_;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(r)||(cc=!0,s.add(r),e=P_.bind(null,e,t,r),t.then(e,e))}function P_(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ze===e&&(be&r)===r&&(Ye===4||Ye===3&&(be&62914560)===be&&300>jt()-yo?(we&2)===0&&ja(e,0):dc|=r,Ta===be&&(Ta=0)),fn(e)}function rv(e,t){t===0&&(t=Jf()),e=Er(e,t),e!==null&&(el(e,t),fn(e))}function K_(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),rv(e,r)}function Q_(e,t){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),rv(e,r)}function Z_(e,t){return Rs(e,t)}var wo=null,Na=null,bc=!1,jo=!1,xc=!1,rr=0;function fn(e){e!==Na&&e.next===null&&(Na===null?wo=Na=e:Na=Na.next=e),jo=!0,bc||(bc=!0,J_())}function Ol(e,t){if(!xc&&jo){xc=!0;do for(var r=!1,l=wo;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var d=0;else{var v=l.suspendedLanes,x=l.pingedLanes;d=(1<<31-Nt(42|e)+1)-1,d&=s&~(v&~x),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,ov(l,d))}else d=be,d=Ci(l,l===ze?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ia(l,d)||(r=!0,ov(l,d));l=l.next}while(r);xc=!1}}function F_(){av()}function av(){jo=bc=!1;var e=0;rr!==0&&o1()&&(e=rr);for(var t=jt(),r=null,l=wo;l!==null;){var s=l.next,d=lv(l,t);d===0?(l.next=null,r===null?wo=s:r.next=s,s===null&&(Na=r)):(r=l,(e!==0||(d&3)!==0)&&(jo=!0)),l=s}et!==0&&et!==5||Ol(e),rr!==0&&(rr=0)}function lv(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Nt(d),x=1<<v,T=s[v];T===-1?((x&r)===0||(x&l)!==0)&&(s[v]=E0(x,t)):T<=t&&(e.expiredLanes|=x),d&=~x}if(t=ze,r=be,r=Ci(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zs(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ia(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(l!==null&&zs(l),$s(r)){case 2:case 8:r=Zf;break;case 32:r=wi;break;case 268435456:r=Ff;break;default:r=wi}return l=iv.bind(null,e),r=Rs(r,l),e.callbackPriority=t,e.callbackNode=r,t}return l!==null&&l!==null&&zs(l),e.callbackPriority=2,e.callbackNode=null,2}function iv(e,t){if(et!==0&&et!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(To()&&e.callbackNode!==r)return null;var l=be;return l=Ci(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(kp(e,l,t),lv(e,jt()),e.callbackNode!=null&&e.callbackNode===r?iv.bind(null,e):null)}function ov(e,t){if(To())return null;kp(e,t,!0)}function J_(){u1(function(){(we&6)!==0?Rs(Qf,F_):av()})}function _c(){if(rr===0){var e=ma;e===0&&(e=ji,ji<<=1,(ji&261888)===0&&(ji=256)),rr=e}return rr}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(""+e)}function uv(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function W_(e,t,r,l,s){if(t==="submit"&&r&&r.stateNode===s){var d=sv((s[bt]||null).action),v=l.submitter;v&&(t=(t=v[bt]||null)?sv(t.formAction):v.getAttribute("formAction"),t!==null&&(d=t,v=null));var x=new Ui("action","action",null,l,s);e.push({event:x,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rr!==0){var T=v?uv(s,v):new FormData(s);ku(r,{pending:!0,data:T,method:s.method,action:d},null,T)}}else typeof d=="function"&&(x.preventDefault(),T=v?uv(s,v):new FormData(s),ku(r,{pending:!0,data:T,method:s.method,action:d},d,T))},currentTarget:s}]})}}for(var Sc=0;Sc<au.length;Sc++){var Ec=au[Sc],I_=Ec.toLowerCase(),e1=Ec[0].toUpperCase()+Ec.slice(1);tn(I_,"on"+e1)}tn(Hm,"onAnimationEnd"),tn(km,"onAnimationIteration"),tn(Ym,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(v_,"onTransitionRun"),tn(g_,"onTransitionStart"),tn(y_,"onTransitionCancel"),tn(qm,"onTransitionEnd"),Ir("onMouseEnter",["mouseout","mouseover"]),Ir("onMouseLeave",["mouseout","mouseover"]),Ir("onPointerEnter",["pointerout","pointerover"]),Ir("onPointerLeave",["pointerout","pointerover"]),br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),br("onBeforeInput",["compositionend","keypress","textInput","paste"]),br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function cv(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],s=l.event;l=l.listeners;e:{var d=void 0;if(t)for(var v=l.length-1;0<=v;v--){var x=l[v],T=x.instance,L=x.currentTarget;if(x=x.listener,T!==d&&s.isPropagationStopped())break e;d=x,s.currentTarget=L;try{d(s)}catch(H){Hi(H)}s.currentTarget=null,d=T}else for(v=0;v<l.length;v++){if(x=l[v],T=x.instance,L=x.currentTarget,x=x.listener,T!==d&&s.isPropagationStopped())break e;d=x,s.currentTarget=L;try{d(s)}catch(H){Hi(H)}s.currentTarget=null,d=T}}}}function ye(e,t){var r=t[Ls];r===void 0&&(r=t[Ls]=new Set);var l=e+"__bubble";r.has(l)||(dv(t,e,2,!1),r.add(l))}function Tc(e,t,r){var l=0;t&&(l|=4),dv(r,e,l,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Ao]){e[Ao]=!0,am.forEach(function(r){r!=="selectionchange"&&(t1.has(r)||Tc(r,!1,e),Tc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Tc("selectionchange",!1,t))}}function dv(e,t,r,l){switch(Hv(t)){case 2:var s=C1;break;case 8:s=M1;break;default:s=Hc}r=s.bind(null,t,r,e),s=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function jc(e,t,r,l,s){var d=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var x=l.stateNode.containerInfo;if(x===s)break;if(v===4)for(v=l.return;v!==null;){var T=v.tag;if((T===3||T===4)&&v.stateNode.containerInfo===s)return;v=v.return}for(;x!==null;){if(v=Fr(x),v===null)return;if(T=v.tag,T===5||T===6||T===26||T===27){l=d=v;continue e}x=x.parentNode}}l=l.return}vm(function(){var L=d,H=qs(r),P=[];e:{var U=Gm.get(e);if(U!==void 0){var V=Ui,ne=e;switch(e){case"keypress":if($i(r)===0)break e;case"keydown":case"keyup":V=Q0;break;case"focusin":ne="focus",V=Zs;break;case"focusout":ne="blur",V=Zs;break;case"beforeblur":case"afterblur":V=Zs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=J0;break;case Hm:case km:case Ym:V=B0;break;case qm:V=I0;break;case"scroll":case"scrollend":V=O0;break;case"wheel":V=t_;break;case"copy":case"cut":case"paste":V=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=_m;break;case"toggle":case"beforetoggle":V=r_}var se=(t&4)!==0,Re=!se&&(e==="scroll"||e==="scrollend"),O=se?U!==null?U+"Capture":null:U;se=[];for(var M=L,$;M!==null;){var Y=M;if($=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||$===null||O===null||(Y=rl(M,O),Y!=null&&se.push(Ll(M,Y,$))),Re)break;M=M.return}0<se.length&&(U=new V(U,ne,null,r,H),P.push({event:U,listeners:se}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",U&&r!==Ys&&(ne=r.relatedTarget||r.fromElement)&&(Fr(ne)||ne[Zr]))break e;if((V||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,V?(ne=r.relatedTarget||r.toElement,V=L,ne=ne?Fr(ne):null,ne!==null&&(Re=c(ne),se=ne.tag,ne!==Re||se!==5&&se!==27&&se!==6)&&(ne=null)):(V=null,ne=L),V!==ne)){if(se=bm,Y="onMouseLeave",O="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(se=_m,Y="onPointerLeave",O="onPointerEnter",M="pointer"),Re=V==null?U:nl(V),$=ne==null?U:nl(ne),U=new se(Y,M+"leave",V,r,H),U.target=Re,U.relatedTarget=$,Y=null,Fr(H)===L&&(se=new se(O,M+"enter",ne,r,H),se.target=$,se.relatedTarget=Re,Y=se),Re=Y,V&&ne)t:{for(se=n1,O=V,M=ne,$=0,Y=O;Y;Y=se(Y))$++;Y=0;for(var ie=M;ie;ie=se(ie))Y++;for(;0<$-Y;)O=se(O),$--;for(;0<Y-$;)M=se(M),Y--;for(;$--;){if(O===M||M!==null&&O===M.alternate){se=O;break t}O=se(O),M=se(M)}se=null}else se=null;V!==null&&fv(P,U,V,se,!1),ne!==null&&Re!==null&&fv(P,Re,ne,se,!0)}}e:{if(U=L?nl(L):window,V=U.nodeName&&U.nodeName.toLowerCase(),V==="select"||V==="input"&&U.type==="file")var Ee=Cm;else if(Am(U))if(Mm)Ee=m_;else{Ee=d_;var ae=c_}else V=U.nodeName,!V||V.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?L&&ks(L.elementType)&&(Ee=Cm):Ee=f_;if(Ee&&(Ee=Ee(e,L))){Nm(P,Ee,r,H);break e}ae&&ae(e,U,L),e==="focusout"&&L&&U.type==="number"&&L.memoizedProps.value!=null&&Hs(U,"number",U.value)}switch(ae=L?nl(L):window,e){case"focusin":(Am(ae)||ae.contentEditable==="true")&&(la=ae,tu=L,dl=null);break;case"focusout":dl=tu=la=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Vm(P,r,H);break;case"selectionchange":if(p_)break;case"keydown":case"keyup":Vm(P,r,H)}var he;if(Js)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else aa?wm(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(Sm&&r.locale!=="ko"&&(aa||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&aa&&(he=gm()):(kn=H,Ps="value"in kn?kn.value:kn.textContent,aa=!0)),ae=No(L,xe),0<ae.length&&(xe=new xm(xe,e,null,r,H),P.push({event:xe,listeners:ae}),he?xe.data=he:(he=jm(r),he!==null&&(xe.data=he)))),(he=l_?i_(e,r):o_(e,r))&&(xe=No(L,"onBeforeInput"),0<xe.length&&(ae=new xm("onBeforeInput","beforeinput",null,r,H),P.push({event:ae,listeners:xe}),ae.data=he)),W_(P,e,L,r,H)}cv(P,t)})}function Ll(e,t,r){return{instance:e,listener:t,currentTarget:r}}function No(e,t){for(var r=t+"Capture",l=[];e!==null;){var s=e,d=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||d===null||(s=rl(e,r),s!=null&&l.unshift(Ll(e,s,d)),s=rl(e,t),s!=null&&l.push(Ll(e,s,d))),e.tag===3)return l;e=e.return}return[]}function n1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fv(e,t,r,l,s){for(var d=t._reactName,v=[];r!==null&&r!==l;){var x=r,T=x.alternate,L=x.stateNode;if(x=x.tag,T!==null&&T===l)break;x!==5&&x!==26&&x!==27||L===null||(T=L,s?(L=rl(r,d),L!=null&&v.unshift(Ll(r,L,T))):s||(L=rl(r,d),L!=null&&v.push(Ll(r,L,T)))),r=r.return}v.length!==0&&e.push({event:t,listeners:v})}var r1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function mv(e){return(typeof e=="string"?e:""+e).replace(r1,` 
`).replace(a1,"")}function hv(e,t){return t=mv(t),mv(e)===t}function Me(e,t,r,l,s,d){switch(r){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ta(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ta(e,""+l);break;case"className":Ri(e,"class",l);break;case"tabIndex":Ri(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,r,l);break;case"style":hm(e,l,d);break;case"data":if(t!=="object"){Ri(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Di(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Di(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=bn);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Di(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Mi(e,"popover",l);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=z0.get(r)||r,Mi(e,r,l))}}function Ac(e,t,r,l,s,d){switch(r){case"style":hm(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(r=l.__html,r!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=r}}break;case"children":typeof l=="string"?ta(e,l):(typeof l=="number"||typeof l=="bigint")&&ta(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lm.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(s=r.endsWith("Capture"),t=r.slice(2,s?r.length-7:void 0),d=e[bt]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(t,d,s),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,l,s);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Mi(e,r,l)}}}function st(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,s=!1,d;for(d in r)if(r.hasOwnProperty(d)){var v=r[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,d,v,r,null)}}s&&Me(e,t,"srcSet",r.srcSet,r,null),l&&Me(e,t,"src",r.src,r,null);return;case"input":ye("invalid",e);var x=d=v=s=null,T=null,L=null;for(l in r)if(r.hasOwnProperty(l)){var H=r[l];if(H!=null)switch(l){case"name":s=H;break;case"type":v=H;break;case"checked":T=H;break;case"defaultChecked":L=H;break;case"value":d=H;break;case"defaultValue":x=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:Me(e,t,l,H,r,null)}}cm(e,d,x,T,L,v,s,!1);return;case"select":ye("invalid",e),l=v=d=null;for(s in r)if(r.hasOwnProperty(s)&&(x=r[s],x!=null))switch(s){case"value":d=x;break;case"defaultValue":v=x;break;case"multiple":l=x;default:Me(e,t,s,x,r,null)}t=d,r=v,e.multiple=!!l,t!=null?ea(e,!!l,t,!1):r!=null&&ea(e,!!l,r,!0);return;case"textarea":ye("invalid",e),d=s=l=null;for(v in r)if(r.hasOwnProperty(v)&&(x=r[v],x!=null))switch(v){case"value":l=x;break;case"defaultValue":s=x;break;case"children":d=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(91));break;default:Me(e,t,v,x,r,null)}fm(e,l,s,d);return;case"option":for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null)&&(T==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Me(e,t,T,l,r,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<$l.length;l++)ye($l[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in r)if(r.hasOwnProperty(L)&&(l=r[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Me(e,t,L,l,r,null)}return;default:if(ks(t)){for(H in r)r.hasOwnProperty(H)&&(l=r[H],l!==void 0&&Ac(e,t,H,l,r,void 0));return}}for(x in r)r.hasOwnProperty(x)&&(l=r[x],l!=null&&Me(e,t,x,l,r,null))}function l1(e,t,r,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,d=null,v=null,x=null,T=null,L=null,H=null;for(V in r){var P=r[V];if(r.hasOwnProperty(V)&&P!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":T=P;default:l.hasOwnProperty(V)||Me(e,t,V,null,l,P)}}for(var U in l){var V=l[U];if(P=r[U],l.hasOwnProperty(U)&&(V!=null||P!=null))switch(U){case"type":d=V;break;case"name":s=V;break;case"checked":L=V;break;case"defaultChecked":H=V;break;case"value":v=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,t));break;default:V!==P&&Me(e,t,U,V,l,P)}}Bs(e,v,x,T,L,H,d,s);return;case"select":V=v=x=U=null;for(d in r)if(T=r[d],r.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":V=T;default:l.hasOwnProperty(d)||Me(e,t,d,null,l,T)}for(s in l)if(d=l[s],T=r[s],l.hasOwnProperty(s)&&(d!=null||T!=null))switch(s){case"value":U=d;break;case"defaultValue":x=d;break;case"multiple":v=d;default:d!==T&&Me(e,t,s,d,l,T)}t=x,r=v,l=V,U!=null?ea(e,!!r,U,!1):!!l!=!!r&&(t!=null?ea(e,!!r,t,!0):ea(e,!!r,r?[]:"",!1));return;case"textarea":V=U=null;for(x in r)if(s=r[x],r.hasOwnProperty(x)&&s!=null&&!l.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Me(e,t,x,null,l,s)}for(v in l)if(s=l[v],d=r[v],l.hasOwnProperty(v)&&(s!=null||d!=null))switch(v){case"value":U=s;break;case"defaultValue":V=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==d&&Me(e,t,v,s,l,d)}dm(e,U,V);return;case"option":for(var ne in r)U=r[ne],r.hasOwnProperty(ne)&&U!=null&&!l.hasOwnProperty(ne)&&(ne==="selected"?e.selected=!1:Me(e,t,ne,null,l,U));for(T in l)U=l[T],V=r[T],l.hasOwnProperty(T)&&U!==V&&(U!=null||V!=null)&&(T==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":Me(e,t,T,U,l,V));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in r)U=r[se],r.hasOwnProperty(se)&&U!=null&&!l.hasOwnProperty(se)&&Me(e,t,se,null,l,U);for(L in l)if(U=l[L],V=r[L],l.hasOwnProperty(L)&&U!==V&&(U!=null||V!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:Me(e,t,L,U,l,V)}return;default:if(ks(t)){for(var Re in r)U=r[Re],r.hasOwnProperty(Re)&&U!==void 0&&!l.hasOwnProperty(Re)&&Ac(e,t,Re,void 0,l,U);for(H in l)U=l[H],V=r[H],!l.hasOwnProperty(H)||U===V||U===void 0&&V===void 0||Ac(e,t,H,U,l,V);return}}for(var O in r)U=r[O],r.hasOwnProperty(O)&&U!=null&&!l.hasOwnProperty(O)&&Me(e,t,O,null,l,U);for(P in l)U=l[P],V=r[P],!l.hasOwnProperty(P)||U===V||U==null&&V==null||Me(e,t,P,U,l,V)}function pv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function i1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var s=r[l],d=s.transferSize,v=s.initiatorType,x=s.duration;if(d&&x&&pv(v)){for(v=0,x=s.responseEnd,l+=1;l<r.length;l++){var T=r[l],L=T.startTime;if(L>x)break;var H=T.transferSize,P=T.initiatorType;H&&pv(P)&&(T=T.responseEnd,v+=H*(T<x?1:(x-L)/(T-L)))}if(--l,t+=8*(d+v)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nc=null,Cc=null;function Co(e){return e.nodeType===9?e:e.ownerDocument}function vv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rc=null;function o1(){var e=window.event;return e&&e.type==="popstate"?e===Rc?!1:(Rc=e,!0):(Rc=null,!1)}var yv=typeof setTimeout=="function"?setTimeout:void 0,s1=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(e){return bv.resolve(null).then(e).catch(c1)}:yv;function c1(e){setTimeout(function(){throw e})}function ar(e){return e==="head"}function xv(e,t){var r=t,l=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(s),za(t);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ul(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ul(r);for(var d=r.firstChild;d;){var v=d.nextSibling,x=d.nodeName;d[tl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=v}}else r==="body"&&Ul(e.ownerDocument.body);r=s}while(r);za(t)}function _v(e,t){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?t?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(t?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function zc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":zc(r),Us(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function d1(e,t,r,l){for(;e.nodeType===1;){var s=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function f1(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xt(e.nextSibling),e===null))return null;return e}function Sv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Dc(e){return e.data==="$?"||e.data==="$~"}function Oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function m1(e,t){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||r.readyState!=="loading")t();else{var l=function(){t(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var $c=null;function Ev(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(t===0)return Xt(e.nextSibling);t--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||t++}e=e.nextSibling}return null}function Tv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(t===0)return e;t--}else r!=="/$"&&r!=="/&"||t++}e=e.previousSibling}return null}function wv(e,t,r){switch(t=Co(r),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Us(e)}var Pt=new Map,jv=new Set;function Mo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $n=X.d;X.d={f:h1,r:p1,D:v1,C:g1,L:y1,m:b1,X:_1,S:x1,M:S1};function h1(){var e=$n.f(),t=_o();return e||t}function p1(e){var t=Jr(e);t!==null&&t.tag===5&&t.type==="form"?qh(t):$n.r(e)}var Ca=typeof document>"u"?null:document;function Av(e,t,r){var l=Ca;if(l&&typeof t=="string"&&t){var s=Vt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof r=="string"&&(s+='[crossorigin="'+r+'"]'),jv.has(s)||(jv.add(s),e={rel:e,crossOrigin:r,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),st(t,"link",e),nt(t),l.head.appendChild(t)))}}function v1(e){$n.D(e),Av("dns-prefetch",e,null)}function g1(e,t){$n.C(e,t),Av("preconnect",e,t)}function y1(e,t,r){$n.L(e,t,r);var l=Ca;if(l&&e&&t){var s='link[rel="preload"][as="'+Vt(t)+'"]';t==="image"&&r&&r.imageSrcSet?(s+='[imagesrcset="'+Vt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(s+='[imagesizes="'+Vt(r.imageSizes)+'"]')):s+='[href="'+Vt(e)+'"]';var d=s;switch(t){case"style":d=Ma(e);break;case"script":d=Ra(e)}Pt.has(d)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),Pt.set(d,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Vl(d))||t==="script"&&l.querySelector(Bl(d))||(t=l.createElement("link"),st(t,"link",e),nt(t),l.head.appendChild(t)))}}function b1(e,t){$n.m(e,t);var r=Ca;if(r&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Vt(l)+'"][href="'+Vt(e)+'"]',d=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ra(e)}if(!Pt.has(d)&&(e=b({rel:"modulepreload",href:e},t),Pt.set(d,e),r.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Bl(d)))return}l=r.createElement("link"),st(l,"link",e),nt(l),r.head.appendChild(l)}}}function x1(e,t,r){$n.S(e,t,r);var l=Ca;if(l&&e){var s=Wr(l).hoistableStyles,d=Ma(e);t=t||"default";var v=s.get(d);if(!v){var x={loading:0,preload:null};if(v=l.querySelector(Vl(d)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=Pt.get(d))&&Lc(e,r);var T=v=l.createElement("link");nt(T),st(T,"link",e),T._p=new Promise(function(L,H){T.onload=L,T.onerror=H}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Ro(v,t,l)}v={type:"stylesheet",instance:v,count:1,state:x},s.set(d,v)}}}function _1(e,t){$n.X(e,t);var r=Ca;if(r&&e){var l=Wr(r).hoistableScripts,s=Ra(e),d=l.get(s);d||(d=r.querySelector(Bl(s)),d||(e=b({src:e,async:!0},t),(t=Pt.get(s))&&Uc(e,t),d=r.createElement("script"),nt(d),st(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(s,d))}}function S1(e,t){$n.M(e,t);var r=Ca;if(r&&e){var l=Wr(r).hoistableScripts,s=Ra(e),d=l.get(s);d||(d=r.querySelector(Bl(s)),d||(e=b({src:e,async:!0,type:"module"},t),(t=Pt.get(s))&&Uc(e,t),d=r.createElement("script"),nt(d),st(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(s,d))}}function Nv(e,t,r,l){var s=(s=ve.current)?Mo(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=Ma(r.href),r=Wr(s).hoistableStyles,l=r.get(t),l||(l={type:"style",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Ma(r.href);var d=Wr(s).hoistableStyles,v=d.get(e);if(v||(s=s.ownerDocument||s,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=s.querySelector(Vl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Pt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Pt.set(e,r),d||E1(s,e,r,v.state))),t&&l===null)throw Error(o(528,""));return v}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ra(r),r=Wr(s).hoistableScripts,l=r.get(t),l||(l={type:"script",instance:null,count:0,state:null},r.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ma(e){return'href="'+Vt(e)+'"'}function Vl(e){return'link[rel="stylesheet"]['+e+"]"}function Cv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function E1(e,t,r,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),st(t,"link",r),nt(t),e.head.appendChild(t))}function Ra(e){return'[src="'+Vt(e)+'"]'}function Bl(e){return"script[async]"+e}function Mv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Vt(r.href)+'"]');if(l)return t.instance=l,nt(l),l;var s=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),st(l,"style",s),Ro(l,r.precedence,e),t.instance=l;case"stylesheet":s=Ma(r.href);var d=e.querySelector(Vl(s));if(d)return t.state.loading|=4,t.instance=d,nt(d),d;l=Cv(r),(s=Pt.get(s))&&Lc(l,s),d=(e.ownerDocument||e).createElement("link"),nt(d);var v=d;return v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),st(d,"link",l),t.state.loading|=4,Ro(d,r.precedence,e),t.instance=d;case"script":return d=Ra(r.src),(s=e.querySelector(Bl(d)))?(t.instance=s,nt(s),s):(l=r,(s=Pt.get(d))&&(l=b({},r),Uc(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),nt(s),st(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ro(l,r.precedence,e));return t.instance}function Ro(e,t,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,d=s,v=0;v<l.length;v++){var x=l[v];if(x.dataset.precedence===t)d=x;else if(d!==s)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Lc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zo=null;function Rv(e,t,r){if(zo===null){var l=new Map,s=zo=new Map;s.set(r,l)}else s=zo,l=s.get(r),l||(l=new Map,s.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),s=0;s<r.length;s++){var d=r[s];if(!(d[tl]||d[at]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(t)||"";v=e+v;var x=l.get(v);x?x.push(d):l.set(v,[d])}}return l}function zv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function T1(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function w1(e,t,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var s=Ma(l.href),d=t.querySelector(Vl(s));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Do.bind(e),t.then(e,e)),r.state.loading|=4,r.instance=d,nt(d);return}d=t.ownerDocument||t,l=Cv(l),(s=Pt.get(s))&&Lc(l,s),d=d.createElement("link"),nt(d);var v=d;v._p=new Promise(function(x,T){v.onload=x,v.onerror=T}),st(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Do.bind(e),t.addEventListener("load",r),t.addEventListener("error",r))}}var Vc=0;function j1(e,t){return e.stylesheets&&e.count===0&&$o(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&Vc===0&&(Vc=62500*i1());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$o(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Vc?50:800)+t);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Do(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Oo=null;function $o(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Oo=new Map,t.forEach(A1,e),Oo=null,Do.call(e))}function A1(e,t){if(!(t.state.loading&4)){var r=Oo.get(e);if(r)var l=r.get(null);else{r=new Map,Oo.set(e,r);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<s.length;d++){var v=s[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(r.set(v.dataset.precedence,v),l=v)}l&&r.set(null,l)}s=t.instance,v=s.getAttribute("data-precedence"),d=r.get(v)||l,d===l&&r.set(null,s),r.set(v,s),this.count++,l=Do.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),d?d.parentNode.insertBefore(s,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function N1(e,t,r,l,s,d,v,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ds(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.hiddenUpdates=Ds(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ov(e,t,r,l,s,d,v,x,T,L,H,P){return e=new N1(e,t,r,v,T,L,H,P,x),t=1,d===!0&&(t|=24),d=Mt(3,null,null,t),e.current=d,d.stateNode=e,t=gu(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:t},_u(d),e}function $v(e){return e?(e=sa,e):sa}function Lv(e,t,r,l,s,d){s=$v(s),l.context===null?l.context=s:l.pendingContext=s,l=Kn(t),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Qn(e,l,t),r!==null&&(wt(r,e,t),yl(r,e,t))}function Uv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bc(e,t){Uv(e,t),(e=e.alternate)&&Uv(e,t)}function Vv(e){if(e.tag===13||e.tag===31){var t=Er(e,67108864);t!==null&&wt(t,e,67108864),Bc(e,67108864)}}function Bv(e){if(e.tag===13||e.tag===31){var t=$t();t=Os(t);var r=Er(e,t);r!==null&&wt(r,e,t),Bc(e,t)}}var Lo=!0;function C1(e,t,r,l){var s=z.T;z.T=null;var d=X.p;try{X.p=2,Hc(e,t,r,l)}finally{X.p=d,z.T=s}}function M1(e,t,r,l){var s=z.T;z.T=null;var d=X.p;try{X.p=8,Hc(e,t,r,l)}finally{X.p=d,z.T=s}}function Hc(e,t,r,l){if(Lo){var s=kc(l);if(s===null)jc(e,t,l,Uo,r),kv(e,l);else if(z1(s,e,t,r,l))l.stopPropagation();else if(kv(e,l),t&4&&-1<R1.indexOf(e)){for(;s!==null;){var d=Jr(s);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=yr(d.pendingLanes);if(v!==0){var x=d;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var T=1<<31-Nt(v);x.entanglements[1]|=T,v&=~T}fn(d),(we&6)===0&&(bo=jt()+500,Ol(0))}}break;case 31:case 13:x=Er(d,2),x!==null&&wt(x,d,2),_o(),Bc(d,2)}if(d=kc(l),d===null&&jc(e,t,l,Uo,r),d===s)break;s=d}s!==null&&l.stopPropagation()}else jc(e,t,l,null,r)}}function kc(e){return e=qs(e),Yc(e)}var Uo=null;function Yc(e){if(Uo=null,e=Fr(e),e!==null){var t=c(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=f(t),e!==null)return e;e=null}else if(r===31){if(e=m(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Uo=e,null}function Hv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(v0()){case Qf:return 2;case Zf:return 8;case wi:case g0:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var qc=!1,lr=null,ir=null,or=null,kl=new Map,Yl=new Map,sr=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kv(e,t){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":kl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(t.pointerId)}}function ql(e,t,r,l,s,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[s]},t!==null&&(t=Jr(t),t!==null&&Vv(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function z1(e,t,r,l,s){switch(t){case"focusin":return lr=ql(lr,e,t,r,l,s),!0;case"dragenter":return ir=ql(ir,e,t,r,l,s),!0;case"mouseover":return or=ql(or,e,t,r,l,s),!0;case"pointerover":var d=s.pointerId;return kl.set(d,ql(kl.get(d)||null,e,t,r,l,s)),!0;case"gotpointercapture":return d=s.pointerId,Yl.set(d,ql(Yl.get(d)||null,e,t,r,l,s)),!0}return!1}function Yv(e){var t=Fr(e.target);if(t!==null){var r=c(t);if(r!==null){if(t=r.tag,t===13){if(t=f(r),t!==null){e.blockedOn=t,nm(e.priority,function(){Bv(r)});return}}else if(t===31){if(t=m(r),t!==null){e.blockedOn=t,nm(e.priority,function(){Bv(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=kc(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Ys=l,r.target.dispatchEvent(l),Ys=null}else return t=Jr(r),t!==null&&Vv(t),e.blockedOn=r,!1;t.shift()}return!0}function qv(e,t,r){Vo(e)&&r.delete(t)}function D1(){qc=!1,lr!==null&&Vo(lr)&&(lr=null),ir!==null&&Vo(ir)&&(ir=null),or!==null&&Vo(or)&&(or=null),kl.forEach(qv),Yl.forEach(qv)}function Bo(e,t){e.blockedOn===t&&(e.blockedOn=null,qc||(qc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,D1)))}var Ho=null;function Gv(e){Ho!==e&&(Ho=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ho===e&&(Ho=null);for(var t=0;t<e.length;t+=3){var r=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Yc(l||r)===null)continue;break}var d=Jr(r);d!==null&&(e.splice(t,3),t-=3,ku(d,{pending:!0,data:s,method:r.method,action:l},l,s))}}))}function za(e){function t(T){return Bo(T,e)}lr!==null&&Bo(lr,e),ir!==null&&Bo(ir,e),or!==null&&Bo(or,e),kl.forEach(t),Yl.forEach(t);for(var r=0;r<sr.length;r++){var l=sr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)Yv(r),r.blockedOn===null&&sr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var s=r[l],d=r[l+1],v=s[bt]||null;if(typeof d=="function")v||Gv(r);else if(v){var x=null;if(d&&d.hasAttribute("formAction")){if(s=d,v=d[bt]||null)x=v.formAction;else if(Yc(s)!==null)continue}else x=v.action;typeof x=="function"?r[l+1]=x:(r.splice(l,3),l-=3),Gv(r)}}}function Xv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return s=v})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Gc(e){this._internalRoot=e}ko.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var r=t.current,l=$t();Lv(r,l,e,t,null,null)},ko.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lv(e.current,2,null,e,null,null),_o(),t[Zr]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=tm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sr.length&&t!==0&&t<sr[r].priority;r++);sr.splice(r,0,e),r===0&&Yv(e)}};var Pv=a.version;if(Pv!=="19.2.8")throw Error(o(527,Pv,"19.2.8"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var O1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{Wa=Yo.inject(O1),At=Yo}catch{}}return Ql.createRoot=function(e,t){if(!u(e))throw Error(o(299));var r=!1,l="",s=Ih,d=ep,v=tp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=Ov(e,1,!1,null,null,r,l,null,s,d,v,Xv),e[Zr]=t.current,wc(e),new Gc(t)},Ql.hydrateRoot=function(e,t,r){if(!u(e))throw Error(o(299));var l=!1,s="",d=Ih,v=ep,x=tp,T=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(v=r.onCaughtError),r.onRecoverableError!==void 0&&(x=r.onRecoverableError),r.formState!==void 0&&(T=r.formState)),t=Ov(e,1,!0,t,r??null,l,s,T,d,v,x,Xv),t.context=$v(null),r=t.current,l=$t(),l=Os(l),s=Kn(l),s.callback=null,Qn(r,s,l),r=l,t.current.lanes=r,el(t,r),fn(t),e[Zr]=t.current,wc(e),new ko(t)},Ql.version="19.2.8",Ql}var qy;function r3(){if(qy)return xd.exports;qy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),xd.exports=n3(),xd.exports}var a3=r3();a3.createRoot(document.getElementById("root")).render(y.jsx(S.StrictMode,{children:y.jsx(VA,{children:y.jsx(IA,{})})})); 
