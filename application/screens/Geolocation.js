import React, { Component } from 'react';
import {View, Alert, Text, StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class Geolocation extends Component {

    static navigationOptions = {
        title: 'Geolocalización'
    };
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    myUbication: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {

    //console.log(mapRegion);
    this.setState({ mapRegion });


  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
     });
   } else {
     this.setState({ hasLocationPermissions: true });
   }

   let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    //Agregamos la ubicación para el PIN
    this.setState({myUbication: { latitude: location.coords.latitude, longitude: location.coords.longitude }});
   
  };

  render() {

    //let lat = this.state.mapRegion.latitude;
    //let lng = this.state.mapRegion.longitude;
    let mm = this.state.myUbication;
    //var my_lat;
    //var my_lon;

    var my_lat = 19.363900;
    var my_lon = -99.202020;

    try{
        console.log("Arranque mapa "+JSON.stringify(mm.latitude));
        my_lat = JSON.stringify(mm.latitude);
        my_lon = JSON.stringify(mm.longitude);

    } catch (err){
        console.log("error en el mapa "+err);
    }

    
    return (
      <View style={styles.container}>
        { /* <Text style={styles.paragraph}>
          Pan, zoom, and tap on the map!
        </Text> */}
        
        {
          this.state.locationResult === null ?
          <Text>Geolocaliza</Text> :
          this.state.hasLocationPermissions === false ?
            <Text>Sin permisos localizacion.</Text> :
            this.state.mapRegion === null ?
            <Text>Map region doesn't exist.</Text> :
            <MapView
              style={{ alignSelf: 'stretch', height: Dimensions.get('window').height,
    width: Dimensions.get('window').width  }}
              region={this.state.mapRegion}
              onRegionChange={this._handleMapRegionChange}
            >
            <MapView.Marker
                key={1}
                //coordinate={{latitude: 52.36, longitude: 4.88}}
                coordinate={{latitude: my_lat, longitude: my_lon }}
                title={"DRIVE MX"}
                description={"Ubicación Actual"}
                image={require('../../assets/geo.png')}
            />
            </MapView>
        }
        
        
        { /* <Text>
          "ssx"
        </Text> */ }
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});