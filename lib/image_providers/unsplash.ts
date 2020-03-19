/**
 *
 * @namespace unsplash
 * @memberof faker.image
 */
class Unsplash {
  faker: any;
  categories: string[];
  constructor(faker: any) {
    this.faker = faker;
    this.categories = [
      "food",
      "nature",
      "people",
      "technology",
      "objects",
      "buildings"
    ];
  }

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.image
   * @description search image from unsplash
   */
  image(width: number, height: number, keyword: string) {
    return this.imageUrl(width, height, undefined, keyword);
  }
  /**
   * avatar
   *
   * @method faker.image.unsplash.avatar
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
   * @param {string} keyword
   * @method faker.image.unsplash.imageUrl
   */
  imageUrl(
    width: number,
    height: number,
    category: string | undefined,
    keyword: string
  ) {
    width = width || 640;
    height = height || 480;

    let url = "https://source.unsplash.com";

    if (typeof category !== "undefined") {
      url += "/category/" + category;
    }

    url += "/" + width + "x" + height;

    if (typeof keyword !== "undefined") {
      const keywordFormat = new RegExp(
        "^([A-Za-z0-9].+,[A-Za-z0-9]+)$|^([A-Za-z0-9]+)$"
      );
      if (keywordFormat.test(keyword)) {
        url += "?" + keyword;
      }
    }

    return url;
  }
  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.food
   */
  food(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(width, height, "food", keyword);
  }
  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.people
   */
  people(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(
      width,
      height,
      "people",
      keyword
    );
  }
  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.nature
   */
  nature(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(
      width,
      height,
      "nature",
      keyword
    );
  }
  /**
   * technology
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.technology
   */
  technology(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(
      width,
      height,
      "technology",
      keyword
    );
  }
  /**
   * objects
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.objects
   */
  objects(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(
      width,
      height,
      "objects",
      keyword
    );
  }
  /**
   * buildings
   *
   * @param {number} width
   * @param {number} height
   * @param {string} keyword
   * @method faker.image.unsplash.buildings
   */
  buildings(width: number, height: number, keyword: string) {
    return this.faker.image.unsplash.imageUrl(
      width,
      height,
      "buildings",
      keyword
    );
  }
}

export { Unsplash };
