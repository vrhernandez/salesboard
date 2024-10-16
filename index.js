// temp data, will be added to local storage
const watchedVideos = []
let watchCount = 0

const watchCountEl = document.getElementById("watch-count-el")

document.addEventListener("click", function(e){
    if(e.target.id === "watch-count-btn") {
        addNewVideo()
    }
})

function addNewVideo(){
    watchCount++
    console.log(`You watched a new video :) Total watched: ${watchCount}`)
    watchCountEl.innerText = watchCount
}