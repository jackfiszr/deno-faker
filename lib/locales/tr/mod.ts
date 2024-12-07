import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as lorem from "./lorem/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as name from "./name/mod.ts";

import type { Locale } from "../../types.ts";

const tr: Locale = {
  title: "Turkish",
  address,
  internet,
  lorem,
  phone_number,
  cell_phone,
  name,
};

export { tr };
