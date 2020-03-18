const id = {};

id.title = "Indonesia";
id.address = await import("./address/mod.js");
id.company = await import("./company/mod.js");
id.internet = await import("./internet/mod.js");
id.date = await import("./date/mod.js");
id.name = await import("./name/mod.js");
id.phone_number = await import("./phone_number/mod.js");

export { id };
