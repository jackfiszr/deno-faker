import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as date from "./date/mod.ts";

import type { Locale } from "../../types.ts";

const cz: Locale = {
  title: "Czech",
  address,
  company,
  internet,
  lorem,
  name,
  phone_number,
  date,
};

export { cz };
