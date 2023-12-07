let imgErrors = 0
function imgError() {
    imgErrors++
}

function setToAccentColor(el) {
    el.style.animation = "toAccentColor 0.3s linear 0s 1 both"
}

function setToMainColor(el) {
    el.style.animation = "toMainColor 0.3s linear 0s 1 both"
}

let tooltipTitle
let tooltipText
let functions = {}

function updateTooltip() {
    tooltipTitle.innerText = config.translations["Button"] + ": " + this.getElementsByTagName("span")[0].innerText
    tooltipText.innerText = functions[this.getElementsByTagName("span")[0].innerText]
}

window.addEventListener("DOMContentLoaded", function () {
    let root = document.querySelector(":root")

    let configDiv = document.getElementById("config-div")

    const config = JSON.parse(configDiv.innerText)


    tooltipTitle = document.getElementById("tooltip-title")
    tooltipText = document.getElementById("tooltip-text")
    tooltipTitle.innerText = config.translations["Press a button"]
    tooltipText.innerText = config.translations["To see what it does"]

    

    let discordDiv = document.getElementById("discordwidget-div")
    let discordWidget = "<iframe id=\"discord-widget\" src=\"https://discord.com/widget?id=" + config.discordWidgetId + "&theme=dark&\" allowtransparency=\"true\" sandbox=\"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\"></iframe>"
    if(config.enableDiscordWidget) discordDiv.innerHTML = discordWidget

    const indexToId = {
        "0" : "ESC",
        "1" : "F1",
        "2" : "F2",
        "3" : "F3",
        "4" : "F4",
        "5" : "F5",
        "6" : "F6",
        "7" : "F7",
        "8" : "F8",
        "9" : "F9",
        "10" : "F10",
        "11" : "F11",
        "12" : "F12",
        "13" : "^",
        "14" : "1key",
        "15" : "2key",
        "16" : "3key",
        "17" : "4key",
        "18" : "5key",
        "19" : "6key",
        "20" : "7key",
        "21" : "8key",
        "22" : "9key",
        "23" : "0key",
        "24" : "?",
        "25" : "´",
        "26" : "BACKSPACE",
        "27" : "TAB",
        "28" : "Q",
        "29" : "W",
        "30" : "E",
        "31" : "R",
        "32" : "T",
        "33" : "Z",
        "34" : "U",
        "35" : "I",
        "36" : "O",
        "37" : "P",
        "38" : "Ü",
        "39" : "+",
        "40" : "ENTER",
        "41" : "CAPS",
        "42" : "A",
        "43" : "S",
        "44" : "D",
        "45" : "F",
        "46" : "G",
        "47" : "H",
        "48" : "J",
        "49" : "K",
        "50" : "L",
        "51" : "Ö",
        "52" : "Ä",
        "53" : "#",
        "54" : "SHIFT",
        "55" : "<",
        "56" : "Y",
        "57" : "X",
        "58" : "C",
        "59" : "V",
        "60" : "B",
        "61" : "N",
        "62" : "M",
        "63" : ",",
        "64" : ".",
        "65" : "-",
        "66" : "RIGHT SHIFT",
        "67" : "CTRL",
        "68" : "WIN",
        "69" : "ALT",
        "70" : "SPACE",
        "71" : "ALT CTRL",
        "72" : "FN",
        "73" : "RCTRL",
    }

    let i = 0
    for (let tootlip of config.keysAndTooltips) {
        let id = indexToId[i]
        i++
        let value = tootlip[0]
        let func = tootlip[1]
        let el = document.getElementById(id)
        Object.assign(functions, {[value]: func})
        el.innerText = value
        if ((func != nofunction && func != "") && config.keysLightupWhenInUse) el.parentElement.style.backgroundImage = "var(--keyboard-gradient-set)"
    }

    const title1 = document.getElementById("news-title-1")
    const text1 = document.getElementById("news-text-1")
    const title2 = document.getElementById("news-title-2")
    const text2 = document.getElementById("news-text-2")

    title1.innerText = config.newsTitle1
    text1.innerText = config.newsText1
    title2.innerText = config.newsTitle2
    text2.innerText = config.newsText2

    const trailer_button = document.getElementById("trailer-button")
    const player_button = document.getElementById("player-button")
    const controls_button = document.getElementById("controls-button")
    const news_button = document.getElementById("news-button")
    const game_button = document.getElementById("game-button")
    const trailer_div = document.getElementById("trailer-div")
    const player_div = document.getElementById("player-div")
    const controls_div = document.getElementById("controls-div")
    const game_div = document.getElementById("game-div")
    const news_div = document.getElementById("news-div")

    trailer_button.childNodes[0].innerText = config.translations["Trailer"]
    player_button.childNodes[0].innerText = config.translations["Player"]
    controls_button.childNodes[0].innerText = config.translations["Controls"]
    game_button.childNodes[0].innerText = config.translations["Game"]
    news_button.childNodes[0].innerText = config.translations["News"]
    
    trailer_button.onclick = function () {
        setToAccentColor(trailer_button.childNodes[0])
        setToMainColor(player_button.childNodes[0])
        setToMainColor(controls_button.childNodes[0])
        setToMainColor(game_button.childNodes[0])
        setToMainColor(news_button.childNodes[0])
        trailer_div.style.transform = "translateX(0)"
        player_div.style.transform = "translateX(100%)"
        controls_div.style.transform = "translateX(200%)"
        news_div.style.transform = "translateX(300%)"
        game_div.style.transform = "translateX(400%)"
    }
    
    player_button.onclick = function () {
        hasInteractedWithNav = true
        setToMainColor(trailer_button.childNodes[0])
        setToAccentColor(player_button.childNodes[0])
        setToMainColor(controls_button.childNodes[0])
        setToMainColor(game_button.childNodes[0])
        setToMainColor(news_button.childNodes[0])
        trailer_div.style.transform = "translateX(-100%)"
        player_div.style.transform = "translateX(0)"
        controls_div.style.transform = "translateX(100%)"
        news_div.style.transform = "translateX(200%)"
        game_div.style.transform = "translateX(300%)"
    }
    
    controls_button.onclick = function () {
        hasInteractedWithNav = true
        setToMainColor(trailer_button.childNodes[0])
        setToMainColor(player_button.childNodes[0])
        setToAccentColor(controls_button.childNodes[0])
        setToMainColor(game_button.childNodes[0])
        setToMainColor(news_button.childNodes[0])
        trailer_div.style.transform = "translateX(-200%)"
        player_div.style.transform = "translateX(-100%)"
        controls_div.style.transform = "translateX(0)"
        news_div.style.transform = "translateX(100%)"
        game_div.style.transform = "translateX(200%)"
    }
    
    news_button.onclick = function () {
        hasInteractedWithNav = true
        setToMainColor(trailer_button.childNodes[0])
        setToMainColor(player_button.childNodes[0])
        setToMainColor(controls_button.childNodes[0])
        setToAccentColor(news_button.childNodes[0])
        setToMainColor(game_button.childNodes[0])
        trailer_div.style.transform = "translateX(-300%)"
        player_div.style.transform = "translateX(-200%)"
        controls_div.style.transform = "translateX(-100%)"
        news_div.style.transform = "translateX(0)"
        game_div.style.transform = "translateX(100%)"
    }

    game_button.onclick = function () {
        hasInteractedWithNav = true
        setToMainColor(trailer_button.childNodes[0])
        setToMainColor(player_button.childNodes[0])
        setToMainColor(controls_button.childNodes[0])
        setToMainColor(news_button.childNodes[0])
        setToAccentColor(game_button.childNodes[0])
        trailer_div.style.transform = "translateX(-400%)"
        player_div.style.transform = "translateX(-300%)"
        controls_div.style.transform = "translateX(-200%)"
        news_div.style.transform = "translateX(-100%)"
        game_div.style.transform = "translateX(0)"
    }



    switch (config.startPage) {
        case "trailer":
            if(config.enableTrailerPage) trailer_button.click()
            trailer_button.click()
            break;
        case "player":
            if(config.enablePlayerPage) player_button.click()
            else trailer_button.click()
            break;
        case "controls":
            if(config.enableControlsPage) controls_button.click()
            else trailer_button.click()
            break;
        case "game":
            if(config.enableGamePage)game_button.click()
            else trailer_button.click()
            break;
        case "news":
            if(config.enableNewsPage)news_button.click()
            else trailer_button.click()
            break;
        default:
            trailer_button.click()
            break;
    }

    if (!config.enableTrailerPage) {
        trailer_button.remove()
        document.getElementById("trailer-div").style.display = "none"
    }
    
    if (!config.enablePlayerPage) {
        player_button.remove()
        document.getElementById("player-div").style.display = "none"
    }
    
    if (!config.enableControlsPage) {
        controls_button.remove()
        document.getElementById("controls-div").style.display = "none"
    }
    
    if (!config.enableGamePage) {
        game_button.remove()
        document.getElementById("game-div").style.display = "none"
    }
    
    if (!config.enableNewsPage) {
        news_button.remove()
        document.getElementById("news-div").style.display = "none"
    }    

    const audio = document.getElementById("audio-player")
    const slider = document.getElementById("volume-slider")
    const play = document.getElementById("play-button")
    const playSvg = document.getElementById("play-svg")
    const pauseSvg = document.getElementById("pause-svg")
    audio.volume = 0.05
    if(config.enableAudioplayer) {
        if(config.audioplayerAutoplay) audio.play()
        else {
            audio.pause()
            pauseSvg.style.animation = "flyOut 0.1s linear 0s 1 forwards"
            playSvg.style.animation = "flyIn 0.1s linear 0s 1 forwards"
        }
    }
    
    else document.getElementById("audio-div").remove()
    
    slider.oninput = function volumeSlider() {
        audio.volume = slider.value/100
    }
    
    play.onclick = function playButton() {
        if(audio.paused) {
            audio.play()    
            pauseSvg.style.animation = "flyOutReverse 0.1s linear 0s 1 forwards"
            playSvg.style.animation = "flyInReverse 0.1s linear 0s 1 forwards"
        } else {
            audio.pause()
            pauseSvg.style.animation = "flyOut 0.1s linear 0s 1 forwards"
            playSvg.style.animation = "flyIn 0.1s linear 0s 1 forwards"
        }
    }
    
    const rgbgetter = document.getElementById("rgbgetter")
    const rgbgetter_svg = document.getElementById("rgbgetter-svg")
    let rgb = false
    let rgb_inter = null
    const originalAccentColor = root.style.getPropertyValue("--accent-color")


    root.style.setProperty("--accent-color-triplet", originalAccentColor)
    if (!config.RGBMODE) {
        rgbgetter.remove()
    }

    function accentToRGB() {
        root.style.setProperty("--accent-color", getComputedStyle(rgbgetter).color)
    }

    rgbgetter.onclick = function rgbGetter() {
        if (config.RGBMODE) {
            rgbgetter_svg.style.animation = "circle 0.1s linear 0s 1"
            if (!rgb) {
                rgb = true
                rgb_inter = setInterval(accentToRGB, 1000/config.RGBFPS)
            } 
            else {
                rgb = false
                clearInterval(rgb_inter)
                root.style.setProperty("--accent-color", originalAccentColor)
            }
        }
    }
    
    
    const youtubeEmbed = "https://www.youtube.com/embed/" + config.youtubeID + "?playlist=" + config.youtubeID + "&autoplay=" + config.ytMuteAndAutoplay + "&mute=" + config.ytMuteAndAutoplay + "&loop=" + config.ytLoop + "&controls=0&rel=0&modestbranding=0&disablekb=1"
    let  youtubeVideo = document.getElementById("yt-video")
    let mp4Video = document.getElementById("mp4-video")
    if(config.useMP4){ 
        youtubeVideo.remove()
        if(config.mp4autoplay) mp4Video.setAttribute("autoplay","")
        if (config.mp4mute) mp4Video.volume = 0
        else mp4Video.volume = config.mp4Volume/100
    } else {
        youtubeVideo.src = youtubeEmbed
        mp4Video.remove()
    }

    const numberOfBackgrounds = 9
    let backgrounds = []
    for (let i = 1; i <= numberOfBackgrounds-imgErrors; i++) {
        backgrounds.push(document.getElementById("background-" + i))
    }
    
    function fadeout(el) {
        el.style.zIndex = -2
        el.style.animation = "fadeout " + config.bgFadeDuration + "ms 1s linear 0s 1 forwards"
    }
    
    let first_fadein = true
    function fadein(el) {
        if(first_fadein) first_fadein = false
        else {
            el.style.zIndex = -1
            el.style.animation = "fadein " + config.bgFadeDuration + "ms linear 0s 1 forwards"
        }
        setTimeout(fadeout,config.bgInterval,el)
    }
    
    let currentBackgroundIndex = -1
    function changeBackground() {

        currentBackgroundIndex++
        let currentBackground = backgrounds[currentBackgroundIndex]
        fadein(currentBackground)
        if(currentBackgroundIndex == backgrounds.length-1) {
            currentBackgroundIndex = -1
        }
        setTimeout(changeBackground,config.bgInterval)
    }
    
    let backgroundsDiv = document.getElementById("backgrounds")
    let backgroundVideo = document.getElementById("background-video")
    if(config.useVideoAsBackground) {
        backgroundsDiv.remove()
        backgroundVideo.style.filter = "blur(" + config.backgroundBlur/10 + "vh)"
    }
    else {
        backgroundVideo.remove()
        backgroundsDiv.style.filter = "blur(" + config.backgroundBlur/10 + "vh)"
        changeBackground()
    }
    
    if(!config.enableTrailer) document.getElementById("trailer-video").remove()
    
    //fix bug where background changes are instant after one cycle
    // also add small movement


    if(!config.showIdCard) document.getElementById("id-card").remove()

    if(!config.showServername) document.getElementById("server-greeting").remove()
    if(!config.showPlayername) document.getElementById("player-greeting").remove()
    if(!config.showMoney)document.getElementById("money").remove()

    playernameDisplay = document.getElementById("playername")
    firstnameDisplay = document.getElementById("firstname")
    lastnameDisplay = document.getElementById("lastname")
    sexDisplay = document.getElementById("sex")
    birthdateDisplay = document.getElementById("birthdate")
    nationalityDisplay = document.getElementById("nationality")
    lsidDisplay = document.getElementById("lsid")
    jobDisplay = document.getElementById("job")
    gangDisplay = document.getElementById("gang")
    servernameDisplay = document.getElementById("servername")
    document.getElementById("servername-value").innerText = config.translations["Servername"]

    playernameDisplay.innerText = config.translations["Hello"]
    firstnameDisplay.innerText = config.translations["Firstname"] + ":"
    lastnameDisplay.innerText = config.translations["Lastname"] + ":"
    sexDisplay.innerText = config.translations["Sex"] + ":"
    birthdateDisplay.innerText = config.translations["Birthdate"] + ":"
    nationalityDisplay.innerText = config.translations["Nationality"] + ":"
    lsidDisplay.innerText = config.translations["LS-ID"] + ":"
    jobDisplay.innerText = config.translations["Job"] + ":"
    gangDisplay.innerText = config.translations["Gang"] + ":"
    servernameDisplay.innerText = config.translations["Welcome to"]

    



/*     playernameValue = document.getElementById("playername-value")
    firstnameValue = document.getElementById("firstname-value")
    lastnameValue = document.getElementById("lastname-value")
    sexValue = document.getElementById("sex-value")
    birthdateValue = document.getElementById("birthdate-value")
    nationalityValue = document.getElementById("nationality-value")
    lsidValue = document.getElementById("lsid-value")
    cashValue = document.getElementById("cash-value")
    bankValue = document.getElementById("bank-value")
    jobValue = document.getElementById("job-value")
    jobgradeValue = document.getElementById("jobgrade-value")
    gangValue = document.getElementById("gang-value")
    ganggradeValue = document.getElementById("ganggrade-value")

    playername = window.nuiHandoverData.playername
    serverAddress = window.nuiHandoverData.serverAddress
    

    playernameValue.innerText = playername
    firstnameValue.innerText = ""
    lastnameValue.innerText = ""
    sexValue.innerText = ""
    birthdateValue.innerText = ""
    nationalityValue.innerText = ""
    lsidValue.innerText = ""
    if (config.currencyBeforeValue) {
        cashValue.innerText = config.translations["$"] + "0"
        bankValue.innerText = config.translations["$"] + "0"
    } else {
        cashValue.innerText = "0" + config.translations["$"]
        bankValue.innerText = "0" + config.translations["$"]
    }
    jobValue.innerText = "Unemployed"
    jobgradeValue.innerText = ""
    gangValue.innerText = "No Gang affiliation"
    ganggradeValue.innerText = "" */
})
