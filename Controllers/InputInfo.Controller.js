const { createInputInfoService, getInputInfoService } = require("../Services/inputInfo.service");


exports.createInpuInfo = async (req, res, next) => {
    try {
      const result = await createInputInfoService(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Data inserted successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: "Data couldn't insert",
        error: error.message,
      });
    }
  };

  exports.getInputInfo = async (req, res, next) => {
    try {
     
      const result = await getInputInfoService();
      res.status(200).json({
        status: "success",
        message: "Data get successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: "Data couldn't get",
        error: error.message,
      });
    }
  };