// since we are importing the top level of faker, load all locales by default
import * as locales from "./lib/locales.ts";
import { Faker } from "./lib/mod.ts";
export const faker: Faker = new Faker({ locales });
