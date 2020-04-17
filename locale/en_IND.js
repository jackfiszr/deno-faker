import { en_IND, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_IND, en },
  locale: "en_IND",
  localeFallback: "en",
});
