import { assertEquals, sinon } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "column() returns a column name",
  fn() {
    sinon.stub(faker.database, "column").returns("title");
    const column = faker.database.column();
    assertEquals(column, "title");
    faker.database.column.restore();
  }
});

test({
  name: "collation() returns a collation",
  fn() {
    sinon.stub(faker.database, "collation").returns("utf8_bin");
    const collation = faker.database.collation();
    assertEquals(collation, "utf8_bin");
    faker.database.collation.restore();
  }
});

test({
  name: "engine() returns an engine",
  fn() {
    sinon.stub(faker.database, "engine").returns("InnoDB");
    const engine = faker.database.engine();
    assertEquals(engine, "InnoDB");
    faker.database.engine.restore();
  }
});

test({
  name: "type() returns a column type",
  fn() {
    sinon.stub(faker.database, "type").returns("int");
    const type = faker.database.type();
    assertEquals(type, "int");
    faker.database.type.restore();
  }
});
