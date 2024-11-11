import schemas from "./schemas.ts";
/**
 * @namespace faker.vehicle
 */
class Vehicle {
  faker: any;
  constructor(faker: any) {
    this.faker = faker;
  }

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  vehicle = () => {
    const schema = schemas.vehicle;
    return this.faker.fake("{{vehicle.manufacturer}} {{vehicle.model}}");
  };

  /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */
  manufacturer = () => {
    const schema = schemas.manufacturer;
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
    const schema = schemas.model;
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
    const schema = schemas.vtype;
    return this.faker.random.arrayElement(this.faker.definitions.vehicle.type);
  };

  /**
   * fuel
   *
   * @method faker.vehicle.fuel
   */
  fuel = () => {
    const schema = schemas.fuel;
    return this.faker.random.arrayElement(this.faker.definitions.vehicle.fuel);
  };

  /**
   * vin
   *
   * @method faker.vehicle.vin
   */
  vin = () => {
    const schema = schemas.vin;
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
    const schema = schemas.vcolor;
    return this.faker.fake("{{commerce.color}}");
  };
}

export { Vehicle };
