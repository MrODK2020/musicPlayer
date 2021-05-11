const musicContainer =document.querySelector('.music-container  ')
const prevBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//song titles
const songs = ['Laycon_-_Verified_ft_Mayorkun','Joeboy-Show-Me','Teni_-_Injure_Me','at my worst' ]

//keep track of songs
let songIndex = 3

//initially load song into DOM
loadsong(songs[songIndex])

// uodate song details
function loadsong(song) {
    title.innerText = song
    audio.src = `audio/${song}.mp3`
    cover.src = `image/${song}.jpg`
}
function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    
    audio.play()

}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    
    audio.pause()
}

function prevSong() {
songIndex--
   if(songIndex < 0) {
       songIndex = songs.length  -1
   }

   loadsong(songs[songIndex])
   playSong()
}
function nextSong() {
    songIndex++
    if(songIndex > songs.length -  1) {
        songIndex = 0
    }
 
    loadsong(songs[songIndex])
    playSong()
}
function updateProgres(e) {
const {duration, currentTime } = e.srcElement
const progressPercent = (currentTime / duration) *100
progress.style.width = `${progressPercent}%`

}
function setProgress(e) {
const width = this.clientwidth
const clickX = e.offsetX
const duration = audio.duration

audio.currentTime = (clickX  / width) * duration 
}

//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

if (isPlaying) {
    pauseSong()
} else {
    playSong()
} 
})

// //change song events
 prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgres)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)