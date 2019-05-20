// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    this.button = document.querySelector('.playButton');
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  onPause(){
    this.button.classList.remove('pause');
    this.button.classList.add('play');
  }
  onPlay(){
    this.button.classList.remove('play');
    this.button.classList.add('pause');
  }
  // TODO(you): Add methods as necessary.
}
