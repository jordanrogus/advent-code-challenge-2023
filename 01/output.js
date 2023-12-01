// To Run Code!!
// Requires node
// Open terminal inside folder and run 'node <output filename.js>'

// Read input file and push it to an array named inputArray which is mapped appropriately per the problem statement
const useExample = true;
const fs = require("fs");
const inputArray = [];
if (useExample){
    inputArray = fs
    .readFileSync("./input-example").toString('utf-8')
    .split("\n") // Split on new lines
    .filter(Boolean); // Remove empty lines
} else {
    inputArray = fs
    .readFileSync("./input").toString('utf-8')
    .split("\n") // Split on new lines
    .filter(Boolean); // Remove empty lines
}

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A
function partA(inputArray){
    return 'TBD';
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray){
    return 'TBD';
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////
