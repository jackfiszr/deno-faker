import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const en_IE: {
  [key: string]: any;
} = {};

en_IE.title = "Ireland (English)";
en_IE.address = address;
en_IE.internet = internet;
en_IE.phone_number = phone_number;
en_IE.cell_phone = cell_phone;

export { en_IE };
