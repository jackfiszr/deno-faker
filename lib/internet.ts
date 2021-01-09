import * as random_ua from "../vendor/user-agent.ts";
import schemas from "./schemas.ts";

/**
 *
 * @namespace faker.internet
 */
class Internet {
  faker: any;
  constructor(faker: any) {
    this.faker = faker;
  }
  /**
   * avatar
   *
   * @method faker.internet.avatar
   */
  avatar = () => {
    const schema = schemas.avatar;
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
   */
  email = (firstName: string, lastName: string, provider: string) => {
    const schema = schemas.email;
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
   */
  exampleEmail = (firstName: string, lastName: string) => {
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
   */
  userName = (firstName: string, lastName: string) => {
    const schema = schemas.userName;
    let result;
    firstName = firstName || this.faker.name.firstName();
    lastName = lastName || this.faker.name.lastName();
    switch (this.faker.random.number(2)) {
      case 0:
        result = firstName + this.faker.random.number(99);
        break;
      case 1:
        result = firstName + this.faker.random.arrayElement([".", "_"]) +
          lastName;
        break;
      case 2:
        result = firstName + this.faker.random.arrayElement([".", "_"]) +
          lastName + this.faker.random.number(99);
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
   */
  protocol = () => {
    const schema = schemas.protocol;
    const protocols = ["http", "https"];
    return this.faker.random.arrayElement(protocols);
  };

  /**
   * url
   *
   * @method faker.internet.url
   */
  url = () => {
    const schema = schemas.url;
    return this.faker.internet.protocol() + "://" +
      this.faker.internet.domainName();
  };

  /**
   * domainName
   *
   * @method faker.internet.domainName
   */
  domainName = () => {
    const schema = schemas.domainName;
    return this.faker.internet.domainWord() + "." +
      this.faker.internet.domainSuffix();
  };

  /**
   * domainSuffix
   *
   * @method faker.internet.domainSuffix
   */
  domainSuffix = () => {
    const schema = schemas.domainSuffix;
    return this.faker.random.arrayElement(
      this.faker.definitions.internet.domain_suffix,
    );
  };

  /**
   * domainWord
   *
   * @method faker.internet.domainWord
   */
  domainWord = () => {
    const schema = schemas.domainWord;
    return this.faker.name.firstName().replace(/([\\~#&*{}/:<>?|\''])/ig, "")
      .toLowerCase();
  };

  /**
   * ip
   *
   * @method faker.internet.ip
   */
  ip = () => {
    const schema = schemas.ip;
    const randNum = () => {
      return (this.faker.random.number(255)).toFixed(0);
    };

    const result = [];
    for (let i = 0; i < 4; i++) {
      result[i] = randNum();
    }

    return result.join(".");
  };

  /**
   * ipv6
   *
   * @method faker.internet.ipv6
   */
  ipv6 = () => {
    const schema = schemas.ipv6;
    const randHash = () => {
      let result = "";
      for (let i = 0; i < 4; i++) {
        result += (this.faker.random.arrayElement(
          [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
          ],
        ));
      }
      return result;
    };

    const result = [];
    for (let i = 0; i < 8; i++) {
      result[i] = randHash();
    }
    return result.join(":");
  };

  /**
   * userAgent
   *
   * @method faker.internet.userAgent
   */
  userAgent = () => {
    const schema = schemas.userAgent;
    return random_ua.generate();
  };

  /**
   * color
   *
   * @method faker.internet.color
   * @param {number} baseRed255
   * @param {number} baseGreen255
   * @param {number} baseBlue255
   */
  color = (baseRed255: number, baseGreen255: number, baseBlue255: number) => {
    const schema = schemas.color;
    baseRed255 = baseRed255 || 0;
    baseGreen255 = baseGreen255 || 0;
    baseBlue255 = baseBlue255 || 0;
    // based on awesome response : http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
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
   */
  mac = (sep: string) => {
    const schema = schemas.mac;
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
   */
  password = (
    len: number,
    memorable: boolean,
    pattern: RegExp,
    prefix: string,
  ) => {
    const schema = schemas.password;
    len = len || 15;
    if (typeof memorable === "undefined") {
      memorable = false;
    }
    /*
    * password-generator ( function )
    * Copyright(c) 2011-2013 Bermi Ferrer <bermi@bermilabs.com>
    * MIT Licensed
    */
    let consonant: RegExp, letter: RegExp, password, vowel: RegExp;
    letter = /[a-zA-Z]$/;
    vowel = /[aeiouAEIOU]$/;
    consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/;
    const _password = (
      length: number,
      memorable: boolean,
      pattern: RegExp,
      prefix: string,
    ): string => {
      let char, n;
      if (length == null) {
        length = 10;
      }
      if (memorable == null) {
        memorable = true;
      }
      if (pattern == null) {
        pattern = /\w/;
      }
      if (prefix == null) {
        prefix = "";
      }
      if (prefix.length >= length) {
        return prefix;
      }
      if (memorable) {
        if (prefix.match(consonant)) {
          pattern = vowel;
        } else {
          pattern = consonant;
        }
      }
      n = this.faker.random.number(94) + 33;
      char = String.fromCharCode(n);
      if (memorable) {
        char = char.toLowerCase();
      }
      if (!char.match(pattern)) {
        return _password(length, memorable, pattern, prefix);
      }
      return _password(length, memorable, pattern, "" + prefix + char);
    };
    return _password(len, memorable, pattern, prefix);
  };
}

export { Internet };
