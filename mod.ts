// since we are importing the top level of faker, load all locales by default
import * as locales from "./lib/locales.ts";
import { Faker } from "./lib/mod.ts";

/**
 * Main Faker class
 * @namespace faker
 */
export const faker: Faker = new Faker({ locales });

export { Faker };
export type { Definitions, Locale } from "./lib/types.d.ts";
