//The info we want to collect
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    //Return
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };
    //Employee's Role
    getRole() {
        return 'Employee';
    }
};






module.exports = Employee;