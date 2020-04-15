const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer")

const writeFileAsync = util.promisify(fs.writeFileSync);

async function promptUser() {
    
        return inquirer.prompt ([
            {
                type: "input",
                message: "Title?",
                name: "title"
            },
            {
                type: "input",
                message: "Description?",
                name: "description"
            },
            {
                type: "input",
                message: "Installation",
                name: "installation"
            },
            {
                type: "input",
                message: "Usage",
                name: "usage"
            },
            {
                type: "list",
                message: "License",
                name: "license",
                choices: ["Apache","MIT","Mozilla"],
                default: " "
            },
            {
                type: "input",
                message: "Contributors",
                name: "contributors"
            },
            {
                type: "input",
                message: "Tests",
                name: "tests"
            },
            {
                type: "input",
                message: "Questions",
                name: "questions"
            }            
          ]);
   
   
}
function generateHTML(answers){};                                           
promptUser()
.then(function (answers) {
    const formatAnswers = generateHTML(answers);
   return writeFileAsync('index.html', answers)
.then(function() {
    console.log("Successfully wrote to index.html");
  })
.catch(function(err) {
    console.log(err);
  });
});


