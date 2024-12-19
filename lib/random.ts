import type { Faker } from "./mod.ts";
import * as mersenne from "../vendor/mersenne.ts";

/**
 * @namespace faker.random
 */
class Random {
  faker: Faker;
  seed?: number;
  constructor(faker: Faker, seed?: number) {
    this.faker = faker;
    this.seed = seed;
    // Use a user provided seed if it exists
    if (this.seed) {
      if (Array.isArray(this.seed) && this.seed.length) {
        mersenne.seed_array(this.seed);
      } else {
        mersenne.seed(this.seed);
      }
    }
  }
  /**
   * Returns a single random number based on a max number or range.
   *
   * @method faker.random.number
   * @param {Object|number} options {min, max, precision} or just max as a number
   * @returns {number}
   */
  number = (
    options?: {
      min?: number;
      max?: number;
      precision?: number;
    } | number,
  ): number => {
    if (typeof options === "number") {
      options = { max: options };
    }

    options = options || {};

    if (typeof options.min === "undefined") {
      options.min = 0;
    }
    if (typeof options.max === "undefined") {
      options.max = 99999;
    }
    if (typeof options.precision === "undefined") {
      options.precision = 1;
    }
    // Make the range inclusive of the max value
    let max = options.max;
    if (max >= 0) {
      max += options.precision;
    }

    let randomNumber = Math.floor(
      mersenne.rand(max / options.precision, options.min / options.precision),
    );
    // Workaround for Float point arithmetics problem (e.g. 6681493 / 0.01)
    randomNumber = randomNumber / (1 / options.precision);

    return randomNumber;
  };

  /**
   * Returns a single random floating-point number based on a max number or range.
   *
   * @method faker.random.float
   * @param {Object|number} options {precision} or precision as a number
   * @returns {number}
   */
  float = (
    options?: {
      precision?: number;
    } | number,
  ): number => {
    if (typeof options === "number") {
      options = { precision: options };
    }
    options = options || {};
    const opts: typeof options = {};
    for (const p in options) {
      opts[p as keyof typeof options] = options[p as keyof typeof options];
    }
    if (typeof opts.precision === "undefined") {
      opts.precision = 0.01;
    }
    return this.faker.random.number(opts);
  };

  /**
   * takes an array and returns a random element of the array
   *
   * @method faker.random.arrayElement
   * @param {array} array
   * @returns {T}
   */
  arrayElement = <T>(array: T[]): T => {
    array = array || ["a", "b", "c"] as unknown as T[];
    const r = this.faker.random.number({ max: array.length - 1 });
    return array[r];
  };

  /**
   * Returns a random subset of elements from an array.
   *
   * @method faker.random.arrayElements
   * @param {Array} array
   * @param {number} count number of elements to pick
   * @returns {string[]}
   */
  arrayElements = (array: string[], count: number): string[] => {
    array = array || ["a", "b", "c"];

    if (typeof count !== "number") {
      count = this.faker.random.number({ min: 1, max: array.length });
    } else if (count > array.length) {
      count = array.length;
    } else if (count < 0) {
      count = 0;
    }

    const arrayCopy = array.slice();
    const countToRemove = arrayCopy.length - count;

    for (let i = 0; i < countToRemove; i++) {
      const indexToRemove = this.faker.random.number(
        { max: arrayCopy.length - 1 },
      );
      arrayCopy.splice(indexToRemove, 1);
    }
    return arrayCopy;
  };

  /**
   * Returns a random key or value from an object.
   *
   * @method faker.random.objectElement
   * @param {Object} object
   * @param {string} field
   * @returns {unknown}
   */
  objectElement = (
    object: Record<string, unknown>,
    field?: string,
  ): unknown => {
    object = object || { "foo": "bar", "too": "car" };
    const array = Object.keys(object);
    const key = this.faker.random.arrayElement(array);

    return field === "key" ? key : object[key];
  };

  /**
   * Generates a random UUID.
   *
   * @method faker.random.uuid
   * @returns {string}
   */
  uuid = (): string => {
    const RFC4122_TEMPLATE = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    const replacePlaceholders = (placeholder: string): string => {
      const random = this.faker.random.number({ min: 0, max: 15 });
      const value = placeholder == "x" ? random : (random & 0x3 | 0x8);
      return value.toString(16);
    };
    return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
  };

  /**
   * Generates a random boolean value.
   *
   * @method faker.random.boolean
   * @returns {boolean}
   */
  boolean = (): boolean => {
    return !!this.faker.random.number(1);
  };

  // TODO: have ability to return specific type of word? As in: noun, adjective, verb, etc
  /**
   * Generates a random word.
   *
   * @method faker.random.word
   * @param {string} type
   * @returns {string}
   */
  word = (_type?: string): string => {
    const wordMethods = [
      "commerce.department",
      "commerce.productName",
      "commerce.productAdjective",
      "commerce.productMaterial",
      "commerce.product",
      "commerce.color",
      "company.catchPhraseAdjective",
      "company.catchPhraseDescriptor",
      "company.catchPhraseNoun",
      "company.bsAdjective",
      "company.bsBuzz",
      "company.bsNoun",
      "address.streetSuffix",
      "address.county",
      "address.country",
      "address.state",
      "finance.accountName",
      "finance.transactionType",
      "finance.currencyName",
      "hacker.noun",
      "hacker.verb",
      "hacker.adjective",
      "hacker.ingverb",
      "hacker.abbreviation",
      "name.jobDescriptor",
      "name.jobArea",
      "name.jobType",
    ];

    // randomly pick from the many faker methods that can generate words
    const randomWordMethod = this.faker.random.arrayElement(wordMethods);
    return this.faker.fake("{{" + randomWordMethod + "}}");
  };

  /**
   * Generates random words.
   *
   * @method faker.random.words
   * @param {number} count defaults to a random value between 1 and 3
   * @returns {string}
   */
  words = (count?: number): string => {
    const words: string[] = [];
    count = count || this.faker.random.number({ min: 1, max: 3 });

    for (let i = 0; i < count; i++) {
      words.push(this.faker.random.word());
    }
    return words.join(" ");
  };

  /**
   * image
   *
   * @method faker.random.image
   * @returns {string}
   */
  image = (): string => {
    return this.faker.image.image();
  };

  /**
   * locale
   *
   * @method faker.random.locale
   * @returns {string}
   */
  locale = (): string => {
    return this.faker.random.arrayElement(Object.keys(this.faker.locales));
  };

  /**
   * Generates a random alpha character string.
   *
   * @method faker.random.alpha
   * @param {Object|number} options {count, upcase} or count
   * @returns {string}
   */
  alpha = (
    options?: {
      count?: number;
      upcase?: boolean;
    } | number,
  ): string => {
    if (typeof options === "number") options = { count: options };

    options = options || { count: 1, upcase: false };
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let wholeString = "";

    for (let i = 0; i < options.count!; i++) {
      wholeString += this.faker.random.arrayElement(letters.split(""));
    }

    return options.upcase ? wholeString.toUpperCase() : wholeString;
  };

  /**
   * Generates a random alphanumeric string.
   *
   * @method faker.random.alphaNumeric
   * @param {number} count
   * @returns {string}
   */
  alphaNumeric = (count?: number): string => {
    count = count || 1;
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < count; i++) {
      result += this.faker.random.arrayElement(chars.split(""));
    }

    return result;
  };

  /**
   * Generates a random hexadecimal string.
   *
   * @method faker.random.hexaDecimal
   * @param {number} count
   * @returns {string}
   */
  hexaDecimal = (count: number): string => {
    count = count || 1;
    const hexChars = "0123456789abcdef";
    let result = "";

    for (let i = 0; i < count; i++) {
      result += this.faker.random.arrayElement(hexChars.split(""));
    }

    return "0x" + result;
  };
}

export { Random };
