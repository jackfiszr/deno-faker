// since we are requiring the top level of faker, load all locales by default
import * as locales from "./lib/locales.ts";
import { Faker } from "./lib/mod.ts";
export const faker = new Faker({ locales });
