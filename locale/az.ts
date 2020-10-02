import { en } from "../lib/locales/en/mod.ts";
import { az } from "../lib/locales/az/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { az, en },
  locale: "az",
  localeFallback: "en",
});
