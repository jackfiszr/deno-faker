import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as company from "./company/mod.ts";
import * as date from "./date/mod.ts";

type ModuleMap = Record<string, string | object>;

const az: ModuleMap = {
  title: "Azerbaijani",
  separator: " və ",
  address,
  internet,
  name,
  phone_number,
  commerce,
  company,
  date,
};

export { az };
