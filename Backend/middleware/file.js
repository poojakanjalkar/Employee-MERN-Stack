const { employeeObject } = require("../validation/employee.validation");

const validateData = (req, res, next) => {
  req.body = JSON.parse(req.body.employeeData);
  console.log("++++++++", req.body);

  const { error } = employeeObject
    .prefs({ errors: { label: "key" } })
    .validate(req.body);

  if (error) {
    const errorMessage = error.details.map((e) => e.message).join(", ");
    return res.json({ message: errorMessage });
  }

  next();
};

module.exports = {
  validateData,
};
