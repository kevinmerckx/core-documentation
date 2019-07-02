'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4055d79b.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["core-tabs.cjs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]],["core-code_2.cjs",[[1,"core-code"],[1,"core-copy-button",{"copied":[32],"copy":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
