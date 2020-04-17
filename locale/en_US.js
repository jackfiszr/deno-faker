import { en_US, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_US, en },
  locale: "en_US",
  localeFallback: "en",
});
