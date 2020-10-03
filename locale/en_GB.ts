import { en } from "../lib/locales/en/mod.ts";
import { en_GB } from "../lib/locales/en_GB/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_GB, en },
  locale: "en_GB",
  localeFallback: "en",
});
