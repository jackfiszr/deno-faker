import type { Faker } from "./mod.ts";
import type { DateDefinition } from "./types.d.ts";

/**
 * @namespace faker.date
 */
class _Date {
  faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Returns a date in the past relative to the given reference date.
   *
   * @param {number} years - Number of years to go back.
   * @param {string} refDate - Reference date (ISO string or Date string).
   * @returns {Date}
   */
  past = (years: number, refDate: string): Date => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (years || 1) * 365 * 24 * 3600 * 1000,
    };

    let past = date.getTime();
    past -= this.faker.random.number(range); // Go back in milliseconds
    date.setTime(past);

    return date;
  };

  /**
   * Returns a date in the future relative to the given reference date.
   *
   * @param {number} years - Number of years to move forward.
   * @param {string} refDate - Reference date (ISO string or Date string).
   * @returns {Date}
   */
  future = (years: number, refDate: string): Date => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (years || 1) * 365 * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future += this.faker.random.number(range); // Move forward in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * Returns a random date between two given dates.
   *
   * @param {string} from - Start date (ISO string or Date string).
   * @param {string} to - End date (ISO string or Date string).
   * @returns {Date}
   */
  between = (from: string, to: string): Date => {
    const fromMilli = Date.parse(from);
    const dateOffset = this.faker.random.number(Date.parse(to) - fromMilli);

    const newDate = new Date(fromMilli + dateOffset);

    return newDate;
  };

  /**
   * Returns a date in the recent past relative to the given reference date.
   *
   * @param {number} [days] - Number of days to go back.
   * @param {string} [refDate] - Reference date (ISO string or Date string).
   * @returns {Date}
   */
  recent = (days?: number, refDate?: string): Date => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (days || 1) * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future -= this.faker.random.number(range); // Go back in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * Returns a date in the near future relative to the given reference date.
   *
   * @param {number} days - Number of days to move forward.
   * @param {string} refDate - Reference date (ISO string or Date string).
   * @returns {Date}
   */
  soon = (days: number, refDate: string): Date => {
    let date = new Date();
    if (typeof refDate !== "undefined") {
      date = new Date(Date.parse(refDate));
    }

    const range = {
      min: 1000,
      max: (days || 1) * 24 * 3600 * 1000,
    };

    let future = date.getTime();
    future += this.faker.random.number(range); // Move forward in milliseconds
    date.setTime(future);

    return date;
  };

  /**
   * Returns a random month name.
   *
   * @param {Record<string, unknown>} options - Options to determine format.
   * @returns {string}
   */
  month = (options: Record<string, unknown>): string => {
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
   * Returns a random weekday name.
   *
   * @param {Record<string, unknown>} options - Options to determine format.
   * @returns {string}
   */
  weekday = (options: Record<string, unknown>): string => {
    options = options || {};

    let type: keyof DateDefinition["weekday"] = "wide"; // Default type
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
