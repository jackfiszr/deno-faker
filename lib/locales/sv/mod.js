var sv = {};
export { sv }
sv.title = "Swedish";
sv.address = await import("./address/mod.js");
sv.company = await import("./company/mod.js");
sv.internet = await import("./internet/mod.js");
sv.name = await import("./name/mod.js");
sv.phone_number = await import("./phone_number/mod.js");
sv.cell_phone = await import("./cell_phone/mod.js");
sv.commerce = await import("./commerce/mod.js");
sv.team = await import("./team/mod.js");
sv.date = await import("./date/mod.js");
