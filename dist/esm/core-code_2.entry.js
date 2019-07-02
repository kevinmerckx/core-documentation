import { r as registerInstance, h, c as createEvent } from './chunk-cd027cbc.js';

class CoreCode {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isOneLine = false;
        this.onCopyClicked = () => {
            this.copyButton.copy(this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    render() {
        return h("div", { class: 'container ' + (this.isOneLine ? 'one-line' : '') }, h("pre", null, h("code", { ref: el => this.code = el }, h("slot", null))), h("div", { class: 'source-actions' }, h("core-copy-button", { ref: el => this.copyButton = el, onCopyClicked: this.onCopyClicked })));
    }
    static get style() { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static;margin-left:10px;margin-right:10px}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"; }
}

class CoreCodeComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.copied = false;
        this.onClick = () => {
            this.copyClicked.emit();
        };
        this.copyClicked = createEvent(this, "copyClicked", 7);
    }
    render() {
        return h("button", { onClick: this.onClick }, "Copy", h("div", { class: 'tooltip' }, this.copied ? 'copied!' : 'copy'));
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
    static get style() { return ":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"; }
}

export { CoreCode as core_code, CoreCodeComponent as core_copy_button };
