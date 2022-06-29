class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName
        this.id = id
        this.email = email
    }
    getEmployeeName() {
        return employeeName
    }

    getId() {
        return id
    }
    
    getEmail() {
        return email
    }
    
    // Returns 'Employee'
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee

