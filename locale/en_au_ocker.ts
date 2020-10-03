import { en } from "../lib/locales/en/mod.ts";
import { en_au_ocker } from "../lib/locales/en_au_ocker/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_au_ocker, en },
  locale: "en_au_ocker",
  localeFallback: "en",
});
