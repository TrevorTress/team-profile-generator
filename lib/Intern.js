const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return school
    }

   getRole() {
       return 'Intern'
    }
}

Intern.prototype = Object.create(Employee.prototype)

module.exports = Intern