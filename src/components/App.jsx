class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [], // change back to empty array
      currentVideo: {} // change back to empty object
    }
    this.updateState = this.updateState.bind(this);
    
  }

  handleSearch(event) {
    let options = {
      key: window.YOUTUBE_API_KEY,
      query: event.target.value,
      max: 5
    };

    var lazySearch = _.debounce(this.props.searchYoutube, 500);
    lazySearch(options, this.updateState);
  }

  selectVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  updateState(data) {
    this.setState({
      videos: data,
      currentVideo: data[0]  
    })
  }
  
  componentDidMount() {
    let options = {
      key: window.YOUTUBE_API_KEY,
      query: 'cats',
      max: 5
    };
  
    this.props.searchYoutube(options, this.updateState);
  }

  render() {
    if (this.state.videos.length > 0) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><Search handleSearch={this.handleSearch.bind(this)}/></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><VideoPlayer video={this.state.currentVideo} /></div>
            </div>
            <div className="col-md-5" >
              <div><VideoList selectVideo={this.selectVideo.bind(this)} videos={this.state.videos}/></div>
            </div>
          </div>
        </div>);
    } else {
      return (<div></div>)
    }
    
  }

}
  


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;