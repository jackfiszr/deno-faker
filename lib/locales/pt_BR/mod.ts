import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const pt_BR: {
  [key: string]: any;
} = {};

pt_BR.title = "Portuguese (Brazil)";
pt_BR.address = address;
pt_BR.company = company;
pt_BR.internet = internet;
pt_BR.lorem = lorem;
pt_BR.name = name;
pt_BR.phone_number = phone_number;

export { pt_BR };
