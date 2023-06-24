const numChecker = () => {
    let number = document.getElementById("number")
    let error = document.getElementById("error")
    const newNum = Number(number?.value)
    if (newNum !== NaN) {
        if (newNum > 0) {
            error.innerHTML = "Positive Number"
        } else if (newNum < 0) {
            error.innerHTML = "Negative Number"

        } if (newNum === 0) {
            error.innerHTML = "Number is zero"
        }
    }

    number.value = ""
}