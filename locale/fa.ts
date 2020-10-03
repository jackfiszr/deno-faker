import { en } from "../lib/locales/en/mod.ts";
import { fa } from "../lib/locales/fa/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fa, en },
  locale: "fa",
  localeFallback: "en",
});
