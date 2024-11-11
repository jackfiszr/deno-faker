import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_IE: ModuleMap = {
  title: "Ireland (English)",
  address,
  internet,
  phone_number,
  cell_phone,
};

export { en_IE };
