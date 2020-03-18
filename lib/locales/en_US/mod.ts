const en_US = {};

en_US.title = "United States (English)";
en_US.internet = await import("./internet/mod.ts");
en_US.address = await import("./address/mod.ts");
en_US.phone_number = await import("./phone_number/mod.ts");

export { en_US };
