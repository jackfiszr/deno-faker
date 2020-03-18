const tr = {};
export { tr };
tr.title = "Turkish";
tr.address = await import("./address/mod.js");
tr.internet = await import("./internet/mod.js");
tr.lorem = await import("./lorem/mod.js");
tr.phone_number = await import("./phone_number/mod.js");
tr.cell_phone = await import("./cell_phone/mod.js");
tr.name = await import("./name/mod.js");
