import { r as registerInstance, h, H as Host, d as getElement } from './chunk-8db34e28.js';

class CorePage {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h(Host, null, this.renderNavigation(), h("div", { class: "content" }, h("slot", null)));
    }
    select(section) {
        this.activeSection = section;
        this.element.querySelector(`core-section[section-title="${section}"]`).scrollIntoView();
    }
    renderNavigation() {
        if (this.noNavigation) {
            return;
        }
        return h("div", { class: "header" }, h("h1", null, this.pageTitle), h("ol", null, this.sections.map(section => {
            return h("li", { class: (section === this.activeSection) ? 'active' : '', onClick: () => this.select(section) }, section);
        })));
    }
    get element() { return getElement(this); }
    static get style() { return ":host {\n  height: 100%;\n  overflow: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.header {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-align: center;\n  align-items: center;\n  border-bottom: 1px solid grey;\n  -webkit-box-shadow: 2px 0px 2px 1px lightgrey;\n  box-shadow: 2px 0px 2px 1px lightgrey;\n  padding: 0 15px;\n}\n\n.content {\n  -ms-flex: 1 1;\n  flex: 1 1;\n  padding: 15px;\n  overflow: auto;\n}\n\nh2 {\n  margin-top: 50px;\n  border-bottom: 1px solid var(--color-light-grey);\n}\n\nol {\n  list-style: none;\n  margin: 0 0 0 30px;\n  padding: 0;\n}\n\nli {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 10px;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n  cursor: pointer;\n}\n\nli:hover {\n  color: var(--color-three);\n}\n\nli.active {\n  color: var(--color-four);\n}"; }
}

export { CorePage as core_page };
