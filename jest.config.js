"use strict";

module.exports = {
  // resetMocks: true,
  setupFiles: [
    "jest-canvas-mock",
    require.resolve("./scripts/jest/setupFiles.js"),
  ],
  setupFilesAfterEnv: [require.resolve("./scripts/jest/setupFramework.js")],
  testEnvironment: "jsdom",
  timers: "fake",
};
