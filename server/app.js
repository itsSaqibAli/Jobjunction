const express = require("express");
const morgan = require("morgan"); //a middleware that logs requests onto the console
const app = express();
const helmet = require("helmet"); //adds additional HTTP headers
const mongoSanitize = require("express-mongo-sanitize"); //sanitize the mongo input
const xss = require("xss-clean"); //removes malicious code from input
const cors = require("cors"); //prevents cors blockage
const cookieParser = require("cookie-parser");

//CORS enabled
// app.all("/", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

// security HTTP headers
app.use(helmet());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// read data from the body into req.body, max is 10kb.
app.use(express.json({ limit: "10kb" })); //data from body shall be added to req

//sanitize against non SQL code injection
app.use(mongoSanitize());

//sanitize against xss
//will convert html diameters to entity;
app.use(xss());

//adding the request time to req object
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(cookieParser());

//development dependency, logs the recent request in the console
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to JobJunction server!",
  });
});

app.get("/test", async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "this is for testing functions",
  });
});

//defining routers
// todo: routes here
const userRouter = require("./routes/userRouters");
const companyRouter = require("./routes/companyRouters");

app.use("/user", userRouter);
app.use("/company", companyRouter);

//for undefined routs
const AppError = require("./util/appError");
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on Duck server!`, 404));
});

//in case of operational error this middleware function will be called to return relevant error message
const globalErrorController = require("./controllers/errorController");
app.use(globalErrorController);

module.exports = app;
