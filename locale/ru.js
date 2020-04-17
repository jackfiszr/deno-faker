import { ru, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ru, en },
  locale: "ru",
  localeFallback: "en",
});
