import { nb_NO, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nb_NO, en },
  locale: "nb_NO",
  localeFallback: "en",
});
