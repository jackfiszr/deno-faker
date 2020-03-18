const el = {};

el.title = "Ελληνικά";
el.separator = " & ";
el.address = await import("./address/mod.ts");
el.credit_card = await import("./credit_card/mod.ts");
el.company = await import("./company/mod.ts");
el.internet = await import("./internet/mod.ts");
el.lorem = await import("./lorem/mod.ts");
el.name = await import("./name/mod.ts");
el.phone_number = await import("./phone_number/mod.ts");
el.cell_phone = await import("./cell_phone/mod.ts");
el.business = await import("./business/mod.ts");
el.commerce = await import("./commerce/mod.ts");
el.team = await import("./team/mod.ts");
el.hacker = await import("./hacker/mod.ts");
el.app = await import("./app/mod.ts");
el.finance = await import("./finance/mod.ts");

export { el };
