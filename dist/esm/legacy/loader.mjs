import { a as patchEsm, b as bootstrapLazy } from './chunk-3ff6dc1b.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["core-tabs", [[1, "core-tabs", { "tabs": [1], "selectedTab": [32] }]]]], options);
    });
};
export { defineCustomElements };
