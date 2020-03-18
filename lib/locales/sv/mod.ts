const sv: {
  [key: string]: any;
} = {};

sv.title = "Swedish";
sv.address = await import("./address/mod.ts");
sv.company = await import("./company/mod.ts");
sv.internet = await import("./internet/mod.ts");
sv.name = await import("./name/mod.ts");
sv.phone_number = await import("./phone_number/mod.ts");
sv.cell_phone = await import("./cell_phone/mod.ts");
sv.commerce = await import("./commerce/mod.ts");
sv.team = await import("./team/mod.ts");
sv.date = await import("./date/mod.ts");

export { sv };
