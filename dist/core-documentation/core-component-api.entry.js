import { r as registerInstance, h, H as Host } from './chunk-8db34e28.js';

class CoreComponentApi {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h(Host, null, h("h2", null, "Selector: ", h("code", null, this.selector)), this.getInputs(), this.getOutputs(), this.getMethods());
    }
    getInputs() {
        if (this.inputs.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Inputs"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Input"), h("th", { class: "type" }, "Type"), h("th", { class: "description" }, "Description"))), h("tbody", null, this.inputs.map(input => h("tr", null, h("td", null, h("code", null, input.name)), h("td", null, h("code", null, input.type)), h("td", { innerHTML: input.description }))))));
    }
    getOutputs() {
        if (this.outputs.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Outputs"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Output"), h("th", { class: "type" }, "Type"), h("th", { class: "description" }, "Description"))), h("tbody", null, "(", this.outputs.map(output => {
            return h("tr", null, h("td", null, h("code", null, output.name)), h("td", null, h("code", null, output.defaultValue)), h("td", { innerHTML: output.description }));
        }), ");")));
    }
    getMethods() {
        if (this.methods.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Methods"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Method"), h("th", { class: "description" }, "Description"))), h("tbody", null, "(", this.outputs.map(output => {
            return h("tr", null, h("td", null, h("code", null, output.name)), h("td", { innerHTML: output.description }));
        }), ")")));
    }
    static get watchers() { return {
        "inputs": ["watchInputs"],
        "outputs": ["watchOutputs"],
        "methods": ["watchMethods"]
    }; }
    static get style() { return ":host, * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n:host, *:not(code) {\n  font-family: \'Lato\', sans-serif;\n}\n\ntable {\n  border-collapse: collapse;\n  border: 1px solid var(--color-light-grey);\n  border-radius: 1px;\n  width: 100%;\n}\n\nthead {\n  background: var(--color-light-grey);\n}\n\nth {\n  text-align: left;\n}\n\nth, td {\n  padding: 3px 20px 3px 3px;\n}\n\ntr {\n  border-bottom: 1px solid var(--color-light-grey);\n}\n\n.name, .type {\n  width: 30%;\n}\n\n.description {\n  width: 40%;\n}\n\ncode {\n  display: inline;\n  padding: 0;\n  margin: 0;\n  background: none;\n  color: var(--color-two);\n}"; }
}

export { CoreComponentApi as core_component_api };
