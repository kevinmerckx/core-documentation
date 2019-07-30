import { h, Host } from "@stencil/core";
export class CorePage {
    constructor() {
        this.noNavigation = false;
        this.pageTitle = '';
        this.sections = [];
    }
    componentDidRender() {
        const sections = [];
        this.element.querySelectorAll('core-section').forEach(section => sections.push(section.sectionTitle));
        if (sections.join(',') !== this.sections.join(',')) {
            this.sections = sections;
        }
        if (!this.activeSection) {
            this.activeSection = sections[0];
        }
    }
    render() {
        return h(Host, null,
            this.renderNavigation(),
            h("div", { class: "content" },
                h("slot", null)));
    }
    select(section) {
        this.activeSection = section;
        this.element.querySelector(`core-section[section-title="${section}"]`).scrollIntoView();
    }
    renderNavigation() {
        if (this.noNavigation) {
            return;
        }
        return h("div", { class: "header" },
            h("h1", null, this.pageTitle),
            h("ol", null, this.sections.map(section => {
                return h("li", { class: (section === this.activeSection) ? 'active' : '', onClick: () => this.select(section) }, section);
            })));
    }
    static get is() { return "core-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-page.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-page.css"]
    }; }
    static get properties() { return {
        "noNavigation": {
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
            "attribute": "no-navigation",
            "reflect": false,
            "defaultValue": "false"
        },
        "pageTitle": {
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
            "attribute": "page-title",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get states() { return {
        "sections": {},
        "activeSection": {}
    }; }
    static get elementRef() { return "element"; }
}
