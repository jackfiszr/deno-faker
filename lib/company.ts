import type { Faker } from "./mod.ts";
/**
 * @namespace faker.company
 */
class Company {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Returns a copy of the company suffixes array.
   *
   * @method faker.company.suffixes
   * @returns {string[]}
   */
  suffixes = (): string[] => {
    // Don't want the source array exposed to modification, so return a copy
    return this.faker.definitions.company.suffix.slice(0);
  };

  /**
   * Returns a random company name using one of the predefined formats.
   *
   * @method faker.company.companyName
   * @param {number} format
   * @returns {string}
   */
  companyName = (format?: number): string => {
    const formats = [
      "{{name.lastName}} {{company.companySuffix}}",
      "{{name.lastName}} - {{name.lastName}}",
      "{{name.lastName}}, {{name.lastName}} and {{name.lastName}}",
    ];

    if (typeof format !== "number") {
      format = this.faker.random.number(formats.length - 1);
    }

    return this.faker.fake(formats[format]);
  };

  /**
   * Returns a random company suffix.
   *
   * @method faker.company.companySuffix
   * @returns {string}
   */
  companySuffix = (): string => {
    return this.faker.random.arrayElement(this.faker.company.suffixes());
  };

  /**
   * Generates a catchphrase.
   *
   * @method faker.company.catchPhrase
   * @returns {string}
   */
  catchPhrase = (): string => {
    return this.faker.fake(
      "{{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}} {{company.catchPhraseNoun}}",
    );
  };

  /**
   * Generates a business-speak (BS) phrase.
   *
   * @method faker.company.bs
   * @returns {string}
   */
  bs = (): string => {
    return this.faker.fake(
      "{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}",
    );
  };

  /**
   * Returns a random catchphrase adjective.
   *
   * @method faker.company.catchPhraseAdjective
   * @returns {string}
   */
  catchPhraseAdjective = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.adjective,
    );
  };

  /**
   * Returns a random catchphrase descriptor.
   *
   * @method faker.company.catchPhraseDescriptor
   * @returns {string}
   */
  catchPhraseDescriptor = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.descriptor,
    );
  };

  /**
   * Returns a random catchphrase noun.
   *
   * @method faker.company.catchPhraseNoun
   * @returns {string}
   */
  catchPhraseNoun = (): string => {
    return this.faker.random.arrayElement(this.faker.definitions.company.noun);
  };

  /**
   * Returns a random business-speak (BS) adjective.
   *
   * @method faker.company.bsAdjective
   * @returns {string}
   */
  bsAdjective = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_adjective,
    );
  };

  /**
   * Returns a random business-speak (BS) buzzword.
   *
   * @method faker.company.bsBuzz
   * @returns {string}
   */
  bsBuzz = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_verb,
    );
  };

  /**
   * Returns a random business-speak (BS) noun.
   *
   * @method faker.company.bsNoun
   * @returns {string}
   */
  bsNoun = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_noun,
    );
  };
}

export { Company };
