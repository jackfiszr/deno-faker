const en_GB = {};
export { en_GB };
en_GB.title = "Great Britain (English)";
en_GB.address = await import("./address/mod.js");
en_GB.internet = await import("./internet/mod.js");
en_GB.phone_number = await import("./phone_number/mod.js");
en_GB.cell_phone = await import("./cell_phone/mod.js");
