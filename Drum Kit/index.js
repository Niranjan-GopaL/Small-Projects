var number=document.querySelectorAll(".drum").length;
var audioW = new Audio('./sounds/tom-1.mp3');
var audioS = new Audio('./sounds/tom-2.mp3');
var audioA = new Audio('./sounds/tom-3.mp3');
var audioD = new Audio('./sounds/tom-4.mp3');
var audioJ = new Audio('./sounds/crash.mp3');
var audioK = new Audio('./sounds/kick-bass.mp3');
var audioL = new Audio('./sounds/snare.mp3');

// Detection of Mouse Click
for(var i = 0; i< number; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        console.log(this)
        var buttonInnerText = this.innerHTML;
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
        })
    }


// Detection of Keyboard Events
document.addEventListener("keypress",function (x){
    makeSound(x.key);
    buttonAnimation(x.key);
})

// Making Sound
function makeSound(key){
    switch (key) {

        case 'w':
        audioW.play();
        break;

        case 's':
        audioS.play();
        break;

        case 'a':
        audioA.play();
        break;

        case 'd':
        audioD.play();
        break;

        case 'j':
        audioJ.play();
        break;

        case 'k':
        audioK.play();
        break;

        case 'l':
        audioL.play();
        break;
}}

// Making Animation 
function  buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100)

}
