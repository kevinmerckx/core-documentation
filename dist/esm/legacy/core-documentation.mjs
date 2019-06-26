import { p as patchBrowser, b as bootstrapLazy } from './chunk-ce8242ee.js';
patchBrowser().then(function (resourcesUrl) {
    return bootstrapLazy([["core-tabs", [[1, "core-tabs", { "tabs": [1], "selectedTab": [32] }]]]], { resourcesUrl: resourcesUrl });
});
