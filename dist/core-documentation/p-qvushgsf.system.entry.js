System.register(["./p-11867f11.system.js"],function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.c;r=t.h}],execute:function(){var s=function(){function t(t){e(this,t);this.selected=n(this,"selected",7)}t.prototype.componentDidLoad=function(){this.selected.emit(this.getSelectedTab())};t.prototype.render=function(){var t=this;var e=this.getSelectedTab();return[r("ol",null,this.myTabs.map(function(n){return r("li",{class:e===n?"active":"",onClick:t.onClickFn(n)},n)})),r("div",{class:"content"},r("slot",null))]};t.prototype.getSelectedTab=function(){return this.selectedTab||this.myTabs[0]};Object.defineProperty(t.prototype,"myTabs",{get:function(){if(typeof this.tabs==="string"){return JSON.parse(this.tabs)}return this.tabs||[]},enumerable:true,configurable:true});t.prototype.onClickFn=function(t){var e=this;return function(){e.selectedTab=t;e.selected.emit(t)}};Object.defineProperty(t,"style",{get:function(){return":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:300px;overflow:hidden;margin-top:20px;background-color:var(--color-bg-code)}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}ol{padding:0;border-bottom:var(--color-text-code) 2px solid}li,ol{margin:0}li{list-style:none;color:var(--color-text-code);display:inline-block;cursor:pointer;padding:0;padding:0 15px;line-height:40px;height:40px;border-bottom:2px solid transparent;-webkit-transition:border-bottom .2s,color .2s;transition:border-bottom .2s,color .2s;margin-bottom:-2px}li:hover:not(.active){border-bottom-color:var(--color-four);color:var(--color-four)}li.active{color:var(--color-four);border-bottom-color:var(--color-four)}.content{-ms-flex:1 1;flex:1 1;overflow:auto}"},enumerable:true,configurable:true});return t}();t("core_tabs",s)}}});