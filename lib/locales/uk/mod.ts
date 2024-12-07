import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.ts";

const uk: Locale = {
  title: "Ukrainian",
  address,
  company,
  internet,
  name,
  phone_number,
};

export { uk };
