import { assert, assertStrictEq, sinon } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "companyName() sometimes returns three last names",
  fn() {
    sinon.spy(faker.name, "lastName");
    sinon.stub(faker.random, "number").returns(2);
    const name = faker.company.companyName();
    const parts = name.split(" ");
    assertStrictEq(parts.length, 4); // account for word 'and'
    assert(faker.name.lastName.calledThrice);
    faker.random.number.restore();
    faker.name.lastName.restore();
  }
});

test({
  name: "companyName() sometimes returns two last names separated by a hyphen",
  fn() {
    sinon.spy(faker.name, "lastName");
    sinon.stub(faker.random, "number").returns(1);
    const name = faker.company.companyName();
    const parts = name.split("-");
    assert(parts.length >= 2);
    assert(faker.name.lastName.calledTwice);
    faker.random.number.restore();
    faker.name.lastName.restore();
  }
});

test({
  name: "companyName() sometimes returns a last name with a company suffix",
  fn() {
    sinon.spy(faker.company, "companySuffix");
    sinon.spy(faker.name, "lastName");
    sinon.stub(faker.random, "number").returns(0);
    const name = faker.company.companyName();
    const parts = name.split(" ");
    assert(parts.length >= 2);
    assert(faker.name.lastName.calledOnce);
    assert(faker.company.companySuffix.calledOnce);
    faker.random.number.restore();
    faker.name.lastName.restore();
    faker.company.companySuffix.restore();
  }
});

test({
  name: "companySuffix() returns random value from company.suffixes array",
  fn() {
    const suffix = faker.company.companySuffix();
    assert(faker.company.suffixes().indexOf(suffix) !== -1);
  }
});

test({
  name:
    "catchPhrase() returns phrase comprising of a catch phrase adjective, descriptor, and noun",
  fn() {
    sinon.spy(faker.random, "arrayElement");
    sinon.spy(faker.company, "catchPhraseAdjective");
    sinon.spy(faker.company, "catchPhraseDescriptor");
    sinon.spy(faker.company, "catchPhraseNoun");
    const phrase = faker.company.catchPhrase();
    assert(phrase.split(" ").length >= 3);
    assert(faker.random.arrayElement.calledThrice);
    assert(faker.company.catchPhraseAdjective.calledOnce);
    assert(faker.company.catchPhraseDescriptor.calledOnce);
    assert(faker.company.catchPhraseNoun.calledOnce);
    faker.random.arrayElement.restore();
    faker.company.catchPhraseAdjective.restore();
    faker.company.catchPhraseDescriptor.restore();
    faker.company.catchPhraseNoun.restore();
  }
});

test({
  name: "bs() returns phrase comprising of a BS buzz, adjective, and noun",
  fn() {
    sinon.spy(faker.random, "arrayElement");
    sinon.spy(faker.company, "bsBuzz");
    sinon.spy(faker.company, "bsAdjective");
    sinon.spy(faker.company, "bsNoun");
    const bs = faker.company.bs();
    assert(typeof bs === "string");
    assert(faker.random.arrayElement.calledThrice);
    assert(faker.company.bsBuzz.calledOnce);
    assert(faker.company.bsAdjective.calledOnce);
    assert(faker.company.bsNoun.calledOnce);
    faker.random.arrayElement.restore();
    faker.company.bsBuzz.restore();
    faker.company.bsAdjective.restore();
    faker.company.bsNoun.restore();
  }
});
