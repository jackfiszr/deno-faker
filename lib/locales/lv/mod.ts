import * as name from "./name/mod.ts";
import * as date from "./date/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";

type ModuleMap = Record<string, string | object>;

const lv: ModuleMap = {
  title: "Latvian",
  separator: " un ",
  name,
  date,
  address,
  phone_number,
  cell_phone,
  commerce,
  company,
  internet,
  lorem,
};

export { lv };
