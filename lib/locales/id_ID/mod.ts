import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as date from "./date/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.d.ts";

const id: Locale = {
  title: "Indonesia",
  address,
  company,
  internet,
  date,
  name,
  phone_number,
};

export { id };
