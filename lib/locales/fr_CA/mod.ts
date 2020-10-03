import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const fr_CA: {
  [key: string]: any;
} = {};

fr_CA.title = "Canada (French)";
fr_CA.address = address;
fr_CA.internet = internet;
fr_CA.phone_number = phone_number;

export { fr_CA };
