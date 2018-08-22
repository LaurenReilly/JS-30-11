/* get the elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* build the functions */

function togglePlay(){
    //.paused is a property of video, there is no .playing
    if(video.paused){
        video.play();   
    } else {
        video.pause();  
    }
}

function skip(){
    //use parsefloat since the data is a string
video.currentTime += parseFloat(this.dataset.skip);
}

function updateButton (){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleRangeUpdate(){
    console.log(this.value);
}

/* hook up event listeners */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip))

ranges.addEventListener('change', handleRangeUpdate);