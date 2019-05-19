// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(menuElement) {
    this.menuElement = menuElement;

    const theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    const input = document.querySelector('#query-input');
;
    function getRandom(x){
      return Math.floor(Math.random()*x);
    };
    this.chooseTheme =  theme[getRandom(theme.length)]
    input.placeholder = this.chooseTheme;
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  // TODO(you): Add methods as necessary.
}
