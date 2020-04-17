import { sk, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { sk, en },
  locale: "sk",
  localeFallback: "en",
});
