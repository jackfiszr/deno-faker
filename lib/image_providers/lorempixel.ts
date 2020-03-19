/**
 *
 * @namespace lorempixel
 * @memberof faker.image
 */
class Lorempixel {
  [key: string]: any
  constructor(faker: any) {
    this.faker = faker;
  }

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.image
   */
  image(width: number, height: number, randomize: boolean) {
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
      "transport"
    ];
    return this[this.faker.random.arrayElement(categories)](
      width,
      height,
      randomize
    );
  }
  /**
   * avatar
   *
   * @method faker.image.lorempixel.avatar
   */
  avatar() {
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
   */
  imageUrl(
    width: number,
    height: number,
    category: string,
    randomize: boolean
  ) {
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
   * @method faker.image.lorempixel.abstract
   */
  abstract(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "abstract",
      randomize
    );
  }
  /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.animals
   */
  animals(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "animals",
      randomize
    );
  }
  /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.business
   */
  business(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "business",
      randomize
    );
  }
  /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.cats
   */
  cats(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "cats",
      randomize
    );
  }
  /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.city
   */
  city(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "city",
      randomize
    );
  }
  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.food
   */
  food(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "food",
      randomize
    );
  }
  /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nightlife
   */
  nightlife(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "nightlife",
      randomize
    );
  }
  /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.fashion
   */
  fashion(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "fashion",
      randomize
    );
  }
  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.people
   */
  people(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "people",
      randomize
    );
  }
  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nature
   */
  nature(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "nature",
      randomize
    );
  }
  /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.sports
   */
  sports(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "sports",
      randomize
    );
  }
  /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.technics
   */
  technics(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "technics",
      randomize
    );
  }
  /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.transport
   */
  transport(width: number, height: number, randomize: boolean) {
    return this.faker.image.lorempixel.imageUrl(
      width,
      height,
      "transport",
      randomize
    );
  }
}

export { Lorempixel };
