"use strict";
function simulateTasks(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    });
}
const task1 = simulateTasks(1000);
const task2 = simulateTasks(2000);
const task3 = simulateTasks(1500);
Promise.all([task1, task2, task3])
    .then((results) => {
    console.log("All tasks completed:");
    results.forEach((result, index) => {
        console.log(`Task ${index + 1}: ${result}`);
    });
})
    .catch((error) => {
    console.error("A task failed:", error.message);
});
