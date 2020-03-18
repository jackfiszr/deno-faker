const pt_BR = {};

pt_BR.title = "Portuguese (Brazil)";
pt_BR.address = await import("./address/mod.js");
pt_BR.company = await import("./company/mod.js");
pt_BR.internet = await import("./internet/mod.js");
pt_BR.lorem = await import("./lorem/mod.js");
pt_BR.name = await import("./name/mod.js");
pt_BR.phone_number = await import("./phone_number/mod.js");

export { pt_BR };
