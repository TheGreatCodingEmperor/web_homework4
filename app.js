// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);
    
    const musicElement = document.querySelector('#music');
    this.music = new MusicScreen();

    //this.music.musicDisplay();
    this.musicDisplay = this.music.musicDisplay.bind(this);
    this.onSubmit();

  
  }
  onSubmit(){
    let musicDisplay = this.musicDisplay;
    const submit = document.querySelector('#submit');
    submit.addEventListener('pointerdown',function(){
      musicDisplay();
    });;
    submit.addEventListener('keypress', function (e) {
      var key = e.keyCode;
      if (key === "Enter") { // 13 is enter
        // code for enter
        musicDisplay();
      }
  });
  }
  // TODO(you): Add methods as necessary.
}
 