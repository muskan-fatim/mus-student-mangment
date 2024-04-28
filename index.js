#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let student = await inquirer.prompt([{
        name: "name",
        type: "list",
        choices: ["Login your self", "Enroll a new student"],
        message: chalk.yellow("what do you want"),
    }]);
let balance = 10000;
if (student.name === "Login your self") {
    let log = await inquirer.prompt([{
            name: "pin",
            type: "number",
            message: chalk.bgBlack("Enter your student ID"),
        }]);
    let pin = 4567;
    if (log.pin === pin) {
        console.log(chalk.bgBlueBright("congratulation muskan you  login succesfully"));
        let password = await inquirer.prompt([{
                name: "part2",
                type: "list",
                message: "what do you want to do select please",
                choices: ["payfees", "check balance", " enroll in course"]
            }]);
        if (password.part2 === "payfees") {
            let fees = await inquirer.prompt([{
                    name: "amount",
                    type: "input",
                    message: "enter you amount",
                }]);
            if (fees.amount > balance) {
                console.log(chalk.bgCyan("you accout balance is" + balance + "please enter a less than or enqual to your account balance"));
            }
            else {
                console.log(chalk.blue("you fees is pay succesfully you remamning balance is", balance - fees.amount));
            }
        }
        if (password.part2 === "check balance") {
            console.log(chalk.green("your account balance is " + balance));
        }
        if (password.part2 === " enroll in course") {
            let course = await inquirer.prompt([{
                    name: "courses",
                    type: "list",
                    message: "select your course that you want to enroll",
                    choices: ["javasript for begnnier", "typscript", "python", "Css", "Html", "SQl", "C++",]
                }]);
            console.log(chalk.bgGray("you succefully enrolled in" + " " + course.courses));
        }
    }
    if (log.pin !== pin) {
        console.log(chalk.red("please enter a valid student ID"));
    }
}
if (student.name === "Enroll a new student") {
    let student1 = await inquirer.prompt([{
            name: "student",
            message: "Enter your name",
            type: "input"
        },
        {
            name: "password",
            message: "creat your student ID",
            type: "input"
        }
    ]);
    console.log(chalk.green(student1.student + " your register succesfully and your password is" + student1.password));
}
