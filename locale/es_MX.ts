import { en } from "../lib/locales/en/mod.ts";
import { es_MX } from "../lib/locales/es_MX/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { es_MX, en },
  locale: "es_MX",
  localeFallback: "en",
});
