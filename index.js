const inquirer = require("inquirer");
var fs = require("fs");

const questions = [

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
        message: "Table of Contents",
        name: "toc"
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
        message: "Licence",
        name: "licence"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
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



];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, JSON.stringify(data, null, 4), function (error) {
        if (error) {
            return console.log(error);

        }
        else {

            console.log(`successfully wrote to ${data.filename}`)
        }
    })
}

function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            writeToFile('readme.txt', response)
        })

}

init();
