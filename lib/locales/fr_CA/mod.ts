import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.d.ts";

const fr_CA: Locale = {
  title: "Canada (French)",
  address,
  internet,
  phone_number,
};

export { fr_CA };
