const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//function to generate team html
function generateSite (manager, engineer, intern) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <title>Team Roster</title>
</head>
<body>
    <header class="header">
        <h1>Hey Team!</h1>
    </header>
</body>
</html>`
}

const generateManager = manager => {
    let managerSection = `
    <div class="card">
        <div class="card-header"> 
        ${manager.name} <br/>
        Manager
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${manager.id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${manager.email}>${manager.email}</a></li>
            <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`;    
}

const generateEngineer = engineer => {
    let engineerSection = `
    <div class="card">
        <div class="card-header"> 
        ${engineer.name} <br/>
        Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${engineer.id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${engineer.email}>${engineer.email}</a></li>
            <li class="list-group-item"> GitHub Username: <a target="_blank" href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
        </ul>
    </div>`;    
};

const generateIntern = intern => {
    let internSection = `
    <div class="card">
        <div class="card-header"> 
        ${intern.name} <br/>
        Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${intern.id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${intern.email}>${intern.email}</a></li>
            <li class="list-group-item"> School: ${intern.school}</li>
        </ul>
    </div>`;    
}


module.export = generateSite;