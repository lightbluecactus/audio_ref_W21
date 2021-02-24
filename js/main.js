// create a module for our project
(() => {
  console.log("javascript is linked up");

  let theAudio = document.querySelector("audio"),
      playButton = document.querySelector("button"),
      albumArt = document.querySelectorAll(".track-ref");

  function playTrack(){
    // grab the value of the custom data attribute
    let targetTrack = this.dataset.trackref;
    // load the new audio source
    theAudio.src = `audio/${targetTrack}.mp3`;

    theAudio.volume = 0.5; //50%
    // load and play the new source
    theAudio.load();
    theAudio.play();
  }

  for (cover of albumArt){
    debugger;
    cover.addEventListener("click", playTrack);
  }

})()
