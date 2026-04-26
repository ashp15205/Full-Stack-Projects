function reverse() {
    let str = text.value;
    output.innerText = str.split("").reverse().join("");
}

function upper() {
    output.innerText = text.value.toUpperCase();
}

function lower() {
    output.innerText = text.value.toLowerCase();
}

function lengthCalc() {
    output.innerText = "Length: " + text.value.length;
}