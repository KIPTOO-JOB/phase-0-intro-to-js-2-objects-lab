// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "12 Broadway",
};
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee,
    [key]: value,
  };
};
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};
const deleteFromEmployeeByKey = (employee, key) => {
  const newObject = { ...employee };
  delete newObject[key];
  return newObject;
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
