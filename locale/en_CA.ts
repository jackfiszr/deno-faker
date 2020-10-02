import { en } from "../lib/locales/en/mod.ts";
import { en_CA } from "../lib/locales/en_CA/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_CA, en },
  locale: "en_CA",
  localeFallback: "en",
});
