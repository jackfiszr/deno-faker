import { sv, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { sv, en },
  locale: "sv",
  localeFallback: "en",
});
