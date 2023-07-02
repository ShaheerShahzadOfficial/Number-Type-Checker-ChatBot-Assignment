const numChecker = () => {
    let number = document.getElementById("number")
    let error = document.getElementById("error")
    const newNum = Number(number?.value)
    if (newNum !== NaN) {
        if (newNum >= 0) {
            if (newNum % 2 === 0) {
                error.innerHTML = "Positive And Even Number"

            } else {
                error.innerHTML = "Positive And ODD Number"
            }

        } else if (newNum < 0) {
            if (newNum % 2 === 0) {
                error.innerHTML = "Negative And Even Number"

            } else {
                error.innerHTML = "Negative And ODD Number"
            }
        }
    }

    number.value = ""
    setTimeout(() => {
        error.innerHTML = ""
    }, 3000);
}