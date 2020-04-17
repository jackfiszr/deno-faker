import { nl_BE, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nl_BE, en },
  locale: "nl_BE",
  localeFallback: "en",
});
