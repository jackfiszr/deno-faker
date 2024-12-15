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
   * Returns a random database column name.
   *
   * @method faker.database.column
   * @returns {string}
   */
  column = (): string => {
    const _schema = schemas.column;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.column,
    );
  };

  /**
   * Returns a random database type.
   *
   * @method faker.database.type
   * @returns {string}
   */
  type = (): string => {
    const _schema = schemas.type;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.type,
    );
  };

  /**
   * Returns a random collation setting for a database.
   *
   * @method faker.database.collation
   * @returns {string}
   */
  collation = (): string => {
    const _schema = schemas.collation;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.collation,
    );
  };

  /**
   * Returns a random database engine.
   *
   * @method faker.database.engine
   * @returns {string}
   */
  engine = (): string => {
    const _schema = schemas.engine;
    return this.faker.random.arrayElement(
      this.faker.definitions.database.engine,
    );
  };
}

export { Database };
