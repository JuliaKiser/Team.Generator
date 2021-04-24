const fs = require('fs');
const inquirer = require("inquirer");

const createTeam = require("./src/page-template");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// TODO: Create an array of questions for user input
const managerInput = [
    {
        type: 'input',
        message: 'What is your managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Whats the id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the office number?',
        name: 'officeNumber',
    }
];


const internInput = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'Whats the id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email?',
        name: 'email',
    },
    {
        type: "input",
        message: "What is your school?",
        name: "school"
    }
]

const engineerInput = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: 'Whats the id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the email?',
        name: 'email',
    },
    {
        type: "input",
        message: "What is your GitHub account name?",
        name: "github"
    }
]

const team = [];

function addEngineer() {
    inquirer.prompt(engineerInput).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        addEmployee();
    })

}

function addIntern() {
    inquirer.prompt(internInput).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addEmployee();
    })

}


function addEmployee() {
    const employeePrompt = [{
        type: 'list',
        message: 'What type of employee do you want to add?',
        name: 'memberChoice',
        choices: ["Intern", "Engineer", "No More Employees"]
    }];

    inquirer.prompt(employeePrompt)
        .then(answer => {
            switch (answer.memberChoice) {
                case "Intern":
                    addIntern()
                    break;

                case "Engineer":
                    addEngineer()
                    break;

                default:
                    writeToFile("./output/index.html", team);
            }
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, createTeam(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function generateTeam() {
    inquirer
        .prompt(managerInput)
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager);
            addEmployee();
        }
        )
}

// Function call to initialize app
generateTeam();