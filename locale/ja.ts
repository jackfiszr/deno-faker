import { en } from "../lib/locales/en/mod.ts";
import { ja } from "../lib/locales/ja/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ja, en },
  locale: "ja",
  localeFallback: "en",
});
