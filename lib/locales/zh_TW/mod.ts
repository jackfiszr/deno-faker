import * as address from "./address/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const zh_TW: ModuleMap = {
  title: "Chinese (Taiwan)",
  address,
  name,
  phone_number,
};

export { zh_TW };
