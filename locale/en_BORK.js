import { en_BORK, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_BORK, en },
  locale: "en_BORK",
  localeFallback: "en",
});
