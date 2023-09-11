
const playSound = function (e) { 
    const audio = document.querySelector(`audio[data-key=${e.key}]`); // See Google notes
    // console.log(audio); - This is to check that it is working properly
    const key = document.querySelector(`.key[data-key=${e.key}]`); 
        // grabbing the div with class of "key" that also has the class of the key the user pressed
    // console.log(key);
    if (!audio) return; 
        // stops the function from running. Saying "if there is no audio for this key, return it". Without this line of code, an error will be returned when you press a key with undefined audio
    audio.currentTime = 0; 
        // rewinds to the start so that the audio can be played over and over, without waiting for it to finish playing
    audio.play(); 
        // This line of code will play the audio for each key pressed
    key.classList.add("playing");
        // adds the class to make buttons change when pressed
};

const removeTransition = function (e) {
    // console.log(e); - Checking that it is working properly
    if (e.propertyName !== "transform") return;
        // this means skip it if it is not a transform
    // console.log(e.propertyName); - Console logs "transform" b/c that is the name of the property that is being ended
    // console.log(this); - Use this to determine what "this" is
    this.classList.remove("playing");
        // you can use conosle.log(this) to figure out what this is. In this case, this is equal to the key being pressed. This is always equal to whatever got called against it. Below in the arrow function, key is called against the addEventListener, making key our this.
};

const keys = document.querySelectorAll(".key");
    // Use querySelectorAll because we are listening for all keys clicked on the page. This targets all elements with the class "key" (querySelector would target only the first element)
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
    // loops through the items in the node list using an arrow function (more concise way of writing functions). Listening for the transition's end, and then performing the removeTransition function
    // "key" is the function's parameter, and the function body comes after the arrow in an arrow function

document.addEventListener("keydown", playSound);
    // this must come at the end because it needs to come after the functions have been defined