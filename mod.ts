// since we are requiring the top level of faker, load all locales by default
import * as locales from "./lib/locales.js";
import { Faker } from "./lib/mod.js";
export const faker = new Faker({ locales });
