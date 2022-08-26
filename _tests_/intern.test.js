//When npm run test is ran in terminal, these parameters are tested to make sure they pass

const Intern = require('../lib/Intern');
const intern = new Intern('Damon', '28', 'damon@work.net', 'Mystic Falls High School');

test ('get the value from the new intern object', ()=> {
    expect(intern.name).toBe('Damon');
    expect(intern.id).toBe('28');
    expect(intern.email).toBe('damon@work.net');
    expect(intern.school).toBe('Mystic Falls High School')
});

test('test to see if we receive the name from getName()', () => {
    expect(intern.getName()).toBe('Damon');
});

test('test to see if we receive the id # from getId()', () => {
    expect(intern.getId()).toBe('28');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(intern.getEmail()).toBe('damon@work.net');
});

test('test to see if we receive the school username from getSchool()', () => {
    expect(intern.getSchool()).toBe('Mystic Falls High School');
});

test('test to see if we receive the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});