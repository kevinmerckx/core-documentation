'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-9e3b05c3.js');

class CoreComponentApi {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return __chunk_1.h(__chunk_1.Host, null, __chunk_1.h("h2", null, "Selector: ", __chunk_1.h("code", null, this.selector)), this.getInputs(), this.getOutputs(), this.getMethods());
    }
    getInputs() {
        if (this.inputs.length === 0) {
            return;
        }
        return __chunk_1.h("section", null, __chunk_1.h("h3", null, "Inputs"), __chunk_1.h("table", null, __chunk_1.h("thead", null, __chunk_1.h("tr", null, __chunk_1.h("th", { class: "name" }, "Input"), __chunk_1.h("th", { class: "type" }, "Type"), __chunk_1.h("th", { class: "description" }, "Description"))), __chunk_1.h("tbody", null, this.inputs.map(input => __chunk_1.h("tr", null, __chunk_1.h("td", null, __chunk_1.h("code", null, input.name)), __chunk_1.h("td", null, __chunk_1.h("code", null, input.type)), __chunk_1.h("td", { innerHTML: input.description }))))));
    }
    getOutputs() {
        if (this.outputs.length === 0) {
            return;
        }
        return __chunk_1.h("section", null, __chunk_1.h("h3", null, "Outputs"), __chunk_1.h("table", null, __chunk_1.h("thead", null, __chunk_1.h("tr", null, __chunk_1.h("th", { class: "name" }, "Output"), __chunk_1.h("th", { class: "type" }, "Type"), __chunk_1.h("th", { class: "description" }, "Description"))), __chunk_1.h("tbody", null, "(", this.outputs.map(output => {
            return __chunk_1.h("tr", null, __chunk_1.h("td", null, __chunk_1.h("code", null, output.name)), __chunk_1.h("td", null, __chunk_1.h("code", null, output.defaultValue)), __chunk_1.h("td", { innerHTML: output.description }));
        }), ");")));
    }
    getMethods() {
        if (this.methods.length === 0) {
            return;
        }
        return __chunk_1.h("section", null, __chunk_1.h("h3", null, "Methods"), __chunk_1.h("table", null, __chunk_1.h("thead", null, __chunk_1.h("tr", null, __chunk_1.h("th", { class: "name" }, "Method"), __chunk_1.h("th", { class: "description" }, "Description"))), __chunk_1.h("tbody", null, "(", this.outputs.map(output => {
            return __chunk_1.h("tr", null, __chunk_1.h("td", null, __chunk_1.h("code", null, output.name)), __chunk_1.h("td", { innerHTML: output.description }));
        }), ")")));
    }
    static get watchers() { return {
        "inputs": ["watchInputs"],
        "outputs": ["watchOutputs"],
        "methods": ["watchMethods"]
    }; }
    static get style() { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host,:not(code){font-family:Lato,sans-serif}table{border-collapse:collapse;border:1px solid var(--color-light-grey);border-radius:1px;width:100%}thead{background:var(--color-light-grey)}th{text-align:left}td,th{padding:3px 20px 3px 3px}tr{border-bottom:1px solid var(--color-light-grey)}.name,.type{width:30%}.description{width:40%}code{display:inline;padding:0;margin:0;background:none;color:var(--color-two)}"; }
}

exports.core_component_api = CoreComponentApi;
