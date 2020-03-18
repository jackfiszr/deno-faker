const ru = {};

ru.title = "Russian";
ru.separator = " и ";
ru.address = await import("./address/mod.ts");
ru.internet = await import("./internet/mod.ts");
ru.name = await import("./name/mod.ts");
ru.phone_number = await import("./phone_number/mod.ts");
ru.commerce = await import("./commerce/mod.ts");
ru.company = await import("./company/mod.ts");
ru.date = await import("./date/mod.ts");
ru.hacker = await import("./hacker/mod.ts");

export { ru };
