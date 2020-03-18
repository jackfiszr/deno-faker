const en_IND = {};

en_IND.title = "India (English)";
en_IND.name = await import("./name/mod.js");
en_IND.address = await import("./address/mod.js");
en_IND.internet = await import("./internet/mod.js");
en_IND.company = await import("./company/mod.js");
en_IND.phone_number = await import("./phone_number/mod.js");

export { en_IND };
