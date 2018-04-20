
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

const setState = (list) =>{
    employeeList = list;
    return employeeList;
}
const getEmployeeList = (employeeList) =>{
    return employeeList;
}

