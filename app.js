const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateSite = require('./src/generate-site');
const teamMembers = [];

//list that options that the creators has for their team
const siteOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select the team member you would like to add:',
            choices: ['add a manager', 'add an engineer', 'add an intern', 'finish building my team']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            //after a case is chosen, the user will be directed to the associated function
            case 'add a manager':
                managerInfo();
                break;
            case 'add an engineer':
                engineerInfo();
                break;
            case 'add an intern':
                internInfo();
                 break;
            default:
                //if the user is done entering information then the page will run using the create page function at the bottom of this code
                createPage();
        };
    });
};

//function to collect info for a manager
const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name : 'name',
            message: "What is the manager's name?",
            validate : name => {
                if (name) {
                    return true;
                }else {
                    console.log('Please enter manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'employeeId',
            message: "What is the manager's employee ID?",
            validate : employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter manager ID #!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'email',
            message: "What is the manager's email address?",
            validate : email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter manager email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'officeNumber',
            message: "What is the manager's office number?",
            validate : officeNumber => {
                if (officeNumber) {
                    return true;
                }else {
                    console.log('Please enter manager office #!');
                    return false;
                }
            }
        },
    ])
    .then(input => {
        console.log(input);
        const manager = new Manager(input.name, input.employeeId, input.email, input.officeNumber);
        teamMembers.push(manager);
        //send the user back to the main menu
        siteOptions();
    });
};

//function to collect info for an engineer
const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name : 'name',
            message: "What is the engineer's name?",
            validate : name => {
                if (name) {
                    return true;
                }else {
                    console.log('Please enter engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'employeeId',
            message: "What is the engineer's employee ID?",
            validate : employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter engineer ID #!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'email',
            message: "What is the engineer's email address?",
            validate : email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter engineer email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'gitHub',
            message: "What is the engineer's GitHub username?",
            validate : gitHub => {
                if (gitHub) {
                    return true;
                }else {
                    console.log("Please enter engineer's GitHub username!");
                    return false;
                }
            }
        },
    ])
    .then(input => {
        console.log(input);
        const engineer = new Engineer(input.name, input.employeeId, input.email, input.gitHub);
        teamMembers.push(engineer);
        //returns user to the main menu
        siteOptions();
    });
};

//function to collect info for an intern
const internInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name : 'name',
            message: "What is the intern's name?",
            validate : name => {
                if (name) {
                    return true;
                }else {
                    console.log('Please enter intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'employeeId',
            message: "What is the intern's employee ID?",
            validate : employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter intern ID #!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'email',
            message: "What is the intern's email address?",
            validate : email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter intern email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name : 'school',
            message: "What is the intern's school name?",
            validate : school => {
                if (school) {
                    return true;
                }else {
                    console.log("Please enter intern's school name!");
                    return false;
                }
            }
        },
    ])
    .then(input => {
        console.log(input);
        const intern = new Intern(input.name, input.employeeId, input.email, input.school);
        teamMembers.push(intern);
        //returns user to the main menu
        siteOptions();
    });
};

//uses above info to create the finished page
function createPage () {
    fs.writeFileSync('teamPage.html', generateSite(managerInfo, engineerInfo, internInfo));
    console.log('Your team page has been created!'); 
};

//call for the main menu function to be run
siteOptions();