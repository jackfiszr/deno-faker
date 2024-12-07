import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.ts";

const en_CA: Locale = {
  title: "Canada (English)",
  address,
  internet,
  phone_number,
};

export { en_CA };
