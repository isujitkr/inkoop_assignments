function processInput(inputValue) {
    const message = document.getElementById('message');
    const input = parseInt(inputValue);

    if (isNaN(input)) {
        message.innerHTML = '';
        return;
    }

    if (input < 0) {
        message.innerHTML = '<span>Please enter a positive value</span>';
    } else if (input % 2 === 0) {
        message.innerHTML = `<span>Next 3 even numbers: ${input + 2}, ${input + 4}, ${input + 6}</span>`;
    } else {
        message.innerHTML = `<span>Next 3 odd numbers: ${input + 2}, ${input + 4}, ${input + 6}</span>`;
    }
}

document.getElementById('numberInput').addEventListener('input', function () {
    processInput(this.value);
});
