var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host, c as createEvent } from './chunk-9e4f6611.js';
var CoreCode = /** @class */ (function () {
    function CoreCode(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.onCopyClicked = function () {
            _this.copyButton.copy(_this.code.firstChild
                .assignedNodes()[0].textContent);
        };
    }
    CoreCode.prototype.render = function () {
        var _this = this;
        return h(Host, null, h("pre", null, h("code", { ref: function (el) { return _this.code = el; } }, h("slot", null))), h("div", { class: 'source-actions' }, h("core-copy-button", { ref: function (el) { return _this.copyButton = el; }, onCopyClicked: this.onCopyClicked })));
    };
    Object.defineProperty(CoreCode, "style", {
        get: function () { return "*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}:host{position:relative;display:block;color:#fff}:host,pre{overflow:auto}pre{margin:0;padding:0;background:var(--color-bg-code)}code{margin:10px 0;display:block}.source-actions{position:absolute;right:5px;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}"; },
        enumerable: true,
        configurable: true
    });
    return CoreCode;
}());
var CoreCodeComponent = /** @class */ (function () {
    function CoreCodeComponent(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.copied = false;
        this.onClick = function () {
            _this.copyClicked.emit();
        };
        this.copyClicked = createEvent(this, "copyClicked", 7);
    }
    CoreCodeComponent.prototype.render = function () {
        return h("button", { onClick: this.onClick }, "Copy", h("div", { class: 'tooltip' }, this.copied ? 'copied!' : 'copy'));
    };
    CoreCodeComponent.prototype.copy = function (valueToCopy) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.copyToClipboard(valueToCopy);
                this.copied = true;
                clearTimeout(this.copiedTimeout);
                this.copiedTimeout = setTimeout(function () { return _this.copied = false; }, 3000);
                return [2 /*return*/];
            });
        });
    };
    CoreCodeComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    Object.defineProperty(CoreCodeComponent, "style", {
        get: function () { return ":host{display:block}*,:host{-webkit-box-sizing:border-box;box-sizing:border-box}button{border:none;-webkit-box-shadow:none;box-shadow:none;background:transparent;height:auto;line-height:normal;color:var(--color-text-code);outline:none;padding:0;cursor:pointer}button:hover{color:#fff}button{position:relative;overflow:visible}button .tooltip{display:none;position:absolute;top:50%;left:0;-webkit-transform:translate(calc(-100% - 5px),-50%);transform:translate(calc(-100% - 5px),-50%);margin-right:3px;padding:2px 3px;color:#fff;background:#000}button:hover .tooltip{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return CoreCodeComponent;
}());
export { CoreCode as core_code, CoreCodeComponent as core_copy_button };
