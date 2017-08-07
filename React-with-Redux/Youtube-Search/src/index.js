import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC3wVr8IvM9_-jZZ6p4dSWDde3yp4ttp0I';
const container = document.querySelector('.container');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('billborad');
  }

  videoSearch  = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    })
  }

  render() {
    //to update the search result every 300ms, using debounce from lodash
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, container)
