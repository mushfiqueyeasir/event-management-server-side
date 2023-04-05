const eventsModel = require("../model/event.model");
const eventsService = require("../services/events.service");
module.exports.viewCount = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await eventsModel.findById(id);
    await eventsService.patchEvent(id, { eventView: result.eventView + 1 });
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event Couldn't Updated",
      error: error.message,
    });
    next();
  }
};
