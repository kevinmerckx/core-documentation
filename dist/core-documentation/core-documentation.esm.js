import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-1b0a6fc8.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["core-code",[[1,"core-code",{"code":[1]}]]],["core-tabs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]]], { resourcesUrl });
});
