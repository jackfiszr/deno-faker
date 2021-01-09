import { assertEquals } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

// TODO: make some tests for getting / setting locales

// Remark: actual use of locales functionality is currently tested in all.functional.js test

test({
  name: "setLocale() changes faker.locale",
  fn() {
    for (const locale in faker.locales) {
      faker.setLocale(locale);
      assertEquals(faker.locale, locale);
    }
  },
});
