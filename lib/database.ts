import schemas from "./schemas.ts";
/**
 *
 * @namespace faker.database
 */
class Database {
  faker: any;
  constructor(faker: any) {
    this.faker = faker;
  }

  /**
   * column
   *
   * @method faker.database.column
   */
  column = () => {
    const schema = schemas.column;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.column
    );
  };

  /**
   * type
   *
   * @method faker.database.type
   */
  type = () => {
    const schema = schemas.type;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.type
    );
  };

  /**
   * collation
   *
   * @method faker.database.collation
   */
  collation = () => {
    const schema = schemas.collation;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.collation
    );
  };

  /**
   * engine
   *
   * @method faker.database.engine
   */
  engine = () => {
    const schema = schemas.engine;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.engine
    );
  };
}

export { Database };
