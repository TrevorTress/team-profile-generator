class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return name
    }

    getId() {
        return id
    }
    
    getEmail() {
        return email
    }
    
    // Returns 'Employee'
    getRole() {
        return 'employee'
    }
}

module.exports = Employee

