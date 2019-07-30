import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-8db34e28.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["core-copy-button",[[1,"core-copy-button",{"copied":[32],"copy":[64]}]]],["core-code",[[1,"core-code",{"isOneLine":[4,"is-one-line"]}]]],["core-component-api",[[1,"core-component-api",{"selector":[1],"inputs":[16],"outputs":[16],"methods":[16]}]]],["core-page",[[1,"core-page",{"noNavigation":[4,"no-navigation"],"pageTitle":[1,"page-title"],"sections":[32],"activeSection":[32]}]]],["core-section",[[1,"core-section",{"sectionTitle":[1,"section-title"],"hideTitle":[4,"hide-title"]}]]],["core-tabs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]]], { resourcesUrl });
});
