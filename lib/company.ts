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
   * suffixes
   *
   * @method faker.company.suffixes
   */
  suffixes = () => {
    // Don't want the source array exposed to modification, so return a copy
    return this.faker.definitions.company.suffix.slice(0);
  };

  /**
   * companyName
   *
   * @method faker.company.companyName
   * @param {string} format
   */
  companyName = (format: number) => {
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
   * companySuffix
   *
   * @method faker.company.companySuffix
   */
  companySuffix = () => {
    return this.faker.random.arrayElement(this.faker.company.suffixes());
  };

  /**
   * catchPhrase
   *
   * @method faker.company.catchPhrase
   */
  catchPhrase = () => {
    return this.faker.fake(
      "{{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}} {{company.catchPhraseNoun}}",
    );
  };

  /**
   * bs
   *
   * @method faker.company.bs
   */
  bs = () => {
    return this.faker.fake(
      "{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}",
    );
  };

  /**
   * catchPhraseAdjective
   *
   * @method faker.company.catchPhraseAdjective
   */
  catchPhraseAdjective = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.adjective,
    );
  };

  /**
   * catchPhraseDescriptor
   *
   * @method faker.company.catchPhraseDescriptor
   */
  catchPhraseDescriptor = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.descriptor,
    );
  };

  /**
   * catchPhraseNoun
   *
   * @method faker.company.catchPhraseNoun
   */
  catchPhraseNoun = () => {
    return this.faker.random.arrayElement(this.faker.definitions.company.noun);
  };

  /**
   * bsAdjective
   *
   * @method faker.company.bsAdjective
   */
  bsAdjective = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_adjective,
    );
  };

  /**
   * bsBuzz
   *
   * @method faker.company.bsBuzz
   */
  bsBuzz = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_verb,
    );
  };

  /**
   * bsNoun
   *
   * @method faker.company.bsNoun
   */
  bsNoun = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.company.bs_noun,
    );
  };
}

export { Company };
