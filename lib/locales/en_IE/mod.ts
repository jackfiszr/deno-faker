const en_IE: {
  [key: string]: any;
} = {};

en_IE.title = "Ireland (English)";
en_IE.address = await import("./address/mod.ts");
en_IE.internet = await import("./internet/mod.ts");
en_IE.phone_number = await import("./phone_number/mod.ts");
en_IE.cell_phone = await import("./cell_phone/mod.ts");

export { en_IE };
