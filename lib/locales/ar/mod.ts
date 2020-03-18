const ar = {};

ar.title = "Arabic";
ar.separator = " & ";
ar.address = await import("./address/mod.ts");
ar.phone_number = await import("./phone_number/mod.ts");
ar.cell_phone = await import("./cell_phone/mod.ts");
ar.commerce = await import("./commerce/mod.ts");

export { ar };
