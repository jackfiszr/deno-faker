import type { Faker } from "./mod.ts";
import schemas from "./schemas.ts";
/**
 * @namespace faker.database
 */
class Database {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * column
   *
   * @method faker.database.column
   */
  column = () => {
    const _schema = schemas.column;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.column,
    );
  };

  /**
   * type
   *
   * @method faker.database.type
   */
  type = () => {
    const _schema = schemas.type;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.type,
    );
  };

  /**
   * collation
   *
   * @method faker.database.collation
   */
  collation = () => {
    const _schema = schemas.collation;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.collation,
    );
  };

  /**
   * engine
   *
   * @method faker.database.engine
   */
  engine = () => {
    const _schema = schemas.engine;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.engine,
    );
  };
}

export { Database };
