import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as name from "./name/mod.ts";

const ja: {
  [key: string]: any;
} = {};

ja.title = "Japanese";
ja.address = address;
ja.phone_number = phone_number;
ja.cell_phone = cell_phone;
ja.name = name;

export { ja };
