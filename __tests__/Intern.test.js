const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Dave', 111, 'dave@dave', 'MSU')
  
    expect(intern.employeeName).toBe('Dave')
    expect(intern.id).toEqual(111)
    expect(intern.email).toEqual('dave@dave')
    expect(intern.school).toEqual('MSU')
})