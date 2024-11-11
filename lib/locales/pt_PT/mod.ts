import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as date from "./date/mod.ts";

type ModuleMap = Record<string, string | object>;

const pt_PT: ModuleMap = {
  title: "Portuguese (Portugal)",
  address,
  internet,
  name,
  phone_number,
  cell_phone,
  commerce,
  date,
};

export { pt_PT };
