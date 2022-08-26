//When npm run test is ran in terminal, these parameters are tested to make sure they pass

const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jason', '56', 'jason@work.net', 'JasonHub');

test ('get the value from the new engineer object', ()=> {
    expect(engineer.name).toBe('Jason');
    expect(engineer.id).toBe('56');
    expect(engineer.email).toBe('jason@work.net');
    expect(engineer.gitHub).toBe('JasonHub')
});

test('test to see if we receive the name from getName()', () => {
    expect(engineer.getName()).toBe('Jason');
});

test('test to see if we receive the id # from getId()', () => {
    expect(engineer.getId()).toBe('56');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('jason@work.net');
});

test('test to see if we receive the GiHub username from getGitHUb()', () => {
    expect(engineer.getGitHub()).toBe('JasonHub');
});

test('test to see if we receive the role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});