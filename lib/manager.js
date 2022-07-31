//use data from the employee.js file
const Employee = require('./Employee');

//using this is saying- use the logic from employee and allows you to add to it
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    //call to employee.js info
    super(name, id, email);

    //add on information needed that isn't included in employee.js
    this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;