let employee = {
    name: "whatever",  
    streetAddress: "whereever"
}

function updateEmployeeWithKeyAndValue(employee, key, value) { 
    let updated = {...employee}
    updated[key] = value;
    return updated;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) { 
    let employee2 = {...employee}
    delete employee2[key];
    return employee2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
