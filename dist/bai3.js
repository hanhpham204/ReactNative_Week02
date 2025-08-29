"use strict";
function throwError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
throwError()
    .then(() => {
    console.log("This will not run");
})
    .catch((error) => {
    console.error(error.message);
});
