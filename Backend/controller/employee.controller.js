// controllers/employeeController.js
const employeeService = require("../services/employee.services");

const getAllEmployees = async (req, res) => {
  const employees = await employeeService.getAllEmployees();
  res.json(employees);
};

const createEmployee = async (req, res) => {
  const employeeData = req.body;
  const file = req.file;
  const newEmployee = await employeeService.createEmployee(employeeData);
  res.status(201).json(newEmployee);
};

const getEmployeeById = async (req, res) => {
  const employeeId = req.params.id;
  const employee = await employeeService.getEmployeeById(employeeId);
  res.json(employee);
};

const updateEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const employeeData = req.body;
  const updatedEmployee = await employeeService.updateEmployee(
    employeeId,
    employeeData
  );
  res.json(updatedEmployee);
};

const deleteEmployee = async (req, res) => {
  const employeeId = req.params.id;
  await employeeService.deleteEmployee(employeeId);
  res.sendStatus(204);
};

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
