let toggle=document.querySelector('.player__button.toggle')
let video=document.querySelector('.viewer')
let skipButtons=document.querySelectorAll('[data-skip]')
let progress=document.querySelector('.progress')
let progressBar=document.querySelector('.progress__filled')
let ranges=document.querySelectorAll('[type=range]')
let player=document.querySelector('.player')

toggle.addEventListener('click',toggleVideo)
video.addEventListener('pause',toggleIcon)
video.addEventListener('play',toggleIcon)
video.addEventListener('click',toggleVideo)
video.addEventListener('timeupdate',handleProgress)
let mousedown=false
progress.addEventListener('click',drag)
progress.addEventListener('mousedown',()=>{mousedown=true})
progress.addEventListener('mouseup',()=>{mousedown=false})
progress.addEventListener('mousemove',(e)=>{mousedown&&drag(e)})
skipButtons.forEach(item=>{
    item.addEventListener('click',handleSkip)
})
ranges.forEach(item=>{
    item.addEventListener('input',handleRange)

    // 下面两个能达到同样效果，但是会一直触发handleRange
    // item.addEventListener('mousemove',handleRange)
    // item.addEventListener('change',handleRange)
})
player.addEventListener('dblclick',toggleFullScreen)
function toggleVideo(){
    video[`${video.paused?'play':'pause'}`]()
}
function toggleIcon(){
    toggle.innerHTML=video.paused?'►':'❚❚'
}
function handleSkip(e){
    // console.log(e)
    // console.log(this)
    video.currentTime+=parseFloat(e.target.dataset.skip)
}
function handleProgress(){
    progressBar.style.flexBasis=`${video.currentTime/video.duration*100}%`
}
function handleRange(){
    console.log('handleRange')
    video[this.name]=this.value
}

function drag(e){
    video.currentTime=(e.offsetX/progress.offsetWidth)*video.duration
}
function toggleFullScreen(){
    // console.log('toggleFullScreen')
    // player.webkitRequestFullscreen();
    // player.mozRequestFullScreen();
    // player.msRequestFullscreen();
    if(window.outerHeigth==screen.height || window.outerWidth==screen.width){
        // document.webkitExitFullscreen()
        document.exitFullscreen()
    }else{
        // player.webkitRequestFullscreen()
        player.requestFullscreen();
    }
}