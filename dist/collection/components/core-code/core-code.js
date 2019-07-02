import { h, Host } from '@stencil/core';
export class CoreCode {
    constructor() {
        this.onCopyClicked = () => {
            this.copyButton.copy(this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    render() {
        return h(Host, null,
            h("pre", null,
                h("code", { ref: el => this.code = el },
                    h("slot", null))),
            h("div", { class: 'source-actions' },
                h("core-copy-button", { ref: el => this.copyButton = el, onCopyClicked: this.onCopyClicked })));
    }
    static get is() { return "core-code"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-code.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-code.css"]
    }; }
}
