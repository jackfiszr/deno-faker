const de_AT = {};

de_AT.title = "German (Austria)";
de_AT.address = await import("./address/mod.js");
de_AT.company = await import("./company/mod.js");
de_AT.internet = await import("./internet/mod.js");
de_AT.name = await import("./name/mod.js");
de_AT.phone_number = await import("./phone_number/mod.js");
de_AT.cell_phone = await import("./cell_phone/mod.js");

export { de_AT };
