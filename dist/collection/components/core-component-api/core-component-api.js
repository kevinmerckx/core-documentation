import { h, Host } from '@stencil/core';
export class CoreComponentApi {
    constructor() {
        this.inputs = [];
        this.outputs = [];
        this.methods = [];
    }
    watchInputs() {
        if (typeof (this.inputs) === 'string') {
            this.inputs = JSON.parse(this.inputs) || [];
        }
    }
    watchOutputs() {
        if (typeof (this.outputs) === 'string') {
            this.outputs = JSON.parse(this.outputs) || [];
        }
    }
    watchMethods() {
        if (typeof (this.methods) === 'string') {
            this.methods = JSON.parse(this.methods) || [];
        }
    }
    componentWillLoad() {
        this.watchInputs();
        this.watchOutputs();
        this.watchMethods();
    }
    render() {
        return h(Host, null,
            h("h2", null,
                "Selector: ",
                h("code", null, this.selector)),
            this.getInputs(),
            this.getOutputs(),
            this.getMethods());
    }
    getInputs() {
        if (this.inputs.length === 0) {
            return;
        }
        return h("section", null,
            h("h3", null, "Inputs"),
            h("table", null,
                h("thead", null,
                    h("tr", null,
                        h("th", { class: "name" }, "Input"),
                        h("th", { class: "type" }, "Type"),
                        h("th", { class: "description" }, "Description"))),
                h("tbody", null, this.inputs.map(input => h("tr", null,
                    h("td", null,
                        h("code", null, input.name)),
                    h("td", null,
                        h("code", null, input.type)),
                    h("td", { innerHTML: input.description }))))));
    }
    getOutputs() {
        if (this.outputs.length === 0) {
            return;
        }
        return h("section", null,
            h("h3", null, "Outputs"),
            h("table", null,
                h("thead", null,
                    h("tr", null,
                        h("th", { class: "name" }, "Output"),
                        h("th", { class: "type" }, "Type"),
                        h("th", { class: "description" }, "Description"))),
                h("tbody", null,
                    "(",
                    this.outputs.map(output => {
                        return h("tr", null,
                            h("td", null,
                                h("code", null, output.name)),
                            h("td", null,
                                h("code", null, output.defaultValue)),
                            h("td", { innerHTML: output.description }));
                    }),
                    ");")));
    }
    getMethods() {
        if (this.methods.length === 0) {
            return;
        }
        return h("section", null,
            h("h3", null, "Methods"),
            h("table", null,
                h("thead", null,
                    h("tr", null,
                        h("th", { class: "name" }, "Method"),
                        h("th", { class: "description" }, "Description"))),
                h("tbody", null,
                    "(",
                    this.outputs.map(output => {
                        return h("tr", null,
                            h("td", null,
                                h("code", null, output.name)),
                            h("td", { innerHTML: output.description }));
                    }),
                    ")")));
    }
    static get is() { return "core-component-api"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["core-component-api.css"]
    }; }
    static get styleUrls() { return {
        "$": ["core-component-api.css"]
    }; }
    static get properties() { return {
        "selector": {
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
            "attribute": "selector",
            "reflect": false
        },
        "inputs": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CoreInputType[]",
                "resolved": "CoreInputType[]",
                "references": {
                    "CoreInputType": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "outputs": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CoreOutputType[]",
                "resolved": "CoreOutputType[]",
                "references": {
                    "CoreOutputType": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "methods": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CoreMethodType[]",
                "resolved": "CoreMethodType[]",
                "references": {
                    "CoreMethodType": {
                        "location": "local"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        }
    }; }
    static get watchers() { return [{
            "propName": "inputs",
            "methodName": "watchInputs"
        }, {
            "propName": "outputs",
            "methodName": "watchOutputs"
        }, {
            "propName": "methods",
            "methodName": "watchMethods"
        }]; }
}
