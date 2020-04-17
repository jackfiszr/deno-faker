import { es, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { es, en },
  locale: "es",
  localeFallback: "en",
});
