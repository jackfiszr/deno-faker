import * as address from "./address/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as commerce from "./commerce/mod.ts";

const ar: {
  [key: string]: any;
} = {};

ar.title = "Arabic";
ar.separator = " & ";
ar.address = address;
ar.phone_number = phone_number;
ar.cell_phone = cell_phone;
ar.commerce = commerce;

export { ar };
