const uk = {};

uk.title = "Ukrainian";
uk.address = await import("./address/mod.ts");
uk.company = await import("./company/mod.ts");
uk.internet = await import("./internet/mod.ts");
uk.name = await import("./name/mod.ts");
uk.phone_number = await import("./phone_number/mod.ts");

export { uk };
