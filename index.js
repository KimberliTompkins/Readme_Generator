const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer")

const writeFileAsync = util.promisify(fs.writeFileSync);

async function promptUser() {
    
        return inquirer.prompt ([
            {
                type: "input",
                message: "Title",
                name: "title"
            },
            {
                type: "input",
                message: "Description",
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
function formatAnswers(answers){
    return `#Title 
    
${answers.title}\n
## Description
${answers.description}\n
##Table of Contents
    * Installation
    * usage
    * Credits
    * License
    * Tests
    * Questions\n
    
## Installation\n
${answers.installation}\n
## Usage\n
${answers.usage}\n
## Credits\n
${answers.contributors}\n
## License\n
${answers.license}\n
## Tests\n
${answers.tests}\n
## Questions\n
${answers.questions}`
};                                           
promptUser()
.then(function (answers) {
    const formatedAnswers = formatAnswers(answers);
   return writeFileAsync('README.md', formatedAnswers)
.then(function() {
    console.log("Successfully wrote to index.html");
  })
.catch(function(err) {
    console.log(err);
  });
});


