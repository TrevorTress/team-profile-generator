const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Dave', 111, 'email')
  
    expect(employee.name).toBe('Dave')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})