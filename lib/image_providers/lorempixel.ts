import type { Faker } from "../mod.ts";

interface ModuleMethods {
  image?: (width: number, height: number, randomize: boolean) => string;
  avatar?: () => string;
  imageUrl?: (
    width: number,
    height: number,
    category: string,
    randomize: boolean,
  ) => string;
  [key: string]: unknown;
}

/**
 * @namespace lorempixel
 * @memberof faker.image
 */
class Lorempixel implements ModuleMethods {
  [key: string]: unknown;
  faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.image
   * @returns {string}
   */
  image(width: number, height: number, randomize: boolean): string {
    const categories = [
      "abstract",
      "animals",
      "business",
      "cats",
      "city",
      "food",
      "nightlife",
      "fashion",
      "people",
      "nature",
      "sports",
      "technics",
      "transport",
    ];
    return (this[this.faker.random.arrayElement(categories)] as (
      width: number,
      height: number,
      randomize: boolean,
    ) => string)(width, height, randomize);
  }

  /**
   * avatar
   *
   * @method faker.image.lorempixel.avatar
   * @returns {string}
   */
  avatar(): string {
    return this.faker.internet.avatar();
  }

  /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @method faker.image.lorempixel.imageUrl
   * @returns {string}
   */
  imageUrl(
    width: number,
    height: number,
    category: string,
    randomize: boolean,
  ): string {
    width = width || 640;
    height = height || 480;

    let url = "http://lorempixel.com/" + width + "/" + height;
    if (typeof category !== "undefined") {
      url += "/" + category;
    }

    if (randomize) {
      url += "?" + this.faker.random.number();
    }

    return url;
  }

  /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  abstract(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "abstract",
      randomize,
    );
  }

  /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  animals(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "animals",
      randomize,
    );
  }

  /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  business(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "business",
      randomize,
    );
  }

  /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  cats(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "cats",
      randomize,
    );
  }

  /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  city(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "city",
      randomize,
    );
  }

  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  food(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "food",
      randomize,
    );
  }

  /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  nightlife(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "nightlife",
      randomize,
    );
  }

  /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  fashion(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "fashion",
      randomize,
    );
  }

  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  people(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "people",
      randomize,
    );
  }

  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  nature(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "nature",
      randomize,
    );
  }

  /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  sports(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "sports",
      randomize,
    );
  }

  /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  technics(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "technics",
      randomize,
    );
  }

  /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  transport(width: number, height: number, randomize: boolean): string {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "transport",
      randomize,
    );
  }
}

export { Lorempixel };
