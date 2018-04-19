
renderIDLabel = (ID) => {
    if (ID === null || ID === undefined || isNaN(ID) || ID <= 0) {
        return "";
    }
    return ID;
}
renderNameLabel = (employee) => {
    if (
        (employee === undefined) ||
        (employee === undefined || employee.firstName === undefined)
    )
    return employee;
}