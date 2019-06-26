import { a as patchEsm, b as bootstrapLazy } from './chunk-e9e4e09f.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["core-tabs", [[1, "core-tabs", { "tabs": [1], "selectedTab": [32] }]]]], options);
    });
};
export { defineCustomElements };
