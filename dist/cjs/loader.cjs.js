'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c0cc65d.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["core-tabs.cjs",[[1,"core-tabs",{"tabs":[1],"selectedTab":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
