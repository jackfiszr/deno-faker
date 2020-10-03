import { en } from "../lib/locales/en/mod.ts";
import { pl } from "../lib/locales/pl/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { pl, en },
  locale: "pl",
  localeFallback: "en",
});
