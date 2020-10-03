import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const nl_BE: {
  [key: string]: any;
} = {};

nl_BE.title = "Dutch (Belgium)";
nl_BE.address = address;
nl_BE.company = company;
nl_BE.internet = internet;
nl_BE.name = name;
nl_BE.phone_number = phone_number;

export { nl_BE };
