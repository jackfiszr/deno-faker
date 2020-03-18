const de_AT = {};

de_AT.title = "German (Austria)";
de_AT.address = await import("./address/mod.ts");
de_AT.company = await import("./company/mod.ts");
de_AT.internet = await import("./internet/mod.ts");
de_AT.name = await import("./name/mod.ts");
de_AT.phone_number = await import("./phone_number/mod.ts");
de_AT.cell_phone = await import("./cell_phone/mod.ts");

export { de_AT };
