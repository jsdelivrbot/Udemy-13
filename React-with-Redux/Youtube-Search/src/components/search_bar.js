import React, { Component } from 'react';
//const Component = React.Component;

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { term: '' };
  // }
  state = {
    term: ''
  }
  // onInputChange(event) {
  //   this.setState({term: event.target.value});
  // }
  //
  // render() {
  //   return <input onChange={this.onInputChange}/>
  // }

  InputChange = (term) => {
    this.setState({term: term});
    this.props.onSearchChange(term);
  }

  render() {
    return(
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.InputChange(event.target.value)}/>
      </div>
    );
  }
}

export default SearchBar;
