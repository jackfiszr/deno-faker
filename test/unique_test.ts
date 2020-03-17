import { assert, assertEquals } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name:
    "unique() is able to call a function with no arguments and return a result",
  fn() {
    const result = faker.unique(faker.internet.email);
    assertEquals(typeof result, "string");
  }
});

test({
  name:
    "unique() is able to call a function with arguments and return a result",
  fn() {
    const result = faker.unique(faker.internet.email, ["a", "b", "c"]); // third argument is provider, or domain for email
    assert(result.match(/\@c/));
  }
});

test({
  name:
    "unique() is able to call same function with arguments and return a result",
  fn() {
    const result = faker.unique(faker.internet.email, ["a", "b", "c"]); // third argument is provider, or domain for email
    assert(result.match(/\@c/));
  }
});

test({
  name: "unique() is able to exclude results as array",
  fn() {
    const result = faker.unique(
      faker.internet.protocol,
      [],
      { exclude: ["https"] }
    );
    assertEquals(result, "http");
  }
});

test({
  name: "unique() is able to limit unique call by maxTime in ms",
  fn() {
    let result;
    try {
      result = faker.unique(
        faker.internet.protocol,
        [],
        { maxTime: 1, maxRetries: 9999, exclude: ["https", "http"] }
      );
    } catch (err) {
      assertEquals(err.message.substr(0, 16), "Exceeded maxTime");
    }
  }
});

test({
  name: "unique() is able to limit unique call by maxRetries",
  fn() {
    let result;
    try {
      result = faker.unique(
        faker.internet.protocol,
        [],
        { maxTime: 5000, maxRetries: 5, exclude: ["https", "http"] }
      );
    } catch (err) {
      assertEquals(err.message.substr(0, 19), "Exceeded maxRetries");
    }
  }
});

test({
  name:
    "unique() is able to call last function with arguments and return a result",
  fn() {
    const result = faker.unique(faker.internet.email, ["a", "b", "c"]); // third argument is provider, or domain for email
    assert(result.match(/\@c/));
  }
});
