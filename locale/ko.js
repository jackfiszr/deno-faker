import { ko, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ko, en },
  locale: "ko",
  localeFallback: "en",
});
