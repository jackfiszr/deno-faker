const en_CA = {};

en_CA.title = "Canada (English)";
en_CA.address = await import("./address/mod.ts");
en_CA.internet = await import("./internet/mod.ts");
en_CA.phone_number = await import("./phone_number/mod.ts");

export { en_CA };
