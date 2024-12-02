// Define the interface for options
interface UniqueOptions {
  maxTime: number;
  maxRetries: number;
  exclude: string[]; // Ensure exclude is an array of strings
  compare: (obj: Record<string, unknown>, key: string) => number;
  currentIterations: number;
  startTime: number;
}

// the `unique` module
const unique: { [key: string]: (...args: unknown[]) => unknown } = {};

// global results store
const found: Record<string, unknown> = {};

// global exclude list of results
const exclude: string[] = [];

// current iteration or retries of unique.exec (current loop depth)
let _currentIterations = 0;

// uniqueness compare function
const defaultCompare = function (obj: Record<string, unknown>, key: string) {
  return typeof obj[key] === "undefined" ? -1 : 0;
};

// common error handler for messages
unique.errorMessage = function (...args: unknown[]): never {
  const [now, code, opts] = args as [number, string, UniqueOptions];
  console.error("error", code);
  console.log(
    "found",
    Object.keys(found).length,
    "unique entries before throwing error. \nretried:",
    opts.currentIterations,
    "\ntotal time:",
    now - opts.startTime,
    "ms",
  );
  throw new Error(
    `${code} for uniqueness check \n\nMay not be able to generate any more unique values with current settings. \nTry adjusting maxTime or maxRetries parameters for faker.unique()`,
  );
};

// Main execution function with improved type safety
unique.exec = function (...args: unknown[]): unknown {
  const [method, methodArgs, opts] = args as [
    (...methodArgs: string[]) => unknown,
    string[],
    Partial<UniqueOptions>,
  ];

  const now = Date.now();

  // Set default values for options
  const options: UniqueOptions = {
    maxTime: opts?.maxTime ?? 3,
    maxRetries: opts?.maxRetries ?? 50,
    exclude: opts?.exclude ?? exclude,
    compare: opts?.compare ?? defaultCompare,
    currentIterations: opts?.currentIterations ?? 0,
    startTime: opts?.startTime ?? now,
  };

  // Convert exclude to array if it's not already
  if (!Array.isArray(options.exclude)) {
    options.exclude = [options.exclude];
  }

  const startTime = options.startTime;

  if (now - startTime >= options.maxTime) {
    return unique.errorMessage(
      now,
      `Exceeded maxTime: ${options.maxTime}`,
      options,
    );
  }

  if (options.currentIterations >= options.maxRetries) {
    return unique.errorMessage(
      now,
      `Exceeded maxRetries: ${options.maxRetries}`,
      options,
    );
  }

  // Execute the provided method to find a potential satisfied value
  const result = method.apply(this, methodArgs);

  // If the result has not been previously found, add it to the found array and return the value as it's unique
  if (
    options.compare(found, result as string) === -1 &&
    !options.exclude.includes(result as string)
  ) {
    found[result as string] = result;
    options.currentIterations = 0;
    return result;
  } else {
    options.currentIterations++;
    return unique.exec(method, methodArgs, options);
  }
};

export default unique;
