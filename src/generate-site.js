const fs = require('fs');
const path = require('path');
const html = []


const generateTeam = (employeeStuff) => {
    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header"> 
            ${manager.getName()} <br/>
                <div class="workerTitle">Manager</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${manager.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>`; 
         
    }

    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header"> 
            ${engineer.getName()} <br/>
                <div class="workerTitle">Engineer</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"> Email: <span id='email'><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </div>`;
             
    };

    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header"> 
            ${intern.getName()} <br/>
                <div class="workerTitle">Intern</div>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>`;
         
    }
    html.push(employeeStuff.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));

    html.push(employeeStuff.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)));

    html.push(employeeStuff.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)));

    //Joins HTML 
    return html.join('');

}



module.exports = employeeStuff => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel='stylesheet' href='../dist/style.css'/>
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1> Team List </h1>
    </header>
    <main>
    ${generateTeam(employeeStuff)}
    </main>
</body>
<script src="../src/generate-site.js"></script>
</html>
    `
}