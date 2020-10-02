import { en } from "../lib/locales/en/mod.ts";
import { en_MX } from "../lib/locales/en_MX/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { es_MX, en },
  locale: "es_MX",
  localeFallback: "en",
});
