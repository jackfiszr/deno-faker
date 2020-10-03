import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as date from "./date/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const id: {
  [key: string]: any;
} = {};

id.title = "Indonesia";
id.address = address;
id.company = company;
id.internet = internet;
id.date = date;
id.name = name;
id.phone_number = phone_number;

export { id };
