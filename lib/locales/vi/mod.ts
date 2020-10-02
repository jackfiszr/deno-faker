import * as address from "./address/mod.ts";
import * as internet from "./internet/mod.ts";
import * as phone_number from "./phone_number/mod.ts";
import * as cell_phone from "./cell_phone/mod.ts";
import * as name from "./name/mod.ts";
import * as company from "./company/mod.ts";
import * as lorem from "./lorem/mod.ts";

const vi: {
  [key: string]: any;
} = {};

vi.title = "Vietnamese";
vi.address = address;
vi.internet = internet;
vi.phone_number = phone_number;
vi.cell_phone = cell_phone;
vi.name = name;
vi.company = company;
vi.lorem = lorem;

export { vi };
