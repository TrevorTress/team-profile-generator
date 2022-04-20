const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        //this.name = name
        this.office = office
    }
   getRole() {
       return '?'
   }
}

Manager.prototype = Object.create(Employee.prototype)

module.exports = Manager