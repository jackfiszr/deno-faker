import { en } from "../lib/locales/en/mod.ts";
import { en_IND } from "../lib/locales/en_IND/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_IND, en },
  locale: "en_IND",
  localeFallback: "en",
});
