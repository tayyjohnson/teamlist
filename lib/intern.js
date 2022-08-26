// Indicates that the manager, engineer & intern are employees & pulls what info is to be returned from the employee.js file
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
    super(name, id, email);

   //Adds info that isn't in employee.js
    this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;