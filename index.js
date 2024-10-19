// temp data, will be added to local storage
const watchedVideos = []
let totalWatched = 0

const watchedVideoBtnEl = document.getElementById("watched-video-btn")

watchedVideoBtnEl.addEventListener("click", function(){
    totalWatched++
    taskCompletionNotif("video", totalWatched)
    document.getElementById("videos-watched-el").innerText = totalWatched
})

//task completion modal
function taskCompletionNotif(taskCompleted, total) {
    const taskCompletionNotifModal = document.getElementById("taskCompletionNotification")

    if (taskCompleted === "video") {
        taskCompletionNotifModal.textContent = `You watched a new video! Total videos watched: ${total}`
    }

    taskCompletionNotifModal.style.display = "flex"
    setTimeout(() => {
        taskCompletionNotifModal.style.display = "none"
    }, 5000)
}