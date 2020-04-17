import { fr_CH, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr_CH, en },
  locale: "fr_CH",
  localeFallback: "en",
});
