import * as address from "./address/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.d.ts";

const nl_BE: Locale = {
  title: "Dutch (Belgium)",
  address,
  company,
  internet,
  name,
  phone_number,
};

export { nl_BE };
