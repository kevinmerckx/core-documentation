import { a as patchEsm, b as bootstrapLazy } from './chunk-e9e4e09f.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["core-tabs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]]], options);
  });
};

export { defineCustomElements };
