import { en } from "../lib/locales/en/mod.ts";
import { id_ID } from "../lib/locales/id_ID/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { id_ID, en },
  locale: "id_ID",
  localeFallback: "en",
});
