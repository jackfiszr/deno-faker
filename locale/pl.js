import { pl, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { pl, en },
  locale: "pl",
  localeFallback: "en",
});
