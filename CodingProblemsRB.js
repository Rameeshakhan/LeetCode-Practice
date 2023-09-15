//Question 1
//Given a set of n tasks, the ith (0<=i<n) task runs from time start[I] through end[I]. Implement a task scheduler method to find the min no of machines required to complete the tasks. A task can be scheduled on exactly one machine and one machine can run only one task at a time.

//Suppose n=5, start = [1,8,3,9,6], end= [7,9,6,14,7]

//Consider the following task schedule. Times in parentheses are the inclusive start and end times for each job.
//- Machine 1: [(1,7),(8.9)]
//-Machine 2: [(3,6), (9,14)]
//- Machine 3: [(6,7)]

// Here,  the number of machines required is 3;
//function getMinMachines(start, end) {
//  // Write your code here
    

//}

//complete this function
function getMinMachines(start, end) {
    const n = start.length;
    
    // Combine the start and end times into tasks array with pairs
    const tasks = [];
    for (let i = 0; i < n; i++) {
        tasks.push({ start: start[i], end: end[i] });
    }

    // Sort tasks by their start times
    tasks.sort((a, b) => a.start - b.start);

    // Initialize an array to keep track of the end times of machines
    const endTimes = [];

    for (const task of tasks) {
        const { start: startTime, end: endTime } = task;
        let assigned = false;

        // Try to find a machine that can execute the task
        for (let i = 0; i < endTimes.length; i++) {
            if (endTimes[i] <= startTime) {
                // Assign the task to this machine
                endTimes[i] = endTime;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            // If no machine is available, create a new machine
            endTimes.push(endTime);
        }
    }

    // The number of machines required is equal to the length of the endTimes array
    return endTimes.length;
}

// Example usage:
const startTimes = [1, 8, 3, 9, 6];
const endTimes = [7, 9, 6, 14, 7];
console.log(getMinMachines(startTimes, endTimes)); // Output: 3


// Question 2
// Given an input string ,s, and an array of n strings, dictionary , find the lexicographically smallest word in the dictionary that is a subsequence of the given string s. if no such string , return the string -1 as the answer

function findSmallestSubsequence(s, dictionary) {
    function isSubsequence(sub, s) {
        let i = 0;
        for (let j = 0; i < sub.length && j < s.length; j++) {
            if (sub[i] === s[j]) {
                i++;
            }
        }
        return i === sub.length;
    }

    dictionary.sort(); // Sort the dictionary lexicographically

    let smallestSubsequence = null;
    for (const word of dictionary) {
        if (isSubsequence(word, s)) {
            if (smallestSubsequence === null || word < smallestSubsequence) {
                smallestSubsequence = word;
            }
        }
    }

    return smallestSubsequence !== null ? smallestSubsequence : "-1";
}

// Example usage:
const s = "abppleee";
const dictionary = ["apple", "banana", "cherry", "beep", "ape"];
const result = findSmallestSubsequence(s, dictionary);
console.log(result); // Output: "ape"
