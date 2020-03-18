const fr: {
  [key: string]: any;
} = {};

fr.title = "French";
fr.address = await import("./address/mod.ts");
fr.company = await import("./company/mod.ts");
fr.internet = await import("./internet/mod.ts");
fr.lorem = await import("./lorem/mod.ts");
fr.name = await import("./name/mod.ts");
fr.phone_number = await import("./phone_number/mod.ts");

export { fr };
