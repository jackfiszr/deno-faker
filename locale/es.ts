import { en } from "../lib/locales/en/mod.ts";
import { es } from "../lib/locales/es/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { es, en },
  locale: "es",
  localeFallback: "en",
});
