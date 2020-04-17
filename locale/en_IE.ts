import { en_IE, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_IE, en },
  locale: "en_IE",
  localeFallback: "en",
});
