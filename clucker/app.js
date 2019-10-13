const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const ejs = require('ejs');
const cluckRouter = require("./routes/cluckRouter");
const rootRouter = require("./routes/rootRouter");
const app = express();


app.set("view engine", "ejs");

console.log('__dirname: ', __dirname);

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger("dev"));


app.use(express.urlencoded({
  extended: true
}));

app.use(cookieParser());

function setCookies(req, res, next) {

  const username = req.cookies.username;

  res.locals.loggedInUserName = username || '';

  console.log('res: ', res.locals.loggedInUserName);
  next();
}

app.use(setCookies);


app.use(rootRouter);
app.use(cluckRouter);

// PORT
const PORT = 3000;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
    console.log(`LISTENING ON ${ADDRESS}: ${PORT}`);
});