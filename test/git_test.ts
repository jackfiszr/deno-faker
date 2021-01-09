import { assert, sinon } from "./support/test_deps.ts";
import { testWrapper } from "./support/test_utils.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

function hackerSpy() {
  sinon.spy(faker.hacker, "noun");
  sinon.spy(faker.hacker, "verb");
}
function hackerRestore() {
  faker.hacker.noun.restore();
  faker.hacker.verb.restore();
}
testWrapper(
  {
    name: "branch() returns a branch with hacker noun and verb",
    fn() {
      faker.git.branch();
      assert(faker.hacker.noun.calledOnce);
      assert(faker.hacker.verb.calledOnce);
    },
  },
  hackerSpy,
  hackerRestore,
);

function gitSpy() {
  sinon.spy(faker.git, "commitMessage");
  sinon.spy(faker.git, "commitSha");
  sinon.spy(faker.internet, "email");
  sinon.spy(faker.name, "firstName");
  sinon.spy(faker.name, "lastName");
  sinon.spy(faker.random, "number");
}
function gitRestore() {
  faker.git.commitMessage.restore();
  faker.git.commitSha.restore();
  faker.internet.email.restore();
  faker.name.firstName.restore();
  faker.name.lastName.restore();
  faker.random.number.restore();
}
testWrapper(
  {
    name: "commitEntry() returns merge entry at random",
    fn() {
      faker.git.commitEntry();
      assert(faker.random.number.called);
    },
  },
  gitSpy,
  gitRestore,
);

testWrapper(
  {
    name:
      "commitEntry() returns a commit entry with git commit message and sha",
    fn() {
      faker.git.commitEntry();
      assert(faker.git.commitMessage.calledOnce);
      assert(faker.git.commitSha.calledOnce);
    },
  },
  gitSpy,
  gitRestore,
);

testWrapper(
  {
    name: "commitEntry() returns a commit entry with internet email",
    fn() {
      faker.git.commitEntry();
      assert(faker.internet.email.calledOnce);
    },
  },
  gitSpy,
  gitRestore,
);

testWrapper(
  {
    name: "commitEntry() returns a commit entry with name first and last",
    fn() {
      faker.git.commitEntry();
      assert(faker.name.firstName.calledTwice);
      assert(faker.name.lastName.calledTwice);
    },
  },
  gitSpy,
  gitRestore,
);

function shaSpy() {
  sinon.spy(faker.git, "shortSha");
}
function shaRestore() {
  faker.git.shortSha.restore();
}
testWrapper(
  {
    name:
      'commitEntry() returns a commit entry with merge details, with options["merge"] equal to true',
    fn() {
      faker.git.commitEntry({ merge: true });
      assert(faker.git.shortSha.calledTwice);
    },
  },
  shaSpy,
  shaRestore,
);

function msgSpy() {
  sinon.spy(faker.hacker, "verb");
  sinon.spy(faker.hacker, "adjective");
  sinon.spy(faker.hacker, "noun");
}
function msgRestore() {
  faker.hacker.verb.restore();
  faker.hacker.adjective.restore();
  faker.hacker.noun.restore();
}
testWrapper(
  {
    name:
      "commitMessage() returns a commit message with hacker noun, adj and verb",
    fn() {
      faker.git.commitMessage();
      assert(faker.hacker.verb.calledOnce);
      assert(faker.hacker.adjective.calledOnce);
      assert(faker.hacker.noun.calledOnce);
    },
  },
  msgSpy,
  msgRestore,
);

test({
  name: "commitSha() returns a random commit SHA",
  fn() {
    const commitSha = faker.git.commitSha();
    assert(commitSha.match(/^[a-f0-9]{40}$/));
  },
});

test({
  name: "shortSha() returns a random short SHA",
  fn() {
    const shortSha = faker.git.shortSha();
    assert(shortSha.match(/^[a-f0-9]{7}$/));
  },
});
