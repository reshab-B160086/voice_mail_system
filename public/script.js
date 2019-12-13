var audio = document.getElementById("myaudio") 
var myAudio = document.getElementById("openingmp3")

document.addEventListener('DOMContentLoaded', (event) => {
myAudio.addEventListener("ended", function() 
 {
      audio.play();
 });

 // speech to text 
 var SpeechRecognition = window.webkitSpeechRecognition;
  
 var recognition = new SpeechRecognition();
  
 var Textbox = $('#textbox');
 var instructions = $('instructions');
  
 var Content = '';
  
 recognition.continuous = true;
  
 recognition.onresult = function(event) {
  
   var current = event.resultIndex;
  
   var transcript = event.results[current][0].transcript;
   console.log(transcript);
  
     Content = transcript;
    if(Content == "open inbox" || Content == "Open inbox" || Content == "Open Inbox") {
        console.log(Content);
     window.location.href = "http://localhost:3000/inbox";
    }
   
    else if(Content == "open sent mail" || Content == "Open sent mail" || Content == "Open Sent Mail") {
        console.log(Content);
     window.location.href = "http://localhost:3000/sentmail";
    }
 
    else if(Content == "open important" || Content == "Open important" || Content == "Open Important") {
        console.log(Content);
     window.location.href = "http://localhost:3000/important";
    }
 
    else if(Content == "open folders" || Content == "Open folders" || Content == "Open Folders") {
        console.log(Content);
     window.location.href = "http://localhost:3000/folders";
    }
 };
  
 recognition.onstart = function() { 
   instructions.text('Voice recognition is ON.');
 }
  
 recognition.onspeechend = function() {
   instructions.text('No activity.');
 }
  
 recognition.onerror = function(event) {
   if(event.error == 'no-speech') {
     instructions.text('Try again.');  
   }
 }


 recognition.start();
 
//end of speech to text.



})
