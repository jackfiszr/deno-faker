import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";

type ModuleMap = Record<string, string | object>;

const ar: ModuleMap = {
  title: "Arabic",
  separator: " & ",
  address,
  phone_number,
  cell_phone,
  commerce,
};

export { ar };
