import { h, Host } from "@stencil/core";
export class CoreSection {
    constructor() {
        this.hideTitle = false;
    }
    render() {
        return h(Host, null,
            this.renderTitle(),
            h("slot", null));
    }
    renderTitle() {
        if (this.hideTitle) {
            return;
        }
        return h("h2", null, this.sectionTitle);
    }
    static get is() { return "core-section"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-section.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-section.css"]
    }; }
    static get properties() { return {
        "sectionTitle": {
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
            "attribute": "section-title",
            "reflect": false
        },
        "hideTitle": {
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
            "attribute": "hide-title",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
