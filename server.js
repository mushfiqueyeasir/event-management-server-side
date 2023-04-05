const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

// database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Event Management  Database Connected");
  });

// server port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Event Management App Listening On Port: ${port}`);
});
