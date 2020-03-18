const zh_CN = {};

zh_CN.title = "Chinese";
zh_CN.address = await import("./address/mod.ts");
zh_CN.name = await import("./name/mod.ts");
zh_CN.phone_number = await import("./phone_number/mod.ts");

export { zh_CN };
