import type { Faker } from "./mod.ts";
/**
 * @namespace faker.phone
 */
class Phone {
  faker: Faker;
  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * phoneNumber
   *
   * @method faker.phone.phoneNumber
   * @param {string} format
   * @returns {string}
   * @memberOf faker.phone
   */
  phoneNumber = (format?: string): string => {
    format = format || this.faker.phone.phoneFormats();
    return this.faker.helpers.replaceSymbolWithNumber(format);
  };

  // FIXME: this is strange passing in an array index.
  /**
   * phoneNumberFormat
   *
   * @method faker.phone.phoneFormatsArrayIndex
   * @param phoneFormatsArrayIndex
   * @returns {string}
   * @memberOf faker.phone
   */
  phoneNumberFormat = (phoneFormatsArrayIndex: number): string => {
    phoneFormatsArrayIndex = phoneFormatsArrayIndex || 0;
    return this.faker.helpers.replaceSymbolWithNumber(
      this.faker.definitions.phone_number.formats[phoneFormatsArrayIndex],
    );
  };

  /**
   * phoneFormats
   *
   * @method faker.phone.phoneFormats
   * @returns {string}
   */
  phoneFormats = (): string => {
    return this.faker.random.arrayElement(
      this.faker.definitions.phone_number.formats,
    );
  };
}

export { Phone };
