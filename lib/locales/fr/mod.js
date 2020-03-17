var fr = {};
export { fr };
fr.title = "French";
fr.address = await import("./address/mod.js");
fr.company = await import("./company/mod.js");
fr.internet = await import("./internet/mod.js");
fr.lorem = await import("./lorem/mod.js");
fr.name = await import("./name/mod.js");
fr.phone_number = await import("./phone_number/mod.js");
