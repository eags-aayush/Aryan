console.log("1")

setTimeout(async () => {
    await console.log("2")
    console.log("3")

    await console.log("4")

    console.log("5")
}, 3000);

