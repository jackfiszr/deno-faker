import { en } from "../lib/locales/en/mod.ts";
import { vi } from "../lib/locales/vi/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { vi, en },
  locale: "vi",
  localeFallback: "en",
});
