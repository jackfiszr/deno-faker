const ge = {};

ge.title = "Georgian";
ge.separator = " და ";
ge.name = await import("./name/mod.ts");
ge.address = await import("./address/mod.ts");
ge.internet = await import("./internet/mod.ts");
ge.company = await import("./company/mod.ts");
ge.phone_number = await import("./phone_number/mod.ts");
ge.cell_phone = await import("./cell_phone/mod.ts");

export { ge };
