const adviceIDEl = document.querySelector('.adviceID span');
const adviceTextEl = document.querySelector('.adviceText');
const loadAnimationEl = document.querySelector('.load');
const getAdviceBtnEl = document.querySelector('.getAdvice');

async function generateAdvice() {
    loadAnimationEl.style.display = 'block';
    adviceTextEl.innerText = '';

    let response = await fetch('https://api.adviceslip.com/advice');
    let json = await response.json();
    adviceIDEl.innerHTML = json.slip.id;
    adviceTextEl.innerText = `"${json.slip.advice}"`;
    loadAnimationEl.style.display = 'none';
}
generateAdvice();
getAdviceBtnEl.addEventListener('click', generateAdvice);

