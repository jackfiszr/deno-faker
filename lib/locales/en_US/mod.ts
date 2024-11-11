import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_US: ModuleMap = {
  title: "United States (English)",
  internet,
  address,
  phone_number,
};

export { en_US };
