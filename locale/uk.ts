import { en } from "../lib/locales/en/mod.ts";
import { uk } from "../lib/locales/uk/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { uk, en },
  locale: "uk",
  localeFallback: "en",
});
