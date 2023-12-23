// let speech = new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener("click",()=>{
//     document.text = document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// })



// let speech = new SpeechSynthesisUtterance();

// let voice =[];
// let voiceSelect =document.querySelector("select");
// window.speechSynthesis.onvoiceschanged=()=>{
//     voices =window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice,i)=>(voiceSelect.options[i])=new Option((voice.name,i)))
        
   
// };

// document.querySelector("button").addEventListener("click", () => {
//     let text = document.querySelector("textarea").value;
//     speech.text = text;
//     window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    // You might want to clear any existing options before adding new ones
    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    speech.text = text;
    window.speechSynthesis.speak(speech);
});
