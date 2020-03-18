const az = {};

az.title = "Azerbaijani";
az.separator = " və ";
az.address = await import("./address/mod.ts");
az.internet = await import("./internet/mod.ts");
az.name = await import("./name/mod.ts");
az.phone_number = await import("./phone_number/mod.ts");
az.commerce = await import("./commerce/mod.ts");
az.company = await import("./company/mod.ts");
az.date = await import("./date/mod.ts");

export { az };
