const employee = {
    name: "Alex",
    streetAddress: "123 Main St",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key] : value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newThing = {...employee}
    delete newThing[key];
    return newThing;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newThing = employee
    delete newThing[key];
    return newThing;
}