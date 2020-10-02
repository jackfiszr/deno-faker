import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as date from "./date/mod.ts";

const pt_PT: {
  [key: string]: any;
} = {};

pt_PT.title = "Portuguese (Portugal)";
pt_PT.address = address;
pt_PT.internet = internet;
pt_PT.name = name;
pt_PT.phone_number = phone_number;
pt_PT.cell_phone = cell_phone;
pt_PT.commerce = commerce;
pt_PT.date = date;

export { pt_PT };
