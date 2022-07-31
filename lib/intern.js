//use data from the employee.js file
const Employee = require('./Employee');

//using this is saying- use the logic from employee and allows you to add to it
class Intern extends Employee {
    constructor(name, id, email, school){
    //call to employee.js info
    super(name, id, email);

    //add on information needed that isn't included in employee.js
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