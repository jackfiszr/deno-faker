/**
 * @namespace faker.lorem
 */
class Lorem {
  faker: any;
  Helpers: any;
  constructor(faker: any) {
    this.faker = faker;
    this.Helpers = faker.helpers;
  }

  /**
   * word
   *
   * @method faker.lorem.word
   * @param {number} num
   */
  word = (num: number) => {
    return this.faker.random.arrayElement(this.faker.definitions.lorem.words);
  };

  /**
   * generates a space separated list of words
   *
   * @method faker.lorem.words
   * @param {number} num number of words, defaults to 3
   */
  words = (num: number) => {
    if (typeof num == "undefined") num = 3;
    const words = [];
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
   */
  sentence = (wordCount: number, range: number) => {
    if (typeof wordCount == "undefined") {
      wordCount = this.faker.random.number(
        { min: 3, max: 10 },
      );
    }
    // if (typeof range == 'undefined') { range = 7; }

    // strange issue with the node_min_test failing for captialize, please fix and add faker.lorem.back
    //return  faker.lorem.words(wordCount + Helpers.randomNumber(range)).join(' ').capitalize();

    const sentence = this.faker.lorem.words(wordCount);
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".";
  };

  /**
   * slug
   *
   * @method faker.lorem.slug
   * @param {number} wordCount number of words, defaults to 3
   */
  slug = (wordCount: number) => {
    const words = this.faker.lorem.words(wordCount);
    return this.Helpers.slugify(words);
  };

  /**
   * sentences
   *
   * @method faker.lorem.sentences
   * @param {number} sentenceCount defautls to a random number between 2 and 6
   * @param {string} separator defaults to `' '`
   */
  sentences = (sentenceCount: number, separator: string) => {
    if (typeof sentenceCount === "undefined") {
      sentenceCount = this.faker.random.number({ min: 2, max: 6 });
    }
    if (typeof separator == "undefined") separator = " ";
    const sentences = [];
    for (sentenceCount; sentenceCount > 0; sentenceCount--) {
      sentences.push(this.faker.lorem.sentence());
    }
    return sentences.join(separator);
  };

  /**
   * paragraph
   *
   * @method faker.lorem.paragraph
   * @param {number} sentenceCount defaults to 3
   */
  paragraph = (sentenceCount: number) => {
    if (typeof sentenceCount == "undefined") sentenceCount = 3;
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
   */
  paragraphs = (paragraphCount: number, separator: string) => {
    if (typeof separator === "undefined") {
      separator = "\n \r";
    }
    if (typeof paragraphCount == "undefined") paragraphCount = 3;
    const paragraphs = [];
    for (paragraphCount; paragraphCount > 0; paragraphCount--) {
      paragraphs.push(this.faker.lorem.paragraph());
    }
    return paragraphs.join(separator);
  };

  /**
   * returns random text based on a random lorem method
   *
   * @method faker.lorem.text
   * @param {number} times
   */
  loremText = (times: number) => {
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
   */
  lines = (lineCount: number) => {
    if (typeof lineCount === "undefined") {
      lineCount = this.faker.random.number(
        { min: 1, max: 5 },
      );
    }
    return this.faker.lorem.sentences(lineCount, "\n");
  };
}

export { Lorem };
