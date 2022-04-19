const Manager = require('../lib/Manager')

test('creates an employee object', () => {
    const manager = new Manager('Dave')
  
    expect(manager.name).toBe('Dave')
    //expect(manager.id).toEqual(expect.any(Number))
    //expect(manager.email).toEqual(expect.any(String))
    expect(manager.office).toEqual(expect.any(Number))
})