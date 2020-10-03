import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const de: {
  [key: string]: any;
} = {};

de.title = "German";
de.address = address;
de.company = company;
de.internet = internet;
de.lorem = lorem;
de.name = name;
de.phone_number = phone_number;
de.cell_phone = cell_phone;

export { de };
