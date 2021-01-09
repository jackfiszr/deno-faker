import { assert, assertThrows } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name:
    "fake() replaces a token with a random value for a method with no parameters",
  fn() {
    const name = faker.fake("{{phone.phoneNumber}}");
    assert(name.match(/\d/));
  },
});

test({
  name:
    "fake() replaces multiple tokens with random values for methods with no parameters",
  fn() {
    const name = faker.fake(
      "{{helpers.randomize}}{{helpers.randomize}}{{helpers.randomize}}",
    );
    assert(name.match(/[abc]{3}/));
  },
});

test({
  name:
    "fake() replaces a token with a random value for a methods with a simple parameter",
  fn() {
    const random = faker.fake('{{helpers.slugify("Will This Work")}}');
    assert(random === "Will-This-Work");
  },
});
test({
  name:
    "fake() replaces a token with a random value for a method with an array parameter",
  fn() {
    const arr = ["one", "two", "three"];
    const random = faker.fake(
      '{{helpers.randomize(["one", "two", "three"])}}',
    );
    assert(arr.indexOf(random) > -1);
  },
});

test({
  name: "fake() does not allow undefined parameters",
  fn() {
    assertThrows(function () {
      faker.fake();
    }, Error);
  },
});

test({
  name: "fake() does not allow invalid module name",
  fn() {
    assertThrows(function () {
      faker.fake("{{foo.bar}}");
    }, Error);
  },
});

test({
  name: "fake() does not allow invalid method name",
  fn() {
    assertThrows(function () {
      faker.fake("{{address.foo}}");
    }, Error);
  },
});
