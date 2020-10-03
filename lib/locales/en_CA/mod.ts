import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const en_CA: {
  [key: string]: any;
} = {};

en_CA.title = "Canada (English)";
en_CA.address = address;
en_CA.internet = internet;
en_CA.phone_number = phone_number;

export { en_CA };
