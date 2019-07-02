import { a as patchEsm, b as bootstrapLazy } from './chunk-cd027cbc.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["core-component-api", [[1, "core-component-api", { "selector": [1], "inputs": [16], "outputs": [16], "methods": [16] }]]], ["core-tabs", [[1, "core-tabs", { "tabs": [1], "selectedTab": [32] }]]], ["core-code_2", [[1, "core-code", { "isOneLine": [4, "is-one-line"] }], [1, "core-copy-button", { "copied": [32], "copy": [64] }]]]], options);
    });
};
export { defineCustomElements };
