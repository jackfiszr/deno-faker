const es = {};

es.title = "Spanish";
es.address = await import("./address/mod.js");
es.company = await import("./company/mod.js");
es.internet = await import("./internet/mod.js");
es.name = await import("./name/mod.js");
es.phone_number = await import("./phone_number/mod.js");
es.cell_phone = await import("./cell_phone/mod.js");
es.commerce = await import("./commerce/mod.js");

export { es };
