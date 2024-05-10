const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employee.route");
const { connectToDB } = require("./routes/utils/dbUtils");
const app = express();
// Enable CORS for all origins
app.use(cors());
app.use(express.json());
app.use("/employees", employeeRoutes);

app.listen(3000, () => {
  console.log("server started");
  connectToDB();
});
