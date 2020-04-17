import { nep, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nep, en },
  locale: "nep",
  localeFallback: "en",
});
