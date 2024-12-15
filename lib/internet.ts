import type { Faker } from "./mod.ts";
import * as random_ua from "../vendor/user-agent.ts";
import schemas from "./schemas.ts";

/**
 * @namespace faker.internet
 */
class Internet {
  faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * avatar
   *
   * @method faker.internet.avatar
   * @returns {string}
   */
  avatar = (): string => {
    const _schema = schemas.avatar;
    return this.faker.random.arrayElement(
      this.faker.definitions.internet.avatar_uri,
    );
  };

  /**
   * email
   *
   * @method faker.internet.email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} provider
   * @returns {string}
   */
  email = (
    firstName?: string,
    lastName?: string,
    provider?: string,
  ): string => {
    const _schema = schemas.email;
    provider = provider ||
      this.faker.random.arrayElement(
        this.faker.definitions.internet.free_email,
      );
    return this.faker.helpers.slugify(
      this.faker.internet.userName(firstName, lastName),
    ) + "@" + provider;
  };

  /**
   * exampleEmail
   *
   * @method faker.internet.exampleEmail
   * @param {string} firstName
   * @param {string} lastName
   * @returns {string}
   */
  exampleEmail = (firstName: string, lastName: string): string => {
    const provider = this.faker.random.arrayElement(
      this.faker.definitions.internet.example_email,
    );
    return this.email(firstName, lastName, provider);
  };

  /**
   * userName
   *
   * @method faker.internet.userName
   * @param {string} firstName
   * @param {string} lastName
   * @returns {string}
   */
  userName = (firstName?: string, lastName?: string): string => {
    const _schema = schemas.userName;
    const safeFirstName = firstName || this.faker.name.firstName() || "user";
    const safeLastName = lastName || this.faker.name.lastName() || "name";
    let result = "";
    switch (this.faker.random.number(2)) {
      case 0:
        result = safeFirstName + this.faker.random.number(99);
        break;
      case 1:
        result = safeFirstName + this.faker.random.arrayElement([".", "_"]) +
          safeLastName;
        break;
      case 2:
        result = safeFirstName + this.faker.random.arrayElement([".", "_"]) +
          safeLastName + this.faker.random.number(99);
        break;
    }
    result = result?.toString().replace(/'/g, "");
    result = result?.replace(/ /g, "");
    return result;
  };

  /**
   * protocol
   *
   * @method faker.internet.protocol
   * @returns {string}
   */
  protocol = (): string => {
    const _schema = schemas.protocol;
    const protocols = ["http", "https"];
    return this.faker.random.arrayElement(protocols);
  };

  /**
   * url
   *
   * @method faker.internet.url
   * @returns {string}
   */
  url = (): string => {
    const _schema = schemas.url;
    return this.faker.internet.protocol() + "://" +
      this.faker.internet.domainName();
  };

  /**
   * domainName
   *
   * @method faker.internet.domainName
   * @returns {string}
   */
  domainName = (): string => {
    const _schema = schemas.domainName;
    return this.faker.internet.domainWord() + "." +
      this.faker.internet.domainSuffix();
  };

  /**
   * domainSuffix
   *
   * @method faker.internet.domainSuffix
   * @returns {string}
   */
  domainSuffix = (): string => {
    const _schema = schemas.domainSuffix;
    return this.faker.random.arrayElement(
      this.faker.definitions.internet.domain_suffix,
    );
  };

  /**
   * domainWord
   *
   * @method faker.internet.domainWord
   * @returns {string}
   */
  domainWord = (): string => {
    const _schema = schemas.domainWord;
    return this.faker.name.firstName().replace(/([\\~#&*{}/:<>?|\''])/ig, "")
      .toLowerCase();
  };

  /**
   * ip
   *
   * @method faker.internet.ip
   * @returns {string}
   */
  ip = (): string => {
    const _schema = schemas.ip;
    const randNum = (): string => {
      return (this.faker.random.number(255)).toFixed(0);
    };

    const result: string[] = [];
    for (let i = 0; i < 4; i++) {
      result[i] = randNum();
    }

    return result.join(".");
  };

  /**
   * ipv6
   *
   * @method faker.internet.ipv6
   * @returns {string}
   */
  ipv6 = (): string => {
    const _schema = schemas.ipv6;
    const randHash = (): string => {
      let result = "";
      for (let i = 0; i < 4; i++) {
        result += this.faker.random.arrayElement(
          "0123456789abcdef".split(""),
        );
      }
      return result;
    };

    const result: string[] = [];
    for (let i = 0; i < 8; i++) {
      result[i] = randHash();
    }
    return result.join(":");
  };

  /**
   * userAgent
   *
   * @method faker.internet.userAgent
   * @returns {string}
   */
  userAgent = (): string => {
    const _schema = schemas.userAgent;
    return random_ua.generate();
  };

  /**
   * color
   *
   * @method faker.internet.color
   * @param {number} baseRed255
   * @param {number} baseGreen255
   * @param {number} baseBlue255
   * @returns {string}
   */
  color = (
    baseRed255: number,
    baseGreen255: number,
    baseBlue255: number,
  ): string => {
    const _schema = schemas.color;
    baseRed255 = baseRed255 || 0;
    baseGreen255 = baseGreen255 || 0;
    baseBlue255 = baseBlue255 || 0;

    const red = Math.floor((this.faker.random.number(256) + baseRed255) / 2);
    const green = Math.floor(
      (this.faker.random.number(256) + baseGreen255) / 2,
    );
    const blue = Math.floor((this.faker.random.number(256) + baseBlue255) / 2);
    const redStr = red.toString(16);
    const greenStr = green.toString(16);
    const blueStr = blue.toString(16);

    return "#" +
      (redStr.length === 1 ? "0" : "") + redStr +
      (greenStr.length === 1 ? "0" : "") + greenStr +
      (blueStr.length === 1 ? "0" : "") + blueStr;
  };

  /**
   * mac
   *
   * @method faker.internet.mac
   * @param {string} sep
   * @returns {string}
   */
  mac = (sep: string): string => {
    const _schema = schemas.mac;
    let i, mac = "", validSep = ":";

    // if the client passed in a different separator than `:`,
    // we will use it if it is in the list of acceptable separators (dash or no separator)
    if (["-", ""].indexOf(sep) !== -1) {
      validSep = sep;
    }

    for (i = 0; i < 12; i++) {
      mac += this.faker.random.number(15).toString(16);
      if (i % 2 == 1 && i != 11) {
        mac += validSep;
      }
    }
    return mac;
  };

  /**
   * password
   *
   * @method faker.internet.password
   * @param {number} len
   * @param {boolean} memorable
   * @param {string} pattern
   * @param {string} prefix
   * @returns {string}
   */
  password = (
    len: number,
    memorable: boolean,
    pattern: RegExp,
    prefix: string,
  ): string => {
    const _schema = schemas.password;

    const password = (
      length: number,
      memorable: boolean,
      pattern: RegExp,
      prefix: string,
    ): string => {
      const consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/;
      const vowel = /[aeiouAEIOU]$/;

      if (prefix.length >= length) return prefix;

      let nextPattern = pattern;
      if (memorable) {
        nextPattern = prefix.match(consonant) ? vowel : consonant;
      }

      const n = this.faker.random.number(94) + 33;
      const char = String.fromCharCode(n).toLowerCase();

      if (!char.match(nextPattern)) {
        return password(length, memorable, nextPattern, prefix);
      }

      return password(length, memorable, nextPattern, prefix + char);
    };

    return password(
      len || 15,
      memorable || false,
      pattern || /\w/,
      prefix || "",
    );
  };
}

export { Internet };
