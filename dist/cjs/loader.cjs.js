'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-9e3b05c3.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["core-component-api.cjs",[[1,"core-component-api",{"selector":[1],"inputs":[16],"outputs":[16],"methods":[16]}]]],["core-tabs.cjs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]],["core-code_2.cjs",[[1,"core-code",{"isOneLine":[4,"is-one-line"]}],[1,"core-copy-button",{"copied":[32],"copy":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
