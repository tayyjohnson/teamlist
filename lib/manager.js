// Indicates that the manager, engineer & intern are employees & pulls what info is to be returned from the employee.js file
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    super(name, id, email);
//Adds info that isn't in employee.js
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