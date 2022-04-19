const Intern = require('../lib/Intern')

test('creates an employee object', () => {
    const intern = new Intern('Dave')
  
    expect(intern.name).toBe('Dave')
    // expect(employee.id).toEqual(expect.any(Number))
    // expect(employee.email).toEqual(expect.any(String))
})