import type { Faker } from "./mod.ts";
import type { Helpers } from "./helpers.ts";

/**
 * @namespace faker.lorem
 */
class Lorem {
  faker: Faker;
  Helpers: Helpers;

  constructor(faker: Faker) {
    this.faker = faker;
    this.Helpers = faker.helpers;
  }

  /**
   * word
   *
   * @method faker.lorem.word
   * @param {number} num
   * @returns {string}
   */
  word = (_num?: number): string => {
    return this.faker.random.arrayElement(this.faker.definitions.lorem.words);
  };

  /**
   * generates a space-separated list of words
   *
   * @method faker.lorem.words
   * @param {number} num number of words, defaults to 3
   * @returns {string}
   */
  words = (num?: number): string => {
    if (typeof num === "undefined") num = 3;
    const words: string[] = [];
    for (let i = 0; i < num; i++) {
      words.push(this.faker.lorem.word());
    }
    return words.join(" ");
  };

  /**
   * sentence
   *
   * @method faker.lorem.sentence
   * @param {number} wordCount defaults to a random number between 3 and 10
   * @param {number} range
   * @returns {string}
   */
  sentence = (wordCount?: number, _range?: number): string => {
    if (typeof wordCount === "undefined") {
      wordCount = this.faker.random.number({ min: 3, max: 10 });
    }
    const sentence = this.faker.lorem.words(wordCount);
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  };

  /**
   * slug
   *
   * @method faker.lorem.slug
   * @param {number} wordCount number of words, defaults to 3
   * @returns {string}
   */
  slug = (wordCount: number): string => {
    const words = this.faker.lorem.words(wordCount);
    return this.Helpers.slugify(words);
  };

  /**
   * sentences
   *
   * @method faker.lorem.sentences
   * @param {number} sentenceCount defaults to a random number between 2 and 6
   * @param {string} separator defaults to `' '`
   * @returns {string}
   */
  sentences = (sentenceCount?: number, separator?: string): string => {
    if (typeof sentenceCount === "undefined") {
      sentenceCount = this.faker.random.number({ min: 2, max: 6 });
    }
    if (typeof separator === "undefined") separator = " ";
    const sentences: string[] = [];
    for (let i = sentenceCount; i > 0; i--) {
      sentences.push(this.faker.lorem.sentence());
    }
    return sentences.join(separator);
  };

  /**
   * paragraph
   *
   * @method faker.lorem.paragraph
   * @param {number} sentenceCount defaults to 3
   * @returns {string}
   */
  paragraph = (sentenceCount?: number): string => {
    if (typeof sentenceCount === "undefined") sentenceCount = 3;
    return this.faker.lorem.sentences(
      sentenceCount + this.faker.random.number(3),
    );
  };

  /**
   * paragraphs
   *
   * @method faker.lorem.paragraphs
   * @param {number} paragraphCount defaults to 3
   * @param {string} separator defaults to `'\n \r'`
   * @returns {string}
   */
  paragraphs = (paragraphCount: number, separator: string): string => {
    if (typeof separator === "undefined") separator = "\n \r";
    if (typeof paragraphCount === "undefined") paragraphCount = 3;
    const paragraphs: string[] = [];
    for (let i = paragraphCount; i > 0; i--) {
      paragraphs.push(this.faker.lorem.paragraph());
    }
    return paragraphs.join(separator);
  };

  /**
   * returns random text based on a random lorem method
   *
   * @method faker.lorem.text
   * @param {number} times
   * @returns {string}
   */
  loremText = (_times: number): string => {
    const loremMethods = [
      "lorem.word",
      "lorem.words",
      "lorem.sentence",
      "lorem.sentences",
      "lorem.paragraph",
      "lorem.paragraphs",
      "lorem.lines",
    ];
    const randomLoremMethod = this.faker.random.arrayElement(loremMethods);
    return this.faker.fake("{{" + randomLoremMethod + "}}");
  };

  /**
   * returns lines of lorem separated by `'\n'`
   *
   * @method faker.lorem.lines
   * @param {number} lineCount defaults to a random number between 1 and 5
   * @returns {string}
   */
  lines = (lineCount: number): string => {
    if (typeof lineCount === "undefined") {
      lineCount = this.faker.random.number({ min: 1, max: 5 });
    }
    return this.faker.lorem.sentences(lineCount, "\n");
  };
}

export { Lorem };
