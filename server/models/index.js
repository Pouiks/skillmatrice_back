const config = require("../config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.db.url;
db.users = require("./user.model.js")(mongoose);

module.exports = db;