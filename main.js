function keySounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return; //stop the function
    audio.currentTime = 0 // rewind to the start
    audio.play()
    console.log(key)
    document.querySelector(`.key[data-key="${e.keyCode}"]`).setAttribute("id", "playing")
}

document.addEventListener("keyup", remove);

function remove (e) {
    document.querySelector(`.key[data-key="${e.keyCode}"]`).removeAttribute("id")
}

window.addEventListener('keydown', keySounds);

