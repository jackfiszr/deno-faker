import functionalHelpers from "./support/function-helpers.ts";
import { assert } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

const modules = functionalHelpers.modulesList();

for (const locale in faker.locales) {
  faker.locale = locale;

  Object.keys(modules).forEach((module) => {
    const moduleKey = module as keyof typeof faker; // Cast module to keyof faker

    modules[module].forEach((meth: string) => {
      test({
        name: `functional tests: ${module}.${meth}()`,
        fn() {
          const result = (faker[moduleKey] as Record<string, () => unknown>)
            [meth]();
          if (meth === "boolean") {
            assert(result === true || result === false);
          } else {
            assert(result);
          }
        },
      });
    });
  });
}

for (const locale in faker.locales) {
  faker.locale = locale;
  faker.seed(1);

  Object.keys(modules).forEach((module) => {
    const moduleKey = module as keyof typeof faker; // Use moduleKey properly

    modules[module].forEach((meth: string | boolean) => {
      test({
        name: `faker.fake functional tests: ${module}.${meth}()`,
        fn() {
          const result = faker.fake(`{{${moduleKey}.${meth}}}`);
          assert(typeof result !== "undefined");
        },
      });
    });
  });
}

faker.locale = "en";
