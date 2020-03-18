const lv: {
  [key: string]: any;
} = {};

lv.title = "Latvian";
lv.separator = " un ";
lv.name = await import("./name/mod.ts");
lv.date = await import("./date/mod.ts");
lv.address = await import("./address/mod.ts");
lv.phone_number = await import("./phone_number/mod.ts");
lv.cell_phone = await import("./cell_phone/mod.ts");
lv.commerce = await import("./commerce/mod.ts");
lv.company = await import("./company/mod.ts");
lv.internet = await import("./internet/mod.ts");
lv.lorem = await import("./lorem/mod.ts");

export { lv };
