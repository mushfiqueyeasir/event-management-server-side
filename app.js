const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorHandeller");

// thard party middleWare
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// route
const usersRoutes = require("./routes/v1/users.routes");
const eventsRoutes = require("./routes/v1/events.routes");

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/events", eventsRoutes);

app.get("/", (req, res) => {
  res.send("<center><h1>Event Management Server Is Connected!!</h1></center>");
});

app.all("*", (req, res) => {
  res.send("no route found");
});

module.exports = app;
