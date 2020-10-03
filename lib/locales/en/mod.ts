import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as database from "./database/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as business from "./business/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as team from "./team/mod.ts";
import * as hacker from "./hacker/mod.ts";
import * as app from "./app/mod.ts";
import * as finance from "./finance/mod.ts";
import * as date from "./date/mod.ts";
import * as system from "./system/mod.ts";
import * as vehicle from "./vehicle/mod.ts";

const en: {
  [key: string]: any;
} = {};

en.title = "English";
en.separator = " & ";
en.address = address;
en.company = company;
en.internet = internet;
en.database = database;
en.lorem = lorem;
en.name = name;
en.phone_number = phone_number;
en.cell_phone = cell_phone;
en.business = business;
en.commerce = commerce;
en.team = team;
en.hacker = hacker;
en.app = app;
en.finance = finance;
en.date = date;
en.system = system;
en.vehicle = vehicle;

export { en };
