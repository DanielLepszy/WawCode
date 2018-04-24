const renderEmployee = () => {
    renderHtml(
        document.getElementsByClassName('fixed-table_body')[0],
        employeeList.reduce((html, employee) =>

            `${html}
            <tr >
                <td >${renderIDLabel(employee.id)}</td>
                <td >${renderNameLabel(employee.firstName)}</td>
                <td >${renderNameLabel(employee.lastName)}</td>
                <td >${renderNameLabel(employee.dateOfBirth)}</td>
                <td >${renderNameLabel(employee.company)}</td>
                <td >${renderNameLabel(employee.note)}</td>                
            </tr>`, '')
    );
    
}
const renderHtml = (parentElement, html) => parentElement.innerHTML = html;

const setState = (list) => {
    employeeList = list;
    return employeeList;
}
const getEmployeeList = (employeeList) => {
    return employeeList;
}
const getEmployee = () => {

    let currentEmployeeList = getEmployeeList(employeeList);
    const information = [];
    for (var i = 1; i <= 5; i++) {

        information[i] = document.getElementsByTagName("input")[i].value;
    }

    const data = {
        "id": (currentEmployeeList.length + 1),
        "firstName": information[1],
        "lastName": information[2],
        "dateOfBirth": information[3],
        "company": information[4],
        "note": information[5]
    }

    return data;
}



const onAddNewEployeeButtonClick = (event) => {
    let currentEmployeeList = getEmployeeList(employeeList);
    if (getEmployee().firstName.length === 0 || getEmployee().lastName.length === 0 &&
        getEmployee().dateOfBirth.length === 0 && getEmployee().company.length === 0 && getEmployee().note.length === 0) {
        alert('Please, complete information ! ')
    } else {
        currentEmployeeList.push(getEmployee());
        renderEmployee(currentEmployeeList);
        clearInputs();
        getPaginationTable();
        return setState(currentEmployeeList);
       
    }
    
}
const setValueOfID = () => {

    document.getElementsByTagName("input")[0].value = (employeeList.length + 1)
}
const clearInputs = () => {
    for (var i = 0; i <= 5; i++) {
        document.getElementsByTagName("input")[i].value = ""
    }
}
