import type { Faker } from "./mod.ts";

class Helpers {
  faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  /**
   * Randomizes an array and returns a random element.
   *
   * @method faker.helpers.randomize
   * @param {string[]} array
   * @returns {string}
   */
  randomize(array: string[]): string {
    array = array || ["a", "b", "c"];
    return this.faker.random.arrayElement(array);
  }

  /**
   * Slugifies a string.
   *
   * @method faker.helpers.slugify
   * @param {string} string
   * @returns {string}
   */
  slugify(string: string): string {
    string = string || "";
    return string.replace(/ /g, "-").replace(/[^\w\.\-]+/g, "");
  }

  /**
   * Replaces symbols in a string with random numbers.
   *
   * @method faker.helpers.replaceSymbolWithNumber
   * @param {string} string
   * @param {string} symbol
   * @returns {string}
   */
  replaceSymbolWithNumber(string: string, symbol: string = "#"): string {
    string = string || "";
    let str = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === symbol) {
        str += this.faker.random.number(9);
      } else if (string.charAt(i) === "!") {
        str += this.faker.random.number({ min: 2, max: 9 });
      } else {
        str += string.charAt(i);
      }
    }
    return str;
  }

  /**
   * Replaces symbols (#, ?, *) in a string with numbers, letters, or both.
   *
   * @method faker.helpers.replaceSymbols
   * @param {string} string
   * @returns {string}
   */
  replaceSymbols(string: string): string {
    string = string || "";
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let str = "";

    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === "#") {
        str += this.faker.random.number(9);
      } else if (string.charAt(i) === "?") {
        str += this.faker.random.arrayElement(alpha);
      } else if (string.charAt(i) === "*") {
        str += this.faker.random.boolean()
          ? this.faker.random.arrayElement(alpha)
          : this.faker.random.number(9);
      } else {
        str += string.charAt(i);
      }
    }
    return str;
  }

  /**
   * Replaces credit card symbols and calculates the Luhn checksum.
   *
   * @method faker.helpers.replaceCreditCardSymbols
   * @param {string} string
   * @param {string} symbol
   * @returns {string}
   */
  replaceCreditCardSymbols = (string: string, symbol: string = "#"): string => {
    const getCheckBit = (number: number[]): number => {
      number.reverse();
      number = number.map((num, index) => {
        if (index % 2 === 0) {
          num *= 2;
          if (num > 9) {
            num -= 9;
          }
        }
        return num;
      });
      const sum = number.reduce((prev, curr) => prev + curr, 0);
      return sum % 10;
    };

    string = string || "";
    string = this.faker.helpers.regexpStyleStringParse(string);
    string = this.faker.helpers.replaceSymbolWithNumber(string, symbol);

    const numberList = string.replace(/\D/g, "").split("").map(Number);
    const checkNum = getCheckBit(numberList);
    return string.replace("L", String(checkNum));
  };

  /**
   * Repeats a string a specified number of times.
   *
   * @method faker.helpers.repeatString
   * @param {string} string
   * @param {number} num
   * @returns {string}
   */
  repeatString = (string: string, num: number): string => {
    if (typeof num === "undefined") {
      num = 0;
    }
    let text = "";
    for (let i = 0; i < num; i++) {
      text += string.toString();
    }
    return text;
  };

  /**
   * Parses string patterns in a RegExp-like manner.
   *
   * @method faker.helpers.regexpStyleStringParse
   * @param {string} string
   * @returns {string}
   */
  regexpStyleStringParse = (string: string): string => {
    string = string || "";
    const RANGE_REP_REG = /(.)\{(\d+),(\d+)\}/;
    const REP_REG = /(.)\{(\d+)\}/;
    const RANGE_REG = /\[(\d+)-(\d+)\]/;
    let min, max, tmp, repetitions;
    let token = string.match(RANGE_REP_REG);

    while (token !== null && token.index !== undefined) {
      min = parseInt(token[2]);
      max = parseInt(token[3]);
      if (min > max) {
        tmp = max;
        max = min;
        min = tmp;
      }
      repetitions = this.faker.random.number({ min, max });
      string = string.slice(0, token.index) +
        this.faker.helpers.repeatString(token[1], repetitions) +
        string.slice(token.index + token[0].length);
      token = string.match(RANGE_REP_REG);
    }

    token = string.match(REP_REG);
    while (token !== null && token.index !== undefined) {
      repetitions = parseInt(token[2]);
      string = string.slice(0, token.index) +
        this.faker.helpers.repeatString(token[1], repetitions) +
        string.slice(token.index + token[0].length);
      token = string.match(REP_REG);
    }

    token = string.match(RANGE_REG);
    while (token !== null && token.index !== undefined) {
      min = parseInt(token[1]);
      max = parseInt(token[2]);
      if (min > max) {
        tmp = max;
        max = min;
        min = tmp;
      }
      string = string.slice(0, token.index) +
        this.faker.random.number({ min, max }).toString() +
        string.slice(token.index + token[0].length);
      token = string.match(RANGE_REG);
    }

    return string;
  };

  /**
   * Shuffles an array and returns it.
   *
   * @method faker.helpers.shuffle
   * @param {string[]} o
   * @returns {string[]}
   */
  shuffle(o: string[]): string[] {
    if (typeof o === "undefined" || o.length === 0) {
      return [];
    }
    o = o || ["a", "b", "c"];
    for (
      let j, x, i = o.length - 1;
      i;
      j = this.faker.random.number(i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  /**
   * Parses a mustache template with data.
   *
   * @method faker.helpers.mustache
   * @param {string} str
   * @param {Record<string, unknown>} data
   * @returns {string}
   */
  mustache(str: string, data: Record<string, unknown>): string {
    if (typeof str === "undefined") {
      return "";
    }
    for (const p in data) {
      const re = new RegExp("{{" + p + "}}", "g");
      const replacement = typeof data[p] === "string" ? data[p] as string : "";
      str = str.replace(re, replacement);
    }
    return str;
  }

  /**
   * Creates a random user card object.
   *
   * @method faker.helpers.createCard
   * @returns {Record<string, unknown>}
   */
  createCard(): Record<string, unknown> {
    return {
      name: this.faker.name.findName(),
      username: this.faker.internet.userName(),
      email: this.faker.internet.email(),
      address: {
        streetA: this.faker.address.streetName(),
        streetB: this.faker.address.streetAddress(),
        streetC: this.faker.address.streetAddress(true),
        streetD: this.faker.address.secondaryAddress(),
        city: this.faker.address.city(),
        state: this.faker.address.state(),
        country: this.faker.address.country(),
        zipcode: this.faker.address.zipCode(),
        geo: {
          lat: this.faker.address.latitude(),
          lng: this.faker.address.longitude(),
        },
      },
      phone: this.faker.phone.phoneNumber(),
      website: this.faker.internet.domainName(),
      company: {
        name: this.faker.company.companyName(),
        catchPhrase: this.faker.company.catchPhrase(),
        bs: this.faker.company.bs(),
      },
      posts: [
        {
          words: this.faker.lorem.words(),
          sentence: this.faker.lorem.sentence(),
          sentences: this.faker.lorem.sentences(),
          paragraph: this.faker.lorem.paragraph(),
        },
        {
          words: this.faker.lorem.words(),
          sentence: this.faker.lorem.sentence(),
          sentences: this.faker.lorem.sentences(),
          paragraph: this.faker.lorem.paragraph(),
        },
        {
          words: this.faker.lorem.words(),
          sentence: this.faker.lorem.sentence(),
          sentences: this.faker.lorem.sentences(),
          paragraph: this.faker.lorem.paragraph(),
        },
      ],
      accountHistory: [
        this.faker.helpers.createTransaction(),
        this.faker.helpers.createTransaction(),
        this.faker.helpers.createTransaction(),
      ],
    };
  }

  /**
   * Creates a contextual card object.
   *
   * @method faker.helpers.contextualCard
   * @returns {Record<string, unknown>}
   */
  contextualCard(): Record<string, unknown> {
    const name = this.faker.name.firstName();
    const userName = this.faker.internet.userName(name);
    return {
      name,
      username: userName,
      avatar: this.faker.internet.avatar(),
      email: this.faker.internet.email(userName),
      dob: this.faker.date.past(
        50,
        new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)").toISOString(),
      ),
      phone: this.faker.phone.phoneNumber(),
      address: {
        street: this.faker.address.streetName(),
        suite: this.faker.address.secondaryAddress(),
        city: this.faker.address.city(),
        zipcode: this.faker.address.zipCode(),
        geo: {
          lat: this.faker.address.latitude(),
          lng: this.faker.address.longitude(),
        },
      },
      website: this.faker.internet.domainName(),
      company: {
        name: this.faker.company.companyName(),
        catchPhrase: this.faker.company.catchPhrase(),
        bs: this.faker.company.bs(),
      },
    };
  }

  /**
   * Creates a user card object.
   *
   * @method faker.helpers.userCard
   * @returns {Record<string, unknown>}
   */
  userCard(): Record<string, unknown> {
    return {
      name: this.faker.name.findName(),
      username: this.faker.internet.userName(),
      email: this.faker.internet.email(),
      address: {
        street: this.faker.address.streetName(),
        suite: this.faker.address.secondaryAddress(),
        city: this.faker.address.city(),
        zipcode: this.faker.address.zipCode(),
        geo: {
          lat: this.faker.address.latitude(),
          lng: this.faker.address.longitude(),
        },
      },
      phone: this.faker.phone.phoneNumber(),
      website: this.faker.internet.domainName(),
      company: {
        name: this.faker.company.companyName(),
        catchPhrase: this.faker.company.catchPhrase(),
        bs: this.faker.company.bs(),
      },
    };
  }

  /**
   * Creates a random transaction object.
   *
   * @method faker.helpers.createTransaction
   * @returns {Record<string, unknown>}
   */
  createTransaction(): Record<string, unknown> {
    return {
      amount: this.faker.finance.amount(),
      date: new Date(2012, 1, 2),
      business: this.faker.company.companyName(),
      name: [this.faker.finance.accountName(), this.faker.finance.mask()].join(
        " ",
      ),
      type: this.randomize(this.faker.definitions.finance.transaction_type),
      account: this.faker.finance.account(),
    };
  }
}

export { Helpers };
