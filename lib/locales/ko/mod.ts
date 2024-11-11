import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";

type ModuleMap = Record<string, string | object>;

const ko: ModuleMap = {
  title: "Korean",
  address,
  phone_number,
  company,
  internet,
  lorem,
  name,
};

export { ko };
