const sortByAgeDescending = (a, b) => a.id < b.id
const filterWithAge = a => a.id != undefined && a.id != null
const filterWithoutAge = a => a.id === undefined || a.id === null
const sortByAgeAscending = (a, b) => a.id > b.id

const employeeSorter = (sorter, filter, withoutFilter) => {
    let sortedEmployees = Object.values(getEmployeeList(employeeList));
    let employeeWithoutAge = sortedEmployees.filter(withoutFilter)
    sortedEmployees = sortedEmployees.filter(filter).sort(sorter)
    sortedEmployees = sortedEmployees.concat(employeeWithoutAge);
    renderEmployee(sortedEmployees);
    setState(sortedEmployees);
}

const sortDescending = () => {
    employeeSorter(sortByAgeDescending, filterWithAge, filterWithoutAge)
}
const sortAscedning = () => {
    employeeSorter(sortByAgeAscending, filterWithAge, filterWithoutAge)
}

