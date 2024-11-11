import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_CA: ModuleMap = {
  title: "Canada (English)",
  address,
  internet,
  phone_number,
};

export { en_CA };
