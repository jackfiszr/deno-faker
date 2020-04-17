import { es_MX, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { es_MX, en },
  locale: "es_MX",
  localeFallback: "en",
});
