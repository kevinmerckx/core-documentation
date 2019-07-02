var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function o(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,o)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="core-documentation";var a=window;var i=document;var s={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var o=!!i.documentElement.attachShadow;var l=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var f=new WeakMap;var $=function(e){return f.get(e)};var u=e("r",function(e,t){return f.set(t.$lazyInstance$=e,t)});var c=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return f.set(e,t)}};var v=function(e,t){return t in e};var d=function(e){return console.error(e)};var h=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},d)};var m=new Map;var g=a.__stencil_cssshim;var p=0;var y=false;var b=[];var w=[];var _=[];var S=function(e){return function(t){e.push(t);if(!y){y=true;s.raf(N)}}};var R=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){d(e)}}e.length=0};var x=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){d(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var N=function(){p++;R(b);var e=(s.$flags$&6)===2?performance.now()+7*Math.ceil(p*(1/22)):Infinity;x(w,e);x(_,e);if(w.length>0){_.push.apply(_,w);w.length=0}if(y=b.length+w.length+_.length>0){s.raf(N)}else{p=0}};var k=S(w);var T={};var C=function(e){return e!=null};var E=function(e){return e.toLowerCase()};var j=function(e){return["object","function"].includes(typeof e)};function L(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var A=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,s;return __generator(this,function(o){switch(o.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});s=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));O(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:o.sent();o.label=3;case 3:return[2,s.href]}})})});var O=function(e){var t=L(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var s=new URL(n,e).href;var o=r.get(s);if(!o){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+s+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise(function(e){l.onload=function(){e(a[t].m);l.remove()}});r.set(s,o);i.head.appendChild(l)}return o}}};var B="hydrated";var z=new WeakMap;var I=function(e,t,r){var n=m.get(e);if(l&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}m.set(e,n)};var U=function(e,t,r,n){var a=H(t);var s=m.get(a);e=e.nodeType===11?e:i;if(s){if(typeof s==="string"){e=e.head||e;var o=z.get(e);var l=void 0;if(!o){z.set(e,o=new Set)}if(!o.has(a)){{if(g){l=g.createHostStyle(n,a,s);var f=l["s-sc"];if(f){a=f;o=null}}else{l=i.createElement("style");l.innerHTML=s}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([s])}}return a};var M=function(e,t,r){var n=U(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t.$tagName$,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var H=function(e,t){return"sc-"+e};var q=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o;var l;var f=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!j(a)){a=String(a)}if(i&&s){f[f.length-1].$text$+=a}else{f.push(i?{$flags$:0,$text$:a}:a)}s=i}}};$(r);if(t){{o=t.key||undefined}{l=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,f,W)}var c={$flags$:0,$tag$:e,$children$:f.length>0?f:null,$elm$:undefined,$attrs$:t};{c.$key$=o}{c.$name$=l}return c});var V=e("H",{});var W={forEach:function(e,t){return e.map(F).forEach(t)},map:function(e,t){return e.map(F).map(t).map(D)}};var F=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var D=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var G=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var o=Q(r);var l=Q(e.className).filter(function(e){return!o.includes(e)});e.className=l.concat(Q(n).filter(function(e){return!l.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!v(e,t)){if(v(e,E(t))){t=E(t.substring(2))}else{t=E(t[2])+t.substring(3)}if(r){s.rel(e,t,r,false)}if(n){s.ael(e,t,n,false)}}else{var $=v(e,t);var u=j(n);if(($||u&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!$||i&4||a)&&!u){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var Q=function(e){return!e?[]:e.split(" ")};var J=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||T;var s=t.$attrs$||T;{for(n in i){if(s[n]==null&&i[n]!=null){G(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){G(a,n,i[n],s[n],r,t.$flags$)}};var K;var X;var Y;var Z=false;var ee=false;var te=false;var re=false;var ne=function(e,t,r,n){var a=t.$children$[r];var s=0;var o;var l;var f;if(!Z){te=true;if(a.$tag$==="slot"){if(K){n.classList.add(K+"-s")}if(!a.$children$){a.$flags$|=1}else{a.$flags$|=2}}}if(C(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else if(a.$flags$&1){a.$elm$=i.createTextNode("")}else{o=a.$elm$=i.createElement(a.$flags$&2?"slot-fb":a.$tag$);{J(null,a,re)}if(C(K)&&o["s-si"]!==K){o.classList.add(o["s-si"]=K)}if(a.$children$){for(s=0;s<a.$children$.length;++s){l=ne(e,a,s,o);if(l){o.appendChild(l)}}}}{a.$elm$["s-hn"]=Y;if(a.$flags$&(2|1)){a.$elm$["s-sr"]=true;a.$elm$["s-cr"]=X;a.$elm$["s-sn"]=a.$name$||"";f=e&&e.$children$&&e.$children$[r];if(f&&f.$tag$===a.$tag$&&e.$elm$){ae(e.$elm$,false)}}}return a.$elm$};var ae=function(e,t){s.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==Y&&a["s-ol"]){$e(a).insertBefore(a,fe(a));a["s-ol"].remove();a["s-ol"]=undefined;te=true}if(t){ae(a,t)}}s.$flags$&=~1};var ie=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&E(s.tagName)===Y){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=ne(null,r,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,fe(t))}}}};var se=function(e,t,r,n){for(;t<=r;++t){if(C(e[t])){n=e[t].$elm$;he(e[t],true);{ee=true;if(n["s-ol"]){n["s-ol"].remove()}else{ae(n,true)}}n.remove()}}};var oe=function(e,t,r,n){var a=0;var i=0;var s=0;var o=0;var l=t.length-1;var f=t[0];var $=t[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=t[++a]}else if($==null){$=t[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(le(f,c)){ue(f,c);f=t[++a];c=n[++i]}else if(le($,v)){ue($,v);$=t[--l];v=n[--u]}else if(le(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){ae(f.$elm$.parentNode,false)}ue(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=t[++a];v=n[--u]}else if(le($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){ae($.$elm$.parentNode,false)}ue($,c);e.insertBefore($.$elm$,f.$elm$);$=t[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(t[o]&&C(t[o].$key$)&&t[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=t[s];if(h.$tag$!==c.$tag$){d=ne(t&&t[i],r,s,e)}else{ue(h,c);t[s]=undefined;d=h.$elm$}c=n[++i]}else{d=ne(t&&t[i],r,i,e);c=n[++i]}if(d){{$e(f.$elm$).insertBefore(d,fe(f.$elm$))}}}}if(a>l){ie(e,n[u+1]==null?null:n[u+1].$elm$,r,n,i,u)}else if(i>u){se(t,a,l)}};var le=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}return true}return false};var fe=function(e){return e&&e["s-ol"]||e};var $e=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ue=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;if(!C(t.$text$)){{if(t.$tag$==="slot");else{J(e,t,re)}}if(C(n)&&C(a)){oe(r,n,t,a)}else if(C(a)){if(C(e.$text$)){r.textContent=""}ie(r,null,t,a,0,a.length-1)}else if(C(n)){se(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ce=function(e,t,r,n,a,i,s,o){r=e.childNodes;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}ce(t)}}};var ve=[];var de=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(r=t.length;n<r;n++){s=t[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!ve.some(function(e){return e.nodeToRelocate===o})){ee=true;o["s-sn"]=f;ve.push({slotRefNode:s,nodeToRelocate:o})}}}}}if(s.nodeType===1){de(s)}}};var he=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){he(e,t)})}};var me=function(e){return e&&e.$tag$===V};var ge=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};Y=E(e.tagName);if(me(n)){n.$tag$=null}else{n=q(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{K=e["s-sc"]}{X=e["s-cr"];Z=o&&(r.$flags$&1)!==0;te=ee=false}ue(a,n);{if(te){de(n.$elm$);for(var l=0;l<ve.length;l++){var f=ve[l];if(!f.nodeToRelocate["s-ol"]){var $=i.createTextNode("");$["s-nr"]=f.nodeToRelocate;f.nodeToRelocate.parentNode.insertBefore(f.nodeToRelocate["s-ol"]=$,f.nodeToRelocate)}}s.$flags$|=1;for(var l=0;l<ve.length;l++){var f=ve[l];var u=f.slotRefNode.parentNode;var c=f.slotRefNode.nextSibling;var $=f.nodeToRelocate["s-ol"];while($=$.previousSibling){var v=$["s-nr"];if(v&&v){if(v["s-sn"]===f.nodeToRelocate["s-sn"]){if(u===v.parentNode){if((v=v.nextSibling)&&v&&!v["s-nr"]){c=v;break}}}}}if(!c&&u!==f.nodeToRelocate.parentNode||f.nodeToRelocate.nextSibling!==c){if(f.nodeToRelocate!==c){u.insertBefore(f.nodeToRelocate,c)}}}s.$flags$&=~1}if(ee){ce(n.$elm$)}ve.length=0}};var pe=function(e,t){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:if(!(e&&e[t]))return[3,4];n.label=1;case 1:n.trys.push([1,3,,4]);return[4,e[t]()];case 2:n.sent();return[3,4];case 3:r=n.sent();d(r);return[3,4];case 4:return[2]}})})};var ye=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(i){{t.$flags$|=16}r=t.$lazyInstance$;{k(function(){return be(e,t,n,r,a)})}return[2]})})};var be=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){M(e,r,t.$modeName$)}{{t.$flags$|=4;try{ge(e,t,r,n.render())}catch(e){d(e)}t.$flags$&=~4}}if(g){g.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}we(e,t)};var we=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(B)}{pe(n,"componentDidLoad")}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(B);{setTimeout(function(){return s.$flags$|=2},999)}}}if(a){if(r=a["s-al"]){r.delete(e);if(r.size===0){a["s-al"]=undefined;a["s-init"]()}}t.$ancestorComponent$=undefined}}};var _e=function(e){if((s.$flags$&1)===0){var t=$(e);if(g){g.removeHost(e)}var r=t.$lazyInstance$}};var Se=function(e,t){if(e!=null&&!j(e)){if(t&1){return String(e)}return e}return e};var Re=function(e,t){return $(e).$instanceValues$.get(t)};var xe=function(e,t,r,n){var a=$(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var o=a.$flags$;r=Se(r,n.$members$[t][0]);if(r!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((o&(4|2|16))===2){ye(i,a,n,false)}}}};var Ne=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Re(this,n)},set:function(e){xe(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=$(this);return r.$onReadyPromise$.then(function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)})}})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var ke=function(e,n,a,i,s){return __awaiter(r,void 0,void 0,function(){var r,i,o;return __generator(this,function(l){switch(l.label){case 0:if(!((n.$flags$&256)===0))return[3,4];n.$flags$|=256;return[4,h(a)];case 1:s=l.sent();if(!s.isProxied){Ne(s,a,2);s.isProxied=true}{n.$flags$|=8}try{new s(n)}catch(e){d(e)}{n.$flags$&=~8}Te(n.$lazyInstance$);if(!(!s.isStyleRegistered&&s.style))return[3,4];r=s.style;i=H(a.$tagName$,n.$modeName$);if(!(a.$flags$&8))return[3,3];return[4,t.import("./p-1563a874.system.js").then(function(e){return e.scopeCss(r,i,false)})];case 2:r=l.sent();l.label=3;case 3:I(i,r,!!(a.$flags$&1));s.isStyleRegistered=true;l.label=4;case 4:o=n.$ancestorComponent$;if(o&&!o["s-lr"]&&o["s-rc"]){o["s-rc"].push(function(){return ke(e,n,a)})}else{ye(e,n,a,true)}return[2]}})})};var Te=function(e){};var Ce=function(e,t){if((s.$flags$&1)===0){var r=$(e);if(!(r.$flags$&1)){r.$flags$|=1;var n=void 0;if(!n){if(t.$flags$&4||t.$flags$&8){Ee(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-init"]&&!a["s-lr"]){r.$ancestorComponent$=a;(a["s-al"]=a["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{ke(e,r,t)}}Te(r.$lazyInstance$)}};var Ee=function(e,t){var r;{r=""}t=e["s-cr"]=i.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var je=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var l=i.head;var f=a.customElements;var u=l.querySelector("meta[charset]");var v=i.createElement("style");Object.assign(s,t);s.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){s.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!o&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var s=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}c(t);if(a.$flags$&1){if(o){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){Ce(this,a)};t.prototype.disconnectedCallback=function(){_e(this)};t.prototype["s-init"]=function(){var e=$(this);if(e.$lazyInstance$){we(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=$(this);ye(this,e,a,false)}};t.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!f.get(i)){r.push(i);f.define(i,Ne(s,a,1))}})});v.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";v.setAttribute("data-styles","");l.insertBefore(v,u?u.nextSibling:l.firstChild)});var Le=e("c",function(e,t,r){var n=Pe(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e}))}}});var Pe=function(e){return $(e).$hostElement$}}}});