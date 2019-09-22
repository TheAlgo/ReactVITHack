import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker,Polyline } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  path = [
    { lat: 12.9703541, lng: 79.1585241 },
    { lat: 12.9704067, lng: 79.1585241 },
    { lat: 12.970398,  lng: 79.1586365 }
  ];

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
         
        </InfoWindow>
       
        <Polyline path={this.path} options={{ strokeColor: "#0000FF " }} />
          {/* <Polyline path={this.path1} options={{ strokeColor: "#FF00FF " }} /> */}
        
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
