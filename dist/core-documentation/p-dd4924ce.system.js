var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="core-documentation";var a=window;var i=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var s=!!i.documentElement.attachShadow;var l=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var f=new WeakMap;var u=function(e){return f.get(e)};var c=e("r",function(e,t){return f.set(t.$lazyInstance$=e,t)});var $=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return f.set(e,t)}};var v=function(e,t){return t in e};var h=function(e){return console.error(e)};var d=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},h)};var m=new Map;var p=a.__stencil_cssshim;var y=0;var g=false;var w=[];var b=[];var _=[];var S=function(e){return function(t){e.push(t);if(!g){g=true;o.raf(R)}}};var x=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){h(e)}}e.length=0};var k=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){h(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var R=function(){y++;x(w);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(y*(1/22)):Infinity;k(b,e);k(_,e);if(b.length>0){_.push.apply(_,b);b.length=0}if(g=w.length+b.length+_.length>0){o.raf(R)}else{y=0}};var E=S(b);var j={};var C=function(e){return e!=null};var L=function(e){return e.toLowerCase()};var N=function(e){return["object","function"].includes(typeof e)};function P(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var O=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var A=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,o;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});o=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));I(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:s.sent();s.label=3;case 3:return[2,o.href]}})})});var I=function(e){var t=P(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var o=new URL(n,e).href;var s=r.get(o);if(!s){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise(function(e){l.onload=function(){e(a[t].m);l.remove()}});r.set(o,s);i.head.appendChild(l)}return s}}};var U="hydrated";var z=new WeakMap;var M=function(e,t,r){var n=m.get(e);if(l&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}m.set(e,n)};var B=function(e,t,r,n){var a=H(t);var o=m.get(a);e=e.nodeType===11?e:i;if(o){if(typeof o==="string"){e=e.head||e;var s=z.get(e);var l=void 0;if(!s){z.set(e,s=new Set)}if(!s.has(a)){{if(p){l=p.createHostStyle(n,a,o);var f=l["s-sc"];if(f){a=f;s=null}}else{l=i.createElement("style");l.innerHTML=o}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([o])}}return a};var T=function(e,t,r){var n=B(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t.$tagName$,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var H=function(e,t){return"sc-"+e};var q=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!N(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}o=i}}};f(r);if(t){{s=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,l,W)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=s}return c});var V=e("H",{});var W={forEach:function(e,t){return e.map(F).forEach(t)},map:function(e,t){return e.map(F).map(t).map(G)}};var F=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var G=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var Q=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var s=D(r);var l=D(e.className).filter(function(e){return!s.includes(e)});e.className=l.concat(D(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!v(e,t)){if(v(e,L(t))){t=L(t.substring(2))}else{t=L(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var u=v(e,t);var c=N(n);if((u||c&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!c){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var D=function(e){return!e?[]:e.split(" ")};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||j;var o=t.$attrs$||j;{for(n in i){if(o[n]==null&&i[n]!=null){Q(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){Q(a,n,i[n],o[n],r,t.$flags$)}};var K;var X;var Y=false;var Z=function(e,t,r,n){var a=t.$children$[r];var o=0;var s;var l;if(C(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else{s=a.$elm$=i.createElement(a.$tag$);{J(null,a,Y)}if(C(K)&&s["s-si"]!==K){s.classList.add(s["s-si"]=K)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=Z(e,a,o);if(l){s.appendChild(l)}}}}return a.$elm$};var ee=function(e,t,r,n,a,i){var o=e;var s;if(o.shadowRoot&&L(o.tagName)===X){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=Z(null,r,a);if(s){n[a].$elm$=s;o.insertBefore(s,t)}}}};var te=function(e,t,r,n){for(;t<=r;++t){if(C(e[t])){n=e[t].$elm$;ie(e[t],true);n.remove()}}};var re=function(e,t,r,n){var a=0;var i=0;var o=0;var s=0;var l=t.length-1;var f=t[0];var u=t[l];var c=n.length-1;var $=n[0];var v=n[c];var h;var d;while(a<=l&&i<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--l]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ne(f,$)){ae(f,$);f=t[++a];$=n[++i]}else if(ne(u,v)){ae(u,v);u=t[--l];v=n[--c]}else if(ne(f,v)){ae(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(ne(u,$)){ae(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--l];$=n[++i]}else{o=-1;{for(s=a;s<=l;++s){if(t[s]&&C(t[s].$key$)&&t[s].$key$===$.$key$){o=s;break}}}if(o>=0){d=t[o];if(d.$tag$!==$.$tag$){h=Z(t&&t[i],r,o)}else{ae(d,$);t[o]=undefined;h=d.$elm$}$=n[++i]}else{h=Z(t&&t[i],r,i);$=n[++i]}if(h){{f.$elm$.parentNode.insertBefore(h,f.$elm$)}}}}if(a>l){ee(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){te(t,a,l)}};var ne=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var ae=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!C(t.$text$)){{{J(e,t,Y)}}if(C(n)&&C(a)){re(r,n,t,a)}else if(C(a)){if(C(e.$text$)){r.textContent=""}ee(r,null,t,a,0,a.length-1)}else if(C(n)){te(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ie=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ie(e,t)})}};var oe=function(e){return e&&e.$tag$===V};var se=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};X=L(e.tagName);if(oe(n)){n.$tag$=null}else{n=q(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{K=e["s-sc"]}ae(a,n)};var le=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){{t.$flags$|=16}r=t.$lazyInstance$;{E(function(){return fe(e,t,n,r,a)})}return[2]})})};var fe=function(e,t,r,n,a){{t.$flags$&=~16}if(a){T(e,r,t.$modeName$)}{{t.$flags$|=4;try{se(e,t,r,n.render())}catch(e){h(e)}t.$flags$&=~4}}if(p){p.updateHost(e)}{t.$flags$|=2}ue(e,t)};var ue=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(U)}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(U);{setTimeout(function(){return o.$flags$|=2},999)}}}}};var ce=function(e){if((o.$flags$&1)===0){var t=u(e);if(p){p.removeHost(e)}var r=t.$lazyInstance$}};var $e=function(e,t){if(e!=null&&!N(e)){if(t&1){return String(e)}return e}return e};var ve=function(e,t){return u(e).$instanceValues$.get(t)};var he=function(e,t,r,n){var a=u(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var s=a.$flags$;r=$e(r,n.$members$[t][0]);if(r!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((s&(4|2|16))===2){le(i,a,n,false)}}}};var de=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ve(this,n)},set:function(e){he(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var me=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,function(){var r,i,s;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,d(a)];case 1:o=l.sent();if(!o.isProxied){de(o,a,2);o.isProxied=true}{n.$flags$|=8}try{new o(n)}catch(e){h(e)}{n.$flags$&=~8}pe(n.$lazyInstance$);if(!(!o.isStyleRegistered&&o.style))return[3,4];r=o.style;i=H(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:M(i,r,!!(a.$flags$&1));o.isStyleRegistered=true;l.label=4;case 4:s=n.$ancestorComponent$;{le(e,n,a,true)}return[2]}})})};var pe=function(e){};var ye=function(e,t){if((o.$flags$&1)===0){var r=u(e);if(!(r.$flags$&1)){r.$flags$|=1;if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{me(e,r,t)}}pe(r.$lazyInstance$)}};var ge=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var l=i.head;var f=a.customElements;var c=l.querySelector("meta[charset]");var v=i.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!s&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;$(t);if(a.$flags$&1){if(s){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){ye(this,a)};t.prototype.disconnectedCallback=function(){ce(this)};t.prototype["s-init"]=function(){var e=u(this);if(e.$lazyInstance$){ue(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=u(this);le(this,e,a,false)}};t.prototype.componentOnReady=function(){return u(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,de(o,a,1))}})});v.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";v.setAttribute("data-styles","");l.insertBefore(v,c?c.nextSibling:l.firstChild)})}}});