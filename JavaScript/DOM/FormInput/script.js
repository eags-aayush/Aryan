let input = document.getElementById("name")
input.focus()

let button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log(input.value)
    alert("Entered value is: " + input.value)
    input.value = ""
    input.focus()
})
