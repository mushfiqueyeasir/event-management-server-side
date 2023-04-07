const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandeller");
const bodyParser = require("body-parser");

// thard party middleWare
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Increase the maximum request size to 10MB
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

// route
const eventsRoutes = require("./routes/v1/events.routes");

app.use("/api/v1/events", eventsRoutes);

app.get("/", (req, res) => {
  res.send("<center><h1>Event Management Server Is Connected!!</h1></center>");
});

app.all("*", (req, res) => {
  res.send("no route found");
});

module.exports = app;
