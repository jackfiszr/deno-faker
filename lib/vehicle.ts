import type { Faker } from "./mod.ts";
import schemas from "./schemas.ts";
/**
 * @namespace faker.vehicle
 */
class Vehicle {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  vehicle = () => {
    const _schema = schemas.vehicle;
    return this.faker.fake("{{vehicle.manufacturer}} {{vehicle.model}}");
  };

  /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */
  manufacturer = () => {
    const _schema = schemas.manufacturer;
    return this.faker.random.arrayElement(
      this.faker.definitions.vehicle.manufacturer,
    );
  };

  /**
   * model
   *
   * @method faker.vehicle.model
   */
  model = () => {
    const _schema = schemas.model;
    return this.faker.random.arrayElement(
      this.faker.definitions.vehicle.model,
    );
  };

  /**
   * type
   *
   * @method faker.vehicle.type
   */
  type = () => {
    const _schema = schemas.vtype;
    return this.faker.random.arrayElement(this.faker.definitions.vehicle.type);
  };

  /**
   * fuel
   *
   * @method faker.vehicle.fuel
   */
  fuel = () => {
    const _schema = schemas.fuel;
    return this.faker.random.arrayElement(this.faker.definitions.vehicle.fuel);
  };

  /**
   * vin
   *
   * @method faker.vehicle.vin
   */
  vin = () => {
    const _schema = schemas.vin;
    return (
      this.faker.random.alphaNumeric(10) +
      this.faker.random.alpha({ count: 1, upcase: true }) +
      this.faker.random.alphaNumeric(1) +
      this.faker.random.number({ min: 10000, max: 100000 }) // return five digit #
    ).toUpperCase();
  };

  /**
   * color
   *
   * @method faker.vehicle.color
   */
  color = () => {
    const _schema = schemas.vcolor;
    return this.faker.fake("{{commerce.color}}");
  };
}

export { Vehicle };
