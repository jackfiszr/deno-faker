const ja = {};

ja.title = "Japanese";
ja.address = await import("./address/mod.js");
ja.phone_number = await import("./phone_number/mod.js");
ja.cell_phone = await import("./cell_phone/mod.js");
ja.name = await import("./name/mod.js");

export { ja };
