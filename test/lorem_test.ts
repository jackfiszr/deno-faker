import { assert, assertEquals, sinon } from "./support/test_deps.ts";
import { testWrapper } from "./support/test_utils.ts";
import { faker } from "../mod.ts";
// const { test } = Deno;

function shuffleSpy() {
  sinon.spy(faker.helpers, "shuffle");
}
function shuffleRestore() {
  faker.helpers.shuffle.restore();
}
testWrapper(
  {
    name: "words() returns three words, when no 'num' param passed in",
    fn() {
      const str = faker.lorem.words();
      const words = str.split(" ");
      assert(Array.isArray(words));
      assertEquals(true, words.length >= 3);
      // assert(faker.helpers.shuffle.called)
    },
  },
  shuffleSpy,
  shuffleRestore,
);

testWrapper(
  {
    name:
      "words() returns requested number of words, when 'num' param passed in",
    fn() {
      const str = faker.lorem.words(7);
      const words = str.split(" ");
      assert(Array.isArray(words));
      assertEquals(words.length, 7);
    },
  },
  shuffleSpy,
  shuffleRestore,
);

const validateSlug = function (wordCount: number, str: string) {
  assertEquals(1, str.match(/^[a-z][a-z-]*[a-z]$/)!.length);
  assertEquals(wordCount - 1, str.match(/-/g)!.length);
};
testWrapper(
  {
    name:
      "slug() returns a slug with three words, when no 'wordCount' param passed in",
    fn() {
      const str = faker.lorem.slug();
      validateSlug(3, str);
    },
  },
  shuffleSpy,
  shuffleRestore,
);

testWrapper(
  {
    name:
      "slug() returns a slug with requested number of words, when 'wordCount' param passed in",
    fn() {
      const str = faker.lorem.slug(7);
      validateSlug(7, str);
    },
  },
  shuffleSpy,
  shuffleRestore,
);
/*
test({
  name: 'sentence() returns a string of at least three words, when no \'wordCount\' or \'range\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'words')
    sinon.stub(faker.random, 'number').returns(2)
    const sentence = faker.lorem.sentence()
    assert(typeof sentence === 'string')
    const parts = sentence.split(' ')
    assertEquals(parts.length, 5) // default 3 plus stubbed 2.
    assert(faker.lorem.words.calledWith(5))
    faker.lorem.words.restore()
    faker.random.number.restore()
  }
})

test({
  name: 'sentence() returns a string of at least the requested number of words, when \'wordCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'words')
    sinon.stub(faker.random, 'number').withArgs(7).returns(2)
    const sentence = faker.lorem.sentence(10)
    assert(typeof sentence === 'string')
    const parts = sentence.split(' ')
    assertEquals(parts.length, 12) // requested 10 plus stubbed 2.
    assert(faker.lorem.words.calledWith(12))
    faker.lorem.words.restore()
    faker.random.number.restore()
  }
})

test({
  name: 'sentence() returns a string of at least the requested number of words, when \'wordCount\' and \'range\' params passed in',
  fn () {
    sinon.spy(faker.lorem, 'words')
    sinon.stub(faker.random, 'number').withArgs(4).returns(4)
    const sentence = faker.lorem.sentence(10, 4)
    assert(typeof sentence === 'string')
    const parts = sentence.split(' ')
    assertEquals(parts.length, 14) // requested 10 plus stubbed 4.
    assert(faker.random.number.calledWith(4)) // random.number should be called with the 'range' we passed.
    assert(faker.lorem.words.calledWith(14))
    faker.lorem.words.restore()
    faker.random.number.restore()
  }
})

test({
  name: 'sentences() returns newline-separated string of three sentences, when no \'sentenceCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'sentence')
    const sentences = faker.lorem.sentences()
    assert(typeof sentences === 'string')
    const parts = sentences.split('\n')
    assertEquals(parts.length, 3)
    assert(faker.lorem.sentence.calledThrice)
    faker.lorem.sentence.restore()
  }
})

test({
  name: 'sentences() returns newline-separated string of requested number of sentences, when \'sentenceCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'sentence')
    const sentences = faker.lorem.sentences(5)
    assert(typeof sentences === 'string')
    const parts = sentences.split('\n')
    assertEquals(parts.length, 5)
    faker.lorem.sentence.restore()
  }
})

test({
  name: 'paragraph() returns a string of at least three sentences, when no \'wordCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'sentences')
    sinon.stub(faker.random, 'number').returns(2)
    const paragraph = faker.lorem.paragraph()
    assert(typeof paragraph === 'string')
    const parts = paragraph.split('\n')
    assertEquals(parts.length, 5) // default 3 plus stubbed 2.
    assert(faker.lorem.sentences.calledWith(5))
    faker.lorem.sentences.restore()
    faker.random.number.restore()
  }
})

test({
  name: 'paragraph() \'returns a string of at least the requested number of sentences, when \'wordCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'sentences')
    sinon.stub(faker.random, 'number').returns(2)
    const paragraph = faker.lorem.paragraph(10)
    assert(typeof paragraph === 'string')
    const parts = paragraph.split('\n')
    assertEquals(parts.length, 12) // requested 10 plus stubbed 2.
    assert(faker.lorem.sentences.calledWith(12))
    faker.lorem.sentences.restore()
    faker.random.number.restore()
  }
})

test({
  name: 'paragraphs() returns newline-separated string of three paragraphs, when no \'paragraphCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'paragraph')
    const paragraphs = faker.lorem.paragraphs()
    assert(typeof paragraphs === 'string')
    const parts = paragraphs.split('\n \r')
    assertEquals(parts.length, 3)
    assert(faker.lorem.paragraph.calledThrice)
    faker.lorem.paragraph.restore()
  }
})

test({
  name: 'paragraphs() returns newline-separated string of requested number of paragraphs, when \'paragraphCount\' param passed in',
  fn () {
    sinon.spy(faker.lorem, 'paragraph')
    const paragraphs = faker.lorem.paragraphs(5)
    assert(typeof paragraphs === 'string')
    const parts = paragraphs.split('\n \r')
    assertEquals(parts.length, 5)
    faker.lorem.paragraph.restore()
  }
})
*/
