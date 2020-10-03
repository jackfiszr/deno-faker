import { en } from "../lib/locales/en/mod.ts";
import { en_IE } from "../lib/locales/en_IE/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_IE, en },
  locale: "en_IE",
  localeFallback: "en",
});
