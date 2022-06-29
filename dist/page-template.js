// connection to class files
const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

const htmlGenerator = rosterData => {
    //console.log(roster)
    const mappedData = rosterData.map(element => {
        if (element.getRole() === 'Manager') {
            let employeeBox = 
            `
            <div class="employee-box">
                <h2>${element.employeeName}</h2>
                <h3>${element.getRole()}</h3>
                
                <div class="info-box">
                    <p id="id">
                        Employee ID: ${element.id}
                    </p>
                    <p id="email">
                        Email: ${element.email}
                    </p>
                    <p id="officeNumber">
                        Office Number: ${element.officeNumber}
                    </p>
                    
                </div>
            </div>
            `
            console.log('map item:  ', employeeBox)
            return employeeBox
        }

        if (element.getRole() === 'Engineer') {
            let employeeBox = 
            `
            <div class="employee-box">
                <h2>${element.employeeName}</h2>
                <h3>${element.getRole()}</h3>
                
                <div class="info-box">
                    <p id="id">
                        Employee ID: ${element.id}
                    </p>
                    <p id="email">
                        Email: ${element.email}
                    </p>
                    <p id="github">
                        Github Account: ${element.github}
                    </p>
                    
                </div>
            </div>
            `
            console.log('map item:  ', employeeBox)
            return employeeBox
        }

        if (element.getRole() === 'Intern') {
            let employeeBox = 
            `
            <div class="employee-box">
                <h2>${element.employeeName}</h2>
                <h3>${element.getRole()}</h3>
                
                <div class="info-box">
                    <p id="id">
                        Intern ID: ${element.id}
                    </p>
                    <p id="email">
                        Email: ${element.email}
                    </p>
                    <p id="school">
                        School: ${element.school}
                    </p>
                    
                </div>
            </div>
            `
            return employeeBox
        }
    });

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="./style.css">
        </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main>
                ${mappedData.join('')}
            </main>

        </body>
        </html>
    `
}

module.exports = htmlGenerator