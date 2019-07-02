import { r as registerInstance, h } from './chunk-f4dc51fa.js';
var CoreCode = /** @class */ (function () {
    function CoreCode(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.isOneLine = false;
        this.onCopyClicked = function () {
            _this.copyButton.copy(_this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    CoreCode.prototype.render = function () {
        var _this = this;
        return h("div", { class: 'container ' + (this.isOneLine ? 'one-line' : '') }, h("pre", null, h("code", { ref: function (el) { return _this.code = el; } }, h("slot", null))), h("div", { class: 'source-actions' }, h("core-copy-button", { ref: function (el) { return _this.copyButton = el; }, onCopyClicked: this.onCopyClicked })));
    };
    Object.defineProperty(CoreCode, "style", {
        get: function () { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;overflow:auto;color:#fff;background:var(--color-bg-code)}.container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}pre{margin:0;padding:0;overflow:auto;height:100%}code{margin:10px 0;padding:0 10px;display:block}.one-line .source-actions{position:static;margin-left:10px}.source-actions{position:absolute;right:10px;top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"; },
        enumerable: true,
        configurable: true
    });
    return CoreCode;
}());
export { CoreCode as core_code };
