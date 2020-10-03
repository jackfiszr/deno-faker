import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as company from "./company/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const en_IND: {
  [key: string]: any;
} = {};

en_IND.title = "India (English)";
en_IND.name = name;
en_IND.address = address;
en_IND.internet = internet;
en_IND.company = company;
en_IND.phone_number = phone_number;

export { en_IND };
