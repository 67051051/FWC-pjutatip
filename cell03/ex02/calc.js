const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const button = document.getElementById("calculate");

button.addEventListener("click", function () {
    const a = Number(left.value);
    const b = Number(right.value);
    const op = operator.value;

    if (
        left.value === "" ||
        right.value === "" ||
        !Number.isInteger(a) ||
        !Number.isInteger(b) ||
        a < 0 ||
        b < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && b === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        result = a / b;
    } else if (op === "%") {
        result = a % b;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);
