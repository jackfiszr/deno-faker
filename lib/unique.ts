import uniqueExec from "../vendor/unique.ts";
import type { Faker } from "./mod.ts";

/**
 * @namespace faker.unique
 */
class Unique {
  maxTime?: number; // Maximum time `unique.exec` will attempt to run before aborting
  maxRetries?: number; // Maximum retries `unique.exec` will recurse before aborting (max loop depth)

  constructor(_faker: Faker) {
    this.maxTime = 10; // Default value for `maxTime`
    this.maxRetries = 10; // Default value for `maxRetries`
  }

  /**
   * unique
   *
   * Executes a method while ensuring the generated values are unique.
   *
   * @method unique
   * @param {() => unknown} method - The method to execute.
   * @param {Record<string, unknown>} args - Arguments to pass to the method.
   * @param {Record<string, unknown>} opts - Options for uniqueness constraints.
   * @returns {unknown} The result of the method execution.
   */
  unique(
    method: () => unknown,
    args: Record<string, unknown>,
    opts: Record<string, unknown>,
  ): unknown {
    opts = opts || {};
    opts.startTime = new Date().getTime();

    if (typeof opts.maxTime !== "number") {
      opts.maxTime = this.maxTime;
    }

    if (typeof opts.maxRetries !== "number") {
      opts.maxRetries = this.maxRetries;
    }

    opts.currentIterations = 0;

    return uniqueExec.exec(method, args, opts);
  }
}

export { Unique };
