// Get the display element
const display = document.getElementById('display');

// Append number or operator to display
function append(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
