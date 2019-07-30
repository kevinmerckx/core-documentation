import { r as registerInstance, h, H as Host } from './chunk-8db34e28.js';

class CoreSection {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hideTitle = false;
    }
    render() {
        return h(Host, null, this.renderTitle(), h("slot", null));
    }
    renderTitle() {
        if (this.hideTitle) {
            return;
        }
        return h("h2", null, this.sectionTitle);
    }
    static get style() { return ""; }
}

export { CoreSection as core_section };
