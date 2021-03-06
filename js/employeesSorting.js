const sortByAgeDescending = (a, b) => a.id < b.id
const filterWithAge = a => a.id != undefined && a.id != null
const filterWithoutAge = a => a.id === undefined || a.id === null
const sortByAgeAscending = (a, b) => a.id > b.id

const sortByNameAscending = (a, b) => a.firstName > b.firstName
const sortByNameDescending = (a, b) => b.firstName > a.firstName
const filterWithName = a => a.firstName != undefined && a.firstName != null
const filterWithoutName = a => a.firstName === undefined || a.firstName === null

const sortByNameOfCompanyAscending = (a, b) => a.company > b.company
const sortByNameOfCompanyDescending = (a, b) => b.company > a.company
const filterWithNameOfCompany = a => a.company != undefined && a.company != null
const filterWithoutNameOfCompany = a => a.company === undefined || a.company === null

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

const sortByFirstNameAlphabetically = () => {
    employeeSorter(sortByNameAscending, filterWithName, filterWithoutName)
}
const sortByFirstNameNonAlphabetically = () => {
    employeeSorter(sortByNameDescending, filterWithName, filterWithoutName)
}

const sortByFirstNameOfCompanyAlphabetically = () => {
    employeeSorter(sortByNameOfCompanyAscending, filterWithNameOfCompany, filterWithoutNameOfCompany)
}
const sortByFirstNameOfCompanyNonAlphabetically = () => {
    employeeSorter(sortByNameOfCompanyDescending, filterWithNameOfCompany, filterWithoutNameOfCompany)
}

const sortByDateAscending = () => {
    let sortedEmployees = getEmployeeList(employeeList);
    let sortedDates = sortedEmployees.sort((a, b) => {

        a.dateOfBirth = a.dateOfBirth.split('.').reverse().join('/');
        b.dateOfBirth = b.dateOfBirth.split('.').reverse().join('/');
        if (a.dateOfBirth < b.dateOfBirth) {
            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return -1;
        } else if (a.dateOfBirth > b.dateOfBirth) {
            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return 1;
        } else {
            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return 0;
        }
    });
    renderEmployee(sortedEmployees);
    setState(sortedEmployees);
}
const sortByDateDescending = () => {
    let sortedEmployees = getEmployeeList(employeeList);
    let sortedDates = sortedEmployees.sort((a, b) => {

        a.dateOfBirth = a.dateOfBirth.split('.').reverse().join('/');
        b.dateOfBirth = b.dateOfBirth.split('.').reverse().join('/');
        if (a.dateOfBirth > b.dateOfBirth) {

            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return -1;
        } else if (a.dateOfBirth < b.dateOfBirth) {
            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return 1;
        } else {
            a.dateOfBirth = a.dateOfBirth.split('/').reverse().join('.');
            b.dateOfBirth = b.dateOfBirth.split('/').reverse().join('.');
            return 0;
        }
    });
    renderEmployee(sortedEmployees);
    setState(sortedEmployees);
}
