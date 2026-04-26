const display = document.getElementById("display");

// Button click
function press(val) {
    display.value += val;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Calculate
function calc() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// 🎯 KEYBOARD SUPPORT
document.addEventListener("keydown", function(e) {
    let key = e.key;

    // Numbers & operators
    if ("0123456789+-*/.".includes(key)) {
        display.value += key;
    }

    // Enter → calculate
    else if (key === "Enter") {
        calc();
    }

    // Backspace → delete last
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape → clear
    else if (key === "Escape") {
        clearDisplay();
    }
});