import { en } from "../lib/locales/en/mod.ts";
import { ko } from "../lib/locales/ko/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ko, en },
  locale: "ko",
  localeFallback: "en",
});
