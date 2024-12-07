import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as name from "./name/mod.ts";

import type { Locale } from "../../types.ts";

const ja: Locale = {
  title: "Japanese",
  address,
  phone_number,
  cell_phone,
  name,
};

export { ja };
