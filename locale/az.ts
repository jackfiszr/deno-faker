import { az, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { az, en },
  locale: "az",
  localeFallback: "en",
});
