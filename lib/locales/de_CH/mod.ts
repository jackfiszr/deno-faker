const de_CH: {
  [key: string]: any;
} = {};

de_CH.title = "German (Switzerland)";
de_CH.address = await import("./address/mod.ts");
de_CH.company = await import("./company/mod.ts");
de_CH.internet = await import("./internet/mod.ts");
de_CH.name = await import("./name/mod.ts");
de_CH.phone_number = await import("./phone_number/mod.ts");

export { de_CH };
