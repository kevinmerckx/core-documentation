'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-d0109314.js');

class CoreCode {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.isOneLine = false;
        this.onCopyClicked = () => {
            this.copyButton.copy(this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    render() {
        return __chunk_1.h("div", { class: 'container ' + (this.isOneLine ? 'one-line' : '') }, __chunk_1.h("pre", null, __chunk_1.h("code", { ref: el => this.code = el }, __chunk_1.h("slot", null))), __chunk_1.h("div", { class: 'source-actions' }, __chunk_1.h("core-copy-button", { ref: el => this.copyButton = el, onCopyClicked: this.onCopyClicked })));
    }
    static get style() { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static;margin-left:10px}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"; }
}

exports.core_code = CoreCode;
