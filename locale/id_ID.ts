import { id_ID, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { id_ID, en },
  locale: "id_ID",
  localeFallback: "en",
});
