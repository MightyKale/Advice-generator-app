const adviceNum = document.getElementById('advice-num');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice-container');

// Show new advice



// Get advice slip from API
async function getNewAdvice(){
    const apiUrl = "https://api.adviceslip.com/advice";
    try {
        const response = await fetch(apiUrl);
        const slip = await response.json();
        adviceNum.textContent = `ADVICE #${slip.slip.id}`;
        advice.textContent = `"${slip.slip.advice}"`;
    } catch(error) {
        alert(error);
    }
    
}


// Event Listener
dice.addEventListener('click', getNewAdvice);

// On Load
getNewAdvice()