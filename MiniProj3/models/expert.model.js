const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CONFIG = require("../config/config");

const expertSchema = new Schema({
  name: String,
  contato: String,
  especialidade: String,
  links: [
    {
      types: String,
      url: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.expert, expertSchema);
