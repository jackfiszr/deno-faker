import { it, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { it, en },
  locale: "it",
  localeFallback: "en",
});
