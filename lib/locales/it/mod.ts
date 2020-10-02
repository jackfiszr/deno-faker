import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const it: {
  [key: string]: any;
} = {};

it.title = "Italian";
it.address = address;
it.company = company;
it.internet = internet;
it.name = name;
it.phone_number = phone_number;

export { it };
