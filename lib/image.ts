import { Lorempixel } from "./image_providers/lorempixel.ts";
import { Unsplash } from "./image_providers/unsplash.ts";
import type { Faker } from "./mod.ts";

/**
 * @namespace faker.image
 * @property {object} lorempixel - faker.image.lorempixel
 * @property {object} unsplash - faker.image.unsplash
 * @default Default provider is unsplash image provider
 */
class Image {
  faker: Faker;
  lorempixel: Lorempixel;
  unsplash: Unsplash;

  constructor(faker: Faker) {
    this.faker = faker;
    this.lorempixel = new Lorempixel(faker);
    this.unsplash = new Unsplash(faker);
  }

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.image
   * @returns {string}
   */
  image = (width?: number, height?: number, randomize?: boolean): string => {
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
    const category = this.faker.random.arrayElement(categories);
    return this.imageUrl(width, height, category, randomize ?? false, false);
  };

  /**
   * avatar
   *
   * @method faker.image.avatar
   * @returns {string}
   */
  avatar = (): string => {
    return this.faker.internet.avatar();
  };

  /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @param {boolean} https
   * @method faker.image.imageUrl
   * @returns {string}
   */
  imageUrl = (
    width?: number,
    height?: number,
    category?: string,
    randomize?: boolean,
    https?: boolean,
  ): string => {
    width = width || 640;
    height = height || 480;
    let protocol = "http://";
    if (typeof https !== "undefined" && https === true) {
      protocol = "https://";
    }
    let url = protocol + "lorempixel.com/" + width + "/" + height;
    if (typeof category !== "undefined") {
      url += "/" + category;
    }

    if (randomize) {
      url += "?" + this.faker.random.number();
    }

    return url;
  };

  /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  abstract = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "abstract", randomize);
  };

  /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  animals = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "animals", randomize);
  };

  /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  business = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "business", randomize);
  };

  /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  cats = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "cats", randomize);
  };

  /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  city = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "city", randomize);
  };

  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  food = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "food", randomize);
  };

  /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  nightlife = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "nightlife", randomize);
  };

  /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  fashion = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "fashion", randomize);
  };

  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  people = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "people", randomize);
  };

  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  nature = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "nature", randomize);
  };

  /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  sports = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "sports", randomize);
  };

  /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  technics = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "technics", randomize);
  };

  /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @returns {string}
   */
  transport = (width: number, height: number, randomize: boolean): string => {
    return this.imageUrl(width, height, "transport", randomize);
  };

  /**
   * dataUri
   *
   * @param {number} width
   * @param {number} height
   * @param {string} color
   * @method faker.image.dataUri
   * @returns {string}
   */
  dataUri = (width: number, height: number, color: string): string => {
    color = color || "grey";
    const svgString =
      `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${width}" height="${height}"><rect width="100%" height="100%" fill="${color}"/><text x="${
        width / 2
      }" y="${
        height / 2
      }" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${width}x${height}</text></svg>`;
    const rawPrefix = "data:image/svg+xml;charset=UTF-8,";
    return rawPrefix + encodeURIComponent(svgString);
  };
}

export { Image };
