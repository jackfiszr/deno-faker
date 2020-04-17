import { zh_TW, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { zh_TW, en },
  locale: "zh_TW",
  localeFallback: "en",
});
