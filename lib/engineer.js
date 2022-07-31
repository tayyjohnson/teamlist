//use data from the employee.js file
const Employee = require('./Employee');

//using this is saying- use the logic from employee and allows you to add to it
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
    //call to employee.js info
    super(name, id, email);

    //add on information needed that isn't included in employee.js
    this.gitHub = gitHub;
    };

    getGitHub() {
        return this.gitHub;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;