const en_AU: {
  [key: string]: any;
} = {};

en_AU.title = "Australia (English)";
en_AU.name = await import("./name/mod.ts");
en_AU.company = await import("./company/mod.ts");
en_AU.internet = await import("./internet/mod.ts");
en_AU.address = await import("./address/mod.ts");
en_AU.phone_number = await import("./phone_number/mod.ts");

export { en_AU };
