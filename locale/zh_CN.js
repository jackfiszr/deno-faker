import { zh_CN, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { zh_CN, en },
  locale: "zh_CN",
  localeFallback: "en",
});
