import { de_CH, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { de_CH, en },
  locale: "de_CH",
  localeFallback: "en",
});
