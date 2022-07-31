//the information we want to collect
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //how we will return the input
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    //list the employees role
    getRole() {
        return 'Employee';
    }
};






module.exports = Employee;