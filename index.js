#! /usr/bin/env node
import inquirer from "inquirer";
// Asking for roll number
let roll = await inquirer.prompt({
    type: "number",
    name: "num1",
    message: "Please enter your roll number:"
});
// rollnumber
let rollNumber = roll.num1;
// checking rollnumber
if (rollNumber === 456789) {
    // Asking for marks
    let marks = await inquirer.prompt([
        {
            name: "typescript",
            type: "number",
            message: "Please enter your typescript number:",
        },
        {
            name: "python",
            type: "number",
            message: "Please enter your python number:",
        },
        {
            name: "csharp",
            type: "number",
            message: "Please enter your csharp number:",
        }
    ]);
    // extract marks
    let ts = marks.typescript;
    let pyth = marks.python;
    let c_sharp = marks.csharp;
    // percentage
    let totalMarks = 300;
    let obtainMarks = ts + pyth + c_sharp;
    let percentage = ((obtainMarks / totalMarks) * 100);
    // Answer
    console.log("Name: Ali");
    console.log("Father Name: Hassan");
    console.log(`Typescript Marks = ${ts}out of 100`);
    console.log(`python Marks = ${pyth}out of 100`);
    console.log(`csharp Marks = ${c_sharp}out of 100`);
    console.log(`Obtain Marks = ${obtainMarks} Total Marks = ${totalMarks}`);
    console.log(`Percentage = ${percentage}%`);
    if (percentage >= 80) {
        console.log("Grade A+");
    }
    else if (percentage >= 70) {
        console.log("Grade A");
    }
    else if (percentage >= 60) {
        console.log("Grade B");
    }
    else if (percentage >= 50) {
        console.log("Grade C");
    }
    else if (percentage >= 45) {
        console.log("Grade D");
    }
    else {
        console.log("You are Fail!!");
    }
}
else {
    console.log(`Invalid Wrong Number`);
}
