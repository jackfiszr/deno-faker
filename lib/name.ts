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
   * @param {mixed} gender
   * @memberof faker.name
   */
  firstName = (gender?: number) => {
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
   * @param {mixed} gender
   * @memberof faker.name
   */
  lastName = (gender?: number) => {
    const locale = this.faker.locales[this.faker.locale]?.name;
    if (
      typeof locale === "object" && locale !== null &&
      "male_last_name" in locale
    ) {
      // some locale datasets ( like ru ) have last_name split by gender. i have no idea how last names can have genders, but also i do not speak russian
      // see above comment of firstName method
      if (typeof gender !== "number") gender = this.faker.random.number(1);
      return gender === 0
        ? this.faker.random.arrayElement(locale.male_last_name)
        : this.faker.random.arrayElement(locale.female_last_name);
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
   * @param {mixed} gender
   * @memberof faker.name
   */
  findName = (firstName: string, lastName: string, gender: number) => {
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
   * @memberof faker.name
   */
  jobTitle = () => {
    return this.faker.name.jobDescriptor() + " " +
      this.faker.name.jobArea() + " " +
      this.faker.name.jobType();
  };

  /**
   * gender
   *
   * @method gender
   * @memberof faker.name
   */
  gender = () => {
    return this.faker.random.arrayElement(this.faker.definitions.name.gender);
  };

  /**
   * prefix
   *
   * @method prefix
   * @param {mixed} gender
   * @memberof faker.name
   */
  prefix = (gender?: number) => {
    const locale = this.faker.locales[this.faker.locale]?.name;
    const definitions = this.faker.definitions.name;
    if (
      typeof locale === "object" && locale !== null &&
      "male_last_name" in locale
    ) {
      if (typeof gender !== "number") gender = this.faker.random.number(1);
      return gender === 0
        ? this.faker.random.arrayElement(locale.male_prefix)
        : this.faker.random.arrayElement(locale.female_prefix);
    }
    return this.faker.random.arrayElement(definitions?.prefix ?? []);
  };

  /**
   * suffix
   *
   * @method suffix
   * @memberof faker.name
   */
  suffix = () => {
    const definitions = this.faker.definitions.name;
    return this.faker.random.arrayElement(definitions?.suffix ?? []);
  };

  /**
   * title
   *
   * @method title
   * @memberof faker.name
   */
  title = () => {
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
   * @memberof faker.name
   */
  jobDescriptor = () => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.descriptor ?? []);
  };

  /**
   * jobArea
   *
   * @method jobArea
   * @memberof faker.name
   */
  jobArea = () => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.level ?? []);
  };

  /**
   * jobType
   *
   * @method jobType
   * @memberof faker.name
   */
  jobType = () => {
    const title = this.faker.definitions.name?.title;
    return this.faker.random.arrayElement(title?.job ?? []);
  };
}

export { Name };
