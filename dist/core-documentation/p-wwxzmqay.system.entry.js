System.register(["./p-1bd81552.system.js"],function(e){"use strict";var n,t;return{setters:[function(e){n=e.r;t=e.h}],execute:function(){var r=function(){function e(e){n(this,e)}e.prototype.render=function(){var e=this;return t("div",{class:"container "+(this.isOneLine?"one-line":"")},t("pre",null,t("code",{ref:function(n){return e.code=n}},t("slot",null))),t("div",{class:"source-actions"},t("core-copy-button",{ref:function(n){return e.copyButton=n},onCopyClicked:this.onCopyClicked})))};Object.defineProperty(e,"style",{get:function(){return"*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static;margin-left:10px}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"},enumerable:true,configurable:true});return e}();e("core_component_api",r)}}});