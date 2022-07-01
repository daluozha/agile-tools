const inquirer = require("inquirer");
// import inquirer from 'inquirer';

var questions = [
    {
        type: "input",
        name: "name",
        message: "你叫什么名字?",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    console.log(`你好 ${answers["name"]}!`);
});
