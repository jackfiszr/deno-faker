import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as company from "./company/mod.ts";

const en_ZA: {
  [key: string]: any;
} = {};

en_ZA.title = "South Africa (Zulu)";
en_ZA.address = address;
en_ZA.internet = internet;
en_ZA.phone_number = phone_number;
en_ZA.cell_phone = cell_phone;
en_ZA.company = company;

export { en_ZA };
