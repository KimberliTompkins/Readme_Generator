const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer")

// const { BadgeFactory } = require('gh-badges')
// 
// const bf = new BadgeFactory()
// 
// const format = {
//   text: ['build', 'passed'],
//   color: 'green',
//   template: 'flat',
// }
// 
// const svg = bf.create(format)
// 
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
                message: "Repo Link",
                name: "repo"
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
                type: "input",
                message: "License",
                name: "license"
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
    return `
# Title    
## **${answers.title}**\n
${answers.repo}\n
## *Description* \n
${answers.description}\n
## Table of Contents
    1. Installation
    2. usage
    3. Credits
    4. License
    5. Tests
    6. Questions\n
    
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


