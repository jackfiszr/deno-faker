import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const de_AT: {
  [key: string]: any;
} = {};

de_AT.title = "German (Austria)";
de_AT.address = address;
de_AT.company = company;
de_AT.internet = internet;
de_AT.name = name;
de_AT.phone_number = phone_number;
de_AT.cell_phone = cell_phone;

export { de_AT };
