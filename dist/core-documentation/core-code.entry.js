import { r as registerInstance, h } from './chunk-8db34e28.js';

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
    static get style() { return ":host, * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host {\n  position: relative;\n  display: block;\n  overflow: auto;\n  color: white;\n  background: var(--color-bg-code);\n}\n\n.container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\npre {\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  height: 100%;\n}\n  \ncode {\n  margin: 10px 0;\n  padding: 0 10px;\n  display: block;\n}\n\n.one-line .source-actions {\n  position: initial;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.source-actions {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}"; }
}

export { CoreCode as core_code };
