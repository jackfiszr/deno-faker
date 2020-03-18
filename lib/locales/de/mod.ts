const de = {};

de.title = "German";
de.address = await import("./address/mod.ts");
de.company = await import("./company/mod.ts");
de.internet = await import("./internet/mod.ts");
de.lorem = await import("./lorem/mod.ts");
de.name = await import("./name/mod.ts");
de.phone_number = await import("./phone_number/mod.ts");
de.cell_phone = await import("./cell_phone/mod.ts");

export { de };
