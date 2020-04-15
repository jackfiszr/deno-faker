import { assert, assertEquals, assertThrows, _ } from "./support/test_deps.ts";
import * as mersenne from "../vendor/mersenne.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "number() returns a random number given a maximum value as Number",
  fn() {
    const max = 10;
    assert(faker.random.number(max) <= max);
  }
});

test({
  name: "number() returns a random number given a maximum value as Object",
  fn() {
    const options = { max: 10 };
    assert(faker.random.number(options) <= options.max);
  }
});

test({
  name: "number() returns a random number given a maximum value of 0",
  fn() {
    const options = { max: 0 };
    assert(faker.random.number(options) === 0);
  }
});

test({
  name:
    "number() returns a random number given a negative number minimum and maximum value of 0",
  fn() {
    const options = { min: -100, max: 0 };
    assert(faker.random.number(options) <= options.max);
  }
});

test({
  name: "number() returns a random number between a range",
  fn() {
    const options = { min: 22, max: 33 };
    for (let i = 0; i < 100; i++) {
      const randomNumber = faker.random.number(options);
      assert(randomNumber >= options.min);
      assert(randomNumber <= options.max);
    }
  }
});

test({
  name: "number() provides numbers with a given precision",
  fn() {
    const options = { min: 0, max: 1.5, precision: 0.5 };
    const results = _.chain(_.range(50)).map(function() {
      return faker.random.number(options);
    }).uniq().value().sort();
    assert(_.includes(results, 0.5));
    assert(_.includes(results, 1.0));
    assertEquals(results[0], 0);
    assertEquals(_.last(results), 1.5);
  }
});

test({
  name: "number() provides numbers with a with exact precision",
  fn() {
    const options = { min: 0.5, max: 0.99, precision: 0.01 };
    for (let i = 0; i < 100; i++) {
      const number = faker.random.number(options);
      assertEquals(number, Number(number.toFixed(2)));
    }
  }
});

test({
  name: "number() should not modify the input object",
  fn() {
    const min = 1;
    const max = 2;
    const opts = {
      min: min,
      max: max
    };
    faker.random.number(opts);
    assertEquals(opts.min, min);
    assertEquals(opts.max, max);
  }
});

test({
  name:
    "number() should return deterministic results when seeded with integer",
  fn() {
    faker.seed(100);
    const name = faker.name.findName();
    assertEquals(name, "Eva Jenkins");
  }
});

test({
  name:
    "number() should return deterministic results when seeded with array - one element",
  fn() {
    faker.seed([10]);
    const name = faker.name.findName();
    assertEquals(name, "Duane Kub");
  }
});

test({
  name:
    "number() should return deterministic results when seeded with array - multiple elements",
  fn() {
    faker.seed([10, 100, 1000]);
    const name = faker.name.findName();
    assertEquals(name, "Alma Shanahan");
  }
});

test({
  name: "float() returns a random float with a default precision value (0.01)",
  fn() {
    const number = faker.random.float();
    assertEquals(number, Number(number.toFixed(2)));
  }
});

test({
  name: "float() returns a random float given a precision value",
  fn() {
    const number = faker.random.float(0.001);
    assertEquals(number, Number(number.toFixed(3)));
  }
});

test({
  name: "float() returns a random number given a maximum value as Object",
  fn() {
    const options = { max: 10 };
    assert(faker.random.float(options) <= options.max);
  }
});

test({
  name: "float() returns a random number given a maximum value of 0",
  fn() {
    const options = { max: 0 };
    assert(faker.random.float(options) === 0);
  }
});

test({
  name:
    "float() returns a random number given a negative number minimum and maximum value of 0",
  fn() {
    const options = { min: -100, max: 0 };
    assert(faker.random.float(options) <= options.max);
  }
});

test({
  name: "float() returns a random number between a range",
  fn() {
    const options = { min: 22, max: 33 };
    for (let i = 0; i < 5; i++) {
      const randomNumber = faker.random.float(options);
      assert(randomNumber >= options.min);
      assert(randomNumber <= options.max);
    }
  }
});

test({
  name: "float() provides numbers with a given precision",
  fn() {
    const options = { min: 0, max: 1.5, precision: 0.5 };
    const results = _.chain(_.range(50)).map(function() {
      return faker.random.float(options);
    }).uniq().value().sort();
    assert(_.includes(results, 0.5));
    assert(_.includes(results, 1.0));
    assertEquals(results[0], 0);
    assertEquals(_.last(results), 1.5);
  }
});

test({
  name: "float() provides numbers with a with exact precision",
  fn() {
    const options = { min: 0.5, max: 0.99, precision: 0.01 };
    for (let i = 0; i < 100; i++) {
      const number = faker.random.float(options);
      assertEquals(number, Number(number.toFixed(2)));
    }
  }
});

test({
  name: "float() should not modify the input object",
  fn() {
    const min = 1;
    const max = 2;
    const opts = {
      min: min,
      max: max
    };
    faker.random.float(opts);
    assertEquals(opts.min, min);
    assertEquals(opts.max, max);
  }
});

test({
  name: "arrayElement() returns a random element in the array",
  fn() {
    const testArray = ["hello", "to", "you", "my", "friend"];
    assert(testArray.indexOf(faker.random.arrayElement(testArray)) > -1);
  }
});

test({
  name:
    "arrayElement() returns a random element in the array when there is only 1",
  fn() {
    const testArray = ["hello"];
    assert(testArray.indexOf(faker.random.arrayElement(testArray)) > -1);
  }
});

test({
  name: "arrayElements() returns a subset with random elements in the array",
  fn() {
    const testArray = ["hello", "to", "you", "my", "friend"];
    const subset = faker.random.arrayElements(testArray);
    // Check length
    assert(subset.length >= 1 && subset.length <= testArray.length);
    // Check elements
    subset.forEach((element: string) => {
      assert(testArray.indexOf(element) > -1);
    });
    // Check uniqueness
    subset.forEach((element: string) => {
      assert(!subset.hasOwnProperty(element));
      // this[element] = true
      Object.defineProperty(subset, element, { value: true });
    }, {});
  }
});

test({
  name:
    "arrayElements() returns a subset of fixed length with random elements in the array",
  fn() {
    const testArray = ["hello", "to", "you", "my", "friend"];
    const subset = faker.random.arrayElements(testArray, 3);
    // Check length
    assert(subset.length === 3);
    // Check elements
    subset.forEach((element: string) => {
      assert(testArray.indexOf(element) > -1);
    });
    // Check uniqueness
    subset.forEach((element: string) => {
      assert(!subset.hasOwnProperty(element));
      Object.defineProperty(subset, element, { value: true });
    }, {});
  }
});

test({
  name: "UUID() should generate a valid UUID",
  fn() {
    const UUID = faker.random.uuid();
    const RFC4122 =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    assert(RFC4122.test(UUID));
  }
});

test({
  name: "boolean() should generate a boolean value",
  fn() {
    const bool = faker.random.boolean();
    assert(typeof bool == "boolean");
  }
});

test({
  name: "semver() should generate a string",
  fn() {
    const semver = faker.system.semver();
    assert(typeof semver === "string");
  }
});

test({
  name: "semver() should generate a valid semver",
  fn() {
    const semver = faker.system.semver();
    assert(/^\d+\.\d+\.\d+$/.test(semver));
  }
});

test({
  name: "alpha() should return single letter when no count provided",
  fn() {
    const alpha = faker.random.alpha;
    assert(alpha().length === 1);
  }
});

test({
  name:
    "alpha() should return lowercase letter when no upcase option provided",
  fn() {
    const alpha = faker.random.alpha;
    assert(alpha().match(/[a-z]/));
  }
});

test({
  name: "alpha() should return uppercase when upcase option is true",
  fn() {
    const alpha = faker.random.alpha;
    assert(alpha({ upcase: true }).match(/[A-Z]/));
  }
});

test({
  name: "alpha() should generate many random letters",
  fn() {
    const alpha = faker.random.alpha;
    assert(alpha(5).length === 5);
  }
});

test({
  name:
    "alphaNumeric() should generate single character when no additional argument was provided",
  fn() {
    const alphaNumeric = faker.random.alphaNumeric;
    assert(alphaNumeric().length === 1);
  }
});

test({
  name: "alphaNumeric() should generate many random characters",
  fn() {
    const alphaNumeric = faker.random.alphaNumeric;
    assert(alphaNumeric(5).length === 5);
  }
});

test({
  name:
    "hexaDecimal() should generate single hex character when no additional argument was provided",
  fn() {
    const hex = faker.random.hexaDecimal();
    assert(hex.match(/^(0x)[0-9a-f]{1}$/i));
  }
});

test({
  name: "hexaDecimal() should generate a random hex string",
  fn() {
    const hex = faker.random.hexaDecimal(5);
    assert(hex.match(/^(0x)[0-9a-f]+$/i));
  }
});

test({
  name:
    "MersenneTwister returns a random number without given min / max arguments",
  fn() {
    const max = 10;
    const randomNumber = mersenne.rand();
    assert(typeof randomNumber === "number");
  }
});
/*
test({
  name: 'MersenneTwister throws an error when attempting to seed() a non-integer',
  fn () {
    assertThrows(function () {
      mersenne.seed('abc')
    }, Error)
  }
})

test({
  name: 'MersenneTwister throws an error when attempting to seed_array() a non-integer',
  fn () {
    assertThrows(function () {
      mersenne.seed_array('abc')
    }, Error)
  }
})
*/
