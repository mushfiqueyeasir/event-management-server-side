const userService = require("../services/user.service");

module.exports.getSpecificUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getSpecificUser(id);
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

module.exports.userCreateOrUpdate = async (req, res) => {
  try {
    const result = await userService.createOrUpdateUser(req.body);
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
