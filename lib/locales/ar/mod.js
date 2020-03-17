var ar = {};
export { ar }
ar.title = "Arabic";
ar.separator = " & ";
ar.address = await import("./address/mod.js");
ar.phone_number = await import("./phone_number/mod.js");
ar.cell_phone = await import("./cell_phone/mod.js");
ar.commerce = await import("./commerce/mod.js");
