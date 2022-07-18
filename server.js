require("dotenv").config();
const express = require("express");
const routes = require("./routes/mailRoute");
const { json } = require("express");
const server = express();

server.use(json());
server.use("/", routes);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))