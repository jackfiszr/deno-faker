import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const sk: {
  [key: string]: any;
} = {};

sk.title = "Slovakian";
sk.address = address;
sk.company = company;
sk.internet = internet;
sk.lorem = lorem;
sk.name = name;
sk.phone_number = phone_number;

export { sk };
