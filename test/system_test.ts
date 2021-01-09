import { assertEquals, sinon } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "directoryPath() returns unix fs directory full path",
  fn() {
    sinon.stub(faker.random, "words").returns("24/7");
    const directoryPath = faker.system.directoryPath();
    assertEquals(
      directoryPath.indexOf("/"),
      0,
      "generated directoryPath should start with /",
    );
    faker.random.words.restore();
  },
});

test({
  name: "filePath() returns unix fs file full path",
  fn() {
    sinon.stub(faker.random, "words").returns("24/7");
    const filePath = faker.system.filePath();
    assertEquals(
      filePath.indexOf("/"),
      0,
      "generated filePath should start with /",
    );
    faker.random.words.restore();
  },
});

test({
  name: "fileName() returns filenames without system path seperators",
  fn() {
    sinon.stub(faker.random, "words").returns("24/7");
    const fileName = faker.system.fileName();
    assertEquals(
      fileName.indexOf("/"),
      -1,
      "generated fileNames should not have path seperators",
    );
    faker.random.words.restore();
  },
});

test({
  name: "commonFileName() returns filenames without system path seperators",
  fn() {
    sinon.stub(faker.random, "words").returns("24/7");
    const fileName = faker.system.commonFileName();
    assertEquals(
      fileName.indexOf("/"),
      -1,
      "generated commonFileNames should not have path seperators",
    );
    faker.random.words.restore();
  },
});
