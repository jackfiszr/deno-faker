import { en } from "../lib/locales/en/mod.ts";
import { fr } from "../lib/locales/fr/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr, en },
  locale: "fr",
  localeFallback: "en",
});
