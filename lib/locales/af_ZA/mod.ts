import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as company from "./company/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_ZA: ModuleMap = {
  title: "South Africa (Afrikaans)",
  address,
  internet,
  phone_number,
  cell_phone,
  company,
};

export { en_ZA };
