const pt_BR = {};

pt_BR.title = "Portuguese (Brazil)";
pt_BR.address = await import("./address/mod.ts");
pt_BR.company = await import("./company/mod.ts");
pt_BR.internet = await import("./internet/mod.ts");
pt_BR.lorem = await import("./lorem/mod.ts");
pt_BR.name = await import("./name/mod.ts");
pt_BR.phone_number = await import("./phone_number/mod.ts");

export { pt_BR };
