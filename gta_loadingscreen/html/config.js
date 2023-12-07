const config = { //Dont touch

//These are the settings for the interactive parts of the loading screen. To change font, colors, sizes etc edit the css file.

//General settings
manualExit : true, //If set to true, the loadingscreen has to be exited manually and displays a notification that tells the player to press the exit key. If set to false, the notification wont be displayed and it will exit automatically after the loading is done.
exitKey : "g", //Key to exit the loadingscreen
startPage : "trailer", //Can be "trailer", "player", "controls" or "game". This is the page that will be shown when the loadingscreen is loaded. Default is "trailer".
enableAudioplayer : true, //Enables the background audio. If set to false, the audio wont be played.
audioplayerAutoplay : true, //If set to true, the audio will start playing automatically. If set to false, the audio will be paused at the beginning.
enableDiscordWidget : false, //Enables the discord widget. If set to false, the discord widget wont be displayed.
discordWidgetId : "", //Required to enable your discord widget. You can find your widget id in your discord server settings under "Widget". Just copy the server id and paste it here.
enableLoadingNotification : true, //Enables the loading notification that tells the player to press the exit key. If set to false, the loading notification wont be displayed.
useVideoAsBackground : false, //If set to true, the "/html/assets/bg.mp4" video will be used as background. If set to false, the background will be a slideshow of images. In "html/assets/img/bg". 
backgroundBlur : 5, //Sets the blur of the background. 0 = no blur. I recommend not going over 30.
// A nice effect is to disable the trailer below and use the trailer as a background video with 0 blur.
//Page settings
enableTrailerPage : true, // Enables the Trailer page. If set to false, the trailer page wont be displayed.
enablePlayerPage : true, //Enables the Player page. If set to false, the player page wont be displayed.
enableControlsPage : true, //Enables the controls page. If set to false, the controls page wont be displayed.
enableGamePage : true, //Enables the game page. If set to false, the game page wont be displayed.
enableNewsPage : false, //Enables the news page. If set to false, the news page wont be displayed.

//Background settings
bgInterval : 10000, //The time each background is show before switching in ms (1000ms = 1s).
bgFadeDuration : 5000, //The time it takes to fade between backgrounds in ms (1000ms = 1s).

//Video/Trailer settings 
enableTrailer : true, //If set to true, the trailer will be displayed. Not recommended if you use a video as background.
useMP4 : false, //If set to true, the video will be played from "html/assets/video.mp4". If set to false, the video will be played from youtube. See settings below. Generally not recommend as players have to download the video first.
mp4autoplay : true, //If set to true, the video will start playing automatically. If set to false, the video will be paused at the beginning.
mp4mute : true, //If set to true, the video will be muted. If set to false, the video will be played with audio. If you dont mute the video I recommend disabeling the audio player in the general settings above.
mp4Volume : 15, //Sets the volume of the video (in %). 0 is muted and 100 is max volume.



//These setting only apply if you use the youtube video instead of your own               ↓↓↓↓↓↓↓↓↓↓↓
youtubeID : "QdBZY2fkU-0", //Add the videos ID like this: https://www.youtube.com/watch?v=dQw4w9WgXcQ --> dQw4w9WgXcQ. The id is the last part after "/watch?v=". (Playlists are also supported)
ytMuteAndAutoplay : 1, //1 = true, 0 = false ( Autoplay with audio is not supported by youtube, so you have to choose. For custom audios you can still replace the "audio.mp3" file in "/html/assets" or use mp4 an video)
ytLoop : 1, //1 = true, 0 = false (If the embedded youtube video loops)

//Player settings
showPlayername : true, //Shows the players name on the player screen
showServername : true, //Shows the servername on the player screen
showMoney : true, //Shows the players money on the player screen
currencyBeforeValue : true, //If set to true, the currency will be displayed before the value. If set to false, the currency will be displayed after the value. Example: $1000 or 1000€. Change the currency symbol in the translations list below..
showIdCard : true, //Shows the players ID card on the player screen

//Controls settings
keysLightupWhenInUse : true, //If set to true, the keys will have another color if their Tooltip is not nofunction or empty (aka "").

//News settings
//Content of the upper news section
newsTitle1 : "Bennys in flames! Investigations underway.", //Title of the upper news section

//You can add the news storys text below in the newsText1 variable. Just make sure to use \ character at the end of each line in thrtext like this: "Your text here! \". If you dont want a linebreak, add "\" at the end of each line like ive done here.
newsText1 : "\
Following one of Los Santos worst droughts in history, the fire that spread at Bennys Original Motorworks at Power Street, was traced back to a lit cigarette igniting a pile of leaves. \
Police investigations are currently underway. Thanks to the fast response of the Los Santos Fire Department, the fire was extinguished before any structural damage occured. According to the owner of Bennys, the renovations should start soon. \
In the meantime you can visit the Los Santos Customs at Carcer Way and San Vitus Boulevard crossing for all your tuning needs. \
",

//Content of the lower news section
newsTitle2 : "Your Title here!", //Title of the lower news section

//You can add the news storys text below in the newsText2 variable. Just make sure to use the \ character at the end of each line  text  this: "Your text here! \"
newsText2 : " \
Your News Here! \
",


//RGB Madness
 RGBMODE : true, //Enables the secret RGB Button at the very bottom right corner (hover over it to see). If pressed, the accent color will keep shifting through rgb values.
 RGBFPS : 30, //Updates per second of the colorvalue. You really shouldnt go above 30 but you can if you want to. Because RGB surely even makes loading faster, right?


//Translation
 translations : { //You can change the translations here. The keys (left value) are the messages they replace on the screen, and the values (right, after ":") are the translations that will be displayed.
    // DONT edit the left value! ONLY edit the right value!
    //Navbar  
    "Trailer" : "Trailer",
    "Player" : "Player",
    "Controls" : "Controls",
    "Game" : "Game",
    "News" : "News",
    
    //Player Screen
    "Hello" : "Hello",           
    "Welcome to" : "Welcome to",     //You can leave the left right value blank, if you want to remove this message. Example: "Welcome to" : "".
    "Servername" : "Your Servername Here",     //Same as above
    "$" : "$",                       //Change the currency. Change currencyBeforeValue in the settings above to change the position of the currency symbol.
    
    //Id card (player screen)
    "Firstname" : "Firstname",
    "Lastname" : "Lastname",
    "Sex" : "Sex",
    "Male" : "Male",
    "Female" : "Female",
    "Birthdate" : "Birthdate",
    "Nationality" : "Nationality",
    "LS-ID" : "LS-ID",               //This is the citizen ID. To make it RP friendly I changed it to LS-ID but you can name whatever you want.
    "Job" : "Job",
    "Gang" : "Gang",

    //Controls Screen (To change the keyboard text go to "keysAndTooltips" below)
    "Press a button" : "Press a button",            //The text the tooltip displays before any keys are pressed
    "To see what it does" : "To see what it does",  //The text the tooltip displays before any keys are pressed
    "No Function" : "No Function",
    "Button" : "Button",

    //loading bar
    "Press" : "Press",          //The text that will be displayed when the loading is done
    "to exit" : "to exit",
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\\
} //Dont touch this
let nofunction = config.translations["No Function"] //Dont touch
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\\

//Keyboard keys and tooltips:  
config.keysAndTooltips = [      //You can change the keys and tooltips here. The keys (left value) are the keys that will be displayed on the screen, and the values (right, after the ",") are the tooltips that will be displayed.
    ["ESC", "Pausemenu"],       //You can edit both values to change the respective key and tooltips.
    ["F1" ,"Phone"],            //You can use nofunction to automatically use your translation as entered above. You can also leave it empty to display nothing.
    ["F2" ,"Radialmenu"],
    ["F3" ,nofunction],
    ["F4" ,nofunction],
    ["F5" ,nofunction],
    ["F6" ,nofunction],
    ["F7" ,nofunction],
    ["F8" ,nofunction],
    ["F9" ,nofunction],
    ["F10" ,nofunction],
    ["F11" , nofunction],
    ["F12" , nofunction],
    ["^" , nofunction],
    ["1" , "Use Item in Slot 1"],
    ["2" , "Use Item in Slot 2"],
    ["3" , "Use Item in Slot 3"],
    ["4" , "Use Item in Slot 4"],
    ["5" , "Use Item in Slot 5"],
    ["6" , "Use Item in Slot 6"],
    ["7" , "Use Item in Slot 7"],
    ["8" , "Use Item in Slot 8"],
    ["9" , "Use Item in Slot 9"],
    ["0" , "Use Item in Slot 10"],
    ["?" , nofunction],
    ["´" , nofunction],
    ["RETURN" , nofunction],
    ["TAB" , "Inventory"],
    ["Q" , nofunction],
    ["W" , "Move Forward"],
    ["E" , "Interact"],
    ["R" , "Reload"],
    ["T" , "Chat"],
    ["Z" , nofunction],
    ["U" , nofunction],
    ["I" , nofunction],
    ["O" , nofunction],
    ["P" , nofunction],
    ["Ü" , nofunction],
    ["+" , nofunction],
    ["ENTER" , nofunction],
    ["CAPSLOCK" , nofunction],
    ["A" , "Move Left"],
    ["S" , "Move Backward"],
    ["D" , "Move Right"],
    ["F" , "Enter/ Exit Vehicle"],
    ["G" , "Engine On/Off"],
    ["H" , nofunction],
    ["J" , nofunction],
    ["K" , nofunction],
    ["L" , nofunction],
    ["Ö" , nofunction],
    ["Ä" , nofunction],
    ["#" , nofunction],
    ["SHIFT" , "Sprint"],
    ["<" , nofunction],
    ["Y" , nofunction],
    ["X" , "Hands Up"],
    ["C" , nofunction],
    ["V" , nofunction],
    ["B" , "Point"],
    ["N" , nofunction],
    ["M" , nofunction],
    ["," , nofunction],
    ["." , nofunction],
    ["-" , nofunction],
    ["RIGHT SHIFT" , nofunction],
    ["CTRL" , "Sneak"],
    ["WIN" , nofunction],
    ["ALT" , "Eye menu"],
    ["SPACE" , "Jump"],
    ["ALT CTRL" , nofunction],
    ["FN" , nofunction],
    ["R CTRL" , nofunction]
]

//Dont touch this
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\\
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("config-div").innerText = JSON.stringify(config)
})