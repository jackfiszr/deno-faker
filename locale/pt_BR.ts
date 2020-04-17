import { pt_BR, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { pt_BR, en },
  locale: "pt_BR",
  localeFallback: "en",
});
