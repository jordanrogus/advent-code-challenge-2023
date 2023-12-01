/*
 * Instructions
 * To run code open terminal inside folder and run 'node <output filename.js>'
 * This requires node to be installed and accessible
 */

const useExample = true; // Use input-example if true, input if false
let fs = require("fs");
let inputArray = [];
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
