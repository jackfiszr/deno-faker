const cz = {};

cz.title = "Czech";
cz.address = await import("./address/mod.ts");
cz.company = await import("./company/mod.ts");
cz.internet = await import("./internet/mod.ts");
cz.lorem = await import("./lorem/mod.ts");
cz.name = await import("./name/mod.ts");
cz.phone_number = await import("./phone_number/mod.ts");
cz.date = await import("./date/mod.ts");

export { cz };
