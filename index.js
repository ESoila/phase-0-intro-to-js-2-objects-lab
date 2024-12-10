// Write your solution in this file!
const employee = {
    name: "Elizabeth",
    Street: "Kimana Amboseli Road",
}
function updateEmployeeWithKeyAndValue (employee, key,  value){
    return {...employee,
        [key]: value

    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,  value){
employee[key] = value;
return employee;

}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
// // { name: 'Eliza', streetAddress: '123 Main St' }

// const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "role", "Manager");
// console.log(updatedEmployee);
// // { name: 'Eliza', streetAddress: '123 Main St', role: 'Manager' }

// destructivelyUpdateEmployeeWithKeyAndValue(employee, "role", "Director");
// console.log(employee);
// // { name: 'Eliza', streetAddress: '123 Main St', role: 'Director' }

// const employeeAfterDeletion = deleteFromEmployeeByKey(employee, "role");
// console.log(employeeAfterDeletion);
// // { name: 'Eliza', streetAddress: '123 Main St' }

// destructivelyDeleteFromEmployeeByKey(employee, "role");
// console.log(employee);
// // { name: 'Eliza', streetAddress: '123 Main St' }
