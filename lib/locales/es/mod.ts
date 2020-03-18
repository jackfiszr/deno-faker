const es: {
  [key: string]: any;
} = {};

es.title = "Spanish";
es.address = await import("./address/mod.ts");
es.company = await import("./company/mod.ts");
es.internet = await import("./internet/mod.ts");
es.name = await import("./name/mod.ts");
es.phone_number = await import("./phone_number/mod.ts");
es.cell_phone = await import("./cell_phone/mod.ts");
es.commerce = await import("./commerce/mod.ts");

export { es };
