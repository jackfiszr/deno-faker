import { en } from "../lib/locales/en/mod.ts";
import { cz } from "../lib/locales/cz/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { cz, en },
  locale: "cz",
  localeFallback: "en",
});
