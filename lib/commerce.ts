/**
 *
 * @namespace faker.commerce
 */
class Commerce {
  faker: any;
  constructor(faker: any) {
    this.faker = faker;
  }

  /**
   * color
   *
   * @method faker.commerce.color
   */
  color = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.color
    );
  };

  /**
   * department
   *
   * @method faker.commerce.department
   */
  department = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.department
    );
  };

  /**
   * productName
   *
   * @method faker.commerce.productName
   */
  productName = () => {
    return this.faker.commerce.productAdjective() + " " +
      this.faker.commerce.productMaterial() + " " +
      this.faker.commerce.product();
  };

  /**
   * price
   *
   * @method faker.commerce.price
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */
  price = (min: number, max: number, dec: number, symbol: string) => {
    min = min || 1;
    max = max || 1000;
    dec = dec === undefined ? 2 : dec;
    symbol = symbol || "";

    if (min < 0 || max < 0) {
      return symbol + 0.00;
    }

    const randValue = this.faker.random.number({ max: max, min: min });

    return symbol +
      (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(
        dec
      );
  };

  /*
  categories = (num) => {
      const categories = [];

      do {
          const category = this.faker.random.arrayElement(faker.definitions.commerce.department);
          if(categories.indexOf(category) === -1) {
              categories.push(category);
          }
      } while(categories.length < num);

      return categories;
  };

  */
  /*
  mergeCategories = (categories) => {
      const separator = faker.definitions.separator || " &";
      // TODO: find undefined here
      categories = categories || faker.definitions.commerce.categories;
      const commaSeparated = categories.slice(0, -1).join(', ');

      return [commaSeparated, categories[categories.length - 1]].join(separator + " ");
  };
  */

  /**
   * productAdjective
   *
   * @method faker.commerce.productAdjective
   */
  productAdjective = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.adjective
    );
  };

  /**
   * productMaterial
   *
   * @method faker.commerce.productMaterial
   */
  productMaterial = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.material
    );
  };

  /**
   * product
   *
   * @method faker.commerce.product
   */
  product = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.product
    );
  };
}

export { Commerce };
