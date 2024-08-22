<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIs
Here's the documentation for the `POST /vendors` API in a README file format:

---

## API Documentation

### POST /vendors

**Description:**

Creates a new vendor in the system.

**Request URL:**

`/vendors`

**Method:**

`POST`

**Request Body:**

The request body should be in JSON format and include the following fields:

| Field                  | Type   | Description                                                         |
|------------------------|--------|---------------------------------------------------------------------|
| `name`                 | String | **Required.** The name of the vendor.                               |
| `contactDetails`       | String | **Required.** The contact information of the vendor.                |
| `address`              | String | **Required.** The physical address of the vendor.                   |
| `vendorCode`           | String | **Required.** A unique identifier for the vendor.                   |
| `onTimeDeliveryRate`   | Number | **Optional.** Percentage of on-time deliveries by the vendor.       |
| `qualityRatingAvg`     | Number | **Optional.** The average quality rating based on purchase orders.  |
| `averageResponseTime`  | Number | **Optional.** The average time taken by the vendor to acknowledge purchase orders. |
| `fulfillmentRate`      | Number | **Optional.** Percentage of purchase orders fulfilled successfully by the vendor. |

**Example Request:**

```json
{
  "name": "Vendor XYZ",
  "contactDetails": "+1-234-567-890",
  "address": "123 Vendor St, City, Country",
  "vendorCode": "VEND123",
  "onTimeDeliveryRate": 95.5,
  "qualityRatingAvg": 4.7,
  "averageResponseTime": 2.3,
  "fulfillmentRate": 98.2
}
```

**Response:**

- **201 Created:** Vendor created successfully.
- **400 Bad Request:** Invalid input or missing required fields.
- **500 Internal Server Error:** Server error while processing the request.

**Example Response:**

```json
{
  "id": "abc123",
  "name": "Vendor XYZ",
  "vendorCode": "VEND123",
  "status": "Vendor created successfully"
}
```

---

This documentation provides the necessary details for consuming the `POST /vendors` API, including request structure and example responses.

## License

Nest is [MIT licensed](LICENSE).
