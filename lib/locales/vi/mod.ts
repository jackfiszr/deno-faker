const vi: {
  [key: string]: any;
} = {};

vi.title = "Vietnamese";
vi.address = await import("./address/mod.ts");
vi.internet = await import("./internet/mod.ts");
vi.phone_number = await import("./phone_number/mod.ts");
vi.cell_phone = await import("./cell_phone/mod.ts");
vi.name = await import("./name/mod.ts");
vi.company = await import("./company/mod.ts");
vi.lorem = await import("./lorem/mod.ts");

export { vi };
