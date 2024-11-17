export function testWrapper(
  t: Deno.TestDefinition,
  setUp: () => void,
  tearDown: () => void,
) {
  async function wrapped() {
    setUp();
    try {
      await t.fn();
    } finally {
      tearDown();
    }
  }
  Deno.test({ name: t.name, fn: wrapped });
}

export function luhnCheck(number: string): boolean {
  number = number.replace(/\D/g, "");
  let split = number.split("").map((num) => parseInt(num));
  const check = split.pop();
  split = split.reverse().map((num, index) => {
    if (index % 2 === 0) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }
    return num;
  });
  const sum = split.reduce((prev, curr) => prev + curr);
  return (sum % 10 === check);
}
