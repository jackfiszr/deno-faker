import * as address from "./address/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

const zh_TW: {
  [key: string]: any;
} = {};

zh_TW.title = "Chinese (Taiwan)";
zh_TW.address = address;
zh_TW.name = name;
zh_TW.phone_number = phone_number;

export { zh_TW };
