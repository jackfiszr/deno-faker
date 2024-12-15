import type { Faker } from "./mod.ts";
import type { Helpers } from "./helpers.ts";
import ibanLib from "./iban.ts";

/**
 * @namespace faker.finance
 */
class Finance {
  faker: Faker;
  Helpers: Helpers;

  constructor(faker: Faker) {
    this.faker = faker;
    this.Helpers = this.faker.helpers;
  }

  /**
   * Generates a random account number.
   *
   * @method faker.finance.account
   * @param {number | null} length
   * @returns {string}
   */
  account = (length?: number | null): string => {
    length = length || 8;
    let template = "";

    for (let i = 0; i < length; i++) {
      template += "#";
    }

    return this.Helpers.replaceSymbolWithNumber(template);
  };

  /**
   * Generates a random account name.
   *
   * @method faker.finance.accountName
   * @returns {string}
   */
  accountName = (): string => {
    return [
      this.Helpers.randomize(this.faker.definitions.finance.account_type),
      "Account",
    ].join(" ");
  };

  /**
   * Generates a valid routing number.
   *
   * @method faker.finance.routingNumber
   * @returns {string}
   */
  routingNumber = (): string => {
    const routingNumber = this.Helpers.replaceSymbolWithNumber("########");
    let sum = 0;

    for (let i = 0; i < routingNumber.length; i += 3) {
      sum += Number(routingNumber[i]) * 3;
      sum += Number(routingNumber[i + 1]) * 7;
      sum += Number(routingNumber[i + 2]) || 0;
    }

    return routingNumber + (Math.ceil(sum / 10) * 10 - sum);
  };

  /**
   * Generates a masked string.
   *
   * @method faker.finance.mask
   * @param {number} length
   * @param {boolean} parens
   * @param {boolean} ellipsis
   * @returns {string}
   */
  mask = (length?: number, parens?: boolean, ellipsis?: boolean): string => {
    length = (length == 0 || !length || typeof length == "undefined")
      ? 4
      : length;
    parens = parens ?? true;
    ellipsis = ellipsis ?? true;

    let template = "";

    for (let i = 0; i < length; i++) {
      template += "#";
    }

    template = ellipsis ? ["...", template].join("") : template;
    template = parens ? ["(", template, ")"].join("") : template;

    return this.Helpers.replaceSymbolWithNumber(template);
  };

  /**
   * Generates a random amount.
   *
   * @method faker.finance.amount
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   * @returns {string}
   */
  amount = (
    min?: number,
    max?: number,
    dec?: number,
    symbol?: string,
  ): string => {
    min = min || 0;
    max = max || 1000;
    dec = dec === undefined ? 2 : dec;
    symbol = symbol || "";

    const randValue = this.faker.random.number({
      max: max,
      min: min,
      precision: Math.pow(10, -dec),
    });

    return symbol + randValue.toFixed(dec);
  };

  /**
   * Returns a random transaction type.
   *
   * @method faker.finance.transactionType
   * @returns {string}
   */
  transactionType = (): string => {
    return this.Helpers.randomize(
      this.faker.definitions.finance.transaction_type,
    );
  };

  /**
   * Returns a random currency code.
   *
   * @method faker.finance.currencyCode
   * @returns {string}
   */
  currencyCode = (): string => {
    return this.faker.random.objectElement(
      this.faker.definitions.finance.currency,
    ) as { code: string }["code"];
  };

  /**
   * Returns a random currency name.
   *
   * @method faker.finance.currencyName
   * @returns {string}
   */
  currencyName = (): string => {
    return this.faker.random.objectElement(
      this.faker.definitions.finance.currency,
      "key",
    );
  };

  /**
   * Returns a random currency symbol.
   *
   * @method faker.finance.currencySymbol
   * @returns {string}
   */
  currencySymbol = (): string => {
    let symbol;
    while (!symbol) {
      symbol = this.faker.random.objectElement(
        this.faker.definitions.finance.currency,
      ) as { symbol: string }["symbol"];
    }
    return symbol;
  };

  /**
   * Generates a random Bitcoin address.
   *
   * @method faker.finance.bitcoinAddress
   * @returns {string}
   */
  bitcoinAddress = (): string => {
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
   * Generates a random credit card number.
   *
   * @method faker.finance.creditCardNumber
   * @param {string} provider
   * @returns {string}
   */
  creditCardNumber = (provider: string): string => {
    provider = provider || "";
    let format, formats;

    const localeFormat = this.faker.definitions.finance.credit_card;

    if (provider in localeFormat) {
      formats = localeFormat[provider];
      if (typeof formats === "string") {
        format = formats;
      } else {
        format = this.faker.random.arrayElement(formats);
      }
    } else if (provider.match(/#/)) {
      format = provider;
    } else {
      if (typeof localeFormat === "string") {
        format = localeFormat;
      } else if (typeof localeFormat === "object") {
        formats = this.faker.random.objectElement(localeFormat, "value");
        if (typeof formats === "string") {
          format = formats;
        } else {
          format = this.faker.random.arrayElement(formats as string[]);
        }
      }
    }

    format = (format ?? "").replace(/\//g, "");
    return this.Helpers.replaceCreditCardSymbols(format);
  };

  /**
   * Generates a random credit card CVV.
   *
   * @method faker.finance.creditCardCVV
   * @returns {string}
   */
  creditCardCVV = (): string => {
    let cvv = "";
    for (let i = 0; i < 3; i++) {
      cvv += this.faker.random.number({ max: 9 }).toString();
    }
    return cvv;
  };

  /**
   * Generates a random Ethereum address.
   *
   * @method faker.finance.ethereumAddress
   * @returns {string}
   */
  ethereumAddress = (): string => {
    return this.faker.random.hexaDecimal(40).toLowerCase();
  };

  /**
   * Generates a random IBAN.
   *
   * @method faker.finance.iban
   * @param {boolean} formatted
   * @returns {string}
   */
  iban = (formatted: boolean): string => {
    const ibanFormat = this.faker.random.arrayElement(ibanLib.formats);
    let s = "";
    let count = 0;

    for (let b = 0; b < ibanFormat.bban.length; b++) {
      const bban = ibanFormat.bban[b];
      let c = bban.count;
      count += bban.count;

      while (c > 0) {
        if (bban.type === "a") {
          s += this.faker.random.arrayElement(ibanLib.alpha);
        } else if (bban.type === "c") {
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
   * Generates a random BIC.
   *
   * @method faker.finance.bic
   * @returns {string}
   */
  bic = (): string => {
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
