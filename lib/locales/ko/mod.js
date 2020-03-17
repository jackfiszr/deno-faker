var ko = {};
export { ko }
ko.title = "Korean";
ko.address = await import("./address/mod.js");
ko.phone_number = await import("./phone_number/mod.js");
ko.company = await import("./company/mod.js");
ko.internet = await import("./internet/mod.js");
ko.lorem = await import("./lorem/mod.js");
ko.name = await import("./name/mod.js");
