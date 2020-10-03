import * as address from "./address/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as date from "./date/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const ro: {
  [key: string]: any;
} = {};

ro.title = "Romanian";
ro.address = address;
ro.cell_phone = cell_phone;
ro.date = date;
ro.internet = internet;
ro.name = name;
ro.phone_number = phone_number;

export { ro };
