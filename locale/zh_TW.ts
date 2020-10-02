import { en } from "../lib/locales/en/mod.ts";
import { zh_TW } from "../lib/locales/zh_TW/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { zh_TW, en },
  locale: "zh_TW",
  localeFallback: "en",
});
