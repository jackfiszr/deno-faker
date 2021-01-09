import { assert, assertEquals, sinon } from "./support/test_deps.ts";
import { luhnCheck } from "./support/test_utils.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name:
    'replaceSymbolWithNumber() uses "#" by default, when no symbol passed in',
  fn() {
    const num = faker.helpers.replaceSymbolWithNumber("#AB");
    assert(num.match(/\dAB/));
  },
});

test({
  name:
    "replaceSymbolWithNumber() when symbol passed in, replaces that symbol with integers",
  fn() {
    const num = faker.helpers.replaceSymbolWithNumber("#AB", "A");
    assert(num.match(/#\dB/));
  },
});

test({
  name: 'replaceSymbols() when "*" passed, replaces it with alphanumeric',
  fn() {
    const num = faker.helpers.replaceSymbols("*AB");
    assert(num.match(/\wAB/));
  },
});

test({
  name: "shuffle() the output is the same length as the input",
  fn() {
    sinon.spy(faker.random, "number");
    const shuffled = faker.helpers.shuffle(["a", "b"]);
    assert(shuffled.length === 2);
    assert(faker.random.number.calledWith(1));
    faker.random.number.restore();
  },
});

test({
  name: "shuffle() empty array returns empty array",
  fn() {
    const shuffled = faker.helpers.shuffle([]);
    assert(shuffled.length === 0);
  },
});

test({
  name: "slugify() removes unwanted characters from URI string",
  fn() {
    assertEquals(faker.helpers.slugify("Aiden.Harªann"), "Aiden.Harann");
    assertEquals(faker.helpers.slugify("d'angelo.net"), "dangelo.net");
  },
});

test({
  name: "mustache() returns empty string with no arguments",
  fn() {
    assertEquals(faker.helpers.mustache(), "");
  },
});

test({
  name: "repeatString() returns empty string with no arguments",
  fn() {
    assertEquals(faker.helpers.repeatString(), "");
  },
});

test({
  name: "replaceSymbols() returns empty string with no arguments",
  fn() {
    assertEquals(faker.helpers.replaceSymbols(), "");
  },
});
/*
test({
  name: 'replaceCreditCardSymbols() returns empty string with no arguments',
  fn () {
    assertEquals(faker.helpers.replaceCreditCardSymbols(), '')
  }
})
*/
test({
  name: "createCard() returns an object",
  fn() {
    const card = faker.helpers.createCard();
    assert(typeof card === "object");
  },
});

test({
  name: "contextualCard() returns an object",
  fn() {
    const card = faker.helpers.userCard();
    assert(typeof card === "object");
  },
});

test({
  name: "userCard() returns an object",
  fn() {
    const card = faker.helpers.userCard();
    assert(typeof card === "object");
  },
});

// Make sure we keep this function for backward-compatibility.
test({
  name: "randomize() returns a random element from an array",
  fn() {
    const arr = ["a", "b", "c"];
    const elem = faker.helpers.randomize(arr);
    assert(elem);
    assert(arr.indexOf(elem) !== -1);
  },
});

test({
  name:
    "replaceCreditCardSymbols() returns a credit card number given a schema",
  fn() {
    const number = faker.helpers.replaceCreditCardSymbols(
      "6453-####-####-####-###L",
    );
    assert(
      number.match(/^6453\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}$/),
    );
    assert(luhnCheck(number));
  },
});

test({
  name: "replaceCreditCardSymbols() supports different symbols",
  fn() {
    const number = faker.helpers.replaceCreditCardSymbols(
      "6453-****-****-****-***L",
      "*",
    );
    assert(
      number.match(/^6453\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}$/),
    );
    assert(luhnCheck(number));
  },
});

test({
  name: "replaceCreditCardSymbols() handles regexp style input",
  fn() {
    let number = faker.helpers.replaceCreditCardSymbols(
      "6453-*{4}-*{4}-*{4}-*{3}L",
      "*",
    );
    assert(
      number.match(/^6453\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}\-([0-9]){4}$/),
    );
    assert(luhnCheck(number));
    number = faker.helpers.replaceCreditCardSymbols(
      "645[5-9]-#{4,6}-#{1,2}-#{4,6}-#{3}L",
    );
    assert(
      number.match(
        /^645[5-9]\-([0-9]){4,6}\-([0-9]){1,2}\-([0-9]){4,6}\-([0-9]){4}$/,
      ),
    );
    assert(luhnCheck(number));
  },
});

test({
  name:
    "regexpStyleStringParse() returns an empty string when called without param",
  fn() {
    assert(faker.helpers.regexpStyleStringParse() === "");
  },
});

test({
  name: "regexpStyleStringParse() deals with range repeat",
  fn() {
    const string = faker.helpers.regexpStyleStringParse("#{5,10}");
    assert(string.length <= 10 && string.length >= 5);
    assert(string.match(/^\#{5,10}$/));
  },
});

test({
  name: "regexpStyleStringParse() flips the range when min > max",
  fn() {
    const string = faker.helpers.regexpStyleStringParse("#{10,5}");
    assert(string.length <= 10 && string.length >= 5);
    assert(string.match(/^\#{5,10}$/));
  },
});

test({
  name: "regexpStyleStringParse() repeats string {n} number of times",
  fn() {
    assert(
      faker.helpers.regexpStyleStringParse("%{10}") ===
        faker.helpers.repeatString("%", 10),
    );
    assert(
      faker.helpers.regexpStyleStringParse("%{30}") ===
        faker.helpers.repeatString("%", 30),
    );
    assert(
      faker.helpers.regexpStyleStringParse("%{5}") ===
        faker.helpers.repeatString("%", 5),
    );
  },
});

test({
  name: "regexpStyleStringParse() creates a numerical range",
  fn() {
    const string = faker.helpers.regexpStyleStringParse("Hello[0-9]");
    assert(string.match(/^Hello[0-9]$/));
  },
});

test({
  name: "regexpStyleStringParse() deals with multiple tokens in one string",
  fn() {
    const string = faker.helpers.regexpStyleStringParse(
      "Test#{5}%{2,5}Testing**[1-5]**{10}END",
    );
    assert(string.match(/^Test\#{5}%{2,5}Testing\*\*[1-5]\*\*{10}END$/));
  },
});

test({
  name: "createTransaction() should create a random transaction",
  fn() {
    const transaction = faker.helpers.createTransaction();
    assert(transaction);
    assert(transaction.amount);
    assert(transaction.date);
    assert(transaction.business);
    assert(transaction.name);
    assert(transaction.type);
    assert(transaction.account);
  },
});
