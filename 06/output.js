/*
 * Instructions
 * To run code open terminal inside folder and run 'node <output filename.js>'
 * This requires node to be installed and accessible
 */

const useExample = false; // Use input-example if true, input if false
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

    const [timeLine, distanceLine] = inputArray; // Set timeLine to inputArray[0] and distanceLine to inputArray[1]
    const times = organizeData(timeLine); // Simple array of times
    const distances = organizeData(distanceLine); // Simple array of distances
    const races = times.map((time, i) => ({ time, distance: distances[i] })); // New array of objects, passing in the time array
    console.log(races);

    // Math time. You win when:
    // x(T - x) > D, where:
    // x = press time
    // T = time
    // D = distance

    let wins = []; // Holds number of wins per race
    for (let i = 0; i < races.length; i++) {
        const time = races[i].time;
        const distance = races[i].distance;
        
        let numWins = 0;
        for (let pressTime = 0; pressTime < time + 1 ; pressTime++) {
            if (pressTime*(time - pressTime) > distance){
                numWins++;
            }
        }
        wins.push(numWins);
    }
    return wins.reduce((accumulator, currentValue) => accumulator * currentValue,1);
}

// Log Part A
console.log("Part a: \n" + partA(inputArray));
console.log("----------------------------------------------------------");

// Part B
function partB(inputArray) {
    const [timeLine, distanceLine] = inputArray; // Set timeLine to inputArray[0] and distanceLine to inputArray[1]
    const time = organizeDataPt2(timeLine); // Consolidate times
    const distance = organizeDataPt2(distanceLine);  // Consolidate distances

    let numWins = 0;
    for (let pressTime = 0; pressTime < time + 1 ; pressTime++) {
        if (pressTime*(time - pressTime) > distance){
            numWins++;
        }
    }
    return numWins;
}

// Log Part B
console.log("Part b: \n" + partB(inputArray));
console.log("----------------------------------------------------------");

//////////////////////// HELPER FUNCTION(S) ////////////////////////
function organizeData(line) {
    return line
    .split(':')[1]
    .trim()
    .split(" ")
    .filter((a) => a !== "")
    .map((x) => Number(x));
}

function organizeDataPt2(line) {
    return Number(line
    .split(':')[1]
    .trim()
    .replace(/ +/g, ""));
}