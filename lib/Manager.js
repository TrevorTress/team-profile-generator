const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
       return 'Manager'
    }
}

Manager.prototype = Object.create(Employee.prototype)

module.exports = Manager