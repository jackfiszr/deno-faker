const en = {};

en.title = "English";
en.separator = " & ";
en.address = await import("./address/mod.js");
en.company = await import("./company/mod.js");
en.internet = await import("./internet/mod.js");
en.database = await import("./database/mod.js");
en.lorem = await import("./lorem/mod.js");
en.name = await import("./name/mod.js");
en.phone_number = await import("./phone_number/mod.js");
en.cell_phone = await import("./cell_phone/mod.js");
en.business = await import("./business/mod.js");
en.commerce = await import("./commerce/mod.js");
en.team = await import("./team/mod.js");
en.hacker = await import("./hacker/mod.js");
en.app = await import("./app/mod.js");
en.finance = await import("./finance/mod.js");
en.date = await import("./date/mod.js");
en.system = await import("./system/mod.js");
en.vehicle = await import("./vehicle/mod.js");

export { en };
