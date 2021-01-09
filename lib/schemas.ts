export default {
  direction: {
    "description":
      "Generates a direction. Use optional useAbbr bool to return abbrevation",
    "sampleResults": ["Northwest", "South", "SW", "E"],
  },
  cardinalDirection: {
    "description":
      "Generates a cardinal direction. Use optional useAbbr boolean to return abbrevation",
    "sampleResults": ["North", "South", "E", "W"],
  },
  ordinalDirection: {
    "description":
      "Generates an ordinal direction. Use optional useAbbr boolean to return abbrevation",
    "sampleResults": ["Northwest", "Southeast", "SW", "NE"],
  },
  column: {
    "description": "Generates a column name.",
    "sampleResults": ["id", "title", "createdAt"],
  },
  type: {
    "description": "Generates a column type.",
    "sampleResults": ["byte", "int", "varchar", "timestamp"],
  },
  collation: {
    "description": "Generates a collation.",
    "sampleResults": ["utf8_unicode_ci", "utf8_bin"],
  },
  engine: {
    "description": "Generates a storage engine.",
    "sampleResults": ["MyISAM", "InnoDB"],
  },
  avatar: {
    "description": "Generates a URL for an avatar.",
    "sampleResults": [
      "https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg",
    ],
  },
  email: {
    "description":
      "Generates a valid email address based on optional input criteria",
    "sampleResults": ["foo.bar@gmail.com"],
    "properties": {
      "firstName": {
        "type": "string",
        "required": false,
        "description": "The first name of the user",
      },
      "lastName": {
        "type": "string",
        "required": false,
        "description": "The last name of the user",
      },
      "provider": {
        "type": "string",
        "required": false,
        "description": "The domain of the user",
      },
    },
  },
  userName: {
    "description":
      "Generates a username based on one of several patterns. The pattern is chosen randomly.",
    "sampleResults": [
      "Kirstin39",
      "Kirstin.Smith",
      "Kirstin.Smith39",
      "KirstinSmith",
      "KirstinSmith39",
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "required": false,
        "description": "The first name of the user",
      },
      "lastName": {
        "type": "string",
        "required": false,
        "description": "The last name of the user",
      },
    },
  },
  protocol: {
    "description": "Randomly generates http or https",
    "sampleResults": ["https", "http"],
  },
  url: {
    "description":
      "Generates a random URL. The URL could be secure or insecure.",
    "sampleResults": [
      "http://rashawn.name",
      "https://rashawn.name",
    ],
  },
  domainName: {
    "description": "Generates a random domain name.",
    "sampleResults": ["marvin.org"],
  },
  domainSuffix: {
    "description": "Generates a random domain suffix.",
    "sampleResults": ["net"],
  },
  domainWord: {
    "description": "Generates a random domain word.",
    "sampleResults": ["alyce"],
  },
  ip: {
    "description": "Generates a random IP.",
    "sampleResults": ["97.238.241.11"],
  },
  ipv6: {
    "description": "Generates a random IPv6 address.",
    "sampleResults": ["2001:0db8:6276:b1a7:5213:22f1:25df:c8a0"],
  },
  userAgent: {
    "description": "Generates a random user agent.",
    "sampleResults": [
      "Mozilla/5.0 (Macintosh U PPC Mac OS X 10_7_5 rv:6.0 SL) AppleWebKit/532.0.1 (KHTML, like Gecko) Version/7.1.6 Safari/532.0.1",
    ],
  },
  color: {
    "description": "Generates a random hexadecimal color.",
    "sampleResults": ["#06267f"],
    "properties": {
      "baseRed255": {
        "type": "number",
        "required": false,
        "description": "The red value. Valid values are 0 - 255.",
      },
      "baseGreen255": {
        "type": "number",
        "required": false,
        "description": "The green value. Valid values are 0 - 255.",
      },
      "baseBlue255": {
        "type": "number",
        "required": false,
        "description": "The blue value. Valid values are 0 - 255.",
      },
    },
  },
  mac: {
    "description": "Generates a random mac address.",
    "sampleResults": ["78:06:cc:ae:b3:81"],
  },
  password: {
    "description": "Generates a random password.",
    "sampleResults": [
      "AM7zl6Mg",
      "susejofe",
    ],
    "properties": {
      "length": {
        "type": "number",
        "required": false,
        "description": "The number of characters in the password.",
      },
      "memorable": {
        "type": "boolean",
        "required": false,
        "description": "Whether a password should be easy to remember.",
      },
      "pattern": {
        "type": "regex",
        "required": false,
        "description":
          "A regex to match each character of the password against. This parameter will be negated if the memorable setting is turned on.",
      },
      "prefix": {
        "type": "string",
        "required": false,
        "description":
          "A value to prepend to the generated password. The prefix counts towards the length of the password.",
      },
    },
  },
  vehicle: {
    "description": "Generates a random vehicle.",
    "sampleResults": ["BMW Explorer", "Ford Camry", "Lamborghini Ranchero"],
  },
  manufacturer: {
    "description": "Generates a manufacturer name.",
    "sampleResults": ["Ford", "Jeep", "Tesla"],
  },
  model: {
    "description": "Generates a vehicle model.",
    "sampleResults": ["Explorer", "Camry", "Ranchero"],
  },
  vtype: {
    "description": "Generates a vehicle type.",
    "sampleResults": ["Coupe", "Convertable", "Sedan", "SUV"],
  },
  fuel: {
    "description": "Generates a fuel type.",
    "sampleResults": ["Electric", "Gasoline", "Diesel"],
  },
  vin: {
    "description": "Generates a valid VIN number.",
    "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"],
  },
  vcolor: {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"],
  },
};
