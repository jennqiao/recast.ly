var searchYouTube = (options, callback) => {
  var url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=${options.max}&q=${options.query}&videoEmbeddable=true&key=${options.key}`;
  $.get(url, data => callback.call(null, data.items) )
};

window.searchYouTube = searchYouTube;