import { en_au_ocker, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_au_ocker, en },
  locale: "en_au_ocker",
  localeFallback: "en",
});
