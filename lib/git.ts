import type { Faker } from "./mod.ts";

/**
 * @namespace faker.git
 */
class Git {
  faker: Faker;
  hexChars: string[];

  constructor(faker: Faker) {
    this.faker = faker;
    this.hexChars = [
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
    ];
  }

  /**
   * Returns a random git branch name.
   *
   * @method faker.git.branch
   * @returns {string}
   */
  branch = (): string => {
    const noun = this.faker.hacker.noun().replace(" ", "-");
    const verb = this.faker.hacker.verb().replace(" ", "-");
    return noun + "-" + verb;
  };

  /**
   * Returns a random git commit entry.
   *
   * @method faker.git.commitEntry
   * @param {Record<string, unknown>} options
   * @returns {string}
   */
  commitEntry = (options: Record<string, unknown> = {}): string => {
    let entry = "commit {{git.commitSha}}\r\n";

    if (
      options.merge || (this.faker.random.number({ min: 0, max: 4 }) === 0)
    ) {
      entry += "Merge: {{git.shortSha}} {{git.shortSha}}\r\n";
    }

    entry +=
      "Author: {{name.firstName}} {{name.lastName}} <{{internet.email}}>\r\n";
    entry += "Date: " + this.faker.date.recent().toString() + "\r\n";
    entry += "\r\n\xa0\xa0\xa0\xa0{{git.commitMessage}}\r\n";

    return this.faker.fake(entry);
  };

  /**
   * Returns a random git commit message.
   *
   * @method faker.git.commitMessage
   * @returns {string}
   */
  commitMessage = (): string => {
    const format = "{{hacker.verb}} {{hacker.adjective}} {{hacker.noun}}";
    return this.faker.fake(format);
  };

  /**
   * Returns a random full git commit SHA (40 hexadecimal characters).
   *
   * @method faker.git.commitSha
   * @returns {string}
   */
  commitSha = (): string => {
    let commit = "";

    for (let i = 0; i < 40; i++) {
      commit += this.faker.random.arrayElement(this.hexChars);
    }

    return commit;
  };

  /**
   * Returns a random short git commit SHA (7 hexadecimal characters).
   *
   * @method faker.git.shortSha
   * @returns {string}
   */
  shortSha = (): string => {
    let shortSha = "";

    for (let i = 0; i < 7; i++) {
      shortSha += this.faker.random.arrayElement(this.hexChars);
    }

    return shortSha;
  };
}

export { Git };
