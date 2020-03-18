const nl = {};

nl.title = "Dutch";
nl.address = await import("./address/mod.ts");
nl.company = await import("./company/mod.ts");
nl.internet = await import("./internet/mod.ts");
nl.lorem = await import("./lorem/mod.ts");
nl.name = await import("./name/mod.ts");
nl.phone_number = await import("./phone_number/mod.ts");

export { nl };
