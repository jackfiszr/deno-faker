import { en } from "../lib/locales/en/mod.ts";
import { it } from "../lib/locales/it/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { it, en },
  locale: "it",
  localeFallback: "en",
});
