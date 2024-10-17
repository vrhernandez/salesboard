// temp data, will be added to local storage
const watchedVideos = []
let totalWatched = 0

const watchedVideoBtnEl = document.getElementById("watched-video-btn")

watchedVideoBtnEl.addEventListener("click", function(){
    totalWatched++
    console.log(`You watched a new video :) Total watched: ${totalWatched}`)
    document.getElementById("videos-watched-el").innerText = totalWatched
})