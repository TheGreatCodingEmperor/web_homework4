// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(theme) {
    this.gifUrls = [];
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  async getGifs(theme){
    let key = "s4Q0fPBME3zV327sKLR3irm8cNDXskC5";
    let q = theme;
    let limit = 25;
    let rating = "g";
    let array = [];
    await fetch("https://api.giphy.com/v1/gifs/search?q="+q+"&limit="+limit+"&rating="+rating+"&api_key="+key)
    .then(response=>{return response.json();})
    .then(function(json){;
      for(let j in json.data){
        let url = json.data[j].images.downsized.url;
        array.push(url);
      }
      console.log(array);
    });
    this.gifUrls = array;
  }

  // TODO(you): Add methods as necessary.
}
