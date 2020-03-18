const id: {
  [key: string]: any;
} = {};

id.title = "Indonesia";
id.address = await import("./address/mod.ts");
id.company = await import("./company/mod.ts");
id.internet = await import("./internet/mod.ts");
id.date = await import("./date/mod.ts");
id.name = await import("./name/mod.ts");
id.phone_number = await import("./phone_number/mod.ts");

export { id };
