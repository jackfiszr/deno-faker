const en_IND = {};

en_IND.title = "India (English)";
en_IND.name = await import("./name/mod.ts");
en_IND.address = await import("./address/mod.ts");
en_IND.internet = await import("./internet/mod.ts");
en_IND.company = await import("./company/mod.ts");
en_IND.phone_number = await import("./phone_number/mod.ts");

export { en_IND };
