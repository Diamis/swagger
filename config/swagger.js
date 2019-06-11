"use strict";
require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const { description, version } = require("../package.json");

const ENV = process.env;
const PORT = ENV.REST_APP_PORT;
const HOST = ENV.REST_APP_HOST;

const options = {
  swaggerDefinition: {
    info: {
      description,
      version,
      title: ENV.APP_NAME
    },
    host: `${HOST}`,
    basePath: "/",
    produces: ["application/json"],
    schemes: ["http", "https"]
  },
  apis: ["./docs/**/*.yaml"]
};

module.exports = swaggerJSDoc(options);
