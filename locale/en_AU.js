import { en_AU, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_AU, en },
  locale: "en_AU",
  localeFallback: "en",
});
