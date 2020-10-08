const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 0.75;



function speak() {
    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
}