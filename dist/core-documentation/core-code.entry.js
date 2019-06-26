import { h, H as Host } from './chunk-1b0a6fc8.js';

class CoreCode {
    constructor() {
        this.code = '';
    }
    render() {
        return h(Host, null, h("pre", null, h("code", null, this.code)), h("div", { class: 'source-actions' }, h("slot", null)));
    }
    static get is() { return "core-code"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["core-code.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["core-code.css"]
        };
    }
    static get properties() {
        return {
            "code": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "code",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}

export { CoreCode as core_code };
