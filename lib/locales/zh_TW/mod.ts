import * as address from "./address/mod.ts";
import * as name from "./name/mod.ts";
import * as phone_number from "./phone_number/mod.ts";

import type { Locale } from "../../types.ts";

const zh_TW: Locale = {
  title: "Chinese (Taiwan)",
  address,
  name,
  phone_number,
};

export { zh_TW };
