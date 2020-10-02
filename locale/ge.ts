import { en } from "../lib/locales/en/mod.ts";
import { ge } from "../lib/locales/ge/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { ge, en },
  locale: "ge",
  localeFallback: "en",
});
