import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";

const es: {
  [key: string]: any;
} = {};

es.title = "Spanish";
es.address = address;
es.company = company;
es.internet = internet;
es.name = name;
es.phone_number = phone_number;
es.cell_phone = cell_phone;
es.commerce = commerce;

export { es };
