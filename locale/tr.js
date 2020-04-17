import { tr, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { tr, en },
  locale: "tr",
  localeFallback: "en",
});
