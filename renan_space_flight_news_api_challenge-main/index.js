const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const connectDatabase = require("./src/services/db");

const indexRouter = require("./src/routes/index");
const articlesRouter = require("./src/routes/articles");
const usersRouter = require("./src/routes/users");

const app = express();
require("dotenv").config();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);
connectDatabase();
app.listen(4000, () => console.log("servidor rodando na porta 4000"));
