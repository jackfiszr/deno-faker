const fr_CA: {
  [key: string]: any;
} = {};

fr_CA.title = "Canada (French)";
fr_CA.address = await import("./address/mod.ts");
fr_CA.internet = await import("./internet/mod.ts");
fr_CA.phone_number = await import("./phone_number/mod.ts");

export { fr_CA };
