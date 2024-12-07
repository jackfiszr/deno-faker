import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";

import type { Locale } from "../../types.ts";

const ar: Locale = {
  title: "Arabic",
  separator: " & ",
  address,
  phone_number,
  cell_phone,
  commerce,
};

export { ar };
