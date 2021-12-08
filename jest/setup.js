/* eslint-env jasmine, jest */

"use strict";

global.__DEV__ = true;

const path = require("path");
const mockEmptyObject = {};

// Make sure snapshots contain the original style objects
jest.mock(
  path.resolve(
    __dirname,
    "../dist/cjs/exports/StyleSheet/ReactNativePropRegistry"
  ),
  () => ({
    register: (id) => id,
    getByID: () => mockEmptyObject,
  })
);

jest.mock(
  path.resolve(
    __dirname,
    "../../dist/exports/StyleSheet/ReactNativePropRegistry"
  ),
  () => ({
    register: (id) => id,
    getByID: () => mockEmptyObject,
  })
);
