import { de, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de, en },
  locale: "de",
  localeFallback: "en",
});
