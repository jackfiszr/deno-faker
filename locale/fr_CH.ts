import { en } from "../lib/locales/en/mod.ts";
import { fr_CH } from "../lib/locales/fr_CH/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr_CH, en },
  locale: "fr_CH",
  localeFallback: "en",
});
