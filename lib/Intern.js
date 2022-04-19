const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name = '') {
        super(name)
        this.name = name
        //this.school = school
    }

    getSchool() {
        return school
    }

   getRole() {
       return '?'
    }
}

module.exports = Intern