import { ja, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ja, en },
  locale: "ja",
  localeFallback: "en",
});
