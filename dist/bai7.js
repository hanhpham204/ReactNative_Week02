"use strict";
function simulate3Task(time, label) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${label} finished in ${time} ms`);
        }, time);
    });
}
Promise.race([
    simulate3Task(1500, "Task A"),
    simulate3Task(1000, "Task B"),
    simulate3Task(2000, "Task C"),
]).then((result) => {
    console.log("First completed:", result);
});
