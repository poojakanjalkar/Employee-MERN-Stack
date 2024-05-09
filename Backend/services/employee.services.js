// services/employeeService.js
const Employee = require("../model/employee.model");

const getAllEmployees = async () => {
  return await Employee.find();
};

const createEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

const getEmployeeById = async (employeeId) => {
  return await Employee.findById(employeeId);
};

const updateEmployee = async (employeeId, employeeData) => {
  return await Employee.findByIdAndUpdate(employeeId, employeeData, {
    new: true,
  });
};

const deleteEmployee = async (employeeId) => {
  return await Employee.findByIdAndDelete(employeeId);
};

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
