import { en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en },
  locale: "en",
  localeFallback: "en",
});
