import { r as registerInstance, c as createEvent, h, H as Host } from './chunk-1b0a6fc8.js';

class CoreTabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selected = createEvent(this, "selected", 7);
    }
    componentDidLoad() {
        this.selected.emit(this.getSelectedTab());
    }
    render() {
        const selectedTab = this.getSelectedTab();
        return h(Host, null, h("ol", null, this.myTabs.map(tab => h("li", { class: selectedTab === tab ? 'active' : '', onClick: this.onClickFn(tab) }, tab))), h("div", { class: 'content' }, h("slot", null)));
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
    static get style() { return "/* \@import \'../../styles/variables\' */\n\n:host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 300px;\n  overflow: hidden;\n  margin-top: 20px;\n  background-color: var(--color-bg-code);\n}\n\nol {\n  margin: 0;\n  padding: 0;\n  border-bottom: var(--color-text-code) 2px solid;\n}\n\nli {\n  list-style: none;\n  color: var(--color-text-code);\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  padding: 0 15px;\n  line-height: 40px;\n  height: 40px;\n  border-bottom: 2px solid transparent;\n  -webkit-transition: border-bottom 0.2s, color 0.2s;\n  transition: border-bottom 0.2s, color 0.2s;\n  margin-bottom: -2px;\n}\n\nli:hover:not(.active) {\n  border-bottom-color: var(--color-four);\n  color: var(--color-four);\n}\n\nli.active {\n  color: var(--color-four);\n  border-bottom-color: var(--color-four);\n}\n\n.content {\n  -ms-flex: 1 1;\n  flex: 1 1;\n  overflow: auto;\n}"; }
}

export { CoreTabs as core_tabs };
