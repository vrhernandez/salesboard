// temp data, will be added to local storage
const watchedVideos = []
let totalWatched = 0

const watchedVideoBtnEl = document.getElementById("watched-video-btn")

watchedVideoBtnEl.addEventListener("click", function(){
    totalWatched++
    taskCompletionNotif("video", totalWatched)
    document.getElementById("videos-watched-el").innerText = totalWatched
})

//project completed
let totalProjects = 0
const finishedProjectBtnEl = document.getElementById("project-complete-btn")

finishedProjectBtnEl.addEventListener("click", function(){
    totalProjects++
    taskCompletionNotif("project", totalProjects)
})

//task completion modal
function taskCompletionNotif(task, total) {
    const taskCompletionNotifModal = document.getElementById("task-completion-notification")

    if (task === "video") {
        taskCompletionNotifModal.textContent = `You watched a new video! Total videos watched: ${total}`
    } else if (task === "project") {
        taskCompletionNotifModal.textContent = `You completed a new project! Total projects completed: ${total}`
    }

    taskCompletionNotifModal.style.display = "flex"
    setTimeout(() => {
        taskCompletionNotifModal.style.display = "none"
    }, 5000)
}