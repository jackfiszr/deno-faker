import * as address from "./address/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const zh_CN: {
  [key: string]: any;
} = {};

zh_CN.title = "Chinese";
zh_CN.address = address;
zh_CN.name = name;
zh_CN.phone_number = phone_number;

export { zh_CN };
