const nep = {};

nep.title = "Nepalese";
nep.name = await import("./name/mod.ts");
nep.address = await import("./address/mod.ts");
nep.internet = await import("./internet/mod.ts");
nep.company = await import("./company/mod.ts");
nep.phone_number = await import("./phone_number/mod.ts");

export { nep };
