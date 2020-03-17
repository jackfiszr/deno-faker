var cz = {};
export { cz }
cz.title = "Czech";
cz.address = await import("./address/mod.js");
cz.company = await import("./company/mod.js");
cz.internet = await import("./internet/mod.js");
cz.lorem = await import("./lorem/mod.js");
cz.name = await import("./name/mod.js");
cz.phone_number = await import("./phone_number/mod.js");
cz.date = await import("./date/mod.js");
