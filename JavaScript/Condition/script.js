console.log("Using if else-if else")
if (45 % 4 == 0) {
    console.log(true)
}
else if (45%8==0){
    console.log("9")
}
else {
    console.log(false)
}

console.log("Using nested ternary")
let ternary = (45 % 5 == 0) ? true : (45 % 9 == 0) ? "9" : false
console.log(ternary)