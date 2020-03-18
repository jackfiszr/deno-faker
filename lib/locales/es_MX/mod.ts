const es_MX: {
  [key: string]: any;
} = {};

es_MX.title = "Spanish Mexico";
es_MX.separator = " & ";
es_MX.name = await import("./name/mod.ts");
es_MX.address = await import("./address/mod.ts");
es_MX.company = await import("./company/mod.ts");
es_MX.internet = await import("./internet/mod.ts");
es_MX.phone_number = await import("./phone_number/mod.ts");
es_MX.cell_phone = await import("./cell_phone/mod.ts");
es_MX.lorem = await import("./lorem/mod.ts");
es_MX.commerce = await import("./commerce/mod.ts");
es_MX.team = await import("./team/mod.ts");

export { es_MX };
