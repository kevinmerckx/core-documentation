import { r as registerInstance, c as createEvent, h } from './chunk-8db34e28.js';

class CoreCodeComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.copied = false;
        this.onClick = () => {
            this.copyClicked.emit();
        };
        this.copyClicked = createEvent(this, "copyClicked", 7);
    }
    render() {
        return h("button", { onClick: this.onClick }, "Copy", h("div", { class: 'tooltip' }, this.copied ? 'copied!' : 'copy'));
    }
    async copy(valueToCopy) {
        this.copyToClipboard(valueToCopy);
        this.copied = true;
        clearTimeout(this.copiedTimeout);
        this.copiedTimeout = setTimeout(() => this.copied = false, 3000);
    }
    copyToClipboard(str) {
        const el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    static get style() { return ":host {\n  display: block;\n}\n\n:host, * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  font-family: \'Lato\', sans-serif;\n}\n\nbutton {\n  border: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: transparent;\n  height: auto;\n  line-height: normal;\n  color: var(--color-text-code);\n  outline: none;\n  padding: 0;\n  cursor: pointer;\n}\n\nbutton:hover {\n    color: white;\n}\n\nbutton {\n  position: relative;\n  overflow: visible;\n}\n\nbutton .tooltip {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translate(calc(-100% - 5px), -50%);\n  transform: translate(calc(-100% - 5px), -50%);\n  margin-right: 3px;\n  padding: 2px 3px;\n  color: white;\n  background: black;\n}\n\nbutton:hover .tooltip {\n  display: block;\n}"; }
}

export { CoreCodeComponent as core_copy_button };
