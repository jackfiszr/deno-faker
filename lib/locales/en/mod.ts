const en = {};

en.title = "English";
en.separator = " & ";
en.address = await import("./address/mod.ts");
en.company = await import("./company/mod.ts");
en.internet = await import("./internet/mod.ts");
en.database = await import("./database/mod.ts");
en.lorem = await import("./lorem/mod.ts");
en.name = await import("./name/mod.ts");
en.phone_number = await import("./phone_number/mod.ts");
en.cell_phone = await import("./cell_phone/mod.ts");
en.business = await import("./business/mod.ts");
en.commerce = await import("./commerce/mod.ts");
en.team = await import("./team/mod.ts");
en.hacker = await import("./hacker/mod.ts");
en.app = await import("./app/mod.ts");
en.finance = await import("./finance/mod.ts");
en.date = await import("./date/mod.ts");
en.system = await import("./system/mod.ts");
en.vehicle = await import("./vehicle/mod.ts");

export { en };
