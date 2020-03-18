const zh_CN = {};

zh_CN.title = "Chinese";
zh_CN.address = await import("./address/mod.js");
zh_CN.name = await import("./name/mod.js");
zh_CN.phone_number = await import("./phone_number/mod.js");

export { zh_CN };
