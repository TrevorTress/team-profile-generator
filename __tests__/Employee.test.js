const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Dave', 111, 'dave@dave')
  
    expect(employee.employeeName).toBe('Dave')
    expect(employee.id).toEqual(111)
    expect(employee.email).toEqual('dave@dave')
})