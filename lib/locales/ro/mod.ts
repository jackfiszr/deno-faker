const ro = {};

ro.title = "Romanian";
ro.address = await import("./address/mod.ts");
ro.cell_phone = await import("./cell_phone/mod.ts");
ro.date = await import("./date/mod.ts");
ro.internet = await import("./internet/mod.ts");
ro.name = await import("./name/mod.ts");
ro.phone_number = await import("./phone_number/mod.ts");

export { ro };
