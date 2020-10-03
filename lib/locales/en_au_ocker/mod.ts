import * as name from "./name/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const en_au_ocker: {
  [key: string]: any;
} = {};

en_au_ocker.title = "Australia Ocker (English)";
en_au_ocker.name = name;
en_au_ocker.company = company;
en_au_ocker.internet = internet;
en_au_ocker.address = address;
en_au_ocker.phone_number = phone_number;

export { en_au_ocker };
