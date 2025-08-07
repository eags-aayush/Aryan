let span1 = document.querySelector("span")
let data = null
let asyncFunc = async () => {
    let response = await fetch('https://www.thecolorapi.com/scheme?hex=3bf7eb&mode=monochrome')
    data = await response.json()
    console.log("Value of data = ", data)
}

let useData = async () => {
    await asyncFunc()
    console.log(data)
    let trueBtn = document.querySelector(".button1")
    let falseBtn = document.querySelector(".button2")
    let toggleBtn = document.querySelector(".toggle")
    let span = document.querySelector("span")

    trueBtn.addEventListener("click", () => {
        span.innerText = data.colors[0].hex.value
        span.style.backgroundColor = data.colors[0].hex.value
    })

    falseBtn.addEventListener("click", () => {
        span.innerText = data.colors[4].hex.value
        span.style.backgroundColor = data.colors[4].hex.value
    })

    toggleBtn.addEventListener("click", () => {
        span.innerText = data.colors[3].hex.value
        span.style.backgroundColor = data.colors[3].hex.value
    })
}

useData()

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => {
//         data = json
//         console.log(json)
//     })
//     .catch(error => console.error('Error fetching data:', error))
