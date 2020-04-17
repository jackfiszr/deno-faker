import { ge, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ge, en },
  locale: "ge",
  localeFallback: "en",
});
