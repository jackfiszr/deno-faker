import * as internet from "./internet/mod.ts";
import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.d.ts";

const en_US: Locale = {
  title: "United States (English)",
  internet,
  address,
  phone_number,
};

export { en_US };
