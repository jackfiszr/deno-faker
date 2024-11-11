import * as address from "./address/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as date from "./date/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

type ModuleMap = Record<string, string | object>;

const ro: ModuleMap = {
  title: "Romanian",
  address,
  cell_phone,
  date,
  internet,
  name,
  phone_number,
};

export { ro };
