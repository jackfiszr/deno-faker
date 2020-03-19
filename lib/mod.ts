/*

   this index.js file is used for including the faker library as a CommonJS module, instead of a bundle

   you can include the faker library into your existing node.js application by requiring the entire /faker directory

    import { faker } from "./faker.js"
    const randomName = faker.name.findName();

   you can also simply include the "faker.js" file which is the auto-generated bundled version of the faker library

    import { faker } from "./customAppPath/faker.js"
    const randomName = faker.name.findName();


  if you plan on modifying the faker library you should be performing your changes in the /lib/ directory

*/
import { Fake } from "./fake.ts";
import { Unique } from "./unique.ts";
import { Random } from "./random.ts";
import { Helpers } from "./helpers.ts";
import { Name } from "./name.ts";
import { Address } from "./address.ts";
import { Company } from "./company.ts";
import { Finance } from "./finance.ts";
import { Image } from "./image.ts";
import { Lorem } from "./lorem.ts";
import { Hacker } from "./hacker.ts";
import { Internet } from "./internet.ts";
import { Database } from "./database.ts";
import { Phone } from "./phone_number.ts";
import { _Date } from "./date.ts";
import { Commerce } from "./commerce.ts";
import { System } from "./system.js";
import { Git } from "./git.js";
import { Vehicle } from "./vehicle.js";
/**
 *
 * @namespace faker
 */
class Faker {
  [key: string]: any

  constructor(opts: any) {
    this.opts = opts || {};
    // assign options
    this.locales = opts.locales || {};
    this.locale = opts.locale || "en";
    this.localeFallback = opts.localeFallback || "en";

    this.definitions = {};

    this.fake = new Fake(this).fake;
    this.unique = new Unique(this).unique;
    this.random = new Random(this);
    this.helpers = new Helpers(this);
    this.name = new Name(this);
    this.address = new Address(this);
    this.company = new Company(this);
    this.finance = new Finance(this);
    this.image = new Image(this);
    this.lorem = new Lorem(this);
    this.hacker = new Hacker(this);
    this.internet = new Internet(this);
    this.database = new Database(this);
    this.phone = new Phone(this);
    this.date = new _Date(this);
    this.commerce = new Commerce(this);
    this.system = new System(this);
    this.git = new Git(this);
    this.vehicle = new Vehicle(this);

    this._definitions = {
      "name": [
        "first_name",
        "last_name",
        "prefix",
        "suffix",
        "gender",
        "title",
        "male_prefix",
        "female_prefix",
        "male_first_name",
        "female_first_name",
        "male_middle_name",
        "female_middle_name",
        "male_last_name",
        "female_last_name"
      ],
      "address": [
        "city_prefix",
        "city_suffix",
        "street_suffix",
        "county",
        "country",
        "country_code",
        "state",
        "state_abbr",
        "street_prefix",
        "postcode",
        "postcode_by_state",
        "direction",
        "direction_abbr"
      ],
      "company": [
        "adjective",
        "noun",
        "descriptor",
        "bs_adjective",
        "bs_noun",
        "bs_verb",
        "suffix"
      ],
      "lorem": ["words"],
      "hacker": [
        "abbreviation",
        "adjective",
        "noun",
        "verb",
        "ingverb",
        "phrase"
      ],
      "phone_number": ["formats"],
      "finance": [
        "account_type",
        "transaction_type",
        "currency",
        "iban",
        "credit_card"
      ],
      "internet": [
        "avatar_uri",
        "domain_suffix",
        "free_email",
        "example_email",
        "password"
      ],
      "commerce": [
        "color",
        "department",
        "product_name",
        "price",
        "categories"
      ],
      "database": ["collation", "column", "engine", "type"],
      "system": ["mimeTypes", "directoryPaths"],
      "date": ["month", "weekday"],
      "vehicle": [
        "vehicle",
        "manufacturer",
        "model",
        "type",
        "fuel",
        "vin",
        "color"
      ],
      "title": "",
      "separator": ""
    };

    // Create a Getter for all definitions.foo.bar properties
    Object.keys(this._definitions).forEach((d: any) => {
      if (typeof this.definitions[d] === "undefined") {
        this.definitions[d] = {};
      }

      if (typeof this._definitions[d] === "string") {
        this.definitions[d] = this._definitions[d];
        return;
      }

      if (Array.isArray(this._definitions[d])) {
        const defsArray = [...this._definitions[d]];
        defsArray.forEach((p: any) => {
          Object.defineProperty(this.definitions[d], p, {
            get: () => {
              if (
                typeof this.locales[this.locale][d] === "undefined" ||
                typeof this.locales[this.locale][d][p] === "undefined"
              ) {
                // certain localization sets contain less data then others.
                // in the case of a missing definition, use the default localeFallback to substitute the missing set data
                // throw new Error('unknown property ' + d + p)
                return this.locales[this.localeFallback][d][p];
              } else {
                // return localized data
                return this.locales[this.locale][d][p];
              }
            }
          });
        });
      }
    });
  }

  setLocale(locale: any) {
    this.locale = locale;
  }

  seed(value: number | number[]) {
    this.seedValue = value;
    this.random = new Random(this, this.seedValue);
  }
}

export { Faker };
