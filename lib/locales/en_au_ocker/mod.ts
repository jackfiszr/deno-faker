import * as name from "./name/mod.ts";
import * as company from "./company/mod.ts";
import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.ts";

const en_au_ocker: Locale = {
  title: "Australia Ocker (English)",
  name,
  company,
  internet,
  address,
  phone_number,
};

export { en_au_ocker };
