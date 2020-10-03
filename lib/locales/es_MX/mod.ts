import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as team from "./team/mod.ts";

const es_MX: {
  [key: string]: any;
} = {};

es_MX.title = "Spanish Mexico";
es_MX.separator = " & ";
es_MX.name = name;
es_MX.address = address;
es_MX.company = company;
es_MX.internet = internet;
es_MX.phone_number = phone_number;
es_MX.cell_phone = cell_phone;
es_MX.lorem = lorem;
es_MX.commerce = commerce;
es_MX.team = team;

export { es_MX };
