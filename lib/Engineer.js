const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name = '') {
        super(name)
        this.name = name
        //this.github = github
    }

    getGithub() {
        return github
    }

   getRole() {
       return '?'
   }
}

Engineer.prototype = Object.create(Employee.prototype)

module.exports = Engineer