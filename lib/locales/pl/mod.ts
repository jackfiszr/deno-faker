const pl = {};

pl.title = "Polish";
pl.name = await import("./name/mod.ts");
pl.address = await import("./address/mod.ts");
pl.company = await import("./company/mod.ts");
pl.internet = await import("./internet/mod.ts");
pl.lorem = await import("./lorem/mod.ts");
pl.phone_number = await import("./phone_number/mod.ts");
pl.cell_phone = await import("./cell_phone/mod.ts");

export { pl };
