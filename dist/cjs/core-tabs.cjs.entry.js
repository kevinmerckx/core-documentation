'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-91dbbeaa.js');

class CoreTabs {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.selected = __chunk_1.createEvent(this, "selected", 7);
    }
    componentDidLoad() {
        this.selected.emit(this.getSelectedTab());
    }
    render() {
        const selectedTab = this.getSelectedTab();
        return __chunk_1.h(__chunk_1.Host, null, __chunk_1.h("ol", null, this.myTabs.map(tab => __chunk_1.h("li", { class: selectedTab === tab ? 'active' : '', onClick: this.onClickFn(tab) }, tab))));
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
    static get style() { return ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:300px;overflow:hidden;margin-top:20px;background-color:var(--color-bg-code)}ol{padding:0;border-bottom:var(--color-text-code) 2px solid}li,ol{margin:0}li{list-style:none;color:var(--color-text-code);display:inline-block;cursor:pointer;padding:0;padding:0 15px;line-height:40px;height:40px;border-bottom:2px solid transparent;-webkit-transition:border-bottom .2s,color .2s;transition:border-bottom .2s,color .2s;margin-bottom:-2px}li:hover:not(.active){border-bottom-color:var(--color-four);color:var(--color-four)}li.active{color:var(--color-four);border-bottom-color:var(--color-four)}.content{-ms-flex:1 1;flex:1 1;overflow:auto}"; }
}

exports.core_tabs = CoreTabs;
