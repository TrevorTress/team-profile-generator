const Engineer = require('../lib/Engineer')

test('creates an employee object', () => {
    const engineer = new Engineer('Dave')
  
    expect(engineer.name).toBe('Dave')
    // expect(employee.id).toEqual(expect.any(Number))
    // expect(employee.email).toEqual(expect.any(String))
})