import { fa, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fa, en },
  locale: "fa",
  localeFallback: "en",
});
