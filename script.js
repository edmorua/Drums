
let keys = document.getElementsByClassName("key");
window.addEventListener('keypress',function(e){
    const audio = document.getElementsByTagName("audio");
    let key;
    for(var i = 0; i < audio.length; i++){
        if(e.keyCode.toString() == audio[i].getAttribute("data-k")){
            console.log("holi")
            key = document.querySelector('div[data-k='+'"'+e.keyCode.toString()+'"]');
            key.classList.add("playing");
            audio[i].currentTime = 0;
            audio[i].play();
        }
    }
})
for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener('transitionend',function(e){
        if(e.propertyName !== 'transform')return;
        this.classList.remove("playing");
    })
}
