import { assert } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "past() returns a date N years into the past",
  fn() {
    const date = faker.date.past(75);
    assert(date < new Date());
  },
});

test({
  name: "past() returns a past date when N = 0",
  fn() {
    const refDate = new Date();
    const date = faker.date.past(0, refDate.toJSON());
    assert(date < refDate); // date should be before the date given
  },
});

test({
  name: "past() returns a date N years before the date given",
  fn() {
    const refDate = new Date(2120, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)
    const date = faker.date.past(75, refDate.toJSON());
    assert(date < refDate && date > new Date()); // date should be before date given but after the current time
  },
});

test({
  name: "future() returns a date N years into the future",
  fn() {
    const date = faker.date.future(75);
    assert(date > new Date());
  },
});

test({
  name: "future() returns a future date when N = 0",
  fn() {
    const refDate = new Date();
    const date = faker.date.future(0, refDate.toJSON());
    assert(date > refDate); // date should be after the date given
  },
});

test({
  name: "future() returns a date N years after the date given",
  fn() {
    const refDate = new Date(1880, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)
    const date = faker.date.future(75, refDate.toJSON());
    assert(date > refDate && date < new Date()); // date should be after the date given, but before the current time
  },
});

test({
  name: "recent() returns a date N days from the recent past",
  fn() {
    const date = faker.date.recent(30);
    assert(date <= new Date());
  },
});

test({
  name:
    "recent() returns a date N days from the recent past, starting from refDate",
  fn() {
    const days = 30;
    const refDate = new Date(2120, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)
    const date = faker.date.recent(days, refDate);
    const lowerBound = new Date(
      refDate.getTime() - (days * 24 * 60 * 60 * 1000),
    );
    assert(
      lowerBound <= date,
      "`recent()` date should not be further back than `n` days ago",
    );
    assert(
      date <= refDate,
      "`recent()` date should not be ahead of the starting date reference",
    );
  },
});

test({
  name: "soon() returns a date N days into the future",
  fn() {
    const date = faker.date.soon(30);
    assert(date >= new Date());
  },
});

test({
  name:
    "soon() returns a date N days from the recent future, starting from refDate",
  fn() {
    const days = 30;
    const refDate = new Date(1880, 11, 9, 10, 0, 0, 0); // set the date beyond the usual calculation (to make sure this is working correctly)
    const date = faker.date.soon(days, refDate);
    const upperBound = new Date(
      refDate.getTime() + (days * 24 * 60 * 60 * 1000),
    );
    assert(
      date <= upperBound,
      "`soon()` date should not be further ahead than `n` days ago",
    );
    assert(
      refDate <= date,
      "`soon()` date should not be behind the starting date reference",
    );
  },
});

test({
  name: "between() returns a random date between the dates given",
  fn() {
    const from = new Date(1990, 5, 7, 9, 11, 0, 0);
    const to = new Date(2000, 6, 8, 10, 12, 0, 0);
    const date = faker.date.between(from, to);
    assert(date > from && date < to);
  },
});

test({
  name: "month() returns random value from date.month.wide array by default",
  fn() {
    const month = faker.date.month();
    assert(faker.definitions.date.month.wide.indexOf(month) !== -1);
  },
});

test({
  name:
    "month() returns random value from date.month.wide_context array for context option",
  fn() {
    const month = faker.date.month({ context: true });
    assert(faker.definitions.date.month.wide_context.indexOf(month) !== -1);
  },
});

test({
  name:
    "month() returns random value from date.month.abbr array for abbr option",
  fn() {
    const month = faker.date.month({ abbr: true });
    assert(faker.definitions.date.month.abbr.indexOf(month) !== -1);
  },
});

test({
  name:
    "month() returns random value from date.month.abbr_context array for abbr and context option",
  fn() {
    const month = faker.date.month({ abbr: true, context: true });
    assert(faker.definitions.date.month.abbr_context.indexOf(month) !== -1);
  },
});

test({
  name:
    "month() returns random value from date.month.wide array for context option when date.month.wide_context array is missing",
  fn() {
    const backup_wide_context = faker.definitions.date.month.wide_context;
    faker.definitions.date.month.wide_context = undefined;
    const month = faker.date.month({ context: true });
    assert(faker.definitions.date.month.wide.indexOf(month) !== -1);
    faker.definitions.date.month.wide_context = backup_wide_context;
  },
});

test({
  name:
    "month() returns random value from date.month.abbr array for abbr and context option when date.month.abbr_context array is missing",
  fn() {
    const backup_abbr_context = faker.definitions.date.month.abbr_context;
    faker.definitions.date.month.abbr_context = undefined;
    const month = faker.date.month({ abbr: true, context: true });
    assert(faker.definitions.date.month.abbr.indexOf(month) !== -1);
    faker.definitions.date.month.abbr_context = backup_abbr_context;
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.wide array by default",
  fn() {
    const weekday = faker.date.weekday();
    assert(faker.definitions.date.weekday.wide.indexOf(weekday) !== -1);
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.wide_context array for context option",
  fn() {
    const weekday = faker.date.weekday({ context: true });
    assert(
      faker.definitions.date.weekday.wide_context.indexOf(weekday) !== -1,
    );
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.abbr array for abbr option",
  fn() {
    const weekday = faker.date.weekday({ abbr: true });
    assert(faker.definitions.date.weekday.abbr.indexOf(weekday) !== -1);
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.abbr_context array for abbr and context option",
  fn() {
    const weekday = faker.date.weekday({ abbr: true, context: true });
    assert(
      faker.definitions.date.weekday.abbr_context.indexOf(weekday) !== -1,
    );
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.wide array for context option when date.weekday.wide_context array is missing",
  fn() {
    const backup_wide_context = faker.definitions.date.weekday.wide_context;
    faker.definitions.date.weekday.wide_context = undefined;
    const weekday = faker.date.weekday({ context: true });
    assert(faker.definitions.date.weekday.wide.indexOf(weekday) !== -1);
    faker.definitions.date.weekday.wide_context = backup_wide_context;
  },
});

test({
  name:
    "weekday() returns random value from date.weekday.abbr array for abbr and context option when date.weekday.abbr_context array is missing",
  fn() {
    const backup_abbr_context = faker.definitions.date.weekday.abbr_context;
    faker.definitions.date.weekday.abbr_context = undefined;
    const weekday = faker.date.weekday({ abbr: true, context: true });
    assert(faker.definitions.date.weekday.abbr.indexOf(weekday) !== -1);
    faker.definitions.date.weekday.abbr_context = backup_abbr_context;
  },
});
