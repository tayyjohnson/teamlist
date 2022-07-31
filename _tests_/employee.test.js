const Employee = require('../lib/Employee');
const employee = new Employee('Megan', '25', 'megan@work.net');
// jest.mock('.lib/Employee');

//test to see if we a receiving the proper information
test ('get the value from the new employee object', ()=> {
    expect(employee.name).toBe('Megan');
    expect(employee.id).toBe('25');
    expect(employee.email).toBe('megan@work.net');
});

//test each method to ensure that the correct information is being returned
test('test to see if we receive the name from getName()', () => {
    expect(employee.getName()).toBe('Megan');
});

test('test to see if we receive the id # from getId()', () => {
    expect(employee.getId()).toBe('25');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(employee.getEmail()).toBe('megan@work.net');
});

test('test to see if we receive the role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});