"use strict";
function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
getNumber().then((num) => {
    console.log(num);
});
