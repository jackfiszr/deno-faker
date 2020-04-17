import { vi, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { vi, en },
  locale: "vi",
  localeFallback: "en",
});
