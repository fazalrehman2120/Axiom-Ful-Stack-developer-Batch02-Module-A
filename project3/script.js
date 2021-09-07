//Get dom elements
const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop'); 
const progress=document.getElementById('progress');
const time=document.getElementById('time');


// Function to play or pause the video
function playPauseVideo() {
     // Check if video is paused or playing
    if(video.paused){
         // If video is paused, play the video
        video.play();
       
    }else {
        // If video is playing, pause the video
        video.pause();
    }
};


//function to update the play /pause icons
function updateIcons(){
    //check if video is paused or playing
    if(video.paused){
        //if video is paused show the play button
        play.innerHTML= '<i class="fa fa-play fa-2x"></i>'
    } else{
         //if video is play show the pause button
        play.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }

};
//function to update the video progress
function updateProgress(){
    //update the value of progress bar using current time/total time
    progress.value=(video.currentTime/video.duration)*100;
    //use the current time to update minutes
    let minutes=Math.floor(video.currentTime/60)
    //format minutes always be in 2 digits
    if(minutes < 10){
     minutes='0' + String(minutes);
    }
    //use the current time to update the seconds
    let seconds=Math.floor(video.currentTime % 60)
    //format seconds always be in 2 digits
    if(seconds<10){
    seconds='0' + String(seconds);
    } 
//update time in UI
time.innerHTML=`${minutes}:${seconds}`;
};

//function for click on stop button
function stopVideo(){
    //reset the video time to 0
    video.currentTime=0;
    video.pause();

};

//function to update the progress bar base on changes
function updateVideoProgress(){
//set the current time of video based on position of slider
    video.currentTime=(progress.value * video.duration)/100

};


//event Listners
// 1.event listner for play or pause video
video.addEventListener('click',playPauseVideo);
// 2.Listen for pause event on video element
video.addEventListener('pause' ,updateIcons);
// 3.Listen for play event on video element
video.addEventListener('play',updateIcons);
// 4.Listen for updatetime event on video element
video.addEventListener('timeupdate', updateProgress);
// 5.Listen for click event on play button
play.addEventListener('click', playPauseVideo);
// 6.Listen for click event on stop button
stop.addEventListener('click' , stopVideo) 
//Listen for change event on progress bar
progress.addEventListener('change' ,updateVideoProgress)
