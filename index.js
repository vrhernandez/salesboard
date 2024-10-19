// temp data, will be added to local storage
const watchedVideos = []
let watchedToday = 0
let totalWatched = 0
let projectsCompleted = 0

const watchedVideoBtnEl = document.getElementById("watched-video-btn")
const projectCompleteBtnEl = document.getElementById("project-complete-btn")
const totalProjectsEl = document.getElementById("total-projects")
const overallProgLabelEl = document.getElementById("overall-prog-label")


watchedVideoBtnEl.addEventListener("click", function(){
    watchedToday++
    totalWatched++
    document.getElementById("watched-today").innerText = watchedToday
    document.getElementById("videos-watched").innerText = totalWatched
    overallProgLabelEl.innerText = `Overall Progress - ${totalWatched+projectsCompleted}`
    document.getElementById("overall-progress").innerText += "⏩"
})

projectCompleteBtnEl.addEventListener("click", function(){
    projectsCompleted++
    document.getElementById("total-projects").innerText = projectsCompleted
    overallProgLabelEl.innerText = `Overall Progress - ${totalWatched+projectsCompleted}`
    document.getElementById("overall-progress").innerText += "🏅"
})