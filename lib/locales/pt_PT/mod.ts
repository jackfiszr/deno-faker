const pt_PT = {};

pt_PT.title = "Portuguese (Portugal)";
pt_PT.address = await import("./address/mod.ts");
pt_PT.internet = await import("./internet/mod.ts");
pt_PT.name = await import("./name/mod.ts");
pt_PT.phone_number = await import("./phone_number/mod.ts");
pt_PT.cell_phone = await import("./cell_phone/mod.ts");
pt_PT.commerce = await import("./commerce/mod.ts");
pt_PT.date = await import("./date/mod.ts");

export { pt_PT };
