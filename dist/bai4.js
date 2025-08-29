"use strict";
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random >= 0) {
                resolve(random);
            }
            else {
                reject(new Error("Failed to generate a random number"));
            }
        }, 1000);
    });
}
getRandomNumber()
    .then((num) => {
    console.log("Random number:", num);
})
    .catch((error) => {
    console.error("Error:", error.message);
});
