var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function u(e){try{a(o["throw"](e))}catch(e){i(e)}}function a(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,u)}a((o=o.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(e){return function(t){return a([e,t])}}function a(c){if(o)throw new TypeError("Generator is already executing.");while(n)try{if(o=1,r&&(i=c[0]&2?r["return"]:c[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;if(r=0,i)c=[c[0]&2,i.value];switch(c[0]){case 0:case 1:i=c;break;case 4:n.label++;return{value:c[1],done:false};case 5:n.label++;r=c[1];c=[0];continue;case 7:c=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1];i=c;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(c);break}if(i[2])n.ops.pop();n.trys.pop();continue}c=t.call(e,n)}catch(e){c=[6,e];r=0}finally{o=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-1bd81552.system.js"],function(e){"use strict";var t,n,o;return{setters:[function(e){t=e.r;n=e.h;o=e.c}],execute:function(){var r=function(){function e(e){var n=this;t(this,e);this.isOneLine=false;this.onCopyClicked=function(){n.copyButton.copy(n.code.firstChild.assignedNodes()[0].textContent)}}e.prototype.render=function(){var e=this;return n("div",{class:"container"+(this.isOneLine?"one-line":"")},n("pre",null,n("code",{ref:function(t){return e.code=t}},n("slot",null))),n("div",{class:"source-actions"},n("core-copy-button",{ref:function(t){return e.copyButton=t},onCopyClicked:this.onCopyClicked})))};Object.defineProperty(e,"style",{get:function(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"},enumerable:true,configurable:true});return e}();e("core_code",r);var i=function(){function e(e){var n=this;t(this,e);this.copied=false;this.onClick=function(){n.copyClicked.emit()};this.copyClicked=o(this,"copyClicked",7)}e.prototype.render=function(){return n("button",{onClick:this.onClick},"Copy",n("div",{class:"tooltip"},this.copied?"copied!":"copy"))};e.prototype.copy=function(e){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(n){this.copyToClipboard(e);this.copied=true;clearTimeout(this.copiedTimeout);this.copiedTimeout=setTimeout(function(){return t.copied=false},3e3);return[2]})})};e.prototype.copyToClipboard=function(e){var t=document.createElement("textarea");t.value=e;document.body.appendChild(t);t.select();document.execCommand("copy");document.body.removeChild(t)};Object.defineProperty(e,"style",{get:function(){return":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"},enumerable:true,configurable:true});return e}();e("core_copy_button",i)}}});