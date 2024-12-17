# deno-faker - generate massive amounts of fake data in Deno

![Deno-faker](https://raw.githubusercontent.com/jackfiszr/deno-faker/master/logo.png)

## Usage

<!--
### Browser

    <script src = "faker.js" type = "text/javascript"></script>
    <script>
      const randomName = faker.name.findName(); // Caitlyn Kerluke
      const randomEmail = faker.internet.email(); // Rusty@arne.info
      const randomCard = faker.helpers.createCard(); // random contact card containing many properties
    </script>
-->

### Deno

    import { faker } from "jsr:@jackfiszr/faker@1.1.1";

    const randomName = faker.name.findName(); // Rowan Nikolaus
    const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    const randomCard = faker.helpers.createCard(); // random contact card containing many properties

## API

### Faker.fake()

faker contains a super useful generator method `Faker.fake` for combining faker
API methods using a mustache string format.

**Example:**

```js
console.log(
  faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"),
);
// outputs: "Marks, Dean Sr."
```

This will interpolate the format string with the value of methods
`name.lastName()`, `name.firstName()`, and `name.suffix()`

### API Methods

- address
  - zipCode
  - city
  - cityPrefix
  - citySuffix
  - streetName
  - streetAddress
  - streetSuffix
  - streetPrefix
  - secondaryAddress
  - county
  - country
  - countryCode
  - state
  - stateAbbr
  - latitude
  - longitude
- commerce
  - color
  - department
  - productName
  - price
  - productAdjective
  - productMaterial
  - product
- company
  - suffixes
  - companyName
  - companySuffix
  - catchPhrase
  - bs
  - catchPhraseAdjective
  - catchPhraseDescriptor
  - catchPhraseNoun
  - bsAdjective
  - bsBuzz
  - bsNoun
- database
  - column
  - type
  - collation
  - engine
- date
  - past
  - future
  - between
  - recent
  - soon
  - month
  - weekday
- fake
- finance
  - account
  - accountName
  - mask
  - amount
  - transactionType
  - currencyCode
  - currencyName
  - currencySymbol
  - bitcoinAddress
  - ethereumAddress
  - iban
  - bic
- hacker
  - abbreviation
  - adjective
  - noun
  - verb
  - ingverb
  - phrase
- helpers
  - randomize
  - slugify
  - replaceSymbolWithNumber
  - replaceSymbols
  - shuffle
  - mustache
  - createCard
  - contextualCard
  - userCard
  - createTransaction
- image
  - image
  - avatar
  - imageUrl
  - abstract
  - animals
  - business
  - cats
  - city
  - food
  - nightlife
  - fashion
  - people
  - nature
  - sports
  - technics
  - transport
  - dataUri
- internet
  - avatar
  - email
  - exampleEmail
  - userName
  - protocol
  - url
  - domainName
  - domainSuffix
  - domainWord
  - ip
  - ipv6
  - userAgent
  - color
  - mac
  - password
- lorem
  - word
  - words
  - sentence
  - slug
  - sentences
  - paragraph
  - paragraphs
  - text
  - lines
- name
  - firstName
  - lastName
  - findName
  - jobTitle
  - prefix
  - suffix
  - title
  - jobDescriptor
  - jobArea
  - jobType
- phone
  - phoneNumber
  - phoneNumberFormat
  - phoneFormats
- random
  - number
  - float
  - arrayElement
  - objectElement
  - uuid
  - boolean
  - word
  - words
  - image
  - locale
  - alphaNumeric
  - hexaDecimal
- system
  - fileName
  - commonFileName
  - mimeType
  - commonFileType
  - commonFileExt
  - fileType
  - fileExt
  - directoryPath
  - filePath
  - semver

## Localization

The default language locale is set to English.

Setting a new locale is simple:

```js
// sets locale to pl
faker.setLocale("pl");
// or
faker.locale = "pl";
```

- az
- cz
- de
- de_AT
- de_CH
- en
- en_AU
- en_BORK
- en_CA
- en_GB
- en_IE
- en_IND
- en_US
- en_ZA
- en_au_ocker
- es
- es_MX
- fa
- fr
- fr_CA
- ge
- id_ID
- it
- ja
- ko
- nb_NO
- nep
- nl
- pl
- pt_BR
- pt_PT
- ru
- sk
- sv
- tr
- uk
- vi
- zh_CN
- zh_TW

### Individual Localization Packages

By default, requiring `faker` will include _all_ locale data.

In a production environment, you may only want to include the locale data for a
specific set of locales.

```js
// loads only pl locale
import { faker } from "jsr:@jackfiszr/faker@1.1.1/locale/pl.ts";
```

## Setting a randomness seed

If you want consistent results, you can set your own seed:

```js
faker.seed(123);

const firstRandom = faker.random.number();

// Setting the seed again resets the sequence.
faker.seed(123);

const secondRandom = faker.random.number();

console.log(firstRandom === secondRandom);
```

## Tests

You can run tests for individual modules, e.g:

    deno test jsr:@jackfiszr/faker@1.1.1/test/phone_number_test.ts

or clone the repository and run `deno test`:

    git clone https://github.com/jackfiszr/deno-faker && cd deno-faker

    deno test --allow-import --no-check

<!--
You can view a code coverage report generated in coverage/lcov-report/index.html.
-->

## Projects built with the original faker.js

### Fake JSON Schema

Use faker generators to populate JSON Schema samples. See:
https://github.com/pateketrueke/json-schema-faker/

<!--
### CLI

Run faker generators from Command Line. See:
https://github.com/lestoni/faker-cli
-->

## Original faker.js info and licence

faker.js - Copyright (c) 2017 Marak Squires http://github.com/marak/faker.js/

faker.js was inspired by and has used data definitions from:

- https://github.com/stympy/faker/ - Copyright (c) 2007-2010 Benjamin Curtis
- http://search.cpan.org/~jasonk/Data-Faker-0.07/ - Copyright 2004-2005 by Jason
  Kohles

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
