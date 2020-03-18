const zh_TW = {};

zh_TW.title = "Chinese (Taiwan)";
zh_TW.address = await import("./address/mod.ts");
zh_TW.name = await import("./name/mod.ts");
zh_TW.phone_number = await import("./phone_number/mod.ts");

export { zh_TW };
