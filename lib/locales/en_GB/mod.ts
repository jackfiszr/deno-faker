import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const en_GB: {
  [key: string]: any;
} = {};

en_GB.title = "Great Britain (English)";
en_GB.address = address;
en_GB.internet = internet;
en_GB.phone_number = phone_number;
en_GB.cell_phone = cell_phone;

export { en_GB };
