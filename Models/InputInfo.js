const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema.Types;
// const validator = require("validator");

const inputInfo = mongoose.Schema(
  {
    email: {
      type: String,
      
    },

    Name: {
      type: String,
      
    },

    Phone: {
      type: String,
     
    },

    date:{
        type: String
    }
  },

  {
    timestamps: true,
  }
);

const inputInfoExports = mongoose.model(
  "InputInfo",
  inputInfo
);
module.exports = inputInfoExports;