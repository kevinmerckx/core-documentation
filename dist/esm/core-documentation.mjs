import { p as patchBrowser, b as bootstrapLazy } from './chunk-e9e4e09f.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["core-tabs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]]], { resourcesUrl });
});
