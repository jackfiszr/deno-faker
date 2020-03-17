var ge = {};
export { ge }
ge.title = "Georgian";
ge.separator = " და ";
ge.name = await import("./name/mod.js");
ge.address = await import("./address/mod.js");
ge.internet = await import("./internet/mod.js");
ge.company = await import("./company/mod.js");
ge.phone_number = await import("./phone_number/mod.js");
ge.cell_phone = await import("./cell_phone/mod.js");
