// routes/employeeRoutes.js
const express = require("express");
const router = express.Router();

const { validateData } = require("../middleware/file");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const employeeController = require("../controller/employee.controller");

router.get("/", employeeController.getAllEmployees);
router.post(
  "/",
  upload.single("profile"),
  validateData,
  employeeController.createEmployee
);
router.get("/:id", employeeController.getEmployeeById);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
