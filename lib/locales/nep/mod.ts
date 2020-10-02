import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as company from "./company/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const nep: {
  [key: string]: any;
} = {};

nep.title = "Nepalese";
nep.name = name;
nep.address = address;
nep.internet = internet;
nep.company = company;
nep.phone_number = phone_number;

export { nep };
