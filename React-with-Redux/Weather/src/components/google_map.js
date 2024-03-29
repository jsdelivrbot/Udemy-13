import React, { Component } from 'react';

class GoogleMap extends Component {
  //componentDidMount is a react lifecycle function
  //called immediately when the component shows in the DOM
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref='map' />; //this.refs.map returns this div
  }
}

export default GoogleMap;
