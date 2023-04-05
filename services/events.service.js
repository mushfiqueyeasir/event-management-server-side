const eventsModel = require("../model/event.model");

module.exports.getEvents = async () => {
  const result = await eventsModel.find({});
  return result;
};
module.exports.getSpecificEvents = async (id) => {
  const result = await eventsModel.findById(id);
  return result;
};

module.exports.createNewEvents = async (data) => {
  const result = await eventsModel.create(data);
  return result;
};

exports.patchEvent = async (id, patchData) => {
  const result = await eventsModel.updateOne({ _id: id }, patchData);
  return result;
};

exports.deleteEvent = async (id) => {
  const result = await eventsModel.findByIdAndDelete(id);
  return result;
};
