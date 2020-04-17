import { nl, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nl, en },
  locale: "nl",
  localeFallback: "en",
});
