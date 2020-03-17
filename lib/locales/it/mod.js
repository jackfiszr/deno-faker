var it = {};
export { it }
it.title = "Italian";
it.address = await import("./address/mod.js");
it.company = await import("./company/mod.js");
it.internet = await import("./internet/mod.js");
it.name = await import("./name/mod.js");
it.phone_number = await import("./phone_number/mod.js");
