var uk = {};
export { uk }
uk.title = "Ukrainian";
uk.address = await import("./address/mod.js");
uk.company = await import("./company/mod.js");
uk.internet = await import("./internet/mod.js");
uk.name = await import("./name/mod.js");
uk.phone_number = await import("./phone_number/mod.js");
