import functionalHelpers from "./support/function-helpers.ts";
import { assert } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

const modules = functionalHelpers.modulesList();

for (const locale in faker.locales) {
  faker.locale = locale;
  Object.keys(modules).forEach(module => {
    modules[module].forEach((meth: string) => {
      test({
        name: `functional tests: ${module}.${meth}()`,
        fn() {
          const result = faker[module][meth]();
          if (meth === "boolean") {
            assert(result === true || result === false);
          } else {
            assert(result);
          }
        }
      });
    });
  });
}

for (const locale in faker.locales) {
  faker.locale = locale;
  faker.seed(1);
  Object.keys(modules).forEach(module => {
    modules[module].forEach((meth: string | boolean) => {
      test({
        name: `faker.fake functional tests: ${module}.${meth}()`,
        fn() {
          const result = faker.fake("{{" + module + "." + meth + "}}");
          // just make sure any result is returned
          // an undefined result usually means an error
          assert(typeof result !== "undefined");
          /*
          if (meth === 'boolean') {
            assert.ok(result === true || result === false)
          } else {
            assert.ok(result)
          }
          */
        }
      });
    });
  });
}

faker.locale = "en";
