import { en } from "../lib/locales/en/mod.ts";
import { nep } from "../lib/locales/nep/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nep, en },
  locale: "nep",
  localeFallback: "en",
});
