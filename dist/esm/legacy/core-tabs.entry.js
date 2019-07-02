import { r as registerInstance, c as createEvent, h } from './chunk-cd027cbc.js';
var CoreTabs = /** @class */ (function () {
    function CoreTabs(hostRef) {
        registerInstance(this, hostRef);
        this.selected = createEvent(this, "selected", 7);
    }
    CoreTabs.prototype.componentDidLoad = function () {
        this.selected.emit(this.getSelectedTab());
    };
    CoreTabs.prototype.render = function () {
        var _this = this;
        var selectedTab = this.getSelectedTab();
        return [
            h("ol", null, this.myTabs.map(function (tab) { return h("li", { class: selectedTab === tab ? 'active' : '', onClick: _this.onClickFn(tab) }, tab); })),
            h("div", { class: 'content' }, h("slot", null))
        ];
    };
    CoreTabs.prototype.getSelectedTab = function () {
        return this.selectedTab || this.myTabs[0];
    };
    Object.defineProperty(CoreTabs.prototype, "myTabs", {
        get: function () {
            if (typeof (this.tabs) === 'string') {
                return JSON.parse(this.tabs);
            }
            return this.tabs || [];
        },
        enumerable: true,
        configurable: true
    });
    CoreTabs.prototype.onClickFn = function (tab) {
        var _this = this;
        return function () {
            _this.selectedTab = tab;
            _this.selected.emit(tab);
        };
    };
    Object.defineProperty(CoreTabs, "style", {
        get: function () { return ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:300px;overflow:hidden;background-color:var(--color-bg-code)}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Lato,sans-serif}ol{padding:0;border-bottom:var(--color-text-code) 2px solid}li,ol{margin:0}li{list-style:none;color:var(--color-text-code);display:inline-block;cursor:pointer;padding:0;padding:0 15px;line-height:40px;height:40px;border-bottom:2px solid transparent;-webkit-transition:border-bottom .2s,color .2s;transition:border-bottom .2s,color .2s;margin-bottom:-2px}li:hover:not(.active){border-bottom-color:var(--color-four);color:var(--color-four)}li.active{color:var(--color-four);border-bottom-color:var(--color-four)}.content{-ms-flex:1 1;flex:1 1;overflow:auto}"; },
        enumerable: true,
        configurable: true
    });
    return CoreTabs;
}());
export { CoreTabs as core_tabs };
