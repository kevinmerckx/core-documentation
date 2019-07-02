import { r as registerInstance, h, H as Host } from './chunk-cd027cbc.js';
var CoreComponentApi = /** @class */ (function () {
    function CoreComponentApi(hostRef) {
        registerInstance(this, hostRef);
        this.inputs = [];
        this.outputs = [];
        this.methods = [];
    }
    CoreComponentApi.prototype.watchInputs = function () {
        if (typeof (this.inputs) === 'string') {
            this.inputs = JSON.parse(this.inputs) || [];
        }
    };
    CoreComponentApi.prototype.watchOutputs = function () {
        if (typeof (this.outputs) === 'string') {
            this.outputs = JSON.parse(this.outputs) || [];
        }
    };
    CoreComponentApi.prototype.watchMethods = function () {
        if (typeof (this.methods) === 'string') {
            this.methods = JSON.parse(this.methods) || [];
        }
    };
    CoreComponentApi.prototype.componentWillLoad = function () {
        this.watchInputs();
        this.watchOutputs();
        this.watchMethods();
    };
    CoreComponentApi.prototype.render = function () {
        return h(Host, null, h("h2", null, "Selector: ", h("code", null, this.selector)), this.getInputs(), this.getOutputs(), this.getMethods());
    };
    CoreComponentApi.prototype.getInputs = function () {
        if (this.inputs.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Inputs"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Input"), h("th", { class: "type" }, "Type"), h("th", { class: "description" }, "Description"))), h("tbody", null, this.inputs.map(function (input) { return h("tr", null, h("td", null, h("code", null, input.name)), h("td", null, h("code", null, input.type)), h("td", { innerHTML: input.description })); }))));
    };
    CoreComponentApi.prototype.getOutputs = function () {
        if (this.outputs.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Outputs"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Output"), h("th", { class: "type" }, "Type"), h("th", { class: "description" }, "Description"))), h("tbody", null, "(", this.outputs.map(function (output) {
            return h("tr", null, h("td", null, h("code", null, output.name)), h("td", null, h("code", null, output.defaultValue)), h("td", { innerHTML: output.description }));
        }), ");")));
    };
    CoreComponentApi.prototype.getMethods = function () {
        if (this.methods.length === 0) {
            return;
        }
        return h("section", null, h("h3", null, "Methods"), h("table", null, h("thead", null, h("tr", null, h("th", { class: "name" }, "Method"), h("th", { class: "description" }, "Description"))), h("tbody", null, "(", this.outputs.map(function (output) {
            return h("tr", null, h("td", null, h("code", null, output.name)), h("td", { innerHTML: output.description }));
        }), ")")));
    };
    Object.defineProperty(CoreComponentApi, "watchers", {
        get: function () {
            return {
                "inputs": ["watchInputs"],
                "outputs": ["watchOutputs"],
                "methods": ["watchMethods"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComponentApi, "style", {
        get: function () { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host,:not(code){font-family:Lato,sans-serif}table{border-collapse:collapse;border:1px solid var(--color-light-grey);border-radius:1px;width:100%}thead{background:var(--color-light-grey)}th{text-align:left}td,th{padding:3px 20px 3px 3px}tr{border-bottom:1px solid var(--color-light-grey)}.name,.type{width:30%}.description{width:40%}code{display:inline;padding:0;margin:0;background:none;color:var(--color-two)}"; },
        enumerable: true,
        configurable: true
    });
    return CoreComponentApi;
}());
export { CoreComponentApi as core_component_api };
