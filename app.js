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
    this.onKick = this.onKick.bind(this);

    this.count = 1;
    this.fore_back = true;

    this.onSubmit();

  }
  onSubmit() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.menuElement.classList.add('hide');
      this.musicElement.classList.remove('hide');
      const input = document.querySelector('#query-input');
      console.log(input.value);
      this.music.gif.fetchGifs(input.value);

      const selected = document.querySelector('#song-selector');
      console.log(selected.value);
      this.music.audio.setSong(selected.value);
      this.music.audio.setKickCallback(this.onKick);

    });
  }
  onKick() {
    console.log('kick');
    let gifs = this.music.gif.getGifs();
    let screen;
    let hide;
    if(this.fore_back){
      screen = document.querySelector('#back');
      hide = document.querySelector('#fore');
    }
    else{
      screen = document.querySelector('#fore');
      hide = document.querySelector('#back');
    }
    this.fore_back = !this.fore_back;
    screen.classList.remove('hide');
    hide.classList.add('hide');
    hide.style.backgroundImage = 'url(' + gifs[this.count] + ')';
    this.count = (this.count + 1) % 25;
  }
  // TODO(you): Add methods as necessary.
}
