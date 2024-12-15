import type { Faker } from "./mod.ts";
/**
 * @namespace faker.commerce
 */
class Commerce {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Returns a random commerce color.
   *
   * @method faker.commerce.color
   * @returns {string}
   */
  color = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.color,
    );
  };

  /**
   * Returns a random commerce department.
   *
   * @method faker.commerce.department
   * @returns {string}
   */
  department = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.department,
    );
  };

  /**
   * Generates a random product name combining adjective, material, and product.
   *
   * @method faker.commerce.productName
   * @returns {string}
   */
  productName = (): string => {
    return this.faker.commerce.productAdjective() + " " +
      this.faker.commerce.productMaterial() + " " +
      this.faker.commerce.product();
  };

  /**
   * Generates a price string with a specified range, decimal precision, and symbol.
   *
   * @method faker.commerce.price
   * @param {number} min Minimum price value
   * @param {number} max Maximum price value
   * @param {number} dec Decimal places
   * @param {string} symbol Currency symbol
   * @returns {string}
   */
  price = (min: number, max: number, dec: number, symbol: string): string => {
    min = min || 1;
    max = max || 1000;
    dec = dec === undefined ? 2 : dec;
    symbol = symbol || "";

    if (min < 0 || max < 0) {
      return symbol + "0.00";
    }

    const randValue = this.faker.random.number({ max: max, min: min });

    return symbol +
      (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(
        dec,
      );
  };

  /**
   * Returns a random product adjective.
   *
   * @method faker.commerce.productAdjective
   * @returns {string}
   */
  productAdjective = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.adjective,
    );
  };

  /**
   * Returns a random product material.
   *
   * @method faker.commerce.productMaterial
   * @returns {string}
   */
  productMaterial = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.material,
    );
  };

  /**
   * Returns a random product name.
   *
   * @method faker.commerce.product
   * @returns {string}
   */
  product = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.commerce.product_name.product,
    );
  };
}

export { Commerce };
