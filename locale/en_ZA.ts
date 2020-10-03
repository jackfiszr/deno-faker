import { en } from "../lib/locales/en/mod.ts";
import { en_ZA } from "../lib/locales/en_ZA/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_ZA, en },
  locale: "en_ZA",
  localeFallback: "en",
});
