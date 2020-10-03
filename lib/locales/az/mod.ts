import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as company from "./company/mod.ts";
import * as date from "./date/mod.ts";

const az: {
  [key: string]: any;
} = {};

az.title = "Azerbaijani";
az.separator = " və ";
az.address = address;
az.internet = internet;
az.name = name;
az.phone_number = phone_number;
az.commerce = commerce;
az.company = company;
az.date = date;

export { az };
