import { en } from "../lib/locales/en/mod.ts";
import { sk } from "../lib/locales/sk/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { sk, en },
  locale: "sk",
  localeFallback: "en",
});
