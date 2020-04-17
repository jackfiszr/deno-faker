import { en_GB, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_GB, en },
  locale: "en_GB",
  localeFallback: "en",
});
