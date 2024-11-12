// the `unique` module
const unique: { [key: string]: (...args: unknown[]) => unknown } = {};

// global results store
// currently uniqueness is global to entire faker instance
// this means that faker should currently *never* return duplicate values across all API methods when using `Faker.unique`
// it's possible in the future that some users may want to scope found per function call instead of faker instance
const found: { [key: string]: (...args: unknown[]) => unknown } = {};

// global exclude list of results
// defaults to nothing excluded
const exclude: string[] | string = [];

// current iteration or retries of unique.exec ( current loop depth )
const currentIterations = 0;

// uniqueness compare function
// default behavior is to check value as key against object hash
const defaultCompare = function (obj: { [key: string]: unknown }, key: string) {
  if (typeof obj[key] === "undefined") {
    return -1;
  }
  return 0;
};

// common error handler for messages
unique.errorMessage = function (
  now: number,
  code: number,
  opts: { [key: string]: unknown },
) {
  console.error("error", code);
  console.log(
    "found",
    Object.keys(found).length,
    "unique entries before throwing error. \nretried:",
    currentIterations,
    "\ntotal time:",
    now - opts.startTime,
    "ms",
  );
  throw new Error(
    code +
      " for uniqueness check \n\nMay not be able to generate any more unique values with current settings. \nTry adjusting maxTime or maxRetries parameters for faker.unique()",
  );
};

unique.exec = function (
  method: (...args: string[]) => unknown,
  args: string[],
  opts: { [key: string]: unknown },
) {
  // console.log(currentIterations)

  const now = new Date().getTime();

  opts = opts || {};
  opts.maxTime = opts.maxTime || 3;
  opts.maxRetries = opts.maxRetries || 50;
  opts.exclude = opts.exclude || exclude;
  opts.compare = opts.compare || defaultCompare;

  if (typeof opts.currentIterations !== "number") {
    opts.currentIterations = 0;
  }

  if (typeof opts.startTime === "undefined") {
    opts.startTime = new Date().getTime();
  }

  const startTime = opts.startTime;

  // support single exclude argument as string
  if (typeof opts.exclude === "string") {
    opts.exclude = [opts.exclude];
  }

  if (opts.currentIterations > 0) {
    // console.log('iterating', currentIterations)
  }

  // console.log(now - startTime)
  if (now - startTime >= opts.maxTime) {
    return unique.errorMessage(now, "Exceeded maxTime:" + opts.maxTime, opts);
  }

  if (opts.currentIterations >= opts.maxRetries) {
    return unique.errorMessage(
      now,
      "Exceeded maxRetries:" + opts.maxRetries,
      opts,
    );
  }

  // execute the provided method to find a potential satifised value
  const result = method.apply(this, args);

  // if the result has not been previously found, add it to the found array and return the value as it's unique
  if (
    opts.compare(found, result) === -1 && opts.exclude.indexOf(result) === -1
  ) {
    found[result] = result;
    opts.currentIterations = 0;
    return result;
  } else {
    // console.log('conflict', result)
    opts.currentIterations++;
    return unique.exec(method, args, opts);
  }
};

export default unique;
