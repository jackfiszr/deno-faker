import { en } from "../lib/locales/en/mod.ts";
import { fr_CA } from "../lib/locales/fr_CA/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr_CA, en },
  locale: "fr_CA",
  localeFallback: "en",
});
