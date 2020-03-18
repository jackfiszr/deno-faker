const en_ZA = {};

en_ZA.title = "South Africa (English)";
en_ZA.address = await import("./address/mod.ts");
en_ZA.internet = await import("./internet/mod.ts");
en_ZA.name = await import("./name/mod.ts");
en_ZA.phone_number = await import("./phone_number/mod.ts");
en_ZA.cell_phone = await import("./cell_phone/mod.ts");
en_ZA.company = await import("./company/mod.ts");

export { en_ZA };
