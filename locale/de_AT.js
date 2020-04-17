import { de_AT, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de_AT, en },
  locale: "de_AT",
  localeFallback: "en",
});
