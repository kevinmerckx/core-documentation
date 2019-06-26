import { a as patchEsm, b as bootstrapLazy } from './chunk-ce8242ee.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["core-tabs", [[1, "core-tabs", { "tabs": [1], "selectedTab": [32] }]]]], options);
    });
};
export { defineCustomElements };
