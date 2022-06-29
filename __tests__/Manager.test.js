const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager('Dave', 111, 'dave@dave', 222)
  
    expect(manager.employeeName).toBe('Dave')
    expect(manager.id).toEqual(111)
    expect(manager.email).toEqual('dave@dave')
    expect(manager.officeNumber).toEqual(222)
})