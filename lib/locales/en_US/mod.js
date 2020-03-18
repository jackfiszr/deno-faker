const en_US = {};
export { en_US };
en_US.title = "United States (English)";
en_US.internet = await import("./internet/mod.js");
en_US.address = await import("./address/mod.js");
en_US.phone_number = await import("./phone_number/mod.js");
