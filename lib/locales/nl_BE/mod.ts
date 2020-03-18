const nl_BE: {
  [key: string]: any;
} = {};

nl_BE.title = "Dutch (Belgium)";
nl_BE.address = await import("./address/mod.ts");
nl_BE.company = await import("./company/mod.ts");
nl_BE.internet = await import("./internet/mod.ts");
nl_BE.name = await import("./name/mod.ts");
nl_BE.phone_number = await import("./phone_number/mod.ts");

export { nl_BE };
