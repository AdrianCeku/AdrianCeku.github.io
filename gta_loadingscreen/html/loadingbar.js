let progressbar = document.getElementById("progress-bar")
let bars = document.getElementById("bars")
let loadingNotification = document.getElementById("loading-notification")
let exitKeyText = document.getElementById("exit-key")
let loadingNotificationFormer = document.getElementById("loading-notification-former")
let loadingNotificationLatter = document.getElementById("loading-notification-latter")

loadingNotificationFormer.innerText = config.translations["Press"]
loadingNotificationLatter.innerText = config.translations["to exit"]
exitKeyText.innerText = config.exitKey.toUpperCase()

let progress = 0
let interval 
function update() {
    progressbar.style.width = progress + "%"

    if(progress >= 100) {
        window.clearInterval(interval)
        if(config.manualExit) {
            if (config.enableLoadingNotification) {
                this.setTimeout(() => {
                    bars.style.transform = "translateY(20vh)"
                    loadingNotification.style.transform = "translateY(-3vh)"
                }, 1500)
            }
        }
    }
    progress += 1
    
}



interval = window.setInterval(update, 200)