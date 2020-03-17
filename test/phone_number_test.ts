import { assert, sinon } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "phoneNumber() returns a random phoneNumber with a random format",
  fn() {
    sinon.spy(faker.helpers, "replaceSymbolWithNumber");
    const phone_number = faker.phone.phoneNumber();
    assert(phone_number.match(/\d/));
    assert(faker.helpers.replaceSymbolWithNumber.called);
    faker.helpers.replaceSymbolWithNumber.restore();
  }
});

test({
  name:
    "phoneNumberFormat() returns phone number with requested format (Array index)",
  fn() {
    faker.locale = "en";
    for (let i = 0; i < 10; i++) {
      const phone_number = faker.phone.phoneNumberFormat(1);
      assert(phone_number.match(/\(\d\d\d\) \d\d\d-\d\d\d\d/));
    }
  }
});

test({
  name:
    "phoneNumberFormat() returns phone number with proper format US (Array index)",
  fn() {
    faker.locale = "en";
    for (let i = 0; i < 25; i++) {
      const phone_number = faker.phone.phoneNumberFormat(1);
      console.log(phone_number);
      assert(phone_number.match(/\([2-9]\d\d\) [2-9]\d\d-\d\d\d\d/));
    }
  }
});

test({
  name:
    "phoneNumberFormat() returns phone number with proper format CA (Array index)",
  fn() {
    faker.locale = "en_CA";
    for (let i = 0; i < 25; i++) {
      const phone_number = faker.phone.phoneNumberFormat(1);
      assert(phone_number.match(/\([2-9]\d\d\)[2-9]\d\d-\d\d\d\d/));
    }
  }
});
