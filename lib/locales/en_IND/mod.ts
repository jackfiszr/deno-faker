import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as company from "./company/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_IND: ModuleMap = {
  title: "India (English)",
  name,
  address,
  internet,
  company,
  phone_number,
};

export { en_IND };
