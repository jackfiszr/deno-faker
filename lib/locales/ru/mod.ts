import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as company from "./company/mod.ts";
import * as date from "./date/mod.ts";
import * as hacker from "./hacker/mod.ts";

const ru: {
  [key: string]: any;
} = {};

ru.title = "Russian";
ru.separator = " и ";
ru.address = address;
ru.internet = internet;
ru.name = name;
ru.phone_number = phone_number;
ru.commerce = commerce;
ru.company = company;
ru.date = date;
ru.hacker = hacker;

export { ru };
