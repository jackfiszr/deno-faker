import {
  assert,
  assertEquals,
  assertStrictEq,
  sinon
} from "./support/test_deps.ts";
import { faker } from "../mod.ts";
const { test } = Deno;

test({
  name: "email() returns an email",
  fn(): void {
    sinon.stub(faker.internet, "userName").returns("Aiden.Harann55");
    const email = faker.internet.email("Aiden.Harann55");
    const res = email.split("@")[0];
    assertEquals(res, "Aiden.Harann55");
    faker.internet.userName.restore();
  }
});

test({
  name: "exampleEmail() returns an email with the correct name",
  fn(): void {
    sinon.stub(faker.internet, "userName").returns("Aiden.Harann55");
    const email = faker.internet.exampleEmail("Aiden.Harann55");
    const res = email.split("@")[0];
    assertEquals(res, "Aiden.Harann55");
    faker.internet.userName.restore();
  }
});

test({
  name: "exampleEmail() uses the example.[org|com|net] host",
  fn(): void {
    const email = faker.internet.exampleEmail();
    assert(email.match(/@example\.(org|com|net)$/));
  }
});

test({
  name: "userName() occasionally returns a single firstName",
  fn(): void {
    sinon.stub(faker.random, "number").returns(0);
    sinon.spy(faker.name, "firstName");
    const username = faker.internet.userName();
    assert(username);
    assert(faker.name.firstName.called);
    faker.random.number.restore();
    faker.name.firstName.restore();
  }
});

test({
  name:
    "userName() occasionally returns a firstName with a period or hyphen and a lastName",
  fn(): void {
    sinon.stub(faker.random, "number").returns(1);
    sinon.spy(faker.name, "firstName");
    sinon.spy(faker.name, "lastName");
    sinon.spy(faker.random, "arrayElement");
    const username = faker.internet.userName();
    assert(username);
    assert(faker.name.firstName.called);
    assert(faker.name.lastName.called);
    assert(faker.random.arrayElement.calledWith([".", "_"]));
    faker.random.number.restore();
    faker.name.firstName.restore();
    faker.name.lastName.restore();
    faker.random.arrayElement.restore();
  }
});

test({
  name: "domainName() returns a domainWord plus a random suffix",
  fn(): void {
    sinon.stub(faker.internet, "domainWord").returns("bar");
    sinon.stub(faker.internet, "domainSuffix").returns("net");
    const domain_name = faker.internet.domainName();
    assertEquals(domain_name, "bar.net");
    faker.internet.domainWord.restore();
    faker.internet.domainSuffix.restore();
  }
});

test({
  name: "domainWord() returns a lower-case firstName",
  fn(): void {
    sinon.stub(faker.name, "firstName").returns("FOO");
    const domain_word = faker.internet.domainWord();
    assert(domain_word);
    assertStrictEq(domain_word, "foo");
    faker.name.firstName.restore();
  }
});

test({
  name:
    "domainWord(), when the firstName contains a apostrophe, should remove the apostrophe",
  fn(): void {
    sinon.stub(faker.name, "firstName").returns("d'angelo");
    const domain_word = faker.internet.domainWord();
    assertStrictEq(domain_word, "dangelo");
    faker.name.firstName.restore();
  }
});

test({
  name: "protocol() returns a valid protocol",
  fn(): void {
    const protocol = faker.internet.protocol();
    assert(protocol);
  }
});

test({
  name: "protocol() should occasionally return http",
  fn(): void {
    sinon.stub(faker.random, "number").returns(0);
    const protocol = faker.internet.protocol();
    assert(protocol);
    assertStrictEq(protocol, "http");
    faker.random.number.restore();
  }
});

test({
  name: "protocol() should occasionally return https",
  fn(): void {
    sinon.stub(faker.random, "number").returns(1);
    const protocol = faker.internet.protocol();
    assert(protocol);
    assertStrictEq(protocol, "https");
    faker.random.number.restore();
  }
});

test({
  name: "url() returns a valid url",
  fn(): void {
    sinon.stub(faker.internet, "protocol").returns("http");
    sinon.stub(faker.internet, "domainWord").returns("bar");
    sinon.stub(faker.internet, "domainSuffix").returns("net");
    const url = faker.internet.url();
    assert(url);
    assertStrictEq(url, "http://bar.net");
  }
});

test({
  name: "ip() returns a random IP address with four parts",
  fn(): void {
    const ip = faker.internet.ip();
    const parts = ip.split(".");
    assertEquals(parts.length, 4);
  }
});

test({
  name: "ipv6() returns a random IPv6 address with eight parts",
  fn(): void {
    const ip = faker.internet.ipv6();
    const parts = ip.split(":");
    assertEquals(parts.length, 8);
  }
});

test({
  name: "userAgent() returns a valid user-agent",
  fn(): void {
    const ua = faker.internet.userAgent();
    assert(ua);
  }
});

test({
  name: "color() returns a valid hex value (like #ffffff)",
  fn(): void {
    const color = faker.internet.color(100, 100, 100);
    assert(color.match(/^#[a-f0-9]{6}$/));
  }
});

test({
  name: "mac() returns a random MAC address with 6 hexadecimal digits",
  fn(): void {
    const mac = faker.internet.mac();
    assert(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));
  }
});

test({
  name: "mac() uses the dash separator if we pass it in as our separator",
  fn(): void {
    const mac = faker.internet.mac("-");
    assert(mac.match(/^([a-f0-9]{2}-){5}[a-f0-9]{2}$/));
  }
});

test({
  name: "mac() uses no separator if we pass in an empty string",
  fn(): void {
    const mac = faker.internet.mac("");
    assert(mac.match(/^[a-f0-9]{12}$/));
  }
});

test({
  name:
    "mac() uses the default colon (:) if we provide an unacceptable separator",
  fn(): void {
    let mac = faker.internet.mac("!");
    assert(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));
    mac = faker.internet.mac("&");
    assert(mac.match(/^([a-f0-9]{2}:){5}[a-f0-9]{2}$/));
  }
});
