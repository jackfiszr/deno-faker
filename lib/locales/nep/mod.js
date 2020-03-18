const nep = {};
export { nep };
nep.title = "Nepalese";
nep.name = await import("./name/mod.js");
nep.address = await import("./address/mod.js");
nep.internet = await import("./internet/mod.js");
nep.company = await import("./company/mod.js");
nep.phone_number = await import("./phone_number/mod.js");
