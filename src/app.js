const express = require('express');
const indexRoutes = require('./routes/index.routes');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
const morgan = require('morgan');

app.set('views', path.join(__dirname, 'views'));

app.engine(".hbs", engine({
  layoutDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");
//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//routes
app.use(indexRoutes);
//Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;