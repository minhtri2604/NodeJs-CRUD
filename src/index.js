const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

// connect to db
db.connect();

// import static file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride("_method"));

app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(morgan("combined"));

//Router
route(app);

app.listen(port);
