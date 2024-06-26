for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // console.log(this.innerHTML); // "this" keyword returns current element 
        var buttonInnerHTML = this.innerHTML;
        console.log('click '+this.innerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){
    console.log('key '+event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play()
                break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play()
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

/*
function anotherAddEventListener(typeOfEvent, callback) {
    //Detect Event Code...
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event) {
console.log(event);
});

Output -> {eventType: "keypress", key: "p", durationOfKeypress: 2}

*/