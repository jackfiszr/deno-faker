import { assert, assertEquals, sinon } from "./support/test_deps.ts";
import { testWrapper } from "./support/test_utils.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

function citySpy() {
  sinon.spy(faker.address, "cityPrefix");
  sinon.spy(faker.name, "firstName");
  sinon.spy(faker.name, "lastName");
  sinon.spy(faker.address, "citySuffix");
}
function cityRestore() {
  faker.random.number.restore();
  faker.address.cityPrefix.restore();
  faker.name.firstName.restore();
  faker.name.lastName.restore();
  faker.address.citySuffix.restore();
}

testWrapper(
  {
    name: "city() occasionally returns prefix + first name + suffix",
    fn(): void {
      sinon.stub(faker.random, "number").returns(0);
      const city = faker.address.city();
      assert(city);
      assert(faker.address.cityPrefix.calledOnce);
      assert(faker.name.firstName.calledOnce);
      assert(faker.address.citySuffix.calledOnce);
    },
  },
  citySpy,
  cityRestore,
);

testWrapper(
  {
    name: "city() occasionally returns prefix + first name",
    fn(): void {
      sinon.stub(faker.random, "number").returns(1);
      const city = faker.address.city();
      assert(city);
      assert(faker.address.cityPrefix.calledOnce);
      assert(faker.name.firstName.calledOnce);
    },
  },
  citySpy,
  cityRestore,
);

testWrapper(
  {
    name: "city() occasionally returns first name + suffix",
    fn(): void {
      sinon.stub(faker.random, "number").returns(2);
      const city = faker.address.city();
      assert(city);
      assert(faker.address.citySuffix.calledOnce);
    },
  },
  citySpy,
  cityRestore,
);

testWrapper(
  {
    name: "city() occasionally returns last name + suffix",
    fn(): void {
      sinon.stub(faker.random, "number").returns(3);
      const city = faker.address.city();
      assert(city);
      assert(!faker.address.cityPrefix.called);
      assert(!faker.name.firstName.called);
      assert(faker.name.lastName.calledOnce);
      assert(faker.address.citySuffix.calledOnce);
    },
  },
  citySpy,
  cityRestore,
);

function streetNameSpy() {
  sinon.spy(faker.name, "firstName");
  sinon.spy(faker.name, "lastName");
  sinon.spy(faker.address, "streetSuffix");
}
function streetNameRestore() {
  faker.name.firstName.restore();
  faker.name.lastName.restore();
  faker.address.streetSuffix.restore();
}

testWrapper(
  {
    name: "streetName() occasionally returns last name + suffix",
    fn(): void {
      sinon.stub(faker.random, "number").returns(0);
      const street_name = faker.address.streetName();
      assert(street_name);
      assert(!faker.name.firstName.called);
      assert(faker.name.lastName.calledOnce);
      assert(faker.address.streetSuffix.calledOnce);
      faker.random.number.restore();
    },
  },
  streetNameSpy,
  streetNameRestore,
);

testWrapper(
  {
    name: "streetName() occasionally returns first name + suffix",
    fn(): void {
      sinon.stub(faker.random, "number").returns(1);
      const street_name = faker.address.streetName();
      assert(street_name);
      assert(faker.name.firstName.calledOnce);
      assert(!faker.name.lastName.called);
      assert(faker.address.streetSuffix.calledOnce);
      faker.random.number.restore();
    },
  },
  streetNameSpy,
  streetNameRestore,
);

testWrapper(
  {
    name: "streetName() trims trailing whitespace from the name",
    fn(): void {
      faker.address.streetSuffix.restore();
      sinon.stub(faker.address, "streetSuffix").returns("");
      const street_name = faker.address.streetName();
      assert(!street_name.match(/ $/));
    },
  },
  streetNameSpy,
  streetNameRestore,
);

function streetAddressSpy() {
  sinon.spy(faker.address, "streetName");
  sinon.spy(faker.address, "secondaryAddress");
}

function streetAddressRestore() {
  faker.address.streetName.restore();
  faker.address.secondaryAddress.restore();
}

testWrapper(
  {
    name: "streetAddress() occasionally returns a 5-digit street number",
    fn(): void {
      sinon.stub(faker.random, "number").returns(0);
      const address = faker.address.streetAddress();
      const parts = address.split(" ");
      assertEquals(parts[0].length, 5);
      assert(faker.address.streetName.called);
      faker.random.number.restore();
    },
  },
  streetAddressSpy,
  streetAddressRestore,
);

testWrapper(
  {
    name: "streetAddress() occasionally returns a 4-digit street number",
    fn(): void {
      sinon.stub(faker.random, "number").returns(1);
      const address = faker.address.streetAddress();
      const parts = address.split(" ");
      assertEquals(parts[0].length, 4);
      assert(faker.address.streetName.called);
      faker.random.number.restore();
    },
  },
  streetAddressSpy,
  streetAddressRestore,
);

testWrapper(
  {
    name: "streetAddress() occasionally returns a 3-digit street number",
    fn(): void {
      sinon.stub(faker.random, "number").returns(2);
      const address = faker.address.streetAddress();
      const parts = address.split(" ");
      assertEquals(parts[0].length, 3);
      assert(faker.address.streetName.called);
      assert(!faker.address.secondaryAddress.called);
      faker.random.number.restore();
    },
  },
  streetAddressSpy,
  streetAddressRestore,
);

testWrapper(
  {
    name:
      "streetAddress() when useFulladdress is true, adds a secondary address to the result",
    fn(): void {
      const address = faker.address.streetAddress(true);
      const _parts = address.split(" ");
      assert(faker.address.secondaryAddress.called);
    },
  },
  streetAddressSpy,
  streetAddressRestore,
);

test({
  name: "secondaryAddress() randomly chooses an Apt or Suite number",
  fn(): void {
    sinon.spy(faker.random, "arrayElement");
    const address = faker.address.secondaryAddress();
    const expected_array = [
      "Apt. ###",
      "Suite ###",
    ];
    assert(address);
    assert(faker.random.arrayElement.calledWith(expected_array));
    faker.random.arrayElement.restore();
  },
});

test({
  name: "county() returns random county",
  fn(): void {
    sinon.spy(faker.address, "county");
    const county = faker.address.county();
    assert(county);
    assert(faker.address.county.called);
    faker.address.county.restore();
  },
});

test({
  name: "country() returns random country",
  fn(): void {
    sinon.spy(faker.address, "country");
    const country = faker.address.country();
    assert(country);
    assert(faker.address.country.called);
    faker.address.country.restore();
  },
});

test({
  name: "countryCode() returns random countryCode",
  fn(): void {
    sinon.spy(faker.address, "countryCode");
    const countryCode = faker.address.countryCode();
    assert(countryCode);
    assert(faker.address.countryCode.called);
    faker.address.countryCode.restore();
  },
});

test({
  name: "state() returns random state",
  fn(): void {
    sinon.spy(faker.address, "state");
    const state = faker.address.state();
    assert(state);
    assert(faker.address.state.called);
    faker.address.state.restore();
  },
});

test({
  name: "zipCode() returns random zipCode",
  fn(): void {
    sinon.spy(faker.address, "zipCode");
    const zipCode = faker.address.zipCode();
    assert(zipCode);
    assert(faker.address.zipCode.called);
    faker.address.zipCode.restore();
  },
});

test({
  name: "zipCode() returns random zipCode - user specified format",
  fn(): void {
    let zipCode = faker.address.zipCode("?#? #?#");
    assert(zipCode.match(/^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/));
    // try another format
    zipCode = faker.address.zipCode("###-###");
    assert(zipCode.match(/^\d{3}-\d{3}$/));
  },
});

test({
  name: "zipCode() returns zipCode with proper locale format",
  fn(): void {
    // we'll use the pl locale..
    faker.locale = "pl";
    const zipCode = faker.address.zipCode();
    assert(zipCode.match(/^[0-9]{2}\-[0-9]{3}$/));
  },
});

test({
  name: "zipCodeByState() returns zipCode valid for specified State",
  fn(): void {
    faker.locale = "en_US";
    const states = ["IL", "GA", "WA"];
    const zipCode1 = faker.address.zipCodeByState(states[0]);
    assert(zipCode1 >= 60001);
    assert(zipCode1 <= 62999);
    const zipCode2 = faker.address.zipCodeByState(states[1]);
    assert(zipCode2 >= 30001);
    assert(zipCode2 <= 31999);
    const zipCode3 = faker.address.zipCodeByState(states[2]);
    assert(zipCode3 >= 98001);
    assert(zipCode3 <= 99403);
  },
});

test({
  name: "zipCodeByState() returns undefined if state is invalid",
  fn(): void {
    const state = "XX";
    sinon.spy(faker.address, "zipCode");
    const _zipCode = faker.address.zipCodeByState(state);
    assert(faker.address.zipCode.called);
    faker.address.zipCode.restore();
  },
});

test({
  name:
    "zipCodeByState() returns undefined if state is valid but locale is invalid",
  fn(): void {
    faker.locale = "zh_CN";
    const state = "IL";
    sinon.spy(faker.address, "zipCode");
    const _zipCode = faker.address.zipCodeByState(state);
    assert(faker.address.zipCode.called);
    // assert(zipCode === undefined)
    faker.address.zipCode.restore();
  },
});

test({
  name: "latitude() returns random latitude",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const latitude = faker.address.latitude();
      assert(typeof latitude === "string");
      const latitude_float = parseFloat(latitude);
      assert(latitude_float >= -90.0);
      assert(latitude_float <= 90.0);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name: "latitude() returns latitude with min and max and default precision",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const latitude = faker.address.latitude(-5, 5);
      assert(typeof latitude === "string");
      assertEquals(latitude.split(".")[1].length, 4);
      const latitude_float = parseFloat(latitude);
      assert(latitude_float >= -5);
      assert(latitude_float <= 5);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name: "latitude() returns random latitude with custom precision",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const latitude = faker.address.latitude(undefined, undefined, 7);
      assert(typeof latitude === "string");
      assertEquals(latitude.split(".")[1].length, 7);
      const latitude_float = parseFloat(latitude);
      assert(latitude_float >= -180);
      assert(latitude_float <= 180);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name: "longitude() returns random longitude",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const longitude = faker.address.longitude();
      assert(typeof longitude === "string");
      const longitude_float = parseFloat(longitude);
      assert(longitude_float >= -180.0);
      assert(longitude_float <= 180.0);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name:
    "longitude() returns random longitude with min and max and default precision",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const longitude = faker.address.longitude(100, -30);
      assert(typeof longitude === "string");
      assertEquals(longitude.split(".")[1].length, 4);
      const longitude_float = parseFloat(longitude);
      assert(longitude_float >= -30);
      assert(longitude_float <= 100);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name: "longitude() returns random longitude with custom precision",
  fn(): void {
    for (let i = 0; i < 100; i++) {
      sinon.spy(faker.random, "number");
      const longitude = faker.address.longitude(undefined, undefined, 7);
      assert(typeof longitude === "string");
      assertEquals(longitude.split(".")[1].length, 7);
      const longitude_float = parseFloat(longitude);
      assert(longitude_float >= -180);
      assert(longitude_float <= 180);
      assert(faker.random.number.called);
      faker.random.number.restore();
    }
  },
});

test({
  name: "direction() returns random direction",
  fn(): void {
    sinon.stub(faker.address, "direction").returns("North");
    const direction = faker.address.direction();
    assertEquals(direction, "North");
    faker.address.direction.restore();
  },
});

test({
  name: "direction() returns abbreviation when useAbbr is false",
  fn(): void {
    sinon.stub(faker.address, "direction").returns("N");
    const direction = faker.address.direction(false);
    assertEquals(direction, "N");
    faker.address.direction.restore();
  },
});

test({
  name: "direction() returns abbreviation when useAbbr is true",
  fn(): void {
    const direction = faker.address.direction(true);
    assertEquals(typeof direction, "string");
    assertEquals(direction.length <= 2, true);
  },
});

test({
  name: "direction() returns abbreviation when useAbbr is true",
  fn(): void {
    sinon.stub(faker.address, "direction").returns("N");
    const direction = faker.address.direction(true);
    assertEquals(direction, "N");
    faker.address.direction.restore();
  },
});

test({
  name: "ordinalDirection() returns random ordinal direction",
  fn(): void {
    sinon.stub(faker.address, "ordinalDirection").returns("West");
    const ordinalDirection = faker.address.ordinalDirection();
    assertEquals(ordinalDirection, "West");
    faker.address.ordinalDirection.restore();
  },
});

test({
  name: "ordinalDirection() returns abbreviation when useAbbr is true",
  fn(): void {
    sinon.stub(faker.address, "ordinalDirection").returns("W");
    const ordinalDirection = faker.address.ordinalDirection(true);
    assertEquals(ordinalDirection, "W");
    faker.address.ordinalDirection.restore();
  },
});

test({
  name: "ordinalDirection() returns abbreviation when useAbbr is true",
  fn(): void {
    const ordinalDirection = faker.address.ordinalDirection(true);
    assertEquals(typeof ordinalDirection, "string");
    assertEquals(ordinalDirection.length <= 2, true);
  },
});

test({
  name: "cardinalDirection() returns random cardinal direction",
  fn(): void {
    sinon.stub(faker.address, "cardinalDirection").returns("Northwest");
    const cardinalDirection = faker.address.cardinalDirection();
    assertEquals(cardinalDirection, "Northwest");
    faker.address.cardinalDirection.restore();
  },
});

test({
  name: "cardinalDirection() returns abbreviation when useAbbr is true",
  fn(): void {
    sinon.stub(faker.address, "cardinalDirection").returns("NW");
    const cardinalDirection = faker.address.cardinalDirection(true);
    assertEquals(cardinalDirection, "NW");
    faker.address.cardinalDirection.restore();
  },
});

test({
  name: "cardinalDirection() returns abbreviation when useAbbr is true",
  fn(): void {
    const cardinalDirection = faker.address.cardinalDirection(true);
    assertEquals(typeof cardinalDirection, "string");
    assertEquals(cardinalDirection.length <= 2, true);
  },
});

test({
  name:
    "nearbyGPSCoordinate() returns random gps coordinate within a distance of another one",
  fn(): void {
    function haversine(
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number,
      isMetric: boolean,
    ) {
      function degreesToRadians(degrees: number) {
        return degrees * (Math.PI / 180.0);
      }
      function kilometersToMiles(miles: number) {
        return miles * 0.621371;
      }
      const R = 6378.137;
      const dLat = degreesToRadians(lat2 - lat1);
      const dLon = degreesToRadians(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const distance = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return isMetric ? distance : kilometersToMiles(distance);
    }
    for (let i = 0; i < 10000; i++) {
      const latFloat1 = parseFloat(faker.address.latitude());
      const lonFloat1 = parseFloat(faker.address.longitude());
      const radius = (Math.random() * 99) + 1; // range of [1, 100)
      const isMetric = Math.round(Math.random()) == 1;
      const coordinate = faker.address.nearbyGPSCoordinate(
        [latFloat1, lonFloat1],
        radius,
        isMetric,
      );
      assert(coordinate.length === 2);
      assert(typeof coordinate[0] === "string");
      assert(typeof coordinate[1] === "string");
      const latFloat2 = parseFloat(coordinate[0]);
      assert(latFloat2 >= -90.0);
      assert(latFloat2 <= 90.0);
      const lonFloat2 = parseFloat(coordinate[1]);
      assert(lonFloat2 >= -180.0);
      assert(lonFloat2 <= 180.0);
      // Due to floating point math, and constants that are not extremely precise,
      // returned points will not be strictly within the given radius of the input
      // coordinate. Using a error of 1.0 to compensate.
      const error = 1.0;
      const actualDistance = haversine(
        latFloat1,
        lonFloat1,
        latFloat2,
        lonFloat2,
        isMetric,
      );
      assert(actualDistance <= (radius + error));
    }
    // test once with undefined radius
    const latFloat1 = parseFloat(faker.address.latitude());
    const lonFloat1 = parseFloat(faker.address.longitude());
    const isMetric = Math.round(Math.random()) == 1;
    const coordinate = faker.address.nearbyGPSCoordinate(
      [latFloat1, lonFloat1],
      undefined,
      isMetric,
    );
    assert(coordinate.length === 2);
    assert(typeof coordinate[0] === "string");
    assert(typeof coordinate[1] === "string");
  },
});
