import { en } from "../lib/locales/en/mod.ts";
import { sv } from "../lib/locales/sv/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { sv, en },
  locale: "sv",
  localeFallback: "en",
});
