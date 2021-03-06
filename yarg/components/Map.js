import React from 'react';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';
import Axios from 'axios';


export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 29.9774654,
        longitude: -90.0758853,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      treasures: [],
      riddles: [],
    }
    this.onRegionChange = this.onRegionChange.bind(this);
    this.getTreasuresAndRiddles = this.getTreasuresAndRiddles.bind(this);
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  getTreasuresAndRiddles(result) {
    const scope = this;
    Axios.get(`http://ec2-3-17-167-48.us-east-2.compute.amazonaws.com/treasures/zipcode?zipcode=${result.nativeEvent.coordinate.zipcode}`).then((treasuresResult) => {
      Axios.get(`http://ec2-3-17-167-48.us-east-2.compute.amazonaws.com/riddles/zipcode?zipcode=${result.nativeEvent.coordinate.zipcode}`).then((riddlesResult) => {
        scope.setState({
          treasures: treasuresResult.data,
          riddles: riddlesResult.data,
        });
      }).catch((err) => {

      });
    }).catch((err) => {
      
    });
  }

  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onUserLocationChange={this.getTreasuresAndRiddles}
        >
          <Marker coordinate={this.state.region}/>
        </MapView>
    );
  }
}