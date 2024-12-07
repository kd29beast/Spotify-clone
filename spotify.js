//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem')); 
let songs = [
    {SongName:"punjabi kompa" , filePath:"songs/1.mp3" , coverPath:"covers/cover.png"},
    {SongName:"chahun mein yaa naa" , filePath:"songs/2.mp3" , coverPath:"covers/2.png"},
    {SongName:" bandana" , filePath:"songs/3.mp3" , coverPath:"covers/3.png"},
    {SongName:"king shit" , filePath:"songs/4.mp3" , coverPath:"covers/4.png"},
    {SongName:"russian bandana" , filePath:"songs/5.mp3" , coverPath:"covers/5.png"},
    {SongName:"puni kompa" , filePath:"songs/1.mp3" , coverPath:"covers/6.png"},
    {SongName:"punjnbi kompa" , filePath:"songs/1.mp3" , coverPath:"covers/6.png"},
    {SongName:"puni kompa" , filePath:"songs/1.mp3" , coverPath:"covers/6.png"},
    {SongName:"puu kompa" , filePath:"songs/1.mp3" , coverPath:"covers/6.png"},
    {SongName:"uinhh kompa" , filePath:"songs/1.mp3" , coverPath:"covers/6.png"},
]

songItems.forEach((element,i) => {
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].SongName
})

//Handel play and pause element
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})
//listen to elements    

audioElement.addEventListener("timeupdate",()=>{
    //update seekbar
let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
  progressbar.value = progress
})

progressbar.addEventListener("change",()=>{
    audioElement.currentTime = progressbar.value *audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        
})
} 
Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
element.addEventListener('click',(e) =>{
    makeAllPlays()
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

})
})