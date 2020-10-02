import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const en_US: {
  [key: string]: any;
} = {};

en_US.title = "United States (English)";
en_US.internet = internet;
en_US.address = address;
en_US.phone_number = phone_number;

export { en_US };
