const fa = {};

fa.title = "Farsi";
fa.name = await import("./name/mod.js");
fa.address = await import("./address/mod.js");

export { fa };
