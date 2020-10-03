import { en } from "../lib/locales/en/mod.ts";
import { pt_BR } from "../lib/locales/pt_BR/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { pt_BR, en },
  locale: "pt_BR",
  localeFallback: "en",
});
