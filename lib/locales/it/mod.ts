const it = {};

it.title = "Italian";
it.address = await import("./address/mod.ts");
it.company = await import("./company/mod.ts");
it.internet = await import("./internet/mod.ts");
it.name = await import("./name/mod.ts");
it.phone_number = await import("./phone_number/mod.ts");

export { it };
