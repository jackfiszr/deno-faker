import { uk, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { uk, en },
  locale: "uk",
  localeFallback: "en",
});
