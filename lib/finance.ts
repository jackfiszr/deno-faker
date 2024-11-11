import ibanLib from "./iban.ts";

/**
 * @namespace faker.finance
 */
class Finance {
  faker: any;
  Helpers: any;
  constructor(faker: any) {
    this.faker = faker;
    this.Helpers = this.faker.helpers;
  }

  /**
   * account
   *
   * @method faker.finance.account
   * @param {number} length
   */
  account = (length: number | null) => {
    length = length || 8;

    let template = "";

    for (let i = 0; i < length; i++) {
      template = template + "#";
    }
    length = null;
    return this.Helpers.replaceSymbolWithNumber(template);
  };

  /**
   * accountName
   *
   * @method faker.finance.accountName
   */
  accountName = () => {
    return [
      this.Helpers.randomize(this.faker.definitions.finance.account_type),
      "Account",
    ].join(" ");
  };

  /**
   * routingNumber
   *
   * @method faker.finance.routingNumber
   */
  routingNumber = () => {
    const routingNumber = this.Helpers.replaceSymbolWithNumber("########");

    // Modules 10 straight summation.
    let sum = 0;

    for (let i = 0; i < routingNumber.length; i += 3) {
      sum += Number(routingNumber[i]) * 3;
      sum += Number(routingNumber[i + 1]) * 7;
      sum += Number(routingNumber[i + 2]) || 0;
    }

    return routingNumber + (Math.ceil(sum / 10) * 10 - sum);
  };

  /**
   * mask
   *
   * @method faker.finance.mask
   * @param {number} length
   * @param {boolean} parens
   * @param {boolean} ellipsis
   */
  mask = (length: number, parens: boolean, ellipsis: boolean) => {
    //set defaults
    length = (length == 0 || !length || typeof length == "undefined")
      ? 4
      : length;
    parens = (parens === null) ? true : parens;
    ellipsis = (ellipsis === null) ? true : ellipsis;

    //create a template for length
    let template = "";

    for (let i = 0; i < length; i++) {
      template = template + "#";
    }

    //prefix with ellipsis
    template = ellipsis ? ["...", template].join("") : template;

    template = parens ? ["(", template, ")"].join("") : template;

    //generate random numbers
    template = this.Helpers.replaceSymbolWithNumber(template);

    return template;
  };

  //min and max take in minimum and maximum amounts, dec is the decimal place you want rounded to, symbol is $, €, £, etc
  //NOTE: this returns a string representation of the value, if you want a number use parseFloat and no symbol

  /**
   * amount
   *
   * @method faker.finance.amount
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */
  amount = (min: number, max: number, dec: number, symbol: string) => {
    min = min || 0;
    max = max || 1000;
    dec = dec === undefined ? 2 : dec;
    symbol = symbol || "";
    const randValue = this.faker.random.number(
      { max: max, min: min, precision: Math.pow(10, -dec) },
    );

    return symbol + randValue.toFixed(dec);
  };

  /**
   * transactionType
   *
   * @method faker.finance.transactionType
   */
  transactionType = () => {
    return this.Helpers.randomize(
      this.faker.definitions.finance.transaction_type,
    );
  };

  /**
   * currencyCode
   *
   * @method faker.finance.currencyCode
   */
  currencyCode = () => {
    return this.faker.random.objectElement(
      this.faker.definitions.finance.currency,
    )["code"];
  };

  /**
   * currencyName
   *
   * @method faker.finance.currencyName
   */
  currencyName = () => {
    return this.faker.random.objectElement(
      this.faker.definitions.finance.currency,
      "key",
    );
  };

  /**
   * currencySymbol
   *
   * @method faker.finance.currencySymbol
   */
  currencySymbol = () => {
    let symbol;

    while (!symbol) {
      symbol = this.faker.random.objectElement(
        this.faker.definitions.finance.currency,
      )["symbol"];
    }
    return symbol;
  };

  /**
   * bitcoinAddress
   *
   * @method  this.faker.finance.bitcoinAddress
   */
  bitcoinAddress = () => {
    const addressLength = this.faker.random.number({ min: 25, max: 34 });

    let address = this.faker.random.arrayElement(["1", "3"]);

    for (let i = 0; i < addressLength - 1; i++) {
      address += this.faker.random.arrayElement(
        "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ".split(""),
      );
    }

    return address;
  };

  /**
   * Credit card number
   * @method faker.finance.creditCardNumber
   * @param {string} provider | scheme
   */
  creditCardNumber = (provider: string) => {
    provider = provider || "";
    let format, formats;
    const localeFormat = this.faker.definitions.finance.credit_card;
    if (provider in localeFormat) {
      formats = localeFormat[provider]; // there chould be multiple formats
      if (typeof formats === "string") {
        format = formats;
      } else {
        format = this.faker.random.arrayElement(formats);
      }
    } else if (provider.match(/#/)) { // The user chose an optional scheme
      format = provider;
    } else { // Choose a random provider
      if (typeof localeFormat === "string") {
        format = localeFormat;
      } else if (typeof localeFormat === "object") {
        // Credit cards are in a object structure
        formats = this.faker.random.objectElement(localeFormat, "value"); // There chould be multiple formats
        if (typeof formats === "string") {
          format = formats;
        } else {
          format = this.faker.random.arrayElement(formats);
        }
      }
    }
    format = format.replace(/\//g, "");
    return this.Helpers.replaceCreditCardSymbols(format);
  };
  /**
   * Credit card CVV
   * @method faker.finance.creditCardNumber
   */
  creditCardCVV = () => {
    let cvv = "";
    for (let i = 0; i < 3; i++) {
      cvv += this.faker.random.number({ max: 9 }).toString();
    }
    return cvv;
  };

  /**
   * ethereumAddress
   *
   * @method  this.faker.finance.ethereumAddress
   */
  ethereumAddress = () => {
    const address = this.faker.random.hexaDecimal(40).toLowerCase();

    return address;
  };

  /**
   * iban
   *
   * @method  this.faker.finance.iban
   */
  iban = (formatted: boolean) => {
    const ibanFormat = this.faker.random.arrayElement(ibanLib.formats);
    let s = "";
    let count = 0;
    for (let b = 0; b < ibanFormat.bban.length; b++) {
      const bban = ibanFormat.bban[b];
      let c = bban.count;
      count += bban.count;
      while (c > 0) {
        if (bban.type == "a") {
          s += this.faker.random.arrayElement(ibanLib.alpha);
        } else if (bban.type == "c") {
          if (this.faker.random.number(100) < 80) {
            s += this.faker.random.number(9);
          } else {
            s += this.faker.random.arrayElement(ibanLib.alpha);
          }
        } else {
          if (c >= 3 && this.faker.random.number(100) < 30) {
            if (this.faker.random.boolean()) {
              s += this.faker.random.arrayElement(ibanLib.pattern100);
              c -= 2;
            } else {
              s += this.faker.random.arrayElement(ibanLib.pattern10);
              c--;
            }
          } else {
            s += this.faker.random.number(9);
          }
        }
        c--;
      }
      s = s.substring(0, count);
    }
    const checksum = 98 -
      ibanLib.mod97(ibanLib.toDigitString(s + ibanFormat.country + "00"));
    const checksumStr = String(checksum).padStart(2, "0");
    const iban = ibanFormat.country + checksumStr + s;
    const ibanMatch = iban.match(/.{1,4}/g);
    if (ibanMatch === null) {
      throw new Error("ibanMatch is null");
    }
    return formatted ? ibanMatch.join(" ") : iban;
  };

  /**
   * bic
   *
   * @method  this.faker.finance.bic
   */
  bic = () => {
    const vowels = ["A", "E", "I", "O", "U"];
    const prob = this.faker.random.number(100);
    return this.Helpers.replaceSymbols("???") +
      this.faker.random.arrayElement(vowels) +
      this.faker.random.arrayElement(ibanLib.iso3166) +
      this.Helpers.replaceSymbols("?") + "1" +
      (prob < 10
        ? this.Helpers.replaceSymbols(
          "?" + this.faker.random.arrayElement(vowels) + "?",
        )
        : prob < 40
        ? this.Helpers.replaceSymbols("###")
        : "");
  };
}

export { Finance };
