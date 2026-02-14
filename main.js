
const generatorBtn = document.getElementById('generator-btn');
const lottoNumbers = document.querySelectorAll('.lotto-numbers .number');

generatorBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    lottoNumbers.forEach((element, index) => {
        element.textContent = Array.from(numbers)[index];
    });
});
