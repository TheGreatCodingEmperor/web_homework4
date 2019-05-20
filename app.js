// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    this.menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(this.menuElement);
    
    this.musicElement = document.querySelector('#music');
    this.music = new MusicScreen();

    this.musicElement.classList.add('hide');
    this.onSubmit();
  
  }
  onSubmit(){
    const form = document.querySelector('form');
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      this.menuElement.classList.add('hide');
      this.musicElement.classList.remove('hide');
      const input = document.querySelector('#query-input');
      console.log(input.value);
      this.music.gif.getGifs(input.value);
      this.music.gif.playGifs();
      const selected = document.querySelector('#song-selector');
      console.log(selected.value);
      this.music.audio.setSong(selected.value);
    });
  }
  // TODO(you): Add methods as necessary.
}
 