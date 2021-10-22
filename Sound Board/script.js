const sounds = document.querySelectorAll(".sound");

let audio;

const playSong = (song) => {
    audio = new Audio("/sounds/" + song + ".mp3");
    audio.play();
}

// const stopSong = () => {
//     sounds.forEach(sound => {
//         if (audio.currentTime > 0 && !audio.paused) {
//             audio.pause();
//             audio.currentTime = 0;
//         }
//     })
// }

sounds.forEach((sound, idx) => {
    sound.addEventListener("click", ()=> {
        
        switch (idx) {
            case 0:
                playSong("applause");
                break;
            case 1:
                playSong("boo");
                break;
            case 2:
                playSong("gasp");
                break;
            case 3:
                playSong("tada");
                break;
            case 4:
                playSong("victory");
                break;
            case 5:
                playSong("wrong");
                break;
        }
    })
})