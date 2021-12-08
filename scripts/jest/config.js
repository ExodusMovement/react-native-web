"use strict";

module.exports = {
  // resetMocks: true,
  rootDir: process.cwd(),
  setupFiles: ["jest-canvas-mock", require.resolve("./setupFiles.js")],
  setupFilesAfterEnv: [require.resolve("./setupFramework.js")],
  testEnvironment: "jsdom",
  timers: "fake",
};
