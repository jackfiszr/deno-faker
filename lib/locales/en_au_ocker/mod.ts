const en_au_ocker = {};

en_au_ocker.title = "Australia Ocker (English)";
en_au_ocker.name = await import("./name/mod.ts");
en_au_ocker.company = await import("./company/mod.ts");
en_au_ocker.internet = await import("./internet/mod.ts");
en_au_ocker.address = await import("./address/mod.ts");
en_au_ocker.phone_number = await import("./phone_number/mod.ts");

export { en_au_ocker };
