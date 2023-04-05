const eventsService = require("../services/events.service");

module.exports.getAllEvents = async (req, res) => {
  try {
    const { title, location, startDate, endDate, limit, page, email } =
      req.query;
    const result = await eventsService.getEvents();
    let paginationResult = result;

    if (email) {
      paginationResult = result.filter((item) => item.eventCreator === email);
    }
    if (title) {
      paginationResult = result.filter((item) =>
        item.eventTitle.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (location) {
      paginationResult = result.filter(
        (item) => item.eventLocation === location
      );
    }

    if (page || limit) {
      paginationResult = result.slice(
        ((page ? page : 1) - 1) * (limit ? limit : 10),
        (page ? page : 1) * (limit ? limit : 10)
      );
    }

    res.status(200).json({
      success: true,
      message: "Events Successfully Found!",
      pageLength: Math.ceil(result.length / (limit ? limit : 10)),
      data: paginationResult,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Events Couldn't Found!",
      error: error.message,
    });
  }
};

module.exports.getSpecificEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await eventsService.getSpecificEvents(id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Events Successfully Found!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Event Found!",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "No Event Found!",
      error: error.message,
    });
  }
};

module.exports.createEvent = async (req, res) => {
  try {
    const result = await eventsService.createNewEvents(req.body);

    res.status(200).json({
      success: true,
      message: "Event Inserted Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event Couldn't Insert!",
      error: error.message,
    });
  }
};

module.exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await eventsService.patchEvent(id, req.body);
    res.status(200).json({
      success: true,
      message: "Event Updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event Couldn't Updated",
      error: error.message,
    });
  }
};

module.exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await eventsService.deleteEvent(id);
    res.status(200).json({
      success: true,
      message: "Event Successfully Deleted!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event Couldn't Be Deleted!",
      error: error.message,
    });
  }
};
