import * as address from "./address/mod.ts";
import * as credit_card from "./credit_card/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
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

const el: {
  [key: string]: any;
} = {};

el.title = "Ελληνικά";
el.separator = " & ";
el.address = address;
el.credit_card = credit_card;
el.company = company;
el.internet = internet;
el.lorem = lorem;
el.name = name;
el.phone_number = phone_number;
el.cell_phone = cell_phone;
el.business = business;
el.commerce = commerce;
el.team = team;
el.hacker = hacker;
el.app = app;
el.finance = finance;

export { el };
