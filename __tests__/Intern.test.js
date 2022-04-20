const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Dave', 111, 'email')
  
    expect(intern.name).toBe('Dave')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
})