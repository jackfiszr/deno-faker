const fr_CH: {
  [key: string]: any;
} = {};

fr_CH.title = "French (Switzerland)";
fr_CH.address = await import("./address/mod.ts");
fr_CH.internet = await import("./internet/mod.ts");
fr_CH.phone_number = await import("./phone_number/mod.ts");

export { fr_CH };
