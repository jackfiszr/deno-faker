import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as commerce from "./commerce/mod.ts";
import * as team from "./team/mod.ts";

import type { Locale } from "../../types.d.ts";

const es_MX: Locale = {
  title: "Spanish Mexico",
  separator: " & ",
  name,
  address,
  company,
  internet,
  phone_number,
  cell_phone,
  lorem,
  commerce,
  team,
};

export { es_MX };
