const userModel = require("../model/user.model");

module.exports.getSpecificUser = async (id) => {
  const result = await userModel.findById(id);
  return result;
};

module.exports.createOrUpdateUser = async (data) => {
  const { userEmail } = data;
  const findUser = await userModel.findOne({ userEmail });
  if (!findUser) {
    const result = await userModel.create(data);
    return result;
  } else {
    const _id = findUser._id;
    const result = await userModel.updateOne({ _id }, data);
    return result;
  }
};
