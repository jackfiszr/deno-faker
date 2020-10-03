import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const de_CH: {
  [key: string]: any;
} = {};

de_CH.title = "German (Switzerland)";
de_CH.address = address;
de_CH.company = company;
de_CH.internet = internet;
de_CH.name = name;
de_CH.phone_number = phone_number;

export { de_CH };
