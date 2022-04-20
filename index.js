const inquirer = require('inquirer')

const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const employeeRoster = []

const managerQuestions = 
[   {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'office',
        message: "What is your office number?"
    }
]

const engineerQuestions = 
[   {
        type: 'text',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "Please provide a URL link to the engineer's github account:"
    }
]

const internQuestions = 
[   {
        type: 'text',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending?"
    }
]

function initialize() {
    promptUser()
}

function promptUser() {
    inquirer.prompt(managerQuestions)
    // destructure manager data from the prompt object
    .then(({ name, id, email, office }) => {
        const manager = new Manager(name, id, email, office)

        employeeRoster.push(manager)
        console.log(employeeRoster)
        employeeAddOption()
    })    
}

function employeeAddOption() {
    let question = 
    {type: 'list', name: 'addition', message: 'Do you want to add an employee to your team?', choices: ['Yes', 'No']}

    let choiceQuestion =
    {type: 'list', name: 'choice', message: 'What kind of employee?', choices: ['Engineer', 'Intern']}

    inquirer.prompt(question)
    .then(({ addition }) => {
        if (addition === 'Yes') {
            inquirer.prompt(choiceQuestion)
            .then(({ choice }) => {
                if (choice == 'Intern') {
                    promptIntern()
                }
                if (choice == 'Engineer') {
                    promptEngineer()
                }
            })
        } 
        if (addition === 'No') {
            console.info('awesome cool thanks')
        }
    })
}

function promptEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github)

        employeeRoster.push(engineer)
        console.log(employeeRoster)
        employeeAddOption()
    })
}

function promptIntern() {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school)

        employeeRoster.push(intern)
        console.log(employeeRoster)
        employeeAddOption()
    })
}

initialize()
// WHEN I select the engineer option
// THEN I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated