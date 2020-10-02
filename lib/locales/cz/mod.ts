import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as date from "./date/mod.ts";

const cz: {
  [key: string]: any;
} = {};

cz.title = "Czech";
cz.address = address;
cz.company = company;
cz.internet = internet;
cz.lorem = lorem;
cz.name = name;
cz.phone_number = phone_number;
cz.date = date;

export { cz };
