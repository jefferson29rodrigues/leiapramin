const utterance = new SpeechSynthesisUtterance();

let english = false;


function mudarParaIngles() {
    let english = true;

    if (english) {
        utterance.lang = "en-US";
        utterance.rate = 0.50;

    }  else {
        utterance.lang = "pt-BR";
        utterance.rate = 0.75;
    }    

}

function mudarParaPortugues() {
    let english = false;

    if (english) {
        utterance.lang = "en-US";
        utterance.rate = 0.50;
        
    }  else {
        utterance.lang = "pt-BR";
        utterance.rate = 0.75;
    }

}


function velo05 () {
    utterance.rate = 0.5;
}

function velo1 () {
    utterance.rate = 1;
}

function velo15 () {
    utterance.rate = 1.5;
}

function velo2 () {
    utterance.rate = 2;
}


function speak() {
    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
}