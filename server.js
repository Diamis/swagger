const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const app = express();

require("dotenv").config();
const ENV = process.env;
const PORT = ENV.APP_PORT;
const HOST = ENV.APP_HOST;

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(PORT || 3000, () => {
  console.log(`Listening on port http://${HOST}:${PORT}`);
});
