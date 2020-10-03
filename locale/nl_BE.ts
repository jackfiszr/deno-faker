import { en } from "../lib/locales/en/mod.ts";
import { nl_BE } from "../lib/locales/nl_BE/mod.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { nl_BE, en },
  locale: "nl_BE",
  localeFallback: "en",
});
