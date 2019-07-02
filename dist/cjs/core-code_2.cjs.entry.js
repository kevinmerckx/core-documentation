'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4055d79b.js');

class CoreCode {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.onCopyClicked = () => {
            this.copyButton.copy(this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    render() {
        return __chunk_1.h(__chunk_1.Host, null, __chunk_1.h("pre", null, __chunk_1.h("code", { ref: el => this.code = el }, __chunk_1.h("slot", null))), __chunk_1.h("div", { class: 'source-actions' }, __chunk_1.h("core-copy-button", { ref: el => this.copyButton = el, onCopyClicked: this.onCopyClicked })));
    }
    static get style() { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;color:#fff}:host,pre{overflow:auto}pre{margin:0;padding:0;background:var(--color-bg-code)}code{margin:10px 0;display:block}.source-actions{position:absolute;right:5px;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"; }
}

class CoreCodeComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.copied = false;
        this.onClick = () => {
            this.copyClicked.emit();
        };
        this.copyClicked = __chunk_1.createEvent(this, "copyClicked", 7);
    }
    render() {
        return __chunk_1.h("button", { onClick: this.onClick }, "Copy", __chunk_1.h("div", { class: 'tooltip' }, this.copied ? 'copied!' : 'copy'));
    }
    async copy(valueToCopy) {
        this.copyToClipboard(valueToCopy);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(() => this.copied = false, 3000);
    }
    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    static get style() { return ":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"; }
}

exports.core_code = CoreCode;
exports.core_copy_button = CoreCodeComponent;
