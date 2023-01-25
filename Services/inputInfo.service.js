const inputInfoExports = require("../Models/InputInfo");


exports.createInputInfoService = async (data) => {
  const result = await inputInfoExports.create(data);
  return result;
}


exports.getInputInfoService = async (query) => {
    const result = await inputInfoExports.find(query);
    return result;
  };