// Indicates that the manager, engineer & intern are employees & pulls what info is to be returned from the employee.js file
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
    super(name, id, email);

    //Adds info that isn't in employee.js
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