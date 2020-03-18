import uniqueExec from "../vendor/unique.js";
/**
 *
 * @namespace faker.unique
 */
class Unique {
  constructor(faker: any) {}
  // initialize unique module class variables

  // maximum time unique.exec will attempt to run before aborting
  maxTime?: 10;

  // maximum retries unique.exec will recurse before abortings ( max loop depth )
  maxRetries?: 10;

  // time the script started
  // const startTime = 0;

  /**
   * unique
   *
   * @method unique
   */
  unique(method: Function, args: any, opts: any) {
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
