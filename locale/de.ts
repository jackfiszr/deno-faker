import { en } from "../lib/locales/en/mod.ts";
import { de } from "../lib/locales/de/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de, en },
  locale: "de",
  localeFallback: "en",
});
