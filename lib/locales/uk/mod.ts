import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const uk: {
  [key: string]: any;
} = {};

uk.title = "Ukrainian";
uk.address = address;
uk.company = company;
uk.internet = internet;
uk.name = name;
uk.phone_number = phone_number;

export { uk };
