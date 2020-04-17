import { cz, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { cz, en },
  locale: "cz",
  localeFallback: "en",
});
