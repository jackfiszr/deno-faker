import { assert, assertEquals, sinon } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "vehicle() returns a random vehicle",
  fn() {
    sinon.stub(faker.vehicle, "vehicle").returns("Ford Explorer");
    const vehicle = faker.vehicle.vehicle();
    assertEquals(vehicle, "Ford Explorer");
    faker.vehicle.vehicle.restore();
  },
});

test({
  name: "manufacturer() returns random manufacturer",
  fn() {
    sinon.stub(faker.vehicle, "manufacturer").returns("Porsche");
    const manufacturer = faker.vehicle.manufacturer();
    assertEquals(manufacturer, "Porsche");
    faker.vehicle.manufacturer.restore();
  },
});

test({
  name: "type() returns random vehicle type",
  fn() {
    sinon.stub(faker.vehicle, "type").returns("Minivan");
    const type = faker.vehicle.type();
    assertEquals(type, "Minivan");
    faker.vehicle.type.restore();
  },
});

test({
  name: "fuel() returns a fuel type",
  fn() {
    sinon.stub(faker.vehicle, "fuel").returns("Hybrid");
    const fuel = faker.vehicle.fuel();
    assertEquals(fuel, "Hybrid");
    faker.vehicle.fuel.restore();
  },
});

test({
  name: "vin() returns valid vin number",
  fn() {
    const vin = faker.vehicle.vin();
    assert(vin.match(/^[A-Z0-9]{10}[A-Z]{1}[A-Z0-9]{1}\d{5}$/));
  },
});

test({
  name: "color() returns a random color",
  fn() {
    sinon.stub(faker.vehicle, "color").returns("black");
    const color = faker.vehicle.color();
    assertEquals(color, "black");
    faker.vehicle.color.restore();
  },
});
