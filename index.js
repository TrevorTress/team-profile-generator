const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./dist/page-template');

// connection to class files
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// this roster gets employees pushed to it from the prompt functions
const employeeRoster = []

// arrays of questions to clean up prompts
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
        name: 'officeNumber',
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
        message: "What school is the intern attending?"}
]

// assumes user is the manager and collects their data to begin
function promptUser() {
    inquirer.prompt(managerQuestions)
    // destructure manager data from the prompt object
    .then(({ name, id, email, officeNumber }) => {
        // create a manager w/ that data
        const manager = new Manager(name, id, email, officeNumber)

        // push manager to the employee roster and ask them about more employees
        employeeRoster.push(manager)
        console.log(employeeRoster)
        employeeAddOption()
    })    
}

// ask engineer questions
function promptEngineer() {
    inquirer.prompt(engineerQuestions)
    // destructure that data
    .then(({ name, id, email, github }) => {
        // create an engineer with it
        const engineer = new Engineer(name, id, email, github)

        // push that engineer to the roster and restart the add function
        employeeRoster.push(engineer)
        console.log(employeeRoster)
        employeeAddOption()
    })
}

// ask intern questions
function promptIntern() {
    inquirer.prompt(internQuestions)
    // destructure that data
    .then(({ name, id, email, school }) => {
        // create an intern with it
        const intern = new Intern(name, id, email, school)

        // push that intern to the roster and restart the add function
        employeeRoster.push(intern)
        //console.log(employeeRoster)
        employeeAddOption()
    })
}

// triggered at the end of each employee creation
function employeeAddOption() {
    // question variables only for prompt clean-up
    let question = 
    {type: 'list', name: 'addition', message: 'Do you want to add an employee to your team?', choices: ['Yes', 'No']}

    let choiceQuestion =
    {type: 'list', name: 'choice', message: 'What kind of employee?', choices: ['Engineer', 'Intern']}

    // ask whether user wants to add another employee
    inquirer.prompt(question)
    .then(({ addition }) => {
        // if yes, ask them what kind
        if (addition === 'Yes') {
            inquirer.prompt(choiceQuestion)
            // either input triggers its corresponding function
            .then(({ choice }) => {
                if (choice == 'Intern') {
                    promptIntern()
                }
                if (choice == 'Engineer') {
                    promptEngineer()
                }
            })
        }
        // if no, run function to apply data to html
        if (addition === 'No') {
            // uses page-template js file to return a variable for fs to use
            const pageHTML = generatePage(employeeRoster);

            fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err);
            console.log('Page created! Check out index.html in this directory to see it!');
            });
        }
    })
}

promptUser()

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab