import { en } from "../lib/locales/en/mod.ts";
import { ru } from "../lib/locales/ru/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ru, en },
  locale: "ru",
  localeFallback: "en",
});
