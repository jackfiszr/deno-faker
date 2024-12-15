import type { Faker } from "./mod.ts";

/**
 * @namespace faker.hacker
 */
class Hacker {
  faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Returns a random hacker abbreviation.
   *
   * @method faker.hacker.abbreviation
   * @returns {string}
   */
  abbreviation = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.hacker.abbreviation,
    );
  };

  /**
   * Returns a random hacker adjective.
   *
   * @method faker.hacker.adjective
   * @returns {string}
   */
  adjective = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.hacker.adjective,
    );
  };

  /**
   * Returns a random hacker noun.
   *
   * @method faker.hacker.noun
   * @returns {string}
   */
  noun = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.hacker.noun,
    );
  };

  /**
   * Returns a random hacker verb.
   *
   * @method faker.hacker.verb
   * @returns {string}
   */
  verb = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.hacker.verb,
    );
  };

  /**
   * Returns a random hacker 'ing' verb.
   *
   * @method faker.hacker.ingverb
   * @returns {string}
   */
  ingverb = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.hacker.ingverb,
    );
  };

  /**
   * Returns a random hacker phrase with interpolated values.
   *
   * @method faker.hacker.phrase
   * @returns {string}
   */
  phrase = (): string => {
    const data = {
      abbreviation: this.abbreviation(),
      adjective: this.adjective(),
      ingverb: this.ingverb(),
      noun: this.noun(),
      verb: this.verb(),
    };

    const phraseTemplate = this.faker.random.arrayElement(
      this.faker.definitions.hacker.phrase,
    );
    return this.faker.helpers.mustache(phraseTemplate, data);
  };
}

export { Hacker };
