import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const pl: {
  [key: string]: any;
} = {};

pl.title = "Polish";
pl.name = name;
pl.address = address;
pl.company = company;
pl.internet = internet;
pl.lorem = lorem;
pl.phone_number = phone_number;
pl.cell_phone = cell_phone;

export { pl };
