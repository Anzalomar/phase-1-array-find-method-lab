// code your solution here
function superbowlWin(record) {
    // Iterate through the record array
    for (let i = 0; i < record.length; i++) {
        // Check if the result of the current object is "W"
        if (record[i].result === "W") {
            // Return the year if a win is found
            return record[i].year;
        }
    }
    // Return undefined if no win is found
    return undefined;
}

// Example usage:
const broncosRecord = [
    { year: "2013", result: "L" },
    { year: "2014", result: "L" },
    { year: "2015", result: "W" }, // Broncos won the Super Bowl in 2015
    { year: "2016", result: "L" },
];

console.log(superbowlWin(broncosRecord)); // Output: 2015
