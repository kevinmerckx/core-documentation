import { r as registerInstance, c as createEvent, h } from './chunk-8db34e28.js';

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
        return [
            h("ol", null, this.myTabs.map(tab => h("li", { class: selectedTab === tab ? 'active' : '', onClick: this.onClickFn(tab) }, tab))),
            h("div", { class: 'content' }, h("slot", null))
        ];
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
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 300px;\n  overflow: hidden;\n  background-color: var(--color-bg-code);\n}\n\n:host, * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \'Lato\', sans-serif;\n}\n\nol {\n  margin: 0;\n  padding: 0;\n  border-bottom: var(--color-text-code) 2px solid;\n}\n\nli {\n  list-style: none;\n  color: var(--color-text-code);\n  display: inline-block;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  padding: 0 15px;\n  line-height: 40px;\n  height: 40px;\n  border-bottom: 2px solid transparent;\n  -webkit-transition: border-bottom 0.2s, color 0.2s;\n  transition: border-bottom 0.2s, color 0.2s;\n  margin-bottom: -2px;\n}\n\nli:hover:not(.active) {\n  border-bottom-color: var(--color-four);\n  color: var(--color-four);\n}\n\nli.active {\n  color: var(--color-four);\n  border-bottom-color: var(--color-four);\n}\n\n.content {\n  -ms-flex: 1 1;\n  flex: 1 1;\n  overflow: auto;\n}"; }
}

export { CoreTabs as core_tabs };
