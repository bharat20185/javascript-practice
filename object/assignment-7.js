/*
    Write a JavaScript program to get the length of a JavaScript object.
    Sample object :
    const student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12
    };
*/

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(" --- 1. Get the length of a JavaScript object ---");
const studentProperties = Object.keys(student);
console.log(studentProperties.length);