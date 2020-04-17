import { en_CA, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_CA, en },
  locale: "en_CA",
  localeFallback: "en",
});
