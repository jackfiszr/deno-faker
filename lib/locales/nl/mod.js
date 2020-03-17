var nl = {};
export { nl };
nl.title = "Dutch";
nl.address = await import("./address/mod.js");
nl.company = await import("./company/mod.js");
nl.internet = await import("./internet/mod.js");
nl.lorem = await import("./lorem/mod.js");
nl.name = await import("./name/mod.js");
nl.phone_number = await import("./phone_number/mod.js");
