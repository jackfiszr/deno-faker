const ja: {
  [key: string]: any;
} = {};

ja.title = "Japanese";
ja.address = await import("./address/mod.ts");
ja.phone_number = await import("./phone_number/mod.ts");
ja.cell_phone = await import("./cell_phone/mod.ts");
ja.name = await import("./name/mod.ts");

export { ja };
