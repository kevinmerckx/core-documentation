import { a as patchEsm, b as bootstrapLazy } from './chunk-9e4f6611.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["core-tabs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]],["core-code_2",[[1,"core-code"],[1,"core-copy-button",{"copied":[32],"copy":[64]}]]]], options);
  });
};

export { defineCustomElements };
