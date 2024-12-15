import type { Faker } from "./mod.ts";
import type { DateDefinition } from "./types.ts";
/**
 * @namespace faker.date
 */
class _Date {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * past
   *
   * @method faker.date.past
   * @param {number} years
   * @param {date} refDate
   */
  past = (years: number, refDate: string) => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (years || 1) * 365 * 24 * 3600 * 1000,
    };

    let past = date.getTime();
    past -= this.faker.random.number(range); // some time from now to N years ago, in milliseconds
    date.setTime(past);

    return date;
  };

  /**
   * future
   *
   * @method faker.date.future
   * @param {number} years
   * @param {date} refDate
   */
  future = (years: number, refDate: string) => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (years || 1) * 365 * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future += this.faker.random.number(range); // some time from now to N years later, in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * between
   *
   * @method faker.date.between
   * @param {date} from
   * @param {date} to
   */
  between = (from: string, to: string) => {
    const fromMilli = Date.parse(from);
    const dateOffset = this.faker.random.number(Date.parse(to) - fromMilli);

    const newDate = new Date(fromMilli + dateOffset);

    return newDate;
  };

  /**
   * recent
   *
   * @method faker.date.recent
   * @param {number} days
   * @param {date} refDate
   */
  recent = (days?: number, refDate?: string) => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (days || 1) * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future -= this.faker.random.number(range); // some time from now to N days ago, in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * soon
   *
   * @method faker.date.soon
   * @param {number} days
   * @param {date} refDate
   */
  soon = (days: number, refDate: string) => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (days || 1) * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future += this.faker.random.number(range); // some time from now to N days later, in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * month
   *
   * @method faker.date.month
   * @param {object} options
   */
  month = (options: Record<string, unknown>) => {
    options = options || {};

    let type: keyof DateDefinition["month"] = "wide"; // Default type
    if (options.abbr) {
      type = "abbr";
    }
    if (
      options.context &&
      typeof this.faker.definitions.date.month[`${type}_context`] !==
        "undefined"
    ) {
      type = `${type}_context` as keyof DateDefinition["month"];
    }

    const source = this.faker.definitions.date.month[type] ?? [];

    return this.faker.random.arrayElement(source);
  };

  /**
   * weekday
   *
   * @param {object} options
   * @method faker.date.weekday
   */
  weekday = (options: Record<string, unknown>) => {
    options = options || {};

    let type: keyof DateDefinition["weekday"] = "wide";
    if (options.abbr) {
      type = "abbr";
    }
    if (
      options.context &&
      typeof this.faker.definitions.date.weekday[`${type}_context`] !==
        "undefined"
    ) {
      type = `${type}_context` as keyof DateDefinition["weekday"];
    }

    const source = this.faker.definitions.date.weekday[type] ?? [];

    return this.faker.random.arrayElement(source);
  };
}

export { _Date };
