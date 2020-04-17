import { en_ZA, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_ZA, en },
  locale: "en_ZA",
  localeFallback: "en",
});
