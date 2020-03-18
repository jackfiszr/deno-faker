const en_AU = {};
export { en_AU };
en_AU.title = "Australia (English)";
en_AU.name = await import("./name/mod.js");
en_AU.company = await import("./company/mod.js");
en_AU.internet = await import("./internet/mod.js");
en_AU.address = await import("./address/mod.js");
en_AU.phone_number = await import("./phone_number/mod.js");
