import * as name from "./name/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const en_AU: {
  [key: string]: any;
} = {};

en_AU.title = "Australia (English)";
en_AU.name = name;
en_AU.company = company;
en_AU.internet = internet;
en_AU.address = address;
en_AU.phone_number = phone_number;

export { en_AU };
