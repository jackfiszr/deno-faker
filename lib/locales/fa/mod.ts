const fa = {};

fa.title = "Farsi";
fa.name = await import("./name/mod.ts");
fa.address = await import("./address/mod.ts");

export { fa };
