// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor() {
    this.gif = new GifDisplay();

    this.playButton = new PlayButton();

    this.audio = new AudioPlayer();

    this.fetchData();
    
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  fetchData(){
    const songSelector = document.querySelector('#song-selector');
    let option = null;
    fetch("https://fullstackccu.github.io/homeworks/hw4/songs.json")
    .then(function(response) {
      return response.json();
    })
    .then(function (json) {
        console.log(Object.getOwnPropertyNames(json));
        let name = Object.getOwnPropertyNames(json);
        for(let j=0;j<name.length;j++){
          option = document.createElement('option');
          option.value = json[name[j]].songUrl;
          option.textContent = name[j];
          songSelector.appendChild(option);
        }
    })
    .catch(err =>{console.log(err.text())});
  }
  musicDisplay(){
    const music = document.querySelector('#music');
    const display = document.createElement('div');
    display.classList.add('display');
    const screen = document.createElement('div');
    screen.classList.add('screen');
    const playScreen = document.createElement('div');
    playScreen.classList.add('playScreen');
    const playButton = document.createElement('div');
    playButton.classList.add('playButton');
    music.appendChild(display);
    display.appendChild(screen);
    display.appendChild(playScreen);
    playScreen.appendChild(playButton);
  }
  // TODO(you): Add methods as necessary.
}
