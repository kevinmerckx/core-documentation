import { h } from '@stencil/core';
export class CoreCodeComponent {
    constructor() {
        this.copied = false;
        this.onClick = () => {
            this.copyClicked.emit();
        };
    }
    render() {
        return h("button", { onClick: this.onClick },
            "Copy",
            h("div", { class: 'tooltip' }, this.copied ? 'copied!' : 'copy'));
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
    static get is() { return "core-copy-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-copy-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-copy-button.css"]
    }; }
    static get states() { return {
        "copied": {}
    }; }
    static get events() { return [{
            "method": "copyClicked",
            "name": "copyClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "copy": {
            "complexType": {
                "signature": "(valueToCopy: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
