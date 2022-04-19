const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name = '') {
        super(name)
        this.name = name
        this.office = this.office
    }
   getRole() {
       return '?'
   }
}

Manager.prototype = Object.create(Employee.prototype)

module.exports = Manager