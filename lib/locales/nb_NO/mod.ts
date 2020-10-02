import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const nb_NO: {
  [key: string]: any;
} = {};

nb_NO.title = "Norwegian";
nb_NO.address = address;
nb_NO.company = company;
nb_NO.internet = internet;
nb_NO.name = name;
nb_NO.phone_number = phone_number;

export { nb_NO };
