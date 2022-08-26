//When npm run test is ran in terminal, these parameters are tested to make sure they pass

const Manager = require('../lib/Manager');
const manager = new Manager('Elena', '21', 'elena@work.net', '1');

test ('get the value from the new manager object', ()=> {
    expect(manager.name).toBe('Elena');
    expect(manager.id).toBe('21');
    expect(manager.email).toBe('elena@work.net');
    expect(manager.officeNumber).toBe('1')
});

test('test to see if we receive the name from getName()', () => {
    expect(manager.getName()).toBe('Elena');
});

test('test to see if we receive the id # from getId()', () => {
    expect(manager.getId()).toBe('21');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(manager.getEmail()).toBe('elena@work.net');
});

test('test to see if we receive the office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('1');
});

test('test to see if we receive the role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});