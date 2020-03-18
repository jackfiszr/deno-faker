const nb_NO = {};

nb_NO.title = "Norwegian";
nb_NO.address = await import("./address/mod.ts");
nb_NO.company = await import("./company/mod.ts");
nb_NO.internet = await import("./internet/mod.ts");
nb_NO.name = await import("./name/mod.ts");
nb_NO.phone_number = await import("./phone_number/mod.ts");

export { nb_NO };
