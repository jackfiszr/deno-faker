import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const nl: {
  [key: string]: any;
} = {};

nl.title = "Dutch";
nl.address = address;
nl.company = company;
nl.internet = internet;
nl.lorem = lorem;
nl.name = name;
nl.phone_number = phone_number;

export { nl };
