const express = require("express");
const cors = require("cors");
const getUser = require("../middleware/getUser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionConfig = require("./session.config");

const configServer = (app) => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
  );
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(getUser);
};
module.exports = configServer;
