const sk = {};

sk.title = "Slovakian";
sk.address = await import("./address/mod.js");
sk.company = await import("./company/mod.js");
sk.internet = await import("./internet/mod.js");
sk.lorem = await import("./lorem/mod.js");
sk.name = await import("./name/mod.js");
sk.phone_number = await import("./phone_number/mod.js");

export { sk };
