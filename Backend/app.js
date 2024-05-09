const express = require("express");

const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employee.route");
const { connectToDB } = require("./routes/utils/dbUtils");
const app = express();
app.use(express.json());
app.use("/employees", employeeRoutes);

app.listen(3000, () => {
  console.log("server started");
  connectToDB();
});
