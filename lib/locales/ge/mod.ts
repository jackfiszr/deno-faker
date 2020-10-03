import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as company from "./company/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

const ge: {
  [key: string]: any;
} = {};

ge.title = "Georgian";
ge.separator = " და ";
ge.name = name;
ge.address = address;
ge.internet = internet;
ge.company = company;
ge.phone_number = phone_number;
ge.cell_phone = cell_phone;

export { ge };
