// const employeeLisss = require('/data.json')
// console.log(employeeLisss);
    const employeeList = [
        {
        "id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "dateOfBirth": "1.7.1990 11:35",
        "company": "XSolve",
        "note": 90
      },
]
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
