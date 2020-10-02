import * as name from "./name/mod.ts";
import * as date from "./date/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";

const lv: {
  [key: string]: any;
} = {};

lv.title = "Latvian";
lv.separator = " un ";
lv.name = name;
lv.date = date;
lv.address = address;
lv.phone_number = phone_number;
lv.cell_phone = cell_phone;
lv.commerce = commerce;
lv.company = company;
lv.internet = internet;
lv.lorem = lorem;

export { lv };
