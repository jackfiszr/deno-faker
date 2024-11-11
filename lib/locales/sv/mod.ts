import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as team from "./team/mod.ts";
import * as date from "./date/mod.ts";

type ModuleMap = Record<string, string | object>;

const sv: ModuleMap = {
  title: "Swedish",
  address,
  company,
  internet,
  name,
  phone_number,
  cell_phone,
  commerce,
  team,
  date,
};

export { sv };
