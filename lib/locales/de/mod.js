var de = {};
export { de }
de.title = "German";
de.address = await import("./address/mod.js");
de.company = await import("./company/mod.js");
de.internet = await import("./internet/mod.js");
de.lorem = await import("./lorem/mod.js");
de.name = await import("./name/mod.js");
de.phone_number = await import("./phone_number/mod.js");
de.cell_phone = await import("./cell_phone/mod.js");
