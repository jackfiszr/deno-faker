import type { Faker } from "./mod.ts";

/**
 * @namespace faker.name
 */
class Name {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * firstName
   *
   * @method firstName
   * @param {number} gender
   * @returns {string}
   * @memberof faker.name
   */
  firstName = (gender?: number): string => {
    const definitions = this.faker.definitions.name;
    if (definitions?.male_first_name && definitions?.female_first_name) {
      // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
      // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
      if (typeof gender !== "number") {
        if (!definitions.first_name) {
          gender = this.faker.random.number(1);
        } else {
          //Fall back to non-gendered names if they exist and gender wasn't specified
          return this.faker.random.arrayElement(definitions.first_name);
        }
      }
      if (gender === 0) {
        return this.faker.random.arrayElement(definitions.male_first_name);
      } else {
        return this.faker.random.arrayElement(definitions.female_first_name);
      }
    }
    return this.faker.random.arrayElement(definitions.first_name);
  };

  /**
   * lastName
   *
   * @method lastName
   * @param {number} gender
   * @returns {string}
   * @memberof faker.name
   */
  lastName = (gender?: number): string => {
    const locale = this.faker.locales[this.faker.locale]?.name;
    if (
      typeof locale === "object" &&
      locale !== null &&
      Array.isArray(locale.male_last_name) &&
      Array.isArray(locale.female_last_name)
    ) {
      // some locale datasets ( like ru ) have last_name split by gender
      // see above comment of firstName method
      if (typeof gender !== "number") gender = this.faker.random.number(1);
      const maleLastName = locale.male_last_name;
      const femaleLastName = locale.female_last_name;
      return gender === 0
        ? this.faker.random.arrayElement(maleLastName)
        : this.faker.random.arrayElement(femaleLastName);
    }
    // Fallback in case the locale doesn't have male/female last names
    const definitions = this.faker.definitions.name;
    return this.faker.random.arrayElement(definitions?.last_name ?? []);
  };

  /**
   * findName
   *
   * @method findName
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} gender
   * @returns {string}
   * @memberof faker.name
   */
  findName = (
    firstName?: string,
    lastName?: string,
    gender?: number,
  ): string => {
    const r = this.faker.random.number(8);
    let prefix, suffix;
    // in particular locales first and last names split by gender,
    // thus we keep consistency by passing 0 as male and 1 as female

    if (typeof gender !== "number") {
      gender = this.faker.random.number(1);
    }
    firstName = firstName || this.faker.name.firstName(gender);
    lastName = lastName || this.faker.name.lastName(gender);

    switch (r) {
      case 0:
        prefix = this.faker.name.prefix(gender);
        if (prefix) {
          return prefix + " " + firstName + " " + lastName;
        }
      /* falls through */
      case 1:
        suffix = this.faker.name.suffix();
        if (suffix) {
          return firstName + " " + lastName + " " + suffix;
        }
    }

    return firstName + " " + lastName;
  };

  /**
   * jobTitle
   *
   * @method jobTitle
   * @returns {string}
   * @memberof faker.name
   */
  jobTitle = (): string => {
    return this.faker.name.jobDescriptor() + " " +
      this.faker.name.jobArea() + " " +
      this.faker.name.jobType();
  };

  /**
   * gender
   *
   * @method gender
   * @returns {string}
   * @memberof faker.name
   */
  gender = (): string => {
    return this.faker.random.arrayElement(this.faker.definitions.name.gender);
  };

  /**
   * prefix
   *
   * @method prefix
   * @param {number} gender
   * @returns {string}
   * @memberof faker.name
   */
  prefix = (gender?: number): string => {
    const locale = this.faker.locales[this.faker.locale]?.name;
    const definitions = this.faker.definitions.name;

    if (
      typeof locale === "object" &&
      locale !== null &&
      Array.isArray(locale.male_prefix) &&
      Array.isArray(locale.female_prefix)
    ) {
      if (typeof gender !== "number") gender = this.faker.random.number(1);
      const malePrefix = locale.male_prefix;
      const femalePrefix = locale.female_prefix;
      return gender === 0
        ? this.faker.random.arrayElement(malePrefix)
        : this.faker.random.arrayElement(femalePrefix);
    }
    return this.faker.random.arrayElement(definitions?.prefix ?? []);
  };

  /**
   * suffix
   *
   * @method suffix
   * @returns {string}
   * @memberof faker.name
   */
  suffix = (): string => {
    const definitions = this.faker.definitions.name;
    return this.faker.random.arrayElement(definitions?.suffix ?? []);
  };

  /**
   * title
   *
   * @method title
   * @returns {string}
   * @memberof faker.name
   */
  title = (): string => {
    const title = this.faker.definitions.name?.title;
    const descriptor = this.faker.random.arrayElement(title?.descriptor ?? []);
    const level = this.faker.random.arrayElement(title?.level ?? []);
    const job = this.faker.random.arrayElement(title?.job ?? []);
    return `${descriptor} ${level} ${job}`;
  };

  /**
   * jobDescriptor
   *
   * @method jobDescriptor
   * @returns {string}
   * @memberof faker.name
   */
  jobDescriptor = (): string => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.descriptor ?? []);
  };

  /**
   * jobArea
   *
   * @method jobArea
   * @returns {string}
   * @memberof faker.name
   */
  jobArea = (): string => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.level ?? []);
  };

  /**
   * jobType
   *
   * @method jobType
   * @returns {string}
   * @memberof faker.name
   */
  jobType = (): string => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.job ?? []);
  };
}

export { Name };
