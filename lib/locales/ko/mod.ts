const ko = {};

ko.title = "Korean";
ko.address = await import("./address/mod.ts");
ko.phone_number = await import("./phone_number/mod.ts");
ko.company = await import("./company/mod.ts");
ko.internet = await import("./internet/mod.ts");
ko.lorem = await import("./lorem/mod.ts");
ko.name = await import("./name/mod.ts");

export { ko };
