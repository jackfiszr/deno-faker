import * as lorem from "./lorem/mod.ts";

type ModuleMap = Record<string, string | object>;

const en_BORK: ModuleMap = {
  title: "Bork (English)",
  lorem,
};

export { en_BORK };
