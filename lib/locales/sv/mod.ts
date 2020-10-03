import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as team from "./team/mod.ts";
import * as date from "./date/mod.ts";

const sv: {
  [key: string]: any;
} = {};

sv.title = "Swedish";
sv.address = address;
sv.company = company;
sv.internet = internet;
sv.name = name;
sv.phone_number = phone_number;
sv.cell_phone = cell_phone;
sv.commerce = commerce;
sv.team = team;
sv.date = date;

export { sv };
