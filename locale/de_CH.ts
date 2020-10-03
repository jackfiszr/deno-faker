import { en } from "../lib/locales/en/mod.ts";
import { de_CH } from "../lib/locales/de_CH/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de_CH, en },
  locale: "de_CH",
  localeFallback: "en",
});
