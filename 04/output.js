/*
 * Instructions
 * To run code open terminal inside folder and run 'node <output filename.js>'
 * This requires node to be installed and accessible
 */

const useExample = true; // Use input-example if true, input if false
let fs = require("fs");
let inputArray = [];
if (useExample) {
    inputArray = fs
        .readFileSync("./input-example").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean) // Remove empty lines
} else {
    inputArray = fs
        .readFileSync("./input").toString('utf-8')
        .split("\n") // Split on new lines
        .filter(Boolean) // Remove empty lines
}

// Initial log separator
console.log("----------------------------------------------------------");

// Log the raw input
console.log("Input array:");
console.log(inputArray);
console.log("----------------------------------------------------------");

// Part A
function partA(inputArray) {

    let answer = 0;
    for (let i = 0; i < inputArray.length; i++) {
        const gameObj = splitLine(inputArray[i]);
        const matchingNumsArray = gameObj["myNumbers"].filter(value => gameObj["winningNumbers"].includes(value));
        const matchingNums = matchingNumsArray.length
        if (matchingNums > 0){
            answer += (2 ** (matchingNums-1));
        }
    }

    return answer;
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray) {
    let answer = 0;

    for (let i = 0; i < inputArray.length; i++) {
        console.log(splitLine(inputArray[i]));
    }

    return answer;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////

function splitLine(line) {
    const splitLine = line.split(/[:|]/);
    const gameNumber = Number(splitLine[0].split(" ")[1]);
    const winningNumbers = splitLine[1]
        .split(" ")
        .filter((a) => a !== "")
        .map((a) => Number(a));
    const myNumbers = splitLine[2]
        .split(" ")
        .filter((a) => a !== "")
        .map((a) => Number(a));
    return {gameNumber,winningNumbers,myNumbers};
}