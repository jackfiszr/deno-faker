const nb_NO = {};

nb_NO.title = "Norwegian";
nb_NO.address = await import("./address/mod.js");
nb_NO.company = await import("./company/mod.js");
nb_NO.internet = await import("./internet/mod.js");
nb_NO.name = await import("./name/mod.js");
nb_NO.phone_number = await import("./phone_number/mod.js");

export { nb_NO };
