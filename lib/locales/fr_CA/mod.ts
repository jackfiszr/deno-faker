const fr_CA = {};

fr_CA.title = "Canada (French)";
fr_CA.address = await import("./address/mod.js");
fr_CA.internet = await import("./internet/mod.js");
fr_CA.phone_number = await import("./phone_number/mod.js");

export { fr_CA };
