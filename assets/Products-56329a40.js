import{_ as Qt,Z as ct,$ as Jt,a0 as en,r as f,a1 as y,a2 as tn,a3 as ae,a4 as w,a5 as D,a6 as nn,a7 as dt,n as S,P,u as ke,a8 as rn,s as Le,j as h,o as oe,a9 as on,I as an,aa as un,L as sn,R as ln,M as Ce,N as cn,ab as dn,S as pn}from"./index-001bc5fc.js";import{T as fn}from"./TitlePage-168bb9f5.js";import{u as hn}from"./index-2b128209.js";import{f as pt,C as mn}from"./Calendar-f347a7bc.js";function gn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}const vn="/fs-79-react-node-DmytroZhdanov/assets/bg_eating-391a2df6.jpg",bn="/fs-79-react-node-DmytroZhdanov/assets/bg_eating@2x-9a4ec783.jpg",xn="/fs-79-react-node-DmytroZhdanov/assets/bg_eating@3x-8653e571.jpg",En="/fs-79-react-node-DmytroZhdanov/assets/Alcoholicdrinks-486482f5.jpg",Cn="/fs-79-react-node-DmytroZhdanov/assets/Berries-590d1129.jpg",Sn="/fs-79-react-node-DmytroZhdanov/assets/Cereals-5593b81d.jpg",yn="/fs-79-react-node-DmytroZhdanov/assets/Dairy-b7076684.jpg",Fn="/fs-79-react-node-DmytroZhdanov/assets/Driedfruits-963d3720.jpg",wn="/fs-79-react-node-DmytroZhdanov/assets/Eggs-12459143.jpg",Dn="/fs-79-react-node-DmytroZhdanov/assets/Fish-05ac2864.jpg",On="/fs-79-react-node-DmytroZhdanov/assets/Flour-12c71bd2.jpg",An="/fs-79-react-node-DmytroZhdanov/assets/Fruits-e1566249.jpg",In="/fs-79-react-node-DmytroZhdanov/assets/Meat-ab0145d5.jpg",Mn="/fs-79-react-node-DmytroZhdanov/assets/Mushrooms-ec1a81b1.jpg",Pn="/fs-79-react-node-DmytroZhdanov/assets/Nuts-f54973d6.jpg",Vn="/fs-79-react-node-DmytroZhdanov/assets/Oilsandfats-e99bbb70.jpg",Rn="/fs-79-react-node-DmytroZhdanov/assets/Poppy-bbcc307a.jpg",kn="/fs-79-react-node-DmytroZhdanov/assets/Sausage-c6a576ec.jpg",Ln="/fs-79-react-node-DmytroZhdanov/assets/Seeds-c88eb697.jpg",$n="/fs-79-react-node-DmytroZhdanov/assets/Sesame-109b0fb3.jpg",Tn="/fs-79-react-node-DmytroZhdanov/assets/Softdrinks-17da42b0.jpg",Bn="/fs-79-react-node-DmytroZhdanov/assets/Vegetablesandherbs-73ff911b.jpg";function Me(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function ft(e,t){if(e){if(typeof e=="string")return Me(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Me(e,t)}}function jn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qt(e,t)}function fe(e){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(e)}function Hn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zn(e,t){if(t&&(ct(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return gn(e)}function Nn(e){var t=Hn();return function(){var o=fe(e),n;if(t){var a=fe(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return zn(this,n)}}function _n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Jt(o.key),o)}}function Un(e,t,r){return t&&_e(e.prototype,t),r&&_e(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wn(e){if(Array.isArray(e))return e}function qn(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,n,a,s,i=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;u=!1}else for(;!(u=(o=a.call(r)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(c){l=!0,n=c}finally{try{if(!u&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(l)throw n}}return i}}function Gn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(e,t){return Wn(e)||qn(e,t)||ft(e,t)||Gn()}function Y(e,t){if(e==null)return{};var r=en(e,t),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var Zn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function Yn(e){var t=e.defaultInputValue,r=t===void 0?"":t,o=e.defaultMenuIsOpen,n=o===void 0?!1:o,a=e.defaultValue,s=a===void 0?null:a,i=e.inputValue,u=e.menuIsOpen,l=e.onChange,c=e.onInputChange,d=e.onMenuClose,v=e.onMenuOpen,E=e.value,b=Y(e,Zn),x=f.useState(i!==void 0?i:r),m=Z(x,2),g=m[0],A=m[1],C=f.useState(u!==void 0?u:n),F=Z(C,2),M=F[0],p=F[1],O=f.useState(E!==void 0?E:s),I=Z(O,2),V=I[0],j=I[1],N=f.useCallback(function(W,X){typeof l=="function"&&l(W,X),j(W)},[l]),T=f.useCallback(function(W,X){var K;typeof c=="function"&&(K=c(W,X)),A(K!==void 0?K:W)},[c]),_=f.useCallback(function(){typeof v=="function"&&v(),p(!0)},[v]),k=f.useCallback(function(){typeof d=="function"&&d(),p(!1)},[d]),L=i!==void 0?i:g,H=u!==void 0?u:M,U=E!==void 0?E:V;return y(y({},b),{},{inputValue:L,menuIsOpen:H,onChange:N,onInputChange:T,onMenuClose:k,onMenuOpen:_,value:U})}function Xn(e){if(Array.isArray(e))return Me(e)}function Kn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(e){return Xn(e)||Kn(e)||ft(e)||Qn()}function Jn(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const er=Math.min,tr=Math.max,he=Math.round,ue=Math.floor,me=e=>({x:e,y:e});function nr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function mt(e){return vt(e)?(e.nodeName||"").toLowerCase():"#document"}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gt(e){var t;return(t=(vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vt(e){return e instanceof Node||e instanceof z(e).Node}function Pe(e){return e instanceof Element||e instanceof z(e).Element}function $e(e){return e instanceof HTMLElement||e instanceof z(e).HTMLElement}function Ue(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function bt(e){const{overflow:t,overflowX:r,overflowY:o,display:n}=Te(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function rr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function or(e){return["html","body","#document"].includes(mt(e))}function Te(e){return z(e).getComputedStyle(e)}function ir(e){if(mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ue(e)&&e.host||gt(e);return Ue(t)?t.host:t}function xt(e){const t=ir(e);return or(t)?e.ownerDocument?e.ownerDocument.body:e.body:$e(t)&&bt(t)?t:xt(t)}function ge(e,t,r){var o;t===void 0&&(t=[]),r===void 0&&(r=!0);const n=xt(e),a=n===((o=e.ownerDocument)==null?void 0:o.body),s=z(n);return a?t.concat(s,s.visualViewport||[],bt(n)?n:[],s.frameElement&&r?ge(s.frameElement):[]):t.concat(n,ge(n,[],r))}function ar(e){const t=Te(e);let r=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=$e(e),a=n?e.offsetWidth:r,s=n?e.offsetHeight:o,i=he(r)!==a||he(o)!==s;return i&&(r=a,o=s),{width:r,height:o,$:i}}function Be(e){return Pe(e)?e:e.contextElement}function Se(e){const t=Be(e);if(!$e(t))return me(1);const r=t.getBoundingClientRect(),{width:o,height:n,$:a}=ar(t);let s=(a?he(r.width):r.width)/o,i=(a?he(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!i||!Number.isFinite(i))&&(i=1),{x:s,y:i}}const ur=me(0);function sr(e){const t=z(e);return!rr()||!t.visualViewport?ur:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function lr(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==z(e)?!1:t}function We(e,t,r,o){t===void 0&&(t=!1),r===void 0&&(r=!1);const n=e.getBoundingClientRect(),a=Be(e);let s=me(1);t&&(o?Pe(o)&&(s=Se(o)):s=Se(e));const i=lr(a,r,o)?sr(a):me(0);let u=(n.left+i.x)/s.x,l=(n.top+i.y)/s.y,c=n.width/s.x,d=n.height/s.y;if(a){const v=z(a),E=o&&Pe(o)?z(o):o;let b=v.frameElement;for(;b&&o&&E!==v;){const x=Se(b),m=b.getBoundingClientRect(),g=Te(b),A=m.left+(b.clientLeft+parseFloat(g.paddingLeft))*x.x,C=m.top+(b.clientTop+parseFloat(g.paddingTop))*x.y;u*=x.x,l*=x.y,c*=x.x,d*=x.y,u+=A,l+=C,b=z(b).frameElement}}return nr({width:c,height:d,x:u,y:l})}function cr(e,t){let r=null,o;const n=gt(e);function a(){clearTimeout(o),r&&r.disconnect(),r=null}function s(i,u){i===void 0&&(i=!1),u===void 0&&(u=1),a();const{left:l,top:c,width:d,height:v}=e.getBoundingClientRect();if(i||t(),!d||!v)return;const E=ue(c),b=ue(n.clientWidth-(l+d)),x=ue(n.clientHeight-(c+v)),m=ue(l),A={rootMargin:-E+"px "+-b+"px "+-x+"px "+-m+"px",threshold:tr(0,er(1,u))||1};let C=!0;function F(M){const p=M[0].intersectionRatio;if(p!==u){if(!C)return s();p?s(!1,p):o=setTimeout(()=>{s(!1,1e-7)},100)}C=!1}try{r=new IntersectionObserver(F,{...A,root:n.ownerDocument})}catch{r=new IntersectionObserver(F,A)}r.observe(e)}return s(!0),a}function dr(e,t,r,o){o===void 0&&(o={});const{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,l=Be(e),c=n||a?[...l?ge(l):[],...ge(t)]:[];c.forEach(g=>{n&&g.addEventListener("scroll",r,{passive:!0}),a&&g.addEventListener("resize",r)});const d=l&&i?cr(l,r):null;let v=-1,E=null;s&&(E=new ResizeObserver(g=>{let[A]=g;A&&A.target===l&&E&&(E.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{E&&E.observe(t)})),r()}),l&&!u&&E.observe(l),E.observe(t));let b,x=u?We(e):null;u&&m();function m(){const g=We(e);x&&(g.x!==x.x||g.y!==x.y||g.width!==x.width||g.height!==x.height)&&r(),x=g,b=requestAnimationFrame(m)}return r(),()=>{c.forEach(g=>{n&&g.removeEventListener("scroll",r),a&&g.removeEventListener("resize",r)}),d&&d(),E&&E.disconnect(),E=null,u&&cancelAnimationFrame(b)}}var Ve=f.useLayoutEffect,pr=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],ve=function(){};function fr(e,t){return t?t[0]==="-"?e+t:e+"__"+t:e}function hr(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];var a=[].concat(o);if(t&&e)for(var s in t)t.hasOwnProperty(s)&&t[s]&&a.push("".concat(fr(e,s)));return a.filter(function(i){return i}).map(function(i){return String(i).trim()}).join(" ")}var qe=function(t){return yr(t)?t.filter(Boolean):ct(t)==="object"&&t!==null?[t]:[]},Et=function(t){t.className,t.clearValue,t.cx,t.getStyles,t.getClassNames,t.getValue,t.hasValue,t.isMulti,t.isRtl,t.options,t.selectOption,t.selectProps,t.setValue,t.theme;var r=Y(t,pr);return y({},r)},R=function(t,r,o){var n=t.cx,a=t.getStyles,s=t.getClassNames,i=t.className;return{css:a(r,t),className:n(o??{},s(r,t),i)}};function Ee(e){return[document.documentElement,document.body,window].indexOf(e)>-1}function mr(e){return Ee(e)?window.innerHeight:e.clientHeight}function Ct(e){return Ee(e)?window.pageYOffset:e.scrollTop}function be(e,t){if(Ee(e)){window.scrollTo(0,t);return}e.scrollTop=t}function gr(e){var t=getComputedStyle(e),r=t.position==="absolute",o=/(auto|scroll)/;if(t.position==="fixed")return document.documentElement;for(var n=e;n=n.parentElement;)if(t=getComputedStyle(n),!(r&&t.position==="static")&&o.test(t.overflow+t.overflowY+t.overflowX))return n;return document.documentElement}function vr(e,t,r,o){return r*((e=e/o-1)*e*e+1)+t}function se(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:ve,n=Ct(e),a=t-n,s=10,i=0;function u(){i+=s;var l=vr(i,n,a,r);be(e,l),i<r?window.requestAnimationFrame(u):o(e)}u()}function Ge(e,t){var r=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=t.offsetHeight/3;o.bottom+n>r.bottom?be(e,Math.min(t.offsetTop+t.clientHeight-e.offsetHeight+n,e.scrollHeight)):o.top-n<r.top&&be(e,Math.max(t.offsetTop-n,0))}function br(e){var t=e.getBoundingClientRect();return{bottom:t.bottom,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function Ze(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function xr(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var St=!1,Er={get passive(){return St=!0}},le=typeof window<"u"?window:{};le.addEventListener&&le.removeEventListener&&(le.addEventListener("p",ve,Er),le.removeEventListener("p",ve,!1));var Cr=St;function Sr(e){return e!=null}function yr(e){return Array.isArray(e)}function ce(e,t,r){return e?t:r}var Fr=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];var a=Object.entries(t).filter(function(s){var i=Z(s,1),u=i[0];return!o.includes(u)});return a.reduce(function(s,i){var u=Z(i,2),l=u[0],c=u[1];return s[l]=c,s},{})},wr=["children","innerProps"],Dr=["children","innerProps"];function Or(e){var t=e.maxHeight,r=e.menuEl,o=e.minHeight,n=e.placement,a=e.shouldScroll,s=e.isFixedPosition,i=e.controlHeight,u=gr(r),l={placement:"bottom",maxHeight:t};if(!r||!r.offsetParent)return l;var c=u.getBoundingClientRect(),d=c.height,v=r.getBoundingClientRect(),E=v.bottom,b=v.height,x=v.top,m=r.offsetParent.getBoundingClientRect(),g=m.top,A=s?window.innerHeight:mr(u),C=Ct(u),F=parseInt(getComputedStyle(r).marginBottom,10),M=parseInt(getComputedStyle(r).marginTop,10),p=g-M,O=A-x,I=p+C,V=d-C-x,j=E-A+C+F,N=C+x-M,T=160;switch(n){case"auto":case"bottom":if(O>=b)return{placement:"bottom",maxHeight:t};if(V>=b&&!s)return a&&se(u,j,T),{placement:"bottom",maxHeight:t};if(!s&&V>=o||s&&O>=o){a&&se(u,j,T);var _=s?O-F:V-F;return{placement:"bottom",maxHeight:_}}if(n==="auto"||s){var k=t,L=s?p:I;return L>=o&&(k=Math.min(L-F-i,t)),{placement:"top",maxHeight:k}}if(n==="bottom")return a&&be(u,j),{placement:"bottom",maxHeight:t};break;case"top":if(p>=b)return{placement:"top",maxHeight:t};if(I>=b&&!s)return a&&se(u,N,T),{placement:"top",maxHeight:t};if(!s&&I>=o||s&&p>=o){var H=t;return(!s&&I>=o||s&&p>=o)&&(H=s?p-M:I-M),a&&se(u,N,T),{placement:"top",maxHeight:H}}return{placement:"bottom",maxHeight:t};default:throw new Error('Invalid placement provided "'.concat(n,'".'))}return l}function Ar(e){var t={bottom:"top",top:"bottom"};return e?t[e]:"bottom"}var yt=function(t){return t==="auto"?"bottom":t},Ir=function(t,r){var o,n=t.placement,a=t.theme,s=a.borderRadius,i=a.spacing,u=a.colors;return y((o={label:"menu"},ae(o,Ar(n),"100%"),ae(o,"position","absolute"),ae(o,"width","100%"),ae(o,"zIndex",1),o),r?{}:{backgroundColor:u.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:i.menuGutter,marginTop:i.menuGutter})},Ft=f.createContext(null),Mr=function(t){var r=t.children,o=t.minMenuHeight,n=t.maxMenuHeight,a=t.menuPlacement,s=t.menuPosition,i=t.menuShouldScrollIntoView,u=t.theme,l=f.useContext(Ft)||{},c=l.setPortalPlacement,d=f.useRef(null),v=f.useState(n),E=Z(v,2),b=E[0],x=E[1],m=f.useState(null),g=Z(m,2),A=g[0],C=g[1],F=u.spacing.controlHeight;return Ve(function(){var M=d.current;if(M){var p=s==="fixed",O=i&&!p,I=Or({maxHeight:n,menuEl:M,minHeight:o,placement:a,shouldScroll:O,isFixedPosition:p,controlHeight:F});x(I.maxHeight),C(I.placement),c==null||c(I.placement)}},[n,a,s,i,o,c,F]),r({ref:d,placerProps:y(y({},t),{},{placement:A||yt(a),maxHeight:b})})},Pr=function(t){var r=t.children,o=t.innerRef,n=t.innerProps;return w("div",D({},R(t,"menu",{menu:!0}),{ref:o},n),r)},Vr=Pr,Rr=function(t,r){var o=t.maxHeight,n=t.theme.spacing.baseUnit;return y({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:n,paddingTop:n})},kr=function(t){var r=t.children,o=t.innerProps,n=t.innerRef,a=t.isMulti;return w("div",D({},R(t,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:n},o),r)},wt=function(t,r){var o=t.theme,n=o.spacing.baseUnit,a=o.colors;return y({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(n*2,"px ").concat(n*3,"px")})},Lr=wt,$r=wt,Tr=function(t){var r=t.children,o=r===void 0?"No options":r,n=t.innerProps,a=Y(t,wr);return w("div",D({},R(y(y({},a),{},{children:o,innerProps:n}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),n),o)},Br=function(t){var r=t.children,o=r===void 0?"Loading...":r,n=t.innerProps,a=Y(t,Dr);return w("div",D({},R(y(y({},a),{},{children:o,innerProps:n}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),n),o)},jr=function(t){var r=t.rect,o=t.offset,n=t.position;return{left:r.left,position:n,top:o,width:r.width,zIndex:1}},Hr=function(t){var r=t.appendTo,o=t.children,n=t.controlElement,a=t.innerProps,s=t.menuPlacement,i=t.menuPosition,u=f.useRef(null),l=f.useRef(null),c=f.useState(yt(s)),d=Z(c,2),v=d[0],E=d[1],b=f.useMemo(function(){return{setPortalPlacement:E}},[]),x=f.useState(null),m=Z(x,2),g=m[0],A=m[1],C=f.useCallback(function(){if(n){var O=br(n),I=i==="fixed"?0:window.pageYOffset,V=O[v]+I;(V!==(g==null?void 0:g.offset)||O.left!==(g==null?void 0:g.rect.left)||O.width!==(g==null?void 0:g.rect.width))&&A({offset:V,rect:O})}},[n,i,v,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);Ve(function(){C()},[C]);var F=f.useCallback(function(){typeof l.current=="function"&&(l.current(),l.current=null),n&&u.current&&(l.current=dr(n,u.current,C,{elementResize:"ResizeObserver"in window}))},[n,C]);Ve(function(){F()},[F]);var M=f.useCallback(function(O){u.current=O,F()},[F]);if(!r&&i!=="fixed"||!g)return null;var p=w("div",D({ref:M},R(y(y({},t),{},{offset:g.offset,position:i,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),o);return w(Ft.Provider,{value:b},r?nn.createPortal(p,r):p)},zr=function(t){var r=t.isDisabled,o=t.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},Nr=function(t){var r=t.children,o=t.innerProps,n=t.isDisabled,a=t.isRtl;return w("div",D({},R(t,"container",{"--is-disabled":n,"--is-rtl":a}),o),r)},_r=function(t,r){var o=t.theme.spacing,n=t.isMulti,a=t.hasValue,s=t.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:n&&a&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},Ur=function(t){var r=t.children,o=t.innerProps,n=t.isMulti,a=t.hasValue;return w("div",D({},R(t,"valueContainer",{"value-container":!0,"value-container--is-multi":n,"value-container--has-value":a}),o),r)},Wr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},qr=function(t){var r=t.children,o=t.innerProps;return w("div",D({},R(t,"indicatorsContainer",{indicators:!0}),o),r)},Ye,Gr=["size"],Zr=["innerProps","isRtl","size"],Yr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Dt=function(t){var r=t.size,o=Y(t,Gr);return w("svg",D({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:Yr},o))},je=function(t){return w(Dt,D({size:20},t),w("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},Ot=function(t){return w(Dt,D({size:20},t),w("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},At=function(t,r){var o=t.isFocused,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?s.neutral60:s.neutral20,padding:a*2,":hover":{color:o?s.neutral80:s.neutral40}})},Xr=At,Kr=function(t){var r=t.children,o=t.innerProps;return w("div",D({},R(t,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||w(Ot,null))},Qr=At,Jr=function(t){var r=t.children,o=t.innerProps;return w("div",D({},R(t,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||w(je,null))},eo=function(t,r){var o=t.isDisabled,n=t.theme,a=n.spacing.baseUnit,s=n.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?s.neutral10:s.neutral20,marginBottom:a*2,marginTop:a*2})},to=function(t){var r=t.innerProps;return w("span",D({},r,R(t,"indicatorSeparator",{"indicator-separator":!0})))},no=tn(Ye||(Ye=Jn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),ro=function(t,r){var o=t.isFocused,n=t.size,a=t.theme,s=a.colors,i=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:n,lineHeight:1,marginRight:n,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?s.neutral60:s.neutral20,padding:i*2})},ye=function(t){var r=t.delay,o=t.offset;return w("span",{css:dt({animation:"".concat(no," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},oo=function(t){var r=t.innerProps,o=t.isRtl,n=t.size,a=n===void 0?4:n,s=Y(t,Zr);return w("div",D({},R(y(y({},s),{},{innerProps:r,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),w(ye,{delay:0,offset:o}),w(ye,{delay:160,offset:!0}),w(ye,{delay:320,offset:!o}))},io=function(t,r){var o=t.isDisabled,n=t.isFocused,a=t.theme,s=a.colors,i=a.borderRadius,u=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:u.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?s.neutral5:s.neutral0,borderColor:o?s.neutral10:n?s.primary:s.neutral20,borderRadius:i,borderStyle:"solid",borderWidth:1,boxShadow:n?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:n?s.primary:s.neutral30}})},ao=function(t){var r=t.children,o=t.isDisabled,n=t.isFocused,a=t.innerRef,s=t.innerProps,i=t.menuIsOpen;return w("div",D({ref:a},R(t,"control",{control:!0,"control--is-disabled":o,"control--is-focused":n,"control--menu-is-open":i}),s,{"aria-disabled":o||void 0}),r)},uo=ao,so=["data"],lo=function(t,r){var o=t.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},co=function(t){var r=t.children,o=t.cx,n=t.getStyles,a=t.getClassNames,s=t.Heading,i=t.headingProps,u=t.innerProps,l=t.label,c=t.theme,d=t.selectProps;return w("div",D({},R(t,"group",{group:!0}),u),w(s,D({},i,{selectProps:d,theme:c,getStyles:n,getClassNames:a,cx:o}),l),w("div",null,r))},po=function(t,r){var o=t.theme,n=o.colors,a=o.spacing;return y({label:"group",cursor:"default",display:"block"},r?{}:{color:n.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},fo=function(t){var r=Et(t);r.data;var o=Y(r,so);return w("div",D({},R(t,"groupHeading",{"group-heading":!0}),o))},ho=co,mo=["innerRef","isDisabled","isHidden","inputClassName"],go=function(t,r){var o=t.isDisabled,n=t.value,a=t.theme,s=a.spacing,i=a.colors;return y(y({visibility:o?"hidden":"visible",transform:n?"translateZ(0)":""},vo),r?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:i.neutral80})},It={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},vo={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},It)},bo=function(t){return y({label:"input",color:"inherit",background:0,opacity:t?0:1,width:"100%"},It)},xo=function(t){var r=t.cx,o=t.value,n=Et(t),a=n.innerRef,s=n.isDisabled,i=n.isHidden,u=n.inputClassName,l=Y(n,mo);return w("div",D({},R(t,"input",{"input-container":!0}),{"data-value":o||""}),w("input",D({className:r({input:!0},u),ref:a,style:bo(i),disabled:s},l)))},Eo=xo,Co=function(t,r){var o=t.theme,n=o.spacing,a=o.borderRadius,s=o.colors;return y({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:s.neutral10,borderRadius:a/2,margin:n.baseUnit/2})},So=function(t,r){var o=t.theme,n=o.borderRadius,a=o.colors,s=t.cropWithEllipsis;return y({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:n/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},yo=function(t,r){var o=t.theme,n=o.spacing,a=o.borderRadius,s=o.colors,i=t.isFocused;return y({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:i?s.dangerLight:void 0,paddingLeft:n.baseUnit,paddingRight:n.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},Mt=function(t){var r=t.children,o=t.innerProps;return w("div",o,r)},Fo=Mt,wo=Mt;function Do(e){var t=e.children,r=e.innerProps;return w("div",D({role:"button"},r),t||w(je,{size:14}))}var Oo=function(t){var r=t.children,o=t.components,n=t.data,a=t.innerProps,s=t.isDisabled,i=t.removeProps,u=t.selectProps,l=o.Container,c=o.Label,d=o.Remove;return w(l,{data:n,innerProps:y(y({},R(t,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),a),selectProps:u},w(c,{data:n,innerProps:y({},R(t,"multiValueLabel",{"multi-value__label":!0})),selectProps:u},r),w(d,{data:n,innerProps:y(y({},R(t,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},i),selectProps:u}))},Ao=Oo,Io=function(t,r){var o=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.theme,i=s.spacing,u=s.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?u.primary:n?u.primary25:"transparent",color:o?u.neutral20:a?u.neutral0:"inherit",padding:"".concat(i.baseUnit*2,"px ").concat(i.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?u.primary:u.primary50}})},Mo=function(t){var r=t.children,o=t.isDisabled,n=t.isFocused,a=t.isSelected,s=t.innerRef,i=t.innerProps;return w("div",D({},R(t,"option",{option:!0,"option--is-disabled":o,"option--is-focused":n,"option--is-selected":a}),{ref:s,"aria-disabled":o},i),r)},Po=Mo,Vo=function(t,r){var o=t.theme,n=o.spacing,a=o.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:n.baseUnit/2,marginRight:n.baseUnit/2})},Ro=function(t){var r=t.children,o=t.innerProps;return w("div",D({},R(t,"placeholder",{placeholder:!0}),o),r)},ko=Ro,Lo=function(t,r){var o=t.isDisabled,n=t.theme,a=n.spacing,s=n.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?s.neutral40:s.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},$o=function(t){var r=t.children,o=t.isDisabled,n=t.innerProps;return w("div",D({},R(t,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),n),r)},To=$o,Bo={ClearIndicator:Jr,Control:uo,DropdownIndicator:Kr,DownChevron:Ot,CrossIcon:je,Group:ho,GroupHeading:fo,IndicatorsContainer:qr,IndicatorSeparator:to,Input:Eo,LoadingIndicator:oo,Menu:Vr,MenuList:kr,MenuPortal:Hr,LoadingMessage:Br,NoOptionsMessage:Tr,MultiValue:Ao,MultiValueContainer:Fo,MultiValueLabel:wo,MultiValueRemove:Do,Option:Po,Placeholder:ko,SelectContainer:Nr,SingleValue:To,ValueContainer:Ur},jo=function(t){return y(y({},Bo),t.components)},Xe=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ho(e,t){return!!(e===t||Xe(e)&&Xe(t))}function zo(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Ho(e[r],t[r]))return!1;return!0}function No(e,t){t===void 0&&(t=zo);var r=null;function o(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(r&&r.lastThis===this&&t(n,r.lastArgs))return r.lastResult;var s=e.apply(this,n);return r={lastResult:s,lastArgs:n,lastThis:this},s}return o.clear=function(){r=null},o}var _o={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},Uo=function(t){return w("span",D({css:_o},t))},Ke=Uo,Wo={guidance:function(t){var r=t.isSearchable,o=t.isMulti,n=t.isDisabled,a=t.tabSelectsValue,s=t.context;switch(s){case"menu":return"Use Up and Down to choose options".concat(n?"":", press Enter to select the currently focused option",", press Escape to exit the menu").concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return"".concat(t["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":"");case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(t){var r=t.action,o=t.label,n=o===void 0?"":o,a=t.labels,s=t.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(n,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return s?"option ".concat(n," is disabled. Select another option."):"option ".concat(n,", selected.");default:return""}},onFocus:function(t){var r=t.context,o=t.focused,n=t.options,a=t.label,s=a===void 0?"":a,i=t.selectValue,u=t.isDisabled,l=t.isSelected,c=function(b,x){return b&&b.length?"".concat(b.indexOf(x)+1," of ").concat(b.length):""};if(r==="value"&&i)return"value ".concat(s," focused, ").concat(c(i,o),".");if(r==="menu"){var d=u?" disabled":"",v="".concat(l?"selected":"focused").concat(d);return"option ".concat(s," ").concat(v,", ").concat(c(n,o),".")}return""},onFilter:function(t){var r=t.inputValue,o=t.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},qo=function(t){var r=t.ariaSelection,o=t.focusedOption,n=t.focusedValue,a=t.focusableOptions,s=t.isFocused,i=t.selectValue,u=t.selectProps,l=t.id,c=u.ariaLiveMessages,d=u.getOptionLabel,v=u.inputValue,E=u.isMulti,b=u.isOptionDisabled,x=u.isSearchable,m=u.menuIsOpen,g=u.options,A=u.screenReaderStatus,C=u.tabSelectsValue,F=u["aria-label"],M=u["aria-live"],p=f.useMemo(function(){return y(y({},Wo),c||{})},[c]),O=f.useMemo(function(){var k="";if(r&&p.onChange){var L=r.option,H=r.options,U=r.removedValue,W=r.removedValues,X=r.value,K=function(G){return Array.isArray(G)?null:G},ee=U||L||K(X),$=ee?d(ee):"",B=H||W||void 0,Q=B?B.map(d):[],J=y({isDisabled:ee&&b(ee,i),label:$,labels:Q},r);k=p.onChange(J)}return k},[r,p,b,i,d]),I=f.useMemo(function(){var k="",L=o||n,H=!!(o&&i&&i.includes(o));if(L&&p.onFocus){var U={focused:L,label:d(L),isDisabled:b(L,i),isSelected:H,options:a,context:L===o?"menu":"value",selectValue:i};k=p.onFocus(U)}return k},[o,n,d,b,p,a,i]),V=f.useMemo(function(){var k="";if(m&&g.length&&p.onFilter){var L=A({count:a.length});k=p.onFilter({inputValue:v,resultsMessage:L})}return k},[a,v,m,p,g,A]),j=f.useMemo(function(){var k="";if(p.guidance){var L=n?"value":m?"menu":"input";k=p.guidance({"aria-label":F,context:L,isDisabled:o&&b(o,i),isMulti:E,isSearchable:x,tabSelectsValue:C})}return k},[F,o,n,E,b,x,m,p,i,C]),N="".concat(I," ").concat(V," ").concat(j),T=w(f.Fragment,null,w("span",{id:"aria-selection"},O),w("span",{id:"aria-context"},N)),_=(r==null?void 0:r.action)==="initial-input-focus";return w(f.Fragment,null,w(Ke,{id:l},_&&T),w(Ke,{"aria-live":M,"aria-atomic":"false","aria-relevant":"additions text"},s&&!_&&T))},Go=qo,Re=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],Zo=new RegExp("["+Re.map(function(e){return e.letters}).join("")+"]","g"),Pt={};for(var Fe=0;Fe<Re.length;Fe++)for(var we=Re[Fe],De=0;De<we.letters.length;De++)Pt[we.letters[De]]=we.base;var Vt=function(t){return t.replace(Zo,function(r){return Pt[r]})},Yo=No(Vt),Qe=function(t){return t.replace(/^\s+|\s+$/g,"")},Xo=function(t){return"".concat(t.label," ").concat(t.value)},Ko=function(t){return function(r,o){if(r.data.__isNew__)return!0;var n=y({ignoreCase:!0,ignoreAccents:!0,stringify:Xo,trim:!0,matchFrom:"any"},t),a=n.ignoreCase,s=n.ignoreAccents,i=n.stringify,u=n.trim,l=n.matchFrom,c=u?Qe(o):o,d=u?Qe(i(r)):i(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),s&&(c=Yo(c),d=Vt(d)),l==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},Qo=["innerRef"];function Jo(e){var t=e.innerRef,r=Y(e,Qo),o=Fr(r,"onExited","in","enter","exit","appear");return w("input",D({ref:t},o,{css:dt({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var ei=function(t){t.cancelable&&t.preventDefault(),t.stopPropagation()};function ti(e){var t=e.isEnabled,r=e.onBottomArrive,o=e.onBottomLeave,n=e.onTopArrive,a=e.onTopLeave,s=f.useRef(!1),i=f.useRef(!1),u=f.useRef(0),l=f.useRef(null),c=f.useCallback(function(m,g){if(l.current!==null){var A=l.current,C=A.scrollTop,F=A.scrollHeight,M=A.clientHeight,p=l.current,O=g>0,I=F-M-C,V=!1;I>g&&s.current&&(o&&o(m),s.current=!1),O&&i.current&&(a&&a(m),i.current=!1),O&&g>I?(r&&!s.current&&r(m),p.scrollTop=F,V=!0,s.current=!0):!O&&-g>C&&(n&&!i.current&&n(m),p.scrollTop=0,V=!0,i.current=!0),V&&ei(m)}},[r,o,n,a]),d=f.useCallback(function(m){c(m,m.deltaY)},[c]),v=f.useCallback(function(m){u.current=m.changedTouches[0].clientY},[]),E=f.useCallback(function(m){var g=u.current-m.changedTouches[0].clientY;c(m,g)},[c]),b=f.useCallback(function(m){if(m){var g=Cr?{passive:!1}:!1;m.addEventListener("wheel",d,g),m.addEventListener("touchstart",v,g),m.addEventListener("touchmove",E,g)}},[E,v,d]),x=f.useCallback(function(m){m&&(m.removeEventListener("wheel",d,!1),m.removeEventListener("touchstart",v,!1),m.removeEventListener("touchmove",E,!1))},[E,v,d]);return f.useEffect(function(){if(t){var m=l.current;return b(m),function(){x(m)}}},[t,b,x]),function(m){l.current=m}}var Je=["boxSizing","height","overflow","paddingRight","position"],et={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function tt(e){e.preventDefault()}function nt(e){e.stopPropagation()}function rt(){var e=this.scrollTop,t=this.scrollHeight,r=e+this.offsetHeight;e===0?this.scrollTop=1:r===t&&(this.scrollTop=e-1)}function ot(){return"ontouchstart"in window||navigator.maxTouchPoints}var it=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,te={capture:!1,passive:!1};function ni(e){var t=e.isEnabled,r=e.accountForScrollbars,o=r===void 0?!0:r,n=f.useRef({}),a=f.useRef(null),s=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;if(o&&Je.forEach(function(b){var x=c&&c[b];n.current[b]=x}),o&&re<1){var d=parseInt(n.current.paddingRight,10)||0,v=document.body?document.body.clientWidth:0,E=window.innerWidth-v+d||0;Object.keys(et).forEach(function(b){var x=et[b];c&&(c[b]=x)}),c&&(c.paddingRight="".concat(E,"px"))}l&&ot()&&(l.addEventListener("touchmove",tt,te),u&&(u.addEventListener("touchstart",rt,te),u.addEventListener("touchmove",nt,te))),re+=1}},[o]),i=f.useCallback(function(u){if(it){var l=document.body,c=l&&l.style;re=Math.max(re-1,0),o&&re<1&&Je.forEach(function(d){var v=n.current[d];c&&(c[d]=v)}),l&&ot()&&(l.removeEventListener("touchmove",tt,te),u&&(u.removeEventListener("touchstart",rt,te),u.removeEventListener("touchmove",nt,te)))}},[o]);return f.useEffect(function(){if(t){var u=a.current;return s(u),function(){i(u)}}},[t,s,i]),function(u){a.current=u}}var ri=function(t){var r=t.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},oi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ii(e){var t=e.children,r=e.lockEnabled,o=e.captureEnabled,n=o===void 0?!0:o,a=e.onBottomArrive,s=e.onBottomLeave,i=e.onTopArrive,u=e.onTopLeave,l=ti({isEnabled:n,onBottomArrive:a,onBottomLeave:s,onTopArrive:i,onTopLeave:u}),c=ni({isEnabled:r}),d=function(E){l(E),c(E)};return w(f.Fragment,null,r&&w("div",{onClick:ri,css:oi}),t(d))}var ai={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},ui=function(t){var r=t.name,o=t.onFocus;return w("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:ai,value:"",onChange:function(){}})},si=ui,li=function(t){return t.label},ci=function(t){return t.label},di=function(t){return t.value},pi=function(t){return!!t.isDisabled},fi={clearIndicator:Qr,container:zr,control:io,dropdownIndicator:Xr,group:lo,groupHeading:po,indicatorsContainer:Wr,indicatorSeparator:eo,input:go,loadingIndicator:ro,loadingMessage:$r,menu:Ir,menuList:Rr,menuPortal:jr,multiValue:Co,multiValueLabel:So,multiValueRemove:yo,noOptionsMessage:Lr,option:Io,placeholder:Vo,singleValue:Lo,valueContainer:_r},hi={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},mi=4,Rt=4,gi=38,vi=Rt*2,bi={baseUnit:Rt,controlHeight:gi,menuGutter:vi},Oe={borderRadius:mi,colors:hi,spacing:bi},xi={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ze(),captureMenuScroll:!Ze(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:Ko(),formatGroupLabel:li,getOptionLabel:ci,getOptionValue:di,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:pi,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!xr(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(t){var r=t.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function at(e,t,r,o){var n=Tt(e,t,r),a=Bt(e,t,r),s=$t(e,t),i=xe(e,t);return{type:"option",data:t,isDisabled:n,isSelected:a,label:s,value:i,index:o}}function kt(e,t){return e.options.map(function(r,o){if("options"in r){var n=r.options.map(function(s,i){return at(e,s,t,i)}).filter(function(s){return ut(e,s)});return n.length>0?{type:"group",data:r,options:n,index:o}:void 0}var a=at(e,r,t,o);return ut(e,a)?a:void 0}).filter(Sr)}function Lt(e){return e.reduce(function(t,r){return r.type==="group"?t.push.apply(t,ht(r.options.map(function(o){return o.data}))):t.push(r.data),t},[])}function Ei(e,t){return Lt(kt(e,t))}function ut(e,t){var r=e.inputValue,o=r===void 0?"":r,n=t.data,a=t.isSelected,s=t.label,i=t.value;return(!Ht(e)||!a)&&jt(e,{label:s,value:i,data:n},o)}function Ci(e,t){var r=e.focusedValue,o=e.selectValue,n=o.indexOf(r);if(n>-1){var a=t.indexOf(r);if(a>-1)return r;if(n<t.length)return t[n]}return null}function Si(e,t){var r=e.focusedOption;return r&&t.indexOf(r)>-1?r:t[0]}var $t=function(t,r){return t.getOptionLabel(r)},xe=function(t,r){return t.getOptionValue(r)};function Tt(e,t,r){return typeof e.isOptionDisabled=="function"?e.isOptionDisabled(t,r):!1}function Bt(e,t,r){if(r.indexOf(t)>-1)return!0;if(typeof e.isOptionSelected=="function")return e.isOptionSelected(t,r);var o=xe(e,t);return r.some(function(n){return xe(e,n)===o})}function jt(e,t,r){return e.filterOption?e.filterOption(t,r):!0}var Ht=function(t){var r=t.hideSelectedOptions,o=t.isMulti;return r===void 0?o:r},yi=1,zt=function(e){jn(r,e);var t=Nn(r);function r(o){var n;if(_n(this,r),n=t.call(this,o),n.state={ariaSelection:null,focusedOption:null,focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0},n.blockOptionHover=!1,n.isComposing=!1,n.commonProps=void 0,n.initialTouchX=0,n.initialTouchY=0,n.instancePrefix="",n.openAfterFocus=!1,n.scrollToFocusedOptionOnUpdate=!1,n.userIsDragging=void 0,n.controlRef=null,n.getControlRef=function(i){n.controlRef=i},n.focusedOptionRef=null,n.getFocusedOptionRef=function(i){n.focusedOptionRef=i},n.menuListRef=null,n.getMenuListRef=function(i){n.menuListRef=i},n.inputRef=null,n.getInputRef=function(i){n.inputRef=i},n.focus=n.focusInput,n.blur=n.blurInput,n.onChange=function(i,u){var l=n.props,c=l.onChange,d=l.name;u.name=d,n.ariaOnChange(i,u),c(i,u)},n.setValue=function(i,u,l){var c=n.props,d=c.closeMenuOnSelect,v=c.isMulti,E=c.inputValue;n.onInputChange("",{action:"set-value",prevInputValue:E}),d&&(n.setState({inputIsHiddenAfterUpdate:!v}),n.onMenuClose()),n.setState({clearFocusValueOnUpdate:!0}),n.onChange(i,{action:u,option:l})},n.selectOption=function(i){var u=n.props,l=u.blurInputOnSelect,c=u.isMulti,d=u.name,v=n.state.selectValue,E=c&&n.isOptionSelected(i,v),b=n.isOptionDisabled(i,v);if(E){var x=n.getOptionValue(i);n.setValue(v.filter(function(m){return n.getOptionValue(m)!==x}),"deselect-option",i)}else if(!b)c?n.setValue([].concat(ht(v),[i]),"select-option",i):n.setValue(i,"select-option");else{n.ariaOnChange(i,{action:"select-option",option:i,name:d});return}l&&n.blurInput()},n.removeValue=function(i){var u=n.props.isMulti,l=n.state.selectValue,c=n.getOptionValue(i),d=l.filter(function(E){return n.getOptionValue(E)!==c}),v=ce(u,d,d[0]||null);n.onChange(v,{action:"remove-value",removedValue:i}),n.focusInput()},n.clearValue=function(){var i=n.state.selectValue;n.onChange(ce(n.props.isMulti,[],null),{action:"clear",removedValues:i})},n.popValue=function(){var i=n.props.isMulti,u=n.state.selectValue,l=u[u.length-1],c=u.slice(0,u.length-1),d=ce(i,c,c[0]||null);n.onChange(d,{action:"pop-value",removedValue:l})},n.getValue=function(){return n.state.selectValue},n.cx=function(){for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return hr.apply(void 0,[n.props.classNamePrefix].concat(u))},n.getOptionLabel=function(i){return $t(n.props,i)},n.getOptionValue=function(i){return xe(n.props,i)},n.getStyles=function(i,u){var l=n.props.unstyled,c=fi[i](u,l);c.boxSizing="border-box";var d=n.props.styles[i];return d?d(c,u):c},n.getClassNames=function(i,u){var l,c;return(l=(c=n.props.classNames)[i])===null||l===void 0?void 0:l.call(c,u)},n.getElementId=function(i){return"".concat(n.instancePrefix,"-").concat(i)},n.getComponents=function(){return jo(n.props)},n.buildCategorizedOptions=function(){return kt(n.props,n.state.selectValue)},n.getCategorizedOptions=function(){return n.props.menuIsOpen?n.buildCategorizedOptions():[]},n.buildFocusableOptions=function(){return Lt(n.buildCategorizedOptions())},n.getFocusableOptions=function(){return n.props.menuIsOpen?n.buildFocusableOptions():[]},n.ariaOnChange=function(i,u){n.setState({ariaSelection:y({value:i},u)})},n.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),n.focusInput())},n.onMenuMouseMove=function(i){n.blockOptionHover=!1},n.onControlMouseDown=function(i){if(!i.defaultPrevented){var u=n.props.openMenuOnClick;n.state.isFocused?n.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&n.onMenuClose():u&&n.openMenu("first"):(u&&(n.openAfterFocus=!0),n.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},n.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!n.props.isDisabled){var u=n.props,l=u.isMulti,c=u.menuIsOpen;n.focusInput(),c?(n.setState({inputIsHiddenAfterUpdate:!l}),n.onMenuClose()):n.openMenu("first"),i.preventDefault()}},n.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(n.clearValue(),i.preventDefault(),n.openAfterFocus=!1,i.type==="touchend"?n.focusInput():setTimeout(function(){return n.focusInput()}))},n.onScroll=function(i){typeof n.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&Ee(i.target)&&n.props.onMenuClose():typeof n.props.closeMenuOnScroll=="function"&&n.props.closeMenuOnScroll(i)&&n.props.onMenuClose()},n.onCompositionStart=function(){n.isComposing=!0},n.onCompositionEnd=function(){n.isComposing=!1},n.onTouchStart=function(i){var u=i.touches,l=u&&u.item(0);l&&(n.initialTouchX=l.clientX,n.initialTouchY=l.clientY,n.userIsDragging=!1)},n.onTouchMove=function(i){var u=i.touches,l=u&&u.item(0);if(l){var c=Math.abs(l.clientX-n.initialTouchX),d=Math.abs(l.clientY-n.initialTouchY),v=5;n.userIsDragging=c>v||d>v}},n.onTouchEnd=function(i){n.userIsDragging||(n.controlRef&&!n.controlRef.contains(i.target)&&n.menuListRef&&!n.menuListRef.contains(i.target)&&n.blurInput(),n.initialTouchX=0,n.initialTouchY=0)},n.onControlTouchEnd=function(i){n.userIsDragging||n.onControlMouseDown(i)},n.onClearIndicatorTouchEnd=function(i){n.userIsDragging||n.onClearIndicatorMouseDown(i)},n.onDropdownIndicatorTouchEnd=function(i){n.userIsDragging||n.onDropdownIndicatorMouseDown(i)},n.handleInputChange=function(i){var u=n.props.inputValue,l=i.currentTarget.value;n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange(l,{action:"input-change",prevInputValue:u}),n.props.menuIsOpen||n.onMenuOpen()},n.onInputFocus=function(i){n.props.onFocus&&n.props.onFocus(i),n.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(n.openAfterFocus||n.props.openMenuOnFocus)&&n.openMenu("first"),n.openAfterFocus=!1},n.onInputBlur=function(i){var u=n.props.inputValue;if(n.menuListRef&&n.menuListRef.contains(document.activeElement)){n.inputRef.focus();return}n.props.onBlur&&n.props.onBlur(i),n.onInputChange("",{action:"input-blur",prevInputValue:u}),n.onMenuClose(),n.setState({focusedValue:null,isFocused:!1})},n.onOptionHover=function(i){n.blockOptionHover||n.state.focusedOption===i||n.setState({focusedOption:i})},n.shouldHideSelectedOptions=function(){return Ht(n.props)},n.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),n.focus()},n.onKeyDown=function(i){var u=n.props,l=u.isMulti,c=u.backspaceRemovesValue,d=u.escapeClearsValue,v=u.inputValue,E=u.isClearable,b=u.isDisabled,x=u.menuIsOpen,m=u.onKeyDown,g=u.tabSelectsValue,A=u.openMenuOnFocus,C=n.state,F=C.focusedOption,M=C.focusedValue,p=C.selectValue;if(!b&&!(typeof m=="function"&&(m(i),i.defaultPrevented))){switch(n.blockOptionHover=!0,i.key){case"ArrowLeft":if(!l||v)return;n.focusValue("previous");break;case"ArrowRight":if(!l||v)return;n.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(M)n.removeValue(M);else{if(!c)return;l?n.popValue():E&&n.clearValue()}break;case"Tab":if(n.isComposing||i.shiftKey||!x||!g||!F||A&&n.isOptionSelected(F,p))return;n.selectOption(F);break;case"Enter":if(i.keyCode===229)break;if(x){if(!F||n.isComposing)return;n.selectOption(F);break}return;case"Escape":x?(n.setState({inputIsHiddenAfterUpdate:!1}),n.onInputChange("",{action:"menu-close",prevInputValue:v}),n.onMenuClose()):E&&d&&n.clearValue();break;case" ":if(v)return;if(!x){n.openMenu("first");break}if(!F)return;n.selectOption(F);break;case"ArrowUp":x?n.focusOption("up"):n.openMenu("last");break;case"ArrowDown":x?n.focusOption("down"):n.openMenu("first");break;case"PageUp":if(!x)return;n.focusOption("pageup");break;case"PageDown":if(!x)return;n.focusOption("pagedown");break;case"Home":if(!x)return;n.focusOption("first");break;case"End":if(!x)return;n.focusOption("last");break;default:return}i.preventDefault()}},n.instancePrefix="react-select-"+(n.props.instanceId||++yi),n.state.selectValue=qe(o.value),o.menuIsOpen&&n.state.selectValue.length){var a=n.buildFocusableOptions(),s=a.indexOf(n.state.selectValue[0]);n.state.focusedOption=a[s]}return n}return Un(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ge(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(n){var a=this.props,s=a.isDisabled,i=a.menuIsOpen,u=this.state.isFocused;(u&&!s&&n.isDisabled||u&&i&&!n.menuIsOpen)&&this.focusInput(),u&&s&&!n.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!u&&!s&&n.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ge(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(n,a){this.props.onInputChange(n,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(n){var a=this,s=this.state,i=s.selectValue,u=s.isFocused,l=this.buildFocusableOptions(),c=n==="first"?0:l.length-1;if(!this.props.isMulti){var d=l.indexOf(i[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(u&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:l[c]},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(n){var a=this.state,s=a.selectValue,i=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var u=s.indexOf(i);i||(u=-1);var l=s.length-1,c=-1;if(s.length){switch(n){case"previous":u===0?c=0:u===-1?c=l:c=u-1;break;case"next":u>-1&&u<l&&(c=u+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,s=this.state.focusedOption,i=this.getFocusableOptions();if(i.length){var u=0,l=i.indexOf(s);s||(l=-1),n==="up"?u=l>0?l-1:i.length-1:n==="down"?u=(l+1)%i.length:n==="pageup"?(u=l-a,u<0&&(u=0)):n==="pagedown"?(u=l+a,u>i.length-1&&(u=i.length-1)):n==="last"&&(u=i.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:i[u],focusedValue:null})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Oe):y(y({},Oe),this.props.theme):Oe}},{key:"getCommonProps",value:function(){var n=this.clearValue,a=this.cx,s=this.getStyles,i=this.getClassNames,u=this.getValue,l=this.selectOption,c=this.setValue,d=this.props,v=d.isMulti,E=d.isRtl,b=d.options,x=this.hasValue();return{clearValue:n,cx:a,getStyles:s,getClassNames:i,getValue:u,hasValue:x,isMulti:v,isRtl:E,options:b,selectOption:l,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var n=this.state.selectValue;return n.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var n=this.props,a=n.isClearable,s=n.isMulti;return a===void 0?s:a}},{key:"isOptionDisabled",value:function(n,a){return Tt(this.props,n,a)}},{key:"isOptionSelected",value:function(n,a){return Bt(this.props,n,a)}},{key:"filterOption",value:function(n,a){return jt(this.props,n,a)}},{key:"formatOptionLabel",value:function(n,a){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,i=this.state.selectValue;return this.props.formatOptionLabel(n,{context:a,inputValue:s,selectValue:i})}else return this.getOptionLabel(n)}},{key:"formatGroupLabel",value:function(n){return this.props.formatGroupLabel(n)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var n=this.props,a=n.isDisabled,s=n.isSearchable,i=n.inputId,u=n.inputValue,l=n.tabIndex,c=n.form,d=n.menuIsOpen,v=n.required,E=this.getComponents(),b=E.Input,x=this.state,m=x.inputIsHidden,g=x.ariaSelection,A=this.commonProps,C=i||this.getElementId("input"),F=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":v,role:"combobox"},d&&{"aria-controls":this.getElementId("listbox"),"aria-owns":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?f.createElement(b,D({},A,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:C,innerRef:this.getInputRef,isDisabled:a,isHidden:m,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:l,form:c,type:"text",value:u},F)):f.createElement(Jo,D({id:C,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:ve,onFocus:this.onInputFocus,disabled:a,tabIndex:l,inputMode:"none",form:c,value:""},F))}},{key:"renderPlaceholderOrValue",value:function(){var n=this,a=this.getComponents(),s=a.MultiValue,i=a.MultiValueContainer,u=a.MultiValueLabel,l=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,v=this.commonProps,E=this.props,b=E.controlShouldRenderValue,x=E.isDisabled,m=E.isMulti,g=E.inputValue,A=E.placeholder,C=this.state,F=C.selectValue,M=C.focusedValue,p=C.isFocused;if(!this.hasValue()||!b)return g?null:f.createElement(d,D({},v,{key:"placeholder",isDisabled:x,isFocused:p,innerProps:{id:this.getElementId("placeholder")}}),A);if(m)return F.map(function(I,V){var j=I===M,N="".concat(n.getOptionLabel(I),"-").concat(n.getOptionValue(I));return f.createElement(s,D({},v,{components:{Container:i,Label:u,Remove:l},isFocused:j,isDisabled:x,key:N,index:V,removeProps:{onClick:function(){return n.removeValue(I)},onTouchEnd:function(){return n.removeValue(I)},onMouseDown:function(_){_.preventDefault()}},data:I}),n.formatOptionLabel(I,"value"))});if(g)return null;var O=F[0];return f.createElement(c,D({},v,{data:O,isDisabled:x}),this.formatOptionLabel(O,"value"))}},{key:"renderClearIndicator",value:function(){var n=this.getComponents(),a=n.ClearIndicator,s=this.commonProps,i=this.props,u=i.isDisabled,l=i.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||u||!this.hasValue()||l)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var n=this.getComponents(),a=n.LoadingIndicator,s=this.commonProps,i=this.props,u=i.isDisabled,l=i.isLoading,c=this.state.isFocused;if(!a||!l)return null;var d={"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:d,isDisabled:u,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator,s=n.IndicatorSeparator;if(!a||!s)return null;var i=this.commonProps,u=this.props.isDisabled,l=this.state.isFocused;return f.createElement(s,D({},i,{isDisabled:u,isFocused:l}))}},{key:"renderDropdownIndicator",value:function(){var n=this.getComponents(),a=n.DropdownIndicator;if(!a)return null;var s=this.commonProps,i=this.props.isDisabled,u=this.state.isFocused,l={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return f.createElement(a,D({},s,{innerProps:l,isDisabled:i,isFocused:u}))}},{key:"renderMenu",value:function(){var n=this,a=this.getComponents(),s=a.Group,i=a.GroupHeading,u=a.Menu,l=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,v=a.NoOptionsMessage,E=a.Option,b=this.commonProps,x=this.state.focusedOption,m=this.props,g=m.captureMenuScroll,A=m.inputValue,C=m.isLoading,F=m.loadingMessage,M=m.minMenuHeight,p=m.maxMenuHeight,O=m.menuIsOpen,I=m.menuPlacement,V=m.menuPosition,j=m.menuPortalTarget,N=m.menuShouldBlockScroll,T=m.menuShouldScrollIntoView,_=m.noOptionsMessage,k=m.onMenuScrollToTop,L=m.onMenuScrollToBottom;if(!O)return null;var H=function(B,Q){var J=B.type,q=B.data,G=B.isDisabled,ne=B.isSelected,ie=B.label,Yt=B.value,He=x===q,ze=G?void 0:function(){return n.onOptionHover(q)},Xt=G?void 0:function(){return n.selectOption(q)},Ne="".concat(n.getElementId("option"),"-").concat(Q),Kt={id:Ne,onClick:Xt,onMouseMove:ze,onMouseOver:ze,tabIndex:-1};return f.createElement(E,D({},b,{innerProps:Kt,data:q,isDisabled:G,isSelected:ne,key:Ne,label:ie,type:J,value:Yt,isFocused:He,innerRef:He?n.getFocusedOptionRef:void 0}),n.formatOptionLabel(B.data,"menu"))},U;if(this.hasOptions())U=this.getCategorizedOptions().map(function($){if($.type==="group"){var B=$.data,Q=$.options,J=$.index,q="".concat(n.getElementId("group"),"-").concat(J),G="".concat(q,"-heading");return f.createElement(s,D({},b,{key:q,data:B,options:Q,Heading:i,headingProps:{id:G,data:$.data},label:n.formatGroupLabel($.data)}),$.options.map(function(ne){return H(ne,"".concat(J,"-").concat(ne.index))}))}else if($.type==="option")return H($,"".concat($.index))});else if(C){var W=F({inputValue:A});if(W===null)return null;U=f.createElement(d,b,W)}else{var X=_({inputValue:A});if(X===null)return null;U=f.createElement(v,b,X)}var K={minMenuHeight:M,maxMenuHeight:p,menuPlacement:I,menuPosition:V,menuShouldScrollIntoView:T},ee=f.createElement(Mr,D({},b,K),function($){var B=$.ref,Q=$.placerProps,J=Q.placement,q=Q.maxHeight;return f.createElement(u,D({},b,K,{innerRef:B,innerProps:{onMouseDown:n.onMenuMouseDown,onMouseMove:n.onMenuMouseMove,id:n.getElementId("listbox")},isLoading:C,placement:J}),f.createElement(ii,{captureEnabled:g,onTopArrive:k,onBottomArrive:L,lockEnabled:N},function(G){return f.createElement(l,D({},b,{innerRef:function(ie){n.getMenuListRef(ie),G(ie)},isLoading:C,maxHeight:q,focusedOption:x}),U)}))});return j||V==="fixed"?f.createElement(c,D({},b,{appendTo:j,controlElement:this.controlRef,menuPlacement:I,menuPosition:V}),ee):ee}},{key:"renderFormField",value:function(){var n=this,a=this.props,s=a.delimiter,i=a.isDisabled,u=a.isMulti,l=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!i)return f.createElement(si,{name:l,onFocus:this.onValueInputFocus});if(!(!l||i))if(u)if(s){var v=d.map(function(x){return n.getOptionValue(x)}).join(s);return f.createElement("input",{name:l,type:"hidden",value:v})}else{var E=d.length>0?d.map(function(x,m){return f.createElement("input",{key:"i-".concat(m),name:l,type:"hidden",value:n.getOptionValue(x)})}):f.createElement("input",{name:l,type:"hidden",value:""});return f.createElement("div",null,E)}else{var b=d[0]?this.getOptionValue(d[0]):"";return f.createElement("input",{name:l,type:"hidden",value:b})}}},{key:"renderLiveRegion",value:function(){var n=this.commonProps,a=this.state,s=a.ariaSelection,i=a.focusedOption,u=a.focusedValue,l=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return f.createElement(Go,D({},n,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:i,focusedValue:u,isFocused:l,selectValue:c,focusableOptions:d}))}},{key:"render",value:function(){var n=this.getComponents(),a=n.Control,s=n.IndicatorsContainer,i=n.SelectContainer,u=n.ValueContainer,l=this.props,c=l.className,d=l.id,v=l.isDisabled,E=l.menuIsOpen,b=this.state.isFocused,x=this.commonProps=this.getCommonProps();return f.createElement(i,D({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:v,isFocused:b}),this.renderLiveRegion(),f.createElement(a,D({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:v,isFocused:b,menuIsOpen:E}),f.createElement(u,D({},x,{isDisabled:v}),this.renderPlaceholderOrValue(),this.renderInput()),f.createElement(s,D({},x,{isDisabled:v}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(n,a){var s=a.prevProps,i=a.clearFocusValueOnUpdate,u=a.inputIsHiddenAfterUpdate,l=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,v=n.options,E=n.value,b=n.menuIsOpen,x=n.inputValue,m=n.isMulti,g=qe(E),A={};if(s&&(E!==s.value||v!==s.options||b!==s.menuIsOpen||x!==s.inputValue)){var C=b?Ei(n,g):[],F=i?Ci(a,g):null,M=Si(a,C);A={selectValue:g,focusedOption:M,focusedValue:F,clearFocusValueOnUpdate:!1}}var p=u!=null&&n!==s?{inputIsHidden:u,inputIsHiddenAfterUpdate:void 0}:{},O=l,I=c&&d;return c&&!I&&(O={value:ce(m,g,g[0]||null),options:g,action:"initial-input-focus"},I=!d),(l==null?void 0:l.action)==="initial-input-focus"&&(O=null),y(y(y({},A),p),{},{prevProps:n,ariaSelection:O,prevWasFocused:I})}}]),r}(f.Component);zt.defaultProps=xi;var Fi=f.forwardRef(function(e,t){var r=Yn(e);return f.createElement(zt,D({ref:t},r))}),wi=Fi;const Di=S.p`
  display: none;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    z-index: 1;
    display: block;
    position: relative;
    top: -28px;
    left: -65px;
    color: rgba(239, 237, 232, 0.5);
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`,Oi=S.div`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: flex;
    gap: 16px;
  }
`,Ai=S.div`
  position: relative;
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,Ii=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  background-color: transparent;
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  &:focus {
    border: 1px solid ${({theme:e})=>e.color.orangeFirst};
    outline: none;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 236px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Mi=S.svg`
  position: absolute;
  right: 14px;
  top: 16px;
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
`,Pi=S.button`
  position: absolute;
  right: 36px;
  top: 16px;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  overflow: visible;
`,Vi=S.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,st=S.div`
  flex: 1;
  z-index: 2;
  background-color: transparent;
`,lt=S(wi)`
  text-align: left;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);
`,{QUERY:de,RECOMMENDED:pe,CATEGORY:Nt}=on,Ri={[de]:"",[Nt]:"",[pe]:""};function _t({onProductsChange:e}){const[t,r]=f.useState(Ri),[o,n]=f.useState(""),[a,s]=f.useState([]),i=ke(),{isSuccess:u,currentData:l,isFetching:c,isError:d,error:v}=rn();f.useEffect(()=>{i(Le({isLoading:c,isError:d,error:v}))},[i,v,d,c]),f.useEffect(()=>{if(u){const[p]=l,{productsCategories:O}=p;s(O)}},[l,u]),f.useEffect(()=>{e(t)},[t,e]);const E=()=>{n(""),r(p=>({...p,[de]:""}))},b=["All","Recommended","Not recommended"],[x,m]=f.useState(null),[g,A]=f.useState(null),C=p=>{r(O=>({...O,[de]:p.target.value.trim()})),n(p.target.value)},F=p=>{m(p),r(O=>({...O,[Nt]:p.label}))},M=p=>{switch(A(p),p.label){case"Recommended":r(O=>({...O,[pe]:[!0]}));break;case"Not recommended":r(O=>({...O,[pe]:[!1]}));break;default:r(O=>({...O,[pe]:null}))}};return h.jsx(h.Fragment,{children:h.jsxs(Oi,{children:[h.jsxs(Ai,{children:[h.jsx(Ii,{type:"text",value:t[de],onChange:C}),h.jsx(Mi,{width:"18",height:"18",children:h.jsx("use",{href:`${oe}#search`})}),o.trim()&&h.jsx(Pi,{onClick:E,children:h.jsx("svg",{width:"18",height:"18",children:h.jsx("use",{href:`${oe}#x-clean`})})})]}),h.jsxs(Vi,{children:[h.jsx(st,{children:h.jsx(lt,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"#040404",borderRadius:"12px"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"192px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"146px"}})},value:x,onChange:F,options:a.map(p=>({label:p.charAt(0).toUpperCase()+p.slice(1)})),placeholder:"Categories"})}),h.jsx(st,{children:h.jsx(lt,{styles:{option:p=>({...p,background:"#1C1C1C"}),control:p=>({...p,width:"100%",backgroundColor:"transparent",borderRadius:"12px",height:"44px",border:"0px solid rgba(239, 237, 232, 0.3)",boxShadow:"none","&:focus":{boxShadow:"none",borderColor:"#E6533C"}}),dropdownIndicator:p=>({...p,display:"none","@media (min-width: 768px)":{display:"flex",justifyContent:"flex-end",color:"#efede8"}}),menu:p=>({...p,background:"none",border:"none"}),menuList:p=>({...p,maxHeight:"228px",borderRadius:"12px"}),indicatorSeparator:p=>({...p,display:"none"}),placeholder:p=>({...p,color:"#efede8"}),singleValue:p=>({...p,color:"#efede8",justifyContent:"center"}),container:p=>({...p,display:"flex",alignItems:"center","&:focus":{border:"1px solid #E6533C"},border:"1px",height:"46px","@media (min-width: 768px)":{height:"52px",width:"204px"}}),input:p=>({...p,fontSize:"14px"}),valueContainer:p=>({...p,"@media (min-width: 768px)":{width:"195px"}})},value:g,onChange:M,options:b.map(p=>({label:p})),placeholder:"All"})})]}),h.jsx(Di,{children:"Filters"})]})})}_t.propTypes={onProductsChange:P.func.isRequired};const ki=S.div`
  position: relative;
  width: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 171px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 244px;
  }
`,Li=S.p`
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
  }
`,$i=S.div`
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.color.white};
    transition:
      stroke 300ms ease-in-out,
      transform 300ms ease-in-out;

    @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      width: 20px;
      height: 20px;
    }
  }
`;function Ut({selectedDate:e,setSelectedDate:t}){const r=pt(e,"dd.MM.yyyy");return h.jsx(mn,{maxDate:new Date,onChange:t,value:e,children:h.jsxs(ki,{children:[h.jsx(Li,{children:r}),h.jsx($i,{children:h.jsx(an,{name:"calendar"})})]})})}Ut.propTypes={selectedDate:P.instanceOf(Date).isRequired,setSelectedDate:P.func.isRequired};const Ti=S.div`
  padding: 48px 24px;

  width: 280px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 320px;
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 48px 32px;
    width: auto;
  }
`,Bi=S.div`
  position: relative;
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 415px;
  }
`,ji=S.input`
  width: 100%;
  text-align: left;
  padding: 8px 14px;
  border-radius: 12px;
  margin-bottom: 16px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};
  background-color: transparent;
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${({theme:e})=>e.color.grayFirst};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
    width: 244px;
    margin-right: 16px;

    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Hi=S.div`
  margin-bottom: 16px;
  display: flex;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    display: inline-block;
  }
`,zi=S.input`
  width: 100%;

  &::-webkit-inner-spin-button {
    appearance: none;
  }

  text-align: left;
  padding: 8px 14px 8px 14px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.orangeFirst};
  background: rgba(0, 0, 0, 0.5);
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 155px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Ni=S.span`
  position: absolute;
  right: 16px;
  top: 59px;

  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    right: 16px;
    top: 12px;
  }
`,_i=S.div`
  display: flex;
`,Ui=S.p`
  color: ${({theme:e})=>e.color.grayThird};
  font-size: 12px;
  line-height: calc(18 / 12);
  margin-right: 4px;
`,Wi=S.span`
  font-size: 12px;
  line-height: calc(18 / 12);
`,qi=S.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    justify-content: flex-start;
  }
`,Gi=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 64px;
  }
`,Zi=S.button`
  padding: 12px 22px;
  border: none;
  color: ${({theme:e})=>e.color.white};

  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }
  
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 28px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Yi=S.button`
  padding: 12px 26px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayFirst};
  background: transparent;
  color: ${({theme:e})=>e.color.white};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    padding: 12px 32px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 142px;
    padding: 14px 32px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Wt(e){const[t,r]=f.useState(new Date),o=ke(),{onClose:n,addProdSuccess:a,addProdError:s,product:i}=e,{weight:u,calories:l,_id:c,title:d}=i,[v,E]=f.useState(u),b=v*l/100,[x,{isLoading:m,isError:g,error:A}]=un(),C={product_ID:c,date:pt(new Date(t),"yyyy-MM-dd"),amount:v,calories:b};f.useEffect(()=>{o(Le({isLoading:m,isError:g,error:A}))},[o,A,g,m]);const F=async()=>{const{error:M}=await x(C);M?s(M.data.message):(n(),a(b))};return h.jsxs(Ti,{children:[h.jsxs(Bi,{children:[h.jsx(ji,{type:"text",value:d,readOnly:!0,disabled:!0}),h.jsxs(Hi,{children:[h.jsx(zi,{type:"number",value:v,onChange:M=>E(M.target.value)}),h.jsx(Ni,{children:"grams"})]})]}),h.jsxs(Gi,{children:[h.jsx(Ut,{selectedDate:t,setSelectedDate:r}),h.jsxs(_i,{children:[h.jsx(Ui,{children:"Calories:"}),h.jsx(Wi,{children:b})]})]}),h.jsxs(qi,{children:[h.jsx(Zi,{onClick:F,children:"Add to diary"}),h.jsx(Yi,{onClick:n,children:"Cancel"})]})]})}Wt.propTypes={onClose:P.func.isRequired,addProdSuccess:P.func.isRequired,addProdError:P.func.isRequired,product:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,_id:P.string.isRequired,title:P.string.isRequired}).isRequired};const Xi="/fs-79-react-node-DmytroZhdanov/assets/avocado-b622cf8b.png",Ki=S.div`
  margin: 12px 70px;
  text-align: center;
  width: 157px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin: 22px 111px;
  }
`,Qi=S.div`
  background: url(${Xi}) no-repeat center center;
  background-size: cover;
  display: inline-block;
  width: 123px;
  height: 97px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 19px;
  }
`,Ji=S.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  line-height: calc(32 / 24);
`,ea=S.div`
  justify-content: center;
  display: flex;
  margin-bottom: 24px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 32px;
  }
`,ta=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,na=S.span`
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ra=S.button`
  width: 157px;
  padding: 12px 32px;
  margin-bottom: 16px;
  border: none;
  color: ${({theme:e})=>e.color.white};
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  background: ${({theme:e})=>e.color.orangeFirst};
  line-height: calc(18 / 16);
  transition:
    color 300ms ease-in-out,
    background 300ms ease-in-out;

  :hover {
    color: ${({theme:e})=>e.color.hoverBorder};
    background: ${({theme:e})=>e.color.white};
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding: 14px 32px;
    line-height: calc(24 / 16);
  }
`,oa=S(sn)`
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
  
  svg {
    stroke: ${({theme:e})=>e.color.grayFirst};
    transition: stroke 300ms ease-in-out;
  }

  :hover p,
  :hover svg {
    color: ${({theme:e})=>e.color.white};
    stroke: ${({theme:e})=>e.color.white};
  }
`,ia=S.p`
  margin-right: 8px;
  transition: color 300ms ease-in-out;
`;function qt({onClose:e,totalCalories:t}){return h.jsxs(Ki,{children:[h.jsx(Qi,{}),h.jsx(Ji,{children:"Well Done"}),h.jsxs(ea,{children:[h.jsx(ta,{children:"Calories:"}),h.jsx(na,{children:t})]}),h.jsx(ra,{onClick:e,children:"Next product"}),h.jsxs(oa,{to:`/${ln.DIARY}`,children:[h.jsx(ia,{children:"To the diary"}),h.jsx("svg",{width:"16",height:"16",children:h.jsx("use",{href:oe+"#arrow-add-prod"})})]})]})}qt.propTypes={totalCalories:P.number,onClose:P.func.isRequired};const aa=S.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.color.grayDisabled};
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.mobile}) {
    width: 335px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 405px;
  }
`,ua=S.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 27px;
`,sa=S.p`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: ${({theme:e})=>e.color.grayFourth};
  color: ${({theme:e})=>e.color.fullWhite};
  font-size: 12px;
  font-weight: 700;
`,la=S.div`
  display: flex;
  align-items: center;
`,ca=S.div`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({recommended:e,theme:t})=>e?t.color.circleGreen:t.color.circleRed};
`,da=S.p`
  margin-right: 16px;
  font-size: 12px;
  line-height: calc(18 / 12);
`,pa=S.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`,fa=S.p`
  margin-right: 8px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);
`,ha=S.svg`
  width: 16px;
  height: 16px;
`,ma=S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`,ga=S.svg`
  width: 24px;
  height: 24px;
`,va=S.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  line-height: calc(24 / 20);

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`,ba=S.div`
  display: flex;
  gap: 16px;
`,Ae=S.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: calc(18 / 12);
  text-transform: capitalize;

  ${e=>e.category&&{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}
`,Ie=S.span`
  color: ${({theme:e})=>e.color.white};
  padding-left: 8px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-left: 4px;
  }
`;function Gt({props:e,userGroupBlood:t}){const{weight:r,calories:o,category:n,title:a,groupBloodNotAllowed:s}=e,i=!s[t],[u,l]=f.useState(!1),[c,d]=f.useState(!1),[v,E]=f.useState(!1),[b,x]=f.useState(null),[m,g]=f.useState(""),A=()=>{l(!0)},C=()=>{l(!1),d(!1),E(!1)},F=p=>{d(!0),x(p)},M=p=>{E(!0),g(p)};return h.jsxs(h.Fragment,{children:[h.jsxs(aa,{children:[h.jsxs(ua,{children:[h.jsx(sa,{children:"DIET"}),h.jsxs(la,{children:[h.jsx(ca,{recommended:i}),h.jsx(da,{children:i?"Recommended":"Not recommended"}),h.jsxs(pa,{onClick:A,children:[h.jsx(fa,{children:"Add"}),h.jsx(ha,{children:h.jsx("use",{href:`${oe}#arrow-add-prod-orange`})})]})]})]}),h.jsxs(ma,{children:[h.jsx(ga,{children:h.jsx("use",{href:`${oe}#run-man`})}),h.jsx(va,{children:a})]}),h.jsxs(ba,{children:[h.jsxs(Ae,{children:["Calories:",h.jsx(Ie,{children:o})]}),h.jsxs(Ae,{category:!0,children:["Category:",h.jsx(Ie,{children:n})]}),h.jsxs(Ae,{children:["Weight:",h.jsx(Ie,{children:r})]})]})]}),h.jsx(Ce,{onClose:C,onShow:u,children:h.jsx(Wt,{onClose:C,addProdSuccess:F,product:e,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:c,children:h.jsx(qt,{onClose:C,totalCalories:b,addProdError:M})}),h.jsx(Ce,{onClose:C,onShow:v,children:h.jsx(cn,{message:m,onClose:C})})]})}Gt.propTypes={props:P.shape({weight:P.number.isRequired,calories:P.number.isRequired,category:P.string.isRequired,title:P.string.isRequired,groupBloodNotAllowed:P.object.isRequired}).isRequired,userGroupBlood:P.number};const xa=S.ul`
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    height: 660px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;

    overflow-y: scroll;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 850px;
    height: 487px;
  }
`,Ea=S.p`
  margin-bottom: 16px;
  color: ${({theme:e})=>e.color.grayFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    width: 580px;
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`,Ca=S.span`
  color: #e6533c;
`,Sa=S.span`
  margin-top: 16px;
  color: ${({theme:e})=>e.color.orangeFirst};
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }
`;function Zt({filter:e}){const[t,r]=f.useState([]),[o,n]=f.useState(null),[a,s]=f.useState(null),[i,u]=f.useState(1),[l,c]=f.useState(!0),d=f.useRef(),v=ke(),[E,{isLoading:b,isError:x,error:m}]=dn(),{isSuccess:g,data:A,isLoading:C,isError:F,error:M}=pn(),{ref:p}=hn({onChange:O=>{O&&l&&u(I=>I+1)}});return f.useEffect(()=>{v(Le({isLoading:b||C,isError:x||F,error:m||M}))},[v,x,b,F,C,m,M]),f.useEffect(()=>{g&&n(A)},[g,A]),f.useEffect(()=>{d.current&&(d.current.scrollTop=0),u(1),c(!0),s(e)},[e,p]),f.useEffect(()=>{l&&a&&(async()=>{try{const I=await E({page:i,...a}).unwrap();I.data.length<18&&c(!1),r(i===1?[...I.data]:V=>[...V,...I.data])}catch(I){console.error("Error fetching data:",I.message)}})()},[E,i,a,l]),h.jsx(h.Fragment,{children:t.length>0?h.jsx(xa,{ref:d,children:t.map((O,I)=>h.jsx("li",{ref:I===t.length-1?p:null,children:h.jsx(Gt,{props:O,userGroupBlood:o},O._id)},I))}):h.jsxs(h.Fragment,{children:[h.jsxs(Ea,{children:[h.jsx(Ca,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),h.jsx(Sa,{children:"Try changing the search parameters."})]})})}Zt.propTypes={filter:P.shape({title:P.string.isRequired,category:P.string.isRequired,recommended:P.oneOfType([P.oneOf([""]),P.arrayOf(P.oneOf([!0,!1]))])})};const ya={Alcoholicdrinks:`url(${En})`,Berries:`url(${Cn})`,Cereals:`url(${Sn})`,Dairy:`url(${yn})`,Driedfruits:`url(${Fn})`,Eggs:`url(${wn})`,Fish:`url(${Dn})`,Flour:`url(${On})`,Fruits:`url(${An})`,Meat:`url(${In})`,Mushrooms:`url(${Mn})`,Nuts:`url(${Pn})`,Oilsandfats:`url(${Vn})`,Poppy:`url(${Rn})`,Sausage:`url(${kn})`,Seeds:`url(${Ln})`,Sesame:`url(${$n})`,Softdrinks:`url(${Tn})`,Vegetablesandherbs:`url(${Bn})`},Fa=S.div`
  position: absolute;
  top: -72px;
  right: -76px;
  width: 428px;
  height: 716px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: linear-gradient(90deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
    linear-gradient(180deg, #040404 1.1%, rgba(4, 4, 4, 0) 50.79%),
    ${e=>ya[e==null?void 0:e.filter]||`image-set(
    url(${vn}) 1x,
    url(${bn}) 2x,
      url(${xn}) 3x)`},
    no-repeat;
  background-size: 428px 716px;
`,wa=S.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    gap: 32px;
    margin-top: 72px;
  }

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    margin-top: 72px;
    flex-direction: row;
    justify-content: space-between;
  }
`;function Ma(){const[e,t]=f.useState(null),[r,o]=f.useState(window.innerWidth>=1440),n=()=>{o(window.innerWidth>=1440)};return f.useEffect(()=>(window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[]),h.jsxs(h.Fragment,{children:[r&&h.jsx(Fa,{filter:e==null?void 0:e.category.split(" ").join("")}),h.jsxs(wa,{children:[h.jsx(fn,{text:"Products"}),h.jsx(_t,{onProductsChange:t})]}),h.jsx(Zt,{filter:e})]})}export{Ma as Products};
