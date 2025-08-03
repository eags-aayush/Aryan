let hex = document.querySelector(".hex");
let mode = document.querySelector(".mode");
let btn = document.querySelector(".btn");

let divs = document.querySelectorAll(".container div");

let url = "https://www.thecolorapi.com/scheme?";
// hex=24B1E0&mode=triad&count=6

btn.addEventListener("click", () => {
    fetch(`${url}hex=${hex.value}&mode=${mode.value}`)
        .then(response => response.json())
        .then(data => {
            divs.forEach((div, index) => {
                if (data.colors[index]) {
                    div.style.backgroundColor = data.colors[index].hex.value;
                    div.innerHTML = `<span>${data.colors[index].hex.value}</span>`;
                }
            });
        })
})