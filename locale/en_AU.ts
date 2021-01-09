import { en } from "../lib/locales/en/mod.ts";
import { en_AU } from "../lib/locales/en_AU/mod.ts";

import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { en_AU, en },
  locale: "en_AU",
  localeFallback: "en",
});
