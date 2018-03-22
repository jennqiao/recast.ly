var searchYouTube = (options, callback) => {
  var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&videoEmbeddable=true&key=${options.key}`;
  $.get(url, callback)
};

window.searchYouTube = searchYouTube;


// window.YOUTUBE_API_KEY


// https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=5&q=coding&videoEmbeddable=true&_h=1&ƒ
// NOTE TO SELVES: Removed #p to make mocha test work