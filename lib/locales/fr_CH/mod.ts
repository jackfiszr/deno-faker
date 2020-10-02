import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const fr_CH: {
  [key: string]: any;
} = {};

fr_CH.title = "French (Switzerland)";
fr_CH.address = address;
fr_CH.internet = internet;
fr_CH.phone_number = phone_number;

export { fr_CH };
