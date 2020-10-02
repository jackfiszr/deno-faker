import { en } from "../lib/locales/en/mod.ts";
import { nb_NO } from "../lib/locales/nb_NO/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nb_NO, en },
  locale: "nb_NO",
  localeFallback: "en",
});
