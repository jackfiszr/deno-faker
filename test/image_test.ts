import { assertEquals, assertNotEquals } from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "imageUrl() returns a random image url from lorempixel",
  fn() {
    const imageUrl = faker.image.lorempixel.imageUrl();
    assertEquals(imageUrl, "http://lorempixel.com/640/480");
  }
});

test({
  name:
    "imageUrl() returns a random image url from lorempixel with width and height",
  fn() {
    const imageUrl = faker.image.lorempixel.imageUrl(100, 100);
    assertEquals(imageUrl, "http://lorempixel.com/100/100");
  }
});

test({
  name:
    "imageUrl() returns a random image url for a specified category from lorempixel",
  fn() {
    const imageUrl = faker.image.lorempixel.imageUrl(100, 100, "abstract");
    assertEquals(imageUrl, "http://lorempixel.com/100/100/abstract");
  }
});

test({
  name: "avatar() return a random avatar from UIFaces",
  fn() {
    assertNotEquals(
      -1,
      faker.image.lorempixel.avatar().indexOf("s3.amazonaws.com/uifaces/faces")
    );
  }
});

test({
  name: "abstract() returns a random abstract image url from lorempixel",
  fn() {
    const abstract = faker.image.lorempixel.abstract();
    assertEquals(abstract, "http://lorempixel.com/640/480/abstract");
  }
});

test({
  name: "animals() returns a random animals image url from lorempixel",
  fn() {
    const animals = faker.image.lorempixel.animals();
    assertEquals(animals, "http://lorempixel.com/640/480/animals");
  }
});

test({
  name: "business() returns a random business image url from lorempixel",
  fn() {
    const business = faker.image.lorempixel.business();
    assertEquals(business, "http://lorempixel.com/640/480/business");
  }
});

test({
  name: "cats() returns a random cats image url from lorempixel",
  fn() {
    const cats = faker.image.lorempixel.cats();
    assertEquals(cats, "http://lorempixel.com/640/480/cats");
  }
});

test({
  name: "city() returns a random city image url from lorempixel",
  fn() {
    const city = faker.image.lorempixel.city();
    assertEquals(city, "http://lorempixel.com/640/480/city");
  }
});

test({
  name: "food() returns a random food image url from lorempixel",
  fn() {
    const food = faker.image.lorempixel.food();
    assertEquals(food, "http://lorempixel.com/640/480/food");
  }
});

test({
  name: "nightlife() returns a random nightlife image url from lorempixel",
  fn() {
    const nightlife = faker.image.lorempixel.nightlife();
    assertEquals(nightlife, "http://lorempixel.com/640/480/nightlife");
  }
});

test({
  name: "fashion() returns a random fashion image url from lorempixel",
  fn() {
    const fashion = faker.image.lorempixel.fashion();
    assertEquals(fashion, "http://lorempixel.com/640/480/fashion");
  }
});

test({
  name: "people() returns a random people image url from lorempixel",
  fn() {
    const people = faker.image.lorempixel.people();
    assertEquals(people, "http://lorempixel.com/640/480/people");
  }
});

test({
  name: "nature() returns a random nature image url from lorempixel",
  fn() {
    const nature = faker.image.lorempixel.nature();
    assertEquals(nature, "http://lorempixel.com/640/480/nature");
  }
});

test({
  name: "sports() returns a random sports image url from lorempixel",
  fn() {
    const sports = faker.image.lorempixel.sports();
    assertEquals(sports, "http://lorempixel.com/640/480/sports");
  }
});

test({
  name: "technics() returns a random technics image url from lorempixel",
  fn() {
    const technics = faker.image.lorempixel.technics();
    assertEquals(technics, "http://lorempixel.com/640/480/technics");
  }
});

test({
  name: "transport() returns a random transport image url from lorempixel",
  fn() {
    const transport = faker.image.lorempixel.transport();
    assertEquals(transport, "http://lorempixel.com/640/480/transport");
  }
});

test({
  name: "imageUrl() returns a random image url from unsplash",
  fn() {
    const imageUrl = faker.image.unsplash.imageUrl();
    assertEquals(imageUrl, "https://source.unsplash.com/640x480");
  }
});

test({
  name:
    "imageUrl() returns a random image url from unsplash with width and height",
  fn() {
    const imageUrl = faker.image.unsplash.imageUrl(100, 100);
    assertEquals(imageUrl, "https://source.unsplash.com/100x100");
  }
});

test({
  name:
    "imageUrl() returns a random image url for a specified category from unsplash",
  fn() {
    const imageUrl = faker.image.unsplash.imageUrl(100, 100, "food");
    assertEquals(
      imageUrl,
      "https://source.unsplash.com/category/food/100x100"
    );
  }
});

test({
  name:
    "imageUrl() returns a random image url with correct keywords for a specified category from unsplash",
  fn() {
    const imageUrl = faker.image.unsplash.imageUrl(
      100,
      100,
      "food",
      "keyword1,keyword2"
    );
    assertEquals(
      imageUrl,
      "https://source.unsplash.com/category/food/100x100?keyword1,keyword2"
    );
  }
});

test({
  name:
    "imageUrl() returns a random image url without keyword which format is wrong for a specified category from unsplash",
  fn() {
    const imageUrl = faker.image.unsplash.imageUrl(
      100,
      100,
      "food",
      "keyword1,?ds)0123$*908932409"
    );
    assertEquals(
      imageUrl,
      "https://source.unsplash.com/category/food/100x100"
    );
  }
});

test({
  name: "image() returns a searching image url with keyword from unsplash",
  fn() {
    const food = faker.image.unsplash.image(
      100,
      200,
      "keyword1,keyword2,keyword3"
    );
    assertEquals(
      food,
      "https://source.unsplash.com/100x200?keyword1,keyword2,keyword3"
    );
  }
});

test({
  name: "food() returns a random food image url from unsplash",
  fn() {
    const food = faker.image.unsplash.food();
    assertEquals(food, "https://source.unsplash.com/category/food/640x480");
  }
});

test({
  name: "people() returns a random people image url from unsplash",
  fn() {
    const people = faker.image.unsplash.people();
    assertEquals(
      people,
      "https://source.unsplash.com/category/people/640x480"
    );
  }
});

test({
  name: "nature() returns a random nature image url from unsplash",
  fn() {
    const nature = faker.image.unsplash.nature();
    assertEquals(
      nature,
      "https://source.unsplash.com/category/nature/640x480"
    );
  }
});

test({
  name: "technology() returns a random technology image url from unsplash",
  fn() {
    const technology = faker.image.unsplash.technology();
    assertEquals(
      technology,
      "https://source.unsplash.com/category/technology/640x480"
    );
  }
});

test({
  name: "objects() returns a random objects image url from unsplash",
  fn() {
    const objects = faker.image.unsplash.objects();
    assertEquals(
      objects,
      "https://source.unsplash.com/category/objects/640x480"
    );
  }
});

test({
  name: "buildings() returns a random buildings image url from unsplash",
  fn() {
    const buildings = faker.image.unsplash.buildings();
    assertEquals(
      buildings,
      "https://source.unsplash.com/category/buildings/640x480"
    );
  }
});

test({
  name: "dataUri() returns a blank data",
  fn() {
    const dataUri = faker.image.dataUri(200, 300);
    assertEquals(
      dataUri,
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E"
    );
  }
});

test({
  name: "dataUri() returns a customed background color data URI",
  fn() {
    const dataUri = faker.image.dataUri(200, 300, "red");
    assertEquals(
      dataUri,
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22200%22%20height%3D%22300%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22red%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3E200x300%3C%2Ftext%3E%3C%2Fsvg%3E"
    );
  }
});
