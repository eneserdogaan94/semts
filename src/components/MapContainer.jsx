// Map.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '50%',
      height: '50%',
    };

    return (
      <div className="border-t border-white">
      <div className="flex justify-center w-full h-screen text-center">
      <Map
        google={this.props.google}
        zoom={20}
        style={mapStyles}
        initialCenter={{ lat: 39.789685, lng: 30.490121 }} // Set the initial center of the map
      >
        <Marker position={{ lat: 39.789685, lng: 30.490121 }}
         labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}} />
      </Map>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAL81D3B_1pvHJmJVKja_pv25GEYhteQOU' // Replace with your actual API key
})(MapContainer);