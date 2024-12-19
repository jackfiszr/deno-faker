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

function isMethodOf(mod: keyof typeof faker): (meth: string) => boolean {
  return function (meth: string) {
    const moduleObj = faker[mod];
    if (moduleObj && typeof moduleObj === "object") {
      return typeof (moduleObj as Record<string, unknown>)[meth] === "function";
    }
    return false;
  };
}

function isTestableMethod(mod: keyof typeof faker): (meth: string) => boolean {
  return function (meth: string) {
    return !(mod in IGNORED_METHODS && IGNORED_METHODS[mod].includes(meth));
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

const functionHelpers = {
  modulesList() {
    // Use 'keyof typeof faker' to type the modules correctly
    const modules = (Object.keys(faker) as Array<keyof typeof faker>)
      .filter(isTestableModule)
      .reduce((result: Record<string, string[]>, mod: keyof typeof faker) => {
        const moduleObj = faker[mod];
        if (moduleObj && typeof moduleObj === "object") {
          result[mod] = Object.keys(moduleObj).filter(
            both(isMethodOf(mod), isTestableMethod(mod)),
          );
        } else {
          result[mod] = [];
        }
        return result;
      }, {});

    return modules;
  },
};

export default functionHelpers;
