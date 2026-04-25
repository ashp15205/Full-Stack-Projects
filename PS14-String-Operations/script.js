const textInput = document.getElementById('textInput');
const lengthResult = document.getElementById('lengthResult');
const reverseResult = document.getElementById('reverseResult');
const upperResult = document.getElementById('upperResult');
const lowerResult = document.getElementById('lowerResult');

textInput.addEventListener('input', (e) => {
    const text = e.target.value.trim();
    
    if (!text) {
        lengthResult.textContent = '0';
        reverseResult.textContent = 'None';
        upperResult.textContent = 'None';
        lowerResult.textContent = 'None';
        return;
    }

    lengthResult.textContent = text.length;
    reverseResult.textContent = text.split('').reverse().join('');
    upperResult.textContent = text.toUpperCase();
    lowerResult.textContent = text.toLowerCase();
});
