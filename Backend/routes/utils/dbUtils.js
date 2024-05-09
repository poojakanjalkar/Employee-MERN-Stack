const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(
    "mongodb+srv://poojakanjalkar:D2rv7LeVtCfyAYga@cluster0.pb18iyy.mongodb.net/employee",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to the database");
  });
};
module.exports = { connectToDB };
