const express = require("express");

const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employee.route");
const app = express();

app.use(employeeRoutes);

app.listen(3000, () => {
  console.log("server started");
});
