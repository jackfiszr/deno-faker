import { fr_CA, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr_CA, en },
  locale: "fr_CA",
  localeFallback: "en",
});
