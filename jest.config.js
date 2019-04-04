module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^src(.*)$": "<rootDir>/src$1",
    "^apis(.*)$": "<rootDir>/src/apis$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^containers(.*)$": "<rootDir>/src/containers$1",
    "^scss(.*)$": "<rootDir>/src/scss$1",
    "^store(.*)$": "<rootDir>/src/store$1"
  }
};
