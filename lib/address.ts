import schemas from "./schemas.ts";
/**
 * @namespace faker.address
 */
class Address {
  faker: any;
  f: any;
  Helpers: any;
  constructor(faker: any) {
    this.faker = faker;
    this.Helpers = faker.helpers;
  }

  /**
   * Generates random zipcode from format. If format is not specified, the
   * locale's zip format is used.
   *
   * @method faker.address.zipCode
   * @param {String} format
   */
  zipCode = (format: string) => {
    // if zip format is not specified, use the zip format defined for the locale
    if (typeof format === "undefined") {
      const localeFormat = this.faker.definitions.address.postcode;
      if (typeof localeFormat === "string") {
        format = localeFormat;
      } else {
        format = this.faker.random.arrayElement(localeFormat);
      }
    }
    return this.Helpers.replaceSymbols(format);
  };

  /**
   * Generates random zipcode from state abbreviation. If state abbreviation is
   * not specified, a random zip code is generated according to the locale's zip format.
   * Only works for locales with postcode_by_state definition. If a locale does not
   * have a postcode_by_state definition, a random zip code is generated according
   * to the locale's zip format.
   *
   * @method faker.address.zipCodeByState
   * @param {String} state
   */
  zipCodeByState = (state: string) => {
    const zipRange = this.faker.definitions.address.postcode_by_state[state];
    if (zipRange) {
      return this.faker.random.number(zipRange);
    }
    return this.faker.address.zipCode();
  };

  /**
   * Generates a random localized city name. The format string can contain any
   * method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in
   * order to build the city name.
   *
   * If no format string is provided one of the following is randomly used:
   *
   * * `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
   * * `{{address.cityPrefix}} {{name.firstName}}`
   * * `{{name.firstName}}{{address.citySuffix}}`
   * * `{{name.lastName}}{{address.citySuffix}}`
   *
   * @method faker.address.city
   * @param {String} format
   */
  city = (format: number) => {
    const formats = [
      "{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}",
      "{{address.cityPrefix}} {{name.firstName}}",
      "{{name.firstName}}{{address.citySuffix}}",
      "{{name.lastName}}{{address.citySuffix}}",
    ];

    if (typeof format !== "number") {
      format = this.faker.random.number(formats.length - 1);
    }

    return this.faker.fake(formats[format]);
  };

  /**
   * Return a random localized city prefix
   * @method faker.address.cityPrefix
   */
  cityPrefix = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.city_prefix,
    );
  };

  /**
   * Return a random localized city suffix
   *
   * @method faker.address.citySuffix
   */
  citySuffix = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.city_suffix,
    );
  };

  /**
   * Returns a random localized street name
   *
   * @method faker.address.streetName
   */
  streetName = () => {
    let result;
    let suffix = this.faker.address.streetSuffix();
    if (suffix !== "") {
      suffix = " " + suffix;
    }

    switch (this.faker.random.number(1)) {
      case 0:
        result = this.faker.name.lastName() + suffix;
        break;
      case 1:
        result = this.faker.name.firstName() + suffix;
        break;
    }
    return result;
  };

  //
  // TODO: change all these methods that accept a boolean to instead accept an options hash.
  //
  /**
   * Returns a random localized street address
   *
   * @method faker.address.streetAddress
   * @param {Boolean} useFullAddress
   */
  streetAddress = (useFullAddress: boolean) => {
    if (useFullAddress === undefined) useFullAddress = false;
    let address = "";
    switch (this.faker.random.number(2)) {
      case 0:
        address = this.Helpers.replaceSymbolWithNumber("#####") + " " +
          this.faker.address.streetName();
        break;
      case 1:
        address = this.Helpers.replaceSymbolWithNumber("####") + " " +
          this.faker.address.streetName();
        break;
      case 2:
        address = this.Helpers.replaceSymbolWithNumber("###") + " " +
          this.faker.address.streetName();
        break;
    }
    return useFullAddress
      ? (address + " " + this.faker.address.secondaryAddress())
      : address;
  };

  /**
   * streetSuffix
   *
   * @method faker.address.streetSuffix
   */
  streetSuffix = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.street_suffix,
    );
  };

  /**
   * streetPrefix
   *
   * @method faker.address.streetPrefix
   */
  streetPrefix = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.street_prefix,
    );
  };

  /**
   * secondaryAddress
   *
   * @method faker.address.secondaryAddress
   */
  secondaryAddress = () => {
    return this.Helpers.replaceSymbolWithNumber(this.faker.random.arrayElement(
      [
        "Apt. ###",
        "Suite ###",
      ],
    ));
  };

  /**
   * county
   *
   * @method faker.address.county
   */
  county = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.county,
    );
  };

  /**
   * country
   *
   * @method faker.address.country
   */
  country = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.country,
    );
  };

  /**
   * countryCode
   *
   * @method faker.address.countryCode
   */
  countryCode = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.country_code,
    );
  };

  /**
   * state
   *
   * @method faker.address.state
   * @param {Boolean} useAbbr
   */
  state = (useAbbr: boolean) => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.state,
    );
  };

  /**
   * stateAbbr
   *
   * @method faker.address.stateAbbr
   */
  stateAbbr = () => {
    return this.faker.random.arrayElement(
      this.faker.definitions.address.state_abbr,
    );
  };

  /**
   * latitude
   *
   * @method faker.address.latitude
   * @param {Double} max default is 90
   * @param {Double} min default is -90
   * @param {number} precision default is 4
   */
  latitude = (max: number, min: number, precision: number) => {
    max = max || 90;
    min = min || -90;
    precision = precision || 4;

    return this.faker.random.number({
      max: max,
      min: min,
      precision: parseFloat((0.0).toPrecision(precision) + "1"),
    }).toFixed(precision);
  };

  /**
   * longitude
   *
   * @method faker.address.longitude
   * @param {Double} max default is 180
   * @param {Double} min default is -180
   * @param {number} precision default is 4
   */
  longitude = (max: number, min: number, precision: number) => {
    max = max || 180;
    min = min || -180;
    precision = precision || 4;

    return this.faker.random.number({
      max: max,
      min: min,
      precision: parseFloat((0.0).toPrecision(precision) + "1"),
    }).toFixed(precision);
  };

  /**
   *  direction
   *
   * @method faker.address.direction
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  direction = (useAbbr: boolean) => {
    const schema = schemas.direction;
    if (typeof useAbbr === "undefined" || useAbbr === false) {
      return this.faker.random.arrayElement(
        this.faker.definitions.address.direction,
      );
    }
    return this.faker.random.arrayElement(
      this.faker.definitions.address.direction_abbr,
    );
  };

  /**
   * cardinal direction
   *
   * @method faker.address.cardinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  cardinalDirection = (useAbbr: boolean) => {
    const schema = schemas.cardinalDirection;
    if (typeof useAbbr === "undefined" || useAbbr === false) {
      return (
        this.faker.random.arrayElement(
          this.faker.definitions.address.direction.slice(0, 4),
        )
      );
    }
    return (
      this.faker.random.arrayElement(
        this.faker.definitions.address.direction_abbr.slice(0, 4),
      )
    );
  };

  /**
   * ordinal direction
   *
   * @method faker.address.ordinalDirection
   * @param {Boolean} useAbbr return direction abbreviation. defaults to false
   */
  ordinalDirection = (useAbbr: boolean) => {
    const schema = schemas.ordinalDirection;
    if (typeof useAbbr === "undefined" || useAbbr === false) {
      return (
        this.faker.random.arrayElement(
          this.faker.definitions.address.direction.slice(4, 8),
        )
      );
    }
    return (
      this.faker.random.arrayElement(
        this.faker.definitions.address.direction_abbr.slice(4, 8),
      )
    );
  };

  nearbyGPSCoordinate = (
    coordinate: number[],
    radius: number,
    isMetric: boolean,
  ) => {
    function randomFloat(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    function degreesToRadians(degrees: number) {
      return degrees * (Math.PI / 180.0);
    }
    function radiansToDegrees(radians: number) {
      return radians * (180.0 / Math.PI);
    }
    function kilometersToMiles(miles: number) {
      return miles * 0.621371;
    }
    function coordinateWithOffset(
      coordinate: number[],
      bearing: number,
      distance: number,
      isMetric: boolean,
    ) {
      const R = 6378.137; // Radius of the Earth (http://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html)
      const d = isMetric ? distance : kilometersToMiles(distance); // Distance in km

      const lat1 = degreesToRadians(coordinate[0]); // Current lat point converted to radians
      const lon1 = degreesToRadians(coordinate[1]); // Current long point converted to radians

      const lat2 = Math.asin(
        Math.sin(lat1) * Math.cos(d / R) +
          Math.cos(lat1) * Math.sin(d / R) * Math.cos(bearing),
      );

      let lon2 = lon1 + Math.atan2(
        Math.sin(bearing) * Math.sin(d / R) * Math.cos(lat1),
        Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2),
      );

      // Keep longitude in range [-180, 180]
      if (lon2 > degreesToRadians(180)) {
        lon2 = lon2 - degreesToRadians(360);
      } else if (lon2 < degreesToRadians(-180)) {
        lon2 = lon2 + degreesToRadians(360);
      }

      return [radiansToDegrees(lat2), radiansToDegrees(lon2)];
    }

    // If there is no coordinate, the best we can do is return a random GPS coordinate.
    if (coordinate === undefined) {
      return [this.faker.address.latitude(), this.faker.address.longitude()];
    }
    radius = radius || 10.0;
    isMetric = isMetric || false;

    // TODO: implement either a gaussian/uniform distribution of points in cicular region.
    // Possibly include param to function that allows user to choose between distributions.

    // This approach will likely result in a higher density of points near the center.
    const randomCoord = coordinateWithOffset(
      coordinate,
      degreesToRadians(Math.random() * 360.0),
      radius,
      isMetric,
    );
    return [randomCoord[0].toFixed(4), randomCoord[1].toFixed(4)];
  };
}

export { Address };
