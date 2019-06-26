import { h, Host } from '@stencil/core';
export class CoreTabs {
    componentDidLoad() {
        this.selected.emit(this.getSelectedTab());
    }
    render() {
        const selectedTab = this.getSelectedTab();
        return h(Host, null,
            h("ol", null, this.myTabs.map(tab => h("li", { class: selectedTab === tab ? 'active' : '', onClick: this.onClickFn(tab) }, tab))),
            h("div", { class: 'content' },
                h("slot", null)));
    }
    getSelectedTab() {
        return this.selectedTab || this.myTabs[0];
    }
    get myTabs() {
        if (typeof (this.tabs) === 'string') {
            return JSON.parse(this.tabs);
        }
        return this.tabs || [];
    }
    onClickFn(tab) {
        return () => {
            this.selectedTab = tab;
            this.selected.emit(tab);
        };
    }
    static get is() { return "core-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-tabs.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-tabs.css"]
    }; }
    static get properties() { return {
        "tabs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string[] | string",
                "resolved": "string | string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "tabs",
            "reflect": false
        }
    }; }
    static get states() { return {
        "selectedTab": {}
    }; }
    static get events() { return [{
            "method": "selected",
            "name": "selected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
}
