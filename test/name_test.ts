import {
  assert,
  assertEquals,
  assertStrictEq,
  sinon
} from "./support/test_deps.ts";
import { testWrapper } from "./support/test_utils.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "firstName() returns a random name",
  fn(): void {
    sinon.stub(faker.name, "firstName").returns("foo");
    const first_name = faker.name.firstName();
    assertEquals(first_name, "foo");
    faker.name.firstName.restore();
  }
});

test({
  name: "lastName() returns a random name",
  fn(): void {
    sinon.stub(faker.name, "lastName").returns("foo");
    const last_name = faker.name.lastName();
    assertEquals(last_name, "foo");
    faker.name.lastName.restore();
  }
});

test({
  name: "findName() usually returns a first name and last name",
  fn(): void {
    sinon.stub(faker.random, "number").returns(5);
    const name = faker.name.findName();
    assert(name);
    const parts = name.split(" ");
    assertStrictEq(parts.length, 2);
    faker.random.number.restore();
  }
});

test({
  name:
    "findName() occasionally returns a first name and last name with a prefix",
  fn(): void {
    sinon.stub(faker.random, "number").returns(0);
    const name = faker.name.findName();
    const parts = name.split(" ");
    assert(parts.length >= 3);
    faker.random.number.restore();
  }
});

test({
  name: "findName() occasionally returns a male full name with a prefix",
  fn(): void {
    sinon.stub(faker.random, "number")
      .withArgs(8).returns(0) // with prefix
      .withArgs(1).returns(0); // gender male
    sinon.stub(faker.name, "prefix").withArgs(0).returns("X");
    sinon.stub(faker.name, "firstName").withArgs(0).returns("Y");
    sinon.stub(faker.name, "lastName").withArgs(0).returns("Z");
    const name = faker.name.findName();
    assertEquals(name, "X Y Z");
    faker.random.number.restore();
    faker.name.prefix.restore();
    faker.name.firstName.restore();
    faker.name.lastName.restore();
  }
});

test({
  name: "findName() occasionally returns a female full name with a prefix",
  fn(): void {
    sinon.stub(faker.random, "number")
      .withArgs(8).returns(0) // with prefix
      .withArgs(1).returns(1); // gender female
    sinon.stub(faker.name, "prefix").withArgs(1).returns("J");
    sinon.stub(faker.name, "firstName").withArgs(1).returns("K");
    sinon.stub(faker.name, "lastName").withArgs(1).returns("L");
    const name = faker.name.findName();
    assertEquals(name, "J K L");
    faker.random.number.restore();
    faker.name.prefix.restore();
    faker.name.firstName.restore();
    faker.name.lastName.restore();
  }
});

test({
  name:
    "findName() occasionally returns a first name and last name with a suffix",
  fn(): void {
    sinon.stub(faker.random, "number").returns(1);
    sinon.stub(faker.name, "suffix").returns("Jr.");
    const name = faker.name.findName();
    const parts = name.split(" ");
    assert(parts.length >= 3);
    assertEquals(parts[parts.length - 1], "Jr.");
    faker.name.suffix.restore();
    faker.random.number.restore();
  }
});

test({
  name:
    "findName() needs to work with specific locales and respect the fallbacks",
  fn(): void {
    faker.locale = "pl";
    // this will throw if this is broken
    const name = faker.name.findName();
    // reset locale
    faker.locale = "en";
  }
});
test({
  name: "title() returns a random title",
  fn(): void {
    sinon.stub(faker.name, "title").returns("Lead Solutions Supervisor");
    const title = faker.name.title();
    assertEquals(title, "Lead Solutions Supervisor");
    faker.name.title.restore();
  }
});

test({
  name:
    "jobTitle() returns a job title consisting of a descriptor, area, and type",
  fn(): void {
    sinon.spy(faker.random, "arrayElement");
    sinon.spy(faker.name, "jobDescriptor");
    sinon.spy(faker.name, "jobArea");
    sinon.spy(faker.name, "jobType");
    const jobTitle = faker.name.jobTitle();
    assert(typeof jobTitle === "string");
    assert(faker.random.arrayElement.calledThrice);
    assert(faker.name.jobDescriptor.calledOnce);
    assert(faker.name.jobArea.calledOnce);
    assert(faker.name.jobType.calledOnce);
    faker.random.arrayElement.restore();
    faker.name.jobDescriptor.restore();
    faker.name.jobArea.restore();
    faker.name.jobType.restore();
  }
});

let oldLocale: string;
function localePrefixes() {
  oldLocale = faker.locale;
  faker.locale = "TEST";
  faker.locales = {
    ...faker.locales,
    TEST: {
      name: {
        male_prefix: ["Mp"],
        female_prefix: ["Fp"]
      }
    }
  };
}
function localePrefix() {
  oldLocale = faker.locale;
  faker.locale = "TEST";
  faker.locales = {
    ...faker.locales,
    TEST: {
      name: {
        prefix: ["P"]
      }
    }
  };
}
function resetLocale() {
  faker.locale = oldLocale;
  delete faker.locale["TEST"];
}

testWrapper({
  name:
    "prefix() returns male prefix when using a locale with gender specific name prefixes",
  fn(): void {
    const prefix = faker.name.prefix(0);
    assertEquals(prefix, "Mp");
  }
}, localePrefixes, resetLocale);

testWrapper({
  name:
    "prefix() returns female prefix when using a locale with gender specific name prefixes",
  fn(): void {
    const prefix = faker.name.prefix(1);
    assertEquals(prefix, "Fp");
  }
}, localePrefixes, resetLocale);

testWrapper({
  name:
    "prefix() returns either prefix when using a locale with gender specific name prefixes",
  fn(): void {
    const prefix = faker.name.prefix();
    assert(["Mp", "Fp"].indexOf(prefix) >= 0);
  }
}, localePrefixes, resetLocale);

testWrapper({
  name:
    "prefix() returns a prefix when using a locale without gender specific name prefixes",
  fn(): void {
    const prefix = faker.name.prefix();
    assertEquals(prefix, "P");
  }
}, localePrefix, resetLocale);
