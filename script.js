let music = document.querySelector('audio');

document.querySelector('.btnPlay').addEventListener('click', playMusic);
document.querySelector('.btnPause').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', loadingProgress)

function playMusic(){
    music.play();
    document.querySelector('.btnPause').style.display = 'block';
    document.querySelector('.btnPlay').style.display = 'none';
}
function pauseMusic(){
    music.pause();
    document.querySelector('.btnPause').style.display = 'none';
    document.querySelector('.btnPlay').style.display = 'block';
}

function loadingProgress() {
    let loadProg = document.querySelector('.barra span')
    loadProg.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
}