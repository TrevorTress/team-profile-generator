const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', 111, 'dave@dave', 'www.github.dave.com')
  
    expect(engineer.employeeName).toBe('Dave')
    expect(engineer.id).toEqual(111)
    expect(engineer.email).toEqual('dave@dave')
    expect(engineer.github).toEqual('www.github.dave.com')
})