import { h } from '@stencil/core';
export class CoreCode {
    constructor() {
        this.isOneLine = false;
        this.onCopyClicked = () => {
            this.copyButton.copy(this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    render() {
        return h("div", { class: 'container ' + (this.isOneLine ? 'one-line' : '') },
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
    static get properties() { return {
        "isOneLine": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-one-line",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
