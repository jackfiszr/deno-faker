import { en } from "../lib/locales/en/mod.ts";
import { tr } from "../lib/locales/tr/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { tr, en },
  locale: "tr",
  localeFallback: "en",
});
