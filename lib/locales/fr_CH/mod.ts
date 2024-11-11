import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const fr_CH: ModuleMap = {
  title: "French (Switzerland)",
  address,
  internet,
  phone_number,
};

export { fr_CH };
