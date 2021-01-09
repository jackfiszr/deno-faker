import {
  assert,
  assertEquals,
  assertStrictEquals,
  sinon,
} from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "color() returns random value from commerce.color array",
  fn() {
    const color = faker.commerce.color();
    assert(faker.definitions.commerce.color.indexOf(color) !== -1);
  },
});

test({
  name:
    "department(max, fixedValue) should use the default amounts when not passing arguments",
  fn() {
    const department = faker.commerce.department();
    assert(department.split(" ").length === 1);
  },
});
/*
test({
  name: 'department(max, fixedValue) should return only one value if we specify a maximum of one',
  fn () {
    sinon.spy(faker.random, 'arrayElement')
    const department = faker.commerce.department(1)
    assertStrictEquals(department.split(" ").length, 1)
    assert(faker.random.arrayElement.calledOnce)
    faker.random.arrayElement.restore()
  }
})

test({
  name: 'department(max, fixedValue) should return the maxiumum value if we specify the fixed value',
  fn () {
    sinon.spy(faker.random, 'arrayElement')
    const department = faker.commerce.department(5, true)
    console.log(department)
    // account for the separator
    assertStrictEquals(department.split(" ").length, 6)
    // Sometimes it will generate duplicates that aren't used in the final string,
    // so we check if arrayElement has been called exactly or more than 5 times
    assert(faker.random.arrayElement.callCount >= 5)
    faker.random.arrayElement.restore()
  }
})
*/
test({
  name:
    "productName() returns name comprising of an adjective, material and product",
  fn() {
    sinon.spy(faker.random, "arrayElement");
    sinon.spy(faker.commerce, "productAdjective");
    sinon.spy(faker.commerce, "productMaterial");
    sinon.spy(faker.commerce, "product");
    const name = faker.commerce.productName();

    assert(name.split(" ").length >= 3);
    assert(faker.random.arrayElement.calledThrice);
    assert(faker.commerce.productAdjective.calledOnce);
    assert(faker.commerce.productMaterial.calledOnce);
    assert(faker.commerce.product.calledOnce);

    faker.random.arrayElement.restore();
    faker.commerce.productAdjective.restore();
    faker.commerce.productMaterial.restore();
    faker.commerce.product.restore();
  },
});

test({
  name:
    "price(min, max, dec, symbol) should use the default amounts when not passing arguments",
  fn() {
    const price = faker.commerce.price();
    assert(price);
    assertEquals((price > 0), true, "the amount should be greater than 0");
    assertEquals((price < 1001), true, "the amount should be less than 1000");
  },
});

test({
  name:
    "price(min, max, dec, symbol) should use the default decimal location when not passing arguments",
  fn() {
    const price = faker.commerce.price();
    const decimal = ".";
    const expected = price.length - 3;
    const actual = price.indexOf(decimal);
    assertEquals(
      actual,
      expected,
      "The expected location of the decimal is " + expected + " but it was " +
        actual + " amount " + price,
    );
  },
});

test({
  name:
    "price(min, max, dec, symbol) should not include a currency symbol by default",
  fn() {
    const amount = faker.commerce.price();
    const regexp = new RegExp(/[0-9.]/);
    const expected = true;
    const actual = regexp.test(amount);
    assertEquals(
      actual,
      expected,
      "The expected match should not include a currency symbol",
    );
  },
});

test({
  name:
    "price(min, max, dec, symbol) it should handle negative amounts, but return 0",
  fn() {
    const amount = faker.commerce.price(-200, -1);
    assert(amount);
    assertEquals((amount == 0.00), true, "the amount should equal 0");
  },
});

test({
  name: "price(min, max, dec, symbol) it should handle argument dec",
  fn() {
    const price = faker.commerce.price(100, 100, 1);
    assert(price);
    assertStrictEquals(price, "100.0", "the price should be equal 100.0");
  },
});

test({
  name: "price(min, max, dec, symbol) it should handle argument dec = 0",
  fn() {
    const price = faker.commerce.price(100, 100, 0);
    assert(price);
    assertStrictEquals(price, "100", "the price should be equal 100");
  },
});
