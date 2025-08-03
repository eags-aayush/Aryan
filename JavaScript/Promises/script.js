let promise = new Promise((resolve, reject) => {

    let a = 12
    if (a == 12) {
        resolve("Success")
    }
    else {
        reject("Failed")
    }

}).then((message) => {
    console.log("This is in the then block: " + message);
}).catch((message) => {
    console.log("This is in the catch block: " + message);
})