import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as name from "./name/mod.ts";

const tr: {
  [key: string]: any;
} = {};

tr.title = "Turkish";
tr.address = address;
tr.internet = internet;
tr.lorem = lorem;
tr.phone_number = phone_number;
tr.cell_phone = cell_phone;
tr.name = name;

export { tr };
