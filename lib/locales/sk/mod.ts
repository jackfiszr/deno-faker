const sk = {};

sk.title = "Slovakian";
sk.address = await import("./address/mod.ts");
sk.company = await import("./company/mod.ts");
sk.internet = await import("./internet/mod.ts");
sk.lorem = await import("./lorem/mod.ts");
sk.name = await import("./name/mod.ts");
sk.phone_number = await import("./phone_number/mod.ts");

export { sk };
