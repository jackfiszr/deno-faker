const tr: {
  [key: string]: any;
} = {};

tr.title = "Turkish";
tr.address = await import("./address/mod.ts");
tr.internet = await import("./internet/mod.ts");
tr.lorem = await import("./lorem/mod.ts");
tr.phone_number = await import("./phone_number/mod.ts");
tr.cell_phone = await import("./cell_phone/mod.ts");
tr.name = await import("./name/mod.ts");

export { tr };
