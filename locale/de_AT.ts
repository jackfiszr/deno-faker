import { en } from "../lib/locales/en/mod.ts";
import { de_AT } from "../lib/locales/de_AT/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de_AT, en },
  locale: "de_AT",
  localeFallback: "en",
});
