import { en } from "../lib/locales/en/mod.ts";
import { zh_CN } from "../lib/locales/zh_CN/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { zh_CN, en },
  locale: "zh_CN",
  localeFallback: "en",
});
