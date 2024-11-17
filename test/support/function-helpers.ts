import { faker } from "../../mod.ts";

const IGNORED_MODULES = [
  "locales",
  "locale",
  "localeFallback",
  "definitions",
  "fake",
  "helpers",
];
const IGNORED_METHODS: {
  [key: string]: string[];
} = {
  system: ["directoryPath", "filePath"], // these are TODOs
};

function isTestableModule(mod: string): boolean {
  return IGNORED_MODULES.indexOf(mod) === -1;
}

function isMethodOf(mod: string): (meth: string) => boolean {
  return function (meth: string) {
    return typeof faker[mod][meth] === "function";
  };
}

function isTestableMethod(mod: string): (meth: string) => boolean {
  return function (meth: string) {
    return !(mod in IGNORED_METHODS &&
      IGNORED_METHODS[mod].indexOf(meth) >= 0);
  };
}

function both(
  pred1: (value: string) => boolean,
  pred2: (value: string) => boolean,
): (value: string) => boolean {
  return function (value: string) {
    return pred1(value) && pred2(value);
  };
}

// Basic smoke tests to make sure each method is at least implemented and returns a value.

const functionHelpers = {
  modulesList() {
    const modules = Object.keys(faker)
      .filter(isTestableModule)
      .reduce((result: Record<string, string[]>, mod: string) => {
        result[mod] = Object.keys(faker[mod]).filter(
          both(isMethodOf(mod), isTestableMethod(mod)),
        );
        return result;
      }, {});

    return modules;
  },
};

export default functionHelpers;
