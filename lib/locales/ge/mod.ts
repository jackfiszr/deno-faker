import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as company from "./company/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";

import type { Locale } from "../../types.d.ts";

const ge: Locale = {
  title: "Georgian",
  separator: " და ",
  name,
  address,
  internet,
  company,
  phone_number,
  cell_phone,
};

export { ge };
