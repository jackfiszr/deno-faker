import { en } from "../lib/locales/en/mod.ts";
import { en_US } from "../lib/locales/en_US/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_US, en },
  locale: "en_US",
  localeFallback: "en",
});
