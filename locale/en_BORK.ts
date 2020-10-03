import { en } from "../lib/locales/en/mod.ts";
import { en_BORK } from "../lib/locales/en_BORK/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_BORK, en },
  locale: "en_BORK",
  localeFallback: "en",
});
