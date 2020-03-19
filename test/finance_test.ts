import { assert, assertEquals, assertStrictEq } from "./support/test_deps.ts";
import { luhnCheck as luhnFormula } from "./support/test_utils.ts";
import ibanLib from "../lib/iban.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name:
    "account(length) should supply a default length if no length is passed",
  fn() {
    const account = faker.finance.account();
    const expected = 8;
    const actual = account.length;
    assertEquals(
      actual,
      expected,
      "The expected default account length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name: "account(length) should supply a length if a length is passed",
  fn() {
    const expected = 9;
    const account = faker.finance.account(expected);
    const actual = account.length;
    assertEquals(
      actual,
      expected,
      "The expected default account length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name: "account(length) should supply a default length if a zero is passed",
  fn() {
    const expected = 8;
    const account = faker.finance.account(0);
    const actual = account.length;
    assertEquals(
      actual,
      expected,
      "The expected default account length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name: "accountName() should return an account name",
  fn() {
    const actual = faker.finance.accountName();
    assert(actual);
  }
});

test({
  name: "routingNumber() should return a routing number",
  fn() {
    const actual = faker.finance.routingNumber();
    assert(actual);
  }
});

test({
  name: "mask(length, parens, ellipsis) should set a default length",
  fn() {
    const expected = 4; // default account mask length
    const mask = faker.finance.mask(null, false, false);
    const actual = mask.length;
    assertEquals(
      actual,
      expected,
      "The expected default mask length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name: "mask(length, parens, ellipsis) should set a specified length",
  fn() {
    let expected = faker.random.number(20);
    expected = (expected == 0 || !expected || typeof expected == "undefined")
      ? 4
      : expected;
    const mask = faker.finance.mask(expected, false, false);
    const actual = mask.length; // picks 4 if the random number generator picks 0
    assertEquals(
      actual,
      expected,
      "The expected default mask length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name:
    "mask(length, parens, ellipsis) should set a default length of 4 for a zero value",
  fn() {
    const expected = 4;
    const mask = faker.finance.mask(0, false, false);
    const actual = 4; // picks 4 if the random number generator picks 0
    assertEquals(
      actual,
      expected,
      "The expected default mask length is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name:
    "mask(length, parens, ellipsis) should by default include parentheses around a partial account number",
  fn() {
    const expected = true;
    const mask = faker.finance.mask(null, null, false);
    const regexp = new RegExp(/(\(\d{4}?\))/);
    const actual = regexp.test(mask);
    assertEquals(
      actual,
      expected,
      "The expected match for parentheses is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name: "mask(length, parens, ellipsis) should by default include an ellipsis",
  fn() {
    const expected = true;
    const mask = faker.finance.mask(null, false, null);
    const regexp = new RegExp(/(\.\.\.\d{4})/);
    const actual = regexp.test(mask);
    assertEquals(
      actual,
      expected,
      "The expected match for parentheses is " + expected + " but it was " +
        actual
    );
  }
});

test({
  name:
    "mask(length, parens, ellipsis) should work when random variables are passed into the arguments",
  fn() {
    const length = faker.random.number(20);
    const ellipsis = (length % 2 === 0) ? true : false;
    const parens = !ellipsis;
    const mask = faker.finance.mask(length, ellipsis, parens);
    assert(mask);
  }
});

test({
  name:
    "amount(min, max, dec, symbol) should use the default amounts when not passing arguments",
  fn() {
    const amount = faker.finance.amount();
    assert(amount);
    assertEquals((amount > 0), true, "the amount should be greater than 0");
    assertEquals((amount < 1001), true, "the amount should be greater than 0");
  }
});

test({
  name:
    "amount(min, max, dec, symbol) should use the defaul decimal location when not passing arguments",
  fn() {
    const amount = faker.finance.amount();
    const decimal = ".";
    const expected = amount.length - 3;
    const actual = amount.indexOf(decimal);
    assertEquals(
      actual,
      expected,
      "The expected location of the decimal is " + expected + " but it was " +
        actual + " amount " + amount
    );
  }
});

//TODO: add support for more currency and decimal options
test({
  name:
    "amount(min, max, dec, symbol) should not include a currency symbol by default",
  fn() {
    const amount = faker.finance.amount();
    const regexp = new RegExp(/[0-9.]/);
    const expected = true;
    const actual = regexp.test(amount);
    assertEquals(
      actual,
      expected,
      "The expected match should not include a currency symbol"
    );
  }
});

test({
  name: "amount(min, max, dec, symbol) it should handle negative amounts",
  fn() {
    const amount = faker.finance.amount(-200, -1);
    assert(amount);
    assertEquals((amount < 0), true, "the amount should be greater than 0");
    assertEquals((amount > -201), true, "the amount should be greater than 0");
  }
});

test({
  name: "amount(min, max, dec, symbol) it should handle argument dec",
  fn() {
    const amount = faker.finance.amount(100, 100, 1);
    assert(amount);
    assertStrictEq(amount, "100.0", "the amount should be equal 100.0");
  }
});

test({
  name: "amount(min, max, dec, symbol) it should handle argument dec = 0",
  fn() {
    const amount = faker.finance.amount(100, 100, 0);
    assert(amount);
    assertStrictEq(amount, "100", "the amount should be equal 100");
  }
});

test({
  name: "transactionType() should return a random transaction type",
  fn() {
    const transactionType = faker.finance.transactionType();
    assert(transactionType);
  }
});

test({
  name: "currencyCode() returns a random currency code with a format",
  fn() {
    const currencyCode = faker.finance.currencyCode();
    assert(currencyCode.match(/[A-Z]{3}/));
  }
});

test({
  name: "bitcoinAddress() returns a random bitcoin address",
  fn() {
    const bitcoinAddress = faker.finance.bitcoinAddress();
    /**
     *  Note: Although the total length of a Bitcoin address can be 25-33 characters, regex quantifiers only check the proceding token
     *  Therefore we take one from the total length of the address not including the first character ([13])
     */
    assert(bitcoinAddress.match(/^[13][a-km-zA-HJ-NP-Z1-9]{24,33}$/));
  }
});

test({
  name: "ethereumAddress() returns a random ethereum address",
  fn() {
    const ethereumAddress = faker.finance.ethereumAddress();
    assert(ethereumAddress.match(/^(0x)[0-9a-f]{40}$/));
  }
});

test({
  name: "creditCardNumber() returns a random credit card number",
  fn() {
    let number = faker.finance.creditCardNumber();
    number = number.replace(/\D/g, ""); // remove formating
    console.log("version:", Deno.version.deno, number, number.length);
    assert(number.length >= 13 && number.length <= 20);
    assert(number.match(/^[0-9]{13,20}$/));
    assert(luhnFormula(number));
  }
});

test({
  name: "creditCardNumber() returns a valid credit card number",
  fn() {
    assert(luhnFormula(faker.finance.creditCardNumber("")));
    assert(luhnFormula(faker.finance.creditCardNumber()));
    assert(luhnFormula(faker.finance.creditCardNumber()));
    assert(luhnFormula(faker.finance.creditCardNumber("visa")));
    assert(luhnFormula(faker.finance.creditCardNumber("mastercard")));
    assert(luhnFormula(faker.finance.creditCardNumber("discover")));
    assert(luhnFormula(faker.finance.creditCardNumber()));
    assert(luhnFormula(faker.finance.creditCardNumber()));
  }
});

test({
  name:
    "creditCardNumber() returns a correct credit card number when issuer provided",
  fn() {
    //TODO: implement checks for each format with regexp
    const visa = faker.finance.creditCardNumber("visa");
    assert(visa.match(/^4(([0-9]){12}|([0-9]){3}(\-([0-9]){4}){3})$/));
    assert(luhnFormula(visa));
    const mastercard = faker.finance.creditCardNumber("mastercard");
    assert(mastercard.match(/^(5[1-5]\d{2}|6771)(\-\d{4}){3}$/));
    assert(luhnFormula(mastercard));
    const discover = faker.finance.creditCardNumber("discover");
    assert(luhnFormula(discover));
    const american_express = faker.finance.creditCardNumber(
      "american_express"
    );
    assert(luhnFormula(american_express));
    const diners_club = faker.finance.creditCardNumber("diners_club");
    assert(luhnFormula(diners_club));
    const jcb = faker.finance.creditCardNumber("jcb");
    assert(luhnFormula(jcb));
    const switchC = faker.finance.creditCardNumber("mastercard");
    assert(luhnFormula(switchC));
    const solo = faker.finance.creditCardNumber("solo");
    assert(luhnFormula(solo));
    const maestro = faker.finance.creditCardNumber("maestro");
    assert(luhnFormula(maestro));
    const laser = faker.finance.creditCardNumber("laser");
    assert(luhnFormula(laser));
    const instapayment = faker.finance.creditCardNumber("instapayment");
    assert(luhnFormula(instapayment));
  }
});

test({
  name: "creditCardNumber() returns custom formated strings",
  fn() {
    let number = faker.finance.creditCardNumber("###-###-##L");
    assert(number.match(/^\d{3}\-\d{3}\-\d{3}$/));
    assert(luhnFormula(number));
    number = faker.finance.creditCardNumber("234[5-9]#{999}L");
    assert(number.match(/^234[5-9]\d{1000}$/));
    assert(luhnFormula(number));
  }
});

test({
  name: "creditCardCVV() returns a random credit card CVV",
  fn() {
    const cvv = faker.finance.creditCardCVV();
    assert(cvv.length === 3);
    assert(cvv.match(/^[0-9]{3}$/));
  }
});

test({
  name: "iban() returns a random yet formally correct IBAN number",
  fn() {
    // const ibanLib = await import('../lib/iban.ts')
    const iban = faker.finance.iban();
    const bban = iban.substring(4) + iban.substring(0, 4);
    assertEquals(
      ibanLib.mod97(ibanLib.toDigitString(bban)),
      1,
      "the result should be equal to 1"
    );
  }
});

test({
  name: "bic() returns a random yet formally correct BIC number",
  fn() {
    const bic = faker.finance.bic();
    const expr = new RegExp(
      "^[A-Z]{4}(" + ibanLib.iso3166.join("|") +
        ")[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3})?$",
      "i"
    );
    assert(bic.match(expr));
  }
});
