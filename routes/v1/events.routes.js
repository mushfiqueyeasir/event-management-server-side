const express = require("express");
const router = express.Router();

const eventsController = require("../../controllers/events.controller");
const { viewCount } = require("../../middleware/viewCount");

router
  .route("/")
  .get(eventsController.getAllEvents)
  .post(eventsController.createEvent);

router
  .route("/:id")
  .get(viewCount, eventsController.getSpecificEvent)
  .put(eventsController.updateEvent)
  .delete(eventsController.deleteEvent);

module.exports = router;
