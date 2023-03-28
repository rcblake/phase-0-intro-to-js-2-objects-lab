
const employee = {
    'Sam': {
        ['streetAddress']: '11 Broadway',
    }
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

updateEmployeeWithKeyAndValue('Sam', 'steetAddress', '11 Broadway')

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue('Sam', 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj
}

deleteFromEmployeeByKey('Sam', 'streeAddress', '')


function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
    employee[key] = value;
    return employee
}

destructivelyDeleteFromEmployeeByKey('','','')