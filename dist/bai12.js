"use strict";
function simulTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
async function runTask() {
    const result = await simulTask(2000);
    console.log("Result:", result);
}
runTask();
