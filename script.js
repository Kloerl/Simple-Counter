let btnDecrease = document.getElementById("btnDecrease")
let btnReset = document.getElementById("btnReset")
let btnIncrease = document.getElementById("btnIncrease")

let textNumber = document.getElementById("textNumber")

let numberShown = 0

// Decreasing button
btnDecrease.addEventListener ("click", () => {
    numberShown --
    textNumber.textContent = numberShown
    if (numberShown < 0) {
        textNumber.classList.add("red")
    } else if (numberShown === 0 ) {
        textNumber.className = ''
    }
})

// Reset button
btnReset.addEventListener ("click", () => {
    numberShown = 0
    textNumber.textContent = numberShown
    textNumber.className = ''
})

// Increasing button
btnIncrease.addEventListener ("click", () => {
    numberShown ++
    textNumber.textContent = numberShown
    if (numberShown > 0) {
        textNumber.classList.add("green")
    } else if (numberShown === 0 ) {
        textNumber.className = ''
    }
})

console.log()
