let promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if(true)
            resolve("Data is collected!")
        else
            reject("Data is not collected!")

    }, 3000)

})