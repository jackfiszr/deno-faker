import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const fr: {
  [key: string]: any;
} = {};

fr.title = "French";
fr.address = address;
fr.company = company;
fr.internet = internet;
fr.lorem = lorem;
fr.name = name;
fr.phone_number = phone_number;

export { fr };
