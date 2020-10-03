import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";

const ko: {
  [key: string]: any;
} = {};

ko.title = "Korean";
ko.address = address;
ko.phone_number = phone_number;
ko.company = company;
ko.internet = internet;
ko.lorem = lorem;
ko.name = name;

export { ko };
