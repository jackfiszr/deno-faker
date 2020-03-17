var ro = {};
export { ro }
ro.title = "Romanian";
ro.address = await import("./address/mod.js");
ro.cell_phone = await import("./cell_phone/mod.js");
ro.date = await import("./date/mod.js");
ro.internet = await import("./internet/mod.js");
ro.name = await import("./name/mod.js");
ro.phone_number = await import("./phone_number/mod.js");
