import { en } from "../lib/locales/en/mod.ts";
import { nl } from "../lib/locales/nl/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nl, en },
  locale: "nl",
  localeFallback: "en",
});
