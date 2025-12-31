let currentStep = 0;
const messages = [
    { main: "I Have...", sub: "A Message 💌" },
    { main: "A Little Appreciation 💛", sub: "For Youuuu! 🤞" },
    { main: "Agar Tum Ya Dekh Rahe Ho Tw Thank You Hiba 👀🥹🫀🫶", sub: "Tap to see..." }
];

function startExperience() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('message-container').classList.remove('hidden');
}

function nextMessage() {
    if (currentStep < messages.length) {
        document.getElementById('message-text').innerText = messages[currentStep].main;
        document.getElementById('sub-text').innerText = messages[currentStep].sub;
        
        let dots = document.querySelectorAll('.dot');
        dots.forEach(d => d.classList.remove('active'));
        dots[currentStep + 1].classList.add('active');
        
        currentStep++;
    } else {
        document.getElementById('message-container').classList.add('hidden');
        document.getElementById('final-page').classList.remove('hidden');
    }
}
