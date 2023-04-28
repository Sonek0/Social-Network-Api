const mongoose= require("mongoose")

mongoose.connect(
process.env.MONGODB_URI || "mongodb://0.0.1:27017/socailmedia"
);

module.exports = mongoose.connection;