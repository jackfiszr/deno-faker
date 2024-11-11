import * as name from "./name/mod.ts";
import * as address from "./address/mod.ts";

type ModuleMap = Record<string, string | object>;

const fa: ModuleMap = {
  title: "Farsi",
  name,
  address,
};

export { fa };
